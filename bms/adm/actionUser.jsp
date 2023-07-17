
<%@ page contentType="text/html; charset=GBK"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.sinovatech.bms.adm.model.dto.TBmsUserDTO"%>
<%@page import="com.sinovatech.common.util.DateUtil"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
	
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link
			href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
			
	<script type="text/javascript">
		function remove (sessionId) {
			document.getElementById("sessionId").value = sessionId;
			document.getElementById("userForm").submit();
		}
	</script>
  </head>
  
  <body>
   <form method="post" action="${pageContext.request.contextPath}/bms/adm/bmsuser/removeUser.do" id="userForm">
    <input type="hidden" name="sessionId" id="sessionId" value="" />
    <ec:table tableId="BmsUserExList" method="post" items="users" var="user" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" >
			<ec:row>
				<ec:column headerCell="selectAll" alias="ckids" width="1%"  filterable="false" sortable="false">
					<input type="checkbox" name="ckids" value="${user.id}" />
					
				</ec:column>
			    <ec:column title="登录名" property="userLoginName" />
					
				<ec:column title="真实姓名" property="userRealName" />
				<ec:column title="登录时间" property="userLoginDate" />	
				<ec:column title="登录Ip" property="ipAddr" />	
				<ec:column title="操作" property="EEE" sortable="false"
					filterable="false">
					<a
						href="#" onclick="remove('${user.sessionId }')">强制登出</a>
					
				</ec:column>
			</ec:row>
		</ec:table>
	 </form>
  </body>
</html>
