//任务
Fos.TaskWin = function(p) {	
	var store = GS('TASK_Q','FTask',FTask,'tatyOrder','ASC','','','',true);
	store.load({params:{consId:p.get('consMasterId')},scope:this});
	var ad=new Ext.form.DateField({value:p.get('consEta'),format:DATEF,width:120,disabled:false});
	var sd=new Ext.form.DateField({value:p.get('consSailDate'),format:DATEF,width:120,disabled:false});
	var saveT=function(r){
		r.set('rowAction','M');
		var x=RTX(r,'FTask',FTask);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TASK_S'},
			success: function(res){
				var e = XTR(res.responseXML,'FTask',FTask);
				var fields = FTask.prototype.fields;
				for(var k = 0;k < fields.length;k++){
					var f = fields.items[k];
					var fn=f.name;
					r.set(fn,e.get(fn));
				}},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(x)
		});
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var c1={header:C_TASK_NAME,width:200,dataIndex:"tatyName"};
	var c2={header:C_TASK_ESTIMATED_DATE,dataIndex: 'taskEstimatedDate',width:120,renderer:formatDate};
	var c3={header:C_TASK_FINISHED_DATE,dataIndex: 'taskFinishedDate',width:120,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var ff=CHKCLM(C_FINISHED,'taskFinishedFlag',60);
	ff.on('click',function(c,e,r){
		r.set('taskFinishedDate',r.get('taskFinishedFlag')==1?(new Date()):'');
		saveT(r);
	},this);
	var cm=new Ext.grid.ColumnModel({columns:[sm,c1,c2,ff,c3],defaults:{sortable:true,width:100}});
	this.save=function(){
		p.beginEdit();
		p.set('consEta',ad.getValue());
		p.set('consSailDate',sd.getValue());
		p.endEdit();
		var x = RTX(p,'FConsign',FConsign);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
			success: function(res){
				var c = XTR(res.responseXML,'FConsign',FConsign);
				p.beginEdit();				
				p.set('version',c.get('version'));	
				p.endEdit();
				store.reload({params:{consId:p.get('consMasterId')},scope:this});
				XMG.alert(SYS,M_S);},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(x)
		});
	};	
	this.saveTask=function(e){saveT(e.record);};
	var gv=new Ext.grid.GridView({
		getRowClass: function(record, index) {			   
            if (record.get('taskFinishedFlag')) return 'green-font-row';
            else if (record.get('taskFinishedFlag')==0&&getElapsed(record.get('taskEstimatedDate'))>=0) return 'red-font-row';
            else return '';
        }});
	var grid=new Ext.grid.EditorGridPanel({id:'G_TASK',	border:true,height:400,autoScroll:true,clicksToEdit:1,plugins:[ff],
	    stripeRows:true,store:store,sm:sm,cm:cm, view:gv,
	    listeners:{scope:this,afteredit:this.saveTask},
	    tbar:[{xtype:'tbtext',text:C_ETA_V},ad,'-',
			{xtype:'tbtext',text:C_SAIL_DATE},sd,'-',
			{text:C_SAVE,iconCls:'save',disabled:false,scope:this,handler:this.save},'-'
			]
		});	
	Fos.TaskWin.superclass.constructor.call(this,{iconCls:'task',title:C_TASK_LIST+'-'+p.get('consMasterNo'),modal:true,width:600,
       height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:grid}); 
};
Ext.extend(Fos.TaskWin, Ext.Window);

