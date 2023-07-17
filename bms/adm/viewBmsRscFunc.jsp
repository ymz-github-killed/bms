<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/view.tld" prefix="view"%>
<%@ taglib uri="/WEB-INF/tld/struts-logic.tld" prefix="logic"%>
<%@ taglib uri="/WEB-INF/tld/c.tld" prefix="c" %>
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
<script src="${pageContext.request.contextPath}/js1.6/jQuery/jquery.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
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
	function showAuditDefine(id,img){
 		var isOpen=img.title.indexOf('查看')>=0;
 		var path='${pageContext.request.contextPath}/images/define/';
 		//var div=img.parentNode.nextSibling;
 		var div=document.getElementById(id);
 		div.style.display=isOpen?'block':'none';
		img.title=(isOpen?'关闭审计日志定义':'查看审计日志定义');
		img.src=(path+(isOpen?'Lminus.png':'Lplus.png'));
	}
//-->
</script>
</head>
<body class="overfwidth">
<div class="barnavtop">您所在的位置：系统管理 > 功能权限 > 查看功能模块</div>
<div class="workspace1 left" style="padding:20px;">
<div class="toolbar">
       	<a href="#" class="sexybutton"
       	onClick="MM_goToURL('self','${pageContext.request.contextPath}/bms/adm/bmsrscfunc/beforeAddBmsRscFunc.do');return document.MM_returnValue"><span><span>新增下级功能模块

</span></span></a> 
        <a href="#" class="sexybutton"
        onClick="MM_goToURL('self','${pageContext.request.contextPath}/bms/adm/bmsrscfunc/beforeEditBmsRscFunc.do');return document.MM_returnValue"><span><span>编辑

</span></span></a>
        <a href="#"   onClick="return del();"  class="sexybutton"><span><span>删除</span></span></a> 
  
 </div>
  <div class="editspace">

        <form id="" action="" class="cmxform" method="post" name="formName">
        <fieldset>
        <legend>基本信息</legend>
        <ol>  
            <li>
                  <table width="100%" cellspacing="0" cellpadding="0" border="0" class="table">
                    <tbody>
                    	<tr>
                        <td width="17%" align="right" height="30">节点ID：</td>
                        <td width="83%" align="left">${m.id }</td>
                      </tr>
                    	
                      <tr>
                        <td width="17%" align="right" height="30">功能名称：</td>
                        <td width="83%" align="left">${m.name }</td>
                      </tr>
                      <tr>
                        <td align="right" height="30">显示图标：</td>
                        <td align="left">
                        	<c:choose >
                        		<c:when test="${m.icon==null}">无</c:when>
                        		<c:otherwise>${m.icon }</c:otherwise>
                        	</c:choose>
                        </td>
                      </tr>
                      <tr>
                        <td align="right" height="30">是否菜单：</td>
                        <td align="left" height="30">
                        	<c:choose >
                        		<c:when test="${m.menuFunc==1}">是</c:when>
                        		<c:otherwise>否</c:otherwise>
                        	</c:choose>
                        </td>
                      </tr>
                      <c:choose >
                       		<c:when test="${m.menuFunc==1}">
                       			<tr>
			                        <td width="17%" align="right" height="30">顺序值：</td>
			                        <td width="83%" align="left">
			                        	<c:choose >
			                        		<c:when test="${m.sortNum==null}">无</c:when>
			                        		<c:otherwise>${m.sortNum} </c:otherwise>
			                        	</c:choose>
			                        </td>
			                      </tr>
                       		</c:when>
                       </c:choose>
                      
                        <tr>
                        <td align="right" height="30">所属应用：</td>
                        <td align="left" height="30">
                        	<c:choose >
                        		<c:when test="${m.appCode==null}">无</c:when>
                        		<c:otherwise>${m.appCode}</c:otherwise>
                        	</c:choose>
                        </td>
                      </tr>
                       <tr>
                        <td align="right" height="30">描述：</td>
                        <td align="left" height="30">
                        	<c:choose >
                        		<c:when test="${m.remark==null}">无</c:when>
                        		<c:otherwise>${m.remark} </c:otherwise>
                        	</c:choose>
                        </td>
                      </tr>
                        <tr id="linkaddrDeiv" <logic:equal value="0" name="m" property="menuFunc">style="display: none;"</logic:equal>>
                        <td align="right" height="30" style="border: 0pt none;">菜单地址：</td>
                        <td align="left" height="30" style="border: 0pt none;">${m.url }</td>
                      </tr>
				      </tbody>
                     </table>
            </li>            
        </ol>
     </fieldset>
   </form>
