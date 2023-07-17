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
		<link href="${pageContext.request.contextPath}/css/yh.css"
			rel="stylesheet" type="text/css">

		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript">
			function btn_del_click()
			{
				hideframe.location.href="${pageContext.request.contextPath}/bms/adm/bmsrole/deleteBmsRole.do";
			}
		</script>
	</head>
	<body style="font-size: 12px;">
		<div style="text-align: left; background: #f0f0f0; padding: 5px;">
			您确认要删除如下数据么？
			<input name="Button22" type="button" class="button5" value="删除"
				onclick="btn_del_click()" />
			<input name="Button22" type="button" class="button5" value="返回"
				onclick="location.href='${pageContext.request.contextPath}${ATX_.context.backUrlStore}'"
				style="width: 60px;" />
		</div>

		<ec:table items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" filterable="false"
			showPagination="false">
			<ec:row>
				<ec:column title="角色名称" property="name">
				</ec:column>
				<ec:column title="所属部门" property="tbTBmsLocationDTO.name"
					alias="locationName" />
				<ec:column title="备注" property="remark"></ec:column>
			</ec:row>
		</ec:table>
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
