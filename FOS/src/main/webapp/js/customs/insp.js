//关务 - 报检
Fos.InspectionGrid = function() {
	var queryParams=[];
	queryParams[queryParams.length]=new QParam({key:'consBizType',value:BT_I,op:1});
	var bp={mt:'xml',xml:FOSX(QTX(queryParams))};
	
	var store = new Ext.data.GroupingStore({
   		url: SERVICE_URL+'?A=CONS_X',
   		baseParams:bp,
    	reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'FConsign',idProperty:'consId'}, FConsign),remoteSort:true,
    	sortInfo:{field:'consDate', direction:'DESC'}
	});    	
	
	this.reset=function(){
		store.baseParams=bp;
		store.reload({params:{start:0,limit:C_PS}});
	};
	
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true});	
	
	var c1=new Ext.grid.RowNumberer();
	
	var c2={header:'',dataIndex:'consStatusLock',menuDisabled:true,fixed:true,width:25,renderer:function(v){
               if(v==1) return '<div class="locked"></div>'; else return '';
         }};
   
    var c3={header:C_STATUS,width:60,dataIndex:"consStatus",renderer:getTRADE_S};
    var c4={header:C_CONS_NO,width:120,dataIndex:"consNo"};
    var c5={header:C_BOOKER,width:200,dataIndex:"custName"};
    var c6={header:C_CONS_DATE,width:80,dataIndex:"consDate",renderer:formatDate};   
    var c7={header:C_CONS_CLOSE_DATE,dataIndex:"consCloseDate",renderer:formatDate};
    var c8={header:C_CONTRACT_NO,dataIndex:"consContractNo"};
    var c9={header:C_BIZ_COMPANY,width:200,dataIndex:"consCompany"};
    var c10={header:C_OPERATOR,width:80,dataIndex:"consOperatorName"};  
    var c11={header:C_SALES,width:80,dataIndex:"consSalesRepName"};
    var c12={header:C_VESS,width:120,dataIndex:"vessName"};
    var c13 ={header:C_VOYA,width:60,dataIndex:"voyaName"};
    var c14={header:C_PACKAGES,width:60,dataIndex:"consTotalPackages"};
    var c15={header:C_GW_S,width:60,dataIndex:"consTotalGrossWeight"};
    var c16={header:C_M_BL_NO,width:120,dataIndex:"consMblNo"};
    var c17={header:C_POL,dataIndex:"consPolEn"};
    var c18={header:C_POD,width:100,dataIndex:"consPodEn"};
    
    var cm=new Ext.grid.ColumnModel({
    	columns:[c1,c2,c3,c4,c5,c6,c7,c17,c18,c12,c13,c14,c15,c16,c8,c9,c10,c11],
		defaults: {sortable: true}
    });
	
    showInspConsign = function(p){
    	var t = T_MAIN.getComponent('P_CONS_'+p.get("id"));
    	if(t){
    		T_MAIN.setActiveTab(t);
    	} 
    	else{
    		t = new Fos.InspectionConsignPanel(p,store);
    		T_MAIN.add(t);
    		T_MAIN.setActiveTab(t);
    	}
    };
    
	this.newConsign = function(bizClass){
		var c = Fos.newConsign(bizClass,BT_I,'');
		showInspConsign(c);
	};
	
	this.editConsign = function(){
		var b=sm.getSelected();
		if(b) 
			showInspConsign(b); 
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
		var w=new Fos.InspConsLookupWin(store,setQueryParams);
		w.show();
	};
	
	var kw = new Ext.form.TextField({
		listeners:{scope:this,specialkey:function(c,e){
		if(e.getKey()==Ext.EventObject.ENTER) 
			this.fastSearch();
		}}
	});
	
	this.fastSearch=function(){
		var consNo=kw.getValue();
		
		if(!consNo){
			XMG.alert(SYS,M_INPUT_BIZ_NO,function(b){kw.focus();});
			return;
		}
		
     	var a=[];     	
     	a[a.length]=new QParam({key:'consBizType',value:BT_I,op:EQ});
     	
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
     		}
     	});
	};
	
	this.exp=function(){		
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
	
	var m=M1_I+M3_CONS;
	
	var b1 = {text:C_ADD,disabled:NR(m+F_M),iconCls:'add',scope:this,menu: 
	    {items: [
	         {text:C_EXP_INSP,scope:this,handler:function(){this.newConsign('E');}},
	         {text:C_IMP_INSP,scope:this,handler:function(){this.newConsign('I');}}
	         ]
	    }
	};
	
	var b3={text:C_EDIT,disabled:NR(m+F_V),iconCls:'option',handler:this.editConsign};
	var b4={text:C_REMOVE,disabled:NR(m+F_R),iconCls:'remove',handler:this.removeConsign};
	var b5={text:C_SEARCH,iconCls:'search',handler:this.search};	
	var b6={text:C_EXPORT,disabled:NR(m+F_E),iconCls:'print',scope:this,handler:this.exp};	
	var b7={text:C_FAST_SEARCH,iconCls:'search',handler:this.fastSearch};	
	var b8={text:C_RESET,iconCls:'refresh',handler:this.reset};
			
    var tbs=[b1, '-',b3,'-',b4,'-',b5,'-',b6,'-',kw,b7,'-',b8,'-'];
       
	Fos.InspectionGrid.superclass.constructor.call(this, {
    id:'G_CONS_I',iconCls:'grid',store: store,
    title:C_INSPECTION+C_CONS_LIST,header:false,loadMask:true,
	sm:sm,cm:cm,stripeRows:true,closable:true,
	listeners:{rowdblclick: function(grid, rowIndex, event){
			var c=grid.getSelectionModel().getSelected();
			if(c){showInspConsign(c);
		}}},
	tbar:tbs,
	bbar:PTB(store,C_PS)});	
    store.load({params:{start:0,limit:C_PS}});
};