</div>

   

      <logic:notEmpty name="resouceList">
	 <form method="post" class="cmxform" action="">
	   <fieldset>
        <legend>功能点对应的权限资源</legend>
     </fieldset>
       </form>
	   </logic:notEmpty>
 <div class="eXtremeTable" <logic:equal value="1" name="m" property="menuFunc">style="display: none;"</logic:equal>>
    <ul style="height:29px; list-style: none outside none;">
       <li class="tableHeader left" style="width:20%">key值</li>
       <li class="tableHeader left" style="width:20%">名称</li>
       <li class="tableHeader left" style="width:50%">URL</li>
       <li  class="tableHeader left">审计点</li>
       
    </ul>
		  
           
	 <logic:notEmpty name="resouceList">
		 <logic:iterate id="re" name="resouceList">
			 <div class="editspace" style="display: block">          
			 			 <input readonly="readonly" class="byw " type="text" name="keyValue" value="${re.keyValue}" style="width:20%">
                  		 <input readonly="readonly" class="byw " type="text" name="resourceName" value="${re.name}" style="width:20%">
                  		 <input readonly="readonly" class="input wid350" type="text" name="resourceURI" value="${re.url}" style="padding-left:16px;width:49%;height:18px;">
                  	     <c:if test="${re.logPoint=='true'}">
						 <img src="${pageContext.request.contextPath}/images/define/Lplus.png" onclick="showAuditDefine('${re.id}',this)" title="查看审计日志定义"/>
						 </c:if>
						  <c:if test="${re.logPoint!='true'}">
						 <img src="${pageContext.request.contextPath}/images/define/blank.png"/>
						 </c:if>
 			 </div> 
 										
		 <div style="display: none" id="${re.id}">
		      
		 <table width="100%" border="0" cellpadding="10" cellspacing="0" class="tableRegion mt2" style="margin-bottom:10px;" >
		  <tr>
		    <td width="15%" align="right">操作实体：</td>
		    <td width="34%" align="left"><input type="text"  style="width: 180px;height: 18px;" value="${re.tbmsAuditdefineDTO.auditEntry}" readonly="readonly" ></td>
		    <td width="16%" align="right">操作名称：</td>
		    <td width="35%" align="left"><input type="text"  value="${re.tbmsAuditdefineDTO.auditOperate}"  readonly="readonly" style="width: 180px;height: 18px;" size="80" class="input3" maxlength="20" value="" name="auditOperate" id="auditOperate_"></td>
		  </tr>
		  <tr>
		    <td align="right" class="font_bule2" valign="top">描述模板：</td>
		    <td><textarea type="_moz" class="input_more"  id="descTemplate_" rows="7" cols="60" name="descTemplate" readonly="readonly">${re.tbmsAuditdefineDTO.descTemplate}</textarea></td>
		    <td colspan="2">&nbsp;</td>
		  </tr>
		  <tr>
		    <td align="right" class="font_bule2">成功判定：</td>
		    <td><textarea type="_moz" class="input_more"  id="sucTemplate_" rows="3" cols="60" name="sucTemplate" readonly="readonly" >${re.tbmsAuditdefineDTO.sucessfulTemplate}</textarea></td>
		    <td colspan="2">&nbsp;</td>
		  </tr>
		</table>
  		</div>
		</logic:iterate>
		</logic:notEmpty>
		</div>
 
							
</div>
</body>
</html>
	 
	<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>