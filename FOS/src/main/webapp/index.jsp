<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.util.*" %>

<%
	String PhotoAddress="images/fos.png";
	if(session.getAttribute("UserName")==null){
		response.sendRedirect("login.html");
	}
%>
<html>
<head>
<title>FOS3.0货代运营系统 上海海钛软件科技有限公司</title>
<link rel="stylesheet" type="text/css" href="fos.css" />
<link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all.css" />
<script type="text/javascript" src="ext/adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="ext/ext-all.js"></script>


<script type="text/javascript" src="js/resource_Zh_Cn.js"></script>
<script type="text/javascript" src="js/version.js"></script>
<script type="text/javascript" src="js/constant.js"></script>
<script type="text/javascript" src="js/util.js"></script>

<script type="text/javascript" src="js/store/store-biz.js"></script>
<script type="text/javascript" src="js/store/store-crm.js"></script>
<script type="text/javascript" src="js/store/store-set.js"></script>
<script type="text/javascript" src="js/store/store-sys.js"></script>
<script type="text/javascript" src="js/store/store-gen.js"></script>

<script type="text/javascript" src="js/sys/actionLog.js"></script>
<script type="text/javascript" src="js/sys/config.js"></script>
<script type="text/javascript" src="js/sys/group.js"></script>
<script type="text/javascript" src="js/sys/mailList.js"></script>
<script type="text/javascript" src="js/sys/message.js"></script>
<script type="text/javascript" src="js/sys/role.js"></script>
<script type="text/javascript" src="js/sys/task.js"></script>
<script type="text/javascript" src="js/sys/template.js"></script>
<script type="text/javascript" src="js/sys/user.js"></script>

<script type="text/javascript" src="js/gen/gen-biz.js"></script>
<script type="text/javascript" src="js/gen/gen-custom.js"></script>
<script type="text/javascript" src="js/gen/gen-place.js"></script>
<script type="text/javascript" src="js/gen/gen-set.js"></script>

<script type="text/javascript" src="js/fos-report.js"></script>
<script type="text/javascript" src="js/fos.js"></script>
<script type="text/javascript" src="js/doc.js"></script>

<script type="text/javascript" src="js/crm/customer.js"></script>
<script type="text/javascript" src="js/crm/price.js"></script>
<script type="text/javascript" src="js/crm/commission.js"></script>

<script type="text/javascript" src="js/set/finInterface.js"></script>
<script type="text/javascript" src="js/set/consign_audit.js"></script>
<script type="text/javascript" src="js/set/expense.js"></script>

<script type="text/javascript" src="js/set/ExpensePanel.js"></script>
<script type="text/javascript" src="js/set/ExpenseGrid.js"></script>
<script type="text/javascript" src="js/set/ExpenseList.js"></script>

<script type="text/javascript" src="js/set/invoice.js"></script>
<script type="text/javascript" src="js/set/voucher.js"></script>
<script type="text/javascript" src="js/set/pr.js"></script>
<script type="text/javascript" src="js/set/bill.js"></script>

<script type="text/javascript" src="js/biz/consign.js"></script>
<script type="text/javascript" src="js/biz/booking.js"></script>
<script type="text/javascript" src="js/biz/trans.js"></script>
<script type="text/javascript" src="js/biz/warehouse.js"></script>
<script type="text/javascript" src="js/biz/container.js"></script>
<script type="text/javascript" src="js/biz/inspection.js"></script>
<script type="text/javascript" src="js/biz/CustomsTab.js"></script>

<script type="text/javascript" src="js/biz/bl.js"></script>
<script type="text/javascript" src="js/biz/section.js"></script>
<script type="text/javascript" src="js/biz/cargo.js"></script>
<script type="text/javascript" src="js/biz/imp.js"></script>

<script type="text/javascript" src="js/customs/cude.js"></script>
<script type="text/javascript" src="js/customs/CustomsDeclearTab.js"></script>
<script type="text/javascript" src="js/customs/insp.js"></script>
<script type="text/javascript" src="js/customs/InspectionDeclTab.js"></script>
<script type="text/javascript" src="js/customs/trade.js"></script>
<script type="text/javascript" src="js/customs/reliefTax.js"></script>
<script type="text/javascript" src="js/customs/entReg.js"></script>

<script type="text/javascript" src="js/ws/fos-ws.js"></script>

</head>
<body id="docs">
<div id="loading-mask" style=""></div>
  <div id="loading">
    <div class="loading-indicator"><img src="ext/resources/images/default/shared/large-loading.gif" width="32" height="32" style="margin-right:8px;" align="middle"/>Loading...</div>
</div>
<div id="west"></div>
<div id="north">
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
  <td align="left" nowrap="nowrap"><img src=<%=PhotoAddress%> width=180 height = 60></td>
  <td align="right"nowrap="nowrap">
  <font size="-1">您好！<%=session.getAttribute("UserName")%>
 |<a href='#' onclick="javascript:changePass();">修改密码</a>|<a href='#' onclick="javascript:logout();">退出</a>|<a href='http://www.hitisoft.com:8080/hcms/help.jsp' target="_blank">在线帮助</a>|&nbsp;&nbsp;
  </font>
  </td>
  </tr>
  <tr>
  <td><img width="1" height="1" alt="" /></td>
  </tr>
 </table>
  </div>
</body>
</html>
