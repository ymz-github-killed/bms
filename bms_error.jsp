<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib  uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <meta charset="utf-8">
		<!-- <meta name="viewport" content="chrome,IE=dege"/> -->
		<title>error</title>
		<script src="http://bms-ec.yw.zj.chinamobile.com:9100/bms/theme/bmsHTGL/js/jquery-1.7.2.min.js"></script>
		<style>
			*{margin: 0; padding: 0;}
			html,body{background-color: #fff; width: 100%; height: 100%;}
			body{display: flex; align-items: center; justify-content: center;}
			.error_main{margin: 0 auto; width: 950px;}
			img{display: block; margin: 0 auto;}
			h2{color: #666; text-align: center; margin-top: -120px; font-size: 22px; line-height: 2.0; font-weight: normal; font-family: 'MicrosoftYaHei';}
			.btn{cursor: pointer; margin-top: 30px; background-color: #00a0e9; color: #FFFFFF; width: 120px; height: 40px; text-align: center; line-height: 40px; overflow: hidden; -webkit-border-radius: 4px; -moz-border-radius: 4px; -ms-border-radius: 4px; -o-border-radius: 4px;  border-radius: 4px; margin: 30px auto 0;}
			.btn:hover{opacity: .8;}
		</style>
				
		<script>
			function getUrlParam(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]); return '';
			}
		//	$(function(){
				var _str = encodeURIComponent(getUrlParam('ssoMsg'));
				// 对不起，您的登录凭证已过期，请重新登录！  ====   %C3%A5%C2%AF%C2%B9%C3%A4%C2%B8%C2%8D%C3%A8%C2%B5%C2%B7%C3%AF%C2%BC%C2%8C%C3%A6%C2%82%C2%A8%C3%A7%C2%9A%C2%84%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%A5%C2%87%C2%AD%C3%A8%C2%AF%C2%81%C3%A5%C2%B7%C2%B2%C3%A8%C2%BF%C2%87%C3%A6%C2%9C%C2%9F%C3%AF%C2%BC%C2%8C%C3%A8%C2%AF%C2%B7%C3%A9%C2%87%C2%8D%C3%A6%C2%96%C2%B0%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%AF%C2%BC%C2%81
				// 对不起，系统无法获取登录凭证，会话为空，请重新登录！ ====   %C3%A5%C2%AF%C2%B9%C3%A4%C2%B8%C2%8D%C3%A8%C2%B5%C2%B7%C3%AF%C2%BC%C2%8C%C3%A7%C2%B3%C2%BB%C3%A7%C2%BB%C2%9F%C3%A6%C2%97%C2%A0%C3%A6%C2%B3%C2%95%C3%A8%C2%8E%C2%B7%C3%A5%C2%8F%C2%96%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%A5%C2%87%C2%AD%C3%A8%C2%AF%C2%81%C3%AF%C2%BC%C2%8C%C3%A4%C2%BC%C2%9A%C3%A8%C2%AF%C2%9D%C3%A4%C2%B8%C2%BA%C3%A7%C2%A9%C2%BA%C3%AF%C2%BC%C2%8C%C3%A8%C2%AF%C2%B7%C3%A9%C2%87%C2%8D%C3%A6%C2%96%C2%B0%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%AF%C2%BC%C2%81
				// 对不起，您的登录信息已过期，请重新登录！   ====   %C3%A5%C2%AF%C2%B9%C3%A4%C2%B8%C2%8D%C3%A8%C2%B5%C2%B7%C3%AF%C2%BC%C2%8C%C3%A6%C2%82%C2%A8%C3%A7%C2%9A%C2%84%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%A4%C2%BF%C2%A1%C3%A6%C2%81%C2%AF%C3%A5%C2%B7%C2%B2%C3%A8%C2%BF%C2%87%C3%A6%C2%9C%C2%9F%C3%AF%C2%BC%C2%8C%C3%A8%C2%AF%C2%B7%C3%A9%C2%87%C2%8D%C3%A6%C2%96%C2%B0%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%AF%C2%BC%C2%81
				if(_str == '%C3%A5%C2%AF%C2%B9%C3%A4%C2%B8%C2%8D%C3%A8%C2%B5%C2%B7%C3%AF%C2%BC%C2%8C%C3%A6%C2%82%C2%A8%C3%A7%C2%9A%C2%84%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%A5%C2%87%C2%AD%C3%A8%C2%AF%C2%81%C3%A5%C2%B7%C2%B2%C3%A8%C2%BF%C2%87%C3%A6%C2%9C%C2%9F%C3%AF%C2%BC%C2%8C%C3%A8%C2%AF%C2%B7%C3%A9%C2%87%C2%8D%C3%A6%C2%96%C2%B0%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%AF%C2%BC%C2%81' 
				|| _str == '%C3%A5%C2%AF%C2%B9%C3%A4%C2%B8%C2%8D%C3%A8%C2%B5%C2%B7%C3%AF%C2%BC%C2%8C%C3%A7%C2%B3%C2%BB%C3%A7%C2%BB%C2%9F%C3%A6%C2%97%C2%A0%C3%A6%C2%B3%C2%95%C3%A8%C2%8E%C2%B7%C3%A5%C2%8F%C2%96%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%A5%C2%87%C2%AD%C3%A8%C2%AF%C2%81%C3%AF%C2%BC%C2%8C%C3%A4%C2%BC%C2%9A%C3%A8%C2%AF%C2%9D%C3%A4%C2%B8%C2%BA%C3%A7%C2%A9%C2%BA%C3%AF%C2%BC%C2%8C%C3%A8%C2%AF%C2%B7%C3%A9%C2%87%C2%8D%C3%A6%C2%96%C2%B0%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%AF%C2%BC%C2%81' || 
				_str == '%C3%A5%C2%AF%C2%B9%C3%A4%C2%B8%C2%8D%C3%A8%C2%B5%C2%B7%C3%AF%C2%BC%C2%8C%C3%A6%C2%82%C2%A8%C3%A7%C2%9A%C2%84%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%A4%C2%BF%C2%A1%C3%A6%C2%81%C2%AF%C3%A5%C2%B7%C2%B2%C3%A8%C2%BF%C2%87%C3%A6%C2%9C%C2%9F%C3%AF%C2%BC%C2%8C%C3%A8%C2%AF%C2%B7%C3%A9%C2%87%C2%8D%C3%A6%C2%96%C2%B0%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%AF%C2%BC%C2%81'){
					console.log('222');
					window.location.href = 'http://bms-ec.yw.zj.chinamobile.com:9100/bms/'
					
				}else{
                   $(function(){
					console.log('111');
					$('.j-btn').click(function(){
						window.location.href = 'http://bms-ec.yw.zj.chinamobile.com:9100/bms/'
					})
					})
				}
				
				//})
		</script>

  </head>
  
  <body>
    
  	  
		<div class="error_main" style.disablednone" >
			<img src="./images/error_img.png" >
			<h2>该账号状态异常，请联系省电渠。</h2>
			<div class="btn j-btn" onclick = "">返回登录</div>
		</div>
   	</body>
 
</html>
