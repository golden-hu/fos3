//关务 - 报关
Fos.CustomsGrid = function(bizClass) {
	var queryParams=[];
	queryParams[queryParams.length]=new QParam({key:'consBizType',value:BT_G,op:1});
	queryParams[queryParams.length]=new QParam({key:'consBizClass',value:bizClass,op:1});
	var bp={mt:'xml',xml:FOSX(QTX(queryParams))};
	
	var store = new Ext.data.GroupingStore({
   		url: SERVICE_URL+'?A=CONS_X',baseParams:bp,
    	reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'FConsign',idProperty:'consId'}, FConsign),remoteSort:true,
    	sortInfo:{field:'consDate', direction:'DESC'}});    	
	
	this.reset=function(){
		store.baseParams=bp;
		store.reload({params:{start:0,limit:C_PS}});
	};
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true});	
	var c1=new Ext.grid.RowNumberer();    
    var cm=new Ext.grid.ColumnModel({columns:[
        c1,
        {header:'',dataIndex:'consStatusLock',menuDisabled:true,fixed:true,width:25,renderer:function(v){
            if(v==1) return '<div class="locked"></div>'; else return '';
        }},
        {header:C_STATUS,width:60,dataIndex:"consStatus",renderer:getTRADE_S},
        {header:C_CONS_NO,width:120,dataIndex:"consNo"},
        {header:C_BOOKER,width:200,dataIndex:"custName"},
        {header:C_CONS_DATE,width:70,dataIndex:"consDate",renderer:formatDate},
        {header:C_CONS_CLOSE_DATE,dataIndex:"consCloseDate",renderer:formatDate},
      	{header:C_POL,width:100,dataIndex:"consPolEn"},
   		{header:C_POD,width:100,dataIndex:"consPodEn"},
        {header:C_VESS,width:120,dataIndex:"vessName"},
        {header:C_VOYA,width:60,dataIndex:"voyaName"},
        {header:C_PACKAGES,width:60,dataIndex:"consTotalPackages"},
        {header:C_GW_S,width:60,dataIndex:"consTotalGrossWeight"},
        {header:C_M_BL_NO,width:120,dataIndex:"consMblNo"},
        {header:C_CUSTOMS_DECLEARATION_NO,width:120,dataIndex:"consCustomsDeclearationNo"},
        {header:C_BIZ_COMPANY,width:200,dataIndex:"consCompany"},
        {header:C_OPERATOR,width:80,dataIndex:"consOperatorName"},
        {header:C_SALES,width:80,dataIndex:"consSalesRepName"}
        ],
		defaults: {sortable: true}});
	
    showCustomsConsign = function(p){
    	var t = T_MAIN.getComponent('P_CONS_'+p.get("id"));
    	if(t){
    		T_MAIN.setActiveTab(t);
    	} 
    	else{
    		t = new Fos.CustomsDeclearTab(p,store);
    		T_MAIN.add(t);
    		T_MAIN.setActiveTab(t);
    	}
    };
    
	this.newConsign = function(){
		var c = Fos.newConsign(bizClass,BT_G,'');
		showCustomsConsign(c);
	};
	this.editConsign = function(){
		var b=sm.getSelected();
		if(b) 
			showCustomsConsign(b); 
		else 
			XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.task = function(){
		var b=sm.getSelected();
		if(b){
			var w=new Fos.TaskWin(b);
			w.show();
		}
		else 
			XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	
	this.removeConsign = function(){
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var b = false;
               	for(var i=0;i<a.length;i++){if(a[i].get('consStatus')!='0'){b=true;break;}}
               	if(b) XMG.alert(SYS,M_CONS_CONFIRMED);
               	else {
               		var xml = SMTX4R(sm,'FConsign','consId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
					success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}
           }});
		}
       	else XMG.alert(SYS,M_R_P);
    };
    
    setQueryParams=function(a){
    	queryParams = a;
    };
	this.search = function(){
		var w=new Fos.CustomsConsLookupWin(store,setQueryParams,bizClass);
		w.show();
	};
	
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){
		if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
	this.fastSearch=function(){
		var consNo=kw.getValue();
		if(!consNo){XMG.alert(SYS,M_INPUT_BIZ_NO,function(b){kw.focus();});return;};
     	var a=[];     	
     	a[a.length]=new QParam({key:'consBizType',value:BT_G,op:EQ});
     	
     	var c=consNo.indexOf(',');
		var b=consNo.indexOf('..');
     	if(c>=0){
			a[a.length]=new QParam({key:'consNo',value:consNo,op:IN});
		}
		else if(b>=0){
			var ra=consNo.split('..');
			a[a.length]=new QParam({key:'consNo',value:ra[0],op:GE});
			a[a.length]=new QParam({key:'consNo',value:ra[1],op:LE});
		}
		else
 			a[a.length]=new QParam({key:'consNo',value:consNo,op:LI});
     	queryParams = a;
     	store.baseParams={mt:'xml',xml:FOSX(QTX(queryParams))};
     	store.reload({params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);
     		}});
	};
	this.exp1=function(){		
		if(queryParams.length>0){
			var a = queryParams;
			var qa = [];
			for(var i=0;i<a.length;i++){
				qa[i] = {key:a[i].get('key'),op:a[i].get('op'),value:a[i].get('value')};
			}
			EXPC('CUSTOMS_DOC_STAT','&mt=JSON&xml='+Ext.util.JSON.encode(FOSJ(QTJ(qa))));
		}
		else{		
			EXPC('CUSTOMS_DOC_STAT','&mt=JSON&start=0&limit=500');
		}		
	};
	
	this.exp2=function(){		
		if(queryParams.length>0){
			var a = queryParams;
			var qa = [];
			for(var i=0;i<a.length;i++){
				qa[i] = {key:a[i].get('key'),op:a[i].get('op'),value:a[i].get('value')};
			}
			EXPC('CONS_LIST','&mt=JSON&xml='+Ext.util.JSON.encode(FOSJ(QTJ(qa))));
		}
		else{		
			EXPC('CONS_LIST','&mt=JSON&start=0&limit=500');
		}		
	};
	
	var m=M1_G+M3_CONS;
	
	var b1={text:C_ADD,disabled:NR(m+F_M),iconCls:'add',scope:this,handler:this.newConsign};
	var b3={text:C_EDIT,disabled:NR(m+F_V),iconCls:'option',handler:this.editConsign};
	var b4={text:C_REMOVE,disabled:NR(m+F_R),iconCls:'remove',handler:this.removeConsign};
	var b5={text:C_SEARCH,iconCls:'search',handler:this.search};	
	var b6={text:C_EXPORT,disabled:NR(m+F_E),iconCls:'print',scope:this,menu: 
		{items: [{text:C_CUSTOMS_STAT,scope:this,handler:this.exp1},{text:C_CUSTOMS_LIST,scope:this,handler:this.exp2}]}};	
	var b7={text:C_FAST_SEARCH,iconCls:'search',handler:this.fastSearch};	
	var b8={text:C_RESET,iconCls:'refresh',handler:this.reset};
			
    var tbs=[b1, '-',b3,'-',b4,'-',b5,'-',b6,'-',kw,b7,'-',b8,'-'];
       
	Fos.CustomsGrid.superclass.constructor.call(this, {
    id:'G_CONS_G_'+bizClass,iconCls:'grid',store: store,
    title:(bizClass=='I'?C_IMP_CUDE:C_EXP_CUDE)+C_CONS_LIST,header:false,loadMask:true,
	sm:sm,cm:cm,stripeRows:true,closable:true,
	listeners:{rowdblclick: function(grid, rowIndex, event){
			var c=grid.getSelectionModel().getSelected();
			if(c){showCustomsConsign(c);
		}}},
	tbar:tbs,
	bbar:PTB(store,C_PS)});	
    store.load({params:{start:0,limit:C_PS}});
};
Ext.extend(Fos.CustomsGrid, Ext.grid.GridPanel);

