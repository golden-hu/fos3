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
    var consStatus={header:C_STATUS,width:60,dataIndex:"consStatus",renderer:getCONS_STATUS};
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
	var cm = new Ext.grid.ColumnModel({columns:[rowNum,consStatus,consNo,custName,consDate,tranId,pateId,consEtd,
		consPodEn,consTotalPackages,consTotalGrossWeight,consTotalMeasurement,consContainersInfo,consTotalContainers,
		consCarrierName,consRemarks,consContractNo,consCargoOwnerName,consOperatorName,consEta
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
	this.addConsign = function(){
		var c=sm.getSelected();
		if(c.get('consMasterFlag')=='1'){
			var b=Fos.newConsign(bizClass,bizType,shipType);
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
	
	this.removeConsign = function(){
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var xml = SMTX4R(sm,'FConsign','consId');
           		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
				success: function(){sm.each(function(p){store.remove(p);});XMG.alert(SYS,M_S);},
				failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
				xmlData:FOSX(xml)});
           }});
		}
       	else XMG.alert(SYS,M_R_P);
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
	sm:sm,cm:cm,stripeRows:true,closable:true,tbar:tbs});    
};
Ext.extend(Fos.YsConsignGrid,Ext.grid.GridPanel);

Fos.YsConsignTab = function(p,listStore){
	//业务号
	var txtConsNo = {fieldLabel:C_CONS_NO,style:'{font-weight:bold;color:green;}',readOnly:true,
			tabIndex:1,name:'consNo',value:p.get('consNo'),xtype:'textfield',anchor:'99%'};
	//部门
	var cboDept={fieldLabel:C_DEPT,itemCls:'required',name:'deptId',value:p.get('deptId'),
			tabIndex:2,store:getGROU_S(),xtype:'combo',displayField:'grouName',valueField:'grouId',
			typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	//业务员
	var cboSales={fieldLabel:C_SALES,itemCls:'required',tabIndex:3,name:'consSalesRepName',value:p.get('consSalesRepName'),
    		store:getSALE_S(),xtype:'combo',displayField:VERSION==1?'userName':'userLoginName',valueField:'userName',
    		typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
    		listeners:{scope:this,
    			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consSalesRepId','');p.set('consSalesRepName','');}},
    	    	select:function(c,r,i){p.set('consSalesRepId',r.get('userId'));}}};	
    //操作员
	var cboOperator={fieldLabel:C_OPERATOR,itemCls:'required',tabIndex:4,name:'consOperatorId',value:p.get('consOperatorId'),
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
    	store:p.get('consBizType')==BT_B?getTTB_S():getTTC_S(),xtype:'combo',displayField:'tranCode',
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
		
	//装货港
	var cboConsPolEn = {fieldLabel:C_POL,itemCls:'required',tabIndex:p.get('consBizClass')==BC_I?39:43,
		name:'consPolEn',value:p.get('consPolEn'),store:getPS(),xtype:'combo',
		displayField:'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'local',
		triggerAction:'all',selectOnFocus:true,anchor:'99%',
		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consPol','');}},
        	select:function(c,r,i){
        		p.set('consPol',r.get('portId'));
        		p.set('consPolCn',r.get('portNameCn'));
        		if(p.get('consBizClass')==BC_I&&this.find('name','consTradeCountry')[0]) 
        			this.find('name','consTradeCountry')[0].setValue(r.get('counCode'));
        		if(p.get('consBizClass')==BC_E&&this.find('name','consReceiptPlace')[0]) 
        			this.find('name','consReceiptPlace')[0].setValue(r.get('portNameEn'));
        	},
         	keydown:{fn:LP,buffer:BF}}};
    //发车日期
    var dtDepartureDate = {fieldLabel: C_DEPARTURE_DATE,tabIndex: 14,name: 'consSailDate',
		value: p.get('consSailDate'),xtype: 'datefield',format: DATEF,anchor: '99%'
	};
   //始发站
	var cboDepartureStation = {fieldLabel: C_DEPARTURE_STATION,tabIndex: 39,name: 'attr1',value: p.get('attr1'),
		store: getTS(),xtype: 'combo',displayField: 'trainNameCn',valueField: 'trainNameCn',typeAhead: true,
		mode: 'local',triggerAction: 'all',selectOnFocus: true,anchor: '99%',tpl:stationTpl,
		itemSelector: 'div.list-item',listWidth: C_LW,enableKeyEvents: true,
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('consPol', '');
				}
			},
			select: function(c, r, i) {
				p.set('consPol', r.get('trainId'));
				p.set('consPolEn', r.get('trainNameEn'));
			},
			keydown: {
				fn: LT,
				buffer: BF
			}
		}
	};
	//中方换装站
	var cboCTransferStation = {fieldLabel: C_CTRANSFER_STATION,tabIndex: 39,name: 'attr2',value: p.get('attr2'),
		store: getTS(),xtype: 'combo',displayField: 'trainNameCn',valueField: 'trainNameCn',typeAhead: true,
		mode: 'local',triggerAction: 'all',selectOnFocus: true,anchor: '99%',tpl: stationTpl,
		itemSelector: 'div.list-item',listWidth: C_LW,enableKeyEvents: true,
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('consPol', '');
				}
			},
			select: function(c, r, i) {
				p.set('consPot', r.get('trainId'));
				p.set('consPotEn', r.get('trainNameCn'));
			},
			keydown: {
				fn: LT,
				buffer: BF
			}
		}
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
		store: getTS(),xtype: 'combo',displayField: 'trainNameCn',valueField: 'trainNameCn',typeAhead: true,
		mode: 'local',triggerAction: 'all',selectOnFocus: true,anchor: '99%',tpl: stationTpl,
		itemSelector: 'div.list-item',listWidth: C_LW,enableKeyEvents: true,
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('consPol', '');
				}
			},
			select: function(c, r, i) {
				p.set('consPol', r.get('trainId'));
				p.set('consPodCn', r.get('trainNameCn'));
			},
			keydown: {
				fn: LT,
				buffer: BF
			}
		}
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
		store: getTS(),xtype: 'combo',displayField: 'trainNameCn',valueField: 'trainNameCn',typeAhead: true,
		mode: 'local',triggerAction: 'all',selectOnFocus: true,anchor: '99%',tpl: stationTpl,
		itemSelector: 'div.list-item',listWidth: C_LW,enableKeyEvents: true,
		listeners: {
			scope: this,
			blur: function(f) {
				if (f.getRawValue() == '') {
					f.clearValue();
					p.set('consPol', '');
				}
			},
			select: function(c, r, i) {
				p.set('consDeliveryPlaceCode', r.get('trainId'));
			},
			keydown: {
				fn: LT,
				buffer: BF
			}
		}
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
	var railItem1 = {columnWidth:.25,border:false,layout:'form',items:[dtDepartureDate,dtCDeliveryDate,dtFDeliveryDate]};
	var railItem2 = {columnWidth:.25,border:false,layout:'form',items:[txtRailNo,txtFRailNo,dtArrivalDate]};
	var railItem3 = {columnWidth:.25,border:false,layout:'form',items:[cboDepartureStation,cboFTransferStation]};
	var railItem4 = {columnWidth:.25,border:false,layout:'form',items:[cboCTransferStation,cboDestinationStation]};
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
	var cboPolEn={fieldLabel:C_POL,itemCls:'required',tabIndex:p.get('consBizClass')==BC_I?39:43,
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
    var cboPodEn={fieldLabel:C_POD,itemCls:'required',name:'consPodEn',
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
	var cboTranVendorName= new Fos.CustomerLookup({fieldLabel:HL(C_TRACK_VENDOR),name:'consTrackVendorName',
			value:p.get('consTrackVendorName'),store:getCS(),enableKeyEvents:true,
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
	var cboTranLoadFactory={fieldLabel:C_LOAD_PLACE,name:'consLoadFactory',value:p.get('consLoadFactory'),xtype:'siteLookup',
			custId:p.get('custId'),siteType:3,typeAhead:true,mode:'remote',triggerAction:'all',
        	selectOnFocus:true,anchor:'99%',listWidth:200,pageSize:30,
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
	var cboDeliveryPlace={fieldLabel:C_DELIVERY_PLACE,name:'consWarehouseName',value:p.get('consWarehouseName'),xtype:'siteLookup',
			custId:p.get('custId'),siteType:2,typeAhead:true,mode:'remote',triggerAction:'all',
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
		if(!p.get('custId')){
			XMG.alert(SYS,M_CUST_MUST_PREDEFINED);return;};
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
		
   	 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
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
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
    };    
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
    this.showExp=function(){
    	var win = new Fos.ExWin(p);
    	win.show();
    };    
    this.showDoc=function(){
    	var win = new Fos.DocWin(p);
    	win.show();
    };  
	var locked=p.get('consStatusLock')==1;
    var disable=p.get('editable')==0;
    var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CONS;
    
    
	var b1={text:C_SAVE+'(S)',itemId:'TB_A',iconCls:'save',disabled:NR(m+F_M)||locked||disable,scope:this,handler:this.save};
	var b2={text:C_COPY+'(A)',itemId:'TB_N',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:function(){Fos.showConsign(Fos.copyConsign(p));}};
	var b3={text:C_COPY_FROM,itemId:'TB_O',iconCls:'copy',disabled:NR(m+F_M)||locked||disable,scope:this,handler:this.copyFrom};
	var b4={text:C_EXPE,itemId:'TB_EXP',iconCls:'dollar',disabled:NR(m+M3_EXPE)||p.get('rowAction')=='N',scope:this,handler:this.showExp};
	var b5={text:C_DOC,itemId:'TB_DOC',iconCls:'doc',disabled:NR(m+M3_DOC)||p.get('rowAction')=='N',scope:this,handler:this.showDoc};
	var btnModifyConsignNo={text:C_MODIFY_CONS_NO,itemId:'TB_MO_CONS_NO',iconCls:'option',
			disabled:NR(m+F_MIDIFY_CONS_NO)||locked==1,scope:this,handler:this.ModifyConsNo};
	var tbs=[b1, '-',b2,'-',b3,'-',btnModifyConsignNo,'-',b4,'-',b5];
	
	Fos.YsConsignTab.superclass.constructor.call(this,{
		id: "YS_BOOK_"+p.get('id'),title:(p.get('consBizClass')=='E'?C_EXP:C_IMP)+C_CONSIGN+'委托【'+p.get("consNo")+'】',header:false,autoScroll:true,
		border:false,labelAlign:'right',	
		iconCls:'class',deferredRender:false,closable:true,
		items:[bookerInfo,railInfo,maritimeInfo,automotiveInfo,ShipperInfo],
		tbar:tbs
		});
};
Ext.extend(Fos.YsConsignTab,Ext.FormPanel)

