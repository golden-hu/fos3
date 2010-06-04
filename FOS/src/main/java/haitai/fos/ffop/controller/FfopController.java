package haitai.fos.ffop.controller;

import haitai.fos.ffop.entity.table.FBl;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FContainer;
import haitai.fos.ffop.entity.table.FContract;
import haitai.fos.ffop.entity.table.FCustomsDeclaration;
import haitai.fos.ffop.entity.table.FDoc;
import haitai.fos.ffop.entity.table.FInspection;
import haitai.fos.ffop.entity.table.FLoadingList;
import haitai.fos.ffop.entity.table.FPackingList;
import haitai.fos.ffop.entity.table.FReassign;
import haitai.fos.ffop.entity.table.FTask;
import haitai.fos.ffop.entity.table.FTrans;
import haitai.fos.ffop.entity.table.FTransList;
import haitai.fos.ffop.entity.table.FWarehouse;
import haitai.fos.ffop.service.FBlService;
import haitai.fos.ffop.service.FCargoService;
import haitai.fos.ffop.service.FConsignService;
import haitai.fos.ffop.service.FContainerCargoService;
import haitai.fos.ffop.service.FContainerService;
import haitai.fos.ffop.service.FContractService;
import haitai.fos.ffop.service.FCustomsDeclarationService;
import haitai.fos.ffop.service.FDoService;
import haitai.fos.ffop.service.FDocService;
import haitai.fos.ffop.service.FInspectionService;
import haitai.fos.ffop.service.FLoadingListService;
import haitai.fos.ffop.service.FPackingListService;
import haitai.fos.ffop.service.FRailwayBlService;
import haitai.fos.ffop.service.FReassignService;
import haitai.fos.ffop.service.FSecondShipService;
import haitai.fos.ffop.service.FTaskService;
import haitai.fos.ffop.service.FTransListService;
import haitai.fos.ffop.service.FTransService;
import haitai.fos.ffop.service.FWarehouseService;
import haitai.fw.entity.FosQuery;

import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("FfopController")
public class FfopController {
	private FConsignService consignService;
	private FContainerService containerService;
	private FContainerCargoService containerCargoService;
	private FBlService blService;
	private FTransService transService;
	private FWarehouseService warehouseService;
	private FInspectionService inspectionService;
	private FCustomsDeclarationService customsDeclarationService;
	private FCargoService cargoService;
	private FDoService doService;
	private FSecondShipService secondShipService;
	private FRailwayBlService railwayBlService;
	private FDocService docService;
	private FReassignService reassignService;
	private FContractService contractService;
	private FLoadingListService loadingListService;
	private FPackingListService packingListService;
	private FTransListService transListService;
	private FTaskService taskService;
	
