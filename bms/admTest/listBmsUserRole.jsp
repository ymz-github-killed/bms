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
			function btn_delete_click(id)
			{
				if(confirm("确认要删除该用户的角色授权么？"))
				{
					var url = "${pageContext.request.contextPath}/bms/adm/bmsrole/deleteRoleUsers.do";
					url += "?id=" + id;
					document.hideframeme.location.href=url;
				}
			}
			
			function btn_defineFunc_click(roleId,uid)
			{
				var url = "${pageContext.request.contextPath}/bms/adm/bmsuserfunc/beforeDefineUserFunc.do";
				url += "?roleId="+roleId+"&uid=" + uid;
				window.parent.location.href=url;
			}
			
			function selRoleUser(b)
			{
				this.location.href="${pageContext.request.contextPath}/bms/adm/bmsrole/listNotCheckedUsers.do?roleid=${roleid}";
			}
			
			function selThisUser(id,name,userid,authadm)
			{
				document.getElementById("userroleid_").value = id;
				document.getElementById("userName_").value = name;
				document.getElementById("userid_").value = userid;
				//document.getElementById("authChilds_").value = authadm;
			}
			
			function checkForm()
			{
				if(document.getElementById("userName_").value == "")
				{
					alert("请选择用户");
					return false;
				}
				return true;
			}
		</script>
</head>
<body style="font-size: 12px; margin: 0px; padding: 0px; border: 0px;">
	<div id="mainDiv">
		<ec:table method="get" autoIncludeParameters="true" tableId="BmsUserRoleExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="100%" style="margin: 0px; padding: 0px; border: 0px;"
			rowsDisplayed="10" view="compact" filterable="false" sortable="false">
			<ec:row highlightRow="true">
				<ec:column title="用户登陆名" property="tbTBmsUserDTO.userLoginName"
					alias="usernmae">
				</ec:column>
				<ec:column title="用户姓名" property="tbTBmsUserDTO.userRealName"
					alias="userrealnmae"></ec:column>
				<%-- 
				<ec:column title="用户是否有二级授权权限" property="authadm"
					filterCell="droplist" filterOptions="BMSDOMAIN.YORN">
					<domain:viewDomain domain="YORN" value="${m.authadm}" />
				</ec:column>
				--%>
				<ec:column title="状态" property="tbTBmsUserDTO.userStatus">
					<domain:viewDomain domain="dataIsused"
						value="${m.tbTBmsUserDTO.userStatus}" />
				</ec:column>
				<ec:column title="操作" property="EEE" sortable="false"
					filterable="false">
					<a style="border-bottom: 1px solid blue;color: blue;" href="javascript:btn_delete_click('${m.id}')">删除</a>
					&nbsp;
					<a style="border-bottom: 1px solid blue;color: blue;" href="javascript:btn_defineFunc_click('${roleid}','${m.tbTBmsUserDTO.id}')">功能权限</a>
				</ec:column>
			</ec:row>
		</ec:table>
		<input name="Button5222" onclick="javascript:selRoleUser(false);" type="button" class="button5" value="增加本角色对应的用户"	style="width: 150px" />
	</div>

	<iframe id="hideframeme" name="hideframeme" width="0" height="0"></iframe>
</body>
</html>
