<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@page import="java.util.List"%>
<%@page import="com.sinovatech.bms.adm.model.dto.TBmsDeptDTO"%>
<%@ page import="com.sinovatech.common.config.GlobalConfig"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<!-- ztree -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/zTreeStyle/zTreeStyle.css" type="text/css">
<script src="${pageContext.request.contextPath}/js/jquery-min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.ztree.core-3.5.min.js"></script>
<!-- easyuitree -->
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/icon.css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.easyui.min.js"></script>
<script src="${pageContext.request.contextPath}/js/navtree.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<%
	String treeType = GlobalConfig.getProperty("bmstheme", "locationTree");
%>
<script type="text/javascript">
	var treetype = "<%=treeType%>";
		jQuery(function(){
		getTree("${pageContext.request.contextPath}/bms/adm/bmstree/queryBmsLocation.do",treetype);
	});
	function showTree(array){
		$('#tree').tree({
			data:array,
			animate:true,
			onClick: function(node){
				parent.frames[2].location.href="${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=" + node.id;
			},
			onDblClick: function(node) {  
			    $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);  
			    node.state = node.state === 'closed' ? 'open' : 'closed';  
			} 
		});
	}
	function sel(event,treeId,treeNode)
	{
		parent.frames[2].location.href="${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=" + treeNode.id;
	}
</script>

	</head>
<body  class="overfwidth" style="overflow-x: scroll;" >
        <!--框内内容 结束-->
            <!--按钮 开始--> 
            
            <div class="overf pb5" align="center">
            <br>
           <span class="left pt5"><strong>部门定义</strong></span>
           <br>
             </div> 
             <div id="tree"></div>

	
</body>
<style type="text/css">
#tree li{list-style: none;}
</style>
</html>
