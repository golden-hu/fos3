package haitai.fw.entity;

import java.util.Date;

public class AppSubscControl {
	private Integer appId;
	private String appInstanceId;
	private Integer userCount;
	private Date gmtStart;
	private Date gmtEnd;
	private String ctrlParams;
	public Integer getAppId() {
		return appId;
	}
	public void setAppId(Integer appId) {
		this.appId = appId;
	}
	public String getAppInstanceId() {
		return appInstanceId;
	}
	public void setAppInstanceId(String appInstanceId) {
		this.appInstanceId = appInstanceId;
	}
	public Integer getUserCount() {
		return userCount;
	}
	public void setUserCount(Integer userCount) {
		this.userCount = userCount;
	}
	public Date getGmtStart() {
		return gmtStart;
	}
	public void setGmtStart(Date gmtStart) {
		this.gmtStart = gmtStart;
	}
	public Date getGmtEnd() {
		return gmtEnd;
	}
	public void setGmtEnd(Date gmtEnd) {
		this.gmtEnd = gmtEnd;
	}
	public String getCtrlParams() {
		return ctrlParams;
	}
	public void setCtrlParams(String ctrlParams) {
		this.ctrlParams = ctrlParams;
	}
}
