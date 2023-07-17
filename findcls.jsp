<%@page import="java.net.URL"%>
<%@page import="java.util.Enumeration, java.lang.Exception"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Find Class in Jar</title>
</head>
<body>

  <%
  String r = request.getParameter("cls");
  if (r == null)
    r = "org/apache/poi/hssf/usermodel/HSSFWorkbook.class";
  ClassLoader cl = Thread.currentThread().getContextClassLoader();
  
  
  
  for (String s : new String[] { r, "/" + r }) {
    out.append(s + "<BR />");
    for (Enumeration<URL> urls = cl.getResources(r); urls.hasMoreElements();) {
      URL url = urls.nextElement();
      out.append("  " + url + " <BR />");
    }
  }
  
  while (cl != null) {
      out.append( "<BR />");
      
      out.append(cl.toString());
      cl = cl.getParent();
  }
  
  
  %>
</body>
</html>