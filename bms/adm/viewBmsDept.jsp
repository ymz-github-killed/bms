<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<script type="text/javascript">
<!--
	function del()
	{
		if(confirm('您确实要删除该机构么？'))
		{
			hideframe.location.href='${pageContext.request.contextPath}/bms/adm/bmsdept/deleteBmsDept.do';
		}
	}
//-->
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
							<span class="font_blue_title">您所在的位置：用户管理子系统 &gt; 机构管理</span>
							<span class="font_blue_title">&gt; 查看机构</span>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<br>
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
									value="增加机构"
									onClick="MM_goToURL('self','${pageContext.request.contextPath}/bms/adm/bmsdept/beforeAddBmsDept.do');return document.MM_returnValue">
								<input name="Button22232523232" type="button" class="button5"
									value="编辑机构"
									onClick="MM_goToURL('self','${pageContext.request.contextPath}/bms/adm/bmsdept/beforeEditBmsDept.do');return document.MM_returnValue">
								<input name="Button222325232322" type="button" class="button5"
									value="删除机构" onClick="return del();">
							</div>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<br>
	<table width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td width="1%" valign="top">
				&nbsp;
			</td>
			<td width="99%" valign="top">


				<table width="98%" border="0" align="center" cellpadding="3"
					cellspacing="1" bgcolor="#dfdfdf">
					<tr bgcolor="#f7f7f7">
						<td width="40%" align="right" class="font_bule2">
							机构名称：
						</td>
						<td align="left">
							<input name="dpName" value="${m.name}" readonly
								type="text" maxlength="50" class="input3" size="80"
								style="width: 200px">
						</td>
					</tr>
					<tr bgcolor="#f7f7f7">
						<td align="right" valign="top" class="font_bule2">
							描述：
						</td>
						<td align="left">
							<textarea readonly name="dpInfo" cols="30" rows="5"
								maxlength="100" class="input_more">${m.remark}</textarea>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<iframe width="100%" height="300" scrolling="auto" frameborder="0" src="${pageContext.request.contextPath}/bms/adm/bmsdept/showUsers.do?deptid=${m.id}"></iframe>
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
