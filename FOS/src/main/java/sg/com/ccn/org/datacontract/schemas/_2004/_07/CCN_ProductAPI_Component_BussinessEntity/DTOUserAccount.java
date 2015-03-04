/**
 * DTOUserAccount.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class DTOUserAccount  implements java.io.Serializable {
    private java.lang.String accountID;

    private sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserProduct[] accountProducts;

    private java.lang.String city;

    private java.lang.String cityType;

    private java.lang.String companyCode;

    private java.lang.String contactNo;

    private java.lang.Boolean emailActivated;

    private java.lang.String emailAddress;

    private java.lang.Boolean emailVerified;

    private java.lang.String firstName;

    private java.lang.String gender;

    private java.lang.String globalCompanyID;

    private java.lang.String globalStationID;

    private java.lang.String lastName;

    private java.lang.String userEmail1;

    private java.lang.String userEmail2;

    private java.lang.String userID;

    private java.lang.String userType;

    public DTOUserAccount() {
    }

    public DTOUserAccount(
           java.lang.String accountID,
           sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserProduct[] accountProducts,
           java.lang.String city,
           java.lang.String cityType,
           java.lang.String companyCode,
           java.lang.String contactNo,
           java.lang.Boolean emailActivated,
           java.lang.String emailAddress,
           java.lang.Boolean emailVerified,
           java.lang.String firstName,
           java.lang.String gender,
           java.lang.String globalCompanyID,
           java.lang.String globalStationID,
           java.lang.String lastName,
           java.lang.String userEmail1,
           java.lang.String userEmail2,
           java.lang.String userID,
           java.lang.String userType) {
           this.accountID = accountID;
           this.accountProducts = accountProducts;
           this.city = city;
           this.cityType = cityType;
           this.companyCode = companyCode;
           this.contactNo = contactNo;
           this.emailActivated = emailActivated;
           this.emailAddress = emailAddress;
           this.emailVerified = emailVerified;
           this.firstName = firstName;
           this.gender = gender;
           this.globalCompanyID = globalCompanyID;
           this.globalStationID = globalStationID;
           this.lastName = lastName;
           this.userEmail1 = userEmail1;
           this.userEmail2 = userEmail2;
           this.userID = userID;
           this.userType = userType;
    }


    /**
     * Gets the accountID value for this DTOUserAccount.
     * 
     * @return accountID
     */
    public java.lang.String getAccountID() {
        return accountID;
    }


    /**
     * Sets the accountID value for this DTOUserAccount.
     * 
     * @param accountID
     */
    public void setAccountID(java.lang.String accountID) {
        this.accountID = accountID;
    }


    /**
     * Gets the accountProducts value for this DTOUserAccount.
     * 
     * @return accountProducts
     */
    public sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserProduct[] getAccountProducts() {
        return accountProducts;
    }


    /**
     * Sets the accountProducts value for this DTOUserAccount.
     * 
     * @param accountProducts
     */
    public void setAccountProducts(sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserProduct[] accountProducts) {
        this.accountProducts = accountProducts;
    }


    /**
     * Gets the city value for this DTOUserAccount.
     * 
     * @return city
     */
    public java.lang.String getCity() {
        return city;
    }


    /**
     * Sets the city value for this DTOUserAccount.
     * 
     * @param city
     */
    public void setCity(java.lang.String city) {
        this.city = city;
    }


    /**
     * Gets the cityType value for this DTOUserAccount.
     * 
     * @return cityType
     */
    public java.lang.String getCityType() {
        return cityType;
    }


    /**
     * Sets the cityType value for this DTOUserAccount.
     * 
     * @param cityType
     */
    public void setCityType(java.lang.String cityType) {
        this.cityType = cityType;
    }


    /**
     * Gets the companyCode value for this DTOUserAccount.
     * 
     * @return companyCode
     */
    public java.lang.String getCompanyCode() {
        return companyCode;
    }


    /**
     * Sets the companyCode value for this DTOUserAccount.
     * 
     * @param companyCode
     */
    public void setCompanyCode(java.lang.String companyCode) {
        this.companyCode = companyCode;
    }


    /**
     * Gets the contactNo value for this DTOUserAccount.
     * 
     * @return contactNo
     */
    public java.lang.String getContactNo() {
        return contactNo;
    }


    /**
     * Sets the contactNo value for this DTOUserAccount.
     * 
     * @param contactNo
     */
    public void setContactNo(java.lang.String contactNo) {
        this.contactNo = contactNo;
    }


    /**
     * Gets the emailActivated value for this DTOUserAccount.
     * 
     * @return emailActivated
     */
    public java.lang.Boolean getEmailActivated() {
        return emailActivated;
    }


    /**
     * Sets the emailActivated value for this DTOUserAccount.
     * 
     * @param emailActivated
     */
    public void setEmailActivated(java.lang.Boolean emailActivated) {
        this.emailActivated = emailActivated;
    }


    /**
     * Gets the emailAddress value for this DTOUserAccount.
     * 
     * @return emailAddress
     */
    public java.lang.String getEmailAddress() {
        return emailAddress;
    }


    /**
     * Sets the emailAddress value for this DTOUserAccount.
     * 
     * @param emailAddress
     */
    public void setEmailAddress(java.lang.String emailAddress) {
        this.emailAddress = emailAddress;
    }


    /**
     * Gets the emailVerified value for this DTOUserAccount.
     * 
     * @return emailVerified
     */
    public java.lang.Boolean getEmailVerified() {
        return emailVerified;
    }


    /**
     * Sets the emailVerified value for this DTOUserAccount.
     * 
     * @param emailVerified
     */
    public void setEmailVerified(java.lang.Boolean emailVerified) {
        this.emailVerified = emailVerified;
    }


    /**
     * Gets the firstName value for this DTOUserAccount.
     * 
     * @return firstName
     */
    public java.lang.String getFirstName() {
        return firstName;
    }


    /**
     * Sets the firstName value for this DTOUserAccount.
     * 
     * @param firstName
     */
    public void setFirstName(java.lang.String firstName) {
        this.firstName = firstName;
    }


    /**
     * Gets the gender value for this DTOUserAccount.
     * 
     * @return gender
     */
    public java.lang.String getGender() {
        return gender;
    }


    /**
     * Sets the gender value for this DTOUserAccount.
     * 
     * @param gender
     */
    public void setGender(java.lang.String gender) {
        this.gender = gender;
    }


    /**
     * Gets the globalCompanyID value for this DTOUserAccount.
     * 
     * @return globalCompanyID
     */
    public java.lang.String getGlobalCompanyID() {
        return globalCompanyID;
    }


    /**
     * Sets the globalCompanyID value for this DTOUserAccount.
     * 
     * @param globalCompanyID
     */
    public void setGlobalCompanyID(java.lang.String globalCompanyID) {
        this.globalCompanyID = globalCompanyID;
    }


    /**
     * Gets the globalStationID value for this DTOUserAccount.
     * 
     * @return globalStationID
     */
    public java.lang.String getGlobalStationID() {
        return globalStationID;
    }


    /**
     * Sets the globalStationID value for this DTOUserAccount.
     * 
     * @param globalStationID
     */
    public void setGlobalStationID(java.lang.String globalStationID) {
        this.globalStationID = globalStationID;
    }


    /**
     * Gets the lastName value for this DTOUserAccount.
     * 
     * @return lastName
     */
    public java.lang.String getLastName() {
        return lastName;
    }


    /**
     * Sets the lastName value for this DTOUserAccount.
     * 
     * @param lastName
     */
    public void setLastName(java.lang.String lastName) {
        this.lastName = lastName;
    }


    /**
     * Gets the userEmail1 value for this DTOUserAccount.
     * 
     * @return userEmail1
     */
    public java.lang.String getUserEmail1() {
        return userEmail1;
    }


    /**
     * Sets the userEmail1 value for this DTOUserAccount.
     * 
     * @param userEmail1
     */
    public void setUserEmail1(java.lang.String userEmail1) {
        this.userEmail1 = userEmail1;
    }


    /**
     * Gets the userEmail2 value for this DTOUserAccount.
     * 
     * @return userEmail2
     */
    public java.lang.String getUserEmail2() {
        return userEmail2;
    }


    /**
     * Sets the userEmail2 value for this DTOUserAccount.
     * 
     * @param userEmail2
     */
    public void setUserEmail2(java.lang.String userEmail2) {
        this.userEmail2 = userEmail2;
    }


    /**
     * Gets the userID value for this DTOUserAccount.
     * 
     * @return userID
     */
    public java.lang.String getUserID() {
        return userID;
    }


    /**
     * Sets the userID value for this DTOUserAccount.
     * 
     * @param userID
     */
    public void setUserID(java.lang.String userID) {
        this.userID = userID;
    }


    /**
     * Gets the userType value for this DTOUserAccount.
     * 
     * @return userType
     */
    public java.lang.String getUserType() {
        return userType;
    }


    /**
     * Sets the userType value for this DTOUserAccount.
     * 
     * @param userType
     */
    public void setUserType(java.lang.String userType) {
        this.userType = userType;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DTOUserAccount)) return false;
        DTOUserAccount other = (DTOUserAccount) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.accountID==null && other.getAccountID()==null) || 
             (this.accountID!=null &&
              this.accountID.equals(other.getAccountID()))) &&
            ((this.accountProducts==null && other.getAccountProducts()==null) || 
             (this.accountProducts!=null &&
              java.util.Arrays.equals(this.accountProducts, other.getAccountProducts()))) &&
            ((this.city==null && other.getCity()==null) || 
             (this.city!=null &&
              this.city.equals(other.getCity()))) &&
            ((this.cityType==null && other.getCityType()==null) || 
             (this.cityType!=null &&
              this.cityType.equals(other.getCityType()))) &&
            ((this.companyCode==null && other.getCompanyCode()==null) || 
             (this.companyCode!=null &&
              this.companyCode.equals(other.getCompanyCode()))) &&
            ((this.contactNo==null && other.getContactNo()==null) || 
             (this.contactNo!=null &&
              this.contactNo.equals(other.getContactNo()))) &&
            ((this.emailActivated==null && other.getEmailActivated()==null) || 
             (this.emailActivated!=null &&
              this.emailActivated.equals(other.getEmailActivated()))) &&
            ((this.emailAddress==null && other.getEmailAddress()==null) || 
             (this.emailAddress!=null &&
              this.emailAddress.equals(other.getEmailAddress()))) &&
            ((this.emailVerified==null && other.getEmailVerified()==null) || 
             (this.emailVerified!=null &&
              this.emailVerified.equals(other.getEmailVerified()))) &&
            ((this.firstName==null && other.getFirstName()==null) || 
             (this.firstName!=null &&
              this.firstName.equals(other.getFirstName()))) &&
            ((this.gender==null && other.getGender()==null) || 
             (this.gender!=null &&
              this.gender.equals(other.getGender()))) &&
            ((this.globalCompanyID==null && other.getGlobalCompanyID()==null) || 
             (this.globalCompanyID!=null &&
              this.globalCompanyID.equals(other.getGlobalCompanyID()))) &&
            ((this.globalStationID==null && other.getGlobalStationID()==null) || 
             (this.globalStationID!=null &&
              this.globalStationID.equals(other.getGlobalStationID()))) &&
            ((this.lastName==null && other.getLastName()==null) || 
             (this.lastName!=null &&
              this.lastName.equals(other.getLastName()))) &&
            ((this.userEmail1==null && other.getUserEmail1()==null) || 
             (this.userEmail1!=null &&
              this.userEmail1.equals(other.getUserEmail1()))) &&
            ((this.userEmail2==null && other.getUserEmail2()==null) || 
             (this.userEmail2!=null &&
              this.userEmail2.equals(other.getUserEmail2()))) &&
            ((this.userID==null && other.getUserID()==null) || 
             (this.userID!=null &&
              this.userID.equals(other.getUserID()))) &&
            ((this.userType==null && other.getUserType()==null) || 
             (this.userType!=null &&
              this.userType.equals(other.getUserType())));
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
        if (getAccountID() != null) {
            _hashCode += getAccountID().hashCode();
        }
        if (getAccountProducts() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getAccountProducts());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getAccountProducts(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getCity() != null) {
            _hashCode += getCity().hashCode();
        }
        if (getCityType() != null) {
            _hashCode += getCityType().hashCode();
        }
        if (getCompanyCode() != null) {
            _hashCode += getCompanyCode().hashCode();
        }
        if (getContactNo() != null) {
            _hashCode += getContactNo().hashCode();
        }
        if (getEmailActivated() != null) {
            _hashCode += getEmailActivated().hashCode();
        }
        if (getEmailAddress() != null) {
            _hashCode += getEmailAddress().hashCode();
        }
        if (getEmailVerified() != null) {
            _hashCode += getEmailVerified().hashCode();
        }
        if (getFirstName() != null) {
            _hashCode += getFirstName().hashCode();
        }
        if (getGender() != null) {
            _hashCode += getGender().hashCode();
        }
        if (getGlobalCompanyID() != null) {
            _hashCode += getGlobalCompanyID().hashCode();
        }
        if (getGlobalStationID() != null) {
            _hashCode += getGlobalStationID().hashCode();
        }
        if (getLastName() != null) {
            _hashCode += getLastName().hashCode();
        }
        if (getUserEmail1() != null) {
            _hashCode += getUserEmail1().hashCode();
        }
        if (getUserEmail2() != null) {
            _hashCode += getUserEmail2().hashCode();
        }
        if (getUserID() != null) {
            _hashCode += getUserID().hashCode();
        }
        if (getUserType() != null) {
            _hashCode += getUserType().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DTOUserAccount.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "DTOUserAccount"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("accountID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "AccountID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("accountProducts");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "AccountProducts"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "DTOUserProduct"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        elemField.setItemQName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "DTOUserProduct"));
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("city");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "City"));
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
        elemField.setFieldName("companyCode");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CompanyCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("contactNo");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "ContactNo"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("emailActivated");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "EmailActivated"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("emailAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "EmailAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("emailVerified");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "EmailVerified"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("firstName");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "FirstName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("gender");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "Gender"));
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
        elemField.setFieldName("lastName");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "LastName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("userEmail1");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "UserEmail1"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("userEmail2");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "UserEmail2"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("userID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "UserID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("userType");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "UserType"));
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
