//贸易方式
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

//用途
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

//征免性质
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

//结汇方式
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

//运输方式
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
		text:C_ADD,disabled:NR(M1_J+G_TRAT+F_M),iconCls:'add',handler : function(){            	
			var p = new GTransType({id:GGUID(),tratId:'0',tratCode:'',tratName:'',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();store.insert(0,p);grid.startEditing(0,1);}},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_TRAT+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_TRAT+F_M),iconCls:'save',handler:function(){FOS_POST(store,'GTransType',GTransType,'TRAT_S');getTRAT_S().reload();}
        }]
    }); 
    return grid;
};

//签单方式
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

//报关类型
var showG_CUTY = function() {    
	var store = GS('CUTY_Q','GCustomsType',GCustomsType,'cutyId','DESC','','','id',false);
	
    store.load();
    
    var ac=ACTIVE();	
    var sm=getCSM();	
    
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CODE,dataIndex:'cutyCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CUTY,dataIndex:'cutyName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	ac],defaults:{sortable:true,width:100}});
    
    var grid = new  Ext.grid.EditorGridPanel({id:'G_CUTY',iconCls:'gen',title:C_CUTY,
	plugins:ac,clicksToEdit:1,closable:true,store:store,sm:sm,cm:cm,
	tbar:[{
		text:C_ADD,disabled:NR(M1_J+G_VEHT+F_M),iconCls:'add',
			handler : function(){            	
				var p = new GCustomsType({id:GGUID(),vehtId:'0',cutyCode:'',cutyName:'',active:1,version:'0',rowAction:'N'});            
	        	grid.stopEditing();
	        	store.insert(0,p);
	        	grid.startEditing(0,1);
	        }
		},'-',
        {text:C_REMOVE,disabled:NR(M1_J+G_VEHT+F_R),iconCls:'remove',
        		handler:function(){
        			FOS_REMOVE(sm,store);
        		}
        }, '-', 
        {text:C_SAVE,disabled:NR(M1_J+G_VEHT+F_M),iconCls:'save',
        	handler:function(){
        		FOS_POST(store,'GCustomsType',GCustomsType,'CUTY_S');
        		getCustomsType_S().reload();
        	}
        }]
    }); 
    return grid;
};

