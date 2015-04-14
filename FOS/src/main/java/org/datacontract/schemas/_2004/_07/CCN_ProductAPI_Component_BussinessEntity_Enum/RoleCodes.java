/**
 * RoleCodes.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity_Enum;

public class RoleCodes implements java.io.Serializable {
    private java.lang.String _value_;
    private static java.util.HashMap _table_ = new java.util.HashMap();

    // Constructor
    protected RoleCodes(java.lang.String value) {
        _value_ = value;
        _table_.put(_value_,this);
    }

    public static final java.lang.String _AIR = "AIR";
    public static final java.lang.String _FWD = "FWD";
    public static final java.lang.String _GHA = "GHA";
    public static final java.lang.String _GSA = "GSA";
    public static final java.lang.String _SHP = "SHP";
    public static final java.lang.String _OWN = "OWN";
    public static final java.lang.String _ALL = "ALL";
    public static final RoleCodes AIR = new RoleCodes(_AIR);
    public static final RoleCodes FWD = new RoleCodes(_FWD);
    public static final RoleCodes GHA = new RoleCodes(_GHA);
    public static final RoleCodes GSA = new RoleCodes(_GSA);
    public static final RoleCodes SHP = new RoleCodes(_SHP);
    public static final RoleCodes OWN = new RoleCodes(_OWN);
    public static final RoleCodes ALL = new RoleCodes(_ALL);
    public java.lang.String getValue() { return _value_;}
    public static RoleCodes fromValue(java.lang.String value)
          throws java.lang.IllegalArgumentException {
        RoleCodes enumeration = (RoleCodes)
            _table_.get(value);
        if (enumeration==null) throw new java.lang.IllegalArgumentException();
        return enumeration;
    }
    public static RoleCodes fromString(java.lang.String value)
          throws java.lang.IllegalArgumentException {
        return fromValue(value);
    }
    public boolean equals(java.lang.Object obj) {return (obj == this);}
    public int hashCode() { return toString().hashCode();}
    public java.lang.String toString() { return _value_;}
    public java.lang.Object readResolve() throws java.io.ObjectStreamException { return fromValue(_value_);}
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new org.apache.axis.encoding.ser.EnumSerializer(
            _javaType, _xmlType);
    }
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new org.apache.axis.encoding.ser.EnumDeserializer(
            _javaType, _xmlType);
    }
    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(RoleCodes.class);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity.Enum", "RoleCodes"));
    }
    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

}
