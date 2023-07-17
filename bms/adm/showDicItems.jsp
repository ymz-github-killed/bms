<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<%@ page import="com.sinovatech.common.config.GlobalConfig"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<!-- ztree -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/zTreeStyle/zTreeStyle.css" type="text/css">
<script src="${pageContext.request.contextPath}/js/jquery-min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.ztree.core-3.5.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.ztree.excheck-3.5.min.js"></script>
<!-- easyuitree -->
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/icon.css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.easyui.min.js"></script>

<script src="${pageContext.request.contextPath}/js/navtree.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<%
	String treeType = GlobalConfig.getProperty("bmstheme", "domainValueTree");
%>
<script type="text/javascript">
	var treetype = "<%=treeType%>";
	$(function(){
		var code = $("#code").val();
		if(code != ""&& code !="null"){
			getTree("${pageContext.request.contextPath}/bms/adm/bmstree/showDicItems.do?code="+code,treetype);
		}
	});
	function showTree(array){
		$("#tree").tree({
			data:array,
			checkbox:true,
			animate:true,
			cascadeCheck:true,
			onDblClick: function(node) {  
			    $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);  
			    node.state = node.state === 'closed' ? 'open' : 'closed';  
			} 
		});
	}
	function selValue() {
		var treeObj;
		var ns;
		if(treetype == "zTreeCheck"){
			treeObj = $.fn.zTree.getZTreeObj("tree");
			ns = treeObj.getCheckedNodes();
		}
		if(treetype == "easyUiTree"){
			ns = $("#tree").tree('getChecked');
		}
		document.getElementById('values').value = "";
		for(var i=0; i<ns.length; i++)
		{
			//if(ns[i].checked == true) {
				document.getElementById('values').value += "," + ns[i].value;
			//}
		}
		if (ns.length > 0) {
			document.getElementById('values').value = document.getElementById('values').value.substring(1);
		}
		document.getElementById('gForm').submit();
	}
	
	function sel (value) {
	}
	
	function selAll()
	{
		if(treetype == "zTreeCheck"){
		 	var treeObj = $.fn.zTree.getZTreeObj("tree");
	     	treeObj.checkAllNodes(true);
		}
		if(treetype == "easyUiTree"){
			var node = $("#tree").tree('find',"00000");
			$("#tree").tree('check', node.target);
		}
	}
	
	
	function deSelAll()
	{
		if(treetype == "zTreeCheck"){
			  var treeObj = $.fn.zTree.getZTreeObj("tree");
		      treeObj.checkAllNodes(false);
			}
		if(treetype == "easyUiTree"){
			var node = $("#tree").tree('find',"00000");
			$("#tree").tree('uncheck', node.target);
		}
	}
</script>
<style type="text/css">
.cmxform fieldset li{background:url(""); padding:0 0 0}
</style>
<body class="overfwidth">
<div class="barnavtop">您所在的位置：系统管理 > 角色管理 > 定义角色数据权限</div>
<div class="workspace1 left" style="padding-left:20px;height:500px;">
<div class="editspace">
            <form id="gForm" action="${pageContext.request.contextPath}/bms/adm/bmsrole/doGrant.do" class="cmxform" method="post" name="" target="hideframe">
            <input type="hidden" id="code" name="code" value="<%=request.getParameter("code") %>" />
                 <fieldset>
                  <legend>请勾选下列的数据，对角色进行数据授权:</legend>
                   		<div id="tree"></div>
              </fieldset>
              <input type="hidden" value="" id="values" name="values" />   
            </form>
          </div>
           <div class="toolbar" align="center">
       	<a href="#" onclick="selValue()" class="sexybutton"><span><span>提交授权</span></span></a> 
        <a href="#" onclick="selAll()" class="sexybutton"><span><span>全部选择</span></span></a>
        <a href="#" onclick="deSelAll()" class="sexybutton"><span><span>全部取消</span></span></a>   
        </div>
        <!--框内内容 开始-->
        <!--框内内容 结束-->
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
