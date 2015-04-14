/**
 * DTOCompanyHierarchy.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class DTOCompanyHierarchy  implements java.io.Serializable {
    private java.lang.String authorizingCity;

    private java.lang.String authorizingCityType;

    private java.lang.String city;

    private java.lang.String cityRoles;

    private java.lang.String cityType;

    private java.lang.String controllingCity;

    private java.lang.String controllingCityType;

    private java.lang.String globalCompanyID;

    private java.lang.String globalStationID;

    public DTOCompanyHierarchy() {
    }

    public DTOCompanyHierarchy(
           java.lang.String authorizingCity,
           java.lang.String authorizingCityType,
           java.lang.String city,
           java.lang.String cityRoles,
           java.lang.String cityType,
           java.lang.String controllingCity,
           java.lang.String controllingCityType,
           java.lang.String globalCompanyID,
           java.lang.String globalStationID) {
           this.authorizingCity = authorizingCity;
           this.authorizingCityType = authorizingCityType;
           this.city = city;
           this.cityRoles = cityRoles;
           this.cityType = cityType;
           this.controllingCity = controllingCity;
           this.controllingCityType = controllingCityType;
           this.globalCompanyID = globalCompanyID;
           this.globalStationID = globalStationID;
    }


    /**
     * Gets the authorizingCity value for this DTOCompanyHierarchy.
     * 
     * @return authorizingCity
     */
    public java.lang.String getAuthorizingCity() {
        return authorizingCity;
    }


    /**
     * Sets the authorizingCity value for this DTOCompanyHierarchy.
     * 
     * @param authorizingCity
     */
    public void setAuthorizingCity(java.lang.String authorizingCity) {
        this.authorizingCity = authorizingCity;
    }


    /**
     * Gets the authorizingCityType value for this DTOCompanyHierarchy.
     * 
     * @return authorizingCityType
     */
    public java.lang.String getAuthorizingCityType() {
        return authorizingCityType;
    }


    /**
     * Sets the authorizingCityType value for this DTOCompanyHierarchy.
     * 
     * @param authorizingCityType
     */
    public void setAuthorizingCityType(java.lang.String authorizingCityType) {
        this.authorizingCityType = authorizingCityType;
    }


    /**
     * Gets the city value for this DTOCompanyHierarchy.
     * 
     * @return city
     */
    public java.lang.String getCity() {
        return city;
    }


    /**
     * Sets the city value for this DTOCompanyHierarchy.
     * 
     * @param city
     */
    public void setCity(java.lang.String city) {
        this.city = city;
    }


    /**
     * Gets the cityRoles value for this DTOCompanyHierarchy.
     * 
     * @return cityRoles
     */
    public java.lang.String getCityRoles() {
        return cityRoles;
    }


    /**
     * Sets the cityRoles value for this DTOCompanyHierarchy.
     * 
     * @param cityRoles
     */
    public void setCityRoles(java.lang.String cityRoles) {
        this.cityRoles = cityRoles;
    }


    /**
     * Gets the cityType value for this DTOCompanyHierarchy.
     * 
     * @return cityType
     */
    public java.lang.String getCityType() {
        return cityType;
    }


    /**
     * Sets the cityType value for this DTOCompanyHierarchy.
     * 
     * @param cityType
     */
    public void setCityType(java.lang.String cityType) {
        this.cityType = cityType;
    }


    /**
     * Gets the controllingCity value for this DTOCompanyHierarchy.
     * 
     * @return controllingCity
     */
    public java.lang.String getControllingCity() {
        return controllingCity;
    }


    /**
     * Sets the controllingCity value for this DTOCompanyHierarchy.
     * 
     * @param controllingCity
     */
    public void setControllingCity(java.lang.String controllingCity) {
        this.controllingCity = controllingCity;
    }


    /**
     * Gets the controllingCityType value for this DTOCompanyHierarchy.
     * 
     * @return controllingCityType
     */
    public java.lang.String getControllingCityType() {
        return controllingCityType;
    }


    /**
     * Sets the controllingCityType value for this DTOCompanyHierarchy.
     * 
     * @param controllingCityType
     */
    public void setControllingCityType(java.lang.String controllingCityType) {
        this.controllingCityType = controllingCityType;
    }


    /**
     * Gets the globalCompanyID value for this DTOCompanyHierarchy.
     * 
     * @return globalCompanyID
     */
    public java.lang.String getGlobalCompanyID() {
        return globalCompanyID;
    }


    /**
     * Sets the globalCompanyID value for this DTOCompanyHierarchy.
     * 
     * @param globalCompanyID
     */
    public void setGlobalCompanyID(java.lang.String globalCompanyID) {
        this.globalCompanyID = globalCompanyID;
    }


    /**
     * Gets the globalStationID value for this DTOCompanyHierarchy.
     * 
     * @return globalStationID
     */
    public java.lang.String getGlobalStationID() {
        return globalStationID;
    }


    /**
     * Sets the globalStationID value for this DTOCompanyHierarchy.
     * 
     * @param globalStationID
     */
    public void setGlobalStationID(java.lang.String globalStationID) {
        this.globalStationID = globalStationID;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DTOCompanyHierarchy)) return false;
        DTOCompanyHierarchy other = (DTOCompanyHierarchy) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.authorizingCity==null && other.getAuthorizingCity()==null) || 
             (this.authorizingCity!=null &&
              this.authorizingCity.equals(other.getAuthorizingCity()))) &&
            ((this.authorizingCityType==null && other.getAuthorizingCityType()==null) || 
             (this.authorizingCityType!=null &&
              this.authorizingCityType.equals(other.getAuthorizingCityType()))) &&
            ((this.city==null && other.getCity()==null) || 
             (this.city!=null &&
              this.city.equals(other.getCity()))) &&
            ((this.cityRoles==null && other.getCityRoles()==null) || 
             (this.cityRoles!=null &&
              this.cityRoles.equals(other.getCityRoles()))) &&
            ((this.cityType==null && other.getCityType()==null) || 
             (this.cityType!=null &&
              this.cityType.equals(other.getCityType()))) &&
            ((this.controllingCity==null && other.getControllingCity()==null) || 
             (this.controllingCity!=null &&
              this.controllingCity.equals(other.getControllingCity()))) &&
            ((this.controllingCityType==null && other.getControllingCityType()==null) || 
             (this.controllingCityType!=null &&
              this.controllingCityType.equals(other.getControllingCityType()))) &&
            ((this.globalCompanyID==null && other.getGlobalCompanyID()==null) || 
             (this.globalCompanyID!=null &&
              this.globalCompanyID.equals(other.getGlobalCompanyID()))) &&
            ((this.globalStationID==null && other.getGlobalStationID()==null) || 
             (this.globalStationID!=null &&
              this.globalStationID.equals(other.getGlobalStationID())));
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
        if (getAuthorizingCity() != null) {
            _hashCode += getAuthorizingCity().hashCode();
        }
        if (getAuthorizingCityType() != null) {
            _hashCode += getAuthorizingCityType().hashCode();
        }
        if (getCity() != null) {
            _hashCode += getCity().hashCode();
        }
        if (getCityRoles() != null) {
            _hashCode += getCityRoles().hashCode();
        }
        if (getCityType() != null) {
            _hashCode += getCityType().hashCode();
        }
        if (getControllingCity() != null) {
            _hashCode += getControllingCity().hashCode();
        }
        if (getControllingCityType() != null) {
            _hashCode += getControllingCityType().hashCode();
        }
        if (getGlobalCompanyID() != null) {
            _hashCode += getGlobalCompanyID().hashCode();
        }
        if (getGlobalStationID() != null) {
            _hashCode += getGlobalStationID().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DTOCompanyHierarchy.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "DTOCompanyHierarchy"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("authorizingCity");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "AuthorizingCity"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("authorizingCityType");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "AuthorizingCityType"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("city");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "City"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("cityRoles");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CityRoles"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("cityType");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CityType"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("controllingCity");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "ControllingCity"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("controllingCityType");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "ControllingCityType"));
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
