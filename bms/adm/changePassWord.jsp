
<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
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
<script src="${pageContext.request.contextPath}/js1.6/jQuery/jquery.js"></script>
<script src="${pageContext.request.contextPath}/js/prototype-1.7.js"></script>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/passwordRule.js"></script>

<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
/**
 * 	jQuery(function(){
	 	showCont();
	 	jQuery("input[name=get]").click(function(){
	  showCont();
	 });
	});
	function showCont(){
	 switch(jQuery("input[name=get]:checked").attr("id")){
	  case "pwd":
	   jQuery("#changePhoneNum").hide();
	   jQuery("#changepassword").show();
	   break;
	  case "pv":
		  jQuery("#changepassword").hide();
		  jQuery("#changePhoneNum").show();
	   break;
	  default:
	   break;
	 }
	}
 */
	 jQuery(function(){
		 jQuery("#changePhoneNum").hide();
		 jQuery("#changepassword").show();
		 var UseMessageValidate = jQuery("#pyzm_check").val()
		   if(UseMessageValidate == "false"){
			   jQuery("#phonenumchange").hide();
		   }
		   
	 });
	function showchgpwd() { 
		jQuery("#changePhoneNum").hide();
	 	jQuery("#changepassword").show(); 
	 }
	function showp() { 
		jQuery("#changepassword").hide();
		jQuery("#changePhoneNum").show(); 
	}
 
	var countdown;
 function getPhoneValidate(){
	
	var oldPhoneNum=$F('oldPhoneNum');
	var newPhoneNum=$F('newPhoneNum');
	var count = $F('pyzm_countdown');
	var url = '${pageContext.request.contextPath}/phonevalidate/getPhoneValidte.do?newPhoneNum='+newPhoneNum+'&oldPhoneNum='+oldPhoneNum;
//	var pars = 'newPhoneNum='+newPhoneNum,'oldPhoneNum='+oldPhoneNum;
	if(oldPhoneNum == "")
	{
		alert("请输入原手机号！");
		jQuery("#oldPhoneNum").focus();
		return false;
	}
	if(newPhoneNum == "")
	{
		alert("请输入新手机号！");
		jQuery("#newPhoneNum").focus();
		return false;
	}
	var patrn=/^\d{11}$/;
	if(!patrn.test(oldPhoneNum)||!patrn.test(newPhoneNum)){
		alert("请输入正确的手机号码！");
		jQuery("#oldPhoneNum").val("");
		jQuery("#newPhoneNum").val("");
		jQuery("#oldPhoneNum").focus();
		return false;
	}
	if(oldPhoneNum == newPhoneNum){
		alert("新手机号不可以与原手机号相同！");
		jQuery("#newPhoneNum").val("");
		jQuery("#newPhoneNum").focus();
		return false;
	}
	 
 /*  $.ajax({  
    	type:"post",
    	//contentType:"application/json",
    	cache:"false",
        url:"${pageContext.request.contextPath}/phonevalidate/ajaxPhoneValidte.do",
        dataType:"text",
        data:"userName="+userName,
        success:function(result){ 
        	alert(decodeURI(result));
        	$("#phoneValidate_").focus();
        }
    }); 
 */
	var myAjax =  new Ajax.Request(
			url,
			{
				 method:'post',
				 onSuccess:sucessFunc
				 } 
			);
 
  //开启倒计时功能能
	countdown = window.setInterval(CountDown,1000);
    function CountDown(){
    	jQuery("#get_").attr("disabled",true);
    	jQuery("#get_").val(count+"s后再获取");
		if(count == 0){
			clearInterval(countdown); 
			jQuery("#get_").val("获取验证码").removeAttr("disabled");
			jQuery("#get_").css('cursor','pointer');
			jQuery("#get_").css('color','#000000');
		}
		count--;
	}
    //function b(){
    	//window.clearInterval(intervalId);
    //}
    //return b;

}
 
