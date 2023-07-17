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
			//增加事件监听机制:修改后提示保存
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
								<span class="font_blue_title">您所在的位置：系统管理子系统 &gt; 部门管理</span>
								<span class="font_blue_title">&gt; 编辑可访问该部门的用户列表</span>
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
										title="注意 :: 本按钮仅提交当前页中您选中的用户记录，不包含您在前一页中选中的用户记录" value="提交"
										onClick="sumitsels();">
									<input name="Button222325232322" type="button" class="button5"
										value="返回"
										onClick="location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=${param.id}'">

								</div>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<br />
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
