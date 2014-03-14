QParam = Ext.data.Record.create(['key','op','value']);
WUser = Ext.data.Record.create(['id','wusrId','wusrName','wusrPassword','wusrFirstName','wusrLastName',
        'wusrTitle','wusrDept','wusrMobile','wusrEmail','wusrCompanyName','wusrAddress','wusrCity','wusrProvice',
        'wusrZip','wusrCountry','wusrTel','wusrFax','wusrUrl','wusrStatus','wusrLastLoginTime',
     	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
     	{name:'wusrLastLoginTime',type:'date',dateFormat:'Y-m-d H:i:s'},
     	'custId','compCode','version','rowAction']);
WInquiry = Ext.data.Record.create(['id','winqId','winqCompany','winqCargoDesc','winqCargoPackages','winqCargoGw','winqCargoMeasurement',
        'winqReceiptPlace','winqDeliveryPlace','winqPol','winqPolEn','winqPod','winqPodEn',
        'tranId','tranCode','pateId','pateName','winqBizType','winqRemarks',
     	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
     	{name:'modiryTime',type:'date',dateFormat:'Y-m-d H:i:s'},
     	'winqStatus','wusrId','wusrFirstName','wusrMobile','wusrCompanyName','wusrTel','compCode','version','rowAction']);
GTransTerm = Ext.data.Record.create(['id','tranId','tranCode','tranName','tranBulkFlag','tranContFlag','compCode','active','version','rowAction']);
GPaymentTerm = Ext.data.Record.create(['id','pateId','pateCode','pateName','compCode','active','version','rowAction']);
GPort = Ext.data.Record.create(['id','portId','portCode','portNameEn','portNameCn','counCode','portType','portCnty','portArea','compCode','active','version','rowAction']); 
GPackage = Ext.data.Record.create(['id','packId','packCode','packName','packName','compCode','active','version','rowAction']); 
WConsign = Ext.data.Record.create(['id','wconId','wconNo',
	'consId','consNo','consShipType','consBizClass','consBizType',
	'consRefNo','consContractNo',
	{name:'consDate',type:'date',dateFormat:DATEF},
	'custId','custName','consShipper','consConsignee','consNotifyParty','consNotifyParty2',	
	'consPol','consPolEn','consReceiptPlace','consPod','consPodEn',
	'consPot','consPotEn','consDeliveryPlace','consDestination','consTradeCountry','consPrecarriage',
	'vessId','vessName','vessNameCn','voyaId','voyaName',
	'consMblNo','consCargoDesc','consCargoMarks','consTotalPackages',
	{name:'consTotalGrossWeight',type:'float'},		
	{name:'consTotalMeasurement',type:'float'},	
	{name:'cargBigFlag',type:'boolean',convert:function(v){return v==1;}},	
	{name:'cargReeterFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'cargDanagerFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'consTransFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'consPartialFlag',type:'boolean',convert:function(v){return v==1;}},
	'tranId','tranCode','packId','packName','pateId','pateName','consContainersInfo',
	'consOriginalBlNum','consRemarks','consServiceRequired','consStatus',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'wusrId','compCode','version','rowAction']);
FConsign = Ext.data.Record.create(['id',
	'consId','consNo','consShipType','consBizClass','consBizType',
	'consRefNo','consContractNo',{name:'consDate',type:'date',dateFormat:DATEF},
	{name:'consSailDate',type:'date',dateFormat:DATEF},'consOperatorName',
	'custId','custName','consShipper','consConsignee','consNotifyParty','consNotifyParty2',	
	'consPol','consPolEn','consReceiptPlace','consPod','consPodEn',
	'consPot','consPotEn','consDeliveryPlace','consDestination','consTradeCountry','consPrecarriage',
	'vessId','vessName','vessNameCn','voyaId','voyaName',
	'consMblNo','consCargoDesc','consCargoMarks','consTotalPackages',
	{name:'consTotalGrossWeight',type:'float'},		
	{name:'consTotalMeasurement',type:'float'},
	'tranId','tranCode','packId','packName','pateId','pateName','consContainersInfo',
	'consOriginalBlNum','consRemarks','consServiceRequired','consStatus',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode']);
FBl = Ext.data.Record.create(['id',
	'blId','blNo','blType','consId','consNo','consBizClass','consTradeContractNo','consChargeRemarks','consBizType','custId','custName',
	'blShipper','blConsignee','blNotifyParty','blNotifyParty2','blOverseaAgency',	
	'blPreCarriage','blCarrier','blCarrierName','blVessel','blVoyage','blPol','blPod','blPot',
	{name:'blLoadDate',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'blEtd',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'blEta',type:'date',dateFormat:'Y-m-d H:i:s'},
	'blReceiptPlace','blDeliveryPlace','blContainerNo',
	'blPackages','blCargoDesc','blGrossWeight','blNetWeight','blMeasurement','blTotalSay',
	'blMarks','packId','packName','unitId','unitName',
	{name:'cargGrossWeight',type:'float'},{name:'cargNetWeight',type:'float'},
    {name:'cargMeasurement',type:'float'},'cargPackages','blMBlId','blMBlNo',
	'blPaymentTerm','blPaidAt','blTransTerm','blShipType','blContainerInfo',
	'blOriginalNum','istyId','blIssueBy',{name:'blIssueDate',type:'date',dateFormat:DATEF},'blIssuePlace','blRemarks',
	{name:'blMergeFlag',type:'boolean',convert:function(v){return v==1;}},	
	{name:'blSplitFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'blMasterFlag',type:'boolean',convert:function(v){return v==1;}},
	'blStatus',	
	'createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FTask= Ext.data.Record.create(['id',
	'taskId','tatyId','tatyName','tatyDId','tatyDName','consId','consNo','consMasterId','consMasterNo','taskOwner','taskOwnerName',
	{name:'taskEstimatedDate',type:'date',dateFormat:DATEF},{name:'taskFinishedDate',type:'date',dateFormat:DATEF},
	'taskFinishedFlag','tatyBizType','tatyBizClass',
	'active','compCode','version','rowAction']);
SBill = Ext.data.Record.create(['id',
	'billId','billNo','custId','custName','custSname','billType',{name:'billDate',type:'date',dateFormat:DATEF},'currCode',{name:'billAmount',type:'float'},{name:'billAmountCny',type:'float'},{name:'billAmountUsd',type:'float'},'billVessel','billVoyage',
	'billBlNo',{name:'billSailDate',type:'date',dateFormat:DATEF},'billPol','billPod','billDeliveryPlace',
	'billRemarks','billIssuer',{name:'billIssueDate',type:'date',dateFormat:DATEF},
	'billConsNo','billCargoName','billCargoQwm','billContainersInfo','billStatus',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','attr1','attr2','attr3','attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
SBillItem = Ext.data.Record.create(['id','biitId','billId',
	'expeId','custId','custName','charId','charName','custSname','unitId','unitName','currCode',
	'expeType','pateId',{name:'expeDate',type:'date',dateFormat:DATEF},
	{name:'expeUnitPrice',type:'float'},{name:'expeNum',type:'float'},
	{name:'expeTotalAmount',type:'float'},{name:'expeExRate',type:'float'},
	'expeStatus','expeRemarks','expeForwardFlag',
	'consNo','consMblNo','consHblNo','consVessel','consVoyage',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
WBlM=Ext.data.Record.create(['id','wblmId','blId','blNo','consId','consNo','custId','custName','wblmField','wblmValueOld','wblmValueNew','wblmReason','wblmStatus','wblmRejectReason','wblmReplyBy',
	{name:'replyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},'wusrId','compCode','version','rowAction']);
PComments = Ext.data.Record.create(['id','commId','objectId','objectType','commBody',
	'commBy','createTime','removed','compCode','version']);

GVoyage = Ext.data.Record.create(
	['id','voyaId','voyaName','vessId','vessName','vessNameCn','voyaClass','voyaType',
	 'voyaCarrier','voyaCarrierName','voyaHarbourId','voyaHarbourName','voyaPorts','shliId','shliName','voyaCarrierLine',
	{name:'voyaQuantity',type:'float'},
	{name:'voyaShippedQuantity',type:'float'},
	{name:'voyaFactQuantity',type:'float'},
	{name:'voyaShipDateF',type:'date',dateFormat:DATEF},
	{name:'voyaShipDateT',type:'date',dateFormat:DATEF},
	{name:'voyaLoadDateF',type:'date',dateFormat:DATEF},
    {name:'voyaLoadDateT',type:'date',dateFormat:DATEF},
	{name:'voyaEtd',type:'date',dateFormat:DATEF},'voyaEtdT',
	{name:'voyaEta',type:'date',dateFormat:DATEF},'voyaEtaT',
	{name:'voyaBerthingDate',type:'date',dateFormat:DATEF},'voyaBerthingDateT',
	{name:'voyaSailDate',type:'date',dateFormat:DATEF},'voyaSailDateT',
	'voyaSailedFlag','voyaShipMapFlag',
	'voyaDispatcherId','voyaDispatcherName','voyaOperatorId','voyaOperatorName',
	'compCode','active','version','rowAction']);
GShippingLine = Ext.data.Record.create(['id','shliId','shliCode','shliName','shliNameEn','shliBulkFlag','shliContFlag','active','compCode','version','rowAction']);

function getPS(){return new Ext.data.Store({url: SERVICE_URL+'?A=PORT_Q',
	reader: new Ext.data.XmlReader({record:'GPort'},GPort),
	sortInfo:{field:'portNameEn',direction:'ASC'}});};

var tranStore=new Ext.data.Store({url:SERVICE_URL+'?A=TTER_Q',reader: new Ext.data.XmlReader({record:'GTransTerm'},GTransTerm),sortInfo:{field:'tranId',direction:'ASC'}});
var pateStore=new Ext.data.Store({url:SERVICE_URL+'?A=PATE_Q',reader: new Ext.data.XmlReader({record:'GPaymentTerm'},GPaymentTerm),sortInfo:{field:'pateId',direction:'ASC'}});
var packStore=new Ext.data.Store({url:SERVICE_URL+'?A=PACK_Q',reader: new Ext.data.XmlReader({record:'GPackage'},GPackage),sortInfo:{field:'packId',direction:'ASC'}});


var S_FIELD=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[
	['blShipper','发货人'],['blConsignee','收货人'],['blNotifyParty','通知人'],
	['blReceiptPlace','收货地'],['blDeliveryPlace','目的地'],['blPreCarriage','前程运输'],
	['blReceiptPlace','收货地'],['blDeliveryPlace','目的地'],['blVessel','船名'],['blVoyage','航次'],
	['blPol','装货港'],['blPod','卸货港'],['blMarks','唛头'],['blPackages','件数包装'],
	['blCargoDesc','货物描述'],['blGrossWeight','毛重'],['blMeasurement','体积'],['blOriginalNum','正本提单分数']
	]});
getBLField = function(v){
	if(v!='') 
		return S_FIELD.getById(v).get('NAME'); 
	else return '';
};

var S_BC=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['E','出口'],['I','进口']]});
var S_ST=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['FCL','整箱'],['LCL','拼箱'],['BULK','散货']]});
var S_BT=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['C','海运'],['A','空运']]});
var BIST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
	data:[['0','未对账'],['1','已对账'],['2','已作废']]});
