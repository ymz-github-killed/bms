<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib  uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'error.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
    
  	  异常操作<br>
    ${error }
    <br>
  	<a href="###" onclick="back()">返回</a>
    <br>
   	</body>
  <script type="text/javascript">
  function back(){
	  window.parent.location.href="${pageContext.request.contextPath}/login/tologin.controller";
  }
  if(window.parent!=window){
	  if("${error}"!=""){
	  	window.parent.alert("${error}");
	  }
	  back();
  }
  </script>
</html>
