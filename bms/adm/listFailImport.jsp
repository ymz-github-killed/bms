<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="/WEB-INF/tld/view.tld" prefix="view"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>

<head>
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<title>导入失败信息</title>
</head>
<body class="overfwidth">
<div id="mainDiv">
 <div class="barnavtop">您所在的位置：系统管理 > 用户管理 > 导入用户 > 错误信息</div>
	<!--主体 开始-->
    <div id="container">
    	<div class="overf pt5 pb5">
            <a href="${pageContext.request.contextPath}/bms/adm/importUser.jsp" class="sexybutton"><span><span>返回</span></span></a>
         </div>
         <div class="editspace">
            <form name="frmApply" class="cmxform"
							action="" method="post"">
				<table width="98%"  border="1" align="center" cellpadding="5" cellspacing="0" class="table_blog">
				  <tr align="center"> 
				    <th colspan="7" align="left" >用户信息详情</th>
				  </tr>
				  <tr>
				  	<td width="13%" align="center" bgcolor="#FFFDDF">行数</td>
				    <td width="13%" align="center" bgcolor="#FFFDDF">错误信息</td>
				  </tr>
				  <logic:notEmpty name="list" scope="request">
						<logic:iterate id="m" name="list">
						<tr>
							<td align="center">${m[0] }</td>
							<td align="center">${m[1] }</td>
						</tr>
						</logic:iterate>
					</logic:notEmpty>
				</table>
			</form>
		</div>
	</div>
</div>
</body>
