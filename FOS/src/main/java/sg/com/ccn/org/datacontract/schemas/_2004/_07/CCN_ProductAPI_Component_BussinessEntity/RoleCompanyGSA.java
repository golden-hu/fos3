/**
 * RoleCompanyGSA.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class RoleCompanyGSA  extends sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.ProfileCompanyRole  implements java.io.Serializable {
    private sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.GSACompanyAirline[] GSACompanyAirlines;

    public RoleCompanyGSA() {
    }

    public RoleCompanyGSA(
           java.lang.String companyCode,
           java.lang.String companyName1,
           java.lang.String companyName2,
           java.lang.String globalCompanyID,
           sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.GSACompanyAirline[] GSACompanyAirlines) {
        super(
            companyCode,
            companyName1,
            companyName2,
            globalCompanyID);
        this.GSACompanyAirlines = GSACompanyAirlines;
    }


    /**
     * Gets the GSACompanyAirlines value for this RoleCompanyGSA.
     * 
     * @return GSACompanyAirlines
     */
    public sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.GSACompanyAirline[] getGSACompanyAirlines() {
        return GSACompanyAirlines;
    }


    /**
     * Sets the GSACompanyAirlines value for this RoleCompanyGSA.
     * 
     * @param GSACompanyAirlines
     */
    public void setGSACompanyAirlines(sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.GSACompanyAirline[] GSACompanyAirlines) {
        this.GSACompanyAirlines = GSACompanyAirlines;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof RoleCompanyGSA)) return false;
        RoleCompanyGSA other = (RoleCompanyGSA) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.GSACompanyAirlines==null && other.getGSACompanyAirlines()==null) || 
             (this.GSACompanyAirlines!=null &&
              java.util.Arrays.equals(this.GSACompanyAirlines, other.getGSACompanyAirlines())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = super.hashCode();
        if (getGSACompanyAirlines() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getGSACompanyAirlines());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getGSACompanyAirlines(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(RoleCompanyGSA.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "RoleCompanyGSA"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("GSACompanyAirlines");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "GSACompanyAirlines"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "GSACompanyAirline"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        elemField.setItemQName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "GSACompanyAirline"));
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
