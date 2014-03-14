//结算方式
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

//币种
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

//费用类别
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

//费用名称
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

//银行账户
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

//汇率
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
    tbar:[{text:C_SAVE,iconCls:'save',handler:function(){
    	grid.stopEditing();
    	var a =store.getModifiedRecords();
    	if(a.length){
    		var x = ATX(a,'SExRate',SExRate);
    		if(x!='')
    		{
    			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'EXRA_S'},
    				success: function(r){
    					store.load({params:{active:1}}); 
    					XMG.alert(SYS,M_S);
    				},
    				failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
    				xmlData:FOSX(x)
    			});
    		}
    	}
    	else XMG.alert(SYS,M_NC);
    	
    	//FOS_POST(store,'SExRate',SExRate,'EXRA_S');
    	}
    }]});    
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

//利率
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


