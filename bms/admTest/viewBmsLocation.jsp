<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<html>
<head>
<link
	href="${pageContext.request.contextPath}/css/extremecomponents.css"
	type="text/css" rel="stylesheet">
<script type="text/javascript">
<!--
	function del()
	{
		if(confirm('您确实要删除该部门么？'))
		{
			hideframe.location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/deleteBmsLocation.do';
		}
	}
//-->
</script>
</head>
<body style="padding-left: 10px;">
	<table width="100%" border="0" cellpadding="0" cellspacing="0">
		<tr>
			<td>
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td height="25" bgcolor="#DDFAFE">
							&nbsp;&nbsp;
							<span class="font_blue_title">您所在的位置：用户管理子系统 &gt; 部门管理</span>
							<span class="font_blue_title">&gt; 查看部门</span>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<br>
	<%
		if (request.getAttribute("canVisit") != null)
		{
	%>
	<table width="98%" border="0" align="center" cellpadding="0"
		cellspacing="0">
		<tr>
			<td height="20">
				<table width="90%" border="0" align="right" cellpadding="0"
					cellspacing="0">
					<tr>
						<td>
							<div align="right">
								<input name="Button2223252323" type="button" class="button5"
									value="增加部门"
									onClick="MM_goToURL('self','${pageContext.request.contextPath}/bms/adm/bmslocation/beforeAddLocation.do');return document.MM_returnValue">
								<input name="Button22232523232" type="button" class="button5"
									value="编辑部门"
									onClick="MM_goToURL('self','${pageContext.request.contextPath}/bms/adm/bmslocation/beforeEditBmsLocation.do');return document.MM_returnValue">
								<input name="Button222325232322" type="button" class="button5"
									value="删除部门" onClick="return del();">

							</div>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<%
		}
	%>
	<br>
	<table width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td width="100%" valign="top">
				<table width="100%" border="0" align="center" cellpadding="3"
					cellspacing="1" bgcolor="#dfdfdf">
					<tr bgcolor="#f7f7f7">
						<td width="40%" align="right" class="font_bule2">
							部门名称：
						</td>
						<td align="left">
							<input name="name" value="${m.name}" readonly type="text"
								maxlength="50" class="input3" size="80" style="width: 200px">
						</td>
					</tr>
					<tr bgcolor="#f7f7f7">
						<td align="right" valign="top" class="font_bule2">
							描述：
						</td>
						<td align="left">
							<textarea readonly name="remark" cols="40" rows="3"
								maxlength="100" class="input_more">${m.remark}</textarea>
						</td>
					</tr>
					<tr bgcolor="#f7f7f7">
						<td align="right" valign="top" class="font_bule2">
							层次结构：
						</td>
						<td align="left">
							${m.stepinfo}
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td>
				<script type="text/javascript">
					function getChecks(name,ischeck)
					{
						var re = new Array();
						var ck = document.getElementsByName(name);
						for(var i=0; i<ck.length; i++)
						{
							if(ck[i].checked == ischeck)
							{
								re.push(ck[i].value);
							}
						}
						return re;
					}
				
					function delUser()
					{
						location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/deleteSelectedUser.do?nochks=' + getChecks('ckids',true);
					}
				</script>
				<ec:table tableId="userlist" method="get" items="userlist" var="e"
					action="" title="<b>可以访问该部门的用户列表</b>"
					imagePath="${pageContext.request.contextPath}/images/table/*.gif"
					width="100%" rowsDisplayed="9" view="compact" >
					<ec:row>
						<ec:column headerCell="selectAll" alias="ckids" width="1%"
							filterable="false" sortable="false">
							<input type="checkbox" name="ckids" value="${e.id}" />
						</ec:column>
						<ec:column title="登陆名" property="userLoginName">
						</ec:column>
						<ec:column title="真实姓名" property="userRealName" />
						<ec:column title="性别" property="userSex" filterCell="droplist"
							filterOptions="BMSDOMAIN.SEX">
							<domain:viewDomain domain="SEX" value="${e.userSex}" />
						</ec:column>
						<ec:column title="状态" property="userStatus" filterCell="droplist"
							filterOptions="BMSDOMAIN.dataIsused">
							<domain:viewDomain domain="dataIsused" value="${e.userStatus}" />
						</ec:column>
					</ec:row>
				</ec:table>
			</td>
		</tr>
		<%
			if (request.getAttribute("canVisit") != null)
			{
		%>
		<tr>
			<td align="right">
				<!-- 
				<input name="Button2223252323" type="button" class="button5"
					value="增加或删除可访问该部门的用户" style="width: 200px;" onClick="location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/listLocationUserForSel.do?id=${param.id}'">
				 -->
				<input name="Button2223252323" type="button" class="button5"
					value="增加或删除可访问该部门的用户" style="width: 200px;"
					onClick="location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/addUserForLocationIdx.do?id=${m.id}'">
				<input name="Button2223252323" type="button" class="button5"
					value="删除" style="width: 200px;" onClick="delUser()">
			</td>
		</tr>
		<%
			}
		%>
	</table>


	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
