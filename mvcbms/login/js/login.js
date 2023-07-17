/*var superman;
var useValidCode;
var usePhoneValidate;
jQuery(function(){
	jQuery("#userLoginName").focus();
	if(jsonData.message!=null){
		showMessage(jsonData.message);
		//jQuery("#goUrl").unbind("click").bind("click",function(){removeDisable();});
		//jQuery("#closeUrl").unbind("click").bind("click",function(){removeDisable();});
	}
	*//**是否启用手机验证码功能*//*
	usePhoneValidate  = jsonData.usePhoneValidate;
	*//**是否启用图形验证码功能*//*
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
});
document.onkeydown = function(e){ 
	 var ev = document.all ? window.event : e;
	 if(ev.keyCode==13) {
		 jQuery("#submit").click();
		}
	}
*//**获取手机验证码*//*
var countdown;
function getPhoneValidate(){
	var userLoginName=jQuery('#userLoginName').val();
	
	if(userLoginName == superman){
		return false;
	}
	if(userLoginName == "")
	{
		showMessage("请输入登录名！");
		return false;
	}
	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的登录名！");
		return false;
	}
	if(userLoginName.indexOf("http://")>0 ||userLoginName.indexOf("https://")>0 || userLoginName.indexOf("html")>0 || userLoginName.indexOf(".")>0){
		showMessage("登录名不正确，请重新输入！");
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
	if(userLoginName == superman){
		 return false;
	}
	if(userLoginName == "")
	{
		showMessage("请输入登录名！");
		return false;
	}
	
	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的登录名！");
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
		showMessage("登录名不正确，请重新输入！");
		return false;
	}
	jQuery.ajax({
		type:"POST",
		url:basePath+"phone/getResetValiNum.controller",
		dataType:"json",
		data:"userLoginName="+userLoginName+"&userPhoneNumber="+userPhoneNumber,
		success:function(result){
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
*//**登录事件*//*
function beforeSubmit(){
	setDisable();
	var userLoginName=jQuery("#userLoginName").val();
	if(userLoginName == superman){
		usePhoneValidate = "false";
	}
	if(userLoginName == "")
	{
		showMessage("请输入登录名！");
		removeDisable();
		return false;
	}

	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的登录名！");
		removeDisable();
		return false;
	}
	if(userLoginName.indexOf("http://")>0 ||userLoginName.indexOf("https://")>0 || userLoginName.indexOf("html")>0 || userLoginName.indexOf(".")>0){
		showMessage("登录名不正确，请重新输入！");
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
			*//**通过登录校验*//*
    		if(result.message=== "success" ){
    			jQuery.ajax({
    				type:"post",
    				cache:"false",
    				url:basePath+"login/main.controller",
    				dataType:"json",
    				success:function(result){
    					*//**通过初始化操作*//*
    		    		if(result.message === "success"){
    		    			*//**进入首页*//*
    		    			window.location.href=basePath+"login/index.controller";
    		    			window.location.href=basePath+"homePage/list.controller";
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

*//**
 * 重置事件
 *//*
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
	if(usePhoneValidate === "true"){
		jQuery("#phoneValidate").hide();
	}
	jQuery(".tologin").hide();
}

function cancel(){
	jQuery("#validCodeImg").click();
	jQuery("#validCode").val("");
	jQuery("#resetphoneValidateNum").val("");
	jQuery("#userPhoneNumber").val("");
	jQuery(".beforeReset").hide();
	if(usePhoneValidate === "true"){
		jQuery("#phoneValidate").show();
	}
	jQuery(".tologin").show();
}

function  PhoneValidate(){
	var userLoginName=jQuery('#userLoginName').val();
	var userPhoneNumber=jQuery('#userPhoneNumber').val();
	var phoneValidateNum=jQuery('#resetphoneValidateNum').val();
	if(userLoginName == "")
	{
		showMessage("请输入登录名！");
		return false;
	}
	if(userPhoneNumber == "")
	{
		showMessage("请输入手机号码！");
		return false;
	}
	if(!/^\w+$/g.test(userLoginName)){
		showMessage("请输入正确的登录名！");
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
		showMessage("登录名不正确，请重新输入！");
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
					if(usePhoneValidate  === "true" ){
						jQuery("#phoneValidate").show();
					}
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
*/
var host=window.location.host;
$(function () {
	
	/*var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 3,
	      spaceBetween: 30,
	      centeredSlides: true,
	      loop: true,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	    });
*/
	
	
	$(".j-psw").focus(function(){
		$(this).next('i').css('opacity','0');
		$(this).css('opacity','1');
	}).blur(function(){
		if($(this).val().length >0){
			$(this).next('i').css('opacity','0');
			$(this).css('opacity','1');
		}else{
			$(this).css('opacity','0');
			$(this).next('i').css('opacity','1');
		}
	})
	// onfocus="javascript:if(this.value=='请输入密码')this.value='';" onblur="javascript:if(this.value=='')this.value='请输入密码';" 

	$("#myInput").keydown(function (event) {
	    if (event.keyCode == 13) {
	        //回车执行函数
	    	 $('.j-logon').click();
	    }
	});
	 var pathName=window.document.location.pathname;
	 var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
	 var _url = "http://"+host+projectName;
    $(".j-logon").click(function () {
    	$(".juhua_box").css('display','');
        var _name = $(".j-name").val().length;
        var _psw = $(".j-psw").val().length;
        var _yzm = $(".j-yzm").val().length;
        var userLoginName1 = enString($(".j-name").val());
        var userLoginPassword1 = enString($(".j-psw").val());
        var validCode1 = $(".j-yzm").val();
        if (_name == '0' && (".j-name").val() != '请输入用户名') {
        	$(".juhua_box").css('display','none');
        	alert("登录账号不能为空");
            return false;
        } else {
            if ( _psw == '0') {
            	$(".juhua_box").css('display','none');
            	alert("登录密码不能为空");
                return false;
            } else {
                if (_yzm == '0' && $(".j-yzm").val() != '请输入验证码') {
                	$(".juhua_box").css('display','none');
                	alert("验证码不能为空");
                    return false;
                } else {
                    $.ajax({ //登录
                        type: 'POST',
                        url: _url + '/login/logon.controller',
                        async:false,
                        data: {
                            "userLoginName": userLoginName1,
                            "userLoginPassword": userLoginPassword1,
                            "validCode": validCode1
                        },
                        dataType: 'json',
                        success: function (data) {
                            if (data.messageCode == 'S100') {
                                $.ajax({ //初始化用户
                                    type: 'POST',
                                    url: _url + '/login/main.controller',
                                    dataType: 'json',
                                    success: function (data) {
                                        if (data.messageCode == 'S100') {
                                        	window.location.href = _url + "/homePage/list.controller";
                                            //跳转首页链接
                                            /*window.location.href = _url + "/login/index.controller";*/
                                           /* window.location.href=basePath+"homePage/list.controller";*/
                                        	$(".juhua_box").css('display','none');
//                                        	window.location.href = _url + "/homePage/list.controller";
                                           }else{
                                        	   $(".juhua_box").css('display','none');
	                                        	alert(data.message);
	                                        	yzm_method();
	                                    		return false;
                                          }                            
                                        },
                                    error: function (xhr, type) {

                                    }
                                });
                            }else{
                            	$(".juhua_box").css('display','none');
                            	alert(data.message);
                            	yzm_method();
                        		return false;
                            }   
                        },
                        error: function (xhr, type) {

                        }
                    });
                }
            }
        }
    })
})
 $(function () {
	//margin-left
	 var _ml = $(".center_box").width()/2 - 90;
	 $(".twoicon").css({"margin-left": _ml});
	 //新
	//	 var _dh = $(document).height() - 120;
		 var _dh = $(window).height() - 120;
	     $(".lunbo_box").height(_dh);
	     $(".swiper-container").height(_dh);
	     $(".swiper-container img").height(_dh);
	//     alert(_dh);
	 //判断IE浏览器
	 	var DEFAULT_VERSION = 9.0;  
	    var ua = navigator.userAgent.toLowerCase();  
	    var isIE = ua.indexOf("msie")>-1;  
	    var safariVersion;  
	    if(isIE){  
	    	safariVersion =  ua.match(/msie ([\d.]+)/)[1];
	    }  
	    if(safariVersion <= DEFAULT_VERSION ){  
//	      alert('系统检测到您正在使用ie8以下内核的浏览器，不能实现完美体验，请更换或升级浏览器访问！');
	      var ii = 1;
          $(".img_bg02").css('display','none');
          $(".img_bg03").css('display','none');
          setInterval(function(){
               if(ii == 1){
                   $(".img_bg01").css('display','');
                   $(".img_bg02").css('display','none');
                   $(".img_bg03").css('display','none');
               }else if(ii == 2){
            	   $(".img_bg01").css('display','none');
                   $(".img_bg02").css('display','');
                   $(".img_bg03").css('display','none');
               }else if(ii == 3){
            	   $(".img_bg01").css('display','none');
                   $(".img_bg02").css('display','none');
                   $(".img_bg03").css('display','');
                   ii=0;
               }
               ii++;
           },2000);
	    }else{
	    	//最里层轮播
	        var mySwiper1 = new Swiper('#swiper1', {
	            loop: true,
	            autoplay: 2500,
	            speed: 600,
	            autoplayDisableOnInteraction: false,
	            pagination: '.swiper-pagination',
	            paginationClickable: true
	        });
	    };
	 
     
            //点击切换登录方式
            $(".j-login").click(function () {
                $(".foura_login").removeClass("fn-hide");//登录方式
              $.ajax({
        		    type:"post",
        			cache:"false",
        			dataType:"json",  
        			url:basePath+"phone/bmsLoginPage.controller?t="+Math.random(),
        			success:function(result){
        				if(result=="1"){
        					$(".div_4adl").hide();
        					$(".div_ptzhdl").hide();
        					$(".div_ptzhdl").addClass("fn-hide");
        					$(".foura_login").addClass("fn-hide");
        	                $(".ordinary_login").removeClass("fn-hide");
        				}else if(result=="0"){
        					$(".div_4adl").hide();
        					$(".div_ptzhdl").hide();
        					    $(".ordinary_login").addClass("fn-hide");
        		                $(".foura_login").removeClass("fn-hide");
        				}else if(result=="2"){
        					$(".div_4adl").show();
        					$(".div_ptzhdl").show();
        					
        				}
        				
        			}
        		});
            });
            yzm_method();
            $(".yzm_img_img").click(function () {
                yzm_method();
            });
        });
       $(".div_ptzhdl").on("click", function(e){
    	   $(".foura_login").addClass("fn-hide");
           $(".ordinary_login").removeClass("fn-hide");
       })
       $(".div_4adl").on("click", function(e){
    	   $(".ordinary_login").addClass("fn-hide");
           $(".foura_login").removeClass("fn-hide");
       })
        //图片验证码
        function yzm_method() {
            var s = Math.random();
//            $(".yzm_img_img").attr("src", "http://"+host+"/bms2.0"+"/common/sinoaptcha1.jpg?1=" + s);
            $(".yzm_img_img").attr("src", basePath+"common/sinoaptcha1.jpg?1=" + s);
            // document.domain = "zj.chinamobile.com";
		}
		function forget_MM(){
//			window.open("http://"+host+"/bms2.0/theme/bmsHTGL/reset_password_two.jsp")
			window.open(basePath+"theme/bmsHTGL/reset_password_two.jsp")
		}
		$(function(){ 
	    	$("body,html").height($(window).height());
	    	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; 
	    	if(!!window.ActiveXObject || "ActiveXObject" in window){
	    		  var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
	    	        reIE.test(userAgent);
	    	        var fIEVersion = parseFloat(RegExp["$1"]);
	    	        if (fIEVersion != 8) {
	    	        	$(".width_img").css("width",50);
	    	        }
	         }   	    
	    })    
	    $(window).resize(function(){
	    	$("body,html").height($(window).height());
	    })
	    document.domain = "zj.chinamobile.com";
        