
package haitai.edi.jaxws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**import javax.xml.bind.annotation.XmlType;
 * This class was generated by Apache CXF 2.7.14
 * Mon Apr 20 20:24:07 CST 2015
 * Generated source version: 2.7.14
 */

@XmlRootElement(name = "Activate", namespace = "http://tempuri.org/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Activate", namespace = "http://tempuri.org/", propOrder = {"accountID", "JSONKeyValuePair"})

public class Activate {

    @XmlElement(name = "accountID", namespace = "http://tempuri.org/")
    public java.lang.String accountID;
    
    @XmlElement(name = "JSONKeyValuePair", namespace="http://tempuri.org/")   
    public String JSONKeyValuePair;

    public java.lang.String getAccountID() {
        return this.accountID;
    }

    public void setAccountID(java.lang.String newAccountID)  {
        this.accountID = newAccountID;
    }

    public java.lang.String getJSONKeyValuePair() {
        return this.JSONKeyValuePair;
    }

    public void setKeyValuePair(java.lang.String JSONKeyValuePair)  {
        this.JSONKeyValuePair = JSONKeyValuePair;
    }

}

