<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/strCheck.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
	function beforeSubmit()
	{
		var str= new Array(new Array(),new Array());
		str[0]=['name_','部门名称',60,1,1];
		str[1]=['applyid_','部门外部ID',32];
		str[2]=['remark_','部门描述',1000];
		var bool=checkStr(str);
		if(!bool){
			return false;
		}
		if(document.getElementById("applyid_").value != "")
		{
			var applyid=document.getElementById("applyid_").value;
			var locationname=document.getElementById("locationname").value;
			var oldapplyid=document.getElementById("oldapplyid").value;
			if(applyid!=oldapplyid){
				$.ajax({
   					type: "POST",
   					url: "${pageContext.request.contextPath}/bms/adm/bmslocation/findApplyId.do",
   					dataType:"html",
   					data: "applyid="+applyid,
   					success: function(msg){
	     				if(msg=='no'){
     						alert(locationname+"已存在！");
     						return false;
     					}else{
     						document.frmApply.submit();
     					}
   					}
				});
			}else{
				document.frmApply.submit();
			}
		}else{
			document.frmApply.submit();
		}
	}		
	function rbutton()
	{
	    document.getElementById("rbid_").click();
	}
</script>
<body class="overfwidth">
<div class="left">
</div><div class="barnavtop">您所在的位置：系统管理 > 部门管理 > 编辑部门信息</div>

<div class="workspace1 left" style="padding-left:20px;">
 <div class="toolbar">
       	<a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>保存</span></span></a> 
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>重置 </span></span></a>
        <a href="${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=${m.id }" class="sexybutton"><span><span>返回</span></span></a>        
        </div>
<div class="editspace">
            <form name="frmApply" class="cmxform" action="${pageContext.request.contextPath}/bms/adm/bmslocation/editBmsLocations.do" 
            		target="hideframe" method="post">
            	<input id="locationname" type="hidden" value="${locationname}" />
            	<input id="oldapplyid" type="hidden" value="${m.applyid}" />
              <fieldset>
                <!--ol 开始-->
                <ol>
                  <li class="listyle_4">
                    <input name="Button5223" type="reset" id="rbid_" value="重填" style="display: none;">
                    <label class="left pt5"><em>*</em>部门名称：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" class="bgw" name="name" id="name_" value="${m.name }" />
                    </span></h1>    </li>           
                 <li class="listyle_4 bordernone">
                    <label class="left pt5">部门描述：</label>
                    <textarea name="remark" id="remark_" cols="80" rows="3">${m.remark}</textarea>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5">${locationname}：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" class="bgw" name="applyid" id="applyid_" value="${m.applyid }" />
                    </span></h1>    </li>
                </ol>
                <!--ol 结束-->               
              </fieldset>
            </form>
          </div>
              <div class="toolbar">
       	<a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>保存</span></span></a> 
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>重置 </span></span></a>
        <a href="${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=${m.id }" class="sexybutton"><span><span>返回</span></span></a>        
        </div>
        <!--框内内容 开始-->
        <!--框内内容 结束-->
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>

