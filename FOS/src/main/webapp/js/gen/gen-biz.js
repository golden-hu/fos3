//航次
Fos.VoyagePanel = function() {
	var store = new Ext.data.GroupingStore({url: SERVICE_URL+'?A=VOYA_X',
            reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'GVoyage'}, GVoyage),
            baseParams:{mt:'JSON',xml:''},remoteSort:true,
            sortInfo:{field:'voyaId', direction:'DESC'}});            
	this.pa=[];
	
	store.load({params:{start:0, limit:C_PS}});
	
	this.reset=function(){
        store.baseParams={mt:'JSON',xml:''};
        store.reload({params:{start:0,limit:C_PS}});
    };
    
	var sailed=CHKCLM(C_SAILED,'voyaSailedFlag',50);
	
	var shipMap=CHKCLM(C_SHIP_MAP,'voyaShipMapFlag',50);
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});	
	
	var cm=new Ext.grid.ColumnModel({columns:[sm,sailed,shipMap,
         {header:C_DISPATCHER,dataIndex: 'voyaDispatcherName',width:50,editor:new Ext.form.ComboBox({xtype:'combo',store:getUSER_S(),
 			displayField:'userLoginName',valueField:'userName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
 			listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('voyaDispatcherId',r.get('userId'));}}
         	})},
         {header:C_OPERATOR,dataIndex: 'voyaOperatorName',width:60,editor:new Ext.form.ComboBox({xtype:'combo',store:getOP_S(),
            displayField:'userLoginName',valueField:'userName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
            listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('voyaOperatorId',r.get('userId'));}}
            })},
		{header:C_VESS,dataIndex:'vessName',width:120,
			editor:new Ext.form.ComboBox({displayField:'vessNameEn',valueField:'vessNameEn',triggerAction:'all',
            mode:'local',tpl:vessTpl,itemSelector:'div.list-item',listWidth:400,selectOnFocus:true,listClass:'x-combo-list-small',store:getVES(),enableKeyEvents:true,
            listeners:{scope:this,select:function(c,r,i){
            	var b=sm.getSelected();if(b){b.set('vessId',r.get('vessId'));
            	b.set('vessNameCn',r.get('vessNameCn'));}},
            keydown:{fn:function(f,e){LV(f,e,2);},buffer:500}}})},
        {header:C_VESS_NAME_CN,dataIndex:'vessNameCn',width:80},
		{header:C_VOYA,dataIndex:'voyaName',width:80,editor:new Ext.form.TextField()},
		{header:C_CARRIER,dataIndex: 'voyaCarrierName',width:100,
			editor:new Ext.form.ComboBox({displayField:'custCode',valueField:'custNameCn',triggerAction: 'all',
            mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCS(),enableKeyEvents:true,
            listeners:{scope:this,select:function(c,r,i){
            	var b =sm.getSelected();b.set('voyaCarrier',r.get('custId'));},
            	keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag',1);},buffer:500}}})},
		{header:C_ETA_V,dataIndex:'voyaEta',width:100,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_ETA_T,dataIndex: 'voyaEtaT',width:100,editor:new Ext.form.TextField()},
		{header:C_BERTHING_DATE,dataIndex:'voyaBerthingDate',width:100,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_BERTHING_DATE_T,dataIndex: 'voyaBerthingDateT',width:100,editor:new Ext.form.TextField()},
		{header:C_ETD_V,dataIndex:'voyaEtd',width:100,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_ETD_T,dataIndex: 'voyaEtdT',width:100,editor:new Ext.form.TextField()},
		{header:C_SAIL_DATE_V,dataIndex:'voyaSailDate',width:100,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_SAIL_DATE_T,dataIndex: 'voyaSailDateT',width:100,editor:new Ext.form.TextField()},
		{header:C_SHLI,dataIndex:'shliName',width:100,
			editor:new Ext.form.ComboBox({displayField:'shliName',valueField:'shliName',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getSHLI_S(),
            listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('shliId',r.get('shliId'));}}
            })},
		{header:C_HARBOUR,dataIndex: 'voyaHarbourName',width:100,editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),
			displayField:'placName',valueField:'placName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('voyaHarbourId',r.get('placId'));}}
        	})},
        {header:C_LOAD_DATE_F,dataIndex: 'voyaLoadDateF',width:100,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
        {header:C_LOAD_DATE_T,dataIndex: 'voyaLoadDateT',width:100,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_VOYA_PORTS,dataIndex: 'voyaPorts',width:200,editor:new Ext.form.TextField()},		
		],
		defaults:{sortable:true}
	});

	
	this.expVoya=function(){
		EXP('C','VOYA_LIST',store.baseParams.xml?'&mt=JSON&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON');
	};
	
	this.search = function(){
		var w=new Fos.VoyaLW(store,this.pa);
		w.show();
	};
	
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length>0){
			for(var i=0;i<a.length;i++){
				if(a[i].get('vessId')==''){
					XMG.alert(SYS,M_VESS_REQIRED);return;
				}
				else if(a[i].get('voyaName')==''){
					XMG.alert(SYS,M_VOYA_REQIRED);
					return;
				}
			}
			FOS_POST(store,'GVoyage',GVoyage,'VOYA_S');
		}
		else XMG.alert(SYS,M_NC);
	};	
	
	this.addVoyage = function(){
		var p = new GVoyage({id:GGUID(),
			voyaId:'0',
			voyaClass:'A',
			voyaShipMapFlag:'0',
			voyaSailedFlag:'0',
			voyaActive:1,
			version:'0'});
        	this.stopEditing();
        	store.insert(0,p);
        	p.set('rowAction','N');
        	sm.selectFirstRow();
        	this.startEditing(0,3);
	};
	
	var kw = new Ext.form.TextField({
		listeners:{scope:this,
			specialkey:function(c,e){
				if(e.getKey()==Ext.EventObject.ENTER) 
					this.fastSearch();
				}
		}
	});
    
	this.fastSearch=function(){
        var vessName=kw.getValue();
        if(!vessName){XMG.alert(SYS,M_INPUT_VESS_NAME,function(b){kw.focus();});return;};
        var a=[];
        a[a.length]={key:'vessName',value:vessName,op:LI};
        store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
        store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
    };
    
	var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',handler:this.fastSearch};    
    var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
	
    Fos.CustomerGrid.superclass.constructor.call(this, { 		
	    id:'G_VOYA',
	    iconCls:'gen',
	    title:C_SHIP_DATE,
	    header:false,
	    plugins:[sailed,shipMap],
	    clicksToEdit:1,closable:true,	
	    store: store,
	    sm:sm,cm:cm,
	    loadMask: true,
		bbar:PTB(store,C_PS),
		tbar:[{text:C_ADD+'(N)',disabled:NR(M1_B+M2_V+F_M),iconCls:'add',scope:this,handler:this.addVoyage},'-',
	        {text:C_REMOVE+'(D)',disabled:NR(M1_B+M2_V+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
	        {text:C_SAVE+'(S)',disabled:NR(M1_B+M2_V+F_M),iconCls:'save',scope:this,handler:this.save},'-',        
	        {text:C_SEARCH+'(F)',iconCls:'search',scope:this,handler:this.search},'-',
	        kw,b8,'-',b9]
    }); 
};
Ext.extend(Fos.VoyagePanel,Ext.grid.EditorGridPanel);

//船名
var showG_VESS = function(){
	var store = GS('VESS_X','GVessel',GVessel,'vessId','DESC','','','id',true);
	store.load({params:{start:0, limit:100}});
	var kw = new Ext.form.TextField();
	this.search=function(){
		var k=kw.getValue();
		if(!k){XMG.alert(SYS,M_NO_QUERY_P);return;};
     	var a=[];
     	a[0]={key:'vessNameEn',value:k,op:7};
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:100}});
	};
	var ac=ACTIVE();
	var sm=getCSM();
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_ENAME,dataIndex: 'vessNameEn',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_CNAME,dataIndex: 'vessNameCn',editor:new Ext.form.TextField()},
		{header:C_VESS_TYPE,dataIndex: 'vessType',renderer:getVETY,
			editor:new Ext.form.ComboBox({displayField: 'NAME',valueField:'CODE',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:VETY_S})},
        {header:C_CARRIER,dataIndex: 'vessLiner',editor:new Ext.form.TextField()},
        {header:C_REMARKS,dataIndex: 'vessDesc',editor:new Ext.form.TextField()},
		{header:C_COUN,dataIndex: 'counCode',renderer:getCOUN,
			editor:new Ext.form.ComboBox({displayField: 'counNameEn',
				valueField:'counCode',triggerAction: 'all',
            mode:'remote',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOUN_S()})},		
		{header:C_VESS_CALL,dataIndex: 'vessCode',editor:new Ext.form.TextField()},
		ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({ 
    id:'G_VESS',iconCls:'gen',title:C_VESS,header:false,plugins:ac,clicksToEdit:1,closable:true,	
    store:store,sm:sm,cm:cm,loadMask: true,
	bbar:PTB(store,100),
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_VESS+F_M),iconCls:'add',handler : function(){			
			var p = new GVessel({id:GGUID(),vessId:'0',active:1,version:'0',rowAction:'N'});
        	grid.stopEditing();
        	store.insert(0,p);
        	grid.startEditing(0, 1);
        }},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_VESS+F_R),iconCls:'remove',handler:function(){
        	FOS_REMOVE(sm,store);
        }}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_VESS+F_M),iconCls:'save',handler:function(){
        	grid.stopEditing();
        	FOS_POST(store,'GVessel',GVessel,'VESS_S');
        }},
        kw,{text:C_SEARCH,iconCls:'search',handler:this.search}
        ,'->',new Ext.PagingToolbar({width:200,pageSize:100,store:store})]
    }); 
    return grid;
};

