<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/view.tld" prefix="view"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="/WEB-INF/tld/c.tld" prefix="c" %>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<head>
<script type="text/javascript">
<!--
	function del()
	{
		if(confirm('您确实要删除该功能模块么？'))
		{
			hideframe.location.href='${pageContext.request.contextPath}/bms/adm/bmsrscfunc/deleteBmsRscFunc.do';
		}
	}
	function beforeSubmit(f)
	{
		if(f.name.value == "")
		{
			alert("名称不能为空");
			return false;
		}
		return true;
	}
	
	function $(id)
	{
		return document.getElementById(id);
	}
	
	function isMenuFuncChg(s)
	{
		$("mutResourceDiv").style.display = (s==0)?"block":"none";
	}
	function showAuditDefine(img){
 		var isOpen=img.title.indexOf('查看')>=0;
 		var path='${pageContext.request.contextPath}/images/define/';
 		var div=img.parentNode.nextSibling;
 		div.style.display=isOpen?'block':'none';
		img.title=(isOpen?'关闭审计日志定义':'查看审计日志定义');
		img.src=(path+(isOpen?'Lminus.png':'Lplus.png'));
	}
//-->
</script>
</head>
<body>
	<table width="100%" border="0" cellpadding="0" cellspacing="0">
		<tr>
			<td>
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td height="25" bgcolor="#DDFAFE">
							&nbsp;&nbsp;
							<span class="font_blue_title">您所在的位置：用户管理子系统 &gt; 功能模块管理</span>
							<span class="font_blue_title">&gt; 查看功能模块</span>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<br>
	<table width="98%" border="0" align="center" cellpadding="0"
		cellspacing="0">
		<tr>
			<td height="20">
				<table width="90%" border="0" align="right" cellpadding="0"
					cellspacing="0">
					<tr>
						<td>
							<div align="right">
								<input name="Button2223252323" type="button" class="button5"
									value="增加模块"
									onClick="MM_goToURL('self','${pageContext.request.contextPath}/bms/adm/bmsrscfunc/beforeAddBmsRscFunc.do');return document.MM_returnValue">
								<input name="Button22232523232" type="button" class="button5"
									value="编辑模块"
									onClick="MM_goToURL('self','${pageContext.request.contextPath}/bms/adm/bmsrscfunc/beforeEditBmsRscFunc.do');return document.MM_returnValue">
								<input name="Button222325232322" type="button" class="button5"
									value="删除模块" onClick="return del();">
							</div>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<br>
	<table width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td width="1%" valign="top">
				&nbsp;
			</td>
			<td width="99%" valign="top">

				<form name="frmApply"
					action="${pageContext.request.contextPath}/bms/adm/bmsrscfunc/editBmsRscFunc.do"
					target="hideframe" method="post"
					onsubmit="return beforeSubmit(this);">
					<table width="98%" border="0" align="center" cellpadding="3"
						cellspacing="1" bgcolor="#dfdfdf">
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								功能名称：
							</td>
							<td align="left" width="35%">
								<input readonly="readonly" name="name" value="${m.name }" type="text" maxlength="50"
									class="input3" size="80" style="width: 200px">
							</td>
							<td rowspan="3" align="right" valign="top" class="font_bule2">
								描述：
							</td>
							<td align="left" rowspan="3">
								<textarea readonly="readonly"  name="remark" cols="30" rows="4" maxlength="100"
									class="input_more">${m.remark}</textarea>
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								显示图标：
							</td>
							<td align="left" width="35%">
								<input  readonly="readonly" name="icon" value="${m.icon }" type="text" maxlength="50"
									class="input3" size="80" tyle="width: 200px">
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								是否菜单：
							</td>
							<td align="left" width="35%">
								<domain:selectDomain value="${m.menuFunc}"
									onchange="isMenuFuncChg(this.value)" domain="YORN"
									name="menuFunc" uid="menuFunc_" />
									
								&nbsp;
								&nbsp;
								&nbsp;
								<span  class="font_bule2">所属应用：</span>
								<view:select displayProperty="appName" valueProperty="appCode" value="${m.appCode}" name="appCode" items="${_WEB_APPS}"/>
							</td>
						</tr>
						<tr bgcolor="#f7f7f7" id="linkaddrDeiv"  <logic:equal value="0" name="m" property="menuFunc">style="display: none;"</logic:equal>>
							<td width="15%" align="right" class="font_bule2">
									菜单地址：
								</td>
								<td align="left" colspan="3">
									<input readonly="readonly"  name="url" value="${m.url }" type="text" 
									class="input3" size="100" style="width: 400px">
								</td>
						</tr>
						<logic:notEmpty name="resouceList">
						<tr bgcolor="#f0f0f0">
							<td class="font_bule2" style="font-size: 14px; font-weight: bold;" colspan="4">
								功能点对应的权限资源:
							</td>
						</tr>
						</logic:notEmpty>
						<tr bgcolor="#f7f7f7" id="mutResourceDiv"
							<logic:equal value="1" name="m" property="menuFunc">style="display: none;"</logic:equal>>
							<td colspan="4" align="center">
								<div id="resouce_content_div"
									style="width: 600px; text-align: center; margin: 0; padding: 0; border: 0;"
									class="font_bule2">
									<div
										style="font-weight: bold; margin: 0; padding: 0; border-bottom: 1px solid #000;">
										<span style="width: 150px;">名称</span>
										<span style="width: 320px; margin-left: 5px;">URI</span>
										<span style="width: 50px; margin-left: 5px;">审计点</span>
									</div>
									<logic:notEmpty name="resouceList">
										<logic:iterate id="re" name="resouceList">
											<div>
												<input readonly="readonly"  class="input3" style="width: 150px;" type="text"
													name="resourceName" value="${re.name}" size="100" />
												<input readonly="readonly"  class="input3"
													style="width: 320px; margin-left: 5px;" type="text"
													name="resourceURI" value="${re.url}" size="100" />
												<c:if test="${re.logPoint=='true'}">
												<img src="${pageContext.request.contextPath}/images/define/Lplus.png" onclick="showAuditDefine(this)" title="查看审计日志定义"/>
												</c:if>
												<c:if test="${re.logPoint!='true'}">
												<img src="${pageContext.request.contextPath}/images/define/blank.png" />
												</c:if>
												&nbsp;
											</div>
											<div style="display: none">
												<table width="85%" border="0" align="center" cellpadding="3"
																cellspacing="1" bgcolor="#dfdfdf">
																<tr bgcolor="#f7f7f7">
																	<td width="15%" align="right" class="font_bule2">
																		操作实体：
																	</td>
																	<td align="left" width="35%">
																		<input id="auditEntry_" type="text" name="auditEntry"
																			class="input3" size="80" value="${re.tbmsAuditdefineDTO.auditEntry}"
																			style="width: 180px;height: 18px;" readonly="readonly"/>
																	</td>
									
																	<td width="15%" align="right" class="font_bule2">
																		操作名称：
																	</td>
																	<td align="left" width="35%">
																		<input id="auditOperate_" type="text" name="auditOperate"
																			value="${re.tbmsAuditdefineDTO.auditOperate}" maxlength="20" class="input3" size="80"
																			style="width: 180px;height: 18px;" readonly="readonly"/>
																	</td>
																</tr>
									
																<tr bgcolor="#f7f7f7">
																	<td align="right" valign="top" class="font_bule2">
																		描述模板：
																	</td>
																	<td align="left" colspan="3">
																		<textarea name="descTemplate" cols="60" rows="7" id="descTemplate_" readonly="readonly"
																			class="input_more" type="_moz">${re.tbmsAuditdefineDTO.descTemplate}</textarea>
																	</td>
																</tr>
									
																<tr bgcolor="#f7f7f7">
																	<td align="right" valign="top" class="font_bule2">
																		成功判定：
																	</td>
																	<td align="left" colspan="3">
																		<textarea name="sucTemplate" cols="60" rows="3" id="sucTemplate_" readonly="readonly"
																			class="input_more" type="_moz">${re.tbmsAuditdefineDTO.sucessfulTemplate}</textarea>
																	</td>
																</tr>
												</table>
											</div>
											
										</logic:iterate>
									</logic:notEmpty>
								</div>
							</td>
						</tr>
					</table>
				</form>
			</td>
		</tr>
	</table>
	 
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>