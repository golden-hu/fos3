//运价查询窗口
Fos.PrshLookupWin = function(store) {    
	var frmLookup = new Ext.form.FormPanel({labelWidth:70,labelAlign:"right",
    	items:[{id:'T_PRSH_LOOK',layout:'column',items:[
       			{columnWidth:.33,layout:'form',border:false,
             	items:[
             	{fieldLabel:C_CARRIER,tabIndex:1,name:'prshCarrier',store:getCS(),enableKeyEvents:true,
             		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
             		listeners:{scope:this,
						keydown:function(f,e){LC(f,e,'custCarrierFlag');}}},             	
             	{fieldLabel:C_CONTRACT_NO,tabIndex:4,name:'prshContractNo',xtype:'textfield',anchor:'90%'},
             	{fieldLabel:C_VESS,tabIndex:7,name:'vessId',store:getVES(),enableKeyEvents:true,
             		xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
              			listeners:{scope:this,select:function(c,r,i){
              				this.find('name','voyaId')[0].store.reload({params:{vessId:r.get('vessId')}});},
              				keydown:function(f,e){LV(f,e);}}},
             	{fieldLabel:C_POD,tabIndex:10,name:'prliPod',xtype:'combo',displayField:'portNameEn',valueField:'portId',anchor:'90%',
            		mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
            		store:getPS(),tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
            			listeners:{scope:this,
            			keydown:{fn:LP,buffer:BF}
            		}},            	
              	{fieldLabel:C_POT,tabIndex:13,name:'prliPotEn',xtype:'textfield',anchor:'90%'},             	
              	{fieldLabel:C_CACL,tabIndex:16,name:'caclId',store:getCACL_S(),xtype:'combo',displayField:'caclNameCn',valueField:'caclId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
             	{fieldLabel:C_SHIP_DATE,tabIndex:19,name:'prliShipDate',xtype:'textfield',anchor:'90%'}
             	]},
             	{columnWidth:.33,layout:'form',border:false,
             	items:[
             	{fieldLabel:C_BOOK_AGENCY,tabIndex:2,name:'prshVendorId',store:getCS(),enableKeyEvents:true,
             		xtype:'combo',displayField:'custNameCn',valueField:'custId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
             		listeners:{scope:this,keydown:function(f,e){LC(f,e,'custBookingAgencyFlag');}}},
             	{fieldLabel:C_SHLI,tabIndex:5,name:'shliId',store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
             	{fieldLabel:C_VOYA,tabIndex:8,name:'voyaId',store:getVS(),xtype:'combo',displayField:'voyaName',valueField:'voyaId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
          		{fieldLabel:C_PATE,tabIndex:11,name:'pateId',store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
             	{fieldLabel:C_EFFECT_DATE,tabIndex:14,name:'prshStartDate',xtype:'datefield',format:DATEF,anchor:'90%'},
             	{fieldLabel:C_EXPIRY_DATE,tabIndex:17,name:'prshEndDate',xtype:'datefield',format:DATEF,anchor:'90%'}
             	]},
             	{columnWidth:.34,layout:'form',border:false,
             	items:[	             	
             	{fieldLabel:C_BIZ_TYPE,tabIndex:3,name:'prshBizType',store:BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
             	{fieldLabel:C_POL,tabIndex:6,name:'prshPol',store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
             	{fieldLabel:C_STATUS,tabIndex:9,name:'prshStatus',store:PSST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
             	{fieldLabel:C_TTER,tabIndex:12,name:'tranId',store:getTRAN_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
             	{fieldLabel:C_TO,tabIndex:15,name:'prshStartDate2',xtype:'datefield',anchor:'90%'},
             	{fieldLabel:C_TO,tabIndex:18,name:'prshEndDate2',xtype:'datefield',anchor:'90%'}
             	]}
        	]}
        ]
    });
    this.reload=function(){
     	var a=[];var op=1;
     	var prshVendorId=frmLookup. find('name','prshVendorId')[0].getValue();
     	if(prshVendorId) a[a.length]={key:'prshVendorId',value:prshVendorId,op:op};
     	var prshContractNo=frmLookup.find('name','prshContractNo')[0].getValue();        		
     	if(prshContractNo) a[a.length]={key:'prshContractNo',value:prshContractNo,op:op};
     	var vessId=frmLookup.find('name','vessId')[0].getValue();        		
     	if(vessId) a[a.length]={key:'vessId',value:vessId,op:op};
     	var pateId=frmLookup.find('name','pateId')[0].getValue();        		
     	if(pateId) a[a.length]={key:'pateId',value:pateId,op:op};
     	var prliShipDate=frmLookup.find('name','prliShipDate')[0].getValue();        		
    	if(prliShipDate) a[a.length]={key:'prliShipDate',value:prliShipDate,op:op};
    	var prshCarrier=frmLookup.find('name','prshCarrier')[0].getValue();        		
    	if(prshCarrier) a[a.length]={key:'prshCarrier',value:prshCarrier,op:op};
    	var shliId=frmLookup.find('name','shliId')[0].getValue();        		
    	if(shliId) a[a.length]={key:'shliId',value:shliId,op:op};
    	var voyaId=frmLookup.find('name','voyaId')[0].getValue();        		
    	if(voyaId) a[a.length]={key:'voyaId',value:voyaId,op:op};
    	var prliPod=frmLookup.find('name','prliPod')[0].getValue();        		
    	if(prliPod) a[a.length]={key:'prliPod',value:prliPod,op:op};
    	var prliPotEn=frmLookup.find('name','prliPotEn')[0].getValue();        		
    	if(prliPotEn) a[a.length]={key:'prliPotEn',value:prliPotEn,op:op};
    	var prshBizType=frmLookup.find('name','prshBizType')[0].getValue();        		
    	if(prshBizType) a[a.length]={key:'prshBizType',value:prshBizType,op:op};
    	var prshPol=frmLookup.find('name','prshPol')[0].getValue();        		
    	if(prshPol) a[a.length]={key:'prshPol',value:prshPol,op:op};
    	var prshStatus=frmLookup.find('name','prshStatus')[0].getValue();        		
    	if(prshStatus) a[a.length]={key:'prshStatus',value:prshStatus,op:op};
    	var caclId=frmLookup.find('name','caclId')[0].getValue();        		
    	if(caclId) a[a.length]={key:'caclId',value:caclId,op:op};
    	var tranId=frmLookup.find('name','tranId')[0].getValue();        		
    	if(tranId) a[a.length]={key:'tranId',value:caclId,op:op};
     		
     	var prshStartDate=frmLookup.find('name','prshStartDate')[0].getValue();
     	var prshStartDate2=frmLookup.find('name','prshStartDate2')[0].getValue();
     	if(prshStartDate && prshStartDate2){
     		a[a.length]={key:'prshStartDate',value:prshStartDate.format(DATEF),op:5};
     		a[a.length]={key:'prshStartDate',value:prshStartDate2.format(DATEF),op:3};
     	}
     	else if(prshStartDate) a[a.length]={key:'prshStartDate',value:prshStartDate,op:op};
     	var prshEndDate=frmLookup.find('name','prshEndDate')[0].getValue();
     	var prshEndDate2=frmLookup.find('name','prshEndDate2')[0].getValue();
     	if(prshEndDate && iprshEndDate2){
     		a[a.length]={key:'prshEndDate',value:prshEndDate.format(DATEF),op:5};
     		a[a.length]={key:'prshEndDate',value:prshEndDate2.format(DATEF),op:3};
     	}
     	else if(prshEndDate) a[a.length]={key:'prshEndDate',value:prshEndDate,op:op};
     	if(a.length>0){
     		store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
   			store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
   		}
   		this.close();
   	};
    Fos.PrshLookupWin.superclass.constructor.call(this, {title:C_PRSH_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:frmLookup,
        buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
        }); 
};
Ext.extend(Fos.PrshLookupWin, Ext.Window);

//运价列表
Fos.PriceSheetGrid = function() {		
 	var store = GS('PRSH_X','CPriceRecord',CPriceRecord,'prliId','DESC','prliId','','',true);
 	store.load({params:{start:0,limit:50}});
	var prshId=0;	
	this.search = function(){var win = new Fos.PrshLookupWin(store);win.show();};
    this.add=function(){
    	var id=GGUID();
		var e = new CPriceSheet({prshId:id,id:id,prshVendorId:'',prshVendorName:'',prshCarrier:'',prshCarrierName:'',
			prshBizType:'A',prshContractNo:'',prshPol:BASE_PORT,prshPolEn:BASE_PORT_NAME,shliId:'',shliName:'',prshShipType:'',
			prshStartDate:new Date(),prshEndDate:'',prshStatus:'0',version:'0',rowAction:'N'});
		var tab = T_MAIN.add(new Fos.PriceSheetTab(e));
		T_MAIN.setActiveTab(tab);
    };    
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_PRSH_NO,dataIndex:"prliId"},
		{header:C_EFFECT_DATE,dataIndex:"prshStartDate"},
		{header:C_EXPIRY_DATE,dataIndex:"prshEndDate"},
		{header:C_CARRIER,width:120,dataIndex:"prshCarrierName"},
		{header:C_POL,dataIndex:"prshPolEn"},
		{header:C_POD,dataIndex:"prliPodEn"},
		{header:C_SHIP_DATE,dataIndex:"prliShipDate"},
		{header:C_POT,dataIndex:"prliPotEn"},
		{header:C_DURATION,dataIndex:"prliDuration"},
		{header:C_CHAR,dataIndex:"charName"},
		{header:C_CURR,dataIndex:"currCode",summaryRenderer: function(v,params,data){return '合计：';}},
		{header:"20'",dataIndex:"prrePriceP20",summaryType:'sum'},
		{header:"40'",dataIndex:"prrePriceP40",summaryType:'sum'},
		{header:"40'H",dataIndex:"prrePriceP40h",summaryType:'sum'},
		{header:"CBM",dataIndex:"prrePricePCbm",summaryType:'sum'},
		{header:"KGS",dataIndex:"prrePricePKgs",summaryType:'sum'},
		{header:"W/M",dataIndex:"prrePricePTon",summaryType:'sum'},		    
        {header:C_REMARKS,dataIndex:"prshRemarks"},
		{header:"20'"+C_SALES_PRICE,dataIndex:"prrePriceS20",summaryType:'sum'},
		{header:"40'"+C_SALES_PRICE,dataIndex:"prrePriceS40",summaryType:'sum'},
		{header:"40'H"+C_SALES_PRICE,dataIndex:"prrePriceS40h",summaryType:'sum'},
		{header:"CBM"+C_SALES_PRICE,dataIndex:"prrePriceSCbm",summaryType:'sum'},
		{header:"KGS"+C_SALES_PRICE,dataIndex:"prrePriceSKgs",summaryType:'sum'},
		{header:"W/M"+C_SALES_PRICE,dataIndex:"prrePriceSTon",summaryType:'sum'},
		{header:C_COMMISION_RATE,dataIndex:"prreCommissionRate"},
		{header:C_PATE,dataIndex:"pateName"},
		{header:C_TTER,dataIndex:"tranName"},			
		{header:C_SHIP_TYPE,dataIndex:"prshShipType",renderer:getSHTY},
		{header:C_STATUS,dataIndex:"prshStatus",renderer:getPSST},
		{header:C_CONTRACT_NO,dataIndex:"prshContractNo"},		
		{header:C_BOOK_AGENCY,width:120,dataIndex:"prshVendorName"},		
		{header:C_SHLI,dataIndex:"shliName"},		
		{header:C_CACL,dataIndex:"caclName"}
		],defaults:{sortable:true,width:60}});
	var re={rowdblclick:function(g,r,e){this.edit();}};
	
	var showPriceSheet= function(p){
		ADDTAB("T_PRSH_" + p.get("id"),function(){ 
			return new Fos.PriceSheetTab(p);
		});
	};
	
	this.edit=function(){
		var c= sm.getSelected();
		if(c){
			var st = GS('PRSH_Q','CPriceSheet',CPriceSheet,'prshId','Desc','');
			st.load({params:{prshId:c.get('prshId')},scope:this,callback:function(r,o,s){if(s) showPriceSheet(r[0]);}});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
	this.expExcel=function(){
		EXPC('PRSH_LIST',store.baseParams.xml?'&mt=JSON&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON');
	};
    var gv=new Ext.grid.GroupingView({showGroupName:true,enableNoGroups:false,hideGroupedColumn:true,
		groupTextTpl: '{text} ({[values.rs.length]} {["Items"]})'});
	var summary = new Ext.grid.GroupSummary();
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nmfe',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_PRSH');
		 	if(tc&&tc==T_MAIN.getActiveTab()){			 	
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(M1_V+V_PRSH+F_M)) this.add();break;
					case Ext.EventObject.M:
						if(!NR(M1_V+V_PRSH+F_V)) this.edit();break;					
					case Ext.EventObject.F:
						this.search();break;
					case Ext.EventObject.E:
						if(!NR(M1_V+V_PRSH+F_E)) this.expExcel();break;
			 		}
		 	}
		},stopEvent:true,scope:this});
	Fos.PriceSheetGrid.superclass.constructor.call(this,{
    id:'G_PRSH',iconCls:'grid',store: store,title:C_PRICE_MANAGEMENT,header:false,autoScroll:true,
	sm:sm,cm:cm,stripeRows:true,closable:true,listeners:re,view:gv,plugins:summary,
	tbar:[{text:C_ADD+'(N)',disabled:NR(M1_V+V_PRSH+F_M),iconCls:'add',scope:this,handler:this.add},'-',
		{text:C_EDIT+'(M)',disabled:NR(M1_V+V_PRSH+F_V),iconCls:'option',scope:this,handler:this.edit},'-',		
		{text:C_SEARCH+'(F)',disabled:NR(M1_V+V_PRSH+F_V),iconCls:'search',scope:this,handler:this.search},'-',
		{text:C_EXPORT+'(E)',disabled:NR(M1_V+V_PRSH+F_E),iconCls:'print',scope:this,handler:this.expExcel},'->',
		new Ext.PagingToolbar({pageSize:50,store:store})
		],
	bbar:PTB(store,50)
    });
};    
Ext.extend(Fos.PriceSheetGrid, Ext.grid.GridPanel);

