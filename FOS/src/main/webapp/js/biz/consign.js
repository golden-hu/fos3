//新建委托
Fos.newConsign = function(bc,bt,st){
	var sr='';
	if(bt==BT_G) 
		sr=SR_CUDE; 
	else if(bt==BT_I) 
		sr=SR_INSP;
	var rid=GGUID();
	
	var c = new FConsign({id:rid,
		consId:rid,
		consNotifyParty:'SAME AS CONSIGNEE',
		consNo:'N'+rid,
		consType:'A',
		consShipType:st,
		consActionType:'A',
		consMasterFlag:1,
		consBizClass:bc,
		consBizType:bt,
		consSource:0,
		consDate:new Date(),
		tranId:st=='LCL'?CFS:CY,
		consSailDate:bt==BT_G||BT_I?new Date():'',
		consServiceRequired:sr,
		version:0,
		consStatus:0,
		consStatusBooking:0,
		consStatusClearance:0,
		consStatusSwitchBl:0,
		consStatusSplit:0,
		consStatusInsp:0,
		consStatusCont:0,
		consStatusCarg:0,
		consStatusMbl:0,
		consStatusHbl:0,
		consStatusBBook:0,
		consStatusDepa:0,
		consStatusDocs:0,
		consStatusExp:0,
		consStatusAr:0,
		consStatusAp:0,
		consStatusInvoR:0,
		consStatusInvoP:0,
		consStatusAud:0,
		consStatusReassign:0,
		consStatusInCy:0,
		consStatusInCfs:0,
		consStatusOnBoard:0,
		consStatusEir:0,
		consStatusSendCont:0,
		consStatusLock:0,
		consReassignFrom:0,
		consStatusSettlement:0,
		consExternalFlag:0,		
		consTransFlag:0,
		consPartialFlag:0,
		consPol:bc==BC_E?getCFG('BASE_PORT'):'',
		consPolEn:bc==BC_E?getCFGD('BASE_PORT'):'',
		consPolCn:bc==BC_E?BASE_PORT_NAME_CN:'',				
		consPod:bc==BC_I?getCFG('BASE_PORT'):'',
		consPodEn:bc==BC_I?getCFGD('BASE_PORT'):'',
		consPodCn:bc==BC_I?BASE_PORT_NAME_CN:'',
		deptId:getCFG('DEFAULT_DEPT_'+bt),
		consOperatorId:CUSER_ID,
		consOperatorName:CUSER_NAME,
		consFumigateFlag:0,
		consQuarantineFlag:0,
		consTransferringFlag:0,
		rowAction:'N'});
	return c;
};

//复制委托
Fos.copyConsign = function(p){
	var c = new FConsign({});
	var rid=GGUID();
	var f = FConsign.prototype.fields;
	for (var i = 0; i < f.keys.length; i++) {
		var fn = ''+f.keys[i];
		c.set(fn,p.get(fn));
	}
	c.set('consDate',new Date());
	c.set('consId',rid);
	c.set('id',rid);
	c.set('consNo','N'+rid);
	c.set('version',1);
	c.set('consStatus',0);
	c.set('consStatusBooking',0);
	c.set('consStatusClearance',0);
	c.set('consStatusSwitchBl',0);
	c.set('consStatusSplit',0);
	c.set('consStatusInsp',0);
	c.set('consStatusCont',0);
	c.set('consStatusCarg',0);
	c.set('consStatusMbl',0);
	c.set('consStatusHbl',0);
	c.set('consStatusBBook',0);
	c.set('consStatusDepa',0);
	c.set('consStatusDocs',0);
	c.set('consStatusExp',0);
	c.set('consStatusAud',0);
	c.set('consStatusAr',0);
	c.set('consStatusAp',0);
	c.set('consStatusInvoR',0);
	c.set('consStatusInvoP',0);
	c.set('consMblNo','');
	c.set('consStatusReassign',0);
	c.set('consStatusInCy',0);
	c.set('consStatusInCfs',0);
	c.set('consStatusOnBoard',0);
	c.set('consStatusEir',0);
	c.set('consStatusSendCont',0);
	c.set('consReassignFrom',0);
	c.set('consStatusLock',0);
	c.set('consStatusSettlement',0);
	c.set('rowAction','N');
	c.set('fconId','');
	c.set('loliId','');
	c.set('consMasterFlag',p.get('consMasterFlag')==0?0:1);
	c.set('consMasterId',p.get('consMasterFlag')==0?p.get('consMasterId'):'');
	c.set('consMasterNo',p.get('consMasterFlag')==0?p.get('consMasterNo'):'');
	c.set('consMergeFlag',0);
	c.set('consMergeId','');
	c.set('consMergeNo','');
	c.set('rowAction','N');
	
	return c;
};

//显示委托
Fos.showConsign = function(p,listStore){
	var t = T_MAIN.getComponent('C_'+p.get("id"));
	if(t){
		T_MAIN.setActiveTab(t);
	} 
	else{
		t = new Fos.ConsignTab(p,listStore);
		T_MAIN.add(t);
		T_MAIN.setActiveTab(t);
	}
};

