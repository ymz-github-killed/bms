<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<title>Insert title here</title>
	</head>
	<body>
部门编号:${m.locationid}<br />性别:${m.userSex}<br />真实姓名:${m.userRealName}<br />手机:${m.userMobile}<br />邮件:${m.userEmail}<br />传真:${m.userFax}<br />电话:${m.userPhone}<br />住址:${m.userPosition}<br />登录日期:${m.userDate}<br />状态：1正常，0停用:${m.userStatus}<br />安全密码答案:${m.userPassans}<br />备注:${m.userDesc}<br />登陆密码:${m.userLoginPassword}<br />安全密码问题:${m.userPassque}<br />组织机构编号:${m.deptid}<br />登陆名:${m.userLoginName}<br /><br />
<br />		<ec:table title="用户" items="listTBmsUserRoleDTO" var="mBmsUser" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="PK" property="id">
				</ec:column>
				<ec:column title="部门编号" property="locationid" />
				<ec:column title="性别" property="userSex" />
				<ec:column title="真实姓名" property="userRealName" />
				<ec:column title="手机" property="userMobile" />
				<ec:column title="邮件" property="userEmail" />
				<ec:column title="传真" property="userFax" />
				<ec:column title="电话" property="userPhone" />
				<ec:column title="住址" property="userPosition" />
				<ec:column title="登陆日期" property="userDate" />
				<ec:column title="状态：1正常，0停用" property="userStatus" />
				<ec:column title="安全密码答案" property="userPassans" />
				<ec:column title="备注" property="userDesc" />
				<ec:column title="登陆密码" property="userLoginPassword" />
				<ec:column title="安全密码问题" property="userPassque" />
				<ec:column title="组织机构编号" property="deptid" />
				<ec:column title="登陆名" property="userLoginName" />
			</ec:row>
		</ec:table>
<br />
<br />
		<ec:table title="用户" items="listTBmsUserLocationsDTO" var="mBmsUser" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="PK" property="id">
				</ec:column>
				<ec:column title="部门编号" property="locationid" />
				<ec:column title="性别" property="userSex" />
				<ec:column title="真实姓名" property="userRealName" />
				<ec:column title="手机" property="userMobile" />
				<ec:column title="邮件" property="userEmail" />
				<ec:column title="传真" property="userFax" />
				<ec:column title="电话" property="userPhone" />
				<ec:column title="住址" property="userPosition" />
				<ec:column title="登陆日期" property="userDate" />
				<ec:column title="状态：1正常，0停用" property="userStatus" />
				<ec:column title="安全密码答案" property="userPassans" />
				<ec:column title="备注" property="userDesc" />
				<ec:column title="登陆密码" property="userLoginPassword" />
				<ec:column title="安全密码问题" property="userPassque" />
				<ec:column title="组织机构编号" property="deptid" />
				<ec:column title="登陆名" property="userLoginName" />
			</ec:row>
		</ec:table>
<br />
<br />
	</body>
</html>