Fos.CustomsDeclearTab = function(p,store) {
    this.save = function(){
    	if(this.find('name','custName')[0].getValue()==''){
			XMG.alert(SYS,M_CUST_REQIRED,function(){this.find('name','custName')[0].focus();},this);return;};	
		if(!p.get('custId')){
			XMG.alert(SYS,M_CUST_MUST_PREDEFINED);return;};
		if(this.find('name','deptId')[0].getValue()==''){
			XMG.alert(SYS,M_DEPT_REQIRED,function(){this.find('name','deptId')[0].focus();},this);return;};	
		if(this.find('name','consSalesRepName')[0].getValue()==''){
			XMG.alert(SYS,M_SALES_REQIRED,function(){this.find('name','consSalesRepName')[0].focus();},this);return;};
		if(this.find('name','consOperatorName')[0].getValue()==''){
			XMG.alert(SYS,M_OPERATOR_REQIRED,function(){this.find('name','consOperatorName')[0].focus();},this);return;};
		
		if(VERSION==0&&txtSailDate.getValue()==''){
			XMG.alert(SYS,p.get('consBizClass')==BC_I?M_ETA_REQIRED:M_ETD_REQIRED,
				function(){txtSailDate.focus();},this);
			return;
		};
				
		var f = FConsign.prototype.fields;
		for (var i = 0; i < f.keys.length; i++) {
        	var fn = ''+f.keys[i];
        	var fc = this.find('name',fn);
        	if(fc!=undefined&&fc.length>0){
        		p.set(fn,fc[0].getValue());
        	}
   	 	}    	 	
   	 	var xml = RTX(p,'FConsign',FConsign);
   	 	
   	 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
			success: function(res){
				var c = XTR(res.responseXML,'FConsign',FConsign);
				var ra=p.get('rowAction');
				var f = FConsign.prototype.fields;
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};   				
				if(ra=='N'){
					var title=(p.get('consBizClass')=='I'?C_IMP:C_EXP)+C_CUSTOMS+'委托【'+p.get("consNo")+'】';
					this.setTitle(title);
					this.find('name','consNo')[0].setValue(p.get('consNo'));
					p.set('rowAction','M');
					store.add(p);
				}
				p.endEdit();
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
    };    
    this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatus:s},
		success: function(r){
			p.set('consStatus',s);
			p.set('version',p.get('version')+1);
			this.updateToolBar();
			XMG.alert(SYS,M_S);
		},
		failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
    };
        
    this.updateToolBar = function(){
		var tb=this.getTopToolbar();
		var s = p.get('consStatus'); 
		locked=p.get('consStatusLock')==1;
		if(tb.getComponent('TB_S')) tb.getComponent('TB_S').setDisabled(NR(m+F_M)||locked||disable);
    	if(tb.getComponent('TB_C')) tb.getComponent('TB_C').setDisabled(NR(m+F_M)||locked||disable||s!=0);
    	if(tb.getComponent('TB_CC')) tb.getComponent('TB_CC').setDisabled(NR(m+F_M)||locked||disable||s!=1);
    	if(tb.getComponent('TB_F')) tb.getComponent('TB_F').setDisabled(NR(m+F_M)||locked||disable||s!=1);
    	if(tb.getComponent('TB_M')) tb.getComponent('TB_M').setDisabled(NR(m+F_F)||locked||disable||p.get('consStatus')!=1||p.get('rowAction')=='N');
    	if(tb.getComponent('TB_R')) tb.getComponent('TB_R').setDisabled(NR(m+F_R)||locked||disable||s!=0||p.get('rowAction')=='N');
    	if(tb.getComponent('TB_CUDE')) tb.getComponent('TB_CUDE').setDisabled(p.get('rowAction')=='N');
    	if(tb.getComponent('TB_EXP')) tb.getComponent('TB_EXP').setDisabled(NR(m+M3_EXPE));
    	if(tb.getComponent('TB_DOC')) tb.getComponent('TB_DOC').setDisabled(NR(m+M3_DOC));
    	if(tb.getComponent('TB_ATT')) tb.getComponent('TB_ATT').setDisabled(NR(m+F_M));
    	if(tb.getComponent('TB_S_ATT')) tb.getComponent('TB_S_ATT').setDisabled(NR(m1+M3_ATTACH));
    	if(tb.getComponent('TB_U')) tb.getComponent('TB_U').setDisabled(NR(m+F_UL)||locked!=1);
    	
    };
    
    this.check=function(){this.updateStatus('1');};
    this.cancelCheck = function(){this.updateStatus('0');};
    this.finish=function(){this.updateStatus('2');};
    this.cancel=function()
    {XMG.confirm(SYS,M_CONS_CANCEL_C,function(btn)
    		{if(btn=='yes')
    			this.updateStatus('3');
    		},this);};
    this.del=function(){
    	if(p.get('consStatus')!='0')
       		XMG.alert(SYS,M_CONS_CONFIRMED);
       	else {
       		XMG.confirm(SYS,M_R_C,function(btn){
       			if(btn=='yes'){
       				p.set('rowAction','R');
               		var xml = RTX4R(p,'FConsign','consId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
						success: function(){
							store.remove(p);
							XMG.alert(SYS,M_S,function(){T_MAIN.remove('P_CONS_'+p.get('id'));});
						},
						failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
						xmlData:FOSX(xml)
					});
               	}
           });
       	}
    };
    
    this.unlock=function(){
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
    		params:{A:'CONS_U',consId:p.get('consId'),consStatusLock:0},
		success: function(r){
			p.set('consStatusLock',0);
			this.updateToolBar(p.get('consStatus'));
			
			XMG.alert(SYS,M_S);
			var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
					reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});
			sc.load({params:{consId:p.get('consId')},callback:function(r,o,s){
				if(s&&r.length>0){
					var c=r[0];
					p.beginEdit();					
					p.set('version',c.get('version'));
					p.endEdit();
					XMG.alert(SYS,M_S);
				}    						
			},scope:this});				
		},
		failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
    };
    this.showExp=function(){
    	var win = new Fos.ExWin(p);
    	win.show();
    };    
    this.showDoc=function(){
    	var win = new Fos.DocWin(p);
    	win.show();
    };    
    this.showAttach=function(){
    	var win = new Fos.AttachWin(p);
    	win.show();
    };    
    this.showSecurityAttach=function(){
    	var win = new Fos.SecurityAttachWin(p);
    	win.show();
    };
    this.showCude = function(){
    	var win = new Fos.CustomsWin(p);
    	win.show();    	
    };
    
    var locked=p.get('consStatusLock')==1;
    var disable=p.get('editable')==0;
    var m=getRM(p.get('consBizClass'),BT_G,'')+M3_CONS;
    var m1 = getRM(p.get('consBizClass'),BT_G,'');
    function saveShipper(shipperT){
    	var cushName = '';
    	if(shipperT==1) cushName = Ext.getCmp(p.get('consId')+'CONS_SHIPPER').getValue();
    	else if(shipperT==2) cushName = Ext.getCmp(p.get('consId')+'CONS_CONSIGNEE').getValue();
    	    	
    	if(!p.get('custId')){
    		XMG.alert(SYS,M_SELECT_CUST_FIRST);
    		return;
    	}
    	if(cushName!=''){
    		
    		var c = new CCustomerShipper({rowAction:'N',custId:p.get('custId'),cushType:shipperT,cushName:cushName});
    		var xml = RTX(c,'CCustomerShipper',CCustomerShipper);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
				params:{A:'CUSH_S'},
				success: function(res){XMG.alert(SYS,M_S);},
				failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
				xmlData:FOSX(xml)
			});
    	}
    };
    
    function selShipper(shipperT){
    	if(p.get('custId')){
    		var win = new  Fos.ShipperWin(p.get('custId'),shipperT,updateShipper);
        	win.show();
    	}
    	else
    		XMG.alert(SYS,M_SELECT_CUST_FIRST);
    }
    
    function updateShipper(shipperT,cushName){
    	if(shipperT==1) cushName = Ext.getCmp(p.get('consId')+'CONS_SHIPPER').setValue(cushName);
    	else if(shipperT==2) cushName = Ext.getCmp(p.get('consId')+'CONS_CONSIGNEE').setValue(cushName);
    };
    
    var bSaveShipper = new Ext.Button({text:'保存',handler:function(){saveShipper(1);}});
    var bSearchShipper = new Ext.Button({text:'选择',handler:function(){selShipper(1);}});
    var bSaveConsignee = new Ext.Button({text:'保存',handler:function(){saveShipper(2);}});
    var bSearchConsignee = new Ext.Button({text:'选择',handler:function(){selShipper(2);}});
    
    var txtConsMblNo = {fieldLabel:C_M_BL_NO,name:'consMblNo',value:p.get('consMblNo'),xtype:'textfield',anchor:'99%'};
    var txtConsHblNo = {fieldLabel:C_H_BL_NO,name:'consHblNo',value:p.get('consHblNo'),xtype:'textfield',anchor:'99%'};
    var txtVessName={fieldLabel:C_VESS,tabIndex:17,
    		name:'vessName',value:p.get('vessName'),xtype:'textfield',anchor:'99%'};
	var txtVoyage={fieldLabel:C_VOYA,tabIndex:18,
    		name:'voyaName',value:p.get('voyaName'),xtype:'textfield',anchor:'99%'};
	
	var txtSailDate=new Ext.form.DateField({fieldLabel:p.get('consBizClass')==BC_I?C_ETA:C_SAIL_DATE,tabIndex:19,
			itemCls:VERSION==0?'required':'',editable:false,
			name:'consSailDate',value:p.get('consSailDate'),
			xtype:'datefield',format:DATEF,anchor:'99%'});
	
	var cboPolEn = {fieldLabel:C_POL,itemCls:'needed',tabIndex:p.get('consBizClass')==BC_I?39:43,
    		name:'consPolEn',value:p.get('consPolEn'),store:getPS(),xtype:'combo',
    		displayField:p.get('consBizType')==BT_A?'portCode':'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'local',
    		triggerAction:'all',selectOnFocus:true,anchor:'99%',
    		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
    		listeners:{scope:this,
    			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPol','');}},
            	select:function(c,r,i){
            		p.set('consPol',r.get('portId'));
            		p.set('consPolCn',r.get('portNameCn'));
            		if(p.get('consBizClass')==BC_I&&this.find('name','consTradeCountry')[0]) {
            			this.find('name','consTradeCountry')[0].setValue(r.get('counCode'));
            		}
            		if(p.get('consBizClass')==BC_E&&this.find('name','consReceiptPlace')[0]) {
            			this.find('name','consReceiptPlace')[0].setValue(r.get('portNameEn'));
            		}
            	},
             	keydown:{fn:p.get('consBizType')==BT_A?LAP:LP,buffer:BF}}};
    var cboPodEn = {fieldLabel:C_POD,itemCls:'needed',tabIndex:p.get('consBizClass')==BC_I?40:47,name:'consPodEn',
			value:p.get('consPodEn'),store:getPS(),xtype:'combo',
			displayField:p.get('consBizType')==BT_A?'portCode':'portNameEn',
			valueField:'portNameEn',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPod','');}},
        	select:function(c,r,i){
        		p.set('consPod',r.get('portId'));
        		p.set('consPodCn',r.get('portNameCn'));
            	if(p.get('consBizClass')==BC_E&&this.find('name','consTradeCountry')[0]) {
            		this.find('name','consTradeCountry')[0].setValue(r.get('counCode'));
            	}
            	if(this.find('name','consDeliveryPlace')[0]) {
            		this.find('name','consDeliveryPlace')[0].setValue(r.get('portNameEn'));
            	}
            	if(this.find('name','consDestination')[0]) {
            		this.find('name','consDestination')[0].setValue(r.get('portNameEn'));
            	}
            	},
         	keydown:{fn:p.get('consBizType')==BT_A?LAP:LP,buffer:BF}}};
    var txtPotEn = {fieldLabel:C_DESTINATION_PORT,name:'consDeliveryPlace',
    		value:p.get('consDeliveryPlace'),xtype:'textfield',anchor:'99%'};
    var txtCargoNameEn={columnWidth:.5,layout:'form',labelWidth:80,border:false,
			items:[{fieldLabel:C_CARGO_NAME_CN_EN,tabIndex:61,name:'consCargoNameEn',
				value:p.get('consCargoNameEn'),xtype:'textarea',anchor:'99%'}
			]};
	
    var txtTotalPackages={fieldLabel:C_PACKAGES,tabIndex:61,name:'consTotalPackages',value:p.get('consTotalPackages'),
    			xtype:'numberfield',anchor:'99%'};
	
	var numGrossWeight = {fieldLabel:C_GW_S,
		name:'consTotalGrossWeight',value:p.get('consTotalGrossWeight'),
		xtype:'numberfield',decimalPrecision:4,anchor:'99%'
		};
	var numNetWeight = {fieldLabel:C_MW_S,
		name:'consTotalNetWeight',value:p.get('consTotalNetWeight'),
		xtype:'numberfield',decimalPrecision:4,anchor:'99%'};
	var numMeasurement = {fieldLabel:C_CBM_S,
		name:'consTotalMeasurement',value:p.get('consTotalMeasurement'),
		xtype:'numberfield',decimalPrecision:4,anchor:'99%'};
	//装船日期用作换单日期
	var dtExchangeSingle = {fieldLabel:C_EXCHANGE_DATE,tabIndex:13,name:'consLoadDate',
	    value:p.get('consLoadDate'),xtype:'datefield',format:DATEF,anchor:'99%'
		};
	//截关日期用作三检日期
	var dtThreeInspection = {fieldLabel:C_THREE_INSPECTION,tabIndex:13,name:'consExpiryDate',
		value:p.get('consExpiryDate'),xtype:'datefield',format:DATEF,anchor:'99%'
		};
	//送货日期
	var dtDeliveryDate = {fieldLabel:C_DELIVERY_DATE,tabIndex:13,name:'consDeliveryDate',
			value:p.get('consDeliveryDate'),xtype:'datefield',format:DATEF,anchor:'99%'
			};
	//装货日期用作海关查验日期
	var dtConsTrackLoadDate = {fieldLabel:C_CUSTOMS_INSPECTION,tabIndex:13,name:'consTrackLoadDate',
			value:p.get('consTrackLoadDate'),xtype:'datefield',format:DATEF,anchor:'99%'
	};
	//装箱日期用作商检日期
	var dtconsContainerLoadDate = {fieldLabel:C_DATE_OF_INSPECTION,tabIndex:13,name:'consContainerLoadDate',
			value:p.get('consContainerLoadDate'),xtype:'datefield',format:DATEF,anchor:'99%'
	};
	Fos.CustomsDeclearTab.superclass.constructor.call(this, { 
		id: "P_CONS_"+p.get('id'),title:C_CUSTOMS+C_CONSIGN+'-'+p.get("consNo"),header:false,closable:true,autoScroll:true,
		padding:5,labelAlign:'right',
	    items:[
    		{header:false,border:false,layout:'column',items:[
    		{columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
				{fieldLabel:C_CONS_NO,style:'{font-weight:bold;color:green;}',disabled:true,tabIndex:1,
						name:'consNo',value:p.get('consNo'),xtype:'textfield',anchor:'99%'},  
    			{fieldLabel:C_BOOKER,itemCls:'required',tabIndex:5,name:'custName',
    				value:p.get('custName'),store:getCS(),enableKeyEvents:true,
 					xtype:'combo',displayField:'custCode',valueField:'custCode',typeAhead:true,
 					mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',
 					selectOnFocus:true,anchor:'99%',
 			     	listeners:{scope:this,
 			     	blur:function(f){
 			     		if(f.getRawValue()==''){
 			     			f.clearValue();
 			     			p.set('custId','');
 			     			p.set('custName','');}},
 			     	select:function(c,r,i){
 			     		this.find('name','custName')[0].setValue(r.get('custNameCn'));
 			     		this.find('name','custContact')[0].setValue(r.get('custContact'));
 			     		this.find('name','custTel')[0].setValue(r.get('custTel'));
 			     		this.find('name','custFax')[0].setValue(r.get('custFax'));
 			     		p.set('custId',r.get('custId'));
 			     		p.set('custSname',r.get('custCode'));
 			     		p.set('custName',r.get('custNameCn'));
 			     		c.setValue(r.get('custNameCn'));
 			     	},
 			     	keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},
 			     {fieldLabel:C_BIZ_COMPANY,tabIndex:9,name:'consCompany',value:p.get('consCompany'),
 			     		xtype:'combo',displayField:'custCode',valueField:'custCode',typeAhead:true,
 			     		store:getCS(),enableKeyEvents:true,
 	 					mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',
 	 					selectOnFocus:true,anchor:'99%',
 	 			     	listeners:{scope:this, 	 			     	
 	 			     	select:function(c,r,i){ 	 			     		
 	 			     		c.setValue(r.get('custNameCn'));
 	 			     		p.set('consCompany',r.get('custNameCn'));
 	 			     	},
 	 			     	keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},	       
 			     {fieldLabel:C_CONS_DATE,tabIndex:13,name:'consDate',value:p.get('consDate'),
 			     		xtype:'datefield',format:DATEF,anchor:'99%',listeners:{
 			     			select:function(t,d){
 			     				txtSailDate.setValue(d);
 			     			}
 			     		}
 			     },
    	    	{fieldLabel:C_CUSTOM_AGENCY,tabIndex:21,name:'consCustomsVendorName',
    	    		value:p.get('consCustomsVendorName'),store:getCS(),enableKeyEvents:true,
    	    		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
    	    		xtype:'combo',displayField:'custCode',valueField:'custCode',
    	    		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
	    	   		listeners:{scope:this,
	    	   			blur:function(f){
	    	   				if(f.getRawValue()==''){
	    	   					f.clearValue();
	    	   					p.set('consCustomsVendor','');
	    	   					p.set('consCustomsVendorName','');
	    	   				}
	    	   			},
	    	   			select:function(c,r,i){
	    	   				p.set('consCustomsVendor',r.get('custId'));
	    	   				p.set('consCustomsVendorName',r.get('custNameCn'));
	    	   				var obj = this.find('name','consCustomsContact');
	    	   				if(obj.length>0){
	    	   					var ct = obj[0];
	    	   					ct.setValue(r.get('custContact'));    	   					
	    	   				}
	    	   				var obj2 = this.find('name','consCustomsTel');
	    	   				if(obj2.length>0){
	    	   					var ct = obj2[0];
	    	   					ct.setValue(r.get('custTel'));    	   					
	    	   				}
	    	   				c.setValue(r.get('custNameCn'));
	    	   			},
	    	   			keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}},
	    	   			txtVessName,cboPolEn,dtExchangeSingle,dtconsContainerLoadDate
 				]},
         	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[             	 	
             	 	{fieldLabel:C_OPERATOR,itemCls:'required',tabIndex:2,name:'consOperatorName',value:p.get('consOperatorName'),
     			     	store:getOP_S(),xtype:'combo',displayField:VERSION==1?'userName':'userLoginName',valueField:'userId',
     			     	typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',editable:false,
     			     	listeners:{scope:this,
     	    			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consOperatorId','');p.set('consOperatorName','');}},
     	    			select:function(c,r,i){p.set('consOperatorId',r.get('userId'));}}},
     	    		{fieldLabel:C_CONTACT,tabIndex:6,name:'custContact',value:p.get('custContact'),xtype:'textfield',anchor:'99%'},
             	 	{fieldLabel:C_REF_NO,tabIndex:10,name:'consRefNo',value:p.get('consRefNo'),
             			xtype:'textfield',anchor:'99%'},
             		{fieldLabel:C_CONS_CLOSE_DATE,tabIndex:14,name:'consCloseDate',value:p.get('consCloseDate'),
           			     xtype:'datefield',format:DATEF,anchor:'99%'},
         			{fieldLabel:C_CUDE_CONTACT,tabIndex:22,name:'consCustomsContact',
         				value:p.get('consCustomsContact'),xtype:'textfield',anchor:'99%'},
         			txtVoyage,cboPodEn,dtThreeInspection,
         			{xtype:'checkbox',tabIndex:20,hidden:p.get('consBizClass')=='I',labelSeparator:'',
                 	name:'consRequireRelief',checked:p.get('consRequireRelief')==1,boxLabel:C_REQUIRE_RELIEF}
         	    ]},
         	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
             		{fieldLabel:C_SALES,itemCls:'required',tabIndex:3,name:'consSalesRepName',value:p.get('consSalesRepName'),
         	    		store:getSALE_S(),xtype:'combo',displayField:VERSION==1?'userName':'userLoginName',editable:false,
         	    		valueField:'userName',
         	    		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
         	    		listeners:{scope:this,
         	    			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consSalesRepId','');p.set('consSalesRepName','');}},
         	    	    	select:function(c,r,i){p.set('consSalesRepId',r.get('userId'));}}},
 	    	    	{fieldLabel:C_PHONE,tabIndex:7,name:'custTel',value:p.get('custTel'),
             			xtype:'textfield',anchor:'99%'},
         	       {fieldLabel:C_CUSTOMS_DECLEARATION_NO,tabIndex:11,name:'consCustomsDeclearationNo',value:p.get('consCustomsDeclearationNo'),
         	    	    	xtype:'textfield',anchor:'99%'}, 	 
         	       {fieldLabel:C_VERIFICATION_NO,tabIndex:17,name:'consVerificationNo',value:p.get('consVerificationNo'),
 	    	    	xtype:'textfield',anchor:'99%'},
 	    	    	{fieldLabel:C_CUDE_TEL,name:'consCustomsTel',value:p.get('consCustomsTel'),xtype:'textfield',anchor:'99%'},
 	    	    	txtConsMblNo,txtPotEn,dtDeliveryDate,
            		 {xtype:'checkbox',labelSeparator:'',tabIndex:19,name:'consRequireVerification',checked:p.get('consRequireVerification')==1,
   		     		boxLabel:p.get('consBizClass')=='I'?C_REQUIRE_VERIFICATION_IMP:C_REQUIRE_VERIFICATION_EXP}
     			   
         	    ]},
         	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[         	        
             		{fieldLabel:C_DEPT,itemCls:'required',tabIndex:4,name:'deptId',value:p.get('deptId'),editable:false,
             			store:getGROU_S(),xtype:'combo',displayField:'grouName',valueField:'grouId',typeAhead: true,
             			mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'},
             		{fieldLabel:C_FAX,xtype:'textfield',tabIndex:8,name:'custFax',value:p.get('custFax'),anchor:'99%'},
             		{fieldLabel:C_CUSTOMS_DECLEAR_DATE,tabIndex:12,name:'consCustomsDeclearDate',value:p.get('consCustomsDeclearDate'),
         			    xtype:'datefield',format:DATEF,anchor:'99%'},         			
         			{fieldLabel:C_HS_CODE,tabIndex:16,name:'cargHsCode',value:p.get('cargHsCode'),
             			xtype:'textfield',anchor:'99%'},
                     {fieldLabel:C_CONTAINER_INFO,name:'consContainersInfo',value:p.get('consContainersInfo'),xtype:'textfield',anchor:'99%'},
                     txtConsHblNo,txtSailDate,dtConsTrackLoadDate
         		]}
         	    ]},
         	 {header:false,border:false,layout:'column',items:[
         	   {columnWidth:.5,layout:'form',labelWidth:80,border:false,items:[
         	     txtCargoNameEn]
         	   },
         	   {columnWidth:.25,layout:'form',labelWidth:80,border:false,items:[
         	     txtTotalPackages,numGrossWeight]
         	   }, 
         	   {columnWidth:.25,layout:'form',labelWidth:80,border:false,items:[
         	     numMeasurement,numNetWeight]
         	   }]},
         	 {header:false,border:false,layout:'column',items:[
         	   {columnWidth:.45,layout:'form',labelWidth:80,border:false,items:[
           	    	{fieldLabel:C_SHIPPER,tabIndex:23,
           	    		id:p.get('consId')+'CONS_SHIPPER',name:'consShipper',value:p.get('consShipper'),
				    	xtype:'textarea',height:100,anchor:'99%'}
           	    ]},
           	 {columnWidth:.05,border:false,items:[bSaveShipper,bSearchShipper]},
           	   {columnWidth:.45,layout:'form',labelWidth:80,border:false,items:[
         	    	{fieldLabel:C_CONSIGNEE,tabIndex:24,name:'consConsignee',value:p.get('consConsignee'),
         	    		id:p.get('consId')+'CONS_CONSIGNEE',
					xtype:'textarea',height:100,anchor:'99%'}
         	    ]},
         	   {columnWidth:.05,border:false,items:[bSaveConsignee,bSearchConsignee]},
         	   {columnWidth:.5,layout:'form',labelWidth:80,border:false,items:[
           	    	{fieldLabel:C_CUSTOMS_DECLEAR_ITEMS,tabIndex:25,name:'consServiceSpec',
           	    		value:p.get('consServiceSpec'),xtype:'textarea',height:100,anchor:'99%'}
           	    ]},
           	    {columnWidth:.5,layout:'form',labelWidth:80,border:false,items:[
           	    	{fieldLabel:C_REMARKS,tabIndex:26,name:'consRemarks',value:p.get('consRemarks'),
           	    		xtype:'textarea',height:100,anchor:'99%'}
           	    ]}
         	    ]}
         	 ],
		tbar:[
		      {text:C_SAVE,itemId:'TB_S',iconCls:'save',disabled:NR(m+F_M)||locked||disable,scope:this,handler:this.save},'-',
		      {text:C_BOOK_CONFIRM,itemId:'TB_C',iconCls:'check',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=0||p.get('rowAction')=='N',scope:this,handler:this.check},'-',
		       {text:C_CANCEL_CONFIRM,itemId:'TB_CC',iconCls:'check',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1||p.get('rowAction')=='N',scope:this,handler:this.cancelCheck},'-',
		      {text:C_CONS_CLOSED,itemId:'TB_F',iconCls:'check',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1,scope:this,handler:this.finish},'-',
		      {text:C_REMOVE,itemId:'TB_R',iconCls:'remove',
		    	  disabled:NR(m+F_R)||locked||disable||p.get('consStatus')!=0||p.get('rowAction')=='N',scope:this,handler:this.del},'-',
		      {text:C_INVALID,itemId:'TB_M',iconCls:'cancel',disabled:NR(m+F_F)||locked||disable||p.get('consStatus')==0||p.get('rowAction')=='N',scope:this,handler:this.cancel},'-',
		      {text:C_UNLOCK,itemId:'TB_U',iconCls:'unlock',disabled:NR(m+F_UL)||locked!=1,scope:this,handler:this.unlock},'->',
		      {text:C_CUSTOM_BILL,itemId:'TB_CUDE',iconCls:'doc',disabled:p.get('rowAction')=='N',scope:this,handler:this.showCude},'-',
		      {text:C_EXPE,itemId:'TB_EXP',iconCls:'dollar',disabled:NR(m+M3_EXPE)||p.get('rowAction')=='N',scope:this,handler:this.showExp},'-',
		      {text:C_DOC,itemId:'TB_DOC',iconCls:'doc',disabled:NR(m+M3_DOC)||p.get('rowAction')=='N',scope:this,handler:this.showDoc},'-',
		      {text:C_ATTACH,itemId:'TB_ATT',iconCls:'attach',disabled:NR(m+F_M)||p.get('rowAction')=='N',scope:this,handler:this.showAttach},'-',
		      {text:C_SECURITY_ATTACH,itemId:'TB_S_ATT',iconCls:'attach',disabled:NR(m1+M3_ATTACH)||p.get('rowAction')=='N',scope:this,handler:this.showSecurityAttach},'-'
		     ]
	});
};
Ext.extend(Fos.CustomsDeclearTab,Ext.FormPanel);

