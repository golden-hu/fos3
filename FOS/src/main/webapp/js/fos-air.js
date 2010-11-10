Fos.showG_VOYA = function() {
	var store = new Ext.data.GroupingStore({url: SERVICE_URL+'?A=VOYA_X',
            reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'GVoyage'}, GVoyage),
            baseParams:{mt:'JSON',xml:''},remoteSort:true,
            sortInfo:{field:'voyaId', direction:'DESC'}});            
	this.pa=[];
	store.load({params:{start:0, limit:C_PS}});
	this.reset=function(){
        store.baseParams={mt:'JSON',xml:''};
        store.reload({params:{start:0,limit:C_PS}});
    };
	var sailed=CHKCLM(C_SAILED,'voyaSailedFlag',30);
	var shipMap=CHKCLM(C_SHIP_MAP,'voyaShipMapFlag',30);
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});	
	var cm=new Ext.grid.ColumnModel({columns:[sm,sailed,shipMap,
         {header:C_DISPATCHER,dataIndex: 'voyaDispatcherName',width:40,editor:new Ext.form.ComboBox({xtype:'combo',store:getUSER_S(),
 			displayField:'userLoginName',valueField:'userName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
 			listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('voyaDispatcherId',r.get('userId'));}}
         	})},
         {header:C_OPERATOR,dataIndex: 'voyaOperatorName',width:40,editor:new Ext.form.ComboBox({xtype:'combo',store:getOP_S(),
            displayField:'userLoginName',valueField:'userName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
            listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('voyaOperatorId',r.get('userId'));}}
            })},
		{header:C_VESS,dataIndex:'vessName',width:120,
			editor:new Ext.form.ComboBox({displayField:'vessNameEn',valueField:'vessNameEn',triggerAction:'all',
            mode:'local',tpl:vessTpl,itemSelector:'div.list-item',listWidth:400,selectOnFocus:true,listClass:'x-combo-list-small',store:getVES(),enableKeyEvents:true,
            listeners:{scope:this,select:function(c,r,i){
            	var b=sm.getSelected();if(b){b.set('vessId',r.get('vessId'));
            	b.set('vessNameCn',r.get('vessNameCn'));}},
            keydown:{fn:function(f,e){LV(f,e,2);},buffer:500}}})},
        {header:C_VESS_NAME_CN,dataIndex:'vessNameCn',width:80},
		{header:C_VOYA,dataIndex:'voyaName',width:80,editor:new Ext.form.TextField()},
		{header:C_CARRIER,dataIndex: 'voyaCarrierName',width:100,
			editor:new Ext.form.ComboBox({displayField:'custCode',valueField:'custNameCn',triggerAction: 'all',
            mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCS(),enableKeyEvents:true,
            listeners:{scope:this,select:function(c,r,i){
            	var b =sm.getSelected();b.set('voyaCarrier',r.get('custId'));},
            	keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag',1);},buffer:500}}})},
		{header:C_SHIP_DATE_F,dataIndex: 'voyaShipDateF',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_SHIP_DATE_T,dataIndex: 'voyaShipDateT',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_ETA_V,dataIndex:'voyaEta',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_ETA_T,dataIndex: 'voyaEtaT',width:70,editor:new Ext.form.TextField()},
		{header:C_BERTHING_DATE,dataIndex:'voyaBerthingDate',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_BERTHING_DATE_T,dataIndex: 'voyaBerthingDateT',width:70,editor:new Ext.form.TextField()},
		{header:C_ETD_V,dataIndex:'voyaEtd',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_ETD_T,dataIndex: 'voyaEtdT',width:70,editor:new Ext.form.TextField()},
		{header:C_SAIL_DATE_V,dataIndex:'voyaSailDate',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_SAIL_DATE_T,dataIndex: 'voyaSailDateT',width:70,editor:new Ext.form.TextField()},
		{header:C_SHLI,dataIndex:'shliName',width:100,
			editor:new Ext.form.ComboBox({displayField:'shliName',valueField:'shliName',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getSHLI_S(),
            listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('shliId',r.get('shliId'));}}
            })},
        {header:C_VOYA_QUANTITY,dataIndex: 'voyaQuantity',width:100,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})},
		{header:C_HARBOUR,dataIndex: 'voyaHarbourName',width:100,editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),
			displayField:'placName',valueField:'placName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('voyaHarbourId',r.get('placId'));}}
        	})},
        {header:C_LOAD_DATE_F,dataIndex: 'voyaLoadDateF',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
        {header:C_LOAD_DATE_T,dataIndex: 'voyaLoadDateT',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_VOYA_PORTS,dataIndex: 'voyaPorts',width:100,editor:new Ext.form.TextField()},		
		{header:C_SHIPPED_QUANTITY,dataIndex: 'voyaShippedQuantity',renderer:rateRender,width:100},
		{header:C_FACT_QUANTITY,dataIndex: 'voyaFactQuantity',renderer:rateRender,width:100}],defaults:{sortable:true}});
    this.exp=function(){var b=sm.getSelected(); if(b){EXPC('LOLI','&voyaId='+b.get('voyaId'));} else XMG.alert(SYS,M_NO_DATA_SELECTED);};
    this.expPali=function(A){
    	var b=sm.getSelected();
    	if(b){
    		var w = new Fos.PaliWin();
			w.addButton({text:C_OK,handler:function(){
				var harbourId = w.findById('harbourId').getValue();
				var charterId = w.findById('charterId').getValue();
				var harbourName = w.harbourName;
				OWW(SERVICE_URL+'?A='+A+'&format=xls&charterId='+charterId+'&paliHarbourId='+harbourId+'&paliHarbourName='+harbourName+'&voyaId='+b.get('voyaId'));
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
    	}
    	 else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    this.expVoli=function(){
    	var url = SERVICE_URL+'?A=REPT_VOCU&format=xls';
    	if(store.baseParams.xml){
    		var json= Ext.util.JSON.decode(store.baseParams.xml);
    		var qa=json.FosRequest.data.fosQuery;
    		for(var i=0;i<qa.length;i++){
    			if(qa[i].value==GE)
    				url+='&'+qa[i].key+'F='+qa[i].value;
    			else if(qa[i].value==LE)
    				url+='&'+qa[i].key+'T='+qa[i].value;
    			else
    			url+='&'+qa[i].key+'='+qa[i].value;
    		};
    	}
    	OWW(url);
    };
    this.expOnboard=function(){
    	OWW(SERVICE_URL+'?A=REPT_PARE&format=xls');
    };
    this.expExco=function(){
    	var b=sm.getSelected();
    	if(b){
	    	var w = new Fos.ExcoWin();
			w.addButton({text:C_OK,handler:function(){
				var harbourId = w.findById('harbourId').getValue();
				var harbourName = w.harbourName;
				OWW(SERVICE_URL+'?A=REPT_EXCO&format=xls&paliHarbourId='+harbourId+'&paliHarbourName='+harbourName+'&voyaId='+b.get('voyaId'));
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
    	}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.expVoya=function(){EXP('C','VOYA_LIST',store.baseParams.xml?'&mt=JSON&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON');};
	this.ship=function(){
		var p=sm.getSelected();
		if(p) ADDTAB("T_SHIP_"+p.get('voyaId'),function(){return new Fos.ShipTab(p)});
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.inware=function(){
		var p=sm.getSelected();
		if(p) ADDTAB("T_INWARE_"+p.get('voyaId'),function(){return new Fos.FconInwareGrid(p)});
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.search = function(){var w=new Fos.VoyaLW(store,this.pa);w.show();};
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length>0){
			for(var i=0;i<a.length;i++){
				if(a[i].get('vessId')==''){XMG.alert(SYS,M_VESS_REQIRED);return;}
				else if(a[i].get('voyaName')==''){XMG.alert(SYS,M_VOYA_REQIRED);return;}
				else if(!a[i].get('voyaShipDateF')){XMG.alert(SYS,M_LAY_V_REQIRED);return;}
				else if(!a[i].get('voyaShipDateT')){XMG.alert(SYS,M_CAN_V_REQIRED);return;}
			}
			FOS_POST(store,'GVoyage',GVoyage,'VOYA_S');
		}
		else XMG.alert(SYS,M_NC);
	};	
	this.add=function(){
		var p = new GVoyage({id:GGUID(),voyaId:'0',voyaName:'',vessId:'',vessName:'',voyaClass:'A',voyaCarrier:'',voyaCarrierName:'',voyaHarbourId:'',voyaHarbourName:'',
			vaoyShipMapFlag:'0',voyaEtaT:'',voyaEtdT:'',voyaBerthingDateT:'',voyaSailDateT:'',voyaDispatcherId:'',voyadispacherName:'',
			voyaTeu:'',voyaCld:'',voyaLdd:'',voyaEtd:'',voyaEta:'',voyaBerthingDate:'',shliId:'',shliPorts:'',shliCarrierLine:'',
			voyaSailDate:'',voyaShipMapFlag:'0',voyaSailedFlag:'0',voyaActive:1,version:'0'});
        	this.grid.stopEditing();store.insert(0,p);p.set('rowAction','N');sm.selectFirstRow();this.grid.startEditing(0,3);
	};
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
    this.fastSearch=function(){
        var vessName=kw.getValue();
        if(!vessName){XMG.alert(SYS,M_INPUT_VESS_NAME,function(b){kw.focus();});return;};
        var a=[];
        a[a.length]={key:'vessName',value:vessName,op:LI};
        store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
        store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
    };
	var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',handler:this.fastSearch};    
    var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
	new Ext.KeyMap(Ext.getDoc(), {
        key:'ndspqf',ctrl:true,
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_VOYA');
            if(tc&&tc==T_MAIN.getActiveTab()){
                switch(k) {
	                case Ext.EventObject.N: if(!NR(M1_B+M2_V+F_M)) this.add();break;
	                case Ext.EventObject.D: if(!NR(M1_B+M2_V+F_R)) FOS_REMOVE(sm,store);break;
	                case Ext.EventObject.S: if(!NR(M1_B+M2_V+F_M)) this.save();break;                   
	                case Ext.EventObject.F: this.search();break;
	                case Ext.EventObject.Q: this.fastSearch();break;
	                case Ext.EventObject.P: if(!NR(M1_B+M2_V+F_SH)) this.ship();break;
                }
            }
        },stopEvent:true,scope:this});
    new Ext.KeyMap(Ext.getDoc(), {
        key:[116],
        handler: function(k, e) {
             var tc = T_MAIN.getComponent('G_VOYA');
            if(tc&&tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
         var tc = T_MAIN.getComponent('G_VOYA');
         if(tc&&tc==T_MAIN.getActiveTab()){
            var pt = this.getBottomToolbar();
            if (!pt[page].disabled) pt.onClick(page);
         }
    };
    this.nav = new Ext.KeyNav(Ext.getDoc(),{
        pageDown: this.pagingNav.createDelegate(this,['next']),
        pageUp: this.pagingNav.createDelegate(this, ['prev']),
        home: this.pagingNav.createDelegate(this,['first']),
        end: this.pagingNav.createDelegate(this,['last']),
        scope:this
    });
	this.grid = new  Ext.grid.EditorGridPanel({ 
    id:'G_VOYA',iconCls:'gen',title:C_SHIP_DATE,header:false,plugins:[sailed,shipMap],clicksToEdit:1,closable:true,	
    store: store,sm:sm,cm:cm,loadMask: true,
	bbar:PTB(store,C_PS),
	tbar:[{text:C_ADD+'(N)',disabled:NR(M1_B+M2_V+F_M),iconCls:'add',scope:this,handler:this.add},'-',
        {text:C_REMOVE+'(D)',disabled:NR(M1_B+M2_V+F_R),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE+'(S)',disabled:NR(M1_B+M2_V+F_M),iconCls:'save',scope:this,handler:this.save},'-',
        {text:C_SHIP+'(P)',disabled:NR(M1_B+M2_V+F_SH),iconCls:'save',scope:this,handler:this.ship},'-',
        {text:C_SEARCH+'(F)',iconCls:'search',scope:this,handler:this.search},'-',
        kw,b8,'-',b9,'-',
        {text:C_PACKING_INWARE_INFO+'(I)',disabled:NR(M1_B+M2_V+F_SH),iconCls:'save',scope:this,handler:this.inware},'-',
        {text:C_EXPORT,iconCls:'print',disabled:false,scope:this,menu:{items: [
                {text:C_VOYA_LIST,scope:this,handler:this.expVoya},
                {text:C_PACKING_LIST_PACU,scope:this,handler:function(){this.expPali('REPT_PACU');}},
                {text:C_PACKING_LIST_PAHY,scope:this,handler:function(){this.expPali('REPT_PAHY');}},
                {text:C_PACKING_LIST_PACBM,scope:this,handler:function(){this.expPali('REPT_PACBM');}},
                {text:C_PACKING_LIST_PAPI,scope:this,handler:function(){this.expPali('REPT_PAPI');}},
                {text:C_PACKING_LIST_PAPL,scope:this,handler:function(){this.expPali('REPT_PAPL');}},
                {text:C_PACKING_LIST_PASL,scope:this,handler:function(){this.expPali('REPT_PASL');}},
                {text:C_HARBOUR_EXP_CONFIRM,scope:this,handler:this.expExco},
                {text:C_VOYA_PACKING_LIST,scope:this,handler:this.expVoli},
        		{text:C_SHIPPING_LIST,scope:this,handler:this.exp},
        		{text:C_PACKING_ONBOARD_INFO,scope:this,handler:this.expOnboard}
        		]}}
		  ,'-']
    }); 
    return this.grid;
};

Fos.PakingListGrid = function(T){
	var store = GS('PALI_X','FPackingList',FPackingList,'paliId','DESC','fconContractNo','','');
	var a=[];
    a[0]={key:'voyaSailedFlag',value:T=='N'?0:1,op:EQ};
    store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
    if(T=='N') store.load();
    else store.load({params:{start:0,limit:C_PS100}});	
	this.reset=function(){store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
		if(T=='N') store.load();
    	else store.load({params:{start:0,limit:C_PS100}});
	};
	var gv=new Ext.grid.GroupingView({showGroupName:true,enableNoGroups:true,hideGroupedColumn:false,
		groupTextTpl: '{text} ({[values.rs.length]} {["Items"]})',
		getRowClass: function(record, index) {			   
            if (record.get('paliTransFlag')&&record.get('paliArriveDate')!=''&&(record.get('paliHarbourId')!=record.get('paliStationIdNow'))) return 'purple-font-row';
            else if (record.get('paliTransFlag')&&record.get('paliArriveDate')=='') return 'green-font-row';
            else if (record.get('paliArriveDate')=='') return 'blue-font-row';
            else return '';
        }});
	var summary = new Ext.grid.GroupSummary();
	var arrived=CHKCLM(C_ARRIVED,'paliStatus',50);
	var c1={header:C_PACKING_LABEL,width:70,dataIndex:"paliLabel",editor:new Ext.form.TextField({}),summaryRenderer: function(v,p,d){return '合计：';}};
	var c2={header:C_PACKING_TRACK_NO,width:70,dataIndex:"paliTrackNo",editor:new Ext.form.TextField({})};
	var c3={header:C_PACKING_LINE_NO,width:25,dataIndex:"paliLineNo",editor:new Ext.form.TextField({})};
	var c4={header:C_SPEC,width:120,dataIndex:"paliSpec",editor:new Ext.form.TextField()};
	var c5={header:C_PACKAGES,width:40,dataIndex:"paliPackages",align:'right',editor:new Ext.form.NumberField({}),summaryType:'sum'};
	var c6={header:C_GW,width:60,dataIndex:"paliGrossWeight",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
	
	var c7={header:C_CARGO_DELIVERY_DATE,dataIndex:'paliLoadDate',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var c8={header:C_PACKING_EXP_PORT,dataIndex: 'paliHarbourId',width:60,renderer:function(v,m,r){return r.get('paliHarbourName')},
			editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
            	var b=sm.getSelected();if(b){b.set('paliHarbourName',r.get('placName'));}}}
			})};
	var c9={header:C_PACKING_STATION,dataIndex: 'paliStationName',width:60,
			editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();if(b){
	            		b.set('paliStationId',r.get('placId'));
	            		b.set('paliStationName',r.get('placName'));
	            		if(b.get('paliTransFlag')!=1){
	            			b.set('paliStationIdNow',r.get('placId'));
	            			b.set('paliStationNameNow',r.get('placName'));
	            		}
	            }}}
		})};
	var c10={header:C_PACKING_ARRIVE_DATE,dataIndex:'paliArriveDate',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var c11={header:C_PACKING_LOCATION,width:60,dataIndex:"paliLocation",editor:new Ext.form.TextField({
		listeners:{scope:this,change:function(c,nv,ov){
		var b=sm.getSelected();
		if(b){
			b.set('paliLocationNow',nv);
			if(b.get('paliLocationNow')&&(b.get('paliStationId')==b.get('paliStationIdNow'))) 
				b.set('paliStatus',1);
		}
	}}
	})};
	var c12={header:C_TRACK_TYPE,dataIndex: 'paliTrackType',width:40,renderer:getTRACK_T,
			editor:new Ext.form.ComboBox({xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
	var c13={header:C_STATION_NOW,width:50,dataIndex:"paliStationNameNow"};
	var c14={header:C_LOCATION_NOW,width:60,dataIndex:"paliLocationNow",editor:new Ext.form.TextField({
		listeners:{scope:this,change:function(c,nv,ov){
		var b=sm.getSelected();
		if(b){
			b.set('paliLocationNow',nv);
			if(b.get('paliLocationNow')&&(b.get('paliStationId')==b.get('paliStationIdNow'))) 
				b.set('paliStatus',1);
		}
	}}
	})};	
	var c15={header:C_CONTRACT_NO,width:80,dataIndex:"fconContractNo"};
	var c16={header:C_VESS,width:60,dataIndex:'vessName'};	
	var c17={header:C_POD,width:60,dataIndex:"fconPodEn"};
	var c18={header:C_RENTER,width:55,dataIndex:"charterName"};
	var c19={header:C_SHIPPER,width:55,dataIndex:"custName"};
	var c20={header:C_PACK,dataIndex:'packId',width:40,renderer:function(v,m,r){return r.get('packName')},
		editor:new Ext.form.ComboBox({xtype:'combo',store:getPACK_S(),displayField:'packName',valueField:'packId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){
        	var b=sm.getSelected();if(b){b.set('packName',r.get('packName'));}}}
		})};
	var c21={header:C_CARGO_NAME_CN,width:100,dataIndex:"cargNameCn",editor:new Ext.form.TextField({})};
	var c22={header:C_CARGO_NAME_EN,width:100,dataIndex:"cargNameEn",editor:new Ext.form.TextField({})};
	var c23={header:C_VESS_NAME_CN,width:60,dataIndex:"vessNameCn"};
	var c24={header:C_VOYA,width:60,dataIndex:"voyaName"};
	var c25={header:C_CUDE_TYPE,width:60,dataIndex:"fconCudeType",renderer:getCUTY};
	var c26={header:C_TRACK_TYPE_P,dataIndex:'paliTrackTypeP',width:40,renderer:getTRACK_T,
			editor:new Ext.form.ComboBox({xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
	var c27={header:C_BL_NO,dataIndex:'consMblNo',editor:new Ext.form.TextField(),width:100};
	var c28={header:C_CBM_S,width:60,dataIndex:"paliCbm",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
    var c29={header:C_CBM_C,width:60,dataIndex:"paliCbmC",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
    var c30={header:C_PIECES,width:60,dataIndex:"paliPieces",align:'right',editor:new Ext.form.NumberField(),summaryType:'sum'};
    var c31={header:C_LENGTH,width:60,dataIndex:"paliLength",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4})};
    var c32={header:C_TOTAL_LENGTH,width:60,dataIndex:"paliTotalLength",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
    var c33={header:C_UNIT_LEN,width:60,dataIndex:"unitNameLen",
            editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_S(),listeners:{
            scope:this,select:function(c,r,i){
                var b=this.getSelectionModel().getSelected();
                b.set('unitIdLen',r.get('unitId'));}}})};
    var c34={header:C_TRANS_TIMES,dataIndex:'paliTransTimes',width:30};
       
	var transFlag=CHKCLM(C_TRANS_FLAG,'paliTransFlag',30);
	var inspFlag=CHKCLM(C_INSP_FLAG,'fconInspectionFlag',30);
	var invFlag=CHKCLM(C_INV_FLAG,'fconInvoiceFlag',30);
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false,moveEditorOnEnter:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,arrived,c18,c19,c15,c1,c2,c3,c4,c5,c20,c6,c28,c29,c30,c31,c32,c33,c7,c8,c9,c12,c26,c27,
	            c10,c11,transFlag,c34,c13,c14,invFlag,c25,inspFlag,c16,c23,c24,c17,c21,c22],defaults:{sortable:true,width:100}});
	var copy=function(b){
		var e = new FPackingList({});var rid=GGUID();
		var f = FPackingList.prototype.fields;
		for (var i=0;i<f.keys.length;i++){var fn=''+f.keys[i];e.set(fn,b.get(fn));}
		e.set('version','1');e.set('id',rid);e.set('paliId',rid);
		e.set('paliStatus',0);e.set('userId','');e.set('grouId','');e.set('vayaSailedFlag',0);
		return e;
	};
	this.removePK=function(){
		var r = sm.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
			store.remove(r[i]);}
		}
		else XMG.alert(SYS,M_R_P);
	};
	this.save=function(){
		var sa = store.getModifiedRecords();
		if(sa.length){
			var x = ATX(sa,'FPackingList',FPackingList);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'PALI_S'},
				success: function(res){
					var a = XTRA(res.responseXML,'FPackingList',FPackingList);
					var fields = FPackingList.prototype.fields;			
					for(var i=0;i<sa.length;i++){
						for(var j=0;j<a.length;j++){	
							if(sa[i].get('id')==a[j].get('id')){
								for(var k = 0;k < fields.length;k++){
									var f = fields.items[k];
									var fn=f.name;
									if(fn!='charterName'&&fn!='custName'&&fn!='fconPodEn'&&fn!='fconInvoiceFlag'&&fn!='fconCudeType'&&fn!='fconInspectionFlag')
										sa[i].set(fn,a[j].get(fn));
								}
								break;
							}
						}
					}
					store.suspendEvents();
					store.commitChanges();
					store.resumeEvents();
					XMG.alert(SYS,M_S);},
				failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
				xmlData:FOSX(x)
			});
		}
		else XMG.alert(SYS,M_NC);
	};	
	this.cp=function(){
		var b = sm.getSelected();
		if(b){
			var e=copy(b);var idx=store.indexOf(b);
			this.stopEditing();store.insert(idx+1,e);e.set('rowAction','N');sm.selectNext();this.startEditing(idx+1,4);
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.showTran=function(){
		var b = sm.getSelected();
		if(b){var frm = new Fos.TrliWin(b);frm.show();}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	
	this.batchTran=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.TransWin();
			w.addButton({text:C_OK,handler:function(){
				var trliTrackType = w.findById('trliTrackType').getValue();
				var trliTranDate = w.findById('trliTranDate').getValue();
				var trliStationId = w.findById('trliStationId').getValue();
				var trliArriveDate = w.findById('trliArriveDate').getValue();
				var trliLocation = w.findById('trliLocation').getValue();
				var stationName = w.stationName;
				var ra=[];            
				for(var i=0;i<a.length;i++){
					var r=a[i];var rid =GGUID();
					var e = new FTransList({id:rid,trliId:rid,fconId:r.get('fconId'),paliId:r.get('paliId'),
					    trliStationIdO:r.get('paliStationIdNow'),trliStationNameO:r.get('paliStationNameNow'),
                        trliLocationO:r.get('paliLocationNow'),
						trliStationId:trliStationId,trliStationName:stationName,trliTranDate:trliTranDate,trliArriveDate:trliArriveDate,
						trliTrackType:trliTrackType,trliLocation:trliLocation,version:'0',rowAction:'N'});
					ra[ra.length]=e;
				}
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TRLI_S'},
					success: function(r){
					if(T=='N')
		        		store.reload();
		        	else
		     			store.reload({params:{start:0,limit:C_PS100}});
						XMG.alert(SYS,M_S);
					},
					failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(ATX(ra,'FTransList',FTransList))
				});
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchSpec=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_SPEC,function(b,v){if(b=='ok')  for(var i=0;i<r.length;i++){r[i].set('paliSpec',v);}});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchBl=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_BL_NO,function(b,v){
				if(b=='ok'){
					for(var i=0;i<r.length;i++){r[i].set('consMblNo',v);}
				}
			});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchHarbour=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.HarbourWin();
			w.addButton({text:C_OK,handler:function(){
				var harbourId = w.findById('paliHarbourId').getValue();
				var harbourName = w.harbourName;
				for(var i=0;i<a.length;i++){a[i].set('paliHarbourId',harbourId);a[i].set('paliHarbourName',harbourName);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchStation=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.StationWin();
			w.addButton({text:C_OK,handler:function(){
				var stationId = w.findById('paliStationId').getValue();
				var stationName = w.stationName;
				for(var i=0;i<a.length;i++){
				    a[i].set('paliStationId',stationId);
				    a[i].set('paliStationName',stationName);
				    if(a[i].get('paliTransFlag')!=1){
                        a[i].set('paliStationIdNow',stationId);
                        a[i].set('paliStationNameNow',stationName);
                    }
				}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchArriveDate=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.DateSelWin(C_PACKING_ARRIVE_DATE);
			w.addButton({text:C_OK,handler:function(){
				var dd = w.findById('dd').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliArriveDate',dd);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchLocation=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_PACKING_LOCATION,function(b,v){if(b=='ok')  
			for(var i=0;i<r.length;i++){r[i].set('paliLocation',v);if(r[i].get('paliTransFlag')!=1){r[i].set('paliLocationNow',v);}}});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchTrackType=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.TrackTypeWin(C_TRACK_TYPE);
			w.addButton({text:C_OK,handler:function(){
				var paliTrackType = w.findById('paliTrackType').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliTrackType',paliTrackType);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchTrackTypeP=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.TrackTypeWin(C_TRACK_TYPE_P);
			w.addButton({text:C_OK,handler:function(){
				var paliTrackType = w.findById('paliTrackType').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliTrackTypeP',paliTrackType);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchPack=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.PackWin();			
			w.addButton({text:C_OK,handler:function(){
				var packId = w.findById('packId').getValue();
				var packName = w.packName;
				for(var i=0;i<a.length;i++){a[i].set('packId',packId);a[i].set('packName',packName);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchCargoNameCn=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_CARGO_NAME_CN,function(b,v){if(b=='ok')  for(var i=0;i<r.length;i++){r[i].set('cargNameCn',v);}});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchLen=function(){
        var a=sm.getSelections();
        if(a.length){
            var w = new Fos.LenWin(C_LENGTH);          
            w.addButton({text:C_OK,handler:function(){
                var len = w.findById('len').getValue();
                for(var i=0;i<a.length;i++){a[i].set('paliLength',len);a[i].set('paliTotalLength',len*a[i].get('paliPieces'))}
                w.close();
            }},this);
            w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
            w.show();
        }
        else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    this.batchTotalLen=function(){
        var a=sm.getSelections();
        if(a.length){
            var w = new Fos.LenWin(C_TOTAL_LENGTH);          
            w.addButton({text:C_OK,handler:function(){
                var len = w.findById('len').getValue();
                for(var i=0;i<a.length;i++){a[i].set('paliTotalLength',len);
                if(a[i].get('paliPieces')>0) a[i].set('paliLength',len/a[i].get('paliPieces'))}
                w.close();
            }},this);
            w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
            w.show();
        }
        else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    this.batchLenUnit=function(){
        var a=sm.getSelections();
        if(a.length){
            var w = new Fos.UnitWin();          
            w.addButton({text:C_OK,handler:function(){
                var unitName = w.findById('unitName').getValue();
                var unitId = w.unitId;
                for(var i=0;i<a.length;i++){a[i].set('unitNameLen',unitName);a[i].set('unitIdLen',unitId);}
                w.close();
            }},this);
            w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
            w.show();
        }
        else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
	this.search = function(){var w=new Fos.PaliLookup(store,T);w.show();};
	this.expPali=function(){EXP('C','PACK_LIST',store.baseParams.xml?'&mt=JSON&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON');};
	this.exp=function(){
		var w = new Fos.PaliExpWin();
		w.addButton({text:C_OK,handler:function(){
			var harbourId = w.findById('harbourId').getValue();
			var createTime = w.findById('createTime').getValue().format(DATEF);
			var harbourName = w.harbourName;
			OWW(SERVICE_URL+'?A=REPT_PALI&format=xls&paliHarbourId='+harbourId+'&paliHarbourName='+harbourName+'&createTime='+createTime);
			w.close();
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
		w.show();
	};
	this.expInv=function(){
		var w = new Fos.CustSelWin();
		w.addButton({text:C_OK,handler:function(){
			var charterId = w.custId;
			OWW(SERVICE_URL+'?A=REPT_PAIV&format=xls&charterId='+charterId);
			w.close();
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
		w.show();
	};
	
	this.expOverDuty=function(){
        var w = new Fos.DateSelWin(C_STAT_DATE);
        w.addButton({text:C_OK,handler:function(){
            var dd = w.findById('dd').getValue();
            OWW(SERVICE_URL+'?A=REPT_PAOD&format=xls&d='+dd.format(DATEF));
            w.close();
        }},this);
        w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
        w.show();
    };
    this.expLiveOverDuty=function(){
        var w = new Fos.DateSelWin(C_STAT_DATE);
        w.addButton({text:C_OK,handler:function(){
            var dd = w.findById('dd').getValue();
            OWW(SERVICE_URL+'?A=REPT_PAON&format=xls&d='+dd.format(DATEF));
            w.close();
        }},this);
        w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
        w.show();
    };
    
	new Ext.KeyMap(Ext.getDoc(), {
		key:'sdczf',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_PALI_X');
		 	if(tc && tc==T_MAIN.getActiveTab()){
		 		var tb=this.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.S:
					if(!tb.getComponent('TB_S').disabled) this.save();break;
		 		case Ext.EventObject.D:
		 			if(!tb.getComponent('TB_R').disabled) this.removePK();break;
		 		case Ext.EventObject.C:
		 			if(!tb.getComponent('TB_C').disabled) this.cp();break;	 		
		 		case Ext.EventObject.Z:
		 			if(!tb.getComponent('TB_Z').disabled) this.showTran();break;
				case Ext.EventObject.F:
					if(!tb.getComponent('TB_F').disabled) this.search();break;
				}
		 	}
		},stopEvent:true,scope:this});
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
   
    this.fastSearch=function(){
        var fconContractNo=kw.getValue();
        if(!fconContractNo){XMG.alert(SYS,M_INPUT_FCON_NO,function(b){kw.focus();});return;};
        var a=[];
        a[0]={key:'voyaSailedFlag',value:T=='N'?0:1,op:EQ};
        var c=fconContractNo.indexOf(',');
        var b=fconContractNo.indexOf('..');
        if(c>=0){
            a[a.length]={key:'fconContractNo',value:fconContractNo,op:IN};
        }
        else if(b>=0){
            var ra=consNo.split('..');
            a[a.length]={key:'fconContractNo',value:ra[0],op:GE};
            a[a.length]={key:'fconContractNo',value:ra[1],op:LE};
        }
        else
        	a[a.length]={key:'fconContractNo',value:fconContractNo,op:LI};
        store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
        if(T=='N')
        	store.reload({callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
        else 
        	store.reload({params:{start:0,limit:C_PS100},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
    };
    var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',scope:this,handler:this.fastSearch}; 
    var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
    new Ext.KeyMap(Ext.getDoc(), {
        key:[116],
        handler: function(k, e) {
           var tc = T_MAIN.getComponent('G_PALI_X');
           if(tc && tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
        var tc = T_MAIN.getComponent('G_PALI_X');
        if(tc && tc==T_MAIN.getActiveTab()){
            var pt = this.getBottomToolbar();
            if (!pt[page].disabled) pt.onClick(page);
         }
    };
    this.nav = new Ext.KeyNav(Ext.getDoc(),{
        pageDown: this.pagingNav.createDelegate(this,['next']),
        pageUp: this.pagingNav.createDelegate(this, ['prev']),
        home: this.pagingNav.createDelegate(this,['first']),
        end: this.pagingNav.createDelegate(this,['last']),
        scope:this
    });
	Fos.PakingListGrid.superclass.constructor.call(this, {id:'G_PALI_X_'+T,title:C_PACKING_LIST+'-'+(T=='N'?C_NOT_SAILED:C_SAILED),
		border:true,autoScroll:true,clicksToEdit:1,view:gv,plugins:[arrived,transFlag,summary],
	    stripeRows:true,store:store,sm:sm,cm:cm,closable:true,listeners:{scope:this,
			afteredit:function(e){
			var f=e.field;var r=e.record;
	    	if(f=='paliPackages'){r.set('paliPackages',e.value);frm.reCalculate();}	    	
			else if(f=='paliGrossWeight'){r.set('paliGrossWeight',e.value);frm.reCalculate();}
			else if(f=='paliSpec'){r.set('paliCbmC',eval(e.value));}
			else if(f=='paliLocation'){if(r.get('paliTransFlag')!=1){r.set('paliLocationNow',e.value);}}
			else if(f=='paliLength'){r.set('paliTotalLength',e.value*r.get('paliPieces'));}
			else if(f=='paliPieces'){r.set('paliTotalLength',e.value*r.get('paliLength'));}
			else if(f=='paliTotalLength'){if(r.get('paliPieces')>0) r.set('paliLength',e.value/r.get('paliPieces'));}
	    }},
	    tbar:[
			{itemId:'TB_R',text:C_REMOVE+'(D)',iconCls:'remove',disabled:false,scope:this,handler:this.removePK},'-',
			{itemId:'TB_S',text:C_SAVE+'(S)',iconCls:'save',disabled:false,scope:this,handler:this.save},'-',
			{itemId:'TB_C',text:C_COPY+'(C)',iconCls:'copy',disabled:false,scope:this,handler:this.cp},'-',
			{itemId:'TB_Z',text:C_TRANS+'(Z)',iconCls:'redo',disabled:false,handler:this.showTran},'-',
			{text:C_BATCH_OP,iconCls:'copy',scope:this,menu: {items: [
				{text:C_BATCH_SPEC,iconCls:'copy',disabled:false,scope:this,handler:this.batchSpec},
				{text:C_BATCH_HARBOUR,iconCls:'copy',disabled:false,scope:this,handler:this.batchHarbour},
				{text:C_BATCH_STATION,iconCls:'copy',disabled:false,scope:this,handler:this.batchStation},
				{text:C_BATCH_LOCATION,iconCls:'copy',disabled:false,scope:this,handler:this.batchLocation},
				{text:C_BATCH_ARRIVE_DATE,iconCls:'copy',disabled:false,scope:this,handler:this.batchArriveDate},
				{text:C_BATCH_TRACK_TYPE,iconCls:'copy',disabled:false,scope:this,handler:this.batchTrackType},
				{text:C_BATCH_TRACK_TYPE_P,iconCls:'copy',disabled:false,scope:this,handler:this.batchTrackTypeP},
				{text:C_BATCH_PACK,iconCls:'copy',disabled:false,scope:this,handler:this.batchPack},
				{text:C_BATCH_CARGO_NAME_CN,iconCls:'copy',disabled:false,scope:this,handler:this.batchCargoNameCn},
				{text:C_BATCH_BL,iconCls:'copy',disabled:false,scope:this,handler:this.batchBl},
				{text:C_BATCH_LEN,iconCls:'redo',disabled:false,handler:this.batchLen},
				{text:C_BATCH_TOTAL_LEN,iconCls:'redo',disabled:false,handler:this.batchTotalLen},
				{text:C_BATCH_UNIT_LEN,iconCls:'redo',disabled:false,handler:this.batchLenUnit},
				{text:C_TRANS_BATCH,iconCls:'redo',disabled:false,handler:this.batchTran}
			]}},'-',			
			{text:C_EXPORT,iconCls:'print',scope:this,menu: {items:[
			    {text:C_PACKING_LIST,scope:this,handler:this.expPali},
			    {text:C_POD_SHIPPING_ADVICE,scope:this,handler:this.exp},
			    {text:C_INVENTORY_LIST,scope:this,handler:this.expInv},
			    {text:C_OVERDUTY_LIST,scope:this,handler:this.expOverDuty},
			    {text:C_LIVE_OVERDUTY_LIST,scope:this,handler:this.expLiveOverDuty}
			    ]}},'-',
			 {itemId:'TB_F',text:C_SEARCH+'(F)',disabled:false,iconCls:'search',scope:this,handler:this.search},'-',
            kw,b8,'-',b9,'-'],		
		bbar:T=='N'?'':PTB(store,C_PS100)
		});
};
Ext.extend(Fos.PakingListGrid,Ext.grid.EditorGridPanel);
Fos.PaliGrid = function(p,store,loliS,frm){
	var blStore = GS('BL_Q','FBl',FBl,'blId','DESC','','','id');
	blStore.load({params:{fconId:p.get('fconId')}});
	var arrived=CHKCLM(C_ARRIVED,'paliStatus',50);
	var gv=new Ext.grid.GroupingView({
		showGroupName:true,enableNoGroups:false,hideGroupedColumn:false,
		groupTextTpl: '{text} ({[values.rs.length]} {["Items"]})',
		getRowClass: function(record, index) {			   
            if (record.get('paliTransFlag')&&record.get('paliArriveDate')!=''&&(record.get('paliHarbourId')!=record.get('paliStationIdNow'))) return 'purple-font-row';
            else if (record.get('paliTransFlag')&&record.get('paliArriveDate')=='') return 'green-font-row';
            else if (record.get('paliArriveDate')=='') return 'blue-font-row';
            else return '';
        }
		});
        
	var summary = new Ext.grid.GroupSummary();
	var c1={header:C_PACKING_LABEL,width:80,dataIndex:"paliLabel",editor:new Ext.form.TextField(),summaryRenderer: function(v,params,data){return '合计：';}};
	var c2={header:C_PACKING_TRACK_NO,width:80,dataIndex:"paliTrackNo",editor:new Ext.form.TextField({})};
	var c3={header:C_PACKING_LINE_NO,width:25,dataIndex:"paliLineNo",editor:new Ext.form.TextField({})};
	var c4={header:C_SPEC,width:120,dataIndex:"paliSpec",editor:new Ext.form.TextField()};	
	var c5={header:C_PACKAGES,width:40,dataIndex:"paliPackages",align:'right',editor:new Ext.form.NumberField({}),summaryType:'sum'};
	var c6={header:C_GW,width:60,dataIndex:"paliGrossWeight",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
	var c7={header:C_CARGO_DELIVERY_DATE,dataIndex:'paliLoadDate',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var c8={header:C_PACKING_EXP_PORT,dataIndex: 'paliHarbourName',width:60,
			editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
            	var b=sm.getSelected();if(b){b.set('paliHarbourId',r.get('placId'));}}}
			})};
	var c9={header:C_PACKING_STATION,dataIndex: 'paliStationName',width:60,
			editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();if(b){
	            		b.set('paliStationId',r.get('placId'));
	            		b.set('paliStationName',r.get('placName'));
	            		if(b.get('paliTransFlag')!=1){
	            			b.set('paliStationIdNow',r.get('placId'));
	            			b.set('paliStationNameNow',r.get('placName'));
	            		}
	            }}}
		})};
	var c10={header:C_PACKING_ARRIVE_DATE,dataIndex:'paliArriveDate',width:70,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var c11={header:C_PACKING_LOCATION,width:60,dataIndex:"paliLocation",editor:new Ext.form.TextField({
		listeners:{scope:this,change:function(c,nv,ov){
		var b=sm.getSelected();
		if(b){
			b.set('paliLocationNow',nv);
			if(b.get('paliLocationNow')&&(b.get('paliStationId')==b.get('paliStationIdNow'))) 
				b.set('paliStatus',1);
		}
	}}
	})};
	var c12={header:C_TRACK_TYPE,dataIndex:'paliTrackType',width:40,renderer:getTRACK_T,
			editor:new Ext.form.ComboBox({xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
	var c13={header:C_STATION_NOW,width:50,dataIndex:"paliStationNameNow"};
	var c14={header:C_LOCATION_NOW,width:60,dataIndex:"paliLocationNow",editor:new Ext.form.TextField({
		listeners:{scope:this,change:function(c,nv,ov){
		var b=sm.getSelected();
		if(b){
			b.set('paliLocationNow',nv);
			if(b.get('paliLocationNow')&&(b.get('paliStationId')==b.get('paliStationIdNow'))) 
				b.set('paliStatus',1);
		}
	}}
	})};	
	var c15={header:C_PACK,dataIndex:'packName',width:40,
			editor:new Ext.form.ComboBox({xtype:'combo',store:getPACK_S(),displayField:'packName',valueField:'packName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
	        	var b=sm.getSelected();if(b){b.set('packId',r.get('packId'));}}}
			})};
	var c16={header:C_CARGO_NAME_CN,width:100,dataIndex:"cargNameCn",editor:new Ext.form.TextField({})};
	var c17={header:C_CARGO_NAME_EN,width:100,dataIndex:"cargNameEn",editor:new Ext.form.TextField({})};
	var c18={header:C_VESS,dataIndex:'vessName',width:60,
			editor:new Ext.form.ComboBox({xtype:'combo',store:loliS,displayField:'vessName',valueField:'vessName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
            		var b=sm.getSelected();
            		if(b){
        			b.set('vessId',r.get('vessId'));
        			b.set('vessName',r.get('vessName'));
        			b.set('vessNameCn',r.get('vessNameCn'));
        			b.set('voyaId',r.get('voyaId'));
        			b.set('voyaName',r.get('voyaName'));
        			b.set('loliId',r.get('loliId'));
        			b.set('consId',r.get('consId'));
        			b.set('consNo',r.get('consNo'));
        			b.set('consMblNo',r.get('consMblNo'));
            	}}}
			})};	
	var c23={header:C_VESS_NAME_CN,width:60,dataIndex:"vessNameCn"};
	var c24={header:C_VOYA,width:60,dataIndex:"voyaName"};
	var c25={header:C_TRACK_TYPE_P,dataIndex:'paliTrackTypeP',width:40,renderer:getTRACK_T,
			editor:new Ext.form.ComboBox({xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
	var c27={header:C_BL_NO,dataIndex:'consMblNo',width:40,
			editor:new Ext.form.ComboBox({xtype:'combo',store:blStore,displayField:'blNo',valueField:'blNo',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
			
	var c28={header:C_CBM_S,width:60,dataIndex:"paliCbm",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
    var c29={header:C_CBM_C,width:60,dataIndex:"paliCbmC",align:'right',renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4}),summaryType:'sum'};
    var c30={header:C_PIECES,width:60,dataIndex:"paliPieces",align:'right',editor:new Ext.form.NumberField(),summaryType:'sum'};
    var c31={header:C_LENGTH,width:60,dataIndex:"paliLength",align:'right',editor:new Ext.form.NumberField()};
    var c32={header:C_TOTAL_LENGTH,width:60,dataIndex:"paliTotalLength",align:'right',editor:new Ext.form.NumberField()};
    var c33={header:C_UNIT_LEN,width:60,dataIndex:"unitNameLen",
            editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_S(),listeners:{
            scope:this,select:function(c,r,i){
                var b=this.getSelectionModel().getSelected();
                b.set('unitIdLen',r.get('unitId'));}}})};
     var c34={header:C_TRANS_TIMES,dataIndex:'paliTransTimes',width:30};
     
	var transFlag=CHKCLM(C_TRANS_FLAG,'paliTransFlag',30);
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,arrived,c1,c2,c3,c4,c5,c15,c6,c28,c29,c30,c31,c32,c33,c7,c8,c9,c10,c11,c12,c25,
		transFlag,c34,c27,c18,c23,c24,c13,c14,c16,c17],defaults:{sortable: true,width:100}});
	var copy=function(b){		
		var e = new FPackingList({});var rid=GGUID();
		var f = FPackingList.prototype.fields;
		for (var i=0;i<f.keys.length;i++){var fn=''+f.keys[i];e.set(fn,b.get(fn));}
		e.set('version','1');e.set('id',rid);e.set('paliId',rid);e.set('vayaSailedFlag',0);
		e.set('paliStatus',0);e.set('userId','');e.set('grouId','');
		return e;
	};
	this.add=function(){
		var id=GGUID();
		var b = sm.getSelected();
		if(b){var idx=store.indexOf(b);
			var e=copy(b);e.set('paliTrackNo','');e.set('paliPackages','');e.set('paliGrossWeight','');
			this.stopEditing();store.insert(idx+1,e);e.set('rowAction','N');sm.selectNext();this.startEditing(idx+1,2);
			frm.reCalculate();
		}
		else{
			var vessId='',vessName='',vessNameCn='',voyaId='',voyaName='',loliId='',consId='',consNo='',consMblNo='';
			var a=loliS.getRange();
			if(a.length>1){
				vessId=a[1].get('vessId');vessName=a[1].get('vessName');vessNameCn=a[1].get('vessNameCn');
				voyaId=a[1].get('voyaId');voyaName=a[1].get('voyaName');loliId=a[1].get('loliId');
				consId=a[1].get('consId');consNo=a[1].get('consNo');consMblNo=a[1].get('consMblNo');
			}
			var e = new FPackingList({id:id,paliId:id,fconId:p.get('fconId'),fconNo:p.get('fconNo'),
			fconContractNo:p.get('fconContractNo'),packId:p.get('packId'),packName:p.get('packName'),
			cargNameCn:p.get('cargNameCn'),cargNameEn:p.get('cargNameEn'),
			vessId:vessId,vessName:vessName,vessNameCn:vessNameCn,voyaId:voyaId,voyaName:voyaName,
			loliId:loliId,consId:consId,consNo:consNo,consMblNo:consMblNo,
    		paliLabel:'',paliTrackNo:'',paliLineNo:'',paliSpec:'',paliPackages:'',paliGrossWeight:'',
    		paliHarbourId:'',paliStationId:'',paliTrackType:'',vayaSailedFlag:0,
    		paliLoadDate:'',paliArriveDate:'',paliLocation:'',paliTransFlag:0,paliStatus:0,
    		version:'0'});
    	this.stopEditing();store.insert(0,e);e.set('rowAction','N');sm.selectFirstRow();this.startEditing(0, 1);
		}
	};
	this.removePK=function(){
		var r = sm.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
			store.remove(r[i]);frm.reCalculate();}
		}
		else XMG.alert(SYS,M_R_P);
	};
	this.reloadFcon=function(r,o,s){
		var cs = new Ext.data.Store({url: SERVICE_URL+'?A='+'FCON_Q',
			reader:new Ext.data.JsonReader({root:'FContract'}, FContract)});
	    cs.load({params:{mt:'JSON',fconId:p.get('fconId')},callback:function(r,o,s){
	    	if(s&&r.length>0){
				var c=r[0];
				p.beginEdit();
				var f = FConsign.prototype.fields;
				for (var i = 0; i < f.keys.length; i++) {
					var fn = ''+f.keys[i];
					p.set(fn,c.get(fn));
				}
				p.endEdit();
	    	}
	    }});
	};
	this.save=function(){
		var sa = store.getModifiedRecords();
		if(sa.length){			
			var x = ATX(sa,'FPackingList',FPackingList);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'PALI_S'},
				success: function(res){
					var a = XTRA(res.responseXML,'FPackingList',FPackingList);FOSU(store,a,FPackingList);
					this.reloadFcon();					    
					XMG.alert(SYS,M_S);},
				failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
				xmlData:FOSX(x)
			});
		}
		else XMG.alert(SYS,M_NC);
	};	
	this.cp=function(){
		var b = sm.getSelected();
		if(b){
			var e=copy(b);var idx=store.indexOf(b);
			this.stopEditing();store.insert(idx+1,e);e.set('rowAction','N');sm.selectNext();this.startEditing(idx+1,2);
			frm.reCalculate();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.impData=function(){
		var win = new Fos.FileUploadWin(C_IMP_DATA,C_IMP_DATA);		
		win.addButton({text:C_UPLOAD,handler:function(){
			var f = Fos.FileUploadWin.superclass.findById.call(win,'F_UP');
			if(f.getForm().isValid()){
				var vessId='',vessName='',vessNameCn='',voyaId='',voyaName='',loliId='',consId='',consNo='';
				var a=loliS.getRange();
				if(a.length>1){
					vessId=a[1].get('vessId');vessName=a[1].get('vessName');vessNameCn=a[1].get('vessNameCn');
					voyaId=a[1].get('voyaId');voyaName=a[1].get('voyaName');loliId=a[1].get('loliId');
					consId=a[1].get('consId');consNo=a[1].get('consNo');
				}
            	f.getForm().submit({
                	url: SERVICE_URL+'?A=TEMP_I&uf=1&mt=json',
                	waitMsg:'Uploading...',
                	params:{tetyCode:'PALI_IMPORT',fconId:p.get('fconId'),fconNo:p.get('fconNo'),
            		fconContractNo:p.get('fconContractNo'),packId:p.get('packId'),packName:p.get('packName'),
        			cargNameCn:p.get('cargNameCn'),cargNameEn:p.get('cargNameEn'),
        			vessId:vessId,vessName:vessName,vessNameCn:vessNameCn,voyaId:voyaId,voyaName:voyaName,
        			loliId:loliId,consId:consId,consNo:consNo},
                	success: function(f,a){
                		store.reload();
                		XMG.alert(SYS,C_UPLOAD_SUCCESS);
                		win.close();
                	},
                	failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
            	});
        }}});
        win.addButton({text:C_CANCEL,handler:function(){win.close();}},this);
		win.show();
	};
	this.showTran=function(){
		var b = sm.getSelected();
		if(b){var frm = new Fos.TrliWin(b);frm.show();}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchTran=function(){
		var b = sm.getSelected();
		if(b){
			var w = new Fos.TransWin(b);
			w.addButton({text:C_OK,handler:function(){
				var trliTrackType = w.findById('trliTrackType').getValue();
				var trliTranDate = w.findById('trliTranDate').getValue();
				var trliStationId = w.findById('trliStationId').getValue();
				var trliArriveDate = w.findById('trliArriveDate').getValue();
				var trliLocation = w.findById('trliLocation').getValue();
				var stationName = w.stationName;
				var a=sm.getSelections();var ra=[];
				for(var i=0;i<a.length;i++){
					var r=a[i];var rid =GGUID();
					var e = new FTransList({id:rid,trliId:rid,fconId:r.get('fconId'),paliId:r.get('paliId'),
						trliStationIdO:r.get('paliStationIdNow'),trliStationNameO:r.get('paliStationNameNow'),
                        trliLocationO:r.get('paliLocationNow'),
						trliStationId:trliStationId,trliStationName:stationName,trliTranDate:trliTranDate,trliArriveDate:trliArriveDate,
						trliTrackType:trliTrackType,trliLocation:trliLocation,version:'0',rowAction:'N'});
					ra[ra.length]=e;
				}
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TRLI_S'},
					success: function(r){XMG.alert(SYS,M_S);},
					failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(ATX(ra,'FTransList',FTransList))
				});
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
	};
	this.batchSpec=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_SPEC,function(b,v){
				if(b=='ok'){
					for(var i=0;i<r.length;i++){r[i].set('paliSpec',v);}
				}
			});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchBl=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_BL_NO,function(b,v){
				if(b=='ok'){
					for(var i=0;i<r.length;i++){r[i].set('consMblNo',v);}
				}
			});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchHarbour=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.HarbourWin();
			w.addButton({text:C_OK,handler:function(){
				var harbourId = w.findById('paliHarbourId').getValue();
				var harbourName = w.harbourName;
				for(var i=0;i<a.length;i++){a[i].set('paliHarbourId',harbourId);a[i].set('paliHarbourName',harbourName);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchStation=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.StationWin();
			w.addButton({text:C_OK,handler:function(){
				var stationId = w.findById('paliStationId').getValue();
				var stationName = w.stationName;
				for(var i=0;i<a.length;i++){
				    a[i].set('paliStationId',stationId);
				    a[i].set('paliStationName',stationName);
				    if(a[i].get('paliTransFlag')!=1){
                        a[i].set('paliStationIdNow',stationId);
                        a[i].set('paliStationNameNow',stationName);
                    }
				}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchArriveDate=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.DateSelWin(C_PACKING_ARRIVE_DATE);
			w.addButton({text:C_OK,handler:function(){
				var dd = w.findById('dd').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliArriveDate',dd);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchLocation=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_PACKING_LOCATION,function(b,v){if(b=='ok')  
			 for(var i=0;i<r.length;i++){
			 r[i].set('paliLocation',v);
			 if(r[i].get('paliTransFlag')!=1){r[i].set('paliLocationNow',v);}
			 }});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchTrackType=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.TrackTypeWin(C_TRACK_TYPE);
			w.addButton({text:C_OK,handler:function(){
				var paliTrackType = w.findById('paliTrackType').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliTrackType',paliTrackType);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchTrackTypeP=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.TrackTypeWin(C_TRACK_TYPE_P);
			w.addButton({text:C_OK,handler:function(){
				var paliTrackType = w.findById('paliTrackType').getValue();
				for(var i=0;i<a.length;i++){a[i].set('paliTrackTypeP',paliTrackType);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchPack=function(){
		var a=sm.getSelections();
		if(a.length){
			var w = new Fos.PackWin();			
			w.addButton({text:C_OK,handler:function(){
				var packId = w.findById('packId').getValue();
				var packName = w.packName;
				for(var i=0;i<a.length;i++){a[i].set('packId',packId);a[i].set('packName',packName);}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchCargoNameCn=function(){
		var r = sm.getSelections();
		if(r.length){
			XMG.prompt(SYS,C_CARGO_NAME_CN,function(b,v){if(b=='ok')  for(var i=0;i<r.length;i++){r[i].set('cargNameCn',v);}});
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.batchVess=function(){
		var a=sm.getSelections();
		if(a.length){
			var vessId;var vessName;var vessNameCn;var voyaId;var voyaName;var loliId;var consId;var consNo;var consMblNo;
			var w = new Ext.Window({title:C_BATCH_VESS,modal:true,width:300,
		        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:{layout:'form',labelWidth:60,bodyStyle:'padding:5px',items:[
		        {fieldLabel:C_VESS,id:'paliStationId',xtype:'combo',store:loliS,displayField:'vessName',valueField:'vessId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
		        	listeners:{scope:this,select:function(c,r,i){
        			vessId=r.get('vessId');
        			vessName=r.get('vessName');
        			vessNameCn=r.get('vessNameCn');
        			voyaId=r.get('voyaId');
        			voyaName=r.get('voyaName');
        			loliId=r.get('loliId');
        			consId=r.get('consId');
        			consNo=r.get('consNo');
        			consMblNo=r.get('consMblNo');
            	}},anchor:'90%'}]
		    }});
			w.addButton({text:C_OK,handler:function(){
				for(var i=0;i<a.length;i++){
					a[i].set('vessId',vessId);
					a[i].set('vessName',vessName);
					a[i].set('vessNameCn',vessNameCn);
					a[i].set('voyaId',voyaId);
					a[i].set('voyaName',voyaName);
					a[i].set('loliId',loliId);
					a[i].set('consId',consId);
					a[i].set('consNo',consNo);
					a[i].set('consMblNo',consMblNo);
				}
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};		
	var cargNameCn=new Ext.form.TextField({name:'cargNameCn',value:p.get('cargNameCn'),width:80,
		listeners:{scope:this,change:function(f,nv,ov){
		var a=store.getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get(cargNameCn)!=nv)
			a[i].set('cargNameCn',nv);			
		}
	}}
	});
	var packName = new Ext.form.ComboBox({name:'packId',value:p.get('packId'),store:getPACK_S(),displayField:'packName',valueField:'packId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,width:80,
		listeners:{scope:this,select:function(c,r,i){p.set('packName',r.get('packName'));
			var a=store.getRange();
			for(var i=0;i<a.length;i++){
				if(a[i].get('packId')!=r.get('packId'))
				a[i].set('packId',r.get('packId'));	a[i].set('packName',r.get('packName'));			
			}
	}}});
	var cudeType = new Ext.form.ComboBox({name:'fconCudeType',value:p.get('fconCudeType'),store:CUTY_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,width:80});
	var invFlag=new Ext.form.Checkbox({name:'fconInvoiceFlag',checked:p.get('fconInvoiceFlag')=='1',width:20});
	var inspFlag=new Ext.form.Checkbox({name:'fconInspectionFlag',checked:p.get('fconInspectionFlag')=='1',width:20});
	this.saveFcon=function(){		
		p.set('cargNameCn',cargNameCn.getValue());
		p.set('packName',packName.getValue());
		p.set('fconInvoiceFlag',invFlag.getValue());
		p.set('fconInspectionFlag',inspFlag.getValue());
		p.set('fconCudeType',cudeType.getValue());
		var xml=RTX(p,'FContract',FContract);
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'FCON_S'},scope:this,
			success: function(res,o){
				var c = XTR(res.responseXML,'FContract',FContract);
   				var f = FContract.prototype.fields;
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};
				XMG.alert(SYS,M_S);},
			failure: function(res,o){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
	};
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nsdczi',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_PALI_'+p.get('id'));
		 	if(tc){
			 	if(tc==T_MAIN.getActiveTab())
			 	{
			 		var tb=this.getTopToolbar();
			 		switch(k) {
			 		case Ext.EventObject.N:
						if(!tb.getComponent('TB_N').disabled) this.add();break;
			 		case Ext.EventObject.S:
						if(!tb.getComponent('TB_S').disabled) this.save();break;
			 		case Ext.EventObject.D:
			 			if(!tb.getComponent('TB_R').disabled) this.removePK();break;
			 		case Ext.EventObject.C:
			 			if(!tb.getComponent('TB_C').disabled) this.cp();break;	 		
			 		case Ext.EventObject.Z:
			 			if(!tb.getComponent('TB_Z').disabled) this.showTran();break;
					case Ext.EventObject.I:
						if(!tb.getComponent('TB_I').disabled) this.impData();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	this.reset=function(){store.reload();};
	Fos.PaliGrid.superclass.constructor.call(this, {id:'G_PALI_'+p.get('id'),
		border:true,autoScroll:true,clicksToEdit:1,view:gv,plugins:[arrived,transFlag,summary],
	    stripeRows:true,store:store,sm:sm,cm:cm,listeners:{scope:this,
			afteredit:function(e){
			var f=e.field;var r=e.record;
	    	if(f=='paliPackages'){r.set('paliPackages',e.value);frm.reCalculate();}	    	
			else if(f=='paliGrossWeight'){r.set('paliGrossWeight',e.value);frm.reCalculate();}
			else if(f=='paliSpec'){r.set('paliCbmC',eval(e.value));}
			else if(f=='paliLocation'){if(r.get('paliTransFlag')!=1){r.set('paliLocationNow',e.value);}}
			else if(f=='paliLength'){r.set('paliTotalLength',e.value*r.get('paliPieces'));}
			else if(f=='paliPieces'){r.set('paliTotalLength',e.value*r.get('paliLength'));}
	    	else if(f=='paliTotalLength'){r.set('paliLength',e.value/r.get('paliPieces'));}
	    }},
	    tbar:[{itemId:'TB_N',text:C_ADD+'(N)',iconCls:'add',disabled:false,scope:this,handler:this.add}, '-', 
			{itemId:'TB_R',text:C_REMOVE+'(D)',iconCls:'remove',disabled:false,scope:this,handler:this.removePK},'-',
			{itemId:'TB_S',text:C_SAVE+'(S)',iconCls:'save',disabled:false,scope:this,handler:this.save},'-',
			{itemId:'TB_C',text:C_COPY_FROM+'(C)',iconCls:'copy',disabled:false,scope:this,handler:this.cp},'-',
			{text:C_BATCH_OP,iconCls:'copy',scope:this,menu: {items: [
            	{text:C_BATCH_SPEC,iconCls:'copy',disabled:false,scope:this,handler:this.batchSpec},
				{text:C_BATCH_HARBOUR,iconCls:'copy',disabled:false,scope:this,handler:this.batchHarbour},
				{text:C_BATCH_STATION,iconCls:'copy',disabled:false,scope:this,handler:this.batchStation},
				{text:C_BATCH_LOCATION,iconCls:'copy',disabled:false,scope:this,handler:this.batchLocation},
				{text:C_BATCH_ARRIVE_DATE,iconCls:'copy',disabled:false,scope:this,handler:this.batchArriveDate},
				{text:C_BATCH_TRACK_TYPE,iconCls:'copy',disabled:false,scope:this,handler:this.batchTrackType},
				{text:C_BATCH_TRACK_TYPE_P,iconCls:'copy',disabled:false,scope:this,handler:this.batchTrackTypeP},
				{text:C_BATCH_PACK,iconCls:'copy',disabled:false,scope:this,handler:this.batchPack},
				{text:C_BATCH_CARGO_NAME_CN,iconCls:'copy',disabled:false,scope:this,handler:this.batchCargoNameCn},
				{text:C_BATCH_VESS,iconCls:'copy',disabled:false,scope:this,handler:this.batchVess},
				{text:C_BATCH_BL,iconCls:'copy',disabled:false,scope:this,handler:this.batchBl},
				{text:C_TRANS_BATCH,iconCls:'redo',disabled:false,handler:this.batchTran}
            	]}},
			{itemId:'TB_Z',text:C_TRANS_LIST+'(Z)',iconCls:'redo',disabled:false,handler:this.showTran},'-',
			{itemId:'TB_I',text:C_IMPORT+'(I)',iconCls:'imp',disabled:false,handler:this.impData},'-',
			{text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset},
			'-'],
			bbar:['->',
			    {xtype:'tbtext',text:C_CARGO_NAME_CN},cargNameCn,
				{xtype:'tbtext',text:C_PACK},packName,
				{xtype:'tbtext',text:C_INV_FLAG},invFlag,
				{xtype:'tbtext',text:C_INSP_FLAG},inspFlag,
				{xtype:'tbtext',text:C_CUDE_TYPE},cudeType,
				{text:C_SAVE,iconCls:'save',disabled:false,scope:this,handler:this.saveFcon}]
		});
};
Ext.extend(Fos.PaliGrid,Ext.grid.EditorGridPanel);

Fos.ConsPaliGrid = function(consId) {
	var c0={header:C_NO,width:50,dataIndex:"paliId"};
	var c1={header:C_PACKING_LABEL,width:50,dataIndex:"paliLabel"};
	var c2={header:C_PACKING_TRACK_NO,width:50,dataIndex:"paliTrackNo"};
	var c3={header:C_PACKING_LINE_NO,width:30,dataIndex:"paliLineNo"};
	var c4={header:C_SPEC,width:100,dataIndex:"paliSpec"};	
	var c5={header:C_PACKAGES,width:50,dataIndex:"paliPackages",align:'right'};
	var c6={header:C_GW,width:50,dataIndex:"paliGrossWeight",align:'right',renderer:rateRender};
	var c7={header:C_CARGO_DELIVERY_DATE,dataIndex:'paliLoadDate',width:60,renderer:formatDate};
	var c8={header:C_PACKING_EXP_PORT,dataIndex: 'paliHarbourId',width:60,renderer:function(v,m,r){return r.get('paliHarbourName')}};
	var c9={header:C_PACKING_STATION,dataIndex: 'paliStationId',width:60,renderer:function(v,m,r){return r.get('paliStationName')}};
	var c10={header:C_PACKING_ARRIVE_DATE,dataIndex:'paliArriveDate',width:60,renderer:formatDate};
	var c11={header:C_PACKING_LOCATION,width:100,dataIndex:"paliLocation"};
	var c12={header:C_TRACK_TYPE,dataIndex: 'paliTrackType',width:50,renderer:getTRACK_T};
	var c13={header:C_STATION_NOW,width:60,dataIndex:"paliStationNameNow"};
	var c14={header:C_LOCATION_NOW,width:60,dataIndex:"paliLocationNow"};
	var c15={header:C_PACK,dataIndex: 'packId',width:60,renderer:function(v,m,r){return r.get('packName')}};
	var c16={header:C_CARGO_NAME_CN,width:100,dataIndex:"cargNameCn"};
	var c17={header:C_CARGO_NAME_EN,width:100,dataIndex:"cargNameEn"};
	var c18={header:C_VESS,dataIndex:'vessName',width:60};
	var c23={header:C_VESS_NAME_CN,width:100,dataIndex:"vessNameCn"};
	var c24={header:C_VOYA,width:100,dataIndex:"voyaName"};
	var transFlag=CHKCLM(C_TRANS_FLAG,'paliTransFlag');
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,c0,c1,c2,c3,c4,c5,c15,c6,c7,c8,c9,c10,c11,c12,transFlag,c18,c23,c24,c13,c14,c16,c17],defaults:{sortable:true,width:100}});
	var store = GS('PALI_Q','FPackingList',FPackingList,'paliId','DESC','','','');
	store.load({params:{mt:'JSON',consId:consId}});
	Fos.ConsPaliGrid.superclass.constructor.call(this, {title:C_PACKING_LIST,id:'G_CONS_PALI_'+consId,closable:true,
		border:true,autoScroll:true,clicksToEdit:1,plugins:[transFlag],stripeRows:true,store:store,sm:sm,cm:cm});
};
Ext.extend(Fos.ConsPaliGrid,Ext.grid.GridPanel);

Fos.PaliTab = function(p) {	
	var store = GS('PALI_Q','FPackingList',FPackingList,'paliId','DESC','paliLabel','','');
	store.baseParams={mt:'JSON',fconId:p.get('fconId')};
	store.load();
	
	var loliS = GS('LOLI_Q','FLoadingList',FLoadingList,'loliId','DESC','','S_LOLI','');
	loliS.load({params:{fconId:p.get('fconId')},callback:function(){
		var e = new FLoadingList({vessId:'',vessName:S_SHIP_NOT,vessNameCn:S_SHIP_NOT,voyaId:'',loliId:'',consId:'',consNo:''});
		loliS.insert(0,e);
	}});
	
	var contractNo = new Ext.form.TextField({value:p.get('fconContractNo'),width:80,disabled:true});
	var contractQuantity = new Ext.form.TextField({value:p.get('fconContractQuantity'),width:80,disabled:true});
	var totalPackages = new Ext.form.TextField({value:p.get('fconTotalPackages'),width:80,disabled:true});
	var totalGW = new Ext.form.TextField({value:p.get('fconTotalGrossWeight'),width:80,disabled:true});
		
	this.reCalculate=function(){
		var sumP=0;var sumG=0;
		var d=store.getRange();
		for(var i=0;i<d.length;i++){
			sumP+=parseFloat(d[i].get('paliPackages'));
			sumG+=parseFloat(d[i].get('paliGrossWeight'));
		}
		totalPackages.setValue(round2(sumP));
		totalGW.setValue(round2(sumG));
	};
	
	var g=new Fos.PaliGrid(p,store,loliS,this);
	Fos.PaliTab.superclass.constructor.call(this, { 
		id:"T_PALI_"+p.get('id'),title:C_PACKING_LIST+'-'+p.get("fconContractNo"),header:false,autoScroll:true,closable:true,
		bodyStyle:'padding:0px 0px 0px',border:true,layout:'fit',
		items:[g],
		tbar:[{xtype:'tbtext',text:C_CONTRACT_NO},contractNo,'-',
			{xtype:'tbtext',text:C_CONTRACT_QUANTITY},contractQuantity,'-',
			{xtype:'tbtext',text:C_PACKING_TOTAL_PACKAGE},totalPackages,'-',
			{xtype:'tbtext',text:C_PACKING_TOTAL_GW},totalGW,'-']
		});
};
Ext.extend(Fos.PaliTab, Ext.FormPanel);

Fos.ExcoWin = function() {    
	this.harbourName='';
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_PACKING_EXP_PORT,id:'harbourId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){this.harbourName=r.get('placName');}},anchor:'90%'}
    	]});
    Fos.ExcoWin.superclass.constructor.call(this, {title:SYS,modal:true,width:300,
        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm}); 
};
Ext.extend(Fos.ExcoWin,Ext.Window);
Fos.PaliWin = function() {    
	this.harbourName='';
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
		{fieldLabel:C_CHARTER,itemCls:'required',tabIndex:1,id:'charterId',store:getCS(),enableKeyEvents:true,
			xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,
			mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',selectOnFocus:true,anchor:'90%',
		  	listeners:{scope:this,  	
			keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},
    	{fieldLabel:C_PACKING_EXP_PORT,id:'harbourId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){this.harbourName=r.get('placName');}},anchor:'90%'}
    	]});
    Fos.PaliWin.superclass.constructor.call(this, {title:SYS,modal:true,width:300,
        height:130,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm}); 
};
Ext.extend(Fos.PaliWin,Ext.Window);

Fos.VoyaLW = function(store,a){	
    var vid=0;
    this.search=function(){
   		a=[];
    	//var vessId=this.find('name','vessId')[0].getValue();
   		//if(vessId) a[a.length]={key:'vessId',value:vessId,op:EQ};
   		if(vid>0) a[a.length]={key:'vessId',value:vid,op:EQ};
   		var voyaName=this.find('name','voyaName')[0].getValue();
   		if(voyaName) a[a.length]={key:'voyaName',value:voyaName,op:EQ};
   		var voyaCarrier=this.find('name','voyaCarrier')[0].getValue();        		
   		if(voyaCarrier) a[a.length]={key:'voyaCarrier',value:voyaCarrier,op:EQ};
   		var shliId=this.find('name','shliId')[0].getValue();        		
   		if(shliId) a[a.length]={key:'shliId',value:shliId,op:EQ};   		
   		var voyaShipDateF=this.find('name','voyaShipDateF')[0].getValue();
   		if(voyaShipDateF) a[a.length]={key:'voyaShipDateF',value:voyaShipDateF.format(DATEF),op:EQ};
     	var voyaShipDateT=this.find('name','voyaShipDateT')[0].getValue();   		
   		if(voyaShipDateT) a[a.length]={key:'voyaShipDateT',value:voyaShipDateT.format(DATEF),op:EQ};
   		
   		var voyaEta=this.find('name','voyaEta')[0].getValue();
   		var voyaEta2=this.find('name','voyaEta2')[0].getValue();
   		if(voyaEta && voyaEta2){
   			a[a.length]={key:'voyaEta',value:voyaEta.format(DATEF),op:GE};
   			a[a.length]={key:'voyaEta',value:voyaEta2.format(DATEF),op:LE};
   		}
   		else if(voyaEta) a[a.length]={key:'voyaEta',value:voyaEta.format(DATEF),op:EQ};
   		
     	var voyaBerthingDate=this.find('name','voyaBerthingDate')[0].getValue();
     	var voyaBerthingDate2=this.find('name','voyaBerthingDate2')[0].getValue();
     	if(voyaBerthingDate && voyaBerthingDate2){
   			a[a.length]={key:'voyaBerthingDate',value:voyaBerthingDate.format(DATEF),op:GE};
   			a[a.length]={key:'voyaBerthingDate',value:voyaBerthingDate2.format(DATEF),op:LE};
   		}
   		else if(voyaBerthingDate) a[a.length]={key:'voyaBerthingDate',value:voyaBerthingDate.format(DATEF),op:EQ};
     	
     	var voyaEtd=this.find('name','voyaEtd')[0].getValue();
     	var voyaEtd2=this.find('name','voyaEtd2')[0].getValue();
     	if(voyaEtd && voyaEtd2){
   			a[a.length]={key:'voyaEtd',value:voyaEtd.format(DATEF),op:GE};
   			a[a.length]={key:'voyaEtd',value:voyaEtd2.format(DATEF),op:LE};
   		}
   		else if(voyaEtd) a[a.length]={key:'voyaEtd',value:voyaEtd.format(DATEF),op:EQ};
   		
   		var voyaSailDate=this.find('name','voyaSailDate')[0].getValue();
   		var voyaSailDate2=this.find('name','voyaSailDate2')[0].getValue();
   		if(voyaSailDate && voyaSailDate2){
   			a[a.length]={key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:GE};
   			a[a.length]={key:'voyaSailDate',value:voyaSailDate2.format(DATEF),op:LE};
   		}
   		else if(voyaSailDate) a[a.length]={key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:EQ}; 		
   		
   		var voyaSailedFlag=this.find('name','voyaSailedFlag')[0].getValue();
   		if(voyaSailedFlag) a[a.length]={key:'voyaSailedFlag',value:'0',op:EQ};
   		var voyaHarbourId=this.find('name','voyaHarbourId')[0].getValue();
   		if(voyaHarbourId) a[a.length]={key:'voyaHarbourId',value:voyaHarbourId,op:EQ};
   		store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};
	this.tab = new Ext.Panel({id:'F_VOLP',bodyStyle:'padding:0px',
        items:[{layout:'column',layoutConfig:{columns:3},labelWidth:80,labelAlign:'right',items:[	        	
    			{columnWidth:.5,layout:'form',border:false,labelWidth:100,items:[
					{fieldLabel:C_VESS,tabIndex:1,name:'vessId',store:getVES(),
						xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,enableKeyEvents:true,						
						mode:'local',tpl:vessTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
						listeners:{scope:this,
							select:function(c,r,i){vid=r.get('vessId');},
							keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
	           		{fieldLabel:C_SHIP_DATE_F,tabIndex:3,name:'voyaShipDateF',xtype:'datefield',format:DATEF,anchor:'95%'},
	           		{fieldLabel:C_CARRIER,tabIndex:5,name:'voyaCarrier',store:getCS(),enableKeyEvents:true,
		            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
	     					listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
	     			{fieldLabel:C_ETA_V,tabIndex:3,name:'voyaEta',xtype:'datefield',format:DATEF,anchor:'95%'},
	     			{fieldLabel:C_ETD_V,tabIndex:3,name:'voyaEtd',xtype:'datefield',format:DATEF,anchor:'95%'},
	     			{fieldLabel:C_SAIL_DATE_V,tabIndex:3,name:'voyaSailDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	     			{fieldLabel:C_BERTHING_DATE,tabIndex:3,name:'voyaBerthingDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	     			{fieldLabel:C_NOT_SAILED,name:'voyaSailedFlag',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}
	            ]},
    			{columnWidth:.5,layout:'form',border:false,labelWidth:100,items:[
    			    {fieldLabel:C_VOYA,tabIndex:2,name:'voyaName',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_SHIP_DATE_T,tabIndex:4,name:'voyaShipDateT',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_SHLI,tabIndex:6,name:'shliId',store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaEta2',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaEtd2',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaSailDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaBerthingDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_HARBOUR,tabIndex:3,name:'voyaHarbourId',xtype:'combo',
	            		store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true}
	            ]}
	    	]}
	    	]});  
    Fos.VoyaLW.superclass.constructor.call(this,{title:C_VOYA,iconCls:'search',modal:true,width:600,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:this.tab,
        buttons:[{text:C_OK,scope:this,handler:this.search},{text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.VoyaLW,Ext.Window);
Fos.ShipTab = function(p) {
	var store = GS('LOLI_Q','FLoadingList',FLoadingList,'loliId','DESC','');            
	store.load({params:{voyaId:p.get('voyaId')}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false,listeners:{scope:this,
    	rowselect:function(sm,row,record){
    		var tb= this.cg.getTopToolbar();
    		tb.getComponent('TB_B').setDisabled(NR(M1_B+M2_V+F_SH+F_R)||record.get('loliStatus')=='1');
    		tb.getComponent('TB_D').setDisabled(NR(M1_B+M2_V+F_SH+F_F)||record.get('loliStatus')=='1'||record.get('rowAction')=='N');
    	}}}); 
	var cm=new Ext.grid.ColumnModel([sm,
		{header:C_RENTER,width:120,dataIndex:"charterName"},
		{header:C_CONTRACT_NO,width:80,dataIndex:'fconContractNo'},
		{header:C_FORCAST_QUANTITY,width:60,align:'right',renderer:rateRender,dataIndex:'fconForcastQuantity'},	
		{header:C_SHIPPED_QUANTITY,width:60,align:'right',renderer:rateRender,dataIndex:'fconShippedQuantity'},
		{header:C_SHIP_CURR_QUANTITY,width:60,align:'right',renderer:rateRender,dataIndex:'loliShippedQuantity',editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
		
		{header:C_FORCAST_CBM,width:60,align:'right',renderer:rateRender,dataIndex:'fconForcastCbm'},	
		{header:C_SHIPPED_CBM,width:60,align:'right',renderer:rateRender,dataIndex:'fconShippedCbm'},
		{header:C_SHIP_CURR_CBM,width:60,align:'right',renderer:rateRender,dataIndex:'loliShippedCbm',editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
		
		{header:C_FORCAST_LOAD_DATE,dataIndex:"fconLoadDate",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_F,dataIndex:"fconShipDateF",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_T,dataIndex:"fconShipDateT",renderer:formatDate},	
		{header:C_POL,dataIndex:"fconPolEn"},
		{header:C_POD,dataIndex:"fconPodEn"},
		{header:C_CARGO_DESC,width:120,dataIndex:"fconCargoDesc"},
		{header:C_CONS_NO,dataIndex:'consNo',width:100,renderer:consRender},
		{header:C_FACT_QUANTITY,width:60,align:'right',renderer:rateRender,dataIndex:'loliFactQuantity'},
		{header:C_REMARKS,width:120,dataIndex:'loliRemarks'}
		]);
	cm.defaultSortable = true;cm.defaultWidth=100;
	this.reCalculate = function(){
		var sum=0;var d=store.getRange();
		for(var i=0;i<d.length;i++){sum = sum + parseFloat(d[i].get('loliShippedQuantity'));}
		this.find('name','voyaShippedQuantity')[0].setValue(sum);
	};	
	this.addFCon=function(){
		var win = new Fos.FConLW(p);
		win.addButton({text:C_OK,scope:this,handler:function(){
			var g = win.findById('G_FCON_LP');
			var r = g.getSelectionModel().getSelections();
			if(r){
				for(var i=0;i<r.length;i++){
					if(store.findBy(function(rec,id){return rec.get('fconId')==r[i].get('fconId')})==-1){
						var ll = new FLoadingList({id:GGUID(),loliId:'0',voyaId:p.get('voyaId'),voyaName:p.get('voyaName'),
							carrierId:p.get('voyaCarrier'),carrierName:p.get('voyaCarrierName'),
							vessId:p.get('vessId'),vessName:p.get('vessName'),vessNameCn:p.get('vessNameCn'),
							voyaShipDateF:p.get('voyaShipDateF'),voyaShipDateT:p.get('voyaShipDateT'),voyaSailDate:p.get('voyaSailDate'),
							fconId:r[i].get('fconId'),fconNo:r[i].get('fconNo'),fconContractNo:r[i].get('fconContractNo'),
							unitId:r[i].get('unitId'),unitName:r[i].get('unitName'),
							fconForcastQuantity:r[i].get('fconForcastQuantity'),
							fconShippedQuantity:r[i].get('fconShippedQuantity'),							
							loliShippedQuantity:parseFloat(r[i].get('fconForcastQuantity')-r[i].get('fconShippedQuantity')).toFixed(4),
							fconForcastCbm:r[i].get('fconForcastCbm'),
							fconShippedCbm:r[i].get('fconShippedCbm'),							
							loliShippedCbm:parseFloat(r[i].get('fconForcastCbm')-r[i].get('fconShippedCbm')).toFixed(4),							
							custName:r[i].get('custName'),charterName:r[i].get('charterName'),
							fconLoadDate:r[i].get('fconLoadDate'),
							fconPolEn:r[i].get('fconPolEn'),fconPodEn:r[i].get('fconPodEn'),
							fconShipDateF:r[i].get('fconShipDateF'),fconShipDateT:r[i].get('fconShipDateT'),
							fconCargoDesc:r[i].get('fconCargoDesc'),
							loliStatus:'0',version:'0'});
							store.insert(0,ll);
							ll.set('rowAction','N');
						}
					}
					this.reCalculate();					
				}
				win.close();
			}},this);
		win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
		win.show();
	};
	this.removeLoli=function(){var a = sm.getSelections();if(a){FOS_REMOVE_A(a,store);this.reCalculate();}};
	this.save=function(){
		var a = store.getModifiedRecords();
    	var xml = '';
		if(a.length>0){xml = ATX(a,'FLoadingList',FLoadingList);}		
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'LOLI_S'},
			success: function(res){
				var a = XTRA(res.responseXML,'FLoadingList',FLoadingList);
				var fields = FLoadingList.prototype.fields;
				var sa=store.getModifiedRecords();
				for(var i=0;i<sa.length;i++){
					for(var j=0;j<a.length;j++){	
						if(sa[i].get('id')==a[j].get('id')){
							for(var k = 0;k < fields.length;k++){
								var f = fields.items[k];
								var fn=f.name;
								if(fn!='fconLoadDate'&&fn!='fconShipDateF'&&fn!='fconShipDateT'&&fn!='custName'
									&&fn!='charterName'&&fn!='fconPolEn'&&fn!='fconPodEn'&&fn!='fconCargoDesc'&&fn!='tranName')
								sa[i].set(fn,a[j].get(fn));
							}
							break;
						}
					}
				}
				store.suspendEvents();
				store.commitChanges();
				store.resumeEvents();
				XMG.alert(SYS,M_S);},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
	};
	this.gear=function(){
		var r = sm.getSelected();
		if(r){
			store = new Ext.data.Store({url: SERVICE_URL+'?A='+'FCON_Q',
       			reader: new Ext.data.XmlReader({id:'fconId',record:'FContract'}, FContract)});
			store.load({params:{fconId:r.get('fconId')},callback:function(re,o,s){
   				if(s&&re.length>0){
   					var con=re[0];
   					var rid=GGUID();
					var c = new FConsign({consId:rid,id:rid,consNotifyParty:'SAME AS CONSIGNEE',
					consNo:'N'+rid,consType:'A',consShipType:'BULK',consActionType:'A',consMasterFlag:'1',
					consBizClass:BC_E,consBizType:BT_B,consSource:'0',consDate:new Date(),
					consEtd:p.get('voyaEtd'),consSailDate:con.get('voyaSailDate')?con.get('voyaSailDate'):p.get('voyaEtd'),
					consEta:p.get('voyaEta'),voyaShipDateF:p.get('voyaShipDateF'),voyaShipDateT:p.get('voyaShipDateT'),
					fconShipDateF:con.get('fconShipDateF'),fconShipDateT:con.get('fconShipDateT'),
					consContractNo:r.get('fconContractNo'),consCarrier:r.get('carrierId'),consCarrierName:r.get('carrierName'),
					vessId:r.get('vessId'),vessName:r.get('vessName'),vessNameCn:r.get('vessNameCn'),
					voyaId:r.get('voyaId'),voyaName:r.get('voyaName'),
					consTotalGrossWeight:r.get('loliShippedQuantity'),consTotalMeasurement:r.get('loliShippedCbm'),
					consShippedGrossWeight:r.get('loliShippedQuantity'),consShippedMeasurement:r.get('loliShippedCbm'),					
					consStatus:'0',consStatusBooking:'0',consStatusClearance:'0',
					consStatusSwitchBl:'0',consStatusSplit:'0',consStatusInsp:'0',consStatusCont:'0',
					consStatusCarg:'0',consStatusMbl:'0',consStatusHbl:'0',consStatusBBook:'0',
					consStatusDepa:'0',consStatusDocs:'0',consStatusExp:'0',consStatusAud:'0',consStatusReassign:'0',
					consStatusInCy:'0',consStatusInCfs:'0',consStatusOnBoard:'0',consStatusEir:'0',
					consStatusSendCont:'0',consReassignFrom:'0',consStatusSettlement:'0',
					consServiceRequired:'',consTransFlag:'0',consPartialFlag:'0',
					consPol:con.get('fconPol'),consPolEn:con.get('fconPolEn'),
					consPod:con.get('fconPod'),consPodEn:con.get('fconPodEn'),
					consHarbourId:r.get('voyaHarbourId'),consHarbour:r.get('voyaHarbourName'),
					consOperatorId:con.get('fconOperatorId'),consOperatorName:con.get('fconOperatorName'),
					consSalesRepId:con.get('fconSalesRepId'),consSalesRepName:con.get('fconSalesRepName'),
					custId:con.get('charterId'),custName:con.get('charterName'),custSname:con.get('charterSname'),
					consCargoOwner:con.get('custId'),consCargoOwnerName:con.get('custName'),
					custContact:con.get('custContact'),
					custTel:con.get('custTel'),custFax:con.get('custFax'),					
					unitId:con.get('unitId'),unitCode:con.get('unitName'),
					consShipper:con.get('fconShipper'),consConsignee:con.get('fconConsignee'),
					consCargoDesc:con.get('fconCargoDesc'),tranId:con.get('tranId'),tranCode:con.get('tranName'),
					packId:con.get('packId'),packName:con.get('packName'),consServiceSpec:con.get('fconServiceSpec'),
					consCargoDesc:con.get('fconCargoDesc'),consRemarks:con.get('fconRemarks'),
					consCargoNameCn:con.get('cargNameCn'),consCargoNameEn:con.get('cargNameEn'),
					consCudeType:con.get('fconCudeType'),
					consInvoiceFlag:con.get('fconInvoiceFlag'),consInspectionFlag:con.get('fconInspectionFlag'),
					pateId:con.get('pateIdR'),pateName:con.get('pateNameR'),pateIdP:con.get('pateIdP'),pateNameP:con.get('pateNameP'),
					fconId:r.get('fconId'),loliId:r.get('loliId'),deptId:getCFG('DEFAULT_DEPT_B'),consExternalFlag:'0',
					consFumigateFlag:'0',consQuarantineFlag:'0',consTransferringFlag:'0',version:'0',rowAction:'N'});
					Fos.showConsign(c);
   			}},scope:this});
		}
	};
	this.exp=function(){EXPC('LOLI','&voyaId='+p.get('voyaId'));};
	this.updateToolbar=function(){
    	var b = sm.getSelected();
    	if(b){var tb= this.getTopToolbar();
    		tb.getComponent('TB_D').setDisabled(NR(M1_B+M2_V+F_SH)||b.get('loliStatus')=='1');
		}
    };   
	this.cg=new Ext.grid.EditorGridPanel({header:false,
	id:'G_LOLI',border:true,autoScroll:true,clicksToEdit:1,height:370,
    store:store,sm:sm,cm:cm,listeners:{scope:this,
    	afteredit:function(e){
    		var f=e.field;var r=e.record;
    		if(f=='loliShippedQuantity'){
				if(e.value+r.get('fconShippedQuantity')>r.get('fconForcastQuantity')){
					XMG.alert(SYS,M_SHIPPED_QUANTITY_OVER,function(){
					r.set('loliShippedQuantity',e.originalValue);
					e.grid.stopEditing();e.grid.startEditing(e.row,e.column);});				
				}
			}
			else{this.reCalculate();}
    	}
    },
    tbar:[{text:C_ADD+'(A)',itemId:'TB_A',disabled:NR(M1_B+M2_V+F_SH+F_M),iconCls:'add',scope:this,handler:this.addFCon}, '-',
		{text:C_REMOVE+'(R)',itemId:'TB_B',disabled:NR(M1_B+M2_V+F_SH+F_R),iconCls:'remove',scope:this,handler:this.removeLoli},'-',
		{text:C_SAVE+('(S)'),itemId:'TB_C',disabled:NR(M1_B+M2_V+F_SH+F_M),iconCls:'save',scope:this,handler:this.save},'-',
    	{text:C_GEN_CONS+'(G)',itemId:'TB_D',disabled:NR(M1_B+M2_V+F_SH+F_F),iconCls:'gears',scope:this,handler:this.gear},'-',    	
		{text:C_EXPORT+'(E)',itemId:'TB_E',disabled:NR(M1_B+M2_V+F_SH+F_E),iconCls:'print',scope:this,handler:this.exp}]});		
	new Ext.KeyMap(Ext.getDoc(), {
		key:'arsge',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_SHIP_'+p.get('voyaId'));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		switch(k) {
		 		case Ext.EventObject.A:
					if(!NR(M1_B+M2_V+F_SH+F_M)) this.addFCon();break;
		 		case Ext.EventObject.R:
					if(!NR(M1_B+M2_V+F_SH+F_R)) this.removeLoli();break;
		 		case Ext.EventObject.S:
					if(!NR(M1_B+M2_V+F_SH+F_M)) this.save();break;			 		
		 		case Ext.EventObject.G:
		 			if(!NR(M1_B+M2_V+F_SH+F_F)) this.gear();break;
				case Ext.EventObject.E:
					if(!NR(M1_B+M2_V+F_SH+F_E)) this.exp();break;
				}
		 	}
		},stopEvent:true,scope:this});
	Fos.ShipTab.superclass.constructor.call(this, { 
	id:'T_SHIP_'+p.get('voyaId'),title:C_SHIP_LIST+'-'+p.get("vessName"),header:false,deferredRender:false,autoScroll:true,closable:true,
	labelAlign:'right',bodyStyle:'padding:0px 0px 0px',border:true,layout:'border',
	items: [{layout:'column',region:'north',height:80,title:C_SHIP_INFO,layoutConfig:{columns:4},deferredRender:false,collapsible:true,items:[
			{columnWidth:.25,layout:'form',border:false,labelWidth:80,
                items:[{fieldLabel:C_VESS,name:'vessName',value:p.get('vessName'),disabled:true,xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_HARBOUR,name:'voyaHarbourName',value:p.get('voyaHarbourName'),disabled:true,xtype:'textfield',anchor:'95%'}
                ]},
            {columnWidth:.25,layout:'form',border:false,labelWidth:80,
                items:[{fieldLabel:C_VOYA,name:'voyaName',value:p.get('voyaName'),disabled:true,xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_SHLI,name:'shliName',value:p.get('shliName'),disabled:true,xtype:'textfield',anchor:'95%'}
                ]},
            {columnWidth:.25,layout: 'form',border : false,labelWidth:80,
                items: [{fieldLabel:C_SHIP_DATE_F,name:'voyaCld',value:p.get('voyaCld'),disabled:true,xtype:'datefield',anchor:'95%'},
                {fieldLabel:C_VOYA_QUANTITY,name:'voyaQuantity',value:p.get('voyaQuantity'),disabled:true,xtype:'numberfield',anchor:'95%'}                
                ]},
            {columnWidth:.25,layout: 'form',border : false,labelWidth:80,
                items:[{fieldLabel:C_SHIP_DATE_T,name:'voyaLdd',value:p.get('voyaLdd'),disabled:true,xtype:'datefield',anchor:'95%'},
                {fieldLabel:C_SHIPPED_QUANTITY,name:'voyaShippedQuantity',value:p.get('voyaShippedQuantity'),disabled:true,xtype:'numberfield',anchor:'95%'}
               ]},
            {columnWidth:.5,layout:'form',border:false,labelWidth:80,
                items:[{fieldLabel:C_CARRIER,name:'voyaCarrierName',value:p.get('voyaCarrierName'),disabled:true,xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.5,layout:'form',border:false,labelWidth:80,
                items:[
                {fieldLabel:C_VOYA_PORTS,name:'voyaPorts',value:p.get('voyaPorts'),disabled:true,xtype:'textfield',anchor:'95%'}
                ]}
			]},
			{region:'center',layout:'fit',title:C_SHIP_LIST,border:false,items:[this.cg]}
			]});
};
Ext.extend(Fos.ShipTab, Ext.Panel);

Fos.FConLW = function(p) {    
	var a=[];
	a[a.length]={key:'fconStatus',value:2,op:NE};
	var store = new Ext.data.Store({url: SERVICE_URL+'?A='+'FCON_X',
		baseParams:{mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))},
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FContract'}, FContract),
		sortInfo:{field:'fconId', direction:'DESC'}});
    store.load();
    this.search=function(){
		var xml = '';
      	var a=[];
   		var charterId=this.find('name','charterId')[0].getValue();
   		if(charterId) a[a.length]={key:'charterId',value:charterId,op:EQ};
   		var fconContractNo=this.find('name','fconContractNo')[0].getValue();
   		if(fconContractNo) a[a.length]={key:'fconContractNo',value:fconContractNo,op:LI};
   		var fconPol=this.find('name','fconPol')[0].getValue();        		
   		if(fconPol) a[a.length]={key:'fconPol',value:fconPol,op:EQ};
   		var fconPod=this.find('name','fconPod')[0].getValue();        		
   		if(fconPod) a[a.length]={key:'fconPod',value:fconPod,op:EQ};
   		    		
   		var fconForcastQuantity=this.find('name','fconForcastQuantity')[0].getValue();
     	var fconForcastQuantity2=this.find('name','fconForcastQuantity2')[0].getValue();
   		if(fconForcastQuantity && fconForcastQuantity2){
   			a[a.length]={key:'fconForcastQuantity',value:fconForcastQuantity,op:GE};
   			a[a.length]={key:'fconForcastQuantity',value:fconForcastQuantity2,op:LE};
   		}
   		else if(fconForcastQuantity) a[a.length]={key:'fconForcastQuantity',value:fconForcastQuantity,op:EQ};

   		var fconShipDateF=this.find('name','fconShipDateF')[0].getValue();
     	var fconShipDateT=this.find('name','fconShipDateT')[0].getValue();
   		if(fconShipDateF && fconShipDateT){
   			a[a.length]={key:'fconShipDateF',value:fconShipDateF.format('Y-m-d H:i:s'),op:GE};
   			a[a.length]={key:'fconShipDateT',value:fconShipDateT.format('Y-m-d H:i:s'),op:LE};
   		}
   		else if(fconShipDateF) a[a.length]={key:'fconShipDateF',value:fconShipDateF.format('Y-m-d H:i:s'),op:GE};
   		store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:25}});
	};
	this.clear=function(){this.find('name','sf')[0].getForm().reset();};	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel([sm,
		{header:C_CONTRACT_NO,dataIndex:"fconContractNo"},		
		{header:C_STATUS,dataIndex:"fconStatus",renderer:getCTST},
		{header:C_RENTER,width:120,dataIndex:"charterName"},
		{header:C_CONTRACT_QUANTITY,dataIndex:"fconContractQuantity",align:'right',css:'font-weight:bold;',renderer:rateRender},
		{header:C_FORCAST_QUANTITY,dataIndex:"fconForcastQuantity",align:'right',css:'font-weight:bold;',renderer:rateRender},
		{header:C_SHIPPED_QUANTITY,dataIndex:"fconShippedQuantity",align:'right',css:'font-weight:bold;',renderer:rateRender},
		{header:C_FORCAST_LOAD_DATE,dataIndex:"fconLoadDate",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_F,dataIndex:"fconShipDateF",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_T,dataIndex:"fconShipDateT",renderer:formatDate},	
		{header:C_UNIT,dataIndex:"fconUnit"},		
		{header:C_SHIPPER,dataIndex:"fconShipper"},
		{header:C_CONSIGNEE,dataIndex:"fconConsignee"},
		{header:C_POL,dataIndex:"fconPolEn"},
		{header:C_POD,dataIndex:"fconPodEn"},
		{header:C_CARGO_DESC,width:120,dataIndex:"fconCargoDesc"}
		]);
	cm.defaultSortable = true;cm.defaultWidth=80;
    var g = new Ext.grid.GridPanel({id:'G_FCON_LP',header:false,height:300,width:600,store:store,sm:sm,cm:cm,loadMask:true,autoScroll:true});	
	this.form = new Ext.Panel({id:'F_COLP',bodyStyle:'padding:0px',
   		tbar:[
		{text:C_SEARCH,iconCls:'refresh',scope:this,handler:this.search},'-',
		{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}
		],
        items:[{title:C_FILTER_BY,layout:'column',layoutConfig:{columns:3},name:'sf',xtype:'form',height:120,labelWidth:80,labelAlign:'right',deferredRender:false,collapsible:true,items:[
	        	{columnWidth:.34,layout:'form',border:false,labelWidth:60,items:[
	            	{fieldLabel:C_RENTER,tabIndex:1,name:'charterId',store:getCS(),enableKeyEvents:true,
	            	xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
	            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
     				{fieldLabel:C_CONTRACT_NO,tabIndex:2,name:'fconContractNo',xtype:'textfield',anchor:'95%'},
     				{fieldLabel:C_POL,name:'fconPol',store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
				]},
    			{columnWidth:.3,layout:'form',border:false,labelWidth:100,items:[
	            	{fieldLabel:C_FORCAST_QUANTITY+'(>=)',name:'fconForcastQuantity',xtype:'numberfield',anchor:'95%'},
	           		{fieldLabel:C_FORCAST_SHIP_DATE_F,tabIndex:8,name:'fconShipDateF',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:47,name:'fconPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
	            		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,
              			keydown:{fn:LP,buffer:BF}}}
	            ]},
    			{columnWidth:.3,layout:'form',border:false,labelWidth:100,items:[
	            	{fieldLabel:C_FORCAST_QUANTITY+'(<=)',name:'fconForcastQuantity2',xtype:'numberfield',anchor:'95%'},
	            	{fieldLabel:C_FORCAST_SHIP_DATE_T,tabIndex:9,name:'fconShipDateT',xtype:'datefield',format:DATEF,anchor:'95%'}
	            ]}
	    	]},
	    	{title:'',layout:'fit',deferredRender:false,bodyStyle:'padding:0px',items:[g]}
	    	]});  
    Fos.FConLW.superclass.constructor.call(this,{title:C_ADD_CARGO,modal:true,
    	height:520,width:800,minWidth:400,minHeight:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',
        listeners:{maximize:function(w){w.doLayout();}},items:this.form
	}); 
};
Ext.extend(Fos.FConLW,Ext.Window);

Fos.ContractListTab = function(T){
	var expander = new Ext.grid.RowExpander({
	   tpl:new Ext.XTemplate('<div class="detailData">','','</div>'),
	   getRowClass: function(record, index) {
            var c=record.get('fconFactQuantity')-record.get('fconShippedQuantity');
            if(c<0) c=c*(-1);
            var r = c*100/record.get('fconShippedQuantity');
            if(record.get('fconFactQuantity')==0) return '';
            else if (r > 5) return 'red-font-row';
            else return 'green-font-row';
        }
	   });
	expander.on("expand",function(expander,r,body,rowIndex){
		if (Ext.DomQuery.select("div.x-panel-bwrap",body).length==0){
			var s = GS('LOLI_Q','FLoadingList',FLoadingList,'loliId','DESC','','S_LOLI','');
			s.load({params:{fconId:r.get('fconId')}});
    	var cm2=new Ext.grid.ColumnModel([new Ext.grid.RowNumberer(),
			{header:C_VESS,dataIndex:"vessName"},
			{header:C_VOYA,dataIndex:"voyaName"},
			{header:C_SHIP_QUANTITY,dataIndex:"loliShippedQuantity",align:'right',css:'font-weight:bold;',renderer:rateRender},	
			{header:C_SHIP_CBM,dataIndex:"loliShippedCbm",align:'right',css:'font-weight:bold;',renderer:rateRender},		
			{header:C_SHIP_DATE_F,dataIndex:"voyaShipDateF",renderer:formatDate},
			{header:C_SHIP_DATE_T,dataIndex:"voyaShipDateT",renderer:formatDate},
			{header:C_CARRIER,dataIndex:"carrierName"}	]);
		var gv = new Ext.grid.GridView({getRowClass:function(row,idx) {return 'green-row';}});
		var grid = new Ext.grid.GridPanel({store:s,cm:cm2,view:gv,
			renderTo:Ext.DomQuery.select("div.detailData",body)[0],border:true,
			autoWidth:true,autoHeight:true,
			listeners:{scope:this,rowdblclick: function(g,r,e){
				var c=grid.getSelectionModel().getSelected();
				if(c){
					var t = T_MAIN.getComponent("T_SHIP_"+c.get('voyaId'));
					if(t){T_MAIN.setActiveTab(t);}
					else{
    					getVS().load({params:{voyaId:c.get('voyaId')},callback:function(r,o,s){
    					if(s&&r.length>0){t = T_MAIN.add(new Fos.ShipTab(r[0],this));T_MAIN.setActiveTab(t);}},scope:this});
					}
				}
				e.stopPropagation();}}});}});
	var a=[];a[a.length]={key:'fconStatus',value:2,op:T=='S'?EQ:NE};
	var store = new Ext.data.GroupingStore({url: SERVICE_URL+'?A='+'FCON_X',
			reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FContract'}, FContract),
			baseParams:{mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))},
        	groupField:'custName',remoteSort:true,
        	sortInfo:{field:'fconId', direction:'DESC'}});
    store.load({params:{start:0,limit:25}});
    this.reset=function(){
       var a=[];a[a.length]={key:'fconStatus',value:2,op:T=='S'?EQ:NE}; 
        store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
        store.reload({params:{start:0,limit:C_PS}});
    };
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true});
	var inspFlag=CHKCLM(C_INSP_FLAG,'fconInspectionFlag',50);
	var invFlag=CHKCLM(C_INV_FLAG,'fconInvoiceFlag',50);
	var summary = new Ext.grid.GroupSummary();

	var cm=new Ext.grid.ColumnModel({columns:[expander,
	    {header:C_NO,width:30,dataIndex:"fconId"},	    
		{header:C_CONTRACT_NO,width:100,dataIndex:"fconContractNo",summaryRenderer: function(v,p,d){return '合计：';}},
		{header:C_SHLI,width:80,dataIndex:"shliName"},
		{header:C_OPERATOR,width:80,dataIndex:"fconOperatorName"},
		{header:C_CHARTER,width:100,dataIndex:"charterSname"},
		{header:C_SHIPPER,width:100,dataIndex:"custName"},
		{header:C_CONTRACT_QUANTITY,width:60,dataIndex:"fconContractQuantity",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_FORCAST_QUANTITY,width:60,dataIndex:"fconForcastQuantity",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_SHIPPED_QUANTITY,width:60,dataIndex:"fconShippedQuantity",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_REMAIN_QUANTITY,width:60,dataIndex:"fconRemainQuantity",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_FACT_QUANTITY,width:60,dataIndex:"fconFactQuantity",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_GW_ARRIVED,width:60,dataIndex:"fconArrivedGrossWeight",align:'right',renderer:rateRender,summaryType:'sum'},		
		{header:C_UNIT,width:50,dataIndex:"unitName"},
		{header:C_FORCAST_CBM,width:50,dataIndex:"fconForcastCbm",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_SHIPPED_CBM,width:50,dataIndex:"fconShippedCbm",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_REMAIN_CBM,width:50,dataIndex:"fconRemainCbm",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_FACT_CBM,width:50,dataIndex:"fconFactCbm",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_FORCAST_LOAD_DATE,width:70,dataIndex:"fconLoadDate",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_F,width:70,dataIndex:"fconShipDateF",renderer:formatDate},
		{header:C_FORCAST_SHIP_DATE_T,width:70,dataIndex:"fconShipDateT",renderer:formatDate},
		{header:C_SHIP_DATE_F,width:70,dataIndex:"voyaShipDateF",renderer:formatDate},
		{header:C_SHIP_DATE_T,width:70,dataIndex:"voyaShipDateT",renderer:formatDate},
		{header:C_PACKING_TOTAL_PACKAGE,width:50,dataIndex:"fconTotalPackages",align:'right',css:'font-weight:bold;',summaryType:'sum'},
		{header:C_PACK,width:60,dataIndex:"packName"},
		{header:C_PACKING_TOTAL_GW,width:60,dataIndex:"fconTotalGrossWeight",align:'right',css:'font-weight:bold;',summaryType:'sum',summaryRenderer:rateRender,renderer:rateRender},
		{header:C_SHIPPED_VESS,dataIndex:"fconVesselVoyage"},
		{header:C_VESS_NAME_CN,dataIndex:"fconVessNameCn"},
		{header:C_POL,dataIndex:"fconPolEn"},
		{header:C_POD,width:100,dataIndex:"fconPodEn"},inspFlag,invFlag,
		{header:C_CUDE_TYPE,width:60,dataIndex:"fconCudeType",renderer:getCUTY}
		],defaults:{sortable:true,width:100}});
	this.showFcon=function(p,store){
		var t=T_MAIN.getComponent('T_FCON_'+p.get("id"));
		if(t){T_MAIN.setActiveTab(t);}
		else {t=T_MAIN.add(new Fos.FConTab(p,store));T_MAIN.setActiveTab(t);t.doLayout();}
	};
	this.add = function(){
    	var p = new FContract({id:GGUID(),fconId:0,fconNo:'',custId:'',custName:'',custContact:'',custTel:'',custFax:'',fconContractNo:'',
    	fconContractQuantity:'',fconForcastQuantity:'',fconShippedQuantity:'',fconFactQuantity:'',
    	fconUnit:'MT',fconShipper:'',fconConsignee:'',fconPol:getCFG('BASE_PORT'),fconPolEn:getCFGD('BASE_PORT'),
    	fconPod:'',fconPodEn:'',fconCargoDesc:'',fconUnitPriceR:'',fconTotalPriceR:'',
    	fconUnitPriceP:'',fconTotalPriceP:'',fconLoadDate:'',fconShipDateF:'',fconShipDateT:'',
    	voyaShipDateF:'',voyaShipDateT:'',fconVesselVoyage:'',fconCarrier:'',fconRemarks:'',fconStatus:'0',
    	version:'0',rowAction:'N'});
    	this.showFcon(p,store);
	};
	this.copy = function(){var p = sm.getSelected();
		if(p){
			var rid=GGUID();
			var c = new FContract({});
			var f = FContract.prototype.fields;
			for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];c.set(fn,p.get(fn));};
			c.set('id',rid);
			c.set('fconId',rid);
			c.set('fconNo','');
			c.set('fconContractNo','');
			c.set('fconShippedQuantity','');
			c.set('fconFactQuantity','');
			c.set('voyaShipDateF','');
			c.set('voyaShipDateT','');
			c.set('fconVesselVoyage','');
			c.set('fconCarrier','');
			c.set('fconRemarks','');
			c.set('fconStatus','0');
			c.set('version','0');
			c.set('rowAction','N');
			this.showFcon(c,store);
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.removeContract = function(){
		var a =sm.getSelections();
       	if(a.length>0){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var b = false;
               	for(var i=0;i<a.length;i++){if(a[i].get('fconStatus')!='0'){b=true;break;}}
               	if(b) XMG.alert(SYS,M_FCON_SHIPPED);
               	else {
               		var xml = SMTX4R(sm,'FContract','fconId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'FCON_S'},scope:this,
					success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}
           }},this);
		}
       	else XMG.alert(SYS,M_R_P);
    };
	this.search = function(){var w=new Fos.FConLookup(store,T);w.show();};
	this.edit = function(){
		var p=sm.getSelected();
		if(p){this.showFcon(p,store);}
		 else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.showPali = function(){
		var p = sm.getSelected();
		if(p){
			var t=T_MAIN.getComponent('T_PALI_'+p.get("id"));if(t){T_MAIN.setActiveTab(t);}
			else {t=T_MAIN.add(new Fos.PaliTab(p));T_MAIN.setActiveTab(t);t.doLayout();}
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
	this.fastSearch=function(){
		var fconContractNo=kw.getValue();
		if(!fconContractNo){XMG.alert(SYS,M_NO_QUERY_P);return;};
     	var a=[];
     	var c=fconContractNo.indexOf(',');
        var b=fconContractNo.indexOf('..');
        if(c>=0){
            a[a.length]={key:'fconContractNo',value:fconContractNo,op:IN};
        }
        else if(b>=0){
            var ra=consNo.split('..');
            a[a.length]={key:'fconContractNo',value:ra[0],op:GE};
            a[a.length]={key:'fconContractNo',value:ra[1],op:LE};
        }
        else
        	a[a.length]={key:'fconContractNo',value:fconContractNo,op:LI};
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
	};
	var b8={text:C_FAST_SEARCH,iconCls:'search',handler:this.fastSearch};
	var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
	var re= {scope:this,rowdblclick: function(g,r,e){var c=sm.getSelected();if(c){this.showFcon(c,store);}}};
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nmdcflq',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_FCON_'+T);
		 	if(tc && tc==T_MAIN.getActiveTab()){
		 		var tb=this.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.N:
					if(!tb.getComponent('TB_N').disabled) this.add();break;
		 		case Ext.EventObject.M:
					if(!tb.getComponent('TB_M').disabled) this.edit();break;
		 		case Ext.EventObject.D:
		 			if(!tb.getComponent('TB_R').disabled) this.removeContract();break;
		 		case Ext.EventObject.C:
		 			if(!tb.getComponent('TB_C').disabled) this.copy();break;	 		
		 		case Ext.EventObject.F:
		 			if(!tb.getComponent('TB_F').disabled) this.search();break;
				case Ext.EventObject.L:
					if(!tb.getComponent('TB_L').disabled) this.showPali();break;
				case Ext.EventObject.Q:
					if(!tb.getComponent('TB_Q').disabled) this.fastSearch();break;
				}
		 	}
		},stopEvent:true,scope:this});
    new Ext.KeyMap(Ext.getDoc(), {
        key:[116],
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_FCON_'+T);
            if(tc && tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
       var tc = T_MAIN.getComponent('G_FCON_'+T);
            if(tc && tc==T_MAIN.getActiveTab()){
            var pt = this.getBottomToolbar();
            if (!pt[page].disabled) pt.onClick(page);
         }
    };
    this.nav = new Ext.KeyNav(Ext.getDoc(),{
        pageDown: this.pagingNav.createDelegate(this,['next']),
        pageUp: this.pagingNav.createDelegate(this, ['prev']),
        home: this.pagingNav.createDelegate(this,['first']),
        end: this.pagingNav.createDelegate(this,['last']),
        scope:this
    });
    this.expStation=function(){
    	var w = new Fos.StationWin();
		w.addButton({text:C_OK,handler:function(){
			var stationId = w.findById('paliStationId').getValue();
			EXP('C','PLAC_E',store.baseParams.xml?'&mt=JSON&placId='+stationId+'&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON&placId='+stationId);
			w.close();
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
		w.show();    	
    };
    var vc={forceFit:false,showGroupName:true,enableNoGroups:true,hideGroupedColumn:true,
        groupTextTpl: '{text} ({[values.rs.length]} {["Items"]})'};
	Fos.ContractListTab.superclass.constructor.call(this, {
    id:'G_FCON_'+T,iconCls:'grid',store:store,title:C_FCON_LIST+'-'+(T=='S'?S_SHIP_S:S_SHIP_P),header:false,loadMask:true,
	sm:sm,cm:cm,stripeRows:true,closable:true,view:new Ext.grid.GroupingView(vc),plugins:[expander,summary],listeners:re,	
	tbar:[{itemId:'TB_N',text:C_ADD+'(N)',disabled:NR(M1_B+M2_R+F_M),iconCls:'add',scope:this,handler:this.add},'-',
		{itemId:'TB_R',text:C_REMOVE+'(D)',disabled:NR(M1_B+M2_R+F_R),iconCls:'remove',scope:this,handler:this.removeContract},'-',
		{itemId:'TB_M',text:C_EDIT+'(M)',disabled:NR(M1_B+M2_R+F_V),iconCls:'option',scope:this,handler:this.edit},'-',
		{itemId:'TB_C',text:C_COPY+'(C)',iconCls:'copy',disabled:NR(M1_B+M2_R+F_M),scope:this,handler:this.copy},'-',
		{itemId:'TB_F',text:C_SEARCH+'(F)',iconCls:'search',scope:this,handler:this.search},'-',
		{itemId:'TB_L',text:C_PACKING_LIST+'(L)',iconCls:'grid',disabled:false,scope:this,handler:this.showPali},'-',kw,
		b8,'-',b9,'-',
		{text:C_EXPORT,iconCls:'print',scope:this,menu: {items:[
			    {text:C_PACKING_STATION,scope:this,handler:this.expStation}
			    ]}},'-'],
	bbar:PTB(store,C_PS)
    });
};
Ext.extend(Fos.ContractListTab,Ext.grid.GridPanel);

Fos.FConTab = function(p,store) {
 	var frm = {layout:'column',border:false,	
	items:[{columnWidth:.5,layout:'form',border:false,items:[
			{fieldLabel:C_CHARTER,itemCls:'required',tabIndex:1,name:'charterName',value:p.get('charterName'),store:getCS(),enableKeyEvents:true,
				xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
				mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',selectOnFocus:true,anchor:'95%',
			  	listeners:{scope:this,
			  	blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('charterId','');p.set('charterName','');}},
			  	select:function(c,r,i){p.set('charterId',r.get('custId'));
			  		p.set('charterSname',r.get('custSnameCn'));
			  		p.set('custContact',r.get('custContact'));
					p.set('custTel',r.get('custTel'));
					p.set('custFax',r.get('custFax'));
					if(!p.get('custId')){
							p.set('custId',r.get('custId'));
							p.set('custName',r.get('custNameCn'));
							p.set('custSname',r.get('custSnameCn'));
							this.find('name','custName')[0].setValue(r.get('custNameCn'));};
					},
				keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}}]},
			{columnWidth:.5,layout:'form',border:false,defaultType:'textfield',items:[
				{fieldLabel:C_SHIPPER,itemCls:'required',tabIndex:2,name:'custName',value:p.get('custName'),store:getCS(),enableKeyEvents:true,
        		xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',selectOnFocus:true,anchor:'95%',
              	listeners:{scope:this,
              	blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('custId','');p.set('custName','');}},
              	select:function(c,r,i){p.set('custId',r.get('custId'));
              			p.set('custName',r.get('custNameCn'));
              			p.set('custSname',r.get('custSnameCn'));
					},
				keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}}]},
			{columnWidth:.25,layout:'form',border:false,defaultType:'textfield',items:[
				{fieldLabel:C_CONTRACT_NO,itemCls:'required',tabIndex:3,name:'fconContractNo',value:p.get('fconContractNo'),anchor:'95%'},
            	{fieldLabel:C_FORCAST_QUANTITY,tabIndex:7,name:'fconForcastQuantity',value:p.get('fconForcastQuantity'),xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
            	{fieldLabel:C_FORCAST_CBM,tabIndex:7,name:'fconForcastCbm',value:p.get('fconForcastCbm'),xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
            	{fieldLabel:C_FORCAST_LOAD_DATE,tabIndex:11,name:'fconLoadDate',value:p.get('fconLoadDate'),xtype:'datefield',format:DATEF,anchor:'95%'},
            	{fieldLabel:C_POL,itemCls:'required',tabIndex:15,name:'consPol',value:p.get('fconPol'),store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
              		listeners:{scope:this,select:function(c,r,i){p.set('fconPolEn',r.get('portNameEn'));}}},
              	{fieldLabel:C_TTER+C_R,tabIndex:19,name:'tranId',value:p.get('tranId'),store:getTTB_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                    listeners:{scope:this,select:function(c,r,i){p.set('tranName',r.get('tranCode'));}}},
              	{fieldLabel:C_FREIGHT_UNIT+C_R,tabIndex:23,name:'fconUnitPriceR',value:p.get('fconUnitPriceR'),xtype:'numberfield',decimalPrecision:4,anchor:'95%',
                    listeners:{scope:this,change:function(f,nv,ov){
                    	var q=this.find('name','fconForcastQuantity')[0].getValue();
                    	this.find('name','fconTotalPriceR')[0].setValue(round2(nv*q));}}},
                {fieldLabel:C_CARGO_NAME_CN,tabIndex:27,name:'cargNameCn',value:p.get('cargNameCn'),anchor:'95%'},
                {fieldLabel:C_BL_PACKAGES,name:'blCargoPackages',value:p.get('blCargoPackages'),disabled:true,xtype:'numberfield',anchor:'95%'}                    	
            ]},
            {columnWidth:.25,layout:'form',border:false,defaultType:'textfield',items:[
				{fieldLabel:C_CONTRACT_QUANTITY,tabIndex:4,name:'fconContractQuantity',value:p.get('fconContractQuantity'),xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
				{fieldLabel:C_SHIPPED_QUANTITY,tabIndex:8,name:'fconShippedQuantity',value:p.get('fconShippedQuantity'),disabled:true,xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
				{fieldLabel:C_SHIPPED_CBM,tabIndex:8,name:'fconShippedCbm',value:p.get('fconShippedCbm'),disabled:true,xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
				{fieldLabel:C_FORCAST_SHIP_DATE_F,tabIndex:12,name:'fconShipDateF',value:p.get('fconShipDateF'),xtype:'datefield',format:DATEF,anchor:'95%'},
				{fieldLabel:C_POD,itemCls:'required',tabIndex:16,name:'fconPodEn',value:p.get('fconPodEn'),store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
	              	tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
	              	listeners:{scope:this,
	              		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPod','');}},
	              		select:function(c,r,i){p.set('fconPod',r.get('portId'));},
	              		keydown:{fn:LP,buffer:BF}}},
	            {fieldLabel:C_TTER+C_P,tabIndex:20,name:'tranIdCarrier',value:p.get('tranIdCarrier'),store:getTTB_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
	            	listeners:{scope:this,select:function(c,r,i){p.set('tranNameCarrier',r.get('tranCode'));}}},
	            {fieldLabel:C_FREIGHT_TOTAL+C_R,tabIndex:24,name:'fconTotalPriceR',value:p.get('fconTotalPriceR'),xtype:'numberfield',decimalPrecision:6,anchor:'95%'},
	            {fieldLabel:C_INV_FLAG,xtype:'checkbox',tabIndex:28,name:'fconInvoiceFlag',checked:p.get('fconInvoiceFlag')=='1',anchor:'95%'},
	            {fieldLabel:C_BL_GW,name:'blCargoGrossWeight',value:p.get('blCargoGrossWeight'),disabled:true,xtype:'numberfield',anchor:'95%'}
			]},
            {columnWidth:.25,layout:'form',border:false,defaultType: 'textfield',
            items: [
				{fieldLabel:C_CBM,tabIndex:5,name:'fconForcastCbm',value:p.get('fconForcastCbm'),xtype:'numberfield',decimalPrecision:4,anchor:'95%'},
				{fieldLabel:C_FACT_QUANTITY,tabIndex:9,disabled:true,name:'fconFactQuantity',value:p.get('fconFactQuantity'),xtype:'numberfield',decimalPrecision:4,anchor:'95%'},
				{fieldLabel:C_FACT_CBM,tabIndex:9,disabled:true,name:'fconFactCbm',value:p.get('fconFactCbm'),xtype:'numberfield',decimalPrecision:4,anchor:'95%'},
				{fieldLabel:C_FORCAST_SHIP_DATE_T,tabIndex:13,name:'fconShipDateT',value:p.get('fconShipDateT'),xtype:'datefield',format:DATEF,anchor:'95%'},
				{fieldLabel:C_OPERATOR,itemCls:'needed',tabIndex:17,name:'fconOperatorId',value:p.get('fconOperatorId'),store:getOP_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
					listeners:{scope:this,
					blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('fconOperatorId','');p.set('fconOperatorName','');}},
			    	select:function(c,r,i){p.set('fconOperatorName',r.get('userName'));}}},
				{fieldLabel:C_PATE+C_R,tabIndex:21,name:'pateIdR',value:p.get('pateIdR'),store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
            		listeners:{scope:this,select:function(c,r,i){p.set('pateNameR',r.get('pateName'));}}},
            	{fieldLabel:C_FREIGHT_UNIT+C_P,tabIndex:25,name:'fconUnitPriceP',value:p.get('fconUnitPriceP'),xtype:'numberfield',decimalPrecision:6,anchor:'95%',
           			listeners:{scope:this,change:function(f,nv,ov){
            			var q=this.find('name','fconForcastQuantity')[0].getValue();
            			this.find('name','fconTotalPriceP')[0].setValue(round2(nv*q));
            	}}},
            	{fieldLabel:C_CUDE_TYPE,name:'fconCudeType',tabIndex:29,value:p.get('fconCudeType'),xtype:'combo',store:CUTY_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
            	{fieldLabel:C_BL_NW,name:'blCargoNetWeight',value:p.get('blCargoNetWeight'),disabled:true,xtype:'numberfield',anchor:'95%'}
            ]},
            {columnWidth:.25,layout:'form',border:false,defaultType:'textfield',items: [
				{fieldLabel:C_PACK,tabIndex:6,name:'packId',value:p.get('packId'),xtype:'combo',store:getPACK_S(),displayField:'packName',valueField:'packId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
					listeners:{scope:this,select:function(c,r,i){p.set('packName',r.get('packName'));}}},
            	{fieldLabel:C_UNIT_CUST,tabIndex:10,name: 'unitId',value:p.get('unitId'),xtype:'combo',store:getUNIT_S(),displayField:'unitName',valueField:'unitId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
            		listeners:{scope:this,select:function(c,r,i){p.set('unitName',r.get('unitName'));}}},
            	{fieldLabel:C_UNIT_CARRIER,tabIndex:10,name: 'unitIdCarrier',value:p.get('unitIdCarrier'),xtype:'combo',store:getUNIT_S(),displayField:'unitName',valueField:'unitId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                    listeners:{scope:this,select:function(c,r,i){p.set('unitNameCarrier',r.get('unitNameCarrier'));}}},
            	{fieldLabel:C_SHLI,itemCls:'required',tabIndex:14,name:'shliId',value:p.get('shliId'),store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                    listeners:{scope:this,select:function(c,r,i){p.set('shliName',r.get('shliName'));}}},
            	{fieldLabel:C_SALES,itemCls:'needed',tabIndex:18,name:'fconSalesRepId',value:p.get('fconSalesRepId'),store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
            		listeners:{scope:this,
					blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('fconSalesRepId','');p.set('fconSalesRepName','');}},
			    	select:function(c,r,i){p.set('fconSalesRepName',r.get('userName'));}}},
                {fieldLabel:C_PATE+C_P,tabIndex:22,name:'pateIdP',value:p.get('pateIdP'),store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                   	listeners:{scope:this,select:function(c,r,i){p.set('pateNameP',r.get('pateName'));}}},
             	{fieldLabel:C_FREIGHT_TOTAL+C_P,tabIndex:26,name:'fconTotalPriceP',value:p.get('fconTotalPriceP'),xtype:'numberfield',decimalPrecision:4,anchor:'95%'},
             	{fieldLabel:C_INSP_FLAG,xtype:'checkbox',tabIndex:30,name:'fconInspectionFlag',checked:p.get('fconInspectionFlag')=='1',anchor:'95%'},
             	{fieldLabel:C_BL_CBM,name:'blCargoMeasurement',value:p.get('blCargoMeasurement'),disabled:true,xtype:'numberfield',anchor:'95%'}
            ]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
            items: [{fieldLabel:C_SHIPPER,tabIndex:31,labelAlign:top,name:'fconShipper',value:p.get('fconShipper'),xtype:'textarea',height:100,anchor:'95%'}
            ]},            
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
            items: [{fieldLabel:C_CARGO_DESC,tabIndex:32,name:'fconCargoDesc',value:p.get('fconCargoDesc'),xtype:'textarea',height:100,anchor:'95%'}
            ]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_CONSIGNEE,tabIndex:33,name:'fconConsignee',value:p.get('fconConsignee'),xtype:'textarea',height:100,anchor:'95%'}
            ]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_SERVICE_SPEC,tabIndex:34,name:'fconServiceSpec',value:p.get('fconServiceSpec'),xtype:'textarea',height:100,anchor:'95%'}
            ]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
            	items: [{fieldLabel:C_NOTIFIER,tabIndex:35,name:'fconNotifyParty',value:p.get('fconNotifyParty'),xtype:'textarea',height:100,anchor:'95%'}
            ]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
            items: [{fieldLabel:C_REMARKS,tabIndex:36,name:'fconRemarks',value:p.get('fconRemarks'),xtype:'textarea',height:100,anchor:'95%'}
            ]}
         ]};	
	this.save=function(){
		var f=this.getForm();
		if(!p.get('charterId')){
			XMG.alert(SYS,M_CHARTER_REQIRED,function(){this.find('name','charterName')[0].focus();},this);return;};
		if(!p.get('custId')){
			XMG.alert(SYS,M_SHIPPER_REQIRED,function(){this.find('name','custName')[0].focus();},this);return;};
		if(this.find('name','fconContractNo')[0].getValue()==''){
			XMG.alert(SYS,M_CONTRACT_NO_REQIRED,function(){this.find('name','fconContractNo')[0].focus();},this);return;};
		if(!p.get('fconPod')){
			XMG.alert(SYS,M_POD_REQIRED,function(){this.find('name','fconPodEn')[0].focus();},this);return;};
		if(!p.get('shliName')){
            XMG.alert(SYS,M_SHLI_REQIRED,function(){this.find('name','shliId')[0].focus();},this);return;};
		if(f.isValid()){
			f.updateRecord(p);
   			var xml=RTX(p,'FContract',FContract);
   			Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'FCON_S'},scope:this,
					success: function(res,o){
		   				var ra=p.get('rowAction');
   						var c = XTR(res.responseXML,'FContract',FContract);
		   				var f = FContract.prototype.fields;
		   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};
						if(ra=='N') store.insert(0,p);
						XMG.alert(SYS,M_S);},
					failure: function(res,o){XMG.alert(SYS,M_F+res.responseText);},
					xmlData:FOSX(xml)
			});
		}
		else{frmValidatePrompt();}
	};
	new Ext.KeyMap(Ext.getDoc(), {
		key:'s',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_FCON_'+p.get('id'));
		 	if(tc){
			 	if(tc==T_MAIN.getActiveTab())
			 	{
			 		var tb=this.getTopToolbar();
			 		switch(k) {
			 		case Ext.EventObject.S:
						if(!tb.getComponent('TB_S').disabled) this.save();break;			 		
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
    Fos.FConTab.superclass.constructor.call(this, {id:'T_FCON_'+p.get('id'),title:C_FCON+'-'+p.get('fconId'),modal:true,width:800,minWidth:600,
        minHeight:200,plain:false,bodyStyle:'padding:10px;',buttonAlign:'right',closable:true,items:frm,autoScroll:true,
        tbar:[{itemId:'TB_S',text:C_SAVE+'(S)',iconCls:'save',disabled:NR(M1_B+M2_R+F_M),scope:this,handler:this.save},'->',
              '-',{itemId:'TB_M',disabled:true,text:C_STATUS+'：'+getCTST(p.get('fconStatus'))},'-']
    });
};
Ext.extend(Fos.FConTab,Ext.FormPanel);

Fos.ConsDocGrid = function(p) {
	this.store = GS('FDOC_Q','FDoc',FDoc,'fdocId','DESC','','','',false);
	if(p.get('rowAction')=='N'){
		var rid=GGUID();
		var t = new FDoc({id:rid,fdocId:rid,consId:p.get('consId'),consNo:p.get('consNo'),consBizClass:p.get('consBizClass'),consShipType:p.get('consShipType'),
		dotyId:getCFG('FDOC_CC'),dotyName:getCFGD('FDOC_CC'),dotyClass:'',fdocNo:'NIL',fdocOriginalNum:'1',fdocCopyNum:0,fdocStatus:1,fdocRecvDate:new Date(),fdocSendDate:new Date(),fdocSendType:'',fdocSendSigner:'',
		fdocReturnDate:'',fdocBackDate:'',fdocBackType:'',fdocBackSigner:'',
		fdocReturnFlag:0,fdocBackFlag:0,fdocReleasableFlag:0,version:0});
		this.store.insert(0,t);
		t.set('rowAction','N');
	}
	else this.store.load({params:{consId:p.get('consId')}});
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_DOC_NAME,dataIndex:'dotyName',width:150,renderer:getDOTY,
			editor:new Ext.form.ComboBox({displayField:'dotyCode',valueField:'dotyName',triggerAction:'all',
				tpl:dotyTpl,itemSelector:'div.list-item',listWidth:300,mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getDOTY_S(),
            listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('dotyId',r.get('dotyId'));}}})},
	{header:C_DOC_NO,dataIndex:'fdocNo',width:80,editor:new Ext.form.TextField()},
	{header:C_DOC_ORI_NUM,dataIndex:'fdocOriginalNum',width:80,editor:new Ext.form.NumberField()},
	{header:C_DOC_COPY_NUM,dataIndex:'fdocCopyNum',width:80,editor:new Ext.form.NumberField()},
	{header:C_STATUS,dataIndex:'fdocStatus',width:80,renderer:getDOST,
			editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DOST_S})},
	{header:C_DOC_RECEIVE_DATE,dataIndex:'fdocRecvDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_CUSTOM_AGENCY,dataIndex:'fdocSendSigner',width:80,editor:new Ext.form.ComboBox({displayField:'custCode',valueField:'custNameCn',triggerAction:'all',
            mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCS(),enableKeyEvents:true,
            listeners:{scope:this,select:function(c,r,i){
           		var b =this.getSelectionModel().getSelected();
           		b.set('fdocSendTo',r.get('custId'));},
           		keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:500}}})},
	{header:C_DOC_SEND_DATE,dataIndex:'fdocSendDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_DOC_SEND_TYPE,dataIndex:'fdocSendType',width:80,renderer:getITTY,
			editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:ITTY_S})},	
	{header:C_DOC_RETURN_DATE,dataIndex:'fdocReturnDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_DOC_BACK_DATE,dataIndex:'fdocBackDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_DOC_BACK_TYPE,dataIndex:'fdocBackType',width:80,renderer:getITTY,
			editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:ITTY_S})},
    {header:C_DOC_BACK_SIGNER,dataIndex:'fdocBackSigner',width:80,editor:new Ext.form.TextField()}
	],defaults:{sortable:true,width:100}});
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_DOC;
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nds',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_DOC_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.add();break;
					case Ext.EventObject.D:
						if(!NR(m+F_R)) FOS_REMOVE(sm,this.store);break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) FOS_POST(this.store,'FDoc',FDoc,'FDOC_S');break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	this.add=function(){
		var rid=GGUID();
		var t = new FDoc({id:rid,fdocId:rid,consId:p.get('consId'),consNo:p.get('consNo'),consBizClass:p.get('consBizClass'),consShipType:p.get('consShipType'),
		dotyId:'',dotyClass:'',fdocNo:'',fdocOriginalNum:'1',fdocCopyNum:0,fdocStatus:1,fdocRecvDate:new Date(),fdocSendDate:new Date(),fdocSendType:'',fdocSendSigner:'',
		fdocReturnDate:'',fdocBackDate:'',fdocBackType:'',fdocBackSigner:'',
		fdocReturnFlag:0,fdocBackFlag:0,fdocReleasableFlag:0,version:0});
		this.store.insert(0,t);t.set('rowAction','N');sm.selectFirstRow();this.startEditing(0,1);
	};
	Fos.ConsDocGrid.superclass.constructor.call(this,{
	id:'T_DOC_'+p.get('id'),title:C_DOC+"(F2)",header:false,deferredRender:false,
		border:false,height:200,autoScroll:true,sm:sm,cm:cm,store:this.store,sortInfo:{field:'fdocId',direction:'DESC'},
		tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.add},'-',
			{text:C_REMOVE+'(D)',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:function(){FOS_REMOVE(sm,this.store);}},'-',
			{text:C_SAVE+'(S)',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:function(){FOS_POST(this.store,'FDoc',FDoc,'FDOC_S');}}
		]
	});
};
Ext.extend(Fos.ConsDocGrid,Ext.grid.EditorGridPanel);

Fos.DocGrid = function(s) {
	var title=C_DOC_ALL;
	var a=[];
	if(s=='B'){title=C_DOC_NOT_RETURN;a[a.length]={key:'fdocReturnFlag',value:'0',op:EQ};}
	else if(s=='C'){title=C_DOC_RETURN_NOT_BACK;
		a[a.length]={key:'fdocReturnFlag',value:'1',op:EQ};
		a[a.length]={key:'fdocBackFlag',value:'0',op:EQ};
	}
	else if(s=='D'){title=C_DOC_BACK;a[a.length]={key:'fdocBackFlag',value:'1',op:EQ};}
	var bp=a.length?{mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))}:{mt:'JSON'};
	var store = new Ext.data.GroupingStore({url: SERVICE_URL+'?A='+'FDOC_X',
		baseParams:bp,
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FDoc'}, FDoc),
		groupField:'fdocRecvDate',sortInfo:{field:'fdocId', direction:'DESC'},remoteSort:true});
	store.load({params:{start:0,limit:C_PS}});
	this.reset=function(){store.baseParams=bp;store.reload({params:{start:0,limit:C_PS}});};
	this.search = function(){var w=new Fos.FDocLookupWin(store,s);w.show();};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var releasableFlag=CHKCLM(C_DOC_RELEASABLE_FLAG,'fdocReleasableFlag');	
	var returnFlag =CHKCLM(C_DOC_RETURN,'fdocReturnFlag');
	returnFlag.on('click',function(c,e,r){r.set('fdocReturnDate',r.get('fdocReturnFlag')==1?(new Date()):'');},this);
	var backFlag=CHKCLM(C_DOC_BACK,'fdocBackFlag');
	backFlag.on('click',function(c,e,r){r.set('fdocBackDate',r.get('fdocBackFlag')==1?(new Date()):'');},this);
	
	var cm=new Ext.grid.ColumnModel({columns:[sm,releasableFlag,returnFlag,backFlag,
	{header:C_DOC_NAME,dataIndex:'dotyName',width:100,renderer:getDOTY,
			editor:new Ext.form.ComboBox({displayField:'dotyCode',valueField:'dotyName',triggerAction:'all',
				tpl:dotyTpl,itemSelector:'div.list-item',listWidth:300,mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getDOTY_S(),
            listeners:{scope:this,select:function(c,r,i){sm.getSelected().set('dotyId',r.get('dotyId'));}}})},
	{header:C_CONS_NO,dataIndex:'consNo',width:80,renderer:consRender},
	{header:C_DOC_NO,dataIndex:'fdocNo',width:80,editor:new Ext.form.TextField()},	
	{header:C_DOC_ORI_NUM,dataIndex:'fdocOriginalNum',width:30,editor:new Ext.form.NumberField()},
	{header:C_DOC_COPY_NUM,dataIndex:'fdocCopyNum',width:30,editor:new Ext.form.NumberField()},	
	{header:C_DOC_RECEIVE_DATE,dataIndex:'fdocRecvDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_CUSTOM_AGENCY,dataIndex:'fdocSendSigner',width:80,editor:new Ext.form.ComboBox({displayField:'custCode',valueField:'custNameCn',triggerAction:'all',
            mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCS(),enableKeyEvents:true,
            listeners:{scope:this,select:function(c,r,i){
           		sm.getSelected().set('fdocSendTo',r.get('custId'));},
           		keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:500}}})},
	{header:C_DOC_SEND_DATE,dataIndex:'fdocSendDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_DOC_SEND_TYPE,dataIndex:'fdocSendType',width:80,renderer:getITTY,
			editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:ITTY_S})},
	{header:C_DOC_RETURN_DATE,dataIndex:'fdocReturnDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_DOC_BACK_DATE,dataIndex:'fdocBackDate',renderer:formatDate,width:80,editor:new Ext.form.DateField({format:DATEF})},
	{header:C_DOC_BACK_TYPE,dataIndex:'fdocBackType',width:80,renderer:getITTY,
			editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:ITTY_S})},
    {header:C_DOC_BACK_SIGNER,dataIndex:'fdocBackSigner',width:80,editor:new Ext.form.TextField()},    
    {header:C_VESS,dataIndex:'vessName',width:80},
    {header:C_VOYA,dataIndex:'voyaName',width:80},
    {header:C_BL_NO,dataIndex:'consMblNo',width:80},
    {header:C_SAIL_DATE,dataIndex:'consSailDate',width:80},
    {header:C_BOOKER,dataIndex:'custName',width:80},
    {header:C_CARGO_OWNER,dataIndex:'consCargoOwnerName',width:80}
	],defaults:{sortable:true,width:100}});
	var vc={forceFit:false,groupTextTpl: '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "Items" : "Item"]})'};
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
	this.fastSearch=function(){
        var consNo=kw.getValue();
        if(!consNo){XMG.alert(SYS,M_INPUT_BIZ_NO,function(b){kw.focus();});return;};
        var a=[];
        if(s=='B'){a[a.length]={key:'fdocReturnFlag',value:'0',op:EQ};}
        else if(s=='C'){
            a[a.length]={key:'fdocReturnFlag',value:'1',op:EQ};
            a[a.length]={key:'fdocBackFlag',value:'0',op:EQ};
        }
        else if(s=='D'){a[a.length]={key:'fdocBackFlag',value:'1',op:EQ};}       
        a[a.length]={key:'consNo',value:consNo,op:LI};        
        store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
        store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
    };
	var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',handler:this.fastSearch};    
    var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
	new Ext.KeyMap(Ext.getDoc(), {
		key:'fse',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_DOC_'+s);
		 	if(tc && tc==T_MAIN.getActiveTab()){
		 		switch(k) {
				case Ext.EventObject.F:
					if(!NR(M1_D+F_M)) this.search();break;
				case Ext.EventObject.E:
					if(!NR(M1_D+F_E)) EXP('C','FDOC_LIST',store.baseParams.xml?'&mt=JSON&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON');break;
				case Ext.EventObject.S:
					if(!NR(M1_D+F_M)) FOS_POST(store,'FDoc',FDoc,'FDOC_S');;break;
				}
		 	}
		},stopEvent:true,scope:this});
	new Ext.KeyMap(Ext.getDoc(), {
        key:[116],
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_DOC_'+s);
            if(tc && tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
        var tc = T_MAIN.getComponent('G_DOC_'+s);
            if(tc && tc==T_MAIN.getActiveTab()){
            var pt = this.getBottomToolbar();
            if (!pt[page].disabled) pt.onClick(page);
         }
    };
    this.nav = new Ext.KeyNav(Ext.getDoc(),{
        pageDown: this.pagingNav.createDelegate(this,['next']),
        pageUp: this.pagingNav.createDelegate(this, ['prev']),
        home: this.pagingNav.createDelegate(this,['first']),
        end: this.pagingNav.createDelegate(this,['last']),
        scope:this
    });
	Fos.DocGrid.superclass.constructor.call(this,{
	id:'G_DOC_'+s,title:C_DOC_MGT+'-'+title,header:false,deferredRender:false,closable:true,plugins:[releasableFlag,returnFlag,backFlag],
		border:false,height:200,autoScroll:true,sm:sm,cm:cm,store:store,sortInfo:{field:'fdocId',direction:'DESC'},
		view:new Ext.grid.GroupingView(vc),
		tbar:[{text:C_SAVE+'(S)',disabled:NR(M1_D+F_M),iconCls:'save',disabled:NR(M1_D+F_M),handler:function(){FOS_POST(store,'FDoc',FDoc,'FDOC_S');}},'-',
		      {text:C_SEARCH+'(F)',disabled:NR(M1_D+F_M),iconCls:'search',disabled:NR(M1_D+F_V),handler:this.search},'-',
    		kw,b8,'-',b9,'-',
    		{text:C_EXPORT+'(E)',disabled:NR(M1_D+F_E),iconCls:'print',disabled:NR(M1_D+F_E),scope:this,handler:function(){
    			EXP('C','FDOC_LIST',store.baseParams.xml?'&mt=JSON&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON');
    		}},'-'],
		bbar:PTB(store,C_PS)});
};
Ext.extend(Fos.DocGrid, Ext.grid.EditorGridPanel);

Fos.FDocLookupWin = function(store,s){
	var t1={id:'T_CONS_LOOK_1',title:C_LOOK_BY_NO,layout:'form',labelWidth:70,labelAlign:"right",
		items:[{fieldLabel:C_CONS_NO,name:'consNo',xtype:'textarea',anchor:'90%'},
    		{boxLabel:C_LOOK_SMART,name:'consNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}]};
	var t5={id:'T_CONS_LOOK_5',title:C_DOC_BY_NO,layout:'form',labelWidth:70,labelAlign:"right",
		items:[{fieldLabel:C_DOC_NO,name:'fdocNo',xtype:'textarea',anchor:'90%'},
    		{boxLabel:C_LOOK_SMART,name:'fdocNoM',xtype:'checkbox',labelSeparator:'',anchor:'50%'}]};	
	var t2={id:'T_CONS_LOOK_2',title:C_LOOK_BY_MBL,layout:'form',labelWidth:70,labelAlign:"right",
		items: [{fieldLabel:C_MBL_NO,name:'consMblNo',xtype:'textarea',anchor:'90%'},
			{boxLabel:C_LOOK_SMART,name:'consMblNoM',xtype:'checkbox',labelSeparator:'',anchor:'50%'}]};
	var t3={id:'T_CONS_LOOK_3',title:C_LOOK_BY_HBL,layout:'form',labelWidth:70,labelAlign:"right",
		items: [{fieldLabel:C_HBL_NO,name:'consHblNo',xtype:'textarea',anchor:'90%'},
			{boxLabel:C_LOOK_SMART,name:'consHblNoM',xtype:'checkbox',labelSeparator:'',anchor:'50%'}]};	
    var t4={id:'T_CONS_LOOK_4',title:C_LOOK_COMPLEX,layout:'column',
    	items:[{columnWidth:.33,layout:'form',border:false,labelWidth:70,labelAlign:"right",
	    	items:[{fieldLabel:C_DOC,tabIndex:4,name:'dotyId',store:getDOTY_S(),xtype:'combo',displayField:'dotyName',valueField:'dotyId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	    	{fieldLabel:C_BOOKER,name:'custId',store:getCS(),
	        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
	        		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
	              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},
					{fieldLabel:C_BIZ_TYPE,tabIndex:7,name:'consBizType',store:BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	        	{fieldLabel:HL(C_VESS),tabIndex:5,name:'vessId',store:getVES(),
          		xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,enableKeyEvents:true,
          		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              		listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
	        	{fieldLabel:C_POL,name:'consPol',store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},	             		
	        	{fieldLabel:C_OPERATOR,name:'consOperatorId',store:getOP_S(),xtype:'combo',displayField:'userLgoinName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	        	{fieldLabel:C_TRADE_CONTRACT_NO,name:'consTradeContractNo',xtype:'textfield',anchor:'95%'},
	        	{fieldLabel:C_SHIP_TYPE,name:'consShipType',store:SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	         	{fieldLabel:'S/O No.',name:'consSoNo',xtype:'textfield',anchor:'95%'}]},
	      	{columnWidth:.33,layout:'form',border:false,labelWidth:70,labelAlign:"right",
	   		items:[{fieldLabel:C_STATUS,tabIndex:4,name:'fdocStatus',store:DOST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	   		{fieldLabel:C_CONS_DATE,name:'consDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_SAIL_DATE,name:'consEtd',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_VOYA,tabIndex:35,name:'voyaName',xtype:'textfield',anchor:'95%'},
	        	{fieldLabel:C_COUNTRY_D,name:'consTradeCountry',store:getCOUN_S(),xtype:'combo',displayField:'counNameEn',valueField:'counCode',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
                	listeners:{scope:this,select:function(c,r,i){this.find('name','consPod')[0].store.reload({params:{counCode:r.get('counCode'),portActive:1}});}}},	             	
	        	{fieldLabel:C_SALES,name:'consSalesRepId',store:getSALE_S(),xtype:'combo',displayField:'userName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	        	{fieldLabel:C_CONTRACT_NO,name:'consContractNo',xtype:'textfield',anchor:'95%'},
	        	{fieldLabel:C_CARRIER,name:'consCarrier',store:getCS(),enableKeyEvents:true,
	        		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
	        		listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
	           {fieldLabel:C_CUSTOM_AGENCY,name:'fdocSendTo',store:getCS(),enableKeyEvents:true,
	        	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
	        	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}}]},
			{columnWidth:.34,layout:'form',border:false,labelWidth:70,labelAlign:"right",
			items:[{fieldLabel:C_DOC_NO,name:'fdocNo',xtype:'textfield',anchor:'95%'},
			{fieldLabel:C_TO,name:'consDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_TO,name:'consEtd2',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_POD,name:'consPod',store:new Ext.data.Store({url: SERVICE_URL+'?A='+'PORT_Q',reader:new Ext.data.XmlReader({record:'GPort'},GPort),sortInfo:{field:'portNameEn',direction:'ASC'}}),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
	        	{fieldLabel:C_CARGO_SOURCE,name:'consSource',store:SOUR_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'},
	         	{fieldLabel:C_REF_NO,name:'consRefNo',xtype:'textfield',anchor:'95%'},	        	
	        	{fieldLabel:C_BOOK_AGENCY,name:'consBookingAgency',store:getCS(),
              		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',
              		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',enableKeyEvents:true,
              		listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookingAgencyFlag');},buffer:BF}}},
	       		{fieldLabel:C_CONTAINER,name:'consContainerCompany',store:getCS(),enableKeyEvents:true,
	       		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
	       		listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custContainerFlag');},buffer:BF}
             	}}]}
		]};	
	var t6={id:'T_CONS_LOOK_6',title:C_LOOK_BY_DOC_STATUS,layout:'column',
    	items:[
	      	{columnWidth:.5,layout:'form',border:false,labelWidth:70,labelAlign:"right",
	   		items:[
            	{fieldLabel:C_DOC_NAME,tabIndex:4,name:'dotyId',store:getDOTY_S(),xtype:'combo',displayField:'dotyName',valueField:'dotyId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	   			{fieldLabel:C_DOC_RECEIVE_DATE,name:'recvDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_DOC_SEND_DATE,name:'sendDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_DOC_RETURN_DATE,name:'returnDate',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_DOC_BACK_DATE,name:'backDate',xtype:'datefield',format:DATEF,anchor:'95%'}]},
			{columnWidth:.5,layout:'form',border:false,labelWidth:70,labelAlign:"right",
			items:[{fieldLabel:C_STATUS,tabIndex:4,name:'fdocStatus',store:DOST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
				{fieldLabel:C_TO,name:'recvDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_TO,name:'sendDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_TO,name:'returnDate2',xtype:'datefield',format:DATEF,anchor:'95%'},
	        	{fieldLabel:C_TO,name:'backDate2',xtype:'datefield',format:DATEF,anchor:'95%'}]}
		]};	
	this.reload=function(){
     	var at = t.getActiveTab();
     	var a=[];
     	if(s=='B') a[a.length]={key:'fdocReturnFlag',value:'0',op:EQ};
		else if(s=='C'){
			a[a.length]={key:'fdocReturnFlag',value:'1',op:EQ};
			a[a.length]={key:'fdocBackFlag',value:'0',op:EQ};
		}
		else if(s=='D'){a[a.length]={key:'fdocBackFlag',value:'1',op:EQ};}     	
     	if(at.getId()=='T_CONS_LOOK_1'){
     		var consNo=at.find('name','consNo')[0].getValue();
     		var consNoM=at.find('name','consNoM')[0].getValue();
     		var c=consNo.indexOf(',');
    		var b=consNo.indexOf('..');
    		if(c>=0){a[a.length]={key:'consNo',value:consNo,op:IN};}
    		else if(b>=0){
    			var ra=consNo.split('..');
    			a[a.length]={key:'consNo',value:ra[0],op:GE};
    			a[a.length]={key:'consNo',value:ra[1],op:LE};
    		}
    		else a[a.length]={key:'consNo',value:consNo,op:consNoM?LI:EQ};
     	}     	
     	else if(at.getId()=='T_CONS_LOOK_2'){
     		var consMblNo=at.find('name','consMblNo')[0].getValue();
     		var consMblNoM=at.find('name','consMblNoM')[0].getValue();
     		a[a.length]={key:'consMblNo',value:consMblNo,op:consMblNoM?LI:EQ};
     	}
     	else if(at.getId()=='T_CONS_LOOK_3'){
     		var consHblNo=at.find('name','consHblNo')[0].getValue();
     		var consHblNoM=at.find('name','consHblNoM')[0].getValue();
     		a[a.length]={key:'consHblNo',value:consHblNo,op:consHblNoM?LI:EQ};
     	}
     	else if(at.getId()=='T_CONS_LOOK_4'){
     		var dotyId=at.find('name','dotyId')[0].getValue();
     		if(dotyId) a[a.length]={key:'dotyId',value:dotyId,op:EQ};
     		var fdocStatus=at.find('name','fdocStatus')[0].getValue();
     		if(fdocStatus) a[a.length]={key:'fdocStatus',value:fdocStatus,op:EQ};
     		var fdocNo=at.find('name','fdocNo')[0].getValue();
     		if(fdocNo) a[a.length]={key:'fdocNo',value:fdocNo,op:EQ};
     		var vessId=at.find('name','vessId')[0].getValue();
     		var voyaName=at.find('name','voyaName')[0].getValue();
     		if(vessId) a[a.length]={key:'vessId',value:vessId,op:EQ};
     		if(voyaName) a[a.length]={key:'voyaName',value:voyaName,op:EQ};
     		var custId=at.find('name','custId')[0].getValue();
     		if(custId) a[a.length]={key:'custId',value:custId,op:EQ};
     		var consBizType=at.find('name','consBizType')[0].getValue();        		
     		if(consBizType) a[a.length]={key:'consBizType',value:consBizType,op:EQ};
     		var consPol=at.find('name','consPol')[0].getValue();        		
     		if(consPol) a[a.length]={key:'consPol',value:consPol,op:EQ};
     		var consSalesRepId=at.find('name','consSalesRepId')[0].getValue();        		
     		if(consSalesRepId) a[a.length]={key:'consSalesRepId',value:consSalesRepId,op:EQ};
     		var consTradeContractNo=at.find('name','consTradeContractNo')[0].getValue();        		
     		if(consTradeContractNo) a[a.length]={key:'consTradeContractNo',value:consTradeContractNo,op:EQ};
     		var consShipType=at.find('name','consShipType')[0].getValue();        		
     		if(consShipType) a[a.length]={key:'consShipType',value:consShipType,op:EQ};     		
     		var consDate=at.find('name','consDate')[0].getValue();
     		var consDate2=at.find('name','consDate2')[0].getValue();
     		if(consDate && consDate2){
     			a[a.length]={key:'consDate',value:consDate.format('Y-m-d H:i:s'),op:GE};
     			a[a.length]={key:'consDate',value:consDate2.format('Y-m-d H:i:s'),op:LE};
     		}
     		else if(consDate) a[a.length]={key:'consDate',value:consDate,op:EQ};
     		var consEtd=at.find('name','consEtd')[0].getValue();
     		var consEtd2=at.find('name','consEtd2')[0].getValue();
     		if(consEtd && consEtd2){
     			a[a.length]={key:'consEtd',value:consEtd.format('Y-m-d H:i:s'),op:GE};
     			a[a.length]={key:'consEtd',value:consEtd2.format('Y-m-d H:i:s'),op:LE};
     		}
     		else if(consEtd) a[a.length]={key:'consEtd',value:consEtd,op:EQ};
     		var consTradeCountry=at.find('name','consTradeCountry')[0].getValue();        		
     		if(consTradeCountry) a[a.length]={key:'consTradeCountry',value:consTradeCountry,op:EQ};
     		var consOperatorId=at.find('name','consOperatorId')[0].getValue();        		
     		if(consOperatorId) a[a.length]={key:'consOperatorId',value:consOperatorId,op:EQ};
     		var consContractNo=at.find('name','consContractNo')[0].getValue();        		
     		if(consContractNo) a[a.length]={key:'consContractNo',value:consContractNo,op:EQ};
     		var consPod=at.find('name','consPod')[0].getValue();        		
     		if(consPod) a[a.length]={key:'consPod',value:consPod,op:EQ};
     		var consSource=at.find('name','consSource')[0].getValue();        		
     		if(consSource) a[a.length]={key:'consSource',value:consSource,op:EQ};
     		var consRefNo=at.find('name','consRefNo')[0].getValue();        		
     		if(consRefNo) a[a.length]={key:'consRefNo',value:consRefNo,op:EQ};
     		var consSoNo=at.find('name','consSoNo')[0].getValue();        		
     		if(consSoNo) a[a.length]={key:'consSoNo',value:consSoNo,op:EQ};
     		var consCarrier=at.find('name','consCarrier')[0].getValue();        		
     		if(consCarrier) a[a.length]={key:'consCarrier',value:consCarrier,op:EQ};
     		var fdocSendTo=at.find('name','fdocSendTo')[0].getValue();        		
     		if(fdocSendTo) a[a.length]={key:'fdocSendTo',value:fdocSendTo,op:EQ};
     		var consBookingAgency=at.find('name','consBookingAgency')[0].getValue();        		
     		if(consBookingAgency) a[a.length]={key:'consBookingAgency',value:consBookingAgency,op:EQ};
     		var consContainerCompany=at.find('name','consContainerCompany')[0].getValue();        		
     		if(consContainerCompany) a[a.length]={key:'consContainerCompany',value:consContainerCompany,op:EQ};
     	}
     	else if(at.getId()=='T_CONS_LOOK_5'){
     		var fdocNo=at.find('name','fdocNo')[0].getValue();
     		var fdocNoM=at.find('name','fdocNoM')[0].getValue();
     		a[a.length]={key:'fdocNo',value:fdocNo,op:fdocNoM?LI:EQ};
     	}
     	else if(at.getId()=='T_CONS_LOOK_6'){
     		var dotyId=at.find('name','dotyId')[0].getValue();
     		if(dotyId) a[a.length]={key:'dotyId',value:dotyId,op:EQ};
     		var fdocStatus=at.find('name','fdocStatus')[0].getValue();
     		if(fdocStatus) a[a.length]={key:'fdocStatus',value:fdocStatus,op:EQ};
     		var recvDate=at.find('name','recvDate')[0].getValue();
     		var recvDate2=at.find('name','recvDate2')[0].getValue();
     		if(recvDate && recvDate2){
     			a[a.length]={key:'recvDate',value:recvDate.format('Y-m-d H:i:s'),op:GE};
     			a[a.length]={key:'recvDate',value:recvDate2.format('Y-m-d H:i:s'),op:LE};
     		}
     		else if(recvDate) a[a.length]={key:'recvDate',value:recvDate,op:EQ};
     		var sendDate=at.find('name','sendDate')[0].getValue();
     		var sendDate2=at.find('name','sendDate2')[0].getValue();
     		if(sendDate && sendDate2){
     			a[a.length]={key:'sendDate',value:sendDate.format('Y-m-d H:i:s'),op:GE};
     			a[a.length]={key:'sendDate',value:sendDate2.format('Y-m-d H:i:s'),op:LE};
     		}
     		else if(sendDate) a[a.length]={key:'sendDate',value:sendDate,op:EQ};
     		var returnDate=at.find('name','returnDate')[0].getValue();
     		var returnDate2=at.find('name','returnDate2')[0].getValue();
     		if(returnDate && returnDate2){
     			a[a.length]={key:'returnDate',value:returnDate.format('Y-m-d H:i:s'),op:GE};
     			a[a.length]={key:'returnDate',value:returnDate2.format('Y-m-d H:i:s'),op:LE};
     		}
     		else if(returnDate) a[a.length]={key:'returnDate',value:returnDate,op:EQ};
     		var backDate=at.find('name','backDate')[0].getValue();
     		var backDate2=at.find('name','backDate2')[0].getValue();
     		if(backDate && backDate2){
     			a[a.length]={key:'backDate',value:backDate.format('Y-m-d H:i:s'),op:LE};
     			a[a.length]={key:'backDate',value:backDate2.format('Y-m-d H:i:s'),op:LE};
     		}
     		else if(backDate) a[a.length]={key:'backDate',value:backDate,op:EQ};
     	}
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};
	var t = new Ext.TabPanel({id:'T_DOC_LOOK',xtype:'tabpanel',plain:true,activeTab:0,height:340,
		defaults:{bodyStyle:'padding:10px'},items:[t1,t5,t6,t2,t3,t4]});
    Fos.FDocLookupWin.superclass.constructor.call(this, {title:C_DOC_QUERY,iconCls:'search',modal:true,width:600,height:340,minWidth:300,
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:t,
		buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.FDocLookupWin, Ext.Window);


Fos.FconInwareGrid = function(v) {
	this.store = GS('FCON_V','FContract',FContract,'fconId','DESC','','','',false);	
	this.store.load({params:{voyaId:v.get('voyaId')}});		
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var sumListFlag =CHKCLM(C_SUM_LIST,'fconSumListFlag');
	var copyFlag =CHKCLM(C_COPY_SHEET,'fconCopyFlag');
	var expeConfirmFlag =CHKCLM(C_EXPE_CONFIRM,'fconExpeConfirmFlag');
	var cudeDocFlag =CHKCLM(C_CUDE_DOC,'fconCudeDocFlag');
	var photoFlag =CHKCLM(C_PHOTO,'fconPhotoFlag');
	var matesReceiptFlag =CHKCLM(C_MATES_RECEIPT,'fconMatesReceiptFlag');
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CONTRACT_NO,width:100,dataIndex:"fconContractNo"},
	{header:C_SHIPPED_QUANTITY,width:60,dataIndex:"fconShippedQuantity",align:'right',renderer:rateRender},
	{header:C_PACKING_TOTAL_GW,width:60,dataIndex:"fconTotalGrossWeight",align:'right',renderer:rateRender},
	{header:C_GW_ARRIVED,width:60,dataIndex:"fconArrivedGrossWeight",align:'right',renderer:rateRender},
	{header:C_PACKING_INWARE_GW,dataIndex:'fconInwareGrossWeight',width:80,editor:new Ext.form.NumberField()},
	sumListFlag,copyFlag,expeConfirmFlag,cudeDocFlag,photoFlag,matesReceiptFlag],defaults:{sortable:true,width:100}});
	Fos.FconInwareGrid.superclass.constructor.call(this,{
	id:'T_INWARE_'+v.get('id'),title:C_PACKING_INWARE_INFO,header:false,deferredRender:false,plugins:[sumListFlag,copyFlag,expeConfirmFlag,cudeDocFlag,photoFlag,matesReceiptFlag],
		border:false,height:200,autoScroll:true,sm:sm,cm:cm,store:this.store,closable:true,
		tbar:[{text:C_SAVE+'(S)',iconCls:'save',scope:this,handler:function(){FOS_POST(this.store,'FContract',FContract,'FCON_S');}}
		]
	});
};
Ext.extend(Fos.FconInwareGrid,Ext.grid.EditorGridPanel);

Fos.TrliGrid = function(p) {
	var store = GS('TRLI_Q','FTransList',FTransList,'trliId','DESC','','','');
	store.load({params:{paliId:p.get('paliId'),start:0,limit:50}});	
	var c0={header:'ID',width:30,dataIndex:"trliId"};
	var c1={header:C_PACKING_TRANS_DATE,dataIndex:'trliTranDate',width:100,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var c2={header:C_PACKING_TRANS_STATION,dataIndex: 'trliStationId',width:100,renderer:function(v,m,r){return r.get('trliStationName')},
			editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();if(b){b.set('trliStationName',r.get('placName'));}}}
				})};
	var c3={header:C_PACKING_ARRIVE_DATE,dataIndex:'trliArriveDate',width:100,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var c4={header:C_PACKING_LOCATION,width:100,dataIndex:"trliLocation",editor:new Ext.form.TextField({})};
	var c5={header:C_TRACK_TYPE,dataIndex:'trliTrackType',width:60,renderer:getTRACK_T,
			editor:new Ext.form.ComboBox({xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
	var c6={header:C_STATION_NOW,dataIndex: 'trliStationIdO',width:100,renderer:function(v,m,r){return r.get('trliStationNameO')},
			editor:new Ext.form.ComboBox({xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
				listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();if(b){b.set('trliStationNameO',r.get('placName'));}}}
				})};
	var c7={header:C_LOCATION_NOW,width:100,dataIndex:"trliLocationO",editor:new Ext.form.TextField({})};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var cm=new Ext.grid.ColumnModel({columns:[sm,c0,c6,c7,c5,c1,c2,c3,c4],defaults:{sortable:true,width:100}});
	this.add=function(){
		var id=GGUID();
		var e = new FTransList({id:id,trliId:id,fconId:p.get('fconId'),paliId:p.get('paliId'),
			trliStationIdO:p.get('paliStationIdNow'),trliStationNameO:p.get('paliStationNameNow'),
			trliLocationO:p.get('paliLocationNow'),
			trliStationId:'',trliTranDate:'',trliArriveDate:'',trliLocation:'',version:'0'});
    	this.stopEditing();store.insert(0,e);e.set('rowAction','N');sm.selectFirstRow();this.startEditing(0, 1);
	};
	this.removeTrli=function(){
		var r = sm.getSelections();
		if(r){for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
		store.remove(r[i]);frm.reCalculate();}}
	};
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length>0){			
			var x = ATX(a,'FTransList',FTransList);
			if(x!=''){
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TRLI_S'},
					success: function(res){
						var a = XTRA(res.responseXML,'FTransList',FTransList);FOSU(store,a,FTransList);						
						var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'PALI_X',
							reader: new Ext.data.XmlReader({record:'FPackingList'}, FPackingList)});
						sc.load({params:{paliId:p.get('paliId')},callback:function(r,o,s){
							if(s&&r.length>0){
								var c=r[0];
								p.beginEdit();
								p.set('paliTransTimes',c.get('paliTransTimes'));
								p.set('paliTrackTypeP',c.get('paliTrackTypeP'));
								p.set('paliStationIdNow',c.get('paliStationIdNow'));
								p.set('paliStationNameNow',c.get('paliStationNameNow'));
								p.set('paliLocationNow',c.get('paliLocationNow'));
								p.set('paliTransFlag',c.get('paliTransFlag'));
								p.set('paliStatus',c.get('paliStatus'));
								p.set('version',c.get('version'));
								p.endEdit();
								XMG.alert(SYS,M_S);
							}    						
						},scope:this});
						XMG.alert(SYS,M_S);},
					failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
					xmlData:FOSX(x)
				});
			}
		}
	};	
	Fos.TrliGrid.superclass.constructor.call(this, {id:'G_TRLI_'+p.get('id'),
		border:true,autoScroll:true,clicksToEdit:1,stripeRows:true,store:store,sm:sm,cm:cm,
	    tbar:[{text:C_ADD,iconCls:'add',disabled:false,scope:this,handler:this.add}, '-', 
			{text:C_REMOVE,iconCls:'remove',disabled:false,scope:this,handler:this.removeTrli},'-',
			{text:C_SAVE,iconCls:'save',disabled:false,scope:this,handler:this.save}]});
};
Ext.extend(Fos.TrliGrid, Ext.grid.EditorGridPanel);
Fos.TrliWin = function(p) {
	var g=new Fos.TrliGrid(p);
    Fos.TrliWin.superclass.constructor.call(this, {title:C_TRANS_LIST,modal:true,width:600,
        height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',layout:'fit',items:g}); 
};
Ext.extend(Fos.TrliWin,Ext.Window);
Fos.TransWin = function() {
	this.stationName='';
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_TRACK_TYPE,id:'trliTrackType',xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
    	{fieldLabel:C_PACKING_TRANS_DATE,id:'trliTranDate',xtype:'datefield',format:DATEF,anchor:'90%'},
    	{fieldLabel:C_PACKING_TRANS_STATION,id:'trliStationId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){this.stationName=r.get('placName');}},anchor:'90%'},
		{fieldLabel:C_PACKING_ARRIVE_DATE,id:'trliArriveDate',xtype:'datefield',format:DATEF,anchor:'90%'},
		{fieldLabel:C_PACKING_LOCATION,id:'trliLocation',xtype:'textfield',anchor:'90%'}
    	]
    });
    Fos.TransWin.superclass.constructor.call(this, {title:C_TRANS_LIST,modal:true,width:300,
        height:220,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.TransWin,Ext.Window);

Fos.ConsPaliWin = function(consId){
	var store = GS('PALI_X','FPackingList',FPackingList,'paliId','DESC','fconContractNo','','');
	store.load({params:{consId:consId}});
	var c1={header:C_PACKING_LABEL,width:100,dataIndex:"paliLabel"};
	var c2={header:C_PACKING_TRACK_NO,width:100,dataIndex:"paliTrackNo"};
	var c3={header:C_PACKING_LINE_NO,width:100,dataIndex:"paliLineNo"};
	var c4={header:C_SPEC,width:100,dataIndex:"paliSpec"};	
	var c5={header:C_PACKAGES,width:60,dataIndex:"paliPackages",align:'right'};
	var c6={header:C_GW,width:60,dataIndex:"paliGrossWeight",align:'right',renderer:rateRender};
	var c7={header:C_CARGO_DELIVERY_DATE,dataIndex:'paliLoadDate',width:100,renderer:formatDate};
	var c8={header:C_PACKING_EXP_PORT,dataIndex: 'paliHarbourName',width:100};
	var c9={header:C_PACKING_STATION,dataIndex: 'paliStationName',width:100};
	var c10={header:C_PACKING_ARRIVE_DATE,dataIndex:'paliArriveDate',width:100,renderer:formatDate};
	var c13={header:C_STATION_NOW,width:100,dataIndex:"paliStationNameNow"};
	var c14={header:C_LOCATION_NOW,width:100,dataIndex:"paliLocationNow"};
	var c15={header:C_CONTRACT_NO,width:100,dataIndex:"fconContractNo"};
	var c16={header:C_SHIPPED_VESS,width:100,dataIndex:"fconVesselVoyage"};
	var c17={header:C_POD,width:100,dataIndex:"fconPodEn"};
	var c18={header:C_RENTER,width:100,dataIndex:"charterName"};
	var c19={header:C_SHIPPER,width:100,dataIndex:"custName"};
	var c20={header:C_PACK,dataIndex:'packName',width:60};
	var c21={header:C_CARGO_NAME_CN,width:100,dataIndex:"cargNameCn"};
	var c22={header:C_CARGO_NAME_EN,width:100,dataIndex:"cargNameEn"};
	var c23={header:C_VESS_NAME_CN,width:100,dataIndex:"fconVessNameCn"};	
	var transFlag=CHKCLM(C_TRANS_FLAG,'paliTransFlag');
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,c15,c1,c2,c3,c4,c5,c20,c6,c7,c8,c9,c10,c11,c12,
		transFlag,c13,c14,c16,c23,c17,c18,c19,c21,c22],defaults:{sortable:true,width:100}});
	var grid=new  Ext.grid.GridPanel({border:true,autoScroll:true,plugins:[transFlag],stripeRows:true,store:store,sm:sm,cm:cm});
	Fos.ConsPaliWin.superclass.constructor.call(this, {title:C_PACKING_LIST,modal:true,width:600,
        height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:grid}); 
};
Ext.extend(Fos.ConsPaliWin,Ext.Window);
Fos.HarbourWin = function() {
	this.harbourName='';
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_PACKING_EXP_PORT,id:'paliHarbourId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){this.harbourName=r.get('placName');}},anchor:'90%'}]
    });
    Fos.HarbourWin.superclass.constructor.call(this, {title:C_BATCH_OP,modal:true,width:200,
        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.HarbourWin,Ext.Window);
Fos.StationWin = function() {
	this.stationName='';
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_PACKING_STATION,id:'paliStationId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){this.stationName=r.get('placName');}},anchor:'90%'}]
    });
    Fos.StationWin.superclass.constructor.call(this, {title:C_SEL_STATION,modal:true,width:200,
        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.StationWin,Ext.Window);
Fos.PackWin = function() {
	this.packName='';
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_PACK,id:'packId',xtype:'combo',store:getPACK_S(),displayField:'packName',valueField:'packId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){this.packName=r.get('packName');}},anchor:'90%'}]
    });
    Fos.PackWin.superclass.constructor.call(this, {title:C_BATCH_OP,modal:true,width:200,
        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.PackWin,Ext.Window);
Fos.DateSelWin = function(t) {
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:t,id:'dd',xtype:'datefield',format:DATEF,anchor:'90%'}]
    });
    Fos.DateSelWin.superclass.constructor.call(this, {title:C_BATCH_OP,modal:true,width:200,
        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.DateSelWin,Ext.Window);

Fos.TrackTypeWin = function(T) {
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:T,id:'paliTrackType',xtype:'combo',store:TRACK_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'}]
    });
    Fos.TrackTypeWin.superclass.constructor.call(this, {title:C_BATCH_OP,modal:true,width:200,
        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.TrackTypeWin,Ext.Window);
Fos.LenWin = function(T) {
    var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
        {fieldLabel:T,id:'len',xtype:'numberfield',anchor:'90%'}]
    });
    Fos.LenWin.superclass.constructor.call(this, {title:C_BATCH_OP,modal:true,width:200,
        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.LenWin,Ext.Window);
Fos.UnitWin = function() {
    this.unitId='';
    var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
        {fieldLabel:C_UNIT_LEN,id:'unitName',xtype:'combo',store:getUNIT_S(),displayField:'unitCode',valueField:'unitCode',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
            listeners:{scope:this,select:function(c,r,i){this.unitId=r.get('unitId');}},anchor:'90%'}]
    });
    Fos.UnitWin.superclass.constructor.call(this, {title:C_BATCH_OP,modal:true,width:200,
        height:100,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.UnitWin,Ext.Window);
Fos.PaliExpWin = function() {    
	this.harbourName='';
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_DATE,id:'createTime',value:new Date(),xtype:'datefield',format:DATEF,anchor:'90%'},
    	{fieldLabel:C_PACKING_EXP_PORT,id:'harbourId',xtype:'combo',store:getHARB_S(),displayField:'placName',valueField:'placId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){this.harbourName=r.get('placName');}},anchor:'90%'}
    	]});
    Fos.PaliExpWin.superclass.constructor.call(this, {title:SYS,modal:true,width:300,
        height:130,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm}); 
};
Ext.extend(Fos.PaliExpWin,Ext.Window);