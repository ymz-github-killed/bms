<%@ page contentType="text/html; charset=GBK"%>
<%@page import="com.sinovatech.common.web.limit.LimitInfo"%>
<%@page import="com.sinovatech.common.web.limit.CsLimitUtil"%>
<%
	//�б�ID
	String tableid = (String) request
			.getAttribute(CsLimitUtil.LIMIT_TABLE_ID_);

	String pageNumId = tableid + "_"
			+ CsLimitUtil.CUSTOM_LIMIT_TARGET_PAGE;

	LimitInfo limitInfo = (LimitInfo) request.getAttribute(tableid
			+ "_" + "LIMITINFO");
%>
��<%=limitInfo.getTotalNum()%>����¼;&nbsp; ��<%=limitInfo.getTotalPage()%>ҳ;&nbsp;
��ǰ��<%=limitInfo.getPageNum()%>ҳ;&nbsp;
<%
	if (limitInfo.getPageNum() > 1)
	{
%>
<a href="javascript:void(0)"
	onclick="document.getElementById('<%=pageNumId%>').value=1;document.getElementById('<%=tableid%>_SUBMIT').click();">��ҳ</a>
<%
	}

	if (limitInfo.getPageNum() > 1)
	{
%>
<a href="javascript:void(0)"
	onclick="document.getElementById('<%=pageNumId%>').value=<%=limitInfo.getPageNum() - 1%>;document.getElementById('<%=tableid%>_SUBMIT').click();">��һҳ
</a>
<%
	}

	if (limitInfo.getPageNum() < limitInfo.getTotalPage())
	{
%>
<a href="javascript:void(0)"
	onclick="document.getElementById('<%=pageNumId%>').value=<%=limitInfo.getPageNum() + 1%>;document.getElementById('<%=tableid%>_SUBMIT').click();">��һҳ</a>
<%
	}

	if (limitInfo.getPageNum() < limitInfo.getTotalPage())
	{
%>
<a href="javascript:void(0)"
	onclick="document.getElementById('<%=pageNumId%>').value=<%=limitInfo.getTotalPage()%>;document.getElementById('<%=tableid%>_SUBMIT').click();">ĩҳ</a>
<%
	}
%>

��:
<input type="text" size="4" id="<%=pageNumId%>" name="<%=pageNumId%>" />
ҳ&nbsp;&nbsp;
<input id="<%=tableid%>_SUBMIT" type="submit" value="GO" />