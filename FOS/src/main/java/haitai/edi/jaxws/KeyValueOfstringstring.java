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



@XmlRootElement(name = "KeyValueOfstringstring", namespace = "http://schemas.microsoft.com/2003/10/Serialization/Arrays")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "KeyValueOfstringstring", namespace = "http://schemas.microsoft.com/2003/10/Serialization/Arrays", propOrder = {"key", "value"})

public class KeyValueOfstringstring {

    @XmlElement(namespace = "http://schemas.microsoft.com/2003/10/Serialization/Arrays")
    public java.lang.String key;
    
    @XmlElement(namespace = "http://schemas.microsoft.com/2003/10/Serialization/Arrays")
    public java.lang.String  value;

    public java.lang.String getKey() {
        return this.key;
    }

    public void setKey(java.lang.String key)  {
        this.key = key;
    }

    public java.lang.String getValue() {
        return this.value;
    }

    public void setValue(java.lang.String value)  {
        this.value = value;
    }

}

