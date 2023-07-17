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
				hideframe.location.href="${pageContext.request.contextPath}/bms/adm/bmsauditlog/deleteBmsAuditlog.do";
			}
		</script>
	</head>
	<body style="font-size:12px;">
		<div style="text-align: left; background: #f0f0f0; padding: 5px;">
			您确认要删除如下数据么？
			<a href="#" onclick="btn_del_click()">删除</a>
			<a href="${pageContext.request.contextPath}/bms/adm/bmsauditlog/queryBmsAuditlog.do">返回</a>
		</div>
	
		<ec:table items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" filterable="false" showPagination="false">
			<ec:row>
				<ec:column title="应用标识" property="appCode" />

				<ec:column title="操作描述" property="operateDesc" />

				<ec:column title="操作URL" property="url" />

				<ec:column title="操作实体" property="operateEntry" />

				<ec:column title="操作用户" property="userName" />

				<ec:column title="服务器ip地址" property="serviceIp" />

				<ec:column title="操作名称" property="operateName" />

				<ec:column title="操作时间" property="operateDate" />

				<ec:column title="是否成功" property="sucessful" />

				<ec:column title="操作者IP" property="clientIp" />

			</ec:row>
		</ec:table>
		<!-- 数据提交区域，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
