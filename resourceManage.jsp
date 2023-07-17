<%@ page language="java"
	import="com.sinovatech.readconfig.bean.ResourceBean,java.util.*,com.sinovatech.readconfig.util.ReadConfigUtil"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<script type="text/javascript">
	function msg(){
		if("${msg}"!=""){
			alert("${msg}");
		}
	}
	//全选or取消全选
	function isSelAll(itemName){
		var isChecked = document.getElementsByName(itemName);
		var itemAttr = document.getElementsByName(itemName+"_");
		if(isChecked[0].checked){
			for(var i = 0; i < itemAttr.length;i++){
				itemAttr[i].checked = true;
			}
		}else{
			for(var i = 0; i < itemAttr.length;i++){
				itemAttr[i].checked = false;
			}
		}
	}
	//批量删除
	function btn_click_delete(){
		var ids= getChecks().join(",");		
		if(ids == "" || ids == null){
			alert("请选择一条或多条记录!");
			return false;
		}else{
			isConfirm(ids);
		}
	}
	//获取选中的checkbox
	function getChecks(){
		var re = new Array();
		var domList = document.getElementsByTagName("input");
	    var checkBoxList = []; 
	  	var len = domList.length;　
	   　	//缓存到局部变量
	    while (len--) {　　
	 　　		if (domList[len].type == "checkbox") {   
	  　			checkBoxList.push(domList[len]);　
	  		}  
		} 
		if(checkBoxList.length > 0){
			for(var k = 0; k < checkBoxList.length; k++){
				if(checkBoxList[k].checked && checkBoxList[k].value != "on"){
					re.push(checkBoxList[k].value);
				}
			}
		} 
		return re;
	}
	//是否确定删除
	function isConfirm(id){
		if(confirm("确定要删除吗？")){
			window.location = "<%=request.getContextPath()%>/ResourceManagerServlet?method=dele&id="+id+"&t="+Math.random();
		}else{
			return false;
		}
	}
	//重置
	function btn_click_reset(){
		document.getElementById("addForm").reset();
	}
	//保存
	function btn_click_save(){
		var checkList = [[],[]];
		checkList[0] = [ 'paraType_', '参数类别', 50, 1 ,1 ];
		checkList[1] = [ 'key_', '属性编码', 100, 1, 1, 0 ];
		var bool = checkStr(checkList);
		if(!bool){
			return false;
		}
		document.getElementById("addForm").submit();
	}
	//字符长度，包括汉字。
	function countCharacters(content){
	    var totalCount = 0; 
	    for (var i=0; i<content.length; i++) { 
	        var c = content.charCodeAt(i); 
	        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
	             totalCount++; 
	         }else {     
	             totalCount+=2; 
	         } 
	     }
	    return totalCount;
	}
	//验证内容为0时不验证0:id--1:名称--2：长度--3：不为空--4：不能有空格
	function checkStr(str){
		for(var i=0;i<str.length;i++){
			var str2=document.getElementById(str[i][0]).value;
			if(countCharacters(str2)>str[i][2] && str[i][2]!=0){
				alert("“"+str[i][1]+"”长度不能超过"+str[i][2]+"个字符！");
				return false;
			}
			if(str[i].length>3 && str[i][3]==1 && str2.length<1){
				alert("“"+str[i][1]+"”不能为空！");
				return false;
			}
			if(str[i].length>4 && str[i][4]==1 && str2.split(" ").length>1){
				alert("“"+str[i][1]+"”不能有空格！");
				return false;
			}
		}
		return true;
	}
	//编辑
	function beforeEdit(id,paraName,key,value,remark){
		document.getElementById("id_").value = id;
		document.getElementById("paraType_").value = paraName;
		document.getElementById("key_").value = key;
		document.getElementById("value_").value = value;
		document.getElementById("remark_").value = remark;
	}
	
	function btn_click_updateCache(){
		window.location = "<%=request.getContextPath()%>/ResourceManagerServlet?method=init&t="+Math.random();
	}
