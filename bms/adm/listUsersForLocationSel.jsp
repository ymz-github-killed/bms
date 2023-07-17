<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>listBmsUser</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<link href="${pageContext.request.contextPath}/css/yh.css"
			rel="stylesheet" type="text/css">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript"
			src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>
		<style type="text/css">
.custom-tip {
	color: #000;
	width: 130px;
	z-index: 13000;
	border: 1px solid blue;
}

.custom-title {
	font-weight: bold;
	font-size: 12px;
	margin: 0;
	color: #fff;
	padding: 8px 8px 4px;
	background: #6699cc;
	overflow: visible;;
}

.custom-text {
	font-size: 12px;
	padding: 4px 8px 8px;
	background: #fefefe;
}
</style>
		<script type="text/javascript">
		
			function getChecks(name,ischeck)
			{
				var re = new Array();
				var ck = document.getElementsByName(name);
				for(var i=0; i<ck.length; i++)
				{
					if(ck[i].checked == ischeck)
					{
						re.push(ck[i].value);
					}
				}
				return re;
			}
			function sumitsels(id)
			{
				var chks = getChecks("ckids",true);
				var notChks = getChecks("ckids",false);
				
				var url = "${pageContext.request.contextPath}/bms/adm/bmslocation/saveLocationUser.do";
				document.hideframe.location.href=url + "?chks=" + chks + "&notChks=" + notChks;
			}
			//�����¼���������:�޸ĺ���ʾ����
			window.addEvent('domready', function(){
				new Tips($$('.Tipsshow'), {
					className: 'custom'
				});
			});
		</script>
	</head>
	<body style="font-size: 12px;">
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="25" bgcolor="#DDFAFE">
								&nbsp;&nbsp;
								<span class="font_blue_title">�����ڵ�λ�ã�ϵͳ������ϵͳ &gt; ���Ź���</span>
								<span class="font_blue_title">&gt; �༭�ɷ��ʸò��ŵ��û��б�</span>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>

		<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					
				</td>
				<td>
					
				</td>
			</tr>
		</table>


		<ec:table tableId="BmsUserExList" method="post" items="list" var="m"
			action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact"
			filterRowsCallback="limit" sortRowsCallback="limit"
			retrieveRowsCallback="limit" autoIncludeParameters="false">
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
		<table width="98%" border="0" align="center" cellpadding="0"
			cellspacing="0">
			<tr>
				<td height="20">
					<table width="90%" border="0" align="right" cellpadding="0"
						cellspacing="0">
						<tr>
							<td>
								<div align="left">
									<input name="Button2223252323" type="button"
										class="button5 Tipsshow"
										title="ע�� :: ����ť���ύ��ǰҳ����ѡ�е��û���¼������������ǰһҳ��ѡ�е��û���¼" value="�ύ"
										onClick="sumitsels();">
									<input name="Button222325232322" type="button" class="button5"
										value="����"
										onClick="location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=${param.id}'">

								</div>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<br />
		<!-- �����ύ���ţ�����ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
