<%@ page language="java" pageEncoding="GBK"%>
<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>

<html>
<head>
<title>����Ȩ��</title>
<script type="text/javascript">
		function beforeSubmit(){
			var form= document.forms[0];
			if(form.file.value==''){
				alert("��ѡ���ļ� !");
				return false;
			}
			if(form.funcId.value==''){
				alert("��ѡ����ർ�봦�Ľڵ�");
				return false;
			}
			parent.frames[0].sel=old;
			return true;
		}

		function onBack(){
			parent.frames[0].sel=old;
			window.history.back(-1);
		}

		var old=parent.frames[0].sel;
		
		parent.frames[0].sel= function(id){
			document.forms[0].funcId.value=id;
		}
		
		
		
	</script>

</head>
<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
	<tr>
		<td height="25" bgcolor="#DDFAFE">&nbsp;&nbsp;<span
			class="font_blue_title">�����ڵ�λ�ã��û�������ϵͳ &gt; Ȩ�޹���</span></td>
	</tr>
</table>
<table width="100%" border="0" cellpadding="0" cellspacing="0">

	<tr>
		<td width="46">&nbsp;</td>
		<td width="520">&nbsp;</td>
	</tr>
</table>




<table>
	<tr>
		<td width="20">&nbsp;</td>
		<td>
		<form
			action="${pageContext.request.contextPath}/bms/adm/bmsrscfunc/importFunc.do"
			enctype="multipart/form-data" method="post"
			onsubmit="return beforeSubmit()">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr height="25">
				<td><span class="font_blue_title" style="font-size: 15px">���빦�ܲ˵�˵��:</span></td>
			</tr>
			<tr height="25">
				<td>&nbsp;&nbsp;<span style="font-size: 13px">1����ѡ����Ҫ�ϴ����ļ�</span></td>
			</tr>
			<tr height="25">
				<td>&nbsp;&nbsp;<span style="font-size: 13px">2����ѡ������赼��Ľڵ�</span></td>
			</tr>
			<tr height="25">
				<td>&nbsp;&nbsp;<span style="font-size: 13px">3���ύ</span></td>
			</tr>
			<tr>
				<td height="35"><input type="file" name="file"></td>
			</tr>
			<tr>
				<td><input type="hidden" value="" name="funcId"> <input
					type="submit" value="�ύ" class="button5"> <input
					type="button" onclick="" value="����" class="button5"></td>
			</tr>
		</table>
		</form>
		</td>
	</tr>
</table>

</body>
</html>
