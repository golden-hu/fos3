<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.util.*" %>
<%if(session.getAttribute("WUID")==null){response.sendRedirect("ws-login.html");}%>
<html>
<script type="text/javascript" src="ext/adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="ext/ext-all.js"></script>
<script type="text/javascript" src="js/ws/ws-constants.js"></script>
<script type="text/javascript" src="js/ws/ws-login.js"></script>
<script type="text/javascript" src="js/ws/ws-store.js"></script>
<script type="text/javascript" src="js/ws/ws-util.js"></script>

<script type="text/javascript" src="js/ws/ws-sys.js"></script>
<script type="text/javascript" src="js/ws/ws-inquiry.js"></script>
<script type="text/javascript" src="js/ws/ws-consign.js"></script>
<script type="text/javascript" src="js/ws/ws-bl.js"></script>
<script type="text/javascript" src="js/ws/ws.js"></script>

<head>
<title>FOS3.0网上服务系统  上海海钛软件科技有限公司</title>
<link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css" href="ws.css" />
</head>
<body id="docs">

<div id="west"></div>
<div id="north">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
  <tr>
  <td align="left" nowrap="nowrap" valign='middle'>
   <img src='images/fos.png' width=180>
  </td>
  <td align="right"nowrap="nowrap"><br>
  </td>
  </tr>
  <tr>
  </tr>
 </table>
</div>
</body>
</html>