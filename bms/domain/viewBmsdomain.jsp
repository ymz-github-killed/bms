<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<meta name=generator content="MSHTML 8.00.6001.18939">
<body class="overfwidth">

<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > �����ֵ� >�����ֵ�ֵ��</div>
<div id="workspace">
	<!--���� ��ʼ-->
    <div id="container">   
        <!--searchForm ��ʼ-->
        <div id="searchForm">
        
        </div>
        <div class="overf pb5">
          <h1> <span class="left pt5">�����ֵ����ƣ�${m.remark } ����:${m.remark}</span></h1>
            <span class="left" style="margin-left:10px;">
            <a class="sexybutton" href="${pageContext.request.contextPath}/bms/domain/bmsdomain/queryBmsDomain.do"><span><span>����</span></span></a></span>
             </div>
        <!--searchForm ����-->
        <!--CmsSiteList ��ʼ-->
        <div class="eXtremeTable">
            <ec:table title="�����ֵ�ֵ��" items="listTBmsDomainvalueDTO" var="mBmsDomain" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact">
			<ec:row>
				<ec:column title="����" property="id">
				</ec:column>
				<ec:column title="����" property="domainlabel" />
				<ec:column title="ֵ" property="domainvalue" />
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
