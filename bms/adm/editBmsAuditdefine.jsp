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
			action="${pageContext.request.contextPath}/bms/adm/bmsauditdefine/editBmsAuditdefine.do"
			method="post" target="hideframe" onsubmit="">
编辑时间			<input id="editTime_" type="text" name="editTime" value="${m.editTime}" /><br />
操作名称			<input id="auditOperate_" type="text" name="auditOperate" value="${m.auditOperate}" /><br />
URI地址			<input id="auditUrl_" type="text" name="auditUrl" value="${m.auditUrl}" /><br />
所属应用			<input id="auditApp_" type="text" name="auditApp" value="${m.auditApp}" /><br />
是否成功判定			<input id="sucessfulTemplate_" type="text" name="sucessfulTemplate" value="${m.sucessfulTemplate}" /><br />
操作实体			<input id="auditEntry_" type="text" name="auditEntry" value="${m.auditEntry}" /><br />
操作描述模板			<input id="descTemplate_" type="text" name="descTemplate" value="${m.descTemplate}" /><br />
<br />
			<button type="submit">
				保存
			</button>
			<button type="reset">
				重设
			</button>
			<button onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsauditdefine/queryBmsAuditdefine.do'">
				返回
			</button>
		</form>
<br />
		<!-- 数据提交区域，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
