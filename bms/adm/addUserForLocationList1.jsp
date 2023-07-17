<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>

<ec:table title="�û������û��б�" filterable="false"
	tableId="BmsUserExList1" method="post" items="list" var="m"
	action="${pageContext.request.contextPath}/bms/adm/bmslocation/listUserForSel.do?id=${param.id}"
	imagePath="${pageContext.request.contextPath}/images/table/*.gif"
	width="98%" rowsDisplayed="6" view="compact" onInvokeAction="submitForm('BmsUserExList1','list1')"
	autoIncludeParameters="false">
	<ec:row>
		<ec:column headerCell="selectAll" alias="ckids" width="1%"
			filterable="false" sortable="false">
			<input type="checkbox" name="ckids" value="${m.id}" ${m.checked} />
		</ec:column>
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