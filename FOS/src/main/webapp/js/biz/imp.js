//进口单票 House提单信息
Fos.ImpHblGrid = function(p,store) {
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_HBL_NO,dataIndex:'blNo',editor:new Ext.form.TextField()},
	{header:C_MARKS,dataIndex:'blMarks',editor:new Ext.form.TextField()},
	{header:C_CARGO_NAME,dataIndex:'blCargoDesc',editor:new Ext.form.TextField()},
	{header:C_PACKAGES,dataIndex:'blPackages',width:60,editor:new Ext.form.NumberField({})},
	{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
            listeners:{scope:this,select:function(c,r,i){this.getSelectionModel().getSelected().set('packName',r.get('packName'));}}
            })},
	{header:C_GW,dataIndex:'blGrossWeight',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NW,dataIndex:'blNetWeight',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CBM,dataIndex:'blMeasurement',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CONSIGNEE,dataIndex:'blConsignee',editor:new Ext.form.TextField()}],defaults:{sortable:true,width:100}});
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CONS;
	Fos.ImpHblGrid.superclass.constructor.call(this, { 
	border:true,autoScroll:true,clicksToEdit:1,height:400,store: store,sm:sm,cm:cm,
    tbar:[{text:C_ADD,disabled:NR(m+F_M),iconCls:'add',scope:this,handler:function(){
			this.blId=this.blId-1;
			var c = new FBl({id:GGUID(),blId:'0',consId:p.get('consId'),consNo:p.get('consNo'),
			blContainerNo:p.get('consContainerNo'),
			blNo:'',blType:'H/BL',blCargoDesc:p.get('consCargoDesc'),blPackages:p.get('consTotalPackages'),
			packId:p.get('packId'),packName:p.get('packName'),blMarks:p.get('consCargoMarks'),
			blGrossWeight:p.get('consTotalGrossWeight'),blNetWeight:p.get('consTotalNetWeight'),
			blMeasurement:p.get('consTotalMeasurement'),blConsignee:p.get('consConsignee'),
			version:'0',rowAction:'N'});
        	store.insert(0,c);this.startEditing(0, 1);}},'-',
		{text:C_REMOVE,disabled:NR(m+F_M),iconCls:'remove',scope:this,handler:function(){FOS_REMOVE(sm,store);}}]
	});
};
Ext.extend(Fos.ImpHblGrid, Ext.grid.EditorGridPanel);

