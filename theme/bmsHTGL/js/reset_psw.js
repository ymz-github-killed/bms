var validate=null;
var host=window.location.host;
var pathName=window.document.location.pathname;
var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
var _url = document.location.protocol+"//"+host+projectName;
document.write("<script src='"+_url+"/mvcbms/pub/js/passwordRule.js' type='text/javascript'></script>");
document.write("<script src='"+_url+"/theme/bmsHTGL/js/title.js' type='text/javascript'></script>");
$(function () {

    //第一个下一步点击
     //获取手机验证码
    $(".j-hq_telyzm").click(function () {
        var _dis = $(this).hasClass("disabled");
        var _mobile = $(".j-tel_yzm").val();
        if (!_dis) {
            settime(this);
            sendSMS(_mobile);
        }
    })

    //第一个接口
    $(".j-one_loginbtn").click(function () {
        var userLoginName1 = $(".user_count").val();
        var yzm_img1 = $(".yzm_img").val();
        $.ajax({
            type: "POST",
            data: {
                "userLoginName": userLoginName1,
                "validCode": yzm_img1
            },
            url: _url + "/phone/loginNameValidateCode.controller",
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            async: false,
            dataType: 'json',
            success: function (data) {
            	 $(".user_phone").val(data.userMobile);
				 $(".user_name_none").val(data.userLoginName);
            	var message=data.message;
            	var message2=data.messageCode;

            	if(message!="" && message!=null && message!=undefined){
            		validate="false";
            		alert(data.message);
            		yzm_method();
            		return false;
            	}else{
					if(data.userMobile==undefined || data.userMobile== null || data.userMobile=="" || data.userMobile=="undefined"){
						alert("未绑定手机号");
						yzm_method();
						validate="false";
						return false;
					}else{
						 validate=null;
						 var userMobile = deString(data.userMobile);
						 $(".user_phone").val(userMobile);
						 $(".user_name_none").val(data.userLoginName);
					}
				}
            },
            error: function () {
                alert("账号或验证码，输入有误！");
                location.reload();
            }
        });
    })

     var key = 1;
    $(".confirmCount_btn").click(function () {
        if (key == 1 && validate!="false") {
            $(".confirmCount_wrap").addClass("fn-hide").next().removeClass("fn-hide");
            $(".security_verification").removeClass("bg1").addClass("bg2");
            $(".progress_wrap>span:nth-child(2)").removeClass("color1");
            key = 2;
            return;
        }
        /*if (key == 2) {
            $(".securityVerification_wrap").addClass("fn-hide").next().removeClass("fn-hide");
            $(".password_reset").removeClass("bg1").addClass("bg2");
            $(".progress_wrap>span:nth-child(4)").removeClass("color1");
            key = 3;
            return;
	     }
	      if (key == 3) {

	     }    */
     });
    //
    // document.querySelector('.show_text')
    //     .addEventListener('blur', () => {
    //         console.log(123213)
    //     })

    //图片验证码
    function yzm_method() {
        var s = Math.random();
        $(".j-one_yzm").attr("src",_url+"/common/sinoaptcha1.jpg?1=" + s);
        // document.domain = "zj.chinamobile.com";
    }
    yzm_method();
    $(".j-one_yzm").click(function(){
        yzm_method();
    })
})


//倒计时60秒
var countdown = 60;
function settime(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.value = "获取验证码";
        $(val).removeClass("disabled");
        countdown = 60;
        return false;
    } else {
        val.setAttribute("disabled", true);
        val.value = "重新发送(" + countdown + ")";
        $(val).addClass("disabled");
        countdown--;
    }
    setTimeout(function () {
        settime(val)
    }, 1000)
}
//yhchenmuyuan1  a123456@Li  13429102953

