<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<html>
	<head>
		<link href="${pageContext.request.contextPath}/css/yh.css" rel="stylesheet" type="text/css">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link
			href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
	</head>

	<body>
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="25" bgcolor="#DDFAFE">
								&nbsp;&nbsp;
								<span class="font_blue_title">您所在的位置：工作流引擎 &gt; 我的列表 </span>
								<span class="font_blue_title">&gt; 待办事项</span>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td height="20">
					&nbsp;
				</td>
			</tr>
		</table>
		
		<table border="0" width="80%">
			<tr>
				<td colspan="3" height="25">
					以下为我的工作项：
				</td>
			</tr>
			<tr>
				<td width="100%" height="100%">
				
					<ec:table tableId="completedList" method="post" items="list" var="m" action=""
							imagePath="${pageContext.request.contextPath}/images/table/*.gif"
							width="98%" rowsDisplayed="10" view="compact" >
							<ec:row>
								<ec:column title="流水号" property="entryId" sortable="false"	filterable="false"/>
								<ec:column title="流程名称" property="wfName" sortable="false" 	filterable="false"/>
								<ec:column title="标题" property="title" sortable="false"	filterable="false"/>
								<ec:column title="操作" property="EEE" sortable="false"	filterable="false">
								<a	href="${pageContext.request.contextPath}/workflow/wfBinding/show.do?id=${m.entryId}">
									详情					
								</a>
								</ec:column>
							</ec:row>
						</ec:table>
				</td>
			</tr>
		</table>
	</body>
</html>
