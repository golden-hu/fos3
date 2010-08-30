﻿var newConsign = function(bc,bt,st){
	var sr='';
	if(bt==BT_G) sr=SR_CUDE; else if(bt==BT_I) sr=SR_INSP;
	var rid=GGUID();
	var c = new FConsign({id:rid,consId:rid,consNotifyParty:'SAME AS CONSIGNEE',
		consNo:'N'+rid,consType:'A',consShipType:st,consActionType:'A',consMasterFlag:st=='LCL'?1:0,
		consBizClass:bc,consBizType:bt,consSource:0,consOperatorId:'',consDate:new Date(),tranId:st=='LCL'?CFS:CY,
		consServiceRequired:sr,version:0,consStatus:0,consStatusBooking:0,consStatusClearance:0,
		consStatusSwitchBl:0,consStatusSplit:0,consStatusInsp:0,consStatusCont:0,
		consStatusCarg:0,consStatusMbl:0,consStatusHbl:0,consStatusBBook:0,
		consStatusDepa:0,consStatusDocs:0,consStatusExp:0,consStatusAr:0,consStatusAp:0,
		consStatusInvoR:0,consStatusInvoP:0,consStatusAud:0,consStatusReassign:0,
		consStatusInCy:0,consStatusInCfs:0,consStatusOnBoard:0,consStatusEir:0,
		consStatusSendCont:0,consStatusLock:0,consReassignFrom:0,consStatusSettlement:0,consExternalFlag:0,		
		consTransFlag:0,consPartialFlag:0,consPol:bc==BC_E?getCFG('BASE_PORT'):'',consPolEn:bc==BC_E?getCFGD('BASE_PORT'):'',
		consPod:bc==BC_I?getCFG('BASE_PORT'):'',consPodEn:bc==BC_I?getCFGD('BASE_PORT'):'',
		deptId:getCFG('DEFAULT_DEPT_'+bt),consOperatorId:CUSER_ID,consOperatorName:CUSER_NAME,
		consFumigateFlag:0,consQuarantineFlag:0,consTransferringFlag:0,rowAction:'N'});
	return c;
};
var copyConsign = function(p){
	var c = new FConsign({});var rid=GGUID();
	var f = FConsign.prototype.fields;
	for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];c.set(fn,p.get(fn));};
	c.set('consDate',new Date());
	c.set('consId',rid);c.set('id',rid);c.set('consNo','N'+rid);c.set('version',1);
	c.set('consStatus',0);c.set('consStatusBooking',0);c.set('consStatusClearance',0);
	c.set('consStatusSwitchBl',0);c.set('consStatusSplit',0);c.set('consStatusInsp',0);
	c.set('consStatusCont',0);c.set('consStatusCarg',0);c.set('consStatusMbl',0);
	c.set('consStatusHbl',0);c.set('consStatusBBook',0);c.set('consStatusDepa',0);
	c.set('consStatusDocs',0);c.set('consStatusExp',0);c.set('consStatusAud',0);
	c.set('consStatusAr',0);c.set('consStatusAp',0);c.set('consStatusInvoR',0);c.set('consStatusInvoP',0);
	c.set('consStatusReassign',0);c.set('consStatusInCy',0);c.set('consStatusInCfs',0);
	c.set('consStatusOnBoard',0);c.set('consStatusEir',0);c.set('consStatusSendCont',0);
	c.set('consReassignFrom',0);c.set('consStatusLock',0);c.set('consStatusSettlement',0);c.set('rowAction','N');
	c.set('fconId','');c.set('loliId','');c.set('consMasterFlag','0');c.set('consMasterId','');
	c.set('consMergeFlag',0);c.set('consMergeId','');c.set('consMergeNo','');
	return c;
};
var showConsign = function(p){
	var t = T_MAIN.getComponent('C_'+p.get("id"));
	if(t){T_MAIN.setActiveTab(t);} else{t = new Fos.ConsignTab(p);T_MAIN.add(t);T_MAIN.setActiveTab(t);}
};
var showConsignTabs = function(p){
	var tc = T_MAIN.getComponent('C_'+p.get("id"));
	if(p.get('rowAction')!='N'){
		if(!tc.getComponent('T_DOC_'+p.get('id'))){tc.add(new Fos.ConsDocGrid(p));};
		if(!tc.getComponent('T_EXPE_'+p.get('id'))){tc.add(VERSION==1?(new Fos.ExpenseTab2(p,'C')):(new Fos.ExpenseTab(p,'C')));};
	}
	if(!tc.getComponent('T_TRAN_'+p.get('id')) && p.get('consServiceRequired').indexOf(SR_TRAN)!=-1){tc.add(new Fos.TransTab(p));};	
	if(!tc.getComponent('T_WARE_'+p.get('id')) && p.get('consServiceRequired').indexOf(SR_WARE)!=-1){tc.add(new Fos.WarehouseTab(p));};	
	if(!tc.getComponent('T_CONT_'+p.get('id')) && p.get('consServiceRequired').indexOf(SR_CONT)!=-1 && (p.get('consShipType')==ST_F||(p.get('consShipType')==ST_L&& p.get('consMasterFlag')=='1'))){tc.add(new Fos.ContainerTab(p));};	
	if(!tc.getComponent('T_BL_'+p.get('id')) && p.get('consServiceRequired').indexOf(SR_BL)!=-1 ){tc.add(new Fos.BLTab(p));};
	if(!tc.getComponent('T_INSP_'+p.get('id')) && p.get('consServiceRequired').indexOf(SR_INSP)!=-1){tc.add(new Fos.InspectionTab(p));};
	if(!tc.getComponent('T_CUDE_'+p.get('id')) && p.get('consServiceRequired').indexOf(SR_CUDE)!=-1){tc.add(new Fos.CustomsTab(p));};
	if(!tc.getComponent('T_SPLIT_'+p.get('id')) && p.get('consBizClass')==BC_I && p.get('consShipType')==ST_L){tc.add(new Fos.SplitTab(p));};
	if(!tc.getComponent('T_BBOOK_'+p.get('id')) && p.get('consServiceRequired').indexOf(SR_BBOOK)!=-1){tc.add(new Fos.BBookingTab(p));};
	if(!tc.getComponent('T_RABL_'+p.get('id')) && p.get('consServiceRequired').indexOf(SR_RABL)!=-1){tc.add(new Fos.RailwayBlTab(p));};
	if(!tc.getComponent('T_SESH_'+p.get('id')) && p.get('consServiceRequired').indexOf(SR_SESH)!=-1){tc.add(new Fos.SecondShipTab(p));};
};

