<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<%@ page import="com.sinovatech.common.config.GlobalConfig"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
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
	String treeType = GlobalConfig.getProperty("bmstheme", "rscForRoleTree");
%>
<script type="text/javascript">
var treetype = "<%=treeType%>";
$(function(){
	var id = $("#roleId").val();
	getTree("${pageContext.request.contextPath}/bms/adm/bmstree/beforeDefineRscForBmsRole.do?id="+id,treetype);
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
function sel()
{
}
//ѡ��ȫ��	
function selAll()
{
	if(treetype == "zTreeCheck"){
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
{
	if(treetype == "zTreeCheck"){
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

<body class="overfwidth">
<div class="barnavtop"><font size="4px">�����ڵ�λ�ã�ϵͳ���� > ��ɫ���� > �����ɫ����Ȩ��</font></div>
<div id="workspace">
	<!--���� ��ʼ-->
	
  <div id="container"> 
    <div class="editspace">
                 <div class="mb10"><form method="post" name="111" class="cmxform">
        <fieldset>
        <legend>�빴ѡ����Ȩ�����ƣ���<font class="colblue">${m.name }</font>������Ȩ:</legend>
        </fieldset>
        </form></div>              
     <form name="form1" action="${pageContext.request.contextPath}/bms/adm/bmsrole/defineRscForBmsRole.do" method="post" target="hideframe" >
     <p id="par"></p>
    <input id="roleId" name="roleId" type="hidden" value="<%=request.getParameter("id")%>"/>
    <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
	<tbody>
	<tr>
		<td valign="top">
		<table width="100%" align="center" height="100%">
		
			<tbody>
			<tr valign="top">
				<td valign="top">
					<div >
						<a  href="javascript:sel('1')">��̨����ϵͳ</a>
					</div>
					<div style="display: block;" class="webfx-tree-container" id="webfx-tree-object-3-cont">
							<!--�˵���Ŵ� -->
						<div id="tree"></div>
				  	</div>
				</td>
			</tr>
		</tbody></table>
		</td>
	</tr>
</tbody></table> 
</form>
        <!--searchForm ��ʼ-->
    </div>
 <div class="toolbar" style="text-align:center;">
       	<a href="#" onClick="submitForm();return false" class="sexybutton"><span><span>�ύ��Ȩ</span></span></a> 
        <a href="#" class="sexybutton" onclick="selAll()"><span><span>ȫ��ѡ��</span></span></a>
        <a href="#" class="sexybutton" onclick="deSelAll()"><span><span>ȫ��ȡ��</span></span></a>
        <a href="#" class="sexybutton" onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsrole/queryBmsRole.do'"><span><span>����

</span></span></a>        
        
        </div>
        <!--searchForm ����-->

    </div>
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
<style type="text/css">
#tree li{list-style: none;}
</style>
</html>
