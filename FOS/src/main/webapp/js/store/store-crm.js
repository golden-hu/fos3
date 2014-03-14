CCustomerCategory = Ext.data.Record.create(['id','cucaId','cucaName','compCode','version','rowAction']);
CCustomer = Ext.data.Record.create(['id','custId','custCode','custClass','custNameCn','custSnameCn','custNameEn',
	'custSnameEn','custContact','custTel','custFax','custZip','custEmail','custUrl','custAddress','custAddress2',
	'custAddress3','custIndustry','custType','custInvoiceHeader','custRemarks','custBankCny','custAccountCny',
	'custBankUsd','custAccountUsd','custShipTo','custChargeTo',
	'custShipper',{name:'custCreditDay',type:'int'},'custCreditAmount','cucaId','counCode','custProvince','custCity','custArFlag','custApFlag',
	'custCarrierFlag','custBookingAgencyFlag','custCfsFlag','custWarehouseFlag','custTrackFlag',
	'custInspectionFlag','custCustomFlag','custInsuranceFlag','custContainerFlag','custOverseaAgencyFlag','custDoAgencyFlag',
	'custBookerFlag','custShipperFlag','custConsigneeFlag','custNotifyFlag','custAirFlag','custExpreeFlag',
	'custSalesId','custSalesName','custActive','editable',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','attr1','attr2','attr3','attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
CPriceSheet = Ext.data.Record.create(['id','prshId','prshVendorId','prshVendorName','prshCarrier','prshCarrierName',
	'prshBizType','prshContractNo','prshPol','prshPolEn','prshPolHarbour','shliId','shliName',
	{name:'prshStartDate',type:'date',dateFormat:DATEF},'vessId','vessName','voyaId','voyaName',
	{name:'prshEndDate',type:'date',dateFormat:DATEF},'prshRemarks','prshStatus',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
CPriceLine = Ext.data.Record.create(['id','prliId','prshId','prliPod','prliCountryD','prliCountryT','prliCountryDName','prliCountryTName','prliPodEn','prliPodHarbour','prliPot','prliPotEn',
	'caclId','caclName','pateId','pateName','tranId','tranName',
	'prliShipDate','prliDuration','prliRemarks',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
CPriceRecord = Ext.data.Record.create(['id','prreId','prliId','prshId','currCode','charId','charName',
	{name:'prreCommissionRate',type:'float'},
	{name:'prrePriceP20',type:'float'},{name:'prrePriceB20',type:'float'},{name:'prrePriceS20',type:'float'},
	{name:'prrePriceP40',type:'float'},{name:'prrePriceB40',type:'float'},{name:'prrePriceS40',type:'float'},
	{name:'prrePriceP40h',type:'float'},{name:'prrePriceB40h',type:'float'},{name:'prrePriceS40h',type:'float'},
	{name:'prrePricePCbm',type:'float'},{name:'prrePriceBCbm',type:'float'},{name:'prrePriceSCbm',type:'float'},
	{name:'prrePricePKgs',type:'float'},{name:'prrePriceBKgs',type:'float'},{name:'prrePriceSKgs',type:'float'},
	{name:'prrePricePTon',type:'float'},{name:'prrePriceBTon',type:'float'},{name:'prrePriceSTon',type:'float'},
	{name:'prrePricePB1',type:'float'},{name:'prrePriceBB1',type:'float'},{name:'prrePriceSB1',type:'float'},
	{name:'prrePricePB2',type:'float'},{name:'prrePriceBB2',type:'float'},{name:'prrePriceSB2',type:'float'},
	{name:'prrePricePB3',type:'float'},{name:'prrePriceBB3',type:'float'},{name:'prrePriceSB3',type:'float'},
	{name:'prrePricePB4',type:'float'},{name:'prrePriceBB4',type:'float'},{name:'prrePriceSB4',type:'float'},
	{name:'prrePricePB5',type:'float'},{name:'prrePriceBB5',type:'float'},{name:'prrePriceSB5',type:'float'},
	'prshVendorName','prshCarrierName','prshBizType','prshContractNo','prshPolEn','shliName','vessName','voyaName','prshStartDate','prshEndDate','prshRemarks','prshStatus',
	'prliCountryDName','prliPodEn','prliPotEn','caclName','pateName','tranName','prliShipDate','prliDuration',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
CCustomerContact = Ext.data.Record.create(['id','cucoId','custId','cucoName','cucoTitle','cucoAddress1','cucoAddress2','cucoTel',
	'cucoHomeTel','cucoMobile','cucoEmail','cucoGender','cucoMsn','cucoQq','cucoSkype','cucoFax',
	'cucoZip',
	{name:'cucoBirthday',type:'date',dateFormat:DATEF},
	'cucoRemarks',
	'userId','grouId','createBy','modifyBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
CCustomerShipper = Ext.data.Record.create(['id','cushId','custId','cushName','cushType',
   	'createBy','modifyBy',
   	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
   	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
   	'compCode','version','rowAction']);
CCustomerSite = Ext.data.Record.create(['id','cusiId','custId','cusiName','cusiContact',
   'cusiTel','cusiAddress','cusiType','createBy','modifyBy',
  	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
  	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
  	'compCode','version','rowAction']);
CSalesQuota = Ext.data.Record.create(['id','saquId','saquSalesId','saquSalesName','saquYear','saquMonth',
	{name:'saquBaseProfit',type:'float'},{name:'saquCommissionRate',type:'float'},	
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
CSalesCommission = Ext.data.Record.create(['id','sacoId','sacoSalesId','sacoSalesName','commId','commName',	{name:'baseAmount',type:'float'},{name:'commission',type:'float'},
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
CCommission = Ext.data.Record.create(['id','commId','commName',	
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
CCommissionItem = Ext.data.Record.create(['id','coitId','commId','coitLower','coitLimit','coitRate',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);

function getCUCOS(){return new Ext.data.Store({url: SERVICE_URL+'?A=CUCO_Q',reader: new Ext.data.XmlReader({record:'CCustomerContact'},CCustomerContact)});};
function getCS(){return  new Ext.data.Store({url: SERVICE_URL+'?A='+'CUST_X',reader: new Ext.data.XmlReader({id:'custId',record:'CCustomer'},CCustomer),sortInfo:{field:'custId', direction:'DESC'}});};

var CUST_T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','订舱客户'],['2','租船人'],['3','订舱代理'],['4','承运人'],['5','报关公司'],['6','拖车公司'],['7','仓库']]});
getCUST_T = function(v){if(v>=0) return CUST_T_S.getById(v).get('NAME'); else return '';};

var getCUCA_S = function(){return getGStore('CUCA','CCustomerCategory',CCustomerCategory,'cucaId','ASC','');};
getCUCA = function(v,m,r){var _cs= getCUCA_S();if(v) return _cs.getById(v)?_cs.getById(v).get('cucaName'):v; else return '';}; 


var PSST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
	data:[['0','未生效'],
	      ['1','已生效'],
	      ['2','已失效']]
});
getPSST = function(v){
	if(v>=0) 
		return PSST_S.getById(v).get('NAME'); 
	else 
		return '';
};