Fos.CustomsConsLookupWin = function(store,setQueryParams,bizClass){    
	this.reload=function(){
     	var a=[];var op=1;
     	a[a.length]=new QParam({key:'consBizType',value:BT_G,op:1});
     	a[a.length]=new QParam({key:'consBizClass',value:bizClass,op:1});
     	
 		var custId=panel.find('name','custId')[0].getValue();
 		if(custId) 
 			a[a.length]=new QParam({key:'custId',value:custId,op:op}); 
 		var consCompany=panel.find('name','consCompany')[0].getValue();        		
 		if(consCompany) 
 			a[a.length]=new QParam({key:'consCompany',value:consCompany,op:op});
 		var consSalesRepId=panel.find('name','consSalesRepId')[0].getValue();        		
 		if(consSalesRepId) 
 			a[a.length]=new QParam({key:'consSalesRepId',value:consSalesRepId,op:op});
 		var consOperatorId=panel.find('name','consOperatorId')[0].getValue();        		
 		if(consOperatorId) 
 			a[a.length]=new QParam({key:'consOperatorId',value:consOperatorId,op:op});
 		
 		var consDate=panel.find('name','consDate')[0].getValue();
 		var consDate2=panel.find('name','consDate2')[0].getValue();
 		if(consDate && consDate2){
 			a[a.length]=new QParam({key:'consDate',value:consDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'consDate',value:consDate2.format(DATEF),op:3});
 		}
 		else if(consDate) 
 			a[a.length]=new QParam({key:'consDate',value:consDate.format(DATEF),op:op});
 		
 		var consCloseDate=panel.find('name','consCloseDate')[0].getValue();
 		var consCloseDate2=panel.find('name','consCloseDate2')[0].getValue();
 		if(consDate && consCloseDate2){
 			a[a.length]=new QParam({key:'consCloseDate',value:consCloseDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'consCloseDate',value:consDate2.format(DATEF),op:3});
 		}
 		else if(consCloseDate) 
 			a[a.length]=new QParam({key:'consCloseDate',value:consCloseDate.format(DATEF),op:op});
 		
 		var consCustomsDeclearDate=panel.find('name','consCustomsDeclearDate')[0].getValue();
 		var consCustomsDeclearDate2=panel.find('name','consCustomsDeclearDate2')[0].getValue();
 		if(consCustomsDeclearDate && consCustomsDeclearDate2){
 			a[a.length]=new QParam({key:'consCustomsDeclearDate',value:consCustomsDeclearDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'consCustomsDeclearDate',value:consCustomsDeclearDate2.format(DATEF),op:3});
 		}
 		else if(consCustomsDeclearDate) 
 			a[a.length]=new QParam({key:'consCustomsDeclearDate',value:consCustomsDeclearDate.format(DATEF),op:op});
 		
 		var consVerificationNo=panel.find('name','consVerificationNo')[0].getValue();        		
 		if(consVerificationNo) 
 			a[a.length]=new QParam({key:'consVerificationNo',value:consVerificationNo,op:op});
 		
 		var consRefNo=panel.find('name','consRefNo')[0].getValue();        		
 		if(consRefNo) 
 			a[a.length]=new QParam({key:'consRefNo',value:consRefNo,op:op});
 		
 		var consStatusAud=panel.find('name','consStatusAud')[0].getValue();        		
 		if(consStatusAud) 
 			a[a.length]=new QParam({key:'consStatusAud',value:consStatusAud,op:op});
 		var consStatusAr=panel.find('name','consStatusAr')[0].getValue();        		
 		if(consStatusAr) 
 			a[a.length]=new QParam({key:'consStatusAr',value:consStatusAr,op:op});
 		var consStatusAp=panel.find('name','consStatusAp')[0].getValue();        		
 		if(consStatusAp) 
 			a[a.length]=new QParam({key:'consStatusAp',value:consStatusAp,op:op});
 		var consMblNo=panel.find('name','consMblNo')[0].getValue();
 		if(consMblNo) 
 			a[a.length]=new QParam({key:'consMblNo',value:consMblNo,op:7});
 		var consStatusInvoR=panel.find('name','consStatusInvoR')[0].getValue();        		
 		if(consStatusInvoR) 
 			a[a.length]=new QParam({key:'consStatusInvoR',value:consStatusInvoR,op:op});
 		var consStatusInvoP=panel.find('name','consStatusInvoP')[0].getValue();        		
 		if(consStatusInvoP) 
 			a[a.length]=new QParam({key:'consStatusInvoP',value:consStatusInvoP,op:op});
 		var consStatusExp=panel.find('name','consStatusExp')[0].getValue();        		
 		if(consStatusExp) 
 			a[a.length]=new QParam({key:'consStatusExp',value:consStatusExp,op:op});
     	var vessName=panel.find('name','vessName')[0].getValue();        		
 		if(vessName) 
 			a[a.length]=new QParam({key:'vessName',value:vessName,op:op});
 		var voyaName=panel.find('name','voyaName')[0].getValue();        		
 		if(voyaName) 
 			a[a.length]=new QParam({key:'voyaName',value:voyaName,op:op});
 		var consTotalPackages=panel.find('name','consTotalPackages')[0].getValue();        		
 		if(consTotalPackages) 
 			a[a.length]=new QParam({key:'consTotalPackages',value:consTotalPackages,op:op});
 		var consTotalGrossWeight=panel.find('name','consTotalGrossWeight')[0].getValue();        		
 		if(consTotalGrossWeight) 
 			a[a.length]=new QParam({key:'consTotalGrossWeight',value:consTotalGrossWeight,op:op});
 		
 		var consLoadDate=panel.find('name','consLoadDate')[0].getValue();
 		var consLoadDate2=panel.find('name','consLoadDate2')[0].getValue();
 		if(consLoadDate && consLoadDate2){
 			a[a.length]=new QParam({key:'consLoadDate',value:consLoadDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'consLoadDate',value:consLoadDate2.format(DATEF),op:3});
 		}
 		else if(consLoadDate) 
 			a[a.length]=new QParam({key:'consLoadDate',value:consLoadDate.format(DATEF),op:op});
 		
 		
 		var consExpiryDate=panel.find('name','consExpiryDate')[0].getValue();
 		var consExpiryDate2=panel.find('name','consExpiryDate2')[0].getValue();
 		if(consExpiryDate && consExpiryDate2){
 			a[a.length]=new QParam({key:'consExpiryDate',value:consExpiryDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'consExpiryDate',value:consExpiryDate2.format(DATEF),op:3});
 		}
 		else if(consExpiryDate) 
 			a[a.length]=new QParam({key:'consExpiryDate',value:consExpiryDate.format(DATEF),op:op});
 		
 		var consDeliveryDate=panel.find('name','consDeliveryDate')[0].getValue();
 		var consDeliveryDate2=panel.find('name','consDeliveryDate2')[0].getValue();
 		if(consDeliveryDate && consDeliveryDate2){
 			a[a.length]=new QParam({key:'consDeliveryDate',value:consDeliveryDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'consDeliveryDate',value:consDeliveryDate2.format(DATEF),op:3});
 		}
 		else if(consDeliveryDate) 
 			a[a.length]=new QParam({key:'consDeliveryDate',value:consDeliveryDate.format(DATEF),op:op});
 		
 		var consTrackLoadDate=panel.find('name','consTrackLoadDate')[0].getValue();
 		var consTrackLoadDate2=panel.find('name','consTrackLoadDate2')[0].getValue();
 		if(consTrackLoadDate && consTrackLoadDate2){
 			a[a.length]=new QParam({key:'consTrackLoadDate',value:consTrackLoadDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'consTrackLoadDate',value:consTrackLoadDate2.format(DATEF),op:3});
 		}
 		else if(consTrackLoadDate) 
 			a[a.length]=new QParam({key:'consTrackLoadDate',value:consTrackLoadDate.format(DATEF),op:op});
 		
 		var consContainerLoadDate=panel.find('name','consContainerLoadDate')[0].getValue();
 		var consContainerLoadDate2=panel.find('name','consContainerLoadDate2')[0].getValue();
 		if(consContainerLoadDate && consContainerLoadDate2){
 			a[a.length]=new QParam({key:'consContainerLoadDate',value:consContainerLoadDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'consContainerLoadDate',value:consContainerLoadDate2.format(DATEF),op:3});
 		}
 		else if(consContainerLoadDate) 
 			a[a.length]=new QParam({key:'consContainerLoadDate',value:consContainerLoadDate.format(DATEF),op:op});
 		setQueryParams(a);
     	store.baseParams={mt:'xml',xml:FOSX(QTX(a))};
     	store.reload({params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) 
     				XMG.alert(SYS,M_NOT_FOUND);
     			}
     	});
     	
     	//store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	//store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};		
		
	var panel = new Ext.Panel({plain:true,height:340,layout:'column',
		defaults:{bodyStyle:'padding:10px'},items:
			[{columnWidth:.33,layout:'form',border:false,labelWidth:80,labelAlign:"right",
	    	items:[{fieldLabel:C_BOOKER,name:'custId',store:getCS(),
        		xtype:'combo',displayField:'custCode',valueField:'custId',
        		typeAhead:true,enableKeyEvents:true,
        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
        		triggerAction:'all',selectOnFocus:true,anchor:'90%',
              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},			
			{fieldLabel:C_BIZ_COMPANY,name:'consCompany',xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
 			     		store:getCS(),enableKeyEvents:true,
 	 					mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',
 	 					selectOnFocus:true,anchor:'90%',
 	 			     	listeners:{scope:this, 	 			     	
 	 			     	select:function(c,r,i){ 	 			     		
 	 			     		c.setValue(r.get('custNameCn'));
 	 			     	},
 	 			     	keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},	
        	{fieldLabel:C_OPERATOR,name:'consOperatorId',store:getOP_S(),xtype:'combo',
              	displayField:'userLoginName',valueField:'userId',typeAhead: true,
              	mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
        	{fieldLabel:C_SALES,name:'consSalesRepId',store:getSALE_S(),xtype:'combo',
              	displayField:'userLoginName',valueField:'userId',typeAhead: true,
              	mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
         	{fieldLabel:C_CONS_AUDIT_STATUS,name:'consStatusAud',xtype:'combo',
              	store:AUST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
              	mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
         	{fieldLabel:C_WRITEOFF_STATUS_R,name:'consStatusAr',xtype:'combo',
              	store:WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
              	mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
              	{fieldLabel:C_WRITEOFF_STATUS_P,name:'consStatusAp',xtype:'combo',
        		store:WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
        		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
        	{fieldLabel:C_PACKAGES,name:'consTotalPackages',xtype:'textfield',anchor:'90%'},
        	{fieldLabel:C_GW_S,name:'consTotalGrossWeight',xtype:'textfield',anchor:'90%'},
     	    {fieldLabel:C_DELIVERY_DATE,tabIndex:13,name:'consDeliveryDate',
     			xtype:'datefield',format:DATEF,anchor:'90%'
     		},
     		{fieldLabel:C_CUSTOMS_INSPECTION,tabIndex:13,name:'consTrackLoadDate',
     			xtype:'datefield',format:DATEF,anchor:'90%'
     		},
     		{fieldLabel:C_DATE_OF_INSPECTION,tabIndex:13,name:'consContainerLoadDate',
     			xtype:'datefield',format:DATEF,anchor:'90%'
     		},]},
      	{columnWidth:.33,layout:'form',border:false,labelWidth:80,labelAlign:"right",
   		items:[{fieldLabel:C_CONS_DATE,name:'consDate',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_CONS_CLOSE_DATE,name:'consCloseDate',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_CUSTOMS_DECLEAR_DATE,name:'consCustomsDeclearDate',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_VERIFICATION_NO,name:'consVerificationNo',xtype:'textfield',anchor:'90%'},
        	{fieldLabel:C_TRAFFIC_NO,name:'consMblNo',xtype:'textfield',anchor:'90%'},
			{fieldLabel:C_INVO_STATUS_R,name:'consStatusInvoR',xtype:'combo',
        		store:INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
        		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
        	{fieldLabel:C_INVO_STATUS_P,name:'consStatusInvoP',xtype:'combo',
         		store:INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
         		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
         	{fieldLabel:C_EXCHANGE_DATE,tabIndex:13,name:'consLoadDate',
         		    xtype:'datefield',format:DATEF,anchor:'90%'
         			},
         	{fieldLabel:C_THREE_INSPECTION,tabIndex:13,name:'consExpiryDate',
             	xtype:'datefield',format:DATEF,anchor:'90%'
             },
             {fieldLabel:C_TO,tabIndex:13,name:'consDeliveryDate2',
  				xtype:'datefield',format:DATEF,anchor:'90%'
  			 },
  			{fieldLabel:C_TO,tabIndex:13,name:'consTrackLoadDate2',
   				xtype:'datefield',format:DATEF,anchor:'90%'
   			 },
   			{fieldLabel:C_TO,tabIndex:13,name:'consContainerLoadDate2',
   				xtype:'datefield',format:DATEF,anchor:'90%'
   			 }
			]},
		{columnWidth:.34,layout:'form',border:false,labelWidth:80,labelAlign:"right",
		items:[{fieldLabel:C_TO,name:'consDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_TO,name:'consCloseDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_TO,name:'consCustomsDeclearDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
         	{fieldLabel:C_REF_NO,name:'consRefNo',xtype:'textfield',anchor:'90%'},
			{fieldLabel:C_EXPE_CONFIRM_STATUS,name:'consStatusExp',xtype:'combo',
         		store:EXPC_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
         		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
         	{fieldLabel:C_VESS,name:'vessName',xtype:'textfield',anchor:'90%'},
         	{fieldLabel:C_VOYA,name:'voyaName',xtype:'textfield',anchor:'90%'},
         	{fieldLabel:C_TO,tabIndex:13,name:'consLoadDate2',
     		    xtype:'datefield',format:DATEF,anchor:'90%'
     			},
     	    {fieldLabel:C_TO,tabIndex:13,name:'consExpiryDate2',
         		xtype:'datefield',format:DATEF,anchor:'90%'
             },
		]}
	]});
    Fos.CustomsConsLookupWin.superclass.constructor.call(this, {title:C_CONS_QUERY,iconCls:'search',modal:true,
    	width:800,height:400,buttonAlign:'right',items:panel,
		buttons:[{text:C_OK,scope:this,handler:this.reload},
		         {text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.CustomsConsLookupWin, Ext.Window);