Fos.TaskPanel = function(p) {	
	var store = GS('TASK_Q','FTask',FTask,'tatyOrder','ASC','','','',true);
	store.load({params:{consId:p.get('consId')},scope:this});
	var ad=new Ext.form.DateField({value:p.get('consEta'),format:DATEF,width:120,disabled:false});
	var sd=new Ext.form.DateField({value:p.get('consSailDate'),format:DATEF,width:120,disabled:false});
	
	var saveT=function(r){
		r.set('rowAction','M');
		var x=RTX(r,'FTask',FTask);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TASK_S'},
			success: function(res){
				var e = XTR(res.responseXML,'FTask',FTask);
				var fields = FTask.prototype.fields;
				for(var k = 0;k < fields.length;k++){
					var f = fields.items[k];
					var fn=f.name;
					r.set(fn,e.get(fn));
				}},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(x)
		});
	};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var c1={header:C_TASK_NAME,width:200,dataIndex:"tatyName"};
	var c2={header:C_TASK_ESTIMATED_DATE,dataIndex: 'taskEstimatedDate',width:120,renderer:formatDate};
	var c3={header:C_TASK_FINISHED_DATE,dataIndex: 'taskFinishedDate',width:120,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var ff=CHKCLM(C_FINISHED,'taskFinishedFlag',60);
	
	ff.on('click',function(c,e,r){
		r.set('taskFinishedDate',r.get('taskFinishedFlag')==1?(new Date()):'');
		r.set('rowAction','N');
		saveT(r);
	},this);
	
	var cm=new Ext.grid.ColumnModel({columns:[sm,c1,c2,ff,c3],defaults:{sortable:true,width:100}});
	
	this.save=function(){
		p.beginEdit();
		p.set('consEta',ad.getValue());
		p.set('consSailDate',sd.getValue());
		p.set('rowAction','M');
		p.endEdit();
		var x = RTX(p,'FConsign',FConsign);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
			success: function(res){
				var c = XTR(res.responseXML,'FConsign',FConsign);
				p.beginEdit();				
				p.set('version',c.get('version'));	
				p.endEdit();
				store.reload({params:{consId:p.get('consMasterId')},scope:this});
				XMG.alert(SYS,M_S);},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(x)
		});
	};	
	this.saveTask=function(e){saveT(e.record);};
	var gv=new Ext.grid.GridView({
		getRowClass: function(record, index) {			   
            if (record.get('taskFinishedFlag')) return 'green-font-row';
            else if (record.get('taskFinishedFlag')==0&&getElapsed(record.get('taskEstimatedDate'))>=0) return 'red-font-row';
            else return '';
        }});
	
	Fos.TaskPanel.superclass.constructor.call(this,{iconCls:'task',title:C_TASK_LIST,
		autoScroll:true,clicksToEdit:1,plugins:[ff],
	    stripeRows:true,store:store,sm:sm,cm:cm, view:gv,
	    listeners:{scope:this,
	    	afteredit:this.saveTask
	    },
	    tbar:[{xtype:'tbtext',text:C_ETA_V},ad,'-',
			{xtype:'tbtext',text:C_SAIL_DATE},sd,'-',
			{text:C_SAVE,iconCls:'save',scope:this,handler:this.save},'-'
			]
	}); 
};
Ext.extend(Fos.TaskPanel, Ext.grid.EditorGridPanel);