//进口分拨界面DO信息
Fos.DoGrid = function(p,store,frm) {
	var sel = GSEL;
	var re = {
		rowselect:function(sm,row,record){
			if(sel!=record.get('id')){
				frm.find('name','doWarehouseName')[0].setValue(record.get('doWarehouseName'));
				frm.find('name','doWarehouseContact')[0].setValue(record.get('doWarehouseContact'));
				frm.find('name','doWarehouseTel')[0].setValue(record.get('doWarehouseTel'));
				frm.find('name','doWarehouseAddress')[0].setValue(record.get('doWarehouseAddress'));
				frm.find('name','doRemarks')[0].setValue(record.get('doRemarks'));
				frm.find('name','doContainerNo')[0].setValue(record.get('doContainerNo'));
				frm.find('name','doInDate')[0].setValue(record.get('doInDate'));
				frm.find('name','doOutDate')[0].setValue(record.get('doOutDate'));
				sel=record.get('id');
			};
		},
		rowdeselect:function(sm,row,record){
			record.beginEdit();			
			record.set('doWarehouseName',frm.find('name','doWarehouseName')[0].getValue());
			record.set('doWarehouseAddress',frm.find('name','doWarehouseAddress')[0].getValue());
			record.set('doWarehouseContact',frm.find('name','doWarehouseContact')[0].getValue());
			record.set('doWarehouseTel',frm.find('name','doWarehouseTel')[0].getValue());
			record.set('doRemarks',frm.find('name','doRemarks')[0].getValue());
			record.set('doContainerNo',frm.find('name','doContainerNo')[0].getValue());
			record.set('doInDate',frm.find('name','doInDate')[0].getValue());
			record.set('doOutDate',frm.find('name','doOutDate')[0].getValue());
			record.endEdit();
		}
	};		
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_HDO_NO,dataIndex:'doNo'},
	{header:C_HBL_NO,dataIndex:'hblNo'},
	{header:C_MARKS,dataIndex:'doMarks'},
	{header:C_CARGO_NAME,dataIndex:'doCargoName'},
	{header:C_PACKAGES,dataIndex:'doPackages'},
	{header:C_PACK,dataIndex:'packId',renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
            listeners:{scope:this,select:function(c,r,i){this.getSelectionModel().getSelected().set('packName',r.get('packName'));}}})},
	{header:C_GW,dataIndex:'doGrossWeight',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NW,dataIndex:'doNetWeight',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CBM,dataIndex:'doMeasurement',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CONSIGNEE,dataIndex:'doConsignee'}
	],defaults:{sortable:true,width:100,editor:new Ext.form.TextField()}});
	this.add=function(){
		var r = new FDo({id:GGUID(),doId:'0',doNo:'',consId:p.get('consId'),consNo:p.get('consNo'),
    		hblNo:p.get('consHblNo'),doVessel:p.get('vessName'),
    		doVoyage:p.get('voyaName'),doDonsignee:'',doPort:p.get('consPolEn'),doHarbour:p.get('consHarbour'),
    		doWarehouseId:p.get('consWarehouse'),
    		doWarehouseName:p.get('consWarehouseName'),
    		doWarehouseContact:p.get('consWarehouseContact'),
    		doWarehouseTel:p.get('consWarehouseTel'),doWarehouseAddress:p.get('consWarehouseAddress'),
    		doContainerNo:p.get('consContainerNo'),doMarks:p.get('consCargoMarks'),
    		doCargoName:p.get('consCargoNameEn'),packId:p.get('packId'),packName:p.get('packName'),
    		doPackages:'',doGrossWeight:'',doMeasurement:'',doNetWeight:'',doRemarks:'',
    		doStatus:'0',version:'0',rowAction:'N'});
    	this.stopEditing();store.insert(0,r);sm.selectFirstRow();this.startEditing(0,1);
	};
	this.removeDo=function(){FOS_REMOVE(sm,store);};
	this.imp=function(){
		var hbl_s = GS('BL_Q','FBl',FBl,'blId','DESC','','S_HBL','blId');
		hbl_s.load({params:{consId:p.get('consId'),blType:'H/BL'},scope:this,callback:function(r,o,s){
			for(var j=0;j<r.length;j++){
				this.doId=this.doId-1;
				var d = new FDo({id:GGUID(),doId:'0',doNo:p.get('consMblNo')+'*'+(j+1),
					blId:r[j].get('blId'),
					hblNo:r[j].get('blNo'),
					doConsignee:r[j].get('blConsignee'),
					consId:r[j].get('consId'),consNo:r[j].get('consNo'),doMarks:r[j].get('blMarks'),
					doCargoName:r[j].get('blCargoDesc'),doContainerNo:r[j].get('blContainerNo'),
					packId:r[j].get('packId'),packName:r[j].get('packName'),
					doPackages:r[j].get('blPackages'),doGrossWeight:r[j].get('blGrossWeight'),
					doNetWeight:r[j].get('blNetWeight'),
					doMeasurement:r[j].get('blMeasurement'),doRemarks:'',
					doPort:p.get('consPolEn'),doHarbour:p.get('consHarbour'),doArriveDate:p.get('consSailDate'),
					doVessel:p.get('vessName'),doVoyage:p.get('voyaName'),
					doWarehouseId:p.get('consWarehouse'),
    				doWarehouseName:p.get('consWarehouseName'),
    				doWarehouseContact:p.get('consWarehouseContact'),
    				doWarehouseTel:p.get('consWarehouseTel'),
    				doWarehouseAddress:p.get('consWarehouseAddress'),
					doStatus:'0',version:'0'});
				store.addSorted(d);d.set('rowAction','N');
			}
		}});
	};
	 this.expExcel=function(){var b = sm.getSelected();if(b){EXPC('DO','&doId='+b.get('doId'));}};
	this.expEmail=function(){
		var b = sm.getSelected();
		if(b){
			var to='';var cc='';var sub=C_DO_APPLICATION;
			var msg='';
			EXPM(to,cc,sub,msg,'DO','doId='+b.get('doId'));
		}
	};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_DO;
	Fos.DoGrid.superclass.constructor.call(this, { 
	id:'G_DO'+p.get('id'),border:true,autoScroll:true,clicksToEdit:1,height:150,store: store,sm:sm,cm:cm,
    tbar:[
    	{text:C_GEN_FROM_HBL,iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.imp}, '-', 
    	{text:C_ADD,iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.add}, '-',
    	{text:C_REMOVE,iconCls:'remove',disabled:NR(m+F_M),scope:this,handler:this.removeDo}, '-',
    	{text:C_SWITCH_BL,iconCls:'refresh',disabled:NR(m+F_M),scope:this,handler:function(){}},'-',
		{text:C_EXPORT,iconCls:'print',disabled:NR(m+F_E),scope:this,
			menu: {items: [		   		
				{text:C_DO,menu:{items:[
		   		{text:'Excel',scope:this,handler:this.expExcel},
		   		{text:C_EMAIL,scope:this,handler:this.expEmail},
		   		{text:C_FAX,scope:this,handler:function(){}}]}}]}}
		]
	});
};
Ext.extend(Fos.DoGrid, Ext.grid.EditorGridPanel);

