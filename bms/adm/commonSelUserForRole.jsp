<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>listBmsUser</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript">
			 	function selUser(name,id)
			 	{
			 		parent.document.getElementById("userName_").value = name;
			 		parent.document.getElementById("userid_").value = id;
			 		parent.selRoleUser(true);
			 	}
		</script>
	</head>
	<body style="font-size: 12px;background: #dedede;">
		<table width="100%" border="0" cellpadding="0" cellspacing="0"
			align="center" style="border: 1px solid #DDFAFE;">
			<tr>
				<td height="25" bgcolor="#DDFAFE" style="font-weight: bold;font-size: 14px;color: blue;">
					<span class="font_blue_title">�����ڵ�λ�ã��û�������ϵͳ &gt; ��ɫ����</span>
					<span class="font_blue_title">&gt; �༭��ɫ:ѡ���ɫӵ�е��û�</span>
				</td>
			</tr>
			<tr>
				<td height="25" bgcolor="#DDFAFE">
					&nbsp;&nbsp;�������¼����ѡ���û���
					&nbsp;&nbsp;<a href="javascript:parent.selRoleUser(true);" style="font-weight: bold;">����</a>
				</td>
			</tr>
			
		</table>
		
		<ec:table tableId="BmsUserExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="��½��" property="userLoginName">
					<a href="javascript:selUser('${m.userRealName}','${m.id}')">
						${m.userLoginName} </a>
				</ec:column>
				<ec:column title="��ʵ����" property="userRealName" />
				<ec:column title="�Ա�" property="userSex" filterCell="droplist"
					filterOptions="BMSDOMAIN.SEX">
					<domain:viewDomain domain="SEX" value="${m.userSex}" />
				</ec:column>
				<ec:column title="��������" property="tbTBmsLocationDTO.name"
					alias="locationName" />
				<ec:column title="״̬" property="userStatus" filterCell="droplist"
					filterOptions="BMSDOMAIN.dataIsused">
					<domain:viewDomain domain="dataIsused" value="${m.userStatus}" />
				</ec:column>
			</ec:row>
		</ec:table>
	</body>
</html>
