<%@page contentType="application/vnd.ms-excel;charset=GBK" %>
<%@ page import="java.util.ArrayList" %>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="/WEB-INF/tld/struts-html.tld" prefix="html" %>
<%@ taglib uri="/WEB-INF/tld/struts-bean.tld" prefix="bean"%>
<%@ taglib uri="/WEB-INF/tld/c.tld" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ page import= "java.text.DecimalFormat"%>

	<% 
	   String fileName = "auditlog";
	   fileName=(new String(fileName.getBytes("gbk"),"iso8859-1"));
	   response.setHeader("Content-disposition","attachment; filename="+fileName+".xls"); 
	%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
<title>Insert title here</title>
</head>
<body>

<table width="98%"  border="1" align="center" cellpadding="5" cellspacing="0" class="table_blog">
  <tr align="center">
    <th colspan="7" align="left" >日志信息</th>
  </tr>
  <tr>
  	<td width="13%" align="center" bgcolor="#FFFDDF">所属应用</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">操作对象</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">操作名称</td>
    <td width="20%" align="center" bgcolor="#FFFDDF">操作用户</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">服务器IP</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">操作者IP</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">是否成功：1是0否</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">操作URL</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">操作时间</td>
  </tr>
  <logic:notEmpty name="list" scope="request">
		<logic:iterate id="m" name="list"
			type="com.sinovatech.bms.adm.model.dto.TBmsAuditlogDTO">
		<tr>
			<td align="center">${m.appCode}</td>
			<td align="center">${m.operateEntry}</td>
			<td align="center">${m.operateName}</td>
			<td align="center">${m.userName}</td>
			<td align="center">${m.serviceIp}</td>
			<td align="center">${m.clientIp}</td>
			<td align="center">${m.sucessful==1?"是":"否" }</td>
			<td align="center">${m.url}</td>
			<td align="center">'<fmt:formatDate value="${m.operateDate}" type="both"/></td>
		</tr>
		</logic:iterate>
	</logic:notEmpty>
</table>

</body>
</html>