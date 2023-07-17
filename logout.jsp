<%@ page language="java" contentType="text/html; charset=GBK"
	pageEncoding="GBK"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title>退出</title>
<script type="text/javascript">
	<%
	//获取登录用户名
		String exitType=(String)request.getParameter("exitType");
		if(exitType!=null && exitType.equals("exit")){
	%>
		top.location.href="${pageContext.request.contextPath}/login.jsp";
	<%}else{%>
		alert("用户已过期或在其它地方登录，请登录！");
		top.location.href="${pageContext.request.contextPath}/login.jsp";
	<%}%>
		
</script>
</head>
<body>

</body>
</html>