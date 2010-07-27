var showCustomerCategory = function() {
	var store = GS('CUCA_Q','CCustomerCategory',CCustomerCategory,'cucaId','DESC','',false);
	store.load();
    var sm=getCSM();
    var grid = new  Ext.grid.EditorGridPanel({id:'G_CUCA',title:C_CUCA,
	header:false,clicksToEdit:1,closable:true,store: store,sm:sm,
    cm:new Ext.grid.ColumnModel([sm,{header:"ID",hidden:true,dataIndex:'cucaId',width:50},
	{header:C_NAME,dataIndex:'cucaName',width:100,sortable:true,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})}]),	
	tbar:[{text:C_ADD,disabled:NR(M1_V+V_CUCA+F_M),iconCls:'add',handler : function(){var p = new CCustomerCategory({cucaId:'0',cucaName:'',version:'0',rowAction:'N'}); 
				grid.stopEditing();store.insert(0,p);grid.startEditing(0, 2);}},'-',
		{text:C_REMOVE,disabled:NR(M1_V+V_CUCA+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_V+V_CUCA+F_M),iconCls:'save',handler:function(){FOS_POST(store,'CCustomerCategory',CCustomerCategory,'CUCA_S');getCUCA_S().reload();}
        }]
    }); 
    return grid;
};
Fos.CustomerGrid = function() {	
    var store = GS('CUST_X','CCustomer',CCustomer,'custId','DESC','',true);
    store.load({params:{start:0,limit:C_PS100}});
	var sm = new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm = new Ext.grid.ColumnModel({columns:[
    	new Ext.grid.RowNumberer(),sm,
		{header:C_CODE,dataIndex:'custCode',width:80},
		{header:C_CNAME,dataIndex:'custNameCn',width:100},
		{header:C_CSNAME,dataIndex:'custSnameCn',width: 80},
		{header:C_ENAME,dataIndex:'custNameEn',width:100},
		{header:C_ESNAME,dataIndex:'custSnameEn',width:80},
		{header:C_CONTACT,dataIndex:'custContact',width:100},
		{header:C_TEL,dataIndex:'custTel',width:100},
		{header:C_FAX,dataIndex:'custFax',width:100},
		{header:C_SALES,dataIndex:'custSalesName',width:100},
		{header:C_INDUSTRY,dataIndex:'custIndustry',width:100,renderer:getINDU},
		{header:C_CPTY,dataIndex:'custType',width:100,renderer:getCOPR},
		{header:C_CUCA,dataIndex:'cucaId',width:100,renderer:getCUCA},
		{header:C_COUN,dataIndex:'counCode',width:100,renderer:getCOUN},CCT,CMT],defaults:{sortable:true,width:100}});
	var re={rowdblclick:function(g,r,e){this.edit();}};
    var showCustWin=function(p){
    	var win = new Fos.CustomerWin(p,store);    	
		win.show();
    };
    this.add = function(){
    	var p = new CCustomer({custId:'0',custCode:'',custClass:'',custNameCn:'',custSnameCn:'',custNameEn:'',custSnameEn:'',
		custArFlag:1,custApFlag:1,custIndustry:'',cucaId:'',custType:'',counCode:'CN',custProvince:'',custCity:'',
		custAddress:'',custZip:'',custContact:'',custTel:'',custFax:'',custEmail:'',custUrl:'',custBankCny:'',
		custAccountCny:'',custBankUsd:'',custAccountUsd:'',custInvoiceHeader:'',custActive:'1',
		custBookerFlag:'1',custShipperFlag:'1',
		custShipTo:'',custChargeTo:'',custCreditDay:'',
		custCreditDay:getCFG('CUSTOMER_DEFAULT_CRDIT_DAYS'),
		custCreditAmount:getCFG('CUSTOMER_DEFAULT_CRDIT_AMOUNT'),custRemarks:'',version:'0',rowAction:'N'});
       	showCustWin(p);
    };
    this.edit = function(){
    	var p = sm.getSelected();
    	if(p) showCustWin(p);
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
	this.removeCust=function(){
		if (sm.getSelections().length > 0)
        	XMG.confirm(SYS,M_R_C,function(btn){
            	if(btn == 'yes') {
            	var xml=SMTX4R(sm,'CCustomer','custId');
        		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CUST_S'},
					success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
            	}
        	});
        else XMG.alert(SYS,M_R_P);
	};
	this.merge=function(){
		if (sm.getSelections().length > 0)
        	XMG.confirm(SYS,M_CUST_MERGE_CONFIRM,function(btn){
            	if(btn == 'yes') {
            		var w = new Fos.CustMergeWin();
        			w.addButton({text:C_OK,handler:function(){        				
        				custId = w.custId;
        				if(custId!=''){
	        				custIds='';
	        				var a=sm.getSelections();
	        				for(var i=0;i<a.length;i++){
	        					if(custIds=='') custIds=a[i].get('custId');
	        					else custIds=custIds+','+a[i].get('custId');
	        				}
	        				Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CUST_M',custIds:custIds,custId:custId},
	        					success: function(){sm.each(function(p){if(p.get('custId')!=custId) store.remove(p);});XMG.alert(SYS,M_S);},
	        					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);}});
        				}
        				w.close();
        			}},this);
        			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
        			w.show();            		
            	}
        	});
        else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.search = function(){var w=new Fos.CustomerLW(store);w.show();};	
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nmrbf',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_CUST');
		 	if(tc&&tc==T_MAIN.getActiveTab()){			 	
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(M1_V+V_CUST+F_M)) this.add();break;
					case Ext.EventObject.R:
						if(!NR(M1_V+V_CUST+F_R)) this.removeCust();break;
					case Ext.EventObject.M:
						if(!NR(M1_V+V_CUST+F_V)) this.edit();break;
					case Ext.EventObject.B:
						if(!NR(M1_V+V_CUST+F_M)) this.merge();break;
					case Ext.EventObject.F:
						this.search();break;
			 		}
		 	}
		},stopEvent:true,scope:this});
    Fos.CustomerGrid.superclass.constructor.call(this, {
    id:'G_CUST',store: store,iconCls:'grid',width:600,height:300,title:C_CUST,header:false,closable:true,
    sm:sm,cm:cm,listeners:re,loadMask:true,
	bbar:PTB(store,C_PS100),
	tbar:[{text:C_ADD+'(N)',disabled:NR(M1_V+V_CUST+F_M),iconCls:'add',handler:this.add}, '-', 
		{text:C_EDIT+'(M)',disabled:NR(M1_V+V_CUST+F_V),iconCls:'option',handler:this.edit}, '-',
		{text:C_REMOVE+'(R)',disabled:NR(M1_V+V_CUST+F_R),iconCls:'remove',handler:this.removeCust},'-',
		{text:M_CUST_MERGE+'(B)',disabled:NR(M1_V+V_CUST+F_M),iconCls:'merge',handler:this.merge},'-',
		{text:C_SEARCH+'(F)',iconCls:'search',handler:this.search},'->',
		new Ext.PagingToolbar({pageSize:C_PS100,store:store})]
    }); 
};
Ext.extend(Fos.CustomerGrid,Ext.grid.GridPanel);
Fos.CustMergeWin = function() {    
	this.custId='';
	var frm = new Ext.form.FormPanel({labelWidth: 60,bodyStyle:'padding:5px',
    	items: [{fieldLabel:M_CUST_MERGE_TO,name:'custName',value:'',store:getCS(),enableKeyEvents:true,
       		xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
       		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',selectOnFocus:true,anchor:'95%',
             	listeners:{scope:this,
             	select:function(c,r,i){
				this.find('name','custSname')[0].setValue(r.get('custSnameCn'));				
				this.custId=r.get('custId');
			},
			keydown:{fn:function(f,e){LC(f,e,'');},buffer:BF}}},
			{fieldLabel:C_CSNAME,name:'custSname',disabled:true,xtype:'textfield',anchor:'95%'}
			]
    });
    Fos.CustMergeWin.superclass.constructor.call(this, {title:M_SEL_MERGE_TO,modal:true,width:400,
        height:130,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm}); 
};
Ext.extend(Fos.CustMergeWin,Ext.Window);

Fos.CustSelWin = function() {
	this.custId='';
	this.custSname='';
	var frm = new Ext.form.FormPanel({labelWidth: 60,bodyStyle:'padding:5px',
    	items: [{fieldLabel:M_SEL_CUST,name:'custName',value:'',store:getCS(),enableKeyEvents:true,
       		xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
       		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',selectOnFocus:true,anchor:'95%',
             	listeners:{scope:this,
             	select:function(c,r,i){
				this.custSname=r.get('custSnameCn');				
				this.custId=r.get('custId');
			},
			keydown:{fn:function(f,e){LC(f,e,'');},buffer:BF}}}
			]
    });
    Fos.CustSelWin.superclass.constructor.call(this, {title:SYS,modal:true,width:400,
        height:130,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm}); 
};
Ext.extend(Fos.CustSelWin,Ext.Window);

