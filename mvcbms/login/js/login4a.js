var superman;
var useValidCode;
var usePhoneValidate;
jQuery(function(){
	jQuery("#get_").bind("click",function(){getPhoneValidate()});
	jQuery("#reset").bind("click",function(){resetText()});
	jQuery("#forgetPassWord").bind("click",function(){forgetPassWord()});
	jQuery("#resetPassword").bind("click",function(){modifyPassword()});
	jQuery("#newget_").bind("click",function(){newGetPhoneValidate()});
	jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg");
	
	jQuery("#validCodeImg").bind("click",function(){
		var s=Math.random();this.src=basePath+'common/sinoaptcha1.jpg?1='+s;
	});
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
	var userLoginPassword = jQuery("#userLoginPassword").val();
	

	if (userLoginName == "") {
		showMessage("请输入账户名！");
		return false;
	}
	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的账户名！");
		return false;
	}
	if(userLoginName.toLowerCase().split("http：//")>1 || userLoginName.toLowerCase().split("https://")>1 || userLoginName.toLowerCase().split("html")>1||userLoginName.toLowerCase().split(".")>1){
		showMessage("账户名不正确，请重新输入！");
		return false;
	}
	if (userLoginPassword == "") {
		showMessage("请输入账户密码！");
		return false;
	}
	
	jQuery.ajax({
		type:"POST",
		url:basePath+"login4a/loginNameAndPwdCheck.controller",
		dataType:"json",
		data:jQuery("#loginForm").serializeArray(),
		success:function(result){
			if(result.timeSpace != null && result.timeSpace != ""){
				var subacct = result.subaccts.split(",");
				var oldOption = $("#seluser").html('');
				var newOption=""  
			    for(var i=0;i<subacct.length;i++){  
			    	newOption+='<option>'+subacct[i].trim()+'</option>';  
			    }  
				$("#seluser").html(oldOption+"<option>请选择从账号</option>"+newOption);
				
				showMessage(result.message);
				count = result.timeSpace;
				countdown = setInterval("CountDown()",1000);
				$("#userLoginName").attr("readonly",true);
				$("#userLoginPassword").attr("readonly",true);
				$("#phoneValidateNum").removeAttr("readonly");
			}else{
				showMessage(result.message);
				if(result.messageCode === "success"){
					//开启倒计时功能能
					count = jsonData.countdown;
					countdown = setInterval("CountDown()",1000);
					$("#phoneValidateNum").removeAttr("readonly");
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

function overtime(){
	ss = 0;
}

/**登录前校验*/
var ss=60;
function beforeSubmit(){
	
	var userLoginName=jQuery('#userLoginName').val();
	var userLoginPassword = jQuery('#userLoginPassword').val();
	var phoneValidateNum=jQuery('#phoneValidateNum').val();
	var get_ = jQuery("#get_").html();
	
	if (userLoginName == "") {
		showMessage("请输入账户名！");
		return false;
	}
	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的账户名！");
		return false;
	}
	if(userLoginName.toLowerCase().split("http：//")>1 || userLoginName.toLowerCase().split("https://")>1 || userLoginName.toLowerCase().split("html")>1||userLoginName.toLowerCase().split(".")>1){
		showMessage("账户名不正确，请重新输入！");
		return false;
	}
	
	if (userLoginPassword == "") {
		showMessage("请输入账户密码！");
		return false;
	}
	
	if (get_ == "点击获取") {
		showMessage("请点击获取验证码！");
		return false;
	}
	
	if (get_ == "重新获取") {
		showMessage("请重新获取验证码！");
		return false;
	}
	
	if (phoneValidateNum == "") {
		showMessage("请输入短信验证码！");
		return false;
	}
	
	jQuery.ajax({
		type:"POST",
		url:basePath+"login4a/yzmCheck.controller",
		dataType:"json",
		data:jQuery("#loginForm").serializeArray(),
		success:function(result){
			if(result.message === "success"){
//				showMessage("验证码校验通过");
				$("#loginNameTrId").hide();
				$("#pwdTrId").hide();
				$("#phoneValidate").hide();
				$("#subAcctsTrId").removeClass();
				$("#loginBtn").hide();
				$("#subAccBtn").removeClass();
				setTimeout("overtime()",60000);
			}else{
				showMessage("验证码错误！");
//				count=0;
//				jQuery("#get_").text("重新获取");
//				jQuery("#get_").unbind("click").bind("click",function(){getPhoneValidate()});
//				jQuery("#get_").css({"color":"#3399ff","cursor":"pointer"});
			}
		}
	});
	
	
}

/**从账号登陆*/
function subAcctSubmit(){
	var seluser = $('#seluser option:selected') .val();
	if(seluser=="请选择从账号"){
		showMessage("请选择从账号!");
		return false;
	}else if(ss===0){
		showMessage("验证码已过期，请重新登录!");
		count=0;
		ss=60;
		goback();
	}else{
		jQuery.ajax({
			type:"POST",
			url:basePath+"login4a/logon4a.controller",
			dataType:"json",
			data:jQuery("#loginForm").serializeArray(),
			success:function(result){
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
	    		    			showMessage(result.message);
	    		    		}
	    		        }
	    			});
	    		}else{
	    				showMessage("用户名不存在");
	    		}
			}
		});
	}
}

