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
			action="${pageContext.request.contextPath}/bms/adm/bmsuserlocations/addBmsUserLocations.do"
			method="post" target="hideframe" onsubmit="">
���ű��			<input id="locationid_" type="text" name="locationid" value="" /><br />
�û����			<input id="userid_" type="text" name="userid" value="" /><br />
<br />
			<button type="submit">
				����
			</button>
			<button type="reset">
				����
			</button>
			<button onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsuserlocations/queryBmsUserLocations.do'">
				����
			</button>
		</form>
<br />
		<!-- �����ύ���ţ�����ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
<br />
