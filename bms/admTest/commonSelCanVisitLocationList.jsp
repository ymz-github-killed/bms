<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>选择部门</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
			<link href="${pageContext.request.contextPath}/css/yh.css" rel="stylesheet" type="text/css">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript"
			src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>

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
		
			function submitSels()
			{
				var chks = getChecks("ckids",true);
				var notChks = getChecks("ckids",false);
				document.hideframe.location.href="${pageContext.request.contextPath}/bms/adm/bmsuser/saveUserLocations.do?chks=" + chks + "&notChks=" + notChks;
			}
		</script>
	</head>
	<body style="font-size: 12px;">
		<br />
		<div id="toolbar" style="text-align: left;font-size: 14px;font-weight: bold;">
			请选择您需要授予该用户访问的部门:
		</div>
		<ec:table tableId="BmsLocationList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" autoIncludeParameters="false">
			<ec:row>
				<ec:column headerCell="selectAll" alias="ckids" property="checked" width="20" filterCell="droplist" filterOptions="BMSDOMAIN.CHECKED">
						<input type="checkbox" name="ckids" ${m.checked?"checked":""} value="${m.id}" />
				</ec:column>
				<ec:column title="部门名称" property="name">
				</ec:column>
				<ec:column title="层次结构" property="stepinfo" />
				<ec:column title="备注" property="remark" />
			</ec:row>
		</ec:table>
		<br />
		<!-- 数据提交部门，不能删除 -->
		<input name="btna" type="button" onclick="submitSels();" class="button5" value="提交授权" />
		<input name="Button22" type="button" class="button5" value="返回"
										onclick="location.href='${pageContext.request.contextPath}${ATX_.context.backUrlStore}'" style="width: 60px;" />

		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
