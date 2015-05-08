//单票界面单证列表
Fos.ConsDocGrid = function(p) {	
	this.store = new Ext.data.Store({url:SERVICE_URL+'?A=FDOC_Q',
		baseParams:{mt:'XML'},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'FDoc',id:'fdocId'},FDoc),
		remoteSort:true,sortInfo:{field:'fdocId', direction:'DESC'}
	});
	
	if(p.get('rowAction')=='N'){
		var rid=GGUID();
		var t = new FDoc({id:rid,
			fdocId:rid,
			consId:p.get('consId'),
			consNo:p.get('consNo'),
			consBizClass:p.get('consBizClass'),
			consShipType:p.get('consShipType'),
			dotyId:getCFG('FDOC_CC'),
			dotyName:getCFGD('FDOC_CC'),
			fdocNo:'NIL',
			fdocOriginalNum:'1',
			fdocCopyNum:0,
			fdocStatus:1,
			fdocRecvDate:new Date(),
			fdocSendDate:new Date(),
			fdocReturnFlag:0,
			fdocBackFlag:0,
			fdocReleasableFlag:0,
			version:0
		});
		this.store.insert(0,t);
		t.set('rowAction','N');
	}
	else 
		this.store.load({params:{consId:p.get('consId')}});
	
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var customsFlag = CHKCLM(C_CUSTOMS_FLAG,'fdocCustomsFlag',100);
	var releasableFlag=CHKCLM(C_DOC_RELEASABLE_FLAG,'fdocReleasableFlag');	
	var returnFlag =CHKCLM(C_DOC_RETURN,'fdocReturnFlag');
	returnFlag.on('click',function(c,e,r){
		r.set('fdocReturnDate',r.get('fdocReturnFlag')==1?(new Date()):'');},this);
	var backFlag=CHKCLM(C_DOC_BACK,'fdocBackFlag');
	backFlag.on('click',function(c,e,r){
		r.set('fdocBackDate',r.get('fdocBackFlag')==1?(new Date()):'');},this);
	var cm=new Ext.grid.ColumnModel({columns:[sm,customsFlag,releasableFlag,returnFlag,backFlag,
	{header:C_DOC_NAME,dataIndex:'dotyName',width:150,renderer:getDOTY,
			editor:new Ext.form.ComboBox({displayField:'dotyCode',valueField:'dotyName',triggerAction:'all',
				tpl:dotyTpl,itemSelector:'div.list-item',listWidth:300,mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getDOTY_S(),
            listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('dotyId',r.get('dotyId'));}}})},
    {header:C_BIZ_COMPANY,dataIndex:'fdocCompany',width:100,
        editor:new Fos.CustomerLookup({
        	custType:'custBookerFlag',
	    	store:getCS(),
	    	enableKeyEvents:true,
	    	displayField:'custNameCn',
	    	valueField:'custNameCn',
	    	typeAhead:true,
	   		mode:'local',
	   		tpl:custTpl,
	   		itemSelector:'div.list-item',
	   		listWidth:C_LW,
	   		triggerAction:'all',
	   		selectOnFocus:true,anchor:'99%',	   		
	     	listeners:{scope:this,
 				select:function(c,r,i){
 					sm.getSelected().set('fdocCompany',r.get('custNameCn'));
 				},
 				keydown:{
 					fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF
 				}
     		}
        })
    },
    {header:C_DOC_NO,dataIndex:'fdocNo',width:80,editor:new Ext.form.TextField()},
	{header:C_DOC_ORI_NUM,dataIndex:'fdocOriginalNum',width:80,editor:new Ext.form.NumberField()},
	{header:C_DOC_COPY_NUM,dataIndex:'fdocCopyNum',width:80,editor:new Ext.form.NumberField()},
	{header:C_DOC_RECEIVE_DATE,dataIndex:'fdocRecvDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_CUSTOM_AGENCY,dataIndex:'fdocSendSigner',width:80,editor:new Ext.form.ComboBox({displayField:'custCode',valueField:'custNameCn',triggerAction:'all',
            mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCS(),enableKeyEvents:true,
            listeners:{scope:this,select:function(c,r,i){
           		var b =this.getSelectionModel().getSelected();
           		b.set('fdocSendTo',r.get('custId'));},
           		keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:500}}})},
	{header:C_DOC_SEND_DATE,dataIndex:'fdocSendDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_DOC_SEND_TYPE,dataIndex:'fdocSendType',width:80,renderer:getITTY,
			editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:ITTY_S})},	
	{header:C_DOC_RETURN_DATE,dataIndex:'fdocReturnDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_RETURN_WAY,dataIndex:'fdocReturnWay',renderer:getITTY,width:80,
		editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:ITTY_S})},
	{header:C_EXPRESS_NO,dataIndex:'fdocExpressNo',width:80,editor:new Ext.form.TextField({})},
	{header:C_DOC_BACK_DATE,dataIndex:'fdocBackDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_DOC_BACK_TYPE,dataIndex:'fdocBackType',width:80,renderer:getITTY,
			editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:ITTY_S})},
    {header:C_DOC_BACK_SIGNER,dataIndex:'fdocBackSigner',width:80,editor:new Ext.form.TextField()},
    {header:C_REMARKS,dataIndex:'fdocRemark',width:80,editor:new Ext.form.TextField()}
	],defaults:{sortable:true,width:100}});
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_DOC;
	
	this.add=function(){
		var rid=GGUID();
		var t = new FDoc({id:rid,fdocId:rid,consId:p.get('consId'),consNo:p.get('consNo'),consBizClass:p.get('consBizClass'),consShipType:p.get('consShipType'),
		dotyId:'',dotyClass:'',fdocNo:'',fdocOriginalNum:'1',fdocCopyNum:0,fdocStatus:1,fdocRecvDate:new Date(),fdocSendDate:new Date(),fdocSendType:'',fdocSendSigner:'',
		fdocReturnDate:'',fdocBackDate:'',fdocBackType:'',fdocBackSigner:'',
		fdocCustomsFlag:0,fdocReturnFlag:0,fdocBackFlag:0,fdocReleasableFlag:0,version:0});
		this.store.insert(0,t);t.set('rowAction','N');sm.selectFirstRow();this.startEditing(0,1);
	};
	
	Fos.ConsDocGrid.superclass.constructor.call(this,{
		id:'T_DOC_'+p.get('id'),
		title:C_DOC,
		header:false,
		deferredRender:false,
		clicksToEdit:1,
		plugins:[customsFlag,releasableFlag,returnFlag,backFlag],
		border:false,
		height:200,
		autoScroll:true,
		sm:sm,
		cm:cm,
		store:this.store,
		sortInfo:{field:'fdocId',direction:'DESC'},
		tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.add},'-',
			{text:C_REMOVE+'(D)',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:function(){FOS_REMOVE(sm,this.store);}},'-',
			{text:C_SAVE+'(S)',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:function(){FOS_POST(this.store,'FDoc',FDoc,'FDOC_S');}}
		]
	});
};
Ext.extend(Fos.ConsDocGrid,Ext.grid.EditorGridPanel);

