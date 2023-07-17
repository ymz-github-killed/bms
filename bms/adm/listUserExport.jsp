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
	   String fileName = "用户信息列表";
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
    <th colspan="7" align="left" >用户信息详情</th>
  </tr>
  <tr>
  	<td width="13%" align="center" bgcolor="#FFFDDF">*登录名</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">*真实姓名</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">*职位</td>
    <td width="20%" align="center" bgcolor="#FFFDDF">*邮件</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">性别:1男0女</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">所属部门id</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">所属部门名称</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">手机</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">传真</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">电话</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">住址</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">登录日期</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">状态:1正常0停用</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">安全密码问题</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">安全密码答案</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">员工工号</td>
    <td width="13%" align="center" bgcolor="#FFFDDF">备注</td>
  </tr>
  <logic:notEmpty name="list" scope="request">
		<logic:iterate id="m" name="list"
			type="com.sinovatech.bms.adm.model.dto.TBmsUserDTO">
		<tr>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userLoginName}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userRealName}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userStation}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userEmail}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userSex}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.tbTBmsLocationDTO.id}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.tbTBmsLocationDTO.name}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userMobile}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userFax}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userPhone}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userPosition}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userDate}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userStatus}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userPassque}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userPassans}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.applyid}</td>
			<td align="center" style="vnd.ms-excel.numberformat:@">${m.userDesc}</td>
		</tr>
		</logic:iterate>
	</logic:notEmpty>
</table>

</body>
</html>