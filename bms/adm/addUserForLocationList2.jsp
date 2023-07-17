<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>

<ec:table title="已添加用户列表" tableId="BmsUserExList2" method="post" items="list" var="m"
	action="${pageContext.request.contextPath}/bms/adm/bmslocation/listSelectedUser.do?id=${param.id}"
	imagePath="${pageContext.request.contextPath}/images/table/*.gif"
	width="98%" rowsDisplayed="10" view="compact" onInvokeAction="submitForm('BmsUserExList2','list2')"
	autoIncludeParameters="false">
	<ec:row>
		<ec:column title="登录名" property="userLoginName">
		</ec:column>
		<ec:column title="真实姓名" property="userRealName" />
		<ec:column title="性别" property="userSex" filterCell="droplist"
			filterOptions="BMSDOMAIN.SEX">
			<domain:viewDomain domain="SEX" value="${m.userSex}" />
		</ec:column>
		<ec:column title="状态" property="userStatus" filterCell="droplist"
			filterOptions="BMSDOMAIN.dataIsused">
			<domain:viewDomain domain="dataIsused" value="${m.userStatus}" />
		</ec:column>
	</ec:row>
</ec:table>