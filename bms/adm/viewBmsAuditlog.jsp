<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic" %>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@page import="com.sinovatech.bms.adm.model.dto.TBmsAuditlogDTO"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<meta name=generator content="MSHTML 8.00.6001.18939">
<%
	TBmsAuditlogDTO dto=(TBmsAuditlogDTO)request.getAttribute("m");
	String operDate=dto.getOperateDate().toString().substring(0,19);
 %>
<body class="overfwidth">

<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > ��־���� > �鿴��־</div>
<div id="workspace">
	<!--���� ��ʼ-->
    <div id="container">
    	<div class="overf pt5 pb5">
            <a href="${pageContext.request.contextPath}/bms/adm/bmsauditlog/queryBmsAuditlog.do" class="sexybutton"><span><span>����</span></span></a> 
        </div>
    	<!--��ť ��ʼ-->  
        <!--��ť ����-->  
        <!--�������� ��ʼ-->
          <div class="editspace">
          <form name="formName" method="post" class="cmxform" action="" id="">
        <fieldset>
        <ol>  
            <li>
            <table width="100%" cellspacing="0" cellpadding="0" border="0" class="table">
            <tbody><tr>
                <td width="17%" height="30" align="right">����Ӧ�ã�</td>
                <td width="83%">${m.appCode}</td>
            </tr>
            <tr>
                <td height="30" align="right">�����û���</td>
                <td>${m.userName}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">����ʵ�壺</td>
                <td width="83%">${m.operateEntry}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">�������ƣ�</td>
                <td width="83%">${m.operateName}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">����URL��</td>
                <td width="83%">${m.url}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">������IP��ַ��</td>
                <td width="83%">${m.serviceIp}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">������IP��</td>
                <td width="83%">${m.clientIp}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">����ʱ�䣺</td>
                <td width="83%">
                <%=operDate %>
                </td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">�Ƿ�ɹ���</td>
                <td width="83%">${m.sucessful==1?"��":"��"}</td>
            </tr>
            <!--  tr>
                <td valign="top" align="right" style="border:0">����������</td>
                <td class="lineh16" style="border:0">${m.operateDesc}</td>
            </tr  -->
            </tbody></table>
            </li>            
        </ol>
        </fieldset>
        </form>
        </div>

        <!--�������� ����-->
            <!--��ť ��ʼ-->  
            <div class="toolbar">
       	<a href="${pageContext.request.contextPath}/bms/adm/bmsauditlog/queryBmsAuditlog.do" class="sexybutton"><span><span>����</span></span></a> 
      </div>
            <!--��ť ����-->  
  </div>
    	<!--���� ����-->
</div>
</body>
</html>