//计量单位
var showG_UNIT = function(){
    var store = GS('UNIT_Q','GUnit',GUnit,'unitId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();
    var sm=getCSM();
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'unitCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'unitName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_UNIT',iconCls:'gen',title:C_UNIT,header:false,plugins:ac,clicksToEdit:1,closable:true,
    store: store,sm:sm,cm:cm,
	tbar:[{text:C_ADD,disabled:NR(M1_J+G_UNIT+F_M),iconCls:'add',handler : function(){
				var p = new GUnit({id:GGUID(),unitId:'0',unitCode:'',unitName:'',active:1,version:'0',rowAction:'N'}); 
				grid.stopEditing();store.insert(0,p);grid.startEditing(0, 1);}},'-',
		{text:C_REMOVE,disabled:NR(M1_J+G_UNIT+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_UNIT+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GUnit',GUnit,'UNIT_S');getUNIT_S().reload();}
        }]
    });
    return grid;
};

//箱类
var showG_COCL = function() {
    var store = GS('COCL_Q','GContainerClass',GContainerClass,'coclId','DESC','','','id',false);
    store.load();
	var ac=ACTIVE();
	var sm=getCSM();
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'coclCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'coclName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_COCL',iconCls:'gen',title:C_COCL,header:false,plugins:ac,clicksToEdit:1,closable:true,
    store: store,sm:sm,cm:cm,
	tbar:[{text:C_ADD,disabled:NR(M1_J+G_COCL+F_M),iconCls:'add',handler : function(){
				var p = new GContainerClass({id:GGUID(),coclId:'0',coclCode:'',coclName:'',active:1,version:'0',rowAction:'N'}); 
				grid.stopEditing();store.insert(0,p);grid.startEditing(0, 1);}},'-',
		{text:C_REMOVE,disabled:NR(M1_J+G_COCL+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}},'-', 
        {text:C_SAVE,disabled:NR(M1_J+G_COCL+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GContainerClass',GContainerClass,'COCL_S');getCOCL_S().reload();}
        }]
    }); 
    return grid;
};

