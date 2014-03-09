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
		if(p) ADDTAB("T_SHIP_"+p.get('voyaId'),function(){return new Fos.ShipTab(p);});
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.inware=function(){
		var p=sm.getSelected();
		if(p) ADDTAB("T_INWARE_"+p.get('voyaId'),function(){return new Fos.FconInwareGrid(p);});
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
	/*new Ext.KeyMap(Ext.getDoc(), {
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
    });*/
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