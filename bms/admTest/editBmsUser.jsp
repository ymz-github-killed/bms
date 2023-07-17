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
		if(f.name.value == "")
		{
			alert("���Ʋ���Ϊ��");
			return false;
		}
		
		if($("userDesc_").value.length >100)
		{
			alert("��ע���ܳ���100���ַ�");
			return false;
		}
		
		if($("userStation_").value.length >50)
		{
			alert("ְλ���ܳ���50���ַ�");
			return false;
		}
		
		if($("userStation_").value.length <1)
		{
			alert("ְλ����Ϊ��");
			return false;
		}
		
		if($("userLoginPassword_").value.length <1)
		{
			alert("��¼���벻��Ϊ��");
			return false;
		}
		
		if($("userEmail").value!=''&&!/^\w+@\w+\.\w+$/g.test($("userEmail").value)){
			alert("�����ַ��ʽ���Ϸ�");
			return false;
		}		
		
		if($("userMobile_").value!=''&&!/^1\d{10}$/g.test($("userMobile_").value)){
			alert("�ֻ������ʽ���Ϸ�");
			return false;
		}
		
		if($("userPhone_").value!=''&&!/^(\d{2,5}\-){0,2}\d{7,10}$/g.test($("userPhone_").value)){
			alert("�绰�����ʽ���Ϸ� �� 010-62986876 ");
			return false;
		}
		
		if($("userFax_").value!=''&&!/^(\d{2,5}\-){0,2}\d{7,10}$/g.test($("userFax_").value)){
			alert("�����ʽ���Ϸ����� 010-82783603 ");
			return false;
		}
		
		return true;
	}
	
	function selDept()
	{
		showSelDiv("deptDiv",false)
	}
	
	function selLocation()
	{
		showSelDiv("locationDiv",false)
	}
	
	function selVisitLocation()
	{
		showSelDiv("visitLocationDiv",false)
	}
	
	function showSelDiv(n,showMain)
	{
		$("mainDiv").style.display = showMain?"block":"none";
		$(n).style.display = showMain?"none":"block";
	}
	
	function selLocationSuc(id,name)
	{
		$("locationName_").value = name;
		$("locationid_").value = id;
		showSelDiv('locationDiv',true);
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
								<span class="font_blue_title">�����ڵ�λ�ã��û�������ϵͳ &gt; �û�����</span>
								<span class="font_blue_title">&gt; �༭�û�</span>
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

				<form name="frmApply"
							action="${pageContext.request.contextPath}/bms/adm/bmsuser/editBmsUser.do"
							target="hideframe" method="post"
							onsubmit="return beforeSubmit(this);">
					<table width="98%" border="0" align="center" cellpadding="3"
						cellspacing="1" bgcolor="#dfdfdf">
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								��¼����
							</td>
							<td align="left" width="35%">
								<input id="userLoginName_" readonly="readonly" type="text" maxlength="20"
									class="input3" size="80" style="width: 200px; background: #f0f0f0;"
									name="userLoginName" value="${m.userLoginName}" />
									<span style="color: red;">*</span>
							</td>
							<td width="15%" align="right" class="font_bule2">
								��½���룺
							</td>
							<td align="left" width="35%">
								<input id="userLoginPassword_" type="password"
									name="userLoginPassword" value="${m.userLoginPassword}"
									maxlength="20" class="input3" size="80" style="width: 200px" />
									<span style="color: red;">*</span>
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								��ȫ��������:
							</td>
							<td align="left" width="35%">
								<input id="userPassque_" type="text" name="userPassque"
									value="${m.userPassque}" maxlength="20" class="input3"
									size="80" style="width: 200px" />
							</td>
							<td width="15%" align="right" class="font_bule2">
								��ȫ����𰸣�
							</td>
							<td align="left" width="35%">
								<input id="userPassans_" type="text" name="userPassans"
									value="${m.userPassans}" maxlength="20" class="input3"
									size="80" style="width: 200px" />
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								״̬:
							</td>
							<td align="left" width="35%">
								<domain:radioDomain domain="dataIsused" name="userStatus"
									uid="userStatus_" value="${m.userStatus}" />
									<span style="color: red;">*</span>
							</td>

							<td width="15%" align="right" class="font_bule2" rowspan="3">
								��ע��
							</td>
							<td align="left" width="35%" rowspan="2">
								<textarea id="userDesc_" name="userDesc" cols="30" rows="3" maxlength="100"
									class="input_more">${m.userDesc}</textarea>
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								��������:
							</td>
							<td align="left" width="35%">
								<input id="locationName_" type="text"
									style="background: #f0f0f0;" readonly="readonly"
									value="${m.tbTBmsLocationDTO.name}" cols="30" rows="5"
									maxlength="100" class="input_more" />
								<input id="locationid_" type="hidden" name="locationid"
									value="${m.tbTBmsLocationDTO.id}" />

								<a href="javascript:selLocation();"> <img
										src="${pageContext.request.contextPath}/images/2j13.gif"
										border="0" /> </a>
										<span style="color: red;">*</span>
							</td>
						</tr>

						<tr bgcolor="#f0f0f0">
							<td width="15%" align="left" class="font_bule2" colspan="4"
								height="5">
								<b>�û���������</b>
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								��ʵ����:
							</td>
							<td align="left" width="35%">
								<input id="userRealName_" type="text" name="userRealName"
									value="${m.userRealName}" maxlength="20" class="input3"
									size="80" style="width: 200px" />
									<span style="color: red;">*</span>
							</td>
							<td width="15%" align="right" class="font_bule2">
								�Ա�
							</td>
							<td align="left" width="35%">
								<domain:radioDomain domain="SEX" name="userSex" uid="userSex_"
									value="${m.userSex}" />
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								�ֻ���
							</td>
							<td align="left" width="35%">
								<input id="userMobile_" type="text" name="userMobile"
									value="${m.userMobile}" maxlength="14" class="input3" size="80"
									style="width: 200px" />
							</td>
							<td width="15%" align="right" class="font_bule2">
								�绰��
							</td>
							<td align="left" width="35%">
								<input id="userPhone_" type="text" name="userPhone"
									value="${m.userPhone}" maxlength="20" class="input3" size="80"
									style="width: 200px">
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								�����ʼ���
							</td>
							<td align="left" width="35%">
								<input id="userEmail_" type="text" name="userEmail"
									value="${m.userEmail}" maxlength="20" class="input3" size="80"
									style="width: 200px" />
									<span style="color: red;">*</span>
							</td>
							<td width="15%" align="right" class="font_bule2">
								���棺
							</td>
							<td align="left" width="35%">
								<input id="userFax_" type="text" name="userFax"
									value="${m.userFax}" maxlength="20" class="input3" size="80"
									style="width: 200px">
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								ְλ��
							</td>
							<td align="left" width="35%">
								<input id="userStation_" type="text" name="userStation"
									value="${m.userStation}" maxlength="50" class="input3"
									size="80" style="width: 200px" />
								<span style="color: red;">*</span>
							</td>
							<td width="15%" align="right" class="font_bule2">
								סַ��
							</td>
							<td align="left" width="35%">
								<input id="userPosition_" type="text" name="userPosition"
									value="${m.userPosition}" maxlength="100" class="input3"
									size="200" style="width: 400px" />
							</td>
						</tr>
						<tr align="center" bgcolor="#f7f7f7">
							<td colspan="4">
								<input name="Button5222" type="submit" class="button5"
									value="�ύ" style="width: 60px">
								<input name="Button5223" type="reset" class="button5" value="����"
									style="width: 60px">
								<input name="Button22" type="button" class="button5" value="����"
										onclick="location.href='${pageContext.request.contextPath}${ATX_.context.backUrlStore}'" style="width: 60px;" />
							</td>
						</tr>
					</table>
					</form>
				</td>
			</tr>
		</table>
	</div>
	<div id="locationDiv" style="display: none; text-align: center;">
		<iframe src="${pageContext.request.contextPath}/bms/adm/bmscommon/selLocation.do" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
	</div>
	
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>