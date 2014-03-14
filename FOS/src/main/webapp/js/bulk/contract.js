//租船合同查询窗口
Fos.FConLW = function(p) {    
	var a=[];
	a[a.length]=new QParam({key:'fconStatus',value:2,op:NE});
	var store = new Ext.data.Store({url: SERVICE_URL+'?A='+'FCON_X',
		baseParams:{mt:'xml',xml:FOSX(QTX(a))},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'FContract'}, FContract),
		sortInfo:{field:'createTime', direction:'DESC'}});
    store.load();
    this.search=function(){
      	var a=[];
   		var charterId=this.find('name','charterId')[0].getValue();
   		if(charterId) a[a.length]=new QParam({key:'charterId',value:charterId,op:EQ});
   		var fconContractNo=this.find('name','fconContractNo')[0].getValue();
   		if(fconContractNo) a[a.length]=new QParam({key:'fconContractNo',value:fconContractNo,op:LI});
   		var fconPol=this.find('name','fconPol')[0].getValue();        		
   		if(fconPol) a[a.length]=new QParam({key:'fconPol',value:fconPol,op:EQ});
   		var fconPod=this.find('name','fconPod')[0].getValue();        		
   		if(fconPod) a[a.length]=new QParam({key:'fconPod',value:fconPod,op:EQ});
   		    		
   		var fconForcastQuantity=this.find('name','fconForcastQuantity')[0].getValue();
     	var fconForcastQuantity2=this.find('name','fconForcastQuantity2')[0].getValue();
   		if(fconForcastQuantity && fconForcastQuantity2){
   			a[a.length]=new QParam({key:'fconForcastQuantity',value:fconForcastQuantity,op:GE});
   			a[a.length]=new QParam({key:'fconForcastQuantity',value:fconForcastQuantity2,op:LE});
   		}
   		else if(fconForcastQuantity) 
   			a[a.length]=new QParam({key:'fconForcastQuantity',value:fconForcastQuantity,op:EQ});

   		var fconShipDateF=this.find('name','fconShipDateF')[0].getValue();
     	var fconShipDateT=this.find('name','fconShipDateT')[0].getValue();
   		if(fconShipDateF && fconShipDateT){
   			a[a.length]=new QParam({key:'fconShipDateF',value:fconShipDateF.format('Y-m-d H:i:s'),op:GE});
   			a[a.length]=new QParam({key:'fconShipDateT',value:fconShipDateT.format('Y-m-d H:i:s'),op:LE});
   		}
   		else if(fconShipDateF) 
   			a[a.length]=new QParam({key:'fconShipDateF',value:fconShipDateF.format('Y-m-d H:i:s'),op:GE});
   		store.baseParams={mt:'xml',xml:FOSX(QTX(a))};
     	store.reload({params:{start:0,limit:25}});
	};
	this.clear=function(){this.find('name','sf')[0].getForm().reset();};	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,	    
		{header:C_CONTRACT_NO,dataIndex:"fconContractNo"},		
		{header:C_STATUS,dataIndex:"fconStatus",renderer:getCTST},
		{header:C_RENTER,width:120,dataIndex:"charterName"},
		{header:C_CONTRACT_QUANTITY,dataIndex:"fconContractQuantity",align:'right',css:'font-weight:bold;',renderer:rateRender},
		{header:C_FORCAST_QUANTITY,dataIndex:"fconForcastQuantity",align:'right',css:'font-weight:bold;',renderer:rateRender},
		{header:C_SHIPPED_QUANTITY,dataIndex:"fconShippedQuantity",align:'right',css:'font-weight:bold;',renderer:rateRender},
		{header:C_FORCAST_LOAD_DATE,dataIndex:"fconLoadDate",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_F,dataIndex:"fconShipDateF",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_T,dataIndex:"fconShipDateT",renderer:formatDate},	
		{header:C_UNIT,dataIndex:"fconUnit"},		
		{header:C_SHIPPER,dataIndex:"fconShipper"},
		{header:C_CONSIGNEE,dataIndex:"fconConsignee"},
		{header:C_POL,dataIndex:"fconPolEn"},
		{header:C_POD,dataIndex:"fconPodEn"},
		{header:C_CREATE_TIME,dataIndex:"createTime"},		
		{header:C_CARGO_DESC,width:120,dataIndex:"fconCargoDesc"}
		],defaults:{sortable: true}});
	cm.defaultWidth=80;
    var g = new Ext.grid.GridPanel({id:'G_FCON_LP',header:false,height:300,width:600,
    	store:store,sm:sm,cm:cm,loadMask:true,autoScroll:true});	
	this.form = new Ext.Panel({id:'F_COLP',bodyStyle:'padding:0px',
   		tbar:[
		{text:C_SEARCH,iconCls:'refresh',scope:this,handler:this.search},'-',
		{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}
		],
        items:[{title:C_FILTER_BY,layout:'column',layoutConfig:{columns:3},name:'sf',xtype:'form',height:120,labelWidth:80,labelAlign:'right',deferredRender:false,collapsible:true,items:[
	        	{columnWidth:.34,layout:'form',border:false,labelWidth:60,items:[
	            	{fieldLabel:C_RENTER,tabIndex:1,name:'charterId',store:getCS(),enableKeyEvents:true,
	            	xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
	            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
     				{fieldLabel:C_CONTRACT_NO,tabIndex:2,name:'fconContractNo',xtype:'textfield',anchor:'95%'},
     				{fieldLabel:C_POL,name:'fconPol',store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
				]},
    			{columnWidth:.3,layout:'form',border:false,labelWidth:100,items:[
	            	{fieldLabel:C_FORCAST_QUANTITY+'(>=)',name:'fconForcastQuantity',xtype:'numberfield',anchor:'95%'},
	           		{fieldLabel:C_FORCAST_SHIP_DATE_F,tabIndex:8,name:'fconShipDateF',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:47,name:'fconPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
	            		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,
              			keydown:{fn:LP,buffer:BF}}}
	            ]},
    			{columnWidth:.3,layout:'form',border:false,labelWidth:100,items:[
	            	{fieldLabel:C_FORCAST_QUANTITY+'(<=)',name:'fconForcastQuantity2',xtype:'numberfield',anchor:'95%'},
	            	{fieldLabel:C_FORCAST_SHIP_DATE_T,tabIndex:9,name:'fconShipDateT',xtype:'datefield',format:DATEF,anchor:'95%'}
	            ]}
	    	]},
	    	{title:'',layout:'fit',deferredRender:false,bodyStyle:'padding:0px',items:[g]}
	    	]});  
    Fos.FConLW.superclass.constructor.call(this,{title:C_ADD_CARGO,modal:true,
    	height:520,width:800,minWidth:400,minHeight:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',
        listeners:{maximize:function(w){w.doLayout();}},items:this.form
	}); 
};
Ext.extend(Fos.FConLW,Ext.Window);

