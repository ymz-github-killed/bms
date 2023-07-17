<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>

<ec:table title="该机构下用户列表" filterable="false"
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