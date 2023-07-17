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
		<form name="frmApply"
			action="${pageContext.request.contextPath}/bms/adm/bmsrole/editBmsRole.do"
			target="hideframe" method="post"
			onsubmit="return beforeSubmit(this);">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td valign="top">
						<table width="98%" border="0" align="center" cellpadding="3"
							cellspacing="1" bgcolor="#dfdfdf">
							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									角色名称：
								</td>
								<td align="left" width="35%">
									<input id="userLoginName_" type="text" maxlength="30"
										class="input3" size="80" style="width: 200px" name="name"
										value="${m.name}" />
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
									<a href="javascript:selLocation();"> <img
											src="${pageContext.request.contextPath}/images/2j13.gif"
											border="0" /> </a>
											<span style="color: red;">*</span>
											<input id="locationid_" type="hidden" name="locationid"
										value="${m.tbTBmsLocationDTO.id}" />
								</td>
							</tr>
							<tr bgcolor="#f7f7f7">
								<td align="right" valign="top" class="font_bule2">
									描述：
								</td>
								<td align="left" colspan="2">
									<textarea name="remark" id="remark_" cols="60" rows="4" maxlength="100"
										class="input_more">${m.remark}</textarea>
								</td>
								<td align="center">
									<input name="Button5222" type="submit" class="button5"
										value="提交" style="width: 60px" />
									<input name="Button5223" type="reset" class="button5"
										value="重填" style="width: 60px" />
									<input name="Button22" type="button" class="button5" value="返回"
										onclick="location.href='${pageContext.request.contextPath}${ATX_.context.backUrlStore}'" style="width: 60px;" />
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr>
					<td>
						&nbsp;
					</td>
				</tr>
				<tr>
					<td valign="top">
						<table width="98%" border="0" align="center" cellpadding="3"
							cellspacing="1" bgcolor="#dfdfdf">
							<tr>
								<td
									style="background: #f0f0f0; font-weight: bold; font-size: 14px;">
									角色对应用户列表
								</td>
							</tr>

							<tr bgcolor="#f7f7f7">
								<td>
									<iframe name="roleToUserFrame" width="100%" height="400"
										scrolling="auto" frameborder="0"
										src="${pageContext.request.contextPath}/bms/adm/bmsrole/listRoleUsers.do?roleid=${m.id}"></iframe>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</form>
	</div>
	<div id="locationDiv" style="display: none; text-align: center;">
		<iframe name="locationHideFrame"
			src="${pageContext.request.contextPath}/bms/adm/bmscommon/selLocation.do"
			width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
	</div>
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>