<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
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
<div class="workspace left" style="width:100%;">        
        <div class="mb10 pt10"><form id="" action="" class="cmxform" method="post" name="formName">
        <fieldset>
        <legend>��ѡ������Ҫ��������ŵ��û�</legend>
        </fieldset>
        </form></div>
        
        <!--�������� ��ʼ-->
        <div class="toolbar">
        <a href="#" class="sexybutton" onclick="submitForm();"><span><span>�ύ��Ȩ</span></span></a>
        <a href="${pageContext.request.contextPath}/bms/adm/bmslocation/listBmsLocationView.do?id=${m.id}" class="sexybutton"><span><span>����</span></span></a>        </div>
        <form method="post"
        action="${pageContext.request.contextPath}/bms/adm/bmslocation/saveBmsLocationUser.do" id="submitform">
        <input type="hidden" name="locationid" value="${m.id}" />
		<input type="hidden" id="hiddenSelUsers" name="users" value="" />
        </form>
		<div class="eXtremeTable">
            <ec:table tableId="userlist" method="post" items="notCheckedUserList" var="e" action="" 
					imagePath="${pageContext.request.contextPath}/images/table/*.gif"
					width="100%" rowsDisplayed="10" view="compact" >
					<ec:row>
						<ec:column headerCell="selectAll" alias="ckids" width="1%"
							filterable="false" sortable="false">
							<input type="checkbox" name="ckids" value="${e.id}" />
						</ec:column>
						<ec:column title="��¼��" property="userLoginName">
						</ec:column>
						<ec:column title="��ʵ����" property="userRealName" />
						<ec:column title="�Ա�" property="userSex" filterCell="droplist"
							filterOptions="BMSDOMAIN.SEX">
							<domain:viewDomain domain="SEX" value="${e.userSex}" />
						</ec:column>
						<ec:column title="״̬" property="userStatus" filterCell="droplist"
							filterOptions="BMSDOMAIN.dataIsused">
							<domain:viewDomain domain="dataIsused" value="${e.userStatus}" />
						</ec:column>
					</ec:row>
				</ec:table>
        </div>
                      <div class="toolbar pt10">
        <a href="#" class="sexybutton" onclick="submitForm();"><span><span>�ύ��Ȩ</span></span></a>
        <a href="${pageContext.request.contextPath}/bms/adm/bmslocation/listBmsLocationView.do?id=${m.id}" class="sexybutton"><span><span>����</span></span></a>        </div>
        <!--�������� ����-->
</div>

</body>
</html>
