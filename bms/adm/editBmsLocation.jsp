<%@ page contentType="text/html;charset=GBK"%>
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
<script type="text/javascript" src="${pageContext.request.contextPath}/js/strCheck.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
	function beforeSubmit()
	{
		var str= new Array(new Array(),new Array());
		str[0]=['name_','��������',60,1,1];
		str[1]=['applyid_','�����ⲿID',32];
		str[2]=['remark_','��������',1000];
		var bool=checkStr(str);
		if(!bool){
			return false;
		}
		if(document.getElementById("applyid_").value != "")
		{
			var applyid=document.getElementById("applyid_").value;
			var locationname=document.getElementById("locationname").value;
			var oldapplyid=document.getElementById("oldapplyid").value;
			if(applyid!=oldapplyid){
				$.ajax({
   					type: "POST",
   					url: "${pageContext.request.contextPath}/bms/adm/bmslocation/findApplyId.do",
   					dataType:"html",
   					data: "applyid="+applyid,
   					success: function(msg){
	     				if(msg=='no'){
     						alert(locationname+"�Ѵ��ڣ�");
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
	function rbutton()
	{
	    document.getElementById("rbid_").click();
	}
</script>
<body class="overfwidth">
<div class="left">
</div><div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > ���Ź��� > �༭������Ϣ</div>

<div class="workspace1 left" style="padding-left:20px;">
 <div class="toolbar">
       	<a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>����</span></span></a> 
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
        <a href="${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=${m.id }" class="sexybutton"><span><span>����</span></span></a>        
        </div>
<div class="editspace">
            <form name="frmApply" class="cmxform" action="${pageContext.request.contextPath}/bms/adm/bmslocation/editBmsLocations.do" 
            		target="hideframe" method="post">
            	<input id="locationname" type="hidden" value="${locationname}" />
            	<input id="oldapplyid" type="hidden" value="${m.applyid}" />
              <fieldset>
                <!--ol ��ʼ-->
                <ol>
                  <li class="listyle_4">
                    <input name="Button5223" type="reset" id="rbid_" value="����" style="display: none;">
                    <label class="left pt5"><em>*</em>�������ƣ�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" class="bgw" name="name" id="name_" value="${m.name }" />
                    </span></h1>    </li>           
                 <li class="listyle_4 bordernone">
                    <label class="left pt5">����������</label>
                    <textarea name="remark" id="remark_" cols="80" rows="3">${m.remark}</textarea>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5">${locationname}��</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" class="bgw" name="applyid" id="applyid_" value="${m.applyid }" />
                    </span></h1>    </li>
                </ol>
                <!--ol ����-->               
              </fieldset>
            </form>
          </div>
              <div class="toolbar">
       	<a href="#" class="sexybutton" onclick="beforeSubmit();return false"><span><span>����</span></span></a> 
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
        <a href="${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=${m.id }" class="sexybutton"><span><span>����</span></span></a>        
        </div>
        <!--�������� ��ʼ-->
        <!--�������� ����-->
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>

