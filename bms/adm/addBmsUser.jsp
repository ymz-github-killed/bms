<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/passwordRule.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/strCheck.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
<!--
	function beforeSubmit()
	{	
		var str= new Array(new Array(),new Array());
		str[0]=['userLoginName_','��¼��',50,1,1,1,1];
		str[1]=['userLoginPassword_','��¼����',50,1,0,1,1];
		str[2]=['userPassque_','��ȫ��������',100];
		str[3]=['userPassans_','��ȫ�����',100];
		str[4]=['userStation_','ְλ',50,1,1];
		str[5]=['applyid_','Ա������',32];
		str[6]=['userDesc_','��ע',200];
		str[7]=['userRealName_','��ʵ����',20,1];
		str[8]=['userMobile_','�ֻ�',50];
		str[9]=['userPhone_','�绰',50];
		str[10]=['userEmail_','�����ʼ�',100,1];
		str[11]=['userFax_','����',50];
		str[12]=['userPosition_','סַ',200];
		str[13]=['locationName_','��������',0,1];
		var bool=checkStr(str);
		if(!bool){
			return false;
		}
		//������֤
		if(!loginPwd("userLoginName_","userLoginPassword_")){
			return false;
		}
		var userEmail=document.getElementById("userEmail_");
		var userMobile=document.getElementById("userMobile_");
		var userPhone=document.getElementById("userPhone_");
		var userFax=document.getElementById("userFax_");
		
		//if(userEmail.value!=''&&!/^\w+@\*+\.\w+$/g.test(userEmail.value)){
		if(userEmail.value!=''&&!/^[a-zA-Z0-9_+.-]+\@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/g.test(userEmail.value)){
			alert("�����ַ��ʽ���Ϸ�");
			return false;
		}
		
		if(userMobile.value!=''&&!/^1\d{10}$/g.test(userMobile.value)){
			alert("�ֻ������ʽ���Ϸ�");
			return false;
		}
		
		if(userPhone.value!=''&&!/^(\d{2,5}\-){0,2}\d{7,10}$/g.test(userPhone.value)){
			alert("�绰�����ʽ���Ϸ� �� 010-62986876 ");
			return false;
		}
		
		if(userFax.value!=''&&!/^(\d{2,5}\-){0,2}\d{7,10}$/g.test(userFax.value)){
			alert("�����ʽ���Ϸ����� 010-82783603 ");
			return false;
		}
		
		if(document.getElementById("applyid_").value != "")
		{
			var applyid=document.getElementById("applyid_").value;
			var userapplyname=document.getElementById("userapplyname").value;
			var oldapplyid=document.getElementById("oldapplyid").value;
			if(applyid!=oldapplyid){
				$.ajax({
   					type: "POST",
   					url: "${pageContext.request.contextPath}/bms/adm/bmsuser/findApplyId.do",
   					dataType:"html",
   					data: "applyid="+applyid,
   					success: function(msg){
	     				if(msg=='no'){
     						alert(userapplyname+"�Ѵ��ڣ�");
     						return false;
     					}else{
     						document.frmApply.submit();
     					}
   					}
				});
			}else{
				document.frmApply.submit();
			}
		}else{
			document.frmApply.submit();
		}
	}
	
	function selDept()
	{
		showSelDiv("deptDiv",false)
	}
	
	function selLocation()
	{
		showSelDiv("locationDiv",false)
	}
	
	function selVisitLocation()
	{
		showSelDiv("visitLocationDiv",false)
	}
	
	function showSelDiv(n,showMain)
	{
		document.getElementById("mainDiv").style.display = showMain?"block":"none";
		document.getElementById(n).style.display = showMain?"none":"block";
	}
	
	function selLocationSuc(id,name)
	{
		document.getElementById("locationName_").value = name;
		document.getElementById("locationid_").value = id;
		showSelDiv('locationDiv',true);
	}
	function rbutton()
	{
	    document.getElementById("rbid_").click();
	}
