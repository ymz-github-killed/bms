<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>deleteConfirm</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript">
			function btn_del_click()
			{
				hideframe.location.href="${pageContext.request.contextPath}/bms/adm/bmsauditlog/deleteBmsAuditlog.do";
			}
		</script>
	</head>
	<body style="font-size:12px;">
		<div style="text-align: left; background: #f0f0f0; padding: 5px;">
			��ȷ��Ҫɾ����������ô��
			<a href="#" onclick="btn_del_click()">ɾ��</a>
			<a href="${pageContext.request.contextPath}/bms/adm/bmsauditlog/queryBmsAuditlog.do">����</a>
		</div>
	
		<ec:table items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" filterable="false" showPagination="false">
			<ec:row>
				<ec:column title="Ӧ�ñ�ʶ" property="appCode" />

				<ec:column title="��������" property="operateDesc" />

				<ec:column title="����URL" property="url" />

				<ec:column title="����ʵ��" property="operateEntry" />

				<ec:column title="�����û�" property="userName" />

				<ec:column title="������ip��ַ" property="serviceIp" />

				<ec:column title="��������" property="operateName" />

				<ec:column title="����ʱ��" property="operateDate" />

				<ec:column title="�Ƿ�ɹ�" property="sucessful" />

				<ec:column title="������IP" property="clientIp" />

			</ec:row>
		</ec:table>
		<!-- �����ύ���򣬲���ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
