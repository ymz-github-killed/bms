<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/view.tld" prefix="view"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
<!--
	function beforeSubmit()
	{
		var keyValue=document.getElementsByName("keyValue");
		var names=document.getElementsByName("resourceName");
		var urls=document.getElementsByName("resourceURI");
		var values="";
		var valueList="";
		if(document.getElementById("menuFunc_").value=="0"){
			if(names.length>1){
				for(var i=0;i< names.length-1;i++){
					if(names[i].value=='' || names[i].value==null || urls[i].value=='' || urls[i].value==null){
						alert("第 "+(i+1)+" 行的名称与url不能为空！");
						return false;
					}else if(names[i].value.length>100){
						alert("第 "+(i+1)+" 行的名称超长！");
						return false;
					}else if(urls[i].value.length>200){
						alert("第 "+(i+1)+" 行的url超长！");
						return false;
					}
					if(keyValue[i].value=='1'){
						alert("key值 1 已存在！");
						return false;
					}else if(keyValue[i].value=='' || keyValue[i].value==null){
						alert("第 "+(i+1)+" 行key值不能为空！")
						return false;
					}else if(keyValue[i].value.length>32){
						alert("第 "+(i+1)+" 行的key值超长！");
						return false;
					}else if(!/^\w+$/g.test(keyValue[i].value)){
						alert("key值只能输入数字、字母及下划线！");
						return false;
					}else{
						if(values==""){
							values=keyValue[i].value;
							valueList="@"+keyValue[i].value+"@";
						}else{
							if(valueList.indexOf("@"+keyValue[i].value+"@")>=0){
								alert("key值不能重复！");
								return false;
							}else{
								values=values+","+keyValue[i].value;
								valueList="@"+keyValue[i].value+"@";
							}
						}
					}
				}
			}else{
				alert("子节点最少添加一行！");
				$('resouce_content_div').innerHTML += $('resource_souce_div').innerHTML;
				return false;
			}
		}
		if(document.getElementById("name_").value == "")
		{
			alert("功能名称不能为空");
			return false;
		}
		
		if(document.getElementById("name_").value.split(" ").length>1){
			alert("功能名称不能有空格");
			return false;
		}
		
		if(document.getElementById("icon_").value.length<1){
			alert("显示图标不能为空");
			return false;
		}
		
		if(document.getElementById("menuFunc_").value=="1"){
			if(document.getElementById("sortNum_").value.length<1){
				alert("顺序值不能为空");
				return false;
			}
		}
		
		if(document.getElementById("remark_").value.length >400)
		{
			alert("备注不能多余400个字符");
			return false;
		}
		if(document.getElementById("menuFunc_").value=="0"){
			var appCode=document.getElementsByName("appCode")[0].value
			jQuery.ajax({
				type: "POST",
				url: "${pageContext.request.contextPath}/bms/adm/bmsrscfunc/findKeyValue.do",
				dataType:"html",
				data: "values="+values+"&appCode="+appCode,
				success: function(msg){
	 				if(msg!='true'){
						alert("key值"+msg+"已存在！");
						return false;
					}else{
						document.frmApply.submit();
					}
				}
			});
		}else{
			document.frmApply.submit();
		}
	}
	
	function $(id)
	{
		return document.getElementById(id);
	}
	
	function isMenuFuncChg(s)
	{
		$("mutResourceDiv").style.display = (s==0)?"block":"none";
		$("linkaddrDeiv").style.display = (s==1)?"block":"none";
		$("linkaddrDeiv2").style.display = (s==1)?"block":"none";
		$("linkaddrDeiv4").style.display = (s==1)?"block":"none";
		$("icon_").value=(s==1)?"/images/1j4.gif":"/images/2j21.gif";
	}
	
	function isAuditDefine(checkBox){
		var divNode=checkBox.parentNode.parentNode.parentNode.nextSibling;

		divNode.style.display =(checkBox.checked)?"block":"none" ;
 		var childs=checkBox.parentNode.childNodes;
 		for(var i=0;i< childs.length;i++){
 			if(childs[i].name=='logPoint'){
 				childs[i].value=checkBox.checked;
 			}
 		}
	}
	
	function rbutton()
	{
	    document.getElementById("rbid_").click();
	}
	
	function addDiv(){
		var a = document.getElementById("resouce_content_div").innerHTML;
		var b = document.getElementById("resource_souce_div").innerHTML;
		document.getElementById("resouce_content_div").innerHTML=a+b;
	}
	
	function clearNoNum(obj) 
	{  
	   var re = /([0-9]{3})[0-9]*/;
	   obj.value = obj.value.replace(re,"$1");
	   obj.value = obj.value.replace(/[^\d]/g,"");  //清除“数字”和“.”以外的字符 
	   obj.value = obj.value.replace(/^0/g,"");  //验证第一个字符是数字而不是0 
	   //obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的. 
	} 

	
