<%@page import="java.net.URL"%>
<%@page import="java.util.Enumeration"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
String r = request.getParameter("r");
if (r == null){
	String c = request.getParameter("c");
	if (c != null)
		r = c.replace('.', '/')+ ".class";
}

if (r == null){
	out.println("Set paremeter r for resource name or c for class name.");
	return;
}

// trim leading slash.
if (r.startsWith("/"))
	r = r.substring(1);

final String LF = "<BR />", IND = "&nbsp;&nbsp;";

ClassLoader cl = Thread.currentThread().getContextClassLoader();
for (String rs : new String[]{r, "/" + r}){
	out.println(rs + LF);
	for (Enumeration<URL> urls = cl.getResources(rs); urls.hasMoreElements(); ){
		URL url = urls.nextElement();
		out.println(IND + url + LF);
	}
}

%>

</body>
</html>