//报检类型
var showG_INTY = function() {    
	var store = GS('INTY_Q','GInspectionType',GInspectionType,'intyId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    
    var sm=getCSM();	
    
    var cm=new Ext.grid.ColumnModel({columns:[sm,
        {header:C_CODE,dataIndex:'intyCode',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
        {header:C_INTY,dataIndex:'intyName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
        ac],
        defaults:{sortable:true,width:100}
    });
    
    var btnAdd = new Ext.Button({text:C_ADD,disabled:NR(M1_J+G_INTY+F_M),iconCls:'add',
		handler : function(){            	
			var p = new GInspectionType({id:GGUID(),
				intyId:'0',
				active:1,
				version:'0',
				rowAction:'N'
			});
			grid.stopEditing();
			store.insert(0,p);
			grid.startEditing(0,1);
		}
	});
    
    var btnRemove = new Ext.Button({text:C_REMOVE,disabled:NR(M1_J+G_INTY+F_R),
    	iconCls:'remove',
		handler:function(){
			FOS_REMOVE(sm,store);}
	});
    
    var btnSave = new Ext.Button({text:C_SAVE,disabled:NR(M1_J+G_INTY+F_M),
    	iconCls:'save',
		handler:function(){
			FOS_POST(store,'GInspectionType',GInspectionType,'INTY_S');
			getINTY_S().reload();
		}
	});
    
    var grid = new  Ext.grid.EditorGridPanel({id:'G_INTY',
    	iconCls:'gen',
    	title:C_INTY,
    	plugins:ac,
    	clicksToEdit:1,
    	closable:true,
    	store:store,
    	sm:sm,
    	cm:cm,
    	tbar:[btnAdd,'-',btnRemove, '-',btnSave]
    }); 
    return grid;
};

//服务项目
var showG_SEIT = function() {    
    var store = GS('SEIT_Q','GServiceItem',GServiceItem,'seitId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    
    var cm=new Ext.grid.ColumnModel({columns:[sm,
        {header:C_CODE,dataIndex:'seitCode',editor:new Ext.form.TextField()},
		{header:C_NAME,dataIndex:'seitName',editor:new Ext.form.TextField()},
		ac],
		defaults:{sortable:true,width:120}
    });
    
    var btnAdd = new Ext.Button({
		text:C_ADD,disabled:NR(M1_J+G_SEIT+F_M),iconCls:'add',
		handler : function(){            	
			var p = new GServiceItem({id:GGUID(),
				seitId:'0',
				active:1,
				version:'0',
				rowAction:'N'
			});            
        	grid.stopEditing();
        	store.insert(0,p);
        	grid.startEditing(0,1);
    	}
    });
    
    var btnRemove = new Ext.Button({text:C_REMOVE,disabled:NR(M1_J+G_SEIT+F_R),
    	iconCls:'remove',
    	handler:function(){
    		FOS_REMOVE(sm,store);
    	}
    });
    
    var btnSave = new Ext.Button( {text:C_SAVE,disabled:NR(M1_J+G_SEIT+F_M),
    	iconCls:'save',
    	handler:function(){
    		var a =store.getModifiedRecords();
    		if(a.length){
    			for(var i =0;i<a.length;i++){
    				if(!a[i].get('seitCode')){
    					HTWarrning(C_CODE+M_REQIRED);	
    					return;
    				}
    				if(!a[i].get('seitName')){
    					HTWarrning(C_NAME+M_REQIRED);	
    					return;
    				}
    			}
    		}
    		FOS_POST(store,'GServiceItem',GServiceItem,'SEIT_S');
    		getSEIT_S().reload();
    	}
    });
    
    var grid = new  Ext.grid.EditorGridPanel({
	    id:'G_SEIT',
	    iconCls:'gen',
	    title:C_SEIT,
		header:false,
		plugins:ac,
		clicksToEdit:1,
		closable:true,
		store: store,
		sm:sm,
		cm:cm,
		tbar:[btnAdd,'-',btnRemove, '-', btnSave]
    }); 
    return grid;
};

//货物属性
var showG_CAPR = function() {    
	var store = GS('CAPR_Q','GCargoProperty',GCargoProperty,'caprId','DESC','','','id',false);
    store.load();
    var ac=ACTIVE();	
    var sm=getCSM();
    
    var cm=new Ext.grid.ColumnModel({columns:[sm,   
        {header:C_NAME,dataIndex:'caprName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
        ac],
        defaults:{sortable:true,width:100}
    });
    
    var btnAdd = new Ext.Button({
		text:C_ADD,disabled:NR(M1_J+G_CAPR+F_M),
		iconCls:'add',
		handler : function(){            	
			var p = new GCargoClass({id:GGUID(),caprId:'0',active:1,version:'0',rowAction:'N'});            
        	grid.stopEditing();
        	store.insert(0,p);
        	grid.startEditing(0,1);
        }
    });
    
    var btnRemove = new Ext.Button({text:C_REMOVE,disabled:NR(M1_J+G_CAPR+F_R),iconCls:'remove',
		handler:function(){
			FOS_REMOVE(sm,store);
		}
	});
    
    var btnSave = new Ext.Button({text:C_SAVE,disabled:NR(M1_J+G_CAPR+F_M),
    	iconCls:'save',
    	handler:function(){
    		var a =store.getModifiedRecords();
    		if(a.length){
    			for(var i =0;i<a.length;i++){
    				if(!a[i].get('caprName')){
    					HTWarrning(C_NAME+M_REQIRED);
    					return;
    				}
    			}
    		}
    		
    		FOS_POST(store,'GCargoProperty',GCargoProperty,'CACL_S');
    		getCAPR_S().reload();
    	}
    });
    
    var grid = new  Ext.grid.EditorGridPanel({id:'G_CAPR',
    	iconCls:'gen',
    	title:C_CAPR,
    	plugins:ac,
    	clicksToEdit:1,
    	closable:true,
    	store:store,
    	sm:sm,
    	cm:cm,
    	tbar:[btnAdd,'-',btnRemove, '-', btnSave]
    }); 
    return grid;
};