Fos.showConsignTabs = function(p){
	var tc = T_MAIN.getComponent('C_'+p.get("id"));
	
	if(!tc.getComponent('T_DOC_'+p.get('id'))){
		tc.add(new Fos.ConsDocGrid(p));
	};
	
	if(!tc.getComponent('T_EXPE_'+p.get('id'))){
		tc.add(new Fos.ExpensePanel(p,'C'));
	};
	
	if(!tc.getComponent('G_ATTACH'+p.get('id'))){
		tc.add(new Fos.AttachTab(p));
	};
	
	if(p.get('consServiceRequired').indexOf(SR_TRAN)!=-1){
		if(!tc.getComponent('T_TRAN_'+p.get('id'))){
			tc.add(new Fos.TransTab(p));
		}
	}
	else{
		var tranPanel = tc.getComponent('T_TRAN_'+p.get('id'));
		if(tranPanel){
			tc.remove(tranPanel);
		}
	}
	
	
	if(p.get('consServiceRequired').indexOf(SR_WARE)!=-1){
		if(!tc.getComponent('T_WARE_'+p.get('id'))){
			tc.add(new Fos.WarehouseTab(p));
		}
	}
	else{
		var warePanel = tc.getComponent('T_WARE_'+p.get('id'));
		if(warePanel){
			tc.remove(warePanel);
		}
	}
	
	if(p.get('consServiceRequired').indexOf(SR_CONT)!=-1){
		if(!tc.getComponent('T_CONT_'+p.get('id'))){
			if((p.get('consShipType')==ST_F||(p.get('consShipType')==ST_L&& p.get('consMasterFlag')=='1'))){
				tc.add(new Fos.ContainerTab(p));
			}
		}
	}
	else{
		var contPanel = tc.getComponent('T_CONT_'+p.get('id'));
		if(contPanel){
			tc.remove(contPanel);
		}
	}
	
	if(p.get('consServiceRequired').indexOf(SR_BL)!=-1){
		if(!tc.getComponent('T_BL_'+p.get('id'))){
			tc.add(new Fos.BLTab(p));
		}
	}
	else{
		var blPanel = tc.getComponent('T_BL_'+p.get('id'));
		if(blPanel){
			tc.remove(blPanel);
		}
	}
	
	if(p.get('consServiceRequired').indexOf(SR_INSP)!=-1){
		if(!tc.getComponent('T_INSP_'+p.get('id'))){
			tc.add(new Fos.InspGridPanel(p));
		}
	}
	else{
		var inspPanel = tc.getComponent('T_INSP_'+p.get('id'));
		if(inspPanel){
			tc.remove(inspPanel);
		}
	}
	
	if(p.get('consServiceRequired').indexOf(SR_CUDE)!=-1){
		if(!tc.getComponent('T_CUDE_'+p.get('id'))){
			tc.add(new Fos.CudeGridPanel(p));
		}
	}
	else{
		var cudePanel = tc.getComponent('T_CUDE_'+p.get('id'));
		if(cudePanel){
			tc.remove(cudePanel);
		}
	}	
	
	if(!tc.getComponent('T_SPLIT_'+p.get('id')) && p.get('consBizClass')==BC_I && p.get('consShipType')==ST_L){
		tc.add(new Fos.SplitTab(p));
	};
	
	
	if(p.get('consServiceRequired').indexOf(SR_BBOOK)!=-1){
		if(!tc.getComponent('T_BBOOK_'+p.get('id'))){
			tc.add(new Fos.BBookingTab(p));
		}
	}
	else{
		var bbookingPanel = tc.getComponent('T_BBOOK_'+p.get('id'));
		if(bbookingPanel){
			tc.remove(bbookingPanel);
		}
	}
	
	if(p.get('consServiceRequired').indexOf(SR_RABL)!=-1){
		if(!tc.getComponent('T_RABL_'+p.get('id'))){
			tc.add(new Fos.RailwayBlTab(p));
		}
	}
	else{
		var railPanel = tc.getComponent('T_RABL_'+p.get('id'));
		if(railPanel){
			tc.remove(railPanel);
		}
	}
	
	if(p.get('consServiceRequired').indexOf(SR_SESH)!=-1){
		if(!tc.getComponent('T_SESH_'+p.get('id'))){
			tc.add(new Fos.SecondShipTab(p));
		}
	}
	else{
		var secoPanel = tc.getComponent('T_SESH_'+p.get('id'));
		if(secoPanel){
			tc.remove(secoPanel);
		}
	}
};

