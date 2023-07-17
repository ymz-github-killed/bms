<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<jsp:directive.page import="org.springframework.context.ApplicationContext"/>
<jsp:directive.page import="org.springframework.web.context.support.WebApplicationContextUtils"/>
<jsp:directive.page import="com.opensymphony.workflow.spi.hibernate3.SpringHibernateWorkflowStore"/>
<jsp:directive.page import="com.opensymphony.workflow.spi.WorkflowEntry"/>
<jsp:directive.page import="com.opensymphony.workflow.spi.WorkflowStore"/>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'mytest.jsp' starting page</title>
    
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
    This is my JSP page. <br>
    <%
    	   ApplicationContext context=WebApplicationContextUtils.getWebApplicationContext(application);
    	   System.out.print(context.getBean("workflowStore").getClass());
			WorkflowStore store=(WorkflowStore) context.getBean("workflowStore");
			WorkflowEntry entry=store.createEntry("Hello!");
			
			out.print(entry.getId());
			
    	
     %>
  </body>
</html>
