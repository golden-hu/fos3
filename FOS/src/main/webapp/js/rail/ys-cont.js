Fos.YsConsignGrid = function(bizClass,bizType,shipType){
	var store = new Ext.data.Store({url:SERVICE_URL+'?A=CONS_X',baseParams:{mt:'xml'},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'FConsign',idProperty:'consId'},FConsign),
		remoteSort:true,autoLoad:false,sortInfo:{field:'consDate',direction:'DESC'}});
	var queryParams=[];
	queryParams[queryParams.length]= new QParam({key:'consBizClass',value:bizClass,op:EQ});
	queryParams[queryParams.length]= new QParam({key:'consBizType',value:bizType,op:EQ});
	if(shipType!='') 
		queryParams[queryParams.length]=new QParam({key:'consShipType',value:shipType,op:EQ});
	var bp={mt:'xml',xml:FOSX(QTX(queryParams))};
	store.baseParams=bp;
	store.load({params:{start:0,limit:C_PS}});
	
	var sm = new Ext.grid.RowSelectionModel({singleSelect:true});
	var rowNum=new Ext.grid.RowNumberer();
	var consStatusAud = {header:C_EXPE_STATUS,width:80,dataIndex:"consStatusAud",renderer:getAUST};
    var consNo={header:C_CONS_NO,width:120,dataIndex:"consNo"};
    var custName={header:C_BOOKER,width:200,dataIndex:"custName"};
    var consDate={header:C_CONS_DATE,width:80,dataIndex:"consDate",renderer:formatDate};
    var tranId={header:C_TTER,dataIndex:"tranId",width:80,renderer:getTRAN};
    var pateId={header:C_PATE,dataIndex:"pateId",width:80,renderer:getPATE};
    var consEtd={header:C_SAIL_DATE,dataIndex:"consEtd",renderer:formatDate};
    var consPodEn={header:C_POD,width:100,dataIndex:"consPodEn"};
    var consTotalPackages={header:C_PACKAGES,width:80,dataIndex:"consTotalPackages",align:'right',css:'font-weight:bold;'};
    var consTotalGrossWeight={header:C_GW,width:80,dataIndex:"consTotalGrossWeight",renderer:rateRender,align:'right',css:'font-weight:bold;'};
    var consTotalMeasurement={header:C_CBM,width:80,dataIndex:"consTotalMeasurement",renderer:rateRender,align:'right',css:'font-weight:bold;'};
    
    var consContainersInfo={header:C_CONT_INFO,width:80,dataIndex:"consContainersInfo"};
    var consTotalContainers={header:C_CONT_NUM,width:80,dataIndex:"consTotalContainers",align:'right',renderer:function(v){return (v)?v:0;},css:'font-weight:bold;'};
    var consCarrierName={header:C_CARRIER,dataIndex:"consCarrierName"};
    var consRemarks={header:C_REMARKS,dataIndex:"consRemarks"};
    var consContractNo={header:C_CONTRACT_NO,dataIndex:"consContractNo"};
    var consCargoOwnerName={header:C_CARGO_OWNER,width:200,dataIndex:"consCargoOwnerName"};
    var consOperatorName={header:C_OPERATOR,width:80,dataIndex:"consOperatorName"};    
    var consEta={header:C_ETA,dataIndex:"consEta",renderer:formatDate};
	var cm = new Ext.grid.ColumnModel({columns:[rowNum,consStatusAud,consNo,custName,consDate,tranId,pateId,consEtd,
		consPodEn,consCarrierName,consRemarks,consContractNo,consCargoOwnerName,consOperatorName,consEta
	],defaults: {sortable: true}});
	
	this.newConsign = function(){
		var c=Fos.newConsign(bizClass,bizType,shipType);
		Fos.showConsign(c,store);
	};
	this.editConsign = function(){
		var b=sm.getSelected();
		if(b) Fos.showConsign(b); 
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	this.removeConsign = function(){
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var xml = SMTX4R(sm,'FConsign','consId');
           		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'FORBEIJING_S'},
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
	
	this.reset=function(){
    	store.baseParams=bp;
    	store.reload({params:{start:0,limit:C_PS}});
    };
    
    var m=getRM(bizClass,bizType,shipType)+M3_CONS;
	var bAdd={text:C_ADD+'(N)',disabled:NR(m+F_M),iconCls:'add',handler:this.newConsign};
	var bEdit={text:C_EDIT+'(M)',disabled:NR(m+F_V),iconCls:'option',handler:this.editConsign};
	var bRemove={text:C_REMOVE+'(D)',disabled:NR(m+F_R),iconCls:'remove',handler:this.removeConsign};
	var bSearch={text:C_SEARCH+'(F)',iconCls:'search',handler:this.search};	
	var bExport={text:C_EXPORT+'(E)',disabled:NR(m+F_E),iconCls:'print',handler:this.exp};	
	var bFastSearch={text:C_FAST_SEARCH+'(Q)',iconCls:'search',handler:this.fastSearch};	
	var bRefresh={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
    var tbs=[bAdd, '-',bEdit,'-',bRemove,'-',bSearch,'-',bExport,'-',kw,bFastSearch,'-',bRefresh,'-'];
    
	var title=getBC(bizClass);
  	title+=C_CONS_LIST;
  	
	Fos.YsConsignGrid.superclass.constructor.call(this,{id:'YS_CONS_'+bizClass+'_'+bizType+(shipType==''?'':'_'+shipType),iconCls:'grid',
    store:store,title:title,header:false,loadMask:true,
	sm:sm,cm:cm,stripeRows:true,closable:true,tbar:tbs,
	listeners:{
	    	scope:this,
	    	rowdblclick:function(grid,rowIndex,event){
	    		var c = sm.getSelected();
	    		if(c) this.editConsign(c);
	    	}
	}});    
};
Ext.extend(Fos.YsConsignGrid,Ext.grid.GridPanel);

Fos.YsConsignTab = function(p,listStore){
	//业务号
	var txtConsNo = {fieldLabel:C_CONS_NO,style:'{font-weight:bold;color:green;}',itemCls:'required',
			tabIndex:1,name:'consNo',value:p.get('consNo'),xtype:'textfield',anchor:'99%'};
	//部门
	var cboDept={fieldLabel:C_DEPT,itemCls:'required',name:'deptId',value:p.get('deptId'),
			tabIndex:2,store:getGROU_S(),xtype:'combo',displayField:'grouName',valueField:'grouId',
			typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	//业务员
	var cboSales={fieldLabel:C_OP_SALES,itemCls:'required',tabIndex:3,name:'consSalesRepName',value:p.get('consSalesRepName'),
    		store:getSALE_S(),xtype:'combo',displayField:VERSION==1?'userName':'userLoginName',valueField:'userName',
    		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
    		listeners:{scope:this,
    			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consSalesRepId','');p.set('consSalesRepName','');}},
    	    	select:function(c,r,i){p.set('consSalesRepId',r.get('userId'));}}};	
    //操作员
	var cboOperator={fieldLabel:'录单员',itemCls:'required',tabIndex:4,name:'consOperatorId',value:p.get('consOperatorId'),
    		store:getOP_S(),xtype:'combo',displayField:VERSION==1?'userName':'userLoginName',valueField:'userId',
    		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
    		listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consOperatorId','');p.set('consOperatorName','');}},
    	select:function(c,r,i){p.set('consOperatorName',r.get('userName'));}}};
    //委托单位
    var cboCust={fieldLabel:p.get('consBizType')==BT_B?C_CHARTER:C_BOOKER,itemCls:'required',
    		tabIndex:5,name:'custName',value:p.get('custName'),store:getCS(),enableKeyEvents:true,
       		xtype:'customerLookup',displayField:'custNameCn',valueField:'custNameCn',typeAhead:true,
       		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
       		triggerAction:'all',selectOnFocus:true,anchor:'99%',custType:'custBookerFlag',
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
				this.find('name','consSalesRepName')[0].setValue(r.get('custSalesName'));
				p.set('custId',r.get('custId'));
				p.set('custSname',r.get('custCode'));
				p.set('custName',r.get('custNameCn'));
				p.set('consSalesRepId',r.get('custSalesId'));
				if(this.find('name','consShipper').length>0){
					this.find('name','consShipper')[0].setValue(r.get('custShipper'));
				}
			},
			keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}};
	//委托联系人
    var txtCustContact={fieldLabel:C_CONTACT,tabIndex:6,name:'custContact',value:p.get('custContact'),
    		xtype:'textfield',anchor:'99%'};
    //委托联系人电话
    var txtCustTel={fieldLabel:C_PHONE,tabIndex:7,name:'custTel',value:p.get('custTel'),xtype:'textfield',anchor:'99%'};
    //委托联系人传真
    var txtCustFax={xtype:'textfield',tabIndex:8,fieldLabel:C_FAX,name:'custFax',value:p.get('custFax'),anchor:'99%'};
    //委托日期
    var dtConsDate={fieldLabel:C_CONS_DATE,tabIndex:9,name:'consDate',value:p.get('consDate'),
    		xtype:'datefield',format:DATEF,anchor:'99%'};
    //客户业务员
    var cboCustSales={fieldLabel:C_CUST_SALES,name:'custSalesName',value:p.get('custSalesName'),
			tabIndex:10,store:getCUCOS(),xtype:'combo',displayField:'cucoName',valueField:'cucoName',
			typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	//客户业务号
    var txtRefNo={fieldLabel:C_REF_NO,tabIndex:11,name:'consRefNo',value:p.get('consRefNo'),xtype:'textfield',anchor:'99%'};    
    //合同号
	var txtContractNo={fieldLabel:C_CONTRACT_NO,tabIndex:12,name:'consContractNo',
			value:p.get('consContractNo'),xtype:'textfield',anchor:'99%'};
	//揽货方式
	var cboCargoSource={fieldLabel:C_CARGO_SOURCE,tabIndex:13,name:'consSource',value:p.get('consSource'),
		store:SOUR_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',
		triggerAction:'all',selectOnFocus:true,anchor:'99%'};
	//运费条款
	var cboPate={fieldLabel:C_PATE,itemCls:'needed',tabIndex:15,name:'pateId',value:p.get('pateId'),
		store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,
		mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
        listeners:{scope:this,
    	blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('pateId','');}},
        select:function(c,r,i){p.set('pateName',r.get('pateName'));}}};
    //运输条款
    var cboTranTerm={fieldLabel:C_TTER,itemCls:'needed',tabIndex:17,name:'tranId',value:p.get('tranId'),
    	store:p.get('consBizType')==BT_B?getTTB_S():getTTC_S(),xtype:'combo',displayField:'tranName',
    	valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
		blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('tranId','');}},
    	select:function(c,r,i){p.set('tranCode',r.get('tranCode'));}}};
   //运输方式
    var cboTransMode={fieldLabel:C_TRAT,itemCls:'needed',tabIndex:18,name:'shliId',value:p.get('shliId'),
    	store:getTRAT_S(),xtype:'combo',displayField:'tratName',valueField:'tratId',typeAhead:true,
   		mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	var bookerItem1 = {columnWidth:.25,border:false,layout:'form',items:[txtConsNo,cboCust,dtConsDate,cboCargoSource]};
	var bookerItem2 = {columnWidth:.25,border:false,layout:'form',items:[cboDept,txtCustContact,cboCustSales,cboPate]};
	var bookerItem3 = {columnWidth:.25,border:false,layout:'form',items:[cboSales,txtCustTel,txtRefNo,cboTranTerm]};
	var bookerItem4 = {columnWidth:.25,border:false,layout:'form',items:[cboOperator,txtCustFax,txtContractNo,cboTransMode]};
	//委托信息
	var bookerInfo = {title:C_BOOKER_INFO,layout:'column',layoutConfig:{columns:4},padding:5,border:false,
		collapsible:true,labelWidth:80,items:[
		bookerItem1,bookerItem2,bookerItem3,bookerItem4
		]};	
		
    //发车日期
    var dtDepartureDate = {fieldLabel: C_DEPARTURE_DATE,tabIndex: 14,name: 'consSailDate',
		value: p.get('consSailDate'),xtype: 'datefield',format: DATEF,anchor: '99%'
	};
   //始发站
	var cboDepartureStation = {fieldLabel: C_DEPARTURE_STATION,tabIndex: 39,name: 'attr1',value: p.get('attr1'),
		store: getTS_S(),xtype: 'combo',displayField: 'trainNameCn',valueField: 'trainNameCn',typeAhead: true,
		mode: 'local',triggerAction: 'all',selectOnFocus: true,anchor: '99%',itemCls:'needed',
		listeners:{
			scope:this,
			select:function(c,r,v){
				p.set('attr9',r.get('trainId'));
			}
		}
	};
	//中方换装站
	var cboCTransferStation = {fieldLabel: C_CTRANSFER_STATION,tabIndex: 39,name: 'attr2',value: p.get('attr2'),
		store: getTS_S(),xtype: 'combo',displayField: 'trainNameCn',valueField: 'trainNameCn',typeAhead: true,
		mode: 'local',triggerAction: 'all',selectOnFocus: true,anchor: '99%',itemCls:'needed'
	};
	//中方车号
	var txtRailNo = {fieldLabel: C_CRAIL_NO,tabIndex: 14,name: 'attr3',value: p.get('attr3'),
		xtype: 'textfield',format: DATEF,anchor: '99%'
	};
	//中方交出日期
	var dtCDeliveryDate = {fieldLabel: C_CDELIVERY_DATE,tabIndex: 14,name: 'consDeliveryDate',value: p.get('consDeliveryDate'),
		xtype: 'datefield',format: DATEF,anchor: '99%'
	};
	//外方换装站
	var cboFTransferStation = {fieldLabel: C_FTRANSFER_STATION,tabIndex: 39,name: 'attr4',value: p.get('attr4'),
		store: getTS_S(),xtype: 'combo',displayField: 'trainNameCn',valueField: 'trainNameCn',typeAhead: true,
		mode: 'local',triggerAction: 'all',selectOnFocus: true,anchor: '99%',itemCls:'needed'
	};
	//外方车号
	var txtFRailNo = {fieldLabel: C_FRAIL_NO,tabIndex: 14,name: 'attr5',value: p.get('attr5'),
		xtype: 'textfield',format: DATEF,anchor: '99%'
	};
	//外方换装日期
	var dtFDeliveryDate = {fieldLabel: C_FDELIVERY_DATE,tabIndex: 14,name: 'consLoadDate',value: p.get('consLoadDate'),
		xtype: 'datefield',format: DATEF,anchor: '99%'
	};
	//目的站
	var cboDestinationStation = {fieldLabel: C_DESTINATION_STATION,tabIndex: 39,name: 'attr6',value: p.get('attr6'),
		store: getTS_S(),xtype: 'combo',displayField: 'trainNameCn',valueField: 'trainNameCn',typeAhead: true,
		mode: 'local',triggerAction: 'all',selectOnFocus: true,anchor: '99%',itemCls:'needed'
	};
	//目的地日期
	var dtArrivalDate = {fieldLabel: C_ARRIVAL_DATE,tabIndex: 14,name: 'consEta',value: p.get('consEta'),
		xtype: 'datefield',format: DATEF,anchor: '99%'
	};
	//箱号
	var txtContainerNo = {fieldLabel: C_CONT_NO,name: 'consContainerNo',value: p.get('consContainerNo'),tabIndex: 40,
		xtype: 'textfield',anchor: '99%'
	};
	//箱类型
	var cboCcontainerType = {fieldLabel: C_CONTAINER_TYPE,name: 'consContainerCompany',value: p.get('consContainerCompany'),
		xtype: 'combo',store: CONT_TYPE_S,displayField: 'NAME',valueField: 'CODE',typeAhead: true,
		mode: 'local',triggerAction: 'all',selectOnFocus: true,anchor: '99%'
	};
	//铅封号
	var txtContSealNo = {fieldLabel: C_SEAL_NO,name: 'consWarehouseNo',value: p.get('consWarehouseNo'),tabIndex: 40,
		xtype: 'textfield',anchor: '99%'
	};
	//口岸
	var cboBranch = {fieldLabel:C_BRANCH,name:'consBranchName',value:p.get('consBranchName'),xtype:'combo',anchor:'99%',
		displayField:'branchName',valueField:'branchName',store:getBRANCHR_S(),typeAhead:true,triggerAction:'all',
		selectOnFocus:true,mode:'remote',itemCls:'needed',
		listeners:{
			scope:this,
			select:function(c,r,i){
				p.set('consBranchId',r.get('branchId'));
			}
		}
		};
	
	var railItem1 = {columnWidth:.25,border:false,layout:'form',items:[dtDepartureDate,dtCDeliveryDate,dtFDeliveryDate]};
	var railItem2 = {columnWidth:.25,border:false,layout:'form',items:[txtRailNo,txtFRailNo,dtArrivalDate]};
	var railItem3 = {columnWidth:.25,border:false,layout:'form',items:[cboDepartureStation,cboFTransferStation,cboBranch]};
	var railItem4 = {columnWidth:.25,border:false,layout:'form',items:[cboCTransferStation,cboDestinationStation,txtContainerNo]};
	//铁运信息
	var railInfo = {title:C_RAIL_INFO,layout:'column',layoutConfig:{columns:4},padding:5,border:false,
		collapsible:true,labelWidth:80,items:[
		railItem1,railItem2,railItem3,railItem4
		]};
	
	var vt=1;
	//船名
	var cboVessName={fieldLabel:C_VESS,itemCls:'needed',tabIndex:34,
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
	//航次
	var txtVoyaName={fieldLabel:C_VOYA,itemCls:'needed',name:'voyaName',value:p.get('voyaName'),
		xtype:'textfield',anchor:'99%'};
	//装货港
	var cboPolEn={fieldLabel:C_POL,itemCls:'needed',tabIndex:p.get('consBizClass')==BC_I?39:43,
		name:'consPolEn',value:p.get('consPolEn'),store:getPS(),xtype:'combo',
		displayField:'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'local',
		triggerAction:'all',selectOnFocus:true,anchor:'99%',
		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPol','');}},
        	select:function(c,r,i){
        		p.set('consPol',r.get('portId'));
        		p.set('consPolCn',r.get('portNameCn'));
        	},
         	keydown:{fn:LP,buffer:BF}}};
	//卸货港
    var cboPodEn={fieldLabel:C_POD,itemCls:'needed',name:'consPodEn',
		value:p.get('consPodEn'),store:getPS(),xtype:'combo',displayField:'portNameEn',
		valueField:'portNameEn',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPod','');}},
        	select:function(c,r,i){
        		p.set('consPod',r.get('portId'));
        		p.set('consPodCn',r.get('portNameCn'));
            	},
         	keydown:{fn:LP,buffer:BF}}};
	//中转港
    var cboPotEn={fieldLabel:C_POT,name:'consPotEn',value:p.get('consPotEn'),
    	store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portNameEn',typeAhead: true,
    	mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPot','');}},
        	select:function(c,r,i){
        		p.set('consPot',r.get('portId'));
        		p.set('consPotCn',r.get('portNameCn'));
            	},
         	keydown:{fn:LP,buffer:BF}}};
	//开航日期
     var dtEtd={fieldLabel:C_SAIL_DATE,
    	name:'consEtd',value:p.get('consEtd'),xtype:'datefield',format:DATEF,anchor:'99%'};		
	//到港日期
    var dtEta={fieldLabel:C_ETA,
    	name:'consEta',value:p.get('consEta'),xtype:'datefield',format:DATEF,anchor:'99%'};
	//装船如期
    var dtLoadDate={fieldLabel:C_SHIP_LOAD_DATE,tabIndex:40,name:'consLoadDate',
    		value:p.get('consLoadDate'),xtype:'datefield',format:DATEF,anchor:'99%'};
	//截关日期
   	 var dtExpiryDate={fieldLabel:C_CUSTOM_EXPIRY_DATE,tabIndex:41,
    	name:'consExpiryDate',value:p.get('consExpiryDate'),
    	xtype:'datefield',format:DATEF,anchor:'99%'};
	//承运人
	var cboCarrierName={fieldLabel:C_CARRIER,itemClass:'needed',
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
				LC(f,e,'custCarrierFlag');
			},buffer:BF}}};
	//换单代理
	 var cboDoagencyName= new Fos.CustomerLookup({fieldLabel:C_DO_AGENCY,name:'consDoAgencyName',tabIndex:47,
    		value:p.get('consDoAgencyName'),store:getCS(),enableKeyEvents:true,
    		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,custType:'custDoAgencyFlag',
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
            	keydown:{fn:function(f,e){LC(f,e,'custDoAgencyFlag');},buffer:BF}}});
	//海外代理
	var cboOverseaAgencyName=new Fos.CustomerLookup({fieldLabel:C_OVERSEA_AGENCY,name:'consOverseaAgencyName',value:p.get('consOverseaAgencyName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,custType:'custOverseaAgencyFlag',
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
            	this.find('name','consNotifyParty2')[0].setValue(r.get('custAddress2'));
 			},
			keydown:{fn:function(f,e){LC(f,e,'custOverseaAgencyFlag');},buffer:BF}}});
	//箱公司
	var cboContainerCompanyName=new Fos.CustomerLookup({fieldLabel:C_CONTAINER,name:'consContainerCompanyName',value:p.get('consContainerCompanyName'),
		store:getCS(),enableKeyEvents:true,tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
		xtype:'combo',displayField:'custCode',valueField:'custCode',custType:'custContainerFlag',
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
			keydown:{fn:function(f,e){LC(f,e,'custContainerFlag');},buffer:BF}}});
	//场站
	var cboCfsName=new Fos.CustomerLookup({fieldLabel:C_CFS,tabIndex:p.get('consBizClass')==BC_I?49:60,
    	name:'consCfsName',value:p.get('consCfsName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,custType:'custCfsFlag',
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
    });   
	//M B/NO
    var txtMblNo={fieldLabel:C_MBL_NO,
    		name:'consMblNo',tabIndex:36,value:p.get('consMblNo'),xtype:'textfield',anchor:'99%'};
	//H B/NO
    var txtHblNo={fieldLabel:C_HBL_NO,tabIndex:37,name:'consHblNo',
    		value:p.get('consHblNo'),xtype:'textfield',anchor:'99%'};
 	
    //海运信息
    var maritimeItem1 = {columnWidth:.25,layout:'form',border:false,items:[cboVessName,cboPolEn,cboDoagencyName,txtMblNo]};
    var maritimeItem2 = {columnWidth:.25,layout:'form',border:false,items:[txtVoyaName,cboPodEn,cboOverseaAgencyName,txtHblNo]};
    var maritimeItem3 = {columnWidth:.25,layout:'form',border:false,items:[dtEtd,cboPotEn,cboContainerCompanyName,dtLoadDate]};
    var maritimeItem4 = {columnWidth:.25,layout:'form',border:false,items:[dtEta,cboCarrierName,cboCfsName,dtExpiryDate]};
	var maritimeInfo = {title:C_MARITIME_INFO,layout:'column',layoutConfig:{columns:4},padding:5,border:false,
		collapsible:true,labelWidth:80,items:[
			maritimeItem1,maritimeItem2,maritimeItem3,maritimeItem4
		]
	};
	//拖车公司
	var cboTranVendorName= new Fos.CustomerLookup({fieldLabel:C_TRACK_VENDOR,name:'consTrackVendorName',
			value:p.get('consTrackVendorName'),store:getCS(),enableKeyEvents:true,itemCls:'needed',
			tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
			displayField:'custNameCn',valueField:'custNameCn',custType:'custTrackFlag',
			typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
			listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
				}
			},
			select:function(c,r,i){
				this.find('name','consTrackContact')[0].setValue(r.get('custContact'));
				this.find('name','consTrackTel')[0].setValue(r.get('custTel'));
				this.find('name','attr7')[0].setValue(r.get('custFax'));
			},
			keydown:{fn:function(f,e){LC(f,e,'custTrackFlag');},buffer:BF}}});
	//拖车公司联系人
	var txtTranVendorContact={fieldLabel:C_TRAN_CONTACT,name:'consTrackContact',value:p.get('consTrackContact'),xtype:'textfield',anchor:'99%'};		
	//拖车公司联系人电话
	var txtTranVendorTel={fieldLabel:C_TRAN_TEL,name:'consTrackTel',value:p.get('consTrackTel'),xtype:'textfield',anchor:'99%'};
	//拖车公司传真
	var txtTranVendorFax={fieldLabel:C_TRAN_FAX,name:'attr7',value:p.get('attr7'),xtype:'textfield',anchor:'99%'};
	//装货日期
	var dtTranStartDate={fieldLabel:C_TRAN_DATE,name:'consTrackLoadDate',value:p.get('consTrackLoadDate'),xtype:'datefield',format:DATEF,anchor:'99%'};	
	//装货时间
	var tfTranLoadTime={fieldLabel:C_LOAD_TIME,name:'consTrackLoadTime',value:p.get('consTrackLoadTime'),xtype:'timefield',increment:30,anchor:'99%'};
	//送货日期
	var dtDeliveryDate={fieldLabel:C_DELIVERY_DATE,name:'consContainerLoadDate',
			value:p.get('consContainerLoadDate'),xtype:'datefield',format:DATEF,anchor:'99%'};
	//送货时间
	var dtDeliveryTime={fieldLabel:C_DELIVERY_TIME,name:'consContainerLoadTime',
			value:p.get('consContainerLoadTime'),xtype:'timefield',increment: 30,anchor:'99%'};
	//装货地点
	var cboTranLoadFactory={fieldLabel:C_LOAD_PLACE,
			name:'consLoadFactory',
			value:p.get('consLoadFactory'),
			xtype:'siteLookup',
			consign:p,
			siteType:3,
			typeAhead:true,
			mode:'remote',
			triggerAction:'all',
        	selectOnFocus:true,
        	anchor:'99%',
        	listWidth:200,pageSize:30,
    		listeners:{scope:this,	    			
    			select:function(c,r,i){
    				this.find('name','consLoadContact')[0].setValue(r.get('cusiContact'));
    				this.find('name','consLoadTel')[0].setValue(r.get('cusiTel'));
    				this.find('name','consTrackLoadAddress')[0].setValue(r.get('cusiAddress'));
			}}};
	//装货联系人
	var txtTranLoadContact={fieldLabel:C_LOAD_CONTACT,name:'consLoadContact',value:p.get('consLoadContact'),xtype:'textfield',anchor:'99%'};
	//装货联系电话
	var txtTranLoadTel={fieldLabel:C_LOAD_TEL,name:'consLoadTel',value:p.get('consLoadTel'),xtype:'textfield',anchor:'99%'};
	//装货地址
	var txtLoadAddress={fieldLabel:C_LOAD_ADDRESS,name:'consTrackLoadAddress',value:p.get('consTrackLoadAddress'),xtype:'textfield',anchor:'99%'};	
	//送货地点
	var cboDeliveryPlace={fieldLabel:C_DELIVERY_PLACE,name:'consWarehouseName',
			value:p.get('consWarehouseName'),
			xtype:'siteLookup',
			consign:p,
			siteType:2,
			typeAhead:true,
			mode:'remote',
			triggerAction:'all',
        	selectOnFocus:true,anchor:'99%',listWidth:200,pageSize:30,
    		listeners:{scope:this,	    			
    			select:function(c,r,i){
    				this.find('name','consWarehouseContact')[0].setValue(r.get('cusiContact'));
    				this.find('name','consWarehouseTel')[0].setValue(r.get('cusiTel'));
    				this.find('name','consWarehouseAddress')[0].setValue(r.get('cusiAddress'));
    		}}};
	//送货联系人
	var txtDeliveryContact={fieldLabel:C_DELIVERY_CONTACT,name:'consWarehouseContact',
			value:p.get('consWarehouseContact'),xtype:'textfield',anchor:'99%'};
	//送货联系电话
	var txtDeliveryTel={fieldLabel:C_DELIVERY_TEL,name:'consWarehouseTel',
			value:p.get('consWarehouseTel'),xtype:'textfield',anchor:'99%'};
	//送货地址
	var txtDeliveryAddress={fieldLabel:C_DELIVERY_ADDRESS,name:'consWarehouseAddress',
			value:p.get('consWarehouseAddress'),xtype:'textfield',anchor:'99%'};
	//汽运信息	
	automotiveItem1 = {columnWidth:.25,layout:'form',border:false,items:[cboTranVendorName,dtTranStartDate,cboTranLoadFactory,cboDeliveryPlace]};
	automotiveItem2 = {columnWidth:.25,layout:'form',border:false,items:[txtTranVendorContact,tfTranLoadTime,txtTranLoadContact,txtDeliveryContact]};
	automotiveItem3 = {columnWidth:.25,layout:'form',border:false,items:[txtTranVendorTel,dtDeliveryDate,txtTranLoadTel,txtDeliveryTel]};
	automotiveItem4 = {columnWidth:.25,layout:'form',border:false,items:[txtTranVendorFax,dtDeliveryTime,txtLoadAddress,txtDeliveryAddress]};
	var automotiveInfo = {title:C_AUTOMOTIVE_INFO,layout:'column',layoutConfig:{columns:4},padding:5,border:false,
		collapsible:true,labelWidth:80,items:[
			automotiveItem1,automotiveItem2,automotiveItem3,automotiveItem4
		]
	};
	function saveShipper(shipperT){
    	var cushName = '';
    	if(shipperT==1) cushName = Ext.getCmp(p.get('consId')+'CONS_SHIPPER').getValue();
    	else if(shipperT==2) cushName = Ext.getCmp(p.get('consId')+'CONS_CONSIGNEE').getValue();
    	else if(shipperT==3) cushName = Ext.getCmp(p.get('consId')+'CONS_NOTIFY_PARTY').getValue();
    	else if(shipperT==4) cushName = Ext.getCmp(p.get('consId')+'CONS_NOTIFY_PARTY2').getValue();
    	    	
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
		var win = new  Fos.ShipperWin(p.get('custId'),shipperT,updateShipper);
    	win.show();
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
    
	//收货人
	var txtShipper = {fieldLabel:C_SHIPPER,id:p.get('consId')+'CONS_SHIPPER',tabIndex:65,name:'consShipper',value:p.get('consShipper'),
				    	xtype:'textarea',height:100,anchor:'99%'};
	//发货人
	var txtConsignee = {fieldLabel:C_CONSIGNEE,id:p.get('consId')+'CONS_CONSIGNEE',tabIndex:66,name:'consConsignee',value:p.get('consConsignee'),
					xtype:'textarea',height:100,anchor:'99%'};
	//通知人
	var txtNotify = {fieldLabel:C_NOTIFIER,id:p.get('consId')+'CONS_NOTIFY_PARTY',tabIndex:67,name:'consNotifyParty',value:p.get('consNotifyParty'),
					xtype:'textarea',height:100,anchor:'99%'};	
	//海外代理
	var txtOverseaAgency = {fieldLabel:C_OVERSEA_AGENCY,id:p.get('consId')+'CONS_NOTIFY_PARTY2',tabIndex:68,name:'consNotifyParty2',value:p.get('consNotifyParty2'),
					xtype:'textarea',height:100,anchor:'99%'};
	//收发货人信息
	var shipperItem1 = {columnWidth:.45,layout:'form',border:false,items:[txtShipper]};
	var shipperItem2 = {columnWidth:.05,layout:'form',border:false,items:[bSaveShipper,bSearchShipper]};
	var shipperItem3 = {columnWidth:.45,layout:'form',border:false,items:[txtConsignee]};
	var shipperItem4 = {columnWidth:.05,layout:'form',border:false,items:[bSaveConsignee,bSearchConsignee]};
	var shipperItem5 = {columnWidth:.45,layout:'form',border:false,items:[txtNotify]};
	var shipperItem6 = {columnWidth:.05,layout:'form',border:false,items:[bSaveNotifyParty,bSearchNotifyParty]};
	var shipperItem7 = {columnWidth:.45,layout:'form',border:false,items:[txtOverseaAgency]};
	var shipperItem8 = {columnWidth:.05,layout:'form',border:false,items:[bSaveNotifyParty2,bSearchNotifyParty2]};
	var ShipperInfo = {title:C_SHIPPER_INFO,layout:'column',layoutConfig:{columns:4},padding:5,border:false,
		collapsible:true,labelWidth:80,items:[
			shipperItem1,shipperItem2,shipperItem3,shipperItem4,
			shipperItem5,shipperItem6,shipperItem7,shipperItem8
		]
	};
	this.save = function(){    	
    	if(this.find('name','custName')[0].getValue()==''){
			XMG.alert(SYS,M_CUST_REQIRED,function(){this.find('name','custName')[0].focus();},this);return;};
		if(this.find('name','deptId')[0].getValue()==''){
			XMG.alert(SYS,M_DEPT_REQIRED,function(){this.find('name','deptId')[0].focus();},this);return;};	
		if(this.find('name','consSalesRepName')[0].getValue()==''){
			XMG.alert(SYS,M_SALES_REQIRED,function(){this.find('name','consSalesRepName')[0].focus();},this);return;};
		if(this.find('name','consOperatorId')[0].getValue()==''){
			XMG.alert(SYS,M_OPERATOR_REQIRED,function(){this.find('name','consOperatorId')[0].focus();},this);return;};
			
		var f = FConsign.prototype.fields;
		for (var i = 0; i < f.keys.length; i++) {
        	var fn = ''+f.keys[i];
        	var fc = this.find('name',fn);
        	if(fc!=undefined&&fc.length>0){
        		p.set(fn,fc[0].getValue());
        	}
   	 	}
		var xml = RTX(p,'FConsign',FConsign);
		
		Ext.getCmp('TB_A').setDisabled(true);
   	 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'FORBEIJING_S'},
			success: function(res){
				var c = XTR(res.responseXML,'FConsign',FConsign);
				var ra=p.get('rowAction');
				var f = FConsign.prototype.fields;
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};   				
				if(ra=='N'){
					var t = T_MAIN.getComponent('YS_BOOK_'+ p.get('id'));
					var title=getBT(p.get('consBizType'))+getBC(p.get('consBizClass'))+getSHTY(p.get('consShipType'))+'委托【'+p.get("consNo")+'】';
					t.setTitle(title);
					this.find('name','consNo')[0].setValue(p.get('consNo'));
					
					var mn = this.find('name','consMasterNo');
					if(mn && mn.length>0){
						masterNo = mn[0];
						masterNo.setValue(p.get('consMasterNo'));
					}
					p.set('rowAction','M');
					if(listStore)
					listStore.insert(0,p);
				}
				p.endEdit();
				XMG.alert(SYS,M_S);
				Ext.getCmp('TB_A').setDisabled(false);
			},
			failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);Ext.getCmp('TB_A').setDisabled(false);},
			xmlData:FOSX(xml)
		});
    };    

    this.ModifyConsNo=function(){
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
						
						var t = T_MAIN.getComponent('YS_BOOK_'+ p.get('id'));
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
    this.showDoc=function(){
    	var win = new Fos.DocWin(p);
    	win.show();
    };  
	var locked=p.get('consStatusLock')==1;
    var disable=p.get('editable')==0;
    var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CONS;
    
    
	var b1={text:C_SAVE+'(S)',id:'TB_A',iconCls:'save',disabled:NR(m+F_M)||locked||disable,scope:this,handler:this.save};
	var b4={text:C_DOC,itemId:'TB_DOC',iconCls:'doc',disabled:NR(m+M3_DOC)||p.get('rowAction')=='N',scope:this,handler:this.showDoc};
	var btnModifyConsignNo={text:C_MODIFY_CONS_NO,itemId:'TB_MO_CONS_NO',iconCls:'option',
			disabled:NR(m+F_MIDIFY_CONS_NO)||locked==1,scope:this,handler:this.ModifyConsNo};
	var tbs=[b1,'-',btnModifyConsignNo,'-',b4];
	
	Fos.YsConsignTab.superclass.constructor.call(this,{
		id: "YS_BOOK_"+p.get('id'),title:(p.get('consBizClass')=='E'?C_EXP:C_IMP)+C_CONSIGN+'委托【'+p.get("consNo")+'】',header:false,autoScroll:true,
		border:false,labelAlign:'right',	
		
		iconCls:'class',deferredRender:false,closable:true,
		items:[bookerInfo,railInfo,maritimeInfo,automotiveInfo,ShipperInfo,new Fos.ExpenseSimpleTab(p,'C')],
		tbar:tbs
		});
};
Ext.extend(Fos.YsConsignTab,Ext.FormPanel);


