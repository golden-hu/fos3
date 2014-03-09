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
			var p = new GVessel({id:GGUID(),vessId:'0',vessCode:'',vessNameEn:'',vessNameCn:'',vessLiner:'',vessDesc:'',counCode:'',vessType:'',active:1,version:'0',rowAction:'N'});
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0, 1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_VESS+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_VESS+F_M),iconCls:'save',handler:function(){grid.stopEditing();FOS_POST(store,'GVessel',GVessel,'VESS_S');}},
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