/**
 * 重置事件
 */
function resetText(){
	document.getElementById("loginForm").reset();
	//重置倒计时，释放按钮
	window.clearInterval(countdown); 
	jQuery("#get_").text("点击获取");
	jQuery("#get_").unbind("click").bind("click",function(){getPhoneValidate()});
	jQuery("#get_").css({"color":"#fff","cursor":"pointer"});
	$("#userLoginName").removeAttr("readonly");
	$("#userLoginPassword").removeAttr("readonly");
	$("#phoneValidateNum").attr("readonly",true);
}


/**
 * 忘记密码
 */
function forgetPassWord(){
	$("#loginDiv").hide();
	$("#resetDiv").show();
	$("#userLoginName_").val("");
	$("#newPassword").val("");
	$("#commitNewPassword").val("");
	$("#phoneValidateNum_").val("");
	$("#returnLogin").unbind("click").bind("click",function(){returnLogin();});
	
}

/**
 * 返回登录页
 */
function returnLogin(){
	$("#loginDiv").show();
	$("#resetDiv").hide();
	$("#userLoginName").val("");
	$("#userLoginPassword").val("");
	$("#phoneValidateNum").val("");
}

/**
 * 重置密码---获取验证码
 */
function newGetPhoneValidate(){
	
	var userLoginName_ = $("#userLoginName_").val();
	var newPassword = $("#newPassword").val();
	var commitNewPassword = $("#commitNewPassword").val();
	
	if(userLoginName_ == ""){
		showMessage("请输入账户名！");
		return false;
	}
	if(!/^\w+$/g.test(userLoginName_)){
		showMessage("请输入正确的账户名！");
		return false;
	}
	if(userLoginName_.toLowerCase().split("http：//")>1 || userLoginName_.toLowerCase().split("https://")>1 || userLoginName_.toLowerCase().split("html")>1||userLoginName_.toLowerCase().split(".")>1){
		showMessage("账户名不正确，请重新输入！");
		return false;
	}
	if(newPassword == ""){
		showMessage("请输入账户新密码！");
		return false;
	}
	//新密码应该符合密码策略定义的密码强度要求
	//（密码长度8-15位，至少一位大写字母，一位小写字母，一位数字，一位特殊字符（!@#$%））。
	//123qazQWE!123
	var r=/^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%].*).{8,15}$/;  
	if(!r.test(newPassword)){
		showMessage("密码长度要求8-15位，包含大写字母，小写字母，数字和特殊字符（!@#$%）")
		return false;
	}
	if(commitNewPassword == ""){
		showMessage("请输入账户确认密码！");
		return false;
	}
	if(newPassword != commitNewPassword){
		showMessage("账户新密码与确认密码不一致！");
		return false;
	}
	if(jQuery("#validCode").val() == "")
	{
		showMessage("请输入图形验证码！");
		return false;
	}
	$.ajax({
		type:"POST",
		url:basePath+"login4a/resetPassword.controller",
		data:{"userLoginName":userLoginName_,"validCode":jQuery("#validCode").val()},
		dataType:"json",
		success:function(data){
			if(data.timeSpace != null && data.timeSpace != ""){
				showMessage(data.message);
				count = data.timeSpace;
				countdown = setInterval("countDown()",1000);
				$("#userLoginName_").attr("readonly",true);
				$("#newPassword").attr("readonly",true);
				$("#commitNewPassword").attr("readonly",true);
				$("#phoneValidateNum_").removeAttr("readonly");
			}else if ("fail" == data.success){
				showMessage(data.message);
				jQuery("#validCodeImg").attr("src",basePath+"common/sinoaptcha1.jpg?1="+Math.random()+"s");
			}
		}
	});
	
	
} 

