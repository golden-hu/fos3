package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPCompanyBankAccount;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_COMPANY_BANK_ACCOUNT" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PCompanyBankAccount extends AbstractPCompanyBankAccount {

	private static final long serialVersionUID = 8581837692493982405L;
}