Fos.ConsignGrid = function(bizClass,bizType,shipType,external) {	
	var store = new Ext.data.GroupingStore({url:SERVICE_URL+'?A=CONS_X',
		baseParams:{mt:'xml'},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',
			record:'FConsign',idProperty:'consId'},FConsign),
		remoteSort:true,autoLoad:false,
		sortInfo:{field:'consMasterNo', direction:'DESC'}
	});
	
	var queryParams=[];
	queryParams[queryParams.length]= new QParam({key:'consBizClass',value:bizClass,op:EQ});
	queryParams[queryParams.length]= new QParam({key:'consBizType',value:bizType,op:EQ});
	queryParams[queryParams.length]= new QParam({key:'consExternalFlag',value:external?external:'0',op:EQ});
	queryParams[queryParams.length]= new QParam({key:'consStatus',value:8,op:2});
	
	if(shipType!='') 
		queryParams[queryParams.length] = new QParam({key:'consShipType',value:shipType,op:EQ});
		
	store.baseParams.xml = FOSX(QTX(queryParams));
	
    store.load({params:{start:0,limit:C_PS}});   
    
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true});	
	var c1=new Ext.grid.RowNumberer();
	
	var colStatusLock = {header:'',
			dataIndex:'consStatusLock',
			menuDisabled:true,
			fixed:true,
			width:25,
			renderer:function(v){
               if(v==1) 
            	   return '<div class="locked"></div>'; 
               else 
            	   return '';
         }
	};
	
    var colMasterFlag = {header:C_M_CONS,width:30,
    		hidden:bizType!=BT_C,
    		dataIndex:"consMasterFlag",
    		renderer:boolRender
    };
    
    var colStatus = {header:C_STATUS,
    		width:100,
    		dataIndex:"consStatus",
    		renderer:getCONS_STATUS
    };
    
    var colConsNo = {header:C_CONS_NO,width:150,dataIndex:"consNo"};    
    var colCustName = {header:(bizType==BT_B)?C_CHARTER:C_BOOKER,width:200,dataIndex:"custName"};
    var colConsDate = {header:C_CONS_DATE,width:80,dataIndex:"consDate",renderer:formatDate};
    var colTranId = {header:C_TTER,dataIndex:"tranId",width:80,renderer:getTRAN};
    var colPateId = {header:C_PATE,dataIndex:"pateId",width:80,renderer:getPATE};
    var colShipType = {header:C_SHIP_TYPE,dataIndex:"consShipType",width:80};
    var colVessName = {header:C_VESS,hidden:bizType==BT_A,width:100,dataIndex:"vessName"};
    var colVoyaName = {header:bizType==BT_A?C_FLIGHT:C_VOYA,width:80,dataIndex:"voyaName"};
    var colLoadDate = {header:C_SHIP_LOAD_DATE,dataIndex:"consLoadDate",renderer:formatDate};
    var colSailDate = {header:C_SAIL_DATE,dataIndex:"consEtd",renderer:formatDate};
    var colPolEn = {header:C_POL,dataIndex:"consPolEn"};
    var colPodEn = {header:C_POD,width:100,dataIndex:"consPodEn"};
    var colPotEn = {header:C_POT,dataIndex:"consPotEn"};
    var colDestination = {header:C_DESTINATION_PORT,width:100,dataIndex:"consDeliveryPlace"};    
    var colMblNo = {header:bizType==BT_A?'MAWB No.':C_MBL_NO,width:80,dataIndex:"consMblNo"};
    var colHblNo = {header:bizType==BT_A?'HAWB No.':C_HBL_NO,width:80,dataIndex:"consHblNo"};
    
    var colTotalPackages = {header:C_PACKAGES,width:80,dataIndex:"consTotalPackages",align:'right',css:'font-weight:bold;'};
    var colTotalGrossWeight = {header:C_GW,width:80,dataIndex:"consTotalGrossWeight",renderer:rateRender,align:'right',css:'font-weight:bold;'};
    var colTotalMeasurement = {header:C_CBM,width:80,dataIndex:"consTotalMeasurement",renderer:rateRender,align:'right',css:'font-weight:bold;'};
    var colContainersInfo = {header:C_CONT_INFO,width:80,dataIndex:"consContainersInfo",renderer:nullRender};
    var colTotalContainers = {header:C_CONT_NUM,width:80,dataIndex:"consTotalContainers",align:'right',renderer:function(v){return (v)?v:0;},css:'font-weight:bold;'};
   
    var colCarrierName = {header:C_CARRIER,dataIndex:"consCarrierName"};
    var colBookingAgencyName = {header:C_BOOK_AGENCY,dataIndex:"consBookingAgencyName"};
    var colConsMasterNo = {header:C_M_CONS_NO,width:150,dataIndex:"consMasterNo"};
    var colConsRemarks = {header:C_REMARKS,dataIndex:"consRemarks"};
    var colConsContractNo = {header:C_CONTRACT_NO,dataIndex:"consContractNo"};
    var colCargoOwner = {header:C_CARGO_OWNER,width:200,dataIndex:"consShipper"};
    var colConsignee = {header:C_CONSIGNEE,width:200,dataIndex:"consConsignee"};
	
	var colBlCargoPackages = {header:C_BL_PACKAGES,width:80,dataIndex:"blCargoPackages",align:'right',css:'font-weight:bold;'};
    var colBlCargoGrossWeight = {header:C_BL_GW,width:80,dataIndex:"blCargoGrossWeight",renderer:rateRender,align:'right',css:'font-weight:bold;'};
    var colBlCargoMeasurement = {header:C_BL_CBM,width:80,dataIndex:"blCargoMeasurement",renderer:rateRender,align:'right',css:'font-weight:bold;'};
	
	    var colOperator = {header:C_OPERATOR,width:80,dataIndex:"consOperatorName"};    
    var colEta = {header:C_ETA,dataIndex:"consEta",renderer:formatDate};
    
    var colHarbourOpenTime = {header:C_HARBOUR_OPEN_TIME,dataIndex:"harbourOpenTime",width:150};
    var colHarbourCloseTime = {header:C_HARBOUR_CLOSE_TIME,dataIndex:"harbourCloseTime",width:150};
    // 业务员
    var colSalesRep = {header:C_SALES,width:80,dataIndex:"consSalesRepName"};
    
    var cm=new Ext.grid.ColumnModel({columns:
    	(bizType==BT_B)?[c1,colStatusLock,colMasterFlag,colConsMasterNo,colStatus,colConsNo,
             colConsContractNo,colOperator,colCustName,colCargoOwner,colConsignee,colConsDate,
             colTranId,colPateId,colShipType,colVessName,colVoyaName,colHarbourOpenTime,
             colHarbourCloseTime,colLoadDate,colSailDate,colEta,colPolEn,colPodEn,colDestination,
             colMblNo,colHblNo,colTotalPackages,colTotalGrossWeight,colTotalMeasurement,
             colBlCargoPackages,colBlCargoGrossWeight,colBlCargoMeasurement,
             colPotEn,colCarrierName,colBookingAgencyName,colConsRemarks]:
            [c1,colStatusLock,colMasterFlag,colStatus,colConsMasterNo,colOperator,colSalesRep,colConsNo,colCustName,
             colConsDate,colTranId,colPateId,colShipType,colVessName,colVoyaName,colHarbourOpenTime,
             colHarbourCloseTime,colLoadDate,colSailDate,colEta,colPolEn,colPodEn,colDestination,
             colMblNo,colHblNo,colTotalPackages,colTotalGrossWeight,colTotalMeasurement,
             colContainersInfo,colTotalContainers,colPotEn,colCarrierName,colBookingAgencyName,
             colConsRemarks,colConsContractNo],
		defaults: {sortable: true}
    });		
    
    setQueryParams=function(a){
    	queryParams = a;
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
		
	//新增委托
	var btnAdd = new Ext.Button({
		text:C_ADD,
		disabled:NR(m+F_M)||(bizType==BT_C&&shipType==''),
		iconCls:'add',
		handler:function(){
			var c=Fos.newConsign(bizClass,bizType,shipType);
			c.set('consExternalFlag',external?external:'0');
			Fos.showConsign(c);
		}
	});
		
	//并单
	var btnMerge = new Ext.Button({
		text:(shipType=='LCL'?C_LCL_ADD_CONSIGN:C_MERGE_CONSIGN),
		disabled:NR(m+F_M),
		iconCls:'add',
		handler:function(){
			var c = sm.getSelected();
			if(c.get('consMasterFlag')=='1'){
				var b = Fos.copyConsign(c);
				b.set('consMasterFlag',0);
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
			else 
				XMG.alert(SYS,M_SEL_M_CONS);
		}
	});
	
	//编辑
	var btnEdit = new Ext.Button({text:C_EDIT,
		disabled:NR(m+F_V),
		iconCls:'option',
		handler:function(){
			var b=sm.getSelected();
			if(b) 
				Fos.showConsign(b); 
			else 
				XMG.alert(SYS,M_NO_DATA_SELECTED);
		}
	});
	    
	//删除
	var btnRemove = new Ext.Button({text:C_REMOVE,
		disabled:NR(m+F_R),
		iconCls:'remove',
		handler:function(){
			var a =sm.getSelections();
	       	if(a.length){
	       		XMG.confirm(SYS,M_R_C,function(btn){
	           	if(btn=='yes'){
	           		var xml = SMTX4RM(sm,'FConsign','consId','consMasterId');
	           		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
					success: function(){
						sm.each(function(p){store.remove(p);});
						XMG.alert(SYS,M_S);
					},
					failure: function(r,o){
						XMG.alert(SYS,M_F+r.responseText);
					},
					xmlData:FOSX(xml)});
	           }});
			}
	       	else 
	       		XMG.alert(SYS,M_R_P);
	    }
	});
		
	//高级查询
	var btnSearch = new Ext.Button({text:C_SEARCH,
		iconCls:'search',
		handler:function(){
			var w=new Fos.ConsLookupWin(bizClass,bizType,shipType,'CONS_X',store,setQueryParams);
			w.show();
		}
	});	
	
	
	//导出
	var btnExport = new Ext.Button({text:C_EXPORT,
		disabled:NR(m+F_E),
		iconCls:'print',
		handler:function(){
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
		}
	});	
		
	var fastSearch = function(){
		var consNo=kw.getValue();
		if(!consNo){
			XMG.alert(SYS,M_INPUT_BIZ_NO,function(b){kw.focus();});
			return;
		};
		
		var queryParams = [];
		queryParams[queryParams.length]= new QParam({key:'consBizClass',value:bizClass,op:EQ});
		queryParams[queryParams.length]= new QParam({key:'consBizType',value:bizType,op:EQ});
		queryParams[queryParams.length]= new QParam({key:'consExternalFlag',value:external?external:'0',op:EQ});
    	if(shipType!='') 
    		queryParams[queryParams.length]=new QParam({key:'consShipType',value:shipType,op:EQ});
		
    	queryParams[queryParams.length] = new QParam({key:'consNo',value:consNo,op:LI,orGroup:'consNo'});
    	queryParams[queryParams.length] = new QParam({key:'consMblNo',value:consNo,op:LI,orGroup:'consNo'});
    	queryParams[queryParams.length] = new QParam({key:'consHblNo',value:consNo,op:LI,orGroup:'consNo'});
    	queryParams[queryParams.length] = new QParam({key:'containerNo',value:consNo,op:LI,orGroup:'consNo'});
    	queryParams[queryParams.length] = new QParam({key:'consRefNo',value:consNo,op:LI,orGroup:'consNo'});
    	queryParams[queryParams.length] = new QParam({key:'consContractNo',value:consNo,op:LI,orGroup:'consNo'});
		
 		store.baseParams.xml=FOSX(QTX(queryParams)); 		
    	
     	store.reload({params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);
     		}
     	});
	}
	
	var kw = new Ext.form.TextField({
		emptyText:C_FAST_SEARCH_KEY,
		width:250,
		listeners:{scope:this,		
		specialkey:function(c,e){
			if(e.getKey()==Ext.EventObject.ENTER) 
				fastSearch();
			}
		}
	});	
	
	//快速查询
	var btnFastSearch = new Ext.Button({text:C_FAST_SEARCH,
		iconCls:'search',
		handler:fastSearch
	});	
	
	
	//重置
	var btnReset = new Ext.Button({text:C_RESET,
		iconCls:'refresh',
		handler:function(){
			kw.setValue('');
			var queryParams = [];
			queryParams[queryParams.length]= new QParam({key:'consBizClass',value:bizClass,op:EQ});
			queryParams[queryParams.length]= new QParam({key:'consBizType',value:bizType,op:EQ});
			queryParams[queryParams.length]= new QParam({key:'consExternalFlag',value:external?external:'0',op:EQ});
	    	if(shipType!='') 
	    		queryParams[queryParams.length]=new QParam({key:'consShipType',value:shipType,op:EQ});						
	 		store.baseParams.xml=FOSX(QTX(queryParams)); 
	 		
	    	store.reload({params:{start:0,limit:C_PS}});
	    }
	});
		
	
	//任务
	var btnTask = new Ext.Button({text:C_TASK,
		iconCls:'task',
		handler:function(){
			var b=sm.getSelected();
			if(b){
				var w=new Fos.TaskWin(b);w.show();
			}
			else 
				XMG.alert(SYS,M_NO_DATA_SELECTED);
		}
	});
	
    var tbs=[btnAdd, '-',btnEdit,'-',btnRemove,'-',btnSearch,'-',btnExport,'-',kw,btnFastSearch,'-',btnReset,'-',btnTask,'-'];
    
    if(bizType==BT_B){
    	tbs=[btnAdd, '-',btnEdit,'-',btnRemove,'-',btnSearch,'-',btnExport,'-',kw,btnFastSearch,'-',btnReset,'-',btnTask,'-'];
    }     	
    else if (bizType==BT_C&&bizClass==BC_E){
    	tbs=[btnAdd, '-',btnMerge,'-',btnEdit,'-',btnRemove,'-',btnSearch,'-',btnExport,'-',kw,btnFastSearch,'-',btnReset,'-',btnTask,'-'];
    }
    	
    
	Fos.ConsignGrid.superclass.constructor.call(this, {
	    id:'G_CONS_'+bizClass+'_'+bizType+(shipType==''?'':'_'+shipType)+(external?'_'+external:''),
	    iconCls:'grid',
	    store: store,
	    title:title,
	    header:false,
	    loadMask:true,
		sm:sm,
		cm:cm,
		stripeRows:true,
		closable:true,
		ddGroup:'consGridDDGroup',
		enableDragDrop:shipType=='LCL'?true:false,	
		listeners:{
			rowdblclick: function(grid, rowIndex, event){
				var c=grid.getSelectionModel().getSelected();
				if(c){
					Fos.showConsign(c);
				}
			},
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
						if(rto.get('consMasterFlag')!='1'||rfrom.get('consMasterId')==rto.get('consId')) 
							return false;
						var t=new Ext.Template(M_LCL_TRANS);
						var msg=t.apply([rfrom.get('consNo'),rto.get('consNo')]);
						Ext.Msg.confirm(SYS,msg,function(btn){
	    					if (btn == 'yes'){
	        					Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
									params:{A:'CONS_MNO_U',
										consMasterFlag:0,
										consMasterId:rto.get('consId'),
										consMasterNo:rto.get('consNo'),
										consId:rfrom.get('consId')
									},
									success: function(r){
										store.reload(store.lastOptions);
										XMG.alert(SYS,M_S);
										return true;
									},
									failure: function(r){
										XMG.alert(SYS,M_F+r.responseText); 
										return false;
									}
								});					
	    					}
	    					else return false;
						});					
					}
				}); 
			}
		},
		view:new Ext.grid.GroupingView(groupViewCfg),
		tbar:tbs,bbar:PTB(store,C_PS)
	});    
};
Ext.extend(Fos.ConsignGrid, Ext.grid.GridPanel);

