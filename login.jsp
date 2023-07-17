<%@ page language="java"  pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String agent = request.getHeader("User-Agent").toLowerCase();
%>
<base href="<%=basePath%>">
<%-- <%
if(agent.contains("msie 6") || agent.contains("msie 7") || agent.contains("msie 8")){
%>
<jsp:forward page="theme/bmsHTGL/browser.html"></jsp:forward>
<%
} else {
%> --%>
<jsp:forward page="login/tologin.controller"></jsp:forward>
<%-- <%
}
%> --%>