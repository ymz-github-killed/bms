<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/view.tld" prefix="view"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		
		<title>���������־����</title>
		
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
				alert("���Ʋ���Ϊ��!");
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
									<span class="font_blue_title">�����ڵ�λ�ã������־ϵͳ &gt; �����־����</span>
									<span class="font_blue_title">&gt; ���������־</span>
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

		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td width="1%" valign="top">
					&nbsp;
				</td>
				<td width="99%" valign="top">
					<div align="left"></div>

					<form name="frmApply"
						action="${pageContext.request.contextPath}/bms/adm/bmsauditdefine/addBmsAuditdefine.do"
						target="hideframe" method="post"
						onsubmit="return beforeSubmit(this);">
						<table width="98%" border="0" align="center" cellpadding="3"
							cellspacing="1" bgcolor="#dfdfdf">


							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									����Ӧ�ã�
								</td>
								<td align="left" width="35%">
									<view:select displayProperty="appName" valueProperty="appCode"
										name="auditApp" items="${_WEB_APPS}" />
								</td>

								<td width="15%" align="right" class="font_bule2">
									URI��ַ��
								</td>
								<td align="left" width="35%">
									<input id="auditUrl_" type="text" name="auditUrl" class="input3" size="80"
										style="width: 200px;height: 16px;" />
								</td>
							</tr>

							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									����ʵ�壺
								</td>
								<td align="left" width="35%">
									<input id="auditEntry_" type="text" name="auditEntry"
										class="input3" size="80"
										style="width: 200px;height: 16px;" />
								</td>

								<td width="15%" align="right" class="font_bule2">
									��������:
								</td>
								<td align="left" width="35%">

									<input id="auditOperate_" type="text" name="auditOperate"
										value="" maxlength="20" class="input3" size="80"
										style="width: 200px;height: 16px;" />
								</td>
							</tr>

							

						


							<tr bgcolor="#f7f7f7">
								<td align="right" valign="top" class="font_bule2">
									��������ģ�壺
								</td>
								<td align="left" colspan="3">
									<textarea name="desc" cols="60" rows="7" id="desc_"
										class="input_more"></textarea>
								</td>
							</tr>

							<tr bgcolor="#f7f7f7">
								<td align="right" valign="top" class="font_bule2">
									�ɹ��ж�ģ�壺
								</td>
								<td align="left" colspan="3">
									<textarea name="desc" cols="60" rows="3" id="desc_"
										class="input_more"></textarea>
								</td>
							</tr>

							<tr align="center" bgcolor="#f7f7f7">
								<td colspan="4">
									<input name="Button5222" type="submit" class="button5"
										value="�ύ" style="width: 60px">
									<input name="Button5223" type="reset" class="button5"
										value="����" style="width: 60px">
									<input name="Button22" type="button" class="button5" value="����"
										onclick="history.back();" style="width: 60px;">
								</td>
							</tr>
						</table>
					</form>
				</td>
			</tr>
		</table>



		<!-- �����ύ���򣬲���ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>


