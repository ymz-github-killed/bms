<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HTML xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css">
<script src="${pageContext.request.contextPath}/common/xloadtree/xtree.js"></script>
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/common/xloadtree/xtree.css">
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
function setDeptForParent(id,name)
{
	parent.$("deptname_").value = name;
	parent.$("deptid_").value = id;
	parent.showSelDiv('deptDiv',true);
}

function sel()
{
}

function selAll()
{
	var ns = document.getElementsByName("tree_chk");
	for(var i=0; i<ns.length; i++)
	{
		ns[i].checked = true;
	}
}

function submitForm()
{
	var ns = document.getElementsByName("tree_chk");
	var bool=false;
	for(var i=0; i<ns.length; i++)
	{
		if(ns[i].checked){
			bool=true;
			break;
		}
	}
	alert(bool);
	if(bool){
		document.form1.submit();
	}else{
		alert("请选择，至少一项！");
		return false;
	}
}

function deSelAll()
{
	var ns = document.getElementsByName("tree_chk");
	for(var i=0; i<ns.length; i++)
	{
		ns[i].checked = false;
	}
}

var webFXTreeConfig = {
				rootIcon        : '${pageContext.request.contextPath}/common/xloadtree/images/foldericon.png',
				openRootIcon    : '${pageContext.request.contextPath}/common/xloadtree/images/openfoldericon.png',
				folderIcon      : '${pageContext.request.contextPath}/common/xloadtree/images/foldericon.png',
				openFolderIcon  : '${pageContext.request.contextPath}/common/xloadtree/images/openfoldericon.png',
				fileIcon        : '${pageContext.request.contextPath}/common/xloadtree/images/file.png',
				iIcon           : '${pageContext.request.contextPath}/common/xloadtree/images/I.png',
				lIcon           : '${pageContext.request.contextPath}/common/xloadtree/images/L.png',
				lMinusIcon      : '${pageContext.request.contextPath}/common/xloadtree/images/Lminus.png',
				lPlusIcon       : '${pageContext.request.contextPath}/common/xloadtree/images/Lplus.png',
				tIcon           : '${pageContext.request.contextPath}/common/xloadtree/images/T.png',
				tMinusIcon      : '${pageContext.request.contextPath}/common/xloadtree/images/Tminus.png',
				tPlusIcon       : '${pageContext.request.contextPath}/common/xloadtree/images/Tplus.png',
				blankIcon       : '${pageContext.request.contextPath}/common/xloadtree/images/blank.png',
				defaultText     : '节点',
				defaultAction   : '${pageContext.request.contextPath}/common/xloadtree/javascript:void(0);',
				defaultBehavior : 'classic',
				usePersistence	: true
			};
		
			var root;
			<%=request.getAttribute("tree")%>		
	</script>
<body class="overfwidth">
<div class="barnavtop">您所在的位置：系统管理 > 角色管理 > 定义角色权限</div>
<div id="workspace">
	<!--主体 开始-->
  <div id="container"> 
    <div class="editspace">
                 <div class="mb10"><form method="post" class="cmxform">
        <fieldset>
        <legend>请勾选下列权限名称，对XXX进行授权:</legend>
        </fieldset>
        </form></div>              
     <form name="form1" action="${pageContext.request.contextPath}/bms/adm/bmsuserfunc/defineRscForBmsUser.do" method="post" target="hideframe">
    <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
	<tbody>
	<tr>
		<td valign="top">
		<table width="100%" align="center" height="100%">
			<tbody>
			<tr valign="top">
				<td valign="top">
					<div >
						<a  href="javascript:sel('1')">后台管理系统</a>
					</div>
					<div style="display: block;" class="webfx-tree-container" id="webfx-tree-object-3-cont">
						<script type="text/javascript">
							document.write(root);
						</script>
				  	</div>
				</td>
			</tr>
		</tbody></table>
		</td>
	</tr>
</tbody></table> 
</form>
        <!--searchForm 开始-->
    </div>
 <div class="toolbar" style="text-align:center;">
       	<a href="#" onClick="submitForm();return false" class="sexybutton"><span><span>提交授权</span></span></a> 
        <a href="#" class="sexybutton" onclick="selAll()"><span><span>全部选择</span></span></a>
        <a href="#" class="sexybutton" onclick="deSelAll()"><span><span>全部取消</span></span></a>
        <a href="#" class="sexybutton" onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmsrole/beforeEditBmsRole.do?id=${roid}'"><span><span>返回

</span></span></a>        
        
        </div>
        <!--searchForm 结束-->

    </div>
</div>
</body>
</html>
