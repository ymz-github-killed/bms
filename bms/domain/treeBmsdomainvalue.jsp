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
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css" />
<!-- ztree插件 -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/zTreeStyle/zTreeStyle.css" type="text/css">
<script src="${pageContext.request.contextPath}/js/jquery-min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.ztree.core-3.5.min.js"></script>
<!-- easyuitree -->
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/icon.css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.easyui.min.js"></script>

<script src="${pageContext.request.contextPath}/js/navtree.js"></script>
<style type="text/css">
.tree li{
    list-style-type: none;
}
</style>
<meta name=generator content="MSHTML 8.00.6001.18939">
<%
	String id=request.getParameter("domainId");
	String treeType = GlobalConfig.getProperty("bmstheme", "treedomainvalue");
 %>
	<script type="text/javascript">
	var treetype = "<%=treeType%>";
	$(function(){
			getTree("${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/queryBmsDomainvalueTree.do",treetype);
	});
	function showTree(array){
		$('#tree').tree({
			data:array,
			animate:true,
			onClick: function(node){
				parent.domainValue.location.href='${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/queryBmsDomainvalue.do?parentId='+node.id;
			},
			onDblClick: function(node) {  
			    $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);  
			    node.state = node.state === 'closed' ? 'open' : 'closed';  
			} 
		});
	}
	function refreshTree(){
		getTree("${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/queryBmsDomainvalueTree.do",treetype);
	}
	function showTree(array){
		$('#tree').tree({
			data:array,
			animate:true,
			lines:true,
			onClick: function(node){
				parent.domainValue.location.href='${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/queryBmsDomainvalue.do?parentId='+node.id;
			},
			onDblClick: function(node) {  
			    $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);  
			    node.state = node.state === 'closed' ? 'open' : 'closed';  
			} 
		});
	}
	function get(id){
		return document.getElementById(id);
	}
	function sel(event,treeId,treeNode)
	{
		parent.domainValue.location.href='${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/queryBmsDomainvalue.do?parentId='+treeNode.id;
	}
</script>

<body class="overfwidth">
        <!--框内内容 结束-->
            <!--按钮 开始--> 
            
            <div class="overf pb5">
           <h1> <span class="left pt5">字典值定义</span></h1>
             </div> 
             
 <div style="overflow:hidden">
 <div style="float:left;">
 <a href="javascript:refreshTree();">刷新树</a>
	<div id="tree" class="ztree"></div>
 </div>
              </div>
</body>
</html>
