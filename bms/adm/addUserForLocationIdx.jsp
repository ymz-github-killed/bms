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
		<link href="${pageContext.request.contextPath}/css/yh.css"
			rel="stylesheet" type="text/css">
		<link
			href="${pageContext.request.contextPath}/css/extremecomponents.css"
			type="text/css" rel="stylesheet">
		<script type="text/javascript"
			src="${pageContext.request.contextPath}/js/mootools-release-1.11.js"></script>
		<script type="text/javascript"
			src="${pageContext.request.contextPath}/common/xloadtree/xtree.js"></script>
		<script type="text/javascript"
			src="${pageContext.request.contextPath}/common/xloadtree/xmlextras.js"></script>
		<script type="text/javascript"
			src="${pageContext.request.contextPath}/common/xloadtree/xloadtree.js"></script>
		<link type="text/css" rel="stylesheet"
			href="${pageContext.request.contextPath}/common/xloadtree/xtree.css" />

		<style type="text/css">
.custom-tip {
	color: #000;
	width: 130px;
	z-index: 13000;
	border: 1px solid blue;
}

.custom-title {
	font-weight: bold;
	font-size: 12px;
	margin: 0;
	color: #fff;
	padding: 8px 8px 4px;
	background: #6699cc;
	overflow: visible;;
}

