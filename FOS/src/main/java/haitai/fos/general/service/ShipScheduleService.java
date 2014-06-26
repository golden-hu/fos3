package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IShipScheduleDAO;
import haitai.fos.general.entity.table.ShipSchedule;
import haitai.fw.entity.FosQuery;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.RowAction;

import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

@Service
public class ShipScheduleService {
	@Autowired
	private IShipScheduleDAO dao;
	
	@Transactional
	public void save(List<ShipSchedule> itemList) {
		for (ShipSchedule entity : itemList) {
			String vesselName = entity.getVesselName();
			String voyage = entity.getVoyage();
			Map<String,Object> qmap = new HashMap<String,Object>();
			qmap.put("vesselName", vesselName);
			qmap.put("voyage", voyage);			
			List<ShipSchedule> sList = dao.findByProperties(qmap);
			if(sList.size()>0){
				ShipSchedule s = sList.get(0);
				s.setActualBerth(entity.getActualBerth());
				s.setActualBerthing(entity.getActualBerthing());
				s.setActualUnberthing(entity.getActualUnberthing());
				s.setCutOff(entity.getCutOff());
				s.setIsExport(entity.getIsExport());
				s.setIsLate(entity.getIsLate());
				s.setPlanningBerth(entity.getPlanningBerth());
				s.setPlanningBerthing(entity.getPlanningBerthing());
				s.setPlanningUnberthing(entity.getPlanningUnberthing());
				s.setSource(entity.getSource());
				s.setStatus(entity.getStatus());
				s.setVesselName(entity.getVesselName());
				s.setVesselNameCn(entity.getVesselNameCn());
				s.setVoyage(entity.getVoyage());
				s.setRowAction(RowAction.M);
				dao.update(s);
			}
			else{
				entity.setRowAction(RowAction.N);
				dao.save(entity);
			}
				
		}
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<ShipSchedule> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@Transactional
	public List<ShipSchedule> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
	
	@Transactional
	public void loadContainerSchedule() {
		String sendUrl = "http://www.wangbaby19.com/LoadingSchedule.ashx?KEY=hiti";
		try {
			URL httpurl = new URL(sendUrl);
			URLConnection connection = (URLConnection) httpurl.openConnection();		  
			InputStream inputStream = connection.getInputStream();
			
			DocumentBuilderFactory factory=DocumentBuilderFactory.newInstance(); 
			DocumentBuilder builder=factory.newDocumentBuilder(); 
			
			Document doc = builder.parse(inputStream) ;
			
			List<ShipSchedule> itemList = new ArrayList<ShipSchedule>();
			
			NodeList nl = doc.getElementsByTagName("ContainerLoadingSchedule"); 
			int len = nl.getLength();
			if(len>200)
				len = 200;
			
			for (int i=0;i<len;i++){ 
				Node n = nl.item(i);
				if (n.getNodeType() == Node.ELEMENT_NODE) {					
			    	Element scheduleElement = (Element) n;
			    	Element VesselName =  (Element) scheduleElement.getElementsByTagName("VesselName").item(0);
			    	String vesselName = "";			    	
			    	if(VesselName != null)
			    		vesselName = VesselName.getTextContent();
			    	
			    	Element VesselNameCN =  (Element) scheduleElement.getElementsByTagName("VesselNameCN").item(0);
			    	String vesselNameCN = "";			
			    	if(VesselNameCN != null)
			    		vesselNameCN = VesselNameCN.getTextContent();
			    	
			        Element Voyage =  (Element) scheduleElement.getElementsByTagName("Voyage").item(0);	
			        String voyage = "";
			        if(Voyage != null)
			        	voyage = Voyage.getTextContent();
			        
			        Element LoadingTime =  (Element) scheduleElement.getElementsByTagName("LoadingTime").item(0);	
			        String loadingTime = "";
			        if(LoadingTime != null)
			        	loadingTime = LoadingTime.getTextContent();
			        
			        Element CutDate =  (Element) scheduleElement.getElementsByTagName("CutDate").item(0);
			        String cutDate = "";
			        if(CutDate != null)
			        	cutDate = CutDate.getTextContent();
			        
			        Element PortArea =  (Element) scheduleElement.getElementsByTagName("PortArea").item(0);	
			        String portArea = "";
			        if(PortArea != null)
			        	portArea = PortArea.getTextContent();
			        
			        Element ShippingAgency =  (Element) scheduleElement.getElementsByTagName("ShippingAgency").item(0);
			        String shippingAgency = "";
			        if(ShippingAgency != null)
			        	shippingAgency = ShippingAgency.getTextContent();
			       
			    	String[] voyaArr = voyage.split("/");
			    	for(int j=0;j<voyaArr.length;j++){
			    		String v = voyaArr[j];
			    		Map<String,Object> qmap = new HashMap<String,Object>();
						qmap.put("vesselName", vesselName);
						qmap.put("voyage", v);
						List<ShipSchedule> sList = dao.findByProperties(qmap);
						if(sList.size()>0){
							ShipSchedule s = sList.get(0);
							s.setLoadingTime(loadingTime);
							s.setCutDate(cutDate);
							s.setPortArea(portArea);
							s.setShippingAgency(shippingAgency);
							s.setRowAction(RowAction.M);
							dao.update(s);
						}
						else{
							ShipSchedule s = new ShipSchedule();
							s.setVesselName(vesselName);
							s.setVesselNameCn(vesselNameCN);
							s.setVoyage(v);
							s.setLoadingTime(loadingTime);
							s.setCutDate(cutDate);
							s.setPortArea(portArea);
							s.setShippingAgency(shippingAgency);
							s.setRowAction(RowAction.N);
							dao.save(s);
						}
			    	}
				}
			}
				
			SessionManager.regSession(new MockHttpSession());
			SessionManager.setAttr(SessionKeyType.ACTNAME, ConstUtil.ACT_DAEMON);
			save(itemList);
			SessionManager.unregSession();
		} 
		catch (Exception e) {
			e.printStackTrace();
		} 
	}
	
	
	@Transactional
	public void loadSchedule() {
		String sendUrl = "http://www.wangbaby19.com/ShipSchedule.ashx?KEY=hiti";
		try {
			URL httpurl = new URL(sendUrl);
			URLConnection connection = (URLConnection) httpurl.openConnection();		  
			InputStream inputStream = connection.getInputStream();
			
			DocumentBuilderFactory factory=DocumentBuilderFactory.newInstance(); 
			DocumentBuilder builder=factory.newDocumentBuilder(); 
			
			Document doc = builder.parse(inputStream) ;
			
			List<ShipSchedule> itemList = new ArrayList<ShipSchedule>();
			
			NodeList nl = doc.getElementsByTagName("ShipSchedule"); 
			int len = nl.getLength();
			if(len>200)
				len = 200;
			
			for (int i=0;i<len;i++){ 
				Node n = nl.item(i);
				if (n.getNodeType() == Node.ELEMENT_NODE) {
					ShipSchedule s = new ShipSchedule();
			    	Element scheduleElement = (Element) n;
			    	Element vesselName =  (Element) scheduleElement.getElementsByTagName("VesselName").item(0);
			    	if(vesselName != null)
			    		s.setVesselName(vesselName.getTextContent());
			        
			    	Element vesselNameCN =  (Element) scheduleElement.getElementsByTagName("VesselNameCN").item(0);
			    	if(vesselNameCN != null)
			    		s.setVesselNameCn(vesselNameCN.getTextContent());
			    	
			        Element voyageName =  (Element) scheduleElement.getElementsByTagName("Voyage").item(0);
			        if(voyageName != null)
			        	s.setVoyage(voyageName.getTextContent());
			       
			        Element planningUnberthing =  (Element) scheduleElement.getElementsByTagName("PlanningUnberthing").item(0);
			        if(planningUnberthing != null)
			        	s.setPlanningUnberthing(planningUnberthing.getTextContent());
			        
			        Element actualUnberthing =  (Element) scheduleElement.getElementsByTagName("ActualUnberthing").item(0);
			        if(actualUnberthing != null)
			        	s.setPlanningUnberthing(actualUnberthing.getTextContent());
			        
			        Element planningBerthing =  (Element) scheduleElement.getElementsByTagName("PlanningBerthing").item(0);
			        if(planningBerthing != null)
			        	s.setPlanningBerthing(planningBerthing.getTextContent());
			        
			        Element actualBerthing =  (Element) scheduleElement.getElementsByTagName("ActualBerthing").item(0);
			        if(actualBerthing != null)
			        	s.setActualBerthing(actualBerthing.getTextContent());
			        
			        Element PlanningBerth =  (Element) scheduleElement.getElementsByTagName("PlanningBerth").item(0);
			        if(PlanningBerth != null)
			        	s.setPlanningBerth(PlanningBerth.getTextContent());
			        
			        Element isExport =  (Element) scheduleElement.getElementsByTagName("isExport").item(0);
			        if(isExport != null)
			        	s.setIsExport(isExport.getTextContent());
			        
			        Element isLate =  (Element) scheduleElement.getElementsByTagName("isLate").item(0);
			        if(isLate != null)
			        	s.setIsLate(isLate.getTextContent());
			        
			        Element CutOff =  (Element) scheduleElement.getElementsByTagName("CutOff").item(0);
			        if(CutOff != null)
			        	s.setCutOff(CutOff.getTextContent());
			        
			        Element Source =  (Element) scheduleElement.getElementsByTagName("Source").item(0);
			        if(Source != null)
			        	s.setSource(Source.getTextContent());
			        
			        Element Status =  (Element) scheduleElement.getElementsByTagName("Status").item(0);
			        if(Status != null)
			        	s.setStatus(Status.getTextContent());
			        
			        itemList.add(s);
				}
			}
				
			SessionManager.regSession(new MockHttpSession());
			SessionManager.setAttr(SessionKeyType.ACTNAME, ConstUtil.ACT_DAEMON);
			save(itemList);
			
			loadContainerSchedule();
			
			SessionManager.unregSession();
		} 
		catch (Exception e) {
			e.printStackTrace();
		} 
	}
}