//箱型
var showG_COTY = function(){
    var store = GS('COTY_Q','GContainerType',GContainerType,'cotyId','DESC','coclCode','','id',false);
    store.load();
	var ac=ACTIVE();
	var sm=getCSM();
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_CODE,dataIndex: 'cotyCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_COCL,dataIndex: 'coclCode',renderer:getCOCL,
			editor:new Ext.form.ComboBox({displayField:'coclName',valueField:'coclCode',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOCL_S()})},
		{header:C_SIZE,dataIndex: 'cotyLength',
			editor:new Ext.form.ComboBox({displayField: 'CODE',valueField: 'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:COLE_S})},		
		{header:C_TEU,dataIndex: 'cotyTeu',editor:new Ext.form.NumberField()},
		{header:C_ISO_CODE,dataIndex: 'cotyIsoCode',editor:new Ext.form.TextField()},
		{header:C_UN_CODE,dataIndex: 'cotyUnCode',editor:new Ext.form.TextField()},
		{header:C_TARE_W,dataIndex: 'cotyTareWeight',editor:new Ext.form.NumberField()},
		{header:C_MAX_W,dataIndex: 'cotyMaxWeight',editor:new Ext.form.NumberField()},
		{header:C_MAX_C,dataIndex: 'cotyMaxWeight',editor:new Ext.form.NumberField()},
		ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({ 
    id:'G_COTY',iconCls:'gen',title:C_COTY,header:false,plugins:ac,clicksToEdit:1,closable:true,	
    store: store,sm:sm,cm:cm,view: new Ext.grid.GroupingView(groupViewCfg),
	tbar:[{text:C_ADD,disabled:NR(M1_J+G_COTY+F_M),iconCls:'add',handler : function(){
			var p = new GContainerType({id:GGUID(),cotyId:'0',cotyCode:'',coclCode:'',cotyLength:'',cotyTeu:'',active:1,version:'0',rowAction:'N'});
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0, 1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_COTY+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}},'-', 
        {text:C_SAVE,disabled:NR(M1_J+G_COTY+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GContainerType',GContainerType,'COTY_S');getCOTY_S().reload();}
        }]});
    return grid;
};

//包装种类
var showG_PACK = function() {    
    var store = GS('PACK_Q','GPackage',GPackage,'packId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'packCode',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'packName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CNAME,dataIndex:'packNameCn',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:150}});
    var grid = new  Ext.grid.EditorGridPanel({id:'G_PACK',
	iconCls:'gen',title:C_PACK,header:false,plugins:ac,clicksToEdit:1,closable:true,
    store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_PACK+F_M),iconCls:'add',handler : function(){            	
			var p = new GPackage({id:GGUID(true),packId:'0',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}}, '-', 
        {text:C_REMOVE,disabled:NR(M1_J+G_PACK+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_PACK+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GPackage',GPackage,'PACK_S');getPACK_S().reload();}
        }]
    }); 
    return grid;
};

//贸易条款
var showG_TRTE = function() {    
    var store = GS('TRTE_Q','GTradeTerm',GTradeTerm,'trteId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'trteCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'trteName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},	
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_TRTE',iconCls:'gen',title:C_TRTE,
	header:false,plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_TRTE+F_M),iconCls:'add',handler:function(){
			var p=new GTradeTerm({id:GGUID(),trteId:'0',trteCode:'',trteName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_TRTE+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_TRTE+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GTradeTerm',GTradeTerm,'TRTE_S');getTRTE_S().reload();}
        }]
    }); 
    return grid;
};

