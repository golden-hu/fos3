/**
 * DTOCompany.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class DTOCompany  implements java.io.Serializable {
    private java.lang.String baseCurrency;

    private java.lang.String companyCode;

    private java.lang.String companyName1;

    private java.lang.String companyName2;

    private java.lang.String companyRoles;

    private java.lang.String globalCompanyID;

    private java.lang.Boolean isGlobalContract;

    public DTOCompany() {
    }

    public DTOCompany(
           java.lang.String baseCurrency,
           java.lang.String companyCode,
           java.lang.String companyName1,
           java.lang.String companyName2,
           java.lang.String companyRoles,
           java.lang.String globalCompanyID,
           java.lang.Boolean isGlobalContract) {
           this.baseCurrency = baseCurrency;
           this.companyCode = companyCode;
           this.companyName1 = companyName1;
           this.companyName2 = companyName2;
           this.companyRoles = companyRoles;
           this.globalCompanyID = globalCompanyID;
           this.isGlobalContract = isGlobalContract;
    }


    /**
     * Gets the baseCurrency value for this DTOCompany.
     * 
     * @return baseCurrency
     */
    public java.lang.String getBaseCurrency() {
        return baseCurrency;
    }


    /**
     * Sets the baseCurrency value for this DTOCompany.
     * 
     * @param baseCurrency
     */
    public void setBaseCurrency(java.lang.String baseCurrency) {
        this.baseCurrency = baseCurrency;
    }


    /**
     * Gets the companyCode value for this DTOCompany.
     * 
     * @return companyCode
     */
    public java.lang.String getCompanyCode() {
        return companyCode;
    }


    /**
     * Sets the companyCode value for this DTOCompany.
     * 
     * @param companyCode
     */
    public void setCompanyCode(java.lang.String companyCode) {
        this.companyCode = companyCode;
    }


    /**
     * Gets the companyName1 value for this DTOCompany.
     * 
     * @return companyName1
     */
    public java.lang.String getCompanyName1() {
        return companyName1;
    }


    /**
     * Sets the companyName1 value for this DTOCompany.
     * 
     * @param companyName1
     */
    public void setCompanyName1(java.lang.String companyName1) {
        this.companyName1 = companyName1;
    }


    /**
     * Gets the companyName2 value for this DTOCompany.
     * 
     * @return companyName2
     */
    public java.lang.String getCompanyName2() {
        return companyName2;
    }


    /**
     * Sets the companyName2 value for this DTOCompany.
     * 
     * @param companyName2
     */
    public void setCompanyName2(java.lang.String companyName2) {
        this.companyName2 = companyName2;
    }


    /**
     * Gets the companyRoles value for this DTOCompany.
     * 
     * @return companyRoles
     */
    public java.lang.String getCompanyRoles() {
        return companyRoles;
    }


    /**
     * Sets the companyRoles value for this DTOCompany.
     * 
     * @param companyRoles
     */
    public void setCompanyRoles(java.lang.String companyRoles) {
        this.companyRoles = companyRoles;
    }


    /**
     * Gets the globalCompanyID value for this DTOCompany.
     * 
     * @return globalCompanyID
     */
    public java.lang.String getGlobalCompanyID() {
        return globalCompanyID;
    }


    /**
     * Sets the globalCompanyID value for this DTOCompany.
     * 
     * @param globalCompanyID
     */
    public void setGlobalCompanyID(java.lang.String globalCompanyID) {
        this.globalCompanyID = globalCompanyID;
    }


    /**
     * Gets the isGlobalContract value for this DTOCompany.
     * 
     * @return isGlobalContract
     */
    public java.lang.Boolean getIsGlobalContract() {
        return isGlobalContract;
    }


    /**
     * Sets the isGlobalContract value for this DTOCompany.
     * 
     * @param isGlobalContract
     */
    public void setIsGlobalContract(java.lang.Boolean isGlobalContract) {
        this.isGlobalContract = isGlobalContract;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DTOCompany)) return false;
        DTOCompany other = (DTOCompany) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.baseCurrency==null && other.getBaseCurrency()==null) || 
             (this.baseCurrency!=null &&
              this.baseCurrency.equals(other.getBaseCurrency()))) &&
            ((this.companyCode==null && other.getCompanyCode()==null) || 
             (this.companyCode!=null &&
              this.companyCode.equals(other.getCompanyCode()))) &&
            ((this.companyName1==null && other.getCompanyName1()==null) || 
             (this.companyName1!=null &&
              this.companyName1.equals(other.getCompanyName1()))) &&
            ((this.companyName2==null && other.getCompanyName2()==null) || 
             (this.companyName2!=null &&
              this.companyName2.equals(other.getCompanyName2()))) &&
            ((this.companyRoles==null && other.getCompanyRoles()==null) || 
             (this.companyRoles!=null &&
              this.companyRoles.equals(other.getCompanyRoles()))) &&
            ((this.globalCompanyID==null && other.getGlobalCompanyID()==null) || 
             (this.globalCompanyID!=null &&
              this.globalCompanyID.equals(other.getGlobalCompanyID()))) &&
            ((this.isGlobalContract==null && other.getIsGlobalContract()==null) || 
             (this.isGlobalContract!=null &&
              this.isGlobalContract.equals(other.getIsGlobalContract())));
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
        if (getBaseCurrency() != null) {
            _hashCode += getBaseCurrency().hashCode();
        }
        if (getCompanyCode() != null) {
            _hashCode += getCompanyCode().hashCode();
        }
        if (getCompanyName1() != null) {
            _hashCode += getCompanyName1().hashCode();
        }
        if (getCompanyName2() != null) {
            _hashCode += getCompanyName2().hashCode();
        }
        if (getCompanyRoles() != null) {
            _hashCode += getCompanyRoles().hashCode();
        }
        if (getGlobalCompanyID() != null) {
            _hashCode += getGlobalCompanyID().hashCode();
        }
        if (getIsGlobalContract() != null) {
            _hashCode += getIsGlobalContract().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DTOCompany.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "DTOCompany"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("baseCurrency");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "BaseCurrency"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("companyCode");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CompanyCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("companyName1");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CompanyName1"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("companyName2");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CompanyName2"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("companyRoles");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CompanyRoles"));
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
        elemField.setFieldName("isGlobalContract");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "IsGlobalContract"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
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
