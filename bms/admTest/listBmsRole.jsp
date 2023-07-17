<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>listBmsRole</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript"
			src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>

		<script type="text/javascript">
			function getChecks(name)
			{
				var re = new Array();
				var ck = document.getElementsByName(name);
				for(var i=0; i<ck.length; i++)
				{
					if(ck[i].checked)
					{
						re.push(ck[i].value);
					}
				}
				return re;
			}
		
			function btn_delete_click(id)
			{
				var url = "${pageContext.request.contextPath}/bms/adm/bmsrole/beforeDeleteBmsRole.do";
				if(!$chk(id))
				{
					id = getChecks("ckids").join(",");
					if(!$chk(id))
					{
						alert("请选择一条或多条记录!");
						return;
					}
				}
				document.location.href=url + "?ids=" + id;
			}
			
			function btn_add_click()
			{
				var url = "${pageContext.request.contextPath}/bms/adm/bmsrole/beforeAddBmsRole.do";
				document.location.href=url;
			}			
		</script>
	</head>
	<body style="font-size: 12px;">
		<div id="toolbar">
			<a href="#" onclick="btn_add_click()">增加</a>
			<a href="#" onclick="btn_delete_click()">删除</a>
		</div>
		<br />
		<ec:table tableId="BmsRoleExList" items="list" method="get" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact"
			filterRowsCallback="limit" sortRowsCallback="limit"
			retrieveRowsCallback="limit">
			<ec:row>
				<ec:column headerCell="selectAll" alias="ckids" filterable="false"
					width="1%" sortable="false">
					<input type="checkbox" name="ckids" value="${m.id}" />
				</ec:column>
				<ec:column title="角色名称" property="name">
					<a
						href="${pageContext.request.contextPath}/bms/adm/bmsrole/beforeEditBmsRole.do?id=${m.id}">
						${m.name} </a>
				</ec:column>
				<ec:column title="所属部门" property="tbTBmsLocationDTO.name"
					alias="locationName" />
				<ec:column title="备注" property="remark"></ec:column>
				<ec:column title="操作" property="EEE" sortable="false"
					filterable="false">
					<a
						href="${pageContext.request.contextPath}/bms/adm/bmsrole/beforeEditBmsRole.do?id=${m.id}">编辑</a>
					<a href="javascript:btn_delete_click('${m.id}')">删除</a>
					<a href="${pageContext.request.contextPath}/bms/adm/bmsrole/beforeDefineRscForBmsRole.do?id=${m.id}">功能权限</a>
					<a href="${pageContext.request.contextPath}/bms/adm/bmsrole/beforeInDateRole.do?id=${m.id}">数据权限</a>
				</ec:column>
			</ec:row>
		</ec:table>
		<br />
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
