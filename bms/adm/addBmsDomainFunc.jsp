<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/c.tld" prefix="c" %>

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

		function $(id){
			return document.getElementById(id);
		}
		
		function onFormSubmit()
		{	
			//��֤����Ϊ0ʱ����֤0:id--1:����--2������--3����Ϊ��--4�������пո�
			var str= new Array(new Array(),new Array());
			str[0]=['code_','Ȩ�ޱ���',32,1];
			str[1]=['datafuncName_','Ȩ������',256,1,1];
			str[2]=['domainname_','�����ֵ�',0,1];
			str[3]=['funcName_','��������',0,1];
			str[4]=['desc_','����',256];
			var bool=checkStr(str);
			if(!bool){
				return false;
			}
			if(!/^\w+$/g.test(document.getElementById("code_").value))
			{
				alert("Ȩ�ޱ����ʽ����ȷ��");
				return false;
			}
			document.frmApply.submit();
		}
		
	function showSelDiv(n,showMain)
	{
		//�ӳټ���
		$("mainDiv").style.display = showMain?"block":"none";
		$(n).style.display = showMain?"none":"block";
	}
	
	function showDomain(){
		var uri="${pageContext.request.contextPath}/bms/domain/bmsdomain/selDomain.do";
		if($('selFrameDomain').src!=uri){
			$('selFrameDomain').src=uri;
		}
		showSelDiv('domainDiv',false);
	}
	
	function showFunc(){
		var uri="${pageContext.request.contextPath}/bms/adm/selRscFunc.jsp";
		if($('selFrameFunc').src!=uri){
			$('selFrameFunc').src=uri;
		}
		showSelDiv('funcDiv',false);
	}
	
	function selDomainSuc(id,name)
	{
		$("domainid_").value = id;
		$("domainname_").value = name;
		showSelDiv('domainDiv',true);
	}
	
	function selFuncSuc(id,name)
	{
		$("funcName_").value = name;
		$("funcId_").value = id;
		showSelDiv('funcDiv',true);
	}
	
	function rbutton()
	{
	    document.getElementById("rbid_").click();
	}
	</script>
<body class="overfwidth">
<div id="mainDiv">
<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > ����Ȩ�� > ��������Ȩ��</div>
	<!--���� ��ʼ-->
    <div id="container">
    	<!--��ť ��ʼ-->  
      <div class="toolbar">
       	<a href="#" class="sexybutton" onclick="onFormSubmit();return false"><span><span>����</span></span></a>  
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
        <a href="${pageContext.request.contextPath}/bms/adm/bmsdomainfunc/queryBmsDomainFunc.do" class="sexybutton"><span><span>����</span></span></a>

        </div>
        <!--��ť ����-->  
        <!--�������� ��ʼ-->
          <div class="editspace">
            <form name="frmApply" class="cmxform"
								action="${pageContext.request.contextPath}/bms/adm/bmsdomainfunc/addBmsDomainFunc.do"
								target="hideframe" method="post">
              <fieldset>
                <legend>����Ȩ������</legend>
                <!--ol ��ʼ-->
                <ol>
                  <li class="listyle_4">
                    <input name="Button5223" type="reset" id="rbid_" value="����" style="display: none;">
                    <label class="left pt5"><em>*</em>Ȩ�ޱ��룺</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="code_" class="bgw" name="code" value="" />
                      <em>����ĸ�����ֺ��»������</em>
                    </span></h1>
                  </li>
                </ol>
                <!--ol ��ʼ-->
                <ol>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>Ȩ�����ƣ�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="datafuncName_" class="bgw" name="datafuncName" value="" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>�����ֵ䣺</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="domainname_" type="text" class="bgw" disabled="disabled" name="domainname" value="" readonly="readonly"/>
                      <input id="domainid_" type="hidden" name="domainid" value="" readonly="readonly"/>
                    <a href="javascript:showDomain();"><img align="absmiddle" class="hand" src="${pageContext.request.contextPath}/images1.6/2j13.gif"></a>
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>�������ܣ�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="funcName_" type="text" class="bgw" disabled="disabled" name="funcName" value="" readonly="readonly"/>
					  <input id="funcId_" type="hidden" name="funcId" value=""/>
                    <a href="javascript:showFunc();"><img align="absmiddle" class="hand" src="${pageContext.request.contextPath}/images1.6/2j13.gif"></a>
                    </span></h1>
                  </li>
                  <!-- li class="listyle_4">
                    <label class="left pt5">�б�Ȩ�ޣ�</label>
                    <span class="cmxformspan">
                      <domain:radioDomain domain="YORN" name="isList" uid="isList_"
									value="1" />
                    </span> </li  -->
                      <li class="listyle_4">
                    <label class="left pt5">�Ƿ����ã�</label>
                    <span class="cmxformspan">
                    <!-- input type="radio"  name="radio1">
                      ��
                      <input type="radio"  name="radio1">
                      ��  -->
                      <domain:radioDomain domain="YORN" name="flag" uid="flag_"
									value="1" />
                    </span> </li>
                </ol>
                <!--ol ����-->
                <!--ol ��ʼ-->
                <ol>
                  <li class="listyle_4 bordernone">
                    <label class="left pt5">������</label>
                    <textarea name="desc" id="desc_" cols="80" rows="3"></textarea>
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
       	<a href="#" class="sexybutton" onclick="onFormSubmit();return false"><span><span>����</span></span></a> 
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
        <a href="${pageContext.request.contextPath}/bms/adm/bmsdomainfunc/queryBmsDomainFunc.do" class="sexybutton"><span><span>����</span></span></a>
      </div>
            <!--��ť ����-->  
  </div>
    	<!--���� ����-->
</div>
		<div id="domainDiv" style="display: none">
			<iframe id="selFrameDomain" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
		</div>
		
		<div id="funcDiv" style="display: none; text-align: center;height: 500px">
			<iframe id="selFrameFunc" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
		</div>
		
		<!-- �����ύ���򣬲���ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
