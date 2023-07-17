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
			function sel(id)
			{
				//parent.main.location.href="${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=" + id;
				parent.frames[2].location.href="${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=" + id;
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
	</head>
	<body style="border: 0px; margin: 0px; padding: 0px; width: 100%; height: 100%;"
		background="#F1F1F1">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td height="50" align="left"
					background="${pageContext.request.contextPath}/images/bg10.gif">
					<table width="173" height="50" border="0" cellpadding="0"
						cellspacing="0">
						<tr>
							<td
								background="${pageContext.request.contextPath}/images/t41.gif">
								<table width="173" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td width="51">
											&nbsp;
										</td>
										<td width="122" class="font_black14">
											<strong>部门</strong>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td>
					<script type="text/javascript">
						document.write(root);
					</script>
				</td>
			</tr>
		</table>
	</body>
</html>
