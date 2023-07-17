<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@page import="com.sinovatech.common.config.GlobalConfig"%>
<%@page import="com.sinovatech.bms.adm.model.dto.TBmsUserDTO"%>
<%@page import="com.sinovatech.bms.BmsConsts"%>
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
<meta name=generator content="MSHTML 8.00.6001.18939">
		<script type="text/javascript">
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
		</script>

<body class="overfwidth">
<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > �û�����</div>
<div id="workspace">
	<!--���� ��ʼ-->
    <div id="container">    
        <div class="overf pt5 pb5">
            <span class="left"><a href="#" onclick="btn_delete_click()" class="sexybutton"><span><span>����ɾ��</span></span></a> </span>
            <span class="left ml10"><a class="sexybutton" href="#" onclick="btn_add_click()"><span><span>�����û�</span></span></a></span>
            <span class="right"><a class="sexybutton" href="#" onclick="exportListUser()"><span><span>����</span></span></a></span>
            <span class="right mr10"><a class="sexybutton" href="${pageContext.request.contextPath}/bms/adm/importUser.jsp"><span><span>����</span></span></a></span>
        </div>
        <!--searchForm ����-->
        <!--CmsSiteList ��ʼ-->
        <%
			String superman = GlobalConfig.getProperty("bms","admin");
			String curentUserLoginName = ((TBmsUserDTO)session.getAttribute(BmsConsts.SESSION_USER)).getUserLoginName();					
		%>
        <div class="eXtremeTable">
            <ec:table tableId="BmsUserExList" method="post" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			<ec:row >
				<ec:column headerCell="selectAll" alias="ckids" width="1%"  filterable="false" sortable="false">
					<%
						String id = ((TBmsUserDTO)pageContext.getAttribute("m")).getUserLoginName();
						if(!superman.equals(id) && !curentUserLoginName.equals(id))
						{ 
					%>
							<input type="checkbox" name="ckids" value="${m.id}" />
					<%
						}
					%>
				</ec:column>
				<ec:column title="��¼��" property="userLoginName" width="12%">
					<a
						href="${pageContext.request.contextPath}/bms/adm/bmsuser/beforeEditBmsUser.do?id=${m.id}">
						${m.userLoginName} </a>
				</ec:column>
				<ec:column title="��ʵ����" property="userRealName"  width="12%"/>
				<ec:column title="ְλ" property="userStation"  width="12%"/>
				<ec:column title="�Ա�" property="userSex" filterCell="droplist" filterOptions="BMSDOMAIN.SEX" width="5%">
					<domain:viewDomain domain="SEX" value="${m.userSex}"/>
				</ec:column>
				<ec:column title="��������" property="tbTBmsLocationDTO.name" alias="locationName"  width="12%"/>
				<ec:column title="״̬" property="userStatus"  filterCell="droplist" filterOptions="BMSDOMAIN.dataIsused" width="5%">
					<domain:viewDomain domain="dataIsused" value="${m.userStatus}"/>
				</ec:column>
				<ec:column title="${userapplyname}" property="applyid" width="10%" />
				<ec:column title="��ɫ��Ϣ" property="SSS" sortable="false" filterable="false" width="7%">
					<a
						href="${pageContext.request.contextPath}/bms/adm/bmsuser/queryBmsRole.do?id=${m.id}">
						�鿴��ɫ</a>
				</ec:column>
				<ec:column title="����" property="EEE" sortable="false"
					filterable="false">
					<a class="sexybutton" href="${pageContext.request.contextPath}/bms/adm/bmsuser/beforeEditBmsUser.do?id=${m.id}"><span><span>�༭</span></span></a>
					<logic:notEqual value="<%=superman%>" name="m" property="userLoginName">
						<a class="sexybutton"
							href="javascript:btn_delete_click('${m.id}')"><span><span>ɾ��</span></span></a>
						<a class="sexybutton"
							href="javascript:location.href='${pageContext.request.contextPath}/bms/adm/bmsuser/selCanVisitLocation.do?userid=${m.id}';"><span><span>�ɹ�����</span></span></a>
					</logic:notEqual>
				</ec:column>
			</ec:row>
		</ec:table>
        </div>
           <div class="overf pb5 pt10">
            <span class="left"><a href="#" onclick="btn_delete_click()" class="sexybutton"><span><span>����ɾ��</span></span></a> </span>
           </div>
       
    <!--CmsSiteList ����-->
    </div>
    <!--���� ����-->
</div>
		<!-- �����ύ���ţ�����ɾ�� -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>

</body>
</html>