//租船合同列表
Fos.ContractListTab = function(T){
	var expander = new Ext.grid.RowExpander({
	   tpl:new Ext.XTemplate('<div class="detailData">','','</div>'),
	   getRowClass: function(record, index) {
            var c=record.get('fconFactQuantity')-record.get('fconShippedQuantity');
            if(c<0) c=c*(-1);
            var r = c*100/record.get('fconShippedQuantity');
            if(record.get('fconFactQuantity')==0) return '';
            else if (r > 5) return 'red-font-row';
            else return 'green-font-row';
        }
	   });
	expander.on("expand",function(expander,r,body,rowIndex){
		if (Ext.DomQuery.select("div.x-panel-bwrap",body).length==0){
			var s = GS('LOLI_Q','FLoadingList',FLoadingList,'loliId','DESC','','S_LOLI','');
			s.load({params:{fconId:r.get('fconId')}});
    	var cm2=new Ext.grid.ColumnModel([new Ext.grid.RowNumberer(),
			{header:C_VESS,dataIndex:"vessName"},
			{header:C_VOYA,dataIndex:"voyaName"},
			{header:C_SHIP_QUANTITY,dataIndex:"loliShippedQuantity",align:'right',css:'font-weight:bold;',renderer:rateRender},	
			{header:C_SHIP_CBM,dataIndex:"loliShippedCbm",align:'right',css:'font-weight:bold;',renderer:rateRender},		
			{header:C_SHIP_DATE_F,dataIndex:"voyaShipDateF",renderer:formatDate},
			{header:C_SHIP_DATE_T,dataIndex:"voyaShipDateT",renderer:formatDate},
			{header:C_CARRIER,dataIndex:"carrierName"}	]);
		var gv = new Ext.grid.GridView({getRowClass:function(row,idx) {return 'green-row';}});
		var grid = new Ext.grid.GridPanel({store:s,cm:cm2,view:gv,
			renderTo:Ext.DomQuery.select("div.detailData",body)[0],border:true,
			autoWidth:true,autoHeight:true,
			listeners:{scope:this,rowdblclick: function(g,r,e){
				var c=grid.getSelectionModel().getSelected();
				if(c){
					var t = T_MAIN.getComponent("T_SHIP_"+c.get('voyaId'));
					if(t){T_MAIN.setActiveTab(t);}
					else{
    					getVS().load({params:{voyaId:c.get('voyaId')},callback:function(r,o,s){
    					if(s&&r.length>0){t = T_MAIN.add(new Fos.ShipTab(r[0],this));T_MAIN.setActiveTab(t);}},scope:this});
					}
				}
				e.stopPropagation();}}});}});
	var a=[];
	a[a.length]=new QParam({key:'fconStatus',value:2,op:T=='S'?EQ:NE});
	
	var store = new Ext.data.GroupingStore({url: SERVICE_URL+'?A='+'FCON_X',
			reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'FContract'}, FContract),
			baseParams:{mt:'xml',xml:FOSX(QTX(a))},
        	remoteSort:true,
        	sortInfo:{field:'fconId', direction:'DESC'}});
    store.load({params:{start:0,limit:25}});
    this.reset=function(){
        var a=[];
        a[a.length]=new QParam({key:'fconStatus',value:2,op:T=='S'?EQ:NE}); 
        store.baseParams={mt:'xml',xml:FOSX(QTX(a))};
        store.reload({params:{start:0,limit:C_PS}});
    };
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true});
	var inspFlag=CHKCLM(C_INSP_FLAG,'fconInspectionFlag',50);
	var invFlag=CHKCLM(C_INV_FLAG,'fconInvoiceFlag',50);
	var summary = new Ext.grid.GroupSummary();

	var cm=new Ext.grid.ColumnModel({columns:[expander,
	    {header:C_NO,width:50,dataIndex:"fconId"},	    
		{header:C_CONTRACT_NO,width:120,dataIndex:"fconContractNo",summaryRenderer: function(v,p,d){return '合计：';}},
		{header:C_SHLI,width:120,dataIndex:"shliName"},
		{header:C_OPERATOR,width:60,dataIndex:"fconOperatorName"},
		{header:C_CHARTER,width:100,dataIndex:"charterSname"},
		{header:C_SHIPPER,width:150,dataIndex:"custName"},
		{header:C_CONTRACT_QUANTITY,width:80,dataIndex:"fconContractQuantity",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_FORCAST_QUANTITY,width:80,dataIndex:"fconForcastQuantity",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_SHIPPED_QUANTITY,width:80,dataIndex:"fconShippedQuantity",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_REMAIN_QUANTITY,width:80,dataIndex:"fconRemainQuantity",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_FACT_QUANTITY,width:80,dataIndex:"fconFactQuantity",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_GW_ARRIVED,width:80,dataIndex:"fconArrivedGrossWeight",align:'right',renderer:rateRender,summaryType:'sum'},		
		{header:C_UNIT,width:50,dataIndex:"unitName"},
		{header:C_FORCAST_CBM,width:60,dataIndex:"fconForcastCbm",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_SHIPPED_CBM,width:60,dataIndex:"fconShippedCbm",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_REMAIN_CBM,width:60,dataIndex:"fconRemainCbm",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_FACT_CBM,width:60,dataIndex:"fconFactCbm",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_FORCAST_LOAD_DATE,width:80,dataIndex:"fconLoadDate",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_F,width:80,dataIndex:"fconShipDateF",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_T,width:80,dataIndex:"fconShipDateT",renderer:formatDate},
		{header:C_SHIP_DATE_F,width:80,dataIndex:"voyaShipDateF",renderer:formatDate},
		{header:C_SHIP_DATE_T,width:80,dataIndex:"voyaShipDateT",renderer:formatDate},
		{header:C_PACKING_TOTAL_PACKAGE,width:60,dataIndex:"fconTotalPackages",align:'right',css:'font-weight:bold;',summaryType:'sum'},
		{header:C_PACK,width:60,dataIndex:"packName"},
		{header:C_PACKING_TOTAL_GW,width:60,dataIndex:"fconTotalGrossWeight",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_SHIPPED_VESS,dataIndex:"fconVesselVoyage"},
		{header:C_VESS_NAME_CN,dataIndex:"fconVessNameCn"},
		{header:C_POL,dataIndex:"fconPolEn"},
		{header:C_POD,width:100,dataIndex:"fconPodEn"},inspFlag,invFlag,
		{header:C_CUDE_TYPE,width:60,dataIndex:"fconCudeType",renderer:getCUTY}
		],defaults:{sortable:true,width:100}});
	this.showFcon=function(p,store){
		var t=T_MAIN.getComponent('T_FCON_'+p.get("id"));
		if(t){T_MAIN.setActiveTab(t);}
		else {t=T_MAIN.add(new Fos.FConTab(p,store));T_MAIN.setActiveTab(t);t.doLayout();}
	};
	this.add = function(){
    	var p = new FContract({id:GGUID(),fconId:0,fconNo:'',custId:'',custName:'',custContact:'',custTel:'',custFax:'',fconContractNo:'',
    	fconContractQuantity:'',fconForcastQuantity:'',fconShippedQuantity:'',fconFactQuantity:'',
    	fconUnit:'MT',fconShipper:'',fconConsignee:'',fconPol:getCFG('BASE_PORT'),fconPolEn:getCFGD('BASE_PORT'),
    	fconPod:'',fconPodEn:'',fconCargoDesc:'',fconUnitPriceR:'',fconTotalPriceR:'',
    	fconUnitPriceP:'',fconTotalPriceP:'',fconLoadDate:'',fconShipDateF:'',fconShipDateT:'',
    	voyaShipDateF:'',voyaShipDateT:'',fconVesselVoyage:'',fconCarrier:'',fconRemarks:'',fconStatus:'0',
    	version:'0',rowAction:'N'});
    	this.showFcon(p,store);
	};
	this.copy = function(){var p = sm.getSelected();
		if(p){
			var rid=GGUID();
			var c = new FContract({});
			var f = FContract.prototype.fields;
			for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];c.set(fn,p.get(fn));};
			c.set('id',rid);
			c.set('fconId',rid);
			c.set('fconNo','');
			c.set('fconContractNo','');
			c.set('fconShippedQuantity','');
			c.set('fconFactQuantity','');
			c.set('voyaShipDateF','');
			c.set('voyaShipDateT','');
			c.set('fconVesselVoyage','');
			c.set('fconCarrier','');
			c.set('fconRemarks','');
			c.set('fconStatus','0');
			c.set('version','0');
			c.set('rowAction','N');
			this.showFcon(c,store);
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.removeContract = function(){
		var a =sm.getSelections();
       	if(a.length>0){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var b = false;
               	for(var i=0;i<a.length;i++){if(a[i].get('fconStatus')!='0'){b=true;break;}}
               	if(b) XMG.alert(SYS,M_FCON_SHIPPED);
               	else {
               		var xml = SMTX4R(sm,'FContract','fconId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'FCON_S'},scope:this,
					success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}
           }},this);
		}
       	else XMG.alert(SYS,M_R_P);
    };
	this.search = function(){var w=new Fos.FConLookup(store,T);w.show();};
	this.edit = function(){
		var p=sm.getSelected();
		if(p){this.showFcon(p,store);}
		 else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.showPali = function(){
		var p = sm.getSelected();
		if(p){
			var t=T_MAIN.getComponent('T_PALI_'+p.get("id"));if(t){T_MAIN.setActiveTab(t);}
			else {t=T_MAIN.add(new Fos.PaliTab(p));T_MAIN.setActiveTab(t);t.doLayout();}
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
	this.fastSearch=function(){
		var fconContractNo=kw.getValue();
		if(!fconContractNo){XMG.alert(SYS,M_NO_QUERY_P);return;};
     	var a=[];
     	var c=fconContractNo.indexOf(',');
        var b=fconContractNo.indexOf('..');
        if(c>=0){
            a[a.length]=new QParam({key:'fconContractNo',value:fconContractNo,op:IN});
        }
        else if(b>=0){
            var ra=consNo.split('..');
            a[a.length]=new QParam({key:'fconContractNo',value:ra[0],op:GE});
            a[a.length]=new QParam({key:'fconContractNo',value:ra[1],op:LE});
        }
        else
        	a[a.length]=new QParam({key:'fconContractNo',value:fconContractNo,op:LI});
     	store.baseParams={mt:'xml',xml:FOSX(QTX(a))};
     	store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
	};
	var b8={text:C_FAST_SEARCH,iconCls:'search',handler:this.fastSearch};
	var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
	var re= {scope:this,rowdblclick: function(g,r,e){var c=sm.getSelected();if(c){this.showFcon(c,store);}}};
	/*new Ext.KeyMap(Ext.getDoc(), {
		key:'nmdcflq',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_FCON_'+T);
		 	if(tc && tc==T_MAIN.getActiveTab()){
		 		var tb=this.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.N:
					if(!tb.getComponent('TB_N').disabled) this.add();break;
		 		case Ext.EventObject.M:
					if(!tb.getComponent('TB_M').disabled) this.edit();break;
		 		case Ext.EventObject.D:
		 			if(!tb.getComponent('TB_R').disabled) this.removeContract();break;
		 		case Ext.EventObject.C:
		 			if(!tb.getComponent('TB_C').disabled) this.copy();break;	 		
		 		case Ext.EventObject.F:
		 			if(!tb.getComponent('TB_F').disabled) this.search();break;
				case Ext.EventObject.L:
					if(!tb.getComponent('TB_L').disabled) this.showPali();break;
				case Ext.EventObject.Q:
					if(!tb.getComponent('TB_Q').disabled) this.fastSearch();break;
				}
		 	}
		},stopEvent:true,scope:this});
    new Ext.KeyMap(Ext.getDoc(), {
        key:[116],
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_FCON_'+T);
            if(tc && tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
       var tc = T_MAIN.getComponent('G_FCON_'+T);
            if(tc && tc==T_MAIN.getActiveTab()){
            var pt = this.getBottomToolbar();
            if (!pt[page].disabled) pt.onClick(page);
         }
    };
    this.nav = new Ext.KeyNav(Ext.getDoc(),{
        pageDown: this.pagingNav.createDelegate(this,['next']),
        pageUp: this.pagingNav.createDelegate(this, ['prev']),
        home: this.pagingNav.createDelegate(this,['first']),
        end: this.pagingNav.createDelegate(this,['last']),
        scope:this
    });*/
    this.expStation=function(){
    	var w = new Fos.StationWin();
		w.addButton({text:C_OK,handler:function(){
			var stationId = w.findById('paliStationId').getValue();
			EXP('C','PLAC_E',store.baseParams.xml?'&mt=JSON&placId='+stationId+'&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON&placId='+stationId);
			w.close();
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
		w.show();    	
    };
    var vc={forceFit:false,showGroupName:true,enableNoGroups:true,hideGroupedColumn:true,
        groupTextTpl: '{text} ({[values.rs.length]} {["Items"]})'};
	Fos.ContractListTab.superclass.constructor.call(this, {
    id:'G_FCON_'+T,iconCls:'grid',store:store,title:C_FCON_LIST+'-'+(T=='S'?S_SHIP_S:S_SHIP_P),header:false,loadMask:true,
	sm:sm,cm:cm,stripeRows:true,closable:true,view:new Ext.grid.GroupingView(vc),plugins:[expander,summary],listeners:re,	
	tbar:[{itemId:'TB_N',text:C_ADD+'(N)',disabled:NR(M1_B+M2_R+F_M),iconCls:'add',scope:this,handler:this.add},'-',
		{itemId:'TB_R',text:C_REMOVE+'(D)',disabled:NR(M1_B+M2_R+F_R),iconCls:'remove',scope:this,handler:this.removeContract},'-',
		{itemId:'TB_M',text:C_EDIT+'(M)',disabled:NR(M1_B+M2_R+F_V),iconCls:'option',scope:this,handler:this.edit},'-',
		{itemId:'TB_C',text:C_COPY+'(C)',iconCls:'copy',disabled:NR(M1_B+M2_R+F_M),scope:this,handler:this.copy},'-',
		{itemId:'TB_F',text:C_SEARCH+'(F)',iconCls:'search',scope:this,handler:this.search},'-',
		{itemId:'TB_L',text:C_PACKING_LIST+'(L)',iconCls:'grid',disabled:false,scope:this,handler:this.showPali},'-',kw,
		b8,'-',b9,'-',
		{text:C_EXPORT,iconCls:'print',scope:this,menu: {items:[
			    {text:C_PACKING_STATION,scope:this,handler:this.expStation}
			    ]}},'-'],
	bbar:PTB(store,C_PS)
    });
};
Ext.extend(Fos.ContractListTab,Ext.grid.GridPanel);

//租船合同编辑页面
Fos.FConTab = function(p,store) {
 	var frm = {layout:'column',border:false,	
	items:[{columnWidth:.5,layout:'form',border:false,items:[
			{fieldLabel:C_CHARTER,itemCls:'required',tabIndex:1,name:'charterName',value:p.get('charterName'),store:getCS(),enableKeyEvents:true,
				xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
				mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',selectOnFocus:true,anchor:'95%',
			  	listeners:{scope:this,
			  	blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('charterId','');p.set('charterName','');}},
			  	select:function(c,r,i){
			  		p.set('charterId',r.get('custId'));
			  		p.set('charterSname',r.get('custCode'));
			  		p.set('custContact',r.get('custContact'));
					p.set('custTel',r.get('custTel'));
					p.set('custFax',r.get('custFax'));
					if(!p.get('custId')){
							p.set('custId',r.get('custId'));
							p.set('custName',r.get('custNameCn'));
							p.set('custSname',r.get('custCode'));
							this.find('name','custName')[0].setValue(r.get('custNameCn'));};
					},
				keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}}]},
			{columnWidth:.5,layout:'form',border:false,defaultType:'textfield',items:[
				{fieldLabel:C_SHIPPER,itemCls:'required',tabIndex:2,name:'custName',value:p.get('custName'),store:getCS(),enableKeyEvents:true,
        		xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',selectOnFocus:true,anchor:'95%',
              	listeners:{scope:this,
              	blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('custId','');p.set('custName','');}},
              	select:function(c,r,i){p.set('custId',r.get('custId'));
              			p.set('custName',r.get('custNameCn'));
              			p.set('custSname',r.get('custSnameCn'));
					},
				keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}}]},
			{columnWidth:.25,layout:'form',border:false,defaultType:'textfield',items:[
				{fieldLabel:C_CONTRACT_NO,itemCls:'required',tabIndex:3,name:'fconContractNo',value:p.get('fconContractNo'),anchor:'95%'},
            	{fieldLabel:C_FORCAST_QUANTITY,tabIndex:7,name:'fconForcastQuantity',value:p.get('fconForcastQuantity'),xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
            	{fieldLabel:C_FORCAST_CBM,tabIndex:7,name:'fconForcastCbm',value:p.get('fconForcastCbm'),xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
            	{fieldLabel:C_FORCAST_LOAD_DATE,tabIndex:11,name:'fconLoadDate',value:p.get('fconLoadDate'),xtype:'datefield',format:DATEF,anchor:'95%'},
            	{fieldLabel:C_POL,itemCls:'required',tabIndex:15,name:'consPol',value:p.get('fconPol'),store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
              		listeners:{scope:this,select:function(c,r,i){p.set('fconPolEn',r.get('portNameEn'));}}},
              	{fieldLabel:C_TTER+C_R,tabIndex:19,name:'tranId',value:p.get('tranId'),store:getTTB_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                    listeners:{scope:this,select:function(c,r,i){p.set('tranName',r.get('tranCode'));}}},
              	{fieldLabel:C_FREIGHT_UNIT+C_R,tabIndex:23,name:'fconUnitPriceR',value:p.get('fconUnitPriceR'),xtype:'numberfield',decimalPrecision:4,anchor:'95%',
                    listeners:{scope:this,change:function(f,nv,ov){
                    	var q=this.find('name','fconForcastQuantity')[0].getValue();
                    	this.find('name','fconTotalPriceR')[0].setValue(round2(nv*q));}}},
                {fieldLabel:C_CARGO_NAME_CN,tabIndex:27,name:'cargNameCn',value:p.get('cargNameCn'),anchor:'95%'},
                {fieldLabel:C_BL_PACKAGES,name:'blCargoPackages',value:p.get('blCargoPackages'),disabled:true,xtype:'numberfield',anchor:'95%'}                    	
            ]},
            {columnWidth:.25,layout:'form',border:false,defaultType:'textfield',items:[
				{fieldLabel:C_CONTRACT_QUANTITY,tabIndex:4,name:'fconContractQuantity',value:p.get('fconContractQuantity'),xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
				{fieldLabel:C_SHIPPED_QUANTITY,tabIndex:8,name:'fconShippedQuantity',value:p.get('fconShippedQuantity'),disabled:true,xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
				{fieldLabel:C_SHIPPED_CBM,tabIndex:8,name:'fconShippedCbm',value:p.get('fconShippedCbm'),disabled:true,xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
				{fieldLabel:C_FORCAST_SHIP_DATE_F,tabIndex:12,name:'fconShipDateF',value:p.get('fconShipDateF'),xtype:'datefield',format:DATEF,anchor:'95%'},
				{fieldLabel:C_POD,itemCls:'required',tabIndex:16,name:'fconPodEn',value:p.get('fconPodEn'),store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
	              	tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
	              	listeners:{scope:this,
	              		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPod','');}},
	              		select:function(c,r,i){p.set('fconPod',r.get('portId'));},
	              		keydown:{fn:LP,buffer:BF}}},
	            {fieldLabel:C_TTER+C_P,tabIndex:20,name:'tranIdCarrier',value:p.get('tranIdCarrier'),store:getTTB_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
	            	listeners:{scope:this,select:function(c,r,i){p.set('tranNameCarrier',r.get('tranCode'));}}},
	            {fieldLabel:C_FREIGHT_TOTAL+C_R,tabIndex:24,name:'fconTotalPriceR',value:p.get('fconTotalPriceR'),xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
	            {fieldLabel:C_INV_FLAG,xtype:'checkbox',tabIndex:28,name:'fconInvoiceFlag',checked:p.get('fconInvoiceFlag')=='1',anchor:'95%'},
	            {fieldLabel:C_BL_GW,name:'blCargoGrossWeight',value:p.get('blCargoGrossWeight'),disabled:true,xtype:'numberfield',anchor:'95%'}
			]},
            {columnWidth:.25,layout:'form',border:false,defaultType: 'textfield',
            items: [
				{fieldLabel:C_CBM,tabIndex:5,name:'fconForcastCbm',value:p.get('fconForcastCbm'),xtype:'numberfield',decimalPrecision:4,anchor:'95%'},
				{fieldLabel:C_FACT_QUANTITY,tabIndex:9,disabled:true,name:'fconFactQuantity',value:p.get('fconFactQuantity'),xtype:'numberfield',decimalPrecision:4,anchor:'95%'},
				{fieldLabel:C_FACT_CBM,tabIndex:9,disabled:true,name:'fconFactCbm',value:p.get('fconFactCbm'),xtype:'numberfield',decimalPrecision:4,anchor:'95%'},
				{fieldLabel:C_FORCAST_SHIP_DATE_T,tabIndex:13,name:'fconShipDateT',value:p.get('fconShipDateT'),xtype:'datefield',format:DATEF,anchor:'95%'},
				{fieldLabel:C_OPERATOR,itemCls:'needed',tabIndex:17,name:'fconOperatorId',value:p.get('fconOperatorId'),store:getOP_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
					listeners:{scope:this,
					blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('fconOperatorId','');p.set('fconOperatorName','');}},
			    	select:function(c,r,i){p.set('fconOperatorName',r.get('userName'));}}},
				{fieldLabel:C_PATE+C_R,tabIndex:21,name:'pateIdR',value:p.get('pateIdR'),store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
            		listeners:{scope:this,select:function(c,r,i){p.set('pateNameR',r.get('pateName'));}}},
            	{fieldLabel:C_FREIGHT_UNIT+C_P,tabIndex:25,name:'fconUnitPriceP',value:p.get('fconUnitPriceP'),xtype:'numberfield',decimalPrecision:6,anchor:'95%',
           			listeners:{scope:this,change:function(f,nv,ov){
            			var q=this.find('name','fconForcastQuantity')[0].getValue();
            			this.find('name','fconTotalPriceP')[0].setValue(round2(nv*q));
            	}}},
            	{fieldLabel:C_CUDE_TYPE,name:'fconCudeType',tabIndex:29,value:p.get('fconCudeType'),xtype:'combo',store:CUTY_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
            	{fieldLabel:C_BL_NW,name:'blCargoNetWeight',value:p.get('blCargoNetWeight'),disabled:true,xtype:'numberfield',anchor:'95%'}
            ]},
            {columnWidth:.25,layout:'form',border:false,defaultType:'textfield',items: [
				{fieldLabel:C_PACK,tabIndex:6,name:'packId',value:p.get('packId'),xtype:'combo',store:getPACK_S(),displayField:'packName',valueField:'packId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
					listeners:{scope:this,select:function(c,r,i){p.set('packName',r.get('packName'));}}},
            	{fieldLabel:C_UNIT_CUST,tabIndex:10,name: 'unitId',value:p.get('unitId'),xtype:'combo',store:getUNIT_S(),displayField:'unitName',valueField:'unitId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
            		listeners:{scope:this,select:function(c,r,i){p.set('unitName',r.get('unitName'));}}},
            	{fieldLabel:C_UNIT_CARRIER,tabIndex:10,name: 'unitIdCarrier',value:p.get('unitIdCarrier'),xtype:'combo',store:getUNIT_S(),displayField:'unitName',valueField:'unitId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                    listeners:{scope:this,select:function(c,r,i){p.set('unitNameCarrier',r.get('unitNameCarrier'));}}},
            	{fieldLabel:C_SHLI,itemCls:'required',tabIndex:14,name:'shliId',value:p.get('shliId'),store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                    listeners:{scope:this,select:function(c,r,i){p.set('shliName',r.get('shliName'));}}},
            	{fieldLabel:C_SALES,itemCls:'needed',tabIndex:18,name:'fconSalesRepId',value:p.get('fconSalesRepId'),store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
            		listeners:{scope:this,
					blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('fconSalesRepId','');p.set('fconSalesRepName','');}},
			    	select:function(c,r,i){p.set('fconSalesRepName',r.get('userName'));}}},
                {fieldLabel:C_PATE+C_P,tabIndex:22,name:'pateIdP',value:p.get('pateIdP'),store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                   	listeners:{scope:this,select:function(c,r,i){p.set('pateNameP',r.get('pateName'));}}},
             	{fieldLabel:C_FREIGHT_TOTAL+C_P,tabIndex:26,name:'fconTotalPriceP',value:p.get('fconTotalPriceP'),xtype:'numberfield',decimalPrecision:4,anchor:'95%'},
             	{fieldLabel:C_INSP_FLAG,xtype:'checkbox',tabIndex:30,name:'fconInspectionFlag',checked:p.get('fconInspectionFlag')=='1',anchor:'95%'},
             	{fieldLabel:C_BL_CBM,name:'blCargoMeasurement',value:p.get('blCargoMeasurement'),disabled:true,xtype:'numberfield',anchor:'95%'}
            ]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
            items: [{fieldLabel:C_SHIPPER,tabIndex:31,labelAlign:top,name:'fconShipper',value:p.get('fconShipper'),xtype:'textarea',height:100,anchor:'95%'}
            ]},            
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
            items: [{fieldLabel:C_CARGO_DESC,tabIndex:32,name:'fconCargoDesc',value:p.get('fconCargoDesc'),xtype:'textarea',height:100,anchor:'95%'}
            ]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_CONSIGNEE,tabIndex:33,name:'fconConsignee',value:p.get('fconConsignee'),xtype:'textarea',height:100,anchor:'95%'}
            ]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_SERVICE_SPEC,tabIndex:34,name:'fconServiceSpec',value:p.get('fconServiceSpec'),xtype:'textarea',height:100,anchor:'95%'}
            ]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
            	items: [{fieldLabel:C_NOTIFIER,tabIndex:35,name:'fconNotifyParty',value:p.get('fconNotifyParty'),xtype:'textarea',height:100,anchor:'95%'}
            ]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
            items: [{fieldLabel:C_REMARKS,tabIndex:36,name:'fconRemarks',value:p.get('fconRemarks'),xtype:'textarea',height:100,anchor:'95%'}
            ]}
         ]};	
	this.save=function(){
		var f=this.getForm();
		if(!p.get('charterId')){
			XMG.alert(SYS,M_CHARTER_REQIRED,function(){this.find('name','charterName')[0].focus();},this);return;};
		if(!p.get('custId')){
			XMG.alert(SYS,M_SHIPPER_REQIRED,function(){this.find('name','custName')[0].focus();},this);return;};
		if(this.find('name','fconContractNo')[0].getValue()==''){
			XMG.alert(SYS,M_CONTRACT_NO_REQIRED,function(){this.find('name','fconContractNo')[0].focus();},this);return;};
		if(!p.get('fconPod')){
			XMG.alert(SYS,M_POD_REQIRED,function(){this.find('name','fconPodEn')[0].focus();},this);return;};
		if(!p.get('shliName')){
            XMG.alert(SYS,M_SHLI_REQIRED,function(){this.find('name','shliId')[0].focus();},this);return;};
		if(f.isValid()){
			f.updateRecord(p);
   			var xml=RTX(p,'FContract',FContract);
   			Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'FCON_S'},scope:this,
					success: function(res,o){
		   				var ra=p.get('rowAction');
   						var c = XTR(res.responseXML,'FContract',FContract);
		   				var f = FContract.prototype.fields;
		   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};
						if(ra=='N') store.insert(0,p);
						XMG.alert(SYS,M_S);},
					failure: function(res,o){XMG.alert(SYS,M_F+res.responseText);},
					xmlData:FOSX(xml)
			});
		}
		else{frmValidatePrompt();}
	};
	/*new Ext.KeyMap(Ext.getDoc(), {
		key:'s',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_FCON_'+p.get('id'));
		 	if(tc){
			 	if(tc==T_MAIN.getActiveTab())
			 	{
			 		var tb=this.getTopToolbar();
			 		switch(k) {
			 		case Ext.EventObject.S:
						if(!tb.getComponent('TB_S').disabled) this.save();break;			 		
					}
			 	}
		 	}
		},stopEvent:true,scope:this});*/
    Fos.FConTab.superclass.constructor.call(this, {id:'T_FCON_'+p.get('id'),title:C_FCON+'-'+p.get('fconId'),modal:true,width:800,minWidth:600,
        minHeight:200,plain:false,bodyStyle:'padding:10px;',buttonAlign:'right',closable:true,items:frm,autoScroll:true,
        tbar:[{itemId:'TB_S',text:C_SAVE+'(S)',iconCls:'save',disabled:NR(M1_B+M2_R+F_M),scope:this,handler:this.save},'->',
              '-',{itemId:'TB_M',disabled:true,text:C_STATUS+'：'+getCTST(p.get('fconStatus'))},'-']
    });
};
Ext.extend(Fos.FConTab,Ext.FormPanel);

