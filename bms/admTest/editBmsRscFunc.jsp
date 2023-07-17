<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="/WEB-INF/tld/view.tld" prefix="view"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<script type="text/javascript">
<!--
	function beforeSubmit(f)
	{
		if(f.name.value == "")
		{
			alert("名称不能为空");
			return false;
		}
		
		if(f.remark.value.length >400)
		{
			alert("备注不能多余400个字符");
			return false;
		}
		return true;
	}
	
	function $(id)
	{
		return document.getElementById(id);
	}
	
	function init(){
		//${'linkaddrDeiv2'}.style.display=($('menuFunc_').value=='1')?"block":"none";
	}
	
	function isMenuFuncChg(s)
	{
		$("mutResourceDiv").style.display = (s==0)?"block":"none";
		$("linkaddrDeiv").style.display = (s==1)?"block":"none";
		$("linkaddrDeiv2").style.display = (s==1)?"block":"none";
	}
	
	function isAuditDefine(checkBox){
		var divNode=checkBox.parentNode.nextSibling;

		divNode.style.display =(checkBox.checked)?"block":"none" ;
 		var childs=checkBox.parentNode.childNodes;
 		for(var i=0;i< childs.length;i++){
 			if(childs[i].name=='logPoint'){
 				childs[i].value=checkBox.checked;
 			}
 		}
	}
