<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic" %>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@page import="com.sinovatech.bms.adm.model.dto.TBmsAuditlogDTO"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
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

<div class="barnavtop">您所在的位置：系统管理 > 日志管理 > 查看日志</div>
<div id="workspace">
	<!--主体 开始-->
    <div id="container">
    	<div class="overf pt5 pb5">
            <a href="${pageContext.request.contextPath}/bms/adm/bmsauditlog/queryBmsAuditlog.do" class="sexybutton"><span><span>返回</span></span></a> 
        </div>
    	<!--按钮 开始-->  
        <!--按钮 结束-->  
        <!--框内内容 开始-->
          <div class="editspace">
          <form name="formName" method="post" class="cmxform" action="" id="">
        <fieldset>
        <ol>  
            <li>
            <table width="100%" cellspacing="0" cellpadding="0" border="0" class="table">
            <tbody><tr>
                <td width="17%" height="30" align="right">所属应用：</td>
                <td width="83%">${m.appCode}</td>
            </tr>
            <tr>
                <td height="30" align="right">操作用户：</td>
                <td>${m.userName}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">操作实体：</td>
                <td width="83%">${m.operateEntry}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">操作名称：</td>
                <td width="83%">${m.operateName}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">操作URL：</td>
                <td width="83%">${m.url}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">服务器IP地址：</td>
                <td width="83%">${m.serviceIp}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">操作者IP：</td>
                <td width="83%">${m.clientIp}</td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">操作时间：</td>
                <td width="83%">
                <%=operDate %>
                </td>
            </tr>
            <tr>
                <td width="17%" height="30" align="right">是否成功：</td>
                <td width="83%">${m.sucessful==1?"是":"否"}</td>
            </tr>
            <!--  tr>
                <td valign="top" align="right" style="border:0">操作描述：</td>
                <td class="lineh16" style="border:0">${m.operateDesc}</td>
            </tr  -->
            </tbody></table>
            </li>            
        </ol>
        </fieldset>
        </form>
        </div>

        <!--框内内容 结束-->
            <!--按钮 开始-->  
            <div class="toolbar">
       	<a href="${pageContext.request.contextPath}/bms/adm/bmsauditlog/queryBmsAuditlog.do" class="sexybutton"><span><span>返回</span></span></a> 
      </div>
            <!--按钮 结束-->  
  </div>
    	<!--主体 结束-->
</div>
</body>
</html>
