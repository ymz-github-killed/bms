document.write("<script src='"+basePath+"mvcbms/pub/js/passwordRule.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"theme/bmsHTGL/js/des1.js' type='text/javascript'></script>");
jQuery(function(){
	var phoneValidate  = jsonData.phoneValidate;
	if(phoneValidate == "false" || phoneValidate ==null || phoneValidate==""){
		   jQuery("#changePhoneNumButton").hide();
	   }
	jQuery("#phoneValidateNum").val("");
	
	jQuery(".btn_reset").removeAttr("onclick").bind("click",function(){reset();});
	jQuery(".btn_save").removeAttr("onclick").bind("click",function(){save();})
	
	jQuery(".btn_reset2").removeAttr("onclick").bind("click",function(){reset2();});
	jQuery(".btn_save2").removeAttr("onclick").bind("click",function(){changePhoneNum();});
	
	jQuery("#get_").bind("click",function(){getValidateNum();});
});
function save(){
	var oldPassword = jQuery("#oldPassword").val();
	var newPassword = jQuery("#newPassword").val();
	var newPassword2 = jQuery("#newPassword2").val();
	if(loginPwd(oldPassword,newPassword,1)!=null){
		showMessageTxt(loginPwd(oldPassword,newPassword,1),"message","bccg");
		return false;
	}
	jQuery("#oldPassword").val(enString(oldPassword));
	jQuery("#newPassword").val(enString(newPassword));
	jQuery("#newPassword2").val(enString(newPassword2));
	if(oldPassword == ""){
		showMessageTxt("请输入原始密码！","message","bccg");
		jQuery("#oldPassword").val(oldPassword);
    	jQuery("#newPassword").val(newPassword);
    	jQuery("#newPassword2").val(newPassword2);
		return false;
	}
	if(newPassword == ""){
		showMessageTxt("请输入新密码！","message","bccg");
		jQuery("#oldPassword").val(oldPassword);
    	jQuery("#newPassword").val(newPassword);
    	jQuery("#newPassword2").val(newPassword2);
		return false;
	}
	if(newPassword2 == ""){
		showMessageTxt("再次输入新密码不能为空！","message","bccg");
		jQuery("#oldPassword").val(oldPassword);
    	jQuery("#newPassword").val(newPassword);
    	jQuery("#newPassword2").val(newPassword2);
		return false;
	}
	if(newPassword == oldPassword){
		showMessageTxt("新密码不可以与原始密码相同！","message","bccg");
		jQuery("#oldPassword").val(oldPassword);
    	jQuery("#newPassword").val(newPassword);
    	jQuery("#newPassword2").val(newPassword2);
		return false;
	}
	if(newPassword2 != newPassword ){
		showMessageTxt("两次新密码输入不匹配！","message","bccg");
		jQuery("#oldPassword").val(oldPassword);
    	jQuery("#newPassword").val(newPassword);
    	jQuery("#newPassword2").val(newPassword2);
		return false;
	}
	var pwdData = jQuery("#changePassword").serializeArray();
	jQuery.ajax({
		type:"post",
		cache:"false",
		url:basePath+"changePassword/change.controller?t="+Math.random(),
		dataType:"json",
		data:pwdData,
		success: function(result){
			console.log(result);
			console.log(result.messageCode == "401")
			if (result.messageCode == "401"){
				alert(result.message);
			}else{
				showMessageTxt(result.message,"message","bccg");
				reset();
			}
		},
		error:function(){
			jQuery("#oldPassword").val(oldPassword);
			jQuery("#newPassword").val(newPassword);
			jQuery("#newPassword2").val(newPassword2);
			showMessageTxt("修改密码失败！","message","bccg");
			reset();
		}
	});
}
var countdown=null;
function getValidateNum(){
	var oldPhoneNum = jQuery("#oldPhoneNum").val();
	var newPhoneNum = jQuery("#newPhoneNum").val();
	var phoneValidateNum = jQuery("#phoneValidateNum").val();
	if(oldPhoneNum == ""){
		showMessageTxt("请输入原手机号！","message","bccg");
		return false;
	}
	if(oldPhoneNum.length<11){
		showMessageTxt("请输入正确的原手机号！","message","bccg");
		return false;
	}
	if(newPhoneNum == ""){
		showMessageTxt("请输入新手机号！","message","bccg");
		return false;
	}
	if(oldPhoneNum == newPhoneNum){
		showMessageTxt("新手机号与原手机号不可相同！","message","bccg");
		return false;
	}
	if(newPhoneNum.length<11){
		showMessageTxt("请输入正确的新手机号！","message","bccg");
		return false;
	}
	//手机号校验，如过在添加用户时输入错误的手机号，这里也是无法通过！
//	var patrn = ^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$;
//	if(!patrn.exec(newPhoneNum)){
//		showMessageTxt("请输入正确的新手机号！","message","bccg");
//		jQuery("#newPhoneNum").focus();
//		return false;
//	}
//	if(!patrn.exec(oldPhoneNum)){
//		showMessageTxt("请输入正确的原手机号！","message","bccg");
//		jQuery("#oldPhoneNum").focus();
//		return false;
//	}
	jQuery.ajax({
		type:"get",
    	cache:"false",
        url:basePath+"safeRequest/getValidateNum.controller?t="+Math.random(),
        dataType:"json",
        data:jQuery("#changePhoneNum").serializeArray(),
        success:function(result){
        	showMessageTxt(result.message,"message","bccg");
        	if(result.messageCode==="C510"){
        		//开启倒计时功能能
        		count = jsonData.countdown;
        		countdown = window.setInterval("CountDown()",1000);
        	}
        	jQuery("#phoneValidateNum").val("");
        },
        error:function(){
        	showMessageTxt("保存失败！","message","bccg");
        }
    });
}
function CountDown(){
	jQuery("#get_").unbind("click").bind("click",function(){return false;});
	jQuery("#get_").css({"color":"#ccc","cursor":"default"});
	jQuery("#get_").text(count+"s后再获取");
	if(count <= 0){
		countdown = window.clearInterval(countdown);
		jQuery("#get_").text("获取验证码");
		jQuery("#get_").unbind().bind("click",function(){getValidateNum();});
		jQuery("#get_").css({"color":"","cursor":"pointer"});
	}
	count--;
}

function changePhoneNum(){
	var oldPhoneNum = jQuery("#oldPhoneNum").val();
	var newPhoneNum = jQuery("#newPhoneNum").val();
	var phoneValidateNum = jQuery("#phoneValidateNum").val();
	if(oldPhoneNum == ""){
		showMessageTxt("请输入原手机号！","message","bccg");
		return false;
	}
	if(oldPhoneNum.length<11){
		showMessageTxt("请输入正确的原手机号！","message","bccg");
		return false;
	}
	if(newPhoneNum == ""){
		showMessageTxt("请输入新手机号！","message","bccg");
		return false;
	}
	if(newPhoneNum.length<11){
		showMessageTxt("请输入正确的新手机号！","message","bccg");
		return false;
	}
	if(phoneValidateNum == ""){
		showMessageTxt("请输入校验码！","message","bccg");
		return false;
	}
	if(phoneValidateNum.length<6){
		showMessageTxt("请输入正确的校验码！","message","bccg");
		jQuery("#phoneValidateNum").val("");
		return false;
	}
		
	jQuery.ajax({
		type:"get",
    	cache:"false",
        url:basePath+"changePhoneNum/changeNum.controller?t="+Math.random(),
        dataType:"json",
        data:jQuery("#changePhoneNum").serializeArray(),
        success:function(result){
        	if(result.messageCode === "C540"){
        		reset2();
        	}
        	showMessageTxt(result.message,"message","bccg");
        },
        error:function(){
        	showMessageTxt("保存失败！","message","bccg");
    		reset2();
        }
    });
}
function initGetPhoneNum(){
	countdown = window.clearInterval(countdown);
	jQuery("#get_").text("获取验证码");
	jQuery("#get_").unbind().bind("click",function(){getValidateNum();});
	jQuery("#get_").css({"color":"","cursor":"pointer"});
}
function reset(){
	document.getElementById("changePassword").reset();
}
function reset2(){
	document.getElementById("changePhoneNum").reset();
	jQuery("#phoneValidateNum").val("");
	//重置倒计时，释放按钮
	countdown = window.clearInterval(countdown);
	jQuery("#get_").text("获取验证码");
	jQuery("#get_").unbind().bind("click",function(){getValidateNum();});
	// jQuery("#get_").css({"color":"","cursor":"pointer"});
	jQuery("#get_").css("color","");
	jQuery("#get_").css("cursor","pointer");
}

