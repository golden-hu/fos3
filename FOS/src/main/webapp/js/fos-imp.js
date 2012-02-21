Fos.CargoGrid = function(p,store,frm) {
	this.sel = GSEL;
	this.reCalculate=function(){
		var pkg=0;var gw=0;var nw=0;var m=0;var cgw=0;
		var a=store.getRange();
		for(var i=0;i<a.length;i++){
			pkg+=a[i].get('cargPackageNum');
			gw+=a[i].get('cargGrossWeight');
			nw+=a[i].get('cargNetWeight');
			m+=a[i].get('cargMeasurement');
			cgw+=a[i].get('cargMeasurement')*167;
		}
		frm.find('name','consTotalPackages')[0].setValue(pkg);
		frm.find('name','consTotalGrossWeight')[0].setValue(gw);
		frm.find('name','consTotalNetWeight')[0].setValue(nw);
		frm.find('name','consTotalMeasurement')[0].setValue(m);
		var cw=frm.find('name','consTotalChargeWeight');
		if(cw.length) cw[0].setValue(gw>cgw?gw:cgw);
		p.set('consTotalPackages',pkg);
		p.set('consTotalGrossWeight',gw);
		p.set('consTotalNetWeight',nw);
		p.set('consTotalMeasurement',m);
		var pw='SAY '+N2EW(p.get('consTotalPackages'))+' '+p.get('packName')+' ONLY';
		frm.find('name','consTotalPackagesInWord')[0].setValue(pw);
		p.set('consTotalPackagesInWord',pw);
	};	
	var quitFlag=CHKCLM(C_CARG_QUIT,'cargQuitFlag');
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true}); 
	var c1={header:C_MARKS,dataIndex:'cargMarks',editor:new Ext.form.TextField({})};
	var c2={header:C_CARGO_NAME_EN,dataIndex:'cargNameEn',editor:new Ext.form.TextField({allowBlank:false})};
	var c3={header:C_CARGO_NAME_CN,dataIndex:'cargNameCn',editor:new Ext.form.TextField({})};
	var c4={header:C_PACKAGES,dataIndex:'cargPackageNum',editor:new Ext.form.NumberField({allowBlank:false})};
	var c5={header:C_PACK,dataIndex:'packId',renderer:function(v,m,r){return r.get('packName')},
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packId',triggerAction:'all',
	            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
	            listeners:{scope:this,select:function(c,r,i){
						this.getSelectionModel().getSelected().set('packName',r.get('packName'));}}
	            })};
	var c6={header:C_GW+(p.get('consBizType')==BT_B?C_MT:C_KGS),dataIndex:'cargGrossWeight',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})};
	var c7={header:C_NW+(p.get('consBizType')==BT_B?C_MT:C_KGS),dataIndex:'cargNetWeight',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,invalidText:''})};
	var c8={header:C_UNIT,dataIndex:'unitId',renderer:function(v,m,r){return r.get('unitName')},
			editor:new Ext.form.ComboBox({displayField:'unitName',valueField:'unitId',triggerAction:'all',
		        mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_S(),
		        listeners:{scope:this,select:function(c,r,i){
						this.getSelectionModel().getSelected().set('unitName',r.get('unitName'));}}
		        })};
	var c9={header:C_CBM,dataIndex:'cargMeasurement',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})};
	var c10={header:C_MANU_NO,dataIndex:'cargManuNo',editor:new Ext.form.TextField()};
	var c11={header:C_SPEC,dataIndex:'cargSpec',editor:new Ext.form.TextField()};
	var c12={header:C_HS_CODE,dataIndex:'cargNo',editor:new Ext.form.TextField()};
	var cm=new Ext.grid.ColumnModel({columns:[sm,quitFlag,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12],defaults:{sortable:true,width:80}});
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CONS;	
	this.addMBl = function(){
	    if(p.get('consServiceRequired').indexOf(SR_BL)!=-1){
		    var b = sm.getSelected();
			if(b){
				var tc = T_MAIN.getComponent('C_'+p.get("id"));
				var t=tc.getComponent('T_BL_'+p.get("id"));
				tc.setActiveTab(t);
				t.addBlByCargo('MB/L',b);
			}
			else XMG.alert(SYS,M_NO_DATA_SELECTED);
		}
	};
	this.addHBl = function(){
		if(p.get('consServiceRequired').indexOf(SR_BL)!=-1){
			var b = sm.getSelected();
			if(b){
				var tc = T_MAIN.getComponent('C_'+p.get("id"));
				var t=tc.getComponent('T_BL_'+p.get("id"));
				tc.setActiveTab(t);
				t.addBlByCargo('HB/L',b);
			}
			else XMG.alert(SYS,M_NO_DATA_SELECTED);
		}
	};
	this.addCude = function(){
		if(p.get('consServiceRequired').indexOf(SR_CUDE)!=-1){
			var b = sm.getSelected();
			if(b){
				var tc = T_MAIN.getComponent('C_'+p.get("id"));
				var t=tc.getComponent('T_CUDE_'+p.get("id"));
				tc.setActiveTab(t);
				t.addCudeByCargo(b);
			}
			else XMG.alert(SYS,M_NO_DATA_SELECTED);
		}
	};
	this.genCons = function(){		
		var b = sm.getSelected();
		if(b){
			EXPC('CONS_B_CARG','&cargId='+b.get('cargId'));
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.showPali = function(){
		var t=T_MAIN.getComponent('G_CONS_PALI_'+p.get("consId"));if(t){T_MAIN.setActiveTab(t);}
		else {t=T_MAIN.add(new Fos.ConsPaliGrid(p.get("consId")));T_MAIN.setActiveTab(t);t.doLayout();}
	};
	Fos.CargoGrid.superclass.constructor.call(this,{plugins:[quitFlag],
	id:'G_CARG'+p.get('id'),border:true,autoScroll:true,clicksToEdit:1,height:150,store:store,sm:sm,cm:cm,
	listeners:{scope:this,afteredit:function(e){
    	var f=e.field;var r=e.record;var row=e.row;var v=e.value;
    	if(f=='cargPackageNum'||f=='cargNetWeight'||f=='cargGrossWeight'||f=='cargMeasurement'){this.reCalculate();}
    	else if(f=='cargMarks' && row==0){
    		var consCargoMarks=frm.find('name','consCargoMarks')[0];
			if(consCargoMarks.getValue()==''){consCargoMarks.setValue(v);p.set('consCargoMarks',v);}
    	}
    	else if(f=='cargNameEn' && row==0){
    		var consCargoDesc=frm.find('name','consCargoDesc')[0];
    		var consCargoNameEn=frm.find('name','consCargoNameEn')[0];
    		if(consCargoDesc.getValue()==''){consCargoDesc.setValue(v);	p.set('consCargoDesc',v);};
			if(consCargoNameEn.getValue()==''){consCargoNameEn.setValue(v);p.set('consCargoNameEn',v);};
    	}
    	else if(f=='cargNameCn' && row==0){
    		var cn=frm.find('name','consCargoNameCn');
    		if(cn.length){
	    		var consCargoNameCn=cn[0];
	    		if(consCargoNameCn.getValue()==''){consCargoNameCn.setValue(v);p.set('consCargoNameCn',v);};
			};
    	}
    	else if(f=='packId' && row==0){
    		var packId=frm.find('name','packId')[0];    		
			if(packId.getValue()==''){
				packId.setValue(v);
				p.set('packId',v);
				p.set('packName',r.get('packName'));
				var pw='SAY '+N2EW(p.get('consTotalPackages'))+' '+p.get('packName')+' ONLY';
				frm.find('name','consTotalPackagesInWord')[0].setValue(pw);
				p.set('consTotalPackagesInWord',pw);
			}
    	}
    }},
    tbar:[{text:C_ADD,iconCls:'add',disabled:NR(m+F_M),scope:this,handler:function(){
			var rid=GGUID();
			var c = new FCargo({id:rid,cargId:rid,consId:p.get('consId'),consNo:p.get('consNo'),
			consMasterId:p.get('consMasterId'),consMasterNo:p.get('consMasterNo'),cargMarks:'',cargSpec:'',
			cargManuNo:'',cargNo:'',packId:'',cargPackageNum:'',cargNameCn:'',cargNameEn:'',cargGrossWeight:'',cargNetWeight:'',
				cargMeasurement:'',cargUnit:'',version:'0',rowAction:'N'});
        		store.insert(0,c);sm.selectFirstRow();this.startEditing(0, 2);}},'-',
			{text:C_REMOVE,iconCls:'remove',disabled:NR(m+F_M),iconCls:'remove',scope:this,handler:function(){
				var r = sm.getSelections();
				if(r){
					for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');store.remove(r[i]);}
					this.reCalculate();
				}}},'-',
			{text:C_GEN_BL,iconCls:'gen',scope:this,hidden:p.get('consBizClass')==BC_E,
			   	menu: new Ext.menu.Menu({items: [
			   		{text:p.get('consBizType')==BT_A?'MAWB':'MB/L',scope:this,handler:this.addMBl},
			   		{text:p.get('consBizType')==BT_A?'HAWB':'HB/L',scope:this,handler:this.addHBl}]})
				},
			{text:C_GEN_CUDE,iconCls:'gen',scope:this,handler:this.addCude},'-',
			{text:C_EXP_CONS,iconCls:'gen',scope:this,handler:this.genCons},'-',
			{text:C_PACKING_LIST,iconCls:'grid',hidden:true,disabled:false,scope:this,handler:this.showPali}
			]
	});
};
Ext.extend(Fos.CargoGrid, Ext.grid.EditorGridPanel);

Fos.ContainerGrid = function(p,store) {
	var checkSOC = new Ext.grid.CheckColumn({header: "SOC",dataIndex:'contSocFlag',width:55});
	var checkPOF = new Ext.grid.CheckColumn({header: "Part Of",dataIndex:'contPartOfFlag',width:55});
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var c1={header:C_COTY,dataIndex:'cotyId',width:60,renderer:getCOTY,
			editor:new Ext.form.ComboBox({displayField:'cotyCode',valueField:'cotyId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOTY_S()})};
	var c2={header:C_QUANTITY,dataIndex:'contNum',width:60,editor:new Ext.form.NumberField({})};
	var c3={header:C_FL,dataIndex:'contFl',width:40,
			editor:new Ext.form.ComboBox({displayField:'CODE',valueField:'CODE',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:FL_S})};
    var c4={header:C_M_CONS_NO,dataIndex:'contMConsNo',editor:new Ext.form.TextField()};
    var c5={header:C_PACK,hidden:true,dataIndex:'packId',renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S()})};
    var c6={header:C_PACKAGES,hidden:true,dataIndex:'contPackageNum',width:60,editor:new Ext.form.NumberField({})};
    var c7={header:C_GW+C_KGS,hidden:true,dataIndex:'contGrossWeight',width:60,editor:new Ext.form.NumberField({})};
    var c8={header:C_CBM,hidden:true,dataIndex:'contMeasurement',width:60,editor:new Ext.form.NumberField({})};
    var c9={header:C_CARGO_NAME_EN,hidden:true,dataIndex:'contCargoNameEn',editor:new Ext.form.TextField()};
    var c10={header:C_CARGO_NAME_EN,hidden:true,dataIndex:'contCargoNameEn',editor:new Ext.form.TextField()};
    var c11={header:C_REMARKS,dataIndex:'contRemarks',editor:new Ext.form.TextField({})};	
	var c12={header:C_CONT_NO,dataIndex:'contNo',validator:checkContainerNo,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:'集装箱编码格式不正确，前四位应为字母，后七位为数字，请重新输入！'})};
	var c13={header:C_SEAL_NO,dataIndex:'contSealNo',editor:new Ext.form.TextField()};
	var cm=new Ext.grid.ColumnModel({columns:p.get('consBizClass')==BC_I?[sm,c1,c2,c12,c13,c3,checkSOC,c5,c6,c7,c8,c9,c10,c11]:
		[sm,c1,c2,c3,checkSOC,checkPOF,c4,c5,c6,c7,c8,c9,c10,c11],defaults:{sortable:true,width:100}});
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CONS;	
	
	Fos.ContainerGrid.superclass.constructor.call(this, { 
	id:'G_CONT_EXP'+p.get('id'),border:true,plugins:[checkSOC,checkPOF],autoScroll:true,clicksToEdit:1,height:400,
    store: store,sm:sm,cm:cm,
    tbar:[{text:C_ADD,iconCls:'add',disabled:NR(m+F_M),scope:this,handler:function(){
			var c = new FContainer({id:GGUID(),contId:'0',contNum:1,
				contNo:'',contSealNo:'',contSealNo2:'',contSealNo3:'',
			contPreFlag:p.get('consBizClass')==BC_I?'N':'Y',
			consId:p.get('consId'),consNo:p.get('consNo'),
			contMConsNo:'',contPackageNum:'',contGrossWeight:'',contMeasurement:'',
			contCargoNameEn:p.get('consCargoNameEn'),
			contCargoNameCn:p.get('consCargoNameCn'),
			contRemarks:'',			
			cotyId:'',contFl:p.get('consShipType')==ST_L?ST_L:ST_F,packId:'',contSocFlag:0,
			contPartOfFlag:p.get('consShipType')==ST_L?1:0,version:'0',rowAction:'N'});
        		store.insert(0,c);this.startEditing(0, 1);}},'-',
		{text:C_REMOVE,iconCls:'remove',disabled:NR(m+F_M),scope:this,handler:function(){FOS_REMOVE(sm,store);}}
		]
	});
};
Ext.extend(Fos.ContainerGrid, Ext.grid.EditorGridPanel);

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
	id:'T_SPLIT_'+p.get('id'),title:C_SWITCH+'(F10)',header:false,deferredRender:false,autoScroll:true,
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
         		items: [{fieldLabel:C_WAREHOUSE,tabIndex:19,name:'doWarehouseName',store:getCS(),enableKeyEvents:true,
         			xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',
         			tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',selectOnFocus:true,anchor:'95%',
					listeners:{scope:this,
					blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('doWarehouseId','');p.set('doWarehouseName','');}},
					select:function(c,r,i){
						this.find('name','doWarehouseContact')[0].setValue(r.get('custContact'));
						this.find('name','doWarehouseTel')[0].setValue(r.get('custTel'));
						this.find('name','doWarehouseAddress')[0].setValue(r.get('custAddress'));
						var b =this.doGrid.getSelectionModel().getSelected();
						if(b){
							b.set('doWarehouseId',r.get('custId'));
							b.set('doWarehouseContact',r.get('custContact'));
							b.set('doWarehouseName',r.get('custNameCn'));
							b.set('doWarehouseTel',r.get('custTel'));
							b.set('doWarehouseAddress',r.get('custAddress'));
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

Fos.InspectionTab = function(p) {
	this.sel=GSEL;
	this.store = GS('INSP_Q','FInspection',FInspection,'inspId','DESC','','','inspId',false);
	this.store.load({params:{consId:p.get('consId')}});	
	var re = {scope:this,
		rowselect:function(sm,row,r){
			if(this.sel!=r.get('id')){
				this.sel=r.get('id');this.getForm().reset();
				this.getForm().loadRecord(r);this.updateToolBar();}},
		rowdeselect:function(sm,row,r){
			if(this.getForm().isDirty()){r.beginEdit();this.getForm().updateRecord(r);r.endEdit();}
		}
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_INSP_BILL_NO,dataIndex:'inspNo'},
	{header:C_INSP_AGENCY,dataIndex:'inspVendorName',width:150},
	{header:C_INSP_VENDOR_RN,dataIndex:'inspRefNo'},
	{header:C_INSP_DATE,dataIndex:'inspDate',renderer:formatDate},
	{header:C_STATUS,dataIndex:'inspStatus',renderer:getINSPST}
	],defaults:{sortable:true,width:100}});
	this.inspGrid=new Ext.grid.GridPanel({title:C_INSP_BILL_LIST,border:true,autoScroll:true,height:150,store:this.store,sm:sm,cm:cm});
    this.addInsp = function(){
		var rid=GGUID();
    	var b = new FInspection({id:rid,inspId:rid,inspVendorId:'',inspNo:'',inspRefNo:'',
			consId:p.get('consId'),consNo:p.get('consNo'),inspVendorContact:'',inspVendorTel:'',
			inspHsNo:'',inspShipperCn:'',inspConsigneeCn:'',inspMadeIn:'',inspValue:'',
			inspCreditNo:'',inspContractNo:'',inspTradeType:'',inspCargoAddress:'',inspUsage:'',
			inspCertificateNo:'',inspClaimDate:'',inspSpecialTerm:'',inspReceiveDate:'',inspReceiver:'',
			inspDate:new Date(),inspShipperEn:p.get('consShipper'),inspConsigneeEn:p.get('consConsignee'),					
			inspCargoName:p.get('consCargoDesc'),inspNum:p.get('consCargoGrossWeight'),
			inspPackages:p.get('consCargoPackages'),inspConveyance:p.get('vessName')+' '+p.get('voyaName'),
			inspContractNo:p.get('consTradeContractNo'),inspShippingDate:p.get('consLoadDate'),
			inspTradeCountry:getCOUN(p.get('consTradeCountry')),inspPol:p.get('consPolEn'),inspPod:p.get('consPodEn'),
			inspContainerInfo:p.get('consContainersInfo'),inspMarks:p.get('consCargoMarks'),
			inspStatus:'0',version:'0',rowAction:'N'});
      	this.store.insert(0,b);b.set('rowAction','N');
		this.inspGrid.getSelectionModel().selectFirstRow();
    };
	this.removeInsp = function(){
		var b =this.inspGrid.getSelectionModel().getSelected();
		if(b){
	    	if(b.get('inspStatus')!=0) XMG.alert(SYS,M_INSP_CONFIRMED);
	    	else{
	    		b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
	    		this.store.remove(b);this.getForm().reset();
	    	}
    	}
	};
	this.save = function(){
		this.inspGrid.stopEditing();		
		var b =this.inspGrid.getSelectionModel().getSelected();
		if(b){b.beginEdit();this.getForm().updateRecord(b);b.endEdit();};
		var xml='';
		var a =this.store.getModifiedRecords();
		if(a.length>0){xml = ATX(a,'FInspection',FInspection);};		
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'INSP_S'},
			success: function(res){
				var a = XTRA(res.responseXML,'FInspection',FInspection);FOSU(this.store,a,FInspection);
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
		}
	};
	this.expExcel=function(){
		var b = this.inspGrid.getSelectionModel().getSelected();
		if(b){
			EXPC('INSP','&inspId='+b.get('inspId'));
		}
	};
	this.expEmail=function(){
		var b = this.inspGrid.getSelectionModel().getSelected();
		if(b){
				var to='',cc='',sub=C_INSP_BILL;
				var msg='';
				EXPM(to,cc,sub,msg,'INSP','inspId='+b.get('inspId'));
		}
	};
	this.updateStatus=function(s){
    	var b = this.inspGrid.getSelectionModel().getSelected();
    	if(b){
	    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'INSP_U',consId:b.get('consId'),inspId:b.get('inspId'),inspStatus:s},
				success: function(r){b.set('inspStatus',s);this.updateToolBar();XMG.alert(SYS,M_S);},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
			});
		}
    };
    var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_INSP;
    this.updateToolBar=function(){
    	var b = this.inspGrid.getSelectionModel().getSelected();
    	var tb= this.getTopToolbar();
    	var s=b.get('inspStatus');
    	if(b){
    		tb.getComponent('TB_B').setDisabled(NR(m+F_R)||s!=0);
    		tb.getComponent('TB_C').setDisabled(NR(m+F_M)||s!=0);
    		tb.getComponent('TB_D').setDisabled(NR(m+F_M)||s!=0);
    		tb.getComponent('TB_E').setDisabled(NR(m+F_M)||s!=1);
		}
    };
    new Ext.KeyMap(Ext.getDoc(), {
		key:'nrsbwe',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_INSP_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addInsp();break;
					case Ext.EventObject.R:
						if(!NR(m+F_R)) this.removeInsp();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					case Ext.EventObject.B:
						if(!NR(m+F_M)) this.updateStatus('1');break;
					case Ext.EventObject.W:
						if(!NR(m+F_M)) this.updateStatus('2');break;
					case Ext.EventObject.E:
						if(!NR(m+F_M)) this.expExcel();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	Fos.InspectionTab.superclass.constructor.call(this, { 
	id:'T_INSP_'+p.get('id'),title:C_SR_INSP+'(F8)',header:false,deferredRender:false,autoScroll:true,	
	labelAlign:'right',labelWidth:60,bodyStyle:'padding:0px 0px 10px',border:true,trackResetOnLoad:false,
	tbar:[{text:C_ADD+'(N)',itemId:'TB_A',disabled:NR(m+F_M),iconCls:'add',scope:this,handler:this.addInsp},'-',
	{text:C_REMOVE+'(R)',itemId:'TB_B',disabled:NR(m+F_R),iconCls:'remove',scope:this,handler:this.removeInsp},'-',
	{text:C_SAVE+'(S)',itemId:'TB_C',disabled:NR(m+F_M),iconCls:'save',scope:this,handler:this.save},'-',
	{text:C_APPLY+'(B)',itemId:'TB_D',disabled:NR(m+F_M),iconCls:'docpass',scope:this,handler:function(){this.updateStatus('1');}},'-',
	{text:C_END+'(W)',itemId:'TB_E',disabled:NR(m+F_M),iconCls:'pass',scope:this,handler:function(){this.updateStatus('2');}},'-',	
	{text:C_EXPORT+'(E)',disabled:NR(m+F_E),iconCls:'print',scope:this,
				menu: {items: [
		   		{text:C_INSP_BILL,menu:{items:[
		   			{text:'Excel',scope:this,handler:this.expExcel},
		   			{text:C_EMAIL,scope:this,handler:this.expEmail},
		   			{text:C_FAX,scope:this,handler:function(){}}]}}
		   		]}},'->'
	],
	items: [{layout:'fit',border:false,collapsible:true,items:[this.inspGrid]},
            {layout:'column',title:C_INSP_BILL_INFO,layoutConfig: {columns:4},deferredRender:false,collapsible:true,
			items: [
			{columnWidth:.5,layout:'form',labelWidth:100,border:false,items:[
				{fieldLabel:C_INSP_AGENCY,name:'inspVendorName',store:getCS(),enableKeyEvents:true,
				xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
					listeners:{scope:this,
					blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('inspVendorId','');p.set('inspVendorName','');}},
					select:function(c,r,i){
						this.find('name','inspVendorContact')[0].setValue(r.get('custContact'));
						this.find('name','inspVendorTel')[0].setValue(r.get('custTel'));
						var b =this.inspGrid.getSelectionModel().getSelected();
						b.set('inspVendorId',r.get('custId'));
					},
					keydown:{fn:function(f,e){LC(f,e,'custInspectionFlag');},buffer:BF}}}]},
			{columnWidth:.5,layout:'form',border:false,trackResetOnLoad:true,items:[
				{fieldLabel:C_NO,name:'inspNo',xtype:'textfield',anchor:'95%'}]},
			{columnWidth:.25,layout:'form',labelWidth:100,border:false,items:[
				{fieldLabel:C_INSP_VENDOR_RN,name:'inspRefNo',xtype:'textfield',anchor:'95%'}]},
			{columnWidth:.25,layout:'form',border:false,trackResetOnLoad:true,items:[
				{fieldLabel:C_CONTACT,name:'inspVendorContact',xtype:'textfield',anchor:'95%'}]},
			{columnWidth:.25,layout:'form',border:false,trackResetOnLoad:true,items:[
				{fieldLabel:C_TEL,name:'inspVendorTel',xtype:'textfield',anchor:'95%'}]},
			{columnWidth:.25,layout:'form',border:false,items:[
				{fieldLabel:C_INSP_DATE,name:'inspDate',xtype:'datefield',format:DATEF,anchor:'92%'}]},
			{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[
				{fieldLabel:C_SHIPPER_CN,name:'inspShipperCn',xtype:'textfield',anchor:'95%'}]},
			{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[
				{fieldLabel:C_EN,name:'inspShipperEn',xtype:'textfield',anchor:'95%'}]},
			{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[
				{fieldLabel:C_CONSIGNEE_CN,name:'inspConsigneeCn',xtype:'textfield',anchor:'95%'}]},
			{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[
				{fieldLabel:C_EN,name:'inspConsigneeEn',xtype:'textfield',anchor:'95%'}]},
						
			{columnWidth:.3,layout: 'form',border :false,labelAlign:'top',
                items: [{fieldLabel:C_CARGO_NAME_CN_EN,name:'inspCargoName',xtype:'textarea',anchor:'95%'}]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_HS_CODE,name:'inspHsNo',xtype:'textarea',anchor:'95%'}]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_MADE_IN,name:'inspMadeIn',xtype:'textarea',anchor:'95%'}]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_QUANTITY_WEIGHT,name:'inspNum',xtype:'textarea',anchor:'95%'}]},
            {columnWidth:.1,layout: 'form',border : false,labelAlign:'top',
                items: [{fieldLabel:C_CARGO_VALUE,name:'inspValue',xtype:'textarea',anchor:'95%'}]},
            {columnWidth:.3,layout: 'form',labelAlign:'top',labelWidth:85,border:false,
                items: [{fieldLabel:C_PACK_QUANTITY,name:'inspPackages',xtype:'textarea',anchor:'95%'}]},
            
			{columnWidth:.33,layout:'form',labelWidth:100,border:false,items:[
				{fieldLabel:C_CONVEYANCE,name:'inspConveyance',xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:C_TRTY,name:'inspTradeType',store:getTRTY_S(),xtype:'combo',displayField:'trtyName',valueField:'trtyName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:C_CARGO_ADDRESS,name:'inspCargoAddress',xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,trackResetOnLoad:true,items:[
				{fieldLabel:C_CONTRACT_NO,name:'inspContractNo',xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:C_CREDIT_NO,name:'inspCreditNo',xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:C_USAG,name:'inspUsage',store:getUSAG_S(),xtype:'combo',displayField:'usagName',valueField:'usagName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:p.get('consBizClass')==BC_E?C_CARGO_DELIVERY_DATE:C_CARGO_DISCHARGE_DATE,name:'inspShippingDate',xtype:'datefield',format:DATEF,anchor:'95%'}]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:p.get('consBizClass')==BC_E?C_COUNTRY_TO:C_COUNTRY_FROM,name:'inspTradeCountry',store:getCOUN_S(),xtype:'combo',displayField:'counNameEn',valueField:'counNameEn',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:C_CERTIFICATE_NO,name:'inspCertificateNo',xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:C_PORT_FROM,name:'inspPol',xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:p.get('consBizClass')==BC_E?C_PORT_TO:C_PORT_IN,name:'inspPod',xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
				p.get('consBizClass')==BC_E?{fieldLabel:C_REGISTER_NO,name:'inspRegisterNo',xtype:'textfield',anchor:'95%'}:
				{fieldLabel:C_CLAIM_DATE,name:'inspClaimDate',xtype:'datefield',format:DATEF,anchor:'95%'}]},
            {columnWidth:.99,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:C_CONT_SPEC_NO,name:'inspContainerInfo',xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.50,layout:'form',labelWidth:100,border : false,labelAlign:'top',items:[
				{fieldLabel:C_INSP_SPECIAL_TERM,name:'inspSpecialTerm',xtype:'textarea',anchor:'95%'}]},
            {columnWidth:.50,layout:'form',labelWidth:100,border : false,labelAlign:'top',items:[
				{fieldLabel:C_MARKS_NO,name:'inspMarks',xtype:'textarea',anchor:'95%'}]},
            {columnWidth:.25,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:C_RECEIVE_DATE,name:'inspReceiveDate',xtype:'datefield',format:DATEF,anchor:'92%'}]},
            {columnWidth:.25,layout:'form',labelWidth:100,border : false,items:[
				{fieldLabel:C_RECEIVER,name:'inspReceiver',xtype:'textfield',anchor:'95%'}]}
            ]}
		]
	});
};
Ext.extend(Fos.InspectionTab, Ext.FormPanel);

