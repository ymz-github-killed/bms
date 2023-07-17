<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>

<%@ include file="/bms/adm/commonHeader.jsp"%>
<html>
<head>
<link
	href="${pageContext.request.contextPath}/css/extremecomponents.css"
	type="text/css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/template.css"
	type="text/css" rel="stylesheet">

<script type="text/javascript">
			function getChecks(name)
			{
				var re = new Array();
				var ck = document.getElementsByName(name);
				for(var i=0; i<ck.length; i++)
				{
					if(ck[i].checked)
					{
						re.push(ck[i].value);
					}
				}
				return re;
			}
			
		function submitForm()
		{
					id = getChecks("ckids").join(",");
					if(id == "")
					{
						alert("��ѡ��һ���������¼!");
						return;
					}
					
					document.getElementById("hiddenSelUsers").value = id;
					document.getElementById("submitform").submit();
		}	 
</script>
</head>
<body
	style="font-size: 12px; margin: 0px; padding: 0px; border: 2px solid inset;">

	<form method="post" action="${pageContext.request.contextPath}/bms/adm/bmsrole/saveOrUpdateRoleUsers.do" id="submitform">
		<input type="hidden" name="roleid" value="${param.roleid}" />
		<input type="hidden" id="hiddenSelUsers" name="users" value="" />
	</form>
	
	<table width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td height="25" bgcolor="#DDFAFE">
				&nbsp;&nbsp;
				<span class="font_blue_title">�����ڵ�λ�ã���ɫ����&gt;&gt;���ӽ�ɫ��Ӧ���û�:</span>
			</td>
			<td height="25" bgcolor="#DDFAFE">
				<input name="Button5222" type="button" onclick="submitForm();" class="button5" value="�ύ"
					style="width: 60px" />
				<input name="Button22" type="button" class="button5" value="����"
					onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsrole/listRoleUsers.do?roleid=${param.roleid}'"
					style="width: 60px;" />

			</td>
		</tr>
	</table>
	<ec:table tableId="notCheckedUserList" method="post"
		items="notCheckedUserList" var="m" action=""
		imagePath="${pageContext.request.contextPath}/images/table/*.gif"
		width="98%" rowsDisplayed="5" view="compact"
		autoIncludeParameters="false">
		<ec:row>
			<ec:column title="��ʵ����" property="userRealName"
				headerCell="selectAll" alias="ckids">
				<input type="checkbox" name="ckids" value="${m.id}" />${m.userRealName}
				</ec:column>
			<ec:column title="��½��" property="userLoginName" />
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
