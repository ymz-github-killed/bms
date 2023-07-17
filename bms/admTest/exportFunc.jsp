<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>

<html>
<head>
<script
	src="${pageContext.request.contextPath}/common/xloadtree/xtree.js"></script>
<link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath}/common/xloadtree/xtree.css">

<script type="text/javascript">
<!--
function setDeptForParent(id,name)
{
	parent.$("deptname_").value = name;
	parent.$("deptid_").value = id;
	parent.showSelDiv('deptDiv',true);
}

function sel(value)
{
	var isChecked=false;
	var ns = document.getElementsByName("tree_chk");
	for(var i=0; i<ns.length; i++)
	{
		if(value == ns[i].value){
			isChecked=ns[i].checked;
		}
		if(value.indexOf(ns[i].value)==0){
			ns[i].checked = isChecked;
		}
	}
}

function selAll()
{
	var ns = document.getElementsByName("tree_chk");
	for(var i=0; i<ns.length; i++)
	{
		ns[i].checked = true;
	}
}

function submitForm(f)
{
	f.target = "hideframe";
	return true;
}

function deSelAll()
{
	var ns = document.getElementsByName("tree_chk");
	for(var i=0; i<ns.length; i++)
	{
		ns[i].checked = false;
	}
}

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
//-->
</script>
</head>

<body
	style="border: 0px; padding: 0px; margin: 0px; text-align: center;">
<table width="100%" border="0" cellpadding="0" cellspacing="0"
	align="center" style="border: 1px solid #DDFAFE;">
	<tr>
		<td height="25" bgcolor="#DDFAFE">&nbsp;&nbsp; <span
			class="font_blue_title">您所在的位置：功能权限子系统 &gt; 权限管理</span> <span
			class="font_blue_title">&gt; 导出管理权限</span></td>
	</tr>
	<tr>
		<td valign="top">
		<form
			action="${pageContext.request.contextPath}/bms/adm/bmsrscfunc/exportFunc.do"
			method="post" target="hideframe">
		<table width="100%" height="100%" align="center">
			<tr>
				<td><b>请勾选下列权限名称，对权限菜单进行导出:</b></td>
			</tr>
			<tr valign="top">
				<td valign="top"><script type="text/javascript">
										document.write(root);
									</script></td>
			</tr>
			<tr>
				<td align="center"><input name="btna1" type="submit"
					class="button5" value="导出权限" /> 
				<input onclick="selAll()" name="btna2" type="button" class="button5" value="全部选择" /> 
				<input onclick="deSelAll()" name="btna3" type="button" class="button5" value="全部取消" /> 
				<input name="Button22" type="button" class="button5" value="返回"
					onclick="parent.location.href='${pageContext.request.contextPath}/bms/adm/bmsrscfunc/main.do'"
					style="width: 60px;" /></td>
			</tr>
		</table>
		</form>
		</td>
	</tr>
	
</table>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>