<%@ page contentType="text/html; charset=GBK"%>
<html>
	<frameset cols="210,*" name="topwin" framespacing="0" border="0"
		frameborder="0">
		<frame
			src="${pageContext.request.contextPath}/bms/adm/bmsdept/queryBmsDept.do"
			name="left" noresize marginwidth="0" marginheight="0" id="left">
		<frameset cols="9,*" framespacing="0" border="0" frameborder="0">
			<frame
				src="${pageContext.request.contextPath}/bms/adm/main_middle.jsp"
				name="middle" noresize marginwidth="0" marginheight="0" id="middle"
				scrolling="auto">
			<frame src="${pageContext.request.contextPath}/bms/adm/dept_home.jsp"
				name="welcome" noresize marginwidth="0" marginheight="0" id="main">
		</frameset>
	</frameset>
	<noframes>
		<body>
		</body>
	</noframes>
</html>