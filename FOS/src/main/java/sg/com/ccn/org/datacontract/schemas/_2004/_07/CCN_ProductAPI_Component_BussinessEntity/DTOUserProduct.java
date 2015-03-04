/**
 * DTOUserProduct.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class DTOUserProduct  implements java.io.Serializable {
    private java.lang.Boolean isProductAdmin;

    private java.lang.String productCompanyID;

    private java.lang.String productID;

    private java.lang.String productUserID;

    private java.lang.String status;

    private java.util.Calendar statusDT;

    public DTOUserProduct() {
    }

    public DTOUserProduct(
           java.lang.Boolean isProductAdmin,
           java.lang.String productCompanyID,
           java.lang.String productID,
           java.lang.String productUserID,
           java.lang.String status,
           java.util.Calendar statusDT) {
           this.isProductAdmin = isProductAdmin;
           this.productCompanyID = productCompanyID;
           this.productID = productID;
           this.productUserID = productUserID;
           this.status = status;
           this.statusDT = statusDT;
    }


    /**
     * Gets the isProductAdmin value for this DTOUserProduct.
     * 
     * @return isProductAdmin
     */
    public java.lang.Boolean getIsProductAdmin() {
        return isProductAdmin;
    }


    /**
     * Sets the isProductAdmin value for this DTOUserProduct.
     * 
     * @param isProductAdmin
     */
    public void setIsProductAdmin(java.lang.Boolean isProductAdmin) {
        this.isProductAdmin = isProductAdmin;
    }


    /**
     * Gets the productCompanyID value for this DTOUserProduct.
     * 
     * @return productCompanyID
     */
    public java.lang.String getProductCompanyID() {
        return productCompanyID;
    }


    /**
     * Sets the productCompanyID value for this DTOUserProduct.
     * 
     * @param productCompanyID
     */
    public void setProductCompanyID(java.lang.String productCompanyID) {
        this.productCompanyID = productCompanyID;
    }


    /**
     * Gets the productID value for this DTOUserProduct.
     * 
     * @return productID
     */
    public java.lang.String getProductID() {
        return productID;
    }


    /**
     * Sets the productID value for this DTOUserProduct.
     * 
     * @param productID
     */
    public void setProductID(java.lang.String productID) {
        this.productID = productID;
    }


    /**
     * Gets the productUserID value for this DTOUserProduct.
     * 
     * @return productUserID
     */
    public java.lang.String getProductUserID() {
        return productUserID;
    }


    /**
     * Sets the productUserID value for this DTOUserProduct.
     * 
     * @param productUserID
     */
    public void setProductUserID(java.lang.String productUserID) {
        this.productUserID = productUserID;
    }


    /**
     * Gets the status value for this DTOUserProduct.
     * 
     * @return status
     */
    public java.lang.String getStatus() {
        return status;
    }


    /**
     * Sets the status value for this DTOUserProduct.
     * 
     * @param status
     */
    public void setStatus(java.lang.String status) {
        this.status = status;
    }


    /**
     * Gets the statusDT value for this DTOUserProduct.
     * 
     * @return statusDT
     */
    public java.util.Calendar getStatusDT() {
        return statusDT;
    }


    /**
     * Sets the statusDT value for this DTOUserProduct.
     * 
     * @param statusDT
     */
    public void setStatusDT(java.util.Calendar statusDT) {
        this.statusDT = statusDT;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DTOUserProduct)) return false;
        DTOUserProduct other = (DTOUserProduct) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.isProductAdmin==null && other.getIsProductAdmin()==null) || 
             (this.isProductAdmin!=null &&
              this.isProductAdmin.equals(other.getIsProductAdmin()))) &&
            ((this.productCompanyID==null && other.getProductCompanyID()==null) || 
             (this.productCompanyID!=null &&
              this.productCompanyID.equals(other.getProductCompanyID()))) &&
            ((this.productID==null && other.getProductID()==null) || 
             (this.productID!=null &&
              this.productID.equals(other.getProductID()))) &&
            ((this.productUserID==null && other.getProductUserID()==null) || 
             (this.productUserID!=null &&
              this.productUserID.equals(other.getProductUserID()))) &&
            ((this.status==null && other.getStatus()==null) || 
             (this.status!=null &&
              this.status.equals(other.getStatus()))) &&
            ((this.statusDT==null && other.getStatusDT()==null) || 
             (this.statusDT!=null &&
              this.statusDT.equals(other.getStatusDT())));
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
        if (getIsProductAdmin() != null) {
            _hashCode += getIsProductAdmin().hashCode();
        }
        if (getProductCompanyID() != null) {
            _hashCode += getProductCompanyID().hashCode();
        }
        if (getProductID() != null) {
            _hashCode += getProductID().hashCode();
        }
        if (getProductUserID() != null) {
            _hashCode += getProductUserID().hashCode();
        }
        if (getStatus() != null) {
            _hashCode += getStatus().hashCode();
        }
        if (getStatusDT() != null) {
            _hashCode += getStatusDT().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DTOUserProduct.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "DTOUserProduct"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("isProductAdmin");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "IsProductAdmin"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("productCompanyID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "ProductCompanyID"));
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
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("productUserID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "ProductUserID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("status");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "Status"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("statusDT");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "StatusDT"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "dateTime"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
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
