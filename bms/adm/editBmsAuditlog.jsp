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
			action="${pageContext.request.contextPath}/bms/adm/bmsauditlog/editBmsAuditlog.do"
			method="post" target="hideframe" onsubmit="">
Ӧ�ñ�ʶ			<input id="appCode_" type="text" name="appCode" value="${m.appCode}" /><br />
��������			<input id="operateDesc_" type="text" name="operateDesc" value="${m.operateDesc}" /><br />
����URL			<input id="url_" type="text" name="url" value="${m.url}" /><br />
����ʵ��			<input id="operateEntry_" type="text" name="operateEntry" value="${m.operateEntry}" /><br />
�����û�			<input id="userName_" type="text" name="userName" value="${m.userName}" /><br />
������ip��ַ			<input id="serviceIp_" type="text" name="serviceIp" value="${m.serviceIp}" /><br />
��������			<input id="operateName_" type="text" name="operateName" value="${m.operateName}" /><br />
����ʱ��			<input id="operateDate_" type="text" name="operateDate" value="${m.operateDate}" /><br />
�Ƿ�ɹ�			<input id="sucessful_" type="text" name="sucessful" value="${m.sucessful}" /><br />
������IP			<input id="clientIp_" type="text" name="clientIp" value="${m.clientIp}" /><br />
<br />
			<button type="submit">
				����
			</button>
			<button type="reset">
				����
			</button>
			<button onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsauditlog/queryBmsAuditlog.do'">
				����
			</button>
		</form>
<br />
		<!-- �����ύ���򣬲���ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
