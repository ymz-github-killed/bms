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
			//�����¼���������:�޸ĺ���ʾ����
			window.addEvent('domready', function(){
				new Tips($$('.Tipsshow'), {
					className: 'custom'
				});

				ajaxVisit("${pageContext.request.contextPath}/bms/adm/addUserForLocationList1.jsp","list1");
				ajaxVisit("${pageContext.request.contextPath}/bms/adm/bmslocation/listSelectedUser.do?id=${param.id}","list2");

			});
			
			//�ύ������������������͵��ƶ�ҳ��
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
						<img alt="���ڸ���" src="${pageContext.request.contextPath}/images/spinner.gif" border="0" />
						���ݼ����У����Ժ򡢡��� ������
					</div>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="25" bgcolor="#DDFAFE">
								&nbsp;&nbsp;
								<span class="font_blue_title">�����ڵ�λ�ã�ϵͳ������ϵͳ &gt; ���Ź���</span>
								<span class="font_blue_title">&gt; �༭�ɷ��ʸò��ŵ��û��б�</span>
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
					<b>��ӿɷ����û�</b>
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
								alert("���������֯��������ѡ���Ż�������ٵ������ť");
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
						webFXTreeConfig.defaultText     = '�ڵ�';
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
						���ڼ�������... ...
					</div>
					<div style="color: blue;font-weight: bold;">
						ע����ȫ����ӡ���ʾ������Ӹ���֯�����������ӻ����������û�
					</div>
					<div>
						<button class="button5 Tipsshow" title="���� :: ���ѡ�е��û���¼�������У���ɾ��δѡ�еļ�¼" onclick="addSelectUser()">
							�ύ
						</button>&nbsp;
						<button class="button5 Tipsshow" title="���� :: 1��ע����ȫ����ӡ���ʾ������Ӹ���֯�����������ӻ����������û�<br />2��<b style='color:red;'>�����ܿ��ܺķѽϳ�ʱ�䣬�����ĵȺ�</b>" onclick="addAllUser()">
							ȫ�����
						</button>&nbsp;
						<button class="button5"  onclick="location.href='${pageContext.request.contextPath}/bms/adm/bmslocation/detailBmsLocation.do?id=${param.id}'">
							��ɲ�����
						</button>
					</div>
				</td>
			</tr>
			<tr style="background: #fff">
				<td colspan="2" id="list2" valign="top">
					���ڼ�������... ...
				</td>
			</tr>
		</table>
		<div id="tempScript" style="display: none;"></div>
	</body>
</html>
