<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>listBmsAuditlog</title>
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
				var url = "${pageContext.request.contextPath}/bms/adm/bmsauditlog/beforeDeleteBmsAuditlog.do";
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
				var url = "${pageContext.request.contextPath}/bms/adm/bmsauditlog/beforeAddBmsAuditlog.do";
				document.location.href=url;
			}			
		</script>
	</head>
	<body style="font-size:12px;">
<br />
		<ec:table tableId="BmsAuditlogExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			<ec:exportXls fileName="auditlog.xls" tooltip="Export Excel"></ec:exportXls>
			<ec:row>
				<ec:column title="所属应用" property="appCode" />
				<ec:column title="操作对象" property="operateEntry" />
				<ec:column title="操作名称" property="operateName" />
				<ec:column title="操作用户" property="userName" />
				<ec:column title="服务器ip地址" property="serviceIp"/>
				<ec:column title="操作者IP" property="clientIp" />
				<ec:column title="操作时间" property="operateDate" />
				<ec:column title="是否成功" property="sucessful"  filterCell="droplist" filterOptions="BMSDOMAIN.YORN">
					<domain:viewDomain domain="YORN" value="${m.sucessful}"/>
				</ec:column>
				<ec:column title="操作" property="EEE" sortable="false"
					filterable="false">
					<a
						href="${pageContext.request.contextPath}/bms/adm/bmsauditlog/detailBmsAuditlog.do?id=${m.id}">
						查看 </a>
				</ec:column>
			</ec:row>
		</ec:table>
<br />
		<!-- 数据提交区域，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