Fos.TatyGrid = function(t,bt,bc) {
	var store = GS('TATY_Q','PTaskType',PTaskType,'tatyId','ASC','','','',true);
	var ss=GS('TATY_Q','PTaskType',PTaskType,'tatyId','ASC','','','',true);
	store.load({params:{tatyBizType:bt,tatyBizClass:bc},callback:function(re,o,s){		
		var sa=store.getRange();
		var ra=[];
		for(var i=0;i<sa.length;i++){
			var rr=new PTaskType({});
			rr.set('tatyId',sa[i].get('tatyId'));
			rr.set('tatyName',sa[i].get('tatyName'));
			ra[i]=rr;			
		}
		ss.add(ra);
		var r=new PTaskType({tatyId:'',tatyName:'   '});
		ss.insert(0,r);
	}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var c0={header:C_TASK_ORDER,width:80,dataIndex:"tatyOrder",
			editor:new Ext.form.NumberField()
	};
	var c1={header:C_TASK_NAME,width:120,dataIndex:"tatyName",
			editor:new Ext.form.TextField()
	};
	var c2={header:C_TASK_DATE_TYPE,dataIndex: 'tatyDateType',renderer:getDATY,width:120,
			editor:new Ext.form.ComboBox({xtype:'combo',
				store:DATY_S,displayField:'NAME',valueField:'CODE',typeAhead: true,
				mode:'local',triggerAction:'all',selectOnFocus:true})
	};
	var c3={header:C_TASK_DATE_ESTIMATED,dataIndex:"tatyDateEstimated",align:'right',width:120,
			editor:new Ext.form.NumberField()
	};
	var c4={header:C_TASK_D,dataIndex: 'tatyDName',width:120,
		editor:new Ext.form.ComboBox({xtype:'combo',store:ss,
			displayField:'tatyName',valueField:'tatyName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
		listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();
	            	if(b){b.set('tatyDId',r.get('tatyId'));}}}
				})};
	var ac=ACTIVE();
	var cm=new Ext.grid.ColumnModel({columns:[sm,c0,c1,c2,c3,c4,ac],defaults:{sortable:true,width:60}});
	this.add=function(){
		var id=GGUID();
		var e = new PTaskType({id:id,tatyId:id,tatyDateType:'',tatyDateEstimated:'',tatyOrder:'',
    		tatyName:'',tatyDesc:'',tatyAction:'CONS_S',tatyClass:'',tatyProperty:'',tatyDefaultOwner:'',
    		tatyBizType:bt,tatyBizClass:bc,active:'1',version:'0'});
    	this.stopEditing();store.insert(0,e);e.set('rowAction','N');sm.selectFirstRow();this.startEditing(0, 1);
	};
	this.removeTaty=function(){
		var r = sm.getSelections();
		if(r){for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
		store.remove(r[i]);}}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length>0){			
			var x = ATX(a,'PTaskType',PTaskType);
			if(x!=''){
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TATY_S'},
					success: function(res){
						var a = XTRA(res.responseXML,'PTaskType',PTaskType);FOSU(store,a,PTaskType);
						XMG.alert(SYS,M_S);},
					failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
					xmlData:FOSX(x)
				});
			}
		}
		else XMG.alert(SYS,M_NC);
	};	
	Fos.TatyGrid.superclass.constructor.call(this, {id:'G_TATY'+t,title:t,iconCls:'class',
		border:true,autoScroll:true,clicksToEdit:1,plugins:[ac],
	    stripeRows:true,store:store,sm:sm,cm:cm,
	    tbar:[{text:C_ADD,iconCls:'add',disabled:false,scope:this,handler:this.add}, '-', 
			{text:C_REMOVE,iconCls:'remove',disabled:false,scope:this,handler:this.removeTaty},'-',
			{text:C_SAVE,iconCls:'save',disabled:false,scope:this,handler:this.save},'-'
			]
		});
};
Ext.extend(Fos.TatyGrid, Ext.grid.EditorGridPanel);
Fos.TatyTab = function(){	
	var gCE=new Fos.TatyGrid(C_EXP_CONT,BT_C,BC_E);
	var gCI=new Fos.TatyGrid(C_IMP_CONT,BT_C,BC_I);
	
	var gBE=new Fos.TatyGrid(C_EXP_BULK,BT_B,BC_E);
	var gBI=new Fos.TatyGrid(C_IMP_BULK,BT_B,BC_I);
	
	var gAE=new Fos.TatyGrid(C_EXP_AIR,BT_A,BC_E);
	var gAI=new Fos.TatyGrid(C_IMP_AIR,BT_A,BC_I);
	
	//var gGE=new Fos.TatyGrid(C_EXP_CUDE,BT_G,BC_E);
	//var gGI=new Fos.TatyGrid(C_IMP_CUDE,BT_G,BC_I);
	//var gIE=new Fos.TatyGrid(C_EXP_INSP,BT_I,BC_E);
	//var gII=new Fos.TatyGrid(C_IMP_INSP,BT_I,BC_I);
	
	Fos.TatyTab.superclass.constructor.call(this,{id:'T_TATY',
	title:C_TASK_CFG,iconCls:'class',deferredRender:false,closable:true,activeTab:0,autoScroll:true,
	items:[gBE,gBI,gCE,gCI,gAE,gAI],
	listeners:{scope:this,tabchange:function(m,a){a.doLayout();}}
	});
};
Ext.extend(Fos.TatyTab,Ext.TabPanel);

