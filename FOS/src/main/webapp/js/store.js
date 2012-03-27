FConsign = Ext.data.Record.create(['id','wconId',
	'consId','consNo','consType','consShipType','consActionType',
	'consBizClass','consBizType','consLclType',
	{name:'consMasterFlag',type:'boolean',convert:function(v){return v==1;}},
	'consMasterId','consMasterNo',
	'consMergeFlag','consMergeId','consMergeNo','consRefNo','consPackingListNo',
	'consContractNo','consSource',{name:'consDate',type:'date',dateFormat:DATEF},
	'consSalesRepId','consSalesRepName','consOperatorId','consOperatorName',
	'consTradeContractNo','consCreditNo','consInsuranceFee','custId',
	'custName','custSname','custContact','custTel','custFax','custSalesId','custSalesName','consOverseaAgency',
	'consOverseaAgencyName','consShipper','consConsignee','consNotifyParty','consNotifyParty2',
	'consFShipper','consFConsignee','consFNotifyParty',
	'consPol','consPolEn','consPolCn','consReceiptPlace','consPod','consPodEn','consPodCn',
	'consPot','consPotEn','consPotCn','consDeliveryPlace','consDestination','consTranCountry','consTradeCountry',
	'consHarbour','consCargoOwner','consCargoOwnerName','consCfs','consCfsName',
	'consWarehouse','consWarehouseContact','consWarehouseName',
	'consWarehouseTel','consWarehouseAddress','consWarehouseNo','consWarehouseRemarks',
	{name:'consContainerLoadDate',type:'date',dateFormat:DATEF},
	'consContainerCompany','consContainerCompanyName',
	'consCustomsVendor','consCustomsVendorName','consCustomsContact','consCustomsTel',
	'consInspectionVendor','consInspectionVendorName',
	'consTrackVendor','consTrackVendorName','consTrackContact',
	{name:'consTrackLoadDate',type:'date',dateFormat:DATEF},
	'consTrackLoadAddress','consTrackRemarks','consTrackTel',
	'consLoadFactory','consLoadContact','consLoadTel',
	'consDoAgency','consDoAgencyName',
	'consBookingAgency','consBookingAgencyName','consBookingAgencySname',
	{name:'consBookingDate',type:'date',dateFormat:DATEF},'consBookingContractNo',
	'consSoNo','consPrecarriage','consCarrier','consCarrierName',
	'vessId','vessName','vessNameCn','voyaId','voyaName',{name:'consDeliveryDate',type:'date',dateFormat:DATEF},
	{name:'consRecvDate',type:'date',dateFormat:DATEF},{name:'consEtd',type:'date',dateFormat:DATEF},
	{name:'consEta',type:'date',dateFormat:DATEF},{name:'consSailDate',type:'date',dateFormat:DATEF},
	{name:'consLoadDate',type:'date',dateFormat:DATEF},
	{name:'consBlIssueDate',type:'date',dateFormat:DATEF},
	{name:'consExpiryDate',type:'date',dateFormat:DATEF},
	{name:'fconShipDateF',type:'date',dateFormat:DATEF},
	{name:'fconShipDateT',type:'date',dateFormat:DATEF},
	{name:'voyaShipDateF',type:'date',dateFormat:DATEF},
	{name:'voyaShipDateT',type:'date',dateFormat:DATEF},
	'consMblNo','consHblNo','consScacCode','consContainerNo','consSealNo','consCargoDesc',
	'consCargoMarks','consCargoDimension','consCargoPackages','consCargoNetWeight','consCargoGrossWeight','consCargoMeasurement',
	'consCargoNameEn','consCargoNameCn','consCargoSpecial',
	'consTotalContainers','consContainersInfo',
	'consContainers20','consContainers40','consContainers40h','consContainers45','consContainersTeu',	
	'consTotalPackages',
	{name:'consTotalGrossWeight',type:'float'},
	{name:'consTotalNetWeight',type:'float'},
	{name:'consTotalChargeWeight',type:'float'},
	{name:'consTotalMeasurement',type:'float'},
	'consTotalPackagesInWord','blCargoPackages',
	{name:'blCargoGrossWeight',type:'float'},
	{name:'blCargoNetWeight',type:'float'},
	{name:'blCargoMeasurement',type:'float'},
	'consShippedPackages',
	{name:'consShippedGrossWeight',type:'float'},
	{name:'consShippedNetWeight',type:'float'},
	{name:'consShippedMeasurement',type:'float'},
	{name:'cargBigFlag',type:'boolean',convert:function(v){return v==1;}},
	'cargLength','cargWidth','cargHigh',
	{name:'cargReeterFlag',type:'boolean',convert:function(v){return v==1;}},
	'cargTemperature','cargTemperatureUnit','cargTemperatureLow','cargTemperatureHigh',
	'cargVentOutlet','cargHumidity',
	{name:'cargDanagerFlag',type:'boolean',convert:function(v){return v==1;}},
	'cargDanagerClass',
	{name:'cargPollutionFlag',type:'boolean',convert:function(v){return v==1;}},
	'cargDanagerProperty','cargImdgPage',
	'cargSubLabel','cargUnNo','cargFlashPoint','cargMfagNo','cargEmsNo','cargPkgGroup',
	'cargEmgTel','cargQuitFlag','cargCudeType',	
	'consCustPackages','consCustGrossWeight','consCustMeasurement','consCustChargeWeight',
	'unitId','unitCode','unitIdM','unitCodeM',
	'packId','packName','coclId','coclName','caclId','caclName','trtyId','trteId',
	'tranId','tranCode','tranIdCarrier','tranCodeCarrier','pateId','pateName','pateIdP','pateNameP',
	'istyId','shliId','shliCode','swithId','consBlIssuePlace','consBlRemarks','consPaidAt',
	{name:'consTransFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'consPartialFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'consFumigateFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'consQuarantineFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'consTransferringFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'consInvoiceFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'consInspectionFlag',type:'boolean',convert:function(v){return v==1;}},
	'consOriginalBlNum','consCopyBlNum','consRemarks','consBookingRemarks','consServiceRequired',
	'consServiceSpec','consBVesselId','consBVessel','consBVoyageId','consBVoyage',
	{name:'consBEtd',type:'date',dateFormat:DATEF},{name:'consBEta',type:'date',dateFormat:DATEF},
	{name:'consBBookingDate',type:'date',dateFormat:DATEF},
	'consBPol','consBPolEn','consBPod','consBPodEn','consBPot','consBPotEn','consBShipper',
	'consBConsignee','consBCountryD','consBCountryT',
	'consBBookingNo','consBCarrier','consBCarrierId','consBCarrier','consBHarbour',
	{name:'consBHkFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'consBInternationalFlag',type:'boolean',convert:function(v){return v==1;}},
	'consBRemarks','consLoadingListNo','consSplitNo','consShipCode','consSplitContact','consSplitTel',
	'consSplitConsignee','consSplitConsigneeTel','consSplitCreateTime','consSplitCreateBy','consStatus',
	'consStatusBooking','consStatusSwitchBl','consStatusClearance','consStatusSplit','consStatusInsp',
	'consStatusCont','consStatusCarg','consStatusMbl','consStatusHbl','consStatusBBook',
	'consStatusDepa','consStatusDocs','consStatusExp','consStatusAud','consStatusInCy','consStatusLock',
	'consStatusInCfs','consStatusOnBoard','consStatusEir','consStatusSendCont','consRebookFlag',
	'consChargeRemarks','consNotOnBoardReason','consNotOnBoardRemarks','consBookingDeclareNoUs',
	'consUsFullShip','consStatusSettlement','consSettlementDate','consCancelReason','consBookingCancelReason',
	'fconId','loliId',
	'consStatusAr','consStatusAp',{name:'consArWriteoffDate',type:'date',dateFormat:DATEF},
	{name:'consApWriteoffDate',type:'date',dateFormat:DATEF},
	'consStatusInvoR','consStatusInvoP',{name:'consInvoRDate',type:'date',dateFormat:DATEF},
	{name:'consInvoPDate',type:'date',dateFormat:DATEF},'consExternalFlag','consCudeType',
	'consWsFlag','consWsAcceptFlag',
	{name:'consCloseDate',type:'date',dateFormat:DATEF},
	{name:'consManualExpirationDate',type:'date',dateFormat:DATEF},
	{name:'consAuditDate',type:'date',dateFormat:DATEF},
	{name:'consAuditDate2',type:'date',dateFormat:DATEF},
	{name:'consCustomRegDate',type:'date',dateFormat:DATEF},
	{name:'consBusinessLicenseDate',type:'date',dateFormat:DATEF},
	{name:'consCustomsDeclearDate',type:'date',dateFormat:DATEF},
	{name:'consOrgDate',type:'date',dateFormat:DATEF},
	'consCompany','consVerificationNo','consCustomsDeclearationNo',
	'consManualNo','consCustomRegNo','consFreeTableNo',
	{name:'consTax',type:'float'},
	{name:'consReliefTariff',type:'float'},
	{name:'consReliefVat',type:'float'},	
	{name:'consEportReg',type:'boolean',convert:function(v){return v==1;}},
	'cargHsCode',{name:'consMargin',type:'float'},
	{name:'consInspReg',type:'boolean',convert:function(v){return v==1;}},
	{name:'consRequireVerification',type:'boolean',convert:function(v){return v==1;}},
	{name:'consRequireRelief',type:'boolean',convert:function(v){return v==1;}},	
	{name:'consVerificationFlag',type:'boolean',convert:function(v){return v==1;}},
	'consBulkyCarrier','consBulkyCustomer','consChargeWeightCarrier',
	'consChargeWeightCustomer','consTotalGrossWeightCustomer','consTotalMeasurementCustomer',
	'deptId','userId','grouId','createBy','modifyBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','attr1','attr2','attr3','attr4','attr5',
	'attr6','attr7','attr8','attr9','attr10',
	'sumR','sumP','grossProfit','grossProfitRate','sumRUsd',
	'sumRUsdInvoice','sumRUsdWriteOff','sumRCny',
	'sumRCnyInvoice','sumRCnyWriteOff','sumPUsd','sumPUsdInvoice',
	'sumPUsdWriteOff','sumPCny','sumPCnyInvoice','sumPCnyWriteOff','editable'
	]);
FContract = Ext.data.Record.create(['id',
	'fconId','fconNo','custId','custName','custSname','charterId','charterName','charterSname','custContact','custTel','custFax',
	'fconContractNo','unitId','unitName','unitIdCarrier','unitNameCarrier','packId','packName','fconShipper','fconConsignee','fconNotifyParty',
	'fconPol','fconPolEn','fconPod','fconPodEn','fconCargoDesc',
	{name:'fconContractQuantity',type:'float'},
	{name:'fconForcastQuantity',type:'float'},
	{name:'fconShippedQuantity',type:'float'},
	{name:'fconRemainQuantity',type:'float'},
	{name:'fconFactQuantity',type:'float'},
	{name:'fconForcastCbm',type:'float'},
	{name:'fconShippedCbm',type:'float'},
	{name:'fconRemainCbm',type:'float'},
	{name:'fconFactCbm',type:'float'},
	{name:'fconArrivedGrossWeight',type:'float'},
	{name:'fconArrivedPackages',type:'float'},
	{name:'fconUnitPriceR',type:'float'},
	{name:'fconTotalPriceR',type:'float'},
	{name:'fconUnitPriceP',type:'float'},
	{name:'fconTotalPriceP',type:'float'},
	{name:'fconTotalPackages',type:'float'},
	{name:'fconTotalGrossWeight',type:'float'},
	{name:'fconInwareGrossWeight',type:'float'},	
	{name:'fconLoadDate',type:'date',dateFormat:DATEF},
	{name:'fconShipDateF',type:'date',dateFormat:DATEF},
	{name:'fconShipDateT',type:'date',dateFormat:DATEF},
	{name:'voyaShipDateF',type:'date',dateFormat:DATEF},
	{name:'voyaShipDateT',type:'date',dateFormat:DATEF},
	{name:'voyaSailDate',type:'date',dateFormat:DATEF},
	'voyaSailedFlag','blCargoPackages',
	{name:'blCargoGrossWeight',type:'float'},
	{name:'blCargoNetWeight',type:'float'},
	{name:'blCargoMeasurement',type:'float'},
	'cargNameCn','cargNameEn',
	'fconRemarks','fconServiceSpec','fconStatus','fconVesselVoyage','fconVessNameCn','fconCarrier','packId','packName',
	'tranId','tranName','tranIdCarrier','tranNameCarrier','shliId','shliName','pateIdR',
	'pateNameR','pateIdP','pateNameP','fconOperatorId','fconOperatorName','fconSalesRepId','fconSalesRepName',
	'consId','consNo','consMblNo',
	{name:'fconInvoiceFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'fconInspectionFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'fconSumListFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'fconCopyFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'fconExpeConfirmFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'fconCudeDocFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'fconPhotoFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'fconMatesReceiptFlag',type:'boolean',convert:function(v){return v==1;}},
	'fconCudeType',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FPackingList = Ext.data.Record.create(['id',
	'paliId','fconId','fconNo','fconContractNo','paliLabel','packId','packName',
	'paliTrackType','paliTrackTypeP','paliTransTimes','paliTrackNo','paliLineNo','paliSpec','paliPackages','cargNameCn','cargNameEn',
	{name:'paliGrossWeight',type:'float'},{name:'paliCbm',type:'float'},{name:'paliCbmC',type:'float'},'paliPieces',
	'vessId','vessName','vessNameCn','voyaId','voyaName','loliId','consId','consNo','consMblNo',
	{name:'paliLoadDate',type:'date',dateFormat:DATEF},'paliLength','paliTotalLength','unitIdLen','unitNameLen',
	{name:'paliArriveDate',type:'date',dateFormat:DATEF},
	'paliHarbourId','paliHarbourName','paliStationId','paliStationName','paliLocation','paliStationIdNow','paliStationNameNow','paliLocationNow',
	{name:'paliTransFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'voyaSailedFlag',type:'boolean',convert:function(v){return v==1;}},
	'paliRemarks','paliStatus','charterName','custName','fconContractNo','fconPodEn',{name:'fconInvoiceFlag',type:'boolean',convert:function(v){return v==1;}},
	'fconCudeType',{name:'fconInspectionFlag',type:'boolean',convert:function(v){return v==1;}},
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FTransList = Ext.data.Record.create(['id',
	'trliId','fconId','paliId','trliStationId','trliStationName','trliLocation',
	'trliStationIdO','trliStationNameO','trliLocationO','trliRemarks','trliTrackType',
	{name:'trliTranDate',type:'date',dateFormat:DATEF},
	{name:'trliArriveDate',type:'date',dateFormat:DATEF},
	'userId','grouId','createBy','modifyBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FLoadingList = Ext.data.Record.create(['id',
	'loliId','fconId','fconNo','fconContractNo','carrierId',
	'carrierName','vessId','vessName','vessNameCn','voyaId','voyaName','fconUnit',
	{name:'fconForcastQuantity',type:'float'},
	{name:'fconShippedQuantity',type:'float'},
	{name:'loliShippedQuantity',type:'float'},
    {name:'loliFactQuantity',type:'float'}, 
	{name:'fconForcastCbm',type:'float'},
    {name:'fconShippedCbm',type:'float'},
    {name:'loliShippedCbm',type:'float'},
    {name:'loliFactCbm',type:'float'},	
	'loliStatus','consId','consNo','consMblNo',
	{name:'voyaShipDateF',type:'date',dateFormat:DATEF},
	{name:'voyaShipDateT',type:'date',dateFormat:DATEF},	
	{name:'fconLoadDate',type:'date',dateFormat:DATEF},
	{name:'fconShipDateF',type:'date',dateFormat:DATEF},
	{name:'fconShipDateT',type:'date',dateFormat:DATEF},
	{name:'voyaSailDate',type:'date',dateFormat:DATEF},
	'custName','charterName','fconPolEn','fconPodEn','fconCargoDesc','tranName',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);	
FBl = Ext.data.Record.create(['id',
	'blId','blNo','mblNo','blType','consId','consNo','consBizClass','consTradeContractNo','consChargeRemarks','consBizType','custId','custName',
	'blShipper','blConsignee','blNotifyParty','blNotifyParty2','blOverseaAgency',	
	'blPrecarriage','blCarrier','blCarrierName','blVessel','blVoyage','blPol','blPod','blPot',
	{name:'blLoadDate',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'blEtd',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'blEta',type:'date',dateFormat:'Y-m-d H:i:s'},
	'blReceiptPlace','blDeliveryPlace','blContainerNo',
	'blPackages','blCargoDesc','blGrossWeight','blNetWeight','blMeasurement','blTotalSay',
	'blMarks','packId','packName','unitId','unitName',
	{name:'cargGrossWeight',type:'float'},{name:'cargNetWeight',type:'float'},
    {name:'cargMeasurement',type:'float'},'cargPackages','blMBlId','blMBlNo','fconId','fconContractNo','consMasterId','consMasterNo',
	'blPaymentTerm','blPaidAt','blTransTerm','blShipType','blContainerInfo',
	'blOriginalNum','istyId','blIssueBy',{name:'blIssueDate',type:'date',dateFormat:DATEF},'blIssuePlace','blRemarks',
	'blReceiver',
	{name:'blThirdPlaceFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'blAdvancedFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'blBackFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'blCleanFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'bl500Flag',type:'boolean',convert:function(v){return v==1;}},
	{name:'blMergeFlag',type:'boolean',convert:function(v){return v==1;}},	
	{name:'blSplitFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'blMasterFlag',type:'boolean',convert:function(v){return v==1;}},
	'blReleaseBy',{name:'blReleaseDate',type:'date',dateFormat:DATEF},'blReleaseRemarks','blStatus',
	'blAgentIataCode','blAccountNo','blAccountingInfo','blToFirst','blByFirst','blToSecond','blBySecond','blToThird','blByThird','currCode','blWeightPayment','blValuePayment',
	'blOtherPayment','blDvCarriage','blDvCustoms','blAmountInsurance','blTsRemarks','blDimension','blHandlingInfo','blBookingRequirement','blRateClass',
	'blChargeWeight','blChargeRate','blTotalCharge','blWeightChargePp','blWeightChargeCc','blValuationChargePp','blValuationChargeCc',
	'blTaxPp','blTaxCc','blOtherDaPp','blOtherDaCc','blOtherDcPp','blOtherDcCc','blTotalPp','blTotalCc',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','attr1','attr2','attr3','attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
FCargo = Ext.data.Record.create(['id',
	'cargId','consId','consNo','consMasterId','consMasterNo','consMblNo','consHblNo','custName','cargMarks','cargNameEn','cargNameCn','cargManuNo','cargSpec','cargNo',
	'packId','packName',{name:'cargPackageNum',type:'float'},'packSId',{name:'cargPackageSNum',type:'float'},'unitId','unitName',
	{name:'cargNetWeight',type:'float'},{name:'cargGrossWeight',type:'float'},{name:'cargMeasurement',type:'float'},
	'cargBigFlag','cargLength','cargWidth',
	'cargHigh','cargReefterFlag','cargTemperature','cargTemperatureUnit','cargTemperatureLow','cargTemperatureHigh',
	'cargVentOutlet','cargHumidity','cargDanagerFlag','cargDanagerClass','cargPollutionFlag','cargDanagerProperty','cargImdgPage',
	'cargSubLabel','cargUnNo','cargFlashPoint','cargMfagNo','cargEmsNo','cargPkgGroup','cargEmgTel','cargQuitFlag','cargCudeType',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);	
FTrans = Ext.data.Record.create(['id',
	'tranId','tranNo','consId','consNo','consMblNo','consHblNo',
	'tranContractNo','tranVendorId',
	'tranVendorName','tranVendorContact','tranVendorTel','tranVendorFax',
	{name:'tranDate',type:'date',dateFormat:DATEF},
	{name:'tranExpiryDate',type:'date',dateFormat:DATEF},
	{name:'tranStartDate',type:'date',dateFormat:DATEF},
	{name:'tranCompleteDate',type:'date',dateFormat:DATEF},
	{name:'tranEtd',type:'date',dateFormat:DATEF},'tranLoadTime',
	'tranType','tranOperationType','tranVehicleType','tranIcDays',
	{name:'tranIcFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'tranPreFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'tranInspFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'tranRearFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'tranContFlag',type:'boolean',convert:function(v){return v==1;}},
	'tranLoadFactory','tranLoadContact','tranLoadTel','tranLoadPlace','tranLoadAddress',
	'tranDeliveryPlace','tranDeliveryAddress','tranDeliveryContact','tranDeliveryTel',
	'tranCustomsBroker','tranCustomsBrokerName',
	'tranCustomsContact','tranCustomsTel','tranCustomsAddress',
	'tranContainerCompany','tranContainerCompanyName','tranContainerInfo',
	'tranVessel','tranVoyage','tranSoNo','tranPol',
	'tranCyDraw',
	{name:'tranDrawDate',type:'date',dateFormat:DATEF},'tranCyBack',
	{name:'tranBackDate',type:'date',dateFormat:DATEF},'tranEmptyMiles','tranHeavyMiles',
	'packName','tranTotalPackages','tranTotalGrossWeight','tranTotalMeasurement','tranRemarks','tranStatus',
	'userId','grouId','createBy','modifyBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','attr1','attr2','attr3','attr4','attr5',
	'attr6','attr7','attr8','attr9','attr10']);
FTransTask = Ext.data.Record.create(['id','trtaId','consId','tranId','cotyId','trtaVehicleType','trtaContainerNo','trtaSealNo',{name:'trtaArriveTimeDemand',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'trtaArriveTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'trtaLoadTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'trtaLeaveTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'trtaBackTime',type:'date',dateFormat:'Y-m-d H:i:s'},'trtaDriver','trtaDriverTel','trtaTrackNo','trtaRemarks',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FTransCargo = Ext.data.Record.create(['id','trcaId','consId','tranId','cargId','trcaCargoName','packId','packName',
	{name:'trcaPackageNum',type:'int'},{name:'trcaGrossWeight',type:'float'},{name:'trcaMeasurement',type:'float'},'trcaRemarks',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);	
FWarehouse = Ext.data.Record.create(['id',
	'wareId','wareNo','consId','consNo','wareVessel','wareVoyage','wareMblNo','wareType',{name:'wareDate',type:'date',dateFormat:DATEF},{name:'wareBookDate',type:'date',dateFormat:DATEF},
	'wareTotalPackages','wareTotalGrossWeight','wareTotalMeasurement','packName','wareVendorId','wareVendorName','wareVendorContact','wareVendorTel','wareVendorFax',
	'wareOperator','wareOperatorTel','wareOperatorFax','wareCustomerContact','wareCustomerTel','wareCustomerFax',
	'wareAcceptStatus',{name:'wareAcceptDate',type:'date',dateFormat:DATEF},'wareRefNo',
	'wareTransVendor','wareTransVendorName','wareTrackNo',{name:'wareLoadFlag',type:'boolean',convert:function(v){return v==1;}},
	'wareContainerNo','wareRemarks','warePackageNum','wareCargoName','wareGrossWeight','wareNetWeight','wareMeasurement',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','attr1','attr2','attr3','attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
FWarehouseCargo = Ext.data.Record.create(['id',
	'wacaId','wareId','cargId','consId','wacaCargoName','wacaCargoMarks',
	'packId','packName','wacaPackagesNum','wacaGrossWeight','wacaNetWeight','wacaMeasurement',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FContainer = Ext.data.Record.create(['id',
	'contId','consId','consNo','contPreFlag','contPartOfFlag','contMConsId','contMConsNo',
	'contNo',{name:'contNum',type:'int'},'contSealNo','contSealNo2','contSealNo3',
	'cotyId','contFl','packId','packName','contPackageNum','contCargoNameEn','contCargoNameCn','contGrossWeight',
	'contMeasurement','contSocFlag',{name:'contLoadDate',type:'date',dateFormat:DATEF},'contRemarks',
	'cargTemperature','cargDanagerClass','cargFlashPoint','cargImdgPage','cargUnNo',
	'contVessel','contVoyage','contPol','contPod','contDeliveryPlace',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FContainerCargo = Ext.data.Record.create(['id',
	'cocaId','cargId','contId','contNo','consId','consNo','consMblNo','consHblNo','consCustName',
	'cocaMarks','cocaCargoName','packId','packName','cocaPackageNum','cocaGrossWeight','cocaMeasurement',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FInspection = Ext.data.Record.create(['id',
	'inspId','inspNo','consId','consNo','inspRefNo','inspVendorId','inspVendorName','inspVendorContact','inspVendorTel',
	{name:'inspDate',type:'date',dateFormat:DATEF},
	'inspShipperEn','inspShipperCn','inspConsigneeEn','inspConsigneeCn','inspCargoName','inspHsNo','inspMadeIn','inspNum','inspValue',
	'inspPackages','inspConveyance','inspTradeType','inspCargoAddress','inspContractNo','inspCreditNo','inspUsage',
	{name:'inspShippingDate',type:'date',dateFormat:DATEF},{name:'inspClaimDate',type:'date',dateFormat:DATEF},
	'inspTradeCountry','inspCertificateNo','inspPol','inspPod','inspPot','inspRegisterNo','inspContainerInfo','inspSpecialTerm','inspMarks',
	{name:'inspReceiveDate',type:'date',dateFormat:DATEF},'inspReceiver','inspStatus',
	'inspContractNo',{name:'inspCertificateDate',type:'date',dateFormat:DATEF},'inspPol','inspPod','inspContainerInfo','inspMarks',
	'inspPassNo','inspNoteNo',{name:'inspStartDate',type:'date',dateFormat:DATEF},{name:'inspCompleteDate',type:'date',dateFormat:DATEF},'inspCheckFlag','inspRemarks',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','attr1','attr2','attr3','attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
FDoc = Ext.data.Record.create(['id','fdocId','fdocNo','consId','consNo','dotyId','dotyClass','dotyName',
	'fdocOriginalNum','fdocCopyNum','fdocStatus','consBizClass','consShipType',
	'vessName','voyaName','consSailDate','consMblNo','custName','consCargoOwnerName',
	{name:'fdocRecvDate',type:'date',dateFormat:DATEF},
	{name:'fdocSendDate',type:'date',dateFormat:DATEF},
	{name:'fdocReturnDate',type:'date',dateFormat:DATEF},
	{name:'fdocBackDate',type:'date',dateFormat:DATEF},
	'fdocSendTo','fdocSendType','fdocBackType','fdocSendSigner','fdocBackSigner',
	'fdocCompany','fdocRemark',
	{name:'fdocBackFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'fdocReturnFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'fdocReleasableFlag',type:'boolean',convert:function(v){return v==1;}},
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FCustomsDeclaration= Ext.data.Record.create(['id',
	'cudeId','cudeNo','consId','consNo','consMasterId','consMasterNo',
	'consBizClass','consBizType','custId','custName','cudeVendorId','cudeVendorName',
	'cudeVendorContact','cudeVendorTel','cudePreNo',
	{name:'cudeCustomsNo',type:'string'},
	'cudePortDomestic','cudePortDomesticEn','cudeRecordNo',
	{name:'cudeEntryDate',type:'date',dateFormat:DATEF},
	{name:'cudeDeclarDate',type:'date',dateFormat:DATEF},
	'cudeCustomer','cudeCargoCompany','cudeShipper','cudeConsignee',
	'tratCode','cudeConveyance','cudeBlNo','trtyCode','letyCode',
	'exseCode','exseCodeEn','usagName','cudeCertificateNo',
	'cudeLevyPercent','cudeApprovalNo','consContractNo','cudeContainerNo',
	'cudeCountry','cudePortForeign','cudePortForeignEn',
	'cudePlace','cudePlaceEn','trteCode','trteCodeEn','cudeFreight','cudeInsurance','cudeCharge',
	'cudeTotalSay','cudeTotalAmount','cudeTotalAmountCap',
	'cudePackageNum','packCode','packCodeEn','cudeGrossWeight','cudeNetWeight',
	'cudeManu','cudeMarks','cudeAttachment','cudeTaxLevy','cudeDeclarent','cudeCreator',
	'cudeCompany','cudeCompanyAddress','cudeCompanyZip','cudeCompanyTel',
	{name:'cudeCreateDate',type:'date',dateFormat:DATEF},
	{name:'cudeDocSendDate',type:'date',dateFormat:DATEF},{name:'cudeDocRecvDate',type:'date',dateFormat:DATEF},
	{name:'cudeRefundDate',type:'date',dateFormat:DATEF},{name:'cudeReleaseDate',type:'date',dateFormat:DATEF},
	{name:'cudeShutoutDate',type:'date',dateFormat:DATEF},
	'cudeDocNum','cudeDocColor','cudeRefundDocNum','cudeType','cudeInvoiceNo',
	{name:'cudeInvoiceDate',type:'date',dateFormat:DATEF},
	{name:'cudeTransitedFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'cudeRefundFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'cudeInspectionFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'cudeOpenFlag',type:'boolean',convert:function(v){return v==1;}},
	'cudeStatus','cudeDocStatus','cudeDocReleaseBy',
	{name:'cudeDocReleaseTime',type:'date',dateFormat:'Y-m-d H:i:s'},'cudeDocReceiver',
	'userId','grouId','createBy','modifyBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','attr1','attr2','attr3',
	'attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
FCustomsEntry= Ext.data.Record.create(['id',
	'cuenId','cudeId','consId','cargId','cuenNo','cuenCargoNo','cuenManuNo',
	'cuenCargoNameCn','cuenCargoNameEn','cuenCargoSpec','cuenPackageNum','packCode',
	'cuenCargoNum','cuenCargoUnit','cuenCargoGrossWeight','cuenCargoNetWeight','cuenCargoMeasurement',
	'cuenCountry','cuenUnitPrice','cuenTotalPrice','currCode','cuenLevyType','cuenRemarks','cuenVersion',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FTask= Ext.data.Record.create(['id',
	'taskId','tatyId','tatyName','tatyDId','tatyDName','consId','consNo','consMasterId','consMasterNo','taskOwner','taskOwnerName',
	{name:'taskEstimatedDate',type:'date',dateFormat:DATEF},{name:'taskFinishedDate',type:'date',dateFormat:DATEF},
	'taskFinishedFlag','tatyBizType','tatyBizClass',
	'active','compCode','version','rowAction']);
FSecondShip = Ext.data.Record.create(['id','seshId','consId','consNo','seshCarrier','seshVessel',
	'seshVoyage','seshBlNo','seshPot',
	{name:'seshEta',type:'date',dateFormat:DATEF},{name:'seshEtd',type:'date',dateFormat:DATEF},
	'seshTransNo','seshSealNo','seshRemarks',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FRailwayBl = Ext.data.Record.create(['id',
	'rablId','rablNo','consId','consNo','rablContractNo','custId','custName',
	'rablShipper','rablConsignee','rablNotifyParty','rablShipperNotes',
	'rablAgencyName','rablDeliveryPlace','rablStationD','rablStationT',
	{name:'rablEtd',type:'date',dateFormat:DATEF},'rablContainerNo','rablContainerNoO','rablContainerType','rablContainerDesc','rablContainerWeight',
	'rablChargeRemarks','rablSealNo','rablSealNo2','rablRailwayNotes','rablHsCode',
	{name:'rablSocFlag',type:'boolean',convert:function(v){return v==1;}},
	'rablInvoicePrice','rablCargoNameCn','rablCargoNameEn',
	{name:'rablBulkFlag',type:'boolean',convert:function(v){return v==1;}},
	'rablContainerStatus',
	'rablReturnPlace','currCode','rablCountry','rablPackages','packId','packName',
	'rablCargoMarks','rablGrossWeight','rablMeasurement','rablRemarks','rablStatus',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','attr1','attr2','attr3','attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
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
	{name:'expeInvoiceDate',type:'date',dateFormat:DATEF},
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
	'invoAmountCapital','invoAmountCapitalEn',{name:'invoAmountWriteOff',type:'float'},'invoOperator','invoContractNo',
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
	'voucNo','initWriteOffStatus','initWriteOffNo','initWriteOffBy',{name:'initWriteOffDate',type:'date',dateFormat:DATEF},
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
	'prRemarks','prStatus',{name:'prDate',type:'date',dateFormat:DATEF},'prPrintFlag',
	'prFinApproveBy',{name:'prFinApproveDate',type:'date',dateFormat:DATEF},'prApproveBy',{name:'prApproveDate',type:'date',dateFormat:DATEF},	
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode',{name:'version',type:'int'},'rowAction','attr1','attr2','attr3','attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
SPrItem = Ext.data.Record.create(['id',
	'pritId','prId','invoId','invoNo','invoTaxNo','custName','custSname',
	{name:'invoDate',type:'date',dateFormat:DATEF},{name:'invoDueDate',type:'date',dateFormat:DATEF},
	{name:'invoAmount',type:'float'},{name:'invoAmountWriteOff',type:'float'},{name:'prAmount',type:'float'},
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

PComments = Ext.data.Record.create(['id','commId','objectId','objectType','commBody',
	'commBy','createTime','removed','compCode','version']);

PCompanyBankAccount= Ext.data.Record.create(['id','cobaId','cobaName','cobaBank',
	{name:'cobaAccount',type:'string'},
	'currCode','compCode','active','version','rowAction']);
PGroup = Ext.data.Record.create(['id','grouId','grouName','grouDesc','compCode','active','version','rowAction']);
PRole = Ext.data.Record.create(['id','roleId','roleName','roleDesc','active','compCode','version','rowAction']); 
PGroupUser = Ext.data.Record.create(['id','grusId','grouId','userId','userName','active','compCode','version','rowAction']); 
PUserRole = Ext.data.Record.create(['id','usroId','userId','roleId','roleName','compCode','active','version','rowAction']); 
PFunction = Ext.data.Record.create(['id','funcCode','funcName','funcType','active','compCode']); 
PRoleFunction = Ext.data.Record.create(['id','rofuId','funcCode','roleId','compCode','active','version','rowAction']); 
QParam = Ext.data.Record.create(['key','op','value']); 
PTemplate = Ext.data.Record.create(['id',{name:'tempId',type:'int'},'tempName','tempDesc','tempType','tempClass','tempFileName','tetyId','tetyCode','tetyName','active','createBy','createTime','modifyBy','modifyTiem','compCode','version','rowAction']);
PTemplateType = Ext.data.Record.create(['id','tetyId','tetyName','tetyCode','tetyDesc','tetyClass','tetyType','tetyFormFlag','active','version','rowAction']);
PCompanyConfig = Ext.data.Record.create(['id','cocoId','cocoName','cocoCode','cocoDesc','cocoValue','cocoValueType',
	'cocoValueOptions','cocoGroup','cocoType','compCode','version','rowAction']);
PTaskType = Ext.data.Record.create(['id','tatyId','tatyName','tatyDId','tatyDName','tatyOrder','tatyDesc','tatyDateType','tatyDateEstimated',
	'tatyAction','tatyClass','tatyProperty','tatyDefaultOwner','tatyBizType','tatyBizClass','compCode','version','rowAction']);
PActionLog = Ext.data.Record.create(['acloId','acloActName','acloActRemark','acloTable','acloTid',
	'acloTno','acloUserId','acloUserName','acloIp','compCode','createTime']);
PMessage = Ext.data.Record.create(['messId','messType','messTo','messCc','messBcc',
    'messSubject','messBody','messAttachment','messFrom',{name:'messCreateTime',type:'date',dateFormat:'Y-m-d H:i:s'},
    'messSendFlag','messFromUserId','messFromUserName','messToUserId','messToUserName','compCode','rowAction']);
PMessageTopic = Ext.data.Record.create(['metoId','metoName','metoDesc','metoTemplate','metoRule',
	'actName','active','compCode','version','removed','rowAction']);
PMessageSubscribe = Ext.data.Record.create(['mesuId','metoId',
	{name:'mesuMailFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'mesuImFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'mesuSmFlag',type:'boolean',convert:function(v){return v==1;}},
	'mesuSubscriberType','mesuSubscriberId','mesuSubscriberName','mesuSubscriberEmail',
    'mesuSubscriberMobile','mesuCustomerType','compCode','version','removed','rowAction']);
PUserSetting = Ext.data.Record.create(['usseId','userId','usseName','usseValue']);
PUserExpePermission = Ext.data.Record.create(['usepId','userId','chclId','chclName','expeType',
{name:'usepEditable',type:'boolean',convert:function(v){return v==1;}},
{name:'usepViewAll',type:'boolean',convert:function(v){return v==1;}},
{name:'usepEditAll',type:'boolean',convert:function(v){return v==1;}},'compCode','version','rowAction']);
TExportHistory=Ext.data.Record.create(['exhiId','exhiType','exhiCheckDateF','exhiCheckDateT','exhiFileName','createTime']);

CCustomerCategory = Ext.data.Record.create(['id','cucaId','cucaName','compCode','version','rowAction']);
CCustomer = Ext.data.Record.create(['id','custId','custCode','custClass','custNameCn','custSnameCn','custNameEn',
	'custSnameEn','custContact','custTel','custFax','custZip','custEmail','custUrl','custAddress','custAddress2',
	'custAddress3','custIndustry','custType','custInvoiceHeader','custRemarks','custBankCny','custAccountCny',
	'custBankUsd','custAccountUsd','custShipTo','custChargeTo',
	'custShipper',{name:'custCreditDay',type:'int'},'custCreditAmount','cucaId','counCode','custProvince','custCity','custArFlag','custApFlag',
	'custCarrierFlag','custBookingAgencyFlag','custCfsFlag','custWarehouseFlag','custTrackFlag',
	'custInspectionFlag','custCustomFlag','custInsuranceFlag','custContainerFlag','custOverseaAgencyFlag','custDoAgencyFlag',
	'custBookerFlag','custShipperFlag','custConsigneeFlag','custNotifyFlag','custAirFlag','custExpreeFlag',
	'custSalesId','custSalesName','custActive',	
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
	'cucoHomeTel','cucoMobile','cucoEmail','cucoGender','cucoMsn','cucoQq','cucoFax',
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
	
GCountry = Ext.data.Record.create(['id','counId','counCode','counNameEn','counNameCn','compCode',
	'active','version','rowAction']);
GShippingLine = Ext.data.Record.create(['id','shliId','shliCode','shliName','shliNameEn','shliBulkFlag','shliContFlag','active','compCode','version','rowAction']);
GUnit = Ext.data.Record.create(['id','unitId','unitCode','unitName','active','compCode','version','rowAction']); 
GContainerClass = Ext.data.Record.create(['id','coclId','coclCode','coclName','active','compCode','version','rowAction']); 
GContainerType = Ext.data.Record.create(['id','cotyId','cotyCode','cotyLength','coclCode','cotyTeu','cotyIsoCode','cotyUnCode','cotyTareWeight','cotyMaxWeight','cotyMaxMeasurement','active','compCode','version','rowAction']); 
GPort = Ext.data.Record.create(['id','portId','portCode','portNameEn','portNameCn','counCode','portType','portCnty','portArea','compCode','active','version','rowAction']); 
GPlace = Ext.data.Record.create(['id','placId','placCode','placNameEn','placName','placType','placDesc','counCode','placProvinceId','placProvinceName','placCityId','placCityName','custId','custName','custSname','placAddress','placStation','active','compCode','version','rowAction']); 
GPackage = Ext.data.Record.create(['id','packId','packCode','packName','packName','compCode','active','version','rowAction']); 
GTradeTerm = Ext.data.Record.create(['id','trteId','trteCode','trteName','compCode','active','version','rowAction']); 	
GTransTerm = Ext.data.Record.create(['id','tranId','tranCode','tranName','tranBulkFlag','tranContFlag','compCode','active','version','rowAction']);
GPaymentTerm = Ext.data.Record.create(['id','pateId','pateCode','pateName','compCode','active','version','rowAction']);
GTradeType = Ext.data.Record.create(['id','trtyId','trtyCode','trtyName','compCode','active','version','rowAction']);
GUsage = Ext.data.Record.create(['id','usagId','usagCode','usagName','compCode','active','version','rowAction']);
GLevyType = Ext.data.Record.create(['id','letyId','letyCode','letyName','compCode','active','removed','version','rowAction']);	
GExchangeSettlement = Ext.data.Record.create(['id','exseId','exseCode','exseName','compCode','active','version','rowAction']);	
GTransType = Ext.data.Record.create(['id','tratId','tratCode','tratName','compCode','active','version','rowAction']);	
GIssueType = Ext.data.Record.create(['id','istyId','istyCode','istyName','compCode','active','version','rowAction']);
GSettlementWay = Ext.data.Record.create(['id','sewaId','sewaCode','sewaName','compCode','active','version','rowAction']);
GCurrency = Ext.data.Record.create(['id','currId','currCode','currName','currSymbol','compCode','active','version','rowAction']);
GChargeClass = Ext.data.Record.create(['id','chclId','chclCode','chclName','active','compCode','version','rowAction']);
GCharge = Ext.data.Record.create(['id','charId','charCode','charName','charNameEn','currCode','unitId','chclId','charCnyP','charCnyR','charUsdP','charUsdR','active','compCode','version','rowAction']);
GVessel = Ext.data.Record.create([{name:'id',type:'int'},'vessId','vessCode','vessNameEn','vessNameCn','counCode','vessLiner','vessDesc','vessType','active','compCode','version','rowAction']);
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
GDocumentType = Ext.data.Record.create(['id','dotyCode','dotyId','dotyName','dotyClass','dotyReturnFlag','dotyBackFlag','compCode','active','version','rowAction']);
GVehicleType = Ext.data.Record.create(['id','vehtId','vehtName','active','compCode','version','rowAction']);
GCargoClass = Ext.data.Record.create(['id','caclId','caclCode','caclNameCn','caclNameEn','active','compCode','version','rowAction']);
GCargoType = Ext.data.Record.create(['id','catyId','caclId','catyCode','catyNameCn','catyNameEn','catyDanagerFlag','catyDanagerNo','catyDanagerProperty','catyRemarks','active','compCode','version','rowAction']);
FDo = Ext.data.Record.create(['id','doId','doNo','consId','consNo','mblNo','hblNo',
	'doConsignee','doPort','doHarbour',
	{name:'doArriveDate',type:'date',dateFormat:DATEF},
	'doVessel','doVoyage','doWarehouseId',
	'doWarehouseName','doWarehouseContact','doWarehouseTel','doWarehouseAddress',
	{name:'doInDate',type:'date',dateFormat:DATEF},
	{name:'doOutDate',type:'date',dateFormat:DATEF},
	'doContainerNo','doMarks','doCargoName','doCargoDirection','packId','packName',
	'doPackages','doGrossWeight','doNetWeight','doMeasurement','doRemarks','doStatus',
	'userId','grouId','createBy','modifyBy',{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction','attr1','attr2','attr3','attr4','attr5','attr6','attr7','attr8','attr9','attr10']);
WUser = Ext.data.Record.create(['id','wusrId','wusrName','wusrPassword','wusrFirstName','wusrLastName',
	'wusrTitle','wusrDept','wusrMobile','wusrEmail','wusrCompanyName','wusrAddress','wusrCity','wusrProvice',
	'wusrZip','wusrCountry','wusrTel','wusrFax','wusrUrl','wusrStatus','wusrLastLoginTime',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'wusrLastLoginTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'custId','compCode','version','rowAction']);
WInquiry = Ext.data.Record.create(['id','winqId','winqCargoDesc','winqCargoPackages','winqCargoGw','winqCargoMeasurement',
        'winqReceiptPlace','winqDeliveryPlace','winqPol','winqPolEn','winqPod','winqPodEn',
        'tranId','tranCode','pateId','pateName','winqBizType','winqRemarks',
     	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
     	{name:'modiryTime',type:'date',dateFormat:'Y-m-d H:i:s'},
     	'winqStatus','wusrId','wusrFirstName','wusrMobile','wusrCompanyName','wusrTel','compCode','version','rowAction']);
FAttach = Ext.data.Record.create(['attachId','attachName','attachFileName','attachDesc',
	'consId','consNo','createBy','modifyBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);

var DATY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['CONS_DATE','委托生成日期'],['CONS_ETA','预计船到日期'],['CONS_SAIL_DATE','开船日期'],['BASE_TASK_D','依赖任务完成日']]});
getDATY = function(v){if(v) return DATY_S.getById(v).get('NAME'); else return '';};

var ACTION_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['FCONS_S','租船合同保存'],['LOLI_S','配船保存'],['CONS_S','委托保存'],['CONS_U_1','订舱确认']]});
getACTION = function(v){if(v) return ACTION_S.getById(v).get('NAME'); else return '';};

var SHTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['FCL','整箱'],['LCL','拼箱'],['BULK','散货']]});
getSHTY = function(v){if(v) return SHTY_S.getById(v).get('NAME'); else return '';};

var TRACK_T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','车皮'],[2,'驳船'],['3','卡车'],['4','不做码头']]});
getTRACK_T = function(v){if(v) return TRACK_T_S.getById(v).get('NAME'); else return '';};

var BT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['C','集装箱'],['B','散货'],['A','空运'],
                ['G','报关'],['I','报检'],['K','挂靠'],['M','加工贸易'],['F','减免税'],['R','企业注册']]});
getBT = function(v){if(v) return BT_S.getById(v).get('NAME'); else return '';};

var PLTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','省'],['2','市/县'],['3','港区']]});
getPLTY = function(v){if(v) return PLTY_S.getById(v).get('NAME'); else return '';};

var BC_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['E','出口'],['I','进口'],['T','进境'],['D','内贸']]});
getBC = function(v){if(v) return BC_S.getById(v).get('NAME'); else return '';};

var SOUR_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','自揽货'],['1','同行货'],['2','船公司指定货'],['3','海外代理指定货']]});

var INDU_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','化工'],['2','纺织服装'],['3','建筑建材'],['4','汽车'],['5','电子电器'],['6','农林牧副渔'],['7','轻工/日化'],['8','医药卫生'],['9','机械设备制造'],['10','矿冶能源'],['11','食品'],['12','零售流通'],['13','物流'],['14','交通运输企业'],['15','其它']]});	
getINDU = function(v){if(v) return INDU_S.getById(v).get('NAME'); else return '';};

var COPR_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','国有'],['1','合作'],['2','合资'],['3','独资'],['4','集体'],['5','私营'],['6','个体工商户'],['7','其他']]});
getCOPR = function(v){if(v) return COPR_S.getById(v).get('NAME'); else return '';};

var DOCL_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['10','出口报检随附单据'],['11','出口报检需要证单'],['12','出口报关随附单据'],['20','进口报检需要证单'],['21','进口报检需要证单'],['22','进口报关随附单据'],['30','其他单']]});
getDOCL = function(v){if(v) return DOCL_S.getById(v).get('NAME'); else return '';};

var ITTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','当面交接'],['1','快递'],['2','邮件']]});
getITTY = function(v){if(v) return ITTY_S.getById(v).get('NAME'); else return '';};

var TEUN_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['F','F'],['C','C']]});
var USFU_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','全水'],['1','路桥']]});
var TROT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','提箱'],['1','产地装箱'],['2','验货'],['3','转关']]});
var TANT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','拖车'],['1','货车'],['2','水路'],['3','铁路']]});

var FL_S=new Ext.data.SimpleStore({id:0,fields:['CODE'],data:[['FCL'],['LCL']]});
getFL = function(v){if(v) return FL_S.getById(v).get('NAME'); else return '';};
var GEND_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['M','男'],['F','女']]});
getGEND = function(v){if(v) return GEND_S.getById(v).get('NAME'); else return '';};
var TFTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['xls','xls'],['doc','doc']]});
var DC_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['R','红色'],['G','绿色'],['B','蓝色'],['W','白色']]});
var BIZT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['A','海运货代'],['B','无船承运']]});
var COLE_S=new Ext.data.SimpleStore({id:0,fields:['CODE'],data:[['20'],['40'],['45'],['10'],['53'],['12'],['38'],['48']]});
var SWIT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','无'],['1','商检换单'],['2','厂检换单']]});

var VETY_S = new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','集装箱船'],['2','散杂货船'],['3','驳船']]});
getVETY = function(v){if(v) return VETY_S.getById(v).get('NAME'); else return '';};

var CTST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',S_SHIP_NOT],['1',S_SHIP_PARTY],['2',S_SHIP_ALL]]});
getCTST = function(v){if(v>=0) return CTST_S.getById(v).get('NAME'); else return '';};

var COST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未订舱'],['1','订舱已开始'],['2','订舱已确认'],['3','已退舱'],['4','已改装漏配'],['5','已退关退载'],['6','已作废'],['7','已完成']]});
getCOST = function(v){if(v>=0) return COST_S.getById(v).get('NAME'); else return '';};
var CIST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未到港'],['1','已到港'],['2','已换单'],['3','已放行'],['4','已送货'],['6','已作废'],['7','已完成']]});
getCIST = function(v){if(v>=0) return CIST_S.getById(v).get('NAME'); else return '';};

var TRADE_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未确认'],['1','已确认'],['2','已完成'],['3','已作废']]});
getTRADE_S = function(v){if(v>=0) return TRADE_S.getById(v).get('NAME'); else return '';};

getCONS_STATUS = function(v,m,r){
	if(v>=0) {
		if(r.get('consBizClass') == BC_I)
			return CIST_S.getById(v).get('NAME'); 
		else if(r.get('consBizClass') == BC_E)
			 return COST_S.getById(v).get('NAME');
		else
			return TRADE_S.getById(v).get('NAME');
	}
	else return '';
};

var BOST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未订舱'],['1','订舱已开始'],['2','已生成配舱回单'],['3','已发送ESI'],['4','订舱失败'],['5','订舱已确认'],['6','已退舱'],['7','已改装漏配']]});
getBOST = function(v){if(v>=0) return BOST_S.getById(v).get('NAME'); else return '';};

var BLST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','未确认'],['2','已确认'],['3','已出正本'],['4','已放单']]});
getBLST = function(v){if(v>=0) return BLST_S.getById(v).get('NAME'); else return '';};

var TRST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未开始'],['1','已开始'],['2','已完成']]});
getTRST = function(v){if(v>=0) return TRST_S.getById(v).get('NAME'); else return '';};

var SPST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未开始'],['1','已生成分拨申请'],['2','已回执通过'],['3','已形式清关']]});
getSPST = function(v){if(v>=0) return SPST_S.getById(v).get('NAME'); else return '';};

var WAST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未受理'],['1','已受理'],['2','已完成']]});
getWAST = function(v){if(v>=0) return WAST_S.getById(v).get('NAME'); else return '';};

var WATY_S = new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['I','入库通知单'],['O','出库通知单']]});
getWATY = function(v){if(v) return WATY_S.getById(v).get('NAME'); else return '';};


var INSPST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未申报'],['1','已申报'],['2','已完成']]});
getINSPST = function(v){if(v>=0) return INSPST_S.getById(v).get('NAME'); else return '';};

var CDST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未制单'],['1','已制单'],['2','已申报'],['3','已通关'],['4','已退关']]});
getCDST = function(v){if(v>=0) return CDST_S.getById(v).get('NAME'); else return '';};

var DOST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未接收'],['1','已接收'],['2','已报送'],['3','已退回'],['4','已退还']]});
getDOST = function(v){if(v>=0) return DOST_S.getById(v).get('NAME'); else return '';};

var DRST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','不可放'],['1','可放']]});
getDRST = function(v){if(v>=0) return DRST_S.getById(v).get('NAME'); else return '';};

var IDST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未接收'],['3','已回单'],['4','已退单']]});
getIDST = function(v){if(v>=0) return IDST_S.getById(v).get('NAME'); else return '';};


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
var MESU_T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','内部用户'],['2','客户供应商'],['3','系统角色']]});
getMESU_T = function(v){if(v>=0) return MESU_T_S.getById(v).get('NAME'); else return '';};

var ROLE_T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','操作员'],['2','业务员'],['3','调度']]});
getROLE_T = function(v){if(v>=0) return ROLE_T_S.getById(v).get('NAME'); else return '';};

var CUST_T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','订舱客户'],['2','租船人'],['3','订舱代理'],['4','承运人'],['5','报关公司'],['6','拖车公司'],['7','仓库']]});
getCUST_T = function(v){if(v>=0) return CUST_T_S.getById(v).get('NAME'); else return '';};


var PSST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未生效'],['1','已生效'],['2','已失效']]});
getPSST = function(v){if(v>=0) return PSST_S.getById(v).get('NAME'); else return '';};

var TECL_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['A','普通'],['B','套打']]});
getTECL = function(v){if(v) return TECL_S.getById(v).get('NAME'); else return '';};

var EXTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['R','应收'],['P','应付']]});
getEXTY = function(v){if(v) return EXTY_S.getById(v).get('NAME'); else return '';};
var LCLT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['A','内部拼箱'],['B','外部拼箱'],['C','客户自拼']]});
getLCLT = function(v){if(v) return LCLT_S.getById(v).get('NAME'); else return '';};
var CUTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','属地'],['2','口岸']]});
getCUTY = function(v){if(v) return CUTY_S.getById(v).get('NAME'); else return '';};

var IRTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','三月期'],['2','六月期'],['3','一年期']]});
getIRTY = function(v){if(v) return IRTY_S.getById(v).get('NAME'); else return '';};

var YY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['2008','2008年'],['2009','2009年'],['2010','2010年'],['2011','2011年'],['2012','2012年'],['2013','2013年'],['2014','2014年'],['2015','2015年']]});
var MM_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['01','一月'],['02','二月'],['03','三月'],['04','四月'],['05','五月'],['06','六月'],['07','七月'],['08','八月'],['09','九月'],['10','十月'],['11','十一月'],['12','十二月']]});

