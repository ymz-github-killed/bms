<%@ page contentType="text/html; charset=GBK"%>
<jsp:directive.page import="com.sinovatech.common.web.action.CommonMapping"/>
<jsp:directive.page import="com.sinovatech.common.web.action.ActionConstent"/>
<jsp:directive.page import="org.apache.commons.lang.StringUtils"/>
<%@taglib prefix="c" uri="/WEB-INF/tld/c.tld"%>

<%
	CommonMapping m = (CommonMapping)request.getAttribute("mping");
	
	if(ActionConstent.ALERT.equals(m.getType()))
	{//alert��ʾ��ʽ
%>
		<script type="text/javascript">
		<!--
<%
		if(!StringUtils.isBlank(m.getMsg()))
		{
%>
			parent.alert("<%=m.getMsg()%>");
<%	
		}
		
		if(!StringUtils.isBlank(m.getRedirect()))
		{
%>
			//alert("${pageContext.request.contextPath}<%=m.getRedirect()%>");
			//alert(document.location);
			parent.location.href="${pageContext.request.contextPath}<%=m.getRedirect()%>";
<%
		}
%>
		
		-->
		</script>
<%
	}
	else
	{//TODO ����ģʽ
	
	}
	if(!StringUtils.isBlank(m.getScriptElse()))
	{
%>
	<script type="text/javascript">
	<!--
	 <%=m.getScriptElse()%>
	-->
	</script>
<%			
}
%>
<b style="color: red;">${mping.msg}</b><br />
<a href="javascript:history.go(-1);">����</a>
