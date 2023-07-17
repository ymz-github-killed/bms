<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/extremecomponents.tld" prefix="ec"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>listBmsUser</title>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		 <link href="${pageContext.request.contextPath}/css/yh.css"	type="text/css" rel="stylesheet"/> 
		<script type="text/javascript"
			src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>
		<script language="javascript"
			src="${pageContext.request.contextPath}/js/date.js"></script> 
		<script type="text/javascript">
			function subForm(){
				
			}		
			function switchLogger(){
			var xhr=new XHR({async:false,onSuccess:
				function (response)
				{
					$('logControlBut').value=(response.trim()=='running'?'停止监控':'启动监控');
				}
			});
			xhr.send("switchLogger.do");
			}
		</script>
	</head>
	<body style="font-size:12px;">
	
	
<table width="100%" border="0" cellpadding="0"
	cellspacing="0"> <tr> <td>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr> <td height="25" bgcolor="#BDDEFD">
<span class="font_blue_title">&nbsp;&nbsp;您所在的位置：网站信息管理 &gt; 日志管理
&gt; 后台日志查询</span></td>
      </tr>
    </table></td>
  </tr>
</table>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td height="20">&nbsp;</td>
  </tr>
</table>
<table width="100%"  border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="1%" valign="top">&nbsp;</td>
    <td width="99%" align="right" valign="top"><table width="98%" border="0" align="center" cellpadding="0" cellspacing="0">      
    </table>
       <form action="${pageContext.request.contextPath}/bms/adm/bmslog/storeQueryTime.do" name="frmApply" method="post">
      <table width="98%"  border="0" align="center" cellpadding="5" cellspacing="1" bgcolor="#dfdfdf">
		       <tr bgcolor="#f7f7f7">
		         <td height="24" class="font_bule2"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
                   <tr>
                     <th width="100%" height="35" class="fontSize">后台日志查询</th>
                   </tr>
                 </table></td>
          </tr>
		       <tr bgcolor="#f7f7f7">
		         <td height="24" align="left" class="font_bule2">
		        	
				登录日期：
					<input name="logdateBegin" type="text" class="input_date" onclick="this.value=''"
						id="logdateBegin" value="${logdateBegin}" size="10" maxlength="100"
						readonly />
					<a href="#" id="Calendar" 
						onClick="fPopCalendar(frmApply.logdateBegin,frmApply.logdateBegin); return true"
						title="请点击这里选取日期。"><img
							src="${pageContext.request.contextPath}/images/choose_date.gif"
							border="0"  />
					</a> 至
					<input name="logdateEnd" type="text" class="input_date" onclick="this.value=''"
						id="logdateEnd" value="${logdateEnd}" size="10" maxlength="100"
						readonly />
					<a href="#" id="Calendar"
						onClick="fPopCalendar(frmApply.logdateEnd,frmApply.logdateEnd); return true"
						title="请点击这里选取日期。">
					<img src="${pageContext.request.contextPath}/images/choose_date.gif"
							border="0"  />
					</a>
                   <input name="Button22" type="submit" class="button5" value="查询"  style="width:50px "/>&nbsp;
                   <input name="Button23" type="button" class="button5" value="${loggerState}" onclick="switchLogger()" id="logControlBut" name="logControlBut"  style="width:60px "/></td>
          </tr>
      </table>      
        </form>
      <br />
	
		<ec:table tableId="BmsLogExList" method="post" items="list" var="m"
			action=""
			imagePath="${pageContext.request.contextPath}/images/table/*.gif"
			width="98%" rowsDisplayed="10" 	filterRowsCallback="limit" sortRowsCallback="limit"
			retrieveRowsCallback="limit">
			<ec:row  style="text-align:left">
				<ec:column title="行号" property="FFFF" cell="rowCount" sortable="false"	filterable="false"/>
				<ec:column title="操作日期" property="operatingHours" cell="date" format="yyyy-MM-dd HH:mm:ss"/>
				<ec:column title="操作用户" property="userName" />
				<ec:column title="所属应用" property="theirApplication" />
				<ec:column title="执行动作" property="operationName" />
				<ec:column title="是否成功" property="isSuccess" />
				<ec:column title="所在IP" property="ipAddr"/>
				<ec:column title="操作" property="EEE" sortable="false"	filterable="false">
					<a
						href="${pageContext.request.contextPath}/bms/adm/bmslog/detailBmsLog.do?id=${m.id}">详细</a>
				</ec:column>
			</ec:row>
		</ec:table>
<br />
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