Fos.DocWin = function(p) {
	var panel = new Fos.ConsDocGrid(p);
	Fos.DocWin.superclass.constructor.call(this, {title:p.get('consNo')+C_DOC,modal:true,width:900,
        height:565,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:panel});
};
Ext.extend(Fos.DocWin,Ext.Window);

//单证跟踪
Fos.DocGrid = function(s) {
	var title=C_DOC_ALL;	
	var store = new Ext.data.GroupingStore({url:SERVICE_URL+'?A=FDOC_X',
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'FDoc',idProperty:'fdocId'},FDoc),
		remoteSort:true,sortInfo:{field:'fdocId', direction:'DESC'}
	});		
	
	var a=[];
	if(s=='B'){
		title=C_DOC_NOT_RETURN;
		a[a.length]=new QParam({key:'fdocReturnFlag',value:'0',op:EQ});
	}
	else if(s=='C'){
		title=C_DOC_RETURN_NOT_BACK;
		a[a.length]=new QParam({key:'fdocReturnFlag',value:'1',op:EQ});
		a[a.length]=new QParam({key:'fdocBackFlag',value:'0',op:EQ});
	}
	else if(s=='D'){
		title=C_DOC_BACK;
		a[a.length]=new QParam({key:'fdocBackFlag',value:'1',op:EQ});
	}
	else if(s=='E'){
		title=C_CUSTOMS_FLAG;
		a[a.length]=new QParam({key:'fdocCustomsFlag',value:'1',op:EQ});
	}
	
	var bp=a.length?{mt:'xml',xml:FOSX(QTX(a))}:{mt:'xml'};
	
	store.baseParams=bp;
    store.load({params:{start:0,limit:C_PS}});
    
	this.reset=function(){
		store.baseParams=bp;
		store.reload({params:{start:0,limit:C_PS}});
	};
	this.search = function(){
		var w=new Fos.FDocLookupWin(store,s);
		w.show();
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
    var customsFlag = CHKCLM(C_CUSTOMS_FLAG,'fdocCustomsFlag',100);
	var releasableFlag=CHKCLM(C_DOC_RELEASABLE_FLAG,'fdocReleasableFlag');	
	var returnFlag =CHKCLM(C_DOC_RETURN,'fdocReturnFlag');
	returnFlag.on('click',function(c,e,r){r.set('fdocReturnDate',r.get('fdocReturnFlag')==1?(new Date()):'');},this);
	var backFlag=CHKCLM(C_DOC_BACK,'fdocBackFlag');
	backFlag.on('click',function(c,e,r){r.set('fdocBackDate',r.get('fdocBackFlag')==1?(new Date()):'');},this);
	
	var cm=new Ext.grid.ColumnModel({columns:[sm,customsFlag,releasableFlag,returnFlag,backFlag,
	{header:C_DOC_NAME,dataIndex:'dotyName',width:100,renderer:getDOTY,
			editor:new Ext.form.ComboBox({displayField:'dotyCode',valueField:'dotyName',triggerAction:'all',
				tpl:dotyTpl,itemSelector:'div.list-item',listWidth:300,mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getDOTY_S(),
            listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('dotyId',r.get('dotyId'));}}})},
    {header:C_BIZ_COMPANY,dataIndex:'fdocCompany',width:100,editor:new Ext.form.TextField()},
    {header:C_CONS_NO,dataIndex:'consNo',width:120,renderer:consRender},
	{header:C_DOC_NO,dataIndex:'fdocNo',width:80,editor:new Ext.form.TextField()},	
	{header:C_DOC_ORI_NUM,dataIndex:'fdocOriginalNum',width:80,editor:new Ext.form.NumberField()},
	{header:C_DOC_COPY_NUM,dataIndex:'fdocCopyNum',width:80,editor:new Ext.form.NumberField()},	
	{header:C_DOC_RECEIVE_DATE,dataIndex:'fdocRecvDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_CUSTOM_AGENCY,dataIndex:'fdocSendSigner',width:120,editor:new Ext.form.ComboBox({displayField:'custCode',valueField:'custNameCn',triggerAction:'all',
            mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCS(),enableKeyEvents:true,
            listeners:{scope:this,select:function(c,r,i){
           		sm.getSelected().set('fdocSendTo',r.get('custId'));},
           		keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:500}}})},
	{header:C_DOC_SEND_DATE,dataIndex:'fdocSendDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_DOC_SEND_TYPE,dataIndex:'fdocSendType',width:80,renderer:getITTY,
			editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:ITTY_S})},
	{header:C_DOC_RETURN_DATE,dataIndex:'fdocReturnDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_RETURN_WAY,dataIndex:'fdocReturnWay',renderer:getITTY,width:80,
		editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:ITTY_S})},
	{header:C_EXPRESS_NO,dataIndex:'fdocExpressNo',width:80,editor:new Ext.form.TextField()},
	{header:C_DOC_BACK_TYPE,dataIndex:'fdocBackType',width:80,renderer:getITTY,
			editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:ITTY_S})},
    {header:C_DOC_BACK_SIGNER,dataIndex:'fdocBackSigner',width:80,editor:new Ext.form.TextField()},  
    {header:C_REMARKS,dataIndex:'fdocRemark',width:80,editor:new Ext.form.TextField()},
    {header:C_VESS,dataIndex:'vessName',width:120},
    {header:C_VOYA,dataIndex:'voyaName',width:80},
    {header:C_BL_NO,dataIndex:'consMblNo',width:120},
    {header:C_SAIL_DATE,dataIndex:'consSailDate',width:80},
    {header:C_BOOKER,dataIndex:'custName',width:200},
    {header:C_CARGO_OWNER,dataIndex:'consCargoOwnerName',width:200}
	],defaults:{sortable:true,width:100}});
	var vc={forceFit:false,groupTextTpl: '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "Items" : "Item"]})'};
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
	
	this.fastSearch=function(){
        var consNo=kw.getValue();
        if(!consNo){
        	XMG.alert(SYS,M_INPUT_BIZ_NO,function(b){kw.focus();});
        	return;
        };
        var a=[];
        
        if(s=='B'){
    		a[a.length]=new QParam({key:'fdocReturnFlag',value:'0',op:EQ});
    	}
    	else if(s=='C'){
    		a[a.length]=new QParam({key:'fdocReturnFlag',value:'1',op:EQ});
    		a[a.length]=new QParam({key:'fdocBackFlag',value:'0',op:EQ});
    	}
    	else if(s=='D'){
    		a[a.length]=new QParam({key:'fdocBackFlag',value:'1',op:EQ});
    	}
    	else if(s=='E'){
			a[a.length]=new QParam({key:'fdocCustomsFlag',value:'1',op:EQ});
		}
        a[a.length]=new QParam({key:'consNo',value:consNo,op:LI});        
        store.baseParams={mt:'xml',xml:FOSX(QTX(a))};
        store.reload({params:{start:0,limit:C_PS},
        	callback:function(r){
        		if(r.length==0) 
        			XMG.alert(SYS,M_NOT_FOUND);
        	}});
    };
    
	var b8={text:C_FAST_SEARCH,iconCls:'search',handler:this.fastSearch};    
    var b9={text:C_RESET,iconCls:'refresh',handler:this.reset};
	var btnExport = new Ext.Button({
    	text:C_EXPORT,
		iconCls:'print',
		disabled:NR(M1_D+F_E),
		scope:this,
		menu: {items: [
           {text:C_DOC_LIST,scope:this,handler:function(){
		    	  EXP('C','FDOC_LIST',store.baseParams.xml?'&mt=xml&xml='+store.baseParams.xml:'&mt=xml');
    		}}, 
           {text:C_DOC_SIGN,scope:this,handler:function(){
		    	  EXP('C','FDOC_SIGN',store.baseParams.xml?'&mt=xml&xml='+store.baseParams.xml:'&mt=xml');
    		}}]
		}
    });
	Fos.DocGrid.superclass.constructor.call(this,{
		clicksToEdit:1,
		id:'G_DOC_'+s,
		title:C_DOC_MGT+'-'+title,
		header:false,
		deferredRender:false,
		closable:true,
		plugins:[customsFlag,releasableFlag,returnFlag,backFlag],
		border:false,
		height:200,
		autoScroll:true,
		sm:sm,
		cm:cm,
		store:store,
		sortInfo:{field:'fdocId',direction:'DESC'},
		view:new Ext.grid.GroupingView(vc),
		tbar:[{text:C_SAVE,disabled:NR(M1_D+F_M),
			iconCls:'save',disabled:NR(M1_D+F_M),
					handler:function(){
						FOS_POST(store,'FDoc',FDoc,'FDOC_S');
					}},'-',
		      {text:C_SEARCH,disabled:NR(M1_D+F_M),iconCls:'search',disabled:NR(M1_D+F_V),handler:this.search},'-',
		      kw,b8,'-',b9,'-',btnExport,'-'],
		bbar:PTB(store,C_PS)});
};
Ext.extend(Fos.DocGrid, Ext.grid.EditorGridPanel);

