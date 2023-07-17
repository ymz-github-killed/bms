<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>选择部门</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<link href="${pageContext.request.contextPath}/css/yh.css"
			rel="stylesheet" type="text/css">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript"
			src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>
	</head>
	<body style="font-size: 12px;">
		<br />
		<div id="toolbar"
			style="text-align: left; font-size: 14px; font-weight: bold;">
			请选择用户所属的部门(点击部门名称进行选择): 
			<button onclick="parent.showSelDiv('locationDiv',true);" class="button5">返回</button>
		</div>
		<ec:table tableId="BmsLocationList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="部门名称" property="name">
					<a style="color: blue;border-bottom: 1px solid blue;" href="javascript:parent.selLocationSuc('${m.id}','${m.name}');">${m.name}</a>
				</ec:column>
				<ec:column title="层次结构" property="stepinfo" />
				<ec:column title="备注" property="remark" />
			</ec:row>
		</ec:table>
	</body>
</html>
