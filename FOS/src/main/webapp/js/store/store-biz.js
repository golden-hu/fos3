FConsign = Ext.data.Record.create(['id','wconId',
	'consId','consNo','consType','consShipType','consActionType',
	'consBizClass','consBizType','consLclType',
	{name:'consMasterFlag',type:'boolean',convert:function(v){return v==1;}},
	'consMasterId','consMasterNo',
	'consMergeFlag','consMergeId','consMergeNo','consRefNo','consPackingListNo',
	'consContractNo','consSource',{name:'consDate',type:'date',dateFormat:DATEF},
	'consSalesRepId','consSalesRepName','consBranchId','consBranchName','consOperatorId','consOperatorName',
	'consTradeContractNo','consCreditNo','consInsuranceFee','custId',
	'custName','custSname','custContact','custTel','custFax','custSalesId','custSalesName','consOverseaAgency',
	'consOverseaAgencyName','consShipper','consConsignee','consNotifyParty','consNotifyParty2',
	'consFShipper','consFConsignee','consFNotifyParty',
	'consPol','consPolEn','consPolCn','consReceiptPlace','consPod','consPodEn','consPodCn',
	'consPot','consPotEn','consPotCn',
	'consDeliveryPlace','consDeliveryPlaceCode','consDestination','consDestinationCode',
	'consTranCountry','consTradeCountry',
	'consHarbour','consCargoOwner','consCargoOwnerName','consCfs','consCfsName',
	'consWarehouse','consWarehouseContact','consWarehouseName',
	'consWarehouseTel','consWarehouseAddress','consWarehouseNo','consWarehouseRemarks',
	{name:'consContainerLoadDate',type:'date',dateFormat:DATEF},
	'consContainerLoadTime','consContainerCompany','consContainerCompanyName',
	'consCustomsVendor','consCustomsVendorName','consCustomsContact','consCustomsTel',
	'consInspectionVendor','consInspectionVendorName',
	'consTrackVendor','consTrackVendorName','consTrackContact',
	{name:'consTrackLoadDate',type:'date',dateFormat:DATEF},
	'consTrackLoadTime','consTrackLoadAddress','consTrackRemarks','consTrackTel',
	'consLoadFactory','consLoadContact','consLoadTel',
	'consDoAgency','consDoAgencyName','consDoAgencyAddress',
	'consBookingAgency','consBookingAgencyName','consBookingAgencySname',
	'consBookingAgencyContact','consBookingAgencyTel',
	{name:'consBookingDate',type:'date',dateFormat:DATEF},'consBookingContractNo',
	'consSoNo','consPrecarriage','consCarrier','consCarrierName','consCarrierContact','consCarrierTel',
	'vessId','vessName','vessNameCn','voyaId','voyaName',
	{name:'consDeliveryDate',type:'date',dateFormat:DATEF},
	{name:'consRecvDate',type:'date',dateFormat:DATEF},
	{name:'consEtd',type:'date',dateFormat:DATEF},
	{name:'consEta',type:'date',dateFormat:DATEF},
	{name:'consSailDate',type:'date',dateFormat:DATEF},
	'harbourOpenTime','harbourCloseTime',
	{name:'consLoadDate',type:'date',dateFormat:DATEF},
	{name:'consBlIssueDate',type:'date',dateFormat:DATEF},
	{name:'consExpiryDate',type:'date',dateFormat:DATEF},
	{name:'fconShipDateF',type:'date',dateFormat:DATEF},
	{name:'fconShipDateT',type:'date',dateFormat:DATEF},
	{name:'voyaShipDateF',type:'date',dateFormat:DATEF},
	{name:'voyaShipDateT',type:'date',dateFormat:DATEF},
	'consMblNo','consHblNo','consCertNo','consScacCode','consContainerNo','consSealNo','consCargoDesc',
	'consCargoMarks','consCargoDimension','consCargoPackages','consCargoNetWeight',
	'consCargoGrossWeight','consCargoMeasurement',
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
	{name:'consThcFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'consPressureBoxFlag',type:'boolean',convert:function(v){return v==1;}},
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
	{name:'consInvoPDate',type:'date',dateFormat:DATEF},'consExternalFlag','consCudeType','consCustomsType',
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
	'sumRUsdInvoice','sumRUsdWriteOff','sumRCny','sumROther',
	'sumRCnyInvoice','sumRCnyWriteOff','sumPUsd','sumPUsdInvoice',
	'sumPUsdWriteOff','sumPCny','sumPCnyInvoice','sumPCnyWriteOff','editable'
	]);

FBl = Ext.data.Record.create(['id',
	'blId','blNo','mblNo','blType','consId','consNo','consBizClass','consTradeContractNo','consChargeRemarks','consBizType','custId','custName',
	'blShipper','blConsignee','blNotifyParty','blNotifyParty2','blOverseaAgency','consShipType',	
	'blPrecarriage','blCarrier','blCarrierName','blVessel','blVoyage','blPol','blPod','blPot',
	{name:'blLoadDate',type:'date',dateFormat:'Y-m-d'},{name:'blEtd',type:'date',dateFormat:'Y-m-d'},{name:'blEta',type:'date',dateFormat:'Y-m-d'},
	'blReceiptPlace','blDeliveryPlace','blContainerNo','blSealNo',
	'blPackages','blCargoDesc','blGrossWeight','blNetWeight','blMeasurement','blTotalSay',
	'blMarks','packId','packName','unitId','unitName',
	{name:'cargGrossWeight',type:'float'},{name:'cargNetWeight',type:'float'},
    {name:'cargMeasurement',type:'float'},'cargPackages','blMBlId','blMBlNo','fconId','fconContractNo','consMasterId','consMasterNo',
	'blPaymentTerm','blPaidAt','blTransTerm','blShipType','blContainerInfo',
	'blOriginalNum','istyId','blIssueBy',{name:'blIssueDate',type:'date',dateFormat:DATEF},
	'blIssuePlace','blRemarks','blReceiver',
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
	'packId','packCode','packName',{name:'cargPackageNum',type:'float'},'packSId',{name:'cargPackageSNum',type:'float'},'unitId','unitName',
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
	{name:'tranDeliveryDate',type:'date',dateFormat:DATEF},
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
	'tranDeliveryTime','tranCustomsBroker','tranCustomsBrokerName',
	'tranCustomsContact','tranCustomsTel','tranCustomsAddress',
	'tranContainerCompany','tranContainerCompanyName','tranContainerInfo',
	'tranVessel','tranVoyage','tranSoNo','tranPol','tranPod',
	'tranCyDraw',
	{name:'tranDrawDate',type:'date',dateFormat:DATEF},
	'tranCyBack',
	{name:'tranBackDate',type:'date',dateFormat:DATEF},
	'tranEmptyMiles','tranHeavyMiles',
	'packName','tranTotalPackages',
	'tranTotalGrossWeight',
	'tranTotalMeasurement',
	'tranRemarks','tranStatus',
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
FTransCargo = Ext.data.Record.create(['id','trcaId','consId','tranId','cargId','trcaCargoName','packId','packName','consMblNo',
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
	'cotyId','cotyCode','contFl','packId','packName','contPackageNum','contCargoNameEn',
	'contCargoNameCn','contGrossWeight','contMeasurement','contSocFlag',
	{name:'contLoadDate',type:'date',dateFormat:DATEF},'contAddress','contRemarks',
	'cargTemperature','cargDanagerClass','cargFlashPoint','cargImdgPage','cargUnNo',
	'contVessel','contVoyage','contPol','contPod','contDeliveryPlace',
	'userId','grouId','createBy','modifyBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
FContainerCargo = Ext.data.Record.create(['id',
	'cocaId','cargId','contId','contNo','consId','consNo','consMblNo','consHblNo','consCustName',
	'cocaMarks','cocaCargoName','packId','packName','cocaPackageNum','cocaGrossWeight','cocaMeasurement',
	'userId','grouId','createBy','modifyBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
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
	'fdocCompany','fdocRemark','fdocReturnWay','fdocExpressNo',
	{name:'fdocCustomsFlag',type:'boolean',convert:function(v){return v==1;}},
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
	'cudePol','cudePolEn','cudePod','cudePodEn',
	'cudeRecordNo',
	{name:'cudeEntryDate',type:'date',dateFormat:DATEF},
	{name:'cudeDeclarDate',type:'date',dateFormat:DATEF},
	'cudeCustomer','cudeCargoCompany','cudeShipper','cudeConsignee',
	'tratCode','cudeConveyance','cudeBlNo','trtyCode','letyCode',
	'exseCode','exseCodeEn','usagName','cudeCertificateNo',
	'cudeLevyPercent','cudeApprovalNo','consContractNo','cudeContainerNo',
	'cudeLoadCountry','cudeDischargeCountry',
	'cudePlace','cudePlaceEn','trteCode','trteCodeEn','cudeFreight','cudeInsurance','cudeCharge',
	'cudeTotalSay','cudeTotalAmount','cudeTotalAmountCap',
	'cudePackageNum','cudeNum','packCode','packCodeEn',
	'cudeGrossWeight','cudeNetWeight','cudeMeasurement',
	'cudeManu','cudeMarks','cudeAttachment','cudeTaxLevy','cudeDeclarent','cudeCreator',
	'cudeCompany','cudeCompanyAddress','cudeCompanyZip','cudeCompanyTel',
	{name:'cudeCreateDate',type:'date',dateFormat:DATEF},
	{name:'cudeDocSendDate',type:'date',dateFormat:DATEF},
	{name:'cudeDocRecvDate',type:'date',dateFormat:DATEF},
	{name:'cudeRefundDate',type:'date',dateFormat:DATEF},
	{name:'cudeReleaseDate',type:'date',dateFormat:DATEF},
	{name:'cudeShutoutDate',type:'date',dateFormat:DATEF},
	'cudeDocNum','cudeDocColor','cudeRefundDocNum','cudeType','cudeInvoiceNo','cudeContractNo',
	{name:'cudeInvoiceDate',type:'date',dateFormat:DATEF},
	{name:'cudeContractDate',type:'date',dateFormat:DATEF},
	{name:'cudeTransitedFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'cudeRefundFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'cudeInspectionFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'cudeOpenFlag',type:'boolean',convert:function(v){return v==1;}},
	'cudeStatus','cudeDocStatus','cudeDocReleaseBy',
	{name:'cudeDocReleaseTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'cudeDocReceiver',
	{name:'cudeShipDateF',type:'date',dateFormat:DATEF},
	{name:'cudeShipDateT',type:'date',dateFormat:DATEF},
	{name:'cudeTransFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'cudePartialFlag',type:'boolean',convert:function(v){return v==1;}},
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

FTask= Ext.data.Record.create(['id',
   	'taskId','tatyId','tatyName','tatyDId','tatyDName','consId','consNo','consMasterId','consMasterNo','taskOwner','taskOwnerName',
   	{name:'taskEstimatedDate',type:'date',dateFormat:DATEF},{name:'taskFinishedDate',type:'date',dateFormat:DATEF},
   	'taskFinishedFlag','tatyBizType','tatyBizClass',
   	'active','compCode','version','rowAction']);

/* 北京永顺   集装箱管理 BEGIN*/
FContainerTrace = Ext.data.Record.create(['id',
  	'cotrId','consId','consNo','contNo','contType','contOwner','contOwnerId',
  	'contNum','custFreeDay','custExtendedRate','custExtendedDay','custExtendedFee','tenantFreeDay','tenantExtendedRate',
  	'tenantExtendedFee','tenantExtendedDay','contRemarks','createBy','modifyBy',
  	{name:'consEta',type:'date',dateFormat:DATEF},
  	{name:'consExpiryDate',type:'date',dateFormat:DATEF},
  	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
  	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
  	'compCode','version','rowAction']);


function getVES(){return new Ext.data.Store({url: SERVICE_URL+'?A=VESS_X',reader: new Ext.data.XmlReader({id:'vessId',record:'GVessel'}, GVessel),sortInfo:{field:'vessNameEn', direction:'ASC'}});};
function getVS(){return new Ext.data.Store({url: SERVICE_URL+'?A=VOYA_Q',reader: new Ext.data.XmlReader({record:'GVoyage'},GVoyage),sortInfo:{field:'voyaId',direction:'DESC'}});};

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

var LCLT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['A','内部拼箱'],['B','外部拼箱'],['C','客户自拼']]});
getLCLT = function(v){if(v) return LCLT_S.getById(v).get('NAME'); else return '';};

