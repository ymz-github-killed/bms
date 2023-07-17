<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
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
<script type="text/javascript" src="${pageContext.request.contextPath}/js/passwordRule.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/strCheck.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
<!--
	function beforeSubmit()
	{	
		var str= new Array(new Array(),new Array());
		str[0]=['userLoginName_','登录名',50,1,1,1,1];
		str[1]=['userLoginPassword_','登录密码',50,1,0,1,1];
		str[2]=['userPassque_','安全密码问题',100];
		str[3]=['userPassans_','安全密码答案',100];
		str[4]=['userStation_','职位',50,1,1];
		str[5]=['applyid_','员工工号',32];
		str[6]=['userDesc_','备注',200];
		str[7]=['userRealName_','真实姓名',20,1];
		str[8]=['userMobile_','手机',50];
		str[9]=['userPhone_','电话',50];
		str[10]=['userEmail_','电子邮件',100,1];
		str[11]=['userFax_','传真',50];
		str[12]=['userPosition_','住址',200];
		str[13]=['locationName_','所属部门',0,1];
		var bool=checkStr(str);
		if(!bool){
			return false;
		}
		//密码验证
		if(!loginPwd("userLoginName_","userLoginPassword_")){
			return false;
		}
		var userEmail=document.getElementById("userEmail_");
		var userMobile=document.getElementById("userMobile_");
		var userPhone=document.getElementById("userPhone_");
		var userFax=document.getElementById("userFax_");
		
		//if(userEmail.value!=''&&!/^\w+@\*+\.\w+$/g.test(userEmail.value)){
		if(userEmail.value!=''&&!/^[a-zA-Z0-9_+.-]+\@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/g.test(userEmail.value)){
			alert("邮箱地址格式不合法");
			return false;
		}
		
		if(userMobile.value!=''&&!/^1\d{10}$/g.test(userMobile.value)){
			alert("手机号码格式不合法");
			return false;
		}
		
		if(userPhone.value!=''&&!/^(\d{2,5}\-){0,2}\d{7,10}$/g.test(userPhone.value)){
			alert("电话号码格式不合法 例 010-62986876 ");
			return false;
		}
		
		if(userFax.value!=''&&!/^(\d{2,5}\-){0,2}\d{7,10}$/g.test(userFax.value)){
			alert("传真格式不合法，例 010-82783603 ");
			return false;
		}
		
		if(document.getElementById("applyid_").value != "")
		{
			var applyid=document.getElementById("applyid_").value;
			var userapplyname=document.getElementById("userapplyname").value;
			var oldapplyid=document.getElementById("oldapplyid").value;
			if(applyid!=oldapplyid){
				$.ajax({
   					type: "POST",
   					url: "${pageContext.request.contextPath}/bms/adm/bmsuser/findApplyId.do",
   					dataType:"html",
   					data: "applyid="+applyid,
   					success: function(msg){
	     				if(msg=='no'){
     						alert(userapplyname+"已存在！");
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
	
	function selDept()
	{
		showSelDiv("deptDiv",false)
	}
	
	function selLocation()
	{
		showSelDiv("locationDiv",false)
	}
	
	function selVisitLocation()
	{
		showSelDiv("visitLocationDiv",false)
	}
	
	function showSelDiv(n,showMain)
	{
		document.getElementById("mainDiv").style.display = showMain?"block":"none";
		document.getElementById(n).style.display = showMain?"none":"block";
	}
	
	function selLocationSuc(id,name)
	{
		document.getElementById("locationName_").value = name;
		document.getElementById("locationid_").value = id;
		showSelDiv('locationDiv',true);
	}
	function rbutton()
	{
	    document.getElementById("rbid_").click();
	}
//-->
</script>
</HEAD>
<body class="overfwidth">
<div id="mainDiv">
 <div class="barnavtop">您所在的位置：系统管理 > 用户管理 > 新增用户</div>
	<!--主体 开始-->
    <div id="container">
    	<div class="overf pt5 pb5">
            <a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>保存</span></span></a>
            <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>重置 </span></span></a>
            <a href="${pageContext.request.contextPath}/bms/adm/bmsuser/queryBmsUser.do" class="sexybutton"><span><span>返回</span></span></a>
         </div>
         <!-- input type="reset" value="" style=" background:url(${pageContext.request.contextPath}/images1.6/bao_di.gif); background-repeat:no-repeat; width:48px; height:24px; border:0; color:#666; vertical-align:top"/ -->
    	<!--按钮 开始-->  
        <!--按钮 结束-->  
        <!--框内内容 开始-->
          <div class="editspace">
            <form name="frmApply" class="cmxform"
							action="${pageContext.request.contextPath}/bms/adm/bmsuser/addBmsUser.do"
							target="hideframe" method="post">
				<input id="userapplyname" type="hidden" value="${userapplyname}" />
            	<input id="oldapplyid" type="hidden" value="${m.applyid}" />
              <fieldset>
                <!--ol 开始-->
                <ol>
                  <li class="listyle_4">
                  	<input name="Button5223" type="reset" id="rbid_" value="重填" style="display: none;">
                    <label class="left pt5"><em>*</em>登录名：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userLoginName_" name="userLoginName" value="${m.userLoginName}" class="bgw" name="input">
                    </span></h1>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>登录密码：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="password" id="userLoginPassword_" name="userLoginPassword" value="${m.userLoginPassword}" class="bgw" name="input">
                    <em>密码长度6~16位，首字符为英文，必须包含数字。</em></span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5">安全密码问题：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userPassque_" name="userPassque" value="${m.userPassque}" class="bgw" name="input">
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5">安全密码答案：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userPassans_" name="userPassans" value="${m.userPassans}" class="bgw" name="input">
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>状态：</label>
                    <span class="cmxformspan">
                    	<domain:radioDomain domain="dataIsused" name="userStatus"
									uid="userStatus_" value="1" />
                      <!--  input type="radio" name="userStatus" uid="userStatus_" value="1">
                      正常
                      <input type="radio" name="userStatus" uid="userStatus_" value="0" -->
                       </span> </li>
                </ol>
                <!--ol 结束-->
                <!--ol 开始-->
                <ol>
                   <li class="listyle_4">
                    <label class="mt5 left"><em>*</em>所属部门：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="locationName_" class="bgw" disabled="disabled" readonly="readonly"
									value="${m.tbTBmsLocationDTO.name}" />
					  <input id="locationid_" type="hidden" name="locationid"
									value="${m.tbTBmsLocationDTO.id}" />
                    <a href="javascript:selLocation();"><img align="absmiddle" class="hand" src="${pageContext.request.contextPath}/images1.6/2j13.gif" /></a>
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="mt5 left"><em>*</em>职位：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userStation_" class="bgw" name="userStation" value="${m.userStation}" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="mt5 left">${userapplyname}：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="applyid_" class="bgw" name="applyid" value="${m.applyid}" />
                    </span></h1>
                  </li>
                   <li class="listyle_4 bordernone" style="background:none;">
                    <label class="left pt5">备注：</label>
                    <textarea id="userDesc_" name="userDesc" cols="80" rows="3">${m.userDesc}</textarea>
                  </li>
                 </ol>
                 </fieldset>
                 <fieldset>
                  <legend>用户基本资料</legend>
                  <ol>
                  <li class="listyle_4">
                    <label class="mt5 left"><em>*</em>真实姓名：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userRealName_" class="bgw" name="userRealName"
									value="${m.userRealName}" />
                    </span></h1>
                  </li>
                </ol>
                <!--ol 结束-->
                <!--ol 开始-->
                
                <ol>
                  <li class="listyle_4 bordernone">
                    <label class="left pt5">性别：</label>
                    <span class="cmxformspan">
                      <!-- input type="radio" name="radio1" value="1">
                      男
                      <input type="radio" name="radio1" value="0">
                      女 -->
                      <domain:radioDomain domain="SEX" name="userSex" uid="userSex_"
									value="1" />
                      </span> </li>
                  <li class="listyle_4  bordernone">
                    <label class="left pt5">手机：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userMobile_" class="bgw" name="userMobile" value="${m.userMobile}" />
                    </span></h1>
                  </li>
                  <li class="listyle_4 bordernone">
                    <label class="left pt5">电话：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userPhone_" class="bgw" name="userPhone" value="${m.userPhone}" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="mt5 left bordernone"><em>*</em>电子邮件：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userEmail_" class="bgw" name="userEmail" value="${m.userEmail}" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="mt5 left bordernone">传真：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userFax_" class="bgw" name="userFax" value="${m.userFax}" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="mt5 left bordernone">住址：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userPosition_" class="wid350" name="userPosition" value="${m.userPosition}" />
                    </span></h1>
                  </li>
                  
                </ol>
                <!--ol 结束-->
                <!--ol 开始-->
              </fieldset>
            </form>
          </div>

        <!--框内内容 结束-->
            <!--按钮 开始-->  
            <div class="toolbar">
            <a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>保存</span></span></a>
            <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>重置 </span></span></a>
            <a href="${pageContext.request.contextPath}/bms/adm/bmsuser/queryBmsUser.do" class="sexybutton" ><span><span>返回</span></span></a>
      </div>
            <!--按钮 结束-->  
  </div>
    	<!--主体 结束-->
</div>
	<div id="deptDiv" style="display: none; text-align: center;">
		<iframe src="${pageContext.request.contextPath}/bms/adm/bmscommon/selDept.do" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
	</div>
	<div id="locationDiv" style="display: none; text-align: center;">
		<iframe src="${pageContext.request.contextPath}/bms/adm/bmscommon/selLocation.do" width="100%" height="100%" frameborder="0" scrolling="yes"></iframe>
	</div>
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>