var CONF_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME']});

var ACLO_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['FConsign','委托'],['FBl','提单'],['FContract','租船合同'],['SExpense','费用'],['SInvoice','账单'],['SVoucher','收、付款单'],['SPr','付款申请']]});
getACLO = function(v){if(v) return ACLO_S.getById(v).get('NAME'); else return '';};

var getGStore=function(c,r,o,s,d,id){
	if(Ext.StoreMgr.containsKey(c+'_S')){return Ext.StoreMgr.get(c+'_S');}
	else {var store = GS(c+'_Q',r,o,s,d,'',c+'_S',id?id:s);store.load({params:{active:'1'}});return store;}
};
var getCACL_S = function(){return getGStore('CACL','GCargoClass',GCargoClass,'caclId','DESC','');};
getCACL = function(v){var _cs=getCACL_S();if(v) return _cs.getById(v)?_cs.getById(v).get('caclNameCn'):v; else return '';}; 

var getVEHT_S = function(){return getGStore('VEHT','GVehicleType',GVehicleType,'vehtId','ASC','');};	
getVEHT = function(v){var _cs= getVEHT_S();if(v) return _cs.getById(v)?_cs.getById(v).get('vehtName'):v; else return '';}; 

var getSEWA_S = function(){return getGStore('SEWA','GSettlementWay',GSettlementWay,'sewaId','ASC','');};
getSEWA = function(v){var _cs= getSEWA_S();if(v) return _cs.getById(v)?_cs.getById(v).get('sewaName'):v; else return '';}; 