function sucessFunc(originalRequest){
		var msg = decodeURI(originalRequest.responseText);
		var index  = msg.lastIndexOf("！");
		var tab = msg.substring(index+1);
		var msg = msg.substring(0,index+1);
		 alert(msg);
		 if(tab == "error"){
			 resetText(); 
			 jQuery("#oldPhoneNum").focus();
			 return false;
		 }
		 jQuery("#get_").css('cursor','default');
		 jQuery("#get_").css('color','#c0c0c0');
		 jQuery("#phoneValidate_").val("");
		 jQuery("#phoneValidate_").focus();
	}
	
function beforeSubmit()
	{
		//密码验证
		if(!loginPwd("oldPass","newPass1",1)){
			return false;
		}
		if(document.getElementById("oldPass").value == "")
		{
			alert("请输入旧密码");
			return false;
		}

		if(document.getElementById("newPass1").value == "")
		{
			alert("请输入新密码");
			return false;
		}
		
		if(document.getElementById("newPass2").value != document.getElementById("newPass1").value)
		{
			alert("两次新密码输入不匹配");
			return false;
		}
		document.frmApply.submit();
	}
function beforeChangePhoneNumSubmit()
{
	var oldPhoneNum=$F('oldPhoneNum');
	var newPhoneNum=$F('newPhoneNum');
	if(oldPhoneNum == "")
	{
		alert("请输入原手机号！");
		jQuery("#oldPhoneNum").focus();
		return false;
	}
	if(newPhoneNum == "")
	{
		alert("请输入新手机号！");
		jQuery("#newPhoneNum").focus();
		return false;
	}
	var patrn=/^\d{11}$/;
	if(!patrn.test(oldPhoneNum)||!patrn.test(newPhoneNum)){
		alert("请输入正确的手机号码！");
		jQuery("#oldPhoneNum").val("");
		jQuery("#newPhoneNum").val("");
		jQuery("#oldPhoneNum").focus();
		return false;
	}
	if(oldPhoneNum == newPhoneNum){
		alert("新手机号不可以与原手机号相同！");
		jQuery("#newPhoneNum").val("");
		jQuery("#newPhoneNum").focus();
		return false;
	}
	document.chgPhoneNumForm.submit();
}
	function resetText(){
		document.getElementById("oldPass").value="";
		document.getElementById("newPass1").value="";
		document.getElementById("newPass2").value="";
		document.getElementById("oldPhoneNum").value="";
		document.getElementById("newPhoneNum").value="";
		document.getElementById("phoneValidate_").value="";
		//重置倒计时，释放按钮
		window.clearInterval(countdown);
		jQuery("#get_").val("获取验证码").removeAttr("disabled");
		jQuery("#get_").css('cursor','pointer');
		jQuery("#get_").css('color','#000000');
	}

	</script>
	
	<%
	String countdown = GlobalConfig.getProperty("bmssecurity", "countdown");
	String UseMessageValidate = GlobalConfig.getProperty("bmssecurity", "MessageValidate");
	%>
</HEAD>
<body class="overfwidth">
<%--<div>

更改密码<input type="radio" id="pwd" name="get" checked="checked">
更改手机号<input type="radio" id="pv" name="get">