Fos.ExpenseSimpleTab = function(p,f){
	this.f=f;
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	if(this.f=='C') 
		m=m+M3_EXPE; 
	else 
		m=M1_C+'08';	
	var PCny = new Ext.form.TextField({width:80,disabled:true});
	var PUsd = new Ext.form.TextField({width:80,disabled:true});
	var PEur = new Ext.form.TextField({width:80,disabled:true});
	var PLoc = new Ext.form.TextField({width:80,disabled:true});
	var PRc = new Ext.form.TextField({width:80,disabled:true});
	var PSale = new Ext.form.TextField({width:80,disabled:true});
	this.store = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	var cT={xtype:'tbtext',text:C_SUM_CNY_C};
	var uT={xtype:'tbtext',text:C_SUM_USD_C};
	var eT={xtype:'tbtext',text:C_SUM_EUR_C};
	
	var lT={xtype:'tbtext',text:C_SUM_LOC_C};	
	var rT={xtype:'tbtext',text:C_SUM_RC};
	var sRT={xtype:'tbtext',text:C_SUM_SALE_R};
	var sPT={xtype:'tbtext',text:C_SUM_SALE_P};
	
	var sumCnyR = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdR = new Ext.form.TextField({width:80,disabled:true});
	var sumEurR = new Ext.form.TextField({width:80,disabled:true});
	var sumLocR = new Ext.form.TextField({width:80,disabled:true});
	var sumRcR = new Ext.form.TextField({width:80,disabled:true});
	var sumSaleR = new Ext.form.TextField({width:80,disabled:true});
	this.sumCnyR=0;this.sumUsdR=0;this.sumEurR=0;this.sumLocR=0;this.sumRcR=0;this.sumSaleR=0;
	this.rs=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcR=function(){
		var d=this.rs.getRange();
		this.sumCnyR=0;this.sumUsdR=0;this.sumEurR=0;this.sumLocR=0;this.sumRcR=0;this.sumSaleR=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyR+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdR+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='EUR')
				this.sumEurR+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocR+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumSaleR+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumRcR+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		}
		sumCnyR.setValue(round2(this.sumCnyR));
		sumUsdR.setValue(round2(this.sumUsdR));
		sumEurR.setValue(round2(this.sumEurR));
		sumLocR.setValue(round2(this.sumLocR));
		sumRcR.setValue(round2(this.sumRcR));
		sumSaleR.setValue(round2(this.sumSaleR));
	};
	this.rg=new Fos.ExSimpleGrid(p,'R',this,this.rs);
	var pR=new Ext.Panel({width:Ext.isIE?800:'auto',layout:'fit',title:C_EXPE_R,collapsible:true,border:false,
			items:[this.rg],
		bbar:NR(m+S_AP+F_CV)?[sRT,sumSaleR]:[cT,sumCnyR,'-',uT,sumUsdR,'-',eT,sumEurR,'-',lT,sumLocR,'-',sRT,sumSaleR,'-',rT,sumRcR]
	});	
	
	var sumCnyP = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdP = new Ext.form.TextField({width:80,disabled:true});
	var sumEurP = new Ext.form.TextField({width:80,disabled:true});
	var sumLocP = new Ext.form.TextField({width:80,disabled:true});
	var sumRcP = new Ext.form.TextField({width:80,disabled:true});
	var sumSaleP = new Ext.form.TextField({width:80,disabled:true});
	this.sumCnyP=0;this.sumUsdP=0;this.sumEurP=0;this.sumLocP=0;this.sumRcP=0;this.sumSaleP=0;	
	this.ps=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcP=function(){
		var d=this.ps.getRange();
		this.sumCnyP=0;this.sumUsdP=0;this.sumEurP=0;this.sumLocP=0;this.sumRcP=0;this.sumSaleP=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyP+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdP+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='EUR')
				this.sumEurP+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocP+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumSaleP+=parseFloat(d[i].get('expeInnerAmount')*d[i].get('expeExRate'));
			this.sumRcP+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		};
		sumCnyP.setValue(round2(this.sumCnyP));
		sumUsdP.setValue(round2(this.sumUsdP));
		sumEurP.setValue(round2(this.sumEurP));
		sumLocP.setValue(round2(this.sumLocP));
		sumRcP.setValue(round2(this.sumRcP));
		sumSaleP.setValue(round2(this.sumSaleP));
	};
	this.pg=new Fos.ExSimpleGrid(p,'P',this,this.ps);
	var pP=new Ext.Panel({width:Ext.isIE?800:'auto',layout:'fit',title:C_EXPE_P,collapsible:true,border:false,items:[this.pg],
		bbar:NR(m+S_AP+F_CV)?[sPT,sumSaleP]:[cT,sumCnyP,'-',uT,sumUsdP,'-',eT,sumEurP,'-',lT,sumLocP,'-',sPT,sumSaleP,'-',rT,sumRcP]
	});
	var sumCnyC = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdC = new Ext.form.TextField({width:80,disabled:true});
	var sumEurC = new Ext.form.TextField({width:80,disabled:true});
	var sumLocC = new Ext.form.TextField({width:80,disabled:true});
	var sumRcC = new Ext.form.TextField({width:80,disabled:true});
	var sumSaleC = new Ext.form.TextField({width:80,disabled:true});	
	this.sumCnyC=0;this.sumUsdC=0;this.sumEurC=0;this.sumLocC=0;this.sumRcC=0;this.sumSaleC=0;	
	this.cs=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcC=function(){
		var d=this.cs.getRange();
		this.sumCnyC=0;this.sumUsdC=0;this.sumEurC=0;this.sumLocC=0;this.sumRcC=0;this.sumSaleC=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyC+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdC+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='EUR')
				this.sumEurC+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocC+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumSaleC+=parseFloat(d[i].get('expeInnerAmount')*d[i].get('expeExRate'));
			this.sumRcC+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		}
		sumCnyC.setValue(round2(this.sumCnyC));
		sumUsdC.setValue(round2(this.sumUsdC));
		sumEurC.setValue(round2(this.sumEurC));
		sumLocC.setValue(round2(this.sumLocC));
		sumRcC.setValue(round2(this.sumRcC));
		sumSaleC.setValue(round2(this.sumSaleC));
	};
	this.reCalculate = function(){		
		PCny.setValue(round2(this.sumCnyR-this.sumCnyP-this.sumCnyC));
		PUsd.setValue(round2(this.sumUsdR-this.sumUsdP-this.sumUsdC));
		PEur.setValue(round2(this.sumEurR-this.sumEurP-this.sumEurC));
		PLoc.setValue(round2(this.sumLocR-this.sumLocP-this.sumLocC));
		PRc.setValue(round2(this.sumRcR-this.sumRcP-this.sumRcC));
		PSale.setValue(round2(this.sumSaleR-this.sumSaleP-this.sumSaleC));
	};
	
	var rC=getCFG('COMMISSION_CHAR_CNY');
	var uC=getCFG('COMMISSION_CHAR_USD');
	var bVR=true;
	var bVC=true;
	
	if(CUSER_ID==p.get('consOperatorId')){		
		bVR=false;
		bVC=false;
		if(CUSER_ID==p.get('consSalesRepId')) bVR=true;
		if(getCFG('OPERATOR_DISPLAY_EXPE_R')=='Y') bVR=true;
	}
	else if(CUSER_ID==p.get('consSalesRepId')) bVC=false;
	
	if(p.get('rowAction')!='N' || !NR(m+M3_EXPE+S_AR+F_V))
		this.store.load({params:{consId:p.get('consId')},callback:function(){
			var a=this.store.getRange();
			for(var i=0;i<a.length;i++){
				if(a[i].get('expeType')=='R') {
					if(!NR(m+S_AR+F_V))
						this.rs.add(a[i]);
				}					
				else{
					if(a[i].get('charId')==rC||a[i].get('charId')==uC) 
						this.cs.add(a[i]);
					else{
						if(CUSER_ID==p.get('consOperatorId')&&CUSER_ID!=p.get('consSalesRepId'))
						{
							if(a[i].get('createBy')==CUSER_ID){
								if(!NR(m+S_AP+F_V))
									this.ps.add(a[i]);
							}
							else {
								if(!NR(m+S_AP+F_V))
									this.ps.add(a[i]);
							}								
						}
						else{
							if(!NR(m+S_AP+F_V))
								this.ps.add(a[i]);
						}
					}
				}
			}
			this.calcR();this.calcP();this.calcC();this.reCalculate();			
		},scope:this});	
	this.UN=new Ext.data.SimpleStore({id:0,fields:['U','N'],data:getUN(p)});
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatusExp:s},
			success: function(r){p.beginEdit();p.set('consStatusExp',s);p.endEdit();
			this.updateTB();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
	};
	this.check=function(){this.updateStatus('1');};
	this.unCheck=function(){this.updateStatus('0');};
	this.updateTB=function(){
		var tb=this.getTopToolbar();
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(M1_C+'08'+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(M1_C+'08'+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0);
    	this.rg.updateTB();this.pg.updateTB();
	};	
		
	this.reSize=function(){
		if(bVR==true){
			var bR=pR.collapsed;
			var bP=pP.collapsed;
			if(bR){if(!bP) this.pg.setHeight(400);}
			else if(bP){if(!bR) this.rg.setHeight(400);}
			else if(bC){if(!bR) this.rg.setHeight(400);if(!bP) this.pg.setHeight(400);}
			else{this.rg.setHeight(200);this.pg.setHeight(200);}
		}
	};
	pR.on({'collapse':{fn: this.reSize,scope: this},'expand':{fn:this.reSize,scope:this}});
	pP.on({'collapse':{fn: this.reSize,scope: this},'expand':{fn:this.reSize,scope:this}});

	var tb1={itemId:'TB_A',text:C_EXPE_AUDIT,disabled:NR(m+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0,iconCls:'check',scope:this,handler:this.check};
	var tb2={itemId:'TB_B',text:C_EXPE_UNCHECK,disabled:NR(m+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0,iconCls:'renew',scope:this,handler:this.unCheck};
	var tb3={xtype:'tbtext',text:C_PROFIT_CNY};
	var tb4={xtype:'tbtext',text:C_PROFIT_USD};
	var tb8={xtype:'tbtext',text:C_PROFIT_EUR};
	var tb5={xtype:'tbtext',text:C_PROFIT_LOC};
	var tb6={xtype:'tbtext',text:C_PROFIT_SALE};
	var tb7={xtype:'tbtext',text:C_PROFIT_RC};
	var tbs=[pR,pP];
	
	Fos.ExpenseSimpleTab.superclass.constructor.call(this, { 
	id:"T_EXPE_"+p.get('id'),title:C_EXPE_INFO,header:true,autoScroll:true,collapsible:true,
	height:560,labelAlign:'right',bodyStyle:'padding:0px 0px 0px',border:true,closable:true,
	items:tbs,
		tbar:(NR(m+S_AP+F_CV)||bVR==false)?[tb1,'-',tb2,'-']:[tb1,'-',tb2,'-',tb3,PCny,'-',tb4,PUsd,'-',tb8,PEur,'-',tb5,PLoc,'-',tb6,PSale,'-',tb7,PRc]
	});
};
Ext.extend(Fos.ExpenseSimpleTab, Ext.Panel);

Fos.ExSimpleGrid = function(p,t,frm,store) {
	this.reCalculate = function(){
		if(t=='R') 
			frm.calcR(); 
		else if(t=='P') 
			frm.calcP(); 
		else 
			frm.calcC();
		frm.reCalculate();
	};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	if(frm.f=='C') 
		m=m+M3_EXPE; 
	else 
		m=M1_C+'08';	
	var x=S_AR;
	if(t=='P') 
		x=S_AP; 
	else if(t=='R')  
		x=S_AR; 
	if(frm.f=='C') 
		m=m+x; 
	else 
		m=M1_C+'08'+x;
	var t1={header:C_SETTLE_OBJECT,width:200,dataIndex:"custName",align:'left',
		editor:new Ext.form.ComboBox({displayField:'custNameCn',valueField:'custNameCn',triggerAction:'all',
        mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,allowBlank:false,blankText:'',
        invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
        store:getCS(),enableKeyEvents:true,
        listeners:{scope:this,
        	select:function(c,r,i){
			var b =this.getSelectionModel().getSelected();
        	b.set('custId',r.get('custId'));
        	b.set('custName',r.get('custNameCn'));
        	b.set('custSname',r.get('custCode'));
        	},
       		keydown:{fn:function(f,e){LC(f,e,t=='R'?'custArFlag':'custApFlag',1);},buffer:500}}})};
	t2={header:C_CHAR,width:80,dataIndex:"charName",align:'center',
			editor:new Ext.form.ComboBox({displayField:'charCode',valueField:'charName',
			triggerAction:'all',tpl:charTpl,itemSelector:'div.list-item',listWidth:300,
            allowBlank:false,blankText:'',invalidText:'',mode:'local',
            selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCHAR_S(),
            listeners:{scope:this,select:function(c,r,i){
            	var b =this.getSelectionModel().getSelected();
            	b.set('charId',r.get('charId'));
            	b.set('chclId',r.get('chclId'));
            	b.set('charNameEn',r.get('charNameEn'));
            	b.set('currCode',r.get('currCode'));
            	b.set('unitId',r.get('unitId'));
            	b.set('expeExRate',getExRate(r.get('currCode'),'CNY'));
            	this.reCalculate();}}})};
    var t3={header:C_UNIT,width:80,dataIndex:"unitName",align:'center',
			editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_C(),listeners:{
            scope:this,select:function(c,r,i){
            	var b=this.getSelectionModel().getSelected();
            	var rec=frm.UN.getById(r.get('unitCode'));
            	b.set('expeNum',rec?rec.get('N'):1);}}})};
    var t4={header:C_QUANTITY,width:60,dataIndex:"expeNum",renderer:expenseNumRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	var t5={header:C_UNIT_PRICE,width:80,dataIndex:"expeUnitPrice",renderer:expenseNumRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	var t6={header:C_CURR,dataIndex:'currCode',width:50,align:'center',
			editor:new Ext.form.ComboBox({displayField:'currCode',valueField:'currCode',triggerAction: 'all',
            allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()})};
	var t7={header:C_EX_RATE,width:60,dataIndex:"expeExRate",renderer:rateRender};	
	var t8={header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",renderer:numRender};	
	var t9={header:C_COST_PRICE,width:80,dataIndex:"expeInnerPrice",renderer:rateRender,
			editor:new Ext.form.NumberField({disabled:NR(m+F_CM),decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:''})};
	var t10={header:C_COST_TOTAL,width:80,dataIndex:"expeInnerAmount",renderer:numRender};	
	var t11={header:C_PPCC,dataIndex:'pateCode',width:40,align:'center',
			editor:new Ext.form.ComboBox({displayField:'pateCode',valueField:'pateCode',triggerAction: 'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPATE_S(),
            listeners:{scope:this,select:function(c,r,i){this.getSelectionModel().getSelected().set('pateId',r.get('pateId'));}}})};
    var t12={header:C_INVO_NO,align:'center',dataIndex:"expeInvoiceNo",renderer:frm.f=='C'?'':invoRender,
    		editor:new Ext.form.TextField({selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
    var t13={header:C_TAX_NO,align:'center',dataIndex:"expeTaxInvoiceNo",
    			editor:new Ext.form.TextField({selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
    var t14={header:C_INVOICED_AMOUNT,renderer:rateRender,dataIndex:"expeInvoiceAmount",
    		editor:new Ext.form.TextField({selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
    var t15={header:C_WRITEOFFED_AMOUNT,renderer:rateRender,dataIndex:"expeWriteOffAmount",
    		editor:new Ext.form.TextField({selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};    
    var t16={header:C_REMARKS,width:100,dataIndex:"expeRemarks",editor:new Ext.form.TextField({enableKeyEvents:true,
    	listeners:{scope:this,keydown:function(c,e){k = e.getKey();if(k == e.ENTER) this.add();}}})};
    var t17={header:C_INVO_DATE,width:100,renderer:formatDate,dataIndex:"expeInvoiceDate",
    		editor:new Ext.form.DateField({format:DATEF})};
    var t18={header:C_WRITEOFF_DATE,renderer:formatDate,dataIndex:"expeWriteOffDate",
   			 editor:new Ext.form.DateField({format:DATEF})};
    var t19={header:C_CREATE_TIME,renderer:formatDateTime,dataIndex:"createTime"};
    var t20={header:C_MODIFY_TIME,renderer:formatDateTime,dataIndex:"modifyTime"};
    var t21={header:C_COMMISION_RATE,width:80,dataIndex:"expeCommissionRate",renderer:rateRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	var t22={header:C_COMMISION,width:60,dataIndex:"expeCommission",renderer:numRender,
			editor:new Ext.form.NumberField({decimalPrecision:2,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	 var t23={header:C_CREATE_BY,renderer:getUSER,dataIndex:"createBy"};
	 var t24={header:C_MODIFY_BY,renderer:getUSER,dataIndex:"expeUpdateBy"};
	 var t25={header:C_BILL_BY,renderer:getUSER,dataIndex:"expeInvoiceBy",editor:new Ext.form.ComboBox({store:getSALE_S(),xtype:'combo',displayField:'userName',valueField:'userName',
    		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'})};
	 var t26={header:C_VOUC_BY,renderer:getUSER,dataIndex:"expeWriteOffBy",editor:new Ext.form.ComboBox({store:getSALE_S(),xtype:'combo',displayField:'userName',valueField:'userName',
    		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'})};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cols=[sm,t1,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t15,t17,t18,t25,t26,t23,t19,t24,t20];
	
	var cm=new Ext.grid.ColumnModel({columns:cols,defaults:{sortable:true,width:100,align:'right'}});
	cm.defaultSortable=true;cm.defaultWidth=100;			
	this.add=function(){
		var unit='EACH';var rid=GGUID();
		var e = new SExpense({id:rid,expeId:rid,consId:p.get('consId'),consNo:p.get('consNo'),
			section:'CONS',consSailDate:p.get('consSailDate'),
    		consMblNo:p.get('consMblNo'),consHblNo:p.get('consHblNo'),consVessel:p.get('vessName'),
    		consVoyage:p.get('voyaName'),consBizClass:p.get('consBizClass'),consBizType:p.get('consBizType'),
    		consShipType:p.get('consShipType'),expeStatus:'0',expeBillStatus:'0',expeInvoiceStatus:'0',expeWriteOffStatus:'0',
    		custId:t=='R'?p.get('custId'):p.get('consBookingAgency'),
    		custName:t=='R'?p.get('custName'):p.get('consBookingAgencyName'),
    		custSname:t=='R'?p.get('custSname'):p.get('consBookingAgencySname'),
    		consCustId:p.get('custId'),consCustName:p.get('custName'),chclId:'',charId:'',charName:'',
    		expeType:t=='R'?'R':'P',pateId:PPID,pateCode:'P',unitName:unit,currCode:'CNY',expeUnitPrice:'',
    		expeCommissionRate:'',expeCommission:'',expeInnerPrice:'',expeExRate:'1.0000',expeRemarks:'',expeDate:new Date(),
    		expeAllocationFlag:'0',expeAllocatedFlag:'0',expeArStatus:'0',expeApStatus:'0',
    		expeInvoiceAmount:'0',expeWriteOffAmount:'0',expeWriteOffRcAmount:'0',expeInnerAmount:'0',expeRcAmount:'0',
    		expeTotalAmount:'0',expeNum:'1',version:'0'});
    	this.stopEditing();store.insert(0,e);e.set('rowAction','N');sm.selectFirstRow();this.startEditing(0, 1);
	};
	this.removeExp=function(){
		var r = sm.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){
				if(r[i].get('expeInvoiceStatus')>0) XMG.alert(SYS,M_REMOVE_EXP_INVOICED);
				else{r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');store.remove(r[i]);this.reCalculate();}
			}
		}
		else XMG.alert(SYS,M_R_P);
	};
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length){
			for(var i=0;i<a.length;i++){
				if(a[i].get('rowAction')!='R'&&a[i].get('rowAction')!='D'){
				if(a[i].get('custName')==''){XMG.alert(SYS,M_SETTLE_OBJECT_REQIRED);return;}
				else if(a[i].get('charId')==''){XMG.alert(SYS,M_CHAR_REQIRED);return;}
				else if(a[i].get('expeNum')==''||a[i].get('expeNum')=='0'){XMG.alert(SYS,M_QUANTITY_REQIRED);return;}
				else if(a[i].get('expeUnitPrice')==''||a[i].get('expeUnitPrice')=='0'){XMG.alert(SYS,M_UNIT_PRICE_REQIRED);return;}
				else if(a[i].get('currCode')==''){XMG.alert(SYS,M_CURR_PRICE_REQIRED);return;}
				else if(a[i].get('pateId')==''){XMG.alert(SYS,M_PPCC_REQIRED);return;}
				}
			}
			var x = ATX(a,'SExpense',SExpense);
			if(x!=''){								
				var tb=this.getTopToolbar();
				tb.getComponent('TB_C').setDisabled(true);
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'EXPE_S'},
					success: function(res){
						var a = XTRA(res.responseXML,'SExpense',SExpense);FOSU(store,a,SExpense);
						XMG.alert(SYS,M_S);tb.getComponent('TB_C').setDisabled(false);},
					failure: function(res){XMG.alert(SYS,M_F+res.responseText);tb.getComponent('TB_C').setDisabled(false);},
					xmlData:FOSX(x)
				});
			}
		}
		else XMG.alert(SYS,M_NC);
	};
	
	var locked=p.get('consStatusExp')==1||p.get('consStatusAud')!=0;
	
	//导出费用确认单
	this.expConfirm=function(){
		var a = sm.getSelections();
		var expeIds = '';
		if(a.length){
			for(var i=0;i<a.length;i++){
				expeIds += a[i].get('expeId');
				if(i<a.length-1)
					expeIds += ',';
			}
			EXPC('EXPE_CONFIRM','&expeIds='+expeIds+'&consId='+p.get('consId'));
		}
		else
			EXPC('EXPE_CONFIRM','&expeType='+t+'&consId='+p.get('consId'));
	};
	
	//导出费用结算单
	this.expCheck=function(){
		var a = sm.getSelections();
		var expeIds = '';
		if(a.length){
			for(var i=0;i<a.length;i++){
				expeIds += a[i].get('expeId');
				if(i<a.length-1)
					expeIds += ',';
			}
			EXPC('EXPE_SETTLEMENT','&consBizType='+p.get('consBizType')+'&expeIds='+expeIds+'&consId='+p.get('consId'));
		}
		else
			EXPC('EXPE_SETTLEMENT','&consBizType='+p.get('consBizType')+'&expeType='+t+'&consId='+p.get('consId'));
	};
	
	var sN='(N)';
	if(t=='R') sN='(N)'; else if(t=='P') sN='(M)'; else sN='(A)';
	var sR='(R)';
	if(t=='R') sR='(R)'; else if(t=='P') sR='(D)'; else sR='(X)';
	var sS='(S)';
	if(t=='R') sS='(S)'; else if(t=='P') sS='(P)'; else sS='(O)';
	var sC='(C)';
	if(t=='R') sC='(C)'; else if(t=='P') sC='(B)'; else sC='(Y)';

	var b1={itemId:'TB_A',text:C_ADD+sN,iconCls:'add',disabled:NR(m+F_V)||locked,scope:this,handler:this.add};
	var b2={itemId:'TB_B',text:C_REMOVE+sR,iconCls:'remove',disabled:NR(m+F_R)||locked,scope:this,handler:this.removeExp};
	var b3={itemId:'TB_C',text:C_SAVE+sS,iconCls:'save',disabled:NR(m+F_M)||locked,scope:this,handler:this.save};
    var b5={text:C_EXPORT,iconCls:'print',scope:this,menu: {items: [
           {text:C_EXPE_CONFIRM,scope:this,handler:this.expConfirm}, 
           {text:C_EXPE_CHECK,scope:this,handler:this.expCheck}]}};

    
    if(t=='R'){
	    new Ext.KeyMap(Ext.getDoc(), {
			key:'nrsc',ctrl:true,
			handler: function(k, e) {
			 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
			 	if(tc){
				 	var te=tc.getComponent('T_EXPE_'+p.get('id'));
				 	if(tc==T_MAIN.getActiveTab()&&te==tc.getActiveTab())
				 	{
				 		var tb=this.getTopToolbar();
				 		switch(k) {
						case Ext.EventObject.N:
							if(!tb.getComponent('TB_A').disabled) this.add();break;
						case Ext.EventObject.R:
							if(!tb.getComponent('TB_B').disabled) this.removeExp();break;
						case Ext.EventObject.S:
							if(!tb.getComponent('TB_C').disabled) this.save();break;
						case Ext.EventObject.C:
							if(!tb.getComponent('TB_D').disabled) this.cp();break;
						}
				 	}
			 	}
			},stopEvent:true,scope:this});
    }
    else if(t=='P'){
    	new Ext.KeyMap(Ext.getDoc(), {
			key:'mdpb',ctrl:true,
			handler: function(k, e) {
			 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
			 	if(tc){
				 	var te=tc.getComponent('T_EXPE_'+p.get('id'));
				 	if(tc==T_MAIN.getActiveTab()&&te==tc.getActiveTab())
				 	{
				 		var tb=this.getTopToolbar();
				 		switch(k) {
						case Ext.EventObject.M:
							if(!tb.getComponent('TB_A').disabled) this.add();break;
						case Ext.EventObject.D:
							if(!tb.getComponent('TB_B').disabled) this.removeExp();break;
						case Ext.EventObject.P:
							if(!tb.getComponent('TB_C').disabled) this.save();break;
						case Ext.EventObject.B:
							if(!tb.getComponent('TB_D').disabled) this.cp();break;
						case Ext.EventObject.F:
							if(!tb.getComponent('TB_F').disabled) this.allocate();break;				
					}}
			 	}
			},stopEvent:true,scope:this});
    }
    else{
    	new Ext.KeyMap(Ext.getDoc(), {
			key:'axoy',ctrl:true,
			handler: function(k, e) {
			 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
			 	if(tc){
				 	var te=tc.getComponent('T_EXPE_'+p.get('id'));
				 	if(tc==T_MAIN.getActiveTab()&&te==tc.getActiveTab())
				 	{
				 		var tb=this.getTopToolbar();
				 		switch(k) {
						case Ext.EventObject.A:
							if(!tb.getComponent('TB_A').disabled) this.add();break;
						case Ext.EventObject.X:
							if(!tb.getComponent('TB_B').disabled) this.removeExp();break;
						case Ext.EventObject.O:
							if(!tb.getComponent('TB_C').disabled) this.save();break;
						case Ext.EventObject.Y:
							if(!tb.getComponent('TB_D').disabled) this.cp();break;
						case Ext.EventObject.T:
							if(!tb.getComponent('TB_F').disabled) this.allocate();break;				
					}}
			 	}
			},stopEvent:true,scope:this});
    }    	
    this.updateTB=function(){
		var tb=this.getTopToolbar();
		var locked=p.get('consStatusExp')==1||p.get('consStatusAud')!=0;
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(m+F_M)||locked);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(m+F_R)||locked);
    	if(tb.getComponent('TB_C')) tb.getComponent('TB_C').setDisabled(NR(m+F_M)||locked);
	};
	
	Fos.ExSimpleGrid.superclass.constructor.call(this, {id:'G_EXOE_'+p.get('consNo')+t,
	border:true,autoScroll:true,clicksToEdit:1,height:200,
    stripeRows:true,store:store,sm:sm,cm:cm,listeners:{scope:this,
		beforeedit:function(e){
			e.cancel = e.record.get('editable')==0||e.record.get('expeStatus')>0||e.record.get('expeInvoiceStatus')>0||e.record.get('expeWriteOffStatus')>0;
		},
    	afteredit:function(e){var f=e.field;var r=e.record;
    	if(f=='expeNum'){
    		r.set('expeNum',e.value);
    		r.set('expeTotalAmount',round2(e.value*r.get('expeUnitPrice')-r.get('expeCommission')));
    		r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*e.value-r.get('expeCommission')));
    		r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
    		this.reCalculate();}
    	if(f=='unitName'){
            r.set('expeTotalAmount',round2(r.get('expeNum')*r.get('expeUnitPrice')-r.get('expeCommission')));
    		r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*r.get('expeNum')-r.get('expeCommission')));
    		r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
    		this.reCalculate();}
		else if(f=='expeUnitPrice'){
			r.set('expeTotalAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeInnerPrice',e.value);
			r.set('expeInnerAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
			this.reCalculate();}
		else if(f=='expeInnerPrice'){
			r.set('expeInnerAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
			this.reCalculate();}
		else if(f=='currCode'){
			r.set('expeExRate',getExRate(e.value,'CNY'));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
			this.reCalculate();}
		else if(f=='expeCommission'){
			r.set('expeTotalAmount',round2(r.get('expeUnitPrice')*r.get('expeNum')-e.value));
			r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*r.get('expeNum')-e.value));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
			this.reCalculate();}
		else if(f=='expeCommissionRate'){
			r.set('expeCommission',round2(r.get('expeTotalAmount')*e.value/100));			
			r.set('expeTotalAmount',round2(r.get('expeUnitPrice')*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
			this.reCalculate();}
    }},
    tbar:[b1, '-',b2,'-',b3,'-',b5]});
};
Ext.extend(Fos.ExSimpleGrid, Ext.grid.EditorGridPanel);


//费用台账
Fos.YsConsignAuditGrid = function() {
	var bp={mt:'xml',xml:''};
	var queryParams = [];
	
	var store = new Ext.data.GroupingStore({url:SERVICE_URL+'?A=CONS_CHECK_X',baseParams:bp,
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'FConsign',idProperty:'consId'},FConsign),
		sortInfo:{field:'consDate', direction:'DESC'},remoteSort:true
	});	
    store.load({params:{start:0,limit:C_PS}});
	
    this.reset=function(){
    	store.baseParams=bp;
    	store.reload({params:{start:0,limit:C_PS}});
    };
    setQueryParams=function(a){
    	queryParams = a;
    };
    
	this.search = function(){
		var win = new Fos.ConsLookupWin('','','','CONS_CHECK_X',store,setQueryParams);
		win.show();
	};	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,listeners:{scope:this,rowselect:function(s,row,r){
		this.updateTB(r);}}});
	var cm=new Ext.grid.ColumnModel({columns:[
		new Ext.grid.RowNumberer(),sm,
		{header:C_AUDIT_STATUS,width:80,dataIndex:"consStatusAud",renderer:getAUST},
		{header:C_CONS_NO,width:120,dataIndex:"consNo",renderer:consRender},
		{header:C_BOOKER,width:200,dataIndex:"custName"},
		{header:C_CONS_DATE,width:90,dataIndex:"consDate",renderer:formatDate},	
		{header:C_SUM_AR,width:80,dataIndex:"sumR",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_SUM_AP,width:80,dataIndex:"sumP",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_PROFIT,width:80,dataIndex:"grossProfit",align:'right',renderer:numRenderColor,css:'font-weight:bold;'},
		{header:C_PROFIT_RATE,dataIndex:"grossProfitRate",align:'right',renderer:numRenderColor,css:'font-weight:bold;'},
		{header:C_AR_USD,dataIndex:"sumRUsd",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_AP_USD,dataIndex:"sumPUsd",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_AR_CNY,dataIndex:"sumRCny",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_AP_CNY,dataIndex:"sumPCny",align:'right',renderer:numRender,css:'font-weight:bold;'},
		{header:C_AR_USD_INVOICED,hidden:true,dataIndex:"sumRUsdInvoice",align:'right',renderer:numRender},
		{header:C_AR_USD_WRITEOFFED,hidden:true,dataIndex:"sumRUsdWriteOff",align:'right',renderer:numRender},
		{header:C_AR_CNY_INVOICED,hidden:true,dataIndex:"sumRCnyInvoice",align:'right',renderer:numRender},
		{header:C_AR_CNY_WRITEOFFED,hidden:true,dataIndex:"sumRCnyWriteOff",align:'right',renderer:numRender},		
		{header:C_AP_USD_INVOICED,hidden:true,dataIndex:"sumPUsdInvoice",align:'right',renderer:numRender},
		{header:C_AP_USD_WRITEOFFED,hidden:true,dataIndex:"sumPUsdWriteOff",align:'right',renderer:numRender},		
		{header:C_AP_CNY_INVOICED,hidden:true,dataIndex:"sumPCnyInvoice",align:'right',renderer:numRender},
		{header:C_AP_CNY_WRITEOFFED,hidden:true,dataIndex:"sumPCnyWriteOff",align:'right',renderer:numRender},
		{header:C_REMARKS,dataIndex:"consRemarks"}
		],defaults:{sortable:true,width:100}});
	var rowCtxEvents = {rowdblclick: function(g,r,e){this.showExpense();}};
	this.updateStatus=function(s){
		var p = sm.getSelected();
		if(p) Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
				params:{A:'CONS_U',consId:p.get('consId'),consStatusAud:s},
				success: function(r){
					p.beginEdit();p.set('consStatusAud',s);
					p.endEdit();
					this.updateTB(p);
					XMG.alert(SYS,M_S);
				},
				failure: function(r){
					XMG.alert(SYS,M_F+r.responseText);
				}});
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.showExpense = function(p){
		var p=sm.getSelected();
		if(p){
			var t=T_MAIN.getComponent('T_EXPE_'+p.get("id"));if(t){T_MAIN.setActiveTab(t);}
			else {
				t=T_MAIN.add((new Fos.ExpenseSimpleTab(p,'A')));
				T_MAIN.setActiveTab(t);
				t.doLayout();}
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	
	
	this.exp=function(){		
		if(queryParams.length>0){
			var a = queryParams;
			var qa = [];
			for(var i=0;i<a.length;i++){
				qa[i] = {key:a[i].get('key'),op:a[i].get('op'),value:a[i].get('value')};
			}
			EXPC('CONS_AUDIT','&mt=JSON&xml='+Ext.util.JSON.encode(FOSJ(QTJ(qa))));
		}
		else{		
			EXPC('CONS_AUDIT','&mt=JSON&start=0&limit=500');
		}		
	};	
			
	this.updateTB=function(r){
		var tb=this.getTopToolbar();
		if(tb.getComponent('TB_2')) tb.getComponent('TB_2').setDisabled(NR(M1_C+M2_LE+F_A)||r.get('consStatusAud')!=0);
    	if(tb.getComponent('TB_3')) tb.getComponent('TB_3').setDisabled(NR(M1_C+M2_LE+F_A2)||r.get('consStatusAud')!=1);
    	if(tb.getComponent('TB_6')) tb.getComponent('TB_6').setDisabled(NR(M1_C+M2_LE+F_A)||r.get('consStatusAud')!=1);
    	if(tb.getComponent('TB_7')) tb.getComponent('TB_7').setDisabled(NR(M1_C+M2_LE+F_A2)||r.get('consStatusAud')!=2);
	};
	var b1={itemId:'TB_1',text:C_EXPE+'(Y)',disabled:NR(M1_C+'08'),iconCls:'option',handler:this.showExpense};
	var b2={itemId:'TB_2',text:C_FIN_CHECK+'(C)',disabled:NR(M1_C+M2_LE+F_A),
			iconCls:'check',scope:this,handler:function(){this.updateStatus('1');}};
	var b3={itemId:'TB_3',text:C_MANAGER_CHECK+'(M)',disabled:NR(M1_C+M2_LE+F_A2),
			iconCls:'check',scope:this,handler:function(){this.updateStatus('2');}};
	var b4={itemId:'TB_4',text:C_SEARCH+('(F)'),iconCls:'search',handler:this.search};
	var b5={itemId:'TB_5',text:C_EXPORT+'(E)',disabled:NR(M1_C+M2_LE+F_E),iconCls:'print',scope:this,
			handler:this.exp};
				
	var b6={itemId:'TB_6',text:'(U)',tooltip:C_FIN_CHECK_CANCEL,iconCls:'renew',disabled:NR(M1_C+M2_LE+F_A),scope:this,handler:function(){this.updateStatus('0');}};
	var b7={itemId:'TB_7',text:'(V)',tooltip:C_MANAGER_CHECK_CANCEL,iconCls:'renew',disabled:NR(M1_C+M2_LE+F_A2),scope:this,handler:function(){this.updateStatus('1');}};
	var b8={text:C_FAST_SEARCH+'(Q)',iconCls:'search',scope:this,handler:function(){this.fastSearch();}};
	var b9={text:C_RESET+'(F5)',iconCls:'refresh',handler:this.reset};
	var vc={forceFit:false,
		/* templates:{   
			    cell: new Ext.Template( 
			      '<td height=24 class="x-grid3-col x-grid3-cellx-grid3-td-{id}   x-selectable{css}" style="{style}"  tabIndex="0" {cellAttr}>',
			      '<div style="padding-top:4px;" class="x-grid3-cell-innerx-grid3-col-{id}" {attr}>{value}</div>',
			      '</td>'
			       )
			    },*/
		groupTextTpl: '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "Items" : "Item"]})',
		getRowClass: function(record, index) {
			var t=getCFG('PROFIT_ALERT_TYPE');
			var v=getCFG('PROFIT_ALERT_VALUE');
			 var c = 0;
			if(t==C_PROFIT) c = record.get('grossProfit');			
			else c=record.get('grossProfitRate');            
            if (c < v) return 'red-font-row';
            else return 'green-font-row';
        }
	};
	var kw = new Ext.form.TextField({listeners:{scope:this,specialkey:function(c,e){if(e.getKey()==Ext.EventObject.ENTER) this.fastSearch();}}});
    this.fastSearch=function(){
    	var consNo=kw.getValue();
		if(!consNo){
			XMG.alert(SYS,M_INPUT_BIZ_NO,function(b){kw.focus();});
			return;
		};		
     	var a=[];
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
    new Ext.KeyMap(Ext.getDoc(), {
        key:'ycmfeuv',ctrl:true,
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_COAU');
            if(tc&&tc==T_MAIN.getActiveTab()){
                switch(k) {
                case Ext.EventObject.Y: if(!NR(M1_C+S_EXPE)) this.showExpense();break;
                case Ext.EventObject.C: if(!NR(M1_C+M2_LE+F_A)) this.updateStatus('1');break;
                case Ext.EventObject.M: if(!NR(M1_C+M2_LE+F_A)) this.updateStatus('2');break;
                case Ext.EventObject.U: if(!NR(M1_C+M2_LE+F_A)) this.updateStatus('0');break;
                case Ext.EventObject.V: if(!NR(M1_C+M2_LE+F_A)) this.updateStatus('1');break;
                case Ext.EventObject.F: this.search();break;
                case Ext.EventObject.E: if(!NR(M1_D+F_E)) EXP('C','CONS_AUDIT','');break;
                }
            }
        },stopEvent:true,scope:this});
    new Ext.KeyMap(Ext.getDoc(), {key:[116],
        handler: function(k, e) {
            var tc = T_MAIN.getComponent('G_COAU');
            if(tc&&tc==T_MAIN.getActiveTab()){switch(k) {case Ext.EventObject.F5:this.reset();break;}}
        },stopEvent: true,scope:this
    });
    this.pagingNav=function(page){
        var tc = T_MAIN.getComponent('G_COAU');
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
	Fos.YsConsignAuditGrid.superclass.constructor.call(this, {
	    id:'G_COAU',iconCls:'grid',store: store,title:C_EXPE_SET,header:false,autoScroll:true,loadMask:true,
		sm:sm,cm:cm,stripeRows:true,closable:true,listeners:rowCtxEvents,view:new Ext.grid.GroupingView(vc),
		tbar:[b1,'-',b2,b6,'-',b3,b7,'-',b4,'-',b5,'-',kw,b8,'-',b9],bbar:PTB(store,C_PS)});	
};
Ext.extend(Fos.YsConsignAuditGrid, Ext.grid.GridPanel);

Fos.BranchGrid = function(){
	var store = GS('BRANCH_Q','PBranch',PBranch,'branchId','DESC','','','id',false);
	store.load({params:{start:0,limit:C_PS}});
	
	var branchName={header:C_BRANCH,width:200,dataIndex:"branchName",editor:new Ext.form.TextField({})};
	var sm = getCSM();
	var cm = new Ext.grid.ColumnModel({columns:[sm,branchName],defaults: {sortable:false}});
	this.add = function (){
		var p = new PBranch({id:GGUID(),branchId:'0',branchName:'',version:'0',rowAction:'N'});
        this.stopEditing();
    	store.insert(0,p);
    	this.startEditing(0, 1);
	};
    Fos.BranchGrid.superclass.constructor.call(this,{id:'YS_BRANCH',iconCls:'grid',
    store:store,title:C_BRANCH,header:false,loadMask:true,closable:true,clicksToEdit:1,
	sm:sm,cm:cm,tbar:[{
		text:C_ADD,disabled:NR(M1_C+'09'+F_V),iconCls:'add',scope:this,handler:this.add},
        {text:C_REMOVE,disabled:NR(M1_C+'09'+F_M),iconCls:'remove',handler:function(){FOS_REMOVE(sm,store);}}, '-', 
        {text:C_SAVE,disabled:NR(M1_C+'09'+F_R),iconCls:'save',handler:function(){FOS_POST(store,'PBranch',PBranch,'BRANCH_S');getBRANCH_S().reload();}
        }]});  
};
Ext.extend(Fos.BranchGrid,Ext.grid.EditorGridPanel);

//汇率设置
Fos.YsRateTab = function(p) {
    var store = GS('EXRA_Q','SExRate',SExRate,'','DESC','','','id',false);
    store.load({params:{active:1}});    			
    var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),
    {header:C_CURR_BASE,dataIndex:'exraBaseCurrency'},
	{header:C_CURR_EX,dataIndex: 'exraExCurrency'},
	{header:C_EX_RATE,renderer:rateRender,dataIndex: 'exraRate',width: 150,editor:new Ext.form.TextField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_EFFECT_DATE,dataIndex:"exraStartDate"},
	{header:C_EXPIRY_DATE,dataIndex:"exraEndDate"}
	],defaults:{sortable:true,width:100}});
    
    var grid = new  Ext.grid.EditorGridPanel({clicksToEdit:1,store:store,sm:sm,cm:cm,border:false,
    tbar:[{text:C_SAVE,iconCls:'save',handler:function(){
    	grid.stopEditing();
    	var a =store.getModifiedRecords();
    	if(a.length){
    		var x = ATX(a,'SExRate',SExRate);
    		if(x!='')
    		{
    			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'EXRA_S'},
    				success: function(r){
    					store.load({params:{active:1}}); 
    					XMG.alert(SYS,M_S);
    				},
    				failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
    				xmlData:FOSX(x)
    			});
    		}
    	}
    	else XMG.alert(SYS,M_NC);
    	
    	//FOS_POST(store,'SExRate',SExRate,'EXRA_S');
    	}
    }]});    
    var store2 = GS('EXRA_Q','SExRate',SExRate,'exraId','DESC','','','id');
    store2.load({params:{active:0}});
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
    var cm2=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),{header:C_CURR_BASE,dataIndex:'exraBaseCurrency'},
	{header:C_CURR_EX,dataIndex: 'exraExCurrency',width:150},
	{header:C_EX_RATE,renderer:rateRender,dataIndex: 'exraRate',width: 150,editor:new Ext.form.TextField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_EFFECT_DATE,dataIndex:"exraStartDate"},
	{header:C_EXPIRY_DATE,dataIndex:"exraEndDate"}],defaults:{sortable:true}});
	var t1=new Ext.form.ComboBox({width:80,displayField:'currCode',valueField:'currCode',triggerAction:'all',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()});
    var t2=new Ext.form.ComboBox({width:80,displayField:'currCode',valueField:'currCode',triggerAction:'all',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()});
    var t3=new Ext.form.DateField();
    var t4=new Ext.form.DateField();
    var grid2 = new  Ext.grid.GridPanel({header:false,store:store2,sm:sm2,cm:cm2,border:false,
    	tbar:[
    	{xtype:'tbtext',text:C_CURR_BASE+'：'},t1,'-',
    	{xtype:'tbtext',text:C_CURR_EX+'：'},t2,'-',
    	{xtype:'tbtext',text:C_EFFECT_DATE+'：'},t3,'-',
    	{xtype:'tbtext',text:C_EXPIRY_DATE+'：'},t4,'-',
    	{text:C_SEARCH,iconCls:'search',handler:this.search}]
    });   
	Fos.YsRateTab.superclass.constructor.call(this, { 
		id:'G_RATE',title:C_EX_RATE,header:false,deferredRender:false,autoScroll:true,closable:true,border:false,width:800,
		items:[{xtype:'tabpanel',plain:true,activeTab:0,height:500,
            items:[
            {layout:'fit',title:C_EX_ACTIVE,items:grid},
            {layout:'fit',title:C_EX_HISTORY,items:grid2}]}
        ]});
};
Ext.extend(Fos.YsRateTab, Ext.FormPanel);