//-->
</script>
</HEAD>

<body class="overfwidth">
<div class="barnavtop">您所在的位置：用户管理子系统 &gt; 功能模块管理&gt; 增加功能模块</div>
<div class="workspace1 left" style="padding:20px;">


<div class="editspace">
  <form name="frmApply" action="${pageContext.request.contextPath}/bms/adm/bmsrscfunc/addRscFunc.do"
					target="hideframe" method="post" class="cmxform">
              <fieldset>
                <!--ol 开始-->
                <ol>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>功能名称：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input name="name" id="name_" value="${m.name }" type="text" maxlength="30" class="bgw" >
                    </span>
                    </h1> 
                   </li> 
                   
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>显示图标：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input name="icon" id="icon_" value="${empty m.icon?'/images/1j4.gif': m.icon}" type="text" maxlength="30" class="bgw" >
                    </span></h1> 
                  </li>
                  
                   <li class="listyle_4" id="linkaddrDeiv4">
                     <label class="left pt5"><em>*</em>顺序值：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input name="sortNum" id="sortNum_" value="" type="text" maxlength="30" class="bgw" onkeyup="clearNoNum(this);" >
                    </span>
                    </h1>  
                   </li> 
                  
                  <li class="listyle_4 bordernone">
                     <label class="left pt5">是否菜单：</label>
                        <span>
                        <domain:selectDomain value="1"
									onchange="isMenuFuncChg(this.value)" domain="YORN"
									name="menuFunc" uid="menuFunc_" />
								&nbsp;
								&nbsp;
								&nbsp;
                        </span>
                        <label class="">所属应用：</label>
                        <span>
                       <view:select displayProperty="appName" valueProperty="appCode" name="appCode" items="${_WEB_APPS}"/>
                        </span>
                  </li>
                  
                  <li class="listyle_4" id="linkaddrDeiv">
                    <label class="left pt5">菜单地址：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                    <input name="url" id="url_" maxlength="150" value="${m.url }" type="text" 
									class="wid350" size="150" style="width: 400px">
                    </span></h1> 
                   </li> 
                   
                   <li class="listyle_4 bordernone">
                    <label class="left pt5">描述：</label>
                    <textarea name="remark" id="remark_" cols="80" rows="3">${m.remark}</textarea>
                  </li>
                   
                  <li class="listyle_4 bordernone" id="linkaddrDeiv2">
                     <label class="left pt5">是否外部地址：</label>
                        <span>
                       <domain:selectDomain value="0" domain="YORN"
									name="outerAddr" uid="outerAddr_" />
									&nbsp;
									&nbsp;
									&nbsp;
                        </span>
                        <label class="">提交方式：</label>
                         
                       <span title="【地址较长时请使用post方式】">
									<domain:selectDomain value="2" domain="HTTPMETHOD"
									name="httpMethod" uid="httpMethod_" />
									
									&nbsp;
									&nbsp;
									&nbsp;
                        </span>
                        <label class="">适配器编号：</label>
                        <span>
					 	<input name="adaptClass"  type="text" maxlength="100" class="bgw" title="默认 SSOLogin" value="SSOLogin"  style="width: 100px">
                        </span>
                  </li>
                </ol>
                <!--ol 结束-->               
              </fieldset>
              
               <table width="100%" cellspacing="0" cellpadding="0" border="0" >
                    <tbody>
						<tr id="mutResourceDiv" style="display: none;">
							<td colspan="4" align="center">
								<div id="resouce_content_div"
									style="width: 100%; text-align: center; margin: 0; padding: 0; border: 0;"
									class="font_bule2">
									<div class="eXtremeTable">
								       <ul style="height:29px; list-style: none outside none;">
								       <li class="tableHeader left" style="width:15%">key值<em style="color: #FF6600;">*</em></li>
								       <li class="tableHeader left" style="width:15%">名称<em style="color: #FF6600;">*</em></li>
								       <li class="tableHeader left" style="width:45%">URL<em style="color: #FF6600;">*</em></li>
								       <li  class="tableHeader left" style="width:7%">审计点</li>
							           <li  class="tableHeader left" style="width:10%">操作</li>
							          </ul>
              						</div>
								</div>
								
								<div style="text-align: right; margin-right: 40px;">
									<span class="right"><a href="#" onclick="addDiv()" class="sexybutton"><span><span>添加行</span></span></a> </span>
								</div>
							</td>
						</tr>
						<tr align="center" bgcolor="#f7f7f7">
							<td colspan="4">
							<div class="toolbar">
       							<a href="#" class="sexybutton"
       										onClick="beforeSubmit();return false"><span><span>提交 </span></span></a> 
       						    <a href="#" class="sexybutton"
        									onClick="rbutton()"><span><span>重置 </span></span></a>
        					    <input name="Button5223" type="reset" id="rbid_" value="重填" style="display: none;">
                                <a href="#"   onClick="history.back();"  class="sexybutton"><span><span>返回</span></span></a> 
  								
                             </div>
								 
								
								 
							</td>
						</tr>
					</table>
     </form>
