var superman;
var useValidCode;
var usePhoneValidate;
jQuery(function(){
	jQuery("#userLoginName").focus();
	if(jsonData.message!=null){
		showMessage(jsonData.message);
		//jQuery("#goUrl").unbind("click").bind("click",function(){removeDisable();});
		//jQuery("#closeUrl").unbind("click").bind("click",function(){removeDisable();});
	}
	/**是否启用手机验证码功能*/
	usePhoneValidate  = jsonData.usePhoneValidate;
	/**是否启用图形验证码功能*/
	useValidCode = jsonData.useValidCode;
	superman = jsonData.superMan;
	jQuery('#getCheckcode').hide();
	jQuery("#phone").hide();
	jQuery(".beforeReset").hide();
	if(usePhoneValidate === "true"){
		   jQuery("#phoneValidate").removeClass();
		   jQuery('#getCheckcode').show();
		   jQuery("#phone").show();
	}
	if(useValidCode == "false"){
		jQuery("#useValidCode").hide();
	}
	jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg");
	
	jQuery(".btn_href").each(function(){
		this.href = "###";
	});
	jQuery("#validCodeImg").bind("click",function(){
		var s=Math.random();this.src=basePath+'common/sinoaptcha1.jpg?1='+s;
	});
	jQuery("#get_").bind("click",function(){getPhoneValidate()});
	jQuery("#getReset_").bind("click",function(){getResetPhoneValidate()});
	jQuery("#submit").bind("click",function(){beforeSubmit()});
	jQuery("#btn_submit").removeAttr("onclick").bind("click",function(){beforeSubmit();return false;});
	jQuery("#resetBtn").bind("click",function(){resetText()});
	//替换图片路径
	jQuery("#loginBg").attr("src",basePath+"theme/zsk/images/login_bg.jpg");
	//
	jQuery("#phoneVerification").bind("click",function(){PhoneValidate()});
	jQuery("#beforePhoneVerification").bind("click",function(){beforePhoneVerification()});
	jQuery("#cancel").bind("click",function(){cancel()});
	
	jQuery("#spanloginbms").bind("click",function(){logintabbms()});
	jQuery("#spanlogin4a").bind("click",function(){logintab4a()});
	
	  
});
document.onkeydown = function(e){ 
	 var ev = document.all ? window.event : e;
	 if(ev.keyCode==13) {
		 jQuery("#submit").click();
		}
	}
/**获取手机验证码*/
var countdown;
function getPhoneValidate(){
	var userLoginName=jQuery('#userLoginName').val();
	
	/*if(userLoginName == superman){
		return false;
	}*/
	if(userLoginName == "")
	{
		showMessage("请输入账号！");
		return false;
	}
	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的账号！");
		return false;
	}
	if(userLoginName.indexOf("http://")>0 ||userLoginName.indexOf("https://")>0 || userLoginName.indexOf("html")>0 || userLoginName.indexOf(".")>0){
		showMessage("账号不正确，请重新输入！");
		return false;
	}
	jQuery.ajax({
		type:"POST",
		url:basePath+"phone/getValiNum.controller",
		dataType:"json",
		data:"userLoginName="+userLoginName,
		success:function(result){
			if(result.timeSpace != null && result.timeSpace != ""){
				var rel = eval("("+result.backMsg+")");
				showMessage(rel.message);
				count = result.timeSpace;
				countdown = setInterval("CountDown()",1000);
			}else{
				showMessage(result.message);
				if(result.messageCode === "C510"){
					//开启倒计时功能能
					count = jsonData.countdown;
					countdown = setInterval("CountDown()",1000);
				}
			}
			jQuery("#phoneValidateNum").val("");
		}
	}); 
}

