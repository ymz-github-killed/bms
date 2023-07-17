<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@page import="java.util.List"%>
<%@page import="com.sinovatech.bms.adm.model.dto.TBmsDeptDTO"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>listBmsDept</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">

		<script
			src="${pageContext.request.contextPath}/common/xloadtree/xtree.js"></script>
		<link type="text/css" rel="stylesheet"
			href="${pageContext.request.contextPath}/common/xloadtree/xtree.css">
		<script type="text/javascript">
			
			function get(id){
				return document.getElementById(id);
			}
			function sel(id)
			{
				parent.domainValue.location.href='${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/queryBmsDomainvalue.do?parentId='+id;
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
			
			function addNode(id,text)
			{
				alert(id);
				if (root.getSelected()) 
				{
					root.getSelected().add(new WebFXTreeItem(text,"javascript:sel('" + id + "')"));
				}
			}
			
		</script>

		<style type="text/css">
			body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,textarea,p,blockquoto,th,img,bottom{
				margin:0px;
				padding:0px;
				line-height:20px;
				font-size:12px;
			}
			ul,ol,li{
				list-style:none;
			}
			.bor_table{ border-top:1px solid #ccc;  border-left:1px solid #ccc;}
			.bor_table td{ border-bottom:1px solid #ccc;  border-right:1px solid #ccc;}
			.tdbg{ background:#f4f4f4; padding:10px; font-size:12px; font-weight:bold; line-height:22px;}
			.tdbg_two{ background:#fdfdfd; padding:20px; font-size:12px;}
			.border_title{border:1px solid #ccc; border-bottom:none; margin-top:20px; color:#000000; font-size:14px; font-weight:bold; background:#f4f4f4; width:93%; margin:0 auto; line-height:16px; padding:13px;} 
		</style>

	</head>
	<body
		style="border: 0px; margin: 0px; padding: 0px; width: 100%; height: 100%;"
		background="#F1F1F1">



		<table cellpadding="0" cellspacing="0" border="0" width="95%"
			align="center" class="bor_table">
			<tr>
				<td class="tdbg" width="15%" valign="top">
					<a href="${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/queryBmsDomainvalueTree.do">刷新树</a>
					<script type="text/javascript">
							document.write(root);
						</script>
				</td>
			</tr>
		</table>
	</body>
</html>




