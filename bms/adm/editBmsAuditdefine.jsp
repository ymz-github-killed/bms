<%@ page language="java" contentType="text/html; charset=GBK"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<title>Insert title here</title>
		<script type="text/javascript">
		function onFormSubmit()
		{
			if(document.getElementById("name") == "")
			{
				alert("���Ʋ���Ϊ��!");
				return false;
			}
			return true;
		}
		</script>
	</head>
	<body>
		<form
			action="${pageContext.request.contextPath}/bms/adm/bmsauditdefine/editBmsAuditdefine.do"
			method="post" target="hideframe" onsubmit="">
�༭ʱ��			<input id="editTime_" type="text" name="editTime" value="${m.editTime}" /><br />
��������			<input id="auditOperate_" type="text" name="auditOperate" value="${m.auditOperate}" /><br />
URI��ַ			<input id="auditUrl_" type="text" name="auditUrl" value="${m.auditUrl}" /><br />
����Ӧ��			<input id="auditApp_" type="text" name="auditApp" value="${m.auditApp}" /><br />
�Ƿ�ɹ��ж�			<input id="sucessfulTemplate_" type="text" name="sucessfulTemplate" value="${m.sucessfulTemplate}" /><br />
����ʵ��			<input id="auditEntry_" type="text" name="auditEntry" value="${m.auditEntry}" /><br />
��������ģ��			<input id="descTemplate_" type="text" name="descTemplate" value="${m.descTemplate}" /><br />
<br />
			<button type="submit">
				����
			</button>
			<button type="reset">
				����
			</button>
			<button onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsauditdefine/queryBmsAuditdefine.do'">
				����
			</button>
		</form>
<br />
		<!-- �����ύ���򣬲���ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
