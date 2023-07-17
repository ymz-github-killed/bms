<%@ page contentType="text/html;charset=GBK"%>
<%@ page import="com.sinovatech.common.config.GlobalConfig"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<!-- ztree -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/zTreeStyle/zTreeStyle.css" type="text/css">
<script src="${pageContext.request.contextPath}/js/jquery-min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.ztree.core-3.5.min.js"></script>
<!-- easyuitree -->
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/icon.css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.easyui.min.js"></script>
<script src="${pageContext.request.contextPath}/js/navtree.js"></script>

<%
	String treeType = GlobalConfig.getProperty("bmstheme", "dicItemTree");
%>
<script type="text/javascript">
	var treetype = "<%=treeType%>";
    function goBack(){
			parent.location.href="${pageContext.request.contextPath}/bms/adm/bmsrole/queryBmsRole.do";	
		}
    function sel(event,treeId,treeNode)
	{	var code = treeNode.value;
		if(code != '00000'){
		parent.frames[2].location.href="${pageContext.request.contextPath}/bms/adm/showDicItems.jsp?code=" + code;
		}
	}
    jQuery(function(){
		getTree("${pageContext.request.contextPath}/bms/adm/bmstree/showFuncRole.do",treetype);
    });
    function showTree(array){
    	$('#tree').tree({
			data:array,
			animate:true,
			onClick: function(node){
				var code = node.value;
				if(code != '00000'){
				parent.frames[2].location.href="${pageContext.request.contextPath}/bms/adm/showDicItems.jsp?code=" + code;
				}
			},
			onDblClick: function(node) {  
			    $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);  
			    node.state = node.state === 'closed' ? 'open' : 'closed';  
			} 
		});
    }
    </script>
  </head>
  
  <body style="border: 0px; margin: 0px; padding: 0px; width: 100%; height: 100%;"
		background="#F1F1F1">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td height="50" align="left"
					background="/images/bg10.gif">
					<table width="173" height="50" border="0" cellpadding="0"
						cellspacing="0">
						<tr>
							<td
								background="/images/t41.gif">
								<table width="173" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td width="51">
											&nbsp;
										</td>
										<td width="122" class="font_black14">
											<strong>数据字典选择</strong>
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
					<div id="tree"  class="ztree"></div>
				</td>
			</tr>
			<tr><td>&nbsp;</td></tr>
			<tr>
				<td>
				<div align="center">
					<input type="button" onclick="goBack()" value="返回" /> 
				</div>
				</td>
			</tr>
		</table>
	</body>

</html>
