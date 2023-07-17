<%@ page contentType="text/html; charset=GBK"%>
<%@ page import="com.sinovatech.bms.adm.model.dto.TBmsUserDTO"%>
<%@ page import="com.sinovatech.common.config.GlobalConfig,java.net.URLEncoder"%>
<% 
		TBmsUserDTO tBmsUserDTO = (TBmsUserDTO)request.getSession().getAttribute("loginUser");
		String username="";
		if(tBmsUserDTO!=null)
		{
			username=tBmsUserDTO.getUserLoginName();
		}
		
		//"${pageContext.request.contextPath}/images1.6/logo.gif"
		
	    String contextUrl = request.getContextPath();
		String url = GlobalConfig.getProperty("bms", "logo_url");
		String logo_url = contextUrl + url;
		
		//logo_url = URLEncoder.encode(logo_url, "GB2312");
		//logo_url=logo_url.replaceAll("%2F", "/");

		
%>
<html>
<head>
<script src="${pageContext.request.contextPath}/js/title.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=GBK">

<link href="${pageContext.request.contextPath}/css/yh.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">

<style type="text/css">
html {
	margin:0px;padding:0px;
	*overflow-y:hidden;
}
body {
	margin:0px;
	padding:0;
	background-color: #fff;
	overflow:hidden;height:100%;
	
}

</style>
</head>

<body>
        <div id="header">
                <table border="0" cellSpacing=0 cellPadding=0 width="100%">
                        <tbody>
                              <tr>
                                    <td width="300"><img  src=<%=logo_url %> width="299" height="63" alt="logo" title="logo"></td>
                                    <td valign="top"  align="center"></td>
                                    <td class="cmstd" width="120" style="vertical-align:middle;">
                                    <img src="${pageContext.request.contextPath}/images1.6/user.png" width="16" height="16" alt="你好" title="你好"><%=username%>您好<br />
                                    </td>
                              </tr>
                        </tbody>
                </table>
                
 
 
          </div>	
</body>
</html>
