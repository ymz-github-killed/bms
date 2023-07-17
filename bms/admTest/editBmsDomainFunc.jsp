<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<link href="${pageContext.request.contextPath}/css/yh.css" rel="stylesheet" type="text/css">	
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<link href="${pageContext.request.contextPath}/css/template.css"
			type="text/css" rel="stylesheet">
		<title>编辑数据字典权限</title>
		<script type="text/javascript">
		
		function $(id){
			return document.getElementById(id);		
		}
		
		function onFormSubmit()
		{
			if(document.getElementById("name") == "")
			{
				alert("名称不能为空!");
				return false;
			}
			return true;
		}
		
	function showSelDiv(n,showMain)
	{
		//延迟加载
		$("mainDiv").style.display = showMain?"block":"none";
		$(n).style.display = showMain?"none":"block";
	}
	
	function showDomain(){
		var uri="${pageContext.request.contextPath}/bms/domain/bmsdomain/selDomain.do";
		if($('selFrameDomain').src!=uri){
			$('selFrameDomain').src=uri;
		}
		showSelDiv('domainDiv',false);
	}
	
	function showFunc(){
		var uri="${pageContext.request.contextPath}/bms/adm/bmsrscfunc/selFunc.do";
		if($('selFrameFunc').src!=uri){
			$('selFrameFunc').src=uri;
		}
		showSelDiv('funcDiv',false);
	}
	
	function selDomainSuc(id,name)
	{
		$("domainid_").value = id;
		$("domainname_").value = name;
		showSelDiv('domainDiv',true);
	}
	
	function selFuncSuc(id,name)
	{
		$("funcName_").value = name;
		$("funcId_").value = id;
		showSelDiv('funcDiv',true);
	}
	</script>
	</head>
	<body>
	
	<div id="mainDiv">
	
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td>
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td height="25" bgcolor="#DDFAFE">
									&nbsp;&nbsp;
									<span class="font_blue_title">您所在的位置：权限管理子系统 &gt; 数据权限管理</span>
									<span class="font_blue_title">&gt; 编辑数据权限</span>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
			
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td height="20">
						&nbsp;
					</td>
				</tr>
			</table>
	
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td width="1%" valign="top">
						&nbsp;
					</td>
					<td width="99%" valign="top">
						<div align="left"></div>
	
					<form name="frmApply"
								action="${pageContext.request.contextPath}/bms/adm/bmsdomainfunc/editBmsDomainFunc.do"
								target="hideframe" method="post"
								onsubmit="return beforeSubmit(this);">
						<table width="98%" border="0" align="center" cellpadding="3"
							cellspacing="1" bgcolor="#dfdfdf">
							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									权限编码：
								</td>
								<td align="left" width="35%">
									<input id="code_" type="text" name="code" readonly="readonly" value="${m.code}" maxlength="20" class="input3"
										size="80" style="width: 200px;height: 16px;" />
								</td>
								
								<td width="15%" align="right" class="font_bule2">
									权限名称:
								</td>
								<td align="left" width="35%">
									
									<input id="datafuncName_" type="text" name="datafuncName" value="${m.datafuncName}" maxlength="20" class="input3"
										size="80" style="width: 200px;height: 16px;" />
								</td>
							</tr>
							
							
							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									所属字典：
								</td>
								<td align="left" width="35%">
									<input id="domainname_" type="text" name="domainname" value="${m.tbTBmsDomainDTO.remark}" readonly="readonly"/>
									<input id="domainid_" type="hidden" name="domainid" value="${m.tbTBmsDomainDTO.name}" readonly="readonly"/>
									<a href="javascript:showDomain();"> <img
											src="/bms1.6/images/2j13.gif"
											border="0" /> </a>
									<span style="color: red;">*</span>
								</td>
								
								
								
								<td width="15%" align="right" class="font_bule2">
									所属功能：
								</td>
								<td align="left" width="35%">
									<input id="funcName_" type="text" name="funcName" value="${m.tbTBmsRscFuncDTO.name}" readonly="readonly"/>
									<input id="funcId_" type="hidden" name="funcId" value="${m.tbTBmsRscFuncDTO.id}"/>
									<a href="javascript:showFunc();"> <img
											src="/bms1.6/images/2j13.gif"
											border="0" /> </a>
									<span style="color: red;">*</span>
								</td>
							</tr>
							
							
							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									列表权限：
								</td>
								<td align="left" width="35%">
								<domain:radioDomain domain="YORN" name="isList" uid="isList_"
									value="${m.isList}" />
								</td>
								
								
								
								<td width="15%" align="right" class="font_bule2">
									是否启用：
								</td>
								<td align="left" width="35%">
								<domain:radioDomain domain="YORN" name="flag" uid="flag_"
									value="${m.flag}" />
							</td>
							</tr>
							
							<tr bgcolor="#f7f7f7">
					            <td align="right" valign="top" class="font_bule2">描述：</td>
					            <td align="left" colspan="3" >
					            	<textarea name="desc" cols="60" rows="5" id="desc_" class="input_more">${m.desc}</textarea>
					            </td>
					        </tr>
					        
							<tr align="center" bgcolor="#f7f7f7">
								<td colspan="4">
									<input name="Button5222" type="submit" class="button5"
										value="提交" style="width: 60px">
									<input name="Button5223" type="reset" class="button5" value="重填"
										style="width: 60px">
									<input name="Button22" type="button" class="button5" value="返回"
										onclick="history.back();" style="width: 60px;">
								</td>
							</tr>
						</table>
						</form>
					</td>
				</tr>
			</table>
		</div>
		
		
		<div id="domainDiv"  style="display: none; text-align: center;height: 300px">
			<iframe id="selFrameDomain" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
		</div>
		
		<div id="funcDiv" style="display: none; text-align: center;height: 500px">
			<iframe id="selFrameFunc" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
		</div>
		
		<!-- 数据提交区域，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
	</body>
</html>
<br />