</div>
    
	
	<!-- 行 -->
	<div style="display: none;" id="resource_souce_div" >
		<div class="editspace1" style="border: 1px dotted blue; margin: 2px; margin: 0; padding: 0; border: 0;text-align: center;width: 100%;">
			
			 <ul style="height:29px; list-style: none outside none;">
				 <li class="tableHeader left" style="width:15%">
					<input class="input3" style="width: 130px;" type="text" name="keyValue" maxlength="32"/>
				 </li>
				 <li class="tableHeader left" style="width:15%">
					<input class="input3" style="width: 130px;" type="text" name="resourceName" maxlength="20"/>
				 </li>
				 <li class="tableHeader left" style="width:45%">
				 <input class="input3" style="width: 350px; margin-left: 5px;" 	type="text" name="resourceURI"  />
				</li>
				<li  class="tableHeader left" style="width:7%">
				<input style="width: 20px;text-align: center;" onclick="isAuditDefine(this)" type="checkbox" value="false" name="auditPoint" />
				 <input type="hidden" value="false" name="logPoint" size="0"/>
			   </li>
			  <li  class="tableHeader left" style="width:10%">
			   <div style="width: 40px;" onclick="this.parentNode.parentNode.parentNode.nextSibling.outerHTML = '';this.parentNode.parentNode.parentNode.outerHTML = '';">
				删除
			  </div>
			 </li>
			 </ul>
		</div>
		
		<div style="display: none;" class="eXtremeTable">
		          <table width="100%" border="0" cellpadding="10" cellspacing="0" class="tableRegion mt2" style="margin-bottom:10px;">
		  <tr>
		    <td width="15%" align="right">操作实体：</td>
		    <td width="34%" align="left">
		    <input id="auditEntry_" type="text" name="auditEntry"
										 size="80"
										style="width: 180px;height: 18px;"/>
		     
		    <td width="16%" align="right">操作名称：</td>
		    <td width="35%" align="left">
		    <input type="text"   id="auditOperate_" style="width: 180px;height: 18px;" size="80" class="input3" maxlength="20" value="" name="auditOperate"></td>
		  </tr>
		  <tr>
		    <td align="right" class="font_bule2" valign="top">描述模板：</td>
		    <td><textarea type="_moz" class="input_more"  id="descTemplate_" rows="7" cols="60" name="descTemplate"></textarea></td>
		    <td colspan="2">&nbsp;</td>
		  </tr>
		  <tr>
		    <td align="right" class="font_bule2">判定模板:</td>
		    <td><textarea type="_moz" class="input_more"  id="sucTemplate_" rows="3" cols="60" name="sucTemplate"></textarea></td>
		    <td colspan="2">&nbsp;</td>
		  </tr>
		</table>
		</div> 
	</div>
	
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</HTML>