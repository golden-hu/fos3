
//装箱
Fos.ContainerTab = function(p) {
	this.sel =GSEL;
	this.store = GS('CONT_Q','FContainer',FContainer,'contId','DESC','','','id',false);
	this.cargoStore = GS('COCA_Q','FContainerCargo',FContainerCargo,'cocaId','DESC','','','id',false);
	if(p.get('rowAction')!='N'){
		this.store.load({params:{consId:p.get('consId'),contPreFlag:'N'},scope:this,callback:function(r,o,sc){if(sc){this.reCalculate();}}});
		this.cargoStore.load({params:{consId:p.get('consId')}});
	}
	var totalPackages = new Ext.form.TextField({width:80,disabled:true});
	var totalGrossWeight = new Ext.form.TextField({width:80,disabled:true});
	var totalMeasurement = new Ext.form.TextField({width:80,disabled:true});
	this.reCalculate = function(){
		var pkg=0;var gw=0;var me=0;
		var a=this.store.getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get('contPackageNum')) pkg=pkg+parseFloat(a[i].get('contPackageNum'));
			if(a[i].get('contGrossWeight')) gw=gw+parseFloat(a[i].get('contGrossWeight'));
			if(a[i].get('contMeasurement')) me=me+parseFloat(a[i].get('contMeasurement'));			
		}
		totalPackages.setValue(round2(pkg)); 
		totalGrossWeight.setValue(round2(gw));
		totalMeasurement.setValue(round2(me));
	};
	this.calContainer = function(){		
		var pkg=0;var gw=0;var me=0;
		var a=this.cargoGrid.getStore().getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get('cocaPackageNum')>0) pkg=pkg+parseFloat(a[i].get('cocaPackageNum'));
			if(a[i].get('cocaGrossWeight')>0) gw=gw+parseFloat(a[i].get('cocaGrossWeight'));
			if(a[i].get('cocaMeasurement')>0) me=me+parseFloat(a[i].get('cocaMeasurement'));			
		}
		var r = this.grid.getSelectionModel().getSelected();		
		if(pkg>0) r.set('contPackageNum',round2(pkg)); 
		if(gw>0) r.set('contGrossWeight',round2(gw));
		if(me>0) r.set('contMeasurement',round2(me));
	};
	this.autoShip=function(){
		
	};
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('contId')){
				this.sel=record.get('contId');
				var s = this.cargoGrid.getStore();s.removeAll();
				var a = this.cargoStore.getRange();
				for(var i=0;i<a.length;i++){if(a[i].get('contId')==this.sel && a[i].get('rowAction')!='D' && a[i].get('rowAction')!='R') s.add(a[i]);}
			}}
	};		
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re});	
	var soc = new Ext.grid.CheckColumn({header: "SOC",dataIndex:'contSocFlag',width:55});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CONT_NO,dataIndex:'contNo',width:100,
		editor:new Ext.form.TextField({
		listeners:{
			blur:function(t){
				if(!chkcntrno(t.getValue(),0)){
					XMG.alert(SYS,'集装箱编码格式不正确，请重新输入！');
				}
		}}})},
	{header:C_SEAL_NO,dataIndex:'contSealNo',width:100,
		editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_COTY,dataIndex:'cotyCode',width:60,renderer:getCOTY,
		editor:new Ext.form.ComboBox({displayField:'cotyCode',valueField:'cotyCode',triggerAction:'all',
        mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOTY_S(),
        listeners:{scope:this,
        	select:function(c,r,i){
        		this.grid.getSelectionModel().getSelected().set('cotyId',r.get('cotyId'));
        		}
		}})},
	{header:C_FL,dataIndex:'contFl',width:40,
		editor:new Ext.form.ComboBox({displayField:'CODE',valueField:'CODE',triggerAction: 'all',
        mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:FL_S})},
    soc,
	{header:C_CARGO_NAME_EN,dataIndex:'contCargoNameEn',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_PACKAGES,dataIndex:'contPackageNum',width:60,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
            listeners:{scope:this,select:function(c,r,i){this.grid.getSelectionModel().getSelected().set('packName',r.get('packName'));}}})},
	{header:C_GW,dataIndex:'contGrossWeight',width:60,renderer:rateRender,editor:new Ext.form.TextField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CBM,dataIndex:'contMeasurement',width:60,renderer:rateRender,editor:new Ext.form.TextField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CONT_LOAD_ADDRESS,dataIndex:'contAddress',width:150,editor:new Ext.form.TextField()},
	{header:C_REMARKS,dataIndex:'contRemarks',width:100,editor:new Ext.form.TextField()}],defaults:{sortable:true,width:100}});
	this.grid = new Ext.grid.EditorGridPanel({region:'north',height:200,title:C_CONT_LIST,plugins:soc,autoScroll:true,clicksToEdit:1,height:200,
		store:this.store,sm:sm,cm:cm,listeners:{scope:this,
    	afteredit:function(e){var f=e.field;if(f=='contPackageNum'||f=='contGrossWeight'||f=='contMeasurement'){this.reCalculate();}}}
    });	
	
	
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_MBL_NO,dataIndex:'consMblNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_MARKS,dataIndex:'cocaMarks',width:80,editor:new Ext.form.TextField({})},	
	{header:C_CARGO_NAME_EN,dataIndex:'cocaCargoName',width:80,editor:new Ext.form.TextField({})},	
	{header:C_PACKAGES,dataIndex:'cocaPackageNum',width:60,editor:new Ext.form.NumberField({allowBlank:false})},
	{header:C_PACK,dataIndex:'packName',width:80,renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packName',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
            listeners:{scope:this,select:function(c,r,i){this.cargoGrid.getSelectionModel().getSelected().set('packName',r.get('packName'));}}})},
	{header:C_GW,dataIndex:'cocaGrossWeight',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},	
	{header:C_CBM,dataIndex:'cocaMeasurement',width:80,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CONS_NO,dataIndex:'consNo',width:120},   	
   	{header:C_HBL_NO,dataIndex:'consHblNo',width:120},
   	{header:C_BOOKER,dataIndex:'consCustName',width:120}
	],defaults:{sortable:true,width:120}});
	this.addCargo=function(){
		var r = this.grid.getSelectionModel().getSelected();
		if(r){
			var win = new Fos.CargoLookupWin(p.get('consShipType')=='FCL'?'CARG_Q':'CARG_MID_Q',p.get('consId'));
			win.addButton({text:C_OK,scope:this,handler:function(){
				var g = win.findById('G_CARG_LOOKUP');
				var a = g.getSelectionModel().getSelections();
				if(a){
					for(var i=0;i<a.length;i++){
						if(this.cargoGrid.getStore().findBy(function(rec,id){return rec.get('cargId')==a[i].get('cargId');})==-1){
							var rid=GGUID();
							var t = new FContainerCargo({id:rid,cocaId:rid,
								contId:r.get('contId'),
								consId:a[i].get('consId'),
								consNo:a[i].get('consNo'),
								cargId:a[i].get('cargId'),
								consMblNo:a[i].get('consMblNo'),
								consHblNo:a[i].get('consHblNo'),
								consCustName:a[i].get('custName'),
								cocaMarks:a[i].get('cargMarks'),
								cocaCargoName:a[i].get('cargNameEn'),
								packId:a[i].get('packId'),
								packName:a[i].get('packName'),
								cocaPackageNum:a[i].get('cargPackageNum'),
								cocaGrossWeight:a[i].get('cargGrossWeight'),
								cocaMeasurement:a[i].get('cargMeasurement'),
								compCode:'',verson:0});
							this.cargoStore.add(t);t.set('rowAction','N');
							this.cargoGrid.getStore().add(t);								
							if(a[i].get('cargReeterFlag')) 
								r.set('cargTemperature',a[i].get('cargTemperature'));
							if(a[i].get('cargDanagerFlag')){
								r.set('cargDanagerClass',a[i].get('cargDanagerClass'));
								r.set('cargUnNo',a[i].get('cargUnNo'));
								r.set('cargImdgPage',a[i].get('cargImdgPage'));
								r.set('cargFlashPoint',a[i].get('cargFlashPoint'));
							}								
						}
					}
					this.calContainer();
					this.reCalculate();
				}
				win.close();
			}},this);
			win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
			win.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.removeCargo=function(){
		var r = this.cargoGrid.getSelectionModel().getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){
				r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');				
				this.cargoGrid.getStore().remove(r[i]);
			};
			this.calContainer();
			this.reCalculate();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.cargoGrid = new Ext.grid.EditorGridPanel({title:C_CONT_SHIP_LIST,autoScroll:true,sm:sm2,cm:cm2,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'cocaId',record:'FContainerCargo'},FContainerCargo),sortInfo:{field:'cocaId',direction:'ASC'}}),
		listeners:{scope:this,afteredit:function(e){
    		var f=e.field;
    		if(f=='cocaPackageNum'||f=='cocaGrossWeight'||f=='cocaMeasurement'){
    			this.calContainer();this.reCalculate();}}},
		tbar:[
			{text:C_ADD+'(A)',iconCls:'add',scope:this,handler:this.addCargo},'-',
		{text:C_REMOVE+'(D)',iconCls:'remove',scope:this,handler:this.removeCargo},'-'
	]});
	this.addCont = function(){
		var rid=GGUID();
		var c = new FContainer({id:rid,contId:rid,consId:p.get('consId'),consNo:p.get('consNo'),
		contPreFlag:'N',contPartOfFlag:'N',
		consMblNo:p.get('consMblNo'),consHblNo:p.get('consHblNo'),contMConsId:p.get('consId'),contNum:1,
		contVessel:p.get('vessName'),contVoyage:p.get('voyaName'),contPol:p.get('consPolEn'),contPod:p.get('consPodEn'),contDeliveryPlace:p.get('consDeliveryPlace'),
		contMConsNo:p.get('consNo'),contMMblNo:p.get('consMblNo'),contHBlNo:p.get('consHblNo'),
		contNo:'',contSealNo:'',cotyId:'',contFl:'FCL',packId:p.get('packId'),packName:p.get('packName'),
		contPackageNum:'',
		contCargoNameEn:p.get('consCargoNameEn'),contCargoNameCn:p.get('consCargoNameCn'),
		contGrossWeight:'',contMeasurement:'',contSocFlag:'0',contLoadDate:p.get('consContainerLoadDate'),
		contRemarks:'',version:'0',rowAction:'N'});
       	this.store.insert(0,c);
       	this.grid.getSelectionModel().selectFirstRow();
       	this.grid.startEditing(0,1);
	};
	this.removeCont=function(){
    	var b =this.grid.getSelectionModel().getSelected();
		if(b){
    		b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
    		this.store.remove(b);
    		var s = this.cargoGrid.getStore();
			var a = s.getRange();
			for(var i=0;i<a.length;i++){
				a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
				this.cargoStore.remove(a[i]);s.remove(a[i]);
			}
			this.reCalculate();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.save=function(){
		this.grid.stopEditing();
		this.cargoGrid.stopEditing();
		var a =this.store.getModifiedRecords();
		if(a.length){
			for(var i=0;i<a.length;i++){
				if(!chkcntrno(a[i].get('contNo'),0)){
					XMG.alert(SYS,'集装箱编码格式不正确，请重新输入！');
					return;
				}
			}
			var xml = ATX(a,'FContainer',FContainer);
			var cc=getDirty(this.cargoStore);
			if(cc.length>0){
				var x = ATX(cc,'FContainerCargo',FContainerCargo);
				xml = xml+x;
			};		
			if(xml!=''){
			 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONT_S'},
				success: function(res){	
					var c = XTR(res.responseXML,'FConsign',FConsign);
					var f = FConsign.prototype.fields;
					p.beginEdit();
	   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};
					p.endEdit();
					
					var a = XTRA(res.responseXML,'FContainerCargo',FContainerCargo);
					FOSU(this.cargoStore,a,FContainerCargo);
					var b = XTRA(res.responseXML,'FContainer',FContainer);
					FOSU(this.store,b,FContainer);
					XMG.alert(SYS,M_S);
				},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
				xmlData:FOSX(xml)});
			}
		}
		else XMG.alert(SYS,M_NC);
	};
	this.expExcel=function(){
		var b = this.grid.getSelectionModel().getSelected();
		if(b){
			b.beginEdit();this.getForm().updateRecord(b);b.endEdit();
			if(b.dirty){XMG.alert(SYS,M_DIRTY_PROMPT);return;}
			else EXPC('CONT','&contId='+b.get('contId'));
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.expEmail=function(){		
		var b =this.grid.getSelectionModel().getSelected();
		if(b){
			var to=p.get('custEmail');
			var cc='';
			var sub='';
			var msg='';
			EXPM(to,cc,sub,msg,'CONT','contId='+b.get('contId'));
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CONT;
	var menu=CREATE_E_MENU(C_CONT_BILL,this.expExcel,this.expEmail,function(){},this);
	new Ext.KeyMap(Ext.getDoc(), {
			key:'nrsead',ctrl:true,
			handler: function(k, e) {
			 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
			 	if(tc&&tc==T_MAIN.getActiveTab()){
				 	var te=tc.getComponent('T_CONT_'+p.get('id'));
				 	if(te==tc.getActiveTab())
				 	{
				 		switch(k) {
						case Ext.EventObject.N:
							if(!NR(m+F_M)) this.addCont();break;
						case Ext.EventObject.R:
							if(!NR(m+F_R)) this.removeCont();break;
						case Ext.EventObject.S:
							if(!NR(m+F_M)) this.save();break;
						case Ext.EventObject.E:
							if(!NR(m+F_M)) this.expExcel();break;
						case Ext.EventObject.A:
							if(!NR(m+F_M)) this.addCargo();break;
						case Ext.EventObject.D:
							if(!NR(m+F_R)) this.removeCargo();break;
						}
				 	}
			 	}
			},stopEvent:true,scope:this});
	
	this.getVendorId=function(){    	
    	return p.get('consCfs');
    };
	this.getVendorName=function(){		
		return p.get('consCfsName');
	};
	var expPanel = new Fos.SectionExGrid(p,'CONT',this);
	
	Fos.ContainerTab.superclass.constructor.call(this, { 
	id:'T_CONT_'+p.get('id'),title:C_SR_CONT+'(F6)',border:true,autoScroll:true,header:false,deferredRender:false,autoScroll:true,	
	labelAlign:'right',labelWidth:80,bodyStyle:'padding:0px 0px 10px',border:true,layout:'border',
    tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.addCont},'-',
		{text:C_REMOVE+'(R)',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeCont}, '-', 
		{text:C_SAVE+'(S)',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save},'-',
		{text:C_EXPORT+'(E)',iconCls:'print',disabled:NR(m+F_E),scope:this,menu:{items:[menu]}},'->',
		{xtype:'tbtext',text:C_SUM_PACK},totalPackages,'-',
		{xtype:'tbtext',text:C_SUM_GW},totalGrossWeight,'-',
		{xtype:'tbtext',text:C_SUM_CBM},totalMeasurement],
	items: [this.grid,
		{xtype:'tabpanel',activeTab:0,region:'center',border:false,items:[this.cargoGrid,expPanel]
	}]});
};
Ext.extend(Fos.ContainerTab, Ext.FormPanel);