Fos.CustomsTab = function(p) {
	this.sel =GSEL;
	this.store = GS('CUDE_Q','FCustomsDeclaration',FCustomsDeclaration,'cudeId','DESC','','','cudeId',false);
	this.store.load({params:{consId:p.get('consId')}});	
	this.entryStore = GS('CUEN_Q','FCustomsEntry',FCustomsEntry,'cuenId','DESC','','S_CUEN','cuenId');
	this.entryStore.load({params:{consId:p.get('consId')}});	
	var re = {scope:this,
		rowselect:function(sm,row,r){
			if(this.sel!=r.get('cudeId')){
				this.sel=r.get('cudeId');
				this.getForm().reset();
				this.getForm().loadRecord(r);				
				this.find('name','cudeCustomsNo')[0].setValue(r.get('cudeCustomsNo'));
				this.find('name','cudeDocNum')[0].setValue(r.get('cudeDocNum'));
				this.find('name','cudeDocSendDate')[0].setValue(r.get('cudeDocSendDate'));
				this.find('name','cudeDocRecvDate')[0].setValue(r.get('cudeDocRecvDate'));
				this.find('name','cudeTransitedFlag')[0].setValue(r.get('cudeTransitedFlag'));
				this.find('name','cudeRefuncDate')[0].setValue(r.get('cudeRefuncDate'));
				this.find('name','cudeRefundFlag')[0].setValue(r.get('cudeRefundFlag'));
				this.find('name','cudeDocColor')[0].setValue(r.get('cudeDocColor'));
				this.find('name','cudeReleaseDate')[0].setValue(r.get('cudeReleaseDate'));
				this.find('name','cudeInspectionFlag')[0].setValue(r.get('cudeInspectionFlag'));
				this.find('name','cudeRefundDocNum')[0].setValue(r.get('cudeRefundDocNum'));
				this.find('name','cudeShutoutDate')[0].setValue(r.get('cudeShutoutDate'));
				this.find('name','cudeOpenFlag')[0].setValue(r.get('cudeOpenFlag'));
				this.find('name','cudeTaxLevy')[0].setValue(r.get('cudeTaxLevy'));
				this.find('name','cudeRemarks')[0].setValue(r.get('cudeRemarks'));
				this.find('name','cudeDeclarent')[0].setValue(r.get('cudeDeclarent'));
				var s = this.entryGrid.getStore();
				s.removeAll();
				var a = this.entryStore.getRange();
				for(var i=0;i<a.length;i++){
					if(a[i].get('cudeId')==this.sel && a[i].get('rowAction')!='D' && a[i].get('rowAction')!='R') 
						s.add(a[i]);
				};
				this.updateToolBar();
			}
		},
		rowdeselect:function(sm,row,r){
			if(this.getForm().isDirty()){r.beginEdit();this.getForm().updateRecord(r);r.endEdit();}
		}
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_NO,dataIndex:'cudeId'},
	{header:C_CUSTOM_AGENCY,dataIndex:'cudeVendorName'},
	{header:C_CONVEYANCE_S,dataIndex:'cudeConveyance'},
	{header:C_TRAFFIC_NO,dataIndex:'cudeBlNo'},
	{header:C_DECLARE_DATE,dataIndex:'cudeDeclarDate',renderer:formatDate,width:150},
	{header:C_PRE_NO,dataIndex:'cudePreNo'},
	{header:C_CUSTOMS_NO,dataIndex:'cudeCustomsNo'},
	{header:C_RECORD_NO,dataIndex:'cudeRecordNo'},
	{header:C_STATUS,dataIndex:'cudeStatus',renderer:getCDST}
	],defaults:{sortable:true,width:100}});
	this.grid = new Ext.grid.GridPanel({title:C_CUST_LIST,border:true,autoScroll:true,collapsible:true,height:150,store:this.store,sm:sm,cm:cm});
	
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_ITEM_NO,dataIndex:'cuenNo',width:50,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_MANU_NO,dataIndex:'cuenManuNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CARGO_CODE,dataIndex:'cuenCargoNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_GOODS_NAME,dataIndex:'cuenCargoNameCn',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CARGO_NAME_EN,dataIndex:'cuenCargoNameEn',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_SPEC,dataIndex:'cuenCargoSpec',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_QUANTITY,dataIndex:'cuenCargoNum',width:80,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_UNIT,dataIndex:'cuenCargoUnit',width:80,editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
        mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_S()})},
	{header:C_COUNTRY_DESTINATION,dataIndex:'cuenCountry',renderer:getCOUN,
			editor:new Ext.form.ComboBox({displayField:'counNameCn',valueField:'counCode',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOUN_S()})},
	{header:C_UNIT_PRICE,dataIndex:'cuenUnitPrice',width:80,align:'right',renderer:numRender,editor:new Ext.form.NumberField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_TOTAL_PRICE,dataIndex:'cuenTotalPrice',width:80,align:'right',renderer:numRender,editor:new Ext.form.NumberField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CURRENCY,dataIndex:'currCode',width:60,editor:new Ext.form.TextField()},
	{header:C_LEVY,dataIndex:'cuenLevyType',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_VERSION,dataIndex:'cuenVersion',width:80,editor:new Ext.form.TextField()}
	],defaults:{sortable:true,width:100}});
	this.entryGrid = new Ext.grid.EditorGridPanel({header:false,border:false,autoScroll:true,height:250,collapsible:true,sm:sm2,cm:cm2,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'cuenId',record:'FCustomsEntry'},FCustomsEntry),sortInfo:{field:'cuenId',direction:'ASC'}}),
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:function(){
			var r = this.grid.getSelectionModel().getSelected();
			if(r){
				var rid=GGUID();
				var t = new FCustomsEntry({id:rid,cuenId:rid,cuenNo:'',cudeId:r.get('cudeId'),consId:r.get('consId'),					
					cuenCargoNo:'',cuenManuNo:'',cuenCargoNameEn:'',cuenCargoNameCn:'',cuenCargoSpec:'',
					cuenCargoNum:'',cuenCargoUnit:'',cuenCountry:'',cuenUnitPrice:'',cuenVersion:1,
					cuenTotalPrice:'',currCode:'USD',cuenLevyType:'',cuenRemarks:'',version:0});
				this.entryStore.add(t);t.set('rowAction','N');
				this.entryGrid.getStore().insert(0,t);this.entryGrid.startEditing(0,1);
			}}},'-',
			{text:C_REMOVE,iconCls:'remove',scope:this,handler:function(){
				var r = this.entryGrid.getSelectionModel().getSelections();
				for(var i=0;i<r.length;i++){
					r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');				
					this.entryGrid.getStore().remove(r[i]);
				}
			}
		}]
	});	
	var newCude=function(){
		var rid=GGUID();
		var b = new FCustomsDeclaration({id:rid,cudeId:rid,cudeNo:'',consId:p.get('consId'),consNo:p.get('consNo'),
			consMasterId:p.get('consMasterId'),consMasterNo:p.get('consMasterNo'),
			cudeVendorId:'',cudeVendorName:'',cudeVendorContact:p.get('consMasterNo'),cudeVendorTel:'',cudePreNo:'',cudeCustomsNo:'',
			cudeRecordNo:'',tratCode:'',trtyCode:'',letyCode:'',exseCode:'',usagId:'',cudeCertificateNo:'',
			cudeLevyPercent:'',cudeApprovalNo:'',consContractNo:p.get('consContractNo'),trteCode:'',cudeFreight:'',cudeInsurance:'',
			cudeCharge:'',cudeManu:'',cudeTaxLevy:'',cudeDeclarant:'',cudeCreateDate:new Date(),
			cudeDocSendDate:'',cudeDocRecvDate:'',cudeRefundDate:'',cudeReleaseDate:'',cudeShutoutDate:'',
			cudeDocNum:'',cudeDocColor:'',cudeRefundDocNum:'',cudeTransitedFlag:'',cudeRefundFlag:'',cudeInspectFlag:'',cudeOpenFlag:'',
			consBizClass:p.get('consBizClass'),cudePortDomestic:p.get('consBizClass')==BC_E?p.get('consPolEn'):p.get('consPodEn'),
			cudeCustomer:p.get('custName'),cudeShipper:'',
			cudeEntryDate:p.get('consLoadDate'),cudeDeclarDate:new Date(),
			cudeGrossWeight:p.get('consBizType')==BT_B?p.get('consTotalGrossWeight')*1000:p.get('consTotalGrossWeight'),
			cudeNetWeight:p.get('consBizType')==BT_B?p.get('consTotalNetWeight')*1000:p.get('consTotalNetWeight'),
			cudePlace:p.get('consPolEn'),packCode:getPACK(p.get('packId')),
			cudePackageNum:p.get('consTotalPackages'),
			cudeConveyance:p.get('vessName')+' '+p.get('voyaName'),
			cudeBlNo:p.get('consMblNo'),
			cudeContractNo:p.get('consTradeContractNo'),
			cudeCountry:getCOUN(p.get('consTradeCountry')),cudePortForeign:p.get('consBizClass')==BC_E?p.get('consPodEn'):p.get('consPolEn'),
			cudeContainerNo:p.get('consContainerNo'),
			cudeStatus:'1',cudeDocStatus:'0',version:'0'});
		return b;
	};
	this.addCude = function(){
		var r=newCude();
		this.store.insert(0,r);r.set('rowAction','N');
		this.grid.getSelectionModel().selectFirstRow();
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CUST_X',custId:p.get('consCargoOwner')},
				success: function(res,o){
					var a = XTRA(res.responseXML,'CCustomer',CCustomer);
					if(a[0].get('attr1')!=''){
						this.find('name','cudeShipper')[0].setValue(a[0].get('attr1'));
					}
				}
			});
	};
	this.addCudeByCargo=function(b){
		var r=newCude();
		this.store.insert(0,r);r.set('rowAction','N');
		r.set('cudeGrossWeight',p.get('consBizType')==BT_B?b.get('cargGrossWeight')*1000:b.get('cargGrossWeight'));
		r.set('cudeNetWeight',p.get('consBizType')==BT_B?b.get('cargNetWeight')*1000:b.get('cargNetWeight'));
		r.set('cudePackageNum',b.get('cargPackageNum'));
		r.set('packCode',b.get('packName'));
		this.grid.getSelectionModel().selectFirstRow();		
		var rid=GGUID();
		var t = new FCustomsEntry({id:rid,cuenId:rid,cuenNo:'1',cudeId:r.get('cudeId'),consId:r.get('consId'),
			cuenCargoNo:b.get('cargNo'),cuenManuNo:b.get('cargManuNo'),
			cuenCargoNameCn:b.get('cargNameCn'),cuenCargoSpec:b.get('cargSpec'),cuenCargoNum:b.get('cargNetWeight'),
			cuenCargoUnit:b.get('unitName'),cuenCountry:'',cuenUnitPrice:'',
			cuenTotalPrice:'',currCode:'USD',cuenLevyType:'',cuenRemarks:'',version:'0'});
		this.entryStore.add(t);t.set('rowAction','N');
		this.entryGrid.getStore().insert(0,t);
	};
	this.removeCude = function(){
		var b =this.grid.getSelectionModel().getSelected();
		if(b){
	    	if(b.get('cudeStatus')!='1') XMG.alert(SYS,M_CUDE_CONFIRMED);
	    	else{
	    		b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
	    		this.store.remove(b);
	    		this.getForm().reset();
	    		var s = this.entryGrid.getStore();
				var a = s.getRange();
				for(var i=0;i<a.length;i++){
					a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
					s.remove(a[i]);
					this.entryStore.remove(a[i]);
				}
	    	}
    	}
	};	
	this.expExcel=function(){
		var b = this.grid.getSelectionModel().getSelected();
		if(b){
			EXPC('CUDE','&cudeId='+b.get('cudeId'));
		}
	};
	this.expEmail=function(){
		var b = this.grid.getSelectionModel().getSelected();
		if(b){			
				var to='',cc='',sub=C_CUST_BILL;
				var msg='';
				EXPM(to,cc,sub,msg,'CUDE','cudeId='+b.get('cudeId'));
		}
	};
	this.updateStatus=function(s){
    	var b = this.grid.getSelectionModel().getSelected();
    	if(b){
	    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CUDE_U',consId:b.get('consId'),cudeId:b.get('cudeId'),cudeStatus:s},
				success: function(r){b.set('cudeStatus',s);this.updateToolBar();XMG.alert(SYS,M_S);},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
			});
		}
    };
    var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CUDE;
    this.updateToolBar=function(){
    	var b = this.grid.getSelectionModel().getSelected();
    	var tb= this.getTopToolbar();
    	var s=b.get('cudeStatus');
    	if(b){
    		tb.getComponent('TB_B').setDisabled(NR(m+F_R)||s>1);
    		tb.getComponent('TB_C').setDisabled(NR(m+F_M)||s>1);
    		tb.getComponent('TB_D').setDisabled(NR(m+F_M)||s!=1);
    		tb.getComponent('TB_E').setDisabled(NR(m+F_M)||s!=2);
    		tb.getComponent('TB_F').setDisabled(NR(m+F_M)||s!=3);
		}
    };
    new Ext.KeyMap(Ext.getDoc(), {
		key:'ndsbpte',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_CUDE_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addCude();break;
					case Ext.EventObject.D:
						if(!NR(m+F_R)) this.removeCude();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					case Ext.EventObject.B:
						if(!NR(m+F_M)) this.updateStatus('2');break;
					case Ext.EventObject.P:
						if(!NR(m+F_M)) this.updateStatus('3');break;
					case Ext.EventObject.T:
						if(!NR(m+F_M)) this.updateStatus('4');break;
					case Ext.EventObject.E:
						if(!NR(m+F_M)) this.expExcel();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	this.save = function(){
		this.grid.stopEditing();
		this.entryGrid.stopEditing();
		var b =this.grid.getSelectionModel().getSelected();
		if(b){
			b.beginEdit();
			var fs = b.fields;
	        fs.each(function(f){
	            var field = this.getForm().findField(f.name);
	            if(field){
	                b.set(f.name, field.getValue());
	            }
	        }, this);
	        b.endEdit();
        }
        
		//if(b){b.beginEdit();this.getForm().updateRecord(b);b.endEdit();}
		
		var xml='';
		var a =this.store.getModifiedRecords();
		for(var i=0;i<a.length;i++){
                if(a[i].get('rowAction')!='R'&&a[i].get('rowAction')!='D'){
                	if(a[i].get('cudeVendorId')==''){XMG.alert(SYS,M_CUDE_VENDOR_REQIRED);return;}
                	if(a[i].get('cudePortDomestic')==''){XMG.alert(SYS,p.get('consBizClass')==BC_E?C_PORT_EX_REQIRED:C_PORT_IM_REQIRED);return;}
                	if(a[i].get('cudeCustomer')==''){XMG.alert(SYS,C_BIZ_COMPANY_REQIRED);return;}
                	if(a[i].get('tratCode')==''){XMG.alert(SYS,C_TRAT_REQIRED);return;}
                	if(a[i].get('trtyCode')==''){XMG.alert(SYS,C_TRTY_REQIRED);return;}
                	if(a[i].get('cudeCountry')==''){XMG.alert(SYS,p.get('consBizClass')==BC_E?C_COD_A_REQIRED:C_COL_A_REQIRED);return;}
                	if(a[i].get('trteCode')==''){XMG.alert(SYS,C_CUDE_TRTE_REQIRED);return;}
                	if(a[i].get('cudePackageNum')==''){XMG.alert(SYS,C_PACKAGES_REQIRED);return;}
                	if(a[i].get('cudePortForeign')==''){XMG.alert(SYS,p.get('consBizClass')==BC_E?C_POD_A_REQIRED:C_POL_REQIRED);return;}
                	if(a[i].get('packCode')==''){XMG.alert(SYS,C_PACK_REQIRED);return;}
                	if(p.get('consBizClass')==BC_E&&a[i].get('exseCode')==''){XMG.alert(SYS,C_EXSE_REQIRED);return;}
                	if(a[i].get('cudePlace')==''){XMG.alert(SYS,p.get('consBizClass')==BC_E?C_ORI_PLACE_D_REQIRED:C_DES_PLACE_D_REQIRED);return;}
                	if(a[i].get('cudeGrossWeight')==''){XMG.alert(SYS,C_GW_S_REQIRED);return;}
                	if(a[i].get('cudeNetWeight')==''){XMG.alert(SYS,C_MW_S_REQIRED);return;}
               }
            }
		if(a.length>0){xml = ATX(a,'FCustomsDeclaration',FCustomsDeclaration);};
		
		var cc=[];
		var ca =this.entryStore.getRange();
		for(var i=0;i<ca.length;i++){if(ca[i].dirty) cc[cc.length]=ca[i];}
		if(cc.length>0){var x = ATX(cc,'FCustomsEntry',FCustomsEntry);xml=xml+x;};		
		
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CUDE_S'},
			success: function(res){
				var a = XTRA(res.responseXML,'FCustomsEntry',FCustomsEntry);
				var fields = FCustomsEntry.prototype.fields;
				var sa=this.entryStore.getRange();
				for(i=0;i<sa.length;i++){
					for(var j=0;j<a.length;j++){	
						if(sa[i].get('id')==a[j].get('id')){
							for(var k = 0;k < fields.length;k++){
								var f = fields.items[k];
								var fn=f.name;
								sa[i].set(fn,a[j].get(fn));
							}
							break;
						}
					}
				}
				this.entryStore.suspendEvents();
				this.entryStore.commitChanges();
				this.entryStore.resumeEvents();
				var b = XTRA(res.responseXML,'FCustomsDeclaration',FCustomsDeclaration);FOSU(this.store,b,FCustomsDeclaration);
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
		}
	};
	Fos.CustomsTab.superclass.constructor.call(this, { 
	id: "T_CUDE_" +p.get('id'),title:C_SR_CUDE+'(F9)',header:false,deferredRender:false,autoScroll:true,
	labelAlign:'right',labelWidth:80,border:false,trackResetOnLoad:false,
	tbar:[{text:C_ADD+'(N)',itemId:'TB_A',disabled:NR(m+F_M),iconCls:'add',scope:this,handler:this.addCude},'-',
	{text:C_REMOVE+'(D)',itemId:'TB_B',disabled:NR(m+F_R),iconCls:'remove',scope:this,handler:this.removeCude},'-',
	{text:C_SAVE+'(S)',itemId:'TB_C',disabled:NR(m+F_M),iconCls:'save',scope:this,handler:this.save},'-',
	{text:C_APPLY+'(B)',itemId:'TB_D',disabled:NR(m+F_M),iconCls:'docpass',scope:this,handler:function(){this.updateStatus('2');}},'-',
	{text:C_CUSTOMS_PASSED+'(P)',itemId:'TB_E',disabled:NR(m+F_M),iconCls:'pass',scope:this,handler:function(){this.updateStatus('3');}},'-',
	{text:C_CUSTOMS_EXIT+'(T)',itemId:'TB_F',disabled:NR(m+F_M),iconCls:'exit',scope:this,handler:function(){this.updateStatus('4');}},'-',
	{text:C_EXPORT+'(E)',disabled:NR(m+F_E),iconCls:'print',scope:this,
				menu: {items: [
		   		{text:C_CUST_BILL,menu:{items:[
		   			{text:'Excel',scope:this,handler:this.expExcel},
		   			{text:C_EMAIL,scope:this,handler:this.expEmail},
		   			{text:C_FAX,scope:this,handler:function(){}}]}}
		   		]}},'->'],
	items: [this.grid,
            {xtype:'tabpanel',height:600,plain:true,activeTab:0,listeners:{scope:this,tabchange:function(m,a){a.doLayout();}},
            	items:[{layout:'border',title:C_CUST_INFO,items:[
            	 {region:'north',height:300,title:C_CUST_INFO,collapsible:true,            	 
				items:[
				{layout:'column',border:false,items:[
				{columnWidth:.25,layout:'form',border:false,items:[
					{fieldLabel:C_CUSTOM_AGENCY,itemCls:'required',name:'cudeVendorName',store:getCS(),enableKeyEvents:true,
					tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
						listeners:{scope:this,
						blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('cudeVendorId','');p.set('cudeVendorName','');}},
						select:function(c,r,i){
							this.find('name','cudeVendorContact')[0].setValue(r.get('custContact'));
							this.find('name','cudeVendorTel')[0].setValue(r.get('custTel'));
							var b =this.grid.getSelectionModel().getSelected();
							b.set('cudeVendorId',r.get('custId'));
						},
						keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}},
					{fieldLabel:p.get('consBizClass')==BC_E?C_PORT_EX:C_PORT_IM,itemCls:'required',name:'cudePortDomestic',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_BIZ_COMPANY,name:'cudeCustomer',itemCls:'required',xtype:'textfield',anchor:'95%'},
					{fieldLabel:p.get('consBizClass')==BC_E?C_SHIPPER_COMPANY:C_CONSIGN_COMPANY,name:'cudeShipper',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_CERTIFICATE_NO,name:'cudeCertificateNo',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_APPROVAL_NO,name:'cudeApprovalNo',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_CONTRACT_NO_A,name:'consContractNo',itemCls:'needed',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_PRE_NO,name:'cudePreNo',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_CUDE_TYPE,name:'cudeType',xtype:'combo',value:p.get('cudeType'),store:CUTY_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}]},
				{columnWidth:.25,layout:'form',border:false,items:[
					{fieldLabel:C_CUDE_CONTACT,name:'cudeVendorContact',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_RECORD_NO,name:'cudeRecordNo',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_TRAT,itemCls:'required',name:'tratCode',store:getTRAT_S(),xtype:'combo',displayField:'tratName',valueField:'tratName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
					{fieldLabel:C_TRTY,itemCls:'required',name:'trtyCode',store:getTRTY_S(),xtype:'combo',displayField:'trtyName',valueField:'trtyName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
					{fieldLabel:p.get('consBizClass')==BC_E?C_COD_A:C_COL_A,itemCls:'required',name:'cudeCountry',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_CUDE_TRTE,name:'trteCode',itemCls:'required',store:getTRTE_S(),xtype:'combo',displayField:'trteName',valueField:'trteName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
					{fieldLabel:C_PACKAGES,name:'cudePackageNum',itemCls:'required',xtype:'textfield',anchor:'95%'},
					p.get('consBizClass')=='A'?{fieldLabel:C_MANUFACTURE,name:'cudeManu',xtype:'textfield',anchor:'95%'}:{fieldLabel:'用途',name:'usagId',store:getUSAG_S(),xtype:'combo',displayField:'usagName',valueField:'usagId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
					{fieldLabel:C_CUST_CUDE_CODE,name:'attr1',xtype:'textfield',anchor:'95%'}]},
				{columnWidth:.25,layout:'form',border : false,items:[
					{fieldLabel:C_CUDE_TEL,name:'cudeVendorTel',xtype:'textfield',anchor:'95%'},
					{fieldLabel:p.get('consBizClass')==BC_E?C_EX_DATE:C_IM_DATE,name:'cudeEntryDate',xtype:'datefield',format:DATEF,anchor:'95%'},
					{fieldLabel:C_CONVEYANCE_NAME,name:'cudeConveyance',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_LETY,name:'letyCode',store:getLETY_S(),xtype:'combo',displayField:'letyName',valueField:'letyName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
					{fieldLabel:p.get('consBizClass')==BC_E?C_POD_A:C_POL,itemCls:'required',name:'cudePortForeign',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_FREIGHT,name:'cudeFreight',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_PACK,name:'packCode',itemCls:'required',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_CHARGE,name:'cudeCharge',xtype:'textfield',anchor:'95%'}]},
				{columnWidth:.25,layout:'form',border : false,items:[
					{fieldLabel:C_CUSTOMS_NO,name:'cudeCustomsNo',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_DECLARE_DATE,name:'cudeDeclarDate',xtype:'datefield',format:DATEF,anchor:'95%'},
					{fieldLabel:C_TRAFFIC_NO,name:'cudeBlNo',xtype:'textfield',anchor:'95%'},
					p.get('consBizClass')==BC_E?{fieldLabel:C_EXSE,itemCls:'required',name:'exseCode',store:getEXSE_S(),xtype:'combo',displayField:'exseName',valueField:'exseName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}:
					{fieldLabel:C_LEVY_PERCENT,name:'cudeLevyPercent',xtype:'textfield',anchor:'95%'},
					{fieldLabel:p.get('consBizClass')==BC_E?C_ORI_PLACE_D:C_DES_PLACE_D,itemCls:'required',name:'cudePlace',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_INSURANCE_FEE,name:'cudeInsurance',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_GW_S+C_KGS,name:'cudeGrossWeight',itemCls:'required',xtype:'textfield',anchor:'95%'},
					{fieldLabel:C_MW_S+C_KGS,name:'cudeNetWeight',itemCls:'required',xtype:'textfield',anchor:'95%'}]}
				]},				
				{layout:'column',border:false,items:[
				{columnWidth:.5,layout:'form',border:false,items:[
					{fieldLabel:C_CONTAINER_NO,name:'cudeContainerNo',xtype:'textarea',anchor:'95%'}]},
				{columnWidth:.5,layout:'form',border:false,items:[
					{fieldLabel:C_MARKS_REMARKS,name:'cudeMarks',xtype:'textarea',anchor:'95%'}]}]}			
				]},
				{title:C_CUDE_CARGO_LIST,region:'center',layout:'fit',colapsable:true,items:[this.entryGrid]}]},
				{title:C_CUDE_RECORD,layout:'column',layoutConfig:{columns:4},deferredRender:false,items: [
				{columnWidth:.25,layout:'form',border:false,items:[
				{fieldLabel:C_DOC_SEND_DATE,name:'cudeDocSendDate',xtype:'datefield',format:DATEF,anchor:'95%'},
				{fieldLabel:C_DOC_BACK_DATE,name:'cudeDocRecvDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	            {fieldLabel:C_TRANSITED_FLAG,name:'cudeTransitedFlag',xtype:'checkbox',anchor:'95%'}]},
		         {columnWidth:.25,layout:'form',border:false,items:[
		            {fieldLabel:C_CUDE_DOC_NUN,name:'cudeDocNum',xtype:'numberfield',anchor:'95%'},
					{fieldLabel:C_REFUNC_DATE,name:'cudeRefuncDate',xtype:'datefield',format:DATEF,anchor:'95%'},
		            {fieldLabel:C_REFUND_FLAG,name:'cudeRefundFlag',xtype:'checkbox',anchor:'95%'}]},
		         {columnWidth:.25,layout:'form',border:false,items:[
					{fieldLabel:C_CUDE_DOC_COLOR,name:'cudeDocColor',xtype:'combo',store:DC_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
					{fieldLabel:C_CUDE_RELEASE_DATE,name:'cudeReleaseDate',xtype:'datefield',format:DATEF,anchor:'95%'},
		            {fieldLabel:C_INSPECTION_FLAG,name:'cudeInspectionFlag',xtype:'checkbox',anchor:'95%'}]},
		         {columnWidth:.25,layout:'form',border:false,items:[
		            {fieldLabel:C_REFUND_DOC_NUN,name:'cudeRefundDocNum',xtype:'numberfield',anchor:'95%'},
					{fieldLabel:C_SHUTOUT_DATE,name:'cudeShutoutDate',xtype:'datefield',format:DATEF,anchor:'95%'},
		            {fieldLabel:C_CUDE_OPEN_FLAG,name:'cudeOpenFlag',xtype:'checkbox',anchor:'95%'}]},
		         {columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:C_CUDE_TAX_LEVY,name:'cudeTaxLevy',xtype:'textarea',anchor:'95%'}]},
				 {columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:C_REMARKS,name:'cudeRemarks',xtype:'textarea',anchor:'95%'}]},
				 {columnWidth:.25,layout:'form',border:false,items:[{fieldLabel:C_DECLARENT,name:'cudeDeclarent',xtype:'textfield',anchor:'95%'}]}
				]}
			]}
		]
	});
};
Ext.extend(Fos.CustomsTab, Ext.FormPanel);

Fos.NumWin = function(T) {
    var frm = new Ext.form.FormPanel({labelWidth:100,bodyStyle:'padding:5px',items:[
        {fieldLabel:T,id:'NUM',xtype:'numberfield',anchor:'90%'}]
    });
    Fos.LenWin.superclass.constructor.call(this, {title:SYS,modal:true,width:300,
        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.NumWin,Ext.Window);
Fos.BLTab = function(p){
	this.sel = GSEL;	
	this.store = new Ext.data.GroupingStore({
   		url: SERVICE_URL+'?A=BL_Q',
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FBl'}, FBl),remoteSort:true,
    	sortInfo:{field:'blId', direction:'DESC'},
    	groupField:'blMBlNo'});    	
	if(p.get('rowAction')!='N'){
		if(p.get('consBizType')==BT_B&&p.get('consMasterFlag')==1)
			this.store.load({params:{mt:'JSON',consMasterId:p.get('consMasterId')}});	
		else
			this.store.load({params:{mt:'JSON',consId:p.get('consId')}});	
	}
    this.edit=function(){
    	var b = sm.getSelected();
    	if(b){
    		var win = new Fos.BlWin(p,b,this.store);    	
			win.show();
    	}
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
	var re = {scope:this,
		rowdblclick: function(grid, rowIndex, event){
			var b=grid.getSelectionModel().getSelected();
			var win = new Fos.BlWin(p,b,this.store);    	
			win.show();
			}
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false,scope:this}); 
	var mf =CHKCLM(C_BL_MERGE,'blMergeFlag');
	var sf =CHKCLM(C_BL_SPLIT,'blSplitFlag');
	var maf =CHKCLM(C_BL_MASTER,'blMasterFlag');
	var cm=new Ext.grid.ColumnModel({columns:[sm,maf,mf,sf,
	{header:C_BL_TYPE,dataIndex:'blType',width:40},
	{header:C_BL_NO,dataIndex:'blNo'},
	{header:C_M_BL_NO,dataIndex:'blMBlNo'},
	{header:C_CONS_NO,dataIndex:'consNo'},
	{header:C_CONTRACT_NO,dataIndex:'consTradeContractNo'},
	{header:C_BL_PACKAGES,width:80,dataIndex:"cargPackages",align:'right',render:rateRender,css:'font-weight:bold;'},
	{header:C_BL_GW,width:80,dataIndex:"cargGrossWeight",align:'right',renderer:rateRender,css:'font-weight:bold;'},
	{header:C_BL_CBM,width:80,dataIndex:"cargMeasurement",renderer:rateRender,align:'right',css:'font-weight:bold;'},
	{header:C_ISTY,dataIndex:'istyId',renderer:getISTY},
	{header:C_ISSUE_PLACE,dataIndex:'blIssuePlace'},
	{header:C_ISSUE_DATE,dataIndex:'blIssueDate',renderer:formatDate},
	{header:C_DOC_ORI_NUM,dataIndex:'blOriginalNum'},
	{header:C_STATUS,dataIndex:'blStatus',renderer:getBLST},
	{header:C_CREATE_BY,dataIndex:'createBy',renderer:getUSER},
	{header:C_BILL_DATE,dataIndex:'createTime',renderer:formatDateTime},
	{header:C_MODIFY_BY,dataIndex:'modifyBy',renderer:getUSER},
	{header:C_MODIFY_DATE,dataIndex:'modifyTime',renderer:formatDateTime}
	],defaults:{sortable:true,width:80}});	
	var newBl = function(t){
		var rid=GGUID();
		var bl = new FBl({id:rid,blId:rid,consId:p.get('consId'),consNo:p.get('consNo'),
		blType:t,blNo:t=='MB/L'?p.get('consMblNo'):p.get('consHblNo'),
		consBizClass:p.get('consBizClass'),consBizType:p.get('consBizType'),consShipType:p.get('consShipType'),
		custId:p.get('custId'),custName:p.get('custName'),
		consTradeContractNo:p.get('consTradeContractNo'),consChargeRemarks:p.get('consChargeRemarks'),
		blShipper:p.get('consShipper'),blConsignee:p.get('consConsignee'),blNotifyParty:p.get('consNotifyParty'),
		blNotifyParty2:p.get('consNotifyParty2'),blOverseaAgency:p.get('consNotifyParty2'),
		blPrecarriage:'',blCarrier:p.get('consCarrier'),blCarrierName:p.get('consCarrierName'),blVessel:p.get('vessName'),
		blVoyage:p.get('voyaName'),blPol:p.get('consPolEn'),blPod:p.get('consPodEn')+','+p.get('consTradeCountry'),blPot:p.get('consPotEn'),
		blLoadDate:p.get('consLoadDate'),blEtd:p.get('consEtd'),blEta:p.get('consEta'),
		blReceiptPlace:p.get('consReceiptPlace'),blDeliveryPlace:p.get('consDeliveryPlace'),
		blContainerNo:p.get('consContainerNo'),
		blPackages:p.get('consCargoPackages'),
		consMasterId:p.get('consMasterId'),consMasterNo:p.get('consMasterNo'),
		cargPackages:p.get('consTotalPackages'),cargGrossWeight:p.get('consTotalGrossWeight'),
		cargNetWeigth:p.get('consTotalNetWeight'),cargMeasurement:p.get('consTotalMeasurement'),
		fconId:p.get('fconId'),fconContractNo:p.get('consContractNo'),
		unitId:p.get('unitId'),unitName:p.get('unitCode'),
		packId:p.get('packId'),packName:p.get('packName'),
		blMergeFlag:0,blSplitFlag:0,blMasterFlag:1,
		blCargoDesc:p.get('consCargoDesc'),blGrossWeight:p.get('consCargoGrossWeight'),
		blMeasurement:p.get('consCargoMeasurement'),
		blTotalSay:'SAY TOTAL '+N2EW(p.get('consTotalPackages'))+' '+getPACK(p.get('packId'))+' ONLY',
		blPaymentTerm:p.get('pateName'),blPaidAt:p.get('consPaidAt'),blMarks:p.get('consCargoMarks'),
		blTransTerm:getTRAN(p.get('tranId')),blContainerInfo:p.get('consContainersInfo'),istyId:p.get('istyId'),
		blOriginalNum:N2EW(p.get('consOriginalBlNum')),blStatus:'1',version:'0',rowAction:'N'});
		return bl;
	};
	var reloadCons=function(){
		var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
		reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});					
		sc.load({params:{consId:p.get('consId')},callback:function(r,o,s){
			if(s&&r.length>0){
				var c=r[0];
				p.beginEdit();
				p.set('blCargoPackages',c.get('blCargoPackages'));
				p.set('blCargoGrossWeight',c.get('blCargoGrossWeight'));
				p.set('blCargoNetWeight',c.get('blCargoNetWeight'));
				p.set('blCargoMeasurement',c.get('blCargoMeasurement'));
				p.set('version',c.get('version'));	
				p.endEdit();
				var tc = T_MAIN.getComponent('C_'+p.get("id"));
				var t=tc.getComponent('T_BOOK_'+p.get("id"));
				t.find('name','blCargoPackages')[0].setValue(p.get('blCargoPackages'));
				t.find('name','blCargoGrossWeight')[0].setValue(p.get('blCargoGrossWeight'));
				t.find('name','blCargoNetWeight')[0].setValue(p.get('blCargoNetWeight'));
				t.find('name','blCargoMeasurement')[0].setValue(p.get('blCargoMeasurement'));
				XMG.alert(SYS,M_S);
			}    						
		},scope:this});
	};
	this.addMBl = function(){
		var b = newBl('MB/L');
		var win = new Fos.BlWin(p,b,this.store);    	
		win.show();
	};
	this.addHBl = function(t){
		var b = newBl('HB/L');
		var win = new Fos.BlWin(p,b,this.store);    	
		win.show();
	};
	this.merge=function(){
		var a=sm.getSelections();
		if(a.length<2){XMG.alert(SYS,M_NOT_LT_TWO_BL);return;}
		var md=false;
		for(var i=0;i<a.length;i++){
			if(a[i].get('blMergeFlag')==1){XMG.alert(SYS,M_BL_MERGED);return;}
		}		
		var xml=ATX(a,'FBl',FBl);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BL_M'},
			success: function(res){
				if(p.get('consBizType')==BT_B&&p.get('consMasterFlag')==1)
					this.store.reload({params:{mt:'JSON',consMasterId:p.get('consMasterId')}});
				else
					this.store.reload({params:{mt:'JSON',consId:p.get('consId')}});
				reloadCons();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
	};
	this.cancelMerge=function(){
		var r=sm.getSelected();
		if(r.get('blMergeFlag')!=1||r.get('blMasterFlag')!=1){XMG.alert(SYS,M_SEL_BL_MERGED);return;}
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BL_M_C',blId:r.get('blId')},
			success: function(res){
				if(p.get('consBizType')==BT_B&&p.get('consMasterFlag')==1)
					this.store.reload({params:{mt:'JSON',consMasterId:p.get('consMasterId')}});
				else
					this.store.reload({params:{mt:'JSON',consId:p.get('consId')}});
				reloadCons();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);}});
	};
	this.split=function(){
		var r=sm.getSelected();
		if(r.get('blMergeFlag')==1||r.get('blSplitFlag')==1){XMG.alert(SYS,M_BL_MERGED);return;}
		var w = new Fos.NumWin(C_SPLIT_NUM);			
		w.addButton({text:C_OK},function(){
			var n = w.findById('NUM').getValue();
			var a=[];
			for(var i=0;i<n;i++){
				var rid=GGUID();
				var bl=r.copy(rid);
				bl.set('id',rid);
				bl.set('blSplitFlag',1);
				bl.set('blMBlId',r.get('blId'));
				bl.set('blMBlNo',r.get('blNo'));
				bl.set('blMasterFlag',0);
				bl.set('blNo',r.get('blNo')+'-'+(i+1));
				bl.set('rowAction','N');
				
				if(i>0){
					bl.set('blPackages','');
					bl.set('blGrossWeight','');
					bl.set('blNetWeight','');
					bl.set('blMeasurement','');
					bl.set('cargPackages','');
					bl.set('cargGrossWeight','');
					bl.set('cargNetWeight','');
					bl.set('cargMeasurement','');
				}
				a[i]=bl;
			}
			r.set('blSplitFlag',1);
			r.set('blMasterFlag',1);
			r.set('blMBlId',r.get('blId'));
			r.set('blMBlNo',r.get('blNo'));
			a[a.length]=r;
			var xml=ATX(a,'FBl',FBl);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BL_S'},
			success: function(res){
				if(p.get('consBizType')==BT_B&&p.get('consMasterFlag')==1)
					this.store.reload({params:{mt:'JSON',consMasterId:p.get('consMasterId')}});
				else
					this.store.reload({params:{mt:'JSON',consId:p.get('consId')}});
				reloadCons();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
			w.close();
		},this);
		w.addButton({text:C_CANCEL},function(){w.close();},this);
		w.show();
	};
	this.cancelSplit=function(){
		var r=sm.getSelected();
		if(r.get('blSplitFlag')!=1||r.get('blMasterFlag')!=1){XMG.alert(SYS,M_SEL_BL_SPLIT);return;}
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BL_SP_C',blId:r.get('blId')},
			success: function(res){
				if(p.get('consBizType')==BT_B&&p.get('consMasterFlag')==1)
					this.store.reload({params:{mt:'JSON',consMasterId:p.get('consMasterId')}});
				else
					this.store.reload({params:{mt:'JSON',consId:p.get('consId')}});
				reloadCons();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);}});
	};
	this.addBlByCargo = function(t,c){
		var bl = newBl(t);
		this.store.insert(0,bl);
		bl.set('blNo','');		
		bl.set('blMarks',c.get('cargMarks'));
		bl.set('blPackages',''+c.get('cargPackageNum')+c.get('packName'));
		bl.set('blMeasurement',''+c.get('cargMeasurement')+'CBM');
		bl.set('blGrossWeight',''+c.get('cargGrossWeight')+(p.get('consBizType')=='C'?'KGS':'MT'));
		bl.set('cargPackages',c.get('cargPackageNum'));
		bl.set('cargGrossWeight',c.get('cargGrossWeight'));
		bl.set('cargMeasurement',c.get('cargMeasurement'));
		bl.set('cargNetWeight',c.get('cargNetWeight'));
		bl.set('unitId',c.get('unitId'));
		bl.set('unitName',c.get('unitName'));
		bl.set('packId',c.get('packId'));
		bl.set('packName',c.get('packName'));
		bl.set('rowAction','N');
		bl.set('blTotalSay','SAY TOTAL '+N2EW(c.get('cargPackageNum'))+' '+c.get('packName')+'ONLY');
		showBlWin(p,bl,store);
	};
	this.removeBl = function(){
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var b = false;
               	for(var i=0;i<a.length;i++){if(a[i].get('blStatus')!=1){b=true;break;}}
               	if(b) XMG.alert(SYS,M_BL_CONFIRMED);
               	else {
               		var xml = SMTX4R(sm,'FBl','blId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',scope:this,params:{A:'BL_S'},
					success: function(){
						sm.each(function(R){this.store.remove(R);},this);
						reloadCons();
						XMG.alert(SYS,M_S);
					},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}
           }},this);
		}
       	else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	
	var t1={layout:'fit',border:false,items:[this.grid]};

	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_BL;
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nhdebucv',ctrl:true,scope:this,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_BL_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addMBl();break;
					case Ext.EventObject.H:
						if(!NR(m+F_M)) this.addHBl();break;
					case Ext.EventObject.D:
						if(!NR(m+F_R)) this.removeBl();break;
					case Ext.EventObject.E:
						if(!NR(m+F_R)) this.edit();break;
					case Ext.EventObject.B:
						if(!NR(m+F_M)) this.merge();break;
					case Ext.EventObject.U:
						if(!NR(m+F_M)) this.cancelMerge();break;
					case Ext.EventObject.C:
						if(!NR(m+F_M)) this.split();break;
					case Ext.EventObject.V:
						if(!NR(m+F_M)) this.cancelSplit();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	var gv=new Ext.grid.GroupingView({showGroupName:false,enableNoGroups:true,hideGroupedColumn:true,
		groupTextTpl: '{text}',
		getRowClass: function(record, index) {			   
            if (record.get('blMasterFlag')==1) return 'pin-bg-row';
            else return '';
        }});
	Fos.BLTab.superclass.constructor.call(this, {
	id:'T_BL_'+p.get('id'),title:C_SR_BL+'(F7)',header:false,autoScroll:true,listeners:re,
	labelAlign:'right',labelWidth:70,border:true,store:this.store,sm:sm,cm:cm,view:gv,
	tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(m+F_M)||p.get('rowAction')=='N',scope:this,
		   	menu: new Ext.menu.Menu({items: [
		   		{text:p.get('consBizType')==BT_A?'MAWB(M)':'MB/L(N)',scope:this,handler:this.addMBl},
		   		{text:p.get('consBizType')==BT_A?'HAWB(H)':'HB/L(H)',scope:this,handler:this.addHBl}]})
			},'-',
			{text:C_REMOVE+'(D)',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeBl},'-',
			{text:C_EDIT+'(E)',iconCls:'option',disabled:NR(m+F_M),scope:this,handler:this.edit},'-',
			{text:C_BL_MERGE+'(B)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.merge},'-',
			{text:C_BL_MERGE_C+'(U)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.cancelMerge},'-',
			{text:C_BL_SPLIT+'(C)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.split},'-',
			{text:C_BL_SPLIT_C+'(V)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.cancelSplit},'-'
		   	]});
};
Ext.extend(Fos.BLTab, Ext.grid.GridPanel);

Fos.BlWin = function(p,b,store) {
	this.copyFrom=function(){		
		XMG.prompt(SYS,C_BL_NO,function(btn,v){
			if(btn=='ok'){
				var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'BL_Q',
					reader: new Ext.data.XmlReader({record:'FBl'}, FBl)});
				sc.load({params:{blNo:v},callback:function(r,o,s){
					if(s&&r.length>0){
						var c=r[0];
						b.beginEdit();
						var f = FBl.prototype.fields;
						for (var i = 0; i < f.keys.length; i++) {
							var fn = ''+f.keys[i];
							if(fn=='blId'||fn=='id'||fn=='blNo'||fn=='consId'||fn=='consNo'||fn=='version'
								||fn=='consBizClass'||fn=='consBizType'||fn=='consShipType'
								||fn=='consTradeContractNo'||fn=='consChargeRemarks'||fn=='custId'
								||fn=='custName'||fn=='blStatus'||fn=='removed'){}
							else b.set(fn,c.get(fn));
						};
						b.endEdit();
						this.getForm().loadRecord(b);
					}    						
				},scope:this});
			}
		},this);
    };
	this.save = function(){			
		if(this.find('name','blNo')[0].getValue()==''){
			XMG.alert(SYS,M_BL_REQIRED,function(){this.find('name','blNo')[0].focus();},this);return;};
		b.beginEdit();
		//this.frm.getForm().updateRecord(b);
		
		var fs = b.fields;
        fs.each(function(f){
            var field = this.frm.getForm().findField(f.name);
            if(field){
                b.set(f.name, field.getValue());
            }
        }, this);
        
		b.endEdit();		
		var xml = RTX(b,'FBl',FBl);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BL_S'},
			success: function(res){				
				var c = XTR(res.responseXML,'FBl',FBl);
				var f = FBl.prototype.fields;
				var ac=b.get('rowAction');
				b.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];b.set(fn,c.get(fn));};   				
				b.set('rowAction','M');
				b.endEdit();
				if(ac='N') store.add(b);
				var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
					reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});
				sc.load({params:{consId:p.get('consId')},callback:function(r,o,s){
					if(s&&r.length>0){
						var c=r[0];
						p.beginEdit();
						p.set('blCargoPackages',c.get('blCargoPackages'));
						p.set('blCargoGrossWeight',c.get('blCargoGrossWeight'));
						p.set('blCargoNetWeight',c.get('blCargoNetWeight'));
						p.set('blCargoMeasurement',c.get('blCargoMeasurement'));
						p.set('version',c.get('version'));	
						p.endEdit();
						var tc = T_MAIN.getComponent('C_'+p.get("id"));
						var t=tc.getComponent('T_BOOK_'+p.get("id"));
						var blcp=t.find('name','blCargoPackages');
						if(blcp[0]) blcp[0].setValue(p.get('blCargoPackages'));
						var blcg=t.find('name','blCargoGrossWeight');
						if(blcg[0]) blcg[0].setValue(p.get('blCargoGrossWeight'));
						var blcn=t.find('name','blCargoNetWeight');
						if(blcn[0]) blcn[0].setValue(p.get('blCargoGrossWeight'));
						var blcm=t.find('name','blCargoMeasurement');
						if(blcm[0]) blcm[0].setValue(p.get('blCargoMeasurement'));
						XMG.alert(SYS,M_S);
					}    						
				},scope:this});
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
	};
	this.check = function(){
			Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'BL_U',blId:b.get('blId'),consId:p.get('consId'),blStatus:'2',blType:b.get('blType')},
			success: function(r){b.set('blStatus','2');XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}		
			});
	};
	this.uncheck = function(){
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'BL_U',blId:b.get('blId'),consId:p.get('consId'),blStatus:'1',blType:b.get('blType')},
			success: function(r){b.set('blStatus','1');XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
	};
	this.printOffical = function(){
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'BL_U',blId:b.get('blId'),consId:p.get('consId'),blStatus:'3',blType:b.get('blType')},
			success: function(r){b.set('blStatus','3');XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
		});
	};
	this.release = function(){
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'BL_U',blId:b.get('blId'),consId:p.get('consId'),blStatus:'5',blType:b.get('blType')},
			success: function(r){b.set('blStatus','5');XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
		});
	};	
	this.expExcel=function(){
		EXPC('BL','&blId='+b.get('blId'));
	};
	this.expEmail=function(){
				var to='';
				var cc='';
				var sub='';
				var msg='';
				EXPM(to,cc,sub,msg,'BL','blId='+b.get('blId'));
	};		
	this.genCons = function(){EXPC('CONS_B_BL','&blId='+b.get('blId'));};
	var t2={layout:'column',title:C_BL_INFO,layoutConfig: {columns:4},deferredRender:false,collapsible:true,
			items: [{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_BL_NO,name:'blNo',itemCls:'required',tabIndex:1,value:b.get('blNo'),xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_CARRIER,name:'blCarrierName',tabIndex:5,store:getCS(),enableKeyEvents:true,
					tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
					listeners:{scope:this,
					blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('blCarrier','');p.set('blCarrierName','');}},
					select:function(c,r,i){b.set('blCarrier',r.get('custId'));},
					keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:BF}}},
                {fieldLabel:C_RECEIPT_PLACE,name:'blReceiptPlace',value:b.get('blReceiptPlace'),tabIndex:9,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_POT,name:'blPot',value:b.get('blPot'),tabIndex:13,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_PACKAGES,name:'cargPackages',value:b.get('cargPackages'),tabIndex:17,xtype:'numberfield',anchor:'90%',
					listeners:{scope:this,change:function(f,nv,ov){
						b.set('blPackages',''+nv+b.get('packName'));
						this.find('name','blPackages')[0].setValue(b.get('blPackages'));
						b.set('blTotalSay','SAY TOTAL '+N2EW(nv)+' '+b.get('packName')+' ONLY');
						this.find('name','blTotalSay')[0].setValue(b.get('blTotalSay'));
					}}
				}
				]},
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_PRECARRIAGE,name:'blPrecarriage',value:b.get('blPrecarriage'),tabIndex:2,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_VESS,name:'blVessel',value:b.get('blVessel'),tabIndex:6,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_POL,name:'blPol',value:b.get('blPol'),tabIndex:10,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_BL_SHIP_DATE,name:'blLoadDate',value:b.get('blLoadDate'),tabIndex:14,xtype:'datefield',format:DATEF,anchor:'90%'},
                {fieldLabel:C_PACK,tabIndex:18,name:'packId',value:b.get('packId'),xtype:'combo',store:getPACK_S(),displayField:'packName',valueField:'packId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
					listeners:{scope:this,select:function(c,r,i){
						b.set('packName',r.get('packName'));
						b.set('blTotalSay','SAY TOTAL '+N2EW(b.get('blPackages'))+' '+b.get('packName')+' ONLY');
						this.find('name','blTotalSay')[0].setValue(b.get('blTotalSay'));
						}}}]},
			{columnWidth:.25,layout:'form',border : false,items:[
            	{fieldLabel:C_BL_PATE,name:'blPaymentTerm',value:b.get('blPaymentTerm'),tabIndex:3,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_VOYA,name:'blVoyage',value:b.get('blVoyage'),tabIndex:7,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_POD,name:'blPod',value:b.get('blPod'),tabIndex:11,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_SAIL_DATE,name:'blEtd',value:b.get('blEtd'),tabIndex:15,xtype:'datefield',format:DATEF,anchor:'90%'},
                {fieldLabel:C_GW,name:'cargGrossWeight',value:b.get('cargGrossWeight'),tabIndex:19,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'90%',
                	listeners:{scope:this,change:function(f,nv,ov){
						b.set('blGrossWeight',''+nv+(p.get('consBizType')=='C'?'KGS':'MT'));
						this.find('name','blGrossWeight')[0].setValue(b.get('blGrossWeight'));
					}}
                }]},
			{columnWidth:.25,layout:'form',border : false,items:[
                {fieldLabel:C_PAID_AT,name:'blPaidAt',value:b.get('blPaidAt'),tabIndex:4,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_TTER,name:'blTransTerm',value:b.get('blTransTerm'),tabIndex:8,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_DELIVERY_STATION,name:'blDeliveryPlace',value:b.get('blDeliveryPlace'),tabIndex:12,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_ETA,name:'blEta',value:b.get('blEta'),tabIndex:16,xtype:'datefield',format:DATEF,anchor:'90%'},
                {fieldLabel:C_CBM,name:'cargMeasurement',value:b.get('cargMeasurement'),tabIndex:19,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'90%',
                	listeners:{scope:this,change:function(f,nv,ov){
						b.set('blMeasurement',''+nv+('CBM'));
						this.find('name','blMeasurement')[0].setValue(b.get('blMeasurement'));
					}}
                }]},
			
			{columnWidth:.5,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_SHIPPER,name:'blShipper',value:b.get('blShipper'),tabIndex:17,xtype:'textarea',height:100,anchor:'95%'}]},
			{columnWidth:.5,layout:'form',border:false,labelAlign:'top',
                items:[{fieldLabel:C_CONSIGNEE,name:'blConsignee',value:b.get('blConsignee'),tabIndex:18,xtype:'textarea',height:100,anchor:'95%'}]},
			{columnWidth:.5,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_NOTIFIER,name:'blNotifyParty',value:b.get('blNotifyParty'),tabIndex:19,xtype:'textarea',height:100,anchor:'95%'}]},
			{columnWidth:.5,layout: 'form',border : false,labelAlign:'top',
                items: [{fieldLabel:C_OVERSEA_AGENCY,name:'blOverseaAgency',value:b.get('blOverseaAgency'),tabIndex:20,xtype:'textarea',height:100,anchor:'95%'}]},			
			{columnWidth:.3,layout: 'form',border :false,labelAlign:'top',
                items: [{fieldLabel:C_MARKS,name:'blMarks',value:b.get('blMarks'),tabIndex:21,xtype:'textarea',height:100,anchor:'95%'}]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_NUM_PACK,name:'blPackages',value:b.get('blPackages'),tabIndex:22,xtype:'textarea',height:100,anchor:'95%'}]},
			{columnWidth:.4,layout: 'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_CATY,name:'blCargoDesc',value:b.get('blCargoDesc'),tabIndex:23,xtype:'textarea',height:100,anchor:'95%'}]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_GW_S,name:'blGrossWeight',value:b.get('blGrossWeight'),tabIndex:24,xtype:'textarea',height:100,anchor:'95%'}]},
            {columnWidth:.1,layout: 'form',border : false,labelAlign:'top',
                items: [{fieldLabel:C_CBM_S,name:'blMeasurement',value:b.get('blMeasurement'),tabIndex:25,xtype:'textarea',height:100,anchor:'95%'}]},
            {columnWidth:.90,layout: 'form',labelAlign: 'left',labelWidth:85,border : false,
                items: [{fieldLabel:C_TOTAL_SAY,name:'blTotalSay',value:b.get('blTotalSay'),tabIndex:26,xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.90,layout: 'form',labelAlign: 'left',labelWidth:85,border : false,
                items: [{fieldLabel:C_CONTAINER_NO,name:'blContainerNo',value:b.get('blContainerNo'),tabIndex:27,xtype:'textfield',anchor:'95%'}]},
            ]};
	var t3={layout:'column',title:C_ISSUE_INFO,layoutConfig: {columns:4},deferredRender:false,collapsible:true,height:200,
			items: [
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_ISTY,name:'istyId',value:b.get('istyId'),store:getISTY_S(),tabIndex:50,xtype:'combo',displayField:'istyName',valueField:'istyId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_ISSUE_BY,name:'blIssueBy',value:b.get('blIssueBy'),tabIndex:51,xtype:'textfield',anchor:'95%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_ISSUE_PLACE,name:'blIssuePlace',value:b.get('blIssuePlace'),tabIndex:52,xtype:'textfield',anchor:'95%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_ISSUE_DATE,name:'blIssueDate',value:b.get('blIssueDate'),tabIndex:53,xtype:'datefield',format:DATEF,anchor:'95%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_CLEAN_FLAG,name:'blCleanFlag',value:b.get('blCleanFlag'),xtype:'checkbox',labelSeparator:'',anchor:'95%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_THIRD_PLACE,name:'blThirdPlaceFlag',value:b.get('blThirdPlaceFlag'),xtype:'checkbox',labelSeparator:'',anchor:'95%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_ADVANCED_FLAG,name:'blAdvancedFlag',value:b.get('blAdvancedFlag'),xtype:'checkbox',labelSeparator:'',anchor:'95%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_BL_BACK_FLAG,name:'blBackFlag',value:b.get('blBackFlag'),xtype:'checkbox',labelSeparator:'',anchor:'95%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_DOC_ORI_NUM,name:'blOriginalNum',value:b.get('blOriginalNum'),tabIndex:54,xtype:'textfield',anchor:'95%'}]},
				{columnWidth:.5,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_REMARKS,name:'blRemarks',value:b.get('blRemarks'),tabIndex:55,xtype:'textarea',anchor:'95%'}]}
				]};			
	var t4={layout:'column',title:C_BASE_INFO,layoutConfig: {columns:4},bodyStyle:'padding:2px 2px 2px',deferredRender:false,collapsible:true,
			items: [
			{columnWidth:.5,layout:'form',border:false,labelAlign:'top',items: [
				{fieldLabel:"Shipper's Name and Address",name:'blShipper',value:b.get('blShipper'),tabIndex:1,xtype:'textarea',height:100,anchor:'95%'},
				{fieldLabel:"Consignee's Name and Address",name:'blConsignee',value:b.get('blConsignee'),tabIndex:2,xtype:'textarea',height:100,anchor:'95%'},
				{fieldLabel:"Issuing Carrier's Agent Name",name:'blNotifyParty',value:b.get('blNotifyParty'),tabIndex:3,xtype:'textarea',height:100,anchor:'95%'}
			]},
			{columnWidth:.5,layout:'form',border:false,labelAlign:'top',items: [                
                {fieldLabel:"Accounting Information",name:'blAccountingInfo',value:b.get('blAccountingInfo'),tabIndex:4,xtype:'textarea',height:100,anchor:'95%'},
                {fieldLabel: 'Also Notify',name:'blNotifyParty2',value:b.get('blNotifyParty2'),tabIndex:5,xtype:'textarea',height:100,anchor:'95%'},            	
            	{layout:'column',layoutConfig: {columns:2},border:false,items: [
	            	{columnWidth:.5,layout:'form',border : false,labelAlign:'top',items:[
	            	{fieldLabel:'AWB No.',name:'blNo',value:b.get('blNo'),tabIndex:6,xtype:'textfield',anchor:'90%'},
	            	{fieldLabel:"Agent IATA Code",name:'blAgentIataCode',value:b.get('blAgentIataCode'),tabIndex:8,xtype:'textfield',anchor:'90%'},
	            	{fieldLabel:'Declared Value for Carriage',name:'blDvCarriage',value:b.get('blDvCarriage'),tabIndex:10,xtype:'textfield',anchor:'90%'}
		            ]},
		            {columnWidth:.5,layout:'form',border : false,labelAlign:'top',items:[
		            	{fieldLabel:'Air Port of Departure',name:'blPol',value:b.get('blPol'),tabIndex:7,xtype:'textfield',anchor:'90%'},
		            	{fieldLabel:'Account No.',name:'blAccountNo',value:b.get('blAccountNo'),tabIndex:9,xtype:'textfield',anchor:'90%'},            	
		            	{fieldLabel:'Declared Value for Customs',name:'blDvCustoms',value:b.get('blDvCustoms'),tabIndex:11,xtype:'textfield',anchor:'90%'}
		            ]}
            	]}
            ]},            
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'To',name:'blToFirst',value:b.get('blToFirst'),tabIndex:12,xtype:'textfield',anchor:'95%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'By First Carrier',name:'blByFirst',value:b.get('blByFirst'),tabIndex:13,xtype:'textfield',anchor:'95%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'To',name:'blToSecond',value:b.get('blToSecond'),tabIndex:14,xtype:'textfield',anchor:'95%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'By',name:'blBySecond',value:b.get('blBySecond'),tabIndex:15,xtype:'textfield',anchor:'95%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'To',name:'blToThird',value:b.get('blToThird'),tabIndex:16,xtype:'textfield',anchor:'95%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'By',name:'blByThird',value:b.get('blByThird'),tabIndex:17,xtype:'textfield',anchor:'95%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Currency',name:'currCode',value:b.get('currCode'),tabIndex:18,value:p.get('currCode'),store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Weight/VAL',name:'blWeightPayment',value:b.get('blWeightPayment'),tabIndex:19,xtype:'textfield',anchor:'95%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Other',name:'blOtherPayment',value:b.get('blOtherPayment'),tabIndex:20,xtype:'textfield',anchor:'80%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Air Port of Destination',name:'blPod',value:b.get('blPod'),tabIndex:21,xtype:'textfield',anchor:'95%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Flight',name:'blVoyage',value:b.get('blVoyage'),tabIndex:22,xtype:'textfield',anchor:'95%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Date',name:'blEtd',value:b.get('blEtd'),tabIndex:23,xtype:'datefield',format:DATEF,anchor:'95%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Amount of Insurance',name:'blAmountInsurance',value:b.get('blAmountInsurance'),tabIndex:24,xtype:'textfield',anchor:'95%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'T/S Remarks',name:'blTsRemarks',value:b.get('blTsRemarks'),tabIndex:25,xtype:'textfield',anchor:'90%'}
            ]},
            {columnWidth:.99,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:"Handling information and Others",name:'blHandlingInfo',value:b.get('blHandlingInfo'),tabIndex:26,xtype:'textarea',height:100,anchor:'95%'}]}
          ]};
    var t5={layout:'column',title:C_CARGO_INFO,layoutConfig: {columns:4},deferredRender:false,collapsible:true,
			items: [
			 {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'No of Packages',name:'blPackages',value:b.get('blPackages'),tabIndex:27,xtype:'numberfield',anchor:'95%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Gross Weight',name:'blGrossWeight',value:b.get('blGrossWeight'),tabIndex:28,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'95%'}
            ]},            
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Rate Class',name:'blRateClass',value:b.get('blRateClass'),tabIndex:29,xtype:'textfield',anchor:'95%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Chargeable Weight',name:'blChargeWeight',value:b.get('blChargeWeight'),tabIndex:30,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'95%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Rate',name:'blChargeRate',value:b.get('blChargeRate'),tabIndex:31,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'95%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Total',name:'blTotalCharge',value:b.get('blTotalCharge'),tabIndex:32,xtype:'numberfield',anchor:'95%'}
            ]},
			{columnWidth:.99,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:"Description of Goods",name:'blCargoDesc',value:b.get('blCargoDesc'),tabIndex:33,xtype:'textarea',height:100,anchor:'95%'}]}
			]};
	var t6={layout:'column',title:C_EXPE_INFO,layoutConfig: {columns:2},deferredRender:false,collapsible:true,
			items: [
			{columnWidth:.6,layout:'column',layoutConfig: {columns:2},labelWidth:180,border:false,items:[            	
            	{columnWidth:.7,layout:'form',border:false,items:[
            		{html:SP(26)+'Prepaid:',xtype:'label',anchor:'95%'},
            		{fieldLabel:'Weight Charge',name:'blWeightChargePp',value:b.get('blWeightChargePp'),tabIndex:34,xtype:'numberfield',anchor:'95%'},
            		{fieldLabel:'Valuation Charge',name:'blValuationChargePp',value:b.get('blValuationChargePp'),tabIndex:36,xtype:'numberfield',anchor:'95%'},
            		{fieldLabel:'Tax',name:'blTaxPp',value:b.get('blTaxPp'),tabIndex:38,xtype:'numberfield',anchor:'95%'},
            		{fieldLabel:'Total Other Charges Due Agent',name:'blOtherDaPp',value:b.get('blOtherDaPp'),tabIndex:40,xtype:'numberfield',anchor:'95%'},
            		{fieldLabel:'Total Other Charges Due Carrier',name:'blOtherDcPp',value:b.get('blOtherDcPp'),tabIndex:42,xtype:'numberfield',anchor:'95%'},
            		{fieldLabel:'Total',name:'blTotalPp',value:b.get('blTotalPp'),tabIndex:44,xtype:'numberfield',anchor:'95%'}]},
            	{columnWidth:.3,layout:'form',border:false,hideLabels:true,items:[
            		{text:'Collect:',xtype:'label',anchor:'95%'},
            		{name:'blWeightChargeCc',value:b.get('blWeightChargeCc'),tabIndex:35,xtype:'numberfield',anchor:'95%'},
            		{name:'blValuationChargeCc',value:b.get('blValuationChargeCc'),tabIndex:37,xtype:'numberfield',anchor:'95%'},
            		{name:'blTaxCc',value:b.get('blTaxCc'),tabIndex:39,xtype:'numberfield',anchor:'95%'},
            		{name:'blOtherDaCc',value:b.get('blOtherDaCc'),tabIndex:41,xtype:'numberfield',anchor:'95%'},
            		{name:'blOtherDcCc',value:b.get('blOtherDcCc'),tabIndex:43,xtype:'numberfield',anchor:'95%'},
            		{name:'blTotalCc',value:b.get('blTotalCc'),tabIndex:45,xtype:'numberfield',anchor:'95%'}]}            		
            ]},           
			{columnWidth:.4,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:"Other Charges",name:'consChargeRemarks',value:b.get('consChargeRemarks'),tabIndex:46,xtype:'textarea',height:100,anchor:'95%'}]}
			]};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_BL;
	this.frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',height:650,autoScroll:true,
		tbar:[
			{text:C_SAVE,iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save},'-',
			{text:C_CONFIRM,iconCls:'check',disabled:NR(m+F_M),scope:this,handler:this.check},'-',
			{text:C_CANCEL_CONFIRM,iconCls:'renew',disabled:NR(m+F_M),scope:this,handler:this.uncheck},'-',
			{text:C_PRINT_OFFICIAL,disabled:NR(m+F_M),iconCls:'star',scope:this,handler:this.printOffical},'-',
			{text:C_BL_RELEASE,iconCls:'release',scope:this,handler:this.release},'-',
			{text:C_COPY_FROM,iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.copyFrom},'-',			
			{text:C_EXPORT,iconCls:'print',disabled:NR(m+F_E),scope:this,
				menu: {items: [
		   		{text:C_BL_CONFIRM,menu:{items:[
		   			{text:'Excel',scope:this,handler:this.expExcel},
		   			{text:C_EMAIL,scope:this,handler:this.expEmail},
		   			{text:C_FAX,scope:this,handler:function(){}}]}},
		   		{text:M_BOOK,scope:this,handler:this.genCons}
		   		]}},'->'
		   	],		   	
            items:{xtype:'tabpanel',plain:true,activeTab:0,defaults:{bodyStyle:'padding:10px'},height:650,
            items:p.get('consBizType')==BT_A?[t4,t5,t6,t3]:[t2,t3]}
    });
    Fos.BlWin.superclass.constructor.call(this, {title:C_BL_INFO,modal:true,width:800,height:500,autoScroll:true,maximizable:true,layout:'fit',
        plain:false,bodyStyle:'padding:2px;',items:this.frm});
};
Ext.extend(Fos.BlWin, Ext.Window);