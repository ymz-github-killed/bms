<%@ page language="java" pageEncoding="GBK"%>
<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
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
				alert("��ѡ���ļ� !");
				return false;
			}
			if(form.funcId.value==''){
				alert("��ѡ����ർ�봦�Ľڵ�");
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
<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > ����Ȩ�� >�������Ȩ��</div>
<div style="float:left;width:100%;">
	<!--���� ��ʼ-->
    <div id="container">   
    <div id="searchForm">
        <form name="form1" style="text-align: left; padding: 10px;" class="cmxform editspace"
			action="${pageContext.request.contextPath}/bms/adm/bmsrscfunc/importFunc.do"
			enctype="multipart/form-data" method="post">
        <fieldset class="mb0">
        <legend>���빦�ܲ˵�˵��:</legend>
        <ol>
        	<li style="background:none">
                <div class="pt5"><span class="tableHeader">1����ѡ����Ҫ�ϴ����ļ�<br>2����ѡ������赼��Ľڵ�<br>3���ύ
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
       	<a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>����</span></span></a> 
        <a href="#" class="sexybutton" onclick="onBack();"><span><span>����</span></span></a>
        </div>
        <!--searchForm ��ʼ-->
        <div id="searchForm">
        
        </div>
        
        <!--searchForm ����-->

    </div>
    <!--���� ����-->
</div>
</div>

</body>
</html>

