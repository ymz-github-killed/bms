<%@ page contentType="text/html; charset=GBK"%>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.util.Calendar" %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
</head>

<body>


<% 
	String newDate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
	Calendar cal = Calendar.getInstance();
	cal.setTime(new Date());
	String[] weekDays = {"������", "����һ", "���ڶ�", "������", "������", "������", "������"};
    int w = cal.get(Calendar.DAY_OF_WEEK) - 1;
    if (w < 0) {
    	w = 0;
    }
    String week = weekDays[w];
%>


<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-bottom:5px;">
  <tr>
    <td width="1%" class="top_index_l"></td>
    <td width="99%">
	<table width="100%"  border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td class="top_index_Cen">
        	<div class="l_top_left white"><img src="<%=request.getContextPath()%>/images/l_time.gif" alt="ʱ��" class="l_img01"> ��ǰʱ�䣺<%=newDate%> <%=week%></div>
        </td>
        <td class="top_index_Cen1">&nbsp;</td>
        <td class="top_index_Cen2">
        	<div class="l_top_right">
            	<ol>
            		<li class="top_indexfong"><img src="<%=request.getContextPath()%>/images/l_index.gif" alt="��վ��ҳ" class="l_img01"> <a href="#" onclick="showmain();" class="white">��վ��ҳ</a></li>
                    <li class="ml10">
                    	<img src="<%=request.getContextPath()%>/images/l_out.gif" alt="��ȫ�˳�" class="l_img01"> <a href="#" onclick="javascript:window.parent.location='<%=request.getContextPath()%>/logout.do'" class="white">��ȫ�˳�</a>
                    </li>
                </ol>
            </div>
        </td>
      </tr>
    </table>
	
	</td>
  </tr>
</table>
</body>
</html>
