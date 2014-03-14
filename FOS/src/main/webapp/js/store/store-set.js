SExpense = Ext.data.Record.create(['id',
	'expeId','consId','consNo','section','consMblNo','consHblNo','consVessel','consVoyage','consBizClass','consBizType',
	'consShipType','consCustId','consCustName','chclId','charId','charName',
	'charNameEn','unitId','unitName','currCode','custId','custName','custSname',
	'expeType','pateId','pateCode',{name:'expeDate',type:'date',dateFormat:DATEF},
	{name:'consSailDate',type:'date',dateFormat:DATEF},
	{name:'expeUnitPrice',type:'float'},{name:'expeInnerPrice',type:'float'},{name:'expeNum',type:'float'},
	{name:'expeNum2',type:'float'},	
	{name:'expeInnerAmount',type:'float'},{name:'expeCommission',type:'float'},{name:'expeCommissionRate',type:'float'},
	{name:'expeTotalAmount',type:'float'},{name:'expeRcAmount',type:'float'},
	{name:'expeExRate',type:'float'},'expeBillNo','expeBillStatus','expeInvoiceNo','expeTaxInvoiceNo',
	{name:'expeInvoiceDate',type:'date',dateFormat:DATEF},'expeInvoiceTitle','expeInvoiceFlag',
	{name:'expeInvoiceAmount',type:'float'},'expeInvoiceStatus',
	{name:'expeWriteOffDate',type:'date',dateFormat:DATEF},
	{name:'expeWriteOffAmount',type:'float'},{name:'expeWriteOffRcAmount',type:'float'},
	'expeStatus','expeWriteoffStatus','expeRemarks','expeForwardFlag',
	'fconId','fconNo','fconContractNo','paliId','paliLabel','paliTrackNo','buexId',
	'expeUpdateBy','expeUpdateTime','expeInvoiceBy','expeWriteOffBy','expeAllocationFlag',
	'expeAllocatedFlag','expeIdM','consIdM','consNoM',
	'userId','grouId','createBy','modifyBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','editable']);
