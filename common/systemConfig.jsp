<%@ page language="java"  contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/c.tld" prefix="c" %>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/yh.css">
<html>
<head>
<style>
.table_new_style table{ border-top:1px solid #3366CC; border-left:1px solid #3366CC;}
.table_new_style td{ border-bottom:1px solid #3366CC; border-right:1px solid #3366CC; padding-left:5px; line-height:25px;}
.table_new_style th{ background:#CCCCCC;border-bottom:1px solid #3366CC;border-right:1px solid #3366CC;  line-height:25px;}

</style>
</head>
<body>
<div>
	<c:forEach items="${applications}" var="item">
		<a href="show?app=${item}">${item}</a>&nbsp;
	</c:forEach>
</div>
<form accept-charset="GBK" name="form" action="${pageContext.request.contextPath}/systemConfig/save?app=${app}" method="post">

<table class="forumline" cellspacing="1" cellpadding="3" width="100%" border="1">
<tr>
	<th class="thhead" valign="middle" colspan="2" height="25">系统参数设置</th>
</tr>
<c:forEach items="${groups}" var="group">
	<tr>
		<td class="catsides" height="30" colspan="2"><span class="gen" style="color: blue;size: 30"><b>${group.name}</b></span></td>
	</tr>

	<c:forEach items="${group.properties}" var="property">
	<tr>
		<td class="row2" width="15%"><span class="gen"> ${property.fdName}</span></td>
		<td class="row2" width="40%">${property.fdTypeLabel}<span style="color: blue;">${property.common}</span></td>
	</tr>
	</c:forEach>
</c:forEach>

<tr>
	<th class="thhead" valign="middle" colspan="2" height="25">
	<input type="submit" value="提交">
	</th>
</tr>
</table>
</form>
</body>
</html>