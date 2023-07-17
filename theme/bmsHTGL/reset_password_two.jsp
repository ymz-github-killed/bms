<%@ page language="java"  pageEncoding="UTF-8"%>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <meta http-equiv="X-UA-Compatible" content="ie=edge"> -->
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <script src="../../js/PIE.js"></script>
     
    <title>找回密码</title>
    <link rel="stylesheet" href="css/base.css?v=123123">
    <link rel="stylesheet" href="css/reset_psw_two.css?v=123123">
   <!--  <script src="js/jquery-1.7.2.min.js?v=123" type="text/javascript"></script> -->
    <script src="js/title.js?v=123123" type="text/javascript"></script>
	<script src="js/jquery-1.7.2.min.js?v=123123" type="text/javascript"></script>
	<script src="js/public.js?v=123123" type="text/javascript"></script>
	<script src="js/des1.js?v=123123" type="text/javascript"></script>
</head>

<body>
    <div class="header_box">
        <div class="logo_box">
            <img src="./images/ydlogo.png" alt="">
            <div>浙江移动电渠运营管理系统</div>
        </div>
    </div>
    <div class="content_box">
        <div class="progress">
            <div class="progress_wrap">
                <div class="confirm_count bg2 ">1<span>确认账号</span></div>
                <span class="color1"></span>
                <div class="security_verification bg1">2<span>安全验证</span></div>
                <span class="color1"></span>
                <div class="password_reset bg1">3<span>密码重置</span></div>
            </div>
        </div>
        <div class="user_verification">
            <div class="confirmCount_wrap">
                <div><input class="user_count" type="text" 
                	value="请输入您要找回密码的账号" onfocus="javascript:if(this.value=='请输入您要找回密码的账号')this.value='';" onblur="javascript:if(this.value=='')this.value='请输入您要找回密码的账号';"
                 maxlength="18"></div>
                <div>               
                    <div><input class="yzm_img" type="text" 
                    value="请输入验证码" onfocus="javascript:if(this.value=='请输入验证码')this.value='';" onblur="javascript:if(this.value=='')this.value='请输入验证码';"
                            maxlength="5"></div>
                    <div style="border-radius: 0;line-height:0px;"><img class="j-one_yzm one_yzm" src="" alt=""></div>
                </div>
                <div class="confirmCount_btn j-one_loginbtn">
                    下一步
                </div>
            </div>
            <div class="securityVerification_wrap fn-hide">
                <div><input readonly class="user_phone" type="text" 
                value="请点击获取手机验证码并输入" onfocus="javascript:if(this.value=='请点击获取手机验证码并输入')this.value='';" onblur="javascript:if(this.value=='')this.value='请点击获取手机验证码并输入';"
                maxlength="11"></div>
                <div>
                    <div><input type="text" class="j-tel_yzm" onkeyup="value=value.replace(/[^\d]/g,'')"
                    value="请输入手机验证码" onfocus="javascript:if(this.value=='请输入手机验证码')this.value='';" onblur="javascript:if(this.value=='')this.value='请输入手机验证码';"
                	maxlength="6"></div>
                    <div><input class="j-hq_telyzm tel_yzm" type="button" class="j-get_code disabled " value="获取验证码" name=""></div>
                </div>
                <div class="confirmCount_btn" onclick="login1()">
                   下一步
                </div>
            </div>
            <div class="passwordReset_wrap fn-hide">
                <div>
                	<input class="reset_password show_text" type="text" 
                	value="请重新设置您的新密码">
                	<input class="reset_password show_psw"  id="reset_password"   type="password" 
                	maxlength="18" style="display:none;">
                </div>
                <div>
                	<input  class="confirm_password show_re_text" type="text"
                	value="请再次输入您的新密码" >
                	<input  class="confirm_password show_re_psw" type="password"
                	maxlength="18" style="display:none;">
                </div>
                <div class="confirmCount_btn" onclick="login2()">
                   	 完成
                </div>
            </div>
            <input class="user_name_none" type="text" style="display:none">
        </div>
    </div>
    <script src="js/reset_psw.js?v=202302061736"></script>
    <script src="js/des1.js?v=123"></script>
    <script type="text/javascript">
        
    </script>

</body>

</html>