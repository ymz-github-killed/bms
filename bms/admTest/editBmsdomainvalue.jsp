<%@ page language="java" contentType="text/html; charset=GBK"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<title>Insert title here</title>
				<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link href="${pageContext.request.contextPath}/css/yh.css"
			type="text/css" rel="stylesheet">
		<link href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
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
			action="${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/editBmsDomainvalue.do"
			method="post" target="hideframe" onsubmit="">
			<table width="98%" border="0" align="center" cellpadding="3"
							cellspacing="1" bgcolor="#dfdfdf">
							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									主键：
								</td>
								<td align="left" width="35%">
									<input id="id_" type="text" name="id" value="${m.id}" readonly="readonly"/>
								</td>

								<td width="15%" align="right" class="font_bule2">
									显示值：
								</td>
								<td align="left" width="35%">
									<input id="label_" type="text" name="domainlabel" value="${m.domainlabel}" />
								</td>
							</tr>

							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									实际值：
								</td>
								<td align="left" width="35%">
									<input id="value_" type="text" name="domainvalue" value="${m.domainvalue}" />
								</td>

								<td width="15%" align="right" class="font_bule2">
									排序值:
								</td>
								<td align="left" width="35%">
									<input id="indexsequnce_" type="text" name="indexsequnce"
										value="${m.indexsequnce}" />
									<input type="hidden" value="${parentId}" id="parentId_" name="parentId">
								</td>
							</tr>

							<tr align="center" bgcolor="#f7f7f7">
								<td colspan="4">
									<input name="Button5222" type="submit" class="button5"
										value="提交" style="width: 60px">
									<input name="Button22" type="button" class="button5" value="返回"
										onclick="history.back();" style="width: 60px;">
								</td>
							</tr>
						</table>
						
		</form>
<br />
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
