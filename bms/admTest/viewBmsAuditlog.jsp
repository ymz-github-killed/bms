<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link href="${pageContext.request.contextPath}/css/yh.css"
			rel="stylesheet" type="text/css">
			
				<link href="/bms/css/template.css"
			type="text/css" rel="stylesheet">
		<title>�鿴�����־</title>
	</head>
	<body>




		<div id="mainDiv">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td>
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td height="25" bgcolor="#DDFAFE">
									&nbsp;&nbsp;
									<span class="font_blue_title">�����ڵ�λ�ã������־</span>
									<span class="font_blue_title">&gt; �鿴�����־</span>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>

			<table width="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td height="20">
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

						<table width="98%" border="0" align="center" cellpadding="3"
							cellspacing="1" bgcolor="#dfdfdf">
							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									����Ӧ�ã�
								</td>
								<td align="left" width="35%">
									<input id="appCode_" readonly="readonly" type="text"
										maxlength="20" class="input3" size="80" name="appCode"
										value="${m.appCode}" />
								</td>

								<td width="15%" align="right" class="font_bule2">
									�����û���
								</td>
								<td align="left" width="35%">
									<input id="userName_" type="userName" name="userLoginPassword"
										value="${m.userName}" readonly="readonly" maxlength="20"
										class="input3" size="80" style="width: 200px" />
								</td>
							</tr>


							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									����ʵ�壺
								</td>
								<td align="left" width="35%">
									<input id="operateEntry_" type="text" name="operateEntry"
										readonly="readonly" value="${m.operateEntry}" maxlength="20"
										class="input3" size="80" style="width: 200px" />
								</td>
								<td width="15%" align="right" class="font_bule2">
									�������ƣ�
								</td>
								<td align="left" width="35%">
									<input id="operateName_" type="text" name="operateName"
										readonly="readonly" value="${m.operateName}" maxlength="20"
										class="input3" size="80" style="width: 200px" />
								</td>
							</tr>



							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									����URL��
								</td>
								<td align="left" width="35%" colspan="3">
									<input id="url_" type="text" name="url" readonly="readonly"
										value="${m.url}" maxlength="20" class="input3" size="80"
										style="width: 200px" />
								</td>
							</tr>

							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									����������
								</td>
								<td align="left" width="35%" colspan="3">

									<textarea id="operateDesc_" name="operateDesc" cols="60"
										rows="5" maxlength="100" readonly="readonly"
										class="input_more">${m.operateDesc}</textarea>

								</td>
							</tr>


							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									������IP��ַ��
								</td>
								<td align="left" width="35%">
									<input id="serviceIp_" type="text" name="serviceIp"
										readonly="readonly" value="${m.serviceIp}" maxlength="20"
										class="input3" size="80" style="width: 200px; " />
								</td>

								<td width="15%" align="right" class="font_bule2">
									������IP��
								</td>
								<td align="left" width="35%">
									<input id="serviceIp_" type="text" name="serviceIp"
										readonly="readonly" value="${m.clientIp}" maxlength="20"
										class="input3" size="80" style="width: 200px; " />

								</td>
							</tr>

							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									����ʱ�䣺
								</td>
								<td align="left" width="35%">
									<input id="operateDate_" type="text" name="operateDate"
										readonly="readonly" value="${m.operateDate}" maxlength="14"
										class="input3" size="80" style="width: 200px" />
								</td>

								<td width="15%" align="right" class="font_bule2">
									�Ƿ�ɹ���
								</td>
								<td align="left" width="35%">
									<input id="sucessful_" type="text" name="sucessful"
										readonly="readonly" value="${m.sucessful}" maxlength="20"
										class="input3" size="80" style="width: 200px">
								</td>
							</tr>

							<tr align="center" bgcolor="#f7f7f7">
								<td colspan="4">
									<input name="Button22" type="button" class="button5" value="����"
										onclick="history.back()" style="width: 60px;" />
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</div>



	</body>
</html>
