
package haitai.edi.jaxws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * This class was generated by Apache CXF 2.7.14
 * Mon Apr 20 20:24:07 CST 2015
 * Generated source version: 2.7.14
 */

@XmlRootElement(name = "UnSuspend", namespace = "http://edi.haitai/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "UnSuspend", namespace = "http://edi.haitai/", propOrder = {"accountID", "keyValuePair"})

public class UnSuspend {

    @XmlElement(name = "accountID")
    private java.lang.String accountID;
    @XmlElement(name = "keyValuePair")
    private java.util.HashMap<java.lang.String, java.lang.String> keyValuePair;

    public java.lang.String getAccountID() {
        return this.accountID;
    }

    public void setAccountID(java.lang.String newAccountID)  {
        this.accountID = newAccountID;
    }

    public java.util.HashMap<java.lang.String, java.lang.String> getKeyValuePair() {
        return this.keyValuePair;
    }

    public void setKeyValuePair(java.util.HashMap<java.lang.String, java.lang.String> newKeyValuePair)  {
        this.keyValuePair = newKeyValuePair;
    }

}

