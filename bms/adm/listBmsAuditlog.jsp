<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
	<script type="text/javascript">
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
				var url = "${pageContext.request.contextPath}/bms/adm/bmsauditlog/beforeDeleteBmsAuditlog.do";
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
				var url = "${pageContext.request.contextPath}/bms/adm/bmsauditlog/beforeAddBmsAuditlog.do";
				document.location.href=url;
			}			
			function exportListLog()
			{
				document.getElementById("BmsAuditlogExList").action= "${pageContext.request.contextPath}/bms/adm/bmsauditlog/exportListLog.do";
				document.getElementById("BmsAuditlogExList").submit();
			}
	</script>
<body class="overfwidth">

<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > ��־����</div>
<div id="workspace">
	<!--���� ��ʼ-->
    <div id="container">    
        <div class="overf pb5">
            <!--  span class="right"><a href="#" class="sexybutton"><span><span>����XLS</span></span></a></span  -->
             </div>
        <div class="overf pt5 pb5">
            <span class="left"><a class="sexybutton" href="#" onclick="exportListLog()"><span><span>������־</span></span></a></span>
        </div>
        <!--searchForm ����-->
        <!--CmsSiteList ��ʼ-->
        <div class="eXtremeTable">
            <ec:table tableId="BmsAuditlogExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			
			<ec:row>
				<ec:column title="����Ӧ��" property="appCode" />
				<ec:column title="��������" property="operateEntry" />
				<ec:column title="��������" property="operateName" />
				<ec:column title="�����û�" property="userName" />
				<ec:column title="������ip��ַ" property="serviceIp"/>
				<ec:column title="������IP" property="clientIp" />
				<!-- ec:column title="����ʱ��" property="operateDate" cell="date" parse="yyyy-MM-dd" format="yyyy-MM-dd hh:mm:ss"/  -->
				<ec:column title="�Ƿ�ɹ�" property="sucessful"  filterCell="droplist" filterOptions="BMSDOMAIN.YORN">
					<domain:viewDomain domain="YORN" value="${m.sucessful}"/>
				</ec:column>
				<ec:column title="����" property="EEE" sortable="false"
					filterable="false">
					<a class="sexybutton"
						href="${pageContext.request.contextPath}/bms/adm/bmsauditlog/detailBmsAuditlog.do?id=${m.id}">
						<span><span>�鿴</span></span> </a>
				</ec:column>
			</ec:row>
		</ec:table>
        </div>
    <!--CmsSiteList ����-->
    </div>
    <!--���� ����-->
</div>

<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
