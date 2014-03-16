//客户供应商类别
Fos.showCustomerCategory = function() {
	var store = GS('CUCA_Q','CCustomerCategory',CCustomerCategory,'cucaId','DESC','',false);
	store.load();
    var sm=getCSM();
    
    var grid = new  Ext.grid.EditorGridPanel({id:'G_CUCA',
    	title:C_CUCA,
		header:false,
		clicksToEdit:1,
		closable:true,
		store: store,
		sm:sm,
	    cm:new Ext.grid.ColumnModel([sm,
	        {header:"ID",hidden:true,dataIndex:'cucaId',width:50},
	        {header:C_NAME,dataIndex:'cucaName',width:100,sortable:true,
	        	editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})}]),	
		tbar:[{text:C_ADD,disabled:NR(M1_V+V_CUCA+F_M),iconCls:'add',
			handler : function(){
				var p = new CCustomerCategory({cucaId:'0',cucaName:'',version:'0',rowAction:'N'}); 
				grid.stopEditing();
				store.insert(0,p);
				grid.startEditing(0, 2);
			}},'-',
			{text:C_REMOVE,disabled:NR(M1_V+V_CUCA+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
	        {text:C_SAVE,disabled:NR(M1_V+V_CUCA+F_M),iconCls:'save',handler:function(){FOS_POST(store,'CCustomerCategory',CCustomerCategory,'CUCA_S');getCUCA_S().reload();}
	        }]
    }); 
    return grid;
};

