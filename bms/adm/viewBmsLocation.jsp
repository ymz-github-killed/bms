<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
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
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
	function del()
	{
		if(confirm('��ȷʵҪɾ���ò���ô��')==true)
		{
			hideframe.location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/deleteLocation.do';
		}
	}		
		</script>
<body class="overfwidth">
<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > ���Ź��� > �鿴������Ϣ</div>

<div class="workspace1 left" style="padding-left:20px;">
<div class="editspace">
	<form method="post" class="cmxform" target="hideframe">
        <fieldset>
        <legend>������Ϣ</legend>
        <ol>  
            <li>
            <table width="100%" cellspacing="0" cellpadding="0" border="0" class="table">
                    <tbody>
                      <tr>
                        <td width="17%" height="30" align="right">�������ƣ�</td>
                        <td width="83%" align="left">${m.name}</td>
                      </tr>
                      <tr>
                        <td height="30" align="right">����������</td>
                        <td align="left">${m.remark}</td>
                      </tr>
                      <tr>
                        <td height="30" align="right">�㼶�ṹ��</td>
                        <td height="30" align="left">${m.stepinfo}</td>
                      </tr>
                      <tr>
                        <td height="30" align="right" style="border: 0pt none;">${locationname}��</td>
                        <td height="30" style="border: 0pt none;" align="left">${m.applyid}</td>
                      </tr>
                    </tbody>
                  </table>
            </li>            
        </ol>
        </fieldset>
        </form>
        </div>
<%
	if (request.getAttribute("canVisit") != null)
	{
%>
        <div class="toolbar mb10">
       	<a class="sexybutton" href="#" 
       	onClick="MM_goToURL('self','${pageContext.request.contextPath}/bms/adm/bmslocation/beforeEditLocation.do');return document.MM_returnValue">
       	<span><span>�༭</span></span></a> 
        <a class="sexybutton" href="#"
        onClick="MM_goToURL('self','${pageContext.request.contextPath}/bms/adm/bmslocation/beforeAddLocation.do');return document.MM_returnValue">
        <span><span>�����¼�����</span></span></a>
        <a class="sexybutton" onClick="return del();" href="#">
        <span><span>ɾ��</span></span></a>        </div>
        <iframe name="" frameborder="0" height="600px;" width="100%" src="${pageContext.request.contextPath}/bms/adm/bmslocation/listBmsLocationView.do?id=${m.id}"></iframe>
<%
	}
%>
         

 
        <!--�������� ����-->
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
