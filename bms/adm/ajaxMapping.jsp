<%@ page language="java" contentType="text/html; charset=GBK"%>
	${msg}

<%
	if(request.getAttribute("script") != null)
	{
%>
<script type="text/javascript">
	${script}
</script>
<%
	}
%>