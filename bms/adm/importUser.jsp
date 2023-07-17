<%@ page language="java" pageEncoding="GBK"%>
<%@ page contentType="text/html;charset=GBK"%>
<%@page import="java.util.List"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@page import="com.sinovatech.common.config.GlobalConfig"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/public.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
		<%  int location=0;
			int role=0;
			int loc=0;
			int rol=0;
			List locationList=(List)request.getAttribute("locationList"); 
			List roleList=(List)request.getAttribute("roleList");
			if(locationList!=null){
				location=locationList.size();
			}
			if(roleList!=null){
				role=roleList.size();
			}
			String password = GlobalConfig.getProperty("bms","userLoginPassword");
		%>
<style type="text/css">
<!--
html,body,div,span,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,address,big,cite,code,del,em,font,img,ins,small,strong,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,lege

nd,input,text{margin:0;padding:0;}
body{font:12px Arial,Helvetica,sans-serif, '宋体'; line-height:22px;color:#4e4e4e;background:#fff;_background-image:url(about:blank);_background-attachment:fixed;}
ol,ul{list-style:none;}
h1{font:20px "microsoft yahei","SimSun";}
h2,h3{font-size:14px;}
h4,h5,h6{font-size:12px;}

.box{clear:both;float:left;margin-top:15px;width:100%;display:inline;}
.text_1{width:248px;height:19px;line-height:19px;}
.ss_ul,.ss_ul2{width:248px;_width:248px;height:225px;overflow:auto;overflow-x:hidden;border:1px solid #7F9DB9;border-top:none;display:none;*margin-top:-1px;padding-

left:5px;background:#fff; position:absolute;}
.ss_ul{_top:220px;_left:11px;}
.ss_ul2{_top:220px;_left:269px;}
.ss_ul li,.ss_ul2 li{ cursor:pointer;width:100%;}
.fl{display:inline-block;_float:left;}
.pl10{padding-left:10px;}
.w250{width:250px;}
-->
</style>
<script type="text/javascript">
		function beforeSubmit(){
			var form= document.forms[0];
			var filename=form.file.value;
			var name=filename.split(".");
			var i=name.length-1;
			if(form.file.value==''){
				alert("请选择文件 !");
				return false;
			}
			if(name[i]!="xls" && name[i]!="xlsx"){
				alert("文件类型不支持");
				return false;
			}else{
				document.getElementById("fileType").value=name[1]
			}
			document.form1.action= "${pageContext.request.contextPath}/bms/adm/bmsuser/importUser.do";
			document.form1.submit();
		}

		function exportListUser()
		{
			document.forms(0).action= "${pageContext.request.contextPath}/bms/adm/bmsuser/exportListUser.do";
			document.forms(0).submit();
		}
</script>
<body class="overfwidth">
<div class="workspace1 left">
<div class="barnavtop">您所在的位置：用户管理 >导入用户信息</div>
<div style="float:left;width:100%;">
	<!--主体 开始-->
    <div id="container" style="position:relative;">   
    <div class="toolbar">
       	<a href="${pageContext.request.contextPath}/bms/adm/userExport.jsp" class="sexybutton" ><span><span>导出模版</span></span></a> 
    </div>
    <div id="searchForm">
        <form name="form1" style="text-align: left; padding: 10px;" class="cmxform editspace"
			action="${pageContext.request.contextPath}/bms/adm/bmsuser/importUser.do" target="hideframe"
			enctype="multipart/form-data" method="post">
		<input type="hidden" id="exportType" name="exportType" value="false" />
		<input type="hidden" id="locationLength" value="<%=location %>" />
		<input type="hidden" id="roleLength" value="<%=role %>" />
		<input type="hidden" id="locationList" name="locationList" value="" />
		<input type="hidden" id="roleList" name="roleList" value="" />
		<input type="hidden" id="fileType" name="fileType" value="" />
        <fieldset class="mb0">
        <legend>导入用户信息说明:</legend>
        <ol>
        	<li style="background:none">
                <div class="pt5"><span class="tableHeader">
                1、请选择需要上传的文件<br>2、文件必须严格按照顺序填写<br>3、文件中登录名、真实姓名、职位、邮件、部门ID以及员工卡号为必填项，并且员工卡号不能重复
                <br>4、用户初始化密码为<%=password %>，请及时修改
</span>           
              </div>
             
				<div height="50" class=" pb0 pt10"><input class="bgw" type="file" name="file"></div>
                 <div>     
                 </div>
            </li>
        </ol>
        </fieldset>
        </form>
        </div> 
         <div class="toolbar">
       	<a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>保存</span></span></a> 
        <a href="${pageContext.request.contextPath}/bms/adm/bmsuser/queryBmsUser.do" class="sexybutton"><span><span>返回</span></span></a>
        </div>
        <!--searchForm 开始-->
        <div id="searchForm">
        
        </div>
        
        <!--searchForm 结束-->

    </div>
    <!--主体 结束-->
</div>
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>

