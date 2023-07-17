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
	usePhoneValidate  = "false";
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
		jQuery("#useValidCode").hide();
	}
	jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg");
	
	jQuery(".btn_href").each(function(){
		this.href = "###";
	});
	jQuery("#validCodeImg").bind("click",function(){
		var s=Math.random();this.src=basePath+'common/sinoaptcha1.jpg?1='+s;
	});
	jQuery(".validateNum").bind("click",function(){getPhoneValidate()});
	jQuery("#submit").bind("click",function(){beforeSubmit()});
	jQuery("#btn_submit").removeAttr("onclick").bind("click",function(){beforeSubmit();return false;});
	jQuery("#reset").bind("click",function(){resetText()});
	//替换图片路径
	jQuery("#loginBg").attr("src",basePath+"theme/zsk/images/login_bg.jpg");
	//
	jQuery("#phoneVerification").bind("click",function(){PhoneValidate()});
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
	var userMobile=jQuery('#userMobile').val();
	var validCode=jQuery("#validCode").val();
	/*if(userLoginName == superman){
		return false;
	}*/
	if(userMobile == "")
	{
		showMessage("请输入手机号码！");
		return false;
	}
	if(!/^1(3|4|5|7|8)\d{9}$/g.test(userMobile)){
		showMessage("请输入正确的手机号码！");
		return false;
	}
	if((validCode == "请输入验证码")&&(useValidCode == "true")||(validCode.replace(/\s+/g,"") == "")&&(useValidCode == "true"))
	{
		showMessage("请输入图形验证码！");
		removeDisable();
		return false;
	}
	

      jQuery.ajax({
		type:"POST",
		url:basePath+"phone/getValidateNum.controller",
		dataType:"json",
		data:"phoneValidateNumBean.userMobile="+userMobile+"&validCode="+validCode,
		success:function(result){
			if(result.messageCode === "C517"){
				//重新请求图像验证码
				jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg?1="+Math.random()+"s");
				showMessage(result.message);
			}else if(result.timeSpace != null && result.timeSpace != ""){
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
	jQuery(".validateNum").unbind("click").bind("click",function(){return false;});
	jQuery(".validateNum").css({"background": "#c9c9c9","border":"#c9c9c9"});
	jQuery(".validateNum").text(count+"s");
//	.validateNum{background: #c9c9c9;color: #fff;float: right;}
	if(count <= 0){
		clearInterval(countdown); 
		jQuery(".validateNum").text("重新获取");
		jQuery(".validateNum").unbind("click").bind("click",function(){getPhoneValidate()});
		jQuery(".validateNum").css({"background": "#33a2ea","border":"#33a2ea"});
		return false;
	}
	count--;
}
/**登录事件*/
function beforeSubmit(){
	showMessage("");
	setDisable();
	var userMobile=jQuery("#userMobile").val();
	/*if(userLoginName == superman){
		usePhoneValidate = "false";
	}*/
	if(userMobile == "")
	{
		showMessage("请输入手机号码！");
		removeDisable();
		return false;
	}

	if(!/^1(3|4|5|7|8)\d{9}$/g.test(userMobile)){
		showMessage("请输入正确的手机号码！");
		removeDisable();
		return false;
	}
	
	if((jQuery("#validateNum").val() == "")||(jQuery("#validateNum").val() == "请输入短信验证码"))
	{
		showMessage("请输入短信验证码！");
		removeDisable();
		return false;
	}
	
	var validateNum = jQuery("#validateNum").val();
	jQuery("#validateNumHidden").val(enString(validateNum));
	jQuery.ajax({
		type:"post",
		cache:"false",
		url:basePath+"login/mobileLogin.controller",
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
    		    			jQuery("#validateNum").val(validateNum);
    		    			showMessage(result.message);
    		    		}
    		        }
    			});
    		}else{
    				jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg?1="+Math.random()+"s");
    				jQuery("#validateNum").val(validateNum);
    				showMessage(result.message);
    		}
			
        }
			
	});
}

/**
 * 重置事件
 */
function resetText(){
	showMessage("")
	document.getElementById("loginForm").reset();
	//重置倒计时，释放按钮
	window.clearInterval(countdown); 
	jQuery(".validateNum").text("获取验证码");
	jQuery(".validateNum").unbind("click").bind("click",function(){getPhoneValidate()});
	jQuery(".validateNum").css({"background": "#33a2ea","border":"#33a2ea"});
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
	//show("cover","bccg");
	//jQuery("#goUrl").unbind("click").bind("click",function(){removeDisable();});
	//jQuery("#closeUrl").unbind("click").bind("click",function(){removeDisable();});
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
	jQuery("#validCode").attr("disabled",false);
	jQuery(".validateNum").attr("disabled",false);
}
//获取验证码倒计时

function  PhoneValidate(){
	var userLoginName=jQuery('#userLoginName').val();
	if(userLoginName == "")
	{
		showMessage("请输入用户名！");
		return false;
	}
	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的用户名！");
		return false;
	}
	if(userLoginName.toLowerCase().split("http：//")>1 || userLoginName.toLowerCase().split("https://")>1 || userLoginName.toLowerCase().split("html")>1||userLoginName.toLowerCase().split(".")>1){
		showMessage("用户名不正确，请重新输入！");
		return false;
	}
	var data ;
	if(useValidCode == "false"){
		data = "userLoginName="+userLoginName;
	}else{
		var validCode=jQuery('#validCode').val();
		if(validCode==""){
			showMessage("请输入验证码！");
			return false;
		}else{
			data = "userLoginName="+userLoginName+"&validCode="+validCode;
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
				showMessage(result.message);
				jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg?" + Math.random());
			}else{
				showMessage("密码重置错误!");
				jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg");
			}
		},error:function(){
	          	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
	        }
	}); 	
}