Fos.ConsignGrid = function(bizClass,bizType,shipType,external) {
	var a=[];
	a[a.length]={key:'consBizClass',value:bizClass,op:1};
	a[a.length]={key:'consBizType',value:bizType,op:1};
	a[a.length]={key:'consExternalFlag',value:external?external:'0',op:1};
	if(shipType!='') a[a.length]={key:'consShipType',value:shipType,op:1};
	var bp={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
	var store = new Ext.data.GroupingStore({
   		url: SERVICE_URL+'?A=CONS_X',
   		baseParams:bp,
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FConsign'}, FConsign),remoteSort:true,
    	sortInfo:{field:((bizClass==BC_E&&shipType==ST_L)||bizType==BT_B)?'consMasterNo':'consDate', direction:'DESC'}});    	
	this.reset=function(){store.baseParams=bp;store.reload({params:{start:0,limit:C_PS}});};
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true});	
	var c1=new Ext.grid.RowNumberer();
	var c2={header:'',dataIndex:'consStatusLock',menuDisabled:true,fixed:true,width:25,renderer:function(v){
               if(v==1) return '<div class="locked"></div>'; else return '';
         }};
    var c3={header:C_M_CONS,width:30,hidden:shipType!=ST_L,dataIndex:"consMasterFlag",renderer:boolRender};
    var c4={header:C_STATUS,width:60,dataIndex:"consStatus",renderer:bizClass==BC_E?getCOST:getCIST};
    var c5={header:C_CONS_NO,width:120,dataIndex:"consNo"};
    var c6={header:bizType==BT_B?C_CHARTER:C_BOOKER,width:200,dataIndex:"custName"};
    var c7={header:C_CONS_DATE,width:70,dataIndex:"consDate",renderer:formatDate};
    var c8={header:C_TTER,dataIndex:"tranId",width:60,renderer:getTRAN};
    var c9={header:C_PATE,dataIndex:"pateId",width:40,renderer:getPATE};
    var c10={header:C_SHIP_TYPE,dataIndex:"consShipType",width:40};
    var c11={header:C_VESS,width:100,dataIndex:"vessName"};
    var c12={header:bizType==BT_A?C_FLIGHT:C_VOYA,width:80,dataIndex:"voyaName"};
    var c13={header:C_SAIL_DATE,dataIndex:"consEtd",renderer:formatDate};
    var c14={header:C_POL,dataIndex:"consPolEn"};
    var c15={header:C_POD,width:100,dataIndex:"consPodEn"};
    var c16={header:bizType==BT_A?'MAWB No.':C_MBL_NO,width:80,dataIndex:"consMblNo"};
    var c17={header:bizType==BT_A?'HAWB No.':C_HBL_NO,width:80,dataIndex:"consHblNo"};
    var c18={header:C_PACKAGES,width:80,dataIndex:"consTotalPackages",align:'right',css:'font-weight:bold;'};
    var c19={header:C_GW,width:80,dataIndex:"consTotalGrossWeight",renderer:rateRender,align:'right',css:'font-weight:bold;'};
    var c20={header:C_CBM,width:80,dataIndex:"consTotalMeasurement",renderer:rateRender,align:'right',css:'font-weight:bold;'};
    
    var c21={header:C_CONT_INFO,width:80,dataIndex:"consContainersInfo"};
    var c22={header:C_CONT_NUM,width:80,dataIndex:"consTotalContainers",align:'right',renderer:function(v){return (v)?v:0},css:'font-weight:bold;'};
    var c23={header:C_POT,dataIndex:"consPotEn"};
    var c24={header:C_CARRIER,dataIndex:"consCarrierName"};
    var c25={header:C_BOOK_AGENCY,dataIndex:"consBookingAgencyName"};
    var c26={header:C_M_CONS_NO,width:120,hidden:shipType!=ST_L,dataIndex:"consMasterNo"};
    var c27={header:C_REMARKS,dataIndex:"consRemarks"};
    var c28={header:C_CONTRACT_NO,dataIndex:"consContractNo"};
    var c29={header:C_CARGO_OWNER,width:200,dataIndex:"consCargoOwnerName"};
	
	var c30={header:C_BL_PACKAGES,width:80,dataIndex:"blCargoPackages",align:'right',css:'font-weight:bold;'};
    var c31={header:C_BL_GW,width:80,dataIndex:"blCargoGrossWeight",renderer:rateRender,align:'right',css:'font-weight:bold;'};
    var c32={header:C_BL_CBM,width:80,dataIndex:"blCargoMeasurement",renderer:rateRender,align:'right',css:'font-weight:bold;'};
	
	var c33={header:C_SHIPPED_GW,width:80,dataIndex:"consShippedGrossWeight",renderer:rateRender,align:'right',css:'font-weight:bold;'};
    var c34={header:C_SHIPPED_MEASUREMENT,width:80,dataIndex:"consShippedMeasurement",renderer:rateRender,align:'right',css:'font-weight:bold;'};
    var c35={header:C_OPERATOR,width:80,dataIndex:"consOperatorName"};    
    var c36={header:C_ETA,dataIndex:"consEta",renderer:formatDate};
    
    var cm=new Ext.grid.ColumnModel({columns:bizType==BT_B?[c1,c2,c3,c4,c5,c28,c35,c6,c29,c7,c8,c9,c10,c11,c12,c13,c36,c14,c15,c16,c17,c18,c19,c20,c30,c31,c32,c33,c34,c23,c24,c25,c26,c27]:[c1,c2,c3,c4,c35,c5,c6,c7,c8,c9,c10,c11,c12,c13,c36,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26,c27,c28],
		defaults: {sortable: true}});
	this.addConsign = function(){
		var c=sm.getSelected();
		if(c.get('consMasterFlag')=='1'){
			var b=newConsign(bizClass,bizType,shipType);
			b.set('consMasterFlag','0');
			b.set('consMasterId',c.get('consId'));
			b.set('consMasterNo',c.get('consNo'));
			b.set('vessId',c.get('vessId'));
			b.set('vessName',c.get('vessName'));
			b.set('voyaId',c.get('voyaId'));
			b.set('voyaName',c.get('voyaName'));
			b.set('consPol',c.get('consPol'));
			b.set('consPolName',c.get('consPolName'));
			b.set('consPod',c.get('consPod'));			
			b.set('consPodName',c.get('consPodName'));
			b.set('consPot',c.get('consPot'));			
			b.set('consPotName',c.get('consPotName'));
			b.set('consTranCountry',c.get('consTranCountry'));
			b.set('consTradeCountry',c.get('consTradeCountry'));
			b.set('consOverseaAgency',c.get('consOverseaAgency'));			
			b.set('consOverseaAgencyName',c.get('consOverseaAgencyName'));
			b.set('consHarbour',c.get('consHarbour'));
			b.set('consCfs',c.get('consCfs'));
			b.set('consCfsName',c.get('consCfsName'));
			b.set('consBookingAgency',c.get('consBookingAgency'));
			b.set('consBookingAgencyName',c.get('consBookingAgencyName'));
			b.set('consCarrier',c.get('consCarrier'));
			b.set('consCarrierName',c.get('consCarrierName'));
			b.set('consExternalFlag',external?external:0);
			showConsign(b);
		}
		else XMG.alert(SYS,M_SEL_M_CONS);
	};
	this.newConsign = function(){
		var c=newConsign(bizClass,bizType,shipType);
		c.set('consExternalFlag',external?external:'0');
		showConsign(c);
	};
	this.editConsign = function(){var b=sm.getSelected();if(b) showConsign(b); else XMG.alert(SYS,M_NO_DATA_SELECTED);};
	this.task = function(){
		var b=sm.getSelected();
		if(b){var w=new Fos.TaskWin(b);w.show();}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	
	this.removeConsign = function(){
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var b = false;
               	for(var i=0;i<a.length;i++){if(a[i].get('consStatus')!='0'){b=true;break;}}
               	if(b) XMG.alert(SYS,M_CONS_CONFIRMED);
               	else {
               		var xml = SMTX4R(sm,'FConsign','consId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
					success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}
           }});
		}
       	else XMG.alert(SYS,M_R_P);
    };
	this.search = function(){var w=new Fos.ConsLookupWin(bizClass,bizType,shipType,'CONS_X',store);w.show();};
	var rowCtxEvents = {
		rowdblclick: function(grid, rowIndex, event){
			var c=grid.getSelectionModel().getSelected();if(c){showConsign(c);}},
		render: function(g) {
			var target = g.getView().el.dom.childNodes[0].childNodes[1];
			var firstGridDropTarget = new Ext.dd.DropTarget(target, {
				ddGroup:'consGridDDGroup',
				copy:false,
				notifyDrop : function(ddSource, e, data){
					var rfrom = g.getStore().getById(data.selections[0].id);
					var t = Ext.lib.Event.getTarget(e);
					var rindex = g.getView().findRowIndex(t);
					var rto = g.getStore().getAt(rindex);
					if(rto.get('consMasterFlag')!='1'||rfrom.get('consMasterId')==rto.get('consId')) return false;
					var t=new Ext.Template(M_LCL_TRANS);
					var msg=t.apply([rfrom.get('consNo'),rto.get('consNo')]);
					Ext.Msg.confirm(SYS,msg,function(btn){
    					if (btn == 'yes'){
        					Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
								params:{A:'CONS_MNO_U',consMasterFlag:0,consMasterId:rto.get('consId'),consMasterNo:rto.get('consNo'),consId:rfrom.get('consId')},
								success: function(r){store.reload(store.lastOptions);XMG.alert(SYS,M_S);return true;},
								failure: function(r){XMG.alert(SYS,M_F+r.responseText); return false;}
							});					
    					}
    					else return false;
					});					
				}
			}); 
		}
	};	
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
	this.fastSearch=function(){
		var consNo=kw.getValue();
		if(!consNo){XMG.alert(SYS,M_INPUT_BIZ_NO,function(b){kw.focus();});return;};
     	var a=[];
     	a[a.length]={key:'consBizClass',value:bizClass,op:EQ};
     	a[a.length]={key:'consBizType',value:bizType,op:EQ};
     	if(shipType!='') a[a.length]={key:'consShipType',value:shipType,op:EQ};
     	a[a.length]={key:'consExternalFlag',value:external?external:'0',op:1};
     	var c=consNo.indexOf(',');
		var b=consNo.indexOf('..');
     	if(c>=0){
			a[a.length]={key:'consNo',value:consNo,op:IN};
		}
		else if(b>=0){
			var ra=consNo.split('..');
			a[a.length]={key:'consNo',value:ra[0],op:GE};
			a[a.length]={key:'consNo',value:ra[1],op:LE};
		}
		else
 			a[a.length]={key:'consNo',value:consNo,op:LI};
     	store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:C_PS},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
	};
	this.exp=function(){EXP('C','CONS_LIST',store.baseParams.xml?'&mt=JSON&xml='+Ext.util.JSON.encode(store.baseParams.xml):'&mt=JSON');};
  	var title=getBT(bizType);title+=getBC(bizClass);
  	     if(bizClass==BC_I&&shipType=='LCL') title+=C_SWITCH; else title+=getSHTY(shipType);
  	     title+=C_CONS_LIST;
	var m=getRM(bizClass,bizType,shipType)+M3_CONS;
	var b1={text:C_ADD+'(N)',disabled:NR(m+(bizType==BT_B?F_CM:F_M))||(bizType==BT_C&&shipType==''),iconCls:'add',handler:this.newConsign};
	var b2={text:C_CONSOLIDATE+'(P)',disabled:NR(m+F_M),iconCls:'add',handler:this.addConsign};
	var b3={text:C_EDIT+'(M)',disabled:NR(m+F_V),iconCls:'option',handler:this.editConsign};
	var b4={text:C_REMOVE+'(D)',disabled:NR(m+F_R),iconCls:'remove',handler:this.removeConsign};
	var b5={text:C_SEARCH+'(F)',iconCls:'search',handler:this.search};	
	var b6={text:C_EXPORT+'(E)',disabled:NR(m+F_E),iconCls:'print',handler:this.exp};
	var b7=new Ext.PagingToolbar({pageSize:C_PS,store:store});	
	var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',handler:this.fastSearch};	
	var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
	var b10={text:C_TASK+'(T)',iconCls:'task',handler:this.task};
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nmdfeq',ctrl:true,
		handler: function(k, e) {
		 	var t = T_MAIN.getComponent('G_CONS_'+bizClass+'_'+bizType+(shipType==''?'':'_'+shipType)+(external?'_'+external:''));
		 	if(t&&t==T_MAIN.getActiveTab())
		 	{
		 	    switch(k) {
				case Ext.EventObject.N: this.newConsign();break;
				case Ext.EventObject.M: this.editConsign();break;
				case Ext.EventObject.D: this.removeConsign();break;
				case Ext.EventObject.F: this.search();break;
				case Ext.EventObject.E: this.exp();break;
				case Ext.EventObject.Q: this.fastSearch();break;
                }
			}
		},
		stopEvent: true,scope:this
	});
	new Ext.KeyMap(Ext.getDoc(), {key:[116],
        handler: function(k, e) {
            var t = T_MAIN.getComponent('G_CONS_'+bizClass+'_'+bizType+(shipType==''?'':'_'+shipType)+(external?'_'+external:''));
            if(t&&t==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
        var t = T_MAIN.getComponent('G_CONS_'+bizClass+'_'+bizType+(shipType==''?'':'_'+shipType)+(external?'_'+external:''));
        if(t&&t==T_MAIN.getActiveTab()){
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
    var tbs=[b1, '-',b3,'-',b4,'-',b5,'-',b6,'-',kw,b8,'-',b9,'-',b10,'-'];
    if(bizType==BT_B) tbs=[b1, '-',b3,'-',b4,'-',b5,'-',b6,'-',kw,b8,'-',b9,'-',b10,'-'];
    else if (bizType==BT_C&&bizClass==BC_E&&shipType==ST_L)  tbs=[b1, '-',b2,'-',b3,'-',b4,'-',b5,'-',b6,'-',kw,b8,'-',b9,'-',b10,'-'];
    
	Fos.ConsignGrid.superclass.constructor.call(this, {
    id:'G_CONS_'+bizClass+'_'+bizType+(shipType==''?'':'_'+shipType)+(external?'_'+external:''),iconCls:'grid',store: store,title:title,header:false,loadMask:true,
	sm:sm,cm:cm,stripeRows:true,closable:true,ddGroup:'consGridDDGroup',enableDragDrop:shipType=='LCL'?true:false,	
	listeners:rowCtxEvents,view:new Ext.grid.GroupingView(groupViewCfg),
	tbar:tbs,bbar:PTB(store,C_PS)});
    store.load({params:{start:0,limit:C_PS}});
};
Ext.extend(Fos.ConsignGrid, Ext.grid.GridPanel);

Fos.ConsignTab = function(p){
	var items=[];
	items[0]=new Fos.BookTab(p);
	if(p.get('rowAction')!='N'){
		items[items.length]=new Fos.ConsDocGrid(p);
		items[items.length]=VERSION==1?(new Fos.ExpenseTab2(p,'C')):(new Fos.ExpenseTab(p,'C'));
	}
	if(p.get('consServiceRequired').indexOf(SR_TRAN)!=-1) items[items.length]=new Fos.TransTab(p);
	if(p.get('consServiceRequired').indexOf(SR_WARE)!=-1) items[items.length]=new Fos.WarehouseTab(p);
	if(p.get('consServiceRequired').indexOf(SR_CONT)!=-1 && (p.get('consShipType')==ST_F||(p.get('consShipType')==ST_L&& p.get('consMasterFlag')=='1'))) items[items.length]=new Fos.ContainerTab(p);
	if(p.get('consServiceRequired').indexOf(SR_BL)!=-1) items[items.length]=new Fos.BLTab(p);
	if(p.get('consServiceRequired').indexOf(SR_INSP)!=-1) items[items.length]=new Fos.InspectionTab(p);
	if(p.get('consServiceRequired').indexOf(SR_CUDE)!=-1) items[items.length]=new Fos.CustomsTab(p);
	if(p.get('consServiceRequired').indexOf(SR_BBOOK)!=-1) items[items.length]=new Fos.BBookingTab(p);	
	if(p.get('consServiceRequired').indexOf(SR_SESH)!=-1) items[items.length]=new Fos.SecondShipTab(p);
	if(p.get('consServiceRequired').indexOf(SR_RABL)!=-1) items[items.length]=new Fos.RailwayBlTab(p);
	if(p.get('consBizClass')==BC_I && p.get('consShipType')==ST_L) items[items.length]=new Fos.SplitTab(p);
	new Ext.KeyMap(Ext.getDoc(), {
		key:[112,113,114,115,116,117,118,119,120,121,122,123],
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc==T_MAIN.getActiveTab())
		 	switch(k) {
				case Ext.EventObject.F1:
					var t=tc.getComponent('T_BOOK_'+p.get('id'));if(t) tc.setActiveTab(t);break;
				case Ext.EventObject.F2:
					var t=tc.getComponent('T_DOC_'+p.get('id'));if(t) tc.setActiveTab(t);break;
				case Ext.EventObject.F3:
					var t=tc.getComponent('T_EXPE_'+p.get('id'));if(t) tc.setActiveTab(t);break;
				case Ext.EventObject.F4:
					var t=tc.getComponent('T_TRAN_'+p.get('id'));if(t) tc.setActiveTab(t);break;
				case Ext.EventObject.F5:
					var t=tc.getComponent('T_WARE_'+p.get('id'));if(t) tc.setActiveTab(t);break;
				case Ext.EventObject.F6:
					var t=tc.getComponent('T_CONT_'+p.get('id'));if(t) tc.setActiveTab(t);break;
				case Ext.EventObject.F7:
					var t=tc.getComponent('T_BL_'+p.get('id'));if(t) tc.setActiveTab(t);break;
				case Ext.EventObject.F8:
					var t=tc.getComponent('T_INSP_'+p.get('id'));if(t) tc.setActiveTab(t);break;
				case Ext.EventObject.F9:					
					var t=tc.getComponent('T_CUDE_'+p.get('id'));if(t) tc.setActiveTab(t);break;
				case Ext.EventObject.F10:
					var ts=tc.getComponent('T_SPLIT_'+p.get('id'));if(ts) tc.setActiveTab(ts);
					var t=tc.getComponent('T_BBOOK_'+p.get('id'));if(t) tc.setActiveTab(t);break;
				case Ext.EventObject.F11:
					var t=tc.getComponent('T_SESH_'+p.get('id'));if(t) tc.setActiveTab(t);break;
				case Ext.EventObject.F12:
					var t=tc.getComponent('T_RABL_'+p.get('id'));if(t) tc.setActiveTab(t);break;
			}
		},
		stopEvent: true
	});
	title=getBT(p.get('consBizType'));title+=getBC(p.get('consBizClass'));
	if(p.get('consBizType')==BT_C){
	   if(p.get('consBizClass')==BC_I&&p.get('consShipType')=='LCL') title+=C_SWITCH; 
	   else title+=getSHTY(p.get('consShipType'));
	}
	title+=C_CONSIGN+'-'+p.get("consNo");
	Fos.ConsignTab.superclass.constructor.call(this,{id:"C_" + p.get("id"),items:items,
	title:title,iconCls:'class',deferredRender:false,closable:true,activeTab:0,bbar:getMB(p),
	listeners:{scope:this,tabchange:function(m,a){a.doLayout();}}
	});
};
Ext.extend(Fos.ConsignTab,Ext.TabPanel);

Fos.BookTab = function(p) {
	this.carg_s = GS('CARG_Q','FCargo',FCargo,'cargId','ASC');
	this.cargoGrid = new Fos.CargoGrid(p,this.carg_s,this);	
	if(p.get('consBizType')==BT_C){
		this.cont_s = GS('CONT_Q','FContainer',FContainer,'contId','ASC');
    	this.contGrid = new Fos.ContainerGrid(p,this.cont_s);
    	if(p.get('consBizClass')==BC_I){
    		this.hbl_s = GS('BL_Q','FBl',FBl,'blId','ASC');
    		this.hblGrid = new Fos.ImpHblGrid(p,this.hbl_s); 
    	}
    }
    if(p.get('rowAction')!='N'){
		this.carg_s.load({params:{consId:p.get('consId')}});
		if(p.get('consBizType')==BT_C){
			this.cont_s.load({params:{consId:p.get('consId'),contPreFlag:p.get('consBizClass')==BC_I?'N':'Y'}});
			if(p.get('consBizClass')==BC_I)
				this.hbl_s.load({params:{consId:p.get('consId'),blType:'H/BL'}});
		}
	};    
    this.save = function(){    	
    	if(this.find('name','custName')[0].getValue()==''){
			XMG.alert(SYS,M_CUST_REQIRED,function(){this.find('name','custName')[0].focus();},this);return;};
		if(!p.get('custId')){
			XMG.alert(SYS,M_CUST_MUST_PREDEFINED);return;};
		if(this.find('name','deptId')[0].getValue()==''){
			XMG.alert(SYS,M_DEPT_REQIRED,function(){this.find('name','deptId')[0].focus();},this);return;};	
		if(this.find('name','consSalesRepName')[0].getValue()==''){
			XMG.alert(SYS,M_SALES_REQIRED,function(){this.find('name','consSalesRepName')[0].focus();},this);return;};
		if(this.find('name','consOperatorId')[0].getValue()==''){
			XMG.alert(SYS,M_OPERATOR_REQIRED,function(){this.find('name','consOperatorId')[0].focus();},this);return;};
		if(this.find('name','consPolEn')[0].getValue()==''){
			XMG.alert(SYS,M_POD_REQIRED,function(){this.find('name','consPodEn')[0].focus();},this);return;};
		if(this.find('name','consPodEn')[0].getValue()==''){
			XMG.alert(SYS,M_POD_REQIRED,function(){this.find('name','consPodEn')[0].focus();},this);return;};
		if(p.get('consBizClass')==BC_I && this.find('name','consEta')[0].getValue()==''){
			XMG.alert(SYS,M_ETA_REQIRED,function(){this.find('name','consEta')[0].focus();},this);return;};
		var f = FConsign.prototype.fields;
		for (var i = 0; i < f.keys.length; i++) {
        	var fn = ''+f.keys[i];
        	var fc = this.find('name',fn);
        	if(fc!=undefined&&fc.length>0){
        		p.set(fn,fc[0].getValue());
        	}
   	 	}
   	 	var df=this.findById('cargDanagerFlag');
   	 	if(df!=undefined&&df.checkbox)
   	 		p.set('cargDanagerFlag',this.findById('cargDanagerFlag').checkbox.dom.checked);
   	 	var rf=this.findById('cargReeterFlag');
   	 	if(rf!=undefined&&rf.checkbox)
   	 		p.set('cargReeterFlag',this.findById('cargReeterFlag').checkbox.dom.checked);
   	 	var bf=this.findById('cargBigFlag');
   	 	if(bf!=undefined&&bf.checkbox)
   	 	p.set('cargBigFlag',this.findById('cargBigFlag').checkbox.dom.checked);
   	 	
   	 	if(p.get('consBizType')==BT_G){
   	 		p.set('consServiceRequired',SR_CUDE);
   	 	}
   	 	else if(p.get('consBizType')==BT_I){
   	 		p.set('consServiceRequired',SR_INSP);
   	 	}
   	 	else{
	  	 	var consServiceRequired = '';   	 	
	  	 	if(this.find('name','SR_TRAN')[0]) consServiceRequired+=this.find('name','SR_TRAN')[0].getValue()?SR_TRAN:'';
	  	 	if(this.find('name','SR_WARE')[0]) consServiceRequired+=this.find('name','SR_WARE')[0].getValue()?SR_WARE:'';
	  	 	if(this.find('name','SR_INSP')[0]) consServiceRequired+=this.find('name','SR_INSP')[0].getValue()?SR_INSP:'';
	  	 	if(this.find('name','SR_CUDE')[0]) consServiceRequired+=this.find('name','SR_CUDE')[0].getValue()?SR_CUDE:'';
	  	 	if(this.find('name','SR_CONT')[0]) consServiceRequired+=this.find('name','SR_CONT')[0].getValue()?SR_CONT:'';
	  	 	if(this.find('name','SR_BL')[0]) consServiceRequired+=this.find('name','SR_BL')[0].getValue()?SR_BL:'';
	  	 	if(this.find('name','SR_BBOOK')[0]) consServiceRequired+=this.find('name','SR_BBOOK')[0].getValue()?SR_BBOOK:'';
	  	 	if(this.find('name','SR_RABL')[0]) consServiceRequired+=this.find('name','SR_RABL')[0].getValue()?SR_RABL:'';
	  	 	if(this.find('name','SR_SESH')[0]) consServiceRequired+=this.find('name','SR_SESH')[0].getValue()?SR_SESH:'';
	  	 	p.set('consServiceRequired',consServiceRequired);
   	 	}
   	 	if(p.get('consBizType')==BT_C){
	   	 	var c =this.cont_s.getModifiedRecords();
	   	 	if(c.length>0){
	   	 		var tc=0;cif='';tn=0;
	   	 		var df=false;rf=false;bf=false;
	   	 		var ra = this.contGrid.getStore().getRange();
	   	 		for(var i=0;i<ra.length;i++){
	   	 			var ct = ra[i].get('cotyId');
	   	 			var cc=getCOTY(ct);
	   	 			var cl=getCLCODE(ct);
	   	 			var teu=getCTEU(ct);
	   	 			var n = ra[i].get('contNum');
	   	 			tn+=teu*n;
	   	 			cif+=n+'X'+cc+' ';
	   	 			tc=tc+n;
	   	 			if(cl=='FR'||cl=='OT') bf=true;
	   	 			else if(cl=='DG') df=true;
	   	 			else if(cl=='RF') rf=true;
	   	 		}
	   	 		var tbt=this.getComponent('T_BOOK_T_'+p.get('id'));
	   	 		var t=tbt.getComponent('C_B_H_'+p.get('id'));
	   	 		if(bf&&(p.get('cargLength')==''||p.get('cargWidth')==''||p.get('cargHigh')=='')){
	   	 			XMG.alert(SYS,M_BIG_CARGO_INFO,function(){tbt.setActiveTab(t);},this);
	   	 			return;
	   	 		}
	   	 		if(df&&(p.get('cargDanagerClass')==''||p.get('cargUnNo')=='')){
	   	 			XMG.alert(SYS,M_DANAGER_CARGO_INFO,function(){tbt.setActiveTab(t);},this);
	   	 			return;
	   	 		}
	   	 		if(rf&&(p.get('cargTemperature')==''||p.get('cargTemperatureLow')==''||p.get('cargTemperatureHigh')=='')){
	   	 			XMG.alert(SYS,M_REEFTER_CARGO_INFO,function(){tbt.setActiveTab(t);},this);
	   	 			return;
	   	 		}
	   	 		p.set('consTotalContainers',tc);
	   	 		p.set('consContainersInfo',cif);
	   	 		p.set('consContainersTeu',tn);
	   	 	}
   	 	}   	 	
   	 	var b=this.cargoGrid.getSelectionModel().getSelected();
   	 	var cargos =this.carg_s.getModifiedRecords();
   	 	p.set('consCargoPackages',''+p.get('consTotalPackages')+p.get('packName'));
 		p.set('consCargoNetWeight',''+p.get('consTotalNetWeight')+(p.get('consBizType')==BT_C?'KGS':'MT'));
 		p.set('consCargoGrossWeight',''+p.get('consTotalGrossWeight')+(p.get('consBizType')==BT_C?'KGS':'MT'));
 		p.set('consCargoMeasurement',''+p.get('consTotalMeasurement')+'CBM');
   	 	var xml = RTX(p,'FConsign',FConsign);
   	 	if(p.get('consBizType')==BT_C){
			var c =this.cont_s.getModifiedRecords();
			if(c.length>0){var x = ATX(c,'FContainer',FContainer);xml=xml+x;};
			if(p.get('consBizClass')==BC_I){
				var cc =this.hbl_s.getModifiedRecords();
				if(cc.length>0){var x = ATX(cc,'FBl',FBl);xml=xml+x;};
			}
		}
		if(cargos.length>0){var x = ATX(cargos,'FCargo',FCargo);xml=xml+x;};   	 	
   	 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:p.get('wconId')?'WCON_S':'CONS_S'},
			success: function(res){
				var c = XTR(res.responseXML,'FConsign',FConsign);
				var ra=p.get('rowAction');
				var f = FConsign.prototype.fields;
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};   				
				if(ra=='N'){
					var t = T_MAIN.getComponent('C_'+ p.get('id'));
					var title=getBT(p.get('consBizType'))+getBC(p.get('consBizClass'))+getSHTY(p.get('consShipType'))+'委托【'+p.get("consNo")+'】';
					t.setTitle(title);
					this.find('name','consNo')[0].setValue(p.get('consNo'));
					p.set('rowAction','M');
				}
				p.endEdit();
				var a = XTRA(res.responseXML,'FCargo',FCargo);FOSU(this.carg_s,a,FCargo);
				if(p.get('consBizType')==BT_C){
					var b = XTRA(res.responseXML,'FContainer',FContainer);FOSU(this.cont_s,b,FContainer);
				}				
				if(p.get('consBizType')==BT_C&&p.get('consBizClass')==BC_I){
					var c = XTRA(res.responseXML,'FBl',FBl);FOSU(this.hbl_s,c,FBl);
				}
				XMG.alert(SYS,M_S);showConsignTabs(p);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
    };    
    var f1={fieldLabel:p.get('consBizType')==BT_B?C_CHARTER:C_BOOKER,itemCls:'required',tabIndex:1,name:'custName',value:p.get('custName'),store:getCS(),enableKeyEvents:true,
       		xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
       		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',selectOnFocus:true,anchor:'95%',
             	listeners:{scope:this,
             	blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('custId','');p.set('custName','');}},
             	select:function(c,r,i){
				this.find('name','custContact')[0].setValue(r.get('custContact'));
				this.find('name','custTel')[0].setValue(r.get('custTel'));
				this.find('name','custFax')[0].setValue(r.get('custFax'));
				this.find('name','custSalesId')[0].store.reload({params:{custId:r.get('custId')}});
				p.set('custId',r.get('custId'));p.set('custSname',r.get('custCode'));
				this.find('name','consShipper')[0].setValue(r.get('custShipper'));
				var attr9=r.get('attr9');
				var attr10=r.get('attr10');
				if(attr9!=''||attr10!=''){
					var html='<table width=100% height=100%>';
					html+='<tr><td valign=top>';
					html+='<br><b>客户特性：</b><br>'+attr9;
					html+='<br><br><b>操作注意事项：</b><br>'+attr10;
					html+='</td></tr></table>';
					var w=new Ext.Window({title:p.get('name'),modal:true,width:400,
	                height:300, autoScroll:true,plain:false,html:html});
	                w.show();
				}
			},
			keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}};
	var f2={fieldLabel:C_CONS_NO,style:'{font-weight:bold;color:green;}',disabled:true,tabIndex:5,name:'consNo',value:p.get('consNo'),xtype:'textfield',anchor:'95%'};
	var f3={fieldLabel:C_CONTRACT_NO,tabIndex:9,name:'consContractNo',value:p.get('consContractNo'),xtype:'textfield',anchor:'95%'};
	var f4={fieldLabel:C_CARGO_SOURCE,tabIndex:13,name:'consSource',value:p.get('consSource'),store:SOUR_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'};
	var f5={fieldLabel:C_TTER,itemCls:'needed',tabIndex:17,name:'tranId',value:p.get('tranId'),store:p.get('consBizType')==BT_B?getTTB_S():getTTC_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('tranId','');}},
    	select:function(c,r,i){p.set('tranCode',r.get('tranCode'));}}};
	var f6={xtype:'checkbox',labelSeparator:'',boxLabel:C_PARTIAL_FLAG,tabIndex:19,name:'consPartialFlag',check:p.get('consPartialFlag')=='1'};
	var f30={xtype:'checkbox',labelSeparator:'',boxLabel:C_TANS_FLAG,tabIndex:20,name:'consTransFlag',checked:p.get('consTransFlag')=='1'};
    
    var f7={fieldLabel:C_CONTACT,tabIndex:2,name:'custContact',value:p.get('custContact'),xtype:'textfield',anchor:'95%'};
    var f8={fieldLabel:C_CONS_DATE,tabIndex:6,name:'consDate',value:p.get('consDate'),xtype:'datefield',format:DATEF,anchor:'95%'};
    var f9={fieldLabel:C_CUST_SALES,tabIndex:10,name:'custSalesId',value:p.get('custSalesId'),store:getCUCOS(),xtype:'combo',displayField:'cucoName',valueField:'cucoId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
    
    var f10={fieldLabel:C_CACL,tabIndex:14,name:'caclId',value:p.get('caclId'),store:getCACL_S(),xtype:'combo',displayField:'caclNameCn',valueField:'caclId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
    	listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('caclId','');}},
    	select:function(c,r,i){p.set('caclName',r.get('caclNameCn'));}}};
    var f11={fieldLabel:C_SHLI,itemCls:'needed',tabIndex:18,name:'shliId',value:p.get('shliId'),store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
    	listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('shliId','');}},
    	select:function(c,r,i){p.set('shliCode',r.get('shliCode'));}}};
    var f12={fieldLabel:C_LCL_TYPE,tabIndex:22,name:'consLclType',value:p.get('consLclType'),disabled:p.get('consShipType')!='LCL',store:LCLT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'};
    
    var f13={fieldLabel:C_PHONE,tabIndex:3,name:'custTel',value:p.get('custTel'),xtype:'textfield',anchor:'95%'};
    var f14={fieldLabel:C_DEPT,itemCls:'required',tabIndex:7,name:'deptId',value:p.get('deptId'),store:getGROU_S(),xtype:'combo',displayField:'grouName',valueField:'grouId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
    var f15={fieldLabel:C_REF_NO,tabIndex:11,name:'consRefNo',value:p.get('consRefNo'),xtype:'textfield',anchor:'95%'};
    var f16={fieldLabel:C_PATE,itemCls:'needed',tabIndex:15,name:'pateId',value:p.get('pateId'),store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
    	listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('pateId','');}},
    	select:function(c,r,i){p.set('pateName',r.get('pateName'));}}};
   
    var f17={fieldLabel:C_CHARGE_REMARKS,tabIndex:16,name:'consChargeRemarks',value:p.get('consChargeRemarks'),xtype:'textfield',anchor:'95%'};
    var f18={fieldLabel:C_M_CONS_NO,disabled:true,tabIndex:23,name:'consMasterNo',value:p.get('consMasterNo'),xtype:'textfield',anchor:'95%'};
    
    var f19={xtype:'textfield',tabIndex:4,fieldLabel:C_FAX,name:'custFax',value:p.get('custFax'),anchor:'95%'};
    var f20={fieldLabel:C_SALES,itemCls:'required',tabIndex:8,name:'consSalesRepName',value:p.get('consSalesRepName'),
    		store:getSALE_S(),xtype:'combo',displayField:VERSION==1?'userName':'userLoginName',valueField:'userName',
    		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
    		listeners:{scope:this,
    			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consSalesRepId','');p.set('consSalesRepName','');}},
    	    	select:function(c,r,i){p.set('consSalesRepId',r.get('userId'));}}};
    var f21={fieldLabel:C_OPERATOR,itemCls:'required',tabIndex:12,name:'consOperatorId',value:p.get('consOperatorId'),
    		store:getOP_S(),xtype:'combo',displayField:VERSION==1?'userName':'userLoginName',valueField:'userId',
    		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
    		listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consOperatorId','');p.set('consOperatorName','');}},
    	select:function(c,r,i){p.set('consOperatorName',r.get('userName'));}}};
    var f22={fieldLabel:C_PAID_AT,tabIndex:16,name:'consPaidAt',value:p.get('consPaidAt'),xtype:'textfield',anchor:'95%'};
	
	var f24={fieldLabel:C_BVESSEL,tabIndex:18,name:'consBVessel',value:p.get('consBVessel'),xtype:'textfield',anchor:'95%'};
	var f25={fieldLabel:C_BVOYAGE,tabIndex:19,name:'consBVoyage',value:p.get('consBVoyage'),xtype:'textfield',anchor:'95%'};
	var f26={fieldLabel:C_BPOT,tabIndex:20,name:'consBPodEn',value:p.get('consBPodEn'),xtype:'textfield',anchor:'95%'};
	var f27={fieldLabel:C_DELIVERY_DATE,tabIndex:14,name:'consDeliveryDate',value:p.get('consDeliveryDate'),xtype:'datefield',format:DATEF,anchor:'95%'};
	
	var t111=[];var t112=[];var t113=[];var t114=[];
	if(p.get('consBizClass')==BC_I){
		t111=[f1,f2,f3,f4,f5];
		t112=[f7,f8,f9,f27,f24];
		t113=[f13,f14,f15,f16,f25];
		t114=[f19,f20,f21,f22,f26];
		if(p.get('consBizType')==BT_A){
			t112=[f7,f8,f9,f27];
			t113=[f13,f14,f15,f16];
			t114=[f19,f20,f21,f22];
		}
	}
	else{
		t111=[f1,f2,f3,f4,f5];
		t112=[f7,f8,f9,f10,f11];
		t113=[f13,f14,f15,f16,f6];
		t114=[f19,f20,f21,f22,f30];
		if(p.get('consShipType')==ST_L){
			t112=[f7,f8,f9,f10,f11,f12];
			t113=[f13,f14,f15,f16,f17,f18];
		}
		else if(p.get('consBizType')==BT_A){
			t112=[f7,f8,f9,f27];
			t113=[f13,f14,f15,f16];
			t114=[f19,f20,f21,f22];
		}
	};
	var t11={layout:'column',title:C_CONS_INFO,collapsible:true,
    	items:[{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:t111},
          	{columnWidth:.25,layout:'form',labelWidth:70,border:false,items:t112},
          	{columnWidth:.25,layout: 'form',labelWidth:70,border:false,items:t113},
			{columnWidth:.25,layout: 'form',labelWidth:70,border:false,items:t114}
		]};
	
	var CreateSR=function(t,n,c,idx){
		return {columnWidth:.1,layout:'form',border:false,labelWidth:0,labelSeparator:'',hideLabels:true,
           	items: [{boxLabel:t,tabIndex:idx,name:n,checked:p.get('consServiceRequired').indexOf(c)!=-1,xtype:'checkbox',anchor:'100%'}]};
	};
	var s1={columnWidth:.1,layout:'form',border:false,items: [{text:C_SERVICE_REQUIRED,style:'{font-size:12px;}',xtype:'label',anchor:'100%'}]};
	var s2=CreateSR(C_SR_TRAN,'SR_TRAN',SR_TRAN,25);
	var s3=CreateSR(C_SR_WARE,'SR_WARE',SR_WARE,26);
 	var s4=CreateSR(C_SR_CONT,'SR_CONT',SR_CONT,27);
 	var s5=CreateSR(C_SR_BL,'SR_BL',SR_BL,28);
 	var s6=CreateSR(C_SR_INSP,'SR_INSP',SR_INSP,29);
 	var s7=CreateSR(C_SR_CUDE,'SR_CUDE',SR_CUDE,30);
 	var s8=CreateSR(C_SR_BBOOK,'SR_BBOOK',SR_BBOOK,31);
 	var s9=CreateSR(C_SR_SESH,'SR_SESH',SR_SESH,32);
 	var s10=CreateSR(C_SR_RABL,'SR_RABL',SR_RABL,33);
 	var srTab=[s1,s2,s3,s6,s7];
 	if(p.get('consBizType')==BT_B&&p.get('consBizClass')==BC_E){
 		srTab=[s1,s2,s3,s5,s6,s7,s8,s9,s10];
 	}
 	else if(p.get('consBizType')==BT_A){
 		srTab=[s1,s2,s3,s5,s6,s7];
 	}
 	else if(p.get('consBizType')==BT_C&&p.get('consBizClass')==BC_E){
 		srTab=[s1,s2,s3,s4,s5,s6,s7,s8,s9,s10];
 	}
	var t12={layout:'column',frame:true,height:35,items:srTab};
    var vt='';
    if(p.get('consBizType')==BT_C) vt=1;
    else if(p.get('consBizType')==BT_B) vt=2;
    
	var m1={fieldLabel:C_VESS,itemCls:'needed',tabIndex:34,name:'vessName',value:p.get('vessName'),store:getVES(),enableKeyEvents:true,
		xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',typeAhead:true,
		mode:'local',tpl:vessTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,
			select:function(c,r,i){p.set('vessId',r.get('vessId'));p.set('vessNameCn',r.get('vessNameCn'));
				var vcn=this.find('name','vessNameCn')[0];
				if(vcn) vcn.setValue(r.get('vessNameCn'));
				},
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('vessId','');p.set('vessName','');}},
			keydown:{fn:function(f,e){LV(f,e,vt);},buffer:BF}}};
	var m2={fieldLabel:p.get('consBizType')==BT_A?C_FLIGHTER:C_CARRIER,itemClass:'needed',tabIndex:p.get('consBizClass')==BC_I?42:38,name:'consCarrierName',value:p.get('consCarrierName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consCarrier','');p.set('consCarrierName','');}},
			select:function(c,r,i){p.set('consCarrier',r.get('custId'));},
			keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:BF}}};
	var m3={fieldLabel:C_OVERSEA_AGENCY,tabIndex:p.get('consBizClass')==BC_I?46:42,name:'consOverseaAgencyName',value:p.get('consOverseaAgencyName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consOverseaAgency','');p.set('consOverseaAgencyName','');}},
			select:function(c,r,i){
            	p.set('consOverseaAgency',r.get('custId'));
            	this.find('name','consNotifyParty2')[0].setValue(r.get('custAddress2'));
 				},
			keydown:{fn:function(f,e){LC(f,e,'custOverseaAgencyFlag');},buffer:BF}}};
	var m4={fieldLabel:p.get('consBizClass')==BC_E?C_COUNTRY_D:C_COUNTRY_L,tabIndex:46,disabled:true,name:'consTradeCountry',value:p.get('consTradeCountry'),store:getCOUN_S(),xtype:'combo',displayField:'counNameEn',valueField:'counCode',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
	var m5={fieldLabel:C_BL_REMARKS,tabIndex:50,name:'consBlRemarks',value:p.get('consBlRemarks'),xtype:'textfield',anchor:'95%'};
	var m6={fieldLabel:'S/O No.',name:'consSoNo',tabIndex:54,value:p.get('consSoNo'),xtype:'textfield',anchor:'95%'};
	
	var m7={fieldLabel:C_CONTAINER,tabIndex:p.get('consBizClass')==BC_I?48:58,name:'consContainerCompanyName',value:p.get('consContainerCompanyName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,
        	blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consContainerCompany','');p.set('consContainerCompanyName','');}},
        	select:function(c,r,i){p.set('consContainerCompany',r.get('custId'));},
			keydown:{fn:function(f,e){LC(f,e,'custContainerFlag');},buffer:BF}}};
			
	var m8={fieldLabel:p.get('consBizType')==BT_A?C_FLIGHT:C_VOYA,itemCls:'needed',tabIndex:35,name:'voyaName',value:p.get('voyaName'),xtype:'textfield',anchor:'95%'};
	var m9={fieldLabel:C_BOOK_AGENCY,tabIndex:39,name:'consBookingAgencyName',value:p.get('consBookingAgencyName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',
		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consBookingAgency','');p.set('consBookingAgencyName','');}},
        	select:function(c,r,i){p.set('consBookingAgency',r.get('custId'));p.set('consBookingAgencySname',r.get('custCode'));},
        	keydown:{fn:function(f,e){LC(f,e,'custBookingAgencyFlag');},buffer:BF}}};
    var m10={fieldLabel:C_POL,itemCls:'required',tabIndex:p.get('consBizClass')==BC_I?39:43,name:'consPolEn',value:p.get('consPolEn'),store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
    		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
    		listeners:{scope:this,
    			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPol','');}},
            	select:function(c,r,i){p.set('consPol',r.get('portId'));
            	if(p.get('consBizClass')==BC_I&&this.find('name','consTradeCountry')[0]) this.find('name','consTradeCountry')[0].setValue(r.get('counCode'));
            	if(p.get('consBizClass')==BC_E&&this.find('name','consReceiptPlace')[0]) this.find('name','consReceiptPlace')[0].setValue(r.get('portNameEn'));},
             	keydown:{fn:LP,buffer:BF}}};
	var m11={fieldLabel:C_POD,itemCls:'required',tabIndex:p.get('consBizClass')==BC_I?40:47,name:'consPodEn',value:p.get('consPodEn'),store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPod','');}},
        	select:function(c,r,i){p.set('consPod',r.get('portId'));
            	if(this.find('name','consTradeCountry')[0]) this.find('name','consTradeCountry')[0].setValue(r.get('counCode'));
            	if(this.find('name','consDeliveryPlace')[0]) this.find('name','consDeliveryPlace')[0].setValue(r.get('portNameEn'));
            	if(this.find('name','consDestination')[0]) this.find('name','consDestination')[0].setValue(r.get('portNameEn'));},
         	keydown:{fn:LP,buffer:BF}}};
    var m12={fieldLabel:C_POT,tabIndex:p.get('consBizClass')==BC_I?41:51,name:'consPotEn',value:p.get('consPotEn'),xtype:'textfield',anchor:'95%'};
    var m13={fieldLabel:C_BOOKING_CONTRACT_NO,name:'consBookingContractNo',tabIndex:55,value:p.get('consBookingContractNo'),xtype:'textfield',anchor:'95%'};
    var m14={fieldLabel:C_PACKING_LIST_NO,tabIndex:59,name:'consPackingListNo',value:p.get('consPackingListNo'),xtype:'textfield',anchor:'95%'};
    
    var m15={fieldLabel:p.get('consBizType')==BT_A?'MAWB No.':C_MBL_NO,tabIndex:36,name:'consMblNo',value:p.get('consMblNo'),xtype:'textfield',anchor:'95%'};
    var m16={fieldLabel:C_SHIP_LOAD_DATE,tabIndex:40,name:'consLoadDate',value:p.get('consLoadDate'),xtype:'datefield',format:DATEF,anchor:'95%'};
    var m17={fieldLabel:C_HARBOUR,tabIndex:p.get('consBizClass')==BC_I?43:44,name:'consHarbour',value:p.get('consHarbour'),store:getHARB_S(),xtype:'combo',displayField:'placName',valueField:'placName',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
    		listeners:{scope:this,select:function(c,r,i){p.set('consHarbourId',r.get('placId'));}}};
    var m18={fieldLabel:C_DELIVERY_PLACE,tabIndex:48,name:'consDeliveryPlace',value:p.get('consDeliveryPlace'),xtype:'textfield',anchor:'95%'};
    var m19={fieldLabel:C_ISTY,tabIndex:52,name:'istyId',value:p.get('istyId'),store:getISTY_S(),xtype:'combo',displayField:'istyName',valueField:'istyId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
    var m20={fieldLabel:C_BOOKING_DATE,tabIndex:56,name:'consBookingDate',value:p.get('consBookingDate'),xtype:'datefield',format:DATEF,anchor:'95%'};
    var m21={fieldLabel:C_CFS,tabIndex:p.get('consBizClass')==BC_I?49:60,name:'consCfsName',value:p.get('consCfsName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
    	listeners:{scope:this,
        	blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consCfs','');p.set('consCfsName','');}},
         	select:function(c,r,i){p.set('consCfs',r.get('custId'));},
        	keydown:{fn:function(f,e){LC(f,e,'custCfsFlag');},buffer:BF}}};   
   
    var m23={fieldLabel:C_CUSTOM_EXPIRY_DATE,tabIndex:41,name:'consExpiryDate',value:p.get('consExpiryDate'),xtype:'datefield',format:DATEF,anchor:'95%'};
    var m24={fieldLabel:C_RECEIPT_PLACE,tabIndex:45,name:'consReceiptPlace',value:p.get('consReceiptPlace'),xtype:'textfield',anchor:'95%'};
    var m25={fieldLabel:C_DESTINATION,tabIndex:49,name:'consDestination',value:p.get('consDestination'),xtype:'textfield',anchor:'95%'};
    var m26={fieldLabel:C_PRECARRIAGE,tabIndex:53,name:'consPrecarriage',value:p.get('consPrecarriage'),xtype:'textfield',anchor:'95%'};
    var m27={fieldLabel:C_BL_ORI_NUM,name:'consOriginalBlNum',tabIndex:64,value:p.get('consOriginalBlNum'),xtype:'numberfield',anchor:'95%'};
    var m28={fieldLabel:C_DO_AGENCY,name:'consDoAgencyName',tabIndex:47,value:p.get('consDoAgencyName'),store:getCS(),enableKeyEvents:true,
    		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
        	listeners:{scope:this,
            	blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consDoAgency','');p.set('consDoAgencyName','');}},
             	select:function(c,r,i){p.set('consDoAgency',r.get('custId'));},
            	keydown:{fn:function(f,e){LC(f,e,'custDoAgencyFlag');},buffer:BF}}};
    var m29={fieldLabel:p.get('consBizType')==BT_A?'HAWB No.':C_HBL_NO,name:'consHblNo',tabIndex:37,value:p.get('consHblNo'),xtype:'textfield',anchor:'95%'};
        
    var m30={fieldLabel:C_ETA,name:'consEta',itemCls:p.get('consBizClass')==BC_I?'required':'',tabIndex:44,value:p.get('consEta'),xtype:'datefield',format:DATEF,anchor:'95%',
        listeners:{scope:this,change:function(f,nv,ov){if(p.get('consBizClass')==BC_I) p.set('consSailDate',nv);}}};
    var m31={fieldLabel:p.get('consBizClass')==BC_E?C_SAIL_DATE:C_ETD,itemCls:p.get('consBizClass')==BC_E?'needed':'',tabIndex:37,name:'consEtd',value:p.get('consEtd'),xtype:'datefield',format:DATEF,anchor:'95%',
        listeners:{scope:this,change:function(f,nv,ov){if(p.get('consBizClass')==BC_E) p.set('consSailDate',nv);}}};
            
    var m32={fieldLabel:C_VESS_NAME_CN,name:'vessNameCn',tabIndex:54,value:p.get('vessNameCn'),xtype:'textfield',anchor:'95%'};
    var m33={fieldLabel:C_TTER,itemCls:'required',tabIndex:58,name:'tranIdCarrier',value:p.get('tranIdCarrier'),store:p.get('consBizType')==BT_B?getTTB_S():getTTC_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
    	listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('tranIdCarrier','');}},
    	select:function(c,r,i){p.set('tranCodeCarrier',r.get('tranCodeCarrier'));}}};
    var m34={fieldLabel:C_PATE,itemCls:'required',tabIndex:59,name:'pateIdP',value:p.get('pateIdP'),store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
    	listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('pateIdP','');}},
    	select:function(c,r,i){p.set('pateNameP',r.get('pateNameP'));}}};
        	
    var m35={fieldLabel:C_BL_PACKAGES,name:'blCargoPackages',value:p.get('blCargoPackages'),disabled:true,xtype:'numberfield',anchor:'95%'};
    var m36={fieldLabel:C_BL_GW,name:'blCargoGrossWeight',value:p.get('blCargoGrossWeight'),disabled:true,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'95%'};
	var m37={fieldLabel:C_BL_NW,name:'blCargoNetWeight',value:p.get('blCargoNetWeight'),disabled:true,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'95%'};
    var m38={fieldLabel:C_BL_CBM,name:'blCargoMeasurement',value:p.get('blCargoMeasurement'),disabled:true,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'95%'};
    
    var t131=[];var t132=[];var t133=[];var t134=[];
    if(p.get('consBizClass')==BC_I){
		t131=[m1,m4,m2,m3];
		t132=[m8,m10,m17,m28];
		t133=[m15,m11,m30,m7];
		t134=[m29,m12,m31,m21];
		if(p.get('consBizType')==BT_A){
			t131=[m2,m4,m11];
			t132=[m8,m10,m17];
			t133=[m15,m30,m12];
			t134=[m29,m31,m3];
		}
		else if(p.get('consBizType')==BT_B){
            t131=[m1,m4,m2,m3];
            t132=[m8,m10,m17];
            t133=[m15,m11,m30,m7];
            t134=[m29,m12,m31];
        }
	}
	else{
		t131=[m1,m2,m3,m4,m5,m6,m7];
		t132=[m8,m9,m10,m11,m12,m13,m14];
		t133=[m15,m16,m17,m18,m19,m20,m21];
		t134=[m31,m30,m24,m25,m26,m23,m27];
		if(p.get('consBizType')==BT_A){
			t131=[m2,m4,m10];
			t132=[m8,m11,m17];
			t133=[m15,m30,m12];
			t134=[m29,m31,m3];
		}	
		else if(p.get('consBizType')==BT_B){
			t131=[m1,m2,m3,m4,m5,m32,m33,m35];
			t132=[m8,m9,m10,m11,m12,m13,m34,m36];
			t133=[m15,m16,m17,m18,m19,m20,m27,m37];
			t134=[m31,m30,m24,m25,m26,m23,m38];
		}
	};
    var t13={layout:'column',title:C_BL_INFO,collapsible:true,
          items:[{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t131},
          	{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t132},
          	{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t133},
          	{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t134}
		]};
		
    var t14={layout:'column',title:C_SHIPPER_INFO,collapsible:true,items:
			[{columnWidth:.5,layout:'form',border:false,labelWidth:60,items:[{fieldLabel:C_SHIPPER,tabIndex:65,name:'consShipper',value:p.get('consShipper'),xtype:'textarea',height:100,anchor:'95%'}]},
			{columnWidth:.5,layout:'form',border:false,labelWidth:60,items:[{fieldLabel:C_CONSIGNEE,tabIndex:66,name:'consConsignee',value:p.get('consConsignee'),xtype:'textarea',height:100,anchor:'95%'}]},
			{columnWidth:.5,layout:'form',border:false,labelWidth:60,items:[{fieldLabel:C_NOTIFIER,tabIndex:67,name:'consNotifyParty',value:p.get('consNotifyParty'),xtype:'textarea',height:100,anchor:'95%'}]},
			{columnWidth:.5,layout:'form',border:false,labelWidth:60,items:[{fieldLabel:C_OVERSEA_AGENCY,tabIndex:68,name:'consNotifyParty2',value:p.get('consNotifyParty2'),xtype:'textarea',height:100,anchor:'95%'}]}			                            
		]};    
	var t1={id:'C_B_J_'+p.get('id'),title:C_BASE_INFO+'(J)',height:650,
		items:(p.get('consBizType')==BT_G||p.get('consBizType')==BT_I)?[t11,t13,t14]:[t11,t12,t13,t14]};
    
    if(p.get('consBizType')==BT_C)
    	var t2={id:'C_B_X_'+p.get('id'),title:C_CONT_INFO+'(X)',layout:'fit',height:400,items:[this.contGrid]};
       
   	var g1={columnWidth:.5,layout:'form',labelWidth:60,border:false,items:[{fieldLabel:C_MARKS,tabIndex:58,name:'consCargoMarks',value:p.get('consCargoMarks'),xtype:'textarea',height:100,anchor:'95%'}]};
    var g2={columnWidth:.5,layout:'form',labelWidth:60,border:false,items:[{fieldLabel:C_CARGO_DESC,tabIndex:61,name:'consCargoDesc',value:p.get('consCargoDesc'),xtype:'textarea',height:100,anchor:'95%'}]};
    var g3={columnWidth:.3,layout:'form',labelWidth:60,border:false,items:[{fieldLabel:C_NUM_PACK,tabIndex:61,name:'consTotalPackages',value:p.get('consTotalPackages'),xtype:'numberfield',anchor:'95%',
		listeners:{scope:this,change:function(f,nv,ov){				
			p.set('consTotalPackages',nv);
			var pw='SAY TOTAL '+N2EW(p.get('consTotalPackages'))+' '+p.get('packName')+' ONLY';
			this.find('name','consTotalPackagesInWord')[0].setValue(pw);
			p.set('consTotalPackagesInWord',pw);}}}]};
	var g4={columnWidth:.2,layout:'form',labelWidth:60,border:false,items:[{fieldLabel:'',hideLabel:true,labelSeparator:'',tabIndex:61,name:'packId',value:p.get('packId'),xtype:'combo',store:getPACK_S(),displayField:'packName',valueField:'packId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,select:function(c,r,i){
			p.set('packName',r.get('packName'));
			var pw='SAY TOTAL '+N2EW(p.get('consTotalPackages'))+' '+p.get('packName')+' ONLY';
			this.find('name','consTotalPackagesInWord')[0].setValue(pw);
			p.set('consTotalPackagesInWord',pw);}}}]};
	var g5={columnWidth:.16,layout:'form',labelWidth:60,border:false,items:[{fieldLabel:C_GW+(p.get('consBizType')==BT_B?C_MT:C_KGS),tabIndex:61,name:'consTotalGrossWeight',value:p.get('consTotalGrossWeight'),xtype:'numberfield',decimalPrecision:4,anchor:'95%'}]};
	var g6={columnWidth:.16,layout:'form',labelWidth:60,border:false,items:[{fieldLabel:C_NW+(p.get('consBizType')==BT_B?C_MT:C_KGS),tabIndex:61,name:'consTotalNetWeight',value:p.get('consTotalNetWeight'),xtype:'numberfield',decimalPrecision:4,anchor:'95%'}]};
	var g7={columnWidth:.18,layout:'form',labelWidth:70,border:false,items:[{fieldLabel:C_CBM,tabIndex:61,name:'consTotalMeasurement',value:p.get('consTotalMeasurement'),xtype:'numberfield',decimalPrecision:4,anchor:'95%'}]};
	var g8={columnWidth:.5,layout:'form',labelWidth:60,border:false,items:[{fieldLabel:C_PACKAGES_CAP,tabIndex:61,name:'consTotalPackagesInWord',value:p.get('consTotalPackagesInWord'),xtype:'textfield',anchor:'95%'}]};
	var g9={columnWidth:.25,layout:'form',labelWidth:60,border:false,items:[{fieldLabel:C_CARGO_NAME_CN,tabIndex:61,name:'consCargoNameCn',value:p.get('consCargoNameCn'),xtype:'textfield',anchor:'95%'}]};
	var g10={columnWidth:.25,layout:'form',labelWidth:60,border:false,items:[{fieldLabel:C_CARGO_NAME_EN,tabIndex:61,name:'consCargoNameEn',value:p.get('consCargoNameEn'),xtype:'textfield',anchor:'95%'}]};
	
	var g30={columnWidth:.5,layout:'form',labelWidth:60,border:false,items:[{fieldLabel:C_CARGO_DIMENSION,tabIndex:61,name:'consCargoDimension',value:p.get('consCargoDimension'),xtype:'textarea',height:100,anchor:'95%'}]};
	var g31={columnWidth:.25,layout:'form',labelWidth:60,border:false,items:[{fieldLabel:C_CHARGE_WEIGHT,tabIndex:58,name:'consTotalChargeWeight',value:p.get('consTotalChargeWeight'),xtype:'numberfield',anchor:'95%'}]};
	
	var t31={layout:'column',layoutConfig: {columns:5},deferredRender:false,border:false,labelWidth:60,title:'货物小计',collapsible:true,items:
			p.get('consBizType')==BT_A?[g1,g2,g30,g3,g4,g8,g5,g6,g7,g31,g10]:[g1,g2,g3,g4,g5,g6,g7,g8,g9,g10]};
	
	var g11={fieldLabel:C_DANAGER_CLASS,name:'cargDanagerClass',value:p.get('cargDanagerClass'),anchor:'90%'};
	var g12={fieldLabel:C_IMDG_PAGE,name: 'cargImdgPage',value:p.get('cargImdgPage'),anchor:'90%'};
	var g13={fieldLabel:C_UN_NO,name:'cargUnNo',value:p.get('cargUnNo'),anchor:'90%'};
	var g14={fieldLabel:C_SUB_LABEL,name:'cargSubLabel',value:p.get('cargSubLabel'),anchor:'90%'};
	var g15={fieldLabel:C_EMS_NO,name:'cargEmsNo',value:p.get('cargEmsNo'),anchor:'90%'};
	var g16={fieldLabel:C_FLASH_POINT,name:'cargFlashPoint',value:p.get('cargFlashPoint'),anchor:'90%'};
	var g17={fieldLabel:C_MFAG_NO,name:'cargMfagNo',value:p.get('cargMfagNo'),anchor:'90%'};
	var g18={fieldLabel:C_PKG_GROUP,name:'cargPkgGroup',value:p.get('cargPkgGroup'),anchor:'90%'};
	var g19={fieldLabel:C_DANAGER_PROPERTY,name:'cargDanagerProperty',value:p.get('cargDanagerProperty'),anchor:'90%'};
	var g20={fieldLabel:C_POLLUTION_FLAG,name:'cargPollutionFlag',value:p.get('cargPollutionFlag'),xtype:'checkbox',anchor:'90%'};
	
	var g21={fieldLabel:C_TEMPERATURE_UNIT,name:'cargTemperatureUnit',value:p.get('cargTemperatureUnit'),editable:false,store:TEUN_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'};
	var g22={fieldLabel:C_TEMPERATURE,name:'cargTemperature',value:p.get('cargTemperature'),xtype:'numberfield',anchor:'90%'};
	var g23={fieldLabel:C_TEMPERATURE_HIGH,name:'cargTemperatureHigh',value:p.get('cargTemperatureHigh'),xtype:'numberfield',anchor:'90%'};
	var g24={fieldLabel:C_TEMPERATURE_LOW,name:'cargTemperatureLow',value:p.get('cargTemperatureLow'),xtype:'numberfield',anchor:'90%'};
	var g25={fieldLabel: C_VENT_OUTLET,name:'cargVentOutlet',value:p.get('cargVentOutlet'),xtype:'textfield',anchor:'90%'};
	var g26={fieldLabel: C_HUMIDITY,name:'cargHumidity',value:p.get('cargHumidity'),xtype:'numberfield',anchor:'90%'};
	
	var g27={fieldLabel:C_LENGTH,name:'cargLength',value:p.get('cargLength'),xtype:'numberfield',anchor:'90%'};
	var g28={fieldLabel: C_WIDTH,name:'cargWidth',value:p.get('cargWidth'),xtype:'numberfield',anchor:'90%'};
	var g29={fieldLabel: C_HEIGH,name:'cargHigh',value:p.get('cargHigh'),xtype:'numberfield',anchor:'90%'};
	
	var t32={layout:'column',layoutConfig: {columns:3},title:C_CARGO_SPECIAL_INFO,border:false,collapsible:true,items:
	 		[{columnWidth:.33,border:false,items: 
	        [{id:'cargDanagerFlag',xtype:'fieldset',labelAlign:'right',labelWidth:80,checkboxToggle:true,checkboxName:'cargDanagerFlag',title:'危险品',autoHeight:true,defaultType:'textfield',collapsed:p.get('cargDanagerFlag')==0,items:
				[g11,g12,g13,g14,g15,g16,g17,g18,g19,g20]}]},
			{columnWidth:.34,border:false,items: 
	        [{id:'cargReeterFlag',xtype:'fieldset',labelAlign:'right',labelWidth:80,checkboxToggle:true,checkboxName:'cargReeterFlag',title:'冷藏品',autoHeight:true,autoWidth:true,collapsed:p.get('cargReeterFlag')==0,items:
				[g21,g22,g23,g24,g25,g26]}]},
			{columnWidth:.33,border:false,items: 
	       	[{id:'cargBigFlag',xtype:'fieldset',labelAlign:'right',labelWidth:70,checkboxToggle:true,checkboxName:'cargBigFlag',title:'大件货',autoHeight:true,collapsed:p.get('cargBigFlag')==0,items:
				[g27,g28,g29]}]
		}]};
	var t3={id:'C_B_H_'+p.get('id'),title:C_CARGO_INFO+'(H)',height:600,autoScroll:true,items:[{layout:'fit',border:false,collapsible:true,items:this.cargoGrid},t31,t32]};
	
	var r1={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:C_SERVICE_SPEC,tabIndex:1,name:'consServiceSpec',value:p.get('consServiceSpec'),xtype:'textarea',anchor:'95%'}]};
	var r2={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:C_REMARKS,tabIndex:2,name:'consRemarks',value:p.get('consRemarks'),xtype:'textarea',anchor:'95%'}]};
	var t41={title:C_BOOKING_REQUIREMENT,layout:'column',labelWidth:70,collapsible:true,items:[r1,r2]};
	
	var r3={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:C_TRACK_VENDOR,tabIndex:3,name:'consTrackVendorName',value:p.get('consTrackVendorName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consTrackVendor','');p.set('consTrackVendorName','');}},
			select:function(c,r,i){p.set('consTrackVendor',r.get('custId'));},
			keydown:{fn:function(f,e){LC(f,e,'custTrackFlag');},buffer:BF}}}]};
	var r4={columnWidth:.25,layout:'form',border:false,items:[{fieldLabel:C_TRACK_CONTACT,tabIndex:4,name:'consTrackContact',value:p.get('consTrackContact'),xtype:'textfield',anchor:'95%'}]};
	var r5={columnWidth:.25,layout:'form',border:false,items:[{fieldLabel:C_TRACK_TEL,tabIndex:5,name:'consTrackTel',value:p.get('consTrackTel'),xtype:'textfield',anchor:'95%'}]};
	var r6={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:p.get('consBizClass')==BC_E?C_LOAD_ADDRESS:C_DELIVERY_ADDRESS,tabIndex:6,name:'consTrackLoadAddress',value:p.get('consTrackLoadAddress'),xtype:'textarea',anchor:'95%'}]};
	var r7={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:C_REMARKS,tabIndex:7,name:'consTrackRemarks',value:p.get('consTrackRemarks'),xtype:'textarea',anchor:'95%'}]};
	var r8={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:p.get('consBizClass')==BC_E?C_LOAD_DATE:C_FETCH_DATE,tabIndex:8,name:'consTrackLoadDate',value:p.get('consTrackLoadDate'),xtype:'datefield',format:DATEF,anchor:'50%'}]};
	var t42={title:C_TRAN_REQUIREMENT,layout:'column',labelWidth:70,collapsible:true,items:[r3,r4,r5,r6,r7,r8]};
			
	var r9={columnWidth:.5,layout:'form',border:false,items:[
		{fieldLabel:C_WAREHOUSE,tabIndex:9,name:'consWarehouseName',value:p.get('consWarehouseName'),store:getCS(),enableKeyEvents:true,
			tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
			listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consWarehouse','');p.set('consWarehouseName','');}},
			select:function(c,r,i){
				this.find('name','consWarehouseContact')[0].setValue(r.get('custContact'));
				this.find('name','consWarehouseTel')[0].setValue(r.get('custTel'));
				p.set('consWarehouse',r.get('custId'));
				p.set('consWarehouseFax',r.get('custFax'));},
			keydown:{fn:function(f,e){LC(f,e,'custWarehouseFlag');},buffer:BF}}}]};
	var r10={columnWidth:.25,layout:'form',border:false,items:[{fieldLabel:C_WARE_CONTACT,tabIndex:10,name:'consWarehouseContact',value:p.get('consWarehouseContact'),xtype:'textfield',anchor:'95%'}]};
	var r11={columnWidth:.25,layout:'form',border:false,items:[{fieldLabel:C_WARE_TEL,tabIndex:11,name:'consWarehouseTel',value:p.get('consWarehouseTel'),xtype:'textfield',anchor:'95%'}]};
	var r12={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:p.get('consBizType')==BT_B?C_WARE_REQUIREMENT:(p.get('consBizClass')==BC_E?C_CONT_LOAD_REQUIREMENT:C_CONT_DISCHARGE_REQUIREMENT),tabIndex:12,name:'consWarehouseRemarks',value:p.get('consWarehouseRemarks'),xtype:'textarea',anchor:'95%'}]};
	var r13={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:p.get('consBizType')==BT_B?C_WARE_ADDRESS:(p.get('consBizClass')==BC_E?C_CONT_LOAD_ADDRESS:C_CONT_DISCHARGE_ADDRESS),tabIndex:13,name:'consWarehouseAddress',value:p.get('consWarehouseAddress'),xtype:'textarea',anchor:'95%'}]};
	var r14={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:p.get('consBizType')==BT_B?C_WARE_DATE:(p.get('consBizClass')==BC_E?C_WARE_LOAD_DATE:C_WARE_DIS_DATE),tabIndex:14,name:'consContainerLoadDate',value:p.get('consContainerLoadDate'),xtype:'datefield',format:DATEF,anchor:'50%'}]};
	var r15={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:C_CFS,tabIndex:14,name:'consCfsName',value:p.get('consCfsName'),store:getCS(),enableKeyEvents:true,
    		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
        	listeners:{scope:this,
         		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consCfs','');p.set('consCfsName','');}},
         		select:function(c,r,i){p.set('consCfs',r.get('custId'));},
				keydown:{fn:function(f,e){LC(f,e,'custCfsFlag');},buffer:BF}}}]};
						
	var t43={title:p.get('consBizType')==BT_B?C_SR_WARE:(p.get('consBizClass')==BC_E?C_WARE_LOAD:C_WARE_DIS),layout:'column',collapsible:true,
			labelWidth:70,items:p.get('consBizType')==BT_B?[r9,r10,r11,r12,r13,r14]:[r9,r10,r11,r12,r13,r14,r15]};
	
	var r15={fieldLabel:C_INSP_AGENCY,tabIndex:15,name:'consInspectionVendorName',value:p.get('consInspectionVendorName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consInspectionVendor','');p.set('consInspectionVendorName','');}},
			select:function(c,r,i){p.set('consInspectionVendor',r.get('custId'));},
			keydown:{fn:function(f,e){LC(f,e,'custInspectionFlag');},buffer:BF}}};
	var r16={fieldLabel:C_CUSTOM_AGENCY,tabIndex:16,name:'consCustomsVendorName',value:p.get('consCustomsVendorName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consCustomsVendor','');p.set('consCustomsVendorName','');}},
			select:function(c,r,i){p.set('consCustomsVendor',r.get('custId'));},
			keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}};
	var r17={fieldLabel:C_SWITCH_BL,tabIndex:17,name:'swithId',value:p.get('swithId'),store:SWIT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
	var r18={fieldLabel:C_FUMIGATE_FLAG,tabIndex:18,name:'consFumigateFlag',checked:p.get('consFumigateFlag')=='1',xtype:'checkbox',anchor:'95%'};
	var r19={fieldLabel:C_QUARANTINE_FLAG,tabIndex:19,name:'consQuarantineFlag',checked:p.get('consQuarantineFlag')=='1',xtype:'checkbox',anchor:'95%'};
	var r20={fieldLabel:C_TRANSFERRING_FLAG,tabIndex:20,name:'consTransferringFlag',checked:p.get('consTransferringFlag')=='1',xtype:'checkbox',anchor:'95%'};
	var r21={fieldLabel:C_CUDE_TYPE,tabIndex:21,name:'consCudeType',value:p.get('consCudeType'),store:CUTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
    var r22={fieldLabel:C_INV_FLAG,xtype:'checkbox',tabIndex:22,name:'consInvoiceFlag',checked:p.get('consInvoiceFlag')=='1',anchor:'95%'};
    var r23={fieldLabel:C_INSP_FLAG,xtype:'checkbox',tabIndex:23,name:'consInspectionFlag',checked:p.get('consInspectionFlag')=='1',anchor:'95%'};
	var t44={title:C_CUST_REQUIREMENT,layout:'column',collapsible:true,items:
		[{columnWidth:.5,layout:'form',border:false,labelWidth:70,items:[r15]},
		 {columnWidth:.5,layout:'form',border:false,labelWidth:70,items:[r16]},
		  {columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r17,r21]},
		  {columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r18,r22]},
		  {columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r19,r23]},		
		{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r20]}
		]};
	
	var r24={fieldLabel:C_BHK_FLAG,tabIndex:24,name:'consBHkFlag',checked:p.get('consBHkFlag')=='1',xtype:'checkbox',anchor:'95%'};
	var r25={fieldLabel:C_BINTERNATIONAL_FLAG,tabIndex:25,name:'consBInternationalFlag',checked:p.get('consBInternationalFlag')=='1',xtype:'checkbox',anchor:'95%'};
	var r26={fieldLabel:C_REMARKS,tabIndex:26,name:'consBRemarks',value:p.get('consWarehouseRemarks'),xtype:'textarea',anchor:'95%'};
	var t45={title:C_BARGE_REQUIREMENT,layout:'column',deferredRender:false,collapsible:true,items:[
		{columnWidth:.4,layout:'form',border:false,items:[r24,r25]},
		{columnWidth:.6,layout:'form',border:false,items:[r26]}]};
	var t4={id:'C_B_Y_'+p.get('id'),title:C_SERVICE_REQUIREMENT+'(Y)',height:600,autoScroll:true,
		items:p.get('consBizClass')==BC_E?[t41,t42,t43,t44,t45]:[t41,t42,t43,t44]};
	
	var r27={fieldLabel:C_CARGO_OWNER,tabIndex:1,name:'consCargoOwnerName',value:p.get('consCargoOwnerName'),store:getCS(),enableKeyEvents:true,
    	tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',listWidth:200,pageSize:30,
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consCargoOwner','');p.set('consCargoOwnerName','');}},
			select:function(c,r,i){p.set('consCargoOwner',r.get('custId'));},
			keydown:function(f,e){LC(f,e,'custBookerFlag');}}};
	var r28={fieldLabel:C_TRTY,tabIndex:5,name:'trtyId',value:p.get('trtyId'),store:getTRTY_S(),xtype:'combo',displayField:'trtyName',valueField:'trtyId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'};
	var r29={fieldLabel:C_TRADE_CONTRACT_NO,tabIndex:2,name:'consTradeContractNo',value:p.get('consTradeContractNo'),xtype:'textfield',anchor:'95%'};
	var r30={fieldLabel:C_INSURANCE_FEE,tabIndex:6,name:'consInsuranceFee',value:p.get('consInsuranceFee'),xtype:'textfield',anchor:'95%'};
	var r31={fieldLabel:C_CREDIT_NO,tabIndex:3,name:'consCreditNo',value:p.get('consCreditNo'),xtype:'textfield',anchor:'95%'};
	var r32={fieldLabel:C_TRTE,tabIndex:4,name:'trteId',value:p.get('trteId'),store:getTRTE_S(),xtype:'combo',displayField:'trteName',valueField:'trteId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
	var t51={title:C_TRADE_INFO,layout:'column',collapsible:true,items:[
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r27,r28]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r29,r30]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r31]},
   		{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r32]}]};
	
	var r33={fieldLabel:C_HBL_NO,tabIndex:7,name:'consHblNo',value:p.get('consHblNo'),xtype:'textfield',anchor:'95%'};
	var r34={fieldLabel:C_SCAC_CODE,tabIndex:8,name:'consScacCode',value:p.get('consScacCode'),xtype:'textfield',anchor:'95%'};
	var r35={fieldLabel:C_BOOK_US_NO,tabIndex:9,name:'consBookingDeclareNoUs',value:p.get('consBookingDeclareNoUs'),xtype:'textfield',anchor:'95%'};
	var r36={fieldLabel:C_US_FULLSHIP,tabIndex:10,name:'consUsFullShip',value:p.get('consUsFullShip'),store:USFU_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'};
	var t52={title:C_AMS_INFO,layout:'column',collapsible:true,items:[
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r33]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r34]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r35]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r36]}]};
	var r37={fieldLabel:C_F_SHIPPER,tabIndex:11,name:'consFShipper',value:p.get('consFShipper'),xtype:'textarea',anchor:'95%'};
	var r38={fieldLabel:C_F_CONSIGNEE,tabIndex:12,name:'consFConsignee',value:p.get('consFConsignee'),xtype:'textarea',anchor:'95%'};
	var r39={fieldLabel:C_F_NOTIFY,tabIndex:13,name:'consFNotifyParty',value:p.get('consFNotifyParty'),xtype:'textarea',anchor:'95%'};
	var t53={title:C_FSHIPPER_INFO,layout:'column',collapsible:true,items:[
    	{columnWidth:.34,layout:'form',border:false,labelWidth:70,items:[r37]},
    	{columnWidth:.33,layout:'form',border:false,labelWidth:70,items:[r38]},
    	{columnWidth:.33,layout:'form',border:false,labelWidth:70,items:[r39]}]};
	var r40={fieldLabel:C_EXT_1,tabIndex:14,name:'attr1',value:p.get('attr1'),xtype:'textfield',anchor:'95%'};
	var r41={fieldLabel:C_EXT_3,tabIndex:16,name:'attr3',value:p.get('attr3'),xtype:'textfield',anchor:'95%'};
	var r42={fieldLabel:C_EXT_5,tabIndex:18,name:'attr5',value:p.get('attr5'),xtype:'textfield',anchor:'95%'};
	var r43={fieldLabel:C_EXT_7,tabIndex:20,name:'attr7',value:p.get('attr7'),xtype:'textfield',anchor:'95%'};
	var r44={fieldLabel:C_EXT_9,tabIndex:22,name:'attr9',value:p.get('attr9'),xtype:'textarea',anchor:'95%'};
	var r45={fieldLabel:C_EXT_2,tabIndex:15,name:'attr2',value:p.get('attr2'),xtype:'textfield',anchor:'95%'};
	var r46={fieldLabel:C_EXT_4,tabIndex:17,name:'attr4',value:p.get('attr4'),xtype:'textfield',anchor:'95%'};
	var r47={fieldLabel:C_EXT_6,tabIndex:19,name:'attr6',value:p.get('attr6'),xtype:'textfield',anchor:'95%'};
	var r48={fieldLabel:C_EXT_8,tabIndex:21,name:'attr8',value:p.get('attr8'),xtype:'textfield',anchor:'95%'};
	var r49={fieldLabel:C_EXT_10,tabIndex:23,name:'attr10',value:p.get('attr10'),xtype:'textarea',anchor:'95%'};
	var t54={title:C_OTHER_INFO,layout:'column',collapsible:true,items:[
    	{columnWidth:.5,layout:'form',border:false,labelWidth:70,items:[r40,r41,r42,r43,r44]},
    	{columnWidth:.5,layout:'form',border:false,labelWidth:70,items:[r45,r46,r47,r48,r49]}]};
	var t5= {id:'C_B_K_'+p.get('id'),title:C_EXT_INFO+'(K)',height:450,autoScroll:true,items:p.get('consBizClass')==BC_E?[t51,t52,t53,t54]:[t51,t54]};
    var t6={id:'C_B_T_'+p.get('id'),title:C_HBL_INFO+'(T)',height:450,autoScroll:true,layout:'form',deferredRender:false,collapsible:true,items:[this.hblGrid]};
    
    var tabs=[t1,t3,t4,t5];
	if(p.get('consBizType')==BT_G||p.get('consBizType')==BT_I){
		tabs=[t1,t3,t5];
	}
	else if(p.get('consBizType')==BT_C){
		tabs=[t1,t2,t3,t4,t5];
		if(p.get('consBizClass')==BC_I) tabs=[t1,t2,t3,t6,t4,t5];
	};
	
	this.expEmail=function(code,sub){
		var to='';var cc='';sub=sub;msg='';
		EXPM(to,cc,sub,msg,code,'consId='+p.get('consId'));
	};
	this.expFax=function(code,sub){
        var to=p.get('custFax');var cc='';sub=sub;msg='';
        EXPM(to,cc,sub,msg,code,'consId='+p.get('consId'),3);
    };
    this.expExcel=function(c){
    	if(c=='BOOK_C')
    		EXPC(c,'&expeType=R&consId='+p.get('consId'));
    	else
    		EXPC(c,'&consId='+p.get('consId'));
    };
    
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatus:s},
		success: function(r){
			p.set('consStatus',s);
			this.updateToolBar(s);
			XMG.alert(SYS,M_S);			
			var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
					reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});
			sc.load({params:{consId:p.get('consId')},callback:function(r,o,s){
				if(s&&r.length>0){
					var c=r[0];
					p.beginEdit();					
					p.set('version',c.get('version'));
					p.endEdit();
					XMG.alert(SYS,M_S);
				}    						
			},scope:this});
				
		},
		failure: function(r){XMG.alert(SYS,M_F+r.responseText)}});
    };
    this.unlock=function(){
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatusLock:0},
		success: function(r){
			p.set('consStatusLock',0);
			this.updateToolBar(p.get('consStatus'));
			
			XMG.alert(SYS,M_S);
			var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
					reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});
			sc.load({params:{consId:p.get('consId')},callback:function(r,o,s){
				if(s&&r.length>0){
					var c=r[0];
					p.beginEdit();					
					p.set('version',c.get('version'));
					p.endEdit();
					XMG.alert(SYS,M_S);
				}    						
			},scope:this});				
		},
		failure: function(r){XMG.alert(SYS,M_F+r.responseText)}});
    };
    this.start=function(){this.updateStatus('1');};
    this.check=function(){this.updateStatus('2');};
    this.exit=function(){this.updateStatus('3');};
    this.renew=function(){this.updateStatus('4');};
    this.quit=function(){XMG.confirm(SYS,M_CONS_QUIT_C,function(btn){if(btn=='yes') this.updateStatus('5');},this);};
    this.rebook=function(){this.updateStatus('1');};
    this.cancel=function(){XMG.confirm(SYS,M_CONS_CANCEL_C,function(btn){if(btn=='yes') this.updateStatus('6');},this);};
    this.arrive=function(){XMG.confirm(SYS,M_CONS_ARRIVE_C,function(btn){if(btn=='yes') this.updateStatus('1');},this);};
    this.release=function(){XMG.confirm(SYS,M_CONS_RELEASE_C,function(btn){if(btn=='yes') this.updateStatus('2');},this);};
    this.releaseCargo=function(){XMG.confirm(SYS,M_CARGO_RELEASE_C,function(btn){if(btn=='yes') this.updateStatus('3');},this);};
    this.sendCargo=function(){XMG.confirm(SYS,M_CARGO_SEND_C,function(btn){if(btn=='yes') this.updateStatus('4');},this);};
    this.copyFrom=function(){
    	XMG.prompt(SYS,C_CONS_NO,function(b,v){
			if(b=='ok'){
				var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
					reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});
				sc.load({params:{consNo:v},callback:function(r,o,s){
					if(s&&r.length>0){
						var c=r[0];
						p.beginEdit();
						var f = FConsign.prototype.fields;
						for (var i = 0; i < f.keys.length; i++) {
							var fn = ''+f.keys[i];
							if(fn=='consDate'||fn=='id'||fn=='consId'||fn=='consNo'||fn=='version'
								||fn=='consStatus'||fn=='consStatusBooking'||fn=='consStatusClearance'
								||fn=='consStatusSwitchBl'||fn=='consStatusSplit'||fn=='consStatusInsp'
								||fn=='consStatusCont'||fn=='consStatusCarg'||fn=='consStatusMbl'
								||fn=='consStatusHbl'||fn=='consStatusBBook'||fn=='consStatusDepa'
								||fn=='consStatusDocs'||fn=='consStatusExp'||fn=='consStatusAud'
								||fn=='consStatusAr'||fn=='consStatusAp'||fn=='consArWriteOffDate'||fn=='consApWriteOffDate'
								||fn=='consStatusInvoR'||fn=='consStatusInvoP'||fn=='consInvoRDate'||fn=='consInvoPDate'
								||fn=='consStatusReassign'||fn=='consStatusInCy'||fn=='consStatusInCfs'
								||fn=='consStatusOnBoard'||fn=='consStatusEir'||fn=='consStatusSendCont'||fn=='consStatusLock'
								||fn=='consReassignFrom'||fn=='consStatusSettlement'||fn=='rowAction'
								||fn=='fconId'||fn=='loliId'||fn=='consMasterFlag'||fn=='consMasterId'
								||fn=='consMergeFlag'||fn=='consMergeId'||fn=='consMergeNo'||fn=='consMasterNo'
								||fn=='consContractNo'||fn=='consTradeContractNo'||fn=='consMblNo'||fn=='consHblNo'
							){}
							else p.set(fn,c.get(fn));
						};
						p.endEdit();
						this.getForm().loadRecord(p);
					}    						
				},scope:this});
			}
		},this);
    };
    var locked=p.get('consStatusLock')==1;
    var disable=p.get('editable')==0;
    var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CONS;
	this.updateToolBar = function(s){
		tb=this.getTopToolbar();
		locked=p.get('consStatusLock')==1;
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(m+F_M)||locked||disable);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(m+F_M)||locked||disable||s!=0);
    	if(tb.getComponent('TB_C')) tb.getComponent('TB_C').setDisabled(NR(m+F_M)||locked||disable||s!=1);
    	if(tb.getComponent('TB_D')) tb.getComponent('TB_D').setDisabled(NR(m+F_M)||locked||disable||s!=2);
    	if(tb.getComponent('TB_E')) tb.getComponent('TB_E').setDisabled(NR(m+F_M)||locked||disable||s!=2);
    	if(tb.getComponent('TB_F')) tb.getComponent('TB_F').setDisabled(NR(m+F_M)||locked||disable||s==5);
    	if(tb.getComponent('TB_G')) tb.getComponent('TB_G').setDisabled(NR(m+F_M)||locked||disable||s<2);
    	if(tb.getComponent('TB_H')) tb.getComponent('TB_H').setDisabled(NR(m+F_F)||locked||disable||s!=2);    	
    	
    	if(tb.getComponent('TB_I')) tb.getComponent('TB_I').setDisabled(NR(m+F_M)||locked||disable||p.get('consStatus')!=0);
    	if(tb.getComponent('TB_J')) tb.getComponent('TB_J').setDisabled(NR(m+F_M)||locked||disable||p.get('consStatus')!=1);
    	if(tb.getComponent('TB_K')) tb.getComponent('TB_K').setDisabled(NR(m+F_M)||locked||disable||p.get('consStatus')!=2);
    	if(tb.getComponent('TB_L')) tb.getComponent('TB_L').setDisabled(NR(m+F_F)||locked||disable||p.get('consStatus')!=3);  	
    	if(tb.getComponent('TB_U')) tb.getComponent('TB_U').setDisabled(NR(m+F_UL)||locked!=1);
    	tb.getComponent('TB_M').setText(C_STATUS+'：'+(p.get('consBizClass')==BC_I?getCIST(p.get('consStatus')):getCOST(p.get('consStatus'))));
    };
	var b1={text:C_SAVE+'(S)',itemId:'TB_A',iconCls:'save',disabled:NR(m+F_M)||locked||disable,scope:this,handler:this.save};
	var b2={text:C_BOOK_START+'(B)',itemId:'TB_B',iconCls:'save',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=0,scope:this,handler:this.start};
	var b3={text:C_BOOK_CONFIRM+'(Q)',itemId:'TB_C',iconCls:'check',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1,scope:this,handler:this.check};
	var b4={text:C_BOOK_EXIT+'(T)',itemId:'TB_D',iconCls:'exit',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=2,scope:this,handler:this.exit};
	var b5={text:C_BOOK_REASSIGN+'(G)',itemId:'TB_E',iconCls:'redo',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=2,scope:this,handler:this.renew};
	var b6={text:C_BOOK_QUIT+'(X)',itemId:'TB_F',iconCls:'consCancel',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')==5,scope:this,handler:this.quit};
	var b7={text:C_BOOK_RENEW+'(R)',itemId:'TB_G',iconCls:'renew',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')<2,scope:this,handler:this.rebook};
	var b8={text:C_INVALID+'(F)',itemId:'TB_H',iconCls:'cancel',disabled:NR(m+F_F)||locked||disable||p.get('consStatus')!=2,scope:this,handler:this.cancel};
	var b9={text:C_COPY+'(A)',itemId:'TB_N',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:function(){showConsign(copyConsign(p));}};
	var b16={text:C_COPY_FROM+'(C)',itemId:'TB_O',iconCls:'copy',disabled:NR(m+F_M)||locked||disable,scope:this,handler:this.copyFrom};
	
	var b11={text:C_ARRIVE,itemId:'TB_I',iconCls:'plane',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=0,scope:this,handler:this.arrive};
	var b12={text:C_SWITCH_BL,itemId:'TB_J',iconCls:'release',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1,scope:this,handler:this.release};	
	var b13={text:C_RELEASE,itemId:'TB_K',iconCls:'cart',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=2,scope:this,handler:this.releaseCargo};
	var b14={text:C_SEND_CARGO,itemId:'TB_L',iconCls:'cart',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=3,scope:this,handler:this.sendCargo};
	var b15={text:C_INVALID,itemId:'TB_M',iconCls:'cancel',disabled:NR(m+F_F)||locked||disable,scope:this,handler:this.cancel};
	
	var b17={text:C_UNLOCK,itemId:'TB_U',iconCls:'unlock',disabled:NR(m+F_UL)||locked!=1,scope:this,handler:this.unlock};
	
	
	var exp1=CREATE_E_MENU(M_ARRIVE_ADVICE,function(){this.expExcel('ARAD');},function(){this.expEmail('ARAD',M_ARRIVE_ADVICE);},function(){this.expFax('ARAD',M_ARRIVE_ADVICE);},this);
	var exp2=CREATE_E_MENU(M_BOOK,function(){this.expExcel('CONS_B');},function(){this.expEmail('CONS_B',M_BOOK);},function(){this.expFax('CONS_B',M_BOOK);},this);
	var exp3=CREATE_E_MENU(M_BOOK_CONFIRM,function(){this.expExcel('BOOK_C');},function(){this.expEmail('BOOK_C',M_BOOK_CONFIRM);},function(){this.expFax('BOOK_C',M_BOOK_CONFIRM);},this);
	var exp4=CREATE_E_MENU(M_CONSIGN,function(){this.expExcel('CONS');},function(){this.expEmail('CONS',M_CONSIGN);},function(){this.expFax('CONS',M_CONSIGN);},this);
	var exp5=CREATE_E_MENU(M_BL_ER,function(){this.expExcel('BLER');},function(){this.expEmail('BLER',M_BL_ER);},function(){this.expFax('BLER',M_BL_ER);},this);
	var exp6=CREATE_E_MENU(M_BL_SEAWAY,function(){this.expExcel('SEAW');},function(){this.expEmail('SEAW',M_BL_SEAWAY);},function(){this.expFax('SEAW',M_BL_SEAWAY);},this);
	var exp7=CREATE_E_MENU(M_LOAD_ADVICE,function(){this.expExcel('WARE_INFO');},function(){this.expEmail('WARE_INFO',M_LOAD_ADVICE);},function(){this.expFax('WARE_INFO',M_LOAD_ADVICE);},this);
	var exp8=CREATE_E_MENU(M_SGS_ADVICE,function(){this.expExcel('SGS_INFO');},function(){this.expEmail('SGS_INFO',M_SGS_ADVICE);},function(){this.expFax('SGS_INFO',M_SGS_ADVICE);},this);
	var exp9=CREATE_E_MENU(M_SHIP_ADVICE,function(){this.expExcel('SHIP_INFO');},function(){this.expEmail('SHIP_INFO',M_SHIP_ADVICE);},function(){this.expFax('SHIP_INFO',M_SHIP_ADVICE);},this);
	var expM=[];
	if(p.get('consBizType')==BT_C) expM=p.get('consBizClass')==BC_I?[exp1]:[exp2,exp3,exp4,exp5,exp6,exp7,exp8,exp9];		
	else expM=p.get('consBizClass')==BC_I?[exp1]:[exp2,exp3,exp5,exp6];
	var b10={text:C_EXPORT,iconCls:'print',disabled:NR(m+F_E)||locked,scope:this,menu:{items:expM}};
	
	var b20={itemId:'TB_M',disabled:true,text:C_STATUS+'：'+(p.get('consBizClass')==BC_I?getCIST(p.get('consStatus')):getCOST(p.get('consStatus')))};
	var tbs=[];
	if(p.get('consBizType')==BT_G||p.get('consBizType')==BT_I){tbs=[b1,'-',b8,'-',b9,'-',b16,'-',b17,'->',b20,'-'];}
	else{
		if(p.get('consBizClass')==BC_I) tbs=[b1,'-',b11,'-',b12,'-',b13,'-',b14,'-',b15,'-',b9,'-',b16,'-',b10,'-',b17,'->',b20,'-'];
		else if(p.get('consBizClass')==BC_E) tbs=[b1,'-',b2,'-',b3,'-',b4,'-',b5,'-',b6,'-',b7,'-',b8,'-',b9,'-',b16,'-',b10,'-',b17,'->',b20,'-'];
	}
	var bk=new Ext.KeyMap(Ext.getDoc(), {
		key:'sbqtgxrfac',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var tb=tc.getComponent('T_BOOK_'+p.get('id'));
			 	if(tb&&tb==tc.getActiveTab())
			 	{
			 		tb=this.getTopToolbar();
			 		switch(k) {
					case Ext.EventObject.S:
						if(!tb.getComponent('TB_A').disabled) this.save();break;
					case Ext.EventObject.B:
						if(!tb.getComponent('TB_B').disabled) this.start();break;
					case Ext.EventObject.Q:
						if(!tb.getComponent('TB_C').disabled) this.check();break;
					case Ext.EventObject.T:
						if(!tb.getComponent('TB_D').disabled) this.exit();break;
					case Ext.EventObject.G:
						if(!tb.getComponent('TB_E').disabled) this.renew();break;
					case Ext.EventObject.X:
						if(!tb.getComponent('TB_F').disabled) this.quit();break;
					case Ext.EventObject.R:
						if(!tb.getComponent('TB_G').disabled) this.rebook();break;
					case Ext.EventObject.F:
						if(!tb.getComponent('TB_H').disabled) this.cancel();break;
					case Ext.EventObject.A:
						if(!tb.getComponent('TB_N').disabled) showConsign(copyConsign(p));break;
					case Ext.EventObject.C:
						if(!tb.getComponent('TB_O').disabled) this.copyFrom();break;
				}}
		 	}
		},
		stopEvent: true,scope:this
	});
	new Ext.KeyMap(Ext.getDoc(), {
		key:'jxhykt',alt:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var tb=tc.getComponent('T_BOOK_'+p.get('id'));
			 	var tbt=tb.getComponent('T_BOOK_T_'+p.get('id'));
			 	if(tb==tc.getActiveTab())
			 	{
			 	switch(k) {
					case Ext.EventObject.J:
						var t=tbt.getComponent('C_B_J_'+p.get('id'));if(t) tbt.setActiveTab(t);break;
					case Ext.EventObject.X:
						var t=tbt.getComponent('C_B_X_'+p.get('id'));if(t) tbt.setActiveTab(t);break;
					case Ext.EventObject.H:
						var t=tbt.getComponent('C_B_H_'+p.get('id'));if(t) tbt.setActiveTab(t);break;
					case Ext.EventObject.Y:
						var t=tbt.getComponent('C_B_Y_'+p.get('id'));if(t) tbt.setActiveTab(t);break;
					case Ext.EventObject.K:
						var t=tbt.getComponent('C_B_K_'+p.get('id'));if(t) tbt.setActiveTab(t);break;
					case Ext.EventObject.T:
						var t=tbt.getComponent('C_B_T_'+p.get('id'));if(t) tbt.setActiveTab(t);break;				
				}}
		 	}
		},
		stopEvent: true
	});
	Fos.BookTab.superclass.constructor.call(this, { 
		id: "T_BOOK_"+p.get('id'),title:C_CONSIGN+"(F1)",header:false,deferredRender:false,autoScroll:true,
		border:false,labelAlign:'right',bodyStyle:'padding:2px 10px 10px 2px',tbar:tbs,		
		items:[{id:'T_BOOK_T_'+p.get('id'),xtype:'tabpanel',plain:true,activeTab:0,
	    	listeners:{scope:this,tabchange:function(m,a){a.doLayout();}},items:tabs
		}]
	});
};
Ext.extend(Fos.BookTab,Ext.FormPanel);

