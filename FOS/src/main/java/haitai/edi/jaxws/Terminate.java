
package haitai.edi.jaxws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * This class was generated by Apache CXF 2.7.14
 * Mon Jan 26 15:22:03 CST 2015
 * Generated source version: 2.7.14
 */

@XmlRootElement(name = "Terminate", namespace = "http://edi.haitai/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Terminate", namespace = "http://edi.haitai/", propOrder = {"arg0", "arg1"})

public class Terminate {

    @XmlElement(name = "arg0")
    private java.lang.String arg0;
    @XmlElement(name = "arg1")
    private java.util.HashMap<java.lang.String, java.lang.String> arg1;

    public java.lang.String getArg0() {
        return this.arg0;
    }

    public void setArg0(java.lang.String newArg0)  {
        this.arg0 = newArg0;
    }

    public java.util.HashMap<java.lang.String, java.lang.String> getArg1() {
        return this.arg1;
    }

    public void setArg1(java.util.HashMap<java.lang.String, java.lang.String> newArg1)  {
        this.arg1 = newArg1;
    }

}
