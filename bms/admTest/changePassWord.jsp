<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>

<head>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>

<script type="text/javascript">
<!--
	function beforeSubmit(f)
	{
		$("msgInfo").innerHTML = "";
		if($("oldPass").value == "")
		{
			alert("�����������");
			return false;
		}

		if($("newPass1").value == "")
		{
			alert("������������");
			return false;
		}
		
		if($("newPass2").value != $("newPass1").value)
		{
			alert("�������������벻ƥ��");
			return false;
		}
		return true;
	}
//-->
</script>
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
								<span class="font_blue_title">�����ڵ�λ�ã���������</span>
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
					<div id="msgInfo" style="font-size: 14px; color: red;font-weight: bold;" align="left"></div>

				<form name="frmApply"
							action="${pageContext.request.contextPath}/bms/adm/bmsuser/changePassword.do"
							target="hideframe" method="post"
							onsubmit="return beforeSubmit(this);">
					<table width="98%" border="0" align="center" cellpadding="3"
						cellspacing="1" bgcolor="#dfdfdf">
						<tr bgcolor="#f7f7f7">
							<td width="40%" align="right" class="font_bule2">
								ԭʼ���룺
							</td>
							<td align="left">
								<input id="oldPass"  type="password" maxlength="20"
									class="input3" size="80" 
									name="oldPass" />
									<span style="color: red;">*</span>
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td  align="right" class="font_bule2">
								�����룺
							</td>
							<td align="left"  >
								<input id="newPass1"  type="password" maxlength="20"
									class="input3" size="80" 
									name="newPass1" />
									<span style="color: red;">*</span>
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td  align="right" class="font_bule2">
								���ٴ����������룺
							</td>
							<td align="left" >
								<input id="newPass2"  type="password" maxlength="20"
									class="input3" size="80" 
									name="newPass2" />
									<span style="color: red;">*</span>
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td  align="center" class="font_bule2" colspan="2">
								<input name="Button22" type="submit" class="button5" value="�ύ"   />
								<input name="Button22" type="reset" class="button5" value="����"  />
							</td>
						</tr>
					</table>
					</form>
				</td>
			</tr>
		</table>
	</div>
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>