//运输条款
var showG_TTER = function() {    
    var store = GS('TTER_Q','GTransTerm',GTransTerm,'tranId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();
    var bulk=CHKCLM(C_BULK_USABLE,'tranBulkFlag');
    var cont=CHKCLM(C_CONT_USABLE,'tranContFlag');
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'tranCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'tranName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac,bulk,cont],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({id:'G_TTER',
	iconCls:'gen',title:C_TTER,header:false,plugins:[ac,bulk,cont],clicksToEdit:1,   
	closable:true,store:store,sm:sm,cm:cm,
	tbar:[{text:C_ADD,disabled:NR(M1_J+G_TTER+F_M),iconCls:'add',handler : function(){            	
		var p = new GTransTerm({id:GGUID(),tranId:'0',tranCode:'',tranName:'',active:1,version:'0',rowAction:'N'});            
        grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_TTER+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_TTER+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GTransTerm',GTransTerm,'TTER_S');getTRAN_S().reload();}
        }]
    });
    return grid;
};

//运费条款
var showG_PATE = function() {    
    var store = GS('PATE_Q','GPaymentTerm',GPaymentTerm,'pateId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'pateCode',sortable:true,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'pateName',sortable:true,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_PATE',iconCls:'gen',title:C_PATE,header:false,
	plugins:ac,clicksToEdit:1,closable:true,store: store,sm:sm,cm:cm,	
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_PATE+F_M),iconCls:'add',handler : function(){            	
			var p=new GPaymentTerm({id:GGUID(),pateId:'0',pateCode:'',pateName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_PATE+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_PATE+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GPaymentTerm',GPaymentTerm,'PATE_S');getPATE_S().reload();}
        }]
    }); 
    return grid;
};

//车辆类型
var showG_VEHT = function() {    
	var store = GS('VEHT_Q','GVehicleType',GVehicleType,'vehtId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();	
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'vehtName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({id:'G_VEHT',iconCls:'gen',title:C_VEHT,
	plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_VEHT+F_M),iconCls:'add',handler : function(){            	
			var p = new GVehicleType({id:GGUID(),vehtId:'0',vehtName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_VEHT+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_VEHT+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GVehicleType',GVehicleType,'VEHT_S');getVEHT_S().reload();}
        }]
    }); 
    return grid;
};