var getISTY_S = function(){return getGStore('ISTY','GIssueType',GIssueType,'istyId','ASC','');};
getISTY = function(v){var _cs= getISTY_S();if(v) return _cs.getById(v)?_cs.getById(v).get('istyName'):v; else return '';};

var getTRAN_S = function(){return getGStore('TTER','GTransTerm',GTransTerm,'tranId','ASC','');};
getTRAN = function(v){var _cs= getTRAN_S();if(v) return _cs.getById(v)?_cs.getById(v).get('tranCode'):v; else return '';};

var getTTB_S = function(){
	var s=GS('TTER','GTransTerm',GTransTerm,'tranId','ASC','');
	var a=getTRAN_S().getRange();
	for(var i=0;i<a.length;i++){
		if(a[i].get('tranBulkFlag')==1) s.add(a[i]);
	}
	return s;
};
var getTTC_S = function(){
	var s=GS('TTER','GTransTerm',GTransTerm,'tranId','ASC','');
	var a=getTRAN_S().getRange();
	for(var i=0;i<a.length;i++){
		if(a[i].get('tranContFlag')==1) s.add(a[i]);
	}
	return s;
};

var getPATE_S = function(){return getGStore('PATE','GPaymentTerm',GPaymentTerm,'pateId','ASC','');};
getPATE = function(v){var _cs= getPATE_S();if(v) return _cs.getById(v)?_cs.getById(v).get('pateCode'):v; else return '';};

