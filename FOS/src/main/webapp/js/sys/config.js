//系统配置
var showP_COCO = function() {    
	var store = GS('COCO_Q','PCompanyConfig',PCompanyConfig,'cocoId','DESC','cocoGroup','S_COCO','cocoId',false);
	store.load();
	var cm=new Ext.grid.ColumnModel({columns:[
     	new Ext.grid.RowNumberer(),
     	{header:C_COCO_CODE,dataIndex:'cocoCode',width:250},
 		{header:C_COCO_NAME,dataIndex: 'cocoName',width:150},
 		{header:C_COCO_VALUE,dataIndex:'cocoValue',width:150,editable:true,renderer:function(v,m,r){if(r.get('cocoDesc')) return r.get('cocoDesc'); else return v;}},
 		{header:C_COCO_GROU,dataIndex: 'cocoGroup',width:100}
 	],
 	editors: {
		'text': new Ext.grid.GridEditor(new Ext.form.TextField({})),
		'number': new Ext.grid.GridEditor(new Ext.form.NumberField({})),
		'date': new Ext.grid.GridEditor(new Ext.form.DateField({})),
		'bool':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			store:new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['Y','Yes'],['N','No']]}),displayField:'NAME',valueField:'CODE'})),
		'color':new Ext.grid.GridEditor(new Ext.form.ColorField()),
		'port':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,store:getPOL_S(),displayField:'portNameEn',valueField:'portId',
			listeners:{scope:this,select:function(c,r,i){
        	var b =this.grid.getSelectionModel().getSelected();b.set('cocoDesc',r.get('portNameEn'));}}})),
		'char':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			tpl:charTpl,itemSelector:'div.list-item',listWidth:C_LW,store:getCHAR_S(),displayField:'charCode',valueField:'charId',
			listeners:{scope:this,select:function(c,r,i){
        	var b =this.grid.getSelectionModel().getSelected();
        	b.set('cocoDesc',r.get('charName'));}}})),
    	'grou':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			store:getGROU_S(),displayField:'grouName',valueField:'grouId',
			listeners:{scope:this,select:function(c,r,i){
        	var b =this.grid.getSelectionModel().getSelected();b.set('cocoDesc',r.get('grouName'));}}})),
    	'fdoc':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			store:getDOTY_S(),displayField:'dotyName',valueField:'dotyId',
			listeners:{scope:this,select:function(c,r,i){
        	var b =this.grid.getSelectionModel().getSelected();b.set('cocoDesc',r.get('dotyName'));}}})),
        'dateT':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			store:new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','系统日期'],['2','开航日期'],['3','委托日期']]}),displayField:'NAME',valueField:'CODE',
			listeners:{scope:this,select:function(c,r,i){
        		var b =sm.getSelected();
        		b.set('cocoDesc',r.get('NAME'));
        	}}}))
	},
	getCellEditor: function(colIndex, rowIndex) {
		var field = this.getDataIndex(colIndex);
		if (field == 'cocoValue') {
			var rec = store.getAt(rowIndex);
			if(rec.get('cocoValueType')==1) 
				return this.editors['number'];
			else if(rec.get('cocoValueType')==2) 
				return this.editors['bool'];
			else if(rec.get('cocoValueType')==3){
				var a=rec.get('cocoValueOptions').split('|');
				var b=[];
				for(var i=0;i<a.length;i++){
					b[i]=[a[i]];
				}
				var s = new Ext.data.SimpleStore({
			        fields: [{name:'CODE'}],
			        data:b
			    });
				return new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
					store:s,displayField:'CODE',valueField:'CODE'}));
			}
			else if(rec.get('cocoValueType')==9) 
				return this.editors['color'];
			else if(rec.get('cocoValueType')==10) 
				return this.editors['port'];
			else if(rec.get('cocoValueType')==11) 
				return this.editors['char'];
			else if(rec.get('cocoValueType')==12) 
				return this.editors['grou'];
			else if(rec.get('cocoValueType')==13) 
				return this.editors['fdoc'];
			else if(rec.get('cocoValueType')==14) 
				return this.editors['dateT'];
			else
				return this.editors['text'];
		}
		return Ext.grid.ColumnModel.prototype.getCellEditor.call(this, colIndex, rowIndex);
	},defaults:{sortable:true,width:100}});
    var sm=new Ext.grid.RowSelectionModel({singleSelect:true});  
	this.save=function(){FOS_POST(store,'PCompanyConfig',PCompanyConfig,'COCO_S');};
	new Ext.KeyMap(Ext.getDoc(),{
		key:'s',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_COCO');
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		var tb=grid.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.S:
		 			if(!tb.getComponent('TB_S').disabled) this.save();break;
				}
		 	}
		},stopEvent:true,scope:this});
    this.grid = new  Ext.grid.EditorGridPanel({
    id:'G_COCO',iconCls:'gen',title:C_COCO,header:false,clicksToEdit:2,closable:true,
    store: store,sm:sm,cm:cm,view:new Ext.grid.GroupingView(groupViewCfg),
    tbar:[{itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_P+A_COCO+F_M),iconCls:'save',handler:this.save}]}); 
    return this.grid;
};