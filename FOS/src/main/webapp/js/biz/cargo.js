//单票界面货物信息
Fos.CargoGrid = function(p,store,frm) {
	var catyStore = GS('CATY_Q','GCargoType',GCargoType,'catyId','DESC','','','id',false);
	this.sel = GSEL;
	
	var quitFlag=CHKCLM(C_CARG_QUIT,'cargQuitFlag');
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true}); 
					
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	    quitFlag,
	    {header:C_MARKS,dataIndex:'cargMarks',editor:new Ext.form.TextField({})},
	    {header:C_CARGO_NAME_EN,dataIndex:'cargNameEn',
	    	editor:new Ext.form.ComboBox({
			    store:catyStore,
			    displayField:'catyNameEn',
			    valueField:'catyNameEn',
			    mode:'remote',
			    typeAhead:true,
			    selectOnfucs:true,
			    triggerAction:'all',
			    listeners:{
			    	scope:this,
			    	select:function(c,r,i){
			    		var record = sm.getSelected();
			    		record.set('cargNameCn',r.get('catyNameCn'));
			    		record.set('cargSpec',r.get('catySpec'));
			    		record.set('cargManuNo',r.get('catyManuNo'));
		  				record.set('cargNo',r.get('catyCode'));
			    	}
			    }
			})
	    },
	    {header:C_CARGO_NAME_CN,dataIndex:'cargNameCn',
	    	editor:new Ext.form.ComboBox({
				store:catyStore,
				displayField:'catyNameCn',
				valueField:'catyNameCn',
				mode:'remote',
				typeAhead:true,
			    selectOnfucs:true,
			    triggerAction:'all',
			    listeners:{
			    	scope:this,
			    	select:function(c,r,i){
			    		var record = sm.getSelected();
			    		record.set('cargNameEn',r.get('catyNameEn'));
			    		record.set('cargSpec',r.get('catySpec'));
			    		record.set('cargManuNo',r.get('catyManuNo'));
		  				record.set('cargNo',r.get('catyCode'));
			    	}
			    }
			})
	    },
	    {header:C_PACKAGES,dataIndex:'cargPackageNum',
			editor:new Ext.form.NumberField({allowBlank:false})
	    },
	    {header:C_QUANTITY,dataIndex:'cargPackageSNum',
			editor:new Ext.form.NumberField({allowBlank:false})
	    },
	    {header:C_PACK,dataIndex:'packId',renderer:function(v,m,r){return r.get('packName');},
			editor:new Ext.form.ComboBox({displayField:'packName',
				valueField:'packId',
				triggerAction:'all',
	            mode:'local',
	            selectOnFocus:true,
	            listClass:'x-combo-list-small',
	            store:getPACK_S(),
	            listeners:{scope:this,
	            	select:function(c,r,i){
						this.getSelectionModel().getSelected().set('packName',r.get('packName'));
						this.getSelectionModel().getSelected().set('packCode',r.get('packCode'));
					}
	            }
	        })
	    },
	    {header:C_GW+(p.get('consBizType')==BT_B?C_MT:C_KGS),
	    	dataIndex:'cargGrossWeight',
			renderer:rateRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,
				allowBlank:false,
				blankText:'',
				invalidText:''
			})
	    },
	    {header:C_NW+(p.get('consBizType')==BT_B?C_MT:C_KGS),
	    	dataIndex:'cargNetWeight',
			renderer:rateRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,invalidText:''})
	    },
	    {header:C_UNIT,dataIndex:'unitId',renderer:function(v,m,r){return r.get('unitName');},
			editor:new Ext.form.ComboBox({displayField:'unitName',
				valueField:'unitId',triggerAction:'all',
		        mode:'local',selectOnFocus:true,
		        listClass:'x-combo-list-small',
		        store:getUNIT_S(),
		        listeners:{scope:this,
		        	select:function(c,r,i){
						this.getSelectionModel().getSelected().set('unitName',r.get('unitName'));
					}
		        }
		    })
	    },
	    {header:C_CBM,dataIndex:'cargMeasurement',renderer:rateRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,
				allowBlank:false,blankText:'',invalidText:''})
	    },
	    {header:C_MANU_NO,dataIndex:'cargManuNo',editor:new Ext.form.TextField()},
	    {header:C_SPEC,dataIndex:'cargSpec',editor:new Ext.form.TextField()},
	    {header:C_HS_CODE,dataIndex:'cargNo',editor:new Ext.form.TextField()}
	    ],
		defaults:{sortable:true,width:80}
	});
	
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
	
	this.reCalculate=function(){
		var pkg=0;
		var gw=0;
		var nw=0;
		var m=0;
		var cgw=0;
		
		var a=store.getRange();
		
		var mark = '';
		var ename = '';
		var cname = '';
		var pkgs = '';
		
		for(var i=0;i<a.length;i++){
			pkg += parseFloat(a[i].get('cargPackageNum'));
			gw +=  parseFloat(a[i].get('cargGrossWeight'));
			nw +=  parseFloat(a[i].get('cargNetWeight'));
			m +=   parseFloat(a[i].get('cargMeasurement'));
			cgw += parseFloat(a[i].get('cargMeasurement')*167);
			
			if(mark=='') 
				mark = a[i].get('cargMarks');
			else{
				if(a[i].get('cargMarks')!=mark){
					mark += '\r\n';
					mark += a[i].get('cargMarks');
				}
			}			
			
			if(ename!='') 
				ename += '\r\n';
			ename = ename + a[i].get('cargNameEn');
			
			if(cname!='') 
				cname += ',';
			cname = cname + a[i].get('cargNameCn');
			
			if(pkgs==''){
				pkgs = a[i].get('packName');
			}
			else if(pkgs!=a[i].get('packName')){				
				pkgs = 'PKGS';
			}
		}
		
		frm.find('name','consTotalPackages')[0].setValue(pkg);
		frm.find('name','consTotalGrossWeight')[0].setValue(gw);
		frm.find('name','consTotalNetWeight')[0].setValue(nw);
		frm.find('name','consTotalMeasurement')[0].setValue(m);
		
		var cw=frm.find('name','consTotalChargeWeight');
		if(cw.length) 
			cw[0].setValue(gw>cgw?gw:cgw);
		p.set('consTotalPackages',pkg);
		p.set('consTotalGrossWeight',gw);
		p.set('consTotalNetWeight',nw);
		p.set('consTotalMeasurement',m);
		
		frm.find('name','consCargoMarks')[0].setValue(mark);
		frm.find('name','consCargoNameCn')[0].setValue(cname);
		frm.find('name','consCargoNameEn')[0].setValue(ename);
		if(p.get('consBizType')!='A'){
			frm.find('name','consCargoDesc')[0].setValue(ename);
		}
		frm.find('name','packName')[0].setValue(pkgs);
		p.set('packName',pkgs);
		
		var pw='SAY '+N2EW(p.get('consTotalPackages'))+' ('+p.get('consTotalPackages')+') '+p.get('packName')+' ONLY';
		frm.find('name','consTotalPackagesInWord')[0].setValue(pw);
		p.set('consTotalPackagesInWord',pw);
	};	
	
	Fos.CargoGrid.superclass.constructor.call(this,{plugins:[quitFlag],
	id:'G_CARG'+p.get('id'),border:true,autoScroll:true,clicksToEdit:1,height:150,store:store,sm:sm,cm:cm,
	listeners:{scope:this,afteredit:function(e){			
    	var f=e.field;
    	if(f=='cargPackageNum'||
    			f=='cargNetWeight'||
    			f=='cargGrossWeight'||
    			f=='cargMeasurement'||
    			f=='cargMarks'||
    			f=='cargNameEn'||
    			f=='cargNameCn'||
    			f=='packId')
    	{
    		this.reCalculate();
    	}
    }},
    tbar:[{text:C_ADD,iconCls:'add',disabled:p.get('consBizType')=='T'?false:NR(m+F_M),scope:this,handler:function(){
		var rid=GGUID();
		var c = new FCargo({id:rid,cargId:rid,consId:p.get('consId'),consNo:p.get('consNo'),
		consMasterId:p.get('consMasterId'),consMasterNo:p.get('consMasterNo'),cargMarks:'',cargSpec:'',
		cargManuNo:'',cargNo:'',packId:'',cargPackageNum:0,cargNameCn:'',cargNameEn:'',cargGrossWeight:0,cargNetWeight:0,
			cargMeasurement:0,cargUnit:'',version:'0',rowAction:'N'});
    		store.insert(0,c);sm.selectFirstRow();this.startEditing(0, 2);}},'-',
		{text:C_REMOVE,iconCls:'remove',disabled:p.get('consBizType')=='T'?false:NR(m+F_M),iconCls:'remove',scope:this,handler:function(){
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


//货物选择
Fos.CargoLookupWin = function(a,consId) {    
	var store = new Ext.data.GroupingStore({url:SERVICE_URL+'?A='+a,
 		reader: new Ext.data.XmlReader({record:'FCargo'}, FCargo),groupField:'consNo',sortInfo:{field:'cargId', direction:'ASC'}});
    if(a=='CARG_MID_Q')
    	store.load({params:{consMasterId:consId}});
    else
    	store.load({params:{consId:consId}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel([sm,
	{header:C_CONS_NO,dataIndex:'consNo',width:80},
	{header:C_MARKS,dataIndex:'cargMarks',width:80},
	{header:C_CARGO_NAME_EN,dataIndex:'cargNameEn',width:80},
	{header:C_PACKAGES,dataIndex:'cargPackageNum',width:60},
	{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK},	
	{header:C_NW,dataIndex:'cargNetWeight',width:60},
	{header:C_GW,dataIndex:'cargGrossWeight',width:60},	
	{header:C_CBM,dataIndex:'cargMeasurement',width:60},
	{header:C_MBL_NO,dataIndex:'consMblNo',width:80},
	{header:C_HBL_NO,dataIndex:'consHblNo',width:80},
	{header:C_BOOKER,dataIndex:'custName',width:80},
	{header:C_MANU_NO,dataIndex:'cargManuNo',width:80},
	{header:C_SPEC,dataIndex:'cargSpec',width:80},	
	{header:C_CARGO_NAME_CN,dataIndex:'cargNameCn',width:80},
	{header:C_HS_CODE,dataIndex:'cargNo',width:100},
	{header:C_UNIT,dataIndex:'cargUnit',width:100}]);
	cm.defaultSortable = true;
    var g = new Ext.grid.GridPanel({ 
    id:'G_CARG_LOOKUP',iconCls:'gen',header:false,height:300,width:600,store:store,sm:sm,cm:cm,loadMask: true});	
    Fos.CargoLookupWin.superclass.constructor.call(this,{title:C_CARGO_SEL,modal:true,layout:'fit',width:600,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[{layout:'fit',border:false,
        items: [g]}]}); 
};
Ext.extend(Fos.CargoLookupWin,Ext.Window);