function countDown(){
	$("#newget_").unbind("click").bind("click",function(){return false;});
	$("#newget_").css({"color":"#ccc","cursor":"default"});
	$("#newget_").text(count+"s后重新获取");
	if(count <= 0){
		clearInterval(countdown);
		$("#newget_").text("重新获取");
		$("#newget_").unbind("click").bind("click",function(){newGetPhoneValidate()});
		$("#newget_").css({"color":"#3399ff","cursor":"pointer"});
		return false;
	}
	count--;
}

/**
 * 修改密码
 */
function modifyPassword (){
	
	var userLoginName_ = $("#userLoginName_").val();
	var newPassword = $("#newPassword").val();
	var commitNewPassword = $("#commitNewPassword").val();
	var phoneValidateNum_ = $("#phoneValidateNum_").val();
	var newget_ = $("#newget_").html();
	
	if(userLoginName_ == ""){
		showMessage("请输入账户名！");
		return false;
	}
	if(!/^\w+$/g.test(userLoginName_)){
		showMessage("请输入正确的账户名！");
		return false;
	}
	if(userLoginName_.toLowerCase().split("http：//")>1 || userLoginName_.toLowerCase().split("https://")>1 || userLoginName_.toLowerCase().split("html")>1||userLoginName_.toLowerCase().split(".")>1){
		showMessage("账户名不正确，请重新输入！");
		return false;
	}
	if(newPassword == ""){
		showMessage("请输入账户新密码！");
		return false;
	}
	//新密码应该符合密码策略定义的密码强度要求
	//（密码长度8-15位，至少一位大写字母，一位小写字母，一位数字，一位特殊字符（!@#$%））。
	//123qazQWE!123
	var r=/^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%].*).{8,15}$/;  
	if(!r.test(newPassword)){
		showMessage("密码长度要求8-15位，包含大写字母，小写字母，数字和特殊字符（!@#$%）")
		return false;
	}
	if(commitNewPassword == ""){
		showMessage("请输入账户确认密码！");
		return false;
	}
	if(newPassword != commitNewPassword){
		showMessage("账户新密码与确认密码不一致！");
		return false;
	}
	if (newget_ == "点击获取") {
		showMessage("请点击获取验证码！");
		return false;
	}
	if (newget_ == "重新获取") {
		showMessage("请重新获取验证码！");
		return false;
	}
	if(phoneValidateNum_ == ""){
		showMessage("请输入短信验证码！");
		return false;
	}
	
	$("#userLoginName").val(userLoginName_);
	$("#userLoginPassword").val(newPassword);
	$("#phoneValidateNum").val(phoneValidateNum_);
	
	$.ajax({
		url:basePath+"login4a/modifyPassword.controller",
		type:"POST",
		dataType:"json",
		data:$("#loginForm").serializeArray(),
		success:function(data){
			if("success" == data.success){
				showMessage(data.message);
				$("#goUrl").unbind("click").bind("click",function(){
					removeDisable();
					window.location.href=basePath+"login4a.jsp";
				});
				// window.location.href=basePath+"login4a.jsp";
				
			}else if("fail" == data.success){
				showMessage(data.message);
				count = 0;
				setInterval("countDown", 1000);
				$("#userLoginName_").attr("readonly",false);
				$("#newPassword").attr("readonly",false);
				$("#commitNewPassword").attr("readonly",false);
				$("#phoneValidateNum_").val("");
			}
		}
		
	});
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
	jQuery("#closeUrl").unbind("click").bind("click",function(){removeDisable();});
	jQuery("#goUrl").unbind("click").bind("click",function(){removeDisable();});
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
	jQuery("#phoneValidateNum").attr("disabled",true);
	
}

function removeDisable(){
	jQuery("#userLoginName")[0].disabled = false;
	jQuery("#userLoginPassword")[0].disabled = false;
	jQuery("#phoneValidateNum")[0].disabled = false;
	
}

function setModifyPwDisable(){
	jQuery("#userLoginName_").atrr("disabled",true);
	jQuery("#newPassword").attr("disabled",true);
	jQuery("#commitNewPassword").attr("disabled",true);
	jQuery("#phoneValidateNum_").attr("disabled",true);
}

function removeModifyPwDisable(){
	jQuery("#userLoginName_")[0].disabled = false;
	jQuery("#newPassword")[0].disabled = false;
	jQuery("#commitNewPassword")[0].disabled = false;
	jQuery("#phoneValidateNum_")[0].disabled = false;
}

function goback(){
	$("#loginNameTrId").show();
	$("#pwdTrId").show();
	$("#phoneValidate").show();
	$("#subAcctsTrId").addClass("undis");
	$("#loginBtn").show();
	$("#subAccBtn").addClass("undis");
	$("#userLoginName").attr("readonly",true);
	$("#userLoginPassword").attr("readonly",true);
}