var getUNIT_S = function(){
	if(Ext.StoreMgr.containsKey('S_UNIT')){return Ext.StoreMgr.get('S_UNIT');}
	else {s = GS('UNIT_Q','GUnit',GUnit,'','','','S_UNIT');s.load({params:{active:'1'}});return s;}    
};
getUNIT = function(v,m,r){var _cs= getUNIT_S();if(v) return _cs.getById(v)?_cs.getById(v).get('unitName'):v; else return '';}; 

var getUNIT_C = function(){
	if(Ext.StoreMgr.containsKey('S_UNIT_C')){return Ext.StoreMgr.get('S_UNIT_C');}
	else {s = GS('UNIT_C','GUnit',GUnit,'','','','S_UNIT_C');s.load({params:{active:'1'}});return s;}    
};
getUNIT = function(v,m,r){var _cs= getUNIT_S();if(v) return _cs.getById(v)?_cs.getById(v).get('unitName'):v; else return '';}; 

var getCURR_S = function(){return getGStore('CURR','GCurrency',GCurrency,'currCode','ASC','');};
getCURR = function(v,m,r){var _cs= getCURR_S();if(v) return _cs.getById(v)?_cs.getById(v).get('currName'):v; else return '';}; 

var getCUCA_S = function(){return getGStore('CUCA','CCustomerCategory',CCustomerCategory,'cucaId','ASC','');};
getCUCA = function(v,m,r){var _cs= getCUCA_S();if(v) return _cs.getById(v)?_cs.getById(v).get('cucaName'):v; else return '';}; 

