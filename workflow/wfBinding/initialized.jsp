<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%
	response.setHeader("Cache-Control", "no-cache");
%>

<html>
  <head>
    
    <title>����������ҳ��</title>
    <link href="${pageContext.request.contextPath}/css/yh.css" rel="stylesheet" type="text/css">
	<link
			href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">

  </head>
  
  <body>
	
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
						<td height="25" bgcolor="#DDFAFE">
							&nbsp;&nbsp;
							<span class="font_blue_title">�����ڵ�λ�ã����������� &gt; ҵ��ʵ����ת </span>
							<span class="font_blue_title">&gt; ��ʼ���ɹ� </span>
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
	
		<table>
			<tr>
				<td colspan="2">
					<span class=".font_title"> ���̳�ʼ��ɣ�</span>
				</td>
			</tr>
			<tr>
				<td>
					<span class=".font_title">���̵���ˮID</span>
				</td>
				<td>${entryId}</td>
			</tr>
			<tr>
				<td>
					<span class=".font_title">��������</span>
				</td>
				<td>${wfName}</td>
			</tr>
		</table>
  </body>
</html>
