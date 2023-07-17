<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic" %>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css" />
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
			function btn_del_click()
			{
				hideframe.location.href="${pageContext.request.contextPath}/bms/domain/bmsdomain/deleteBmsDomain.do";
			}		
		</script>
<body class="overfwidth">

<div class="barnavtop">您所在的位置：系统管理 > 数据字典 > 删除数据字典</div>
<div id="workspace">
	<!--主体 开始-->
    <div id="container">    
        <div class="overf pt5 pb5">
        	<h1> <span class="left pt5">您确认要删除如下数据么？</span></h1>
            <span class="left ml10"><a class="sexybutton" href="#" onclick="btn_del_click()"><span><span>删除</span></span></a></span>
            <span class="left ml10"><a class="sexybutton" href="${pageContext.request.contextPath}/bms/domain/bmsdomain/queryBmsDomain.do"><span><span>返回</span></span></a></span>
        </div>
        <!--searchForm 结束-->
        <!--CmsSiteList 开始-->
        <div class="eXtremeTable">
            <ec:table items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" filterable="false" showPagination="false">
			<ec:row>
				<ec:column title="字典id" property="name" />

				<ec:column title="字典名称" property="remark" />

			</ec:row>
		   </ec:table>
        </div>
       
    <!--CmsSiteList 结束-->
    </div>
    <!--主体 结束-->
</div>

<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
