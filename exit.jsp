<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="/WEB-INF/tld/struts-bean.tld" prefix="bean"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
	function exitUser(){
		var exit=document.getElementById("exitType_").value;
		for(var i=0;i<99999;i++){
			var appUrl=document.getElementById("appUrl"+i);
			if(appUrl!=null && appUrl!=""){
				/**当bms有外部应用被访问时候，退出时需要将所有外部应用也进行退出*/
				var url=appUrl.value+"/synchroExit.do";
				window.location.href=url;
			}else{
				window.location.href="${pageContext.request.contextPath}/login/exitBms.controller?exitType="+exit;
				return;	
			}
		}
	}
</script>
</head>
<body onload="exitUser()">
	<form>
		<input type="hidden" name="exitType" id="exitType_" value="${exitType }" />
		<logic:notEmpty name="list" scope="request">
			<logic:iterate id="m" name="list" indexId="index">
				<input type="hidden" id="appUrl${index }" value="${m.value }" />
				<iframe src="" width="0%" higth="0%" id="iframeId${index }"></iframe>
			</logic:iterate>
		</logic:notEmpty>
		<iframe src="" width="0%" higth="0%" id="iframeId"></iframe>
	</form>
</body>
</html>