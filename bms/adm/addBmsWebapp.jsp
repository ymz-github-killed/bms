<%@ page language="java" contentType="text/html; charset=GBK"%>

<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
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
			str[0]=['auditClsname_','Ӧ�ñ���',255,1,1];
			str[1]=['appName_','Ӧ������',255,1];
			str[2]=['appUrl_','URL����',255,1];
			str[3]=['appDesc_','���',1024];
			str[4]=['desKey_','DES Key',255];
			str[5]=['appIp_','����IP',256];
			var bool=checkStr(str);
			if(!bool){
				return false;
			}
			if(!/^\w+$/g.test(document.getElementById("auditClsname_").value))
			{
				alert("Ӧ�ñ����ʽ����ȷ��");
				return false;
			}
			if(document.getElementById("desKey_").value!="" && document.getElementById("desKey_").value.length!=8)
			{
				alert("���볤��Ϊ8λ!");
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

<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > �ⲿӦ�� > �����ⲿӦ��</div>
<div id="workspace">
	<!--���� ��ʼ-->
    <div id="container">
    	<!--��ť ��ʼ-->  
<div class="toolbar">
       	<a href="#" class="sexybutton" onclick="onFormSubmit();return false"><span><span>����</span></span></a> 
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
        <a href="#" class="sexybutton" onclick="history.back();"><span><span>����</span></span></a>        </div>
        <!--��ť ����-->   
        <!--�������� ��ʼ-->
          <div class="editspace">
            <form class="cmxform" name="form1" 
			action="${pageContext.request.contextPath}/bms/adm/bmswebapp/addBmsWebapp.do"
			method="post" target="hideframe" onsubmit="">
              <fieldset>
                <!--ol ��ʼ-->
                <ol>
                  <li class="listyle_4">
                    <input name="Button5223" type="reset" id="rbid_" value="����" style="display: none;">
                    <label class="left pt5"><em>*</em>Ӧ�ñ��룺</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="auditClsname_" type="text" name="appCode" class="bgw" />
                      <em>����ĸ�����ֺ��»������</em>
                    </span></h1>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>Ӧ�����ƣ�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="appName_" type="text" name="appName" class="bgw" />
                    </span></h1>
                  </li>
                 <li class="listyle_4">
                    <label class="mt5 left bordernone"><em>*</em>URL���ӣ�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="appUrl_" type="text" name="appUrl" value="" class="wid350" />
                    </span></h1>
                  </li>
                 <li class="listyle_4 bordernone" style="background:none;">
                    <label class="left pt5">��飺</label>
                    <textarea id="appDesc_" name="appDesc" cols="80" rows="3"></textarea>
                  </li>
                  </ol>
               </fieldset>
               <fieldset>
                  <legend>��ȫ����</legend>
                  <ol>
                     <li class="listyle_4">
                        <label class="mt5 left bordernone">DES Key��</label>
                        <h1 class="cmxformh1"> <span class="cmxformspan">
                        <input id="desKey_" type="password" name="desKey" value="" class="wid350" />
                        <span style="color: gray;font-size: 12px">���볤��8λ</span></span></h1>
                      </li>
                      <li class="listyle_4">
                        <label class="mt5 left bordernone">����IP��</label>
                        <h1 class="cmxformh1"> <span class="cmxformspan">
                          <input id="appIp_" type="text" name="appIp" value="" class="wid350" />
                        <span style="color: gray;font-size: 12px">���IP����","���</span></span></h1>
                      </li>
                </ol>
                <!--ol ����-->               
              </fieldset>
            </form>
          </div>

        <!--�������� ����-->
              <div class="toolbar">
       	<a href="#" class="sexybutton" onclick="onFormSubmit();return false"><span><span>����</span></span></a> 
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
        <a href="#" class="sexybutton" onclick="history.back();"><span><span>����</span></span></a>        </div>
            <!--��ť ��ʼ-->  
 
              <form method="post" action="/cms/site/list.do" id="CmsSiteList">
        <div class="eXtremeTable">
            
        </div>
        </form>
              </div>
            <!--��ť ����-->  
    	<!--���� ����-->
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
