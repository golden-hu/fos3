
package haitai.edi.jaxws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * This class was generated by Apache CXF 2.7.14
 * Mon Apr 20 20:24:06 CST 2015
 * Generated source version: 2.7.14
 */

@XmlRootElement(name = "Suspend", namespace = "http://tempuri.org/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Suspend", namespace = "http://tempuri.org/", propOrder = {"accountID", "keyValuePair"})

public class Suspend {

    @XmlElement(name = "accountID" , namespace = "http://tempuri.org/")
    private java.lang.String accountID;
    
    @XmlElement(name = "keyValuePair", namespace = "http://tempuri.org/")
    private java.util.ArrayList<KeyValueOfstringstring> keyValuePair;

    public java.lang.String getAccountID() {
        return this.accountID;
    }

    public void setAccountID(java.lang.String newAccountID)  {
        this.accountID = newAccountID;
    }

    public java.util.ArrayList<KeyValueOfstringstring> getKeyValuePair() {
        return this.keyValuePair;
    }

    public void setKeyValuePair(java.util.ArrayList<KeyValueOfstringstring> newKeyValuePair)  {
        this.keyValuePair = newKeyValuePair;
    }

}

