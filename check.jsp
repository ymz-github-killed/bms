<%@ page language="java" contentType="text/html; charset=GBK"%>
<%
java.lang.Integer inum = 0;

try{
inum = (java.lang.Integer)session.getAttribute("inum");
if(inum==null){
inum = 0;
}else{
inum ++;
}
session.setAttribute("inum",inum);
}catch(Exception e){
session.setAttribute("inum",0);
inum = 0;
}
out.println("���עinum Ϊ 0 ʱ�� sessionֵ��<br/>");
out.println("inum = "+inum +"<br/>");
out.println("session = "+session.getId()+"<br/>");

try{
java.net.InetAddress aaa= java.net.InetAddress.getLocalHost();
out.println("��������ϢΪ��IP�� = "+aaa.toString() +"<br/>");

//String absPath=new java.io.File(application.getRealPath(request.getRequestURI())).getParent();
//out.println("����������·��="+absPath);
}catch(Exception e){
out.println("��������ϢΪ��IP��e =="+e.getMessage()+"<br/>");

}

out.println("�ļ�����·��="+application.getRealPath(request.getRequestURI())+ "<br/>");
out.println("X-Forwarded-For>>>>>>"+request.getHeader("X-Forwarded-For")+ "<br/>");
out.println("x-forwarded-for>>>>>>"+request.getHeader("x-forwarded-for")+ "<br/>");
out.println("Proxy-Client-IP>>>>>>"+request.getHeader("Proxy-Client-IP")+ "<br/>");
out.println("WL-Proxy-Client-IP>>>>>>"+request.getHeader("WL-Proxy-Client-IP")+ "<br/>");
out.println("Cdn-Src-Ip>>>>>>"+request.getHeader("Cdn-Src-Ip")+ "<br/>");
out.println("RemoteAddr>>>>>>"+request.getRemoteAddr()+ "<br/>");
out.println("SERVER_NAME>>>>>>"+System.getenv().get("SERVER_NAME").toString().toLowerCase()+ "<br/>");
 %>