Fos.ConsignTab = function(p){
	
	var items=[];
	items[0]=new Fos.BookTab(p);
	
	if(p.get('rowAction')!='N'){
		items[items.length] = new Fos.ConsDocGrid(p);
		items[items.length] = new Fos.ExpensePanel(p,'C');
		items[items.length] = new Fos.AttachTab(p);
		items[items.length] = new Fos.TaskPanel(p);
	}
		
	if(p.get('consServiceRequired').indexOf(SR_TRAN)!=-1) 
		items[items.length]=new Fos.TransTab(p);
	
	if(p.get('consServiceRequired').indexOf(SR_WARE)!=-1) 
		items[items.length]=new Fos.WarehouseTab(p);
	
	if(p.get('consServiceRequired').indexOf(SR_CONT)!=-1 && (p.get('consShipType')==ST_F||(p.get('consShipType')==ST_L&& p.get('consMasterFlag')=='1'))) 
		items[items.length]=new Fos.ContainerTab(p);
	
	if(p.get('consServiceRequired').indexOf(SR_BL)!=-1) 
		items[items.length]=new Fos.BLTab(p);
	
	if(p.get('consServiceRequired').indexOf(SR_INSP)!=-1) 
		items[items.length]=new Fos.InspGridPanel(p);
	
	if(p.get('consServiceRequired').indexOf(SR_CUDE)!=-1) 
		items[items.length]=new Fos.CudeGridPanel(p);
	
	if(p.get('consServiceRequired').indexOf(SR_BBOOK)!=-1) 
		items[items.length]=new Fos.BBookingTab(p);	
	
	if(p.get('consServiceRequired').indexOf(SR_SESH)!=-1) 
		items[items.length]=new Fos.SecondShipTab(p);
	
	if(p.get('consServiceRequired').indexOf(SR_RABL)!=-1) 
		items[items.length]=new Fos.RailwayBlTab(p);
	
	if(p.get('consBizClass')==BC_I && p.get('consShipType')==ST_L) 
		items[items.length]=new Fos.SplitTab(p);	
	
	var status = {itemId:'TB_M',
			disabled:true,
			text:C_STATUS+'：'+(p.get('consBizClass')==BC_I?getCIST(p.get('consStatus')):getCOST(p.get('consStatus')))
		};
	
	var title=getBT(p.get('consBizType'));title+=getBC(p.get('consBizClass'));
	
	if(p.get('consBizType')==BT_C){
	   if(p.get('consBizClass')==BC_I&&p.get('consShipType')=='LCL') title+=C_SWITCH; 
	   else title+=getSHTY(p.get('consShipType'));
	}
	
	title+=C_CONSIGN+'-'+p.get("consNo");
	
	Fos.ConsignTab.superclass.constructor.call(this,{id:"C_" + p.get("id"),
		items:items,
		title:title,
		iconCls:'class',
		deferredRender:false,
		closable:true,
		activeTab:0,
		bbar:[getMB(p),'->',status],
		listeners:{scope:this,
			tabchange:function(m,a){a.doLayout();}
		}
	});
};
Ext.extend(Fos.ConsignTab,Ext.TabPanel);

