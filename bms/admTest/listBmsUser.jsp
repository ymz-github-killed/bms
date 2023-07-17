<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@page import="com.sinovatech.common.config.GlobalConfig"%>
<%@page import="com.sinovatech.bms.adm.model.dto.TBmsUserDTO"%>
<%@page import="com.sinovatech.bms.BmsConsts"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic" %>
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
		<link
			href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript" src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>

		<script type="text/javascript">
			function subForm(){
				
			}
			
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
		
			function btn_delete_click(id)
			{
				var url = "${pageContext.request.contextPath}/bms/adm/bmsuser/beforeDeleteBmsUser.do";
				if(!$chk(id))
				{
					id = getChecks("ckids").join(",");
					if(!$chk(id))
					{
						alert("请选择一条或多条记录!");
						return;
					}
				}
				document.location.href=url + "?ids=" + id;
			}
			
			function btn_add_click()
			{
				var url = "${pageContext.request.contextPath}/bms/adm/bmsuser/beforeAddBmsUser.do";
				document.location.href=url;
			}			
		</script>
	</head>
	<body style="font-size:12px;">
		<div id="toolbar">
			<a href="#" onclick="btn_add_click()">增加</a>
			<a href="#" onclick="btn_delete_click()">删除</a>
		</div>
<br />
					<%
						String superman = GlobalConfig.getProperty("bms","admin");
						String curentUserLoginName = ((TBmsUserDTO)session.getAttribute(BmsConsts.SESSION_USER)).getUserLoginName();					
					%>
		<ec:table tableId="BmsUserExList" method="post" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			<ec:row>
				<ec:column headerCell="selectAll" alias="ckids" width="1%"  filterable="false" sortable="false">
					<%
						String id = ((TBmsUserDTO)pageContext.getAttribute("m")).getUserLoginName();
						if(!superman.equals(id) && !curentUserLoginName.equals(id))
						{ 
					%>
							<input type="checkbox" name="ckids" value="${m.id}" />
					<%
						}
					%>
				</ec:column>
				<ec:column title="登陆名" property="userLoginName">
					<a
						href="${pageContext.request.contextPath}/bms/adm/bmsuser/beforeEditBmsUser.do?id=${m.id}">
						${m.userLoginName} </a>
				</ec:column>
				<ec:column title="真实姓名" property="userRealName" />
				<ec:column title="职位" property="userStation" />
				<ec:column title="性别" property="userSex" filterCell="droplist" filterOptions="BMSDOMAIN.SEX">
					<domain:viewDomain domain="SEX" value="${m.userSex}"/>
				</ec:column>
				<ec:column title="所属部门" property="tbTBmsLocationDTO.name" alias="locationName" />
				<ec:column title="状态" property="userStatus"  filterCell="droplist" filterOptions="BMSDOMAIN.dataIsused">
					<domain:viewDomain domain="dataIsused" value="${m.userStatus}"/>
				</ec:column>
				<ec:column title="操作" property="EEE" sortable="false"
					filterable="false">
					<a
						href="${pageContext.request.contextPath}/bms/adm/bmsuser/beforeEditBmsUser.do?id=${m.id}">编辑</a>
					<logic:notEqual value="<%=superman%>" name="m" property="userLoginName">
					
						<a
							href="javascript:btn_delete_click('${m.id}')">删除</a>
						<a
							href="javascript:location.href='${pageContext.request.contextPath}/bms/adm/bmsuser/selCanVisitLocation.do?userid=${m.id}';">可管理部门</a>
					</logic:notEqual>
				</ec:column>
			</ec:row>
		</ec:table>
<br />
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