//货物种类
var showG_CACL = function() {    
	var store = GS('CACL_Q','GCargoClass',GCargoClass,'caclId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
    {header:C_CUSTOM_CODE,dataIndex:'caclCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
    {header:C_CSNAME,dataIndex:'caclNameCn',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_ENAME,dataIndex:'caclNameEn',editor:new Ext.form.TextField()},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({id:'G_CACL',iconCls:'gen',title:C_CACL,
	plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_CACL+F_M),iconCls:'add',handler : function(){            	
			var p = new GCargoClass({id:GGUID(),caclId:'0',caclCode:'',caclNameCn:'',caclNameEn:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_CACL+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_CACL+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GCargoClass',GCargoClass,'CACL_S');getCACL_S().reload();}
        }]
    }); 
    return grid;
};

//品名
var showG_CATY = function() {    
	var store = GS('CATY_Q','GCargoType',GCargoType,'catyId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    var df = new Ext.grid.CheckColumn({header:C_IS_DANAGER,dataIndex:'catyDanagerFlag',sortable:true,width:100});
    var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
    var cm=new Ext.grid.ColumnModel({columns:[sm,
    {header:C_CSNAME,dataIndex:'catyNameCn',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_ENAME,dataIndex:'catyNameEn',editor:new Ext.form.TextField()},
	{header:C_MANU_NO,dataIndex:'catyManuNo',editor:new Ext.form.TextField()},
	{header:C_SPEC,dataIndex:'catySpec',editor:new Ext.form.TextField()},
	{header:C_CACL,dataIndex:'catyCargoType',editor:new Ext.form.ComboBox({
		store:getCACL_S(),displayField:'caclNameCn',valueField:'caclNameCn',typeAhead:true,
  		mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'50%',
  		listeners:{
  			scope:this,
  			select:function(c,r,v){
  				var record = sm.getSelected();
  				record.set('catyCode',r.get('caclCode'));
  			}
  		}
	})},
	{header:C_CUSTOM_CODE,dataIndex:'catyCode',editor:new Ext.form.TextField()},
	df,
	{header:C_DANAGER_NO,dataIndex:'catyDanagerNo',editor:new Ext.form.TextField()},
	{header:C_DANAGER_P,dataIndex:'catyDanagerProperty',editor:new Ext.form.TextField()},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_CATY',iconCls:'gen',title:C_CATY,
	plugins:[ac,df],clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_CATY+F_M),iconCls:'add',handler : function(){            	
			var p = new GCargoType({id:GGUID(),catyId:'0',catyCode:'',catyNameCn:'',catyNameEn:'',catyDanagerFlag:'0',catyDanagerNo:'',catyDanagerProperty:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_CATY+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_CATY+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GCargoType',GCargoType,'CATY_S');}
        }]
    }); 
    return grid;
};

//单证类别
var showG_DOTY = function() {    
	var store = GS('DOTY_Q','GDocumentType',GDocumentType,'dotyId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
	var cm=new Ext.grid.ColumnModel({columns:[sm,
            {header:C_CODE,dataIndex:'dotyCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
            {header:C_DOC_NAME,dataIndex:'dotyName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
            {header:C_DOTY,dataIndex: 'dotyClass',renderer:getDOCL,
    			editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction: 'all',
                mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DOCL_S})},
			ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_DOTY',iconCls:'gen',title:C_DOTY,header:false,plugins:ac,clicksToEdit:1,closable:true,	
    store: store,sm:sm,cm:cm,loadMask:true,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_DOTY+F_M),iconCls:'add',handler : function(){
			var rid=GGUID();
			var p = new GDocumentType({id:rid,dotyId:rid,dotyCode:'',dotyName:'',dotyClass:'',dotyBackFlag:'0',
				dotyReturnFlag:'0',active:1,version:'0',rowAction:'N'});
        	store.insert(0,p);grid.startEditing(0, 1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_DOTY+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}},'-', 
        {text:C_SAVE,disabled:NR(M1_J+G_DOTY+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GDocumentType',GDocumentType,'DOTY_S');getDOTY_S().reload();}
        }]
    }); 
    return grid;
};

