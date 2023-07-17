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
审计日志类:${m.auditClsname}<br />用户登录退出类:${m.loginClsname}<br />URL链接:${m.appUrl}<br />签名文件:${m.signfile}<br />应用名称:${m.appName}<br /><br />
<br />		<ec:table title="外部应用管理" items="listTBmsAuditdefineDTO" var="mBmsWebapp" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="PK" property="appCode">
				</ec:column>
				<ec:column title="审计日志类" property="auditClsname" />
				<ec:column title="用户登录退出类" property="loginClsname" />
				<ec:column title="URL链接" property="appUrl" />
				<ec:column title="签名文件" property="signfile" />
				<ec:column title="应用名称" property="appName" />
			</ec:row>
		</ec:table>
<br />
<br />
	</body>
</html>
