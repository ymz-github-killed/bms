<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript"
			src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
		<script type="text/javascript">
			
			function selDomain(id,name)
			{
				parent.selDomainSuc(id,name);
			}
	
			function reback(){
				parent.showSelDiv('domainDiv',true);
			}
			
		</script>
<body class="overfwidth">

<div class="barnavtop">您所在的位置：系统管理 > 数据权限 > 所属字典</div>
<div id="workspace">
	<!--主体 开始-->
    <div id="container">    
        <!--searchForm 开始-->
       
        <div class="overf pb5">
           <h1> <span class="left pt5">请选择数据权限所属的字典(点击字典名称进行选择)</span></h1>
            <span class="left ml10"><a class="sexybutton" href="#" onclick="parent.showSelDiv('domainDiv',true);"><span><span>返回</span></span></a></span>
             </div>
        <!--searchForm 结束-->
        <!--CmsSiteList 开始-->
        <div class="eXtremeTable">
        <ec:table tableId="BmsDomainExList"  method="post" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			<ec:row>
				<ec:column title="字典编码" property="name">
					<a style="color: blue;border-bottom: 1px solid blue;" href="javascript:selDomain('${m.name}','${m.remark}');">${m.name}</a>
				</ec:column>
				<ec:column title="字典名称" property="remark" />
			</ec:row>
		</ec:table>
		</div>
    <!--CmsSiteList 结束-->
    </div>
    <!--主体 结束-->
</div>

</body>
</html>
