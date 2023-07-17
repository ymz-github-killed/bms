<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<script type="text/javascript">
</script>
<link href="${pageContext.request.contextPath}/css/yh.css"
	type="text/css" rel="stylesheet" />
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}
.STYLE1 {color: #0055DE}
.STYLE2 {color: #0C87CD}
-->
</style>
</head>
<body>
	<table width="100%" border="0" cellpadding="0" cellspacing="0">
		<tr>
			<td>
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td height="25" bgcolor="#BDDEFD">
							<span class="font_blue_title">&nbsp;&nbsp;您所在的位置：网站信息管理
								&gt; 日志管理 &gt; 日志详细</span>
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

	<table width="90%" border="0" align="center" cellpadding="3" bgcolor="#f7f7f7" 
		border="0" align="center" cellpadding="5" >
		<tr>
			<td style="color: blue;size: 20">
				用户名称:
			</td>
			<td>
				${log.userName}
			</td>
			<td style="color: blue;size: 20">
				操作时间:
			</td>
			<td>
				${log.operatingHours}
			</td>

		</tr>
		<tr>
			<td style="color: blue;size: 20">
				操作名称:
			</td>
			<td>
				${log.operationName}
			</td>
			<td style="color: blue;size: 20">
				操作URL:
			</td>
			<td>
				${log.urloperation}
			</td>

		</tr>
		<tr>
			<td style="color: blue;size: 20">
				所属应用:
			</td>
			<td>
				${log.theirApplication}
			</td>
			<td style="color: blue;size: 20">
				是否成功:
			</td>
			<td>
				${log.isSuccess}
			</td>

		</tr>
		<tr>
			<td style="color: blue;size: 20">
				对象描述:
			</td>
			<td>
				${log.objectDesc}
			</td>
			<td style="color: blue;size: 20">
				操作IP:
			</td>
			<td>
				${log.ipAddr}
			</td>

		</tr>

		<tr>
			<td style="color: blue;size: 20">
				日志备注:
			</td>
			<td colspan="3">
				${log.remark}
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<input type="button" value="返回" class="button5" onclick="history.back();">
			</td>
		</tr>
	</table>