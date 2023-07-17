<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
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
						alert("��ѡ��һ���������¼!");
						return false;
					}
					
					document.getElementById("hiddenSelUsers").value = id;
					document.getElementById("submitform").submit();
		}	 
</script>
<body class="overfwidth">
        <!--��ť ��ʼ-->  
        <div class="mb10 pt10"><form id="" action="" class="cmxform" method="post" name="formName">
        <fieldset>
        <legend>��ɫ��Ӧ�û��б�</legend>
        </fieldset>
        </form></div>
 <div class="toolbar">
        <a href="#" target="_self" class="sexybutton"  onclick="submitForm();"><span><span>����</span></span></a>
        <a href="#" class="sexybutton" onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsrole/listRoleUsers.do?roleid=${param.roleid}'">
        							<span><span>����</span></span></a>        </div>
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
					<ec:column title="��ʵ����" property="userRealName">
					</ec:column>
				<ec:column title="��¼��" property="userLoginName" />
				<ec:column title="�Ա�" property="userSex" filterCell="droplist"
					filterOptions="BMSDOMAIN.SEX">
					<domain:viewDomain domain="SEX" value="${m.userSex}" />
				</ec:column>
				<ec:column title="��������" property="tbTBmsLocationDTO.name"
					alias="locationName" />
				<ec:column title="״̬" property="userStatus" filterCell="droplist"
					filterOptions="BMSDOMAIN.dataIsused">
					<domain:viewDomain domain="dataIsused" value="${m.userStatus}" />
				</ec:column>
			</ec:row>
		</ec:table>
        </div>
    <div class="toolbar pt10">
        <a href="#" target="_self" class="sexybutton"  onclick="submitForm();"><span><span>����</span></span></a>
        <a href="#" class="sexybutton" onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsrole/listRoleUsers.do?roleid=${param.roleid}'">
        							<span><span>����</span></span></a>
	</div>
            
</body>
</html>
