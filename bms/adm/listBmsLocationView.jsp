<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<meta name=generator content="MSHTML 8.00.6001.18939">
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
				
	function delUsers()
	{
		var ns = document.getElementsByName("ckids");
		var bool=true;
		for(var i=0; i<ns.length; i++)
		{
			if(ns[i].checked){
				bool=false;
				break;
			}
		}
		if(bool){
			alert("请选择，至少一项！");
			return false;
		}
		if (confirm('确实要删除？')==true){
			location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/deleteSelectedUser.do?nochks=' + getChecks('ckids',true);
		}
	}	
	function delUser(id){
		var ns = document.getElementsByName("ckids");
		var re = new Array();
		for(var i=0; i<ns.length; i++)
		{
				if(ns[i].value == id)
			{
				ns[i].checked=true;
			}else{
				ns[i].checked=false;
			}
		}
		if (confirm('确实要删除？')==true){
			location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/deleteSelectedUser.do?nochks=' + getChecks('ckids',true);
		}
	}	
</script>
		<body class="overfwidth">
<div class="workspace left" style="width:100%;">        
        <div class="mb10 pt10"><form id="" action="" class="cmxform" method="post" name="formName">
        <fieldset>
        <legend>可以管理该部门的用户列表</legend>
        </fieldset>
        </form></div>
        
        <!--框内内容 开始-->
         <div class="toolbar">
         <a href="#" onClick="delUsers();return false" class="sexybutton"><span><span>批量删除</span></span></a>
        <a href="#" class="sexybutton" 
        onClick="location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/addUserForLocation.do?id=${m.id}'"><span><span>新增管理用户</span></span></a>
                </div>
		<div class="eXtremeTable">
            <ec:table tableId="userlist" method="post" items="userlist" var="e"
					action="" 
					imagePath="${pageContext.request.contextPath}/images/table/*.gif"
					width="100%" rowsDisplayed="10" view="compact" >
					<ec:row>
						<ec:column headerCell="selectAll" alias="ckids" width="1%"
							filterable="false" sortable="false">
							<input type="checkbox" name="ckids" value="${e.id}" />
						</ec:column>
						<ec:column title="登录名" property="userLoginName">
						</ec:column>
						<ec:column title="真实姓名" property="userRealName" />
						<ec:column title="性别" property="userSex" filterCell="droplist"
							filterOptions="BMSDOMAIN.SEX">
							<domain:viewDomain domain="SEX" value="${e.userSex}" />
						</ec:column>
						<ec:column title="状态" property="userStatus" filterCell="droplist"
							filterOptions="BMSDOMAIN.dataIsused">
							<domain:viewDomain domain="dataIsused" value="${e.userStatus}" />
						</ec:column>
						<ec:column title="操作" property="EEE" sortable="false" filterable="false">
							<a class="sexybutton" href="javascript:delUser('${e.id}')">
							<span><span>删除</span></span></a>
						</ec:column>
					</ec:row>
				</ec:table>
        </div>
                      <div class="toolbar pt10">
        <a href="#" onClick="delUsers();return false" class="sexybutton"><span><span>批量删除</span></span></a>        </div>
        <!--框内内容 结束-->
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
