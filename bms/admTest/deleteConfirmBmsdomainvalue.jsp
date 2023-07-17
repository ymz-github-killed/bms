<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>deleteConfirm</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript">
			function btn_del_click()
			{
				hideframe.location.href="${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/deleteBmsDomainvalue.do";
			}
		</script>
	</head>
	<body style="font-size:12px;">
		<div style="text-align: left; background: #f0f0f0; padding: 5px;">
			您确认要删除如下数据么？
			<a href="#" onclick="btn_del_click()">删除</a>
			<a href="${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/queryBmsDomainvalue.do">返回</a>
		</div>
	
		<ec:table items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" filterable="false" showPagination="false">
			<ec:row>
				<ec:column title="键" property="label" />

				<ec:column title="域编号" property="tbTBmsDomainDTO.name" />

				<ec:column title="值" property="value" />

			</ec:row>
		</ec:table>
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
