<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.util.*" %>
<%if(session.getAttribute("UserName")==null){response.sendRedirect("login.html");}%>
<html>
<script type="text/javascript" src="swfupload.js"></script>
<script type="text/javascript" src="handlers.js"></script>
<script type="text/javascript">
        var swfu;
        var PId='<%=request.getParameter("PId")%>';
        var PName='<%=request.getParameter("PName")%>';
        var PIds='<%=request.getParameter("PIds")%>';
        var url='http://www.hitisoft.com:8080/hcms/MainServlet;jsessionid=<%=session.getId()%>?A=FILE_U&uf=1&RType=F&privateFlag=0&PId='+PId+'&PName='+PName+'&PIds='+PIds;
        window.onload = function () {
        var swfu = new SWFUpload({
                upload_url:url,
                file_size_limit : "2 MB",
                file_upload_limit : "0",
                file_queue_error_handler : fileQueueError,
                file_dialog_complete_handler : fileDialogComplete,
                upload_progress_handler : uploadProgress,
                upload_error_handler : uploadError,
                upload_success_handler : uploadSuccess,
                upload_complete_handler : uploadComplete,
                button_placeholder_id : "spanButtonPlaceholder",
                button_image_url : "images/swfupload.png",
                button_width: 61,
                button_height: 22,
                flash_url : "swfupload.swf",
                custom_settings : {
                    upload_target : "divFileProgressContainer"
                },
                debug: false
            });  
        }
</script>
<head>
<title>HCMS --内容管理系统   上海海钛软件科技有限公司</title>
<link rel="stylesheet" type="text/css" href="cms.css" />
</head>
<body id="docs">

<div id="content">
       <form>
        <div style="padding-left: 5px;">
            <span id="spanButtonPlaceholder"></span>
        </div>
    </form>
        <div id="divFileProgressContainer" style="height:100px;"></div>
</div>

</body>
</html>