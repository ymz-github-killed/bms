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
							<span class="font_blue_title">&nbsp;&nbsp;�����ڵ�λ�ã���վ��Ϣ����
								&gt; ��־���� &gt; ��־��ϸ</span>
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
				�û�����:
			</td>
			<td>
				${log.userName}
			</td>
			<td style="color: blue;size: 20">
				����ʱ��:
			</td>
			<td>
				${log.operatingHours}
			</td>

		</tr>
		<tr>
			<td style="color: blue;size: 20">
				��������:
			</td>
			<td>
				${log.operationName}
			</td>
			<td style="color: blue;size: 20">
				����URL:
			</td>
			<td>
				${log.urloperation}
			</td>

		</tr>
		<tr>
			<td style="color: blue;size: 20">
				����Ӧ��:
			</td>
			<td>
				${log.theirApplication}
			</td>
			<td style="color: blue;size: 20">
				�Ƿ�ɹ�:
			</td>
			<td>
				${log.isSuccess}
			</td>

		</tr>
		<tr>
			<td style="color: blue;size: 20">
				��������:
			</td>
			<td>
				${log.objectDesc}
			</td>
			<td style="color: blue;size: 20">
				����IP:
			</td>
			<td>
				${log.ipAddr}
			</td>

		</tr>

		<tr>
			<td style="color: blue;size: 20">
				��־��ע:
			</td>
			<td colspan="3">
				${log.remark}
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<input type="button" value="����" class="button5" onclick="history.back();">
			</td>
		</tr>
	</table>