Fos.TransTab = function(p) {
	this.tranId=0;
	this.sel =GSEL;
	var sumPK = new Ext.form.TextField({name:'tranTotalPackages',disabled:true});
	var sumGW = new Ext.form.TextField({name:'tranTotalGrossWeight',disabled:true});
	var sumMM = new Ext.form.TextField({name:'tranTotalMeasurement',disabled:true});	
	this.addKeyMap = function(){
		var map = new Ext.KeyMap(this.el,[
			{key:'a',ctrl:true,fn:function(){this.addTrans();},scope:this},
			{key:'d',ctrl:true,fn:function(){this.removeTrans();},scope:this},
         	{key:'s',ctrl:true,fn:function(){this.save();},scope:this},
	 		{key:'e',ctrl:true,fn:function(){},scope:this}
	 		]);
    	map.stopEvent = true;
	};
	this.store = GS('TRAN_Q','FTrans',FTrans,'tranId','DESC','','','id',false);
	this.taskStore = GS('TRTA_Q','FTransTask',FTransTask,'trtaId','DESC','','','id',false);	
	this.cargoStore = GS('TRCA_Q','FTransCargo',FTransCargo,'trcaId','DESC','','','id',false);
	if(p.get('rowAction')!='N'){
		this.store.load({params:{consId:p.get('consId')}});	
		this.taskStore.load({params:{consId:p.get('consId')}});	
		this.cargoStore.load({params:{consId:p.get('consId')}});
	};
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('tranId')){
				this.sel=record.get('tranId');
				this.getForm().reset();
				this.getForm().loadRecord(record);
				sumPK.setValue(record.get('tranTotalPackages'));
				sumGW.setValue(record.get('tranTotalGrossWeight'));
				sumMM.setValue(record.get('tranTotalMeasurement'));				
				var a = this.taskStore.getRange();
				var ts = this.taskGrid.getStore();
				ts.removeAll();
				for(var i=0;i<a.length;i++){if(a[i].get('tranId')==this.sel) ts.add(a[i]);}				
				var ca = this.cargoStore.getRange();
				var cs = this.cargoGrid.getStore();
				cs.removeAll();
				for(var i=0;i<ca.length;i++){if(ca[i].get('tranId')==this.sel) cs.add(ca[i]);}
			}},
		rowdeselect:function(s,row,r){if(this.getForm().isDirty()){r.beginEdit();this.getForm().updateRecord(r);r.endEdit();}}
	};		
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_TRAN_NO,dataIndex:'tranNo',width:100},
	{header:C_CONTRACT_NO,dataIndex:'tranContractNo',width:150},
	{header:C_DATE,dataIndex:'tranDate',renderer:formatDate,width:100},
	{header:C_TRACK_VENDOR,dataIndex:'tranVendorName',width:100},
	{header:C_TRACK_CONTACT,dataIndex:'tranVendorContact',width:100},
	{header:C_TRACK_TEL,dataIndex:'tranVendorTel',width:100},
	{header:C_STATUS,dataIndex:'tranStatus',renderer:getTRST,width:100}],defaults:{sortable:true,width:100}});
	this.tranGrid = new Ext.grid.GridPanel({header:false,border:true,height:150,
		viewConfig:{forceFit:true},autoScroll:true,store:this.store,sm:sm,cm:cm});
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_COTY,dataIndex:'cotyId',width:100,renderer:getCOTY,
			editor:new Ext.form.ComboBox({displayField:'cotyCode',valueField:'cotyId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOTY_S()})},
	{header:C_CONT_NO,dataIndex:'trtaContainerNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_SEAL_NO,dataIndex:'trtaSealNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},	
	{header:C_ARRIVE_TIME_D,dataIndex:'trtaArriveTimeDemand',width:80,renderer:formatDateTime,editor:new Ext.form.DateField({format:'Y-m-d H:i'})},
	{header:C_ARRIVE_TIME_F,dataIndex:'trtaArriveTime',width:80,renderer:formatDateTime,editor:new Ext.form.DateField({format:'Y-m-d H:i'})},
	{header:C_LOAD_TIME,dataIndex:'trtaLoadTime',width:80,renderer:formatDateTime,editor:new Ext.form.DateField({format:'Y-m-d H:i'})},
	{header:C_LEAVE_TIME,dataIndex:'trtaLeaveTime',width:80,renderer:formatDateTime,editor:new Ext.form.DateField({format:'Y-m-d H:i'})},
	{header:C_BACK_TIME,dataIndex:'trtaBackTime',width:80,renderer:formatDateTime,editor:new Ext.form.DateField({format:'Y-m-d H:i'})},
	{header:C_DRIVER,dataIndex:'trtaDriver',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_DRIVER_TEL,dataIndex:'trtaDriverTel',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_TRACK_NO,dataIndex:'trtaTrackNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_REMARKS,dataIndex:'trtaRemarks',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})}
	],defaults:{sortable:true,width:100}});
	this.taskGrid = new Ext.grid.EditorGridPanel({border:true,height:150,autoScroll:true,sm:sm2,cm:cm2,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'trtaId',record:'FTransTask'},FTransTask),pruneModifiedRecords:true,sortInfo:{field:'trtaId', direction:'ASC'}}),
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:function(){
				var r = this.tranGrid.getSelectionModel().getSelected();
				if(r){
					var rid=GGUID();
					var t = new FTransTask({id:rid,trtaId:rid,tranId:r.get('tranId'),consId:r.get('consId'),cotyId:'',					
					trtaContainerNo:'',trtaSealNo:'',trtaArriveTimeDemand:'',trtaArriveTime:'',
					trtaLoadTime:'',trtaLeaveTime:'',trtaBackTime:'',trtaDriver:'',trtaDriverTel:'',				
					trtaTrackNo:'',trtaRemarks:'',version:0}); 
					this.taskStore.add(t);
					t.set('rowAction','N');
					this.taskGrid.getStore().insert(0,t);
					this.taskGrid.startEditing(0,1);
				}
				else XMG.alert(SYS,M_NO_DATA_SELECTED);
			}},'-',
			{text:C_REMOVE,iconCls:'remove',scope:this,handler:function(){FOS_REMOVE(sm2,this.taskGrid.getStore());}}
		]});
	
	var sm3=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm3=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_CATY,dataIndex:'trcaCargoName',width:80,editor:new Ext.form.TextField({})},
	{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
            listeners:{scope:this,select:function(c,r,i){this.cargoGrid.getSelectionModel().getSelected().set('packName',r.get('packName'));}}})},
	{header:C_PACKAGES,dataIndex:'trcaPackageNum',width:60,editor:new Ext.form.NumberField({allowBlank:false})},
	{header:C_GW,dataIndex:'trcaGrossWeight',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},	
	{header:C_SIZE,dataIndex:'trcaMeasurement',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_REMARKS,dataIndex:'trcaRemarks',width:100,editor:new Ext.form.TextField()}
	],defaults:{sortable:true,width:100}});
	this.cargoGrid = new Ext.grid.EditorGridPanel({border:true,height:150,autoScroll:true,sm:sm3,cm:cm3,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'trcaId',record:'FTransCargo'},FTransTask),pruneModifiedRecords:true,sortInfo:{field:'trcaId', direction:'ASC'}}),
		listeners:{scope:this,afteredit:function(e){var f=e.field;
    		if(f=='trcaPackageNum'||f=='trcaGrossWeight'||f=='trcaMeasurement'){this.reCalculate();}
    	}},
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:function(){
				var r = this.tranGrid.getSelectionModel().getSelected();
				if(r){
					var win = new Fos.CargoLookupWin('CARG_Q',p.get('consId'));
					win.addButton({text:C_OK,scope:this,handler:function(){
						var g = win.findById('G_CARG_LOOKUP');
						var a = g.getSelectionModel().getSelections();
						if(a){
							for(var i=0;i<a.length;i++){
								if(this.cargoGrid.getStore().findBy(function(rec,id){return rec.get('cargId')==a[i].get('cargId')})==-1){
									var t = new FTransCargo({id:GGUID(),trcaId:'0',tranId:r.get('tranId'),consId:r.get('consId'),
										cargId:a[i].get('cargId'),trcaCargoName:a[i].get('cargNameEn'),
										packId:a[i].get('packId'),packName:getPACK(a[i].get('packId')),trcaPackageNum:a[i].get('cargPackageNum'),
										trcaGrossWeight:a[i].get('cargGrossWeight'),trcaMeasurement:a[i].get('cargMeasurement'),
										trcaRemarks:'',verson:0});
									this.cargoStore.add(t);t.set('rowAction','N');
									this.cargoGrid.getStore().add(t);
								}
							};
	    					this.reCalculate();
						}
						win.close();
					}},this);
					win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
					win.show();
				}
				else XMG.alert(SYS,M_NO_DATA_SELECTED);
			}},'-',
			{text:C_REMOVE,iconCls:'remove',scope:this,handler:function(){
				var r = this.cargoGrid.getSelectionModel().getSelections();
				if(r.length){
					for(var i=0;i<r.length;i++){
						r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
						this.cargoGrid.getStore().remove(r[i]);this.reCalculate();
					}
				}
				else XMG.alert(SYS,M_R_P);
			}},'->',
			{xtype:'tbtext',text:C_SUM_PACK},sumPK,'-',
			{xtype:'tbtext',text:C_SUM_GW},sumGW,'-',
			{xtype:'tbtext',text:C_SUM_CBM},sumMM
		]
	});
	
	this.reCalculate=function(){
		var sumP=0;var sumG=0;var sumM=0;
		var a=this.cargoGrid.getStore().getRange();
		for(var i=0;i<a.length;i++){
			(if(a[i].get('trcaPackageNum')>0)) sumP+=parseInt(a[i].get('trcaPackageNum'));
			(if(a[i].get('trcaGrossWeight')>0))sumG+=parseFloat(a[i].get('trcaGrossWeight'));
			(if(a[i].get('trcaMeasurement')>0))sumM+=parseFloat(a[i].get('trcaMeasurement'));
		}
		sumPK.setValue(sumP);
		sumGW.setValue(sumG);
		sumMM.setValue(sumM);
		var b =this.tranGrid.getSelectionModel().getSelected();
		b.beginEdit();
		b.set('tranTotalPackages',sumP);
		b.set('tranTotalGrossWeight',sumG);
		b.set('tranTotalMeasurement',sumM);
		b.endEdit();
	};
	
	this.addTrans = function(){
		this.tranId=this.tranId-1;
		var b = new FTrans({id:this.tranId,tranId:this.tranId,consId:p.get('consId'),consNo:p.get('consNo'),
			tranDate:new Date(),tranExpiryDate:p.get('consExpiryDate'),
			tranVendorId:p.get('consTrackVendor'),tranVendorName:p.get('consTrackVendorName'),
			tranVendorContact:p.get('consTrackContact'),tranVendorTel:p.get('consTrackTel'),
			tranLoadDate:p.get('consTrackLoadDate'),tranLoadAddress:p.get('consTrackLoadAddress'),
			tranContainerCompany:p.get('consContainerCompany'),tranRemarks:p.get('consTrackRemarks'),
			tranLoadContact:p.get('custContact'),tranLoadTel:p.get('custTel'),
			tranContainerNo:p.get('consTotalContainers'),tranVessel:p.get('vessName'),
			tranVoyage:p.get('voyaName'),tranSoNo:p.get('consSoNo'),
			tranPol:p.get('consPolEn'),tranStatus:'0',version:'0'});    
		this.store.insert(0,b);b.set('rowAction','N');
		this.tranGrid.getSelectionModel().selectFirstRow();
	};
	this.removeTrans = function(){
		var b =this.tranGrid.getSelectionModel().getSelected();
		if(b){
	    	if(b.get('tranStatus')!='0') XMG.alert(SYS,M_TRAN_CONFIRMED);
	    	else{
	    		b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
	    		this.store.remove(b);
	    		var ts = this.taskGrid.getStore();
				var a = ts.getRange();
				for(var i=0;i<a.length;i++){
					a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
					this.taskStore.remove(a[i]);ts.remove(a[i]);
				}
				var cs = this.cargoGrid.getStore();
				var ca = cs.getRange();
				for(var i=0;i<ca.length;i++){
					ca[i].set('rowAction',ca[i].get('rowAction')=='N'?'D':'R');
					this.cargoStore.remove(ca[i]);cs.remove(ca[i]);
				}
				this.getForm().reset();
	    	}
    	}
		else XMG.alert(SYS,M_R_P);
	};
	this.save = function(){
		this.taskGrid.stopEditing();
		this.cargoGrid.stopEditing();
		var b =this.tranGrid.getSelectionModel().getSelected();
		if(b){b.beginEdit();this.getForm().updateRecord(b);b.endEdit();};
		
		var a =this.store.getModifiedRecords();
		if(a.length>0){
			var xml = ATX(a,'FTrans',FTrans);
		}
			
		var cc=[];
		var ca =this.taskStore.getRange();
		for(var i=0;i<ca.length;i++){
			if(ca[i].dirty) cc[cc.length]=ca[i];
		}
		if(cc.length>0){
			var x = ATX(cc,'FTransTask',FTransTask);
			xml=xml+x;
		};
		
		var dd=[];
		var da =this.cargoStore.getRange();
		for(var i=0;i<da.length;i++){if(da[i].dirty) dd[dd.length]=da[i];}
		if(dd.length>0){var x = ATX(dd,'FTransCargo',FTransCargo);xml=xml+x;};
		
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TRAN_S'},
			success: function(r){
				var a = XTRA(r.responseXML,'FTrans',FTrans);FOSU(this.store,a,FTrans);
				var b = XTRA(r.responseXML,'FTransTask',FTransTask);FOSU(this.taskStore,b,FTransTask);
				var c = XTRA(r.responseXML,'FTransCargo',FTransCargo);FOSU(this.cargoStore,c,FTransCargo);
				XMG.alert(SYS,M_S);
			},
			failure:function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};
	this.expExcelTR=function(){
    	var b =this.tranGrid.getSelectionModel().getSelected();
    	if(b) EXPC('TRAN','&tranId='+b.get('tranId'));
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.expEmailTR=function(){		
		var b =this.tranGrid.getSelectionModel().getSelected();
		if(b){
			var to='';
			var cc='';
			var sub='';
			var msg='';
			EXPM(to,cc,sub,msg,'TRAN','tranId='+b.get('tranId'));
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	
	this.updateStatus=function(s){
		var b =this.tranGrid.getSelectionModel().getSelected();
    	if(b){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TRAN_U',tranId:b.get('tranId'),tranStatus:s},
			success: function(r){b.set('tranStatus',s);this.updateToolbar();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
		});}
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.start=function(){this.updateStatus('1');};
	this.end=function(){this.updateStatus('2');};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_TRAN;	
    var c1={fieldLabel:HL(C_TRACK_VENDOR),name:'tranVendorName',tabIndex:1,store:getCS(),enableKeyEvents:true,
			tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
			listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('tranVendorId','');p.set('tranVendorName','');}},
			select:function(c,r,i){
				this.find('name','tranVendorContact')[0].setValue(r.get('custContact'));
				this.find('name','tranVendorTel')[0].setValue(r.get('custTel'));
				this.find('name','tranVendorFax')[0].setValue(r.get('custFax'));
				var b =this.tranGrid.getSelectionModel().getSelected();
				if(b){
					b.set('tranVendorName',r.get('custNameCn'));
					b.set('tranVendorId',r.get('custId'));
					b.set('tranVendorContact',r.get('custContact'));
					b.set('tranVendorTel',r.get('custTel'));													
				}
			},
			keydown:{fn:function(f,e){LC(f,e,'custTrackFlag');},buffer:BF}}};
	var c2={fieldLabel:C_TRAN_NO,name:'tranNo',disabled:true,tabIndex:5,xtype:'textfield',anchor:'95%'};
	var c3={fieldLabel:C_LOAD_TIME,name:'tranLoadDate',tabIndex:26,xtype:'datefield',format:DATEF,anchor:'95%'};
	var c4={fieldLabel:C_LOAD_FACTORY,name:'tranLoadFactory',tabIndex:9,xtype:'textfield',anchor:'95%'};
	var c5={fieldLabel:C_LOAD_ADDRESS,name:'tranLoadAddress',tabIndex:13,xtype:'textfield',anchor:'95%'};
	var c6={fieldLabel:C_VESS,name:'tranVessel',tabIndex:21,xtype:'textfield',anchor:'95%'};
	var c7={fieldLabel:C_DRAW_CY,name:'tranCyDraw',tabIndex:25,xtype:'textfield',anchor:'95%'};
	
	var c8={fieldLabel:C_TRAN_CONTACT,name:'tranVendorContact',tabIndex:2,xtype:'textfield',anchor:'95%'};
	var c9={fieldLabel:C_CONTRACT_NO,name:'tranContractNo',tabIndex:6,xtype:'textfield',anchor:'95%'};
	var c10={fieldLabel:C_TRACK_CONTACT,name:'tranLoadContact',tabIndex:10,xtype:'textfield',anchor:'95%'};
	var c11={fieldLabel:C_LOAD_ADDRESS,name:'tranDeliveryAddress',tabIndex:14,xtype:'textfield',anchor:'95%'};
	var c12={fieldLabel:C_OP_TYPE,name:'tranOperationType',tabIndex:17,store:TROT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
	var c13={fieldLabel:C_VOYA,name:'tranVoyage',tabIndex:22,xtype:'textfield',anchor:'95%'};
	var c14={fieldLabel:C_DRAW_DATE,name:'tranDrawDate',tabIndex:26,xtype:'datefield',format:DATEF,anchor:'95%'};
	var c15={fieldLabel:C_TRAN_TEL,name:'tranVendorTel',tabIndex:3,xtype:'textfield',anchor:'95%'};
	var c16={fieldLabel:C_CONS_DATE,name:'tranDate',tabIndex:7,xtype:'datefield',format:DATEF,anchor:'95%'};
	var c17={fieldLabel:C_TRACK_TEL,name:'tranLoadTel',tabIndex:11,xtype:'textfield',anchor:'95%'};
	var c18={fieldLabel:C_CONTAINER,name:'tranContainerCompanyName',tabIndex:15,store:getCS(),enableKeyEvents:true,
			tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',
			valueField:'custNameCn',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
			listeners:{scope:this,
				select:function(c,r,i){		
					var b =this.tranGrid.getSelectionModel().getSelected();
					if(b){b.set('tranContainerCompany',r.get('custId'));}
				},
				keydown:{fn:function(f,e){LC(f,e,'custContainerFlag');},buffer:BF}}};
	var c19={fieldLabel:C_MILES,name:'tranHeavyMiles',tabIndex:27,xtype:'numberfield',anchor:'95%'};
	var c20={fieldLabel:p.get('consBizClass')==BC_E?C_POL:C_POD,tabIndex:23,name:'tranPol',xtype:'textfield',anchor:'95%'};
	var c21={fieldLabel:C_BACK_CY,name:'tranCyBack',tabIndex:27,xtype:'textfield',anchor:'95%'};
	
	var c22={fieldLabel:C_TRAN_FAX,name:'tranVendorFax',tabIndex:4,xtype:'textfield',anchor:'90%'};
	var c23={fieldLabel:C_TRAN_DATE,name:'tranStartDate',tabIndex:26,xtype:'datefield',format:DATEF,anchor:'90%'};
	var c24={fieldLabel:C_LOAD_PLACE,name:'tranLoadPlace',tabIndex:12,xtype:'textfield',anchor:'90%'};
	var c25={fieldLabel:C_CONT_INFO,name:'tranContainerInfo',tabIndex:16,xtype:'textfield',allowDecimals:false,anchor:'90%'};
	var c26={fieldLabel:p.get('consBizClass')==BC_E?C_CUSTOM_EXPIRY_DATE:C_ETA,tabIndex:8,name:'tranExpiryDate',xtype:'datefield',format:DATEF,anchor:'90%'};
	var c27={fieldLabel:p.get('consBizClass')==BC_E?'S/O No.':C_MBL_NO,name:'tranSoNo',tabIndex:24,xtype:'textfield',anchor:'90%'};
	var c28={fieldLabel:C_BACK_DATE,name:'tranBackDate',tabIndex:28,xtype:'datefield',format:DATEF,anchor:'90%'};
	var t2={layout:'column',title:C_TRAN_INFO,layoutConfig:{columns:4},deferredRender:false,collapsible:true,
			items:[{columnWidth:.25,layout:'form',border:false,items:[c1,c2,c3,c4,c5,c6,c7]},
			{columnWidth:.25,layout:'form',border : false,labelWidth:90,items:[c8,c9,c10,c11,c12,c13,c14]},
			{columnWidth:.25,layout:'form',border : false,items:[c15,c16,c17,c18,c19,c20,c21]},
			{columnWidth:.25,layout:'form',border : false,items:[c22,c23,c24,c25,c26,c27,c28]}
            ]};
    
	var f1={fieldLabel:C_CUSTOM_AGENCY,name:'tranCustomsBrokerName',tabIndex:17,store:getCS(),enableKeyEvents:true,
			tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',
			displayField:'custCode',valueField:'custNameCn',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
			listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('tranCustomsBroker','');p.set('tranCustomsBrokerName','');}},
			select:function(c,r,i){
				this.find('name','tranCustomsContact')[0].setValue(r.get('custContact'));
				this.find('name','tranCustomsTel')[0].setValue(r.get('custTel'));
				this.find('name','tranCustomsAddress')[0].setValue(r.get('custAddress'));
				var b =this.tranGrid.getSelectionModel().getSelected();
				if(b){b.set('tranCustomsBroker',r.get('custId'));}
			},
			keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}};
	var f2={fieldLabel:C_CUSTOMS_CONTACT,name:'tranCustomsContact',tabIndex:18,xtype:'textfield',anchor:'90%'};
	var f3={fieldLabel:C_CUSTOMS_ADDRESS,tabIndex:20,name:'tranCustomsAddress',xtype:'textfield',anchor:'95%'};
	var f4={fieldLabel:C_CUSTOMS_TEL,name:'tranCustomsTel',tabIndex:19,xtype:'textfield',anchor:'90%'};
	var t3={layout:'column',title:C_TRAN_CUSTOMS_INFO,layoutConfig:{columns:2},deferredRender:false,collapsible:true,
			items:[{columnWidth:.5,layout:'form',border:false,labelWidth:100,items:[f1]},
			{columnWidth:.5,layout:'form',border:false,labelWidth:100,items:[f2]},
			{columnWidth:.5,layout:'form',border:false,labelWidth:100,items:[f3]},
			{columnWidth:.5,layout:'form',border:false,labelWidth:100,items:[f4]}]};
			
	var f5={fieldLabel:C_TRAN_TYPE,name:'tranType',tabIndex:17,store:TANT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'};
	var f6={fieldLabel:C_PRE_FLAG,name:'tranPreFlag',tabIndex:19,xtype:'checkbox',anchor:'60%'};
	var f7={fieldLabel:C_VEHT,name:'tranVehicleType',tabIndex:17,store:getVEHT_S(),xtype:'combo',displayField:'vehtName',valueField:'vehtId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'};
	var f8={fieldLabel:C_INSP_FLAG,name:'tranInspFlag',tabIndex:19,xtype:'checkbox',anchor:'60%'};
	var f9={fieldLabel:C_IC_FLAG,name:'tranIcFlag',tabIndex:19,xtype:'checkbox',anchor:'60%'};
	var f10={fieldLabel:C_REAL_FLAG,name:'tranRearFlag',tabIndex:19,xtype:'checkbox',anchor:'60%'};
	var f11={fieldLabel:C_IC_DAYS,tabIndex:20,name:'tranIcDays',xtype:'numberfield',anchor:'90%'};
	var f12={fieldLabel:C_CONT_FLAG,name:'tranContFlag',tabIndex:19,xtype:'checkbox',anchor:'60%'};
	var t4={layout:'column',title:C_OTHER_INFO,layoutConfig:{columns:4},deferredRender:false,collapsible:true,
			items:[
				{columnWidth:.25,layout:'form',border : false,items:[f5,f6]},
				{columnWidth:.25,layout:'form',border : false,items:[f7,f8]},
				{columnWidth:.25,layout:'form',border : false,items:[f9,f10]},
				{columnWidth:.25,layout:'form',border : false,items:[f11,f12]}
			]};

	var menu=CREATE_E_MENU(C_TRANS_BILL,this.expExcelTR,this.expEmailTR,function(){},this);	
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nrskwe',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_TRAN_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addTrans();break;
					case Ext.EventObject.R:
						if(!NR(m+F_R)) this.removeTrans();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					case Ext.EventObject.K:
						if(!NR(m+F_M)) this.start();break;
					case Ext.EventObject.W:
						if(!NR(m+F_M)) this.end();break;
					case Ext.EventObject.E:
						if(!NR(m+F_M)) this.expExcelTR();break;					
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	this.updateToolbar=function(){
    	var b = this.tranGrid.getSelectionModel().getSelected();
    	var tb= this.getTopToolbar();
    	var s=b.get('tranStatus');
    	if(b){
	    	tb.getComponent('TB_A').setDisabled(NR(m+F_M));
    		tb.getComponent('TB_B').setDisabled(NR(m+F_R)||s!='0');
    		tb.getComponent('TB_C').setDisabled(NR(m+F_M)||s!='0');
    		tb.getComponent('TB_D').setDisabled(NR(m+F_M)||s!='0');
    		tb.getComponent('TB_E').setDisabled(NR(m+F_M)||s!=1);
		}
    };
	Fos.TransTab.superclass.constructor.call(this,{id:'T_TRAN_'+p.get('id'),title:C_SR_TRAN+'(F4)',header:false,autoScroll:true,	
		labelAlign:'right',labelWidth:80,border:true,layout:'border',
		tbar:[{text:C_ADD+'(N)',itemId:'TB_A',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.addTrans},'-',
			{text:C_REMOVE+'(R)',itemId:'TB_B',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeTrans},'-',
			{text:C_SAVE+'(S)',itemId:'TB_C',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save},'-',
			{text:C_START+'(K)',itemId:'TB_D',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.start},'-',
			{text:C_END+'(W)',itemId:'TB_E',iconCls:'check',disabled:NR(m+F_M),scope:this,handler:this.end},'-',
			{text:C_EXPORT+'(E)',iconCls:'print',disabled:NR(m+F_E),scope:this,
				menu: {items:[menu]}}
		  ],
	items:[{layout:'fit',region:'north',title:C_TRAN_LIST,border:false,height:150,collapsible:true,items:[this.tranGrid]},
		{xtype:'tabpanel',region:'center',plain:true,activeTab:0,defaults:{bodyStyle:'padding:0px'},autoScroll:true,
        	listeners:{scope:this,tabchange:function(m,a){a.doLayout();}},
        	items:[
            	{title:C_TRAN_INFO,tabIndex:1,autoScroll:true,items:p.get('consBizClass')==BC_E?[t2,t3,t4]:[t2,t4]},
            	{layout:'fit',border:false,title:C_TASK_LIST,items:[this.taskGrid]},
            	{layout:'fit',border:false,title:C_CARGO_LIST,items:[this.cargoGrid]}]
   	}]});            		
};
Ext.extend(Fos.TransTab, Ext.FormPanel);