//运价编辑窗口
Fos.PriceSheetTab = function(p){
	this.prliId=0;
	this.prreId=0;
	this.sel =-100;
	this.resel = false;	
	this.store = GS('PRLI_Q','CPriceLine',CPriceLine,'prliId','Desc','','','',false);
	this.prreStore = GS('PRRE_Q','CPriceRecord',CPriceRecord,'prreId','Desc','','','',false);
	
	if(p.get('rowAction')!='N'){
		this.store.load({params:{prshId:p.get('prshId')},scope:this});
		this.prreStore.load({params:{prshId:p.get('prshId')},callback:function(){
			this.grid.getSelectionModel().selectFirstRow();
		},scope:this});
	};
	var re = {scope:this,
		rowselect:function(se,row,record){
			if(this.resel||this.sel!=record.get('prliId')){
				this.sel=record.get('prliId');
				var s = this.prreGrid.getStore();s.removeAll();				
				var a = this.prreStore.getRange();
				for(var i=0;i<a.length;i++){
					if(a[i].get('prliId')==this.sel && a[i].get('rowAction')!='D' && a[i].get('rowAction')!='R'){
						s.add(a[i]);
					}
				};
			};
			this.resel=false;
		}
	};	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_POD,dataIndex:'prliPodEn',width:80,editor:new Ext.form.ComboBox({displayField:'portNameEn',valueField:'portNameEn',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
            store:getPS(),tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
            listeners:{scope:this,
            	select:function(c,r,i){
            		sm.getSelected().set('prliPod',r.get('portId'));
            		sm.getSelected().set('prliCountryD',r.get('counCode'));
            		sm.getSelected().set('prliCountryDName',getCOUN(r.get('counCode')));            		
            	},
            	keydown:{fn:LP,buffer:BF}}})},
    {header:C_POD_HARBOUR,dataIndex:'prliPodHarbour',width:100,editor:new Ext.form.TextField()},
    {header:C_SHIP_DATE,dataIndex:'prliShipDate',width:100,editor:new Ext.form.TextField()},
	{header:C_POT,dataIndex:'prliPotEn',width:80,editor:new Ext.form.TextField()},
	{header:C_CACL,dataIndex:'caclId',width:60,renderer:getCACL,
			editor:new Ext.form.ComboBox({displayField:'caclNameCn',valueField:'caclId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCACL_S(),
            listeners:{scope:this,select:function(c,r,i){this.grid.getSelectionModel().getSelected().set('caclName',r.get('caclName'));}}})},
	{header:C_PATE,dataIndex:'pateId',width:40,renderer:getPATE,
			editor:new Ext.form.ComboBox({displayField:'pateName',valueField:'pateId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPATE_S(),
            listeners:{scope:this,select:function(c,r,i){this.grid.getSelectionModel().getSelected().set('pateName',r.get('pateName'));}}})},  
	{header:C_TTER,dataIndex:'tranId',width:80,renderer:getTRAN,
			editor:new Ext.form.ComboBox({displayField:'tranCode',valueField:'tranId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getTRAN_S(),
            listeners:{scope:this,select:function(c,r,i){this.grid.getSelectionModel().getSelected().set('tranName',r.get('tranName'));}}})},
	{header:C_DURATION,dataIndex:'prliDuration',width:60,editor:new Ext.form.NumberField({})},
	{header:C_REMARKS,dataIndex:'prliRemarks',width:100,editor:new Ext.form.TextField()}],defaults:{sortable:true,width:100}});
	this.addPrli=function(){
		this.prliId=this.prliId-1;
		var c = new CPriceLine({prliId:this.prliId,prshId:p.get('prshId'),prliCountryD:'',prliCountryT:'',
		prliPod:'',prliPodEn:'',prliPotEn:'',caclId:'',pateId:'',tranId:'',vessId:'',
		voyaId:'',prliShipDate:'',prliRemarks:'',version:'0'});
       	this.store.insert(0,c);c.set('rowAction','N');
       	this.grid.getSelectionModel().selectFirstRow();this.grid.startEditing(0,1);
	};
	this.removePrli=function(){
		var b =this.grid.getSelectionModel().getSelected();
		if(b){
    		b.set('rowAction',b.get('rowAction')=='N'?'D':'R');this.store.remove(b);
    		var s = this.prreGrid.getStore();
			var a = s.getRange();
			for(var i=0;i<a.length;i++){
				a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
				s.remove(a[i]);this.prreStore.remove(a[i]);
			};
		}
	};
	this.grid = new Ext.grid.EditorGridPanel({autoScroll:true,clicksToEdit:1,height:150,
		store:this.store,sm:sm,cm:cm,border:false,		
		tbar:[{text:C_ADD+'(A)',disabled:NR(M1_V+V_PRSH+F_M),iconCls:'add',scope:this,handler:this.addPrli},'-',
		{text:C_REMOVE+'(D)',disabled:NR(M1_V+V_PRSH+F_M),iconCls:'remove',scope:this,handler:this.removePrli}]});
	
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_CHAR,dataIndex:'charName',width:80,renderer:getCHAR,
		editor:new Ext.form.ComboBox({displayField:'charCode',valueField:'charName',triggerAction:'all',
    	tpl:charTpl,itemSelector:'div.list-item',listWidth:300,mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCHAR_S(),
    	listeners:{scope:this,select:function(c,r,i){this.prreGrid.getSelectionModel().getSelected().set('charId',r.get('charId'));}}})},
	{header:C_CURR,dataIndex:"currCode",width:50,
			editor:new Ext.form.ComboBox({displayField:'currCode',valueField:'currCode',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()})},
	{header:C_COMMISION_RATE,dataIndex:'prreCommissionRate',width:80,renderer:rateRender,editor:new Ext.form.NumberField({})},
	{header:"20'",dataIndex:'prrePriceP20',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
	{header:"40'",dataIndex:'prrePriceP40',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
	{header:"40'H",dataIndex:'prrePriceP40h',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
	{header:"CBM",dataIndex:'prrePricePCbm',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
	{header:"KGS",dataIndex:'prrePricePKgs',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
	{header:"TON",dataIndex:'prrePricePTon',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},	
	{header:"20'"+C_SALES_PRICE,dataIndex:'prrePriceS20',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
	{header:"40'"+C_SALES_PRICE,dataIndex:'prrePriceS40',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
	{header:"40'H"+C_SALES_PRICE,dataIndex:'prrePriceS40h',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
	{header:"CBM"+C_SALES_PRICE,dataIndex:'prrePriceSCbm',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
	{header:"KGS"+C_SALES_PRICE,dataIndex:'prrePriceSKgs',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
	{header:"W/M"+C_SALES_PRICE,dataIndex:'prrePriceSTon',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})}
	],defaults:{sortable:true,width:120}});
	this.addPrre=function(){
		var r = this.grid.getSelectionModel().getSelected();
		if(r){this.prreId=this.prreId-1;
			var t = new CPriceRecord({prreId:this.prreId,prliId:r.get('prliId'),prshId:p.get('prshId'),
			currCode:'USD',charId:'',charName:'',prreCommissionRate:'',
			prrePriceP20:'',prrePriceP40:'',prrePriceP40h:'',prrePricePCbm:'',prrePricePKgs:'',prrePricePTon:'',
			compCode:'',verson:'0'});
			this.prreStore.add(t);t.set('rowAction','N');this.prreGrid.getStore().add(t);
			this.prreGrid.getSelectionModel().selectFirstRow();
       		this.prreGrid.startEditing(0,1);
		}
	};
	this.removePrre=function(){
		var r = this.prreGrid.getSelectionModel().getSelections();
		for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
		this.prreGrid.getStore().remove(r[i]);};
	};
	this.prreGrid = new Ext.grid.EditorGridPanel({autoScroll:true,height:250,sm:sm2,cm:cm2,border:false,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'prreId',record:'CPriceRecord'},CPriceRecord),sortInfo:{field:'prreId',direction:'ASC'}}),
		tbar:[{text:C_ADD+'(J)',disabled:NR(M1_V+V_PRSH+F_M),iconCls:'add',scope:this,handler:this.addPrre},'-',
		      {text:C_REMOVE+'(X)',disabled:NR(M1_V+V_PRSH+F_M),iconCls:'remove',scope:this,handler:this.removePrre}]
	});	
	
	this.save=function(){
		this.grid.stopEditing();
		this.prreGrid.stopEditing();		
		p.beginEdit();this.find('name','prshForm')[0].getForm().updateRecord(p);p.endEdit();		
		var rj=RTJ(p,CPriceSheet);
		var raj=[];
		var a =this.store.getModifiedRecords();
		if(a.length>0) raj=ATJ(a,CPriceLine);		
		var cc=[];var rcj=[];
		var ca =this.prreStore.getRange();
		for(var i=0;i<ca.length;i++){if(ca[i].dirty) cc[cc.length]=ca[i];};
		if(cc.length>0) rcj=ATJ(cc,CPriceRecord);		
		var data=FOSJ({'CPriceSheet':rj,'CPriceLine':raj,'CPriceRecord':rcj});		
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'PRSH_S',mt:'JSON'},
			success: function(res){
				var o=Ext.util.JSON.decode(res.responseText);
				var ps = o.CPriceSheet[0];
				p.set('compCode',ps.compCode);
				p.set('version',ps.version);
				p.set('prshId',ps.prshId);
							
				this.store.each(function(r){if(r.dirty){r.set('rowAction','D');this.store.remove(r);}},this);
				if(o.CPriceLine) this.store.loadData(FOSJA(o,'CPriceLine'),true);
				
				this.prreStore.each(function(r){if(r.dirty){r.set('rowAction','D');this.prreStore.remove(r);}},this);
				if(o.CPriceRecord) this.prreStore.loadData(FOSJA(o,'CPriceRecord'),true);
				
				if(this.store.getCount){
					var a = this.store.getRange();
					var sel=a[0];
					for(var i=0;i<a.length;i++){
						if(a[i].get('prliId')==this.sel){sel=a[i];break;};
						if(a[i].get('prliId')>sel.get('prliId')) sel=a[i];
					}
					this.resel=true;
					this.grid.getSelectionModel().selectRecords([sel]);
				}
				XMG.alert(SYS,M_S);
			},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			jsonData:data});
	};
	this.removePrsh=function(){     	
		var xml=RTX4R(p,'CPriceSheet','prshId');
		xml+=STX4R(this.store,'CPriceLine','prliId');
		xml+=STX4R(this.prreStore,'CPriceRecord','prreId');		
     	Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'PRSH_S'},
			success: function(){XMG.alert(SYS,M_S,function(){T_MAIN.remove('T_PRSH_'+p.get('id'))});},
			failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
	};
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'PRSH_U',prshId:p.get('prshId'),prshStatus:s},
		success: function(r){p.set('prshStatus',s);this.updateToolBar();XMG.alert(SYS,M_S);},
		failure: function(r){XMG.alert(SYS,M_F+r.responseText)}});
    };
	this.effect=function(){this.updateStatus(1);};
    this.expiry=function(){this.updateStatus(2);};
    this.updateToolBar = function(){
		var tb=this.getTopToolbar();
		tb.getComponent('TB_A').setDisabled(p.get('prshStatus')!=0);
    	tb.getComponent('TB_B').setDisabled(p.get('prshStatus')!=0);
    	tb.getComponent('TB_C').setDisabled(p.get('prshStatus')!=0);
    	tb.getComponent('TB_D').setDisabled(p.get('prshStatus')!=1);
    	tb.getComponent('TB_M').setText(C_STATUS_C+getPSST(p.get('prshStatus')));
    };
	this.expExcel=function(){EXPC('PRSH','&prshId='+b.get('prshId'));};
	this.expEmail=function(){
		var to='';
		var cc='';
		var sub=C_PRSH;
		var msg='';
		EXPM(to,cc,sub,msg,'PRSH','prshId='+p.get('prshId'));
	};
	new Ext.KeyMap(Ext.getDoc(), {
		key:'sreiadjx',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_PRSH_'+p.get('id'));
		 	if(tc&&tc==T_MAIN.getActiveTab()){			 	
			 		switch(k) {
					case Ext.EventObject.S:
						if(!NR(M1_V+V_PRSH+F_M)) this.save();break;
					case Ext.EventObject.R:
						if(!NR(M1_V+V_PRSH+F_M)) this.removePrsh();break;					
					case Ext.EventObject.E:
						if(!(NR(M1_V+V_PRSH+F_M)||p.get('prshStatus')!='0')) this.effect();break;
					case Ext.EventObject.I:
						if(!(NR(M1_V+V_PRSH+F_M)||p.get('prshStatus')!='1')) this.expiry();break;
					case Ext.EventObject.A:
						if(!NR(M1_V+V_PRSH+F_M)) this.addPrli();break;
					case Ext.EventObject.D:
						if(!NR(M1_V+V_PRSH+F_M)) this.removePrli();break;
					case Ext.EventObject.J:
						if(!NR(M1_V+V_PRSH+F_M)) this.addPrre();break;
					case Ext.EventObject.X:
						if(!NR(M1_V+V_PRSH+F_M)) this.removePrre();break;
			 		}
		 	}
		},stopEvent:true,scope:this});
	Fos.PriceSheetTab.superclass.constructor.call(this, { 
	id:'T_PRSH_'+p.get('id'),title:C_PRSH+'-'+p.get('id'),border:false,autoScroll:true,header:false,deferredRender:false,	
	labelAlign:'right',labelWidth:80,layout:'border',closable:true,
    listeners:{scope:this,render:function(c){}},
    tbar:[
		{text:C_SAVE+'(S)',disabled:NR(M1_V+V_PRSH+F_M),itemId:'TB_A',iconCls:'save',scope:this,handler:this.save},'-',
		{text:C_REMOVE+'(R)',disabled:NR(M1_V+V_PRSH+F_M),itemId:'TB_B',iconCls:'remove',scope:this,handler:this.removePrsh},'-',
		{text:C_EFFECT+'(E)',disabled:NR(M1_V+V_PRSH+F_M)||p.get('prshStatus')!='0',itemId:'TB_C',iconCls:'save',scope:this,handler:this.effect},'-',
		{text:C_EXPIRY+'(I)',disabled:NR(M1_V+V_PRSH+F_M)||p.get('prshStatus')!='1',itemId:'TB_D',iconCls:'cancel',scope:this,handler:this.expiry},'->',
		{itemId:'TB_M',disabled:true,text:C_STATUS_C+getPSST(p.get('prshStatus'))},'-'],
	items: [
		{title:C_PRSH_INFO,name:'prshForm',xtype:'form',region:'north',height:120,layout:'column',layoutConfig:{columns:4},frame:true,deferredRender:false,collapsible:true,items:[
			{columnWidth:.25,layout:'form',labelWidth:60,labelAlign:'right',border:false,items:[
	        	{fieldLabel:C_CARRIER,itemClass:'required',tabIndex:5,name:'prshCarrierName',value:p.get('prshCarrierName'),store:getCS(),enableKeyEvents:true,
	            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
	            	xtype:'combo',displayField:'custCode',valueField:'custCode',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
     					listeners:{scope:this,
     					select:function(c,r,i){
     						p.set('prshCarrier',r.get('custId'));
     						p.set('prshCarrierName',r.get('custNameCn'));
     						c.setValue(r.get('custNameCn'));
     					},
     					keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
     				{fieldLabel:C_SHLI,tabIndex:15,name:'shliId',value:p.get('shliId'),store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
     					listeners:{scope:this,select:function(c,r,i){p.set('shliName',r.get('shliName'));}}}
     			]},
	        	{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_BOOK_AGENCY,tabIndex:2,
	            	name:'prshVendorName',value:p.get('prshVendorName'),store:getCS(),enableKeyEvents:true,
	            	xtype:'combo',displayField:'custCode',valueField:'custCode',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
	            		listeners:{scope:this,
	            		select:function(c,r,i){
	            			p.set('prshVendorId',r.get('custId'));
	            			p.set('prshVendorName',r.get('custNameCn'));
	            			c.setValue(r.get('custNameCn'));
	            		},
	            		keydown:{fn:function(f,e){LC(f,e,'custBookingAgencyFlag');},buffer:500}}},
	            	{fieldLabel:HL(C_POL),tabIndex:43,name:'prshPol',value:p.get('prshPol'),	            				
	            				store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',
	                      		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
	            				triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	            		listeners:{scope:this,keydown:{fn:LP,buffer:BF},select:function(c,r,i){p.set('prshPolEn',r.get('portNameEn'));}}}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[	            	
	           		{fieldLabel:C_VESS,tabIndex:34,name:'vessName',value:p.get('vessName'),store:getVES(),enableKeyEvents:true,
	           			xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',typeAhead:true,mode:'local',
	           			triggerAction:'all',selectOnFocus:true,anchor:'90%',
              			listeners:{scope:this,select:function(c,r,i){p.set('vessId',r.get('vessId'));},
              				keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
              		{fieldLabel:C_EFFECT_DATE,tabIndex:6,name:'prshStartDate',value:p.get('prshStartDate'),xtype:'datefield',format:DATEF,anchor:'90%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_VOYA,itemCls:'required',tabIndex:35,name:'voyaName',value:p.get('voyaName'),xtype:'textfield',anchor:'90%'}
	            ]},
	            {columnWidth:.25,layout:'form',labelWidth:60,labelAlign:'right',border:false,items:[
	                {fieldLabel:C_EXPIRY_DATE,tabIndex:6,name:'prshEndDate',value:p.get('prshEndDate'),xtype:'datefield',format:DATEF,anchor:'90%'}
     			]},
     			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_CONTRACT_NO,tabIndex:6,name:'prshContractNo',value:p.get('prshContractNo'),xtype:'textfield',anchor:'90%'}
	            ]},
	            {columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_POL_HARBOUR,tabIndex:6,name:'prshPolHarbour',value:p.get('prshPolHarbour'),xtype:'textfield',anchor:'90%'}
	            ]},
     			{columnWidth:.5,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
              		{fieldLabel:C_REMARKS,tabIndex:1,name:'prshRemarks',value:p.get('prshRemarks'),xtype:'textfield',anchor:'90%'}
	            ]}
	         ]},
			{title:C_PRLI,region:'west',split:true,width:400,minSize:200,maxSize:600,layout:'fit',items:this.grid},
			{title:C_PRICE,region:'center',width:200,minSize:200,maxSize:600,layout:'fit',items:this.prreGrid
            }]
		});
};
Ext.extend(Fos.PriceSheetTab,Ext.Panel);