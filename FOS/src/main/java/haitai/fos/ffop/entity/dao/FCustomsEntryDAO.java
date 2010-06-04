package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFCustomsEntryDAO;
import haitai.fos.ffop.entity.table.FCustomsEntry;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FCustomsEntryDAO extends GenericDAO<FCustomsEntry, Integer> implements IFCustomsEntryDAO {

	public FCustomsEntryDAO() {
		super(FCustomsEntry.class);
	}
}
