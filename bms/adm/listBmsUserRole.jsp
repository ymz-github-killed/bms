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
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
	<script type="text/javascript">
			function btn_delete_click(id)
			{
				if(confirm("确认要删除该用户的角色授权么？")==true){
					var url = "${pageContext.request.contextPath}/bms/adm/bmsrole/deleteRoleUsers.do";
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
			
			function btn_defineFunc_click(roleId,uid)
			{
				var url = "${pageContext.request.contextPath}/bms/adm/bmsuserfunc/beforeDefineUserFunc.do";
				url += "?roleId="+roleId+"&uid=" + uid;
				window.parent.location.href=url;
			}
			
			function selRoleUser(b)
			{
				this.location.href="${pageContext.request.contextPath}/bms/adm/bmsrole/listNotCheckedUsers.do?roleid=${roleid}";
			}
			
			function selThisUser(id,name,userid,authadm)
			{
				document.getElementById("userroleid_").value = id;
				document.getElementById("userName_").value = name;
				document.getElementById("userid_").value = userid;
				//document.getElementById("authChilds_").value = authadm;
			}
			
			function checkForm()
			{
				if(document.getElementById("userName_").value == "")
				{
					alert("请选择用户");
					return false;
				}
				return true;
			}
		</script>
<body class="overfwidth">
    	<!--按钮 开始-->  

        <!--按钮 结束-->  
        <!--框内内容 开始-->
          
      
        <!--框内内容 结束-->
            <!--按钮 开始-->  
 <div class="mb10 pt10" id="mainDiv">
 		<form id="" action="" class="cmxform" method="post" name="formName">
        <fieldset>
        <legend>角色对应用户列表</legend>
        </fieldset>
        </form>
</div>
        <div class="toolbar">
        <a href="#" class="sexybutton" onclick="javascript:selRoleUser(false);"><span><span>新增本角色对应的用户</span></span></a>       </div>
        <div class="eXtremeTable">
			<ec:table method="post" autoIncludeParameters="true" tableId="BmsUserRoleExList" items="list" var="m" action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="100%" style="margin: 0px; padding: 0px; border: 0px;"
			rowsDisplayed="10" view="compact" >
			<ec:row highlightRow="true">
				<ec:column headerCell="selectAll" alias="ckids" width="1%"  filterable="false" sortable="false">
					<input type="checkbox" name="ckids" value="${m.id}" />
				</ec:column>
				<ec:column title="用户登录名" property="tbTBmsUserDTO.userLoginName"
					alias="usernmae">
				</ec:column>
				<ec:column title="用户姓名" property="tbTBmsUserDTO.userRealName"
					alias="userrealnmae"></ec:column>
				<ec:column title="状态" property="tbTBmsUserDTO.userStatus" filterCell="droplist" filterOptions="BMSDOMAIN.dataIsused">
					<domain:viewDomain domain="dataIsused"
						value="${m.tbTBmsUserDTO.userStatus}" />
				</ec:column>
				<ec:column title="操作" property="EEE" sortable="false"
					filterable="false">
					<a class="sexybutton" href="javascript:btn_delete_click('${m.id}')">
					<span><span>删除</span></span></a>
				</ec:column>
			</ec:row>
		</ec:table>
        </div>
        <div class="toolbar">
        	<a href="#" class="sexybutton" onclick="btn_delete_click()"><span><span>批量删除</span></span></a>
        </div>
            <!--按钮 结束-->  
        <iframe id="hideframe" name="hideframe" width="0" height="0"></iframe>
</body>
</html>
