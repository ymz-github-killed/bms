<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/view.tld" prefix="view"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<title>添加数据字典</title>
		<link href="${pageContext.request.contextPath}/css/yh.css" rel="stylesheet" type="text/css">
		<script type="text/javascript">
		function onFormSubmit()
		{
			if(document.getElementById("name") == "")
			{
				alert("名称不能为空!");
				return false;
			}
			return true;
		}
		
		function beforeSubmit(form){
		
		}
		
		
		function getSelectedValue (id) {
			var checks = document.getElementsByName(id);
			var arry = "";
			for (var i = 0; i < checks.length; i ++) {
				if (checks [i].checked == true) {
					arry += checks [i].value;
				}
			}
			return arry;
		}
		
		
		function doSelectValueType () {
			var v = getSelectedValue ("valueType_");
			var t1 = document.getElementById("tr1");
			var t2 = document.getElementById("tr2");
			if (v == "LIST") {
				t1.style.display = "none";
				t2.style.display = "none";
				
			} else {
				t1.style.display = "";
				t2.style.display = "";
				
			}
		}
		
		
		function setInnerType () {
			var v = getSelectedValue ("dic_inner_");
			if (v == "1") {
				selectIn ();
			} else {
				selectNo ()
			}
		}
		
		function selectIn () {
			if (document.getElementById("name_").value == "") {
				alert ("请先填写字典编码。");
				document.getElementById("name_").focus();
			} else {
				document.getElementById("dic_table_").value = "BMS_DOMAINVALUE";
				document.getElementById("dic_code_fid_").value = "VALUE";
				document.getElementById("dic_name_fid_").value = "LABEL";
				document.getElementById("dic_where_").value = " and DOMAINNAME='" + document.getElementById("name_").value + "'";
				document.getElementById("dic_order_").value = "INDEXSEQUNCE";
				document.getElementById("level_").value = "LEV";
				document.getElementById("parentId_").value = "PARENTID";
				document.getElementById("id_").value = "ID";
			}
		}
		
		
		function selectNo () {
			document.getElementById("level_").value = "";
			document.getElementById("parentId_").value = "";
			document.getElementById("id_").value = "";
			document.getElementById("dic_table_").value = "";
			document.getElementById("dic_code_fid_").value = "";
			document.getElementById("dic_name_fid_").value = "";
			document.getElementById("dic_where_").value = "";
			document.getElementById("dic_order_").value = "";
		}
		
		</script>
	</head>
	<body onload="setInnerType()">
	
	<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="25" bgcolor="#DDFAFE">
								&nbsp;&nbsp;
								<span class="font_blue_title">您所在的位置：数据字典子系统 &gt; 字典管理</span>
								<span class="font_blue_title">&gt; 新增字典</span>
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
							action="${pageContext.request.contextPath}/bms/domain/bmsdomain/addBmsDomain.do"
							target="hideframe" method="post"
							onsubmit="return beforeSubmit(this);">
					<table width="98%" border="0" align="center" cellpadding="3"
						cellspacing="1" bgcolor="#dfdfdf">
						<tr bgcolor="#f7f7f7">
						 <!-- 
							<td width="15%" align="right" class="font_bule2">
								所属应用：
							</td>
							<td align="left" width="35%">
								<view:select displayProperty="appName" valueProperty="appCode" name="appCode" items="${_WEB_APPS}"/>
							</td>
						  -->	
							<td width="15%" align="right" class="font_bule2">
								字典编码:
							</td>
							<td align="left" width="35%">
								<input id="name_" type="text" name="name"
									value="" maxlength="20" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
							
							<td width="15%" align="right" class="font_bule2">
								字典名称：
							</td>
							<td align="left" width="35%">
								<input id="remark_" type="text" name="remark"
									value="" maxlength="20" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						</tr>
						
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								字典类型：
							</td>
							<td align="left" width="35%">
								<domain:radioDomain domain="DOMAINTYPE" name="valueType"
									uid="valueType_" value="LIST" onclick="doSelectValueType()" />
							</td>
						<!-- 
							<td width="15%" align="right" class="font_bule2">
								可修改:
							</td>
							<td align="left" width="35%">
								<domain:radioDomain domain="YORN" name="canmodify"
									uid="canmodify_" value="0" />
							</td>
						 -->
						 <td width="15%" align="right" class="font_bule2">
								是否内部字典：
							</td>
							<td align="left" width="35%">
							<domain:radioDomain domain="YORN" name="dic_inner" uid="dic_inner_"
									value="0" onclick="setInnerType()" />
							</td>
						</tr>
						<div id="">
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								字典表：
							</td>
							<td align="left" width="35%">
								<input id="dic_table_" type="text" name="dic_table"
									value="" maxlength="20" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						 <td width="15%" align="right" class="font_bule2">
								值字段：
							</td>
							<td align="left" width="35%">
								<input id="dic_code_fid_" type="text" name="dic_code_fid"
									value="" maxlength="20" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						</tr>
						
						
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								名称字段：
							</td>
							<td align="left" width="35%" >
								<input id="dic_name_fid_" type="text" name="dic_name_fid"
									value="" maxlength="20" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						 	
						 	<td width="15%" align="right" class="font_bule2">
								过滤条件：
							</td>
							<td align="left" width="35%">
								<input id="dic_where_" type="text" name="dic_where"
									value="" maxlength="200" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						</tr>
											
						
						<tr bgcolor="#f7f7f7">
				            <td align="right" valign="top" class="font_bule2">排序规则：</td>
				            <td align="left" colspan="3" >
				            	<input type="text" class="input3" name="dic_order" id="dic_order_" maxlength="500" style="width: 200px;height: 16px;" />
				            </td>
				        </tr>
				        
				        
						<tr bgcolor="#f7f7f7" id="tr1" style="display: none">
							<td width="15%" align="right" class="font_bule2">
								主键字段：
							</td>
							<td align="left" width="35%" >
								<input id="id_" type="text" name="id"
									value="" maxlength="50" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						 	
						 	<td width="15%" align="right" class="font_bule2">
								父主键字段：
							</td>
							<td align="left" width="35%">
								<input id="parentId_" type="text" name="parentId"
									value="" maxlength="50" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						</tr>
						
				        
				        <tr bgcolor="#f7f7f7" id="tr2" style="display: none">
				            <td align="right" valign="top" class="font_bule2">层级字段：</td>
				            <td align="left" colspan="3" >
				            	<input type="text" class="input3" name="level" id="level_" style="width: 200px;height: 16px;" maxlength="50" />
				            </td>
				        </tr>
				        
						
						<tr bgcolor="#f7f7f7">
				            <td align="right" valign="top" class="font_bule2">描述：</td>
				            <td align="left" colspan="3" >
				            	<textarea name="remark" cols="60" rows="5" id="remark_" class="input_more">${m.remark}</textarea>
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
	
		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
		
	</body>
</html>