//获取验证码
function sendSMS(mobile) {
    // var _url = "http://"+host+"/bms";

    var userLoginName2 = $(".user_name_none").val();
    $("#user_name").val(userLoginName2);
    var user_phone2 = $(".user_phone").val();
    if(user_phone2==null || user_phone2==""){
    	alert("手机号为空");
    	return false;
    }
    $.ajax({
        type: "POST",
        data: {
            "userLoginName": userLoginName2,
            "userPhoneNumber": enString(user_phone2)
        },
        url: _url + "/phone/getResetValiNum.controller", //发送验证码
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        async: false,
        dataType: 'json',
        success: function (data) {
//            window.location.href = "http://www.baidu.com";
            // var code = data.code;
            // if (null != data || '' != data) {
            //     if (0 == code) {} else {
            //         $(".j-alert").fadeIn().find("h2").text("系统繁忙，请稍后再试！");
            //     }
            // } else {
            //     $(".j-alert").fadeIn().find("h2").text("系统繁忙，请稍后再试！");
            // }
        },
        error: function () {
           alert("获取手机验证码有误！");
        }
    });
}
function login1(){
	// var _url = "http://"+host+"/bms";

    var userLoginName2 = $(".user_count").val();
	var user_phone2 = $(".user_phone").val();
	var vode = $(".j-tel_yzm").val();
	$.ajax({
        type: "POST",
        data: {
            "userLoginName": userLoginName2,
            "userPhoneNumber": enString(user_phone2),
            "phoneValidateNum":vode
        },
        url: _url + "/phone/changePasswordTwo.controller", //发送验证码
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        async: false,
        dataType: 'json',
        success: function (data) {
        	var message=data.message;
        	var messageCode=data.messageCode;
        	if(messageCode=="C546"){

        		 $(".securityVerification_wrap").addClass("fn-hide").next().removeClass("fn-hide");
                 $(".password_reset").removeClass("bg1").addClass("bg2");
                 $(".progress_wrap>span:nth-child(4)").removeClass("color1");
                 window.localStorage.setItem('yzmFlag', 1);

        	}else{
        		alert(message);
        	}
            /*window.location.href=_url+"/login.jsp";*/


        },
        error: function () {
           alert("获取手机验证码有误！");
        }
    });
	//  $(".securityVerification_wrap").addClass("fn-hide").next().removeClass("fn-hide");
   // $(".password_reset").removeClass("bg1").addClass("bg2");
   // $(".progress_wrap>span:nth-child(4)").removeClass("color1");
}
function login2(){
	var checkList = [[],[]];
	checkList[1] = [ 'reset_password', '登录密码', 16, 1, 0, 1, 1 ];
	var bool = checkStr7(checkList);
	if(bool!="" && bool!=null && bool!=undefined){
		alert(bool);
		return false;
	}
	// var _url = "http://"+host+"/bms";

    var userLoginName = $(".user_count").val();
	var userLoginName1 = $(".show_psw").val();
	var userLoginName3 = enString(userLoginName1);
	var userLoginName2 = $(".show_re_psw").val();
	var user_phone2 = $(".user_phone").val();
	if(userLoginName1=="" || userLoginName1==null || userLoginName1==undefined ){
		alert("请输入重置密码");
		return;
	}
	if(userLoginName1!=userLoginName2){
		 alert("两次输入密码不一致");
	}else{
	    if (window.localStorage.getItem('yzmFlag') == 1){
            var showMessage = loginPwd(userLoginName,userLoginName1,1);
            if (showMessage == null){
                $.ajax({
                    type: "POST",
                    data: {
                        "userLoginName": userLoginName,
                        "userLoginPassword":userLoginName3,
                        "userPhoneNumber": enString(user_phone2)

                    },
                    url: _url + "/phone/changePasswordThree.controller",
                    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        var status = data.status;
                        var message = data.message;
                        if (status != "201"){
                            alert("修改密码成功");
                            window.localStorage.clear();
                            window.location.href=_url+"/login.jsp";
                        }else{
                            alert(message);
                        }
                    },
                    error: function () {
                        /*alert("获取手机验证码有误！");*/
                    }
                });
            }else{
                alert(showMessage);
            }
        }else{
            alert("请输入手机验证码");
            $(".confirmCount_wrap").addClass("fn-hide").next().removeClass("fn-hide");
            $(".security_verification").removeClass("bg1").addClass("bg2");
            $(".progress_wrap>span:nth-child(3)").removeClass("color1");
            $(".j-tel_yzm").val('请输入手机验证码');
            $(".passwordReset_wrap").addClass("fn-hide");
        }
	}

}
function checkStr7(str){
	var text=null;
	var str2=$(".reset_password").val();

	if(str2.length<6||str2.length>12){
		text="请输入6-12位长度密码";
		return text;
	}

	for(var i=0;i<str.length;i++){
		if(str[i].length>3 && str[i][3]==1 && str2.length<1){
			text="“"+str[i][1]+"”不能为空！";
			return text;
		}
		if(str[i].length>4 && str[i][4]==1 && str2.split(" ").length>1){
			text="“"+str[i][1]+"”不能有空格！";
			return text;
		}
		if(str[i].length>3 &&str[i][3]==7&& !/^\w+$/g.test(str2)){
			text="“"+str[i][1]+"”仅限英文字母、0-9的数字、下划线组成，不允许有特殊字符";
			return text;
		}
		/*if(str[i].length>5 && str[i][5]==1 && str2.split(".").length>1){
			text="“"+str[i][1]+"”不能有“.”敏感字符！";
			return text;
		}
		if(str[i].length>5 && str[i][5]==1 && str2.split("@").length>1 ){
			text="“"+str[i][1]+"”不能有“@”敏感字符！";
			return text;
		}
		if(str[i].length>5 && str[i][5]==1 && !/^\w+$/g.test(str2) ){
			text="“"+str[i][1]+"”只能由数字、26个英文字母或者下划线组成！";
			return text;
		}*/
		str2=str2.toUpperCase();
		if(str[i].length>6 && str[i][6]==1 && (str2.split("HTTP://").length>1 || str2.split("HTTPS://").length>1 || str2.split("HTML").length>1)){
			text="“"+str[i][1]+"”不能有“http://、https://、html”敏感字符！";
			return text;
		}
	}
	return text;
}
$(function () {
    $('.show_text').focus(function () {
        var text_value = $(this).val();
        if (text_value == this.defaultValue) {
            $('.show_text').hide();
            $('.show_psw').show().focus();
        }
    });
    $('.show_psw').blur(function () {
        var text_value = $(this).val();
        if (text_value == "") {
            $('.show_text').show();
            $('.show_psw').hide();
        }
    });

    $('.show_re_text').focus(function () {
        var text_value = $(this).val();
        if (text_value == this.defaultValue) {
            $('.show_re_text').hide();
            $('.show_re_psw').show().focus();
        }
    });
    $('.show_re_psw').blur(function () {
        var text_value = $(this).val();
        if (text_value == "") {
            $('.show_re_text').show();
            $('.show_re_psw').hide();
        }
    });
	});