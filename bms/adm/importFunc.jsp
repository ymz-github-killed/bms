<%@ page language="java" pageEncoding="GBK"%>
<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<script src="${pageContext.request.contextPath}/js/jquery-min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.ztree.core-3.5.min.js"></script>
<script src="${pageContext.request.contextPath}/js/navtree.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
$(function(){
	window.parent.document.getElementById('left').contentWindow.setTab("2"); 

});


		var old=parent.frames[0].sel;
		function beforeSubmit(){
			var form= document.forms[0];
			if(form.file.value==''){
				alert("请选择文件 !");
				return false;
			}
			if(form.funcId.value==''){
				alert("请选择左侧导入处的节点");
				return false;
			}
			parent.frames[0].sel=old;
			document.form1.submit();
		}

		function onBack(){
			parent.frames[0].sel=old;
			window.history.back(-1);
		}
		parent.frames[0].sel = function(event,treeId,treeNode)
		{	
			window.parent.frames[2].document.forms[0].funcId.value=treeNode.id;
		}
		
</script>
<body class="overfwidth">
<div class="workspace1 left">
<div class="barnavtop">您所在的位置：系统管理 > 功能权限 >导入管理权限</div>
<div style="float:left;width:100%;">
	<!--主体 开始-->
    <div id="container">   
    <div id="searchForm">
        <form name="form1" style="text-align: left; padding: 10px;" class="cmxform editspace"
			action="${pageContext.request.contextPath}/bms/adm/bmsrscfunc/importFunc.do"
			enctype="multipart/form-data" method="post">
        <fieldset class="mb0">
        <legend>导入功能菜单说明:</legend>
        <ol>
        	<li style="background:none">
                <div class="pt5"><span class="tableHeader">1、请选择需要上传的文件<br>2、请选择左侧需导入的节点<br>3、提交
</span>           
              </div>
             
				<div height="50" class=" pb0 pt10"><input class="bgw" type="file" name="file"></div>
                 <div>     
                 </div>
            </li>
        </ol>
        </fieldset>
        <input type="hidden" value="" name="funcId">
        </form>
        </div> 
         <div class="toolbar">
       	<a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>保存</span></span></a> 
        <a href="#" class="sexybutton" onclick="onBack();"><span><span>返回</span></span></a>
        </div>
        <!--searchForm 开始-->
        <div id="searchForm">
        
        </div>
        
        <!--searchForm 结束-->

    </div>
    <!--主体 结束-->
</div>
</div>

</body>
</html>

