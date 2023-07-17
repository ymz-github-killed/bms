<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
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
			
		function submitForm()
		{
					id = getChecks("ckids").join(",");
					if(id == "")
					{
						alert("请选择一条或多条记录!");
						return false;
					}
					
					document.getElementById("hiddenSelUsers").value = id;
					document.getElementById("submitform").submit();
		}	 
</script>
<body class="overfwidth">
        <!--按钮 开始-->  
        <div class="mb10 pt10"><form id="" action="" class="cmxform" method="post" name="formName">
        <fieldset>
        <legend>角色对应用户列表</legend>
        </fieldset>
        </form></div>
 <div class="toolbar">
        <a href="#" target="_self" class="sexybutton"  onclick="submitForm();"><span><span>保存</span></span></a>
        <a href="#" class="sexybutton" onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsrole/listRoleUsers.do?roleid=${param.roleid}'">
        							<span><span>返回</span></span></a>        </div>
        <div id="searchForm" style="display:none">
        <form method="post" class="cmxform editspace" style="text-align: left; padding: 1px;"
        action="${pageContext.request.contextPath}/bms/adm/bmsrole/saveOrUpdateRoleUsers.do" id="submitform">
        <input type="hidden" name="roleid" value="${param.roleid}" />
		<input type="hidden" id="hiddenSelUsers" name="users" value="" />
        </form>
        </div>
        
        <div class="eXtremeTable">
            <ec:table tableId="notCheckedUserList" method="post"
				items="notCheckedUserList" var="m" action=""
				imagePath="${pageContext.request.contextPath}/images/table/*.gif"
				width="98%" rowsDisplayed="10" view="compact"
				autoIncludeParameters="false">
				<ec:row>
					<ec:column headerCell="selectAll" alias="ckids" width="1%"  filterable="false" sortable="false">
					<input type="checkbox" name="ckids" value="${m.id}" />
				</ec:column>
					<ec:column title="真实姓名" property="userRealName">
					</ec:column>
				<ec:column title="登录名" property="userLoginName" />
				<ec:column title="性别" property="userSex" filterCell="droplist"
					filterOptions="BMSDOMAIN.SEX">
					<domain:viewDomain domain="SEX" value="${m.userSex}" />
				</ec:column>
				<ec:column title="所属部门" property="tbTBmsLocationDTO.name"
					alias="locationName" />
				<ec:column title="状态" property="userStatus" filterCell="droplist"
					filterOptions="BMSDOMAIN.dataIsused">
					<domain:viewDomain domain="dataIsused" value="${m.userStatus}" />
				</ec:column>
			</ec:row>
		</ec:table>
        </div>
    <div class="toolbar pt10">
        <a href="#" target="_self" class="sexybutton"  onclick="submitForm();"><span><span>保存</span></span></a>
        <a href="#" class="sexybutton" onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsrole/listRoleUsers.do?roleid=${param.roleid}'">
        							<span><span>返回</span></span></a>
	</div>
            
</body>
</html>
