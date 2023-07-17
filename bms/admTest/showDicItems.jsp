<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%
	String tree = (String) request.getAttribute("tree");
%>
<html>
  <head>
   <script
	src="${pageContext.request.contextPath}/common/xloadtree/xtree.js"></script>
	<link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath}/common/xloadtree/xtree.css">
	
	<script type="text/javascript">
		
		var webFXTreeConfig = {
				rootIcon        : '${pageContext.request.contextPath}/common/xloadtree/images/foldericon.png',
				openRootIcon    : '${pageContext.request.contextPath}/common/xloadtree/images/openfoldericon.png',
				folderIcon      : '${pageContext.request.contextPath}/common/xloadtree/images/foldericon.png',
				openFolderIcon  : '${pageContext.request.contextPath}/common/xloadtree/images/openfoldericon.png',
				fileIcon        : '${pageContext.request.contextPath}/common/xloadtree/images/file.png',
				iIcon           : '${pageContext.request.contextPath}/common/xloadtree/images/I.png',
				lIcon           : '${pageContext.request.contextPath}/common/xloadtree/images/L.png',
				lMinusIcon      : '${pageContext.request.contextPath}/common/xloadtree/images/Lminus.png',
				lPlusIcon       : '${pageContext.request.contextPath}/common/xloadtree/images/Lplus.png',
				tIcon           : '${pageContext.request.contextPath}/common/xloadtree/images/T.png',
				tMinusIcon      : '${pageContext.request.contextPath}/common/xloadtree/images/Tminus.png',
				tPlusIcon       : '${pageContext.request.contextPath}/common/xloadtree/images/Tplus.png',
				blankIcon       : '${pageContext.request.contextPath}/common/xloadtree/images/blank.png',
				defaultText     : '节点',
				defaultAction   : '${pageContext.request.contextPath}/common/xloadtree/javascript:void(0);',
				defaultBehavior : 'classic',
				usePersistence	: true
			};
		
			var root;
			<%=request.getAttribute("tree")%>
		
	</script>
	
	<script type="text/javascript">
		
		function selValue () {
			var ns = document.getElementsByName("tree_chk");
			document.getElementById('values').value = "";
			for(var i=0; i<ns.length; i++)
			{
				if(ns[i].checked == true) {
					document.getElementById('values').value += "," + ns[i].value;
				}
			}
			if (ns.length > 0) {
				document.getElementById('values').value = document.getElementById('values').value.substring (1);
			}
			document.getElementById('gForm').submit();
		}
		
		function sel (value) {
		}
		
		function selAll()
		{
			var ns = document.getElementsByName("tree_chk");
			for(var i=0; i<ns.length; i++)
			{
				ns[i].checked = true;
			}
		}
		
		
		function deSelAll()
		{
			var ns = document.getElementsByName("tree_chk");
			for(var i=0; i<ns.length; i++)
			{
				ns[i].checked = false;
			}
		}
	</script>
	
  </head>
  
  <body style="border: 0px; padding: 0px; margin: 0px;text-align: center;">
	<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="border: 1px solid #DDFAFE;">
			<tr>
				<td height="25" bgcolor="#DDFAFE">
								&nbsp;&nbsp;
								<span class="font_blue_title">您所在的位置：用户管理子系统 &gt; 角色管理</span>
								<span class="font_blue_title">&gt; 定义角色数据权限</span>
				</td>
			</tr>
			<tr>
				<td valign="top">
					<form action="${pageContext.request.contextPath}/bms/adm/bmsrole/doGrant.do" method="post" id="gForm" >
						<table width="100%" height="100%" align="center">
							<tr>
								<td>
									<b>请勾选下列的数据，对角色进行数据授权:</b>
								</td>		
							</tr>
							<tr valign="top">
								<td valign="top">
									<script type="text/javascript">
										document.write(root);
									</script>
								</td>		
							</tr>
							<tr>
							
							<td align="center">
									<input name="btna1" type="button" class="button5" onclick="selValue()" value="提交授权" />
									<input onclick="selAll()" name="btna2" type="button" class="button5" value="全部选择" />
									<input onclick="deSelAll()" name="btna3" type="button" class="button5" value="全部取消" />								
							</td>
	
							</tr>
						</table>
						<input type="hidden" value="" id="values" name="values" />
					</form>
				</td>
			</tr>
		</table>
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
		
</body>
</html>
