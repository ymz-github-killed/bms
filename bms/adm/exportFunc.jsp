<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<%@ page import="com.sinovatech.common.config.GlobalConfig"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
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
	String treeType = GlobalConfig.getProperty("bmstheme", "exportFuncTree");
%>
<script type="text/javascript">
var treetype = "<%=treeType%>";
jQuery(function(){
	getTree("${pageContext.request.contextPath}/bms/adm/bmstree/beforeExportFunc.do",treetype);	
});
function showTree(array){
	$('#tree').tree({
		data:array,
		animate:true,
		checkbox:true,
		onDblClick: function(node) {  
		    $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);  
		    node.state = node.state === 'closed' ? 'open' : 'closed';  
		} 
	});
}
function sel(){}
//ѡ��ȫ��	
function selAll()
{	if(treetype == "zTreeCheck"){
	 	var treeObj = $.fn.zTree.getZTreeObj("tree");
     	treeObj.checkAllNodes(true);
	}
	if(treetype == "easyUiTree"){
		var node = $("#tree").tree('find',1);
		$("#tree").tree('check', node.target);
	}
	
}
//ȫȡ��
function deSelAll()
{	if(treetype == "zTreeCheck"){
	  var treeObj = $.fn.zTree.getZTreeObj("tree");
      treeObj.checkAllNodes(false);
	}
	if(treetype == "easyUiTree"){
		var node = $("#tree").tree('find',1);
		$("#tree").tree('uncheck', node.target);
	}
}
function submitForm()
{	
	var nodes;
	if(treetype == "zTreeCheck"){
		var treeObj = $.fn.zTree.getZTreeObj("tree");
		nodes = treeObj.getCheckedNodes();
	}
	if(treetype == "easyUiTree"){
		nodes = $("#tree").tree('getChecked');
	}
	var bool=false;
	if(nodes.length>0){
		bool=true;
	}
	if(bool){
		for(var i=1;i<nodes.length;i++){
			$("#par").after("<input type='hidden' name='tree_chk' value='"+nodes[i].value+"'/>");
		}
		document.form1.submit();
	}else{
		alert("��ѡ������һ�");
		return false;
	}
}
</script>

<body class="overfwidth" id='all'>
<div class="workspace1 left">
<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > ����Ȩ�� >��������Ȩ��</div>
<div style="float:left;width:100%;">
	<!--���� ��ʼ-->
    <div id="container"> 
    <div class="editspace">  
    <form name="form1" action="${pageContext.request.contextPath}/bms/adm/bmsrscfunc/exportFunc.do"
			method="post" target="hideframe">
	<p id="par"></p>	
    <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
	<tbody>
	<tr>
		<td valign="top">
		<table width="100%" align="center" height="100%">
			<tbody><tr>
				<td><b>�빴ѡ����Ȩ�����ƣ���Ȩ�޲˵����е���:</b></td>
			</tr>
			<tr valign="top">
				<td valign="top"><div ><a  href="javascript:sel('1')">��̨����ϵͳ</a></div>
				<div style="display: block;" class="webfx-tree-container">
				<!-- �˵���Ŵ� -->
					<div id="tree"></div>
				<div>
				</td>
			</tr>
		</tbody></table>
		</td>
	</tr>
	
</tbody></table> 
</form>
        <!--searchForm ��ʼ-->
    </div>
         <div class="toolbar" style="text-align:center">
       	<a href="#" class="sexybutton" onclick="submitForm();return false"><span><span>����Ȩ��</span></span></a> 
        <a href="#" class="sexybutton" onclick="selAll()"><span><span>ȫ��ѡ��</span></span></a>
        <a href="#" class="sexybutton" onclick="deSelAll()"><span><span>ȫ��ȡ��</span></span></a>
		<a href="#" class="sexybutton" 
		onclick="parent.location.href='${pageContext.request.contextPath}/bms/adm/bmsrscfunc/main.do'"><span><span>����</span></span></a>

        </div>
        <!--searchForm ����-->

    </div>
    <!--���� ����-->
</div>
</div>

</body>
</html>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>