//委托查询
Fos.ConsLookupWin = function(bizClass,bizType,shipType,action,store,setQueryParams){
	
	/*var t1={id:'T_CONS_LOOK_1',title:C_LOOK_BY_NO,layout:'form',labelWidth:70,labelAlign:"right",
		items:[{fieldLabel:C_CONS_NO,name:'consNo',xtype:'textarea',anchor:'90%'},
    		{boxLabel:C_LOOK_SMART,name:'consNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}]};
	
	var t6={id:'T_CONS_LOOK_6',title:C_LOOK_BY_CONT_NO,layout:'form',labelWidth:70,labelAlign:"right",
		items: [{fieldLabel:C_CONT_NO,name:'contNo',xtype:'textarea',anchor:'90%'},
			{boxLabel:C_LOOK_SMART,name:'contNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}]};	
	
	var t2={id:'T_CONS_LOOK_2',title:C_LOOK_BY_MBL,layout:'form',labelWidth:70,labelAlign:"right",
		items: [{fieldLabel:'M/BL No.',name:'consMblNo',xtype:'textarea',anchor:'90%'},
			{boxLabel:C_LOOK_SMART,name:'consMblNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}]};
	
	var t3={id:'T_CONS_LOOK_3',title:C_LOOK_BY_HBL,layout:'form',labelWidth:70,labelAlign:"right",
		items: [{fieldLabel:'H/BL No.',name:'consHblNo',xtype:'textarea',anchor:'90%'},
			{boxLabel:C_LOOK_SMART,name:'consHblNoM',xtype:'checkbox',checked:true,labelSeparator:'',anchor:'50%'}]};
	
	var t4={id:'T_CONS_LOOK_4',title:C_LOOK_BY_VOYA,layout:'form',labelWidth:70,labelAlign:"right",
		items:[{fieldLabel:HL(C_VESS),tabIndex:5,name:'vessName',store:getVES(),
          		xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',typeAhead:true,enableKeyEvents:true,
          		mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'50%',
              		listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
        	{fieldLabel:C_VOYA,tabIndex:10,name:'voyaName',xtype:'textfield',anchor:'50%'}]};*/
    
	
	//客户
	var cboCust = new Fos.CustomerLookup({fieldLabel:C_BOOKER,
		custType:'custBookerFlag',
		name:'custId',
		store:getCS(),
		displayField:'custCode',
		valueField:'custId',
		typeAhead:true,
		enableKeyEvents:true,
		mode:'local',
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:400,
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%',
      	listeners:{scope:this,
      		keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}
      	}
	});
			
	//船名
	var txtVess = new Ext.form.TextField({fieldLabel:C_VESS,
		name:'vessName',
		anchor:'90%'
	});
	
	//航次
	var txtVoyage = new Ext.form.TextField({fieldLabel:C_VOYA,
		name:'voyaName',
		anchor:'90%'
	});
	
	var cboBizType = new Ext.form.ComboBox({fieldLabel:C_BIZ_TYPE,
		tabIndex:7,
		name:'consBizType',
		store:BT_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	var cboDept = new Ext.form.ComboBox({fieldLabel:C_DEPT,
		name:'deptId',
		store:getGROU_S(),
		displayField:'grouName',
		valueField:'grouId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	var cboPol = new Ext.form.ComboBox({fieldLabel:C_POL,
		name:'consPol',
		store:getPOL_S(),
		displayField:'portNameEn',
		valueField:'portNameEn',
		typeAhead: true,
		mode:'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	var cboOp = new Ext.form.ComboBox({fieldLabel:C_OPERATOR,
		name:'consOperatorId',
		store:getOP_S(),
		displayField:'userLoginName',
		valueField:'userId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	var txtTradeContractNo = new Ext.form.TextField({fieldLabel:C_TRADE_CONTRACT_NO,
		name:'consTradeContractNo',
		anchor:'90%'
	});
	
	var cboShipType = new Ext.form.ComboBox({fieldLabel:C_SHIP_TYPE,
		name:'consShipType',
		value:shipType,
		store:SHTY_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	var txtSONo = new Ext.form.TextField({fieldLabel:'S/O No.',
		name:'consSoNo',
		anchor:'90%'
	});
	
	//单票审核状态
	var cboStatusAud = new Ext.form.ComboBox({fieldLabel:C_CONS_AUDIT_STATUS,
		name:'consStatusAud',
		store:AUST_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	//应收费用核销状态
	var cboStatusAr = new Ext.form.ComboBox({fieldLabel:C_WRITEOFF_STATUS_R,
		name:'consStatusAr',
		store:WRST_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	//委托日期
	var dtConsDateF = new Ext.form.DateField({fieldLabel:C_CONS_DATE+'(>=)',
		name:'consDate',
		format:DATEF,
		anchor:'90%'
	});
	
	//开航日期
	var dtSailDateF = new Ext.form.DateField({fieldLabel:C_SAIL_DATE+'(>=)',
		name:'consEtd',
		format:DATEF,
		anchor:'90%'
	});
	
	//ETA
	var dtEta = new Ext.form.DateField({fieldLabel:C_ETA+'(>=)',
		name:'consEta',
		format:DATEF,
		anchor:'90%'
	});
	
	var cboPod = new Ext.form.ComboBox({fieldLabel:C_POD,
		name:'consPod',
		store:getPS(),
		displayField:'portNameEn',
		valueField:'portNameEn',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%',
  		tpl:portTpl,
  		itemSelector:'div.list-item',
  		listWidth:C_LW,
  		enableKeyEvents:true,
  		listeners:{
  			scope:this,
  			keydown:{fn:LP,buffer:BF}
  		}
	});
	
	var cboSales = new Ext.form.ComboBox({fieldLabel:C_SALES,
		name:'consSalesRepId',
		store:getSALE_S(),
		displayField:'userLoginName',
		valueField:'userId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	
	var txtContractNo = new Ext.form.TextField({fieldLabel:C_CONTRACT_NO,
		name:'consContractNo',
		anchor:'90%'
	});
	
	var cboCarrier = new Fos.CustomerLookup({fieldLabel:C_CARRIER,
		custType:'custCarrierFlag',
		name:'consCarrier',
		store:getCS(),
		enableKeyEvents:true,
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:400,
		displayField:'custCode',
		valueField:'custId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'90%',
		listeners:{
			scope:this,
			keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}
		}
	});
	
	var cboOverseaAgency = new Fos.CustomerLookup({fieldLabel:C_OVERSEA_AGENCY,
		custType:'custOverseaAgencyFlag',
		name:'consOverseaAgency',
		store:getCS(),
		enableKeyEvents:true,
    	tpl:custTpl,
    	itemSelector:'div.list-item',
    	listWidth:400,
    	displayField:'custCode',
    	valueField:'custId',
    	typeAhead: true,
    	mode: 'local',
    	triggerAction: 'all',
    	selectOnFocus:true,
    	anchor:'90%',
    	listeners:{
    		scope:this,
    		keydown:{fn:function(f,e){LC(f,e,'custOverseaAgencyFlag');},buffer:500}
    	}
	});
	
	//应收开票状态
	var cboStatusInvoR = new Ext.form.ComboBox({fieldLabel:C_INVO_STATUS_R,
		name:'consStatusInvoR',
		store:INST_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',selectOnFocus:true,anchor:'90%'});
	
	var cboStatusAp = new Ext.form.ComboBox({fieldLabel:C_WRITEOFF_STATUS_P,
		name:'consStatusAp',
		store:WRST_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	
	//委托日期
	var dtConsDateT = new Ext.form.DateField({fieldLabel:C_CONS_DATE+'(<=)',
		name:'consDate2',
		format:DATEF,
		anchor:'90%'
	});
	
	//开航日期
	var dtSailDateT = new Ext.form.DateField({fieldLabel:C_SAIL_DATE+'(<=)',
		name:'consEtd2',
		format:DATEF,
		anchor:'90%'
	});
	
	//ETA
	var dtEtaT = new Ext.form.DateField({fieldLabel:C_ETA+'(<=)',
		name:'consEta2',
		format:DATEF,
		anchor:'90%'
	});
	
	var txtDeliveryPlace = new Ext.form.TextField({fieldLabel:C_DESTINATION_PORT,
		name:'consDeliveryPlace',
		anchor:'90%'
	});
	
	var cboSource = new Ext.form.ComboBox({fieldLabel:C_CARGO_SOURCE,
		name:'consSource',
		store:SOUR_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	var txtRefNo = new Ext.form.TextField({fieldLabel:C_REF_NO,
		name:'consRefNo',
		anchor:'90%'
	});
	
	var cboBookingAgency = new Fos.CustomerLookup({fieldLabel:C_BOOK_AGENCY,
		custType:'custBookingAgencyFlag',
		name:'consBookingAgency',
		store:getCS(),
  		tpl:custTpl,
  		itemSelector:'div.list-item',
  		listWidth:400,xtype:'combo',
  		displayField:'custCode',
  		valueField:'custId',
  		typeAhead:true,
  		mode:'local',
  		triggerAction:'all',
  		selectOnFocus:true,
  		anchor:'90%',
  		enableKeyEvents:true,
  		listeners:{
  			scope:this,
  			keydown:{fn:function(f,e){LC(f,e,'custBookingAgencyFlag');},buffer:500}
  		}
	});
	
	var cboContainerCompany = new Fos.CustomerLookup({fieldLabel:C_CONTAINER,
		custType:'custContainerFlag',
		name:'consContainerCompany',
		store:getCS(),
		enableKeyEvents:true,
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:400,
		displayField:'custCode',
		valueField:'custId',
		typeAhead: true,
		mode:'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'90%',
		listeners:{
			scope:this,
			keydown:{fn:function(f,e){LC(f,e,'custContainerFlag');},buffer:500}
		}
	});
	
	
	var cboStatusExp = new Ext.form.ComboBox({fieldLabel:C_EXPE_CONFIRM_STATUS,
		name:'consStatusExp',
		store:EXPC_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	var cboStatusInvoP = new Ext.form.ComboBox({fieldLabel:C_INVO_STATUS_P,
		name:'consStatusInvoP',
		store:INST_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'90%'
	});
	
	var panel = new Ext.Panel({
		layout:'column',
		padding:10,
    	items:[
	    	{columnWidth:.33,
	    	   layout:'form',
	    	   border:false,
	    	   labelWidth:150,
	    	   labelAlign:"right",
	    	   items:[cboCust,cboBizType,cboDept,cboPol,cboOp,
	    	          txtTradeContractNo,cboShipType,txtSONo,cboStatusAud,cboStatusAr,txtVess]
	    	},
	      	{columnWidth:.33,
	    		layout:'form',
	    		border:false,
	    		labelWidth:150,
	    		labelAlign:"right",
	    		items:[dtConsDateF,dtSailDateF,dtEta,cboPod,cboSales,
	    		       txtContractNo,cboCarrier,cboOverseaAgency,cboStatusInvoR,cboStatusAp,txtVoyage]
	    	},
			{columnWidth:.34,
	    		layout:'form',
	    		border:false,
	    		labelWidth:150,
	    		labelAlign:"right",
	    		items:[dtConsDateT,dtSailDateT,dtEtaT,txtDeliveryPlace,
			    	cboSource,txtRefNo,cboBookingAgency,cboContainerCompany,cboStatusExp,cboStatusInvoP]
	    	}
		]
	});
		
	
	this.reload=function(){
     	
     		
     	
		var a=[];
     	var op=1;
     	if(bizClass!='')
     		a[a.length]= new QParam({key:'consBizClass',value:bizClass,op:EQ});
     	
     	if(bizType!='')
     		a[a.length]= new QParam({key:'consBizType',value:bizType,op:EQ});
     	
     	if(shipType!='')
     		a[a.length]=new QParam({key:'consShipType',value:shipType,op:EQ});
     	
			
 		var custId = panel.find('name','custId')[0].getValue();
 		if(custId) 
 			a[a.length]=new QParam({key:'custId',value:custId,op:op});
 		
 		var consBizType=panel.find('name','consBizType')[0].getValue();        		
 		if(consBizType) 
 			a[a.length]=new QParam({key:'consBizType',value:consBizType,op:op});
 		
 		var consPol=panel.find('name','consPol')[0].getValue();        		
 		if(consPol) 
 			a[a.length]=new QParam({key:'consPolEn',value:consPol,op:LI});
 		
 		var deptId=panel.find('name','deptId')[0].getValue();        		
 		if(deptId) 
 			a[a.length]=new QParam({key:'deptId',value:deptId,op:op});
 		
 		var consSalesRepId=panel.find('name','consSalesRepId')[0].getValue();        		
 		if(consSalesRepId) 
 			a[a.length]=new QParam({key:'consSalesRepId',value:consSalesRepId,op:op});
 		
 		var consTradeContractNo=panel.find('name','consTradeContractNo')[0].getValue();        		
 		if(consTradeContractNo) 
 			a[a.length]=new QParam({key:'consTradeContractNo',value:consTradeContractNo,op:op});
 		
 		var consStatusAud=panel.find('name','consStatusAud')[0].getValue();        		
 		if(consStatusAud) 
 			a[a.length]=new QParam({key:'consStatusAud',value:consStatusAud,op:op});
 		
 		var consStatusAr=panel.find('name','consStatusAr')[0].getValue();        		
 		if(consStatusAr) 
 			a[a.length]=new QParam({key:'consStatusAr',value:consStatusAr,op:op});
 		
 		var consStatusAp=panel.find('name','consStatusAp')[0].getValue();        		
 		if(consStatusAp) 
 			a[a.length]=new QParam({key:'consStatusAp',value:consStatusAp,op:op});
 		
 		var consStatusInvoR=panel.find('name','consStatusInvoR')[0].getValue();        		
 		if(consStatusInvoR) 
 			a[a.length]=new QParam({key:'consStatusInvoR',value:consStatusInvoR,op:op});
 		
 		var consStatusInvoP=panel.find('name','consStatusInvoP')[0].getValue();        		
 		if(consStatusInvoP) 
 			a[a.length]=new QParam({key:'consStatusInvoP',value:consStatusInvoP,op:op});
 		
 		var consStatusExp=panel.find('name','consStatusExp')[0].getValue();        		
 		if(consStatusExp) 
 			a[a.length]=new QParam({key:'consStatusExp',value:consStatusExp,op:op});
 		
 		var consDate=panel.find('name','consDate')[0].getValue();
 		var consDate2=panel.find('name','consDate2')[0].getValue();
 		if(consDate && consDate2){
 			a[a.length]=new QParam({key:'consDate',value:consDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'consDate',value:consDate2.format(DATEF),op:3});
 		}
 		else if(consDate) 
 			a[a.length]=new QParam({key:'consDate',value:consDate,op:op});
 		
 		var consEtd=panel.find('name','consEtd')[0].getValue();
 		var consEtd2=panel.find('name','consEtd2')[0].getValue();
 		if(consEtd && consEtd2){
 			a[a.length]=new QParam({key:'consEtd',value:consEtd.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'consEtd',value:consEtd2.format(DATEF),op:3});
 		}
 		else if(consEtd) 
 			a[a.length]=new QParam({key:'consEtd',value:consEtd,op:op});
 		
 		var consEta=panel.find('name','consEta')[0].getValue();
 		var consEta2=panel.find('name','consEta2')[0].getValue();
 		if(consEta && consEta2){
 			a[a.length]=new QParam({key:'consEta',value:consEta.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'consEta',value:consEta2.format(DATEF),op:3});
 		}
 		else if(consEta) 
 			a[a.length]=new QParam({key:'consEta',value:consEta,op:op}); 
 		
 		var consOperatorId=panel.find('name','consOperatorId')[0].getValue();        		
 		if(consOperatorId) 
 			a[a.length]=new QParam({key:'consOperatorId',value:consOperatorId,op:op});
 		
 		var consContractNo=panel.find('name','consContractNo')[0].getValue();        		
 		if(consContractNo) 
 			a[a.length]=new QParam({key:'consContractNo',value:consContractNo,op:7});
 		
 		var consPod=panel.find('name','consPod')[0].getValue();        		
 		if(consPod) 
 			a[a.length]=new QParam({key:'consPodEn',value:consPod,op:LI});
 		
 		
 		var consDeliveryPlace = panel.find('name','consDeliveryPlace')[0].getValue();
 		if(consDeliveryPlace) 
 			a[a.length]=new QParam({key:'consDeliveryPlace',value:consDeliveryPlace,op:op});
 		
 		var consSource=panel.find('name','consSource')[0].getValue();        		
 		if(consSource) 
 			a[a.length]=new QParam({key:'consSource',value:consSource,op:op});
 		
 		var consRefNo=panel.find('name','consRefNo')[0].getValue();        		
 		if(consRefNo) 
 			a[a.length]=new QParam({key:'consRefNo',value:consRefNo,op:op});
 		
 		var consSoNo=panel.find('name','consSoNo')[0].getValue();
 		if(consSoNo) 
 			a[a.length]=new QParam({key:'consSoNo',value:consSoNo,op:op});
 		
 		var consCarrier=panel.find('name','consCarrier')[0].getValue();        		
 		if(consCarrier) 
 			a[a.length]=new QParam({key:'consCarrier',value:consCarrier,op:op});
 		
 		var consOverseaAgency=panel.find('name','consOverseaAgency')[0].getValue();        		
 		if(consOverseaAgency) 
 			a[a.length]=new QParam({key:'consOverseaAgency',value:consOverseaAgency,op:op});
 		
 		var consBookingAgency=panel.find('name','consBookingAgency')[0].getValue();        		
 		if(consBookingAgency) 
 			a[a.length]=new QParam({key:'consBookingAgency',value:consBookingAgency,op:op});
 		
 		var consContainerCompany=panel.find('name','consContainerCompany')[0].getValue();        		
 		if(consContainerCompany) 
 			a[a.length]=new QParam({key:'consContainerCompany',value:consContainerCompany,op:op});
     	
 		var vessName = panel.find('name','vessName')[0].getValue();
 		if(vessName) 
 			a[a.length]=new QParam({key:'vessName',value:vessName,op:LI});
 		
 		var voyaName = panel.find('name','voyaName')[0].getValue();	
 		if(voyaName) 
 			a[a.length]=new QParam({key:'voyaName',value:voyaId,op:op});
 		
     	
     	setQueryParams(a);
     	store.baseParams={mt:'xml',xml:FOSX(QTX(a))};
     	store.reload({params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) 
     				XMG.alert(SYS,M_NOT_FOUND);
     			}
     	});
     	this.close();
	};	
	
	
	
    Fos.ConsLookupWin.superclass.constructor.call(this, {title:C_CONS_QUERY,
    	iconCls:'search',
    	modal:true,
    	width:1000,
    	height:370,
    	minWidth:400,
        minHeight:300,
        plain:false,
        buttonAlign:'right',
        items:panel,
		buttons:[{text:C_OK,scope:this,handler:this.reload},
		         {text:C_CANCEL,scope:this,handler:this.close}]
	}); 
};
Ext.extend(Fos.ConsLookupWin, Ext.Window);