//-->
</script>
</head>
<body load="init()">
	<table width="100%" border="0" cellpadding="0" cellspacing="0">
		<tr>
			<td>
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td height="25" bgcolor="#DDFAFE">
							&nbsp;&nbsp;
							<span class="font_blue_title">您所在的位置：用户管理子系统 &gt; 功能模块管理</span>
							<span class="font_blue_title">&gt; 增加功能模块</span>
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
								<input name="name" value="${m.name }" type="text" maxlength="30"
									class="input3" size="80" style="width: 200px">
									<span style="color: red;">*</span>
							</td>
							<td rowspan="3" align="right" valign="top" class="font_bule2">
								描述：
							</td>
							<td align="left" rowspan="3">
								<textarea name="remark" id="remark_" cols="30" rows="4" maxlength="100"
									class="input_more">${m.remark}</textarea>
							</td>
						</tr>
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								显示图标：
							</td>
							<td align="left" width="35%">
								<input name="icon" value="${m.icon }" type="text" maxlength="50"
									class="input3" size="80" tyle="width: 200px">
									<span style="color: red;">*</span>
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
									<input name="url" value="${m.url }" type="text" 
									class="input3" size="100" maxlength="300" style="width: 400px">
									<span style="color: red;">*</span>
								</td>
						</tr>
						<tr bgcolor="#f7f7f7" id="linkaddrDeiv2" style="display:${m.menuFunc=='1'?'block':'none'};">
								<td width="15%" align="right" class="font_bule2">
									是否外部地址：
								</td>
								<td align="left" colspan="3">
									<domain:selectDomain value="${m.outerAddr}" domain="YORN"
									name="outerAddr" uid="outerAddr_" />
									&nbsp;
									&nbsp;
									&nbsp;
									<span title="【地址较长时请使用post方式】" class="font_bule2">提交方式：</span>
									<domain:selectDomain value="${m.httpMethod}" domain="HTTPMETHOD"
									name="httpMethod" uid="httpMethod_" />
									
									&nbsp;
									&nbsp;
									&nbsp;
									<span title="Spring中配置的Bean.ID" class="font_bule2">适配器编号：</span>
									<input name="adaptClass" maxlength="30" value="${m.adaptClass}" type="text" class="input3" size="100" style="width: 100px">
								</td>
						</tr>
						
						<tr bgcolor="#f7f7f7" id="mutResourceDiv"
							<logic:equal value="1" name="m" property="menuFunc">style="display: none;"</logic:equal>>
							<td colspan="4" align="center">
								<div id="resouce_content_div"
									style="width: 600px; text-align: center; margin: 0; padding: 0; border: 0;"
									class="font_bule2">
									<div
										style="font-weight: bold; margin: 0; padding: 0; border-bottom: 1px solid #000;">
										<span style="width: 150px;">名称<span style="color: red;">*</span></span>
										<span style="width: 300px; margin-left: 5px;">URI<span style="color: red;">*</span></span>
										<span style="width: 50px; margin-left: 5px;">审计点</span>
										<span style="width: 45px;">&nbsp;</span>
									</div>
									<logic:notEmpty name="resouceList">
										<logic:iterate id="re" name="resouceList">
											<div>
												
												<input class="input3" style="width: 150px;" type="text"
													name="resourceName" value="${re.name}" size="100" />
												<input class="input3"
													style="width: 300px; margin-left: 5px;" type="text"
													name="resourceURI" value="${re.url}" size="100" />
													
												<input style="width: 20px; margin-left: 5px;" onclick="isAuditDefine(this)" 
													type="checkbox" value="false" name="auditPoint" ${re.logPoint=='true'?'checked="checked"':''} />
												<input type="hidden" value="${re.logPoint}" name="logPoint" />
												
												<button style="width: 40px;"
													onclick="this.parentNode.nextSibling.outerHTML = '';this.parentNode.outerHTML = '';">
													删除
												</button>
											</div>
											<div style="display: ${re.logPoint=='true'?'block':'none'};">
												<table width="88%" border="0" align="center" cellpadding="3"
																cellspacing="1" bgcolor="#dfdfdf">
																<tr bgcolor="#f7f7f7">
																	<td width="15%" align="right" class="font_bule2">
																		操作实体：
																	</td>
																	<td align="left" width="35%">
																		<input id="auditEntry_" type="text" name="auditEntry"
																			class="input3" size="80" value="${re.tbmsAuditdefineDTO.auditEntry}"
																			style="width: 180px;height: 18px;" />
																	</td>
									
																	<td width="15%" align="right" class="font_bule2">
																		操作名称：
																	</td>
																	<td align="left" width="35%">
																		<input id="auditOperate_" type="text" name="auditOperate"
																			value="${re.tbmsAuditdefineDTO.auditOperate}" maxlength="20" class="input3" size="80"
																			style="width: 180px;height: 18px;" />
																	</td>
																</tr>
									
																<tr bgcolor="#f7f7f7">
																	<td align="right" valign="top" class="font_bule2">
																		描述模板：
																	</td>
																	<td align="left" colspan="3">
																		<textarea name="descTemplate" cols="60" rows="7" id="descTemplate_"
																			class="input_more" type="_moz">${re.tbmsAuditdefineDTO.descTemplate}</textarea>
																	</td>
																</tr>
									
																<tr bgcolor="#f7f7f7">
																	<td align="right" valign="top" class="font_bule2">
																		成功判定：
																	</td>
																	<td align="left" colspan="3">
																		<textarea name="sucTemplate" cols="60" rows="3" id="sucTemplate_"
																			class="input_more" type="_moz">${re.tbmsAuditdefineDTO.sucessfulTemplate}</textarea>
																	</td>
																</tr>
												</table>
											</div>
											
										</logic:iterate>
									</logic:notEmpty>
									<logic:empty name="resouceList">
										<div>
											<input class="input3" style="width: 150px;" type="text"
												name="resourceName" size="100" />
											<input class="input3" style="width: 300px; margin-left: 5px;"
												type="text" name="resourceURI" size="100" />
											<button style="width: 40px;"
												onclick="this.parentNode.outerHTML = '';">
												删除
											</button>
										</div>
									</logic:empty>
								</div>
								</div>
								<div style="text-align: right; margin-right: 40px;">
									<button
										onclick="$('resouce_content_div').innerHTML += $('resource_souce_div').innerHTML">
										增加行
									</button>
								</div>
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
	
	<!-- 行 -->
	<div style="display: none;" id="resource_souce_div">
		<div
			style="border: 1px dotted blue; margin: 2px; margin: 0; padding: 0; border: 0;">
			<input class="input3" style="width: 150px;" type="text"
				name="resourceName" size="100" />
			<input class="input3" style="width: 300px; margin-left: 5px;" 
				type="text" name="resourceURI" size="100" />
			<input style="width: 20px; margin-left: 5px;" onclick="isAuditDefine(this)" 
								type="checkbox" value="false" name="auditPoint" />
			<input type="hidden" value="false" name="logPoint" />
			<button style="width: 40px;"
				onclick="this.parentNode.nextSibling.outerHTML = '';this.parentNode.outerHTML = '';">
				删除
			</button>
		</div>
		<div style="display: none;">
			<table width="88%" border="0" align="center" cellpadding="3"
							cellspacing="1" bgcolor="#dfdfdf">
							<tr bgcolor="#f7f7f7">
								<td width="15%" align="right" class="font_bule2">
									操作实体：
								</td>
								<td align="left" width="35%">
									<input id="auditEntry_" type="text" name="auditEntry"
										class="input3" size="80"
										style="width: 180px;height: 18px;" />
								</td>

								<td width="15%" align="right" class="font_bule2">
									操作名称：
								</td>
								<td align="left" width="35%">
									<input id="auditOperate_" type="text" name="auditOperate"
										value="" maxlength="20" class="input3" size="80"
										style="width: 180px;height: 18px;" />
								</td>
							</tr>

							<tr bgcolor="#f7f7f7">
								<td align="right" valign="top" class="font_bule2">
									描述模板：
								</td>
								<td align="left" colspan="3">
									<textarea name="descTemplate" cols="60" rows="7" id="descTemplate_"
										class="input_more"></textarea>
								</td>
							</tr>

							<tr bgcolor="#f7f7f7">
								<td align="right" valign="top" class="font_bule2">
									判定模板：
								</td>
								<td align="left" colspan="3">
									<textarea name="sucTemplate" cols="60" rows="3" id="sucTemplate_"
										class="input_more"></textarea>
								</td>
							</tr>
			</table>
		</div>
	</div>
	
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>