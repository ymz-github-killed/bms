<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
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
				var url = "${pageContext.request.contextPath}/bms/adm/bmsdomainfunc/beforeDeleteBmsDomainFunc.do";
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
				var url = "${pageContext.request.contextPath}/bms/adm/bmsdomainfunc/beforeAddBmsDomainFunc.do";
				document.location.href=url;
			}			
		</script>
<body class="overfwidth">

<div class="barnavtop">您所在的位置：系统管理 > 数据权限</div>
<div id="workspace">
	<!--主体 开始-->
    <div id="container">    
        <div class="overf pb5">
            <a href="#" onclick="btn_delete_click()" class="sexybutton"><span><span>批量删除</span></span></a> 
            <a class="sexybutton" href="#" onclick="btn_add_click()"><span><span>新增数据权限</span></span></a>
        </div>
        <!--searchForm 结束-->
        <!--CmsSiteList 开始-->
        <ec:table tableId="BmsDomainFuncExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			<ec:row>
				<ec:column headerCell="selectAll" alias="ckids" width="1%"  filterable="false" sortable="false">
					<input type="checkbox" name="ckids" value="${m.code}" />
				</ec:column>
				<ec:column title=" 权限编码 " property="code" />
				<ec:column title="权限名称" property="datafuncName" />
				<ec:column title="所属字典" property="tbTBmsDomainDTO.name" />
				<ec:column title="所属功能" property="tbTBmsRscFuncDTO.name" />
				<ec:column title="启用状态" property="flag" >
					${m.flag==1?'启用':'停用' }
				</ec:column>
				<ec:column title="操作" property="EEE" sortable="false"
					filterable="false">
					<a class="sexybutton"
						href="${pageContext.request.contextPath}/bms/adm/bmsdomainfunc/beforeEditBmsDomainFunc.do?code=${m.code}">
						<span><span>编辑</span></span></a>
					<a class="sexybutton"
						href="javascript:btn_delete_click('${m.code}')"><span><span>删除</span></span></a>
				</ec:column>
			</ec:row>
		</ec:table>
    <!--CmsSiteList 结束-->
    </div>
    <!--主体 结束-->
</div>

<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