//进口分拨
Fos.SplitTab = function(p) {
	var do_s = GS('DO_Q','FDo',FDo,'doId','DESC','','','doId',false);
	if(p.get('consStatusSplit')!=0){do_s.load({params:{consId:p.get('consId')}});}	
	this.doGrid = new Fos.DoGrid(p,do_s,this);	
	this.save=function(){
		p.set('consStatusSplit',1);
		p.set('consSplitNo',this.find('name','consSplitNo')[0].getValue());
		p.set('consShipCode',this.find('name','consShipCode')[0].getValue());
		p.set('consSplitContact',this.find('name','consSplitContact')[0].getValue());
		p.set('consSplitTel',this.find('name','consSplitTel')[0].getValue());
		p.set('consSplitConsignee',this.find('name','consSplitConsignee')[0].getValue());
		p.set('consSplitConsignee',this.find('name','consSplitConsignee')[0].getValue());
		p.set('consSplitConsigneeTel',this.find('name','consSplitConsigneeTel')[0].getValue());
	 			
		var xml = RTX(p,'FConsign',FConsign);
		var c =this.doGrid.getStore().getModifiedRecords();
		if(c.length>0){var x = ATX(c,'FDo',FDo);xml=xml+x;};		
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
			success: function(res){						
				var c = XTR(res.responseXML,'FConsign',FConsign);
				p.set('version',c.get('version'));
				p.set('consStatusSplit',c.get('consStatusSplit'));
				this.updateToolBar('1');
				var a = XTRA(res.responseXML,'FDo',FDo);FOSU(do_s,a,FDo);
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
	
	};
	this.docPass=function(){
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatusSplit:'2'},
			success: function(r){p.set('consStatusSplit','2');this.updateToolBar('2');XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
		});	
    };
    this.pass=function(){
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatusSplit:'3'},
			success: function(r){p.set('consStatusSplit','3');this.updateToolBar('3');XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
		});	
    };
    this.expExcel=function(){EXPC('SPLI','&consId='+p.get('consId'));};
	this.expEmail=function(){
		var to='';var cc='';var sub=C_DO_APPLICATION;
		var msg='您好！<BR>附件是我司的分拨申请，船名/航次:'+p.get('vessName')+'/'+p.get('voyaName')+',我司业务号：'+p.get('consNo')+'；<BR>请查收。谢谢！';
		EXPM(to,cc,sub,msg,'SPLI','consId='+p.get('consId'));
	};
	this.updateToolBar = function(s){  
		var tb = this.getTopToolbar();
		tb.getComponent('TB_S').setDisabled(s>1);
    	tb.getComponent('TB_B').setDisabled(s!=1);
    	tb.getComponent('TB_C').setDisabled(s!=2);
    	tb.getComponent('TB_M').setText(C_STATUS_C+getSPST(s));        				
    };
    var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_DO;
	Fos.SplitTab.superclass.constructor.call(this, { 
	id:'T_SPLIT_'+p.get('id'),title:C_SWITCH,header:false,deferredRender:false,autoScroll:true,
	labelAlign:'right',labelWidth:70,border : false,width:800,
	tbar:[{text:C_SAVE,itemId:'TB_S',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save},'-',
			{text:C_DOC_PASS,itemId:'TB_B',disabled:NR(m+F_M)||p.get('consStatusSplit')!=1,iconCls:'docpass',scope:this,handler:this.docPass},'-',
			{text:C_CUSTOM_PASS,itemId:'TB_C',disabled:NR(m+F_M)||p.get('consStatusSplit')!=2,iconCls:'pass',scope:this,handler:this.pass},'-',
			{text:C_EXPORT,iconCls:'print',disabled:NR(m+F_E),scope:this,
				menu: {items: [		   		
		   		{text:C_DO_APPLICATION,menu:{items:[
		   			{text:'Excel',scope:this,handler:this.expExcel},
		   			{text:C_EMAIL,scope:this,handler:this.expEmail},
		   			{text:C_FAX,scope:this,handler:function(){}}]}}]}},'->',
			{itemId:'TB_M',disabled:true,text:C_STATUS_C+getSPST(p.get('consStatusSplit'))},'-'
			],
	items: [{layout:'column',layoutConfig: {columns:4},deferredRender:false,title:C_DO_APPLICATION_INFO,labelWidth:100,collapsible:true,
            items:[{columnWidth:.25,layout: 'form',border:false,
                items: [{fieldLabel:C_CUSTOM_CODE,tabIndex:1,name:'consSplitNo',value:p.get('consSplitNo'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_VESS_CODE,tabIndex:5,name:'consShipCode',value:p.get('consShipCode'),xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_SPLIT_CONSIGNEE,tabIndex:9,name:'consSplitConsignee',value:p.get('consSplitConsignee'),xtype:'textfield',anchor:'95%'}]},
				{columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_VESS,tabIndex:2,disabled:true,name:'vessName',value:p.get('vessName'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_POL,tabIndex:6,disabled:true,name:'consPolEn',value:p.get('consPolEn'),xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_PHONE,tabIndex:10,name:'consSplitConsigneeTel',value:p.get('consSplitConsigneeTel'),xtype:'textfield',anchor:'95%'}]},
				{columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_VOYA,tabIndex:3,disabled:true,name:'voyaName',value:p.get('voyaName'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_HARBOUR,tabIndex:6,disabled:true,name:'consHarbour',value:p.get('consHarbour'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_SPLIT_CONTACT,tabIndex:11,name:'consSplitContact',value:p.get('consSplitContact'),xtype:'textfield',anchor:'95%'}]},
				{columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:'M/BL No.',tabIndex:4,disabled:true,name:'consMblNo',value:p.get('consMblNo'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_ETA,tabIndex:7,disabled:true,name:'consSailDate',value:p.get('consSailDate'),xtype:'datefield',format:DATEF,anchor:'95%'},
				{fieldLabel:C_PHONE,tabIndex:12,name:'consSplitTel',value:p.get('consSplitTel'),xtype:'textfield',anchor:'95%'}]},
				{columnWidth:.99,layout: 'form',border : false,
                items: [{fieldLabel:C_CONT_NO,tabIndex:13,disabled:true,name:'consContainerNo',value:p.get('consContainerNo'),height:40,xtype:'textarea',anchor:'95%'}
               	]}]
			},
			{layout:'form',title: "House D/O",deferredRender:false,collapsible:true,
			items: [{layout:'fit',border:false,items:[this.doGrid]}]},
			{layout:'column',layoutConfig: {columns:4},deferredRender:false,labelWidth:60,labelAlign:'top',title:C_DO_INFO,collapsible:true,
 			items:[{columnWidth:.2,layout: 'form',labelAlign:'left',border:false,labelWidth:40,
         		items: [
         		{fieldLabel:C_WAREHOUSE,tabIndex:19,name:'doWarehouseName',store:getCS(),enableKeyEvents:true,
         			xtype:'combo',displayField:'custCode',valueField:'custCode',
         			typeAhead:true,mode:'local',
         			tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',
         			selectOnFocus:true,anchor:'95%',
					listeners:{scope:this,
					blur:function(f){
						if(f.getRawValue()==''){
							f.clearValue();
							var b =this.doGrid.getSelectionModel().getSelected();
							if(b){
								b.set('doWarehouseId','');
								b.set('doWarehouseName','');
							}
						}
					},
					select:function(c,r,i){
						this.find('name','doWarehouseContact')[0].setValue(r.get('custContact'));
						this.find('name','doWarehouseTel')[0].setValue(r.get('custTel'));
						this.find('name','doWarehouseAddress')[0].setValue(r.get('custAddress'));
						var b =this.doGrid.getSelectionModel().getSelected();
						if(b){
							b.set('doWarehouseId',r.get('custId'));
							b.set('doWarehouseName',r.get('custNameCn'));
							b.set('doWarehouseContact',r.get('custContact'));
							b.set('doWarehouseName',r.get('custNameCn'));
							b.set('doWarehouseTel',r.get('custTel'));
							b.set('doWarehouseAddress',r.get('custAddress'));
							c.setValue(r.get('custNameCn'));
						}
					},
					keydown:{fn:function(f,e){LC(f,e,'custWarehouseFlag');},buffer:BF}}}]},
         		{columnWidth:.2,layout: 'form',labelAlign:'left',border:false,labelWidth:70,items: [{fieldLabel:C_WARE_CONTACT,tabIndex:20,name:'doWarehouseContact',xtype:'textfield',anchor:'95%',
         			listeners:{scope:this,change:function(f,nv,ov){
         				var b =this.doGrid.getSelectionModel().getSelected();
         				if(b){b.set('doWarehouseContact',nv);}
         			}}}]},
         		{columnWidth:.2,layout: 'form',labelAlign:'left',border:false,items:[{fieldLabel:C_PHONE,tabIndex:17,name:'doWarehouseTel',xtype:'textfield',anchor:'95%',
         			listeners:{scope:this,change:function(f,nv,ov){
         				var b =this.doGrid.getSelectionModel().getSelected();
         				if(b){b.set('doWarehouseTel',nv);}
         			}}}]},
         		{columnWidth:.4,layout: 'form',labelAlign:'left',border:false,items: [{fieldLabel:C_WARE_ADDRESS,tabIndex:21,name:'doWarehouseAddress',xtype:'textfield',anchor:'95%',
         			listeners:{scope:this,change:function(f,nv,ov){
         				var b =this.doGrid.getSelectionModel().getSelected();
         				if(b){b.set('doWarehouseAddress',nv);}
         			}}}]},   	
         		{columnWidth:.2,labelWidth:40,layout: 'form',labelAlign:'left',border:false,items: [{fieldLabel:C_CONT_NO,tabIndex:20,name:'doContainerNo',xtype:'textfield',anchor:'95%',
         			listeners:{scope:this,change:function(f,nv,ov){
         				var b =this.doGrid.getSelectionModel().getSelected();
         				if(b){b.set('doContainerNo',nv);}}}}]},
         		{columnWidth:.2,layout: 'form',labelAlign:'left',border:false,labelWidth:70,items: [{fieldLabel:C_WARE_DATE,tabIndex:20,name:'doInDate',xtype:'datefield',format:DATEF,anchor:'95%',
         			listeners:{scope:this,change:function(f,nv,ov){
         				var b =this.doGrid.getSelectionModel().getSelected();
         				if(b){b.set('doInDate',nv);}}}}]},
         		{columnWidth:.2,layout: 'form',labelAlign:'left',border:false,items: [{fieldLabel:C_WARE_DATE_OUT,tabIndex:20,name:'doOutDate',xtype:'datefield',format:DATEF,anchor:'95%',
         			listeners:{scope:this,change:function(f,nv,ov){
         				var b =this.doGrid.getSelectionModel().getSelected();
         				if(b){b.set('doOutDate',nv);}}}}]},
         		{columnWidth:.4,layout: 'form',labelAlign:'left',border:false,items: [{fieldLabel:C_REMARKS,tabIndex:21,name:'doRemarks',xtype:'textfield',anchor:'95%',
         			listeners:{scope:this,change:function(f,nv,ov){
         				var b =this.doGrid.getSelectionModel().getSelected();
         				if(b){b.set('doRemarks',nv);}}}}]}
			]}
		]
	});
};
Ext.extend(Fos.SplitTab, Ext.FormPanel);
