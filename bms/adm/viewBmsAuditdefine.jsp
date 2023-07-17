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
编辑时间:${m.editTime}<br />操作名称:${m.auditOperate}<br />URI地址:${m.auditUrl}<br />所属应用:${m.auditApp}<br />是否成功判定:${m.sucessfulTemplate}<br />操作实体:${m.auditEntry}<br />操作描述模板:${m.descTemplate}<br /><br />
<br />	</body>
</html>
