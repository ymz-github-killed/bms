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
�����־��:${m.auditClsname}<br />�û���¼�˳���:${m.loginClsname}<br />URL����:${m.appUrl}<br />ǩ���ļ�:${m.signfile}<br />Ӧ������:${m.appName}<br /><br />
<br />		<ec:table title="�ⲿӦ�ù���" items="listTBmsAuditdefineDTO" var="mBmsWebapp" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="PK" property="appCode">
				</ec:column>
				<ec:column title="�����־��" property="auditClsname" />
				<ec:column title="�û���¼�˳���" property="loginClsname" />
				<ec:column title="URL����" property="appUrl" />
				<ec:column title="ǩ���ļ�" property="signfile" />
				<ec:column title="Ӧ������" property="appName" />
			</ec:row>
		</ec:table>
<br />
<br />
	</body>
</html>
