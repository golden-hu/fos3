var showG_COUN = function(){    
    var store = GS('COUN_Q','GCountry',GCountry,'counCode','ASC','','','id',true);
    var sm=getCSM();
    var ac=ACTIVE('active');
    var cm=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),
    {header:C_CODE,dataIndex:'counCode',width:80},
	{header:C_ENAME,dataIndex:'counNameEn'},
	{header:C_CNAME,dataIndex:'counNameCn'},ac],defaults:{sortable:true,width:150}});
    var grid = new  Ext.grid.EditorGridPanel({id:'G_COUN',iconCls:'gen',title:C_COUN,header:false,
    plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,loadMask:true,
    bbar:PTB(store,100),
    tbar:[{text:C_SAVE,disabled:NR(M1_J+G_COUN+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GCountry',GCountry,'COUN_S');getCOUN_S().reload();}},'-',
        {text:C_EXPORT,disabled:NR(M1_J+G_COUN+F_E),iconCls:'print',handler:function(){EXP('C','COUN','');}}]
    }); 
    store.load({params:{start:0,limit:100}});
    return grid;
};
var showG_SHLI = function(){
    var store = GS('SHLI_Q','GShippingLine',GShippingLine,'shliId','DESC','','','id',false);
    store.load();
    var bulk=CHKCLM(C_BULK_USABLE,'shliBulkFlag');
    var cont=CHKCLM(C_CONT_USABLE,'shliContFlag');
    var sm=getCSM();
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_CODE,dataIndex: 'shliCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_CNAME,dataIndex: 'shliName',editor:new Ext.form.TextField({allowBlank:true,blankText:'',invalidText:''})},
		{header:C_ENAME,dataIndex: 'shliNameEn',editor:new Ext.form.TextField({allowBlank:true,blankText:'',invalidText:''})},
		bulk,cont],defaults:{sortable:true,width:100}});
    this.add=function(){
    	var p = new GShippingLine({id:GGUID(),shliId:'0',shliCode:'',shliName:'',active:1,version:'0',rowAction:'N'});
    	grid.stopEditing();store.insert(0,p);grid.startEditing(0, 1);
    };
    this.removeShli=function(){FOS_REMOVE(sm,store);};
    this.save=function(){FOS_POST(store,'GShippingLine',GShippingLine,'SHLI_S');getSHLI_S().reload();};    
	this.grid = new  Ext.grid.EditorGridPanel({ 
    id:'G_SHLI',iconCls:'gen',title:C_SHLI,header:false,clicksToEdit:1,closable:true,	
    plugins:[bulk,cont],store: store,sm:sm,cm:cm,loadMask:true,
	tbar:[{text:C_ADD+'(N)',disabled:NR(M1_J+G_SHLI+F_M),iconCls:'add',handler:this.add},'-',
        {text:C_REMOVE+'(R)',disabled:NR(M1_J+G_SHLI+F_R),iconCls:'remove',handler:removeShli}, '-', 
        {text:C_SAVE+'(S)',disabled:NR(M1_J+G_SHLI+F_M),iconCls:'save',handler:this.save}]
    });
	CREATE_KM('G_SHLI',this,true);
    return this.grid;
};
var showG_PLAC = function(){
    var store = GS('PLAC_Q','GPlace',GPlace,'placId','DESC','','','id',false);
    store.load();
    var sm=getCSM();
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	    {header:C_CODE,dataIndex:'placCode',editor:new Ext.form.TextField()},
	    {header:C_NAME,dataIndex:'placName',editor:new Ext.form.TextField()},
		{header:C_ENAME,dataIndex:'placNameEn',editor:new Ext.form.TextField()},
		{header:C_TYPE,dataIndex:'placType',renderer:getPLTY,
			editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:PLTY_S})},
        {header:C_ADDRESS,dataIndex:'placAddress',editor:new Ext.form.TextArea({grow:true,height:'400',width:'400'})},
        {header:C_PACKING_STATION,dataIndex:'placStation',editor:new Ext.form.TextArea({grow:true,height:'400',width:'400'})},
        {header:C_REMARKS,dataIndex:'placDesc',editor:new Ext.form.TextArea({grow:true,height:'400',width:'400'})},
		{header:C_COUN,dataIndex:'counCode',renderer:getCOUN,
			editor:new Ext.form.ComboBox({displayField:'counCode',valueField:'counCode',triggerAction: 'all',
			tpl:counTpl,itemSelector:'div.list-item',listWidth:300,mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOUN_S()})},
		{header:C_STATE,dataIndex:'placProvinceId',renderer:function(v,m,r){return r.get('placProvinceName')},
			editor:new Ext.form.ComboBox({displayField:'placName',valueField:'placId',triggerAction: 'all',
			tpl:counTpl,itemSelector:'div.list-item',listWidth:300,mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPROV_S()})}
		],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({ 
    id:'G_PLAC',iconCls:'gen',title:C_PLAC,header:false,clicksToEdit:1,closable:true,	
    store: store,sm:sm,cm:cm,loadMask:true,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_PLAC+F_M),iconCls:'add',handler:function(){
			var p = new GPlace({id:GGUID(),placId:'0',placCode:'',placName:'',placNameEn:'',counCode:'CN',placType:'3',
				placProvinceId:'',placCityId:'',active:1,version:'0',rowAction:'N'});
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0, 1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_PLAC+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_PLAC+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GPlace',GPlace,'PLAC_S');getHARB_S().reload();}
        }]
    }); 
    return grid;
};
var showG_PORT = function(pt) {
	var a=[];
   	a[1]={key:'portType',value:pt,op:1};
	var store = GS('PORT_X','GPort',GPort,'counCode','ASC','counCode','','','id',true);
	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
    store.load({params:{start:0,limit:100}});
	var ac=ACTIVE();
	var sm=getCSM();
	var c1={header:C_COUN,dataIndex: 'counCode',renderer:getCOUN,
			editor:new Ext.form.ComboBox({displayField:'counCode',valueField:'counCode',triggerAction: 'all',
				tpl:counTpl,itemSelector:'div.list-item',listWidth:300,mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOUN_S()})};
    var c2={header:C_CODE,dataIndex: 'portCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})};
    var c3={header:C_ENAME,dataIndex: 'portNameEn',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})};
    var c4={header:C_CNAME,dataIndex: 'portNameCn',editor:new Ext.form.TextField({allowBlank:true,blankText:'',invalidText:''})};
	var cm=new Ext.grid.ColumnModel({columns:[sm,c1,c2,c3,c4,ac],defaults:{sortable:true,width:100}});
	var ts=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['portCode',C_CODE],['portNameEn',C_ENAME],['portNameCn',C_CNAME],['counCode',C_COUN_CODE]]});
	var st = new Ext.form.ComboBox({width:80,store:ts,value:'portNameEn',displayField:'NAME',valueField:'CODE',typeAhead:true,mode:'local',forceSelection: true,triggerAction:'all',selectOnFocus:true});
	var kw = new Ext.form.TextField();
	this.search=function(){
		var t=st.getValue();var k=kw.getValue();
		if(!t||!k){XMG.alert(SYS,M_NO_QUERY_P);return;};
     	var a=[];
     	a[0]={key:t,value:k,op:7};
     	a[1]={key:'portType',value:pt,op:1};
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:100}});
	};
    var grid = new  Ext.grid.EditorGridPanel({ 
    id:pt=='0'?'G_PORT':'G_AIRP',iconCls:'gen',title:pt=='0'?C_PORT:C_AIRP,header:false,plugins:ac,clicksToEdit:1,closable:true,	
    store: store,sm:sm,cm:cm,loadMask:true,
	view: new Ext.grid.GroupingView(groupViewCfg),
	bbar:PTB(store,100),
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+(pt=='0'?G_PORT:G_AIRP)+F_M),iconCls:'add',handler : function(){
			var p = new GPort({id:GGUID(),portId:'0',portCode:'',portNameEn:'',portNameCn:'',counCode:'CN',active:1,version:'0',rowAction:'N'});
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0, 1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+(pt=='0'?G_PORT:G_AIRP)+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}},'-', 
        {text:C_SAVE,disabled:NR(M1_J+(pt=='0'?G_PORT:G_AIRP)+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GPort',GPort,'PORT_S');getPOL_S().reload();}},'-',
        {text:C_EXPORT,disabled:NR(M1_J+(pt=='0'?G_PORT:G_AIRP)+F_E),iconCls:'print',handler:function(){EXP('C','PORT','');}},'-', 
        st,kw,{text:C_SEARCH,iconCls:'search',handler:this.search},
		'->',new Ext.PagingToolbar({pageSize:100,store:store})]
    });
    return grid;
};
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
			editor:new Ext.form.ComboBox({displayField: 'counNameEn',valueField:'counCode',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOUN_S()})},		
		{header:C_VESS_CALL,dataIndex: 'vessCode',editor:new Ext.form.TextField()},
		ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({ 
    id:'G_VESS',iconCls:'gen',title:C_VESS,header:false,plugins:ac,clicksToEdit:1,closable:true,	
    store:store,sm:sm,cm:cm,loadMask: true,
	bbar:PTB(store,100),
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_VESS+F_M),iconCls:'add',handler : function(){			
			var p = new GVessel({id:GGUID(),vessId:'0',vessCode:'',vessNameEn:'',vessNameCn:'',vessLiner:'',vessDesc:'',counCode:'',vessType:'',active:1,version:'0',rowAction:'N'});
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0, 1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_VESS+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_VESS+F_M),iconCls:'save',handler:function(){grid.stopEditing();FOS_POST(store,'GVessel',GVessel,'VESS_S');}},
        kw,{text:C_SEARCH,iconCls:'search',handler:this.search}
        ,'->',new Ext.PagingToolbar({width:200,pageSize:100,store:store})]
    }); 
    return grid;
};
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
var showG_PACK = function() {    
    var store = GS('PACK_Q','GPackage',GPackage,'packId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'packCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'packName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({id:'G_PACK',
	iconCls:'gen',title:C_PACK,header:false,plugins:ac,clicksToEdit:1,closable:true,
    store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_PACK+F_M),iconCls:'add',handler : function(){            	
			var p = new GPackage({id:GGUID(true),packId:'0',packCode:'',packName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}}, '-', 
        {text:C_REMOVE,disabled:NR(M1_J+G_PACK+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_PACK+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GPackage',GPackage,'PACK_S');getPACK_S().reload();}
        }]
    }); 
    return grid;
};
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
var showG_TRTY = function() {    
    var store = GS('TRTY_Q','GTradeType',GTradeType,'trtyId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'trtyCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'trtyName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:120}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_TRTY',iconCls:'gen',title:C_TRTY,
	header:false,plugins:ac,clicksToEdit:1,closable:true,store: store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_TRTY+F_M),iconCls:'add',handler : function(){            	
			var p = new GTradeType({id:GGUID(),trtyId:'0',trtyCode:'',trtyName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}
        },'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_TRTY+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_TRTY+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GTradeType',GTradeType,'TRTY_S');getTRTY_S().reload();}
        }]
    }); 
    return grid;
};
var showG_USAG = function() {
    var store = GS('USAG_Q','GUsage',GUsage,'usagId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();   
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'usagCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'usagName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_USAG',iconCls:'gen',title:C_USAG,header:false,
	plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{text:C_ADD,disabled:NR(M1_J+G_USAG+F_M),iconCls:'add',handler : function(){
			var p = new GUsage({id:GGUID(),usagId:'0',usagCode:'',usagName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_USAG+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_USAG+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GUsage',GUsage,'USAG_S');getUSAG_S().reload();}
        }]
    }); 
    return grid;
};
var showG_LETY = function() {    
    var store = GS('LETY_Q','GLevyType',GLevyType,'letyId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();   
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'letyCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'letyName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({id:'G_LETY',iconCls:'gen',title:C_LETY,header:false,
	plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_LETY+F_M),iconCls:'add',handler : function(){
			var p=new GLevyType({id:GGUID(),letyId:'0',letyCode:'',letyName:'',letyDesc:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
         {text:C_REMOVE,disabled:NR(M1_J+G_LETY+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}},'-', 
        {text:C_SAVE,disabled:NR(M1_J+G_LETY+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GLevyType',GLevyType,'LETY_S');getLETY_S().reload();}
        }]
    }); 
    return grid;
};
var showG_EXSE = function() {    
	var store = GS('EXSE_Q','GExchangeSettlement',GExchangeSettlement,'exseId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'exseCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'exseName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_EXSE',iconCls:'gen',title:C_EXSE,
	header:false,plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{text:C_ADD,disabled:NR(M1_J+G_EXSE+F_M),iconCls:'add',handler : function(){
			var p = new GExchangeSettlement({id:GGUID(),exseId:'0',exseCode:'',exseName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_EXSE+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_EXSE+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GExchangeSettlement',GExchangeSettlement,'EXSE_S');getEXSE_S().reload();}
        }]
    }); 
    return grid;
};
var showG_TRAT = function() {    
	var store = GS('TRAT_Q','GTransType',GTransType,'tratId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex: 'tratCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex: 'tratName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_TRAT',iconCls:'gen',title:C_TRAT,
	header:false,plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_TRAT+F_M),iconCls:'add',disabled:true,handler : function(){            	
			var p = new GTransType({id:GGUID(),tratId:'0',tratCode:'',tratName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_TRAT+F_R),iconCls:'remove',disabled:true,handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_TRAT+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GTransType',GTransType,'TRAT_S');getTRAT_S().reload();}
        }]
    }); 
    return grid;
};
var showG_ISTY = function() {
	var store = GS('ISTY_Q','GIssueType',GIssueType,'istyId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();	
    var cm=new Ext.grid.ColumnModel({columns:[sm,
    {header:C_CODE,dataIndex: 'istyCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'istyName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({id:'G_ISTY',iconCls:'gen',title:C_ISTY,header:false,
	plugins:ac,clicksToEdit:1,closable:true,store: store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_ISTY+F_M),iconCls:'add',handler : function(){            	
			var p = new GIssueType({id:GGUID(),istyId:'0',istyCode:'',istyName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_ISTY+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_ISTY+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GIssueType',GIssueType,'ISTY_S');getISTY_S().reload();}
        }]
    }); 
    return grid;
};
var showG_SEWA = function() {    
	var store = GS('SEWA_Q','GSettlementWay',GSettlementWay,'sewaId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'sewaCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'sewaName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({id:'G_SEWA',iconCls:'gen',title:C_SEWA,
	plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_SEWA+F_M),iconCls:'add',handler : function(){            	
			var p = new GSettlementWay({id:GGUID(),sewaId:'0',sewaCode:'',sewaName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_SEWA+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_SEWA+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GSettlementWay',GSettlementWay,'SEWA_S');getSEWA_S().reload();}
        }]
    }); 
    return grid;
};
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
var showG_CATY = function() {    
	var store = GS('CATY_Q','GCargoType',GCargoType,'catyId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    var df = new Ext.grid.CheckColumn({header:C_IS_DANAGER,dataIndex:'catyDanagerFlag',sortable:true,width:55});
    var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
    var cm=new Ext.grid.ColumnModel({columns:[sm,
    {header:C_CUSTOM_CODE,dataIndex:'catyCode',editor:new Ext.form.TextField()},
    {header:C_CSNAME,dataIndex:'catyNameCn',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_ENAME,dataIndex:'catyNameEn',editor:new Ext.form.TextField()},
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
var showG_CURR = function() {    
	var store = GS('CURR_Q','GCurrency',GCurrency,'currId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'currCode',editor:new Ext.form.TextField({maxLength:3,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'currName',editor:new Ext.form.TextField({maxLength:16,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_SYMBOL,dataIndex:'currSymbol',editor:new Ext.form.TextField({maxLength:1,allowBlank: true})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_CURR',iconCls:'gen',title:C_CURR,
	plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_CURR+F_M),iconCls:'add',handler : function(){            	
			var p = new GCurrency({id:GGUID(),currId:'0',currCode:'',currName:'',currSymbol:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_CURR+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_CURR+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GCurrency',GCurrency,'CURR_S');getCURR_S().reload();}
        }]
    }); 
    return grid;
};
var showG_CHCL = function() {    
	var store = GS('CHCL_Q','GChargeClass',GChargeClass,'chclId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'chclCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NAME,dataIndex:'chclName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({id:'G_CHCL',iconCls:'gen',title:C_CHCL,header:false,
	plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_CHCL+F_M),iconCls:'add',handler : function(){            	
			var p = new GChargeClass({id:GGUID(),chclId:'0',chclCode:'',chclName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_CHCL+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_CHCL+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GChargeClass',GChargeClass,'CHCL_S');getCHCL_S().reload();}
        }]
    }); 
    return grid;
};
var showG_CHAR = function() {
    var store = GS('CHAR_X','GCharge',GCharge,'charId','DESC','','','id',true);
	store.baseParams={mt:'JSON'};
    store.load({params:{start:0,limit:100}});
    var ac=ACTIVE();	
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'charCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CNAME,dataIndex:'charName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_ENAME,dataIndex:'charNameEn',editor:new Ext.form.TextField()},
	{header:C_CURR_DEFAULT,dataIndex: 'currCode',
			editor:new Ext.form.ComboBox({displayField:'currCode',valueField:'currCode',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()})},		
	{header:C_UNIT_DEFAULT,dataIndex: 'unitId',renderer:getUNIT,
			editor:new Ext.form.ComboBox({displayField:'unitName',valueField:'unitId',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_S()})},		
	{header:C_CHCL,dataIndex:'chclId',renderer:getCHCL,
			editor:new Ext.form.ComboBox({displayField:'chclName',valueField:'chclId',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCHCL_S()})},		
	{header:C_ACCOUNT_AR_CNY,hidden:true,dataIndex:'chclCnyR',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_ACCOUNT_AP_CNY,hidden:true,dataIndex:'chclCnyP',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_ACCOUNT_AR_USD,hidden:true,dataIndex:'chclUsdR',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_ACCOUNT_AP_USD,hidden:true,dataIndex:'chclUsdP',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
	var ts=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['charCode',C_CODE],['charNameEn',C_ENAME],['charName',C_CNAME]]});
	var st = new Ext.form.ComboBox({width:80,store:ts,value:'charCode',displayField:'NAME',valueField:'CODE',typeAhead:true,mode:'local',forceSelection: true,triggerAction:'all',selectOnFocus:true});
	var kw = new Ext.form.TextField();
	this.search=function(){
		var t=st.getValue();var k=kw.getValue();
		if(!t||!k){XMG.alert(SYS,M_NO_QUERY_P);return;};
     	var a=[];
     	a[0]={key:t,value:k,op:7};
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:100}});
	};
    var grid = new  Ext.grid.EditorGridPanel({id:'G_CHAR',iconCls:'gen',title:C_CHAR,header:false,
	plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,bbar:PTB(store,100),
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_CHAR+F_M),iconCls:'add',handler : function(){            	
			var p = new GCharge({id:GGUID(),charId:'0',charCode:'',charName:'',currCode:'CNY',unitId:'',chclId:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_CHAR+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_CHAR+F_M),iconCls:'save',handler:function(){
        	FOS_POST(store,'GCharge',GCharge,'CHAR_S');
        	getCHAR_S().reload();
        }},'-',
        st,kw,{text:C_SEARCH,iconCls:'search',handler:this.search},
        '->',new Ext.PagingToolbar({pageSize:100,store:store})]
    }); 
    return grid;
};
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
var showG_COBA = function() {    
	var store = new Ext.data.Store({url:SERVICE_URL,baseParams:{mt:'xml',A:'COBA_Q'},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'PCompanyBankAccount',idProperty:'cobaId'},PCompanyBankAccount),
		remoteSort:true,sortInfo:{field:'id', direction:'DESC'}});		
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_ACCOUNT_NAME,dataIndex:'cobaName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_BANK,dataIndex:'cobaBank',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_BANK_ACCOUNT,dataIndex:'cobaAccount',editor:new Ext.form.TextField()},
	{header:C_CURR,dataIndex: 'currCode',
			editor:new Ext.form.ComboBox({displayField:'currCode',valueField:'currCode',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()})},
	ac],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({
    id:'G_COBA',iconCls:'gen',title:C_COBA,header:false,
	plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_COBA+F_M),iconCls:'add',handler : function(){            	
			var p = new PCompanyBankAccount({id:GGUID(),cobaId:'0',cobaName:'',cobaBank:'',cobaAccount:'',currCode:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_COBA+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}},'-',
        {text:C_SAVE,disabled:NR(M1_J+G_COBA+F_M),iconCls:'save',handler:function(){FOS_POST(store,'PCompanyBankAccount',PCompanyBankAccount,'COBA_S');getCOBA_S().reload();}
        }]
    }); 
    return grid;
};
Fos.RateTab = function(p) {
    var store = GS('EXRA_Q','SExRate',SExRate,'','DESC','','','id',false);
    store.load({params:{active:1}});    			
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),
    {header:C_CURR_BASE,dataIndex:'exraBaseCurrency'},
	{header:C_CURR_EX,dataIndex: 'exraExCurrency'},
	{header:C_EX_RATE,renderer:rateRender,dataIndex: 'exraRate',width: 150,editor:new Ext.form.TextField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_EFFECT_DATE,dataIndex:"exraStartDate"},
	{header:C_EXPIRY_DATE,dataIndex:"exraEndDate"}
	],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({clicksToEdit:1,store:store,sm:sm,cm:cm,border:false,
    tbar:[{text:C_SAVE,iconCls:'save',handler:function(){FOS_POST(store,'SExRate',SExRate,'EXRA_S');}}]});    
    var store2 = GS('EXRA_Q','SExRate',SExRate,'exraId','DESC','','','id');
    store2.load({params:{active:0}});
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
    var cm2=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),{header:C_CURR_BASE,dataIndex:'exraBaseCurrency'},
	{header:C_CURR_EX,dataIndex: 'exraExCurrency',width:150},
	{header:C_EX_RATE,renderer:rateRender,dataIndex: 'exraRate',width: 150,editor:new Ext.form.TextField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_EFFECT_DATE,dataIndex:"exraStartDate"},
	{header:C_EXPIRY_DATE,dataIndex:"exraEndDate"}],defaults:{sortable:true}});
	var t1=new Ext.form.ComboBox({width:80,displayField:'currCode',valueField:'currCode',triggerAction:'all',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()});
    var t2=new Ext.form.ComboBox({width:80,displayField:'currCode',valueField:'currCode',triggerAction:'all',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()});
    var t3=new Ext.form.DateField();
    var t4=new Ext.form.DateField();
    var grid2 = new  Ext.grid.GridPanel({header:false,store:store2,sm:sm2,cm:cm2,border:false,
    	tbar:[
    	{xtype:'tbtext',text:C_CURR_BASE+'：'},t1,'-',
    	{xtype:'tbtext',text:C_CURR_EX+'：'},t2,'-',
    	{xtype:'tbtext',text:C_EFFECT_DATE+'：'},t3,'-',
    	{xtype:'tbtext',text:C_EXPIRY_DATE+'：'},t4,'-',
    	{text:C_SEARCH,iconCls:'search',handler:this.search}]
    });   
	Fos.RateTab.superclass.constructor.call(this, { 
		id:'G_RATE',title:C_EX_RATE,header:false,deferredRender:false,autoScroll:true,closable:true,border:false,width:800,
		items:[{xtype:'tabpanel',plain:true,activeTab:0,height:500,
            items:[
            {layout:'fit',title:C_EX_ACTIVE,items:grid},
            {layout:'fit',title:C_EX_HISTORY,items:grid2}]}
        ]});
};
Ext.extend(Fos.RateTab, Ext.FormPanel);
var showG_INRA = function() {
    var store = GS('INRA_Q','SInterestRate',SInterestRate,'inraId','DESC','','','id',false);
    store.load({params:{active:1}});    			
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),
    {header:C_CURR,dataIndex:'inraCurrency'},
    {header:C_INRA_TYPE,dataIndex:"inraType",renderer:getIRTY},
	{header:C_INTEREST_RATE,renderer:rateRender,dataIndex: 'inraRate',width: 150,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})}
	],defaults:{sortable:true,width:100}});
    var grid = new  Ext.grid.EditorGridPanel({title:C_INRA_SETTING,clicksToEdit:1,store:store,sm:sm,cm:cm,border:false,closable:true,
    tbar:[{text:C_SAVE,iconCls:'save',handler:function(){FOS_POST(store,'SInterestRate',SInterestRate,'INRA_S');}}]
    });    
    return grid;
};