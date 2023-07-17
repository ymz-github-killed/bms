<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>listBmsUser</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
	</head>
	<body style="font-size: 12px;">
		<!-- 部门下用户列表 -->
		<ec:table title="<b>该部门对应的用户列表</b>" tableId="BmsUserExList" method="post" items="userList" var="m"
			action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="7" view="compact">
			<ec:row>
				<ec:column title="登录名" property="userLoginName"></ec:column>
				<ec:column title="真实姓名" property="userRealName" />
				<ec:column title="性别" property="userSex" filterCell="droplist"
					filterOptions="BMSDOMAIN.SEX">
					<domain:viewDomain domain="SEX" value="${m.userSex}" />
				</ec:column>
				<ec:column title="状态" property="userStatus" filterCell="droplist"
					filterOptions="BMSDOMAIN.dataIsused">
					<domain:viewDomain domain="dataIsused" value="${m.userStatus}" />
				</ec:column>
			</ec:row>
		</ec:table>
	</body>
</html>
