<%@ page language="java" contentType="text/html; charset=GBK"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<title>修改外部应用</title>
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



		<table width="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td>
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td height="25" bgcolor="#DDFAFE">
									&nbsp;&nbsp;
									<span class="font_blue_title">您所在的位置：外部应用子系统 &gt; 外部应用管理</span>
									<span class="font_blue_title">&gt; 新增外部应用</span>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
			
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td height="16">
						&nbsp;
				</td>
			</tr>
		</table>

		<form
			action="${pageContext.request.contextPath}/bms/adm/bmswebapp/editBmsWebapp.do"
			method="post" target="hideframe" onsubmit="">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td width="1%" valign="top">
						&nbsp;
					</td>
					<td width="99%" valign="top">
						<div align="left"></div>

						<table width="98%" border="0" align="center" cellpadding="3"
							cellspacing="1" bgcolor="#dfdfdf">
							<tr bgcolor="#f7f7f7">

								<td width="15%" align="right" class="font_bule2">
									应用编码：
								</td>
								<td align="left" width="35%">
									<input id="auditClsname_" type="text" name="appCode" value="${m.appCode}" class="input3" size="20" style="width: 200px;height:16px;"/>
								</td>


								<td width="15%" align="right" class="font_bule2">
									应用名称：
								</td>
								<td align="left" width="35%">
									<input id="appName_" type="text" name="appName" value="${m.appCode}" class="input3" size="20" style="width: 200px;height:15px;"/>
								</td>
							</tr>

							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									URL链接：
								</td>
								<td align="left" width="35%" colspan="3">
									<input id="appUrl_" type="text" name="appUrl" value="${m.appUrl}" class="input3" style="width: 350px;height:15px;"/>
								</td>
							</tr>

							<tr bgcolor="#f7f7f7" height="50">
								<td width="15%" align="right" class="font_bule2">
									简介：
								</td>
								<td colspan="3" >
									<textarea rows="4" cols="50" name="appDesc" class="input_more">
										${m.appDesc}
									</textarea>
								</td>
							</tr>
							
							<tr bgcolor="#f0f0f0">
								<td width="15%" align="left" class="font_bule2" colspan="4"
									height="5">
									<b>安全接入</b>
								</td>
							</tr>
							
							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									DES Key
								</td>
								<td align="left" width="35%" colspan="3">
									<input value="${m.desKey}" type="password" name="desKey"  class="input3" size="20" style="width: 360px;height:15px;">
									&nbsp;<span style="color: gray;font-size: 12px">密码长度8位</span>
								</td>
							</tr>
							
							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									接入IP
								</td>
								<td align="left" width="35%" colspan="3">
									<input id="appIp_" type="text" name="appIp" value="${m.appIp}"  class="input3" size="20" style="width: 360px;height:15px;"/>
									&nbsp;<span style="color: gray;font-size: 12px">多个IP请用","相隔</span>
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
					</td>
				</tr>
			</table>
		</form>
		<!-- 数据提交区域，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
