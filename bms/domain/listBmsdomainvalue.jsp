<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
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
				var url = "${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/beforeDeleteBmsDomainvalue.do";
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
				var url = "${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/beforeAddBmsDomainvalue.do";
				document.location.href=url;
			}			
		</script>
<body class="overfwidth">
           <!--按钮 开始--> 
            <div class="overf pb5">
           <h1> <span class="left pt5">字典值定义</span></h1>
            
             </div> 
             
        <div class="eXtremeTable">
            <ec:table tableId="BmsDomainvalueExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" view="compact" filterRowsCallback="limit" sortRowsCallback="limit" retrieveRowsCallback="limit">
			<ec:row>
				<ec:column headerCell="selectAll" alias="ckids" width="1%"  filterable="false" sortable="false">
					<input type="checkbox" name="ckids" value="${m.id}" />
				</ec:column>
				<ec:column title="主键" property="id">
				</ec:column>
				<ec:column title="显示值" property="domainlabel" />
				<ec:column title="实际值" property="domainvalue" />
				<ec:column title="排序值" property="indexsequnce" />
				<ec:column title="操作" property="EEE" sortable="false"
					filterable="false">
					<a class="sexybutton"
						href="${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/beforeEditBmsDomainvalue.do?id=${m.id}">
						<span><span>编辑</span></span></a>
					<a class="sexybutton"
						href="javascript:btn_delete_click('${m.id}')"><span><span>删除</span></span></a>
				</ec:column>
			</ec:row>
		</ec:table>
        </div>
        <div class="eXtremeTable">
            
        </div>
                  <div class="toolbar mt5">
       	<a href="#" onclick="btn_delete_click()" class="sexybutton"><span><span>批量删除</span></span></a> 
        <a href="#" class="sexybutton" onclick="btn_add_click()"><span><span>新增字典值</span></span></a>      </div>
            <!--按钮 结束-->  
            <iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
            </body>
</html>