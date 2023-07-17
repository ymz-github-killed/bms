<%@page contentType="application/vnd.ms-excel;charset=GBK" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.io.File" %>
<%@ page import="java.io.FileInputStream" %>
<%@ page import="java.io.OutputStream" %>
<%@ page import="java.io.FileOutputStream" %>
<%@ page import="java.net.HttpURLConnection" %>
<%@ page import="java.io.BufferedInputStream" %>
<%@ page import="java.io.InputStream" %>
<%@ page import="java.io.IOException" %>
<%@ page import="java.io.BufferedOutputStream" %>

	<% 
	     String fileName = request.getSession().getServletContext().getRealPath("")+"/user.xls";
		 try {
            // path��ָ�����ص��ļ���·����
            File file = new File(fileName);
            // ȡ���ļ�����
            String filename = file.getName();
            // ȡ���ļ��ĺ�׺����
            String ext = filename.substring(filename.lastIndexOf(".") + 1).toUpperCase();

            // ��������ʽ�����ļ���
            InputStream fis = new BufferedInputStream(new FileInputStream(fileName));
            byte[] buffer = new byte[fis.available()];
            fis.read(buffer);
            fis.close();
            // ���response
            response.reset();
            // ����response��Header
            response.addHeader("Content-Disposition", "attachment;filename=" + new String(filename.getBytes()));
            response.addHeader("Content-Length", "" + file.length());
            OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
            response.setContentType("application/octet-stream");
            toClient.write(buffer);
            toClient.flush();
            toClient.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
	%>