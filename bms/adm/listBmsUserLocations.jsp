<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>listBmsUserLocations</title>
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
				var url = "${pageContext.request.contextPath}/bms/adm/bmsuserlocations/beforeDeleteBmsUserLocations.do";
				if(!$chk(id))
				{
					id = getChecks("ckids").join(",");
					if(!$chk(id))
					{
						alert("��ѡ��һ���������¼!");
						return;
					}
				}
				document.location.href=url + "?ids=" + id;
			}
			
			function btn_add_click()
			{
				var url = "${pageContext.request.contextPath}/bms/adm/bmsuserlocations/beforeAddBmsUserLocations.do";
				document.location.href=url;
			}			
		</script>
	</head>
	<body style="font-size:12px;">
		<div id="toolbar">
			<a href="#" onclick="btn_add_click()">����</a>
			<a href="#" onclick="btn_delete_click()">ɾ��</a>
		</div>
<br />
		<ec:table tableId="BmsUserLocationsExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			<ec:row>
				<ec:column title="PK" property="id" headerCell="selectAll" alias="ckids">
					<input type="checkbox" name="ckids" value="${m.id}" />
					<a
						href="${pageContext.request.contextPath}/bms/adm/bmsuserlocations/detailBmsUserLocations.do?id=${m.id}">
						${m.id} </a>
				</ec:column>
				<ec:column title="���ű��" property="locationid" />
				<ec:column title="�û����" property="userid" />
				<ec:column title="����" property="EEE" sortable="false"
					filterable="false">
					<a
						href="${pageContext.request.contextPath}/bms/adm/bmsuserlocations/beforeEditBmsUserLocations.do?id=${m.id}">�༭</a>
					<a
						href="javascript:btn_delete_click('${m.id}')">ɾ��</a>
				</ec:column>
			</ec:row>
		</ec:table>
<br />
		<!-- �����ύ���ţ�����ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>