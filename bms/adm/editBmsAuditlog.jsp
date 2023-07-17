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
			action="${pageContext.request.contextPath}/bms/adm/bmsauditlog/editBmsAuditlog.do"
			method="post" target="hideframe" onsubmit="">
应用标识			<input id="appCode_" type="text" name="appCode" value="${m.appCode}" /><br />
操作描述			<input id="operateDesc_" type="text" name="operateDesc" value="${m.operateDesc}" /><br />
操作URL			<input id="url_" type="text" name="url" value="${m.url}" /><br />
操作实体			<input id="operateEntry_" type="text" name="operateEntry" value="${m.operateEntry}" /><br />
操作用户			<input id="userName_" type="text" name="userName" value="${m.userName}" /><br />
服务器ip地址			<input id="serviceIp_" type="text" name="serviceIp" value="${m.serviceIp}" /><br />
操作名称			<input id="operateName_" type="text" name="operateName" value="${m.operateName}" /><br />
操作时间			<input id="operateDate_" type="text" name="operateDate" value="${m.operateDate}" /><br />
是否成功			<input id="sucessful_" type="text" name="sucessful" value="${m.sucessful}" /><br />
操作者IP			<input id="clientIp_" type="text" name="clientIp" value="${m.clientIp}" /><br />
<br />
			<button type="submit">
				保存
			</button>
			<button type="reset">
				重设
			</button>
			<button onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsauditlog/queryBmsAuditlog.do'">
				返回
			</button>
		</form>
<br />
		<!-- 数据提交区域，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
