<%@ page import="com.opensymphony.workflow.Workflow,
                 com.opensymphony.workflow.basic.BasicWorkflow,
                 java.util.*,
                 com.opensymphony.workflow.query.WorkflowQuery"%>
<jsp:directive.page import="org.springframework.web.context.support.WebApplicationContextUtils"/>
<jsp:directive.page import="org.springframework.context.ApplicationContext"/>
<jsp:directive.page import="com.opensymphony.workflow.config.Configuration"/>
<%
    Workflow wf = new BasicWorkflow((String) session.getAttribute("username"));

    ApplicationContext context=WebApplicationContextUtils.getWebApplicationContext(application);
	Configuration conf=(Configuration) context.getBean("osworkflowConfiguration");
	wf.setConfiguration(conf);

    WorkflowQuery queryLeft = new WorkflowQuery(WorkflowQuery.OWNER, WorkflowQuery.CURRENT, WorkflowQuery.EQUALS, session.getAttribute("username"));
    WorkflowQuery queryRight = new WorkflowQuery(WorkflowQuery.STATUS, WorkflowQuery.CURRENT, WorkflowQuery.EQUALS, "Underway");
    WorkflowQuery query = new WorkflowQuery(queryLeft, WorkflowQuery.AND, queryRight);
    List workflows = wf.query(query);
    for (Iterator iterator = workflows.iterator(); iterator.hasNext();) {
        Long wfId = (Long) iterator.next();
%>
    <li><a href="test.jsp?id=<%= wfId %>"><%= wfId %></a></li>
<%
    }
%>

<%@ include file="nav.jsp" %>