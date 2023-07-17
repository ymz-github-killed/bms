<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<base href="<%=basePath%>">
<jsp:include  page="${pageDTO.htmlUrl }"></jsp:include>
<script type="text/javascript" src="${pageContext.request.contextPath}/mvcbms/pub/js/componentUtil.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/mvcbms/pub/js/navtree.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/mvcbms/${pageDTO.pageJs}"></script>
