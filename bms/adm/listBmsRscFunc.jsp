<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@page import="java.util.List"%>
<%@page import="com.sinovatech.bms.adm.model.dto.TBmsDeptDTO"%>
<%@ page import="com.sinovatech.common.config.GlobalConfig"%>
<html>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	<head>
		<title>listBmsDept</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
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
			String treeType = GlobalConfig.getProperty("bmstheme", "rscfuncTree");
		%>
		<script type="text/javascript">
		var tab = 1;
		//给其他frame框架调用的方法
		function setTab(tabValue){
			tab = tabValue;
		}
		function showTree(array){
			$("#tree").tree({
				data:array,
				animate:true,
				onClick: function(node){
					callback(node.id);
				},
				onDblClick: function(node) {  
				    $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);  
				    node.state = node.state === 'closed' ? 'open' : 'closed';  
				} 
			});
		}
		jQuery(function(){
			var treetype = "<%=treeType%>";
			getTree("${pageContext.request.contextPath}/bms/adm/bmstree/queryBmsRole.do",treetype);
		});

		var sel = function(event,treeId,treeNode)
		{	
			callback(treeNode.id);
		}
		function callback(id){
			if(tab == "1"){
				window.parent.frames[2].location.href="${pageContext.request.contextPath}/bms/adm/bmsrscfunc/detailBmsRscFunc.do?id=" +id;
			}
			if(tab == "2"){
				window.parent.frames[2].document.forms[0].funcId.value=id;
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
											<strong>系统功能模块树</strong>
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
				<div id="tree"></div>
				</td>
			</tr>
		</table>
	</body>
</html>
