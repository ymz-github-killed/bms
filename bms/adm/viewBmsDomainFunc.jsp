<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<link href="${pageContext.request.contextPath}/css/yh.css" rel="stylesheet" type="text/css">	
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
		<title>�����ֵ�Ȩ�޲鿴</title>
		<script type="text/javascript">
		
		function $(id){
			return document.getElementById(id);		
		}
		
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
	
	<div id="mainDiv">
	
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td>
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td height="25" bgcolor="#DDFAFE">
									&nbsp;&nbsp;
									<span class="font_blue_title">�����ڵ�λ�ã�Ȩ�޹�����ϵͳ &gt; ����Ȩ�޹���</span>
									<span class="font_blue_title">&gt; �鿴����Ȩ��</span>
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
									Ȩ�ޱ��룺
								</td>
								<td align="left" width="35%">
									<input id="code_" type="text" name="code" disabled="disabled" value="${m.code}" maxlength="20" class="input3"
										size="80" style="width: 200px;height: 16px;" />
								</td>
								
								<td width="15%" align="right" class="font_bule2">
									Ȩ������:
								</td>
								<td align="left" width="35%">
									
									<input id="datafuncName_" type="text" name="datafuncName" disabled="disabled" value="${m.datafuncName}" maxlength="20" class="input3"
										size="80" style="width: 200px;height: 16px;" />
								</td>
							</tr>
							
							
							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									�����ֵ䣺
								</td>
								<td align="left" width="35%">
									<input id="domainname_" type="text" name="domainname" disabled="disabled" value="${m.tbTBmsDomainDTO.remark}" readonly="readonly"/>
									<input id="domainid_" type="hidden" name="domainid" value="${m.tbTBmsDomainDTO.name}" readonly="readonly"/>
									<span style="color: red;">*</span>
								</td>
								
								
								
								<td width="15%" align="right" class="font_bule2">
									�������ܣ�
								</td>
								<td align="left" width="35%">
									<input id="funcName" type="text" name="funcName_" disabled="disabled" value="${m.tbTBmsRscFuncDTO.name}" readonly="readonly"/>
									<input id="funcId_" type="hidden" name="funcId" value="${m.tbTBmsRscFuncDTO.id}" />
									<span style="color: red;">*</span>
								</td>
							</tr>
							
							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									�б�Ȩ�ޣ�
								</td>
								<td align="left" width="35%">
								<domain:radioDomain domain="YORN" name="isList" uid="isList_"
									value="${m.isList}" />
								</td>
								
								
								
								<td width="15%" align="right" class="font_bule2">
									�Ƿ����ã�
								</td>
								<td align="left" width="35%">
								<domain:radioDomain domain="YORN" name="flag" uid="flag_"
									value="${m.flag}" />
							</td>
							</tr>
							
							<tr bgcolor="#f7f7f7">
					            <td align="right" valign="top" class="font_bule2">������</td>
					            <td align="left" colspan="3" >
					            	<textarea name="desc" cols="60" rows="5" id="desc_" disabled="disabled" class="input_more">${m.desc}</textarea>
					            </td>
					        </tr>
					        
							<tr align="center" bgcolor="#f7f7f7">
								<td colspan="4">
									<input name="Button22" type="button" class="button5" value="����"
										onclick="history.back();" style="width: 60px;">
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</div>
		
		
		
		<!-- �����ύ���򣬲���ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
<br />