Fos.WarehouseTab = function(p) {
	this.wareId=0;
	this.sel =GSEL;
	this.addKeyMap = function(){		
		var map = new Ext.KeyMap(this.el,[
			{key:'a',ctrl:true,fn:this.addWare,scope:this},
			{key:'d',ctrl:true,fn:this.removeWare,scope:this},
         	{key:'s',ctrl:true,fn:this.save,scope:this},
	 		{key:'e',ctrl:true,fn:function(){},scope:this}
	 		]);
    	map.stopEvent = true;
	};	
	this.store = GS('WARE_Q','FWarehouse',FWarehouse,'wareId','DESC','','','id',false);
	this.cargoStore = GS('WACA_Q','FWarehouseCargo',FWarehouseCargo,'wacaId','DESC','','','id',false);
    if(p.get('rowAction')!='N'){
    	this.store.load({params:{consId:p.get('consId')}});
    	this.cargoStore.load({params:{consId:p.get('consId')}});
	}
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('wareId')){
				this.sel=record.get('wareId');
				this.getForm().reset();this.getForm().loadRecord(record);
				sumPK.setValue(record.get('wareTotalPackages'));
				sumGW.setValue(record.get('wareTotalGrossWeight'));
				sumMM.setValue(record.get('wareTotalMeasurement'));
				var s = this.cargoGrid.getStore();s.removeAll();
				var a = this.cargoStore.getRange();
				for(var i=0;i<a.length;i++){if(a[i].get('wareId')==this.sel) s.add(a[i]);}
			}},
		rowdeselect:function(sm,row,record){
			if(this.getForm().isDirty()){
				record.beginEdit();this.getForm().updateRecord(record);record.endEdit();
			}			
		}
	};
	var sumPK = new Ext.form.TextField({name:'tranTotalPackages',disabled:true});
	var sumGW = new Ext.form.TextField({name:'tranTotalGrossWeight',disabled:true});
	var sumMM = new Ext.form.TextField({name:'tranTotalMeasurement',disabled:true});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_WARE_NO,dataIndex:'wareNo',width:100},
	{header:C_WARE_TYPE,dataIndex:'wareType',renderer:getWATY,width:150},
	{header:C_WARE_DATE,dataIndex:'wareDate',renderer:formatDate,width:100},
	{header:C_WAREHOUSE,dataIndex:'wareVendorName',width:100},
	{header:C_WARE_ACCEPT_STATUS,dataIndex:'wareAcceptStatus',renderer:getWAST,width:100},
	{header:C_WARE_ACCEPT_TIME,dataIndex:'wareAcceptDate',renderer:formatDate,width:100}],defaults:{sortable:true,width:100}});
	this.wareGrid = new Ext.grid.GridPanel({header:false,border:true,height:150,viewConfig:{forceFit:true},autoScroll:true,
		store:this.store,sm:sm,cm:cm});	
	
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_MARKS,dataIndex:'wacaCargoMarks',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CATY,dataIndex:'wacaCargoName',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_PACKAGES,dataIndex:'wacaPackagesNum',width:80,editor:new Ext.form.NumberField({allowBlank:false,allowDecimals:false,blankText:'',invalidText:''})},	
	{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
            listeners:{scope:this,select:function(c,r,i){this.cargoGrid.getSelectionModel().getSelected().set('packName',r.get('packName'));}}})},
	{header:C_GW,dataIndex:'wacaGrossWeight',width:80,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NW,dataIndex:'wacaNetWeight',width:80,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},	
	{header:C_CBM,dataIndex:'wacaMeasurement',width:80,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})}
	],defaults:{sortable:true,width:100}});
	this.cargoGrid = new Ext.grid.EditorGridPanel({border:false,height:200,autoScroll:true,sm:sm2,cm:cm2,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'wacaId',record:'FWarehouseCargo'},FWarehouseCargo),sortInfo:{field:'wacaId',direction:'ASC'}}),
		listeners:{scope:this,afteredit:function(e){
    		var f=e.field;var r=e.record;
    		if(f=='wacaPackagesNum'||f=='wacaGrossWeight'||f=='wacaMeasurement'){this.reCalculate();}
    	}},
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:function(){
			var r = this.wareGrid.getSelectionModel().getSelected();
			if(r){				
				var win = new Fos.CargoLookupWin('CARG_Q',p.get('consId'));
				win.addButton({text:C_OK,scope:this,handler:function(){
					var g = win.findById('G_CARG_LOOKUP');
					var a = g.getSelectionModel().getSelections();
					if(a){
						for(var i=0;i<a.length;i++){
							if(this.cargoGrid.getStore().findBy(function(rec,id){return rec.get('cargId')==a[i].get('cargId')})==-1){
								var rid=GGUID();
								var t = new FWarehouseCargo({id:rid,wacaId:rid,wareId:r.get('wareId'),consId:r.get('consId'),
									cargId:a[i].get('cargId'),wacaCargoName:a[i].get('cargNameEn'),wacaCargoMarks:a[i].get('cargMarks'),
									packId:a[i].get('packId'),packName:getPACK(a[i].get('packId')),wacaPackagesNum:a[i].get('cargPackageNum'),
									wacaGrossWeight:a[i].get('cargGrossWeight'),wacaNetWeight:a[i].get('cargNetWeight'),
									wacaMeasurement:a[i].get('cargMeasurement'),
									trcaRemarks:'',verson:0});
								this.cargoStore.add(t);t.set('rowAction','N');
								this.cargoGrid.getStore().add(t);
							}
						}
    					this.reCalculate();
					}
					win.close();
				}},this);
				win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
				win.show();
			}
			else XMG.alert(SYS,M_NO_DATA_SELECTED);
			}},'-',
			{text:C_REMOVE,iconCls:'remove',scope:this,handler:function(){
				var r = this.cargoGrid.getSelectionModel().getSelections();
				if(r){for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
				this.cargoGrid.getStore().remove(r[i]);this.reCalculate();}
			}}
		},'->',
		{xtype:'tbtext',text:C_SUM_PACK},sumPK,'-',
		{xtype:'tbtext',text:C_SUM_GW},sumGW,'-',
		{xtype:'tbtext',text:C_SUM_CBM},sumMM
		]
	});
	this.reCalculate=function(){
		var sumP=0,sumG=0,sumM=0;
		var a=this.cargoStore.getRange();		
		for(var i=0;i<a.length;i++){
			if(a[i].get('wacaPackagesNum')>0) sumP=sumP+a[i].get('wacaPackagesNum');
			if(a[i].get('wacaGrossWeight')) sumG=sumG+a[i].get('wacaGrossWeight');
			if(a[i].get('wacaMeasurement')) sumM=sumM+a[i].get('wacaMeasurement');
		}
		sumPK.setValue(round2(sumP));
		sumGW.setValue(round2(sumG));
		sumMM.setValue(round2(sumM));
		var b =this.wareGrid.getSelectionModel().getSelected();
		b.set('wareTotalPackages',sumP);
		b.set('wareTotalGrossWeight',sumP);
		b.set('wareTotalMeasurement',sumP);
	};
	this.addWare = function(){
		this.wareId=this.wareId-1;
		var b = new FWarehouse({id:this.wareId,wareId:this.wareId,
					consId:p.get('consId'),consNo:p.get('consNo'),
					wareVessel:p.get('vessName'),wareVoyage:p.get('voyaName'),
					wareMblNo:p.get('consMblNo'),
					wareVendorId:p.get('consWarehouse'),wareVendorName:p.get('consWarehouseName'),
					wareVendorContact:p.get('consWarehouseContact'),wareVendorTel:p.get('consWarehouseTel'),wareVendorFax:p.get('consWarehouseFax'),
					wareCustomerContact:p.get('custContact'),wareCustomerTel:p.get('custTel'),wareCustomerFax:p.get('custFax'),
					wareOperator:'',wareOperatorTel:getCFG('COMPANY_TEL'),wareOperatorFax:getCFG('COMPANY_FAX'),
					wareType:'I',wareDate:new Date(),
					wareBookDate:new Date(),wareAcceptDate:new Date(),
					wareTransVendor:p.get('consTrackVendor'),wareTransVendorName:p.get('consTrackVendorName'),wareLoadFlag:0,
					wareTrackNo:'',wareContainerNo:p.get('consContainerNo'),wareRemarks:p.get('consWarehouseRemarks'),
					wareAcceptStatus:0,version:0});
		this.store.insert(0,b);b.set('rowAction','N');
		this.resel=true;
		this.wareGrid.getSelectionModel().selectFirstRow();
	};
	this.removeWare = function(){
		var b =this.wareGrid.getSelectionModel().getSelected();
		if(b){
	    	if(b.get('wareAcceptStatus')!=0) XMG.alert(SYS,M_WARE_CONFIRMED);
	    	else{
	    		b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
	    		this.store.remove(b);
	    		this.getForm().reset();
	    		var s = this.cargoGrid.getStore();
				var a = s.getRange();
				for(var i=0;i<a.length;i++){
					a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
					this.cargoStore.remove(a[i]);s.remove(a[i]);
				}
	    	}
    	}
		else XMG.alert(SYS,M_R_P);
	};
	this.save = function(){
		this.wareGrid.stopEditing();
		this.cargoGrid.stopEditing();
		var b =this.wareGrid.getSelectionModel().getSelected();
		if(b){b.beginEdit();this.getForm().updateRecord(b);b.endEdit();};
		var xml='';
		var a =this.store.getModifiedRecords();
		if(a.length>0){xml = ATX(a,'FWarehouse',FWarehouse);};		
		var cc=[];
		var ca =this.cargoStore.getRange();
		for(var i=0;i<ca.length;i++){
			if(ca[i].dirty) cc[cc.length]=ca[i];
		}
		if(cc.length>0){var x = ATX(cc,'FWarehouseCargo',FWarehouseCargo);xml=xml+x;};
		
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'WARE_S'},
			success: function(res){
				var a = XTRA(res.responseXML,'FWarehouse',FWarehouse);FOSU(this.store,a,FWarehouse);
				var b = XTRA(res.responseXML,'FWarehouseCargo',FWarehouseCargo);FOSU(this.cargoStore,b,FWarehouseCargo);
				XMG.alert(SYS,M_S);
			},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
		}
	};
	this.expExcel=function(){
    	var b =this.wareGrid.getSelectionModel().getSelected();
    	if(b) EXPC('WARE','&wareId='+b.get('wareId'));
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.expEmail=function(){		
		var b =this.wareGrid.getSelectionModel().getSelected();
		if(b){
			var to='';
			var cc='';
			var sub='';
			var msg='';
			EXPM(to,cc,sub,msg,'WARE','wareId='+b.get('wareId'));
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	var updateStatus=function(s){
		var b =this.wareGrid.getSelectionModel().getSelected();
		if(b)
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'WARE_U',wareId:b.get('wareId'),wareStatus:s},
			success: function(r){b.set('wareStatus',s);this.updateToolbar();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
		});
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.start=function(){updateStatus('1');};
	this.end=function(){updateStatus('2');};
	
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_WARE;
	this.updateToolbar=function(){
    	var b = this.wareGrid.getSelectionModel().getSelected();
    	var tb= this.getTopToolbar();
    	var s=b.get('wareStatus');
    	if(b){
	    	tb.getComponent('TB_A').setDisabled(NR(m+F_M));
    		tb.getComponent('TB_B').setDisabled(NR(m+F_R)||s!='0');
    		tb.getComponent('TB_C').setDisabled(NR(m+F_M));
		}
    };
	var menu=CREATE_E_MENU(C_WARE_BILL,this.expExcel,this.expEmail,function(){},this);
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nrse',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_WARE_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addWare();break;
					case Ext.EventObject.R:
						if(!NR(m+F_R)) this.removeWare();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					case Ext.EventObject.E:
						if(!NR(m+F_M)) this.expExcel();break;			
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	Fos.WarehouseTab.superclass.constructor.call(this,{id:'T_WARE_'+p.get('id'),title:C_SR_WARE+'(F5)',header:false,deferredRender:false,autoScroll:true,	
		labelAlign:'right',labelWidth:90,bodyStyle:'padding:0px 0px 0px',border:true,layout:'border',
	tbar:[{text:C_ADD+'(N)',itemId:'TB_A',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.addWare},'-',
			{text:C_REMOVE+'(R)',itemId:'TB_B',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeWare},'-',
			{text:C_SAVE+'(S)',itemId:'TB_C',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save},'-',
			{text:C_EXPORT+'(E)',iconCls:'print',disabled:NR(m+F_E),scope:this,menu:{items:[menu]}}
		],
	items: [{layout:'fit',region:'north',title:C_WARE_LIST,border:false,height:150,collapsible:true,items:[this.wareGrid]},
			{xtype:'tabpanel',region:'center',plain:true,activeTab:0,defaults:{bodyStyle:'padding:0px'},
          		listeners:{scope:this,tabchange:function(m,a){a.doLayout();}},
            	items:[
            {layout:'column',title:C_WARE_INFO,tabIndex:1,layoutConfig:{columns:4},deferredRender:false,collapsible:true,
			items:[{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_WARE_NO,name:'wareNo',tabIndex:5,xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_WAREHOUSE,name:'wareVendorName',tabIndex:9,store:getCS(),enableKeyEvents:true,
					tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
					listeners:{scope:this,
					blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('wareVendorId','');p.set('wareVendorName','');}},
					select:function(c,r,i){
						this.find('name','wareVendorContact')[0].setValue(r.get('custContact'));
						this.find('name','wareVendorTel')[0].setValue(r.get('custTel'));
						this.find('name','wareVendorFax')[0].setValue(r.get('custFax'));
						var b =this.wareGrid.getSelectionModel().getSelected();
						if(b){
							b.set('wareVendorId',r.get('custId'));
							b.set('wareVendorContact',r.get('custContact'));
							b.set('wareVendorTel',r.get('custTel'));
						}
					},
					keydown:{fn:function(f,e){LC(f,e,'custWarehouseFlag');},buffer:BF}}},
				{fieldLabel:C_WARE_ACCEPT_STATUS,name:'wareAcceptStatus',tabIndex:17,store:WAST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
				{fieldLabel:C_WARE_ACCEPT_TIME,name:'wareAcceptDate',tabIndex:14,xtype:'datefield',format:DATEF,anchor:'95%'},
				{fieldLabel:C_VESS,name:'wareVessel',tabIndex:5,xtype:'textfield',anchor:'95%'}]},
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_WARE_TYPE,name:'wareType',tabIndex:2,xtype:'textfield',store:WATY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
				{fieldLabel:C_WARE_CONTACT,name:'wareVendorContact',tabIndex:6,xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_CUST_CONTACT,name:'wareCustomerContact',tabIndex:10,xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_WARE_OPERATOR,name:'wareOperator',tabIndex:13,store:getUSER_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
				{fieldLabel:C_VOYA,name:'wareVoyage',tabIndex:5,xtype:'textfield',anchor:'95%'}]},				
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_WARE_DATE,name:'wareDate',tabIndex:3,xtype:'datefield',format:DATEF,anchor:'95%'},
				{fieldLabel:C_WARE_TEL,name:'wareVendorTel',tabIndex:7,xtype:'textfield',anchor:'95%'},				
				{fieldLabel:C_CUST_TEL,name:'wareCustomerTel',tabIndex:11,xtype:'textfield',anchor:'95%'},				
				{fieldLabel:C_WARE_OPERATOR_TEL,name:'wareOperatorTel',tabIndex:11,xtype:'textfield',anchor:'95%'},	
				{fieldLabel:C_BL_NO,name:'wareMblNo',tabIndex:5,xtype:'textfield',anchor:'95%'}]},				
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_WARE_BOOK_DATE,name:'wareBookDate',tabIndex:4,xtype:'datefield',format:DATEF,anchor:'90%'},
				{fieldLabel:C_WARE_FAX,name:'wareVendorFax',tabIndex:8,xtype:'textfield',anchor:'90%'},				
				{fieldLabel:C_CUST_FAX,name:'wareCustomerFax',tabIndex:12,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_WARE_OPERATOR_FAX,name:'wareOperatorFax',tabIndex:16,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_WARE_LOAD_FLAG,name:'wareLoadFlag',tabIndex:20,xtype:'checkbox',anchor:'60%'}]},
          {columnWidth:.5,layout:'form',border : false,items:[
				{fieldLabel:C_TRACK_VENDOR,name:'wareTransVendorName',tabIndex:17,store:getCS(),enableKeyEvents:true,
					tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
					listeners:{scope:this,
					blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('wareTransVendor','');p.set('wareTransVendorName','');}},
					select:function(c,r,i){
						var b =this.wareGrid.getSelectionModel().getSelected();
						if(b){b.set('wareTransVendor',r.get('custId'));}
					},
					keydown:{fn:function(f,e){LC(f,e,'custTrackFlag');},buffer:BF}}}]},
		  {columnWidth:.5,layout:'form',border : false,items:[
				{fieldLabel:C_TRACK_NO,name:'wareTrackNo',tabIndex:18,xtype:'textfield',anchor:'90%'}]},				
           {columnWidth:.5,layout:'form',border : false,items:[
				{fieldLabel:C_CONT_NO,name:'wareContainerNo',tabIndex:19,xtype:'textarea',anchor:'95%'}]},
			{columnWidth:.5,layout:'form',border : false,items:[
				{fieldLabel:C_REMARKS,name:'wareRemarks',tabIndex:20,xtype:'textarea',anchor:'90%'}]}
            ]},           
			{layout:'fit',border:false,collapsible:true,title:C_CARGO_LIST,items:[this.cargoGrid]}]}
		]
	});
};
Ext.extend(Fos.WarehouseTab, Ext.FormPanel);

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
		var pkg=0;gw=0;me=0;
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
		var pkg=0;gw=0;me=0;
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
	{header:C_CONT_NO,dataIndex:'contNo',width:80,validator:checkContainerNo,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:'集装箱编码格式不正确，前四位应为字母，后七位为数字，请重新输入！'})},
	{header:C_SEAL_NO,dataIndex:'contSealNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_COTY,dataIndex:'cotyId',width:60,renderer:getCOTY,
			editor:new Ext.form.ComboBox({displayField:'cotyCode',valueField:'cotyId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOTY_S()})},
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
	{header:C_REMARKS,dataIndex:'contRemarks',width:100,editor:new Ext.form.TextField()}],defaults:{sortable:true,width:100}});
	this.grid = new Ext.grid.EditorGridPanel({title:C_CONT_LIST,border:true,plugins:soc,autoScroll:true,clicksToEdit:1,height:200,
		store:this.store,sm:sm,cm:cm,listeners:{scope:this,
    	afteredit:function(e){var f=e.field;if(f=='contPackageNum'||f=='contGrossWeight'||f=='contMeasurement'){this.reCalculate();}}}
    });	
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_BL_NO,dataIndex:'consMblNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_MARKS,dataIndex:'cocaMarks',width:80,editor:new Ext.form.TextField({})},	
	{header:C_CARGO_NAME_EN,dataIndex:'cocaCargoName',width:80,editor:new Ext.form.TextField({})},	
	{header:C_PACKAGES,dataIndex:'cocaPackageNum',width:60,editor:new Ext.form.NumberField({allowBlank:false})},
	{header:C_PACK,dataIndex:'packName',width:80,renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packName',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
            listeners:{scope:this,select:function(c,r,i){this.cargoGrid.getSelectionModel().getSelected().set('packName',r.get('packName'));}}})},
	{header:C_GW,dataIndex:'cocaGrossWeight',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},	
	{header:C_CBM,dataIndex:'cocaMeasurement',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})}
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
						if(this.cargoGrid.getStore().findBy(function(rec,id){return rec.get('cargId')==a[i].get('cargId')})==-1){
							var rid=GGUID();
							var t = new FContainerCargo({id:rid,cocaId:rid,contId:r.get('contId'),
								consId:p.get('consId'),consNo:p.get('consNo'),cargId:a[i].get('cargId'),
								consMblNo:p.get('consMblNo'),consHbl:p.get('consHbl'),consCustName:'',
								cocaMarks:a[i].get('cargMarks'),cocaCargoName:a[i].get('cargNameEn'),packId:a[i].get('packId'),
								packName:getPACK(a[i].get('packId')),cocaPackageNum:a[i].get('cargPackageNum'),
								cocaGrossWeight:a[i].get('cargGrossWeight'),cocaMeasurement:a[i].get('cargMeasurement'),
								compCode:'',verson:0});
							this.cargoStore.add(t);t.set('rowAction','N');
							this.cargoGrid.getStore().add(t);								
							if(a[i].get('cargReeterFlag')) r.set('cargTemperature',a[i].get('cargTemperature'));
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
	this.cargoGrid = new Ext.grid.EditorGridPanel({title:C_CONT_SHIP_LIST,border:true,autoScroll:true,sm:sm2,cm:cm2,
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
		var c = new FContainer({id:rid,contId:rid,consId:p.get('consId'),consNo:p.get('consNo'),contPreFlag:'N',contPartOfFlag:'N',
		consMblNo:p.get('consMblNo'),consHblNo:p.get('consHblNo'),contMConsId:p.get('consId'),contNum:1,
		contVessel:p.get('vessName'),contVoyage:p.get('voyaName'),contPol:p.get('consPolEn'),contPod:p.get('consPodEn'),contDeliveryPlace:p.get('consDeliveryPlace'),
		contMConsNo:p.get('consNo'),contMMblNo:p.get('consMblNo'),contHBlNo:p.get('consHblNo'),
		contNo:'',contSealNo:'',cotyId:'',contFl:'FCL',packId:'',contPackageNum:'',
		contCargoNameEn:'',contGrossWeight:'',contMeasurement:'',contSocFlag:'0',contLoadDate:new Date(),
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
			var xml = ATX(a,'FContainer',FContainer);
		}
		var cc=getDirty(this.cargoStore);
		if(cc.length>0){var x = ATX(cc,'FContainerCargo',FContainerCargo);xml=xml+x;};		
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONT_S'},
			success: function(res){				
				var a = XTRA(res.responseXML,'FContainerCargo',FContainerCargo);FOSU(this.cargoStore,a,FContainerCargo);
				var b = XTRA(res.responseXML,'FContainer',FContainer);FOSU(this.store,b,FContainer);
				XMG.alert(SYS,M_S);
			},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
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
	items: [{layout:'fit',region:'north',height:200,border:false,items:this.grid},
		{layout:'fit',region:'center',border:false,items:this.cargoGrid}]});
};
Ext.extend(Fos.ContainerTab, Ext.FormPanel);

Fos.SecondShipTab = function(p) {		
	this.sel = GSEL;
	this.store = GS('SESH_Q','FSecondShip',FSecondShip,'seshId','DESC','','','id',false);
	if(p.get('rowAction')!='N') this.store.load({params:{consId:p.get('consId')}});
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('id')){
				this.sel=record.get('id');this.getForm().reset();this.getForm().loadRecord(record);}},
		rowdeselect:function(sm,row,record){
			if(this.getForm().isDirty()){record.beginEdit();this.getForm().updateRecord(record);record.endEdit();}
		}
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_BL_NO,dataIndex:'seshBlNo'},
	{header:C_SECOND_CARRIER,dataIndex:'seshCarrier',width:40},
	{header:C_SECOND_VESS,dataIndex:'seshVessel'},
	{header:C_SECOND_VOYA,dataIndex:'seshVoyage'},
	{header:C_POT,dataIndex:'seshPot'},
	{header:C_ETA,dataIndex:'seshEta',renderer:formatDate},
	{header:C_ETD,dataIndex:'seshEtd',renderer:formatDate}
	],defaults:{sortable:true,width:80}});
	this.grid = new Ext.grid.GridPanel({title:C_SECOND_SHIP_LIST,border:true,autoScroll:true,height:150,store:this.store,sm:sm,cm:cm});
	this.addSesh = function(){
		var r = new FSecondShip({id:GGUID(),seshId:'0',consId:p.get('consId'),consNo:p.get('consNo'),seshPot:p.get('consPotEn'),rowAction:'N'});
		this.store.insert(0,r);
		this.grid.getSelectionModel().selectFirstRow();
	};	
	this.removeSesh = function(){
		var b =this.grid.getSelectionModel().getSelected();
		if(b){b.set('rowAction',b.get('rowAction')=='N'?'D':'R');this.store.remove(b);}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.save = function(){
		this.grid.stopEditing();
		var b =this.grid.getSelectionModel().getSelected();
		if(b){b.beginEdit();this.getForm().updateRecord(b);b.endEdit();}		
		var a =this.store.getModifiedRecords();
		if(a.length){var xml = ATX(a,'FSecondShip',FSecondShip);};
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'SESH_S'},
			success: function(res){var a = XTRA(res.responseXML,'FSecondShip',FSecondShip);FOSU(this.store,a,FSecondShip);XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
		}
	};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_SESH;
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nrs',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_SESH_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addSesh();break;
					case Ext.EventObject.R:
						if(!NR(m+F_R)) this.removeSesh();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	Fos.SecondShipTab.superclass.constructor.call(this, { 
	id:'T_SESH_'+p.get('id'),title:C_SECOND_SHIP+'(F11)',header:false,deferredRender:false,autoScroll:true,	
	labelAlign:'right',labelWidth:80,bodyStyle:'padding:0px 0px 0px',border:true,trackResetOnLoad:true,
	tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.addSesh},'-',
			{text:C_REMOVE+'(R)',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeSesh},'-',
			{text:C_SAVE+'(S)',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save}],
	items: [{layout:'fit',border:false,items:[this.grid]},
            {layout:'column',title:C_SECOND_SHIP_INFO,layoutConfig: {columns:4},items:[
            {columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_BL_NO,name:'seshBlNo',tabIndex:1,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_POT_AGENCY,name:'seshPotAgency',tabIndex:5,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_TRANS_NO,name:'seshTransNo',tabIndex:9,xtype:'textfield',anchor:'90%'}]},
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_SECOND_CARRIER,name:'seshCarrier',tabIndex:2,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_POT,name:'seshPot',tabIndex:6,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_CUSTOM_SNO,name:'seshSealNo',tabIndex:10,xtype:'textfield',anchor:'90%'}]},
			{columnWidth:.25,layout:'form',border : false,items:[
            	{fieldLabel:C_SECOND_VESS,name:'seshVessel',tabIndex:3,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_ETA,name:'seshEta',tabIndex:7,xtype:'datefield',format:DATEF,anchor:'90%'}]},
			{columnWidth:.25,layout:'form',border : false,items:[
                {fieldLabel:C_SECOND_VOYA,name:'seshVoyage',tabIndex:4,xtype:'textfield',anchor:'90%'},
                 {fieldLabel:C_ETD,name:'seshEtd',tabIndex:8,xtype:'datefield',format:DATEF,anchor:'90%'}]},
            {columnWidth:.5,layout:'form',border : false,items:[
                {fieldLabel:C_REMARKS,name:'seshRemarks',tabIndex:11,xtype:'textfield',anchor:'90%'}]}
			]}
		]
	});
};
Ext.extend(Fos.SecondShipTab, Ext.FormPanel);