Fos.FConLookup = function(store,T){
	this.reload=function(){
     	var a=[];
     	var custId=t.find('name','custId')[0].getValue();
     	if(custId) a[a.length]=new QParam({key:'custId',value:custId,op:EQ});     		
     	var shliId=t.find('name','shliId')[0].getValue();
     	if(shliId) a[a.length]=new QParam({key:'shliId',value:shliId,op:EQ});
     	var fconStatus=t.find('name','fconStatus')[0].getValue();
     	if(fconStatus) a[a.length]=new QParam({key:'fconStatus',value:fconStatus,op:EQ});
     	var fconPol=t.find('name','fconPol')[0].getValue();        		
     	if(fconPol) a[a.length]=new QParam({key:'fconPol',value:fconPol,op:EQ});
     	var fconPod=t.find('name','fconPod')[0].getValue();        		
     	if(fconPod) a[a.length]=new QParam({key:'fconPod',value:fconPod,op:EQ});
     	var fconContractNo=t.find('name','fconContractNo')[0].getValue();        		
     	if(fconContractNo) a[a.length]=new QParam({key:'fconContractNo',value:fconContractNo,op:EQ});     	
     	var fconCarrier=t.find('name','fconCarrier')[0].getValue();        		
     	if(fconCarrier) a[a.length]=new QParam({key:'fconCarrier',value:fconCarrier,op:LI});
     	var fconVesselVoyage=t.find('name','fconVesselVoyage')[0].getValue();        		
     	if(fconVesselVoyage) a[a.length]=new QParam({key:'fconVesselVoyage',value:fconVesselVoyage,op:LI});     	
     	var fconForcastQuantity=t.find('name','fconForcastQuantity')[0].getValue();
     	var fconForcastQuantity2=t.find('name','fconForcastQuantity2')[0].getValue();
   		if(fconForcastQuantity && fconForcastQuantity2){
   			a[a.length]=new QParam({key:'fconForcastQuantity',value:fconForcastQuantity,op:GE});
   			a[a.length]=new QParam({key:'fconForcastQuantity',value:fconForcastQuantity2,op:LE});
   		}
   		else if(fconForcastQuantity) 
   			a[a.length]=new QParam({key:'fconForcastQuantity',value:fconForcastQuantity,op:EQ});
   		
     	var fconLoadDate=t.find('name','fconLoadDate')[0].getValue();
     	var fconLoadDate2=t.find('name','fconLoadDate2')[0].getValue();
   		if(fconLoadDate && fconLoadDate2){
   			a[a.length]=new QParam({key:'fconLoadDate',value:fconLoadDate.format(DATEF),op:GE});
   			a[a.length]=new QParam({key:'fconLoadDate',value:fconLoadDate2.format(DATEF),op:LE});
   		}
   		else if(fconLoadDate) a[a.length]=new QParam({key:'fconLoadDate',value:fconLoadDate.format(DATEF),op:EQ});
     	
     	var fconShipDateF=t.find('name','fconShipDateF')[0].getValue();
     	var fconShipDateT=t.find('name','fconShipDateT')[0].getValue();
   		if(fconShipDateF && fconShipDateT){
   			a[a.length]=new QParam({key:'fconShipDateF',value:fconShipDateF.format(DATEF),op:GE});
   			a[a.length]=new QParam({key:'fconShipDateT',value:fconShipDateT.format(DATEF),op:LE});
   		}
   		else if(fconShipDateF) 
   			a[a.length]=new QParam({key:'fconShipDateF',value:fconShipDateF.format(DATEF),op:EQ});
   		
   		var voyaShipDateF=t.find('name','voyaShipDateF')[0].getValue();
     	var voyaShipDateT=t.find('name','voyaShipDateT')[0].getValue();
   		if(voyaShipDateF && voyaShipDateT){
   			a[a.length]=new QParam({key:'voyaShipDateF',value:voyaShipDateF.format(DATEF),op:GE});
   			a[a.length]=new QParam({key:'voyaShipDateT',value:voyaShipDateT.format(DATEF),op:LE});
   		}
   		else if(voyaShipDateF) 
   			a[a.length]=new QParam({key:'voyaShipDateF',value:voyaShipDateF.format(DATEF),op:EQ});
   		
   		var voyaSailDate=t.find('name','voyaSailDate')[0].getValue();
     	var voyaSailDate2=t.find('name','voyaSailDate2')[0].getValue();
   		if(voyaSailDate && voyaSailDate2){
   			a[a.length]=new QParam({key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:GE});
   			a[a.length]=new QParam({key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:LE});
   		}
   		else if(voyaSailDate) 
   			a[a.length]=new QParam({key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:EQ});

		var voyaSailedFlag=t.find('name','voyaSailedFlag')[0].getValue();
   		if(voyaSailedFlag) a[a.length]=new QParam({key:'voyaSailedFlag',value:'0',op:EQ});
   		
   		a[a.length]=new QParam({key:'fconStatus',value:2,op:T=='S'?EQ:NE});
     	store.baseParams={mt:'xml',xml:FOSX(QTX(a))};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};	
	var t = new Ext.Panel({layout:'column',
		items:[{columnWidth:.5,layout:'form',border:false,labelWidth:100,labelAlign:"right",
	    	items:[{fieldLabel:C_BOOKER,name:'custId',store:getCS(),
	        		xtype:'combo',displayField:'custCode',valueField:'custId',
	        		typeAhead:true,enableKeyEvents:true,
	        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
	        		triggerAction:'all',selectOnFocus:true,anchor:'90%',
	              	listeners:{scope:this,
	              		keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},	        	
				{fieldLabel:C_SHLI,name:'shliId',store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_POL,name:'fconPol',store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	        	{fieldLabel:C_FORCAST_QUANTITY+'(>=)',name:'fconForcastQuantity',xtype:'numberfield',anchor:'90%'},
	        	{fieldLabel:C_FORCAST_LOAD_DATE,name:'fconLoadDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_FORCAST_SHIP_DATE,tabIndex:8,name:'fconShipDateF',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_SHIP_DATE_F,tabIndex:8,name:'voyaShipDateF',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_SAIL_DATE,tabIndex:8,name:'voyaSailDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_CARRIER,name:'fconCarrier',store:getCS(),enableKeyEvents:true,
	        		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	        		listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:BF}}},
     			{fieldLabel:C_NOT_SAILED,name:'voyaSailedFlag',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
	        	]},
	      	{columnWidth:.5,layout:'form',border:false,labelWidth:100,labelAlign:"right",
	   		items:[{fieldLabel:C_CONTRACT_NO,name:'fconContractNo',xtype:'textfield',anchor:'90%'},	
	   		    {fieldLabel:C_STATUS,name:'fconStatus',store:CTST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	   		    {fieldLabel:C_POD,tabIndex:47,name:'fconPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
              		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,
              			keydown:{fn:LP,buffer:BF}}},
              	{fieldLabel:C_FORCAST_QUANTITY+'(<=)',name:'fconForcastQuantity2',xtype:'numberfield',anchor:'90%'},
	        	{fieldLabel:C_TO,name:'fconLoadDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_TO,tabIndex:9,name:'fconShipDateT',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_TO,tabIndex:9,name:'voyaShipDateT',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_TO,tabIndex:8,name:'voyaSailDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_VESS_VOYA,name:'fconVesselVoyage',xtype:'textfield',anchor:'90%'}
	        	]}
			]});
		
    Fos.FConLookup.superclass.constructor.call(this, {title:C_FCON_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:t,
		buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.FConLookup, Ext.Window);

