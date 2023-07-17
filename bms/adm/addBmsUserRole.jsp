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
			action="${pageContext.request.contextPath}/bms/adm/bmsuserrole/addBmsUserRole.do"
			method="post" target="hideframe" onsubmit="">
用户是否有二级授权权限:1有，0无			<input id="authadm_" type="text" name="authadm" value="" /><br />
角色编号			<input id="roleid_" type="text" name="roleid" value="" /><br />
用户编号			<input id="userid_" type="text" name="userid" value="" /><br />
<br />
			<button type="submit">
				保存
			</button>
			<button type="reset">
				重设
			</button>
			<button onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsuserrole/queryBmsUserRole.do'">
				返回
			</button>
		</form>
<br />
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
<br />
