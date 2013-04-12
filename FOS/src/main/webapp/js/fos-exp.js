Fos.newConsign = function(bc,bt,st){
	var sr='';
	if(bt==BT_G) 
		sr=SR_CUDE; 
	else if(bt==BT_I) 
		sr=SR_INSP;
	var rid=GGUID();
	var c = new FConsign({id:rid,consId:rid,consNotifyParty:'SAME AS CONSIGNEE',
		consNo:VERSION==2?'':('N'+rid),consType:'A',consShipType:st,consActionType:'A',consMasterFlag:1,
		consBizClass:bc,consBizType:bt,consSource:0,consDate:new Date(),tranId:st=='LCL'?CFS:CY,
		consSailDate:bt==BT_G||BT_I?new Date():'',
		consServiceRequired:sr,version:0,consStatus:0,consStatusBooking:0,consStatusClearance:0,
		consStatusSwitchBl:0,consStatusSplit:0,consStatusInsp:0,consStatusCont:0,
		consStatusCarg:0,consStatusMbl:0,consStatusHbl:0,consStatusBBook:0,
		consStatusDepa:0,consStatusDocs:0,consStatusExp:0,consStatusAr:0,consStatusAp:0,
		consStatusInvoR:0,consStatusInvoP:0,consStatusAud:0,consStatusReassign:0,
		consStatusInCy:0,consStatusInCfs:0,consStatusOnBoard:0,consStatusEir:0,
		consStatusSendCont:0,consStatusLock:0,consReassignFrom:0,consStatusSettlement:0,consExternalFlag:0,		
		consTransFlag:0,
		consPartialFlag:0,
		attr1:'',
		consPol:bc==BC_E?getCFG('BASE_PORT'):'',
		consPolEn:bc==BC_E?getCFGD('BASE_PORT'):'',
		//consPol:bc==BC_E?BASE_PORT:'',
		//consPolEn:bc==BC_E?BASE_PORT_NAME:'',
		consPolCn:bc==BC_E?BASE_PORT_NAME_CN:'',
				
		consPod:bc==BC_I?getCFG('BASE_PORT'):'',
		consPodEn:bc==BC_I?getCFGD('BASE_PORT'):'',
		//consPod:bc==BC_I?BASE_PORT:'',				
		//consPodEn:bc==BC_I?BASE_PORT_NAME:'',
		consPodCn:bc==BC_I?BASE_PORT_NAME_CN:'',
		deptId:getCFG('DEFAULT_DEPT_'+bt),consOperatorId:CUSER_ID,consOperatorName:CUSER_NAME,
		consFumigateFlag:0,consQuarantineFlag:0,consTransferringFlag:0,rowAction:'N'});
	return c;
};
Fos.copyConsign = function(p){
	var c = new FConsign({});var rid=GGUID();
	var f = FConsign.prototype.fields;
	for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];c.set(fn,p.get(fn));};
	c.set('consDate',new Date());c.set('consSalesRepName',p.get('consSalesRepName'));
	c.set('consId',rid);c.set('id',rid);c.set('consNo','N'+rid);
	c.set('version',1);c.set('consStatus',0);c.set('consStatusBooking',0);
	c.set('consStatusClearance',0);c.set('consStatusSwitchBl',0);c.set('consStatusSplit',0);
	c.set('consStatusInsp',0);c.set('consStatusCont',0);c.set('consStatusCarg',0);
	c.set('consStatusMbl',0);c.set('consStatusHbl',0);c.set('consStatusBBook',0);
	c.set('consStatusDepa',0);c.set('consStatusDocs',0);c.set('consStatusExp',0);
	c.set('consStatusAud',0);c.set('consStatusAr',0);c.set('consStatusAp',0);
	c.set('consStatusInvoR',0);c.set('consStatusInvoP',0);
	c.set('consStatusReassign',0);c.set('consStatusInCy',0);c.set('consStatusInCfs',0);
	c.set('consStatusOnBoard',0);c.set('consStatusEir',0);c.set('consStatusSendCont',0);
	c.set('consReassignFrom',0);c.set('consStatusLock',0);c.set('consStatusSettlement',0);c.set('rowAction','N');
	c.set('fconId','');c.set('loliId','');c.set('consMasterFlag',p.get('consMasterFlag')==0?0:1);
	c.set('consMasterId',p.get('consMasterFlag')==0?p.get('consMasterId'):'');
	c.set('consMasterNo',p.get('consMasterFlag')==0?p.get('consMasterNo'):'');
	c.set('consMergeFlag',0);c.set('consMergeId','');c.set('consMergeNo','');c.set('rowAction','N');
	//嘉禾提出将货物信息也一起带出
	return c;
};
Fos.showConsign = function(p,listStore){
	var t = T_MAIN.getComponent('C_'+p.get("id"));
	if(t){
		T_MAIN.setActiveTab(t);
	} 
	else if(VERSION==1||VERSION==0){
		t = new Fos.ConsignTab(p,listStore);
		T_MAIN.add(t);
		T_MAIN.setActiveTab(t);
	}
	else if(VERSION==2){
		t = new Fos.YsConsignTab(p,listStore);
		T_MAIN.add(t);
		T_MAIN.setActiveTab(t);
	}
};
Fos.showConsignTabs = function(p){
	var tc = T_MAIN.getComponent('C_'+p.get("id"));
	if(p.get('rowAction')!='N'){
		if(!tc.getComponent('T_DOC_'+p.get('id'))){
			tc.add(new Fos.ConsDocGrid(p));
		};
		if(!tc.getComponent('T_EXPE_'+p.get('id'))){
			tc.add(VERSION==0?(new Fos.ExpenseTab(p,'C')):(new Fos.ExpenseTab2(p,'C')));
		};
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
	var store = new Ext.data.GroupingStore({url:SERVICE_URL+'?A=CONS_X',baseParams:{mt:'xml'},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'FConsign',idProperty:'consId'},FConsign),
		remoteSort:true,autoLoad:false,
		sortInfo:{field:((bizClass==BC_E&&shipType==ST_L)||bizType==BT_B)?'consMasterNo':'consDate', direction:'DESC'}
	});		
	var queryParams=[];
	queryParams[queryParams.length]= new QParam({key:'consBizClass',value:bizClass,op:EQ});
	queryParams[queryParams.length]= new QParam({key:'consBizType',value:bizType,op:EQ});
	queryParams[queryParams.length]= new QParam({key:'consExternalFlag',value:external?external:'0',op:EQ});
	queryParams[queryParams.length]= new QParam({key:'consStatus',value:7,op:2});
	
	if(shipType!='') 
		queryParams[queryParams.length]=new QParam({key:'consShipType',value:shipType,op:EQ});
	var bp={mt:'xml',xml:FOSX(QTX(queryParams))};
	store.baseParams=bp;
    store.load({params:{start:0,limit:C_PS}});
	
    this.reset=function(){
    	store.baseParams=bp;
    	store.reload({params:{start:0,limit:C_PS}});
    };
    
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true});	
	var c1=new Ext.grid.RowNumberer();
	var c2={header:'',dataIndex:'consStatusLock',menuDisabled:true,fixed:true,width:25,renderer:function(v){
               if(v==1) return '<div class="locked"></div>'; else return '';
         }};
    var c3={header:C_M_CONS,width:30,hidden:shipType!=ST_L,dataIndex:"consMasterFlag",renderer:boolRender};
    var c4={header:C_STATUS,width:100,dataIndex:"consStatus",renderer:getCONS_STATUS};
    var c5={header:C_CONS_NO,width:150,dataIndex:"consNo"};
    var c6={header:bizType==BT_B?C_CHARTER:C_BOOKER,width:200,dataIndex:"custName"};
    var c7={header:C_CONS_DATE,width:80,dataIndex:"consDate",renderer:formatDate};
    var c8={header:C_TTER,dataIndex:"tranId",width:80,renderer:getTRAN};
    var c9={header:C_PATE,dataIndex:"pateId",width:80,renderer:getPATE};
    var c10={header:C_SHIP_TYPE,dataIndex:"consShipType",width:80};
    var c11={header:C_VESS,hidden:bizType==BT_A,width:100,dataIndex:"vessName"};
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
    var c22={header:C_CONT_NUM,width:80,dataIndex:"consTotalContainers",align:'right',renderer:function(v){return (v)?v:0;},css:'font-weight:bold;'};
    var c23={header:C_POT,dataIndex:"consPotEn"};
    var c24={header:C_CARRIER,dataIndex:"consCarrierName"};
    var c25={header:C_BOOK_AGENCY,dataIndex:"consBookingAgencyName"};
    var c26={header:C_M_CONS_NO,width:150,dataIndex:"consMasterNo"};
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
    
    var cm=new Ext.grid.ColumnModel({columns:
    	bizType==BT_B?[c1,c2,c3,c26,c4,c5,c28,c35,c6,c29,c7,c8,c9,c10,c11,c12,c13,c36,c14,c15,
    	               c16,c17,c18,c19,c20,c30,c31,c32,c33,c34,c23,c24,c25,c27]:
    	            [c1,c2,c3,c4,c26,c35,c5,c6,c7,c8,c9,c10,c11,c12,c13,c36,c14,c15,
    	            	c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c27,c28],
		defaults: {sortable: true}});
    
	this.addConsign = function(){
		var c=sm.getSelected();
		if(c.get('consMasterFlag')=='1'){
			var b=Fos.copyConsign(c);
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
			Fos.showConsign(b);
		}
		else XMG.alert(SYS,M_SEL_M_CONS);
	};
	this.newConsign = function(){
		var c=Fos.newConsign(bizClass,bizType,shipType);
		c.set('consExternalFlag',external?external:'0');
		Fos.showConsign(c);
	};
	this.editConsign = function(){
		var b=sm.getSelected();
		if(b) Fos.showConsign(b); 
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.task = function(){
		var b=sm.getSelected();
		if(b){
			var w=new Fos.TaskWin(b);w.show();
		}
		else 
			XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	this.removeConsign = function(){
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var xml = SMTX4RM(sm,'FConsign','consId','consMasterId');
           		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
				success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
				failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
				xmlData:FOSX(xml)});
           }});
		}
       	else XMG.alert(SYS,M_R_P);
    };
    
    setQueryParams=function(a){
    	queryParams = a;
    };
    
	this.search = function(){
		var w=new Fos.ConsLookupWin(bizClass,bizType,shipType,'CONS_X',store,setQueryParams);
		w.show();
	};
	
	var rowCtxEvents = {
		rowdblclick: function(grid, rowIndex, event){
			var c=grid.getSelectionModel().getSelected();if(c){Fos.showConsign(c);}},
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
	
	var kw = new Ext.form.TextField({listeners:{scope:this,
		specialkey:function(c,e){
			if(e.getKey()==Ext.EventObject.ENTER) 
				this.fastSearch();
			}
		}
	});
	this.fastSearch=function(){
		var consNo=kw.getValue();
		if(!consNo){
			XMG.alert(SYS,M_INPUT_BIZ_NO,function(b){kw.focus();});
			return;
		};
		
     	var a=[];
     	a[a.length]= new QParam({key:'consBizClass',value:bizClass,op:EQ});
    	a[a.length]= new QParam({key:'consBizType',value:bizType,op:EQ});
    	a[a.length]= new QParam({key:'consExternalFlag',value:external?external:'0',op:EQ});
    	if(shipType!='') a[a.length]=new QParam({key:'consShipType',value:shipType,op:EQ});
    	var c=consNo.indexOf(',');
		var b=consNo.indexOf('..');
     	if(c>=0){
			a[a.length]=new QParam({key:'consNo',value:consNo,op:IN});
		}
		else if(b>=0){
			var ra=consNo.split('..');
			a[a.length]=new QParam({key:'consNo',value:ra[0],op:GE});
			a[a.length]=new QParam({key:'consNo',value:ra[1],op:LE});
		}
		else
 			a[a.length]=new QParam({key:'consNo',value:consNo,op:LI});
     	queryParams = a;
    	store.baseParams={mt:'xml',xml:FOSX(QTX(a))};     	
     	store.reload({params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);
     		}});
	};
	this.exp=function(){
		if(queryParams.length>0){
			var a = queryParams;
			var qa = [];
			for(var i=0;i<a.length;i++){
				qa[i] = {key:a[i].get('key'),op:a[i].get('op'),value:a[i].get('value')};
			}
			EXPC('CONS_LIST','&mt=JSON&xml='+Ext.util.JSON.encode(FOSJ(QTJ(qa))));
		}
		else{
			EXPC('CONS_LIST','&mt=JSON&start=0&limit=500');
		}
	};
  	
  	var title=getBC(bizClass);
  	if(bizType!='C')
  		title+=getBT(bizType);
  	if(bizClass==BC_I&&shipType=='LCL') 
  		title+=C_SWITCH; 
  	else 
  		title+=getSHTY(shipType);
  	
  	title+=C_CONS_LIST;
  	
	var m=getRM(bizClass,bizType,shipType)+M3_CONS;
	var b1={text:C_ADD+'(N)',disabled:NR(m+F_M)||(VERSION==0&&bizType==BT_B&&NR(m+F_CM))
			||(bizType==BT_C&&shipType==''),
			iconCls:'add',handler:this.newConsign};
	var b2={text:C_CONSOLIDATE+'(P)',disabled:NR(m+F_M),iconCls:'add',handler:this.addConsign};
	var b3={text:C_EDIT+'(M)',disabled:NR(m+F_V),iconCls:'option',handler:this.editConsign};
	var b4={text:C_REMOVE+'(D)',disabled:NR(m+F_R),iconCls:'remove',handler:this.removeConsign};
	var b5={text:C_SEARCH+'(F)',iconCls:'search',handler:this.search};	
	var b6={text:C_EXPORT+'(E)',disabled:NR(m+F_E),iconCls:'print',handler:this.exp};	
	var b7={text:C_FAST_SEARCH+'(Q)',iconCls:'search',handler:this.fastSearch};	
	var b8={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
	var b9={text:C_TASK+'(T)',iconCls:'task',handler:this.task};
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nmdfeq',alt:true,
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
		stopEvent: false,scope:this
	});
	new Ext.KeyMap(Ext.getDoc(), {key:[116],alt:true,
        handler: function(k, e) {
            var t = T_MAIN.getComponent('G_CONS_'+bizClass+'_'+bizType+(shipType==''?'':'_'+shipType)+(external?'_'+external:''));
            if(t&&t==T_MAIN.getActiveTab()){
            	switch(k) {
            		case Ext.EventObject.F5:this.reset();
            		break;
            	}
            }
        },stopEvent: false,scope:this
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
    var tbs=[b1, '-',b3,'-',b4,'-',b5,'-',b6,'-',kw,b7,'-',b8,'-',b9,'-'];
    
    if(bizType==BT_B) 
    	tbs=[b1, '-',b3,'-',b4,'-',b5,'-',b6,'-',kw,b7,'-',b8,'-',b9,'-'];
    else if (bizType==BT_C&&bizClass==BC_E)
    	tbs=[b1, '-',b2,'-',b3,'-',b4,'-',b5,'-',b6,'-',kw,b7,'-',b8,'-',b9,'-'];
    
	Fos.ConsignGrid.superclass.constructor.call(this, {
    id:'G_CONS_'+bizClass+'_'+bizType+(shipType==''?'':'_'+shipType)+(external?'_'+external:''),iconCls:'grid',
    store: store,title:title,header:false,loadMask:true,
	sm:sm,cm:cm,stripeRows:true,closable:true,ddGroup:'consGridDDGroup',enableDragDrop:shipType=='LCL'?true:false,	
	listeners:rowCtxEvents,
	view:new Ext.grid.GroupingView(groupViewCfg),
	tbar:tbs,bbar:PTB(store,C_PS)});    
};
Ext.extend(Fos.ConsignGrid, Ext.grid.GridPanel);

Fos.ConsignTab = function(p){
	var items=[];
	items[0]=new Fos.BookTab(p);
	if(p.get('rowAction')!='N'){
		items[items.length] = new Fos.ConsDocGrid(p);
		items[items.length] = VERSION==0?(new Fos.ExpenseTab(p,'C')):(new Fos.ExpenseTab2(p,'C'));
		items[items.length] = new Fos.AttachTab(p);
		items[items.length] = new Fos.TaskPanel(p);
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
		alt:true,
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
		stopEvent: false
	});
	var status={itemId:'TB_M',disabled:true,text:C_STATUS+'：'+(p.get('consBizClass')==BC_I?getCIST(p.get('consStatus')):getCOST(p.get('consStatus')))};
	var title=getBT(p.get('consBizType'));title+=getBC(p.get('consBizClass'));
	if(p.get('consBizType')==BT_C){
	   if(p.get('consBizClass')==BC_I&&p.get('consShipType')=='LCL') title+=C_SWITCH; 
	   else title+=getSHTY(p.get('consShipType'));
	}
	title+=C_CONSIGN+'-'+p.get("consNo");
	Fos.ConsignTab.superclass.constructor.call(this,{id:"C_" + p.get("id"),items:items,
	title:title,iconCls:'class',deferredRender:false,closable:true,activeTab:0,bbar:[getMB(p),'->',status],
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
			this.cont_s.load({params:{consId:p.get('consId'),
				contPreFlag:p.get('consBizClass')==BC_I?'N':'Y'}});
			if(p.get('consBizClass')==BC_I)
				this.hbl_s.load({params:{consId:p.get('consId'),blType:'H/BL'}});
		}
	};    
    this.save = function(){    	
    	var tb=this.getTopToolbar();
    	if(this.find('name','custName')[0].getValue()==''){
			XMG.alert(SYS,M_CUST_REQIRED,function(){this.find('name','custName')[0].focus();},this);return;};
		if(!p.get('custId')){
			XMG.alert(SYS,M_CUST_MUST_PREDEFINED);return;};
		if(this.find('name','deptId')[0].getValue()==''){
			XMG.alert(SYS,M_DEPT_REQIRED,function(){this.find('name','deptId')[0].focus();},this);return;};	
		if(this.find('name','consSalesRepId')[0].getValue()==''){
			XMG.alert(SYS,M_SALES_REQIRED,function(){this.find('name','consSalesRepId')[0].focus();},this);return;};
		if(this.find('name','consOperatorId')[0].getValue()==''){
			XMG.alert(SYS,M_OPERATOR_REQIRED,function(){this.find('name','consOperatorId')[0].focus();},this);return;};
		
		if(p.get('consBizType')==BT_A || p.get('consBizType')==BT_B ||p.get('consBizType')==BT_C){
			if(this.find('name','consPolEn')[0].getValue()==''){
				XMG.alert(SYS,M_POD_REQIRED,function(){this.find('name','consPodEn')[0].focus();},this);return;};
			if(this.find('name','consPodEn')[0].getValue()==''){
				XMG.alert(SYS,M_POD_REQIRED,function(){this.find('name','consPodEn')[0].focus();},this);return;};
			if(p.get('consBizClass')==BC_E&&this.find('name','consEtd')[0].getValue()==''){
				XMG.alert(SYS,M_ETD_REQIRED,function(){this.find('name','consEtd')[0].focus();},this);return;};
			if(p.get('consBizClass')==BC_I && this.find('name','consEta')[0].getValue()==''){
				XMG.alert(SYS,M_ETA_REQIRED,function(){this.find('name','consEta')[0].focus();},this);return;};
		}
			
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
	   	 		var tc=0;var cif='';var tn=0;	   	 		
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
	   	 		p.set('consTotalContainers',tc);
	   	 		p.set('consContainersInfo',cif);
	   	 		p.set('consContainersTeu',tn);
	   	 	}
   	 	}
   	 	
   	 	p.set('consCargoPackages',''+p.get('consTotalPackages')+p.get('packName'));
 		p.set('consCargoNetWeight',''+p.get('consTotalNetWeight')+(p.get('consBizType')==BT_C?'KGS':'MT'));
 		p.set('consCargoGrossWeight',''+p.get('consTotalGrossWeight')+(p.get('consBizType')==BT_C?'KGS':'MT'));
 		p.set('consCargoMeasurement',''+p.get('consTotalMeasurement')+'CBM');
   	 	var xml = RTX(p,'FConsign',FConsign);
   	 	if(p.get('consBizType')==BT_C){
			var c =this.cont_s.getModifiedRecords();
			if(c.length>0){
				var x = ATX(c,'FContainer',FContainer);
				xml=xml+x;
			};
			if(p.get('consBizClass')==BC_I){
				var cc =this.hbl_s.getModifiedRecords();
				if(cc.length>0){
					var x = ATX(cc,'FBl',FBl);xml=xml+x;
				};
			}
		}
   	 	
   	 	var cargos =this.carg_s.getModifiedRecords();
		if(cargos.length>0){
			var x = ATX(cargos,'FCargo',FCargo);
			xml=xml+x;
		};
		tb.getComponent('TB_A').setDisabled(true);
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
					
					var mn = this.find('name','consMasterNo');
					if(mn && mn.length>0){
						masterNo = mn[0];
						masterNo.setValue(p.get('consMasterNo'));
					}
					p.set('rowAction','M');
				}
				p.endEdit();
				if(p.get('consBizType')==BT_A || p.get('consBizType')==BT_B || p.get('consBizType')==BT_C){
					var a = XTRA(res.responseXML,'FCargo',FCargo);
					FOSU(this.carg_s,a,FCargo);
				}
				if(p.get('consBizType')==BT_C){
					var b = XTRA(res.responseXML,'FContainer',FContainer);
					FOSU(this.cont_s,b,FContainer);
				}				
				if(p.get('consBizType')==BT_C&&p.get('consBizClass')==BC_I){
					var c = XTRA(res.responseXML,'FBl',FBl);
					FOSU(this.hbl_s,c,FBl);
				}
				XMG.alert(SYS,M_S);
				Fos.showConsignTabs(p);
				tb.getComponent('TB_A').setDisabled(false);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);tb.getComponent('TB_A').setDisabled(false);},
			xmlData:FOSX(xml)
		});
    };    
    
    var txtConsNo={fieldLabel:C_CONS_NO,style:'{font-weight:bold;color:green;}',readOnly:true,
			tabIndex:1,name:'consNo',value:p.get('consNo'),xtype:'textfield',anchor:'99%'};
	var txtDept={fieldLabel:C_DEPT,itemCls:'required',name:'deptId',value:p.get('deptId'),
			tabIndex:2,store:getGROU_S(),xtype:'combo',displayField:'grouName',valueField:'grouId',
			typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	var txtSales={fieldLabel:C_SALES,itemCls:'required',tabIndex:3,name:'consSalesRepId',value:p.get('consSalesRepId'),
    		store:getSALE_S(),xtype:'combo',displayField:VERSION==1?'userName':'userLoginName',valueField:'userId',
    		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
    		listeners:{scope:this,
    			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consSalesRepId','');p.set('consSalesRepName','');}},
    	    	select:function(c,r,i){p.set('consSalesRepName',r.get('userName'));}}};	
	var txtOperator={fieldLabel:C_OPERATOR,itemCls:'required',tabIndex:4,name:'consOperatorId',value:p.get('consOperatorId'),
    		store:getOP_S(),xtype:'combo',displayField:VERSION==1?'userName':'userLoginName',valueField:'userId',
    		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
    		listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consOperatorId','');p.set('consOperatorName','');}},
    	select:function(c,r,i){p.set('consOperatorName',r.get('userName'));}}};
	
	var txtCust={fieldLabel:p.get('consBizType')==BT_B?C_CHARTER:C_BOOKER,itemCls:'required',
    		tabIndex:5,name:'custName',value:p.get('custName'),store:getCS(),enableKeyEvents:true,
       		xtype:'combo',displayField:'custCode',valueField:'custCode',typeAhead:true,
       		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
       		triggerAction:'all',selectOnFocus:true,anchor:'99%',
         	listeners:{scope:this,
         	blur:function(f){
         		if(f.getRawValue()==''){
         			f.clearValue();
         			p.set('custId','');
         			p.set('custName','');
         			p.set('consSalesRepId','');
         		}
         	},
         	select:function(c,r,i){
				this.find('name','custContact')[0].setValue(r.get('custContact'));
				this.find('name','custTel')[0].setValue(r.get('custTel'));
				this.find('name','custFax')[0].setValue(r.get('custFax'));
				this.find('name','custSalesName')[0].store.reload({params:{custId:r.get('custId')}});
				if(r.get('custSalesName')!=""){
					this.find('name','consSalesRepId')[0].setValue(r.get('custSalesId'));
				}
				p.set('custId',r.get('custId'));
				p.set('custSname',r.get('custCode'));
				p.set('custName',r.get('custNameCn'));
				p.set('consSalesRepId',r.get('custSalesId'));
				c.setValue(r.get('custNameCn'));
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
    var txtCustContact={fieldLabel:C_CONTACT,tabIndex:6,name:'custContact',value:p.get('custContact'),
    		xtype:'textfield',anchor:'99%'};
    var txtCustTel={fieldLabel:C_PHONE,tabIndex:7,name:'custTel',value:p.get('custTel'),xtype:'textfield',anchor:'99%'};
    var txtCustFax={xtype:'textfield',tabIndex:8,fieldLabel:C_FAX,name:'custFax',value:p.get('custFax'),anchor:'99%'};
    
    var txtConsDate={fieldLabel:C_CONS_DATE,tabIndex:9,name:'consDate',value:p.get('consDate'),
    		xtype:'datefield',format:DATEF,anchor:'99%'};
    var txtCustSales={fieldLabel:C_CUST_SALES,name:'custSalesName',value:p.get('custSalesName'),
			tabIndex:10,store:getCUCOS(),xtype:'combo',displayField:'cucoName',valueField:'cucoName',
			typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
    var txtRefNo={fieldLabel:C_REF_NO,tabIndex:11,name:'consRefNo',value:p.get('consRefNo'),xtype:'textfield',anchor:'99%'};    
	var txtContractNo={fieldLabel:C_CONTRACT_NO,tabIndex:12,name:'consContractNo',
			value:p.get('consContractNo'),xtype:'textfield',anchor:'99%'};
	
	var txtCargoSource={fieldLabel:C_CARGO_SOURCE,tabIndex:13,name:'consSource',value:p.get('consSource'),store:SOUR_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'};
    var txtCargoClass={fieldLabel:C_CACL,tabIndex:14,name:'caclId',value:p.get('caclId'),store:getCACL_S(),xtype:'combo',displayField:'caclNameCn',valueField:'caclId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
        	listeners:{scope:this,
    		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('caclId','');}},
        	select:function(c,r,i){p.set('caclName',r.get('caclNameCn'));}}};
    var txtPate={fieldLabel:C_PATE,itemCls:'needed',tabIndex:15,name:'pateId',value:p.get('pateId'),store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
        	listeners:{scope:this,
    		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('pateId','');}},
        	select:function(c,r,i){p.set('pateName',r.get('pateName'));}}};   
    var txtPaidAt={fieldLabel:C_PAID_AT,tabIndex:16,name:'consPaidAt',value:p.get('consPaidAt'),xtype:'textfield',anchor:'99%'};
	
	var txtTranTerm={fieldLabel:C_TTER,itemCls:'needed',tabIndex:17,name:'tranId',value:p.get('tranId'),store:p.get('consBizType')==BT_B?getTTB_S():getTTC_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('tranId','');}},
    	select:function(c,r,i){p.set('tranCode',r.get('tranCode'));}}};
	var txtPartial={xtype:'checkbox',labelSeparator:'',boxLabel:C_PARTIAL_FLAG,tabIndex:19,name:'consPartialFlag',checked:p.get('consPartialFlag')=='1'};
	var txtTrans={xtype:'checkbox',labelSeparator:'',boxLabel:C_TANS_FLAG,tabIndex:20,name:'consTransFlag',checked:p.get('consTransFlag')=='1'};
    var txtShippingLine={fieldLabel:C_SHLI,itemCls:'needed',tabIndex:18,name:'shliId',value:p.get('shliId'),store:getSHLI_S(),xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
    	listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('shliId','');}},
    	select:function(c,r,i){p.set('shliCode',r.get('shliCode'));}}};
    var txtLclType={fieldLabel:C_LCL_TYPE,tabIndex:22,name:'consLclType',value:p.get('consLclType'),disabled:p.get('consShipType')!='LCL',store:LCLT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'};
    var txtChargeRemark={fieldLabel:C_CHARGE_REMARKS,tabIndex:16,name:'consChargeRemarks',value:p.get('consChargeRemarks'),xtype:'textfield',anchor:'99%'};
    var txtMConsNo={fieldLabel:C_M_CONS_NO,disabled:true,tabIndex:23,name:'consMasterNo',value:p.get('consMasterNo'),xtype:'textfield',anchor:'99%'};
	var txtBVessel={fieldLabel:C_BVESSEL,tabIndex:18,name:'consBVessel',value:p.get('consBVessel'),xtype:'textfield',anchor:'99%'};
	var txtBVoyage={fieldLabel:C_BVOYAGE,tabIndex:19,name:'consBVoyage',value:p.get('consBVoyage'),xtype:'textfield',anchor:'99%'};
	var txtBPod={fieldLabel:C_BPOT,tabIndex:20,name:'consBPodEn',value:p.get('consBPodEn'),xtype:'textfield',anchor:'99%'};
	var txtDeliveryDate={fieldLabel:C_DELIVERY_DATE,tabIndex:14,name:'consDeliveryDate',value:p.get('consDeliveryDate'),xtype:'datefield',format:DATEF,anchor:'99%'};
	
	var t111=[];var t112=[];var t113=[];var t114=[];
	if(p.get('consBizClass')==BC_I){
		t111=[txtConsNo,txtCust,txtConsDate,txtCargoSource,txtTranTerm];
		t112=[txtDept,txtCustContact,txtCustSales,txtDeliveryDate,txtBVessel];
		t113=[txtSales,txtCustTel,txtRefNo,txtPate,txtBVoyage];
		t114=[txtOperator,txtCustFax,txtContractNo,txtPaidAt,txtBPod];
		if(p.get('consBizType')==BT_A){
			t112=[txtDept,txtCustContact,txtCustSales,txtDeliveryDate];
			t113=[txtSales,txtCustTel,txtRefNo,txtPate];
			t114=[txtOperator,txtCustFax,txtContractNo,txtPaidAt];
		}
	}
	else{
		t111=[txtConsNo,txtCust,txtConsDate,txtCargoSource,txtTranTerm];
		t112=[txtDept,txtCustContact,txtCustSales,txtCargoClass,txtShippingLine];
		t113=[txtSales,txtCustTel,txtRefNo,txtPate,txtPartial];
		t114=[txtOperator,txtCustFax,txtContractNo,txtPaidAt,txtTrans];
		if(p.get('consShipType')==ST_L){
			t112=[txtDept,txtCustContact,txtCustSales,txtCargoClass,txtShippingLine,txtLclType];
			t113=[txtSales,txtCustTel,txtRefNo,txtPate,txtChargeRemark,txtMConsNo];
		}
		else if(p.get('consBizType')==BT_A){
			t112=[txtDept,txtCustContact,txtCustSales,txtCargoClass];
			t113=[txtSales,txtCustTel,txtRefNo,txtPate];
			t114=[txtOperator,txtCustFax,txtContractNo,txtPaidAt];
		}
	};
	
	var t11={layout:'column',title:C_CONS_INFO,collapsible:true,border:false,padding:5,
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
 	
 	var srTab=[s1,s2,s3,s6,s7,s10];
 	if(p.get('consBizType')==BT_B&&p.get('consBizClass')==BC_E){
 		srTab=[s1,s2,s3,s5,s6,s7,s8,s9,s10];
 	}
 	else if(p.get('consBizType')==BT_A){
 		srTab=[s1,s2,s3,s5,s6,s7];
 	}
 	else if(p.get('consBizType')==BT_C&&p.get('consBizClass')==BC_E){
 		srTab=[s1,s2,s3,s4,s5,s6,s7,s8,s9,s10];
 	}
	var t12={layout:'column',frame:true,height:35,border:false,items:srTab};
    var vt='';
    if(p.get('consBizType')==BT_C) vt=1;
    else if(p.get('consBizType')==BT_B) vt=2;
    
    var cboBookAgency={fieldLabel:C_BOOK_AGENCY,tabIndex:39,
		name:'consBookingAgencyName',value:p.get('consBookingAgencyName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
		xtype:'combo',displayField:'custCode',valueField:'custCode',
		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consBookingAgency','');
					p.set('consBookingAgencyName','');
				}
			},
        	select:function(c,r,i){
				p.set('consBookingAgency',r.get('custId'));
				p.set('consBookingAgencySname',r.get('custCode'));
				p.set('consBookingAgencyName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));    				
				this.find('name','consBookingAgencyContact')[0].store.reload({params:{custId:r.get('custId')}});
			},
        	keydown:{fn:function(f,e){
        		LC(f,e,'custBookingAgencyFlag');},buffer:BF}
		}
	};
    var cboBookAgencyContact={fieldLabel:C_BOOK_AGENCY_CONTACT,
    		name:'consBookingAgencyContact',value:p.get('consBookingAgencyContact'),
			tabIndex:10,store:getCUCOS(),xtype:'combo',displayField:'cucoName',valueField:'cucoName',
			typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
			listeners:{scope:this,
            	select:function(c,r,i){
            		this.find('name','consBookingAgencyTel')[0].setValue(r.get('cucoTel'));
    			}}};
    var txtBookAgencyTel={fieldLabel:C_BOOK_AGENCY_TEL,name:'consBookingAgencyTel',
    		tabIndex:54,value:p.get('consBookingAgencyTel'),xtype:'textfield',anchor:'99%'};
    
	var m1={fieldLabel:C_VESS,itemCls:'needed',tabIndex:34,
		name:'vessName',value:p.get('vessName'),store:getVES(),enableKeyEvents:true,
		xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',typeAhead:true,
		mode:'local',tpl:vessTpl,itemSelector:'div.list-item',
		listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
			select:function(c,r,i){
				p.set('vessId',r.get('vessId'));
				p.set('vessNameCn',r.get('vessNameCn'));
				var vcn=this.find('name','vessNameCn')[0];
				if(vcn) vcn.setValue(r.get('vessNameCn'));
			},
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('vessId','');
					p.set('vessName','');
				}
			},
			keydown:{fn:function(f,e){
				LV(f,e,vt);
			},buffer:BF}
		}
	};
	var m2={fieldLabel:p.get('consBizType')==BT_A?C_FLIGHTER:C_CARRIER,itemClass:'needed',
		tabIndex:p.get('consBizClass')==BC_I?42:38,
		name:'consCarrierName',value:p.get('consCarrierName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
		xtype:'combo',displayField:'custCode',valueField:'custCode',
		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consCarrier','');
					p.set('consCarrierName','');
				}
			},
			select:function(c,r,i){
				p.set('consCarrier',r.get('custId'));
				p.set('consCarrierName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){
				LC(f,e,p.get('consBizType')==BT_A?'custAirFlag':'custCarrierFlag');
			},buffer:BF}}};
	
	var m3={fieldLabel:C_OVERSEA_AGENCY,tabIndex:p.get('consBizClass')==BC_I?46:42,name:'consOverseaAgencyName',value:p.get('consOverseaAgencyName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
		xtype:'combo',displayField:'custCode',valueField:'custCode',
		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consOverseaAgency','');
					p.set('consOverseaAgencyName','');
				}},
			select:function(c,r,i){
            	p.set('consOverseaAgency',r.get('custId'));
            	p.set('consOverseaAgencyName',r.get('custNameCn'));
            	c.setValue(r.get('custNameCn'));
            	this.find('name','consNotifyParty2')[0].setValue(r.get('custShipper'));
 			},
			keydown:{fn:function(f,e){LC(f,e,'custOverseaAgencyFlag');},buffer:BF}}};
	
	var m4={fieldLabel:p.get('consBizClass')==BC_E?C_COUNTRY_D:C_COUNTRY_L,
			tabIndex:46,disabled:true,name:'consTradeCountry',value:p.get('consTradeCountry'),
			store:getCOUN_S(),xtype:'combo',displayField:'counNameEn',valueField:'counCode',
			typeAhead:true,mode:'remote',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	var m5={fieldLabel:C_BL_REMARKS,tabIndex:50,name:'consBlRemarks',value:p.get('consBlRemarks'),xtype:'textfield',anchor:'99%'};
	var m6={fieldLabel:'S/O No.',name:'consSoNo',tabIndex:54,value:p.get('consSoNo'),xtype:'textfield',anchor:'99%'};
	
	var m7={fieldLabel:C_CONTAINER,tabIndex:p.get('consBizClass')==BC_I?48:58,name:'consContainerCompanyName',value:p.get('consContainerCompanyName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
		xtype:'combo',displayField:'custCode',valueField:'custCode',
		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
        	blur:function(f){
        		if(f.getRawValue()==''){
        			f.clearValue();
        			p.set('consContainerCompany','');
        			p.set('consContainerCompanyName','');
        	}},
        	select:function(c,r,i){
        		p.set('consContainerCompany',r.get('custId'));
        		p.set('consContainerCompanyName',r.get('custNameCn'));
        		c.setValue(r.get('custNameCn'));
        	},
			keydown:{fn:function(f,e){LC(f,e,'custContainerFlag');},buffer:BF}}};
			
	var m8={fieldLabel:p.get('consBizType')==BT_A?C_FLIGHT:C_VOYA,itemCls:'needed',
			tabIndex:35,name:'voyaName',value:p.get('voyaName'),xtype:'textfield',anchor:'99%'};
	
    var m10={fieldLabel:C_POL,itemCls:'required',tabIndex:p.get('consBizClass')==BC_I?39:43,
    		name:'consPolEn',value:p.get('consPolEn'),store:getPS(),xtype:'combo',
    		displayField:p.get('consBizType')==BT_A?'portCode':'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'local',
    		triggerAction:'all',selectOnFocus:true,anchor:'99%',
    		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
    		listeners:{scope:this,
    			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPol','');}},
            	select:function(c,r,i){
            		p.set('consPol',r.get('portId'));
            		p.set('consPolCn',r.get('portNameCn'));
            		if(p.get('consBizClass')==BC_I&&this.find('name','consTradeCountry')[0]) {
            			this.find('name','consTradeCountry')[0].setValue(r.get('counCode'));
            		}
            		if(p.get('consBizClass')==BC_E&&this.find('name','consReceiptPlace')[0]) {
            			this.find('name','consReceiptPlace')[0].setValue(r.get('portNameEn'));
            		}
            	},
             	keydown:{fn:p.get('consBizType')==BT_A?LAP:LP,buffer:BF}}};
	var m11={fieldLabel:C_POD,itemCls:'required',tabIndex:p.get('consBizClass')==BC_I?40:47,name:'consPodEn',
			value:p.get('consPodEn'),store:getPS(),xtype:'combo',
			displayField:p.get('consBizType')==BT_A?'portCode':'portNameEn',
			valueField:'portNameEn',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPod','');}},
        	select:function(c,r,i){
        		p.set('consPod',r.get('portId'));
        		p.set('consPodCn',r.get('portNameCn'));
            	if(p.get('consBizClass')==BC_E&&this.find('name','consTradeCountry')[0]) {
            		this.find('name','consTradeCountry')[0].setValue(r.get('counCode'));
            	}
            	if(this.find('name','consDeliveryPlace')[0]) {
            		this.find('name','consDeliveryPlace')[0].setValue(r.get('portNameEn'));
            	}
            	if(this.find('name','consDestination')[0]) {
            		this.find('name','consDestination')[0].setValue(r.get('portNameEn'));
            	}
            	},
         	keydown:{fn:p.get('consBizType')==BT_A?LAP:LP,buffer:BF}}};
    var m12={fieldLabel:C_POT,tabIndex:p.get('consBizClass')==BC_I?41:51,name:'consPotEn',
    		value:p.get('consPotEn'),xtype:'textfield',anchor:'99%'};
    var m13={fieldLabel:C_BOOKING_CONTRACT_NO,name:'consBookingContractNo',tabIndex:55,value:p.get('consBookingContractNo'),xtype:'textfield',anchor:'99%'};
    var m14={fieldLabel:C_PACKING_LIST_NO,tabIndex:59,name:'consPackingListNo',value:p.get('consPackingListNo'),xtype:'textfield',anchor:'99%'};
    
   
    var m16={fieldLabel:C_SHIP_LOAD_DATE,tabIndex:40,name:'consLoadDate',
    		value:p.get('consLoadDate'),xtype:'datefield',format:DATEF,anchor:'99%'};
    var m17={fieldLabel:C_HARBOUR,tabIndex:p.get('consBizClass')==BC_I?43:44,name:'consHarbour',value:p.get('consHarbour'),store:getHARB_S(),xtype:'combo',displayField:'placName',valueField:'placName',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
    		listeners:{scope:this,select:function(c,r,i){p.set('consHarbourId',r.get('placId'));}}};
    var m18={fieldLabel:C_DESTINATION_PORT,tabIndex:48,name:'consDeliveryPlace',value:p.get('consDeliveryPlace'),xtype:'textfield',anchor:'99%'};
    var m19={fieldLabel:C_ISTY,tabIndex:52,name:'istyId',value:p.get('istyId'),store:getISTY_S(),xtype:'combo',displayField:'istyName',valueField:'istyId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
    var m20={fieldLabel:C_BOOKING_DATE,tabIndex:56,name:'consBookingDate',value:p.get('consBookingDate'),xtype:'datefield',format:DATEF,anchor:'99%'};
    
    var m21={fieldLabel:C_CFS,tabIndex:p.get('consBizClass')==BC_I?49:60,
    	name:'consCfsName',value:p.get('consCfsName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
		xtype:'combo',displayField:'custCode',valueField:'custNameCn',
		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
    	listeners:{scope:this,
        	blur:function(f){
        		if(f.getRawValue()==''){
        			f.clearValue();
        			p.set('consCfs','');
        			p.set('consCfsName','');
        		}
        	},
         	select:function(c,r,i){
         		p.set('consCfs',r.get('custId'));
         	},
        	keydown:{fn:function(f,e){
        		LC(f,e,'custCfsFlag');
        		},buffer:BF}
         }
    };   
   
    var m23={fieldLabel:C_CUSTOM_EXPIRY_DATE,tabIndex:41,
    	name:'consExpiryDate',value:p.get('consExpiryDate'),
    	xtype:'datefield',format:DATEF,anchor:'99%'};
    
    var m24={fieldLabel:C_RECEIPT_PLACE,tabIndex:45,
    	name:'consReceiptPlace',value:p.get('consReceiptPlace'),
    	xtype:'textfield',anchor:'99%'};
    
    var m25={fieldLabel:C_DESTINATION,tabIndex:49,
    	name:'consDestination',value:p.get('consDestination'),
    	xtype:'textfield',anchor:'99%'};
    
    var m26={fieldLabel:C_PRECARRIAGE,tabIndex:53,
    	name:'consPrecarriage',value:p.get('consPrecarriage'),
    	xtype:'textfield',anchor:'99%'};
    
    var txtOriginalBlNum={fieldLabel:C_BL_ORI_NUM,
    	name:'consOriginalBlNum',tabIndex:64,value:p.get('consOriginalBlNum'),
    	xtype:'numberfield',anchor:'99%'};
    
    var m28={fieldLabel:C_DO_AGENCY,name:'consDoAgencyName',tabIndex:47,
    		value:p.get('consDoAgencyName'),store:getCS(),enableKeyEvents:true,
    		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
    		xtype:'combo',displayField:'custCode',valueField:'custCode',
    		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
        	listeners:{scope:this,
            	blur:function(f){
            		if(f.getRawValue()==''){
            			f.clearValue();
            			p.set('consDoAgency','');
            			p.set('consDoAgencyName','');
            			p.set('consDoAgencyAddress','');
            	}},
             	select:function(c,r,i){
             		p.set('consDoAgency',r.get('custId'));
             		p.set('consDoAgencyName',r.get('custNameCn'));
             		p.set('consDoAgencyAddress',r.get('custAddress'));
             		c.setValue(r.get('custNameCn'));
             		txtDoAgencyAddress.setValue(r.get('custAddress'));
             	},
            	keydown:{fn:function(f,e){LC(f,e,'custDoAgencyFlag');},buffer:BF}}};
   
    var txtMblNo={fieldLabel:p.get('consBizType')==BT_A?'MAWB No.':C_MBL_NO,
    		name:'consMblNo',tabIndex:36,value:p.get('consMblNo'),xtype:'textfield',anchor:'99%'};
    var txtHblNo={fieldLabel:p.get('consBizType')==BT_A?'HAWB No.':C_HBL_NO,tabIndex:37,name:'consHblNo',
    		value:p.get('consHblNo'),xtype:'textfield',anchor:'99%'};
    
    var m30={fieldLabel:C_ETA,name:'consEta',itemCls:p.get('consBizClass')==BC_I?'required':'',
    	tabIndex:44,value:p.get('consEta'),xtype:'datefield',format:DATEF,anchor:'99%',
        listeners:{scope:this,
        	change:function(f,nv,ov){
        		if(p.get('consBizClass')==BC_I) 
        			p.set('consSailDate',nv);
        		}
        }
    };
    var m31={fieldLabel:p.get('consBizClass')==BC_E?C_SAIL_DATE:C_ETD,
    	itemCls:p.get('consBizClass')==BC_E?'required':'',tabIndex:37,
    	name:'consEtd',value:p.get('consEtd'),xtype:'datefield',format:DATEF,anchor:'99%',
        listeners:{scope:this,
        	change:function(f,nv,ov){
        		if(p.get('consBizClass')==BC_E) 
        			p.set('consSailDate',nv);
        		}
        }
    };
            
    var m32={fieldLabel:C_VESS_NAME_CN,name:'vessNameCn',tabIndex:54,value:p.get('vessNameCn'),xtype:'textfield',anchor:'99%'};
    var m33={fieldLabel:C_TTER,itemCls:'required',tabIndex:58,name:'tranIdCarrier',value:p.get('tranIdCarrier'),store:p.get('consBizType')==BT_B?getTTB_S():getTTC_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
    	listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('tranIdCarrier','');}},
    	select:function(c,r,i){p.set('tranCodeCarrier',r.get('tranCodeCarrier'));}}};
    var m34={fieldLabel:C_PATE,itemCls:'required',tabIndex:59,name:'pateIdP',value:p.get('pateIdP'),store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
    	listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('pateIdP','');}},
    	select:function(c,r,i){p.set('pateNameP',r.get('pateNameP'));}}};
        	
    var m35={fieldLabel:C_BL_PACKAGES,name:'blCargoPackages',value:p.get('blCargoPackages'),disabled:true,xtype:'numberfield',anchor:'99%'};
    var m36={fieldLabel:C_BL_GW,name:'blCargoGrossWeight',value:p.get('blCargoGrossWeight'),disabled:true,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'99%'};
	var m37={fieldLabel:C_BL_NW,name:'blCargoNetWeight',value:p.get('blCargoNetWeight'),disabled:true,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'99%'};
    var m38={fieldLabel:C_BL_CBM,name:'blCargoMeasurement',value:p.get('blCargoMeasurement'),disabled:true,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'99%'};
    
    /*20120523 嘉兴锦诚 */
    var txtCarrierConatct={fieldLabel:C_CARRIER_CONTACT,name:'consCarrierContact',value:p.get('consCarrierContact'),xtype:'textfield',anchor:'99%'};
    var txtCarrierTel={fieldLabel:C_CARRIER_TEL,name:'consCarrierTel',value:p.get('consCarrierTel'),xtype:'textfield',anchor:'99%'};
    
    var txtDoAgencyAddress = new Ext.form.TextField({fieldLabel:C_DO_AGENCY_ADDRESS,
    	name:'consDoAgencyAddress',value:p.get('consDoAgencyAddress'),
    	anchor:'99%'
    });
    
    var consThcFlag={fieldLabel:C_THC_FLAG,name:'consThcFlag',value:p.get('consThcFlag'),xtype:'checkbox',anchor:'99%'};
    var consPressureBoxFlag={fieldLabel:C_PRESSURE_BOX_FLAG,name:'consPressureBoxFlag',value:p.get('consPressureBoxFlag'),xtype:'checkbox',anchor:'99%'};
    
    var t131=[];var t132=[];var t133=[];var t134=[];
    if(p.get('consBizClass')==BC_I){
		t131=[m1,m4,m12,m3,m7];
		t132=[m8,m10,m11,m28,m21];
		t133=[txtMblNo,m30,txtDoAgencyAddress,m2,txtCarrierConatct];
		t134=[txtHblNo,m31,m17,txtCarrierTel];
		if(p.get('consBizType')==BT_A){
			t131=[m2,m4,m11,cboBookAgency];
			t132=[m8,m10,m17,cboBookAgencyContact];
			t133=[txtMblNo,m30,m12,txtBookAgencyTel];
			t134=[txtHblNo,m31,m3];
		}
		else if(p.get('consBizType')==BT_B){
            t131=[m1,m4,m2,m3];
            t132=[m8,m10,m17];
            t133=[txtMblNo,m11,m30,m7];
            t134=[txtHblNo,m12,m31];
        }
	}
	else{
		t131=[m1,m31,m3,m4,m2,m5,m6,m7];
		t132=[m8,cboBookAgency,m10,m11,m12,m13,m14];
		t133=[txtMblNo,cboBookAgencyContact,m16,m17,m18,m19,m20,m21];
		t134=[txtHblNo,txtBookAgencyTel,m30,m24,m25,m26,m23,txtOriginalBlNum];
		if(p.get('consBizType')==BT_A){
			t131=[m2,m4,m10,cboBookAgency];
			t132=[m8,m11,m17,txtBookAgencyTel];
			t133=[txtMblNo,m30,m12,m23];
			t134=[txtHblNo,m31,m3];
		}	
		else if(p.get('consBizType')==BT_B){
			t131=[m1,m2,m3,m4,m5,m32,m33,m35,txtOriginalBlNum];
			t132=[m8,cboBookAgency,m10,m11,m12,m13,m34,m36];
			t133=[txtMblNo,cboBookAgencyContact,m16,m17,m18,m19,m20,m37];
			t134=[m31,txtBookAgencyTel,m30,m24,m25,m26,m23,m38];
		}
	};
    var t13={layout:'column',title:C_BL_INFO,collapsible:true,border:false,padding:5,
          items:[{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t131},
          	{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t132},
          	{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t133},
          	{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t134}
		]};

    function saveShipper(shipperT){
    	var cushName = '';
    	if(shipperT==1) cushName = Ext.getCmp(p.get('consId')+'CONS_SHIPPER').getValue();
    	else if(shipperT==2) cushName = Ext.getCmp(p.get('consId')+'CONS_CONSIGNEE').getValue();
    	else if(shipperT==3) cushName = Ext.getCmp(p.get('consId')+'CONS_NOTIFY_PARTY').getValue();
    	else if(shipperT==4) cushName = Ext.getCmp(p.get('consId')+'CONS_NOTIFY_PARTY2').getValue();
    	    	
    	if(!p.get('custId')){
    		XMG.alert(SYS,M_SELECT_CUST_FIRST);
    		return;
    	}
    	if(cushName!=''){
    		
    		var c = new CCustomerShipper({rowAction:'N',custId:p.get('custId'),cushType:shipperT,cushName:cushName});
    		var xml = RTX(c,'CCustomerShipper',CCustomerShipper);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
				params:{A:'CUSH_S'},
				success: function(res){XMG.alert(SYS,M_S);},
				failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
				xmlData:FOSX(xml)
			});
    	}
    };
    
    function selShipper(shipperT){
    	if(p.get('custId')){
    		var win = new  Fos.ShipperWin(p.get('custId'),shipperT,updateShipper);
        	win.show();
    	}
    	else
    		XMG.alert(SYS,M_SELECT_CUST_FIRST);
    }
    
    function updateShipper(shipperT,cushName){
    	if(shipperT==1) cushName = Ext.getCmp(p.get('consId')+'CONS_SHIPPER').setValue(cushName);
    	else if(shipperT==2) cushName = Ext.getCmp(p.get('consId')+'CONS_CONSIGNEE').setValue(cushName);
    	else if(shipperT==3) cushName = Ext.getCmp(p.get('consId')+'CONS_NOTIFY_PARTY').setValue(cushName);
    	else if(shipperT==4) cushName = Ext.getCmp(p.get('consId')+'CONS_NOTIFY_PARTY2').setValue(cushName);
    };
    
    var bSaveShipper = new Ext.Button({text:'保存',handler:function(){saveShipper(1);}});
    var bSearchShipper = new Ext.Button({text:'选择',handler:function(){selShipper(1);}});
    var bSaveConsignee = new Ext.Button({text:'保存',handler:function(){saveShipper(2);}});
    var bSearchConsignee = new Ext.Button({text:'选择',handler:function(){selShipper(2);}});
    var bSaveNotifyParty = new Ext.Button({text:'保存',handler:function(){saveShipper(3);}});
    var bSearchNotifyParty = new Ext.Button({text:'选择',handler:function(){selShipper(3);}});
    var bSaveNotifyParty2 = new Ext.Button({text:'保存',handler:function(){saveShipper(4);}});
    var bSearchNotifyParty2 = new Ext.Button({text:'选择',handler:function(){selShipper(4);}});
    
    var t14={layout:'column',title:C_SHIPPER_INFO,collapsible:true,padding:5,border:false,items:
			[{columnWidth:.45,layout:'form',border:false,labelWidth:60,
				items:[{fieldLabel:C_SHIPPER,id:p.get('consId')+'CONS_SHIPPER',tabIndex:65,name:'consShipper',value:p.get('consShipper'),
				    	xtype:'textarea',height:100,anchor:'99%'}]},
			{columnWidth:.05,border:false,items:[bSaveShipper,bSearchShipper]},
			{columnWidth:.45,layout:'form',border:false,labelWidth:60,
				items:[{fieldLabel:C_CONSIGNEE,id:p.get('consId')+'CONS_CONSIGNEE',tabIndex:66,name:'consConsignee',value:p.get('consConsignee'),
					xtype:'textarea',height:100,anchor:'99%'}]},
			{columnWidth:.05,border:false,items:[bSaveConsignee,bSearchConsignee]},
			{columnWidth:.45,layout:'form',border:false,labelWidth:60,
				items:[{fieldLabel:C_NOTIFIER,id:p.get('consId')+'CONS_NOTIFY_PARTY',tabIndex:67,name:'consNotifyParty',value:p.get('consNotifyParty'),
					xtype:'textarea',height:100,anchor:'99%'}]},
			{columnWidth:.05,border:false,items:[bSaveNotifyParty,bSearchNotifyParty]},
			{columnWidth:.45,layout:'form',border:false,labelWidth:60,
				items:[{fieldLabel:C_OVERSEA_AGENCY,id:p.get('consId')+'CONS_NOTIFY_PARTY2',tabIndex:68,name:'consNotifyParty2',value:p.get('consNotifyParty2'),
					xtype:'textarea',height:100,anchor:'99%'}]},
			{columnWidth:.05,border:false,items:[bSaveNotifyParty2,bSearchNotifyParty2]}
					
		]};    
	var t1={id:'C_B_J_'+p.get('id'),title:C_BASE_INFO+'(J)',border:false,height:670,
		items:(p.get('consBizType')==BT_G||p.get('consBizType')==BT_I)?[t11,t13,t14]:[t11,t12,t13,t14]};
           
   	var txtCargoMarks={columnWidth:.5,layout:'form',labelWidth:90,border:false,
   			items:[{fieldLabel:C_MARKS,tabIndex:58,name:'consCargoMarks',value:p.get('consCargoMarks'),
   				xtype:'textarea',height:100,anchor:'99%'}
   			]};
    var txtCargoDesc={columnWidth:.5,layout:'form',labelWidth:90,border:false,
    		items:[{fieldLabel:C_CARGO_DESC,tabIndex:61,name:'consCargoDesc',value:p.get('consCargoDesc'),
    			xtype:'textarea',height:100,anchor:'99%'}
    	]};
    
    var txtCargoNameCn={columnWidth:.25,layout:'form',labelWidth:90,border:false,
			items:[{fieldLabel:C_CARGO_NAME_CN,tabIndex:61,name:'consCargoNameCn',
				value:p.get('consCargoNameCn'),xtype:'textfield',anchor:'99%'}
			]};
	var txtCargoNameEn={columnWidth:.5,layout:'form',labelWidth:90,border:false,
			items:[{fieldLabel:C_CARGO_NAME_EN,tabIndex:61,name:'consCargoNameEn',
				value:p.get('consCargoNameEn'),xtype:'textfield',anchor:'99%'}
			]};
	
    var txtTotalPackages={columnWidth:.25,layout:'form',labelWidth:90,border:false,
    		items:[{fieldLabel:C_PACKAGES,tabIndex:61,name:'consTotalPackages',value:p.get('consTotalPackages'),
    			xtype:'numberfield',anchor:'99%',
			listeners:{scope:this,change:function(f,nv,ov){	
				p.set('consTotalPackages',nv);
				var pw='SAY TOTAL '+N2EW(nv)+' '+p.get('packName')+' ONLY';
				p.set('consTotalPackagesInWord',pw);
				this.find('name','consTotalPackagesInWord')[0].setValue(pw);				
				}}}
    		]};
	var txtPack={columnWidth:.25,layout:'form',labelWidth:90,border:false,
			items:[{fieldLabel:C_PACK,tabIndex:61,name:'packName',value:p.get('packName'),
			xtype:'combo',store:getPACK_S(),displayField:'packName',valueField:'packName',
			typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
			listeners:{scope:this,select:function(c,r,i){
				p.set('packId',r.get('packId'));
				p.set('packName',r.get('packName'));
				var pw='SAY TOTAL '+N2EW(p.get('consTotalPackages'))+' '+r.get('packName')+' ONLY';
				this.find('name','consTotalPackagesInWord')[0].setValue(pw);
				p.set('consTotalPackagesInWord',pw);}}}
			]};
	var txtTotalSay={columnWidth:.5,layout:'form',labelWidth:90,border:false,
			items:[{fieldLabel:C_PACKAGES_CAP,tabIndex:61,name:'consTotalPackagesInWord',
				value:p.get('consTotalPackagesInWord'),xtype:'textfield',anchor:'99%'}
			]};	
	
	var numGrossWeight = new Ext.form.NumberField({fieldLabel:C_GW+(p.get('consBizType')==BT_B?C_MT:C_KGS),
		tabIndex:61,name:'consTotalGrossWeight',value:p.get('consTotalGrossWeight'),
		xtype:'numberfield',decimalPrecision:4,anchor:'99%',
		listeners:{scope:this,change:function(f,nv,ov){				
			if(p.get('consBizType')==BT_A)
				recalculateChargeWeight('Carrier');
		}}});
	var txtTotalGrossWeight={columnWidth:.25,layout:'form',labelWidth:90,border:false,
			items:[numGrossWeight]};
	
	var numNetWeight = new Ext.form.NumberField({fieldLabel:C_NW+(p.get('consBizType')==BT_B?C_MT:C_KGS),
		tabIndex:61,name:'consTotalNetWeight',value:p.get('consTotalNetWeight'),
		xtype:'numberfield',decimalPrecision:4,anchor:'99%'});
	var txtTotalNetWeight={columnWidth:.25,layout:'form',labelWidth:90,border:false,
			items:[numNetWeight]};
	
	var numMeasurement = new Ext.form.NumberField({fieldLabel:C_CBM,tabIndex:61,
		name:'consTotalMeasurement',value:p.get('consTotalMeasurement'),
		xtype:'numberfield',decimalPrecision:4,anchor:'99%',
		listeners:{scope:this,change:function(f,nv,ov){				
			if(p.get('consBizType')==BT_A)
				recalculateChargeWeight('Carrier');
		}}});
	var txtTotalMeasurement={columnWidth:.25,layout:'form',labelWidth:90,border:false,
			items:[numMeasurement]};
	
	var numGrossWeightK = new Ext.form.NumberField({fieldLabel:C_GW+C_KGS+'-客户',
		tabIndex:61,name:'consTotalGrossWeightCustomer',
    	value:p.get('consTotalGrossWeightCustomer'),xtype:'numberfield',decimalPrecision:4,anchor:'99%',
		listeners:{scope:this,change:function(f,nv,ov){				
			recalculateChargeWeight('Customer');
		}}});
	var txtTotalGrossWeightK={columnWidth:.25,layout:'form',labelWidth:90,border:false,
			items:[numGrossWeightK]};
	
	var numMeasurementK = new Ext.form.NumberField({fieldLabel:C_CBM+'-客户',tabIndex:61,
		name:'consTotalMeasurementCustomer',value:p.get('consTotalMeasurementCustomer'),xtype:'numberfield',
		decimalPrecision:4,anchor:'99%',
		listeners:{scope:this,change:function(f,nv,ov){				
			recalculateChargeWeight('Customer');
		}}});
	var txtTotalMeasurementK={columnWidth:.25,layout:'form',labelWidth:90,border:false,
			items:[numMeasurementK]};
	
	var numBulkyCarrier = new Ext.form.NumberField({fieldLabel:C_BULKY,tabIndex:58,
		name:'consBulkyCarrier',value:p.get('consBulkyCarrier'),xtype:'numberfield',anchor:'99%',
		listeners:{scope:this,change:function(f,nv,ov){				
			recalculateChargeWeight('Carrier');
		}}});
	var txtBulkyCarrier={columnWidth:.25,layout:'form',labelWidth:90,border:false,
			items:[numBulkyCarrier]};
	
	var numBulkyCustomer = new Ext.form.NumberField({fieldLabel:C_BULKY+'-'+C_CUSTOMER,tabIndex:58,
		name:'consBulkyCustomer',value:p.get('consBulkyCustomer'),xtype:'numberfield',anchor:'99%',
		listeners:{scope:this,change:function(f,nv,ov){				
			recalculateChargeWeight('Customer');
		}}});
	var txtBulkyCustomer={columnWidth:.25,layout:'form',labelWidth:90,border:false,
			items:[numBulkyCustomer]};
	
	var numChargeWeight = new Ext.form.NumberField({fieldLabel:C_CHARGE_WEIGHT,tabIndex:58,name:'consTotalChargeWeight',
		value:p.get('consTotalChargeWeight'),xtype:'numberfield',anchor:'99%'});
	var txtTotalChargeWeight={columnWidth:.25,layout:'form',labelWidth:90,border:false,
			items:[numChargeWeight]};
	
	var numChargeWeightCustomer = new Ext.form.NumberField({fieldLabel:C_CHARGE_WEIGHT+'-'+C_CUSTOMER,tabIndex:58,
		name:'consChargeWeightCustomer',value:p.get('consChargeWeightCustomer'),xtype:'numberfield',anchor:'99%'});
	var txtChargeWeightCustomer={columnWidth:.25,layout:'form',border:false,labelWidth:90,
			items:[numChargeWeightCustomer]};
	
	function recalculateChargeWeight(t){
		var w = 0;
		var v = 0;
		var b = 0;
		
		if(t=='Carrier'){
			w = numGrossWeight.getValue();
			v = numMeasurement.getValue();
			b = numBulkyCarrier.getValue();
		}
		else{
			w = numGrossWeightK.getValue();
			v = numMeasurementK.getValue();
			b = numBulkyCustomer.getValue();
		}
		
		if(w) 
			w = parseFloat(w);
		if(v) 
			v = parseFloat(v);
		if(b) 
			b = parseFloat(b);
		
		var weightC = v/0.006;
		if(w>weightC)
			weightC = w;
		else{
			weightC = w+ (weightC-w)*b/100;
		}
		if(t=='Carrier'){
			numChargeWeight.setValue(weightC);
		}			
		else{
			numChargeWeightCustomer.setValue(weightC);
		}
			
	};
	
	var t31={layout:'column',padding:5,layoutConfig: {columns:5},border:false,labelWidth:60,
		title:'货物小计',collapsible:true,items:
		p.get('consBizType')==BT_A?[txtCargoMarks,txtCargoDesc,txtCargoNameEn,
		                            txtTotalGrossWeight,txtTotalGrossWeightK,
		                            txtCargoNameCn,txtTotalNetWeight,txtTotalMeasurement,txtTotalMeasurementK,
		                            txtTotalPackages,txtPack,txtBulkyCarrier,txtBulkyCustomer,
		                            txtTotalSay,txtTotalChargeWeight,txtChargeWeightCustomer		                            
		                            ]:
		         [txtCargoMarks,txtCargoDesc,
		          txtCargoNameEn,txtTotalGrossWeight,txtTotalMeasurement,
		          txtTotalPackages,txtPack,txtCargoNameCn,txtTotalNetWeight,
		          txtTotalSay
		          ]};
	
	var g11={fieldLabel:C_DANAGER_CLASS,name:'cargDanagerClass',value:p.get('cargDanagerClass'),anchor:'99%'};
	var g12={fieldLabel:C_IMDG_PAGE,name: 'cargImdgPage',value:p.get('cargImdgPage'),anchor:'99%'};
	var g13={fieldLabel:C_UN_NO,name:'cargUnNo',value:p.get('cargUnNo'),anchor:'99%'};
	var g14={fieldLabel:C_SUB_LABEL,name:'cargSubLabel',value:p.get('cargSubLabel'),anchor:'99%'};
	var g15={fieldLabel:C_EMS_NO,name:'cargEmsNo',value:p.get('cargEmsNo'),anchor:'99%'};
	var g16={fieldLabel:C_FLASH_POINT,name:'cargFlashPoint',value:p.get('cargFlashPoint'),anchor:'99%'};
	var g17={fieldLabel:C_MFAG_NO,name:'cargMfagNo',value:p.get('cargMfagNo'),anchor:'99%'};
	var g18={fieldLabel:C_PKG_GROUP,name:'cargPkgGroup',value:p.get('cargPkgGroup'),anchor:'99%'};
	var g19={fieldLabel:C_DANAGER_PROPERTY,name:'cargDanagerProperty',value:p.get('cargDanagerProperty'),anchor:'99%'};
	var g20={fieldLabel:C_POLLUTION_FLAG,name:'cargPollutionFlag',value:p.get('cargPollutionFlag'),xtype:'checkbox',anchor:'99%'};
	
	var g21={fieldLabel:C_TEMPERATURE_UNIT,name:'cargTemperatureUnit',value:p.get('cargTemperatureUnit'),editable:false,store:TEUN_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'};
	var g22={fieldLabel:C_TEMPERATURE,name:'cargTemperature',value:p.get('cargTemperature'),xtype:'numberfield',anchor:'99%'};
	var g23={fieldLabel:C_TEMPERATURE_HIGH,name:'cargTemperatureHigh',value:p.get('cargTemperatureHigh'),xtype:'numberfield',anchor:'99%'};
	var g24={fieldLabel:C_TEMPERATURE_LOW,name:'cargTemperatureLow',value:p.get('cargTemperatureLow'),xtype:'numberfield',anchor:'99%'};
	var g25={fieldLabel: C_VENT_OUTLET,name:'cargVentOutlet',value:p.get('cargVentOutlet'),xtype:'textfield',anchor:'99%'};
	var g26={fieldLabel: C_HUMIDITY,name:'cargHumidity',value:p.get('cargHumidity'),xtype:'numberfield',anchor:'99%'};
	
	var g27={fieldLabel:C_LENGTH,name:'cargLength',value:p.get('cargLength'),xtype:'numberfield',anchor:'99%'};
	var g28={fieldLabel: C_WIDTH,name:'cargWidth',value:p.get('cargWidth'),xtype:'numberfield',anchor:'99%'};
	var g29={fieldLabel: C_HEIGH,name:'cargHigh',value:p.get('cargHigh'),xtype:'numberfield',anchor:'99%'};
	
	var t32={layout:'column',padding:5,layoutConfig: {columns:3},title:C_CARGO_SPECIAL_INFO,border:false,collapsible:true,items:
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
	
	var t3={id:'C_B_H_'+p.get('id'),title:C_CARGO_INFO+'(H)',height:720,
			items:[{layout:'fit',border:false,collapsible:true,items:this.cargoGrid},t31,t32]};
	
	var r1={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:C_SERVICE_SPEC,tabIndex:1,name:'consServiceSpec',value:p.get('consServiceSpec'),xtype:'textarea',anchor:'99%'}]};
	var r2={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:C_REMARKS,tabIndex:2,name:'consRemarks',value:p.get('consRemarks'),xtype:'textarea',anchor:'99%'}]};
	var t41={title:C_BOOKING_REQUIREMENT,layout:'column',padding:5,labelWidth:90,border:false,collapsible:true,items:[r1,r2]};
	
	
	var cboTrackVendor = new Ext.form.ComboBox({fieldLabel:C_TRACK_VENDOR,tabIndex:3,
		name:'consTrackVendorName',value:p.get('consTrackVendorName'),
	    store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
		xtype:'combo',displayField:'custCode',valueField:'custCode',typeAhead:true,
		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consTrackVendor','');
					p.set('consTrackVendorName','');
				}},
			select:function(c,r,i){
				p.set('consTrackVendor',r.get('custId'));
				p.set('consTrackVendorName',r.get('custNameCn'));
				txtTranContact.setValue(r.get('custContact'));
				txtTranTel.setValue(r.get('custTel'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){LC(f,e,'custTrackFlag');},buffer:BF}}});
	var txtTranContact = new Ext.form.TextField({fieldLabel:C_TRAN_CONTACT,tabIndex:4,
		name:'consTrackContact',value:p.get('consTrackContact'),anchor:'99%'});
	var txtTranTel = new Ext.form.TextField({fieldLabel:C_TRAN_TEL,tabIndex:5,
		name:'consTrackTel',value:p.get('consTrackTel'),anchor:'99%'});
	txtLoadAddress = new Ext.form.TextArea({fieldLabel:p.get('consBizClass')==BC_E?C_LOAD_ADDRESS:C_DELIVERY_ADDRESS,
			tabIndex:6,name:'consTrackLoadAddress',value:p.get('consTrackLoadAddress'),xtype:'textarea',anchor:'99%'});
	
	var r3={columnWidth:.25,layout:'form',border:false,items:[cboTrackVendor]};
	var r4={columnWidth:.25,layout:'form',border:false,items:[txtTranContact]};
	var r5={columnWidth:.25,layout:'form',border:false,items:[txtTranTel]};		
	var r7={columnWidth:.5,layout:'form',border:false,items:[{fieldLabel:C_REMARKS,tabIndex:7,
		name:'consTrackRemarks',value:p.get('consTrackRemarks'),xtype:'textarea',anchor:'99%'}]};
	var txtLoadDate={columnWidth:.25,layout:'form',border:false,items:[
	       {fieldLabel:p.get('consBizClass')==BC_E?C_LOAD_DATE:C_FETCH_DATE,tabIndex:8,
	        name:'consTrackLoadDate',value:p.get('consTrackLoadDate'),xtype:'datefield',format:DATEF,anchor:'99%'}]};
	var txtLoadTime={columnWidth:.25,layout:'form',border:false,items:[
       {fieldLabel:p.get('consBizClass')==BC_E?C_LOAD_TIME:C_FETCH_TIME,tabIndex:8,
        name:'consTrackLoadTime',value:p.get('consTrackLoadTime'),xtype:'timefield',increment:30,anchor:'99%'}]};

	
	var txtLoadFactory = {columnWidth:.25,layout:'form',hidden:p.get('consBizClass')!=BC_E,border:false,items:[
	    	{fieldLabel:C_LOAD_FACTORY,name:'consLoadFactory',value:p.get('consLoadFactory'),
	    		xtype:'siteLookup',siteType:1,custId:p.get('custId'),
	        	typeAhead:true,mode:'local',triggerAction: 'all',
	        	selectOnFocus:true,anchor:'99%',listWidth:200,pageSize:30,
	    		listeners:{scope:this,	    			
	    			select:function(c,r,i){
	    				txtLoadContact.setValue(r.get('cusiContact'));
	    				txtLoadTel.setValue(r.get('cusiTel'));
	    				txtLoadAddress.setValue(r.get('cusiAddress'));
	    			}}}]};
	
	var txtLoadContact=new Ext.form.TextField({fieldLabel:C_LOAD_CONTACT,tabIndex:4,name:'consLoadContact',
	    	value:p.get('consLoadContact'),xtype:'textfield',anchor:'99%'});
	var txtLoadTel=new Ext.form.TextField({fieldLabel:C_LOAD_TEL,tabIndex:5,name:'consLoadTel',
	        value:p.get('consLoadTel'),xtype:'textfield',anchor:'99%'});

	var t42={title:C_TRAN_REQUIREMENT,layout:'column',padding:5,border:false,labelWidth:90,collapsible:true,
			items:[r3,r4,r5,txtLoadFactory,txtLoadDate,txtLoadTime,
			       {columnWidth:.25,layout:'form',border:false,items:[txtLoadContact]},
			       {columnWidth:.25,layout:'form',border:false,items:[txtLoadTel]},
			       {columnWidth:.5,layout:'form',border:false,items:[txtLoadAddress]},r7]};
			
	var r9={columnWidth:.5,layout:'form',border:false,items:[
		{fieldLabel:C_WAREHOUSE,tabIndex:9,name:'consWarehouseName',
			value:p.get('consWarehouseName'),store:getCS(),enableKeyEvents:true,
			tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
			xtype:'combo',displayField:'custCode',valueField:'custCode',
			typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
			listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consWarehouse','');
					p.set('consWarehouseName','');
			}},
			select:function(c,r,i){
				this.find('name','consWarehouseContact')[0].setValue(r.get('custContact'));
				this.find('name','consWarehouseTel')[0].setValue(r.get('custTel'));
				this.find('name','consWarehouseAddress')[0].setValue(r.get('custAddress'));
				p.set('consWarehouse',r.get('custId'));
				p.set('consWarehouseName',r.get('custNameCn'));
				p.set('consWarehouseFax',r.get('custFax'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){LC(f,e,'custWarehouseFlag');},buffer:BF}}}]};
	var r10={columnWidth:.25,layout:'form',border:false,items:[
        {fieldLabel:C_WARE_CONTACT,tabIndex:10,name:'consWarehouseContact',
        value:p.get('consWarehouseContact'),xtype:'textfield',anchor:'99%'}]};
	var r11={columnWidth:.25,layout:'form',border:false,items:[
        {fieldLabel:C_WARE_TEL,tabIndex:11,name:'consWarehouseTel',
        value:p.get('consWarehouseTel'),xtype:'textfield',anchor:'99%'}]};
	var r12={columnWidth:.5,layout:'form',border:false,items:[
		{fieldLabel:p.get('consBizType')==BT_B?C_WARE_REQUIREMENT:(p.get('consBizClass')==BC_E?C_CONT_LOAD_REQUIREMENT:C_CONT_DISCHARGE_REQUIREMENT),
	    tabIndex:12,name:'consWarehouseRemarks',value:p.get('consWarehouseRemarks'),xtype:'textarea',anchor:'99%'}]};
	var r13={columnWidth:.5,layout:'form',border:false,items:[
	    {fieldLabel:C_WARE_ADDRESS,tabIndex:13,
	    name:'consWarehouseAddress',value:p.get('consWarehouseAddress'),xtype:'textarea',anchor:'99%'}]};
	
	var txtWarehouseNo={columnWidth:.25,layout:'form',border:false,items:[
      	    {fieldLabel:C_IN_WAREHOUSE_NO,tabIndex:13,xtype:'textfield',
      	    name:'consWarehouseNo',value:p.get('consWarehouseNo'),anchor:'99%'}]};
	
	var r14={columnWidth:.25,layout:'form',border:false,items:[
	        {fieldLabel:p.get('consBizType')==BT_B?C_WARE_DATE:
	        	(p.get('consBizClass')==BC_E?C_WARE_LOAD_DATE:C_WARE_DIS_DATE),tabIndex:14,
	        	name:'consContainerLoadDate',value:p.get('consContainerLoadDate'),
	        	xtype:'datefield',format:DATEF,anchor:'99%'}]};
	var txtContainerLoadTime={columnWidth:.25,layout:'form',border:false,items:[
           {fieldLabel:C_ENTER_WAREHOUSE_TIME,tabIndex:8,
            name:'consContainerLoadTime',value:p.get('consContainerLoadTime'),
            xtype:'timefield',increment:30,anchor:'99%'}]};

	
	var txtCFS={columnWidth:.25,layout:'form',border:false,items:[
	    {fieldLabel:C_CFS,tabIndex:14,name:'consCfsName',value:p.get('consCfsName'),
	    	store:getCS(),enableKeyEvents:true,
    		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
    		xtype:'combo',displayField:'custCode',valueField:'custCode',
    		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
        	listeners:{scope:this,
         		blur:function(f){
         			if(f.getRawValue()==''){
         				f.clearValue();
         				p.set('consCfs','');
         				p.set('consCfsName','');
         		}},
         		select:function(c,r,i){
         			p.set('consCfs',r.get('custId'));
         			p.set('consCfsName',r.get('custNameCn'));
         			c.setValue(r.get('custNameCn'));
         		},
				keydown:{fn:function(f,e){LC(f,e,'custCfsFlag');},buffer:BF}}}]};
	
	var t43={title:p.get('consBizType')==BT_B?C_SR_WARE:(p.get('consBizClass')==BC_E?C_WARE_LOAD:C_WARE_DIS),
			layout:'column',padding:5,border:false,collapsible:true,labelWidth:90,
			items:p.get('consBizType')==BT_B?[r9,r10,r11,r12,r13,r14,txtWarehouseNo]:
				[r9,r10,r11,r12,r13,r14,txtContainerLoadTime,txtWarehouseNo,txtCFS]};
	
	var r15={fieldLabel:C_INSP_AGENCY,tabIndex:15,name:'consInspectionVendorName',
		value:p.get('consInspectionVendorName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
		xtype:'combo',displayField:'custCode',valueField:'custCode',
		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consInspectionVendor','');
					p.set('consInspectionVendorName','');
			}},
			select:function(c,r,i){
				p.set('consInspectionVendor',r.get('custId'));
				p.set('consInspectionVendorName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){LC(f,e,'custInspectionFlag');},buffer:BF}}};
	var r16={fieldLabel:C_CUSTOM_AGENCY,tabIndex:16,name:'consCustomsVendorName',
		value:p.get('consCustomsVendorName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
		xtype:'combo',displayField:'custCode',valueField:'custCode',
		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consCustomsVendor','');
					p.set('consCustomsVendorName','');
			}},
			select:function(c,r,i){
				p.set('consCustomsVendor',r.get('custId'));
				p.set('consCustomsVendorName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}};
	var r17={fieldLabel:C_SWITCH_BL,tabIndex:17,name:'swithId',value:p.get('swithId'),store:SWIT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	var r18={fieldLabel:C_FUMIGATE_FLAG,tabIndex:18,name:'consFumigateFlag',checked:p.get('consFumigateFlag')=='1',xtype:'checkbox',anchor:'99%'};
	var r19={fieldLabel:C_QUARANTINE_FLAG,tabIndex:19,name:'consQuarantineFlag',checked:p.get('consQuarantineFlag')=='1',xtype:'checkbox',anchor:'99%'};
	var r20={fieldLabel:C_TRANSFERRING_FLAG,tabIndex:20,name:'consTransferringFlag',checked:p.get('consTransferringFlag')=='1',xtype:'checkbox',anchor:'99%'};
	var r21={fieldLabel:C_CUSTOMS_TYPE,tabIndex:21,name:'consCustomsType',value:p.get('consCustomsType'),store:getCustomsType_S(),
			xtype:'combo',displayField:'cutyName',valueField:'cutyId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
    var r22={fieldLabel:C_INV_FLAG,xtype:'checkbox',tabIndex:22,name:'consInvoiceFlag',checked:p.get('consInvoiceFlag')=='1',anchor:'99%'};
    var r23={fieldLabel:C_INSP_FLAG,xtype:'checkbox',tabIndex:23,name:'consInspectionFlag',checked:p.get('consInspectionFlag')=='1',anchor:'99%'};
	
	var cboCudeType={fieldLabel:C_CUDE_TYPE,tabIndex:21,name:'consCudeType',value:p.get('consCudeType'),store:getCustomsType_S(),
			xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};

	var txtCustomsContact={fieldLabel:C_CUSTOMS_CONTACT,name:'consCustomsContact',tabIndex:24,xtype:'textfield',anchor:'99%'};
	var txtCustomsAddress={fieldLabel:C_CUSTOMS_ADDRESS,tabIndex:25,name:'consCustomsAddress',xtype:'textfield',anchor:'99%'};
	var txtCustomsTel={fieldLabel:C_CUSTOMS_TEL,name:'consCustomsTel',tabIndex:26,xtype:'textfield',anchor:'99%'};
	
    var t44={title:C_CUST_OTHER_REQUIREMENT,layout:'column',padding:5,border:false,collapsible:true,items:
		[
		  {columnWidth:.25,layout:'form',border:false,labelWidth:90,items:[r16,r17,r23]},
		  {columnWidth:.25,layout:'form',border:false,labelWidth:90,items:[txtCustomsContact,r15,r18,r22]},
		  {columnWidth:.25,layout:'form',border:false,labelWidth:90,items:[txtCustomsAddress,cboCudeType,r19,consThcFlag]},		
		{columnWidth:.25,layout:'form',border:false,labelWidth:90,items:[txtCustomsTel,r21,r20,consPressureBoxFlag]}
		]};
	
	var r24={fieldLabel:C_BHK_FLAG,tabIndex:24,name:'consBHkFlag',checked:p.get('consBHkFlag')=='1',xtype:'checkbox',anchor:'99%'};
	var r25={fieldLabel:C_BINTERNATIONAL_FLAG,tabIndex:25,name:'consBInternationalFlag',checked:p.get('consBInternationalFlag')=='1',xtype:'checkbox',anchor:'99%'};
	var r26={fieldLabel:C_REMARKS,tabIndex:26,name:'consBRemarks',value:p.get('consWarehouseRemarks'),xtype:'textarea',anchor:'99%'};
	var t45={title:C_BARGE_REQUIREMENT,layout:'column',padding:5,border:false,collapsible:true,items:[
		{columnWidth:.4,layout:'form',border:false,items:[r24,r25]},
		{columnWidth:.6,layout:'form',border:false,items:[r26]}]};
	var t4={id:'C_B_Y_'+p.get('id'),title:C_SERVICE_REQUIREMENT+'(Y)',height:650,
		items:p.get('consBizClass')==BC_E?[t41,t42,t43,t44,t45]:[t41,t42,t43,t44]};
	
	var r27={fieldLabel:C_CARGO_OWNER,tabIndex:1,name:'consCargoOwnerName',value:p.get('consCargoOwnerName'),store:getCS(),enableKeyEvents:true,
    	tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',listWidth:200,pageSize:30,
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consCargoOwner','');p.set('consCargoOwnerName','');}},
			select:function(c,r,i){p.set('consCargoOwner',r.get('custId'));},
			keydown:function(f,e){LC(f,e,'custBookerFlag');}}};
	var r28={fieldLabel:C_TRTY,tabIndex:5,name:'trtyId',value:p.get('trtyId'),store:getTRTY_S(),xtype:'combo',displayField:'trtyName',valueField:'trtyId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'};
	var r29={fieldLabel:C_TRADE_CONTRACT_NO,tabIndex:2,name:'consTradeContractNo',value:p.get('consTradeContractNo'),xtype:'textfield',anchor:'99%'};
	var r30={fieldLabel:C_INSURANCE_FEE,tabIndex:6,name:'consInsuranceFee',value:p.get('consInsuranceFee'),xtype:'textfield',anchor:'99%'};
	var r31={fieldLabel:C_CREDIT_NO,tabIndex:3,name:'consCreditNo',value:p.get('consCreditNo'),xtype:'textfield',anchor:'99%'};
	var r32={fieldLabel:C_TRTE,tabIndex:4,name:'trteId',value:p.get('trteId'),store:getTRTE_S(),xtype:'combo',displayField:'trteName',valueField:'trteId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	var t51={title:C_TRADE_INFO,layout:'column',padding:5,border:false,collapsible:true,items:[
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r27,r28]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r29,r30]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r31]},
   		{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r32]}]};
	
	
	var r34={fieldLabel:C_SCAC_CODE,tabIndex:8,name:'consScacCode',value:p.get('consScacCode'),xtype:'textfield',anchor:'99%'};
	var r35={fieldLabel:C_BOOK_US_NO,tabIndex:9,name:'consBookingDeclareNoUs',value:p.get('consBookingDeclareNoUs'),xtype:'textfield',anchor:'99%'};
	var r36={fieldLabel:C_US_FULLSHIP,tabIndex:10,name:'consUsFullShip',value:p.get('consUsFullShip'),store:USFU_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'};
	var t52={title:C_AMS_INFO,layout:'column',padding:5,border:false,collapsible:true,items:[    	
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r34]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r35]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r36]}]};
	var r37={fieldLabel:C_F_SHIPPER,tabIndex:11,name:'consFShipper',value:p.get('consFShipper'),xtype:'textarea',anchor:'99%'};
	var r38={fieldLabel:C_F_CONSIGNEE,tabIndex:12,name:'consFConsignee',value:p.get('consFConsignee'),xtype:'textarea',anchor:'99%'};
	var r39={fieldLabel:C_F_NOTIFY,tabIndex:13,name:'consFNotifyParty',value:p.get('consFNotifyParty'),xtype:'textarea',anchor:'99%'};
	var t53={title:C_FSHIPPER_INFO,layout:'column',padding:5,border:false,collapsible:true,items:[
    	{columnWidth:.34,layout:'form',border:false,labelWidth:70,items:[r37]},
    	{columnWidth:.33,layout:'form',border:false,labelWidth:70,items:[r38]},
    	{columnWidth:.33,layout:'form',border:false,labelWidth:70,items:[r39]}]};
	var r40={fieldLabel:C_EXT_1,tabIndex:14,name:'attr1',value:p.get('attr1'),xtype:'textfield',anchor:'99%'};
	var r41={fieldLabel:C_EXT_3,tabIndex:16,name:'attr3',value:p.get('attr3'),xtype:'textfield',anchor:'99%'};
	var r42={fieldLabel:C_EXT_5,tabIndex:18,name:'attr5',value:p.get('attr5'),xtype:'textfield',anchor:'99%'};
	var r43={fieldLabel:C_EXT_7,tabIndex:20,name:'attr7',value:p.get('attr7'),xtype:'textfield',anchor:'99%'};
	var r44={fieldLabel:C_EXT_9,tabIndex:22,name:'attr9',value:p.get('attr9'),xtype:'textarea',anchor:'99%'};
	var r45={fieldLabel:C_EXT_2,tabIndex:15,name:'attr2',value:p.get('attr2'),xtype:'textfield',anchor:'99%'};
	var r46={fieldLabel:C_EXT_4,tabIndex:17,name:'attr4',value:p.get('attr4'),xtype:'textfield',anchor:'99%'};
	var r47={fieldLabel:C_EXT_6,tabIndex:19,name:'attr6',value:p.get('attr6'),xtype:'textfield',anchor:'99%'};
	var r48={fieldLabel:C_EXT_8,tabIndex:21,name:'attr8',value:p.get('attr8'),xtype:'textfield',anchor:'99%'};
	var r49={fieldLabel:C_EXT_10,tabIndex:23,name:'attr10',value:p.get('attr10'),xtype:'textarea',anchor:'99%'};
	var t54={title:C_OTHER_INFO,layout:'column',padding:5,collapsible:true,border:false,items:[
    	{columnWidth:.5,layout:'form',border:false,labelWidth:70,items:[r40,r41,r42,r43,r44]},
    	{columnWidth:.5,layout:'form',border:false,labelWidth:70,items:[r45,r46,r47,r48,r49]}]};
	
	var t5= {id:'C_B_K_'+p.get('id'),title:C_EXT_INFO+'(K)',height:500,
			items:p.get('consBizClass')==BC_E?[t51,t52,t53,t54]:[t51,t54]};
    var t6={id:'C_B_T_'+p.get('id'),title:C_HBL_INFO+'(T)',height:450,autoScroll:true,
    		layout:'form',deferredRender:false,collapsible:true,items:[this.hblGrid]};
    
    var tabs=[t1,t3,t4,t5];
    
	if(p.get('consBizType')==BT_C){
    	var t2={id:'C_B_X_'+p.get('id'),border:false,title:C_CONT_INFO+'(X)',height:500,
    		layout:'fit',items:[this.contGrid]};
		
		tabs=[t1,t2,t3,t4,t5];
		if(p.get('consBizClass')==BC_I) tabs=[t1,t2,t3,t6,t4,t5];
	};
	
	this.expEmail=function(code,sub){
		var to='';var cc='';var msg='';
		EXPM(to,cc,sub,msg,code,'consId='+p.get('consId'));
	};
	this.expFax=function(code,sub){
        var to=p.get('custFax');var cc='';var msg='';
        EXPM(to,cc,sub,msg,code,'consId='+p.get('consId'),3);
    };
    this.expExcel=function(c){
    	if(c=='BOOK_C')
    		EXPC(c,'&expeType=R&consId='+p.get('consId'));
    	else
    		EXPC(c,'&consId='+p.get('consId'));
    };
    
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
			params:{A:'CONS_U',consId:p.get('consId'),consStatus:s},
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
		failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
    };
    this.unlock=function(){
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
    		params:{A:'CONS_U',consId:p.get('consId'),consStatusLock:0},
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
		failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
    };
    this.start=function(){this.updateStatus('1');};
    this.check=function(){this.updateStatus('2');};
    this.exit=function(){this.updateStatus('3');};
    this.renew=function(){this.updateStatus('4');};
    this.quit=function(){
    	XMG.confirm(SYS,M_CONS_QUIT_C,function(btn){
    		if(btn=='yes') this.updateStatus('5');
    	},this);
    };
    this.rebook=function(){this.updateStatus('1');};
    this.cancel=function(){
    	XMG.confirm(SYS,M_CONS_CANCEL_C,
    		function(btn){
    			if(btn=='yes') 
    				this.updateStatus('6');
    		},
    	this);
    };
    this.finished = function(){
    	XMG.confirm(SYS,M_CONS_CONFIRMED_F,
    		function(btn){
    			if(btn=='yes') 
    				this.updateStatus('7');
    		},
    	this);
    };
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
    
    this.MoidfyConsNo=function(){
    	XMG.prompt(SYS,C_CONS_NO_NEW,function(b,v){
			if(b=='ok'){
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
		    		params:{A:'CONS_MODIFY_NO',consId:p.get('consId'),consNo:v},
				success: function(res){
					var c = XTR(res.responseXML,'FConsign',FConsign);
					
					p.beginEdit();	
					p.set('consNo',v);
					p.set('version',c.get('version'));
					p.endEdit();
					
					var t = T_MAIN.getComponent('C_'+ p.get('id'));
					var title=getBT(p.get('consBizType'))+getBC(p.get('consBizClass'))+getSHTY(p.get('consShipType'))+'委托【'+p.get("consNo")+'】';
					t.setTitle(title);
					this.find('name','consNo')[0].setValue(p.get('consNo'));
					
					var mn = this.find('name','consMasterNo');
					if(mn && mn.length>0){
						masterNo = mn[0];
						masterNo.setValue(p.get('consMasterNo'));
					}					
					XMG.alert(SYS,M_S);					
				},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
			}
		},this);
    };
    
	this.updateToolBar = function(s){
		var tb=this.getTopToolbar();
		locked=p.get('consStatusLock')==1;
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(m+F_M)||locked||disable||p.get('consStatus')==7);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(m+F_M)||locked||disable||s!=0);
    	if(tb.getComponent('TB_C')) tb.getComponent('TB_C').setDisabled(NR(m+F_M)||locked||disable||s!=1);
    	if(tb.getComponent('TB_D')) tb.getComponent('TB_D').setDisabled(NR(m+F_M)||locked||disable||s!=2);
    	if(tb.getComponent('TB_E')) tb.getComponent('TB_E').setDisabled(NR(m+F_M)||locked||disable||s!=2);
    	if(tb.getComponent('TB_F')) tb.getComponent('TB_F').setDisabled(NR(m+F_M)||locked||disable||s==5||s==7);
    	if(tb.getComponent('TB_G')) tb.getComponent('TB_G').setDisabled(NR(m+F_M)||locked||disable||s<2||s==7);
    	if(tb.getComponent('TB_H')) tb.getComponent('TB_H').setDisabled(NR(m+F_F)||locked||disable||s!=2);    	
    	
    	if(tb.getComponent('TB_I')) tb.getComponent('TB_I').setDisabled(NR(m+F_M)||locked||disable||p.get('consStatus')!=0);
    	if(tb.getComponent('TB_J')) tb.getComponent('TB_J').setDisabled(NR(m+F_M)||locked||disable||p.get('consStatus')!=1);
    	if(tb.getComponent('TB_K')) tb.getComponent('TB_K').setDisabled(NR(m+F_M)||locked||disable||p.get('consStatus')!=2);
    	if(tb.getComponent('TB_L')) tb.getComponent('TB_L').setDisabled(NR(m+F_F)||locked||disable||p.get('consStatus')!=3);  	
    	if(tb.getComponent('TB_U')) tb.getComponent('TB_U').setDisabled(NR(m+F_UL)||locked!=1);
    	if(tb.getComponent('TB_P')) tb.getComponent('TB_P').setDisabled(NR(m+F_M)||p.get('consStatus')==7);
    	if(tb.getComponent('TB_M_CONS_NO')) tb.getComponent('TB_M_CONS_NO').setDisabled(NR(m+F_MIDIFY_CONS_NO)||locked==1||p.get('consStatus')==7);
    };
    //TopBar
	var b1={text:C_SAVE,itemId:'TB_A',iconCls:'save',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')==7,scope:this,handler:this.save};
	var b2={text:C_BOOK_START,itemId:'TB_B',iconCls:'save',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=0,scope:this,handler:this.start};
	var b3={text:C_BOOK_CONFIRM,itemId:'TB_C',iconCls:'check',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1,scope:this,handler:this.check};
	var b4={text:C_BOOK_EXIT,itemId:'TB_D',iconCls:'exit',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=2,scope:this,handler:this.exit};
	var b5={text:C_BOOK_REASSIGN,itemId:'TB_E',iconCls:'redo',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=2,scope:this,handler:this.renew};
	var b6={text:C_BOOK_QUIT,itemId:'TB_F',iconCls:'consCancel',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')==5||p.get('consStatus')==7,scope:this,handler:this.quit};
	var b7={text:C_BOOK_RENEW,itemId:'TB_G',iconCls:'renew',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')<2||p.get('consStatus')==7,scope:this,handler:this.rebook};
	var b8={text:C_INVALID,itemId:'TB_H',iconCls:'cancel',disabled:NR(m+F_F)||locked||disable||p.get('consStatus')!=2,scope:this,handler:this.cancel};
	var b9={text:C_COPY,itemId:'TB_N',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:function(){Fos.showConsign(Fos.copyConsign(p));}};
	var b16={text:C_COPY_FROM,itemId:'TB_O',iconCls:'copy',disabled:NR(m+F_M)||locked||disable,scope:this,handler:this.copyFrom};
	
	var b11={text:C_ARRIVE,itemId:'TB_I',iconCls:'plane',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=0,scope:this,handler:this.arrive};
	var b12={text:C_SWITCH_BL,itemId:'TB_J',iconCls:'release',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1,scope:this,handler:this.release};	
	var b13={text:C_RELEASE,itemId:'TB_K',iconCls:'cart',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=2,scope:this,handler:this.releaseCargo};
	var b14={text:C_SEND_CARGO,itemId:'TB_L',iconCls:'cart',disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=3,scope:this,handler:this.sendCargo};
	var b15={text:C_INVALID,itemId:'TB_M',iconCls:'cancel',disabled:NR(m+F_F)||locked||disable,scope:this,handler:this.cancel};
	
	var b17={text:C_UNLOCK,itemId:'TB_U',iconCls:'unlock',disabled:NR(m+F_UL)||locked!=1,scope:this,handler:this.unlock};
	var b18={text:C_FINISHED,itemId:'TB_P',iconCls:'ok',disabled:NR(m+F_M)||p.get('consStatus')==7,scope:this,handler:this.finished};
	
	var btnModifyConsignNo={text:C_MODIFY_CONS_NO,itemId:'TB_M_CONS_NO',iconCls:'option',
			disabled:NR(m+F_MIDIFY_CONS_NO)||locked==1||p.get('consStatus')==7,scope:this,handler:this.MoidfyConsNo};
	
	var exp1=CREATE_E_MENU(M_ARRIVE_ADVICE,function(){this.expExcel('ARAD');},function(){this.expEmail('ARAD',M_ARRIVE_ADVICE);},function(){this.expFax('ARAD',M_ARRIVE_ADVICE);},this);
	var exp2=CREATE_E_MENU(M_BOOK,function(){this.expExcel('CONS_B');},function(){this.expEmail('CONS_B',M_BOOK);},function(){this.expFax('CONS_B',M_BOOK);},this);
	var exp3=CREATE_E_MENU(M_BOOK_CONFIRM,function(){this.expExcel('BOOK_C');},function(){this.expEmail('BOOK_C',M_BOOK_CONFIRM);},function(){this.expFax('BOOK_C',M_BOOK_CONFIRM);},this);
	var exp4=CREATE_E_MENU(M_CONSIGN,function(){this.expExcel('CONS');},function(){this.expEmail('CONS',M_CONSIGN);},function(){this.expFax('CONS',M_CONSIGN);},this);
	var exp5=CREATE_E_MENU(M_BL_ER,function(){this.expExcel('BLER');},function(){this.expEmail('BLER',M_BL_ER);},function(){this.expFax('BLER',M_BL_ER);},this);
	var exp6=CREATE_E_MENU(M_BL_SEAWAY,function(){this.expExcel('SEAW');},function(){this.expEmail('SEAW',M_BL_SEAWAY);},function(){this.expFax('SEAW',M_BL_SEAWAY);},this);
	var exp7=CREATE_E_MENU(M_LOAD_ADVICE,function(){this.expExcel('WARE_INFO');},function(){this.expEmail('WARE_INFO',M_LOAD_ADVICE);},function(){this.expFax('WARE_INFO',M_LOAD_ADVICE);},this);
	var exp8=CREATE_E_MENU(M_SGS_ADVICE,function(){this.expExcel('SGS_INFO');},function(){this.expEmail('SGS_INFO',M_SGS_ADVICE);},function(){this.expFax('SGS_INFO',M_SGS_ADVICE);},this);
	var exp9=CREATE_E_MENU(M_SHIP_ADVICE,function(){this.expExcel('SHIP_INFO');},function(){this.expEmail('SHIP_INFO',M_SHIP_ADVICE);},function(){this.expFax('SHIP_INFO',M_SHIP_ADVICE);},this);
	var exp10=CREATE_E_MENU(M_BUSSINESS_PROCESS,function(){this.expExcel('BUSINESS_PROCESS');},function(){this.expEmail('BUSINESS_PROCESS',M_BUSSINESS_PROCESS);},function(){this.expFax('BUSINESS_PROCESS',M_BUSSINESS_PROCESS);},this);
	var expM=[];
	if(p.get('consBizType')==BT_C) 
		expM=p.get('consBizClass')==BC_I?[exp1,exp10]:[exp2,exp3,exp4,exp5,exp6,exp7,exp8,exp9];		
	else if(p.get('consBizType')==BT_A){
		expM=p.get('consBizClass')==BC_I?[exp1]:[exp2,exp3,exp5,exp6,exp7];
	}
	else 
		expM=p.get('consBizClass')==BC_I?[exp1]:[exp2,exp3,exp5,exp6];
	var b10={text:C_EXPORT,iconCls:'print',disabled:NR(m+F_E)||locked,scope:this,menu:{items:expM}};
	
	var tbs=[];
	if(p.get('consBizType')==BT_G||p.get('consBizType')==BT_I){
		tbs=[b1,'-',b8,'-',b9,'-',b16,'-',btnModifyConsignNo,'-',b17];
	}
	else{
		if(p.get('consBizClass')==BC_I) 
			tbs=[b1,'-',b11,'-',b12,'-',b13,'-',b14,'-',b15,'-',b9,'-',b16,'-',btnModifyConsignNo,'-',b10,'-',b18,'-',b17];
		else if(p.get('consBizClass')==BC_E) 
			tbs=[b1,'-',b2,'-',b3,'-',b4,'-',b5,'-',b6,'-',b7,'-',b8,'-',b9,'-',b16,'-',btnModifyConsignNo,'-',b10,'-',b18,'-',b17];
		else if(p.get('consBizClass')==BC_T)
			tbs=[b1,'-',b15,'-',b9,'-',btnModifyConsignNo,'-',b10,'-',b17];
	}
	
	var bk=new Ext.KeyMap(Ext.getDoc(), {
		key:'sbqtgxrfa',alt:true,
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
						if(!tb.getComponent('TB_N').disabled) Fos.showConsign(Fos.copyConsign(p));break;					
				}}
		 	}
		},
		stopEvent: false,scope:this
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
		stopEvent: false
	});
	Fos.BookTab.superclass.constructor.call(this, { 
		id: "T_BOOK_"+p.get('id'),title:C_CONSIGN+"(F1)",header:false,autoScroll:true,
		border:false,labelAlign:'right',bodyStyle:'padding:2px 10px 10px 2px',tbar:tbs,		
		items:[{id:'T_BOOK_T_'+p.get('id'),xtype:'tabpanel',plain:true,activeTab:0,
	    	listeners:{scope:this,tabchange:function(m,a){a.doLayout();}},items:tabs
		}]
	});
};
Ext.extend(Fos.BookTab,Ext.FormPanel);
