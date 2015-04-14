/**
 * DTOPima.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class DTOPima  implements java.io.Serializable {
    private java.lang.String allowedOrigin;

    private java.lang.String globalCompanyID;

    private java.lang.String globalStationID;

    private java.lang.String PIMA;

    private java.lang.String productID;

    public DTOPima() {
    }

    public DTOPima(
           java.lang.String allowedOrigin,
           java.lang.String globalCompanyID,
           java.lang.String globalStationID,
           java.lang.String PIMA,
           java.lang.String productID) {
           this.allowedOrigin = allowedOrigin;
           this.globalCompanyID = globalCompanyID;
           this.globalStationID = globalStationID;
           this.PIMA = PIMA;
           this.productID = productID;
    }


    /**
     * Gets the allowedOrigin value for this DTOPima.
     * 
     * @return allowedOrigin
     */
    public java.lang.String getAllowedOrigin() {
        return allowedOrigin;
    }


    /**
     * Sets the allowedOrigin value for this DTOPima.
     * 
     * @param allowedOrigin
     */
    public void setAllowedOrigin(java.lang.String allowedOrigin) {
        this.allowedOrigin = allowedOrigin;
    }


    /**
     * Gets the globalCompanyID value for this DTOPima.
     * 
     * @return globalCompanyID
     */
    public java.lang.String getGlobalCompanyID() {
        return globalCompanyID;
    }


    /**
     * Sets the globalCompanyID value for this DTOPima.
     * 
     * @param globalCompanyID
     */
    public void setGlobalCompanyID(java.lang.String globalCompanyID) {
        this.globalCompanyID = globalCompanyID;
    }


    /**
     * Gets the globalStationID value for this DTOPima.
     * 
     * @return globalStationID
     */
    public java.lang.String getGlobalStationID() {
        return globalStationID;
    }


    /**
     * Sets the globalStationID value for this DTOPima.
     * 
     * @param globalStationID
     */
    public void setGlobalStationID(java.lang.String globalStationID) {
        this.globalStationID = globalStationID;
    }


    /**
     * Gets the PIMA value for this DTOPima.
     * 
     * @return PIMA
     */
    public java.lang.String getPIMA() {
        return PIMA;
    }


    /**
     * Sets the PIMA value for this DTOPima.
     * 
     * @param PIMA
     */
    public void setPIMA(java.lang.String PIMA) {
        this.PIMA = PIMA;
    }


    /**
     * Gets the productID value for this DTOPima.
     * 
     * @return productID
     */
    public java.lang.String getProductID() {
        return productID;
    }


    /**
     * Sets the productID value for this DTOPima.
     * 
     * @param productID
     */
    public void setProductID(java.lang.String productID) {
        this.productID = productID;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DTOPima)) return false;
        DTOPima other = (DTOPima) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.allowedOrigin==null && other.getAllowedOrigin()==null) || 
             (this.allowedOrigin!=null &&
              this.allowedOrigin.equals(other.getAllowedOrigin()))) &&
            ((this.globalCompanyID==null && other.getGlobalCompanyID()==null) || 
             (this.globalCompanyID!=null &&
              this.globalCompanyID.equals(other.getGlobalCompanyID()))) &&
            ((this.globalStationID==null && other.getGlobalStationID()==null) || 
             (this.globalStationID!=null &&
              this.globalStationID.equals(other.getGlobalStationID()))) &&
            ((this.PIMA==null && other.getPIMA()==null) || 
             (this.PIMA!=null &&
              this.PIMA.equals(other.getPIMA()))) &&
            ((this.productID==null && other.getProductID()==null) || 
             (this.productID!=null &&
              this.productID.equals(other.getProductID())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getAllowedOrigin() != null) {
            _hashCode += getAllowedOrigin().hashCode();
        }
        if (getGlobalCompanyID() != null) {
            _hashCode += getGlobalCompanyID().hashCode();
        }
        if (getGlobalStationID() != null) {
            _hashCode += getGlobalStationID().hashCode();
        }
        if (getPIMA() != null) {
            _hashCode += getPIMA().hashCode();
        }
        if (getProductID() != null) {
            _hashCode += getProductID().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DTOPima.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "DTOPima"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("allowedOrigin");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "AllowedOrigin"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("globalCompanyID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "GlobalCompanyID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("globalStationID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "GlobalStationID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PIMA");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "PIMA"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("productID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "ProductID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
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
