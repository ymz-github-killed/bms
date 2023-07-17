<%@ page contentType="text/html; charset=GBK"%>
<%@page import="com.sinovatech.common.web.limit.LimitInfo"%>
<%@page import="com.sinovatech.common.web.limit.CsLimitUtil"%>
<%
	//列表ID
	String tableid = (String) request
			.getAttribute(CsLimitUtil.LIMIT_TABLE_ID_);

	String pageNumId = tableid + "_"
			+ CsLimitUtil.CUSTOM_LIMIT_TARGET_PAGE;

	LimitInfo limitInfo = (LimitInfo) request.getAttribute(tableid
			+ "_" + "LIMITINFO");
%>
共<%=limitInfo.getTotalNum()%>条记录;&nbsp; 共<%=limitInfo.getTotalPage()%>页;&nbsp;
当前第<%=limitInfo.getPageNum()%>页;&nbsp;
<%
	if (limitInfo.getPageNum() > 1)
	{
%>
<a href="javascript:void(0)"
	onclick="document.getElementById('<%=pageNumId%>').value=1;document.getElementById('<%=tableid%>_SUBMIT').click();">首页</a>
<%
	}

	if (limitInfo.getPageNum() > 1)
	{
%>
<a href="javascript:void(0)"
	onclick="document.getElementById('<%=pageNumId%>').value=<%=limitInfo.getPageNum() - 1%>;document.getElementById('<%=tableid%>_SUBMIT').click();">上一页
</a>
<%
	}

	if (limitInfo.getPageNum() < limitInfo.getTotalPage())
	{
%>
<a href="javascript:void(0)"
	onclick="document.getElementById('<%=pageNumId%>').value=<%=limitInfo.getPageNum() + 1%>;document.getElementById('<%=tableid%>_SUBMIT').click();">下一页</a>
<%
	}

	if (limitInfo.getPageNum() < limitInfo.getTotalPage())
	{
%>
<a href="javascript:void(0)"
	onclick="document.getElementById('<%=pageNumId%>').value=<%=limitInfo.getTotalPage()%>;document.getElementById('<%=tableid%>_SUBMIT').click();">末页</a>
<%
	}
%>

至:
<input type="text" size="4" id="<%=pageNumId%>" name="<%=pageNumId%>" />
页&nbsp;&nbsp;
<input id="<%=tableid%>_SUBMIT" type="submit" value="GO" />