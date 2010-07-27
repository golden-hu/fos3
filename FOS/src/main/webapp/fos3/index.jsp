<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.util.*" %>
<%if(session.getAttribute("username")==null){response.sendRedirect("login.html");}%>
<html>
<script type="text/javascript" src="./adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="resource_Zh_Cn.js"></script>
<script type="text/javascript" src="ext-all.js"></script>
<script type="text/javascript" src="constant.js"></script>
<script type="text/javascript" src="fos-sys.js"></script>
<script type="text/javascript" src="store.js"></script>
<script type="text/javascript" src="fos-gen.js"></script>
<script type="text/javascript" src="util.js"></script>

<script type="text/javascript" src="fos.js"></script>
<script type="text/javascript" src="fos-cust.js"></script>
<script type="text/javascript" src="fos-set.js"></script>
<script type="text/javascript" src="fos-exp.js"></script>
<script type="text/javascript" src="fos-imp.js"></script>
<script type="text/javascript" src="fos-air.js"></script>
<script type="text/javascript" src="fos-ws.js"></script>
<head>
<title>FOS3.0货代运营系统 上海海钛软件科技有限公司</title>
<link rel="stylesheet" type="text/css" href="./resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css" href="fos.css" />
</head>
<body id="docs">
<div id="loading-mask" style=""></div>
  <div id="loading">
    <div class="loading-indicator"><img src="./resources/images/default/shared/large-loading.gif" width="32" height="32" style="margin-right:8px;" align="absmiddle"/>Loading...</div>
</div>
<div id="west"></div>
<div id="north">
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
  <td align="left" nowrap="nowrap"><img src='./images/fos2008.gif'></td>
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
<div id="gen-grid">
</body>
</html>