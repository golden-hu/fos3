//国家
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
    tbar:[{text:C_SAVE,disabled:NR(M1_J+G_COUN+F_M),iconCls:'save',handler:function(){
    	FOS_POST(store,'GCountry',GCountry,'COUN_S');
    	//getCOUN_S().reload();
    	}},'-',
        {text:C_EXPORT,disabled:NR(M1_J+G_COUN+F_E),iconCls:'print',handler:function(){
        	EXP('C','COUN','');
        }}]
    }); 
    store.load({params:{start:0,limit:100}});
    return grid;
};

//航线
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

//地点
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
			tpl:counTpl,itemSelector:'div.list-item',listWidth:300,mode:'remote',selectOnFocus:true,
			listClass:'x-combo-list-small',store:getCOUN_S()})},
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

//港口
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
				tpl:counTpl,itemSelector:'div.list-item',listWidth:300,mode:'local',selectOnFocus:true,
				listClass:'x-combo-list-small',store:getCOUN_S()})};
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
    id:pt=='0'?'G_PORT':'G_AIRP',iconCls:'gen',title:pt=='0'?C_MARINEP:C_AIRP,header:false,plugins:[ac],clicksToEdit:1,closable:true,	
    store: store,sm:sm,cm:cm,loadMask:true,
	view: new Ext.grid.GroupingView(groupViewCfg),
	bbar:PTB(store,100),
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+(pt=='0'?G_PORT:G_AIRP)+F_M),iconCls:'add',handler : function(){
			var p = new GPort({id:GGUID(),portId:'0',portType:pt,active:1,version:'0',rowAction:'N'});
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0, 1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+(pt=='0'?G_PORT:G_AIRP)+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}},'-', 
        {text:C_SAVE,disabled:NR(M1_J+(pt=='0'?G_PORT:G_AIRP)+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GPort',GPort,'PORT_S');getPOL_S().reload();}},'-',
        {text:C_EXPORT,disabled:NR(M1_J+(pt=='0'?G_PORT:G_AIRP)+F_E),iconCls:'print',handler:function(){EXP('C','PORT','');}},'-', 
        st,kw,{text:C_SEARCH,iconCls:'search',handler:this.search},
		'->',new Ext.PagingToolbar({pageSize:100,store:store})]
    });
    return grid;
};

//港口lookup
Fos.PortLookup = Ext.extend(Ext.form.ComboBox, {
	triggerClass:'x-form-search-trigger',
	portType:'',
	constructor: function(config){
		this.portType = config['portType'],
		Fos.PortLookup.superclass.constructor.apply(this, arguments);
	},
	initComponent : function(){
		Fos.PortLookup.superclass.initComponent.call(this);        
	},
	selectPort:function(port,scope){
		scope.setValue(port.data[scope.valueField || scope.displayField]);
		scope.fireEvent('select', this, port, 0);
	},
	onTriggerClick: function(event){
		var win = new Fos.PortLookWin(this.portType,this.selectPort,this);
		win.show();
	}
});

Ext.reg('portLookup', Fos.PortLookup);

Fos.PortLookWin = function(portType,fn,scope) {	
	var store = GS('TRAIN_X', 'GTrainStation', GTrainStation, 'counCode', 'ASC', 'counCode', '', '', 'id', true);
    store.load({params:{start:0,limit:100}});   
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});	
	var c1 = {
			header: C_COUN,
			dataIndex: 'counCode',
			renderer: getCOUN,
			editor: new Ext.form.ComboBox({
				displayField: 'counCode',
				valueField: 'counCode',
				triggerAction: 'all',
				tpl: counTpl,
				itemSelector: 'div.list-item',
				listWidth: 300,
				mode: 'remote',
				selectOnFocus: true,
				listClass: 'x-combo-list-small',
				store: getCOUN_S()
			})
		};
		var c2 = {
			header: C_CODE,
			dataIndex: 'trainCode',
			editor: new Ext.form.TextField({
				allowBlank: false,
				blankText: '',
				invalidText: ''
			})
		};
		var c3 = {
			header: C_ENAME,
			dataIndex: 'trainNameEn',
			editor: new Ext.form.TextField({
				allowBlank: false,
				blankText: '',
				invalidText: ''
			})
		};
		var c4 = {
			header: C_CNAME,
			dataIndex: 'trainNameCn',
			editor: new Ext.form.TextField({
				allowBlank: true,
				blankText: '',
				invalidText: ''
			})
		};
		var cm = new Ext.grid.ColumnModel({
			columns: [sm, c1, c2, c3, c4],
			defaults: {
				sortable: true,
				width: 100
			}
		});
	
		var ts = new Ext.data.SimpleStore({
			id: 0,
			fields: ['CODE', 'NAME'],
			data: [['trainCode', C_CODE], ['trainNameEn', C_ENAME], ['trainNameCn', C_CNAME], ['counCode', C_COUN_CODE]]
		});
		var st = new Ext.form.ComboBox({
			width: 80,
			store: ts,
			value: 'trainNameEn',
			displayField: 'NAME',
			valueField: 'CODE',
			typeAhead: true,
			mode: 'local',
			forceSelection: true,
			triggerAction: 'all',
			selectOnFocus: true
		});
	var kw = new Ext.form.TextField();
	this.search = function() {
		var t = st.getValue();
		var k = kw.getValue();
		if (!t || !k) {
			XMG.alert(SYS, M_NO_QUERY_P);
			return;
		};
		var a = [];
		a[0] = {
			key: t,
			value: k,
			op: 7
		};
		store.baseParams = {
			mt: 'JSON',
			xml: Ext.util.JSON.encode(FOSJ(QTJ(a)))
		};
		store.reload({
			params: {
				start: 0,
				limit: 100
			}
		});
	};
			
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
	
	this.addPort=function(){
		var p = new GPort({id:GGUID(),trainId:'0',
			portCode:'',portNameEn:'',portNameCn:'',counCode:'CN',portType:1,
			active:1,version:'0',rowAction:'N'});
    	grid.stopEditing();
    	store.insert(0,p);
    	grid.startEditing(0, 1);
	};
	this.delPort=function(){
		HTUtil.REMOVE_SM(sm,store);
	};
	this.savePort = function(){
		FOS_POST(store,'GTrainStation',GTrainStation,'TRAIN_S');getTRAIN_S().reload();
	};
	
	var grid = new Ext.grid.EditorGridPanel({store:store,sm:sm,cm:cm,clicksToEdit:1,
		bbar:PTB(store,100),
		tbar:[st,kw,{text:C_SEARCH,iconCls:'search',scope:this,handler:this.search},'-',
		{text:C_ADD,iconCls:'add',scope:this,handler:this.addPort},'-',
        {text:C_REMOVE,iconCls:'remove',scope:this,handler:this.delPort},'-', 
        {text:C_SAVE,iconCls:'save',scope:this,handler:this.savePort}]
	});
    Fos.PortLookWin.superclass.constructor.call(this,{title:C_STATION,width:600,height:400,
    	layout:'fit',modal:true,items:grid,
    	buttons:[{text:C_OK,iconCls:'ok',scope:this,handler:this.sel},
    	         {text:C_CANCEL,iconCls:'cancel',scope:this,handler:this.close}]}); 
};
Ext.extend(Fos.PortLookWin,Ext.Window);
