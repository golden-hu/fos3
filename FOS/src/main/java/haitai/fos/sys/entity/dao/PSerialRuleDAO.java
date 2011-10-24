package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPSerialRuleDAO;
import haitai.fos.sys.entity.table.PSerialRule;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component("PSerialRuleDAO")
public class PSerialRuleDAO extends GenericDAO<PSerialRule, Integer> implements IPSerialRuleDAO {

	public PSerialRuleDAO() {
		super(PSerialRule.class);
	}
}