function CountDown(){
	jQuery("#get_").unbind("click").bind("click",function(){return false;});
	jQuery("#get_").css({"color":"#ccc","cursor":"default"});
	jQuery("#get_").text(count+"s后重新获取");
	if(count <= 0){
		clearInterval(countdown); 
		jQuery("#get_").text("重新获取");
		jQuery("#get_").unbind("click").bind("click",function(){getPhoneValidate()});
		jQuery("#get_").css({"color":"#3399ff","cursor":"pointer"});
		return false;
	}
	count--;
}

var resetCountdown

function getResetPhoneValidate(){
	var userLoginName=jQuery('#userLoginName').val();
	var userPhoneNumber=jQuery('#userPhoneNumber').val();
	/*if(userLoginName == superman){
		 return false;
	}*/
	if(userLoginName == "")
	{
		showMessage("请输入账号！");
		return false;
	}
	
	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的账号！");
		return false;
	}
	if(userPhoneNumber == "")
	{
		showMessage("请输入手机号码！");
		return false;
	}
	var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;  
    if (!myreg.test(userPhoneNumber)) {  
    	showMessage("请输入正确的手机号码！");
		return false;  
    }
	if(userLoginName.indexOf("http://")>0 ||userLoginName.indexOf("https://")>0 || userLoginName.indexOf("html")>0 || userLoginName.indexOf(".")>0){
		showMessage("账号不正确，请重新输入！");
		return false;
	}
	jQuery.ajax({
		type:"POST",
		url:basePath+"phone/getResetValiNum.controller",
		dataType:"json",
		data:"userLoginName="+userLoginName+"&userPhoneNumber="+userPhoneNumber,
		success:function(result){
			console.log(result);
			if(result.timeSpace != null && result.timeSpace != ""){
				var rel = eval("("+result.backMsg+")");
				showMessage(rel.message);
				count = result.timeSpace;
				resetCountdown = setInterval("ResetCountDown()",1000);
			}else{
				showMessage(result.message);
				if(result.messageCode === "C510"){
					//开启倒计时功能能
					count = jsonData.countdown;
					resetCountdown = setInterval("ResetCountDown()",1000);
				}
			}
			jQuery("#phoneValidateNum").val("");
		}
	}); 
}

function ResetCountDown(){
	jQuery("#getReset_").unbind("click").bind("click",function(){return false;});
	jQuery("#getReset_").css({"color":"#ccc","cursor":"default"});
	jQuery("#getReset_").text(count+"s后重新获取");
	if(count <= 0){
		clearInterval(resetCountdown); 
		jQuery("#getReset_").text("重新获取");
		jQuery("#getReset_").unbind("click").bind("click",function(){getResetPhoneValidate()});
		jQuery("#getReset_").css({"color":"#3399ff","cursor":"pointer"});
		return false;
	}
	count--;
}
/**登录事件*/
function beforeSubmit(){
	setDisable();
	var userLoginName=jQuery("#userLoginName").val();
	/*if(userLoginName == superman){
		usePhoneValidate = "false";
	}*/
	if(userLoginName == "")
	{
		showMessage("请输入账号！");
		removeDisable();
		return false;
	}

	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的账号！");
		removeDisable();
		return false;
	}
	if(userLoginName.indexOf("http://")>0 ||userLoginName.indexOf("https://")>0 || userLoginName.indexOf("html")>0 || userLoginName.indexOf(".")>0){
		showMessage("账号不正确，请重新输入！");
		removeDisable();
		return false;
	}
	if(jQuery("#userLoginPassword").val() == "")
	{
		showMessage("请输入密码！");
		removeDisable();
		return false;
	}
	if((jQuery("#phoneValidateNum").val() == "")&&(usePhoneValidate == "true"))
	{
		showMessage("请输入手机验证码！");
		removeDisable();
		return false;
	}
	if((jQuery("#validCode").val() == "")&&(useValidCode == "true"))
	{
		showMessage("请输入图形验证码！");
		removeDisable();
		return false;
	}
	
	
	var password = jQuery("#userLoginPassword").val();
	var userLoginName = jQuery("#userLoginName").val();
	jQuery("#userLoginPassword").val(enString(password));
	jQuery("#userLoginName").val(enString(userLoginName));
	jQuery.ajax({
		type:"post",
		cache:"false",
		url:basePath+"login/logon.controller",
		dataType:"json",
		data:jQuery("#loginForm").serializeArray(),
		success:function(result){
			removeDisable();
			/**通过登录校验*/
    		if(result.message=== "success" ){
    			jQuery.ajax({
    				type:"post",
    				cache:"false",
    				url:basePath+"login/main.controller",
    				dataType:"json",
    				success:function(result){
    					/**通过初始化操作*/
    		    		if(result.message === "success"){
    		    			/**进入首页*/
    		    			window.location.href=basePath+"login/index.controller";
    		    		}else{
    		    			jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg?1="+Math.random()+"s");
    		    			jQuery("#userLoginPassword").val(password);
    		    			jQuery("#userLoginName").val(userLoginName);
    		    			showMessage(result.message);
    		    		}
    		        }
    			});
    		}else{
    			if(result.messageCode == 'C517'){
    				jQuery("#validCode").val("");
    			}
    				jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg?1="+Math.random()+"s");
    				jQuery("#userLoginPassword").val(password);
    				jQuery("#userLoginName").val(userLoginName);
    				showMessage(result.message);
    		}
			
        }
			
	});
}

