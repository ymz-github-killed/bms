<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="/WEB-INF/tld/view.tld" prefix="view"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>

<head>
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<title>����ʧ����Ϣ</title>
</head>
<body class="overfwidth">
<div id="mainDiv">
 <div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > �û����� > �����û� > ������Ϣ</div>
	<!--���� ��ʼ-->
    <div id="container">
    	<div class="overf pt5 pb5">
            <a href="${pageContext.request.contextPath}/bms/adm/importUser.jsp" class="sexybutton"><span><span>����</span></span></a>
         </div>
         <div class="editspace">
            <form name="frmApply" class="cmxform"
							action="" method="post"">
				<table width="98%"  border="1" align="center" cellpadding="5" cellspacing="0" class="table_blog">
				  <tr align="center"> 
				    <th colspan="7" align="left" >�û���Ϣ����</th>
				  </tr>
				  <tr>
				  	<td width="13%" align="center" bgcolor="#FFFDDF">����</td>
				    <td width="13%" align="center" bgcolor="#FFFDDF">������Ϣ</td>
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
