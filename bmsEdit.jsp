<%@ page language="java"
	import="java.util.*,com.sinovatech.mvcbms.pub.dto.PageDTO,java.io.*"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";

	PageDTO pageDTO = (PageDTO) request.getAttribute("pageDTO");
	//html内容
	String fileContent = null;
	//demo路径替换
	String replacePath = null;
	try {
	    System.out.println(pageDTO.getHtmlUrl());
		String realPath = request.getSession().getServletContext()
				.getRealPath("");
		String[] pathArr  = pageDTO.getHtmlUrl().split("/");
		if (pathArr.length > 0) {
			if ("".equals(pathArr[0])) {
				replacePath = basePath + pathArr[1] + "/" + pathArr[2]
						+ "/";
			} else {
				replacePath = basePath + pathArr[0] + "/" + pathArr[1]
						+ "/";
			}

		}
		FileInputStream fis = new FileInputStream(realPath
				+ pageDTO.getHtmlUrl());
		InputStreamReader isr = new InputStreamReader(fis, "UTF-8");
		BufferedReader br = new BufferedReader(isr);
		String line = "";
		StringBuffer buffer = new StringBuffer();
		while ((line = br.readLine()) != null) {
			buffer.append(line);
		}
		fileContent = buffer.toString();

	} catch (FileNotFoundException e) {
		e.printStackTrace();
		request.setAttribute("error", e);
		request.getRequestDispatcher("error.jsp").forward(request, response);
		return;
	} catch (IOException e) {
		e.printStackTrace();
		request.setAttribute("error", e);
		request.getRequestDispatcher("error.jsp").forward(request, response);
		return;
	}
	String[] fileStrArr = fileContent.split("</body>");
	String headstr = fileStrArr[0];
	String script = "<script type='text/javascript'>var jsonData ="
			+ pageDTO.getJsonData() + ";var basePath ='" + basePath+"';</script>";

	if (headstr.indexOf("<!--head") != -1) {
		String innerHead = headstr.split("<!--head")[1]
				.split("head-->")[0];
		headstr = headstr.split("<head>")[0] + "<head>" + script
				+ innerHead + "</head>" + headstr.split("</head>")[1];
	}

	headstr = headstr.replace("<head>", "<head>" + script);
	out.write(headstr.replace("../../", replacePath));
%>



<script type="text/javascript"
	src="<%=basePath%>mvcbms/pub/js/navtree.js"></script>
<script type="text/javascript"
	src="<%=basePath%>mvcbms/pub/js/common.js"></script>
<script type="text/javascript"
	src="<%=basePath%>mvcbms/${pageDTO.pageJs}"></script>
<%
	String bodyStr = "</body>" + fileStrArr[1];
	out.write(bodyStr.replace("../../", replacePath));
%>