</script>
<%List<ResourceBean> rbList = (List<ResourceBean>) request.getAttribute("list"); 
%>
<body onload="msg()">
	<center>
		<div style="width:80%">
			<form name="search"
				action="<%=request.getContextPath()%>/ResourceManagerServlet?method=query&t=<%=Math.random()%>"
				method="post">
				<table algin='center' width='100%' border='1' cellspacing='0'
					cellpadding='0'>
					<tr style='background-color:gray'>
						<td colspan="2">查询</td>
					</tr>
					<tr>
						<td>参数类别：<input type="text" name="paraType" /> 属性编码：<input
							type="text" name="key" /> 属性值：<input type="text" name="value" /> 描述：<input
							type="text" name="remark" /></td>
						<td><input type="submit" value="查询" />
						<% if(rbList.size()>0){
							out.print("<input type='button' value='批量删除' onclick='btn_click_delete()'/>");
						}else{
							out.print("<input type='button' value='批量删除' disabled='disabled'/>");
						}%>
							
						
						</td>
					</tr>
				</table>
				<hr>
			</form>
			<%
				String tabEnd = "</table><hr> ";
				for (int i = 0; i < rbList.size(); i++) {
					if (i == 0 || rbList.get(i).getParaType() != null && !rbList.get(i).getParaType()
									.equals(rbList.get(i - 1).getParaType())) {
						if (i > 0) {
							out.print(tabEnd);
						}
						out.print("<div  style='text-align:left;width:100%'>类别：【"
								+ rbList.get(i).getParaType() + "】</div>");
						String tabStart = "<table algin='center' width='100%' border='1' cellspacing='0' cellpadding='0'>";
						tabStart += "<tr style='background-color:gray'>";
						tabStart += "<td width='10px'><input type='checkbox' name='"
								+ rbList.get(i).getParaType() + "' onclick='isSelAll(this.name)'/></td>";
						tabStart += "<td style='word-break:break-all; word-wrap:break-word;'>属性编码</td>";
						tabStart += "<td style='word-break:break-all; word-wrap:break-word;'>属性值</td>";
						tabStart += "<td style='word-break:break-all; word-wrap:break-word;'>描述</td>";
						tabStart += "<td>操作</td>";
						tabStart += "</tr>";
						out.print(tabStart);
					}
					String tabTrData = "<tr>";
					if(rbList.get(i).getIsEdit()!=1){
						tabTrData += "<td ><input type='checkbox' name='"
							+ rbList.get(i).getParaType() + "_' value='"
							+ rbList.get(i).getId() + "'/></td>";
					}else{
						tabTrData+="<td >&nbsp;</td>";
					}
					String tempRemark = rbList.get(i).getRemark()==""?"&nbsp;":rbList.get(i).getRemark();
					String tempValue = rbList.get(i).getValue()==""?"&nbsp;":rbList.get(i).getValue();
					tabTrData += "<td style='word-break:break-all; word-wrap:break-word;'>" + rbList.get(i).getKey() + "</td>";
					tabTrData += "<td style='word-break:break-all; word-wrap:break-word;'>" + (tempValue) + "</td>";
					tabTrData += "<td style='word-break:break-all; word-wrap:break-word;'>" + (tempRemark) + "</td>";
					tabTrData += "<td>";
					if(rbList.get(i).getIsEdit()!=1){
						tabTrData += "<a href='###' onclick=\"beforeEdit('"+rbList.get(i).getId()+"','"+rbList.get(i).getParaType()+"','"+rbList.get(i).getKey()+"','"+rbList.get(i).getValue()+"','"+rbList.get(i).getRemark()+"')\">编辑</a> ";
						tabTrData += "<a href='###' onclick=\"isConfirm('"+rbList.get(i).getId()+"')\">删除</a> ";
					}else{
						tabTrData+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
					}
					tabTrData += "</td>";
					tabTrData += "</tr>";
					out.print(tabTrData);
					if (i == rbList.size() - 1) {
						out.print(tabEnd);
					}
				}
			%>
			<form action="<%=request.getContextPath()%>/ResourceManagerServlet?method=add&t=<%=Math.random()%>" id="addForm" method="post">
				<input type="hidden" name="id" id="id_"/>
				<table  width='100%' border='1' cellspacing='0'
						cellpadding='0'>
					<tr style='background-color:gray'>
						<td colspan="2">新增/更新</td>
					</tr>
					<tr>
						<td align="center">
							<table width='453px' border='1' cellspacing='0' cellpadding='0'>
								<tr>
									<td align="right" width="100px"><font color="red">*</font>参数类别：</td><td><input type="text" name="paraType" id="paraType_" style="width:353px; padding:0px; margin:0px"/></td>
								</tr>
								<tr>
									<td align="right" width="100px"><font color="red">*</font>属性编码：</td><td><input type="text" name="key" id="key_" style="width:353px; padding:0px; margin:0px" /></td>
								</tr>
								<tr>
									<td  align="right" width="100px">属性值：</td>
									<td align="right" width="100px"><textarea rows="1" cols="100" style="width:353px; padding:0px; margin:0px" name="value" id="value_"></textarea></td>
								</tr>
								<tr>
									<td align="right"  width="100px">描述：</td>
									<td align="right" width="100px" ><textarea rows="1" cols="100" style="width:353px; padding:0px; margin:0px" name="remark" id="remark_"></textarea></td>
								</tr>
								<tr>
									<td colspan="2" align="center"><input type="button" value="保存" onclick="btn_click_save()"/><input type="button" value="重置" onclick="btn_click_reset()"/><input type="button" style="background:pink" value="更新缓存" title="编辑、新增、删除操作后更新缓存中的配置项！" onclick="btn_click_updateCache()"/></td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</center>
</body>

</html>