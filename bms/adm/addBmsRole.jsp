<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript"
	src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/strCheck.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
<!--
	function beforeSubmit()
	{
		var str= new Array(new Array(),new Array());
		str[0]=['userLoginName_','��ɫ����',50,1,1];
		str[1]=['locationName_','��������',50,1];
		str[2]=['remark_','����',200];
		var bool=checkStr(str);
		if(!bool){
			return false;
		}
		document.frmApply.submit();
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
		$("mainDiv").style.display = showMain?"block":"none";
		$(n).style.display = showMain?"none":"block";
	}
	
	function selLocationSuc(id,name)
	{//ѡ���ŵĻص�����
		$("locationName_").value = name;
		$("locationid_").value = id;
		showSelDiv('locationDiv',true);
	}
	function rbutton()
	{
	    document.getElementById("rbid_").click();
	}
//-->
</script>
<body class="overfwidth">
<div id="mainDiv">
<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > ��ɫ���� > ������ɫ</div>
	<!--���� ��ʼ-->
    <div id="container">
    	<!--��ť ��ʼ-->  
 <div class="toolbar">
        <a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>����</span></span></a>    
		<a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
        	<a href="${pageContext.request.contextPath}/bms/adm/bmsrole/queryBmsRole.do" class="sexybutton" ><span><span>����</span></span></a> 
               </div>
        <!--��ť ����-->  
        <!--�������� ��ʼ-->
          <div class="editspace">
            <form name="frmApply" class="cmxform"
							action="${pageContext.request.contextPath}/bms/adm/bmsrole/addBmsRole.do"
							target="hideframe" method="post"
							onsubmit="return beforeSubmit(this);">
              <fieldset>
                <!--ol ��ʼ-->
                <ol>
                  <li class="listyle_4">
                    <input name="Button5223" type="reset" id="rbid_" value="����" style="display: none;">
                    <label class="left pt5"><em>*</em>��ɫ���ƣ�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="userLoginName_" class="bgw" name="name" value="${m.userLoginName}" />
                    </span></h1>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>�������ţ�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" id="locationName_" class="bgw" readonly="readonly"
									value="${m.tbTBmsLocationDTO.name}" />
					  <input id="locationid_" type="hidden" name="locationid"
									value="${m.tbTBmsLocationDTO.id}" />
                    <a href="javascript:selLocation();"><img align="absmiddle" class="hand" src="${pageContext.request.contextPath}/images1.6/2j13.gif"></a>
                    </span>
				</h1>
                  </li>
                 <li class="listyle_4 bordernone">
                    <label class="left pt5">������</label>
                    <textarea name="remark" id="remark_" cols="80" rows="3">${m.remark}</textarea>
                  </li>
                </ol>
                <!--ol ����-->               
              </fieldset>
            </form>
          </div>
      <div class="toolbar">
        <a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>����</span></span></a>    
       <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
        <a href="${pageContext.request.contextPath}/bms/adm/bmsrole/queryBmsRole.do" class="sexybutton"><span><span>����</span></span></a>
               </div>
              </div>
</div>
<div id="locationDiv" style="display: none; text-align: center;">
		<iframe src="${pageContext.request.contextPath}/bms/adm/bmscommon/selLocation.do" id="bmsLocation" width="100%" height="100%" frameborder="0" scrolling="yes"></iframe>
	</div>
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>