	/**
	 * Consign save (create, update, delete)
	 * @param entityList
	 * @return
	 * @throws InvocationTargetException 
	 * @throws IllegalAccessException 
	 */
	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List<FConsign> entityList) throws IllegalAccessException, InvocationTargetException{
		return consignService.save(entityList);
	}
	
	/**
	 * Consign query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List query(Map<String, Object> queryMap){
		return consignService.query(queryMap);
	}
	
	/**
	 * update the consign status
	 * @param queryMap
	 */
	@Transactional
	public void updateConsignStatusById(Map<String, Object> queryMap){
		consignService.updateStatusById(queryMap);
	}
	
	/**
	 * update the booking status of consign
	 * @param queryMap
	 */
	@Transactional
	public void updateConsignStatusBookById(Map<String, Object> queryMap){
		consignService.updateStatusBookById(queryMap);
	}

	@Transactional
	public List<FConsign> queryConsignByCargoId(Map<String, Object> queryMap){
		return consignService.queryByCargoId(queryMap);
	}
	
	@Transactional
	public List<FConsign> queryConsignByBlId(Map<String, Object> queryMap){
		return consignService.queryByBlId(queryMap);
	}
	/**
	 * Container save
	 * @param entityList
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveContainer(List<FContainer> entityList){
		return containerService.save(entityList);
	}
	
	/**
	 * Container query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryContainer(Map<String, Object> queryMap){
		return containerService.query(queryMap);
	}
	
	/**
	 * BL save
	 * @param entityList
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveBl(List<FBl> entityList){
		return blService.save(entityList);
	}
	
	/**
	 * BL query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryBl(Map<String, Object> queryMap){
		return blService.query(queryMap);
	}
	
	/**
	 * update the status of BL, and update the BL status(MBL, FBL) of Consign 
	 * @param queryMap
	 */
	@Transactional
	public void updateBlStatusById(Map<String, Object> queryMap){
		blService.updateStatusById(queryMap);
		
		String blType = (String) queryMap.get("blType");
		if("M/BL".equalsIgnoreCase(blType)){
			consignService.updateMblStatusById(queryMap);
		}else if("F/BL".equalsIgnoreCase(blType)){
			consignService.updateFblStatusById(queryMap);
		}
	}

	@SuppressWarnings("unchecked")
	public List mergeBl(List<FBl> entityList){
		return blService.merge(entityList);
	}

	public void canCelMergeBl(Map<String, Object> queryMap){
		blService.cancelMerge(queryMap);
	}

	public void canCelSplitBl(Map<String, Object> queryMap){
		blService.cancelSplit(queryMap);
	}
	
	/**
	 * FTrans save
	 * @param entityList
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveTrans(List<FTrans> entityList){
		return transService.save(entityList);
	}
	
	/**
	 * FTrans query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryTrans(Map<String, Object> queryMap){
		return transService.query(queryMap);
	}

	/**
	 * FTransTask query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryTransTask(Map<String, Object> queryMap){
		return transService.queryTask(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryTransCargo(Map<String, Object> queryMap){
		return transService.queryCargo(queryMap);
	}
	
	/**
	 * FWarehouse save
	 * @param entityList
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveWarehouse(List<FWarehouse> entityList){
		return warehouseService.save(entityList);
	}
	
	/**
	 * FWarehouse query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryWarehouse(Map<String, Object> queryMap){
		return warehouseService.query(queryMap);
	}

	/**
	 * FTransTask query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryWarehouseCargo(Map<String, Object> queryMap){
		return warehouseService.queryCargo(queryMap);
	}
	
	/**
	 * FInspection save
	 * @param entityList
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveInspection(List<FInspection> entityList){
		return inspectionService.save(entityList);
	}
	
	/**
	 * FInspection query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryInspection(Map<String, Object> queryMap){
		return inspectionService.query(queryMap);
	}

	/**
	 * FInspectionDoc query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryInspectionDoc(Map<String, Object> queryMap){
		return inspectionService.queryDoc(queryMap);
	}

	@Transactional
	public void updateInspectionDocStatus(Map<String, Object> queryMap){
		inspectionService.updateDocStatus(queryMap);
	}
	
	/**
	 * FCustomsDeclaration save
	 * @param entityList
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveCustomsDeclaration(List entityList){
		return customsDeclarationService.save(entityList);
	}
	
	/**
	 * FCustomsDeclaration query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryCustomsDeclaration(Map<String, Object> queryMap){
		return customsDeclarationService.query(queryMap);
	}

	/**
	 * FCustomsDoc query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryCustomsDoc(Map<String, Object> queryMap){
		return customsDeclarationService.queryDoc(queryMap);
	}


	/**
	 * FCustomsEntry query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryCustomsEntry(Map<String, Object> queryMap){
		return customsDeclarationService.queryEntry(queryMap);
	}

	/**
	 * FCargo save
	 * @param entityList
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveCargo(List entityList){
		return cargoService.save(entityList);
	}
	
	/**
	 * FCargo query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryCargo(Map<String, Object> queryMap){
		return cargoService.query(queryMap);
	}
	
	/**
	 * FDo query
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryDo(Map<String, Object> queryMap){
		return doService.query(queryMap);
	}
	
	@Transactional(readOnly=true)
	public void updateDoStatus(Map<String, Object> queryMap){
		doService.updateStatus(queryMap);
	}
	
	@Transactional
	public void updateCustomsDeclarationStatus(Map<String, Object> queryMap){
		customsDeclarationService.updateStatus(queryMap);
	}
	
	@Transactional
	public void updateCustomsDocStatus(Map<String, Object> queryMap){
		customsDeclarationService.updateDocStatus(queryMap);
	}
	
	@Transactional
	public void updateInspectionStatus(Map<String, Object> queryMap){
		inspectionService.updateStatus(queryMap);
	}
	
	@Transactional
	public void updateRailwayBlStatus(Map<String, Object> queryMap){
		railwayBlService.updateStatus(queryMap);
	}
	
	@Transactional
	public void updateTransStatus(Map<String, Object> queryMap){
		transService.updateStatus(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveContainerCargo(List entityList){
		return containerCargoService.save(entityList);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryContainerCargo(Map<String, Object> queryMap){
		return containerCargoService.query(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveSecondShip(List entityList){
		return secondShipService.save(entityList);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List querySecondShip(Map<String, Object> queryMap){
		return secondShipService.query(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveRailwayBl(List entityList){
		return railwayBlService.save(entityList);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryRailwayBl(Map<String, Object> queryMap){
		return railwayBlService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveDoc(List entityList){
		return docService.save(entityList);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryDoc(Map<String, Object> queryMap){
		return docService.query(queryMap);
	}

	@Transactional
	public void updateDocStatus(Map<String, Object> queryMap) {
		docService.updateStatus(queryMap);
	}

	@Transactional
	public void updateConsMasterNo(Map<String, Object> queryMap) {
		consignService.updateConsMasterNo(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List queryCargoByConsMasterId(Map<String, Object> queryMap){
		return cargoService.queryCargoByConsMasterId(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List<FReassign> saveReassign(List entityList){
		return reassignService.save(entityList);
	}
	
	@Transactional(readOnly=true)
	public List<FReassign> queryReassign(Map<String, Object> queryMap){
		return reassignService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List<FContract> saveContract(List entityList){
		return contractService.save(entityList);
	}
	
	@Transactional(readOnly=true)
	public List<FContract> queryContract(Map<String, Object> queryMap){
		return contractService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List<FLoadingList> saveLoadingList(List entityList){
		return loadingListService.save(entityList);
	}
	
	@Transactional(readOnly=true)
	public List<FLoadingList> queryLoadingList(Map<String, Object> queryMap){
		return loadingListService.query(queryMap);
	}
	
	@Transactional(readOnly=true)
	public List<Object> queryVoyageAndLoadingList(Map<String, Object> queryMap){
		return loadingListService.queryVoyageAndLoadingList(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List<FPackingList> savePackingList(List entityList){
		return packingListService.save(entityList);
	}
	
	@Transactional(readOnly=true)
	public List<FPackingList> queryPackingList(Map<String, Object> queryMap){
		return packingListService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List<FTransList> saveTransList(List entityList){
		return transListService.save(entityList);
	}
	
	@Transactional(readOnly=true)
	public List<FTransList> queryTransList(Map<String, Object> queryMap){
		return transListService.query(queryMap);
	}

	@Transactional
	public List<FTask> saveTask(List<FTask> entityList){
		return taskService.save(entityList);
	}
	
	@Transactional(readOnly=true)
	public List<FTask> queryTask(Map<String, Object> queryMap){
		return taskService.query(queryMap);
	}
		
	/**
	 * 委托综合查询
	 * @param conditions
	 * @param queryMap
	 * @return
	 */
	@Transactional(readOnly=true)
	public List<FConsign> complexQueryConsign(List<FosQuery> conditions, Map<String, Object> queryMap){
		return consignService.complexQuery(conditions, queryMap);
	}

	@Transactional(readOnly=true)
	public List<FBl> complexQueryBl(List<FosQuery> conditions, Map<String, Object> queryMap){
		return blService.complexQuery(conditions, queryMap);
	}

	@Transactional(readOnly = true)
	public List<FCustomsDeclaration> complexQueryCustomsDeclaration(
			List<FosQuery> conditions, Map<String, Object> queryMap) {
		return customsDeclarationService.complexQuery(conditions, queryMap);
	}

	@Transactional(readOnly = true)
	public List<Object> complexQueryContainerByVoyageId(
			Map<String, Object> queryMap) {
		return containerService.complexQueryByVoyaId(queryMap);
	}

	@Transactional(readOnly = true)
	public List<FContract> complexQueryContract(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return contractService.complexQuery(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryPlaceByContract(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return contractService.complexQueryPlace(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryContractByVoyaId(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return contractService.complexQueryByVoyaId(conditions, queryMap);
	}

	/**
	 * 委托综合查询(根据箱号)
	 * @param conditions
	 * @param queryMap
	 * @return
	 */
	@Transactional(readOnly=true)
	public List<FConsign> complexQueryConsignByContNo(
			List<FosQuery> conditions, Map<String, Object> queryMap) {
		return consignService.complexQueryByContNo(conditions, queryMap);
	}

	/**
	 * 单票审核综合查询
	 * @param conditions
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List complexQueryCheck(
			List<FosQuery> conditions, Map<String, Object> queryMap) {
		return consignService.complexQueryCheck(conditions, queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List complexQueryTask(
			List<FosQuery> conditions, Map<String, Object> queryMap) {
		return consignService.complexQueryTask(conditions, queryMap);
	}
	
	@Transactional(readOnly=true)
	public List<FDoc> complexQueryDoc(List<FosQuery> conditions, Map<String, Object> queryMap){
		return docService.complexQuery(conditions, queryMap);
	}
	
	@Transactional(readOnly=true)
	public List<FPackingList> complexQueryPackingList(List<FosQuery> conditions, Map<String, Object> queryMap){
		return packingListService.complexQuery(conditions, queryMap);
	}
	
	@Transactional
	public void updateSailDate(Map<String, Object> queryMap){
		consignService.updateSailDate(queryMap);
	}

	public FConsignService getConsignService() {
		return consignService;
	}

	@Autowired
	public void setConsignService(FConsignService consignService) {
		this.consignService = consignService;
	}

	public FContainerService getContainerService() {
		return containerService;
	}

	@Autowired
	public void setContainerService(FContainerService containerService) {
		this.containerService = containerService;
	}

	public FBlService getBlService() {
		return blService;
	}

	@Autowired
	public void setBlService(FBlService blService) {
		this.blService = blService;
	}

	public FTransService getTransService() {
		return transService;
	}

	@Autowired
	public void setTransService(FTransService transService) {
		this.transService = transService;
	}

	public FWarehouseService getWarehouseService() {
		return warehouseService;
	}

	@Autowired
	public void setWarehouseService(FWarehouseService warehouseService) {
		this.warehouseService = warehouseService;
	}

	public FInspectionService getInspectionService() {
		return inspectionService;
	}

	@Autowired
	public void setInspectionService(FInspectionService inspectionService) {
		this.inspectionService = inspectionService;
	}

	public FCustomsDeclarationService getCustomsDeclarationService() {
		return customsDeclarationService;
	}

	@Autowired
	public void setCustomsDeclarationService(
			FCustomsDeclarationService customsDeclarationService) {
		this.customsDeclarationService = customsDeclarationService;
	}

	public FCargoService getCargoService() {
		return cargoService;
	}

	@Autowired
	public void setCargoService(FCargoService cargoService) {
		this.cargoService = cargoService;
	}

	public FDoService getDoService() {
		return doService;
	}

	@Autowired
	public void setDoService(FDoService doService) {
		this.doService = doService;
	}

	public FContainerCargoService getContainerCargoService() {
		return containerCargoService;
	}

	@Autowired
	public void setContainerCargoService(
			FContainerCargoService containerCargoService) {
		this.containerCargoService = containerCargoService;
	}

	public FSecondShipService getSecondShipService() {
		return secondShipService;
	}

	@Autowired
	public void setSecondShipService(FSecondShipService secondShipService) {
		this.secondShipService = secondShipService;
	}

	public FRailwayBlService getRailwayBlService() {
		return railwayBlService;
	}

	@Autowired
	public void setRailwayBlService(FRailwayBlService railwayBlService) {
		this.railwayBlService = railwayBlService;
	}

	public FDocService getDocService() {
		return docService;
	}

	@Autowired
	public void setDocService(FDocService docService) {
		this.docService = docService;
	}

	public FReassignService getReassignService() {
		return reassignService;
	}

	@Autowired
	public void setReassignService(FReassignService reassignService) {
		this.reassignService = reassignService;
	}

	public FContractService getContractService() {
		return contractService;
	}

	@Autowired
	public void setContractService(FContractService contractService) {
		this.contractService = contractService;
	}

	public FLoadingListService getLoadingListService() {
		return loadingListService;
	}

	@Autowired
	public void setLoadingListService(FLoadingListService loadingListService) {
		this.loadingListService = loadingListService;
	}

	public FPackingListService getPackingListService() {
		return packingListService;
	}

	@Autowired
	public void setPackingListService(FPackingListService packingListService) {
		this.packingListService = packingListService;
	}

	public FTransListService getTransListService() {
		return transListService;
	}

	@Autowired
	public void setTransListService(FTransListService transListService) {
		this.transListService = transListService;
	}

	public FTaskService getTaskService() {
		return taskService;
	}

	@Autowired
	public void setTaskService(FTaskService taskService) {
		this.taskService = taskService;
	}


}