/**
 * 重置事件
 */
function resetText(){
	document.getElementById("loginForm").reset();
	//重置倒计时，释放按钮
	window.clearInterval(countdown); 
	jQuery("#get_").text("获取短信验证码");
	jQuery("#get_").unbind("click").bind("click",function(){getPhoneValidate()});
	jQuery("#get_").css({"color":"#fff","cursor":"pointer"});
	//重新请求图像验证码
	jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg?1="+Math.random()+"s");
}
function showMessage(text){
	document.onkeydown = function(e){ 
		 var ev = document.all ? window.event : e;
		 if(ev.keyCode==13) {
			 //hide("cover","bccg");
			 document.onkeydown = function(e){ 
				 var ev = document.all ? window.event : e;
				 if(ev.keyCode==13) {
					 jQuery("#submit").click();
				}
			}
		}
	}
	jQuery("#message").text(text);
	show("cover","bccg");
	jQuery("#goUrl").unbind("click").bind("click",function(){removeDisable();});
	jQuery("#closeUrl").unbind("click").bind("click",function(){removeDisable();});
}

function bindonkeydown(){
	
	document.onkeydown = function(e){ 
		 var ev = document.all ? window.event : e;
		 if(ev.keyCode==13) {
			jQuery("#submit").click();
		}
	}
}

function setDisable(){
	jQuery("#submit").attr("disabled",true);
	//jQuery("#userLoginPassword").attr("disabled",true);
	//jQuery("#validCode").attr("disabled",true);
	//jQuery("#phoneValidateNum").attr("disabled",true);
}

function removeDisable(){
	jQuery("#submit").attr("disabled",false);
	jQuery("#userLoginPassword").attr("disabled",false);
	jQuery("#validCode").attr("disabled",false);
	jQuery("#phoneValidateNum").attr("disabled",false);
}
//重置密码点击
function beforePhoneVerification(){
	jQuery("#validCodeImg").click();
	jQuery("#validCode").val("");
	jQuery("#resetphoneValidateNum").val("");
	jQuery("#userPhoneNumber").val("");
	jQuery(".beforeReset").show();
	jQuery(".tologin").hide();
}

function cancel(){
	jQuery("#validCodeImg").click();
	jQuery("#validCode").val("");
	jQuery("#resetphoneValidateNum").val("");
	jQuery("#userPhoneNumber").val("");
	jQuery(".beforeReset").hide();
	jQuery(".tologin").show();
}