.custom-text {
	font-size: 12px;
	padding: 4px 8px 8px;
	background: #fefefe;
}
</style>
		<script type="text/javascript">
		
			function getChecks(name,ischeck)
			{
				var re = new Array();
				var ck = document.getElementsByName(name);
				for(var i=0; i<ck.length; i++)
				{
					if(ck[i].checked == ischeck)
					{
						re.push(ck[i].value);
					}
				}
				return re;
			}
			function sumitsels(id)
			{
				var chks = getChecks("ckids",true);
				var notChks = getChecks("ckids",false);
				
				var url = "${pageContext.request.contextPath}/bms/adm/bmslocation/saveLocationUser.do";
				document.hideframe.location.href=url + "?chks=" + chks + "&notChks=" + notChks;
			}
			//增加事件监听机制:修改后提示保存
			window.addEvent('domready', function(){
				new Tips($$('.Tipsshow'), {
					className: 'custom'
				});

				ajaxVisit("${pageContext.request.contextPath}/bms/adm/addUserForLocationList1.jsp","list1");
				ajaxVisit("${pageContext.request.contextPath}/bms/adm/bmslocation/listSelectedUser.do?id=${param.id}","list2");

			});
			
			//提交表单，并将反馈结果发送到制定页面
			function submitForm(f,u)
			{
					showWait(true);
					$(f).send({
							update: $(u),
							method:'post',
							onComplete: function(e){
								showWait(false);
							},
							evalScripts:true
						});
			}
			
			function ajaxVisit(url,update)
			{
				url += url.indexOf("?")!=-1?"&":"?";
				url += "r_=" + Math.random();
				new Ajax(url, {method: 'get',evalScripts:true,update:update}).request();
			}
			function showWait(tf)
			{
				$("waiting_img").style.display = tf?"block":"none";
			}
		</script>
	</head>
	<body style="font-size: 12px;">
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<div id="waiting_img" style="display: none;position: absolute;right: 200px;top: 0px; margin:0;border:0; z-index: 1000;color: red" >
						<img alt="正在更新" src="${pageContext.request.contextPath}/images/spinner.gif" border="0" />
						数据加载中，请稍候、、、 、、、
					</div>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="25" bgcolor="#DDFAFE">
								&nbsp;&nbsp;
								<span class="font_blue_title">您所在的位置：系统管理子系统 &gt; 部门管理</span>
								<span class="font_blue_title">&gt; 编辑可访问该部门的用户列表</span>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>

		<table width="100%" border="0" cellpadding="0" cellspacing="2"
			bgcolor="#0C87CD">
			<tr>
				<td colspan="2" style="background: #f0f0f0;">
					<b>添加可访问用户</b>
				</td>
			</tr>
			<tr style="background: #fff">
				<td width="35%" valign="top">
					<div id="tree" style="overflow: auto; height: 270px;">
						<script type="text/javascript">
						var selid = false;
						function sel(id)
						{
							selid = id;
							ajaxVisit("${pageContext.request.contextPath}/bms/adm/bmslocation/listUserForSel.do?id=" + id,"list1");
						}
						
						function addSelectUser()
						{
							var ary = getChecks("ckids",true);
							var nochk = getChecks("ckids",false);
							
							ajaxVisit("${pageContext.request.contextPath}/bms/adm/bmslocation/addSelectedUser.do?chks="+ary.join(",") + "&nochks="+nochk.join(","),"tempScript");
						}
						
						function addAllUser()
						{
							var ck = document.getElementsByName("ckids");
							for(var i=0; i<ck.length; i++)
							{
								ck[i].checked =true;
							}
								
							if(!selid)
							{
								alert("请在左侧组织机构树上选择部门或机构后再点击本按钮");
								return;
							}
							else
							{
								ajaxVisit("${pageContext.request.contextPath}/bms/adm/bmslocation/addAllUser.do?id=" + selid,"tempScript");
							}
						}
					
						webFXTreeConfig.rootIcon       = '${pageContext.request.contextPath}/common/xloadtree/images/foldericon.png';
						webFXTreeConfig.openRootIcon   = '${pageContext.request.contextPath}/common/xloadtree/images/openfoldericon.png';
						webFXTreeConfig.folderIcon      = '${pageContext.request.contextPath}/common/xloadtree/images/foldericon.png';
						webFXTreeConfig.openFolderIcon  = '${pageContext.request.contextPath}/common/xloadtree/images/openfoldericon.png';
						webFXTreeConfig.fileIcon        = '${pageContext.request.contextPath}/common/xloadtree/images/file.png';
						webFXTreeConfig.iIcon           = '${pageContext.request.contextPath}/common/xloadtree/images/I.png';
						webFXTreeConfig.lIcon           = '${pageContext.request.contextPath}/common/xloadtree/images/L.png';
						webFXTreeConfig.lMinusIcon      = '${pageContext.request.contextPath}/common/xloadtree/images/Lminus.png';
						webFXTreeConfig.lPlusIcon       = '${pageContext.request.contextPath}/common/xloadtree/images/Lplus.png';
						webFXTreeConfig.tIcon           = '${pageContext.request.contextPath}/common/xloadtree/images/T.png';
						webFXTreeConfig.tMinusIcon      = '${pageContext.request.contextPath}/common/xloadtree/images/Tminus.png';
						webFXTreeConfig.tPlusIcon       = '${pageContext.request.contextPath}/common/xloadtree/images/Tplus.png';
						webFXTreeConfig.blankIcon       = '${pageContext.request.contextPath}/common/xloadtree/images/blank.png';
						webFXTreeConfig.defaultText     = '节点';
						webFXTreeConfig.defaultAction   = '${pageContext.request.contextPath}/common/xloadtree/javascript:void(0);';
						webFXTreeConfig.defaultBehavior = 'classic';
						webFXTreeConfig.usePersistence	= true;
						
						var tree = new WebFXLoadTree("${root.name}","${pageContext.request.contextPath}/bms/adm/bmslocation/listDeptChildsAjaxTree.do?pid=${root.id}","javascript:sel('${root.id}');");
						document.write(tree);
					</script>
					</div>
				</td>
				<td valign="top">
					<div id="list1" >
						正在加载数据... ...
					</div>
					<div style="color: blue;font-weight: bold;">
						注：“全部添加”表示您将添加该组织机构及所属子机构的所有用户
					</div>
					<div>
						<button class="button5 Tipsshow" title="帮助 :: 添加选中的用户记录到部门中，并删除未选中的记录" onclick="addSelectUser()">
							提交
						</button>&nbsp;
						<button class="button5 Tipsshow" title="帮助 :: 1、注：“全部添加”表示您将添加该组织机构及所属子机构的所有用户<br />2、<b style='color:red;'>本功能可能耗费较长时间，请耐心等候</b>" onclick="addAllUser()">
							全部添加
						</button>&nbsp;
						<button class="button5"  onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=${param.id}'">
							完成并返回
						</button>
					</div>
				</td>
			</tr>
			<tr style="background: #fff">
				<td colspan="2" id="list2" valign="top">
					正在加载数据... ...
				</td>
			</tr>
		</table>
		<div id="tempScript" style="display: none;"></div>
	</body>
</html>