var getCOCL_S = function(){return getGStore('COCL','GContainerClass',GContainerClass,'coclId','ASC','');};
getCOCL = function(v,m,r){var _cs= getCOCL_S();if(v) return _cs.getById(v)?_cs.getById(v).get('coclName'):v; else return '';}; 

var getUSAG_S = function(){return getGStore('USAG','GUsage',GUsage,'usagId','ASC','');};
getUSAG = function(v,m,r){var _cs= getUSAG_S();if(v) return _cs.getById(v)?_cs.getById(v).get('usagName'):v; else return '';}; 

var getCOUN_S = function(){return getGStore('COUN','GCountry',GCountry,'counCode','ASC','');};
getCOUN = function(v,m,r){var _cs= getCOUN_S();if(v) return _cs.getById(v)?_cs.getById(v).get('counNameCn'):v; else return '';}; 

var getPLAC_S = function(){return getGStore('PLAC','GPlace',GPlace,'shliId','ASC','');};
getPLAC = function(v,m,r){var _cs= getPLAC_S();if(v) return _cs.getById(v)?_cs.getById(v).get('placName'):v; else return '';}; 

var getSHLI_S = function(){return getGStore('SHLI','GShippingLine',GShippingLine,'shliId','ASC','');};
getSHLI = function(v,m,r){var _cs= getSHLI_S();if(v) return _cs.getById(v)?_cs.getById(v).get('shliName'):v; else return '';}; 

