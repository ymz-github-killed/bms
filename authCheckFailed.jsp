<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
	<head>
		<script type="text/javascript">
			//message 为接入总部sso使用
			if('${message}'){
			  alert('${message}');
			  top.location.href='${pageContext.request.contextPath}/error.jsp';
			}else{
			<%
				String refresh = (String)request.getAttribute("noauth");
				if(refresh == null)
				{
			%>
					alert("您还没有登录或登陆超时.");
					top.location.href='${pageContext.request.contextPath}/login.jsp';
			<%
				} else if ("-1".equals(refresh)) {
			%>
					alert("你被管理员强制登出, 请重新登录。");
					top.location.href='${pageContext.request.contextPath}/login.jsp';
			<%
				} else if ("-2".equals(refresh)) {
			%>
					alert("你的IP地址被限制, 无法登录。");
					top.location.href='${pageContext.request.contextPath}/login.jsp';
			<%
				} else {
			%>
					alert("您的工号无权限.");
					history.go(-1);
			<%
				}
			%>
			}
		</script>
	</head>
	<body>
		<b>您的工号无权限.<br />
			<a href="javascript:history.go(-1);">返回</a>
		</b>
	</body>
</html>