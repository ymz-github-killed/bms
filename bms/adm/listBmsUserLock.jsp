<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@page import="com.sinovatech.common.config.GlobalConfig"%>
<%@page import="com.sinovatech.bms.adm.model.dto.TBmsUserDTO"%>
<%@page import="com.sinovatech.bms.BmsConsts"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
<script src="${pageContext.request.contextPath}/js1.6/jQuery/jquery.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<style type="text/css">

</style>
<script type="text/javascript">
		$(function(){
			if($("#userLock").val() == "false"){
				openNewDiv();
				jQuery("#container").html("");
				jQuery(".barnavtop").hide();
			}
		});
		var docEle = function()
		{
		    return document.getElementById(arguments[0]) || false;
		}
		function openNewDiv(){
<%--			$("input").attr("disabled","disabled");--%>
<%--			$("select").attr("disabled","disabled");--%>
<%--			$("textarea").attr("disabled","disabled");--%>
<%--			$("a").attr("href","#");--%>
		
		    var m = "mask";
		    if (docEle(m)) document.body.removeChild(docEle(m));
		  
		    //mask遮罩层
			
		    var newMask = document.createElement("div");
		    newMask.id = m;
		    newMask.style.position = "absolute";
		    newMask.style.zIndex = "1";
		    
		    
		    var _hight =  window.screen.height;
		   // var _hight = document.documentElement.clientHeight;
		    //_scrollWidth = Math.max(document.body.scrollWidth,document.documentElement.scrollWidth);
		    //_scrollHeight = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
		    //newMask.style.width = (_scrollWidth-5) + "px";
		    //newMask.style.height = (_scrollHeight-5) + "px";
		    newMask.style.width="100%";
		    newMask.style.height=_hight;
		    newMask.style.float="left";
		    newMask.style.top = "0px";
		    newMask.style.left = "0px";
		  //  newMask.style.background = "#e8e8e8";
		    newMask.style.filter = "alpha(opacity=40)";
		    newMask.style.opacity = "0.40";
		    newMask.innerHTML ="<div  align='center' style='margin-top: 200px;'><br/><br/><font size=3px color='#ff0000'><b>未启用用户异常登录锁定功能.......</b></font><div>";
		    
		    document.body.appendChild(newMask);
		    //该遮罩做了绝对定位+屏幕高度
		} 

			function subForm(){
				
			}
			
			function getChecks(name)
			{
				var re = new Array();
				var ck = document.getElementsByName(name);
				for(var i=0; i<ck.length; i++)
				{
					if(ck[i].checked)
					{
						re.push(ck[i].value);
					}
				}
				return re;
			}
		
			function btn_delete_click(id)
			{
				var url = "${pageContext.request.contextPath}/bms/adm/bmsuser/beforeDeleteBmsUser.do";
				if(!$chk(id))
				{
					id = getChecks("ckids").join(",");
					if(!$chk(id))
					{
						alert("请选择一条或多条记录!");
						return;
					}
				}
				document.location.href=url + "?ids=" + id;
			}
			
			function btn_add_click()
			{
				var url = "${pageContext.request.contextPath}/bms/adm/bmsuser/beforeAddBmsUser.do";
				document.location.href=url;
			}		
			function exportListUser()
			{
				var ids = getChecks("ckids").join(",");
				if(!$chk(ids)){
					document.getElementById("BmsUserExList").action= "${pageContext.request.contextPath}/bms/adm/bmsuser/exportListUser.do";
				}else{
					document.getElementById("BmsUserExList").action= "${pageContext.request.contextPath}/bms/adm/bmsuser/exportListUser.do?ids=" + ids;
				}
				document.getElementById("BmsUserExList").submit();
			}
			
			function lock(id,isLock){
				if(isLock == 0){
					if(window.confirm('锁定后该用户不可登录，确定要执行该操作吗？')) {
						var url = "${pageContext.request.contextPath}/bms/adm/bmsuser/lockBmsUser.do";
						document.location.href=url + "?ids=" + id;
					}
				}
				if(isLock == 1){
					if(window.confirm('确定解锁该用户吗？')) {
						var url = "${pageContext.request.contextPath}/bms/adm/bmsuser/lockBmsUser.do";
						document.location.href=url + "?ids=" + id;
					}
				}
				if(isLock == 2){
					if(window.confirm('确定解锁该用户吗？')) {
						var url = "${pageContext.request.contextPath}/bms/adm/bmsuser/lockBmsUser.do";
						document.location.href=url + "?ids=" + id;
					}
				}
		}
		</script>