getBIST = function(v){
	if(v>=0) 
		return BIST_S.getById(v).get('NAME'); 
	else return '';
};

getWINQStatus=function(v){
	if(v==0) 
		return '未回复'; 
	else 
		return '已回复';
};

var getWS_BC=function(v){
	if(v) 
		return S_BC.getById(v).get('NAME'); 
	else return '';
};
var getWS_BT=function(v){
	if(v) 
		return S_BT.getById(v).get('NAME'); 
	else return '';
};
var getWS_ST=function(v){
	if(v) 
		return S_ST.getById(v).get('NAME'); 
	else return '';
};
var getWCON_ST=function(v){
	if(v==1) 
		return C_WS_WCON_ACCEPTED; 
	else 
		return C_WS_WCON_NOT_ACCEPTED;
};

LP=function(f,e){
	if(e.getKey()!=e.ENTER){	
		var q=f.getRawValue();
		if(q.length>1 && !f.isExpanded()){
			var a=[];
			a[0]=new QParam({key:'portNameEn',value:q+'%',op:7});			
			var xml = QTX(a);
	   		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'PORT_X'},
				success: function(r,o){f.store.loadData(r.responseXML,false);f.expand();},
				xmlData:"<FosRequest>\n<data>\n"+xml+"</data>\n</FosRequest>\n"
			});
		}
		else if(q.length==0 && f.isExpanded()){f.store.removeAll();}
	}
};
                                                                    