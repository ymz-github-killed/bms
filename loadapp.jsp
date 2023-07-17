<%@ page contentType="text/html; charset=GBK"%>
<%@ page import="com.sinovatech.mvcbms.index.bean.RscFuncBean"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>正在加载... ...</title>

		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<!-- <meta http-equiv="Refresh" content="0;url=${pageContext.request.contextPath}/bms/adm/main.do">     -->
	</head>

	<body style="padding: 100px;">
	<!-- <%=request.getContextPath()%> -->
		<img border="0" alt="加载中" src="<%=request.getContextPath()%>/mvcbms/pub/images/spinner2.gif"/>正在加载.. ...
	<%
		String credital = (String) request.getAttribute("credital");
		String cluster=(String) request.getAttribute("cluster");
		RscFuncBean rsc = (RscFuncBean) request.getAttribute("rsc");
		
		if ("0".equals(rsc.getOuteraddr()))
		{//内部地址
	%>
			<script type="text/javascript">
		  		location.href="${pageContext.request.contextPath}/<%=rsc.getUrl()%>" ;
		  	</script>
	<%
		}
		else
		{
			if("1".equals(rsc.getHttpmethod()))
			{//外部地址POST方式请求
	%>
				<form name="postform" action="<%=rsc.getUrl()%>" method="post">
					<input type="hidden" name="c_" value="<%=credital%>" />
					<input type="hidden" name="cluster" value="<%=cluster%>" />
					
				</form>
				<script type="text/javascript">
					document.postform.submit();
				</script>
	<%
			}
			else
			{
				//外部地址get方式请求
				String url = rsc.getUrl();
				url += rsc.getUrl().indexOf("?")==-1?"?":"&";
				url += "c_=" +credital+"&cluster=" +cluster;
	%>
			<script type="text/javascript">
		  		location.href="<%=url%>" ;
		  	</script>
	<%
			}
		}
	%>
	</body>
</html>