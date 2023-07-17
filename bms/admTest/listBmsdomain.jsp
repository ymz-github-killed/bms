<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>listBmsDomain</title>
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
				var url = "${pageContext.request.contextPath}/bms/domain/bmsdomain/beforeDeleteBmsDomain.do";
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
				var url = "${pageContext.request.contextPath}/bms/domain/bmsdomain/beforeAddBmsDomain.do";
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

		<ec:table tableId="BmsDomainExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			<ec:row>
				<ec:column title="�ֵ����" property="name">
					<input type="checkbox" name="ckids" value="${m.name}" />
					<a
						href="${pageContext.request.contextPath}/bms/domain/bmsdomain/detailBmsDomain.do?name=${m.name}">
						${m.name} </a>
				</ec:column>
			
				<ec:column title="ֵ����" property="valueType" filterCell="droplist" filterOptions="BMSDOMAIN.DOMAINTYPE">
					<domain:viewDomain domain="DOMAINTYPE" value="${m.valueType}"/>
				</ec:column>
				
				<ec:column title="����" property="EEE" sortable="false"
					filterable="false">
					<a
						href="${pageContext.request.contextPath}/bms/domain/bmsdomain/beforeEditBmsDomain.do?name=${m.name}">�༭</a>
					<a
						href="javascript:btn_delete_click('${m.name}')">ɾ��</a>
				</ec:column>
			</ec:row>
		</ec:table>
		
<br />
		<!-- �����ύ���ţ�����ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
