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
<TITLE>�׻�������վ����ϵͳ</TITLE>
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
		  
		    //mask���ֲ�
			
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
		    newMask.innerHTML ="<div  align='center' style='margin-top: 200px;'><br/><br/><font size=3px color='#ff0000'><b>δ�����û��쳣��¼��������.......</b></font><div>";
		    
		    document.body.appendChild(newMask);
		    //���������˾��Զ�λ+��Ļ�߶�
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
						alert("��ѡ��һ���������¼!");
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
					if(window.confirm('��������û����ɵ�¼��ȷ��Ҫִ�иò�����')) {
						var url = "${pageContext.request.contextPath}/bms/adm/bmsuser/lockBmsUser.do";
						document.location.href=url + "?ids=" + id;
					}
				}
				if(isLock == 1){
					if(window.confirm('ȷ���������û���')) {
						var url = "${pageContext.request.contextPath}/bms/adm/bmsuser/lockBmsUser.do";
						document.location.href=url + "?ids=" + id;
					}
				}
				if(isLock == 2){
					if(window.confirm('ȷ���������û���')) {
						var url = "${pageContext.request.contextPath}/bms/adm/bmsuser/lockBmsUser.do";
						document.location.href=url + "?ids=" + id;
					}
				}
		}
		</script>

<body class="overfwidth">
<div id="yin">
<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� >�û���������</div>
<div id="workspace">
	<!--���� ��ʼ-->
    <div id="container">  
        <!--searchForm ����-->
        <!--CmsSiteList ��ʼ-->
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
				
				<ec:column title="��¼��" property="userLoginName" width="12%">
				</ec:column>
				<ec:column title="��ʵ����" property="userRealName"  width="12%"/>
				<ec:column title="ְλ" property="userStation"  width="12%"/>
				<ec:column title="�Ա�" property="userSex" filterCell="droplist" filterOptions="BMSDOMAIN.SEX" width="5%">
					<domain:viewDomain domain="SEX" value="${m.userSex}"/>
				</ec:column>
				<ec:column title="��������" property="tbTBmsLocationDTO.name" alias="locationName"  width="12%"/>
				<ec:column title="����״̬" property="isLocked"  filterCell="droplist" filterOptions="BMSDOMAIN.isLocked" width="6%">
					<domain:viewDomain domain="isLocked" value="${m.isLocked}"/>
				</ec:column>
				
				<ec:column title="����" property="EEE" sortable="false" 
					filterable="false">
					<c:if test="${m.isLocked=='0'}">
					<logic:notEqual value="<%=superman%>" name="m" property="userLoginName">
						<a class="sexybutton"
							href="javascript:lock('${m.id}','${m.isLocked}')"><span><span>�����û�</span></span></a>
						</logic:notEqual>
					</c:if>
					<c:if test="${m.isLocked=='1'}">
					<logic:notEqual value="<%=superman%>" name="m" property="userLoginName">
						<a class="sexybutton"
							href="javascript:lock('${m.id}','${m.isLocked}')"><span><span>�����û�</span></span></a>
						</logic:notEqual>
					</c:if>
					<c:if test="${m.isLocked=='2'}">
					<logic:notEqual value="<%=superman%>" name="m" property="userLoginName">
						<a class="sexybutton"
							href="javascript:lock('${m.id}','${m.isLocked}')"><span><span>�����û�</span></span></a>
						</logic:notEqual>
					</c:if>					
				</ec:column>
			</ec:row>
		</ec:table>
        
        </div>
       
    <!--CmsSiteList ����-->
    </div>
    <!--���� ����-->
</div>
<br>
<!-- <p>&nbsp&nbsp&nbsp&nbsp&nbsp<font color=red size=2px>*�ù���ҳ��Ĳ���ֻ���������û��쳣��¼������ʱ��Ч��</font></p> -->
		<!-- �����ύ���ţ�����ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</div>
</body>

</html>
