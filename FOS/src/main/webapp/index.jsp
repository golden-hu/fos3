<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.util.*" %>
<%if(session.getAttribute("UserName")==null){response.sendRedirect("login.html");}%>
<%!String PhotoAddress="" ;%>
<%if(session.getAttribute("CompCode").equals("CNWL")){PhotoAddress ="images/CNWL.png";} else{PhotoAddress="images/fos.png";}%>
<html>
<head>
<title>FOS3.0货代运营系统 上海海钛软件科技有限公司</title>
<link rel="stylesheet" type="text/css" href="fos.css" />
<link rel="stylesheet" type="text/css" href="js/ext/resources/css/ext-all.css" />
<script type="text/javascript" src="js/ext/adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="js/ext/ext-all.js"></script>
<script type="text/javascript" src="js/resource_Zh_Cn.js"></script>
<script type="text/javascript" src="js/version.js"></script>
<script type="text/javascript" src="js/constant.js"></script>
<script type="text/javascript" src="js/fos-sys.js"></script>
<script type="text/javascript" src="js/store.js"></script>
<script type="text/javascript" src="js/fos-gen.js"></script>
<script type="text/javascript" src="js/util.js"></script>
<script type="text/javascript" src="js/fos-report.js"></script>

<script type="text/javascript" src="js/fos.js"></script>
<script type="text/javascript" src="js/fos-cust.js"></script>
<script type="text/javascript" src="js/fos-set.js"></script>
<script type="text/javascript" src="js/fos-exp.js"></script>
<script type="text/javascript" src="js/fos-section.js"></script>
<script type="text/javascript" src="js/fos-imp.js"></script>
<script type="text/javascript" src="js/fos-air.js"></script>
<script type="text/javascript" src="js/fos-rail.js"></script>
<script type="text/javascript" src="js/fos-customs.js"></script>
<script type="text/javascript" src="js/fos-ws.js"></script>
<script type="text/javascript" src="js/ys-cont.js"></script>
</head>
<body id="docs">
<div id="loading-mask" style=""></div>
  <div id="loading">
    <div class="loading-indicator"><img src="js/ext/resources/images/default/shared/large-loading.gif" width="32" height="32" style="margin-right:8px;" align="middle"/>Loading...</div>
</div>
<div id="west"></div>
<div id="north">
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
  <td align="left" nowrap="nowrap"><img src=<%=PhotoAddress%> width=200 height=60></td>
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