SBulkExpense = Ext.data.Record.create(['id',
   	'buexId','fconId','fconNo','fconContractNo','paliId','paliLabel','paliTrackNo',
   	'custId','custName','custSname','charId','charName','unitId','unitName','currCode',
   	'buexType','pateId','pateCode',{name:'buexDate',type:'date',dateFormat:DATEF},   	
   	{name:'buexUnitPrice',type:'float'},{name:'buexNum',type:'float'},{name:'buexNum2',type:'float'},
    {name:'buexTotalAmount',type:'float'},
   	{name:'buexExRate',type:'float'},'buexStatus','buexExportFlag','buexRemarks',
   	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
   	'compCode','version','rowAction']);
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
SInvoice = Ext.data.Record.create(['id',
	'invoId','invoNo','invoTaxNo','custId','custName','custSname',
	'invoPaymentType','invoTitle','invoType','invoCheckNo',{name:'invoDate',type:'date',dateFormat:DATEF},
	{name:'invoDueDate',type:'date',dateFormat:DATEF},'currCode',{name:'invoAmount',type:'float'},
	'invoAmountCapital','invoAmountCapitalEn',{name:'invoAmountWriteOff',type:'float'},
	{name:'invoAmountPaid',type:'float'},'invoOperator','invoContractNo',
	'invoBank','invoAccount','invoBizClass','invoVessel','invoVoyage',{name:'invoExRate',type:'float'},
	'invoBlNo',{name:'invoSailDate',type:'date',dateFormat:DATEF},'invoPol','invoPod','invoDeliveryPlace',
	'invoRemarks','invoIssuer',{name:'invoIssueDate',type:'date',dateFormat:DATEF},'invoSigner',{name:'invoSignDate',type:'date',dateFormat:DATEF},
	'invoChecker',{name:'invoCheckDate',type:'date',dateFormat:DATEF},'invoConsNo','invoCargoName','invoCargoPackages','invoCargoGrossWeight','invoCargoMeasurement',
	'invoContainersInfo','invoEntrustNo','invoPrintTimes','invoStatus','invoWriteOffStatus',
	'voucNo',{name:'invoDebitnoteFlag',type:'boolean',convert:function(v){return v==1;}},
	'invoPrFlag','invoUploadFlag','invoWriteOffNo','invoWriteOffBy',{name:'invoWriteOffDate',type:'date',dateFormat:DATEF},
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','attr1','attr2','attr3','attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
SInvoiceEntry = Ext.data.Record.create(['id',
	'inenId','invoId','charName','charNameEn','unitName','currCode',
	{name:'inenUnitPrice',type:'float'},{name:'inenNum',type:'float'},
	{name:'expeCommission',type:'float'},{name:'expeCommissionRate',type:'float'},{name:'inenTotalAmount',type:'float'},
	{name:'inenExRate',type:'float'},{name:'inenInvoiceAmount',type:'float'},'inenPaymentType',
	'expeId','consId','consNo','consMblNo','consHblNo','consVessel','consVoyage',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
SInvoiceItem = Ext.data.Record.create(['id',
	'initId','invoId','invoNo','invoTaxNo','expeId',
	'expeType','consId','consNo','consMblNo','consHblNo',{name:'consSailDate',type:'date',dateFormat:DATEF},
	'consVessel','consVoyage','custId','custName','custSname','charName','charNameEn',{name:'expeExRate',type:'float'},
	'unitName','expeCurrCode',{name:'expeUnitPrice',type:'float'},{name:'expeNum',type:'float'},
	{name:'expeCommission',type:'float'},{name:'expeCommissionRate',type:'float'},
	{name:'expeTotalAmount',type:'float'},{name:'expeInvoiceAmount',type:'float'},
	{name:'initInvoiceAmount',type:'float'},{name:'initInvoiceAmountW',type:'float'},
	{name:'initInvoiceAmountOri',type:'float'},{name:'initInvoiceAmountOriW',type:'float'},
	'invoCurrCode','expeRemarks',{name:'initExRate',type:'float'},{name:'invoExRate',type:'float'},'initCancelFlag',
	'voucNo','invoTitle','initWriteOffStatus','initWriteOffNo','initWriteOffBy',{name:'initWriteOffDate',type:'date',dateFormat:DATEF},
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
SVoucher = Ext.data.Record.create(['id',
	'voucId','voucNo','voucType','custId','custName','custSname','custBank','custAccount',
	'voucCheckNo','voucBank','voucAccount','voucAmount','voucWriteOffAmount',
	'voucCarryType','voucCarryAmount','voucFixAmount',{name:'voucDate',type:'date',dateFormat:DATEF},{name:'voucGlDate',type:'date',dateFormat:DATEF},
	'currCode','voucExRate','voucBankReciptNo',{name:'voucBankReciptDate',type:'date',dateFormat:DATEF},'voucPaymentType',
	'voucInvoiceNo','voucTaxInvoiceNo',{name:'voucInvoiceDate',type:'date',dateFormat:DATEF},'voucConsNo','voucVessel','voucVoyage',
	{name:'voucSailDate',type:'date',dateFormat:DATEF},
	'voucMblNo','voucHblNo',{name:'voucSailDate',type:'date',dateFormat:DATEF},'voucCheck',{name:'voucCheckDate',type:'date',dateFormat:DATEF},
	'voucStatus','voucWriteOffStatus','voucWriteOffNo','voucRemarks','voucUploadFlag',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode',{name:'version',type:'int'},'rowAction','attr1','attr2','attr3','attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
SVoucherItem = Ext.data.Record.create(['id',
	'voitId','initId','invoId','invoNo','invoTaxNo','expeId',{name:'invoDate',type:'date',dateFormat:DATEF},
	'expeType','consId','consNo','consMblNo','consHblNo',
	'consVessel','consVoyage',{name:'consSailDate',type:'date',dateFormat:DATEF},'custId','custName','custSname','charName',{name:'expeExRate',type:'float'},
	'unitName','expeCurrCode',{name:'expeUnitPrice',type:'float'},{name:'expeNum',type:'float'},
	{name:'expeTotalAmount',type:'float'},{name:'expeCommission',type:'float'},{name:'expeCommissionRate',type:'float'},
	{name:'initInvoiceAmount',type:'float'},{name:'initInvoiceAmountW',type:'float'},
	{name:'initInvoiceAmountOri',type:'float'},{name:'initInvoiceAmountOriW',type:'float'},
	'invoCurrCode',{name:'initExRate',type:'float'},{name:'invoExRate',type:'float'},
	'voucId','voucNo','voitWriteOffNo','voucCurrCode',
	{name:'voitAmountOriW',type:'float'},{name:'voitExRate',type:'float'},{name:'voucExRate',type:'float'},
	{name:'voitAmountW',type:'float'},{name:'voitAmountVoucW',type:'float'},
	'voitRemarks','voitCancelFlag',{name:'voucDate',type:'date',dateFormat:DATEF},
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
SPr =  Ext.data.Record.create(['id',
	'prId','prNo','prType','custId','custName','custSname','custBank','custAccount',
	'prAmount','currCode','prExRate','prPayType','prPaymentType','prBank','prAccount',
	'prRemarks','prStatus','prWriteOffStatus',
	{name:'prDate',type:'date',dateFormat:DATEF},'prPrintFlag',
	'prFinApproveBy',
	{name:'prFinApproveDate',type:'date',dateFormat:DATEF},
	'prApproveBy',{name:'prApproveDate',type:'date',dateFormat:DATEF},	
	'userId','grouId','createBy','modifyBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode',{name:'version',type:'int'},
	'rowAction','attr1','attr2','attr3','attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
SPrItem = Ext.data.Record.create(['id',
	'pritId','prId','invoId','invoNo','invoTaxNo','custName','custSname',
	{name:'invoDate',type:'date',dateFormat:DATEF},{name:'invoDueDate',type:'date',dateFormat:DATEF},
	{name:'invoAmount',type:'float'},{name:'invoAmountWriteOff',type:'float'},{name:'prAmount',type:'float'},
	{name:'prAmountPaid',type:'float'},
	'currCode',{name:'invoExRate',type:'float'},'invoBank','invoAccount',
	'invoIssuer',{name:'invoIssueDate',type:'date',dateFormat:DATEF},'invoChecker',{name:'invoCheckDate',type:'date',dateFormat:DATEF},
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
SExRate = Ext.data.Record.create(['id',
	'exraId','exraBaseCurrency','exraExCurrency','exraStartDate','exraEndDate','exraRate','modifyBy',
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},'compCode','version','removed','rowAction']);
SInterestRate = Ext.data.Record.create(['id',
	'inraId','inraCurrency','inraStartDate','inraEndDate','inraRate','inraType','modifyBy','active',
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},'compCode','version','removed','rowAction']);
SInvoiceNo = Ext.data.Record.create(['id',
	'innoId','innoPrefix','innoStartNo','innoEndNo','innoNextNo','innoNumLen','innoStartDate',
	{name:'innoStartDate',type:'date',dateFormat:DATEF},
	'active','userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
SBalance = Ext.data.Record.create(['id','balaId','custId','custName','custSname','currCode','balaAmount','remarks','compCode','version']);

TExportHistory=Ext.data.Record.create(['exhiId','exhiType','exhiCheckDateF','exhiCheckDateT','exhiFileName','createTime']);

//付款类型
var	PAYTYPE_S =new Ext.data.ArrayStore({id:0,fields:['CODE','NAME'],data:[
	            ['0','PP'],['1','CC']]});
getPayType=function(v){return HTStore.getNameById(HTStore.PAYTYPE_S,v);};


var getEXRA_S = function(){
	if(Ext.StoreMgr.containsKey('EXRA_S')){return Ext.StoreMgr.get('EXRA_S');}
	else {s =  GS('EXRA_Q','SExRate',SExRate,'','','','EXRA_S','exraId');s.load();return s;}
};
getExRate = function(cs,ct){
	if(cs==ct) return 1;
	var s = getEXRA_S();var d=s.getRange();var rs = 0;var rt = 0;
	for(var i=0;i<d.length;i++){
		if(d[i].get('exraBaseCurrency')==cs && d[i].get('exraExCurrency')==ct) return d[i].get('exraRate');
		else if(d[i].get('exraBaseCurrency')==cs && d[i].get('exraExCurrency')=='CNY') rs=d[i].get('exraRate');
		else if(d[i].get('exraBaseCurrency')=='CNY' && d[i].get('exraExCurrency')==ct) rt=d[i].get('exraRate');		
	}
	return rs*rt;
}; 

var getCOBA_S = function(){return getGStore('COBA','PCompanyBankAccount',PCompanyBankAccount,'cobaId','ASC','cobaId');};

var getCHAR_S = function(){
	//return getGStore('CHAR','GCharge',GCharge,'charId','ASC','');
	
	if(Ext.StoreMgr.containsKey('CHAR_S')){return Ext.StoreMgr.get('CHAR_S');}
	else {
		var s=new Ext.data.Store({storeId:'CHAR_S',url:SERVICE_URL+'?A=CHAR_Q',baseParams:{mt:'xml'},
			reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'GCharge',id:'charId'},GCharge),
			sortInfo:{field:'charCode', direction:'ASC'},remoteSort:true});
		s.load();
		return s;
    }
	
};
getCHAR = function(v,m,r){
	var _cs= getCHAR_S();
	if(v) 
		return _cs.getById(v)?_cs.getById(v).get('charName'):v; 
	else 
		return '';
};

var getCCHAR_S=function(){	
	if(Ext.StoreMgr.containsKey('CCHAR_S')){return Ext.StoreMgr.get('CCHAR_S');}
	else {
		var s=new Ext.data.Store({storeId:'CCHAR_S',url:SERVICE_URL+'?A=CHAR_C',baseParams:{mt:'xml'},
			reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'GCharge',id:'charId'},GCharge)
			});
		s.load();
		return s;
    }
};

var getCHAR_PERM_R_S=function(){	
	if(Ext.StoreMgr.containsKey('CHAR_PERM_R_S')){return Ext.StoreMgr.get('CHAR_PERM_R_S');}
	else {
		var s=new Ext.data.Store({storeId:'CHAR_PERM_R_S',url:SERVICE_URL+'?A=CHAR_PERM_Q&expeType=R',baseParams:{mt:'xml'},
			reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'GCharge',id:'charId'},GCharge)
			});
		s.load();
		return s;
    }
};
var getCHAR_PERM_P_S=function(){	
	if(Ext.StoreMgr.containsKey('CHAR_PERM_P_S')){return Ext.StoreMgr.get('CHAR_PERM_P_S');}
	else {
		var s=new Ext.data.Store({storeId:'CHAR_PERM_P_S',url:SERVICE_URL+'?A=CHAR_PERM_Q&expeType=P',baseParams:{mt:'xml'},
			reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'GCharge',id:'charId'},GCharge)
			});
		s.load();
		return s;
    }
};


var getCURR_S = function(){return getGStore('CURR','GCurrency',GCurrency,'currCode','ASC','');};
getCURR = function(v,m,r){var _cs= getCURR_S();if(v) return _cs.getById(v)?_cs.getById(v).get('currName'):v; else return '';}; 

var IVST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未审核'],['1','已审核'],['2','已作废']]});
getIVST = function(v){if(v>=0) return IVST_S.getById(v).get('NAME'); else return '';};

var VOST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未审核'],['1','已审核'],['2','已作废']]});
getVOST = function(v){if(v>=0) return VOST_S.getById(v).get('NAME'); else return '';};

var RCAT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','预收款'],['1','其它应收款']]});
getRCAT = function(v){if(v>=0) return RCAT_S.getById(v).get('NAME'); else return '';};

var PCAT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','预付款'],['1','其它应付款']]});
getPCAT = function(v){if(v>=0) return PCAT_S.getById(v).get('NAME'); else return '';};

var PRST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未提交'],['1','已提交'],['2','已财务审核'],['3','已经理审核'],['4','已付款'],['5','已作废']]});
getPRST = function(v){if(v>=0) return PRST_S.getById(v).get('NAME'); else return '';};

var ERST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未托收'],['1','已托收'],['2','已回单'],['3','已到帐'],['4','托收失败'],['5','已作废']]});
getERST = function(v){if(v>=0) return ERST_S.getById(v).get('NAME'); else return '';};

var AUST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未审核'],['1','已财务审核'],['2','已经理审核']]});
getAUST = function(v){if(v>=0) return AUST_S.getById(v).get('NAME'); else return '';};


var EXST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未确认'],['1','已确认'],['2','已开票'],['3','已核销']]});
getEXST = function(v){if(v>=0) return EXST_S.getById(v).get('NAME'); else return '';};

var BIST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未对账'],['1','已对账'],['2','已作废']]});
getBIST = function(v){if(v>=0) return BIST_S.getById(v).get('NAME'); else return '';};

var WRST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未核销'],['1','部分核销'],['2','已核销']]});
getWRST = function(v){if(v>=0) return WRST_S.getById(v).get('NAME'); else return '';};
var WRSN_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未核销'],['2','已核销']]});
getWRSN = function(v){if(v>=0) return WRSN_S.getById(v).get('NAME'); else return '';};
var INST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未开账单'],['1','部分开账单'],['2','已开账单']]});
getINST = function(v){if(v>=0) return INST_S.getById(v).get('NAME'); else return '';};
var EXPC_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未确认'],['1','已确认']]});
getEXPC = function(v){if(v>=0) return EXPC_S.getById(v).get('NAME'); else return '';};

var EXHI_T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','应收账单'],['1','应付帐单'],['2','收款核销'],['3','付款核销']]});
getEXHI_T = function(v){if(v>=0) return EXHI_T_S.getById(v).get('NAME'); else return '';};

var EXTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['R','应收'],['P','应付']]});
getEXTY = function(v){if(v) return EXTY_S.getById(v).get('NAME'); else return '';};

var IRTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
	data:[['1','三月期'],['2','六月期'],['3','一年期']]});

getIRTY = function(v){
	if(v) 
		return IRTY_S.getById(v).get('NAME'); 
	else 
		return '';
};