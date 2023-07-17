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
			function sel(id,g)
			{
				if(g)
				{
					//parent.document.getElementById("main").src="${pageContext.request.contextPath}/bms/adm/loadapp.do?id=" + id;
					document.getElementById(id).href="${pageContext.request.contextPath}/bms/adm/loadapp.do?id=" + id;
				}
				else
				{
					if(id==1)
					{//首页
						parent.document.getElementById("main").src="${pageContext.request.contextPath}/bms/adm/todo.do";
					}
				}
			}
			function changePassword(){
				parent.document.getElementById("main").src="${pageContext.request.contextPath}/bms/adm/bmsuser/beforeChangePassword.do";
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
			
		var exit_node = new WebFXTreeItem("退出","javascript:top.location.href='${pageContext.request.contextPath}/logout.do';void(0);",false,'${pageContext.request.contextPath}/images/exit.gif','${pageContext.request.contextPath}/images/exit.gif');
		var cps_node = new WebFXTreeItem("更改密码","javascript:changePassword()",false,'${pageContext.request.contextPath}/images/2j21.gif','${pageContext.request.contextPath}/images/2j21.gif');
		root.add(cps_node);
		root.add(exit_node);
//-->
</script>
</head>

<body
	style="border: 0px; padding: 0px; margin: 0px; text-align: center;">
	<table width="173"  border="0" cellpadding="0" cellspacing="0" bgcolor="#F1F1F1">
  <tr>
    <td height="3" colspan="3"></td>
  </tr>
  <tr>
    <td width="2" height="6"></td>
    <td width="83"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="1%"><img height="48" src="../../images/t38.gif" width="156"></td>
        <td width="98%" background="../../images/bg8.gif"><s></s>&nbsp;</td>
        <td width="1%"><img height="48" src="../../images/t39.gif" width="7"></td>
      </tr>
    </table></td>
    <td width="2"></td>
  </tr>
  <tr>
    <td height="6" colspan="3"></td>
  </tr>
  <tr>
    <td height="6"></td>
    <td height="6"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td width="11" valign="top"><img height="11" src="../../images/t8.gif" width="11"></td>
        <td height="11" background="../../images/t10.gif"></td>
        <td width="12" valign="top"><img height="11" src="../../images/t9.gif" width="12"></td>
      </tr>
      <tr>
        <td width="11" background="../../images/t11.gif"></td>
        <td valign="top" bgcolor="#FFFFFF">
        	<div class="l_left_cont">
				<div id="tree_area">
					<ul class="simpleTree">
						<script type="text/javascript">
							document.write(root);
						</script>
						<li><img src='${pageContext.request.contextPath}/images/2j21.gif'/><span>
							<a href="#" id="402881bc2d02d411012d02d5ae380001" onclick="sel('402881bc2d02d411012d02d5ae380001',true)">商品类型查看</a>
							</span>
						</li>
						<li><img src='${pageContext.request.contextPath}/images/2j21.gif'/><span>
							<a href='${pageContext.request.contextPath}/bms/adm/loadapp.do?id=8a8a8a811850408f01185048250a0006'>新增商品类型</a>
							</span>
						</li>
						
					</ul>
				</div>
			</div>
		</td>
        <td width="12" background="../../images/t12.gif"></td>
      </tr>
      <tr>
        <td width="11" valign="top"><img height="12" src="../../images/t13.gif" width="11"></td>
        <td height="12" background="../../images/t15.gif"></td>
        <td width="12" valign="top"><img height="12" src="../../images/t14.gif" width="12"></td>
      </tr>
    </table></td>
    <td height="6"></td>
  </tr>
  <tr>
    <td height="6" colspan="3">&nbsp;</td>
  </tr>
</table>
</body>
</html>