function logintabbms(){
document.getElementById("spanloginbms").setAttribute("style","margin-left: 32px; display: none;");
document.getElementById("spanlogin4a").setAttribute("style","display: inline-block;     margin-top: 70px;margin-left: 8px;");
document.getElementById("ttloginbms").setAttribute("style","position: absolute; top: 121px; font-size: 15px;margin-left: 7px ;font-weight: bold;color: #0080cc");
document.getElementById("ttlogin4a").setAttribute("style","display: none;");
document.getElementById("divloginbms").setAttribute("style","height: 231px; margin-top: -30px; display: inline-block;");
document.getElementById("divlogin4a").setAttribute("style"," display: none;");
}

function logintab4a(){
document.getElementById("spanloginbms").setAttribute("style","display: inline-block;     margin-top: 70px;margin-left: 8px;");
document.getElementById("spanlogin4a").setAttribute("style","margin-left: 32px; display: none;");
document.getElementById("ttloginbms").setAttribute("style","display: none;");
document.getElementById("ttlogin4a").setAttribute("style","position: absolute; top: 121px; font-size: 15px;margin-left: 7px ;font-weight: bold;color: #0080cc");
document.getElementById("divloginbms").setAttribute("style"," display: none;");
document.getElementById("divlogin4a").setAttribute("style","   height: 201px;margin-top: 31px;display: block;margin-left: -23px");

}








function  PhoneValidate(){
	var userLoginName=jQuery('#userLoginName').val();
	var userPhoneNumber=jQuery('#userPhoneNumber').val();
	var phoneValidateNum=jQuery('#resetphoneValidateNum').val();
	if(userLoginName == "")
	{
		showMessage("请输入账号！");
		return false;
	}
	if(userPhoneNumber == "")
	{
		showMessage("请输入手机号码！");
		return false;
	}
	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的账号！");
		return false;
	}
	var myreg=/^[1][3,4,5,6,7,8][0-9]{9}$/;  
    if (!myreg.test(userPhoneNumber)) {  
    	showMessage("请输入正确的手机号码！");
		return false;  
    }
    if((jQuery("#resetphoneValidateNum").val() == ""))
	{
		showMessage("请输入手机验证码！");
		removeDisable();
		return false;
	}
	if(userLoginName.indexOf("http://")>0 ||userLoginName.indexOf("https://")>0 || userLoginName.indexOf("html")>0 || userLoginName.indexOf(".")>0){
		showMessage("账号不正确，请重新输入！");
		return false;
	}
	var data ;
	if(useValidCode == "false"){
		data = "userLoginName="+userLoginName+"&userPhoneNumber="+userPhoneNumber+"&phoneValidateNum="+phoneValidateNum;
	}else{
		var validCode=jQuery('#validCode').val();
		if(validCode==""){
			showMessage("请输入验证码！");
			return false;
		}else{
			data = "userLoginName="+userLoginName+"&validCode="+validCode+"&userPhoneNumber="+userPhoneNumber
					+"&phoneValidateNum="+phoneValidateNum;
		}
	}
	jQuery.ajax({
		type:"POST",
		cache:"false",
		url:basePath+"phone/createPhoneValidateCode.controller",
		dataType:"json",
		data:data,
		success:function(result){
			if(result!= null && result!= ""){
				if(result.messageCode=="C546"){
					showMessage(result.message);
					jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg?" + Math.random());
					jQuery("#validCodeImg").click();
					jQuery("#validCode").val("");
					jQuery("#phoneValidateNum").val("");
					jQuery("#userPhoneNumber").val("");
					jQuery("#phoneValidate").hide();
					jQuery(".beforeReset").hide();
					jQuery(".tologin").show();
				}else{
					jQuery("#validCodeImg").click();
					showMessage(result.message);
				}
			}else{
				showMessage("密码重置错误!");
				jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg");
			}
		},error:function(){
	          	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
	        }
	}); 	
}
