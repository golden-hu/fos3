package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPTableInfoDAO;
import haitai.fos.sys.entity.table.PTableInfo;
import haitai.fw.util.ConstUtil;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PTableInfoService {
	
	private IPTableInfoDAO dao = null;
	private Map<String, String> tableInfoMap = new ConcurrentHashMap<String, String>();
	private Set<String> tableSet = new HashSet<String>();
	
	public String getId(String tableName) {
		return getFieldName(tableName, ConstUtil.TABLE_FIELD_TYPE_ID);
	}
	
	public String getNo(String tableName) {
		return getFieldName(tableName, ConstUtil.TABLE_FIELD_TYPE_NO);
	}
	
	public String getFieldName(String tableName, String fieldType) {
		if(tableInfoMap.size() == 0) {
			init();
		}
		return tableInfoMap.get(tableName + ConstUtil.STRING_SHARP + fieldType); 
	}
	
	public boolean constains(String tableName) {
		if(tableSet.size() == 0) {
			init();
		}
		return tableSet.contains(tableName);
	}

	private synchronized void init() {
		List<PTableInfo> list = dao.findAll();
		for (PTableInfo tableInfo : list) {
			tableSet.add(tableInfo.getTainTableName());
			tableInfoMap.put(tableInfo.getTainTableName()
					+ ConstUtil.STRING_SHARP + tableInfo.getTainFieldType(),
					tableInfo.getTainFieldName());
		}
	}

	public IPTableInfoDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IPTableInfoDAO dao) {
		this.dao = dao;
	}
}