Fos.BBookingTab = function(p) {
    this.save=function(){
    	var f = FConsign.prototype.fields;
		for (var i = 0; i < f.keys.length; i++) {
   			var fn = ''+f.keys[i];
   			var fc = this.find('name',fn);
   			if(fc!=undefined&&fc.length>0){p.set(fn,fc[0].getValue());}
		}
		if(p.get('consStatusBBook')==0) p.set('consStatusBBook','1');
		var xml = RTX(p,'FConsign',FConsign);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
			success: function(r){
				var c = XTR(r.responseXML,'FConsign',FConsign);
				p.set('version',c.get('version'));
				this.updateToolBar('1');
				XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)
		});
    };
    this.cancel=function(){this.updateStatus('4');};
    this.renew=function(){this.updateStatus('1');};
    this.check=function(){this.updateStatus('5');};
    this.exit=function(){this.updateStatus('6');};
    this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatus:s},
		success: function(r){p.set('consStatusBBook',s);this.updateToolBar(s);XMG.alert(SYS,M_S);},
		failure: function(r){XMG.alert(SYS,M_F+r.responseText)}});
    };
    this.updateToolBar = function(s){  
		var tb=this.getTopToolbar();
		tb.getComponent('TB_S').setDisabled(s>'5');
    	tb.getComponent('TB_C').setDisabled(s>='4');
    	tb.getComponent('TB_F').setDisabled(s!='1');
    	tb.getComponent('TB_N').setDisabled(s!='4');
    	tb.getComponent('TB_Q').setDisabled(s!='5');
    	tb.getComponent('TB_M').setText(C_STATUS_C+getBOST(s));
    };
    this.expExcel=function(){EXPC('BBOOK','&consId='+p.get('consId'));};
	this.expEmail=function(){
		var to='';
		var cc='';
		var sub=C_B_BOOKING_DOC;
		var msg='';
		EXPM(to,cc,sub,msg,'BBOOK','consId='+p.get('consId'));
	};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_BBOOK;
	new Ext.KeyMap(Ext.getDoc(), {
		key:'sfrqte',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_BBOOK_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					case Ext.EventObject.F:
						if(!NR(m+F_R)) this.cancel();break;
					case Ext.EventObject.R:
						if(!NR(m+F_M)) this.renew();break;
					case Ext.EventObject.Q:
						if(!NR(m+F_M)) this.check();break;
					case Ext.EventObject.T:
						if(!NR(m+F_M)) this.exit();break;
					case Ext.EventObject.E:
						if(!NR(m+F_M)) this.expExcel();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	Fos.BBookingTab.superclass.constructor.call(this, { 
	id:'T_BBOOK_'+p.get('id'),title:C_SR_BBOOK+'(F10)',header:false,deferredRender:false,autoScroll:true,
	labelAlign:'right',labelWidth:70,bodyStyle:'padding:0px 0px 0px',border:false,width:800,
	tbar:[{text:C_SAVE+'(S)',itemId:'TB_S',iconCls:'save',disabled:NR(m+F_M)||p.get('consStatusBBook')>'4',scope:this,handler:this.save},'-',
			{text:C_BOOK_FAILED+'(F)',itemId:'TB_F',iconCls:'cancel',disabled:NR(m+F_M)||p.get('consStatusBBook')!='1',scope:this,handler:this.cancel},'-',
			{text:C_BOOK_RENEW+'(R)',itemId:'TB_N',iconCls:'renew',disabled:NR(m+F_M)||p.get('consStatusBBook')!='4',scope:this,handler:this.renew},'-',
			{text:C_BOOK_CONFIRM+'(Q)',itemId:'TB_C',iconCls:'check',disabled:NR(m+F_M)||p.get('consStatusBBook')>='4',scope:this,handler:this.check},'-',
			{text:C_BOOK_EXIT+'(T)',itemId:'TB_Q',iconCls:'exit',disabled:NR(m+F_M)||p.get('consStatusBBook')!='5',scope:this,handler:this.exit},'-',
			{text:C_EXPORT+'(E)',iconCls:'print',disabled:NR(m+F_E),scope:this,
				menu: {items: [
		   		{text:C_B_BOOKING_DOC,menu:{items:[
		   			{text:'Excel',scope:this,handler:this.expExcel},
		   			{text:C_EMAIL,scope:this,handler:this.expEmail},
		   			{text:C_FAX,scope:this,handler:function(){}}]}}]}
		   	},'->',
			{itemId:'TB_M',disabled:true,text:C_STATUS_C+getBOST(p.get('consStatusBBook'))},'-'
			],
	items: [{
            layout:'column',layoutConfig: {columns:4},deferredRender:false,title:C_BASE_INFO,collapsible:true,labelWidth:80,
            items:[{columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_CARRIER,name:'consBCarrier',tabIndex:1,value:p.get('consBCarrier'),store:getCS(),enableKeyEvents:true,
                	tpl:custTpl,itemSelector:'div.list-item',listWidth:250,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                	listeners:{scope:this,
                		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consBCarrierId','');p.set('consBCarrier','');}},
                		select:function(c,r,i){p.set('consBCarrierId',r.get('custId'));},
						keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:BF}}},
                {fieldLabel:C_COUNTRY_D,name:'consBCountryD',disabled:true,tabIndex:5,value:p.get('consBCountryD'),store:getCOUN_S(),xtype:'combo',displayField:'counNameEn',valueField:'counCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
                {fieldLabel:C_ETD,name:'consBEtd',tabIndex:9,value:p.get('consBEtd'),xtype:'datefield',format:DATEF,anchor:'95%'},
                {fieldLabel:C_BOOKING_NO,name:'consBBookingNo',tabIndex:13,value:p.get('consBBookingNo'),xtype:'textfield',anchor:'95%'}
                ]
            },
            {columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_VESS,name:'consBVessel',tabIndex:2,value:p.get('consBVessel'),store:getVES(),enableKeyEvents:true,
                	xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                	listeners:{scope:this,
                	blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consBVesselId','');p.set('consBVessel','');}},
                	select:function(c,r,i){p.set('consBVesselId',r.get('vessId'));},
					keydown:{fn:function(f,e){LV(f,e);},buffer:BF}}},
        		{fieldLabel:C_POD,itemCls:'required',tabIndex:6,name:'consBPodEn',value:p.get('consBPodEn'),store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%',
					tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
					listeners:{scope:this,
						blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consBPod','');}},
			        	select:function(c,r,i){p.set('consBPod',r.get('portId'));this.find('name','consBCountryD')[0].setValue(r.get('counCode'));},			            	
			         	keydown:{fn:LP,buffer:BF}}},
     			{fieldLabel:C_ETA,name:'consBEta',value:p.get('consBEta'),tabIndex:10,xtype:'datefield',format:DATEF,anchor:'95%'},
     			{fieldLabel:C_BOOKING_DATE,name:'consBBookingDate',tabIndex:11,value:p.get('consStatusBBook')==0?(new Date()):p.get('consBBookingDate'),xtype:'datefield',format:DATEF,anchor:'95%'}]
            },            
            {columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_VOYA,tabIndex:3,name:'consBVoyage',value:p.get('consBVoyage'),xtype:'textfield',anchor:'95%',
                		listeners:{scope:this,select:function(c,r,i){p.set('consBVoyage',r.get('voyaName'));}}},                
                {fieldLabel:C_POT,name:'consBPotEn',tabIndex:7,value:p.get('consBPotEn'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_BHK_FLAG,tabIndex:11,name:'consBHkFlag',checked:p.get('consBHkFlag'),xtype:'checkbox',anchor:'50%'},
                {fieldLabel:C_REMARKS,name:'consBRemarks',tabIndex:12,value:p.get('consBRemarks'),xtype:'textfield',anchor:'95%'}
 				]
            },
            {columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_POL,name:'consBPol',tabIndex:4,value:p.get('consBPol'),
                	store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead:true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
                	listeners:{scope:this,select:function(c,r,i){p.set('consBPolEn',r.get('portNameEn'));}}},
                {fieldLabel:C_DISCHARGE_HARBOUR,name:'consBHarbour',tabIndex:8,value:p.get('consBHarbour'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_BINTERNATIONAL_FLAG,tabIndex:12,name:'consBInternationalFlag',checked:p.get('consBInternationalFlag'),xtype:'checkbox',anchor:'50%'}]
            }]
       },{
            layout:'column',layoutConfig: {columns:4},deferredRender:false,labelWidth : 40,labelAlign: 'top',title:C_SHIPPER_INFO,collapsible:true,
            items:[{columnWidth:.5,layout:'form',border:false,
                items: [{fieldLabel:C_SHIPPER,name:'consBShipper',tabIndex:17,value:p.get('consBShipper'),xtype:'textarea',height:100,anchor:'95%'}]},
                {columnWidth:.5,layout:'form',border:false,
                items:[{fieldLabel:C_CONSIGNEE,name:'consBConsignee',tabIndex:18,value:p.get('consBConsignee'),xtype:'textarea',height:100,anchor:'95%'}]}
                ]
		},{
            layout:'column',layoutConfig: {columns:6},deferredRender:false,labelWidth:80,height:300,labelAlign: 'top',title:C_CARGO_INFO,collapsible:true,
            items:[{columnWidth:.3,layout: 'form',border : false,
                items: [{fieldLabel:C_MARKS,name:'consCargoMarks',tabIndex:21,value:p.get('consCargoMarks'),xtype:'textarea',height:100,anchor:'95%'}]
              },            
            {columnWidth:.3,layout: 'form',border : false,
                items: [{fieldLabel:C_CARGO_DESC,name:'consCargoDesc',tabIndex:19,value:p.get('consCargoDesc'),xtype:'textarea',height:100,anchor:'95%'}]
            },{columnWidth:.1,layout: 'form',border : false,
                items: [{fieldLabel:C_NUM_PACK,name:'consCargoPackages',tabIndex:20,value:p.get('consCargoPackages'),xtype:'textarea',height:100,anchor:'95%'}]
              },{columnWidth:.1,layout: 'form',border : false,
                items: [{fieldLabel:C_NW,name:'consCargoNetWeight',tabIndex:22,value:p.get('consCargoNetWeight'),xtype:'textarea',height:100,anchor:'95%'}]
              },{columnWidth:.1,layout: 'form',border : false,
                items: [{fieldLabel:C_GW,name:'consCargoGrossWeight',tabIndex:23,value:p.get('consCargoGrossWeight'),xtype:'textarea',height:100,anchor:'95%'}]
              },{columnWidth:.1,layout: 'form',border : false,
                items: [{fieldLabel:C_CBM,name:'consCargoMeasurement',tabIndex:24,value:p.get('consCargoMeasurement'),xtype:'textarea',height:100,anchor:'95%'}]
              },{columnWidth:.60,layout: 'form',border:false,
                items: [{fieldLabel:C_PACKAGES_EN,name:'consTotalPackagesInWord',tabIndex:25,value:p.get('consTotalPackagesInWord'),xtype:'textfield',anchor:'95%'}]
              },{columnWidth:.14,layout: 'form',border:false,
                items: [{fieldLabel:C_SUM_PACK,name:'consTotalPackages',tabIndex:26,value:p.get('consTotalPackages'),xtype:'numberfield',anchor:'95%'}]
              },{columnWidth:.14,layout: 'form',border:false,
                items: [{fieldLabel:C_SUM_GW,name:'consTotalGrossWeight',tabIndex:27,value:p.get('consTotalGrossWeight'),xtype:'numberfield',anchor:'95%'}]
              },{columnWidth:.12,layout: 'form',border:false,
                items: [{fieldLabel:C_SUM_CBM,name:'consTotalMeasurement',tabIndex:28,value:p.get('consTotalMeasurement'),xtype:'numberfield',anchor:'95%'}]
              }]
		}]
	});
};    
Ext.extend(Fos.BBookingTab, Ext.FormPanel);

