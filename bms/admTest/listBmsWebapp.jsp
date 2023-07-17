<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib prefix="load" uri="http://bms.sinovatech.com/tags-load"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>listBmsWebapp</title>
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
				var url = "${pageContext.request.contextPath}/bms/adm/bmswebapp/beforeDeleteBmsWebapp.do";
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
				var url = "${pageContext.request.contextPath}/bms/adm/bmswebapp/beforeAddBmsWebapp.do";
				document.location.href=url;
			}			
		</script>
	</head>
	<body style="font-size:12px;">
		<div id="toolbar">
			
			<load:userCanView uri="/bms/adm/bmswebapp/addBmsWebapp.do">
				<a href="#" onclick="btn_add_click()">增加</a>
			</load:userCanView>
						
			<load:userCanView uri="/bms/adm/bmswebapp/deleteBmsWebapp.do">
				<a href="#" onclick="btn_delete_click()">删除</a>
			</load:userCanView>
			
		</div>
<br />
		<ec:table tableId="BmsWebappExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			<ec:row>
				<ec:column title="PK" property="appCode"  headerCell="selectAll" alias="ckids" >
					<input type="checkbox" name="ckids" value="${m.appCode}" />
					<a
						href="${pageContext.request.contextPath}/bms/adm/bmswebapp/detailBmsWebapp.do?appCode=${m.appCode}">
						${m.appCode} </a>
				</ec:column>
				<ec:column title="应用名称" property="appName" />
				<ec:column title="URL链接" property="appUrl" />
				<ec:column title="操作" property="EEE" sortable="false"
					filterable="false">
					
					<load:userCanView uri="/bms/adm/bmswebapp/editBmsWebapp.do">
						<a href="${pageContext.request.contextPath}/bms/adm/bmswebapp/beforeEditBmsWebapp.do?appCode=${m.appCode}">编辑</a>
					</load:userCanView>
					
					<load:userCanView uri="/bms/adm/bmswebapp/deleteBmsWebapp.do">
						<a href="javascript:btn_delete_click('${m.appCode}')">删除</a>
					</load:userCanView>
				</ec:column>
			</ec:row>
		</ec:table>
<br />
		<!-- 数据提交区域，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
