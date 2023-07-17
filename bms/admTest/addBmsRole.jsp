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
			alert("名称不能为空");
			return false;
		}
		
		if(f.remark.value.length >400)
		{
			alert("备注不能多余400个字符");
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
	{//选择部门的回调函数
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
								<span class="font_blue_title">您所在的位置：用户管理子系统 &gt; 角色管理</span>
								<span class="font_blue_title">&gt; 编辑角色</span>
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
							action="${pageContext.request.contextPath}/bms/adm/bmsrole/addBmsRole.do"
							target="hideframe" method="post" >
					<table width="98%" border="0" align="center" cellpadding="3"
						cellspacing="1" bgcolor="#dfdfdf">
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								角色名称：
							</td>
							<td align="left" width="35%">
								<input id="userLoginName_" type="text" maxlength="30"
									class="input3" size="80" style="width: 200px"
									name="name" value="${m.userLoginName}" />
									<span style="color: red;">*</span>
							</td>
							
							<td width="15%" align="right" class="font_bule2">
								所属部门:
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
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
				            <td align="right" valign="top" class="font_bule2">描述：</td>
				            <td align="left" colspan="3" >
				            	<textarea name="remark" cols="60" rows="5" id="remark_" class="input_more">${m.remark}</textarea>
				            </td>
				        </tr>
						<tr align="center" bgcolor="#f7f7f7">
							<td colspan="4">
								<input name="Button5222" type="submit" class="button5"
									value="提交" style="width: 60px">
								<input name="Button5223" type="reset" class="button5" value="重填"
									style="width: 60px">
								<input name="Button22" type="button" class="button5" value="返回"
									onclick="history.back();" style="width: 60px;">
							</td>
						</tr>
					</table>
					</form>
				</td>
			</tr>
		</table>
	</div>
	<div id="locationDiv" style="display: none; text-align: center;">
		<iframe src="${pageContext.request.contextPath}/bms/adm/bmscommon/selLocation.do" id="bmsLocation" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
	</div>
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>