Ext.extend(Fos.InspectionGrid, Ext.grid.GridPanel);

Fos.InspConsLookupWin = function(store,setQueryParams){    
	this.reload=function(){
     	var a=[];var op=1;
     	a[a.length]=new QParam({key:'consBizType',value:BT_I,op:1});
     	
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
 		var consStatusInvoR=panel.find('name','consStatusInvoR')[0].getValue();        		
 		if(consStatusInvoR) 
 			a[a.length]=new QParam({key:'consStatusInvoR',value:consStatusInvoR,op:op});
 		var consStatusInvoP=panel.find('name','consStatusInvoP')[0].getValue();        		
 		if(consStatusInvoP) 
 			a[a.length]=new QParam({key:'consStatusInvoP',value:consStatusInvoP,op:op});
 		
 		var consStatusExp=panel.find('name','consStatusExp')[0].getValue();        		
 		if(consStatusExp) 
 			a[a.length]=new QParam({key:'consStatusExp',value:consStatusExp,op:op});
 		
 		var inmpNo=panel.find('name','consCustomsDeclearationNo')[0].getValue();        		
 		if(inmpNo) 
 			a[a.length]=new QParam({key:'consCustomsDeclearationNo',value:inmpNo,op:op});
 		
 		var consCertNo=panel.find('name','consCertNo')[0].getValue();        		
 		if(consCertNo) 
 			a[a.length]=new QParam({key:'consCertNo',value:consCertNo,op:op});
 		
 		var appNo=panel.find('name','consBookingDeclareNoUs')[0].getValue();        		
 		if(appNo) 
 			a[a.length]=new QParam({key:'consBookingDeclareNoUs',value:appNo,op:op});
 		
 		var consTradeContractNo=panel.find('name','consTradeContractNo')[0].getValue();        		
 		if(consTradeContractNo) 
 			a[a.length]=new QParam({key:'consTradeContractNo',value:consTradeContractNo,op:op});
 		
 		var consContractNo=panel.find('name','consContractNo')[0].getValue();        		
 		if(consContractNo) 
 			a[a.length]=new QParam({key:'consContractNo',value:consContractNo,op:op});
 		var consMblNo=panel.find('name','consMblNo')[0].getValue();        		
 		if(consMblNo) 
 			a[a.length]=new QParam({key:'consMblNo',value:consMblNo,op:7});
 		setQueryParams(a);
     	store.baseParams={mt:'xml',xml:FOSX(QTX(a))};
     	store.reload({params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) 
     				XMG.alert(SYS,M_NOT_FOUND);
     			}
     	});
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
			{fieldLabel:C_BIZ_COMPANY,name:'consCompany',
              		xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
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
            {fieldLabel:C_INSPECTION_NO,name:'consCustomsDeclearationNo',xtype:'textfield',anchor:'90%'},
            {fieldLabel:C_APPLICATION_NO,name:'consBookingDeclareNoUs',xtype:'textfield',anchor:'90%'}]},
      	{columnWidth:.33,layout:'form',border:false,labelWidth:80,labelAlign:"right",
   		items:[{fieldLabel:C_CONS_DATE,name:'consDate',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_CONS_CLOSE_DATE,name:'consCloseDate',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_CUSTOMS_DECLEAR_DATE,name:'consCustomsDeclearDate',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_VERIFICATION_NO,name:'consVerificationNo',xtype:'textfield',anchor:'90%'},
			{fieldLabel:C_INVO_STATUS_R,name:'consStatusInvoR',xtype:'combo',
        		store:INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
        		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
			{fieldLabel:C_WRITEOFF_STATUS_P,name:'consStatusAp',xtype:'combo',
        		store:WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
        		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
        	{fieldLabel:C_COMMODITY_NO,name:'consTradeContractNo',xtype:'textfield',anchor:'90%'},
        	{fieldLabel:C_CONTRACT_NO,name:'consContractNo',xtype:'textfield',anchor:'90%'}]},
		{columnWidth:.34,layout:'form',border:false,labelWidth:80,labelAlign:"right",
		items:[{fieldLabel:C_TO,name:'consDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_TO,name:'consCloseDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
        	{fieldLabel:C_TO,name:'consCustomsDeclearDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
         	{fieldLabel:C_REF_NO,name:'consRefNo',xtype:'textfield',anchor:'90%'},
			{fieldLabel:C_EXPE_CONFIRM_STATUS,name:'consStatusExp',xtype:'combo',
         		store:EXPC_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
         		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
			{fieldLabel:C_INVO_STATUS_P,name:'consStatusInvoP',xtype:'combo',
         		store:INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
         		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
 			{fieldLabel:C_CERT,name:'consCertNo',xtype:'textfield',anchor:'90%'},
 			{fieldLabel:C_M_BL_NO,name:'consMblNo',xtype:'textfield',anchor:'90%'}]}
	]});
    Fos.InspConsLookupWin.superclass.constructor.call(this, {title:C_CONS_QUERY,iconCls:'search',modal:true,
    	width:800,height:300,buttonAlign:'right',items:panel,
		buttons:[{text:C_OK,scope:this,handler:this.reload},
		         {text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.InspConsLookupWin, Ext.Window);
