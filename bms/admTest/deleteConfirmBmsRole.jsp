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
		<link href="${pageContext.request.contextPath}/css/yh.css"
			rel="stylesheet" type="text/css">

		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript">
			function btn_del_click()
			{
				hideframe.location.href="${pageContext.request.contextPath}/bms/adm/bmsrole/deleteBmsRole.do";
			}
		</script>
	</head>
	<body style="font-size: 12px;">
		<div style="text-align: left; background: #f0f0f0; padding: 5px;">
			��ȷ��Ҫɾ����������ô��
			<input name="Button22" type="button" class="button5" value="ɾ��"
				onclick="btn_del_click()" />
			<input name="Button22" type="button" class="button5" value="����"
				onclick="location.href='${pageContext.request.contextPath}${ATX_.context.backUrlStore}'"
				style="width: 60px;" />
		</div>

		<ec:table items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" filterable="false"
			showPagination="false">
			<ec:row>
				<ec:column title="��ɫ����" property="name">
				</ec:column>
				<ec:column title="��������" property="tbTBmsLocationDTO.name"
					alias="locationName" />
				<ec:column title="��ע" property="remark"></ec:column>
			</ec:row>
		</ec:table>
		<!-- �����ύ���ţ�����ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