var getVESS_S = function(){return getGStore('VESS','GVessel',GVessel,'vessId','ASC','');};
getVESS = function(v,m,r){var _cs= getVESS_S();if(v) return _cs.getById(v)?_cs.getById(v).get('vessNameEn'):v; else return '';}; 

var getPOL_S = function(){
	if(Ext.StoreMgr.containsKey('S_POL')){return Ext.StoreMgr.get('S_POL');}
	else {
		s = GS('PORT_Q','GPort',GPort,'portNameEn','ASC','','S_POL','portId');
    	s.load({params:{counCode:'CN',active:'1'},callback:function(){getBP();}});return s;}    
};
var getHARB_S = function(){
	if(Ext.StoreMgr.containsKey('S_HARBOUR')){return Ext.StoreMgr.get('S_HARBOUR');}
	else {
		s = GS('PLAC_Q','GPlace',GPlace,'placName','ASC','','S_HARBOUR','placId');
    	s.load({params:{placType:'3',active:'1'}});return s;}
};
var getPROV_S = function(){
	if(Ext.StoreMgr.containsKey('S_PROV')){return Ext.StoreMgr.get('S_PROV');}
	else {
		s = GS('PLAC_Q','GPlace',GPlace,'placName','ASC','','S_PROV','placId');
    	s.load({params:{placType:'1',active:'1'}});return s;}
};
var getPACK_S = function(){return getGStore('PACK','GPackage',GPackage,'packId','ASC','');};
getPACK = function(v){var _cs= getPACK_S();if(v) return _cs.getById(v)?_cs.getById(v).get('packName'):v; else return '';}; 