//-->
</script>
</HEAD>
<body class="overfwidth">
<div id="mainDiv">
 <div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > �û����� > �����û�</div>
	<!--���� ��ʼ-->
    <div id="container">
    	<div class="overf pt5 pb5">
            <a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>����</span></span></a>
            <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
            <a href="${pageContext.request.contextPath}/bms/adm/bmsuser/queryBmsUser.do" class="sexybutton"><span><span>����</span></span></a>
         </div>
         <!-- input type="reset" value="" style=" background:url(${pageContext.request.contextPath}/images1.6/bao_di.gif); background-repeat:no-repeat; width:48px; height:24px; border:0; color:#666; vertical-align:top"/ -->
    	<!--��ť ��ʼ-->  
        <!--��ť ����-->  
        <!--�������� ��ʼ-->
          <div class="editspace">
            <form name="frmApply" class="cmxform"
							action="${pageContext.request.contextPath}/bms/adm/bmsuser/addBmsUser.do"
							target="hideframe" method="post">
				<input id="userapplyname" type="hidden" value="${userapplyname}" />
            	<input id="oldapplyid" type="hidden" value="${m.applyid}" />
              <fieldset>
                <!--ol ��ʼ-->
                <ol>
                  <li class="listyle_4">
                  	<input name="Button5223" type="reset" id="rbid_" value="����" style="display: none;">
                    <label class="left pt5"><em>*</em>��¼����</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userLoginName_" name="userLoginName" value="${m.userLoginName}" class="bgw" name="input">
                    </span></h1>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>��¼���룺</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="password" id="userLoginPassword_" name="userLoginPassword" value="${m.userLoginPassword}" class="bgw" name="input">
                    <em>���볤��6~16λ�����ַ�ΪӢ�ģ�����������֡�</em></span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5">��ȫ�������⣺</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userPassque_" name="userPassque" value="${m.userPassque}" class="bgw" name="input">
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5">��ȫ����𰸣�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userPassans_" name="userPassans" value="${m.userPassans}" class="bgw" name="input">
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>״̬��</label>
                    <span class="cmxformspan">
                    	<domain:radioDomain domain="dataIsused" name="userStatus"
									uid="userStatus_" value="1" />
                      <!--  input type="radio" name="userStatus" uid="userStatus_" value="1">
                      ����
                      <input type="radio" name="userStatus" uid="userStatus_" value="0" -->
                       </span> </li>
                </ol>
                <!--ol ����-->
                <!--ol ��ʼ-->
                <ol>
                   <li class="listyle_4">
                    <label class="mt5 left"><em>*</em>�������ţ�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="locationName_" class="bgw" disabled="disabled" readonly="readonly"
									value="${m.tbTBmsLocationDTO.name}" />
					  <input id="locationid_" type="hidden" name="locationid"
									value="${m.tbTBmsLocationDTO.id}" />
                    <a href="javascript:selLocation();"><img align="absmiddle" class="hand" src="${pageContext.request.contextPath}/images1.6/2j13.gif" /></a>
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="mt5 left"><em>*</em>ְλ��</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userStation_" class="bgw" name="userStation" value="${m.userStation}" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="mt5 left">${userapplyname}��</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="applyid_" class="bgw" name="applyid" value="${m.applyid}" />
                    </span></h1>
                  </li>
                   <li class="listyle_4 bordernone" style="background:none;">
                    <label class="left pt5">��ע��</label>
                    <textarea id="userDesc_" name="userDesc" cols="80" rows="3">${m.userDesc}</textarea>
                  </li>
                 </ol>
                 </fieldset>
                 <fieldset>
                  <legend>�û���������</legend>
                  <ol>
                  <li class="listyle_4">
                    <label class="mt5 left"><em>*</em>��ʵ������</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userRealName_" class="bgw" name="userRealName"
									value="${m.userRealName}" />
                    </span></h1>
                  </li>
                </ol>
                <!--ol ����-->
                <!--ol ��ʼ-->
                
                <ol>
                  <li class="listyle_4 bordernone">
                    <label class="left pt5">�Ա�</label>
                    <span class="cmxformspan">
                      <!-- input type="radio" name="radio1" value="1">
                      ��
                      <input type="radio" name="radio1" value="0">
                      Ů -->
                      <domain:radioDomain domain="SEX" name="userSex" uid="userSex_"
									value="1" />
                      </span> </li>
                  <li class="listyle_4  bordernone">
                    <label class="left pt5">�ֻ���</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userMobile_" class="bgw" name="userMobile" value="${m.userMobile}" />
                    </span></h1>
                  </li>
                  <li class="listyle_4 bordernone">
                    <label class="left pt5">�绰��</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userPhone_" class="bgw" name="userPhone" value="${m.userPhone}" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="mt5 left bordernone"><em>*</em>�����ʼ���</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userEmail_" class="bgw" name="userEmail" value="${m.userEmail}" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="mt5 left bordernone">���棺</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userFax_" class="bgw" name="userFax" value="${m.userFax}" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="mt5 left bordernone">סַ��</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userPosition_" class="wid350" name="userPosition" value="${m.userPosition}" />
                    </span></h1>
                  </li>
                  
                </ol>
                <!--ol ����-->
                <!--ol ��ʼ-->
              </fieldset>
            </form>
          </div>

        <!--�������� ����-->
            <!--��ť ��ʼ-->  
            <div class="toolbar">
            <a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>����</span></span></a>
            <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
            <a href="${pageContext.request.contextPath}/bms/adm/bmsuser/queryBmsUser.do" class="sexybutton" ><span><span>����</span></span></a>
      </div>
            <!--��ť ����-->  
  </div>
    	<!--���� ����-->
</div>
	<div id="deptDiv" style="display: none; text-align: center;">
		<iframe src="${pageContext.request.contextPath}/bms/adm/bmscommon/selDept.do" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
	</div>
	<div id="locationDiv" style="display: none; text-align: center;">
		<iframe src="${pageContext.request.contextPath}/bms/adm/bmscommon/selLocation.do" width="100%" height="100%" frameborder="0" scrolling="yes"></iframe>
	</div>
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>