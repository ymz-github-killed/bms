<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic" %>
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
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
			function btn_del_click()
			{
				if (confirm("ɾ�����ͬ��ɾ����ɫ�µ�����Ȩ�ޣ�ȷ��ɾ����")){
					hideframe.location.href="${pageContext.request.contextPath}/bms/adm/bmsdomainfunc/deleteBmsDomainFunc.do";
				}else{
					return false;
				}
				
			}		
		</script>
<body class="overfwidth">

<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > ����Ȩ�� > ɾ������Ȩ��</div>
<div id="workspace">
	<!--���� ��ʼ-->
    <div id="container">    
        <div class="overf pt5 pb5">
        	<h1> <span class="left pt5">��ȷ��Ҫɾ����������ô��</span></h1>
            <span class="left ml10"><a class="sexybutton" href="#" onclick="btn_del_click()"><span><span>ɾ��</span></span></a></span>
            <span class="left ml10"><a class="sexybutton" href="#" onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsdomainfunc/queryBmsDomainFunc.do'"><span><span>����</span></span></a></span>
        </div>
        <!--searchForm ����-->
        <!--CmsSiteList ��ʼ-->
        <div class="eXtremeTable">
            <ec:table items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" filterable="false" showPagination="false">
			<ec:row>
				<ec:column title="Ȩ������" property="datafuncName" />

				<ec:column title="�����ֵ�" property="tbTBmsDomainDTO.remark" />

				<ec:column title="����" property="desc" />

				<ec:column title="��������" property="tbTBmsRscFuncDTO.name" />

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
