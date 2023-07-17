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
				alert("名称不能为空!");
				return false;
			}
			return true;
		}
		</script>
	</head>
	<body>
		<form
			action="${pageContext.request.contextPath}/bms/adm/bmsrscresource/addBmsRscResource.do"
			method="post" target="hideframe" onsubmit="">
权限编号			<input id="funcid_" type="text" name="funcid" value="" /><br />
URL			<input id="url_" type="text" name="url" value="" /><br />
<br />
			<button type="submit">
				保存
			</button>
			<button type="reset">
				重设
			</button>
			<button onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsrscresource/queryBmsRscResource.do'">
				返回
			</button>
		</form>
<br />
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
<br />
