var superman;
var useValidCode;
var usePhoneValidate;
jQuery(function(){
	jQuery("#userLoginName").focus();
	if(jsonData.message!=null){
		showMessage(jsonData.message);
		jQuery("#goUrl").unbind("click").bind("click",function(){removeDisable();});
		jQuery("#closeUrl").unbind("click").bind("click",function(){removeDisable();});
	}
	/**是否启用手机验证码功能*/
	usePhoneValidate  = jsonData.usePhoneValidate;
	/**是否启用图形验证码功能*/
	useValidCode = jsonData.useValidCode;
	superman = jsonData.superMan;
	jQuery('#getCheckcode').hide();
	jQuery("#phone").hide();
	if(usePhoneValidate === "true"){
		   jQuery("#phoneValidate").removeClass();
		   jQuery('#getCheckcode').show();
		   jQuery("#phone").show();
	}
	if(useValidCode == "false"){
		jQuery("#useValidCode").addClass("undis");
	}
	jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg");
	
	jQuery(".btn_href").each(function(){
		this.href = "###";
	});
	jQuery("#validCodeImg").bind("click",function(){
		var s=Math.random();this.src=basePath+'common/sinoaptcha1.jpg?1='+s;
	});
	jQuery("#get_").bind("click",function(){getPhoneValidate()});
	jQuery("#submit").bind("click",function(){beforeSubmit()});
	jQuery("#btn_submit").removeAttr("onclick").bind("click",function(){beforeSubmit();return false;});
	jQuery("#reset").bind("click",function(){resetText()});
	//替换图片路径
	jQuery("#loginBg").attr("src",basePath+"theme/zsk/images/login_bg.jpg");
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
		showMessage("请输入登录账号！");
		return false;
	}
	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的登录账号！");
		return false;
	}
	if(userLoginName.toLowerCase().split("http：//")>1 || userLoginName.toLowerCase().split("https://")>1 || userLoginName.toLowerCase().split("html")>1||userLoginName.toLowerCase().split(".")>1){
		showMessage("登录账号不正确，请重新输入！");
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
/**登录事件*/
function beforeSubmit(){
	var userLoginName=jQuery("#userLoginName").val();
	if(userLoginName == superman){
		usePhoneValidate = "false";
	}
	if(userLoginName == "")
	{
		showMessage("请输入登录账号！");
		return false;
	}

	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的登录账号！");
		return false;
	}
	if(userLoginName.indexOf("http://")>0 ||userLoginName.indexOf("https://")>0 || userLoginName.indexOf("html")>0 || userLoginName.indexOf(".")>0){
		showMessage("登录账号不正确，请重新输入！");
		return false;
	}
	if(jQuery("#userLoginPassword").val() == "")
	{
		showMessage("请输入密码！");
		return false;
	}
	if((jQuery("#phoneValidateNum").val() == "")&&(usePhoneValidate == "true"))
	{
		showMessage("请输入手机验证码！");
		return false;
	}
	
	if((jQuery("#validCode").val() == "")&&(useValidCode == "true"))
	{
		showMessage("请输入图形验证码！");
		return false;
	}

	jQuery("#userLoginPassword").val(enString(jQuery("#userLoginPassword").val()));
	jQuery("#userLoginName").val(enString(jQuery("#userLoginName").val()));

	jQuery.ajax({
		type:"post",
		cache:"false",
		url:basePath+"login/logon.controller",
		dataType:"json",
		data:jQuery("#loginForm").serializeArray(),
		success:function(result){
			
			jQuery("#userLoginPassword").val("");
			jQuery("#userLoginName").val("");
			/**通过登录校验*/
    		if(result.message=== "success"){
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
    		    			showMessage(result.message);
    		    		}
    		        }
    			});
    		}else{
    				jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg?1="+Math.random()+"s");
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
	setDisable();
	document.onkeydown = function(e){ 
		 var ev = document.all ? window.event : e;
		 if(ev.keyCode==13) {
			 hide("cover","bccg");
			 removeDisable();
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
	jQuery("#userLoginName").attr("disabled",true);
	jQuery("#userLoginPassword").attr("disabled",true);
	jQuery("#validCode").attr("disabled",true);
	jQuery("#phoneValidateNum").attr("disabled",true);
}

function removeDisable(){
	jQuery("#userLoginName")[0].disabled = false;
	jQuery("#userLoginPassword")[0].disabled = false;
	jQuery("#validCode")[0].disabled = false;
	jQuery("#phoneValidateNum")[0].disabled = false;
}
//获取验证码倒计时


