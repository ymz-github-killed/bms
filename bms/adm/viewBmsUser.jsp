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
���ű��:${m.locationid}<br />�Ա�:${m.userSex}<br />��ʵ����:${m.userRealName}<br />�ֻ�:${m.userMobile}<br />�ʼ�:${m.userEmail}<br />����:${m.userFax}<br />�绰:${m.userPhone}<br />סַ:${m.userPosition}<br />��¼����:${m.userDate}<br />״̬��1������0ͣ��:${m.userStatus}<br />��ȫ�����:${m.userPassans}<br />��ע:${m.userDesc}<br />��½����:${m.userLoginPassword}<br />��ȫ��������:${m.userPassque}<br />��֯�������:${m.deptid}<br />��½��:${m.userLoginName}<br /><br />
<br />		<ec:table title="�û�" items="listTBmsUserRoleDTO" var="mBmsUser" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="PK" property="id">
				</ec:column>
				<ec:column title="���ű��" property="locationid" />
				<ec:column title="�Ա�" property="userSex" />
				<ec:column title="��ʵ����" property="userRealName" />
				<ec:column title="�ֻ�" property="userMobile" />
				<ec:column title="�ʼ�" property="userEmail" />
				<ec:column title="����" property="userFax" />
				<ec:column title="�绰" property="userPhone" />
				<ec:column title="סַ" property="userPosition" />
				<ec:column title="��½����" property="userDate" />
				<ec:column title="״̬��1������0ͣ��" property="userStatus" />
				<ec:column title="��ȫ�����" property="userPassans" />
				<ec:column title="��ע" property="userDesc" />
				<ec:column title="��½����" property="userLoginPassword" />
				<ec:column title="��ȫ��������" property="userPassque" />
				<ec:column title="��֯�������" property="deptid" />
				<ec:column title="��½��" property="userLoginName" />
			</ec:row>
		</ec:table>
<br />
<br />
		<ec:table title="�û�" items="listTBmsUserLocationsDTO" var="mBmsUser" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="PK" property="id">
				</ec:column>
				<ec:column title="���ű��" property="locationid" />
				<ec:column title="�Ա�" property="userSex" />
				<ec:column title="��ʵ����" property="userRealName" />
				<ec:column title="�ֻ�" property="userMobile" />
				<ec:column title="�ʼ�" property="userEmail" />
				<ec:column title="����" property="userFax" />
				<ec:column title="�绰" property="userPhone" />
				<ec:column title="סַ" property="userPosition" />
				<ec:column title="��½����" property="userDate" />
				<ec:column title="״̬��1������0ͣ��" property="userStatus" />
				<ec:column title="��ȫ�����" property="userPassans" />
				<ec:column title="��ע" property="userDesc" />
				<ec:column title="��½����" property="userLoginPassword" />
				<ec:column title="��ȫ��������" property="userPassque" />
				<ec:column title="��֯�������" property="deptid" />
				<ec:column title="��½��" property="userLoginName" />
			</ec:row>
		</ec:table>
<br />
<br />
	</body>
</html>
