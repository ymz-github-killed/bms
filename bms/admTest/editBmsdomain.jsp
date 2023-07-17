<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/view.tld" prefix="view"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<title>编辑数据字典</title>
		<link href="${pageContext.request.contextPath}/css/yh.css"
			rel="stylesheet" type="text/css">
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
	<body>

		<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="25" bgcolor="#DDFAFE">
								&nbsp;&nbsp;
								<span class="font_blue_title">您所在的位置：数据字典子系统 &gt; 字典管理</span>
								<span class="font_blue_title">&gt; 编辑数据字典</span>
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
						action="${pageContext.request.contextPath}/bms/domain/bmsdomain/editBmsDomain.do"
						target="hideframe" method="post"
						onsubmit="return beforeSubmit(this);">
						<table width="98%" border="0" align="center" cellpadding="3"
							cellspacing="1" bgcolor="#dfdfdf">
							<tr bgcolor="#f7f7f7">
							 
								<td width="15%" align="right" class="font_bule2">
								字典编码:
							</td>
							<td align="left" width="35%">
								<input id="name_" type="text" name="name"
									value="${m.name }" readonly="readonly" maxlength="20" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
							
							<td width="15%" align="right" class="font_bule2">
								字典名称：
							</td>
							<td align="left" width="35%">
								<input id="remark_" type="text" name="remark"
									value="${m.remark }" maxlength="20" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						</tr>
						
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								字典类型：
							</td>
							<td align="left" width="35%">
								<domain:radioDomain domain="DOMAINTYPE" name="valueType"
									uid="valueType_" value="${m.valueType}" onclick="doSelectValueType()" />
							</td>
						
						 <td width="15%" align="right" class="font_bule2">
								是否内部字典：
							</td>
							<td align="left" width="35%">
								<domain:radioDomain domain="YORN" name="dic_inner" uid="dic_inner_"
									value="${m.dic_inner}" onclick="setInnerType()" />
							</td>
						</tr>
						
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								字典表：
							</td>
							<td align="left" width="35%">
								<input id="dic_table_" type="text" name="dic_table"
									value="${m.dic_table }" maxlength="20" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						 <td width="15%" align="right" class="font_bule2">
								值字段：
							</td>
							<td align="left" width="35%">
								<input id="dic_code_fid_" type="text" name="dic_code_fid"
									value="${m.dic_code_fid }" maxlength="20" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						</tr>
						
						
						<tr bgcolor="#f7f7f7">
							<td width="15%" align="right" class="font_bule2">
								名称字段：
							</td>
							<td align="left" width="35%" >
								<input id="dic_name_fid_" type="text" name="dic_name_fid"
									value="${m.dic_name_fid }" maxlength="20" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						 	
						 	
						 	<td width="15%" align="right" class="font_bule2">
								过滤条件：
							</td>
							<td align="left" width="35%">
								<input id="dic_where_" type="text" name="dic_where"
									value="${ m.dic_where}" maxlength="200" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						 	
							
						</tr>
						
						<tr bgcolor="#f7f7f7">
				            <td align="right" valign="top" class="font_bule2">排序规则：</td>
				            <td align="left" colspan="3" >
				            	<input type="text" name="dic_order" id="dic_order_" maxlength="500" value="${m.dic_order }" />
				            </td>
				        </tr>
						
						<tr bgcolor="#f7f7f7" id="tr1" style="display: none">
							<td width="15%" align="right" class="font_bule2">
								主键字段：
							</td>
							<td align="left" width="35%" >
								<input id="id_" type="text" name="id"
									value="${m.id }" maxlength="50" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						 	
						 	<td width="15%" align="right" class="font_bule2">
								父主键字段：
							</td>
							<td align="left" width="35%">
								<input id="parentId_" type="text" name="parentId"
									value="${m.parentId} " maxlength="50" class="input3"
									size="80" style="width: 200px;height: 16px;" />
							</td>
						</tr>
						
				        
				        <tr bgcolor="#f7f7f7" id="tr2" style="display: none">
				            <td align="right" valign="top" class="font_bule2">层级字段：</td>
				            <td align="left" colspan="3" >
				            	<input type="text" class="input3" value="${m.level} " name="level" id="level_" style="width: 200px;height: 16px;" maxlength="50" />
				            </td>
				        </tr>
						
						
							<tr bgcolor="#f7f7f7">
								<td align="right" valign="top" class="font_bule2">
									描述：
								</td>
								<td align="left" colspan="3">
									<textarea name="remark" cols="60" rows="5" id="remark_"
										class="input_more">${m.remark}</textarea>
								</td>
							</tr>

							<tr align="center" bgcolor="#f7f7f7">
								<td colspan="4">
									<input name="Button5222" type="submit" class="button5"
										value="提交" style="width: 60px">
									<input name="Button5223" type="reset" class="button5"
										value="重填" style="width: 60px">
									<input name="Button22" type="button" class="button5" value="返回"
										onclick="javascript:location.href='${pageContext.request.contextPath}/bms/domain/bmsdomain/queryBmsDomain.do'" style="width: 60px;">
								</td>
							</tr>
						</table>
					</form>
				</td>
			</tr>


			<tr>
				<td colspan="4">
					&nbsp;
				</td>
			</tr>

			<tr>
				<td colspan="4"
					style="background: #f0f0f0; font-weight: bold; font-size: 14px;">
					&nbsp;&nbsp;字典值定义
				</td>
			</tr>
			
			<tr bgcolor="#f7f7f7" >
				<td colspan="4" align="center">
					<iframe name="domainValue" width="95%" height="400" align="middle" id="domainValueIframe"
						scrolling="auto" frameborder="0"
						src="${pageContext.request.contextPath}/bms/domain${m.valueType=='TREE'?'/domainvalue_index.jsp':'/bmsdomainvalue/queryBmsDomainvalue.do'}?domainId=${m.name}&domainType=${m.valueType }"></iframe>
				</td>
			</tr>

		</table>



		<!-- 数据提交部门，不能删除 -->
		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>

	</body>
</html>