Fos.FDocLookupWin = function(store,s){
	var t1={id:'T_CONS_LOOK_1',title:C_LOOK_BY_NO,layout:'form',labelWidth:70,labelAlign:"right",
		items:[{fieldLabel:C_CONS_NO,name:'consNo',xtype:'textarea',anchor:'90%'},
    		{boxLabel:C_LOOK_SMART,name:'consNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}]};
	var t5={id:'T_CONS_LOOK_5',title:C_DOC_BY_NO,layout:'form',labelWidth:70,labelAlign:"right",
		items:[{fieldLabel:C_DOC_NO,name:'fdocNo',xtype:'textarea',anchor:'90%'},
    		{boxLabel:C_LOOK_SMART,name:'fdocNoM',xtype:'checkbox',labelSeparator:'',anchor:'50%'}]};	
	var t2={id:'T_CONS_LOOK_2',title:C_LOOK_BY_MBL,layout:'form',labelWidth:70,labelAlign:"right",
		items: [{fieldLabel:C_MBL_NO,name:'consMblNo',xtype:'textarea',anchor:'90%'},
			{boxLabel:C_LOOK_SMART,name:'consMblNoM',xtype:'checkbox',labelSeparator:'',anchor:'50%'}]};
	var t3={id:'T_CONS_LOOK_3',title:C_LOOK_BY_HBL,layout:'form',labelWidth:70,labelAlign:"right",
		items: [{fieldLabel:C_HBL_NO,name:'consHblNo',xtype:'textarea',anchor:'90%'},
			{boxLabel:C_LOOK_SMART,name:'consHblNoM',xtype:'checkbox',labelSeparator:'',anchor:'50%'}]};	
    var t4={id:'T_CONS_LOOK_4',title:C_LOOK_COMPLEX,layout:'column',
    	items:[{columnWidth:.33,layout:'form',border:false,labelWidth:70,labelAlign:"right",
	    	items:[{fieldLabel:C_DOC,tabIndex:4,name:'dotyId',store:getDOTY_S(),xtype:'combo',displayField:'dotyName',valueField:'dotyId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	    	{fieldLabel:C_BOOKER,name:'custId',store:getCS(),
	        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
	        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
	              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},
					{fieldLabel:C_BIZ_TYPE,tabIndex:7,name:'consBizType',store:BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	        	{fieldLabel:HL(C_VESS),tabIndex:5,name:'vessId',store:getVES(),
          		xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,enableKeyEvents:true,
          		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              		listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
	        	{fieldLabel:C_POL,name:'consPol',store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},	             		
	        	{fieldLabel:C_OPERATOR,name:'consOperatorId',store:getOP_S(),xtype:'combo',displayField:'userLgoinName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	        	{fieldLabel:C_TRADE_CONTRACT_NO,name:'consTradeContractNo',xtype:'textfield',anchor:'95%'},
	        	{fieldLabel:C_SHIP_TYPE,name:'consShipType',store:SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	         	{fieldLabel:'S/O No.',name:'consSoNo',xtype:'textfield',anchor:'95%'}]},
	      	{columnWidth:.33,layout:'form',border:false,labelWidth:70,labelAlign:"right",
	   		items:[{fieldLabel:C_STATUS,tabIndex:4,name:'fdocStatus',store:DOST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	   		{fieldLabel:C_CONS_DATE,name:'consDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_SAIL_DATE,name:'consEtd',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_VOYA,tabIndex:35,name:'voyaName',xtype:'textfield',anchor:'95%'},
	        	{fieldLabel:C_COUNTRY_D,name:'consTradeCountry',store:getCOUN_S(),
	        		xtype:'combo',displayField:'counNameEn',valueField:'counCode',
	        		typeAhead:true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
                	listeners:{scope:this,select:function(c,r,i){
                		this.find('name','consPod')[0].store.reload({params:{counCode:r.get('counCode'),portActive:1}});
                	}}},	             	
	        	{fieldLabel:C_SALES,name:'consSalesRepId',store:getSALE_S(),xtype:'combo',displayField:'userName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	        	{fieldLabel:C_CONTRACT_NO,name:'consContractNo',xtype:'textfield',anchor:'95%'},
	        	{fieldLabel:C_CARRIER,name:'consCarrier',store:getCS(),enableKeyEvents:true,
	        		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
	        		listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
	           {fieldLabel:C_CUSTOM_AGENCY,name:'fdocSendTo',store:getCS(),enableKeyEvents:true,
	        	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
	        	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}}]},
			{columnWidth:.34,layout:'form',border:false,labelWidth:70,labelAlign:"right",
			items:[{fieldLabel:C_DOC_NO,name:'fdocNo',xtype:'textfield',anchor:'95%'},
			{fieldLabel:C_TO,name:'consDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_TO,name:'consEtd2',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_POD,name:'consPod',store:new Ext.data.Store({url: SERVICE_URL+'?A='+'PORT_Q',reader:new Ext.data.XmlReader({record:'GPort'},GPort),sortInfo:{field:'portNameEn',direction:'ASC'}}),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
	        	{fieldLabel:C_CARGO_SOURCE,name:'consSource',store:SOUR_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
	         	{fieldLabel:C_REF_NO,name:'consRefNo',xtype:'textfield',anchor:'95%'},	        	
	        	{fieldLabel:C_BOOK_AGENCY,name:'consBookingAgency',store:getCS(),
              		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',
              		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',enableKeyEvents:true,
              		listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookingAgencyFlag');},buffer:BF}}},
	       		{fieldLabel:C_CONTAINER,name:'consContainerCompany',store:getCS(),enableKeyEvents:true,
	       		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
	       		listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custContainerFlag');},buffer:BF}
             	}}]}
		]};	
	
	var t6={id:'T_CONS_LOOK_6',title:C_LOOK_BY_DOC_STATUS,layout:'column',
    	items:[
	      	{columnWidth:.5,layout:'form',border:false,labelWidth:70,labelAlign:"right",
	   		items:[
            	//{fieldLabel:C_DOC_NAME,tabIndex:4,name:'dotyId',store:getDOTY_S(),xtype:'combo',displayField:'dotyName',valueField:'dotyId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	   			{fieldLabel:C_DOC_RETURN,name:'fdocReturnFlag',xtype:'checkbox',value:0,anchor:'95%'},
            	{fieldLabel:C_DOC_RECEIVE_DATE,name:'recvDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_DOC_SEND_DATE,name:'sendDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_DOC_RETURN_DATE,name:'returnDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_DOC_BACK_DATE,name:'backDate',xtype:'datefield',format:DATEF,anchor:'95%'}]},
			{columnWidth:.5,layout:'form',border:false,labelWidth:70,labelAlign:"right",
			items:[
			    //{fieldLabel:C_STATUS,tabIndex:4,name:'fdocStatus',store:DOST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
				{fieldLabel:C_DOC_BACK,name:'fdocBackFlag',xtype:'checkbox',value:0,anchor:'95%'},
			    {fieldLabel:C_TO,name:'recvDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_TO,name:'sendDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_TO,name:'returnDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_TO,name:'backDate2',xtype:'datefield',format:DATEF,anchor:'95%'}]}
		]};	
	
	this.reload=function(){
     	var at = t.getActiveTab();
     	var a=[];
     	if(s=='B') 
     		a[a.length]=new QParam({key:'fdocReturnFlag',value:'0',op:EQ});
		else if(s=='C'){
			a[a.length]=new QParam({key:'fdocReturnFlag',value:'1',op:EQ});
			a[a.length]=new QParam({key:'fdocBackFlag',value:'0',op:EQ});
		}
		else if(s=='D'){
			a[a.length]=new QParam({key:'fdocBackFlag',value:'1',op:EQ});
		}     	
     	if(at.getId()=='T_CONS_LOOK_1'){
     		var consNo=at.find('name','consNo')[0].getValue();
     		var consNoM=at.find('name','consNoM')[0].getValue();
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
    		else a[a.length]=new QParam({key:'consNo',value:consNo,op:consNoM?LI:EQ});
     	}     	
     	else if(at.getId()=='T_CONS_LOOK_2'){
     		var consMblNo=at.find('name','consMblNo')[0].getValue();
     		var consMblNoM=at.find('name','consMblNoM')[0].getValue();
     		a[a.length]=new QParam({key:'consMblNo',value:consMblNo,op:consMblNoM?LI:EQ});
     	}
     	else if(at.getId()=='T_CONS_LOOK_3'){
     		var consHblNo=at.find('name','consHblNo')[0].getValue();
     		var consHblNoM=at.find('name','consHblNoM')[0].getValue();
     		a[a.length]=new QParam({key:'consHblNo',value:consHblNo,op:consHblNoM?LI:EQ});
     	}
     	else if(at.getId()=='T_CONS_LOOK_4'){
     		var dotyId=at.find('name','dotyId')[0].getValue();
     		if(dotyId) a[a.length]=new QParam({key:'dotyId',value:dotyId,op:EQ});
     		var fdocStatus=at.find('name','fdocStatus')[0].getValue();
     		if(fdocStatus) a[a.length]=new QParam({key:'fdocStatus',value:fdocStatus,op:EQ});
     		var fdocNo=at.find('name','fdocNo')[0].getValue();
     		if(fdocNo) a[a.length]=new QParam({key:'fdocNo',value:fdocNo,op:EQ});
     		var vessId=at.find('name','vessId')[0].getValue();
     		var voyaName=at.find('name','voyaName')[0].getValue();
     		if(vessId) a[a.length]=new QParam({key:'vessId',value:vessId,op:EQ});
     		if(voyaName) a[a.length]=new QParam({key:'voyaName',value:voyaName,op:EQ});
     		var custId=at.find('name','custId')[0].getValue();
     		if(custId) a[a.length]=new QParam({key:'custId',value:custId,op:EQ});
     		var consBizType=at.find('name','consBizType')[0].getValue();        		
     		if(consBizType) a[a.length]=new QParam({key:'consBizType',value:consBizType,op:EQ});
     		var consPol=at.find('name','consPol')[0].getValue();        		
     		if(consPol) a[a.length]=new QParam({key:'consPol',value:consPol,op:EQ});
     		var consSalesRepId=at.find('name','consSalesRepId')[0].getValue();        		
     		if(consSalesRepId) a[a.length]=new QParam({key:'consSalesRepId',value:consSalesRepId,op:EQ});
     		var consTradeContractNo=at.find('name','consTradeContractNo')[0].getValue();        		
     		if(consTradeContractNo) a[a.length]=new QParam({key:'consTradeContractNo',value:consTradeContractNo,op:EQ});
     		var consShipType=at.find('name','consShipType')[0].getValue();        		
     		if(consShipType) a[a.length]=new QParam({key:'consShipType',value:consShipType,op:EQ});     		
     		var consDate=at.find('name','consDate')[0].getValue();
     		var consDate2=at.find('name','consDate2')[0].getValue();
     		if(consDate && consDate2){
     			a[a.length]=new QParam({key:'consDate',value:consDate.format('Y-m-d H:i:s'),op:GE});
     			a[a.length]=new QParam({key:'consDate',value:consDate2.format('Y-m-d H:i:s'),op:LE});
     		}
     		else if(consDate) a[a.length]=new QParam({key:'consDate',value:consDate,op:EQ});
     		var consEtd=at.find('name','consEtd')[0].getValue();
     		var consEtd2=at.find('name','consEtd2')[0].getValue();
     		if(consEtd && consEtd2){
     			a[a.length]=new QParam({key:'consEtd',value:consEtd.format('Y-m-d H:i:s'),op:GE});
     			a[a.length]=new QParam({key:'consEtd',value:consEtd2.format('Y-m-d H:i:s'),op:LE});
     		}
     		else if(consEtd) a[a.length]=new QParam({key:'consEtd',value:consEtd,op:EQ});
     		var consTradeCountry=at.find('name','consTradeCountry')[0].getValue();        		
     		if(consTradeCountry) a[a.length]=new QParam({key:'consTradeCountry',value:consTradeCountry,op:EQ});
     		var consOperatorId=at.find('name','consOperatorId')[0].getValue();        		
     		if(consOperatorId) a[a.length]=new QParam({key:'consOperatorId',value:consOperatorId,op:EQ});
     		var consContractNo=at.find('name','consContractNo')[0].getValue();        		
     		if(consContractNo) a[a.length]=new QParam({key:'consContractNo',value:consContractNo,op:EQ});
     		var consPod=at.find('name','consPod')[0].getValue();        		
     		if(consPod) a[a.length]=new QParam({key:'consPod',value:consPod,op:EQ});
     		var consSource=at.find('name','consSource')[0].getValue();        		
     		if(consSource) a[a.length]=new QParam({key:'consSource',value:consSource,op:EQ});
     		var consRefNo=at.find('name','consRefNo')[0].getValue();        		
     		if(consRefNo) a[a.length]=new QParam({key:'consRefNo',value:consRefNo,op:EQ});
     		var consSoNo=at.find('name','consSoNo')[0].getValue();        		
     		if(consSoNo) a[a.length]=new QParam({key:'consSoNo',value:consSoNo,op:EQ});
     		var consCarrier=at.find('name','consCarrier')[0].getValue();        		
     		if(consCarrier) a[a.length]=new QParam({key:'consCarrier',value:consCarrier,op:EQ});
     		var fdocSendTo=at.find('name','fdocSendTo')[0].getValue();        		
     		if(fdocSendTo) a[a.length]=new QParam({key:'fdocSendTo',value:fdocSendTo,op:EQ});
     		var consBookingAgency=at.find('name','consBookingAgency')[0].getValue();        		
     		if(consBookingAgency) a[a.length]=new QParam({key:'consBookingAgency',value:consBookingAgency,op:EQ});
     		var consContainerCompany=at.find('name','consContainerCompany')[0].getValue();        		
     		if(consContainerCompany) a[a.length]=new QParam({key:'consContainerCompany',value:consContainerCompany,op:EQ});
     	}
     	else if(at.getId()=='T_CONS_LOOK_5'){
     		var fdocNo=at.find('name','fdocNo')[0].getValue();
     		var fdocNoM=at.find('name','fdocNoM')[0].getValue();
     		a[a.length]=new QParam({key:'fdocNo',value:fdocNo,op:fdocNoM?LI:EQ});
     	}
     	else if(at.getId()=='T_CONS_LOOK_6'){     		
     		var returnFlag = at.find('name','fdocReturnFlag')[0];
     		if(returnFlag && returnFlag.getValue()) 
     			a[a.length]=new QParam({key:'fdocReturnFlag',value:1,op:EQ});
     		var backFlag = at.find('name','fdocBackFlag')[0];
     		if(backFlag && backFlag.getValue()) 
     			a[a.length]=new QParam({key:'fdocBackFlag',value:1,op:EQ});
     		
     		var recvDate=at.find('name','recvDate')[0].getValue();
     		var recvDate2=at.find('name','recvDate2')[0].getValue();
     		if(recvDate && recvDate2){
     			a[a.length]=new QParam({key:'fdocRecvDate',value:recvDate.format('Y-m-d H:i:s'),op:GE});
     			a[a.length]=new QParam({key:'fdocRecvDate',value:recvDate2.format('Y-m-d H:i:s'),op:LE});
     		}
     		else if(recvDate) a[a.length]=new QParam({key:'fdocRecvDate',value:recvDate,op:EQ});
     		var sendDate=at.find('name','sendDate')[0].getValue();
     		var sendDate2=at.find('name','sendDate2')[0].getValue();
     		if(sendDate && sendDate2){
     			a[a.length]=new QParam({key:'fdocSendDate',value:sendDate.format('Y-m-d H:i:s'),op:GE});
     			a[a.length]=new QParam({key:'fdocSendDate',value:sendDate2.format('Y-m-d H:i:s'),op:LE});
     		}
     		else if(sendDate) a[a.length]=new QParam({key:'fdocSendDate',value:sendDate,op:EQ});
     		var returnDate=at.find('name','returnDate')[0].getValue();
     		var returnDate2=at.find('name','returnDate2')[0].getValue();
     		if(returnDate && returnDate2){
     			a[a.length]=new QParam({key:'fdocReturnDate',value:returnDate.format('Y-m-d H:i:s'),op:GE});
     			a[a.length]=new QParam({key:'fdocReturnDate',value:returnDate2.format('Y-m-d H:i:s'),op:LE});
     		}
     		else if(returnDate) a[a.length]=new QParam({key:'fdocReturnDate',value:returnDate,op:EQ});
     		var backDate=at.find('name','backDate')[0].getValue();
     		var backDate2=at.find('name','backDate2')[0].getValue();
     		if(backDate && backDate2){
     			a[a.length]=new QParam({key:'fdocBackDate',value:backDate.format('Y-m-d H:i:s'),op:LE});
     			a[a.length]=new QParam({key:'fdocBackDate',value:backDate2.format('Y-m-d H:i:s'),op:LE});
     		}
     		else if(backDate) a[a.length]=new QParam({key:'fdocBackDate',value:backDate,op:EQ});
     	}
     	store.baseParams={mt:'xml',xml:FOSX(QTX(a))};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};
	var t = new Ext.TabPanel({id:'T_DOC_LOOK',xtype:'tabpanel',plain:true,activeTab:0,height:340,
		defaults:{bodyStyle:'padding:10px'},items:[t1,t5,t6,t2,t3,t4]});
    Fos.FDocLookupWin.superclass.constructor.call(this, {title:C_DOC_QUERY,iconCls:'search',modal:true,width:600,height:340,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:t,
		buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.FDocLookupWin, Ext.Window);