Fos.TaskList = function(cn,store) {	
	var c1={header:C_TASK_NAME,width:200,dataIndex:"tatyName"};
	var c2={header:C_TASK_ESTIMATED_DATE,dataIndex: 'taskEstimatedDate',width:200,renderer:formatDate};
	var c3={header:C_TASK_FINISHED_DATE,dataIndex: 'taskFinishedDate',width:200,renderer:formatDate};
	var ff=CHKCLM(C_FINISHED,'taskFinishedFlag',60);	
	var list = new Ext.ListView({
    	store: store,
    	reserveScrollOffset: true,
    	columns: [c1,c2,c3,ff]
	});
	Fos.TaskList.superclass.constructor.call(this,{iconCls:'task',title:cn,width:425,
    	height:250,collapsible:true,layout:'fit',items: listView});
};
Ext.extend(Fos.TaskList, Ext.Panel);

var loadTask=function(bc,bt){
	var store = GS('TATY_Q','PTaskType',PTaskType,'tatyId','ASC','','','',true);
	store.load({params:{tatyBizType:bt,tatyBizClass:bc},callback:function(re,o,s){		
		var t=new Fos.TaskTab(bc,bt,store);
		var c='G_TASK_'+bc+'_'+bt;
		T_MAIN.setActiveTab(T_MAIN.getComponent(c)?T_MAIN.getComponent(c):T_MAIN.add(t));
	}});
};
Fos.TaskTab = function(bc,bt) {	
	this.page=1;
	this.totalPage=1;
	
	this.moveFirst=function(){
		this.page=1;
		this.reLoad();
	};
	this.moveNext=function(){
		this.page=this.page+1;
		this.reLoad();
	};
	this.movePrev=function(){
		this.page=this.page-1;
		this.reLoad();
	};
	this.moveLast=function(){
		this.page=this.totalPage;
		this.reLoad();
	};
	
	this.reLoad=function(){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
			params:{A:'CONS_T_X',
				//consMasterFlag:bt=BT_B?1:'',
				mt:'XML',dir:'DESC',
				consBizClass:bc,
				consBizType:bt,
				tatyBizClass:bc,
				tatyBizType:bt,
				voyaSailedFlag:-1,
				start:((this.page-1)*20),limit:20,sort:'consNo'},
				success: function(res){				
					this.totalPage=Math.ceil(XRC(res.responseXML)/10);					
					var a = XTRA(res.responseXML,'FConsign',FConsign);
					var ta = XTRA(res.responseXML,'FTask',FTask);
					for(var i=0;i<ta.length;i++){
						var cid=ta[i].get('consId');
						for(var j=0;j<a.length;j++){
							if(cid==a[j].get('consId')){
								var d;
								var ed=ta[i].get('taskEstimatedDate');
								ed=ed?ed.format('Y-m-d'):'';							
								var fd=ta[i].get('taskFinishedDate');
								fd=fd?fd.format('Y-m-d'):'';
								var ff=ta[i].get('taskFinishedFlag');
								if(ff==1){
									d=ta[i].get('taskFinishedDate');
									d=d?d.format('Y-m-d'):'';
									d=GL(d);
								}
								else{
									d=ta[i].get('taskEstimatedDate');
									d=d?d.format('Y-m-d'):'';
									if(getElapsed(ta[i].get('taskEstimatedDate'))>=0)
										d=HL(d);
								}
								a[j].set('TATY_'+ta[i].get('tatyId'),d);
								break;
							}
						}
					}
					store.removeAll();
					store.add(a);
					var tb=this.getBottomToolbar();
					if(tb.getComponent('TB_F')) tb.getComponent('TB_F').setDisabled(this.page==1);
					if(tb.getComponent('TB_P')) tb.getComponent('TB_P').setDisabled(this.page==1);
					if(tb.getComponent('TB_N')) tb.getComponent('TB_N').setDisabled(this.page==this.totalPage);
					if(tb.getComponent('TB_L')) tb.getComponent('TB_L').setDisabled(this.page==this.totalPage);
					tb.getComponent('TB_M').setText('Page '+this.page+' of '+this.totalPage);
				},
				failure: function(res){XMG.alert(SYS,M_F+res.responseText);}
		});
	};
	
	var ts=getBizTaskTypeStore(bc,bt);
	
	var store = new Ext.data.GroupingStore({
   		reader:new Ext.data.ArrayReader({idIndex: 0},FConsign),
   		sortInfo:{field:'consNo', direction:'DESC'},
   		groupField:'voyaName'});
	
	var ca=ts.getRange();
	var cols=[];
	//cols[cols.length]={header:C_VESS,width:100,dataIndex:"vessName"};
    //cols[cols.length]={header:C_VOYA,width:80,dataIndex:"voyaName"};
    cols[cols.length]={header:C_CONS_NO,width:120,dataIndex:"consNo"};
    cols[cols.length]={header:bt==BT_B?C_CHARTER:C_BOOKER,width:200,dataIndex:"custName"};
    for(var i=0;i<ca.length;i++){
    	cols[cols.length]={header:ca[i].get('tatyName'),width:100,dataIndex:'TATY_'+ca[i].get('tatyId')};
    }
    var cm=new Ext.grid.ColumnModel(cols);
    var sm=new Ext.grid.RowSelectionModel({singleSelect:true});
    
	var title = "";
	if(bt==BT_B&&bc==BC_E)
		title = C_TASK_LIST_BULK_E;
	
	else if(bt==BT_B&&bc==BC_I)
		title = C_TASK_LIST_BULK_I;
	
	else if(bt==BT_C&&bc==BC_E)
		title = C_TASK_LIST_CONTAINER_E;
	
	else if(bt==BT_C&&bc==BC_I)
		title = C_TASK_LIST_CONTAINER_I;
	
	else if(bt==BT_A&&bc==BC_E)
		title = C_TASK_LIST_AIR_E;
	
	else if(bt==BT_A&&bc==BC_I)
		title = C_TASK_LIST_AIR_I;
    
    Fos.TaskTab.superclass.constructor.call(this, {
    id:'TASK_'+bc+"_"+bt,iconCls:'task',store: store,
    title:title,
	sm:sm,cm:cm,stripeRows:true,closable:true,border:true,autoScroll:true,
	//view:new Ext.grid.GroupingView(groupViewCfg),
	bbar:[{itemId:'TB_F',disabled:this.page==1,iconCls:'page-first',scope:this,handler:this.moveFirst},'-',
        {itemId:'TB_P',disabled:this.page==1,iconCls:'page-prev',scope:this,handler:this.movePrev},'-',
        {itemId:'TB_M',text:'Page '+this.page+' of '+this.totalPage},'-',
        {itemId:'TB_N',disabled:this.page==this.totalPage,iconCls:'page-next',scope:this,handler:this.moveNext},'-',
        {itemId:'TB_L',disabled:this.page==this.totalPage,iconCls:'page-last',scope:this,handler:this.moveLast},'-']
    });
	this.reLoad();
	
};
Ext.extend(Fos.TaskTab, Ext.grid.GridPanel);
