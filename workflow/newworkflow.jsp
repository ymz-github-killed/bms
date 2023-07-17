<%@ page import="com.opensymphony.workflow.Workflow,
                 com.opensymphony.workflow.basic.BasicWorkflow"%>
<jsp:directive.page import="org.springframework.context.ApplicationContext"/>
<jsp:directive.page import="org.springframework.web.context.support.WebApplicationContextUtils"/>
<jsp:directive.page import="com.opensymphony.workflow.config.Configuration"/>
<jsp:directive.page import="java.util.HashMap"/>
<jsp:directive.page import="java.util.Map"/>

<%
    Workflow wf = new BasicWorkflow((String) session.getAttribute("username"));
    ApplicationContext context=WebApplicationContextUtils.getWebApplicationContext(application);
	Configuration conf=(Configuration) context.getBean("osworkflowConfiguration");
	wf.setConfiguration(conf);
    Map inputs = new HashMap();
	inputs.put("docTitle", request.getParameter("title"));
    
    long id = wf.initialize("example", 100, null);
%>

New workflow entry <a href="test.jsp?id=<%=id%>">#<%=id%></a> created and initialized!

<%@ include file="nav.jsp" %>