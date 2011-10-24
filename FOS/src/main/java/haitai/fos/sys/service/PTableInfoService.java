package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPTableInfoDAO;
import haitai.fos.sys.entity.table.PTableInfo;
import haitai.fw.util.ConstUtil;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class PTableInfoService implements InitializingBean {
	@Autowired
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
		return tableInfoMap.get(tableName + ConstUtil.STRING_SHARP + fieldType);
	}

	public boolean contain(String tableName) {
		return tableSet.contains(tableName);
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		List<PTableInfo> list = dao.findAll();
		for (PTableInfo tableInfo : list) {
			tableSet.add(tableInfo.getTainTableName());
			tableInfoMap.put(tableInfo.getTainTableName() + ConstUtil.STRING_SHARP + tableInfo.getTainFieldType(),
					tableInfo.getTainFieldName());
		}
	}
}