Fos.CustomerGrid = function(sales) {	
	var bp = {mt:'JSON'};
   	if(sales=='S'){
   		var	bp={mt:'JSON',custSalesId:CUSER_ID};
   	}
    var store = new Ext.data.Store({url:SERVICE_URL+'?A=CUST_X',baseParams:bp,
    reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'CCustomer',id:'custId'},CCustomer),
    remoteSort:true,sortInfo:{field:'custId', direction:'desc'}});
    
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
		custBookerFlag:'1',custShipperFlag:'1',custSalesId:CUSER_ID,
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
        				var custId = w.custId;
        				if(custId!=''){
	        				var custIds='';
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
	this.search = function(){var w=new Fos.CustomerLW(store,sales);w.show();};	
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
    id:sales=='S'?'G_SALES_CUST':'G_CUST',store: store,iconCls:'grid',width:600,height:300,title:sales=='S'?C_SALES_CUST:C_CUST,header:false,closable:true,
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

Fos.WsCustomerWin = function(wu){
	var store = new Ext.data.Store({url:SERVICE_URL+'?A=CUST_X',baseParams:{mt:'JSON'},
    reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'CCustomer',id:'custId'},CCustomer),
    remoteSort:true,sortInfo:{field:'custId', direction:'desc'}});
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
	
	this.save = function(){
		var record = sm.getSelected();
		var xml=RTX(record,'CCustomer',CCustomer);
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',scope:this,params:{A:'WS_CUST_S',wusrId:wu.get('wusrId')},
			success: function(r,o){
                if(wu){wu.beginEdit();wu.set('version',wu.get('version')+1);wu.set('wusrStatus',1);wu.set('custId',record.get('custId'));wu.endEdit();}
				XMG.alert(SYS,M_S);
				this.close();
			},
			failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)
		});
	};
	
	var g = new Ext.grid.GridPanel({ 
    iconCls:'gen',header:false,height:300,width:600,store:store,sm:sm,cm:cm,loadMask: true});	
    
	Fos.WsCustomerWin.superclass.constructor.call(this, {title:C_CUST,modal:true,layout:'fit',width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[{layout:'fit',border:false,
        items: [g]}],
        bbar:PTB(store,C_PS20),
        buttons:[{text:C_OK,scope:this,handler:this.save},
				{text:C_CANCEL,scope:this,handler:function(){this.close();}}]
        }); 
};
Ext.extend(Fos.WsCustomerWin,Ext.Window);

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
	{header:'Skype',dataIndex:'cucoSkype',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_BIRTHDAY,dataIndex: 'cucoBirthday',width:100,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_GENDER,dataIndex:'cucoGender',width:60,renderer:getGEND,editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:GEND_S})},
	{header:C_REMARKS,dataIndex:'cucoRemarks',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})}
	],defaults:{sortable:true,width:120}});
	
	this.cucoId=0;
	this.contStore=GS('CUCO_Q','CCustomerContact',CCustomerContact,'cucoId','DESC','',false);
	
	if(p.get('rowAction')!='N')
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
				//frmCustomer.getForm().updateRecord(p);
				
				var fs = p.fields;
		        fs.each(function(f){
		            var field = frmCustomer.getForm().findField(f.name);
		            if(field){
		                p.set(f.name, field.getValue());
		            }
		        }, this);
		        
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
            {fieldLabel:C_SALES,name:'custSalesId',value:p.get('custSalesId'),store:getSALE_S(),xtype:'combo',displayField:'userName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
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
				items: [{fieldLabel:C_COUN,id:'counCode',value:p.get('counCode'),xtype:'combo',
					store:getCOUN_S(),displayField:'counNameCn',valueField:'counCode',
					typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
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

Fos.CustomerLW = function(store,sales) {
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
    	{columnWidth:.33,layout:'form',border:false,labelWidth:70,items:[	             	
	    	{fieldLabel:C_CSNAME,tabIndex:1,name:'custSNameCn',xtype:'textfield',anchor:'90%'},
        	{fieldLabel:C_INDUSTRY,name:'custIndustry',xtype:'combo',store:INDU_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
        	{fieldLabel:C_CONTACT,name:'custContact',xtype:'textfield',anchor:'90%'}]},
	    {columnWidth:.33,layout:'form',border:false,labelWidth:70,items:[
	    	{fieldLabel:C_ESNAME,tabIndex:2,name:'custSNameEn',xtype:'textfield',anchor:'90%'},
	    	{fieldLabel:C_CPTY,name:'custType',xtype:'combo',store:COPR_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	    	{fieldLabel:C_SALES,name:'custSalesId',xtype:'combo',store:getSALE_S(),displayField:'userLoginName',valueField:'userId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}
	     	]},
		{columnWidth:.34,layout:'form',border:false,labelWidth:70,items:[
			{fieldLabel:C_CUCA,tabIndex:3,name: 'cucaId',xtype:'combo',store:getCUCA_S(),displayField:'cucaName',valueField:'cucaId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	     	{fieldLabel:C_COUN,name:'counCode',xtype:'combo',store:getCOUN_S(),
				displayField:'counNameCn',valueField:'counCode',typeAhead: true,
				mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}
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

    var tab = new Ext.TabPanel({xtype:'tabpanel',
    	plain:true,
    	activeTab:0,
    	height:200,
    	defaults:{bodyStyle:'padding:10px'},
        items:[t1, t2,t3,t5,t4]
    });
    
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
     		var custSalesId = at.find('name','custSalesId')[0].getValue();
     		
     		if(custSNameCn) a[a.length]={key:'custSNameCn',value:custSNameCn,op:op};
     		if(custIndustry) a[a.length]={key:'custIndustry',value:custIndustry,op:op};
     		if(custContact) a[a.length]={key:'custContact',value:custContact,op:op};
     		if(custSNameEn) a[a.length]={key:'custSNameEn',value:custSNameEn,op:op};
     		if(custType) a[a.length]={key:'custType',value:custType,op:op};
     		if(cucaId) a[a.length]={key:'cucaId',value:cucaId,op:op};
     		if(counCode) a[a.length]={key:'counCode',value:counCode,op:op};
     		if(custSalesId) a[a.length]={key:'custSalesId',value:custSalesId,op:op};
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
     	
     	var bp = {mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	
     	if(sales=='S'){
       		var bp = {mt:'JSON',custSalesId:CUSER_ID,xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
       	}
     	
     	store.baseParams=a.length>0?bp:{mt:'JSON'};
     	store.reload({params:{start:0,limit:25},
     		callback:function(r){
     			if(r.length==0) 
     				XMG.alert(SYS,M_NOT_FOUND);
     			}
     	});
     	this.close();
	};	
    Fos.CustomerLW.superclass.constructor.call(this, {title:C_LOOK_CUST,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:tab,
        buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
        }); 
};
Ext.extend(Fos.CustomerLW, Ext.Window);


//自定义控件
Fos.CustomerLookup = Ext.extend(Ext.form.ComboBox, {
	 triggerClass:'x-form-search-trigger',
	custType:'',	//客户类型属性
	constructor:function(config){
		this.custType = config['custType'];
		Fos.CustomerLookup.superclass.constructor.apply(this, arguments);
	},
	initComponent:function(){
		Fos.CustomerLookup.superclass.initComponent.call(this);        
	},
	
	selectCust:function(cust,scope){
		scope.setValue(cust.data[scope.valueField || scope.displayField]);
		scope.fireEvent('select', this, cust, 0);
	},
	
	//弹出窗口按钮
	onTriggerClick:function(event){
		var win = new Fos.CustomerLookWin(this.custType,this.selectCust,this);
		win.show();
	}
});
Ext.reg('customerLookup', Fos.CustomerLookup);

//客户lookup
Fos.CustomerLookWin = function(custType,fn,scope) {
    var store = new Ext.data.Store({url:SERVICE_URL+'?A=CUST_X&mt=xml',baseParams:{},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'CCustomer',idProperty:'custId'},CCustomer),
		remoteSort:true,sortInfo:{field:'custId', direction:'DESC'}});
    store.baseParams = {};
    
    //委托单位
    if(custType=='custBookerFlag')
    	store.baseParams.custBookerFlag=1;
    //承运人
    else if(custType=='custCarrierFlag')
    	store.baseParams.custCarrierFlag=1;
    //报关行
    else if(custType=='custCustomFlag')
    	store.baseParams.custCustomFlag=1;
    //海外代理
    else if(custType=='custOverseaAgencyFlag')
    	store.baseParams.custOverseaAgencyFlag=1;
    //订舱代理
    else if(custType=='custBookingAgencyFlag')
    	store.baseParams.custBookingAgencyFlag=1;
    //报检单位
    else if(custType=='custInspectionFlag')
    	store.baseParams.custInspectionFlag=1;
    //换单代理
    else if(custType=='custDoAgencyFlag')
    	store.baseParams.custDoAgencyFlag=1;
    //场站
    else if(custType=='custCfsFlag')
    	store.baseParams.custCfsFlag=1;
    //仓库
    else if(custType=='custWarehouseFlag')
    	store.baseParams.custWarehouseFlag=1;
    //航空公司
    else if(custType=='custAirFlag')
    	store.baseParams.custAirFlag=1;
    //车队
    else if(custType=='custTrackFlag')
    	store.baseParams.custTrackFlag=1;
    //箱公司
    else if(custType=='custContainerFlag')
    	store.baseParams.custContainerFlag=1;
    //保险公司
    else if(custType=='custInsuranceFlag')
    	store.baseParams.custInsuranceFlag=1;
    //加油站
    else if(custType=='custOilFlag')
    	store.baseParams.custTrackFlag=1;
    //维修工厂
    else if(custType=='custFactoryFlag')
    	store.baseParams.custFactoryFlag=1;
    //快件公司
    else if(custType=='custExpressFlag')
    	store.baseParams.custTrackFlag=1;
      
    store.load({params:{start:0,limit:C_PS20}});
	var sm = new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var cm = new Ext.grid.ColumnModel({columns:[
    	new Ext.grid.RowNumberer(),sm,
		{header:C_CODE,dataIndex:'custCode',width:80},
		{header:C_CNAME,dataIndex:'custNameCn',width:100},
		{header:C_CSNAME,dataIndex:'custSnameCn',width: 80},
		{header:C_ENAME,dataIndex:'custNameEn',width:100},
		{header:C_ESNAME,dataIndex:'custSnameEn',width:80},
		{header:C_CONTACT,dataIndex:'custContact',width:100},
		{header:C_TEL,dataIndex:'custTel',width:100},
		{header:C_FAX,dataIndex:'custFax',width:100}
	    ],defaults:{sortable:true,width:100}});
    
	var rid=GGUID();	
	//添加按钮的代码
    this.addCustomer = function(){
    	var p = new CCustomer({id:rid,custId:rid,custCode:'',custClass:'',custNameCn:'',custSnameCn:'',custNameEn:'',custSnameEn:'',
		custArFlag:1,custApFlag:1,custIndustry:'',cucaId:'',custType:'',counCode:'CN',custProvince:'',custCity:'',
		custAddress:'',custZip:'',custContact:'',custTel:'',custFax:'',custEmail:'',custUrl:'',custBankCny:'',
		custAccountCny:'',custBankUsd:'',custAccountUsd:'',custInvoiceHeader:'',custActive:'1',
		custBookerFlag:'1',custShipperFlag:'1',
		custShipTo:'',custChargeTo:'',custCreditDay:'',
		custCreditDay:getCFG('CUSTOMER_DEFAULT_CRDIT_DAYS'),
		custCreditAmount:getCFG('CUSTOMER_DEFAULT_CRDIT_AMOUNT'),custRemarks:'',
		version:'0',rowAction:'N'});
    	var win = new Fos.CustomerWin(p,store);
		win.show();
    };
    
    //查询按钮的代码
	this.search = function(){
		var w=new Fos.CustomerLW(store);w.show();
	};
	
	//ok选择
	this.sel = function(){
		//当确实选择了一项数据时，执行传入的函数参数，并关闭窗口
		if(sm.getSelected()){
			fn(sm.getSelected(),scope);
			this.close();
		}
		else{ 
			Ext.Msg.alert(SYS,M_NO_DATA_SELECTED);
		}
	};
	
	//构建grid
	var grid = new Ext.grid.GridPanel({store: store,sm:sm,cm:cm,
		listeners:{scope:this,rowdblclick:this.sel},
		bbar:PTB(store,C_PS20),
		tbar:[{text:C_ADD,disabled:NR(M1_V),iconCls:'add',handler:this.addCustomer}, '-', 
			{text:C_SEARCH,iconCls:'search',handler:this.search},'-']
	});
	
	//配置项
    Fos.CustomerLookWin.superclass.constructor.call(this,{title:C_CUST_SEL,width:600,height:400,layout:'fit',modal:true,items:grid,
    	buttons:[{text:C_OK,iconCls:'ok',scope:this,handler:this.sel},
    	         {text:C_CANCEL,iconCls:'cancel',scope:this,handler:this.close}]
    	}
    ); 
};
Ext.extend(Fos.CustomerLookWin,Ext.Window);



//客户地址选择窗口
Fos.CustomerSiteWin=function(siteType,_consign,fn,scope){
	var store = new Ext.data.Store({url:SERVICE_URL,
		baseParams:{mt:'json',A:'CUSI_Q'},
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',
			root:'CCustomerSite',id:'cusiId'},CCustomerSite),
		remoteSort:true,sortInfo:{field:'cusiId', direction:'DESC'}});
	
	//store.load({params:{custId:_consign.get('custId'),cusiType:siteType}});
	
		
	this.selRecord = function(){
		var b =sm.getSelected();
		if(b){
			fn(b,scope);
			this.close();
		}
	};
		    
	this.removeRecord=function(){	
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){           		
               		var xml = SMTX4R(sm,'CCustomerSite','cusiId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CUSI_S'},
					success: function(){
               			store.load({params:{custId:_consign.get('custId'),siteType:siteType}});
               			XMG.alert(SYS,M_S);
               		},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
           }});
		}
       	else XMG.alert(SYS,M_R_P);		
	};
	
	 var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	    var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_NAME,dataIndex:'cusiName',width:200,editor:new Ext.form.TextField()},
		{header:C_CONTACT,dataIndex:'cusiContact',width:100,editor:new Ext.form.TextField()},
		{header:C_TEL,dataIndex:'cusiTel',width:100,editor:new Ext.form.TextField()},
		{header:C_ADDRESS,dataIndex:'cusiAddress',width:200,editor:new Ext.form.TextField()}
		],defaults:{sortable:true,width:100}});	
	
	this.addSite=function(){
		var p = new CCustomerSite({id:GGUID(),
			cusiId:0,
			custId:_consign.get('custId'),
			cusiType:siteType,
			version:'0',
			rowAction:'N'
		});
		grid.stopEditing();
		store.insert(0,p);
		grid.startEditing(0, 1);
	};
	this.save = function(){
		FOS_POST(store,'CCustomerSite',CCustomerSite,'CUSI_S');
		store.load({params:{custId:_consign.get('custId'),cusiType:siteType}});
	};
	
	var grid = new  Ext.grid.EditorGridPanel({header:false,width:600,height:400,
	    clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,loadMask:true}); 
	
	Fos.CustomerSiteWin.superclass.constructor.call(this,{buttonAlign:'right',
		title:'',layout:'fit',
		width:600,height:400,modal:true,
	  	items:[grid],
	  	buttons:[{text:C_ADD,iconCls:'add',handler:this.addSite},	  	         
	  	       {text:C_REMOVE,iconCls:'remove',scope:this,handler:this.removeRecord},
	  	       {text:C_SAVE,disabled:NR(M1_J+G_VESS+F_M),iconCls:'save',handler:this.save},
		  	   {text:C_CLOSE,iconCls:'cancel',scope:this,handler:this.close},
		  	   {text:C_SEL,iconCls:'check',scope:this,handler:this.selRecord}],
		 listeners:{scope:this,
			 'show':function(){
				 store.load({params:{custId:_consign.get('custId'),cusiType:siteType}});
			 }
		 }
	});
};
Ext.extend(Fos.CustomerSiteWin, Ext.Window);

Fos.SiteLookup = Ext.extend(Ext.form.ComboBox, {
	triggerClass:'x-form-search-trigger',
	siteType:'',
	consign:'',
	constructor: function(config){
		this.siteType = config['siteType'];
		this.consign = config['consign'];
		Fos.SiteLookup.superclass.constructor.apply(this, arguments);
	},
	initComponent : function(){
		Fos.SiteLookup.superclass.initComponent.call(this);        
	},
	selectSite:function(site,scope){
		scope.setValue(site.data['cusiName']);
		scope.fireEvent('select', this, site, 0);
	},
	onTriggerClick: function(event){
		var win = new Fos.CustomerSiteWin(this.siteType,this.consign,this.selectSite,this);
		win.show();
	}
});

Ext.reg('siteLookup', Fos.SiteLookup);