<body class="overfwidth">
<div id="yin">
<div class="barnavtop">您所在的位置：系统管理 >用户锁定管理</div>
<div id="workspace">
	<!--主体 开始-->
    <div id="container">  
        <!--searchForm 结束-->
        <!--CmsSiteList 开始-->
        <%
        	String userLock = GlobalConfig.getProperty("bmssecurity", "userLock");
			String superman = GlobalConfig.getProperty("bms","admin");
			String curentUserLoginName = ((TBmsUserDTO)session.getAttribute(BmsConsts.SESSION_USER)).getUserLoginName();					
		%>
		<input id="userLock" name="userLock" type="hidden" value=<%=userLock%> /> 
        <div class="eXtremeTable">
        
            <ec:table tableId="BmsUserExList" method="post" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			<ec:row style="align:center;text-align:center">
<%--				<ec:column headerCell="selectAll" alias="ckids" width="1%"  filterable="false" sortable="false">--%>
<%--					<%--%>
<%--						String id = ((TBmsUserDTO)pageContext.getAttribute("m")).getUserLoginName();--%>
<%--						if(!superman.equals(id) && !curentUserLoginName.equals(id))--%>
<%--						{ --%>
<%--					%>--%>
<%--							<input type="checkbox" name="ckids" value="${m.id}" />--%>
<%--					<%--%>
<%--						}--%>
<%--					%>--%>
<%--				</ec:column>--%>
				
				<ec:column title="登录名" property="userLoginName" width="12%">
				</ec:column>
				<ec:column title="真实姓名" property="userRealName"  width="12%"/>
				<ec:column title="职位" property="userStation"  width="12%"/>
				<ec:column title="性别" property="userSex" filterCell="droplist" filterOptions="BMSDOMAIN.SEX" width="5%">
					<domain:viewDomain domain="SEX" value="${m.userSex}"/>
				</ec:column>
				<ec:column title="所属部门" property="tbTBmsLocationDTO.name" alias="locationName"  width="12%"/>
				<ec:column title="锁定状态" property="isLocked"  filterCell="droplist" filterOptions="BMSDOMAIN.isLocked" width="6%">
					<domain:viewDomain domain="isLocked" value="${m.isLocked}"/>
				</ec:column>
				
				<ec:column title="操作" property="EEE" sortable="false" 
					filterable="false">
					<c:if test="${m.isLocked=='0'}">
					<logic:notEqual value="<%=superman%>" name="m" property="userLoginName">
						<a class="sexybutton"
							href="javascript:lock('${m.id}','${m.isLocked}')"><span><span>锁定用户</span></span></a>
						</logic:notEqual>
					</c:if>
					<c:if test="${m.isLocked=='1'}">
					<logic:notEqual value="<%=superman%>" name="m" property="userLoginName">
						<a class="sexybutton"
							href="javascript:lock('${m.id}','${m.isLocked}')"><span><span>解锁用户</span></span></a>
						</logic:notEqual>
					</c:if>
					<c:if test="${m.isLocked=='2'}">
					<logic:notEqual value="<%=superman%>" name="m" property="userLoginName">
						<a class="sexybutton"
							href="javascript:lock('${m.id}','${m.isLocked}')"><span><span>解锁用户</span></span></a>
						</logic:notEqual>
					</c:if>					
				</ec:column>
			</ec:row>
		</ec:table>
        
        </div>
       
    <!--CmsSiteList 结束-->
    </div>
    <!--主体 结束-->
</div>
<br>
<!-- <p>&nbsp&nbsp&nbsp&nbsp&nbsp<font color=red size=2px>*该管理页面的操作只有在启用用户异常登录锁功能时有效！</font></p> -->
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</div>
</body>

</html>
