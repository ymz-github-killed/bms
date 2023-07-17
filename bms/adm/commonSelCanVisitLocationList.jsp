<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic" %>
<%@page import="com.sinovatech.bms.adm.model.dto.TBmsUserDTO"%>
<%@page import="com.sinovatech.bms.BmsConsts"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css" />
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>
	<script type="text/javascript">
			function getChecks(name,ischeck)
			{
				var re = new Array();
				var ck = document.getElementsByName(name);
				for(var i=0; i<ck.length; i++)
				{
					if(ck[i].checked == ischeck)
					{
						re.push(ck[i].value);
					}
				}
				return re;
			}
		
			function submitSels()
			{
				var chks = getChecks("ckids",true);
				var notChks = getChecks("ckids",false);
				document.getElementById("chks_").value=chks;
				document.getElementById("notChks_").value=notChks;
				document.form1.submit();
				//hideframe.location.href="${pageContext.request.contextPath}/bms/adm/bmsuser/saveUserLocations.do?chks=" + chks + "&notChks=" + notChks;
			}
		</script>
<body class="overfwidth">
<form name="form1" action="${pageContext.request.contextPath}/bms/adm/bmsuser/saveUserLocations.do"
							target="hideframe" method="post">
<input id="chks_" name="chks" type="hidden" value="" />
<input id="notChks_" name="notChks" type="hidden" value="" />
</form>
<div id="workspace">
<div class="barnavtop">您所在的位置：系统管理 > 用户管理 > 编辑用户 > 可管理部门</div>
	<!--主体 开始-->
    <div id="container">    
     <div class="overf pb5 pt5">
           <span class="left"><a class="sexybutton" href="#" onclick="submitSels()"><span><span>授权</span></span></a></span>
            <span class="left ml10"><a class="sexybutton" href="#" onclick="location.href='${pageContext.request.contextPath}${ATX_.context.backUrlStore}'"><span><span>返回</span></span></a></span>
             </div>
        <!--searchForm 开始-->
        <% String curentUserLoginName = ((TBmsUserDTO)request.getAttribute("userDto")).getUserLoginName(); %>
        <div id="searchForm">
            <div class="overf pb5">
               <h1> <span class="left pt5">请选择您需要授予 <font class="colblue"><%=curentUserLoginName %></font> 管理的部门: </span></h1>
            </div>
                   
        <!--searchForm 结束-->
        <!--CmsSiteList 开始-->
        <div class="eXtremeTable">
            <ec:table tableId="BmsLocationList" method="post" items="list" var="m" action="" 
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" autoIncludeParameters="false">
			<ec:row>
				<ec:column headerCell="selectAll" alias="ckids" property="checked" width="20" filterCell="droplist" filterOptions="BMSDOMAIN.CHECKED">
						<input type="checkbox" name="ckids" ${m.checked?"checked":""} value="${m.id}" />
				</ec:column>
				<ec:column title="部门名称" property="name">
				</ec:column>
				<ec:column title="层次结构" property="stepinfo" />
				<ec:column title="备注" property="remark" />
			</ec:row>
		</ec:table>
              <div class="overf pb5 pt5">
           <span class="left"><a class="sexybutton" href="#" onclick="submitSels()"><span><span>授权</span></span></a></span>
            <span class="left ml10"><a class="sexybutton" href="#" onclick="location.href='${pageContext.request.contextPath}${ATX_.context.backUrlStore}'"><span><span>返回</span></span></a></span>
            
             </div>
        </div>
    <!--CmsSiteList 结束-->
     </div>
    </div>
    <!--主体 结束-->
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
