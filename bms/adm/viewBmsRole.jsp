<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<title>Insert title here</title>
	</head>
	<body>
���ű��:${m.locationid}<br /><br />
<br />		<ec:table title="��ɫ" items="listTBmsRoleFuncDTO" var="mBmsRole" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="PK" property="id">
				</ec:column>
				<ec:column title="���ű��" property="locationid" />
			</ec:row>
		</ec:table>
<br />
<br />
		<ec:table title="��ɫ" items="listTBmsUserRoleDTO" var="mBmsRole" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="PK" property="id">
				</ec:column>
				<ec:column title="���ű��" property="locationid" />
			</ec:row>
		</ec:table>
<br />
<br />
	</body>
</html>
