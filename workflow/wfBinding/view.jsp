<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@ taglib uri="/WEB-INF/tld/c.tld" prefix="c"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<html>
	<head>
		<title>工作流实例流转界面</title>
		<link href="${pageContext.request.contextPath}/css/yh.css"
			rel="stylesheet" type="text/css">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript">
			function flow(entityId,actionId){
				document.getElementById('entityId').value=entityId;
				document.getElementById('actionId').value=actionId;
				document.getElementById('wfBinding').submit();
			}
		</script>
	</head>

	<body>

		<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="25" bgcolor="#DDFAFE">
								&nbsp;&nbsp;
								<span class="font_blue_title">您所在的位置：工作流引擎 &gt; 工单流转</span>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>

		<table width="90%" border="0" cellpadding="0" cellspacing="0" align="left">
			<tr>
				<td height="20">
					&nbsp;
				</td>
			</tr>
			
			<c:if test="${type == '1'}">
			<tr>
				<td>
					<table border="0"  cellpadding="0" width="100%" 
						cellspacing="0" >
						<tr>
							<!-- 可执行动作 -->
							<td bgcolor="#dfdfdf" height="25" class="font_blue_title">
								 可执行操作：
							</td>
						</tr>
						<tr>
							<td height="30">
								&nbsp;&nbsp;<c:forEach items="${actions}" var="c">
									<input type="button" value="${c.name}"
										onClick="flow('${entryId}','${c.id}')" class="button5">
								</c:forEach>
								&nbsp;&nbsp;
							</td>
						</tr>
						<tr>
							<td height="10"></td>
						</tr>
						<!-- 审批意见 -->
						<tr>
							<td bgcolor="#dfdfdf" height="25" class="font_blue_title">
								&nbsp;审批意见：
							</td>
						</tr>
						<tr>
							<td>
								<form
									action="${pageContext.request.contextPath}/workflow/wfBinding/doAction.do"
									method="post" name="wfBinding" id="wfBinding">
									<textarea rows="5" cols="100" name="opinion"></textarea>
									<input type="hidden" name="entityId" id="entityId">
									<input type="hidden" name="actionId" id="actionId">
								</form>

							</td>
						</tr>
					</table>
				</td>
			</tr>
			</c:if>
			
			<tr>
				<td>
					<!-- 历史流程 -->
					<ec:table tableId="curView" method="post" items="curSteps" var="step" filterable="false" 
						action="" showPagination="false" showTooltips="false" showStatusBar="false" title="当前流程信息"
						imagePath="${pageContext.request.contextPath}/images/table/*.gif"
						width="100%" rowsDisplayed="10" view="compact">
						<ec:row>
							<ec:column title="步骤" property="stepName" sortable="false"
								filterable="false" />
							<ec:column title="动作" property="actionName" sortable="false"
								filterable="false" />

							<ec:column title="操作人" property="owner" sortable="false"
								filterable="false" />

							<ec:column title="状态" property="EEE" sortable="false"
								filterable="false">
								<domain:viewDomain domain="WFLOCALDESC" value="${step.status}" />
							</ec:column>

							<ec:column title="开始时间" property="startDate" sortable="false"
								filterable="false" />
							<ec:column title="完成时间" property="finishDate" sortable="false"
								filterable="false" />

							<ec:column title="之前步骤数量" property="previous" sortable="false"
								filterable="false" />

							<ec:column title="审核意见" property="opinion" sortable="false"
								filterable="false" />
						</ec:row>
					</ec:table>
				</td>
			</tr>
			<tr>
				<td>
					<!-- 历史流程 -->
					<ec:table tableId="hisView" method="post" items="hisSteps" var="step"  
						action=""   title="历史流程信息"
						imagePath="${pageContext.request.contextPath}/images/table/*.gif"
						width="100%" rowsDisplayed="10" view="compact">
						<ec:row>
							<ec:column title="步骤" property="stepName" sortable="false"
								filterable="false" />
							<ec:column title="动作" property="actionName" sortable="false"
								filterable="false" />

							<ec:column title="操作人" property="owner" sortable="false"
								filterable="false" />

							<ec:column title="状态" property="EEE" sortable="false"
								filterable="false">
								<domain:viewDomain domain="WFLOCALDESC" value="${step.status}" />
							</ec:column>

							<ec:column title="开始时间" property="startDate" sortable="false"
								filterable="false" />
							<ec:column title="完成时间" property="finishDate" sortable="false"
								filterable="false" />

							<ec:column title="之前步骤数量" property="previous" sortable="false"
								filterable="false" />

							<ec:column title="审核意见" property="opinion" sortable="false"
								filterable="false" />
						</ec:row>
					</ec:table>
				</td>
			</tr>
			

			<tr>
				<td bgcolor="#dfdfdf" height="25" width="85%" class="font_blue_title">
					业务实体信息:
				</td>
			</tr>

			<tr>
				<td>
					<!-- 业务信息 -->
					<iframe src="${viewURL}?id=${beanId}" width="100%" frameborder="1"/>
				</td>
			</tr>

		</table>
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
	
</html>