Fos.CustomerWin = function(p,store,wu){
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_FNAME,dataIndex:'cucoName',width:50,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_MOBILE,dataIndex:'cucoMobile',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_OPHONE,dataIndex:'cucoTel',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_HPHONE,dataIndex:'cucoHomeTel',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_EMAIL,dataIndex:'cucoEmail',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_FAX,dataIndex:'cucoFax',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_ADDRESS,dataIndex:'cucoAddress1',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_TITLE,dataIndex:'cucoTitle',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_MSN,dataIndex:'cucoMsn',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_QQ,dataIndex:'cucoQq',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_BIRTHDAY,dataIndex: 'cucoBirthday',width:100,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_GENDER,dataIndex:'cucoGender',width:60,renderer:getGEND,editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:GEND_S})},
	{header:C_REMARKS,dataIndex:'cucoRemarks',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})}
	],defaults:{sortable:true,width:120}});
	this.cucoId=0;
	this.contStore=GS('CUCO_Q','CCustomerContact',CCustomerContact,'cucoId','DESC','',false);
	this.contStore.load({params:{custId:p.get('custId')}});	
	this.contGrid = new Ext.grid.EditorGridPanel({border:false,autoScroll:true,height:250,sm:sm,cm:cm,
		store:this.contStore,
		tbar:[{text:C_ADD,disabled:NR(M1_V+V_CUST+F_M),iconCls:'add',scope:this,handler:function(){
				this.cucoId=this.cucoId-1;
				var r = new CCustomerContact({cucoId:this.cucoId,custId:p.get('custId'),
					cucoName:'',cucoMobile:'',cucoTel:'',cucoHomeTel:'',cucoEmail:'',cucoFax:'',cucoAddress1:'',cucoTitle:'',cucoMsn:'',
					cucoQq:'',cucoBirthday:'',cucoGender:'',cucoRemarks:'',version:'0',rowAction:'N'});
				this.contStore.insert(0,r);this.contGrid.startEditing(0,1);
			}},'-',
			{text:C_REMOVE,disabled:NR(M1_V+V_CUST+F_M),iconCls:'remove',scope:this,handler:function(){
				var r = this.contGrid.getSelectionModel().getSelections();
				for(var i=0;i<r.length;i++){
					r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
					this.contStore.remove(r[i]);
				}
			}
		}]
	});			
	this.save=function(){
		if(frmCustomer.getForm().isValid()){				
				p.beginEdit();
				frmCustomer.getForm().updateRecord(p);
				p.set('custArFlag',p.get('custArFlag')?1:0);
		   	 	p.set('custApFlag',p.get('custApFlag')?1:0);
		   	 	p.set('custCarrierFlag',p.get('custCarrierFlag')?1:0);
				p.set('custBookingAgencyFlag',p.get('custBookingAgencyFlag')?1:0);
				p.set('custCfsFlag',p.get('custCfsFlag')?1:0);
				p.set('custTrackFlag',p.get('custTrackFlag')?1:0);
				p.set('custCustomFlag',p.get('custCustomFlag')?1:0);
				p.set('custInspectionFlag',p.get('custInspectionFlag')?1:0);
				p.set('custWarehouseFlag',p.get('custWarehouseFlag')?1:0);
				p.set('custInsuranceFlag',p.get('custInsuranceFlag')?1:0);	
				p.set('custOverseaAgencyFlag',p.get('custOverseaAgencyFlag')?1:0);
				p.set('custContainerFlag',p.get('custContainerFlag')?1:0);
				p.set('custDoAgencyFlag',p.get('custDoAgencyFlag')?1:0);
				p.set('custBookerFlag',p.get('custBookerFlag')?1:0);
				p.set('custShipperFlag',p.get('custShipperFlag')?1:0);
				p.set('custConsigneeFlag',p.get('custConsigneeFlag')?1:0);
				p.set('custNotifyFlag',p.get('custNotifyFlag')?1:0);
				p.set('custAirFlag',p.get('custAirFlag')?1:0);
				p.set('custExpressFlag',p.get('custExpressFlag')?1:0);
				p.endEdit();				
       			var xml=RTX(p,'CCustomer',CCustomer);
       			var a =this.contStore.getModifiedRecords();
				if(a.length>0){xml = xml+ATX(a,'CCustomerContact',CCustomerContact);};		
       			Ext.Ajax.request({url:SERVICE_URL,method:'POST',scope:this,params:{A:wu?'WS_CUST_S':'CUST_S',wusrId:wu?wu.get('wusrId'):''},
 					success: function(r,o){
						var c = XTR(r.responseXML,'CCustomer',CCustomer);						
                        var f = CCustomer.prototype.fields;
                        var ra=p.get('rowAction');
                        p.beginEdit();
                        for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};                   
                        p.set('rowAction','M');
                        p.endEdit();
                        if(ra=='N'&&store) store.addSorted(p);                        
                        if(wu){wu.beginEdit();wu.set('version',wu.get('version')+1);wu.set('wusrStatus',1);wu.set('custId',p.get('custId'));wu.endEdit();}
 						XMG.alert(SYS,M_S);
 						this.close();},
 					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
 					xmlData:FOSX(xml)
				});
			}
			else{frmValidatePrompt();}
	};
	var t1={layout:'column',border:false,items:
		[{columnWidth:.5,layout: 'form',border:false,defaultType:'textfield',
            items: [{fieldLabel:C_CODE,id:'custCode',value:p.get('custCode'),allowBlank:false,anchor:'90%'},
            {fieldLabel:C_CNAME,id:'custNameCn',value:p.get('custNameCn'),allowBlank:false,anchor:'90%'},
            {fieldLabel:C_CSNAME,id:'custSnameCn',value:p.get('custSnameCn'),anchor:'90%'},           
            {fieldLabel:C_INDUSTRY,id:'custIndustry',value:p.get('custIndustry'),xtype:'combo',store:INDU_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
            {fieldLabel:C_SALES,name:'custSalesId',value:p.get('custSalesId'),store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
            	listeners:{scope:this,select:function(c,r,i){
            	p.set('custSalesId',r.get('userId'));p.set('custSalesName',r.get('userName'));}}}]},
            {columnWidth:.5,layout:'form',border:false,defaultType: 'textfield',
            items: [
            {fieldLabel:C_CUCA,id: 'cucaId',value:p.get('cucaId'),xtype:'combo',store:getCUCA_S(),displayField:'cucaName',valueField:'cucaId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
            {fieldLabel:C_ENAME,id:'custNameEn',value:p.get('custNameEn'),anchor:'90%'},
            {fieldLabel:C_ESNAME,id:'custSnameEn',value:p.get('custSnameEn'),anchor:'90%'},
            {fieldLabel:C_CPTY,id:'custType',value:p.get('custType'),xtype:'combo',store:COPR_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}
            ]}
         ]};
    var t2={title:C_CONTINF,layout:'form',defaultType: 'textfield',
				items: [{fieldLabel:C_COUN,id:'counCode',value:p.get('counCode'),xtype:'combo',store:getCOUN_S(),displayField:'counNameCn',valueField:'counCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
            	{fieldLabel:C_STATE,id:'custProvince',value:p.get('custProvince'),anchor:'90%'},
            	{fieldLabel:C_CITY,id:'custCity',value:p.get('custCity'),anchor:'90%'},
            	{fieldLabel:C_ADDRESS,id:'custAddress',value:p.get('custAddress'),anchor:'90%'},
            	{fieldLabel:C_ADDRESS2,id:'custAddress2',value:p.get('custAddress2'),anchor:'90%'},
            	{fieldLabel:C_ADDRESS3,id:'custAddress3',value:p.get('custAddress3'),anchor:'90%'},
            	{fieldLabel:C_ZIP,id:'custZip',value:p.get('custZip'),anchor:'90%'},
       			{fieldLabel:C_CONTACT,id:'custContact',value:p.get('custContact'),anchor:'90%'},
       			{fieldLabel:C_TEL,id:'custTel',value:p.get('custTel'),anchor:'90%'},
       			{fieldLabel:C_FAX,id:'custFax',value:p.get('custFax'),anchor:'90%'},
       			{fieldLabel:C_EMAIL,id:'custEmail',value:p.get('custEmail'),anchor:'90%'},
       			{fieldLabel:C_URL,id:'custUrl',value:p.get('custUrl'),anchor:'90%'}
       			]};
    var t3={title:C_FININF,layout:'form',defaultType:'textfield',
				items: [
				{fieldLabel:C_ACCOUNT_AR,id:'custArFlag',checked:p.get('custArFlag')==1,xtype:'checkbox',anchor:'30%'},
				{fieldLabel:C_ACCOUNT_AP,id:'custApFlag',checked:p.get('custApFlag')==1,xtype:'checkbox',anchor:'30%'},
				{fieldLabel:C_BANK_CNY,id:'custBankCny',value:p.get('custBankCny'),anchor:'90%'},
            	{fieldLabel:C_BANK_ACCOUNT_CNY,id:'custAccountCny',value:p.get('custAccountCny'),anchor:'90%'},
            	{fieldLabel:C_BANK_USD,id:'custBankUsd',value:p.get('custBankUsd'),anchor:'90%'},
            	{fieldLabel:C_BANK_ACCOUNT_USD,id:'custAccountUsd',value:p.get('custAccountUsd'),anchor:'90%'},
            	{fieldLabel:C_INVO_TITLE,id:'custInvoiceHeader',value:p.get('custInvoiceHeader'),anchor:'90%'},
            	{fieldLabel:C_SHIP_TO,id:'custShipTo',value:p.get('custShipTo'),anchor:'90%'},
       			{fieldLabel:C_CHARGE_TO,id:'custChargeTo',value:p.get('custChargeTo'),anchor:'90%'},
       			{fieldLabel:C_CREDIT_DAY,id:'custCreditDay',value:p.get('custCreditDay'),anchor:'90%'},
       			{fieldLabel:C_CREDIT_AMT,id:'custCreditAmount',value:p.get('custCreditAmount'),anchor:'90%'}]
        	};
    var t4={cls:'x-plain',title:C_EXT_INFO,layout:'form',defaultType: 'textfield',items:[
        		{fieldLabel:C_SHIPPER_DEFAULT,xtype:'textarea',id:'custShipper',value:p.get('custShipper'),anchor:'90%'},
        		{fieldLabel:C_REMARKS,xtype:'textarea',id:'custRemarks',value:p.get('custRemarks'),anchor:'90%'},
        		{fieldLabel:C_CUST_SPECIAL,xtype:'textarea',id:'attr9',value:p.get('attr9'),anchor:'90%'},
        		{fieldLabel:C_CUST_REQUIRE,xtype:'textarea',id:'attr10',value:p.get('attr10'),anchor:'90%'},
        		{fieldLabel:C_CUST_SA,xtype:'textarea',id:'attr8',value:p.get('attr8'),anchor:'90%'},
        		{fieldLabel:C_CUST_CUDE_CODE,xtype:'textarea',id:'attr1',value:p.get('attr1'),anchor:'90%'}
        		]};
    var t5={title:C_CONTACT_INFO,layout:'fit',deferredRender:false,collapsible:true,bodyStyle:'padding:0px',items:[this.contGrid]};
	var frmCustomer = new Ext.form.FormPanel({labelWidth:60,id:'F_CUST',bodyStyle:'padding:5px',
    	items:[t1,
          	{xtype:'tabpanel',plain:true,activeTab:0,height:380,labelWidth:100,defaults:{bodyStyle:'padding:10px'},
            items:[t2,t3,
            {layout:'column',layoutConfig:{columns:2},deferredRender:false,title:C_SERVICE_TYPE,
    			items:[{columnWidth:.25,layout:'form',border:false,labelSeparator:'',hideLabels:true,items:[
        		{boxLabel:C_BOOKER,id:'custBookerFlag',checked:p.get('custBookerFlag')==1,xtype:'checkbox',anchor:'90%'},
        		{boxLabel:C_SHIPPER,id:'custShipperFlag',checked:p.get('custShipperFlag')==1,xtype:'checkbox',anchor:'90%'},
        		{boxLabel:C_CONSIGNEE,id:'custConsigneeFlag',checked:p.get('custConsigneeFlag')==1,xtype:'checkbox',anchor:'90%'},
        		{boxLabel:C_NOTIFIER,id:'custNotifyFlag',checked:p.get('custNotifyFlag')==1,xtype:'checkbox',anchor:'90%'}
        		]},
        		{columnWidth:.25,layout:'form',border:false,labelSeparator:'',hideLabels:true,items:[
        		{boxLabel:C_CARRIER,id:'custCarrierFlag',checked:p.get('custCarrierFlag')==1,xtype:'checkbox',anchor:'90%'},
            	{boxLabel:C_BOOK_AGENCY,id:'custBookingAgencyFlag',checked:p.get('custBookingAgencyFlag')==1,xtype:'checkbox',anchor:'90%'},
            	{boxLabel:C_CFS,id:'custCfsFlag',checked:p.get('custCfsFlag')==1,xtype:'checkbox',anchor:'90%'},
				{boxLabel:C_TRACKER,id:'custTrackFlag',checked:p.get('custTrackFlag')==1,xtype:'checkbox',anchor:'90%'}
            	]},
            	{columnWidth:.25,layout:'form',border:false,labelSeparator:'',hideLabels:true,items:[
            	{boxLabel:C_CUSTOM_AGENCY,id:'custCustomFlag',checked:p.get('custCustomFlag')==1,xtype:'checkbox',anchor:'90%'},
            	{boxLabel:C_INSP_AGENCY,id:'custInspectionFlag',checked:p.get('custInspectionFlag')==1,xtype:'checkbox',anchor:'90%'},
       			{boxLabel:C_WAREHOUSE,id:'custWarehouseFlag',checked:p.get('custWarehouseFlag')==1,xtype:'checkbox',anchor:'90%'},
       			{boxLabel:C_CONTAINER,id:'custContainerFlag',checked:p.get('custContainerFlag')==1,xtype:'checkbox',anchor:'90%'}
       			]},
        		{columnWidth:.25,layout:'form',border:false,labelSeparator:'',hideLabels:true,items:[
       			{boxLabel:C_OVERSEA_AGENCY,id:'custOverseaAgencyFlag',checked:p.get('custOverseaAgencyFlag')==1,xtype:'checkbox',anchor:'90%'},
				{boxLabel:C_DO_AGENCY,id:'custDoAgencyFlag',checked:p.get('custDoAgencyFlag')==1,xtype:'checkbox',anchor:'90%'},
				{boxLabel:C_FLIGHTER,id:'custAirFlag',checked:p.get('custAirFlag')==1,xtype:'checkbox',anchor:'90%'},
       			{boxLabel:C_INSURANCE,id:'custInsuranceFlag',checked:p.get('custInsuranceFlag')==1,xtype:'checkbox',anchor:'90%'},
       			{boxLabel:C_EXPRESS,id:'custExpressFlag',checked:p.get('custExpressFlag')==1,xtype:'checkbox',anchor:'90%'}
       			]}
       			]
        	},t4,t5]
        }]
    });
    Fos.CustomerWin.superclass.constructor.call(this, {title:C_CUSTOMER_INFO,modal:true,width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items: frmCustomer,
        buttons:[{text:C_OK,disabled:NR(M1_V+V_CUST+F_M),scope:this,handler:this.save},
				{text:C_CANCEL,scope:this,handler:function(){this.close();}}]
        }); 
};
Ext.extend(Fos.CustomerWin, Ext.Window);

Fos.CustomerLW = function(store) {
	var t1={id:'TCL_1',title:C_LOOK_BY_CUST_CODE,layout:'form',items:[
		{fieldLabel:C_CUST_CODE,name:'custCode',xtype:'textfield',anchor:'90%'},
    	{boxLabel:C_LOOK_SMART,name:'custCodeM',xtype:'checkbox',labelSeparator:'',anchor:'50%'}
		]};
	var t2={id:'TCL_2',title:C_LOOK_BY_CNAME,layout:'form',items:[
		{fieldLabel:C_CNAME,name:'custNameCn',xtype:'textfield',anchor:'90%'},
		{boxLabel:C_LOOK_SMART,name:'custNameCnM',xtype:'checkbox',labelSeparator:'',anchor:'50%'}
		]};
	var t3={id:'TCL_3',title:C_LOOK_BY_ENAME,layout:'form',items:[
		{fieldLabel:C_ENAME,name:'custNameEn',xtype:'textfield',anchor:'90%'},
		{boxLabel:C_LOOK_SMART,name:'custNameEnM',xtype:'checkbox',labelSeparator:'',anchor:'50%'}]};
	var t4={id:'TCL_4',title:C_LOOK_COMPLEX,layout:'column',items:[
    	{columnWidth:.33,layout:'form',border:false,items:[	             	
	    	{fieldLabel:C_CSNAME,tabIndex:1,name:'custSNameCn',xtype:'textfield',anchor:'90%'},
        	{fieldLabel:C_INDUSTRY,name:'custIndustry',xtype:'combo',store:INDU_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
        	{fieldLabel:C_CONTACT,name:'custContact',xtype:'textfield',anchor:'90%'}]},
	    {columnWidth:.33,layout:'form',border:false,items:[
	    	{fieldLabel:C_ESNAME,tabIndex:2,name:'custSNameEn',xtype:'textfield',anchor:'90%'},
	    	{fieldLabel:C_CPTY,name:'custType',xtype:'combo',store:COPR_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	     	]},
		{columnWidth:.34,layout:'form',border:false,items:[
			{fieldLabel:C_CUCA,tabIndex:3,name: 'cucaId',xtype:'combo',store:getCUCA_S(),displayField:'cucaName',valueField:'cucaId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	     	{fieldLabel:C_COUN,name:'counCode',xtype:'combo',store:getCOUN_S(),displayField:'counNameCn',valueField:'counCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}
	    ]}]};
	var t5={id:'TCL_5',title:C_LOOK_BY_SERVICE,layout:'column',items:[
		{columnWidth:.33,layout:'form',border:false,items:[	
		{boxLabel:C_BOOKER,xtype: 'checkbox',name:'custBookerFlag',hideLabel:true},
		{boxLabel:C_NOTIFIER,xtype: 'checkbox',name:'custNotifyFlag',hideLabel:true},
		{boxLabel:C_CARRIER,xtype: 'checkbox',name:'custCarrierFlag',hideLabel:true},
		{boxLabel:C_BOOK_AGENCY,xtype: 'checkbox',name:'custBookingAgencyFlag',hideLabel:true},
		{boxLabel:C_OVERSEA_AGENCY,xtype: 'checkbox',name:'custOverseaAgencyFlag',hideLabel:true},
		{boxLabel:C_CFS,xtype: 'checkbox',name:'custCfsFlag',hideLabel:true}]},
		{columnWidth:.33,layout:'form',border:false,items:[	
		{boxLabel:C_SHIPPER,xtype: 'checkbox',name:'custShipperFlag',hideLabel:true},
		{boxLabel:C_TRACKER,xtype: 'checkbox',name:'custTrackFlag',hideLabel:true},
		{boxLabel:C_CUSTOM_AGENCY,xtype: 'checkbox',name:'custCustomFlag',hideLabel:true},
		{boxLabel:C_INSP_AGENCY,xtype: 'checkbox',name:'custInspectionFlag',hideLabel:true},
		{boxLabel:C_FLIGHTER,xtype: 'checkbox',name:'custAirFlag',hideLabel:true},
		{boxLabel:C_DO_AGENCY,xtype: 'checkbox',name:'custDoAgencyFlag',hideLabel:true}]},
		{columnWidth:.33,layout:'form',border:false,items:[
		{boxLabel:C_CONSIGNEE,xtype: 'checkbox',name:'custConsigneeFlag',hideLabel:true},
		{boxLabel:C_WAREHOUSE,xtype: 'checkbox',name:'custWarehouseFlag',hideLabel:true},
		{boxLabel:C_CONTAINER,xtype: 'checkbox',name:'custContainerFlag',hideLabel:true},
		{boxLabel:C_EXPRESS,xtype: 'checkbox',name:'custExpressFlag',hideLabel:true},		
		{boxLabel:C_INSURANCE,xtype: 'checkbox',name:'custInsuranceFlag',hideLabel:true}]}
		]};

    var tab = new Ext.TabPanel({xtype:'tabpanel',plain:true,activeTab:0,height:200,defaults:{bodyStyle:'padding:10px'},
            items:[t1, t2,t3,t5,t4]});		
    this.reload=function(){
     	var at = tab.getActiveTab();
     	var a=[];var op=1;
     	if(at.getId()=='TCL_1'){
     		var consNo=at.find('name','custCode')[0].getValue();
     		var consNoM=at.find('name','custCodeM')[0].getValue();
     		if(consNoM) op=7;
     		a[a.length]={key:'custCode',value:consNo,op:op};
     	}     	
     	else if(at.getId()=='TCL_2'){
     		var consMblNo=at.find('name','custNameCn')[0].getValue();
     		var consMblNoM=at.find('name','custNameCnM')[0].getValue();
     		if(consMblNoM) op=7;
     		a[a.length]={key:'custNameCn',value:consMblNo,op:op};
     	}
     	else if(at.getId()=='TCL_3'){
     		var consHblNo=at.find('name','custNameEn')[0].getValue();
     		var consHblNoM=at.find('name','custNameEnM')[0].getValue();
     		if(consHblNoM) op=7;
     		a[a.length]={key:'custNameEn',value:consHblNo,op:op};
     	}
     	else if(at.getId()=='TCL_4'){
     		var custSNameCn=at.find('name','custSNameCn')[0].getValue();
     		var custIndustry=at.find('name','custIndustry')[0].getValue();
     		var custContact=at.find('name','custContact')[0].getValue();
     		var custSNameEn=at.find('name','custSNameEn')[0].getValue();
     		var custType=at.find('name','custType')[0].getValue();
     		var cucaId=at.find('name','cucaId')[0].getValue();
     		var counCode=at.find('name','counCode')[0].getValue();
     		
     		if(custSNameCn) a[a.length]={key:'custSNameCn',value:custSNameCn,op:op};
     		if(custIndustry) a[a.length]={key:'custIndustry',value:custIndustry,op:op};
     		if(custContact) a[a.length]={key:'custContact',value:custContact,op:op};
     		if(custSNameEn) a[a.length]={key:'custSNameEn',value:custSNameEn,op:op};
     		if(custType) a[a.length]={key:'custType',value:custType,op:op};
     		if(cucaId) a[a.length]={key:'cucaId',value:cucaId,op:op};
     		if(counCode) a[a.length]={key:'counCode',value:counCode,op:op};
     	}
     	else if(at.getId()=='TCL_5'){
     		var custCarrierFlag=at.find('name','custCarrierFlag')[0].getValue();
     		var custBookingAgencyFlag=at.find('name','custBookingAgencyFlag')[0].getValue();
     		var custCfsFlag=at.find('name','custCfsFlag')[0].getValue();
     		var custTrackFlag=at.find('name','custTrackFlag')[0].getValue();
     		var custCustomFlag=at.find('name','custCustomFlag')[0].getValue();
     		var custInspectionFlag=at.find('name','custInspectionFlag')[0].getValue();
     		var custWarehouseFlag=at.find('name','custWarehouseFlag')[0].getValue();
     		var custContainerFlag=at.find('name','custContainerFlag')[0].getValue();
     		var custOverseaAgencyFlag=at.find('name','custOverseaAgencyFlag')[0].getValue();
     		var custDoAgencyFlag=at.find('name','custDoAgencyFlag')[0].getValue();
     		var custInsuranceFlag=at.find('name','custInsuranceFlag')[0].getValue();
     		var custBookerFlag=at.find('name','custBookerFlag')[0].getValue();
     		var custShipperFlag=at.find('name','custShipperFlag')[0].getValue();
     		var custNotifyFlag=at.find('name','custNotifyFlag')[0].getValue();
     		var custConsigneeFlag=at.find('name','custConsigneeFlag')[0].getValue();
     		var custAirFlag=at.find('name','custAirFlag')[0].getValue();
     		var custExpressFlag=at.find('name','custExpressFlag')[0].getValue();
     		
     		if(custCarrierFlag) a[a.length]={key:'custCarrierFlag',value:1,op:op};
     		if(custBookingAgencyFlag) a[a.length]={key:'custBookingAgencyFlag',value:1,op:op};
     		if(custCfsFlag) a[a.length]={key:'custCfsFlag',value:1,op:op};
     		if(custTrackFlag) a[a.length]={key:'custTrackFlag',value:1,op:op};
     		if(custCustomFlag) a[a.length]={key:'custCustomFlag',value:1,op:op};
     		if(custInspectionFlag) a[a.length]={key:'custInspectionFlag',value:1,op:op};
     		if(custWarehouseFlag) a[a.length]={key:'custWarehouseFlag',value:1,op:op};
     		if(custContainerFlag) a[a.length]={key:'custContainerFlag',value:1,op:op};
     		if(custOverseaAgencyFlag) a[a.length]={key:'custOverseaAgencyFlag',value:1,op:op};
     		if(custDoAgencyFlag) a[a.length]={key:'custDoAgencyFlag',value:1,op:op};
     		if(custInsuranceFlag) a[a.length]={key:'custInsuranceFlag',value:1,op:op};     		
     		if(custBookerFlag) a[a.length]={key:'custBookerFlag',value:1,op:op};
     		if(custShipperFlag) a[a.length]={key:'custShipperFlag',value:1,op:op};
     		if(custNotifyFlag) a[a.length]={key:'custNotifyFlag',value:1,op:op};
     		if(custConsigneeFlag) a[a.length]={key:'custConsigneeFlag',value:1,op:op};
     		if(custAirFlag) a[a.length]={key:'custAirFlag',value:1,op:op};
     		if(custExpressFlag) a[a.length]={key:'custExpressFlag',value:1,op:op};
     	}
     	store.baseParams=a.length>0?{mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))}:{mt:'JSON'};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};	
    Fos.CustomerLW.superclass.constructor.call(this, {title:C_LOOK_CUST,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:tab,
        buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
        }); 
};
Ext.extend(Fos.CustomerLW, Ext.Window);

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
		ADDTAB("T_PRSH_" + p.get("id"),function(){ return new Fos.PriceSheetTab(p)});
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
		var cc=[];rcj=[];
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
		tb=this.getTopToolbar();
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
	            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
     					listeners:{scope:this,select:function(c,r,i){
     						p.set('prshCarrier',r.get('custId'));},
     					keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
     				{fieldLabel:C_SHLI,tabIndex:15,name:'shliId',value:p.get('shliId'),store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
     					listeners:{scope:this,select:function(c,r,i){p.set('shliName',r.get('shliName'));}}}
     			]},
	        	{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_BOOK_AGENCY,tabIndex:2,
	            	name:'prshVendorName',value:p.get('prshVendorName'),store:getCS(),enableKeyEvents:true,
	            	xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
	            		listeners:{scope:this,select:function(c,r,i){
	            			p.set('prshVendorId',r.get('custId'));},
	            			keydown:{fn:function(f,e){LC(f,e,'custBookingAgencyFlag');},buffer:500}}},
	            	{fieldLabel:HL(C_POL),tabIndex:43,name:'prshPol',value:p.get('prshPol'),store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	            		listeners:{scope:this,select:function(c,r,i){p.set('prshPolEn',r.get('portNameEn'));}}}
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

Fos.PaliLookup = function(store,T){
	this.reload=function(){
     	var a=[];
     	a[0]={key:'voyaSailedFlag',value:T=='N'?0:1,op:EQ};
     	var custId=t.find('name','custId')[0].getValue();
     	if(custId) a[a.length]={key:'custId',value:custId,op:EQ};
     	var charterId=t.find('name','charterId')[0].getValue();
     	if(charterId) a[a.length]={key:'charterId',value:charterId,op:EQ};
     	var fconPod=t.find('name','fconPod')[0].getValue();
     	if(fconPod) a[a.length]={key:'fconPod',value:fconPod,op:EQ};
     	var fconContractNo=t.find('name','fconContractNo')[0].getValue();
     	if(fconContractNo) a[a.length]={key:'fconContractNo',value:fconContractNo,op:LI};
     	var paliHarbourId=t.find('name','paliHarbourId')[0].getValue();
     	if(paliHarbourId) a[a.length]={key:'paliHarbourId',value:paliHarbourId,op:EQ};
     	var vessName=t.find('name','vessName')[0].getValue();
     	if(vessName) a[a.length]={key:'vessName',value:vessName,op:LI};
     	var voyaName=t.find('name','voyaName')[0].getValue();
     	if(voyaName) a[a.length]={key:'voyaName',value:voyaName,op:LI};
     	var paliStationId=t.find('name','paliStationId')[0].getValue();
     	if(paliStationId) a[a.length]={key:'paliStationId',value:paliStationId,op:EQ};
     	var paliTransFlag=t.find('name','paliTransFlag')[0].getValue();
     	if(paliTransFlag) a[a.length]={key:'paliTransFlag',value:'1',op:EQ};
     	
     	var paliArriveDate=t.find('name','paliArriveDate')[0].getValue();
     	if(paliArriveDate) a[a.length]={key:'paliArriveDate',value:paliArriveDate.format(DATEF),op:EQ};
     	var paliTrackType=t.find('name','paliTrackType')[0].getValue();
     	if(paliTrackType) a[a.length]={key:'paliTrackType',value:paliTrackType,op:EQ};
     	var vessNameCn=t.find('name','vessNameCn')[0].getValue();
     	if(vessNameCn) a[a.length]={key:'vessNameCn',value:vessNameCn,op:LI};
     	var paliTrackNo=t.find('name','paliTrackNo')[0].getValue();
     	if(paliTrackNo) a[a.length]={key:'paliTrackNo',value:paliTrackNo,op:EQ};     	
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	if(T=='N')
        	store.reload({callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
        else
     		store.reload({params:{start:0,limit:C_PS100},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});     	
     	this.close();
	};	
	var t = new Ext.Panel({layout:'column',
		items:[{columnWidth:.5,layout:'form',border:false,labelWidth:100,labelAlign:"right",
	    	items:[{fieldLabel:C_SHIPPER,name:'custId',store:getCS(),
	        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
	        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'90%',
	              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},	        	
				{fieldLabel:C_PACKING_TRACK_NO,name:'paliTrackNo',xtype:'textfield',anchor:'90%'},				
				{fieldLabel:C_PACKING_EXP_PORT,name:'paliHarbourId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_VESS,name:'vessName',xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_VESS_NAME_CN,name:'vessNameCn',xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_PACKING_STATION,name:'paliStationId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_TRANS_FLAG,name:'paliTransFlag',xtype:'checkbox',anchor:'90%'}
	        	]},
	      	{columnWidth:.5,layout:'form',border:false,labelWidth:100,labelAlign:"right",
	   		items:[
			{fieldLabel:C_RENTER,name:'charterId',store:getCS(),enableKeyEvents:true,
				tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
				listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},
	   		    {fieldLabel:C_CONTRACT_NO,name:'fconContractNo',xtype:'textfield',anchor:'90%'},	
	        	{fieldLabel:C_POD,tabIndex:47,name:'fconPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
              		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
              	{fieldLabel:C_VOYA,name:'voyaName',xtype:'textfield',anchor:'90%'},
              	{fieldLabel:C_PACKING_ARRIVE_DATE,name:'paliArriveDate',xtype:'datefield',format:DATEF,anchor:'90%'},
              	{fieldLabel:C_TRACK_TYPE,name:'paliTrackType',xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}
	        	]}
			]});
		
    Fos.PaliLookup.superclass.constructor.call(this, {title:C_PALI_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:t,
		buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.PaliLookup, Ext.Window);

Fos.FConLookup = function(store,T){
	this.reload=function(){
     	var a=[];
     	var custId=t.find('name','custId')[0].getValue();
     	if(custId) a[a.length]={key:'custId',value:custId,op:EQ};     		
     	var shliId=t.find('name','shliId')[0].getValue();
     	if(shliId) a[a.length]={key:'shliId',value:shliId,op:EQ};
     	var fconStatus=t.find('name','fconStatus')[0].getValue();
     	if(fconStatus) a[a.length]={key:'fconStatus',value:fconStatus,op:EQ};
     	var fconPol=t.find('name','fconPol')[0].getValue();        		
     	if(fconPol) a[a.length]={key:'fconPol',value:fconPol,op:EQ};
     	var fconPod=t.find('name','fconPod')[0].getValue();        		
     	if(fconPod) a[a.length]={key:'fconPod',value:fconPod,op:EQ};
     	var fconContractNo=t.find('name','fconContractNo')[0].getValue();        		
     	if(fconContractNo) a[a.length]={key:'fconContractNo',value:fconContractNo,op:EQ};     	
     	var fconCarrier=t.find('name','fconCarrier')[0].getValue();        		
     	if(fconCarrier) a[a.length]={key:'fconCarrier',value:fconCarrier,op:LI};
     	var fconVesselVoyage=t.find('name','fconVesselVoyage')[0].getValue();        		
     	if(fconVesselVoyage) a[a.length]={key:'fconVesselVoyage',value:fconVesselVoyage,op:LI};     	
     	var fconForcastQuantity=t.find('name','fconForcastQuantity')[0].getValue();
     	var fconForcastQuantity2=t.find('name','fconForcastQuantity2')[0].getValue();
   		if(fconForcastQuantity && fconForcastQuantity2){
   			a[a.length]={key:'fconForcastQuantity',value:fconForcastQuantity,op:GE};
   			a[a.length]={key:'fconForcastQuantity',value:fconForcastQuantity2,op:LE};
   		}
   		else if(fconForcastQuantity) a[a.length]={key:'fconForcastQuantity',value:fconForcastQuantity,op:EQ};
   		
     	var fconLoadDate=t.find('name','fconLoadDate')[0].getValue();
     	var fconLoadDate2=t.find('name','fconLoadDate2')[0].getValue();
   		if(fconLoadDate && fconLoadDate2){
   			a[a.length]={key:'fconLoadDate',value:fconLoadDate.format(DATEF),op:GE};
   			a[a.length]={key:'fconLoadDate',value:fconLoadDate2.format(DATEF),op:LE};
   		}
   		else if(fconLoadDate) a[a.length]={key:'fconLoadDate',value:fconLoadDate.format(DATEF),op:EQ};
     	
     	var fconShipDateF=t.find('name','fconShipDateF')[0].getValue();
     	var fconShipDateT=t.find('name','fconShipDateT')[0].getValue();
   		if(fconShipDateF && fconShipDateT){
   			a[a.length]={key:'fconShipDateF',value:fconShipDateF.format(DATEF),op:GE};
   			a[a.length]={key:'fconShipDateT',value:fconShipDateT.format(DATEF),op:LE};
   		}
   		else if(fconShipDateF) a[a.length]={key:'fconShipDateF',value:fconShipDateF.format(DATEF),op:EQ};
   		
   		var voyaShipDateF=t.find('name','voyaShipDateF')[0].getValue();
     	var voyaShipDateT=t.find('name','voyaShipDateT')[0].getValue();
   		if(voyaShipDateF && voyaShipDateT){
   			a[a.length]={key:'voyaShipDateF',value:voyaShipDateF.format(DATEF),op:GE};
   			a[a.length]={key:'voyaShipDateT',value:voyaShipDateT.format(DATEF),op:LE};
   		}
   		else if(voyaShipDateF) a[a.length]={key:'voyaShipDateF',value:voyaShipDateF.format(DATEF),op:EQ};
   		
   		var voyaSailDate=t.find('name','voyaSailDate')[0].getValue();
     	var voyaSailDate2=t.find('name','voyaSailDate2')[0].getValue();
   		if(voyaSailDate && voyaSailDate2){
   			a[a.length]={key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:GE};
   			a[a.length]={key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:LE};
   		}
   		else if(voyaSailDate) a[a.length]={key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:EQ};

		var voyaSailedFlag=t.find('name','voyaSailedFlag')[0].getValue();
   		if(voyaSailedFlag) a[a.length]={key:'voyaSailedFlag',value:'0',op:EQ};
   		
   		a[a.length]={key:'fconStatus',value:2,op:T=='S'?EQ:NE};
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};	
	var t = new Ext.Panel({layout:'column',
		items:[{columnWidth:.5,layout:'form',border:false,labelWidth:100,labelAlign:"right",
	    	items:[{fieldLabel:C_BOOKER,name:'custId',store:getCS(),
	        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
	        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'90%',
	              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},	        	
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

Fos.ConsLookupWin = function(bizClass,bizType,shipType,action,store){
	var t1={id:'T_CONS_LOOK_1',title:C_LOOK_BY_NO,layout:'form',labelWidth:70,labelAlign:"right",
		items:[{fieldLabel:C_CONS_NO,name:'consNo',xtype:'textarea',anchor:'90%'},
    		{boxLabel:C_LOOK_SMART,name:'consNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}]};
	var t6={id:'T_CONS_LOOK_6',title:C_LOOK_BY_CONT_NO,layout:'form',labelWidth:70,labelAlign:"right",
		items: [{fieldLabel:C_CONT_NO,name:'contNo',xtype:'textarea',anchor:'90%'},
			{boxLabel:C_LOOK_SMART,name:'contNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}]};	
	var t2={id:'T_CONS_LOOK_2',title:C_LOOK_BY_MBL,layout:'form',labelWidth:70,labelAlign:"right",
		items: [{fieldLabel:'M/BL No.',name:'consMblNo',xtype:'textarea',anchor:'90%'},
			{boxLabel:C_LOOK_SMART,name:'consMblNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}]};
	var t3={id:'T_CONS_LOOK_3',title:C_LOOK_BY_HBL,layout:'form',labelWidth:70,labelAlign:"right",
		items: [{fieldLabel:'H/BL No.',name:'consHblNo',xtype:'textarea',anchor:'90%'},
			{boxLabel:C_LOOK_SMART,name:'consHblNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}]};
	var t4={id:'T_CONS_LOOK_4',title:C_LOOK_BY_VOYA,layout:'form',labelWidth:70,labelAlign:"right",
		items:[{fieldLabel:HL(C_VESS),tabIndex:5,name:'vessName',store:getVES(),
          		xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',typeAhead:true,enableKeyEvents:true,
          		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'50%',
              		listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
        	{fieldLabel:C_VOYA,tabIndex:10,name:'voyaName',xtype:'textfield',anchor:'50%'}]};
    var t5={id:'T_CONS_LOOK_5',title:C_LOOK_COMPLEX,layout:'column',
    	items:[{columnWidth:.33,layout:'form',border:false,labelWidth:80,labelAlign:"right",
	    	items:[{fieldLabel:C_BOOKER,name:'custId',store:getCS(),
	        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
	        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'90%',
	              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
				{fieldLabel:C_BIZ_TYPE,tabIndex:7,name:'consBizType',store:BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_DEPT,name:'deptId',store:getGROU_S(),xtype:'combo',displayField:'grouName',valueField:'grouId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_POL,name:'consPol',store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},	             		
	        	{fieldLabel:C_OPERATOR,name:'consOperatorId',store:getOP_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	        	{fieldLabel:C_TRADE_CONTRACT_NO,name:'consTradeContractNo',xtype:'textfield',anchor:'90%'},
	        	{fieldLabel:C_SHIP_TYPE,name:'consShipType',value:shipType,store:SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	         	{fieldLabel:'S/O No.',name:'consSoNo',xtype:'textfield',anchor:'90%'},
	         	{fieldLabel:C_CONS_AUDIT_STATUS,name:'consStatusAud',xtype:'combo',store:AUST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
	         	{fieldLabel:C_WRITEOFF_STATUS_R,name:'consStatusAr',xtype:'combo',store:WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}]},
	      	{columnWidth:.33,layout:'form',border:false,labelWidth:80,labelAlign:"right",
	   		items:[{fieldLabel:C_CONS_DATE,name:'consDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_SAIL_DATE,name:'consEtd',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_ETA,name:'consEta',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_POD,tabIndex:47,name:'consPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
              		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,
              			keydown:{fn:LP,buffer:BF}}},
	        	{fieldLabel:C_SALES,name:'consSalesRepId',store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	        	{fieldLabel:C_CONTRACT_NO,name:'consContractNo',xtype:'textfield',anchor:'90%'},
	        	{fieldLabel:C_CARRIER,name:'consCarrier',store:getCS(),enableKeyEvents:true,
	        		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	        		listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
	        	{fieldLabel:C_OVERSEA_AGENCY,name:'consOverseaAgency',store:getCS(),enableKeyEvents:true,
	        	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	        	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custOverseaAgencyFlag');},buffer:500}}},
				{fieldLabel:C_INVO_STATUS_R,name:'consStatusInvoR',xtype:'combo',store:INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_WRITEOFF_STATUS_P,name:'consStatusAp',xtype:'combo',store:WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}]},
			{columnWidth:.34,layout:'form',border:false,labelWidth:80,labelAlign:"right",
			items:[{fieldLabel:C_TO,name:'consDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_TO,name:'consEtd2',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_TO,name:'consEta2',xtype:'datefield',format:DATEF,anchor:'90%'},
	        	{fieldLabel:C_CARGO_SOURCE,name:'consSource',store:SOUR_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
	         	{fieldLabel:C_REF_NO,name:'consRefNo',xtype:'textfield',anchor:'90%'},	        	
	        	{fieldLabel:C_BOOK_AGENCY,name:'consBookingAgency',store:getCS(),
              		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',
              		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',enableKeyEvents:true,
              		listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookingAgencyFlag');},buffer:500}}},
	       		{fieldLabel:C_CONTAINER,name:'consContainerCompany',store:getCS(),enableKeyEvents:true,
	       			tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	       				listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custContainerFlag');},buffer:500}}},
				{fieldLabel:C_EXPE_CONFIRM_STATUS,name:'consStatusExp',xtype:'combo',store:EXPC_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
				{fieldLabel:C_INVO_STATUS_P,name:'consStatusInvoP',xtype:'combo',store:INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}
			]}
		]};
	var tabs;
	if(action=='CONS_X'){tabs=(bizClass==BC_E)?[t1,t6,t2,t3,t4,t5]:[t1,t2,t3,t4,t5];}
	else if(action=='CONS_CHECK_X'){tabs=[t1,t2,t3,t4,t5];}
	this.reload=function(){
     	var a=[];var op=1;
     	if(bizClass!='')
     		a[a.length]={key:'consBizClass',value:bizClass,op:1};
     	if(bizType!='')
     		a[a.length]={key:'consBizType',value:bizType,op:1};
     	if(shipType!='')
     		a[a.length]={key:'consShipType',value:shipType,op:1};
     	var at = t.getActiveTab();
     	if(at.getId()=='T_CONS_LOOK_1'){
     		var consNo=at.find('name','consNo')[0].getValue();
     		var consNoM=at.find('name','consNoM')[0].getValue();
     		var c=consNo.indexOf(',');
    		var b=consNo.indexOf('..');
    		if(c>=0){
    			a[a.length]={key:'consNo',value:consNo,op:IN};
    		}
    		else if(b>=0){
    			var ra=consNo.split('..');
    			a[a.length]={key:'consNo',value:ra[0],op:GE};
    			a[a.length]={key:'consNo',value:ra[1],op:LE};
    		}
    		else if(consNoM){
     			a[a.length]={key:'consNo',value:consNo,op:LI};
    		}
     	}     	
     	else if(at.getId()=='T_CONS_LOOK_2'){
     		var consMblNo=at.find('name','consMblNo')[0].getValue();
     		var consMblNoM=at.find('name','consMblNoM')[0].getValue();
     		if(consMblNoM) op=7;
     		a[a.length]={key:'consMblNo',value:consMblNo,op:op};
     	}
     	else if(at.getId()=='T_CONS_LOOK_3'){
     		var consHblNo=at.find('name','consHblNo')[0].getValue();
     		var consHblNoM=at.find('name','consHblNoM')[0].getValue();
     		if(consHblNoM) op=7;
     		a[a.length]={key:'consHblNo',value:consHblNo,op:op};
     	}
     	else if(at.getId()=='T_CONS_LOOK_4'){
     		var vessName=at.find('name','vessName')[0].getValue();
     		var voyaId=at.find('name','voyaName')[0].getValue();
     		if(vessName) a[a.length]={key:'vessName',value:vessName,op:LI};
     		if(voyaId) a[a.length]={key:'voyaName',value:voyaId,op:op};
     	}
     	else if(at.getId()=='T_CONS_LOOK_5'){
     		var custId=at.find('name','custId')[0].getValue();
     		if(custId) a[a.length]={key:'custId',value:custId,op:op};
     		var consBizType=at.find('name','consBizType')[0].getValue();        		
     		if(consBizType) a[a.length]={key:'consBizType',value:consBizType,op:op};
     		var consPol=at.find('name','consPol')[0].getValue();        		
     		if(consPol) a[a.length]={key:'consPol',value:consPol,op:op};
     		var deptId=at.find('name','deptId')[0].getValue();        		
     		if(deptId) a[a.length]={key:'deptId',value:deptId,op:op};
     		var consSalesRepId=at.find('name','consSalesRepId')[0].getValue();        		
     		if(consSalesRepId) a[a.length]={key:'consSalesRepId',value:consSalesRepId,op:op};
     		var consTradeContractNo=at.find('name','consTradeContractNo')[0].getValue();        		
     		if(consTradeContractNo) a[a.length]={key:'consTradeContractNo',value:consTradeContractNo,op:op};
     		
     		var consStatusAud=at.find('name','consStatusAud')[0].getValue();        		
     		if(consStatusAud) a[a.length]={key:'consStatusAud',value:consStatusAud,op:op};
     		var consStatusAr=at.find('name','consStatusAr')[0].getValue();        		
     		if(consStatusAr) a[a.length]={key:'consStatusAr',value:consStatusAr,op:op};
     		var consStatusAp=at.find('name','consStatusAp')[0].getValue();        		
     		if(consStatusAp) a[a.length]={key:'consStatusAp',value:consStatusAp,op:op};
     		var consStatusInvoR=at.find('name','consStatusInvoR')[0].getValue();        		
     		if(consStatusInvoR) a[a.length]={key:'consStatusInvoR',value:consStatusInvoR,op:op};
     		var consStatusInvoP=at.find('name','consStatusInvoP')[0].getValue();        		
     		if(consStatusInvoP) a[a.length]={key:'consStatusInvoP',value:consStatusInvoP,op:op};
     		var consStatusExp=at.find('name','consStatusExp')[0].getValue();        		
     		if(consStatusExp) a[a.length]={key:'consStatusExp',value:consStatusExp,op:op};
     		
     		var consDate=at.find('name','consDate')[0].getValue();
     		var consDate2=at.find('name','consDate2')[0].getValue();
     		if(consDate && consDate2){
     			a[a.length]={key:'consDate',value:consDate.format(DATEF),op:5};
     			a[a.length]={key:'consDate',value:consDate2.format(DATEF),op:3};
     		}
     		else if(consDate) a[a.length]={key:'consDate',value:consDate,op:op};
     		var consEtd=at.find('name','consEtd')[0].getValue();
     		var consEtd2=at.find('name','consEtd2')[0].getValue();
     		if(consEtd && consEtd2){
     			a[a.length]={key:'consEtd',value:consEtd.format(DATEF),op:5};
     			a[a.length]={key:'consEtd',value:consEtd2.format(DATEF),op:3};
     		}
     		else if(consEtd) a[a.length]={key:'consEtd',value:consEtd,op:op};
     		
     		var consEta=at.find('name','consEta')[0].getValue();
     		var consEta2=at.find('name','consEta2')[0].getValue();
     		if(consEta && consEta2){
     			a[a.length]={key:'consEta',value:consEta.format(DATEF),op:5};
     			a[a.length]={key:'consEta',value:consEta2.format(DATEF),op:3};
     		}
     		else if(consEta) a[a.length]={key:'consEta',value:consEta,op:op}; 
     		
     		var consOperatorId=at.find('name','consOperatorId')[0].getValue();        		
     		if(consOperatorId) a[a.length]={key:'consOperatorId',value:consOperatorId,op:op};
     		var consContractNo=at.find('name','consContractNo')[0].getValue();        		
     		if(consContractNo) a[a.length]={key:'consContractNo',value:consContractNo,op:op};
     		var consPod=at.find('name','consPod')[0].getValue();        		
     		if(consPod) a[a.length]={key:'consPod',value:consPod,op:op};
     		var consSource=at.find('name','consSource')[0].getValue();        		
     		if(consSource) a[a.length]={key:'consSource',value:consSource,op:op};
     		var consRefNo=at.find('name','consRefNo')[0].getValue();        		
     		if(consRefNo) a[a.length]={key:'consRefNo',value:consRefNo,op:op};
     		var consSoNo=at.find('name','consSoNo')[0].getValue();
     		if(consSoNo) a[a.length]={key:'consSoNo',value:consSoNo,op:op};
     		var consCarrier=at.find('name','consCarrier')[0].getValue();        		
     		if(consCarrier) a[a.length]={key:'consCarrier',value:consCarrier,op:op};
     		var consOverseaAgency=at.find('name','consOverseaAgency')[0].getValue();        		
     		if(consOverseaAgency) a[a.length]={key:'consOverseaAgency',value:consOverseaAgency,op:op};
     		var consBookingAgency=at.find('name','consBookingAgency')[0].getValue();        		
     		if(consBookingAgency) a[a.length]={key:'consBookingAgency',value:consBookingAgency,op:op};
     		var consContainerCompany=at.find('name','consContainerCompany')[0].getValue();        		
     		if(consContainerCompany) a[a.length]={key:'consContainerCompany',value:consContainerCompany,op:op};
     	}
     	else if(at.getId()=='T_CONS_LOOK_6'){
     		var consMblNo=at.find('name','contNo')[0].getValue();
     		var consMblNoM=at.find('name','contNoM')[0].getValue();
     		if(consMblNoM) op=7;action='CONS_CONTNO_X';
     		a[a.length]={key:'contNo',value:consMblNo,op:op};
     	}
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};	
	var t = new Ext.TabPanel({id:'T_CONS_LOOK',xtype:'tabpanel',plain:true,activeTab:0,height:340,
		defaults:{bodyStyle:'padding:10px'},items:tabs});
    Fos.ConsLookupWin.superclass.constructor.call(this, {title:C_CONS_QUERY,iconCls:'search',modal:true,width:800,height:360,minWidth:400,
        minHeight:300,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:t,
		buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.ConsLookupWin, Ext.Window);

Fos.InvoLookupWin = function(t) {    
	var frmLookup = new Ext.form.FormPanel({labelWidth:70,labelAlign:"right",
    	items:[{id:'T_INVO_LOOK',xtype:'tabpanel',plain:true,activeTab:0,height:200,defaults:{bodyStyle:'padding:10px'},
            items:[{id:'T_INVO_LOOK_1',title:C_LOOK_BY_INVO_NO,layout:'form',
				items:[{fieldLabel:C_INVO_NO,name:'invoNo',xtype:'textarea',anchor:'90%'},
            	{boxLabel:C_LOOK_SMART,name:'invoNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
       			]},
       			{id:'T_INVO_LOOK_2',title:C_LOOK_BY_TAX_NO,layout:'form',
				items: [
					{fieldLabel:C_TAX_NO,name:'invoTaxNo',xtype:'textarea',anchor:'90%'},
					{boxLabel:C_LOOK_SMART,name:'invoTaxNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
				]},
        		{id:'T_INVO_LOOK_3',title:C_LOOK_COMPLEX,layout:'column',items:[
        			{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:C_SETTLE_OBJECT,tabIndex:1,name:'custId',store:getCS(),enableKeyEvents:true,
	             	xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	             	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,t='R'?'custArFlag':'custApFlag');},buffer:500}}},
	             	{fieldLabel:C_CURR,tabIndex:4,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
        			{fieldLabel:C_CONS_NO,name:'consNo',xtype:'textfield',anchor:'90%'},
        			{fieldLabel:C_BL_NO,name:'consMblNo',xtype:'textfield',anchor:'90%'},
        			{fieldLabel:C_INVO_STATUS,tabIndex:10,name:'invoStatus',store:IVST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
        			{fieldLabel:C_WRITEOFF_STATUS,name:'invoWriteOffStatus',xtype:'combo',store:WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}
	             	]},
	             	{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:C_INVO_DATE,name:'invoDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_DUE_DATE,name:'invoDueDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_SAIL_DATE,name:'consSailDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_VESS,name:'vessName',store:getVES(),enableKeyEvents:true,
	             		xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
	             		listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
	             	{fieldLabel:C_INVO_AMOUNT,name:'invoAmount',xtype:'numberfield',anchor:'90%'}
	             	]},
	             	{columnWidth:.34,layout:'form',border:false,
	             	items:[	             	
	             	{fieldLabel:C_TO,name:'invoDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_TO,name:'invoDueDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_TO,name:'consSailDate2',xtype:'datefield',format:DATEF,anchor:'90%'}	,
	             	{fieldLabel:C_VOYA,tabIndex:10,name:'voyaName',xtype:'textfield',anchor:'90%'},
	             	{fieldLabel:C_TO,name:'invoAmount2',xtype:'numberfield',anchor:'90%'}
	             	]}
	        	]}
        	]}
        ]
    });
    Fos.InvoLookupWin.superclass.constructor.call(this, {title:C_INVO_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:frmLookup}); 
};
Ext.extend(Fos.InvoLookupWin, Ext.Window);

Fos.PrLookupWin = function(t) {    
	var frmLookup = new Ext.form.FormPanel({labelWidth:70,labelAlign:"right",
    	items:[{id:'T_PR_LOOK',xtype:'tabpanel',plain:true,activeTab:0,height:200,defaults:{bodyStyle:'padding:10px'},
            items:[{id:'T_PR_LOOK_1',title:t=='R'?C_LOOK_BY_PR_NO_R:C_LOOK_BY_PR_NO_P,layout:'form',
				items:[{fieldLabel:t=='R'?C_PR_NO_R:C_PR_NO_P,name:'prNo',xtype:'textarea',anchor:'90%'},
            	{boxLabel:C_LOOK_SMART,name:'prNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
       			]},
       			{id:'T_PR_LOOK_2',title:C_LOOK_BY_INVO_NO,layout:'form',
				items: [
					{fieldLabel:C_INVO_NO,name:'invoNo',xtype:'textarea',anchor:'90%'},
					{boxLabel:C_LOOK_SMART,name:'invoNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
				]},
				{id:'T_PR_LOOK_3',title:C_LOOK_BY_TAX_NO,layout:'form',
				items: [
					{fieldLabel:C_TAX_NO,name:'invoTaxNo',xtype:'textarea',anchor:'90%'},
					{boxLabel:C_LOOK_SMART,name:'invoTaxNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
				]},
        		{id:'T_PR_LOOK_4',title:C_LOOK_COMPLEX,layout:'column',items:[
        			{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:C_SETTLE_OBJECT,tabIndex:1,name:'custId',store:getCS(),enableKeyEvents:true,
	             	xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	             	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,
						keydown:{fn:function(f,e){LC(f,e,t='R'?'custArFlag':'custApFlag');},buffer:500}}},
	             	{fieldLabel:C_CURR,tabIndex:4,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	             	{fieldLabel:C_SEWA,tabIndex:3,name:'prPaymentType',store:getSEWA_S(),xtype:'combo',displayField:'sewaName',valueField:'sewaId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	             	{fieldLabel:C_STATUS,tabIndex:3,name:'prStatus',store:t=='R'?ERST_S:PRST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}]},
	             	{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:t=='R'?C_PR_DATE_R:C_PR_DATE_P,name:'prDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_AMOUNT,name:'prAmount',xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_BANK,tabIndex:5,name:'prBank',store:getCOBA_S(),xtype:'combo',displayField:'cobaBank',valueField:'cobaBank',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}
	             	]},
	             	{columnWidth:.34,layout:'form',border:false,
	             	items:[	             	
	             	{fieldLabel:C_TO,name:'prDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_TO,name:'prAmount2',xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_BANK_ACCOUNT,tabIndex:6,name:'prAccount',xtype:'textfield',anchor:'90%'}
	             	]}
	        	]}
        	]}
        ]
    });
    Fos.PrLookupWin.superclass.constructor.call(this, {title:t=='R'?C_PR_R_QUERY:C_PR_P_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:frmLookup}); 
};
Ext.extend(Fos.PrLookupWin, Ext.Window);

Fos.VoucLookupWin = function(t) {    
	var frmLookup = new Ext.form.FormPanel({labelWidth:70,labelAlign:"right",
    	items:[{id:'T_VOUC_LOOK',xtype:'tabpanel',plain:true,activeTab:0,height:200,defaults:{bodyStyle:'padding:10px'},
            items:[{id:'T_VOUC_LOOK_1',title:t=='R'?C_LOOK_BY_VOUC_NO_R:C_LOOK_BY_VOUC_NO_P,layout:'form',
				items:[{fieldLabel:'R'?C_VOUC_NO_R:C_VOUC_NO_P,name:'voucNo',xtype:'textarea',anchor:'90%'},
            	{boxLabel:C_LOOK_SMART,name:'voucNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
       			]},
       			{id:'T_VOUC_LOOK_2',title:C_LOOK_BY_INVO_NO,layout:'form',
				items: [
					{fieldLabel:C_INVO_NO,name:'invoNo',xtype:'textarea',anchor:'90%'},
					{boxLabel:C_LOOK_SMART,name:'invoNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
				]},
				{id:'T_VOUC_LOOK_3',title:C_LOOK_BY_TAX_NO,layout:'form',
				items: [
					{fieldLabel:C_TAX_NO,name:'invoTaxNo',xtype:'textarea',anchor:'90%'},
					{boxLabel:C_LOOK_SMART,name:'invoTaxNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
				]},
        		{id:'T_VOUC_LOOK_4',title:C_LOOK_COMPLEX,layout:'column',items:[
        			{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:C_SETTLE_OBJECT,tabIndex:1,name:'custId',store:getCS(),enableKeyEvents:true,
	             		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	             		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,t='R'?'custArFlag':'custApFlag');},buffer:500}}},
	             	{fieldLabel:C_CURR,tabIndex:4,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	             	{fieldLabel:C_SEWA,tabIndex:7,name:'voucPaymentType',store:getSEWA_S(),xtype:'combo',displayField:'sewaName',valueField:'sewaId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
	             	{fieldLabel:C_CHECK_NO,tabIndex:10,name:'voucCheckNo',xtype:'textfield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_STATUS,tabIndex:13,name:'voucStatus',store:VOST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}]},
	             	{columnWidth:.33,layout:'form',border:false,
	             	items:[
	             	{fieldLabel:t=='R'?C_VOUC_DATE_R:C_VOUC_DATE_P,tabIndex:2,name:'voucDate',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_AMOUNT,name:'voucAmount',tabIndex:5,xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_WRITEOFF_AMOUNT,tabIndex:8,name:'voucWriteOffAmount',xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_BANK_RECEIPT_NO,tabIndex:11,name:'voucBankReciptNo',xtype:'textfield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_BANK,tabIndex:14,name:'voucBank',store:getCOBA_S(),xtype:'combo',displayField:'cobaBank',valueField:'cobaBank',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}
	             	]},
	             	{columnWidth:.34,layout:'form',border:false,
	             	items:[	             	
	             	{fieldLabel:C_TO,tabIndex:3,name:'voucDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
	             	{fieldLabel:C_TO,tabIndex:6,name:'voucAmount2',xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_TO,tabIndex:9,name:'voucWriteOffAmount2',xtype:'numberfield',anchor:'90%'},
	             	{fieldLabel:C_BANK_ACCOUNT,tabIndex:12,name:'voucAccount',xtype:'textfield',anchor:'90%'},
	             	{fieldLabel:C_WRITEOFF_NO,tabIndex:15,name:'voucWriteOffNo',xtype:'textfield',anchor:'90%'}
	             	]}
	        	]}
        	]}
        ]
    });
    Fos.VoucLookupWin.superclass.constructor.call(this, {title:t=='R'?C_VOUC_R_QUERY:C_VOUC_P_QUERY,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:frmLookup}); 
};
Ext.extend(Fos.VoucLookupWin,Ext.Window);

Fos.FileUploadWin = function(title,label) {	
	var fp = new Ext.form.FormPanel({
        id:'F_UP',fileUpload:true,title:title,header:false,autoHeight:true,
        items: [{
            xtype: 'fileuploadfield',emptyText:label,fieldLabel:label,
            name: 'tempFile',anchor: '90%',frame: true,allowBlank: false,msgTarget: 'side'
        }]
    });
    Fos.FileUploadWin.superclass.constructor.call(this, {title:title,iconCls:'up',plain:false,modal:true,width:400,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:fp}); 
};
Ext.extend(Fos.FileUploadWin,Ext.Window);

Fos.CurrencyWin = function() {
    Fos.CurrencyWin.superclass.constructor.call(this, {title:C_CURR_P,modal:true,width:180,
        height:90,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[
        {fieldLabel:C_CURR,id:'currCode',value:'CNY',allowBlank:false,store:getCURR_S(),xtype:'combo',
        	displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',
        	selectOnFocus:true,anchor:'99%'}]}); 
};
Ext.extend(Fos.CurrencyWin, Ext.Window);
Fos.DateWin = function() {    
	var frmDate = new Ext.form.FormPanel({labelWidth: 60,bodyStyle:'padding:5px',
    	items: [{fieldLabel:C_SAIL_DATE,id:'voyaSailDate',value:new Date(),allowBlank:false,xtype:'datefield',anchor:'90%'}]
    });
    Fos.DateWin.superclass.constructor.call(this, {title:C_SAIL_DATE_P,modal:true,width:200,
        Height:300,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frmDate});
};
Ext.extend(Fos.DateWin, Ext.Window);

Fos.TemplateChooseWin = function(t){
	var frmTemplate = new Ext.form.FormPanel({labelWidth:80,bodyStyle:'padding:5px',
    	items: [{fieldLabel:C_TEMP_SEL_P,id:'tempId',allowBlank:false,store:getTemplates(t),xtype:'combo',displayField:'tempName',valueField:'tempId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}]
    });
    Fos.TemplateChooseWin.superclass.constructor.call(this,{title:C_TEMP_SEL_P,modal:true,width:400,
        Height:300,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frmTemplate}); 
};
Ext.extend(Fos.TemplateChooseWin, Ext.Window);

Fos.MailWin = function(m,t,mt) {
	var form = new Ext.form.FormPanel({labelWidth:60,id:'F_MAIL',bodyStyle:'padding:5px 5px 0',frame:true,width:800,height:400,
		items: [{layout:'column',layoutConfig:{columns:1},deferredRender:false,items:[
			{columnWidth:1,layout:'form',border:false,items:[
				{fieldLabel:'To',id:'to',value:m.get('messTo'),xtype:'textfield',allowBlank:false,anchor:'90%'},
	            {fieldLabel:'Cc',id:'cc',value:m.get('messCc'),xtype:'textfield',anchor:'90%'},
	            {fieldLabel:'Subject',id:'sub',value:m.get('messSubject'),xtype:'textfield',anchor:'90%'},
	            {fieldLabel:C_TEMP_FILE,disabled:t=='',id:'tempId',store:getTemplates(t),xtype:'combo',displayField:'tempName',valueField:'tempId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
	            	listeners:{scope:this,
	        		render:function(cbx){
	        			if(cbx.store.getCount()){
	        				var r=cbx.store.getAt(0);
	        				 cbx.setValue(r.get('tempId'));
	        			}
	            }}},
	            {layout:'fit',items:[{id:'body',value:m.get('messBody'),xtype:'htmleditor',anchor:'90%'}]}]
	         }]}]
    });
    Fos.MailWin.superclass.constructor.call(this, {title:mt==1?C_SEND_MAIL:C_SEND_FAX,modal:true,plain:true,layout:'fit',width:800,height:400,
    border:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:form}); 
};
Ext.extend(Fos.MailWin, Ext.Window);

Fos.CargoLookupWin = function(a,consId) {    
	var store = new Ext.data.GroupingStore({url:SERVICE_URL+'?A='+a,
 		reader: new Ext.data.XmlReader({record:'FCargo'}, FCargo),groupField:'consNo',sortInfo:{field:'cargId', direction:'ASC'}});
    if(a=='CARG_MID_Q')
    	store.load({params:{consMasterId:consId}});
    else
    	store.load({params:{consId:consId}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel([sm,
	{header:C_CONS_NO,dataIndex:'consNo',width:80},
	{header:C_MARKS,dataIndex:'cargMarks',width:80},
	{header:C_CARGO_NAME_EN,dataIndex:'cargNameEn',width:80},
	{header:C_PACKAGES,dataIndex:'cargPackageNum',width:60},
	{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK},	
	{header:C_NW,dataIndex:'cargNetWeight',width:60},
	{header:C_GW,dataIndex:'cargGrossWeight',width:60},	
	{header:C_CBM,dataIndex:'cargMeasurement',width:60},
	{header:C_MBL_NO,dataIndex:'consMblNo',width:80},
	{header:C_HBL_NO,dataIndex:'consHblNo',width:80},
	{header:C_BOOKER,dataIndex:'custName',width:80},
	{header:C_MANU_NO,dataIndex:'cargManuNo',width:80},
	{header:C_SPEC,dataIndex:'cargSpec',width:80},	
	{header:C_CARGO_NAME_CN,dataIndex:'cargNameCn',width:80},
	{header:C_HS_CODE,dataIndex:'cargNo',width:100},
	{header:C_UNIT,dataIndex:'cargUnit',width:100}]);
	cm.defaultSortable = true;
    var g = new Ext.grid.GridPanel({ 
    id:'G_CARG_LOOKUP',iconCls:'gen',header:false,height:300,width:600,store:store,sm:sm,cm:cm,loadMask: true});	
    Fos.CargoLookupWin.superclass.constructor.call(this,{title:C_CARGO_SEL,modal:true,layout:'fit',width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[{layout:'fit',border:false,
        items: [g]}]}); 
};
Ext.extend(Fos.CargoLookupWin,Ext.Window);

Fos.ExSearchWin = function(c,t) {
	this.store = GS('EXPE_X','SExpense',SExpense,'expeId','DESC','','','id',false);
    this.store.load({params:{custId:c,expeType:t,expeBillStatus:'0'}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_SETTLE_OBJECT,width:100,dataIndex:"custSname"},
		{header:C_CONS_NO,width:80,dataIndex:"consNo"},
		{header:C_MBL_NO,width:80,dataIndex:"consMblNo"},
		{header:C_HBL_NO,width:80,dataIndex:"consHblNo"},
		{header:C_VESS,width:80,dataIndex:"consVessel"},
		{header:C_VOYA,width:80,dataIndex:"consVoyage"},
		{header:C_CHAR,width:80,dataIndex:"charName"},
		{header:C_UNIT,width:80,dataIndex:"unitName"},
		{header:C_QUANTITY,width:60,dataIndex:"expeNum"},
		{header:C_UNIT_PRICE,width:80,dataIndex:"expeUnitPrice"},		
		{header:C_AMOUNT,width:80,dataIndex:"expeTotalPrice"},
		{header:C_TOTAL_AMOUNT,width:80,dataIndex:"expeTotalAmount"},
		{header:C_CURR,dataIndex:'currCode',width:100},	
		{header:C_EX_RATE,width:80,dataIndex:"expeExRate"},
		{header:C_INVO_NO,width:100,dataIndex:"expeInvoiceNo"},
		{header:C_INVOICED_AMOUNT,width:100,dataIndex:"expeInvoiceAmount"},
		{header:C_WRITEOFFED_AMOUNT,width:100,dataIndex:"expeWriteOffAmount"},
		{header:C_REMARKS,width:100,dataIndex:"expeRemarks"}
		],defaults:{sortable:true,width:80}});
    this.grid = new Ext.grid.GridPanel({height:340,autoScroll:true,store:this.store,sm:sm,cm:cm,loadMask:true});	
	this.search=function(){
      	var a=[];var op=1;      	
    		var custId=this.find('name','custId')[0].getValue();
    		if(custId) a[a.length]={key:'t2.custId',value:custId,op:op};
    		var consCustId=this.find('name','consCustId')[0].getValue();
    		if(consCustId) a[a.length]={key:'consCustId',value:consCustId,op:op};
    		var consBizType=this.find('name','consBizType')[0].getValue();        		
    		if(consBizType) a[a.length]={key:'consBizType',value:consBizType,op:op};
    		var consBizClass=this.find('name','consBizClass')[0].getValue();        		
    		if(consBizClass) a[a.length]={key:'consBizClass',value:consBizClass,op:op};
    		var consShipType=this.find('name','consShipType')[0].getValue();        		
    		if(consShipType) a[a.length]={key:'consShipType',value:consShipType,op:op};
    		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();        		
    		if(consSalesRepId) a[a.length]={key:'consSalesRepId',value:consSalesRepId,op:op};      		
    		var consDate=this.find('name','consDate')[0].getValue();
    		var consDate2=this.find('name','consDate2')[0].getValue();
    		if(consDate && consDate2){
    			a[a.length]={key:'consDate',value:consDate.format(DATEF),op:5};
    			a[a.length]={key:'consDate',value:consDate2.format(DATEF),op:3};
    		}
    		else if(consDate) a[a.length]={key:'consDate',value:consDate,op:op};
    		var consEtd=this.find('name','consEtd')[0].getValue();
    		var consEtd2=this.find('name','consEtd2')[0].getValue();
    		if(consEtd && consEtd2){
    			a[a.length]={key:'consEtd',value:consEtd.format(DATEF),op:5};
    			a[a.length]={key:'consEtd',value:consEtd2.format(DATEF),op:3};
    		}
    		else if(consEtd) a[a.length]={key:'consEtd',value:consEtd,op:op};    		
    		var consPod=this.find('name','consPod')[0].getValue();        		
    		if(consPod) a[a.length]={key:'consPod',value:consPod,op:op};
    		var consMblNo=this.find('name','consMblNo')[0].getValue();        		
    		if(consMblNo) a[a.length]={key:'consMblNo',value:consMblNo,op:op};
    		var consRefNo=this.find('name','consRefNo')[0].getValue();        		
    		if(consRefNo) a[a.length]={key:'consRefNo',value:consRefNo,op:op};
    		var vessId=this.find('name','vessId')[0].getValue();        		
    		if(vessId) a[a.length]={key:'vessId',value:vessId,op:op};
    		var consVoyage=this.find('name','consVoyage')[0].getValue();        		
    		if(consVoyage) a[a.length]={key:'consVoyage',value:voyaId,op:op};    		
    		var charId=this.find('name','charId')[0].getValue();        		
    		if(charId) a[a.length]={key:'charId',value:charId,op:op};
    		var currCode=this.find('name','currCode')[0].getValue();        		
    		if(currCode) a[a.length]={key:'currCode',value:currCode,op:op};
    		var expeType=this.find('name','expeType')[0].getValue();        		
    		if(expeType) a[a.length]={key:'expeType',value:expeType,op:op};
    		var expeStatus=this.find('name','expeStatus')[0].getValue();        		
    		if(expeStatus) a[a.length]={key:'expeStatus',value:expeStatus,op:op};
    		var pateId=this.find('name','pateId')[0].getValue();        		
    		if(pateId) a[a.length]={key:'pateId',value:pateId,op:op};
   		this.store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	this.store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
	};
	this.clear=function(){this.form.getForm().reset();};
	this.form = new Ext.FormPanel({title:C_FILTER_BY,layout:'column',name:'sf',xtype:'form',height:160,
				layoutConfig:{columns:4},region:'north',collapsible:true,
				items:[{columnWidth:.25,layout:'form',labelWidth:60,border:false,items:[
	            	{fieldLabel:C_BOOKER,tabIndex:1,name:'consCustId',store:getCS(),enableKeyEvents:true,
	            	xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
	            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,t='R'?'custArFlag':'custApFlag');},buffer:500}}},
     				{fieldLabel:C_CHAR,tabIndex:5,name:'charId',store:getCHAR_S(),xtype:'combo',displayField:'charName',valueField:'charId',typeAhead: true,tpl:charTpl,itemSelector:'div.list-item',listWidth:300,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
     				{fieldLabel:C_VESS,tabIndex:9,name:'vessId',store:getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},     				
     				{fieldLabel:C_CONS_DATE,tabIndex:17,name:'consDate',xtype:'datefield',format:DATEF,anchor:'90%'},     				
     				{fieldLabel:C_SAIL_DATE,tabIndex:19,name:'consEtd',xtype:'datefield',format:DATEF,anchor:'90%'}
     			]},
	        	{columnWidth:.25,layout:'form',labelWidth:60,border:false,items:[
	            	{fieldLabel:C_SETTLE_OBJECT,tabIndex:2,name:'custId',store:getCS(),enableKeyEvents:true,
	             	xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	             	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,t='R'?'custArFlag':'custApFlag');},buffer:500}}},
					{fieldLabel:C_BIZ_TYPE,tabIndex:7,name:'consBizType',store:BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_VOYA,tabIndex:10,name:'consVoyage',xtype:'textfield',anchor:'90%'},	            	
                	{fieldLabel:C_TO,tabIndex:18,name:'consDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
                	{fieldLabel:C_TO,tabIndex:20,name:'consEtd2',xtype:'datefield',format:DATEF,anchor:'90%'}
	            ]},
    			{columnWidth:.25,layout:'form',labelWidth:60,border:false,items:[
	            	{fieldLabel:C_CURR,tabIndex:3,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	           		{fieldLabel:C_SHIP_TYPE,tabIndex:7,name:'consShipType',store:SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_BL_NO,tabIndex:11,name:'consMblNo',xtype:'textfield',anchor:'90%'},
	            	{fieldLabel:C_POD,tabIndex:47,name:'consPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
              		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
              		{fieldLabel:C_SALES,tabIndex:13,name:'consSalesRepId',store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}
	            ]},
    			{columnWidth:.25,layout:'form',labelWidth:70,border:false,items:[
	            	{fieldLabel:C_CHAR_TYPE,tabIndex:4,name:'expeType',store:new Ext.data.SimpleStore({fields:['CODE','NAME'],data:[['','所有'],['R','应收'],['P','应付']]}),xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_BIZ_CLASS,tabIndex:6,name:'consBizClass',store:BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_PATE,tabIndex:8,name:'pateId',store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_STATUS,tabIndex:12,name:'expeStatus',store:EXST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_CUST_CONS_NO,tabIndex:16,name:'consRefNo',xtype:'textfield',anchor:'90%'}	            	
	            ]}
	    	]});        
    Fos.ExSearchWin.superclass.constructor.call(this,{title:C_EXPE_QUERY,modal:true,width:800,
    	height:400,listeners:{maximize:function(w){w.doLayout();}},
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',layout:'border',
        tbar:[{text:C_SEARCH,iconCls:'refresh',scope:this,handler:this.search},'-',
			{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
        items:[this.form,
        {title:'',layout:'fit',region:'center',deferredRender:false,bodyStyle:'padding:0px',items:[this.grid]}]}); 
};
Ext.extend(Fos.ExSearchWin,Ext.Window);

Fos.BillLookupWin = function(store,t) {
	var t1={id:'T_BILL_LOOK_1',title:C_LOOK_BY_BILL_NO,layout:'form',items:[
		{fieldLabel:C_BILL_NO,name:'billNo',xtype:'textarea',anchor:'90%'},
    	{boxLabel:C_LOOK_SMART,name:'billNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}]};
    var t2={id:'T_BILL_LOOK_2',title:C_LOOK_COMPLEX,layout:'column',items:[
		{columnWidth:.5,layout:'form',border:false,labelWidth:80,labelAlign:'right',items:[
			{fieldLabel:C_BILL_OBJECT,tabIndex:1,name:'custId',store:getCS(),enableKeyEvents:true,
		    	xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
		    	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,t=='R'?'custArFlag':'custApFlag');},buffer:500}}},		 	
			{fieldLabel:C_BILL_DATE,name:'billDate',xtype:'datefield',format:DATEF,anchor:'90%'},
			{fieldLabel:C_SAIL_DATE,name:'billSailDate',xtype:'datefield',format:DATEF,anchor:'90%'},
			{fieldLabel:C_CONS_NO,name:'billConsNo',xtype:'textfield',anchor:'90%'},
			{fieldLabel:C_VESS,tabIndex:5,name:'billVessel',store:getVES(),enableKeyEvents:true,
		    	xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
	     		listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
	     	{fieldLabel:C_STATUS,tabIndex:3,name:'billStatus',store:BIST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}]},
		{columnWidth:.5,layout:'form',border:false,labelWidth:80,labelAlign:'right',items:[
			{fieldLabel:C_CURR,tabIndex:4,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
			{fieldLabel:C_TO,name:'billDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
			{fieldLabel:C_TO,name:'billSailDate2',xtype:'numberfield',anchor:'90%'},			
			{fieldLabel:C_BL_NO,name:'billBlNo',xtype:'textfield',anchor:'90%'},
			{fieldLabel:C_VOYA,tabIndex:35,name:'billVoyage',xtype:'textfield',anchor:'90%'}]}
		]};
	var tab = new Ext.TabPanel({id:'T_BILL_LOOK',xtype:'tabpanel',plain:true,activeTab:0,height:340,
		defaults:{bodyStyle:'padding:10px'},items:[t1,t2]});
	this.reload=function(){
		var xml = '';
     	var at = tab.getActiveTab();
     	var a=[];var op=1;
		a[0]={key:'billType',value:t,op:1};
       	if(at.getId()=='T_BILL_LOOK_1'){
       		var billNo=at.find('name','billNo')[0].getValue();
       		var billNoM=at.find('name','billNoM')[0].getValue();
       		var c=billNo.indexOf(',');
    		var b=billNo.indexOf('..');
    		if(c>=0){
    			a[1]={key:'billNo',value:billNo,op:IN};
    		}
    		else if(b>=0){
    			var ra=billNo.split('..');
    			a[1]={key:'billNo',value:ra[0],op:GE};
    			a[2]={key:'billNo',value:ra[1],op:LE};
    		}
    		else if(billNoM){
       			a[1]={key:'billNo',value:billNo,op:LI};
    		}
       	}
       	else if(at.getId()=='T_BILL_LOOK_2'){
       		var custId=at.find('name','custId')[0].getValue();
       		if(custId) a[a.length]={key:'custId',value:custId,op:op};
       		var currCode=at.find('name','currCode')[0].getValue();        		
       		if(currCode) a[a.length]={key:'currCode',value:currCode,op:op};
       		var billStatus=at.find('name','billStatus')[0].getValue();        		
       		if(billStatus) a[a.length]={key:'billStatus',value:billStatus,op:op};
       		var billConsNo=at.find('name','billConsNo')[0].getValue();        		
       		if(billConsNo) a[a.length]={key:'billConsNo',value:billConsNo,op:op};
       		var billBlNo=at.find('name','billBlNo')[0].getValue();        		
       		if(billBlNo) a[a.length]={key:'billBlNo',value:billBlNo,op:op};
       		var billVessel=at.find('name','billVessel')[0].getValue();        		
       		if(billVessel) a[a.length]={key:'billVessel',value:billVessel,op:op};
       		var billVoyage=at.find('name','billVoyage')[0].getValue();        		
       		if(billVoyage) a[a.length]={key:'billVoyage',value:billVoyage,op:op};
       		
       		var billDate=at.find('name','billDate')[0].getValue();
       		var billDate2=at.find('name','billDate2')[0].getValue();
       		if(billDate && billDate2){
       			a[a.length]={key:'billDate',value:billDate.format(DATEF),op:5};
       			a[a.length]={key:'billDate',value:billDate2.format(DATEF),op:3};
       		}
       		else if(billDate) a[a.length]={key:'billDate',value:billDate,op:op};        		
       		var billSailDate=at.find('name','billSailDate')[0].getValue();
       		var billSailDate2=at.find('name','billSailDate')[0].getValue();
       		if(billSailDate && billSailDate2){
       			a[a.length]={key:'billSailDate',value:billSailDate.format(DATEF),op:5};
       			a[a.length]={key:'billSailDate',value:billSailDate2.format(DATEF),op:3};
       		}
       		else if(billSailDate) a[a.length]={key:'billSailDate',value:billSailDate,op:op};       		
       	}
       	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};
    Fos.BillLookupWin.superclass.constructor.call(this, {title:C_BILL_QUERY,iconCls:'search',modal:true,width:600,height:300,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:tab,
		buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.BillLookupWin, Ext.Window);

var changePass=function(){var win = new Fos.PassWin();win.show();};
Fos.PassWin = function() {    
	var frmPass = new Ext.form.FormPanel({labelWidth:80,bodyStyle:'padding:5px',
    	items: [{fieldLabel:C_OLD_PASS,name:'oldPassword',allowBlank:false,xtype:'textfield',inputType:'password',anchor:'90%'},
    	{fieldLabel:C_NEW_PASS,name:'newPassword',allowBlank:false,xtype:'textfield',inputType:'password',anchor:'90%'},
    	{fieldLabel:C_CONFIRM_NEW_PASS,name:'newPassword2',allowBlank:false,xtype:'textfield',inputType:'password',anchor:'90%'}
    	]
    });
    this.changePass=function(){
		var op=frmPass.find('name','oldPassword')[0].getValue();
		var np=frmPass.find('name','newPassword')[0].getValue();
		var np2=frmPass.find('name','newPassword2')[0].getValue();
		if(op==''){XMG.alert(SYS,M_OLD_PASS_REQIRED);frmPass.find('name','oldPassword')[0].focus();return};
		if(np==''){XMG.alert(SYS,M_NEW_PASS_REQIRED);frmPass.find('name','newPassword')[0].focus();return};
		if(np2==''){XMG.alert(SYS,M_CONFIRM_NEW_PASS_REQIRED);frmPass.find('name','newPassword2')[0].focus();return};
		if(np!=np2){XMG.alert(SYS,M_NEW_PASS_NOT_EQ);frmPass.find('name','newPassword')[0].focus();return};
		if(np==op){XMG.alert(SYS,M_NEW_PASS_EQ_OLD);frmPass.find('name','newPassword')[0].focus();return};
		
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'USER_U',oldPassword:op,newPassword:np,newPassword2:np2},
		success: function(r){XMG.alert(SYS,M_CHANGE_PASS_SUCCESSED);this.close();},
		failure: function(r){XMG.alert(SYS,M_F);},scope:this});
    };
    
    Fos.PassWin.superclass.constructor.call(this, {title:M_CHANGE_PASS,modal:true,width:400,
        Height:300,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[frmPass],        
        buttons:[{text:C_OK,scope:this,handler:this.changePass},
        	{text:C_CANCEL,scope:this,handler:this.close}]
        }); 
};
Ext.extend(Fos.PassWin,Ext.Window);

Fos.SalesQuotaGrid = function() {
	this.saquId=0;	
	var store = GS('SAQU_Q','CSalesQuota',CSalesQuota,'saquId','DESC','','','id',true);
	store.load({params:{start:0,limit:C_PS}});	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_SALES,dataIndex:'saquSalesName',width:100,
			editor:new Ext.form.ComboBox({displayField:'userLoginName',valueField:'userName',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getSALE_S(),
            listeners:{scope:this,select:function(c,r,i){
            	var b =this.getSelectionModel().getSelected();b.set('saquSalesId',r.get('userId'));}}})},
	{header:C_YEAR,dataIndex:'saquYear',width:80,editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:YY_S})},
	{header:C_MONTY,dataIndex:'saquMonth',width:80,editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:MM_S})},
	{header:C_BASE_PROFIT,dataIndex:'saquBaseProfit',width:80,editor:new Ext.form.NumberField({decimalPrecision:2})},
	{header:C_COMMISION_RATE,dataIndex:'saquCommissionRate',width:80,editor:new Ext.form.NumberField({decimalPrecision:4})}	
	],defaults:{sortable:true,width:100}});
	var d=new Date();y=d.format('Y');m=d.format('m');
	this.add=function(){
		this.saquId=this.saquId-1;
		var t = new CSalesQuota({saquId:this.saquId,saquSalesId:'',saquSalesName:'',saquYear:y,saquMonth:m,
		saquBaseProfit:'',saquCommissionRate:'',version:'0'});
		store.insert(0,t);t.set('rowAction','N');sm.selectFirstRow();this.startEditing(0,1);
	};
	this.remove=function(){FOS_REMOVE(sm,store);};
	this.save=function(){FOS_POST(store,'CSalesQuota',CSalesQuota,'SAQU_S');};
	CREATE_KM('G_SAQU',this);	
	Fos.SalesQuotaGrid.superclass.constructor.call(this,{
	id:'G_SAQU',title:C_SALES_QUOTA,header:false,deferredRender:false,closable:true,
		border:false,height:200,autoScroll:true,sm:sm,cm:cm,store:store,sortInfo:{field:'fdocId',direction:'DESC'},
		tbar:[
			{itemId:'TB_N',text:C_ADD+'(N)',disabled:NR(M1_V+V_SAQU+F_M),iconCls:'add',scope:this,handler:this.add},'-',
			{itemId:'TB_R',text:C_REMOVE+'(R)',disabled:NR(M1_V+V_SAQU+F_R),iconCls:'remove',scope:this,handler:this.remove},'-',
			{itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_V+V_SAQU+F_M),iconCls:'save',scope:this,handler:this.save},'->',
		new Ext.PagingToolbar({pageSize:C_PS,store:store})],
		bbar:PTB(store,C_PS)
    });
};
Ext.extend(Fos.SalesQuotaGrid, Ext.grid.EditorGridPanel);

Fos.SalesCommissionGrid = function() {
	var store = GS('SACO_Q','CSalesCommission',CSalesCommission,'sacoId','DESC','','','id',true);
	store.load({params:{start:0,limit:C_PS}});	
	var cs = GS('COMM_Q','CCommission',CCommission,'commId','DESC','','S_COMM','',false);
    cs.load();    
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_SALES,dataIndex:'sacoSalesName',width:100,
			editor:new Ext.form.ComboBox({displayField:'userLoginName',valueField:'userName',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getSALE_S(),
            listeners:{scope:this,select:function(c,r,i){
            	var b =this.getSelectionModel().getSelected();b.set('sacoSalesId',r.get('userId'));}}})},	
	{header:C_COMMISSION,dataIndex:'commName',width:80,editor:new Ext.form.ComboBox({xtype:'combo',store:cs,displayField:'commName',valueField:'commName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
		listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();
	            	if(b){b.set('commId',r.get('commId'));}}}
				})}	
	],defaults:{sortable:true,width:100}});
	this.add=function(){
		var rid=GGUID();
		var t = new CSalesCommission({sacoId:rid,sacoSalesId:'',sacoSalesName:'',commId:'',version:'0'});
		store.insert(0,t);t.set('rowAction','N');sm.selectFirstRow();this.startEditing(0,1);
	};
	this.removeRecords=function(){FOS_REMOVE(sm,store);};
	this.save=function(){FOS_POST(store,'CSalesCommission',CSalesCommission,'SACO_S');};
	CREATE_KM('G_SACO',this);	
	Fos.SalesCommissionGrid.superclass.constructor.call(this,{
	id:'G_SACO',title:C_SALES_COMMISSION,header:false,deferredRender:false,closable:true,
		border:false,height:200,autoScroll:true,sm:sm,cm:cm,store:store,sortInfo:{field:'fdocId',direction:'DESC'},
		tbar:[
			{itemId:'TB_N',text:C_ADD+'(N)',disabled:NR(M1_V+V_SAQU+F_M),iconCls:'add',scope:this,handler:this.add},'-',
			{itemId:'TB_R',text:C_REMOVE+'(R)',disabled:NR(M1_V+V_SAQU+F_R),iconCls:'remove',scope:this,handler:this.removeRecords},'-',
			{itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_V+V_SAQU+F_M),iconCls:'save',scope:this,handler:this.save},'->',
		new Ext.PagingToolbar({pageSize:C_PS,store:store})],
		bbar:PTB(store,C_PS)
    });
};
Ext.extend(Fos.SalesCommissionGrid, Ext.grid.EditorGridPanel);

Fos.CommissionTab = function(p){
	this.sel =GSEL;
	this.reload = false;
	var store = GS('COMM_Q','CCommission',CCommission,'commId','DESC','','S_COMM','',false);
    store.load();
    var itemStore = GS('COIT_Q','CCommissionItem',CCommissionItem,'coitId','DESC','','','',false); 
    itemStore.load();	
	var re = {scope:this,
		rowselect:function(sm,row,r){
			if(this.sel!=r.get('commId')){
				this.sel=r.get('commId');				
				var s = grid2.getStore();s.removeAll();
				var a = itemStore.getRange();
				for(var i=0;i<a.length;i++){if(a[i].get('commId')==this.sel) s.add(a[i]);}
			}
		}
	};	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,listeners:re});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_NAME,dataIndex:'commName',width:250,editor:new Ext.form.TextField()}],defaults:{sortable:true}});
	var grid = new Ext.grid.EditorGridPanel({id:'G_COMM',clicksToEdit:1,border:true,store:store,sm:sm,cm:cm});	
    
	var ss = new Ext.data.Store({baseParams:{mt:'JSON'},
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'CCommissionItem'},CCommissionItem)
		});	 
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
		{header:C_COMMISSION_LOWER,dataIndex:'coitLower',editor:new Ext.form.NumberField()},
		{header:C_COMMISSION_LIMIT,dataIndex:'coitLimit',editor:new Ext.form.NumberField()},
		{header:C_COMMISSION_RATE,dataIndex:'coitRate',editor:new Ext.form.NumberField()}],defaults:{sortable:true,width:80}});
	var grid2 = new Ext.grid.EditorGridPanel({id:'G_COIT',clicksToEdit:1,border:true,store:ss,sm:sm2,cm:cm2});	
	this.save = function(){
		var xml='';
		var a = store.getModifiedRecords();
		if(a.length) xml = ATX(a,'CCommission',CCommission);
		var cc=[];
		var ca =itemStore.getRange();
		for(var i=0;i<ca.length;i++){
			if(ca[i].dirty) cc[cc.length]=ca[i];
		}
		if(cc.length>0){var x = ATX(cc,'CCommissionItem',CCommissionItem);xml=xml+x;};		
		if(xml!=''){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'COMM_S'},
			success: function(r){				
				var a = XTRA(r.responseXML,'CCommission',CCommission);FOSU(store,a,CCommission);
				var b = XTRA(r.responseXML,'CCommissionItem',CCommissionItem);
				FOSU(itemStore,b,CCommissionItem);FOSU(ss,b,CCommissionItem);
				XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};
	this.addComm=function(){
		var rid=GGUID();
		var r = new CCommission({id:rid,commId:rid,commName:'',active:'1',version:'0',rowAction:'N'});
    	grid.stopEditing();store.insert(0,r);grid.getSelectionModel().selectFirstRow();grid.startEditing(0,1);
	};
	this.removeComm=function(){
		var r = grid.getSelectionModel().getSelected();
		if(r){
			r.set('rowAction',r.get('rowAction')=='N'?'D':'R');
				grid.getStore().remove(r);				
				var a=grid2.getStore().getRange();
				for(var i=0;i<a.length;i++){
					a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
					grid2.getStore().remove(a[i]);
				}
			}
	};
	this.addItem=function(){		
		var rid=GGUID();
		var r = new CCommissionItem({id:rid,coitId:rid,commId:this.sel,active:'1',version:'0',rowAction:'N'});
    	grid2.stopEditing();
    	itemStore.add(r);ss.insert(0,r);
    	grid2.getSelectionModel().selectFirstRow();
    	grid2.startEditing(0,1);
	};
	this.removeItem=function(){
		var r = grid2.getSelectionModel().getSelections();
		if(r){
			for(var i=0;i<r.length;i++){
				r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
				grid2.getStore().remove(r[i]);
			}
		}
	};
	Fos.CommissionTab.superclass.constructor.call(this,{id:'T_COMM',title:C_COMMISSION,iconCls:'gen',header:false,deferredRender:false,
	autoScroll:true,labelAlign:'right',closable:true,labelWidth:80,border:false,width:800,layout:'border',
	items: [{title:C_COMMISSION_LIST,region:'center',width:400,minSize:200,maxSize:600,layout:'fit',items:[grid]},
		{title:C_COMMISSION_ITEM,region:'east',split:true,width:400,minSize:200,maxSize:600,layout:'fit',items:[grid2],
				tbar:[
				{text:C_ADD,iconCls:'add',scope:this,scope:this,handler:this.addItem},
				{text:C_REMOVE,disabled:false,iconCls:'remove',scope:this,handler:this.removeItem}]
		}],
	tbar:[		
		{text:C_ADD,iconCls:'add',scope:this,scope:this,handler:this.addComm},
		{text:C_REMOVE,disabled:false,iconCls:'remove',scope:this,handler:this.removeComm},
		{text:C_SAVE,disabled:false,iconCls:'save',scope:this,handler:this.save}
		]});
};
Ext.extend(Fos.CommissionTab, Ext.Panel);