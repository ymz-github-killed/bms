<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>listBmsDomainvalue</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link
			href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript" src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>

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
				var url = "${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/beforeDeleteBmsDomainvalue.do";
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
				var url = "${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/beforeAddBmsDomainvalue.do";
				document.location.href=url;
			}			
		</script>
	</head>
	<body style="font-size:12px;">
	
			
			
	
		<div id="toolbar">
			<a href="#" onclick="btn_add_click()">增加</a>
			<a href="#" onclick="btn_delete_click()">删除</a>
		</div>
<br />
		<ec:table tableId="BmsDomainvalueExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			<ec:row>
				<ec:column title="主键" property="id">
					<input type="checkbox" name="ckids" value="${m.id}" />
					<a
						href="${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/detailBmsDomainvalue.do?id=${m.id}">
						${m.id} </a>
				</ec:column>
				<ec:column title="显示值" property="label" />
				<ec:column title="实际值" property="value" />
				<ec:column title="排序值" property="indexsequnce" />
				<ec:column title="操作" property="EEE" sortable="false"
					filterable="false">
					<a
						href="${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/beforeEditBmsDomainvalue.do?id=${m.id}">编辑</a>
					<a
						href="javascript:btn_delete_click('${m.id}')">删除</a>
				</ec:column>
			</ec:row>
		</ec:table>
<br />
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