</div>--%>
<div id="phonenumchange" class="toolbar" style="text-align:center; "><a href="#" class="sexybutton" onclick="showchgpwd();"><span><span>更改密码</span></span></a>
<a href="#"  class="sexybutton" onclick="showp();"><span><span>更改手机号</span></span></a>
</div>
<div id="changepassword">
	<div class="barnavtop">您所在的位置：更改密码</div>
		<div id="workspace">
			<!--主体 开始-->
		    <div id="container">
		    	<!--按钮 开始-->  
		        <!--按钮 结束-->  
		        <!--框内内容 开始-->
		          <div class="editspace">
		            <form name="frmApply" class="cmxform"
									action="${pageContext.request.contextPath}/bms/adm/bmsuser/changePassword.do"
									target="hideframe" method="post">
		              <fieldset>
		                <!--ol 开始-->
		                <ol>
		                  <li class="listyle_4">
		                    <label class="left pt5"><em>*</em>原始密码：</label>
		                    <h1 class="cmxformh1"> <span class="cmxformspan">
		                      <input id="oldPass"  type="password" class="bgw" name="oldPass">
		                    </span></h1>
		                  <li class="listyle_4">
		                    <label class="left pt5"><em>*</em>新密码：</label>
		                    <h1 class="cmxformh1"> <span class="cmxformspan">
		                      <input id="newPass1"  type="password" class="bgw" name="newPass1">
		                    <em>密码长度6~16位，首字符为英文，必须包含数字。</em></span></h1>
		                  </li>
		                  
		                  <li class="listyle_4">
		                    <label class="left pt5"><em>*</em>请再次输入新密码：</label>
		                    <h1 class="cmxformh1"> <span class="cmxformspan">
		                      <input id="newPass2"  type="password" class="bgw" name="newPass2">
		                    </span></h1>
		                  </li>
		                </ol>
		                <!--ol 结束-->               
		              </fieldset>
		            </form>
		          </div>
		      <div class="toolbar" style="text-align:center" >
		      	 <a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>保存</span></span></a>
		         <a href="#" class="sexybutton" onclick="resetText();return false"><span><span>重置</span></span></a>
		      </div>
		        <!--框内内容 结束-->
		            <!--按钮 开始--> 
		            
		             
		
		      
		            <!--按钮 结束-->  
		            
		  
		    	<!--主体 结束-->
		</div>
	</div>
</div>
<div id="changePhoneNum">
		<div class="barnavtop">您所在的位置：更改手机号</div>
			<div id="workspace">
				<!--主体 开始-->
			    <div id="container">
			    	<!--按钮 开始-->  
			        <!--按钮 结束-->  
			        <!--框内内容 开始-->
			          <div class="editspace">
			            <form name="chgPhoneNumForm" class="cmxform"
										action="${pageContext.request.contextPath}/bms/adm/bmsuser/changePhoneNum.do"
										target="hideframe" method="post">
			              <fieldset>
			                <!--ol 开始-->
			                <ol>
			                  <li class="listyle_4">
			                    <label class="left pt5"><em>*</em>原手机号：</label>
			                    <h1 class="cmxformh1"> <span class="cmxformspan">
			                      <input id="oldPhoneNum"  type="text" class="bgw" name="oldPhoneNum" maxlength="11"  autocomplete="off"
									    onkeyup="value=value.replace(/[^\d]/g,'')" 
									    onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" >
			                    </span></h1>
			                  <li class="listyle_4">
			                    <label class="left pt5"><em>*</em>新手机号：</label>
			                    <h1 class="cmxformh1"> <span class="cmxformspan">
			                      <input id="newPhoneNum"  type="text" class="bgw" name="newPhoneNum" maxlength="11"  autocomplete="off"
									    onkeyup="value=value.replace(/[^\d]/g,'')" 
									    onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" >
								<input id="pyzm_check" name="pyzm_check" type="hidden" value=<%=UseMessageValidate%> /> 
     							<input id="pyzm_countdown" name="pyzm_countdown" type="hidden" value=<%=countdown%> /> 
			                     <input  name="get" id="get_" type="button" value="获取验证码" onclick="javascript:getPhoneValidate();"/>
			                      <input name="phoneValidate" id="phoneValidate_" maxlength="6" 
									    type="text"  autocomplete="off" value="请输入验证码"
									    onkeyup="value=value.replace(/[^\d]/g,'')" 
									    onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"  
									    onfocus="this.value=''"
									    >
			                    </span></h1>  
			                  </li>
			                </ol>
			                <!--ol 结束-->               
			              </fieldset>
			            </form>
			          </div>
			      <div class="toolbar" style="text-align:center" >
			      	 <a href="#" class="sexybutton" onclick="beforeChangePhoneNumSubmit();return false"><span><span>保存</span></span></a>
			         <a href="#" class="sexybutton" onclick="resetText();return false"><span><span>重置</span></span></a>
			      </div>
			        <!--框内内容 结束-->
			            <!--按钮 开始--> 
			            
			             
			
			      
			            <!--按钮 结束-->  
			            
			  
			    	<!--主体 结束-->
			</div>
		</div>
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