var getCOTY_S = function(){return getGStore('COTY','GContainerType',GContainerType,'cotyCode','ASC','cotyId');};
getCOTY = function(v){var _cs= getCOTY_S();if(v) return _cs.getById(v)?_cs.getById(v).get('cotyCode'):v; else return '';};
getCLCODE=function(v){var _cs= getCOTY_S();if(v) return _cs.getById(v)?_cs.getById(v).get('coclCode'):v; else return '';};
getCTEU = function(v){var _cs= getCOTY_S();if(v) return _cs.getById(v)?(_cs.getById(v).get('cotyTeu')?_cs.getById(v).get('cotyTeu'):1):1; else return 1;}; 

var getCHCL_S = function(){return getGStore('CHCL','GChargeClass',GChargeClass,'chclId','ASC','chclId');};
getCHCL = function(v){var _cs= getCHCL_S();if(v) return _cs.getById(v)?_cs.getById(v).get('chclName'):v; else return '';}; 

var getDOTY_S = function(){return getGStore('DOTY','GDocumentType',GDocumentType,'dotyId','ASC','dotyId');};
getDOTY = function(v){var _cs= getDOTY_S();if(v) return _cs.getById(v)?_cs.getById(v).get('dotyName'):v; else return '';}; 

var getTRTY_S = function(){return getGStore('TRTY','GTradeType',GTradeType,'trtyId','ASC','trtyId');};
var getTRAT_S = function(){return getGStore('TRAT','GTransType',GTransType,'tratId','ASC','tratId');};
var getTRTE_S = function(){return getGStore('TRTE','GTradeTerm',GTradeTerm,'trteId','ASC','trteId');};
var getLETY_S = function(){return getGStore('LETY','GLevyType',GLevyType,'letyId','ASC','letyId');};
var getEXSE_S = function(){return getGStore('EXSE','GExchangeSettlement',GExchangeSettlement,'exseId','ASC','exseId');};
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
var getFUNC_S = function(){return getGStore('FUNC','PFunction',PFunction,'funcCode','ASC','');};
var getROLE_S = function(){return getGStore('ROLE','PRole',PRole,'roleId','DESC','');};
getROLE = function(v){if(v){var _cs= getROLE_S();return _cs.getById(v)?_cs.getById(v).get('roleName'):v; } else return '';}; 
var getUSER_S = function(){return getGStore('USER','PUser',PUser,'userId','DESC','');};
getUSER = function(v){if(v){var _cs= getUSER_S();return _cs.getById(v)?_cs.getById(v).get('userName'):v; } else return '';}; 
var getGROU_S = function(){return getGStore('GROU','PGroup',PGroup,'grouId','DESC','');};
getGROU = function(v){if(v){var _cs= getGROU_S();return _cs.getById(v)?_cs.getById(v).get('grouName'):v; } else return '';}; 

var getCOCO_S = function(){
	if(Ext.StoreMgr.containsKey('COCO_S')){return Ext.StoreMgr.get('COCO_S');}
	else {
		s = GS('COCO_Q','PCompanyConfig',PCompanyConfig,'cocoCode','DESC','','COCO_S','cocoCode');
    	s.load({callback:function(){getBP();}});return s;
    }
};
var getCFG=function(v){
	var _cs= getCOCO_S();
	return _cs.getById(v)?_cs.getById(v).get('cocoValue'):'';
};
var getCFGD=function(v){
	var _cs= getCOCO_S();
	return _cs.getById(v)?_cs.getById(v).get('cocoDesc'):'';
};

var BASE_PORT='';
var BASE_PORT_NAME='';
var BASE_PORT_NAME_CN = '';

var getBP=function(){
	if(BASE_PORT!='') 
		return BASE_PORT;
	else{
		var bc=getCFG('BASE_PORT');
		var s=getPOL_S();
		var a=s.getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get('portCode')==bc){
				BASE_PORT=a[i].get('portId');
				BASE_PORT_NAME=a[i].get('portNameEn');
				BASE_PORT_NAME_CN=a[i].get('portNameCn');
				break;
			}
		}
		return BASE_PORT;
	}
};

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