Fos.RailwayBlTab = function(p) {		
	this.sel = GSEL;
	this.store = GS('RABL_Q','FRailwayBl',FRailwayBl,'rablId','DESC','','','id',false);
	if(p.get('rowAction')!='N') this.store.load({params:{consId:p.get('consId')}});
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('id')){
				this.sel=record.get('id');this.getForm().reset();this.getForm().loadRecord(record);}},
		rowdeselect:function(sm,row,record){
			if(this.getForm().isDirty()){record.beginEdit();this.getForm().updateRecord(record);record.endEdit();}
		}
	};
	var soc=new Ext.grid.CheckColumn({header:C_SOC,dataIndex:'rablSocFlag',width:55});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_RABL_NO,dataIndex:'rablNo'},
	{header:C_CONT_NO,dataIndex:'rablContainerNo',width:40},
	{header:C_PACKAGES,dataIndex:'rablPackages'},
	{header:C_GW,dataIndex:'rablGrossWeight'},
	{header:C_TRAN_DATE,dataIndex:'rablEtd',renderer:formatDate},
	soc],defaults:{sortable:true,width:80}});
	this.grid = new Ext.grid.GridPanel({title:C_RABL_LIST,border:true,autoScroll:true,plugins:[soc],height:150,store:this.store,sm:sm,cm:cm});
	this.addRecord = function(){
		var r = new FRailwayBl({id:GGUID(),rablId:'0',consId:p.get('consId'),consNo:p.get('consNo'),custId:p.get('custId'),custName:p.get('custName')});
		this.store.insert(0,r);r.set('rowAction','N');
		this.grid.getSelectionModel().selectFirstRow();
	};
	this.removeRecord = function(){
		var b =this.grid.getSelectionModel().getSelected();
		if(b){b.set('rowAction',b.get('rowAction')=='N'?'D':'R');this.store.remove(b);}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.save = function(){
		this.grid.stopEditing();
		var b =this.grid.getSelectionModel().getSelected();
		if(b){b.beginEdit();this.getForm().updateRecord(b);b.endEdit();};
		var xml='';
		var a =this.store.getModifiedRecords();
		if(a.length>0){xml = ATX(a,'FRailwayBl',FRailwayBl);};				
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'RABL_S'},
			success: function(res){
				var a = XTRA(res.responseXML,'FRailwayBl',FRailwayBl);FOSU(this.store,a,FRailwayBl);
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
		}
	};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_RABL;
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nrs',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_RABL_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addRecord();break;
					case Ext.EventObject.R:
						if(!NR(m+F_R)) this.removeRecord();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	Fos.RailwayBlTab.superclass.constructor.call(this, { 
	id:'T_RABL_'+p.get('id'),title:C_RABL+'(F12)',header:false,deferredRender:false,autoScroll:true,	
	labelAlign:'right',labelWidth:80,bodyStyle:'padding:0px 0px 0px',border:true,trackResetOnLoad:true,
	tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.addRecord},'-',
			{text:C_REMOVE+'(R)',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeRecord},'-',
			{text:C_SAVE+'(S)',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save}],
	items: [{layout:'fit',border:false,items:[this.grid]},
            {layout:'column',title:C_BASE_INFO,layoutConfig: {columns:4},deferredRender:false,collapsible:true,
			items: [{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_RABL_NO,name:'rablNo',tabIndex:1,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_CONT_NO,name:'rablContainerNo',tabIndex:5,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_SEAL_NO+'1',name:'rablSealNo',tabIndex:9,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_PACKAGES,name:'rablPackages',tabIndex:13,xtype:'numberfield',anchor:'90%'},
				{fieldLabel:C_CONT_WEIGHT,name:'rablContainerWeight',tabIndex:17,xtype:'numberfield',anchor:'90%'},
				{fieldLabel:C_CONT_BACK_PLACE,name:'rablReturnPlace',tabIndex:21,xtype:'textfield',anchor:'90%'}
				]},				
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_CONTRACT_NO,name:'rablContractNo',tabIndex:2,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_COTY,name:'rablContainerType',tabIndex:6,xtype:'combo',displayField:'cotyCode',valueField:'cotyId',triggerAction:'all',
            		mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOTY_S(),anchor:'90%'},
                {fieldLabel:C_SEAL_NO+'2',name:'rablSealNo2',tabIndex:10,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_PACK,name:'packId',tabIndex:14,xtype:'combo',displayField:'packName',valueField:'packId',triggerAction:'all',
            		mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),anchor:'90%'},
            	{fieldLabel:C_INVOICE_PRICE,name:'rablInvoicePrice',tabIndex:18,xtype:'numberfield',anchor:'90%'}
                ]},
			{columnWidth:.25,layout:'form',border : false,items:[
            	{fieldLabel:C_TRAN_DATE,name:'rablEtd',tabIndex:3,xtype:'datefield',format:DATEF,anchor:'90%'},
                {fieldLabel:C_CONT_NO_ORI,name:'rablContainerNoO',tabIndex:7,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_HS_CODE,name:'rablHsCode',tabIndex:11,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_CARGO_WEIGHT,name:'rablGrossWeight',tabIndex:15,xtype:'numberfield',anchor:'90%'},
                {fieldLabel:C_CURR,tabIndex:19,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}
                ]},
			{columnWidth:.25,layout:'form',border : false,items:[
                {fieldLabel:C_BULK_FLAG,name:'rablBulkFlag',tabIndex:4,xtype:'checkbox',anchor:'50%'},
                 {fieldLabel:C_SOC_FLAG,name:'rablSocFlag',tabIndex:8,xtype:'checkbox',anchor:'50%'},
                 {fieldLabel:C_MARKS,name:'rablCargoMarks',tabIndex:12,xtype:'textfield',anchor:'90%'},
                 {fieldLabel:C_CBM,name:'rablMeasurement',tabIndex:16,xtype:'numberfield',anchor:'90%'},
                 {fieldLabel:C_CONT_AGENCY,name:'rablAgencyName',tabIndex:20,xtype:'textfield',anchor:'90%'}
                 ]}
			]},
			{layout:'column',title:C_RABL_INFO,layoutConfig:{columns:3},deferredRender:false,collapsible:true,labelAlign:'top',
			items: [{columnWidth:.33,layout:'form',border : false,items:[
				{fieldLabel:C_SHIPPER,name:'rablShipper',tabIndex:22,xtype:'textarea',anchor:'90%'},
                {fieldLabel:C_SHIPPER_NOTES,name:'rablShipperNotes',tabIndex:25,xtype:'textarea',anchor:'90%'},
				{fieldLabel:C_STATION_T,name:'rablStationT',tabIndex:28,xtype:'textarea',anchor:'90%'},
				{fieldLabel:C_RA_CHARGE_REMARK,name:'rablChargeRemarks',tabIndex:31,xtype:'textarea',anchor:'90%'}
				]},				
			{columnWidth:.33,layout:'form',border : false,items:[
				{fieldLabel:C_CONSIGNEE,name:'rablConsignee',tabIndex:23,xtype:'textarea',anchor:'90%'},
				{fieldLabel:C_RA_NOTES,name:'rablRailwayNotes',tabIndex:26,xtype:'textarea',anchor:'90%'},
                {fieldLabel:C_STATION_D,name:'rablStationD',tabIndex:29,xtype:'textarea',anchor:'90%'},
            	{fieldLabel:C_CARGO_NAME_EN,name:'rablCargoNameEn',tabIndex:32,xtype:'textarea',anchor:'90%'}
                ]},
			{columnWidth:.34,layout:'form',border : false,items:[
            	{fieldLabel:C_NOTIFIER,name:'rablNotifyParty',tabIndex:24,xtype:'textarea',anchor:'90%'},
                {fieldLabel:C_DELIVERY_STATION,name:'rablDeliveryPlace',tabIndex:27,xtype:'textarea',anchor:'90%'},
                {fieldLabel:C_CONT_DESC,name:'rablContainerDesc',tabIndex:30,xtype:'textarea',anchor:'90%'},
                {fieldLabel:C_CARGO_NAME_CN,name:'rablCargoNameCn',tabIndex:33,xtype:'textarea',anchor:'90%'}
                ]}
			]}
		]
	});
};
Ext.extend(Fos.RailwayBlTab,Ext.FormPanel);