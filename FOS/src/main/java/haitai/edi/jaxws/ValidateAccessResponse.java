
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

@XmlRootElement(name = "ValidateAccessResponse", namespace = "http://edi.haitai/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ValidateAccessResponse", namespace = "http://edi.haitai/")

public class ValidateAccessResponse {

    @XmlElement(name = "return")
    private java.lang.String _return;

    public java.lang.String getReturn() {
        return this._return;
    }

    public void setReturn(java.lang.String new_return)  {
        this._return = new_return;
    }

}