var getSALE_S=function(){	
	if(Ext.StoreMgr.containsKey('SALE_S')){return Ext.StoreMgr.get('SALE_S');}
	else {
		s = GS('USER_Q','PUser',PUser,'userLoginName','ASC','','SALE_S','userId');
    	s.load({params:{userSalesFlag:'1',active:'1'}});return s;
    }
};
var getTATY_S=function(){	
	if(Ext.StoreMgr.containsKey('TATY_S')){return Ext.StoreMgr.get('TATY_S');}
	else {
		s = GS('TATY_Q','PTaskType',PTaskType,'tatyId','ASC','','TATY_S','tatyId');
    	s.load({params:{tatyBizType:BT_B,tatyBizClass:BC_E}});return s;
    }
};
var getOP_S=function(){
	if(Ext.StoreMgr.containsKey('OP_S')){return Ext.StoreMgr.get('OP_S');}
	else {
		s = GS('USER_Q','PUser',PUser,'userLoginName','ASC','','OP_S','userId');
    	s.load({params:{userOperatorFlag:'1',active:'1'}});return s;
    }
};
var getTETY_S = function(){return getGStore('TETY','PTemplateType',PTemplateType,'tetyId','DESC','');};
getTETY = function(v){var _cs=getTETY_S();if(v) return _cs.getById(v)?_cs.getById(v).get('tetyName'):v; else return '';}; 

var getTEMP_S = function(){return getGStore('TEMP','PTemplate',PTemplate,'tempId','DESC','');};

var getTemplates = function(t){	
	var a = getTEMP_S().getRange();var c=[];
	for(var i=0;i<a.length;i++){if(a[i].get('tetyCode')==t) c[c.length]=[a[i].get('tempId'),a[i].get('tempName')];}
	return new Ext.data.SimpleStore({id:0,fields:['tempId','tempName'],data:c});
};

function UUID(){var guid='';for (var i=0;i<10;i++){guid += Math.floor(Math.random()*6).toString();};return guid;};

function iniStore(){
	Ext.MessageBox.show({title:'Please wait',msg:'初始化数据...',progressText:'Loading...',width:300,progress:true,closable:false});
	getCOUN_S();
	getPOL_S();
	getEXRA_S();
	getCURR_S;
	getSEWA_S();
	getUNIT_S();
	getCOBA_S();
	getDOTY_S();
	getCUCA_S();
	getTETY_S();
	getTRTE_S();
	getTRTY_S();
	getTATY_S();
	getISTY_S();
	getPATE_S();
	getTRAN_S();
	getPACK_S();
	getCACL_S();
	getSHLI_S();
	getCOTY_S();
	if(!NR(M1_P+A_ROLE+F_V)) 
		getFUNC_S();
	getTEMP_S();
	getCHCL_S();
	getCOCO_S();
	getGROU_S();
	getROLE_S();
	getUSER_S();
	getSALE_S();
	getOP_S();
	getCHAR_S();
	getCCHAR_S();
	getCHAR_PERM_R_S();
	getCHAR_PERM_P_S();
	var f = function(v){
		return function(){
			if(v == 12){
				Ext.MessageBox.hide();} 
			else {
				var i = v/11;Ext.MessageBox.updateProgress(i, Math.round(100*i)+'% completed');
			}
		};
	};
	for(var i=1;i<13;i++){setTimeout(f(i),i*300);}
};

function getCStatistic(ct){
	var s = ct.substr(0,2);
	if(s=='20') return s;
	if(s=='40'){if(ct.indexOf('H')!=-1) return '40H';else return '40';};
	if(s=='45' && ct.indexOf('H')!=-1) return '45H';
	return '00';
};
function getPS(){return new Ext.data.Store({url: SERVICE_URL+'?A=PORT_Q',reader: new Ext.data.XmlReader({record:'GPort'},GPort),sortInfo:{field:'portNameEn',direction:'ASC'}});};
function getVES(){return new Ext.data.Store({url: SERVICE_URL+'?A=VESS_X',reader: new Ext.data.XmlReader({id:'vessId',record:'GVessel'}, GVessel),sortInfo:{field:'vessNameEn', direction:'ASC'}});};
function getVS(){return new Ext.data.Store({url: SERVICE_URL+'?A=VOYA_Q',reader: new Ext.data.XmlReader({record:'GVoyage'},GVoyage),sortInfo:{field:'voyaId',direction:'DESC'}});};
function getCUCOS(){return new Ext.data.Store({url: SERVICE_URL+'?A=CUCO_Q',reader: new Ext.data.XmlReader({record:'CCustomerContact'},CCustomerContact)});};
function getCS(){return  new Ext.data.Store({url: SERVICE_URL+'?A='+'CUST_X',reader: new Ext.data.XmlReader({id:'custId',record:'CCustomer'},CCustomer),sortInfo:{field:'custId', direction:'DESC'}});};

//获得委托模块代码
function getRM(bizClass,bizType,shipType){
	var m1 = '';
	var m2 = '';
	if(bizClass=='T'){
		m1=M1_E;	
		m2=eval('M2_T'+bizType);
	}
	else{
		m1 = eval('M1_'+bizType);	
		m2=eval('M2_'+bizClass);
	}	
	
	if(bizType=='C'){
		if(shipType=='FCL' && bizClass=='I') m2='02';
		else if(shipType=='LCL' && bizClass=='I') m2='03';
		else if(shipType=='FCL' && bizClass=='E') m2='05';
		else if(shipType=='LCL' && bizClass=='E') m2='06';
	}
	
	
	if(bizType=='G'||bizType=='I')
		return ""+m1;
	else
		return m1+m2;
};
var F_V='01';
var F_M='02';
var F_R='03';
var F_E='04';
var F_F='05'; //作废
var F_A='06'; //财务审核
var F_A2='07';//经理审核
var F_CV='08';
var F_CM='09';
var F_WO='10';
var F_IM='11';
var F_SH='12';
var F_UL='13';
var F_MERGE='05';

var M1_C='0001';//集装箱
var M1_B='0002';//散货
var M1_A='0003';//空运
var M1_G='0004';//报关
var M1_I='0005';//报检
var M1_D='0006';//单证
var M1_S='0007';//结算
var M1_T='0008';//统计
var M1_V='0009';//客户供应商
var M1_J='0010';//基础数据
var M1_P='0011';//系统管理
var M1_W='0012';//网上服务
var M1_M='0013';//加工贸易
var M1_F='0014';//减免税
var M1_R='0015';//企业注册
var M1_E='0016';//进境

var M2_TC='01';//进境集装箱
var M2_TB='02';//进境散货

var M2_A='01'; //进口全部
var M2_AE='04';//出口全部

var M2_F='02'; //整箱
var M2_L='03'; //拼箱
var M2_FE='05';//出口整箱
var M2_LE='06';//出口拼箱

var M2_BV='04';//散货船期
var M2_BC='05';//散货租船合同
var M2_BP='06';//散货装货清单
var M2_V='04';
var M2_R='05';
var M2_I='02'; //进口
var M2_E='03'; //出口

var M3_CONS='01';
var M3_DOC='02';
var M3_EXPE='03';
var M3_TRAN='04';
var M3_WARE='05';
var M3_CUDE='06';
var M3_INSP='07';
var M3_BL='08';
var M3_CONT='09';
var M3_BBOOK='10';
var M3_SESH='11';
var M3_RABL='12';
var M3_DO='13';
var M3_ATTACH='14';

var G_VESS='01';
var G_COUN='02';
var G_SHLI='03';
var G_PORT='04';
var G_AIRP='05';
var G_UNIT='06';
var G_PACK='07';
var G_COCL='08';
var G_COTY='09';
var G_VEHT='10';
var G_CACL='11';
var G_CATY='12';
var G_TRTE='13';
var G_TTER='14';
var G_TRTY='15';
var G_USAG='16';
var G_LETY='17';
var G_EXSE='18';
var G_TRAT='19';
var G_ISTY='20';
var G_SEWA='21';
var G_CURR='22';
var G_CHCL='23';
var G_CHAR='24';
var G_COBA='25';
var G_DOTY='26';
var G_PATE='27';
var G_PLAC='28';

var S_COAU='01';
var S_BILL_R='02';
var S_INVO_R='03';
var S_PR_R='04';
var S_VOUC_R='05';
var S_BILL_P='06';
var S_INVO_P='07';
var S_PR_P='08';
var S_VOUC_P='09';
var S_INNO='10';
var S_EXRA='11';
var S_GL='12';
var S_EXPE='13';
var S_INRA='14';
var S_EXHI='15';
var S_AR='01';
var S_AP='02';
var S_AC='03';

var V_CUST='01';
var V_CUCA='02';
var V_PRSH='03';
var V_SAQU='04';

var W_WUSR='01';
var W_WINQ='02';
var W_CONS='03';
var W_BL='04';
var W_BILL='05';

var T_BUSI='01';
var T_BUEX='02';
var T_BUDE='03';
var T_PROF='04';
var T_ACAR='05';
var T_ACAP='06';
var T_CUEX='07';
var T_VEEX='08';
var T_WROF='09';
var T_SALES='10';
var T_ARA='11';
var T_APA='12';
var T_PRCO='13';
var T_PRCH='14';
var T_PAY_PLAN='15';
var T_PROF_SALES='16';
var T_PTEU='17';
var T_BUDS='18';

var A_GROU='01';
var A_ROLE='02';
var A_USER='03';
var A_TEMP='04';
var A_COCO='05';
