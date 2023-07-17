<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic" %>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<body class="overfwidth">
<div class="barnavtop">您所在的位置：系统管理 > 用户管理 > 用户角色信息</div>
<div id="workspace">
	<!--主体 开始-->
    <div id="container">    
    	<div class="overf pt5 pb5">
            <a href="${pageContext.request.contextPath}/bms/adm/bmsuser/queryBmsUser.do" class="sexybutton"><span><span>返回</span></span></a>
         </div>
        <div class="eXtremeTable">
            <ec:table method="post" autoIncludeParameters="true" tableId="BmsUserRoleExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="100%" style="margin: 0px; padding: 0px; border: 0px;"
			rowsDisplayed="10" view="compact" filterable="false" sortable="false">
			<ec:row>
				<ec:column title="角色名称" property="name">
				</ec:column>
				<ec:column title="所属部门" property="tbTBmsLocationDTO.name"
					alias="locationName" />
				<ec:column title="备注" property="remark"></ec:column>
			</ec:row>
		</ec:table>
    <!--CmsSiteList 结束-->
    </div>
    <div class="overf pt5 pb5">
         <a href="${pageContext.request.contextPath}/bms/adm/bmsuser/queryBmsUser.do" class="sexybutton"><span><span>返回</span></span></a>
    </div>
</div>
</body>
</html>
