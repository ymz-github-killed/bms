<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>

<script
	src="${pageContext.request.contextPath}/common/xloadtree/xtree.js"></script>
<link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath}/common/xloadtree/xtree.css">
<script type="text/javascript">
<!--
function setVisitLocationForParent(id,name)
{
	parent.$("visitDeptname_").value = name;
	parent.$("visitDeptid_").value = id;
	parent.showSelDiv('visitLocationDiv',true);
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
				defaultText     : '�ڵ�',
				defaultAction   : '${pageContext.request.contextPath}/common/xloadtree/javascript:void(0);',
				defaultBehavior : 'classic',
				usePersistence	: true
			};
		
			var root;
			<%=request.getAttribute("tree")%>
//-->
</script>
</head>

<body style="border: 0px; padding: 0px; margin: 0px;text-align: center;">
	<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="border: 1px solid #DDFAFE;">
			<tr>
				<td height="25" bgcolor="#DDFAFE">
								&nbsp;&nbsp;
								<span class="font_blue_title">�����ڵ�λ�ã��û�������ϵͳ &gt; �û�����</span>
								<span class="font_blue_title">&gt; �༭�û�:ѡ���û��ɷ��ʵĵص�</span>
				</td>
			</tr>
			<tr>
				<td valign="top">
					<table width="100%" height="100%" align="center">
						<tr>
							<td>
								<b>�����ص����ƽ���ѡ��:</b>
								<a href="javascript:parent.showSelDiv('visitLocationDiv',true)">����</a>
							</td>		
						</tr>
						<tr valign="top">
							<td valign="top">
								<script type="text/javascript">
									document.write(root);
								</script>
							</td>		
						</tr>
					</table>
				</td>
			</tr>
		</table>
</body>
</html>