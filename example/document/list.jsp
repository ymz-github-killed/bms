<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@ taglib prefix="c" uri="/WEB-INF/tld/c.tld"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>����DOCUMENT </title>

		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<!--
			<link rel="stylesheet" type="text/css" href="styles.css">
		-->
		<script type="text/javascript">
			function initializing(id,title){
				var actionUrl='${pageContext.request.contextPath}/workflow/wfBinding/initializing.do';
				var beanName='Document';
				var initialAction=1;
				var wfName='document';
				var beanID=id;
				
				var viewURL='${pageContext.request.contextPath}/example/document/detail.do';
				var editURL='${pageContext.request.contextPath}/example/document/edit.do';
				//����,�ɺ���
				var title=title;
				/*������װ*/				
				var paras='?bn='+beanName+'&ia='+initialAction+'&wn='+wfName+'&bid='+beanID+'&vu='+encodeURIComponent(viewURL)+'&eu='+encodeURIComponent(editURL)+'&tl='+title;
				document.location.href=actionUrl+paras;
			}
		</script>

	</head>

	<body>
		<br/>
		document list:
		<br>
		<input type="button" value="���"
			onclick="location.href='${pageContext.request.contextPath}/example/document/add.jsp'">
		<table border="1" width="80%" align="center">
			<tr>

				<th>
					title
				</th>
				<th>
					content
				</th>
				<th>
					operation
				</th>
				<th>
					state
				</th>
			</tr>
			<c:forEach items="${list}" var="doc">
				<tr>
					<td>
						${doc.title}
					</td>
					<td>
						${doc.content}
					</td>
					<td>

						${doc.state}
					</td>
					<td>
						<a
							href="${pageContext.request.contextPath}/example/document/detail.do?id=${doc.id}">����</a>
						&nbsp;
						<a
							href="${pageContext.request.contextPath}/example/document/beforeEdit.do?id=${doc.id}">�༭</a>
						&nbsp;
						<a href="javascript:initializing('${doc.id}','${doc.title}');">
							�ύ </a>
					</td>

				</tr>
			</c:forEach>
		</table>
	</body>
</html>
