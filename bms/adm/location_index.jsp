<%@ page contentType="text/html; charset=GBK"%>
<html>
	 <frameset cols="210,*" name="topwin" id="topwin" framespacing="0" border="0" frameborder="0" style="height:100%;">
      <frame src="${pageContext.request.contextPath}/bms/adm/listBmsLocation.jsp" name="left" noresize marginwidth="0" marginheight="0" id="left">
      <frameset cols="9,*" framespacing="0" border="0" frameborder="0">
        <frame src="${pageContext.request.contextPath}/bms/adm/main_middle.jsp" name="middle" noresize marginwidth="0" marginheight="0" id="middle" scrolling="no">
        <frame src="${pageContext.request.contextPath}/bms/adm/location_home.jsp" name="welcome" noresize marginwidth="0" marginheight="0" id="main">
      </frameset>
  </frameset>
<noframes><body>
</body></noframes>
</html>