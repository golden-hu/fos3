<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.util.*" %>
<%if(session.getAttribute("UserName")==null){response.sendRedirect("login.html");}%>
<html>
<style type="text/css">
    .swfupload {
        position: absolute;
        z-index: 1;
    }
</style>

<script type="text/javascript" src="resource_cms_Zh_Cn.js"></script>
<script type="text/javascript" src="adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="ext-all.js"></script>
<script type="text/javascript" src="constant.js"></script>
<script type="text/javascript" src="cms-store.js"></script>
<script type="text/javascript" src="sys.js"></script>
<script type="text/javascript" src="util.js"></script>
<script type="text/javascript" src="cms-util.js"></script>
<script type="text/javascript" src="cms.js"></script>
<script type="text/javascript" src="swfupload.js"></script>
<script type="text/javascript" src="handlers.js"></script>
<script src="jquery.min.js"></script>
<script src="jquery.Jcrop.js"></script>

<head>
<title>HCMS --内容管理系统   上海海钛软件科技有限公司</title>
<link rel="stylesheet" type="text/css" href="resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css" href="cms.css" />
<link rel="stylesheet" href="jquery.Jcrop.css" type="text/css" />
<script type="text/javascript">
    window.onbeforeunload = function(){Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'LOGOUT'}});};
</script>
</head>
<body id="docs">
<div id="loading-mask" style=""></div>
  <div id="loading">
    <div class="loading-indicator"><img src="../resources/images/default/shared/large-loading.gif" width="32" height="32" style="margin-right:8px;" align="absmiddle"/>Loading...</div>
</div>
<div id="west"></div>
<div id="north">
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
  <td align="left" nowrap="nowrap">
   <img src='images/cms-logo.png'>
  </td>
  <td align="right"nowrap="nowrap">
  <font face="Arial, sans-serif" size="-1">您好！<%=session.getAttribute("UserName")%>
  |<a href='#' onclick="javascript:changePass();">修改密码</a>
  |<a href='#' onclick="javascript:logout();">退出</a>|&nbsp;&nbsp;【FOS2008 海钛软件出品】
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