/**
 * FSU.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class FSU  implements java.io.Serializable {
    private sg.com.ccn.FSU.StandardMessageIdentification standardMessageIdentification;

    private sg.com.ccn.FSU.ConsignmentDetail consignmentDetail;

    private sg.com.ccn.FSU.RCSStatusDetail RCSStatusDetail;

    private sg.com.ccn.FSU.RCTStatusDetail RCTStatusDetail;

    private sg.com.ccn.FSU.RCFStatusDetail RCFStatusDetail;

    private sg.com.ccn.FSU.BKDStatusDetail BKDStatusDetail;

    private sg.com.ccn.FSU.MANStatusDetail MANStatusDetail;

    private sg.com.ccn.FSU.DEPStatusDetail DEPStatusDetail;

    private sg.com.ccn.FSU.PREStatusDetail PREStatusDetail;

    private sg.com.ccn.FSU.TRMStatusDetail TRMStatusDetail;

    private sg.com.ccn.FSU.TFDStatusDetail TFDStatusDetail;

    private sg.com.ccn.FSU.NFDStatusDetail NFDStatusDetail;

    private sg.com.ccn.FSU.AWDStatusDetail AWDStatusDetail;

    private sg.com.ccn.FSU.CCDStatusDetail CCDStatusDetail;

    private sg.com.ccn.FSU.DLVStatusDetail DLVStatusDetail;

    private sg.com.ccn.FSU.DISStatusDetail DISStatusDetail;

    private sg.com.ccn.FSU.CRCStatusDetail CRCStatusDetail;

    private sg.com.ccn.FSU.DDLStatusDetail DDLStatusDetail;

    private sg.com.ccn.FSU.TGCStatusDetail TGCStatusDetail;

    private sg.com.ccn.FSU.ARRStatusDetail ARRStatusDetail;

    private sg.com.ccn.FSU.AWRStatusDetail AWRStatusDetail;

    private sg.com.ccn.FSU.FOHStatusDetail FOHStatusDetail;

    private sg.com.ccn.FSU.PUPStatusDetail PUPStatusDetail;

    private sg.com.ccn.FSU.PODStatusDetail PODStatusDetail;

    private sg.com.ccn.FSU.ULDDescription[] ULDDescription;

    private sg.com.ccn.FSU.OSI OSI;

    public FSU() {
    }

    public FSU(
           sg.com.ccn.FSU.StandardMessageIdentification standardMessageIdentification,
           sg.com.ccn.FSU.ConsignmentDetail consignmentDetail,
           sg.com.ccn.FSU.RCSStatusDetail RCSStatusDetail,
           sg.com.ccn.FSU.RCTStatusDetail RCTStatusDetail,
           sg.com.ccn.FSU.RCFStatusDetail RCFStatusDetail,
           sg.com.ccn.FSU.BKDStatusDetail BKDStatusDetail,
           sg.com.ccn.FSU.MANStatusDetail MANStatusDetail,
           sg.com.ccn.FSU.DEPStatusDetail DEPStatusDetail,
           sg.com.ccn.FSU.PREStatusDetail PREStatusDetail,
           sg.com.ccn.FSU.TRMStatusDetail TRMStatusDetail,
           sg.com.ccn.FSU.TFDStatusDetail TFDStatusDetail,
           sg.com.ccn.FSU.NFDStatusDetail NFDStatusDetail,
           sg.com.ccn.FSU.AWDStatusDetail AWDStatusDetail,
           sg.com.ccn.FSU.CCDStatusDetail CCDStatusDetail,
           sg.com.ccn.FSU.DLVStatusDetail DLVStatusDetail,
           sg.com.ccn.FSU.DISStatusDetail DISStatusDetail,
           sg.com.ccn.FSU.CRCStatusDetail CRCStatusDetail,
           sg.com.ccn.FSU.DDLStatusDetail DDLStatusDetail,
           sg.com.ccn.FSU.TGCStatusDetail TGCStatusDetail,
           sg.com.ccn.FSU.ARRStatusDetail ARRStatusDetail,
           sg.com.ccn.FSU.AWRStatusDetail AWRStatusDetail,
           sg.com.ccn.FSU.FOHStatusDetail FOHStatusDetail,
           sg.com.ccn.FSU.PUPStatusDetail PUPStatusDetail,
           sg.com.ccn.FSU.PODStatusDetail PODStatusDetail,
           sg.com.ccn.FSU.ULDDescription[] ULDDescription,
           sg.com.ccn.FSU.OSI OSI) {
           this.standardMessageIdentification = standardMessageIdentification;
           this.consignmentDetail = consignmentDetail;
           this.RCSStatusDetail = RCSStatusDetail;
           this.RCTStatusDetail = RCTStatusDetail;
           this.RCFStatusDetail = RCFStatusDetail;
           this.BKDStatusDetail = BKDStatusDetail;
           this.MANStatusDetail = MANStatusDetail;
           this.DEPStatusDetail = DEPStatusDetail;
           this.PREStatusDetail = PREStatusDetail;
           this.TRMStatusDetail = TRMStatusDetail;
           this.TFDStatusDetail = TFDStatusDetail;
           this.NFDStatusDetail = NFDStatusDetail;
           this.AWDStatusDetail = AWDStatusDetail;
           this.CCDStatusDetail = CCDStatusDetail;
           this.DLVStatusDetail = DLVStatusDetail;
           this.DISStatusDetail = DISStatusDetail;
           this.CRCStatusDetail = CRCStatusDetail;
           this.DDLStatusDetail = DDLStatusDetail;
           this.TGCStatusDetail = TGCStatusDetail;
           this.ARRStatusDetail = ARRStatusDetail;
           this.AWRStatusDetail = AWRStatusDetail;
           this.FOHStatusDetail = FOHStatusDetail;
           this.PUPStatusDetail = PUPStatusDetail;
           this.PODStatusDetail = PODStatusDetail;
           this.ULDDescription = ULDDescription;
           this.OSI = OSI;
    }


    /**
     * Gets the standardMessageIdentification value for this FSU.
     * 
     * @return standardMessageIdentification
     */
    public sg.com.ccn.FSU.StandardMessageIdentification getStandardMessageIdentification() {
        return standardMessageIdentification;
    }


    /**
     * Sets the standardMessageIdentification value for this FSU.
     * 
     * @param standardMessageIdentification
     */
    public void setStandardMessageIdentification(sg.com.ccn.FSU.StandardMessageIdentification standardMessageIdentification) {
        this.standardMessageIdentification = standardMessageIdentification;
    }


    /**
     * Gets the consignmentDetail value for this FSU.
     * 
     * @return consignmentDetail
     */
    public sg.com.ccn.FSU.ConsignmentDetail getConsignmentDetail() {
        return consignmentDetail;
    }


    /**
     * Sets the consignmentDetail value for this FSU.
     * 
     * @param consignmentDetail
     */
    public void setConsignmentDetail(sg.com.ccn.FSU.ConsignmentDetail consignmentDetail) {
        this.consignmentDetail = consignmentDetail;
    }


    /**
     * Gets the RCSStatusDetail value for this FSU.
     * 
     * @return RCSStatusDetail
     */
    public sg.com.ccn.FSU.RCSStatusDetail getRCSStatusDetail() {
        return RCSStatusDetail;
    }


    /**
     * Sets the RCSStatusDetail value for this FSU.
     * 
     * @param RCSStatusDetail
     */
    public void setRCSStatusDetail(sg.com.ccn.FSU.RCSStatusDetail RCSStatusDetail) {
        this.RCSStatusDetail = RCSStatusDetail;
    }


    /**
     * Gets the RCTStatusDetail value for this FSU.
     * 
     * @return RCTStatusDetail
     */
    public sg.com.ccn.FSU.RCTStatusDetail getRCTStatusDetail() {
        return RCTStatusDetail;
    }


    /**
     * Sets the RCTStatusDetail value for this FSU.
     * 
     * @param RCTStatusDetail
     */
    public void setRCTStatusDetail(sg.com.ccn.FSU.RCTStatusDetail RCTStatusDetail) {
        this.RCTStatusDetail = RCTStatusDetail;
    }


    /**
     * Gets the RCFStatusDetail value for this FSU.
     * 
     * @return RCFStatusDetail
     */
    public sg.com.ccn.FSU.RCFStatusDetail getRCFStatusDetail() {
        return RCFStatusDetail;
    }


    /**
     * Sets the RCFStatusDetail value for this FSU.
     * 
     * @param RCFStatusDetail
     */
    public void setRCFStatusDetail(sg.com.ccn.FSU.RCFStatusDetail RCFStatusDetail) {
        this.RCFStatusDetail = RCFStatusDetail;
    }


    /**
     * Gets the BKDStatusDetail value for this FSU.
     * 
     * @return BKDStatusDetail
     */
    public sg.com.ccn.FSU.BKDStatusDetail getBKDStatusDetail() {
        return BKDStatusDetail;
    }


    /**
     * Sets the BKDStatusDetail value for this FSU.
     * 
     * @param BKDStatusDetail
     */
    public void setBKDStatusDetail(sg.com.ccn.FSU.BKDStatusDetail BKDStatusDetail) {
        this.BKDStatusDetail = BKDStatusDetail;
    }


    /**
     * Gets the MANStatusDetail value for this FSU.
     * 
     * @return MANStatusDetail
     */
    public sg.com.ccn.FSU.MANStatusDetail getMANStatusDetail() {
        return MANStatusDetail;
    }


    /**
     * Sets the MANStatusDetail value for this FSU.
     * 
     * @param MANStatusDetail
     */
    public void setMANStatusDetail(sg.com.ccn.FSU.MANStatusDetail MANStatusDetail) {
        this.MANStatusDetail = MANStatusDetail;
    }


    /**
     * Gets the DEPStatusDetail value for this FSU.
     * 
     * @return DEPStatusDetail
     */
    public sg.com.ccn.FSU.DEPStatusDetail getDEPStatusDetail() {
        return DEPStatusDetail;
    }


    /**
     * Sets the DEPStatusDetail value for this FSU.
     * 
     * @param DEPStatusDetail
     */
    public void setDEPStatusDetail(sg.com.ccn.FSU.DEPStatusDetail DEPStatusDetail) {
        this.DEPStatusDetail = DEPStatusDetail;
    }


    /**
     * Gets the PREStatusDetail value for this FSU.
     * 
     * @return PREStatusDetail
     */
    public sg.com.ccn.FSU.PREStatusDetail getPREStatusDetail() {
        return PREStatusDetail;
    }


    /**
     * Sets the PREStatusDetail value for this FSU.
     * 
     * @param PREStatusDetail
     */
    public void setPREStatusDetail(sg.com.ccn.FSU.PREStatusDetail PREStatusDetail) {
        this.PREStatusDetail = PREStatusDetail;
    }


    /**
     * Gets the TRMStatusDetail value for this FSU.
     * 
     * @return TRMStatusDetail
     */
    public sg.com.ccn.FSU.TRMStatusDetail getTRMStatusDetail() {
        return TRMStatusDetail;
    }


    /**
     * Sets the TRMStatusDetail value for this FSU.
     * 
     * @param TRMStatusDetail
     */
    public void setTRMStatusDetail(sg.com.ccn.FSU.TRMStatusDetail TRMStatusDetail) {
        this.TRMStatusDetail = TRMStatusDetail;
    }


    /**
     * Gets the TFDStatusDetail value for this FSU.
     * 
     * @return TFDStatusDetail
     */
    public sg.com.ccn.FSU.TFDStatusDetail getTFDStatusDetail() {
        return TFDStatusDetail;
    }


    /**
     * Sets the TFDStatusDetail value for this FSU.
     * 
     * @param TFDStatusDetail
     */
    public void setTFDStatusDetail(sg.com.ccn.FSU.TFDStatusDetail TFDStatusDetail) {
        this.TFDStatusDetail = TFDStatusDetail;
    }


    /**
     * Gets the NFDStatusDetail value for this FSU.
     * 
     * @return NFDStatusDetail
     */
    public sg.com.ccn.FSU.NFDStatusDetail getNFDStatusDetail() {
        return NFDStatusDetail;
    }


    /**
     * Sets the NFDStatusDetail value for this FSU.
     * 
     * @param NFDStatusDetail
     */
    public void setNFDStatusDetail(sg.com.ccn.FSU.NFDStatusDetail NFDStatusDetail) {
        this.NFDStatusDetail = NFDStatusDetail;
    }


    /**
     * Gets the AWDStatusDetail value for this FSU.
     * 
     * @return AWDStatusDetail
     */
    public sg.com.ccn.FSU.AWDStatusDetail getAWDStatusDetail() {
        return AWDStatusDetail;
    }


    /**
     * Sets the AWDStatusDetail value for this FSU.
     * 
     * @param AWDStatusDetail
     */
    public void setAWDStatusDetail(sg.com.ccn.FSU.AWDStatusDetail AWDStatusDetail) {
        this.AWDStatusDetail = AWDStatusDetail;
    }


    /**
     * Gets the CCDStatusDetail value for this FSU.
     * 
     * @return CCDStatusDetail
     */
    public sg.com.ccn.FSU.CCDStatusDetail getCCDStatusDetail() {
        return CCDStatusDetail;
    }


    /**
     * Sets the CCDStatusDetail value for this FSU.
     * 
     * @param CCDStatusDetail
     */
    public void setCCDStatusDetail(sg.com.ccn.FSU.CCDStatusDetail CCDStatusDetail) {
        this.CCDStatusDetail = CCDStatusDetail;
    }


    /**
     * Gets the DLVStatusDetail value for this FSU.
     * 
     * @return DLVStatusDetail
     */
    public sg.com.ccn.FSU.DLVStatusDetail getDLVStatusDetail() {
        return DLVStatusDetail;
    }


    /**
     * Sets the DLVStatusDetail value for this FSU.
     * 
     * @param DLVStatusDetail
     */
    public void setDLVStatusDetail(sg.com.ccn.FSU.DLVStatusDetail DLVStatusDetail) {
        this.DLVStatusDetail = DLVStatusDetail;
    }


    /**
     * Gets the DISStatusDetail value for this FSU.
     * 
     * @return DISStatusDetail
     */
    public sg.com.ccn.FSU.DISStatusDetail getDISStatusDetail() {
        return DISStatusDetail;
    }


    /**
     * Sets the DISStatusDetail value for this FSU.
     * 
     * @param DISStatusDetail
     */
    public void setDISStatusDetail(sg.com.ccn.FSU.DISStatusDetail DISStatusDetail) {
        this.DISStatusDetail = DISStatusDetail;
    }


    /**
     * Gets the CRCStatusDetail value for this FSU.
     * 
     * @return CRCStatusDetail
     */
    public sg.com.ccn.FSU.CRCStatusDetail getCRCStatusDetail() {
        return CRCStatusDetail;
    }


    /**
     * Sets the CRCStatusDetail value for this FSU.
     * 
     * @param CRCStatusDetail
     */
    public void setCRCStatusDetail(sg.com.ccn.FSU.CRCStatusDetail CRCStatusDetail) {
        this.CRCStatusDetail = CRCStatusDetail;
    }


    /**
     * Gets the DDLStatusDetail value for this FSU.
     * 
     * @return DDLStatusDetail
     */
    public sg.com.ccn.FSU.DDLStatusDetail getDDLStatusDetail() {
        return DDLStatusDetail;
    }


    /**
     * Sets the DDLStatusDetail value for this FSU.
     * 
     * @param DDLStatusDetail
     */
    public void setDDLStatusDetail(sg.com.ccn.FSU.DDLStatusDetail DDLStatusDetail) {
        this.DDLStatusDetail = DDLStatusDetail;
    }


    /**
     * Gets the TGCStatusDetail value for this FSU.
     * 
     * @return TGCStatusDetail
     */
    public sg.com.ccn.FSU.TGCStatusDetail getTGCStatusDetail() {
        return TGCStatusDetail;
    }


    /**
     * Sets the TGCStatusDetail value for this FSU.
     * 
     * @param TGCStatusDetail
     */
    public void setTGCStatusDetail(sg.com.ccn.FSU.TGCStatusDetail TGCStatusDetail) {
        this.TGCStatusDetail = TGCStatusDetail;
    }


    /**
     * Gets the ARRStatusDetail value for this FSU.
     * 
     * @return ARRStatusDetail
     */
    public sg.com.ccn.FSU.ARRStatusDetail getARRStatusDetail() {
        return ARRStatusDetail;
    }


    /**
     * Sets the ARRStatusDetail value for this FSU.
     * 
     * @param ARRStatusDetail
     */
    public void setARRStatusDetail(sg.com.ccn.FSU.ARRStatusDetail ARRStatusDetail) {
        this.ARRStatusDetail = ARRStatusDetail;
    }


    /**
     * Gets the AWRStatusDetail value for this FSU.
     * 
     * @return AWRStatusDetail
     */
    public sg.com.ccn.FSU.AWRStatusDetail getAWRStatusDetail() {
        return AWRStatusDetail;
    }


    /**
     * Sets the AWRStatusDetail value for this FSU.
     * 
     * @param AWRStatusDetail
     */
    public void setAWRStatusDetail(sg.com.ccn.FSU.AWRStatusDetail AWRStatusDetail) {
        this.AWRStatusDetail = AWRStatusDetail;
    }


    /**
     * Gets the FOHStatusDetail value for this FSU.
     * 
     * @return FOHStatusDetail
     */
    public sg.com.ccn.FSU.FOHStatusDetail getFOHStatusDetail() {
        return FOHStatusDetail;
    }


    /**
     * Sets the FOHStatusDetail value for this FSU.
     * 
     * @param FOHStatusDetail
     */
    public void setFOHStatusDetail(sg.com.ccn.FSU.FOHStatusDetail FOHStatusDetail) {
        this.FOHStatusDetail = FOHStatusDetail;
    }


    /**
     * Gets the PUPStatusDetail value for this FSU.
     * 
     * @return PUPStatusDetail
     */
    public sg.com.ccn.FSU.PUPStatusDetail getPUPStatusDetail() {
        return PUPStatusDetail;
    }


    /**
     * Sets the PUPStatusDetail value for this FSU.
     * 
     * @param PUPStatusDetail
     */
    public void setPUPStatusDetail(sg.com.ccn.FSU.PUPStatusDetail PUPStatusDetail) {
        this.PUPStatusDetail = PUPStatusDetail;
    }


    /**
     * Gets the PODStatusDetail value for this FSU.
     * 
     * @return PODStatusDetail
     */
    public sg.com.ccn.FSU.PODStatusDetail getPODStatusDetail() {
        return PODStatusDetail;
    }


    /**
     * Sets the PODStatusDetail value for this FSU.
     * 
     * @param PODStatusDetail
     */
    public void setPODStatusDetail(sg.com.ccn.FSU.PODStatusDetail PODStatusDetail) {
        this.PODStatusDetail = PODStatusDetail;
    }


    /**
     * Gets the ULDDescription value for this FSU.
     * 
     * @return ULDDescription
     */
    public sg.com.ccn.FSU.ULDDescription[] getULDDescription() {
        return ULDDescription;
    }


    /**
     * Sets the ULDDescription value for this FSU.
     * 
     * @param ULDDescription
     */
    public void setULDDescription(sg.com.ccn.FSU.ULDDescription[] ULDDescription) {
        this.ULDDescription = ULDDescription;
    }

    public sg.com.ccn.FSU.ULDDescription getULDDescription(int i) {
        return this.ULDDescription[i];
    }

    public void setULDDescription(int i, sg.com.ccn.FSU.ULDDescription _value) {
        this.ULDDescription[i] = _value;
    }


    /**
     * Gets the OSI value for this FSU.
     * 
     * @return OSI
     */
    public sg.com.ccn.FSU.OSI getOSI() {
        return OSI;
    }


    /**
     * Sets the OSI value for this FSU.
     * 
     * @param OSI
     */
    public void setOSI(sg.com.ccn.FSU.OSI OSI) {
        this.OSI = OSI;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FSU)) return false;
        FSU other = (FSU) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.standardMessageIdentification==null && other.getStandardMessageIdentification()==null) || 
             (this.standardMessageIdentification!=null &&
              this.standardMessageIdentification.equals(other.getStandardMessageIdentification()))) &&
            ((this.consignmentDetail==null && other.getConsignmentDetail()==null) || 
             (this.consignmentDetail!=null &&
              this.consignmentDetail.equals(other.getConsignmentDetail()))) &&
            ((this.RCSStatusDetail==null && other.getRCSStatusDetail()==null) || 
             (this.RCSStatusDetail!=null &&
              this.RCSStatusDetail.equals(other.getRCSStatusDetail()))) &&
            ((this.RCTStatusDetail==null && other.getRCTStatusDetail()==null) || 
             (this.RCTStatusDetail!=null &&
              this.RCTStatusDetail.equals(other.getRCTStatusDetail()))) &&
            ((this.RCFStatusDetail==null && other.getRCFStatusDetail()==null) || 
             (this.RCFStatusDetail!=null &&
              this.RCFStatusDetail.equals(other.getRCFStatusDetail()))) &&
            ((this.BKDStatusDetail==null && other.getBKDStatusDetail()==null) || 
             (this.BKDStatusDetail!=null &&
              this.BKDStatusDetail.equals(other.getBKDStatusDetail()))) &&
            ((this.MANStatusDetail==null && other.getMANStatusDetail()==null) || 
             (this.MANStatusDetail!=null &&
              this.MANStatusDetail.equals(other.getMANStatusDetail()))) &&
            ((this.DEPStatusDetail==null && other.getDEPStatusDetail()==null) || 
             (this.DEPStatusDetail!=null &&
              this.DEPStatusDetail.equals(other.getDEPStatusDetail()))) &&
            ((this.PREStatusDetail==null && other.getPREStatusDetail()==null) || 
             (this.PREStatusDetail!=null &&
              this.PREStatusDetail.equals(other.getPREStatusDetail()))) &&
            ((this.TRMStatusDetail==null && other.getTRMStatusDetail()==null) || 
             (this.TRMStatusDetail!=null &&
              this.TRMStatusDetail.equals(other.getTRMStatusDetail()))) &&
            ((this.TFDStatusDetail==null && other.getTFDStatusDetail()==null) || 
             (this.TFDStatusDetail!=null &&
              this.TFDStatusDetail.equals(other.getTFDStatusDetail()))) &&
            ((this.NFDStatusDetail==null && other.getNFDStatusDetail()==null) || 
             (this.NFDStatusDetail!=null &&
              this.NFDStatusDetail.equals(other.getNFDStatusDetail()))) &&
            ((this.AWDStatusDetail==null && other.getAWDStatusDetail()==null) || 
             (this.AWDStatusDetail!=null &&
              this.AWDStatusDetail.equals(other.getAWDStatusDetail()))) &&
            ((this.CCDStatusDetail==null && other.getCCDStatusDetail()==null) || 
             (this.CCDStatusDetail!=null &&
              this.CCDStatusDetail.equals(other.getCCDStatusDetail()))) &&
            ((this.DLVStatusDetail==null && other.getDLVStatusDetail()==null) || 
             (this.DLVStatusDetail!=null &&
              this.DLVStatusDetail.equals(other.getDLVStatusDetail()))) &&
            ((this.DISStatusDetail==null && other.getDISStatusDetail()==null) || 
             (this.DISStatusDetail!=null &&
              this.DISStatusDetail.equals(other.getDISStatusDetail()))) &&
            ((this.CRCStatusDetail==null && other.getCRCStatusDetail()==null) || 
             (this.CRCStatusDetail!=null &&
              this.CRCStatusDetail.equals(other.getCRCStatusDetail()))) &&
            ((this.DDLStatusDetail==null && other.getDDLStatusDetail()==null) || 
             (this.DDLStatusDetail!=null &&
              this.DDLStatusDetail.equals(other.getDDLStatusDetail()))) &&
            ((this.TGCStatusDetail==null && other.getTGCStatusDetail()==null) || 
             (this.TGCStatusDetail!=null &&
              this.TGCStatusDetail.equals(other.getTGCStatusDetail()))) &&
            ((this.ARRStatusDetail==null && other.getARRStatusDetail()==null) || 
             (this.ARRStatusDetail!=null &&
              this.ARRStatusDetail.equals(other.getARRStatusDetail()))) &&
            ((this.AWRStatusDetail==null && other.getAWRStatusDetail()==null) || 
             (this.AWRStatusDetail!=null &&
              this.AWRStatusDetail.equals(other.getAWRStatusDetail()))) &&
            ((this.FOHStatusDetail==null && other.getFOHStatusDetail()==null) || 
             (this.FOHStatusDetail!=null &&
              this.FOHStatusDetail.equals(other.getFOHStatusDetail()))) &&
            ((this.PUPStatusDetail==null && other.getPUPStatusDetail()==null) || 
             (this.PUPStatusDetail!=null &&
              this.PUPStatusDetail.equals(other.getPUPStatusDetail()))) &&
            ((this.PODStatusDetail==null && other.getPODStatusDetail()==null) || 
             (this.PODStatusDetail!=null &&
              this.PODStatusDetail.equals(other.getPODStatusDetail()))) &&
            ((this.ULDDescription==null && other.getULDDescription()==null) || 
             (this.ULDDescription!=null &&
              java.util.Arrays.equals(this.ULDDescription, other.getULDDescription()))) &&
            ((this.OSI==null && other.getOSI()==null) || 
             (this.OSI!=null &&
              this.OSI.equals(other.getOSI())));
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
        if (getStandardMessageIdentification() != null) {
            _hashCode += getStandardMessageIdentification().hashCode();
        }
        if (getConsignmentDetail() != null) {
            _hashCode += getConsignmentDetail().hashCode();
        }
        if (getRCSStatusDetail() != null) {
            _hashCode += getRCSStatusDetail().hashCode();
        }
        if (getRCTStatusDetail() != null) {
            _hashCode += getRCTStatusDetail().hashCode();
        }
        if (getRCFStatusDetail() != null) {
            _hashCode += getRCFStatusDetail().hashCode();
        }
        if (getBKDStatusDetail() != null) {
            _hashCode += getBKDStatusDetail().hashCode();
        }
        if (getMANStatusDetail() != null) {
            _hashCode += getMANStatusDetail().hashCode();
        }
        if (getDEPStatusDetail() != null) {
            _hashCode += getDEPStatusDetail().hashCode();
        }
        if (getPREStatusDetail() != null) {
            _hashCode += getPREStatusDetail().hashCode();
        }
        if (getTRMStatusDetail() != null) {
            _hashCode += getTRMStatusDetail().hashCode();
        }
        if (getTFDStatusDetail() != null) {
            _hashCode += getTFDStatusDetail().hashCode();
        }
        if (getNFDStatusDetail() != null) {
            _hashCode += getNFDStatusDetail().hashCode();
        }
        if (getAWDStatusDetail() != null) {
            _hashCode += getAWDStatusDetail().hashCode();
        }
        if (getCCDStatusDetail() != null) {
            _hashCode += getCCDStatusDetail().hashCode();
        }
        if (getDLVStatusDetail() != null) {
            _hashCode += getDLVStatusDetail().hashCode();
        }
        if (getDISStatusDetail() != null) {
            _hashCode += getDISStatusDetail().hashCode();
        }
        if (getCRCStatusDetail() != null) {
            _hashCode += getCRCStatusDetail().hashCode();
        }
        if (getDDLStatusDetail() != null) {
            _hashCode += getDDLStatusDetail().hashCode();
        }
        if (getTGCStatusDetail() != null) {
            _hashCode += getTGCStatusDetail().hashCode();
        }
        if (getARRStatusDetail() != null) {
            _hashCode += getARRStatusDetail().hashCode();
        }
        if (getAWRStatusDetail() != null) {
            _hashCode += getAWRStatusDetail().hashCode();
        }
        if (getFOHStatusDetail() != null) {
            _hashCode += getFOHStatusDetail().hashCode();
        }
        if (getPUPStatusDetail() != null) {
            _hashCode += getPUPStatusDetail().hashCode();
        }
        if (getPODStatusDetail() != null) {
            _hashCode += getPODStatusDetail().hashCode();
        }
        if (getULDDescription() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getULDDescription());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getULDDescription(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getOSI() != null) {
            _hashCode += getOSI().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(FSU.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FSU"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("standardMessageIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "StandardMessageIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "StandardMessageIdentification"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consignmentDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ConsignmentDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ConsignmentDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCSStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCSStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "RCSStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCTStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCTStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "RCTStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCFStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCFStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "RCFStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("BKDStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "BKDStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "BKDStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("MANStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MANStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MANStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DEPStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DEPStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DEPStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PREStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PREStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PREStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("TRMStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TRMStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TRMStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("TFDStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TFDStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TFDStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("NFDStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NFDStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "NFDStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWDStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWDStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AWDStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CCDStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CCDStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CCDStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DLVStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DLVStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DLVStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DISStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DISStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DISStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CRCStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CRCStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CRCStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DDLStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DDLStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DDLStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("TGCStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TGCStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TGCStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ARRStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ARRStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ARRStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWRStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWRStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AWRStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("FOHStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FOHStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FOHStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PUPStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PUPStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PUPStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PODStatusDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PODStatusDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PODStatusDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ULDDescription");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ULDDescription"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ULDDescription"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("OSI");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OSI"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OSI"));
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
