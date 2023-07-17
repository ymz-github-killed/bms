<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<%@ page import="com.sinovatech.common.config.GlobalConfig"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
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
String treeType = GlobalConfig.getProperty("bmstheme", "selFuncTree");
%>
<script type="text/javascript">
var treetype = "<%=treeType%>";
$(function(){
	getTree("${pageContext.request.contextPath}/bms/adm/bmstree/selFunc.do",treetype);	
});
	function showTree(array){
		$('#tree').tree({
			data:array,
			animate:true,
			onClick: function(node){
				parent.selFuncSuc(node.id,node.text);
			},
			onDblClick: function(node) {  
			    $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);  
			    node.state = node.state === 'closed' ? 'open' : 'closed';  
			} 
		});
	}
	function sel(event,treeId,treeNode)
	{
		parent.selFuncSuc(treeNode.id,treeNode.name);
	}
	
	function reback(){
		parent.showSelDiv('funcDiv',true);
	}
</script>

<body class="overfwidth">
<div class="barnavtop">您所在的位置：系统管理 > 数据权限 > 新增数据权限 > 所属功能</div>
<div id="workspace">
	<!--主体 开始-->
    <div id="container">    
        <!--searchForm 开始-->
       
        <div class="overf pb5">
           <h1> <span class="left pt5">请点击功能菜单进行选择</span></h1>
            <span class="left ml10"><a class="sexybutton" href="javascript:reback()"><span><span>返回</span></span></a></span>
             </div>
        <div id="tree"></div>
        <!--searchForm 结束-->
        <!--CmsSiteList 开始-->
        <form id="CmsSiteList" action="/cms/site/list.do" method="post">
        <div>
            <a href="sjqx_bianji.html" title="所属功能">
           
            </a>
        </div>
        </form>
    <!--CmsSiteList 结束-->
    </div>
    <!--主体 结束-->
</div>


</body>
</html>
