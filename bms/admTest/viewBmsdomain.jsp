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
		
		<style type="text/css">
			table {
				font-size: 14px;
			}
		</style>
		
	</head>
	<body>
<form action="/bms/domain/bmsdomain/queryBmsDomain.do">
	<table border="0" cellpadding="0" cellspacing="0" width="100%">
		<tr>
			
			<td width="20%">字典名称：${m.remark }</td>
			<td width="10%">描述:${m.remark}</td>
			<td><input type="submit" value=" 返 回 " /></td>
		</tr>
	</table>
</form>
<br />		<ec:table title="数据字典值域" items="listTBmsDomainvalueDTO" var="mBmsDomain" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="PK" property="id">
				</ec:column>
				<ec:column title="名称" property="domainlabel" />
				<ec:column title="值" property="domainvalue" />
			</ec:row>
		</ec:table>
<br />
<br />
	</body>
</html>
