<%@ page language="java" contentType="text/html; charset=GBK"%>

<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/strCheck.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
		function onFormSubmit()
		{	
			var str= new Array(new Array(),new Array());
			str[0]=['auditClsname_','应用编码',255,1,1];
			str[1]=['appName_','应用名称',255,1];
			str[2]=['appUrl_','URL链接',255,1];
			str[3]=['appDesc_','简介',1024];
			str[4]=['desKey_','DES Key',255];
			str[5]=['appIp_','接入IP',256];
			var bool=checkStr(str);
			if(!bool){
				return false;
			}
			if(!/^\w+$/g.test(document.getElementById("auditClsname_").value))
			{
				alert("应用编码格式不正确！");
				return false;
			}
			if(document.getElementById("desKey_").value!="" && document.getElementById("desKey_").value.length!=8)
			{
				alert("密码长度为8位!");
				return false;
			}
			document.form1.submit();
		}
 function rbutton()
	{
	    document.getElementById("rbid_").click();
	}
	</script>
	
<body class="overfwidth">

<div class="barnavtop">您所在的位置：系统管理 > 外部应用 > 新增外部应用</div>
<div id="workspace">
	<!--主体 开始-->
    <div id="container">
    	<!--按钮 开始-->  
<div class="toolbar">
       	<a href="#" class="sexybutton" onclick="onFormSubmit();return false"><span><span>保存</span></span></a> 
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>重置 </span></span></a>
        <a href="#" class="sexybutton" onclick="history.back();"><span><span>返回</span></span></a>        </div>
        <!--按钮 结束-->   
        <!--框内内容 开始-->
          <div class="editspace">
            <form class="cmxform" name="form1" 
			action="${pageContext.request.contextPath}/bms/adm/bmswebapp/addBmsWebapp.do"
			method="post" target="hideframe" onsubmit="">
              <fieldset>
                <!--ol 开始-->
                <ol>
                  <li class="listyle_4">
                    <input name="Button5223" type="reset" id="rbid_" value="重填" style="display: none;">
                    <label class="left pt5"><em>*</em>应用编码：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="auditClsname_" type="text" name="appCode" class="bgw" />
                      <em>由字母、数字和下划线组成</em>
                    </span></h1>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>应用名称：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="appName_" type="text" name="appName" class="bgw" />
                    </span></h1>
                  </li>
                 <li class="listyle_4">
                    <label class="mt5 left bordernone"><em>*</em>URL链接：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="appUrl_" type="text" name="appUrl" value="" class="wid350" />
                    </span></h1>
                  </li>
                 <li class="listyle_4 bordernone" style="background:none;">
                    <label class="left pt5">简介：</label>
                    <textarea id="appDesc_" name="appDesc" cols="80" rows="3"></textarea>
                  </li>
                  </ol>
               </fieldset>
               <fieldset>
                  <legend>安全接入</legend>
                  <ol>
                     <li class="listyle_4">
                        <label class="mt5 left bordernone">DES Key：</label>
                        <h1 class="cmxformh1"> <span class="cmxformspan">
                        <input id="desKey_" type="password" name="desKey" value="" class="wid350" />
                        <span style="color: gray;font-size: 12px">密码长度8位</span></span></h1>
                      </li>
                      <li class="listyle_4">
                        <label class="mt5 left bordernone">接入IP：</label>
                        <h1 class="cmxformh1"> <span class="cmxformspan">
                          <input id="appIp_" type="text" name="appIp" value="" class="wid350" />
                        <span style="color: gray;font-size: 12px">多个IP请用","相隔</span></span></h1>
                      </li>
                </ol>
                <!--ol 结束-->               
              </fieldset>
            </form>
          </div>

        <!--框内内容 结束-->
              <div class="toolbar">
       	<a href="#" class="sexybutton" onclick="onFormSubmit();return false"><span><span>保存</span></span></a> 
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>重置 </span></span></a>
        <a href="#" class="sexybutton" onclick="history.back();"><span><span>返回</span></span></a>        </div>
            <!--按钮 开始-->  
 
              <form method="post" action="/cms/site/list.do" id="CmsSiteList">
        <div class="eXtremeTable">
            
        </div>
        </form>
              </div>
            <!--按钮 结束-->  
    	<!--主体 结束-->
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
