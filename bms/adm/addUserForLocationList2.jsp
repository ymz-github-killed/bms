<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>

<ec:table title="������û��б�" tableId="BmsUserExList2" method="post" items="list" var="m"
	action="${pageContext.request.contextPath}/bms/adm/bmslocation/listSelectedUser.do?id=${param.id}"
	imagePath="${pageContext.request.contextPath}/images/table/*.gif"
	width="98%" rowsDisplayed="10" view="compact" onInvokeAction="submitForm('BmsUserExList2','list2')"
	autoIncludeParameters="false">
	<ec:row>
		<ec:column title="��¼��" property="userLoginName">
		</ec:column>
		<ec:column title="��ʵ����" property="userRealName" />
		<ec:column title="�Ա�" property="userSex" filterCell="droplist"
			filterOptions="BMSDOMAIN.SEX">
			<domain:viewDomain domain="SEX" value="${m.userSex}" />
		</ec:column>
		<ec:column title="״̬" property="userStatus" filterCell="droplist"
			filterOptions="BMSDOMAIN.dataIsused">
			<domain:viewDomain domain="dataIsused" value="${m.userStatus}" />
		</ec:column>
	</ec:row>
</ec:table>