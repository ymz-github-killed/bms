<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'add.jsp' starting page</title>
    
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
	±à¼­Ò³Ãæ    
	
 <br>
    <form action="${pageContext.request.contextPath}/example/document/edit.do">
		title:    	<input type="text" name="title" value="${doc.title }"><br/>
		content:	<input type="text" name="content" value="${doc.content}"/><br/>
		<input type="hidden" name="id" value="${doc.id}" >
		<input type="submit" >
    </form>
  </body>
</html>
