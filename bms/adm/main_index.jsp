<%@ page contentType="text/html;charset=GBK"%>
<%@ page import="com.sinovatech.common.config.GlobalConfig,java.net.URLEncoder"%>
<%@ page import="com.sinovatech.bms.adm.model.dto.TBmsUserDTO"%>
<%@ page import="com.sinovatech.common.config.GlobalConfig"%>
<% 
		TBmsUserDTO tBmsUserDTO = (TBmsUserDTO)request.getSession().getAttribute("loginUser");
		String username="";
		if(tBmsUserDTO!=null)
		{
			username=tBmsUserDTO.getUserLoginName();
		}
		
%>	
<html xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ include file="/public/indexheader.jsp"%>
<head>
<!-- ztree -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/zTreeStyle/zTreeStyle.css" type="text/css">
<script src="${pageContext.request.contextPath}/js/jquery-min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.ztree.core-3.5.min.js"></script>
<!-- easyuitree -->
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/themes/icon.css">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.easyui.min.js"></script>
<script src="${pageContext.request.contextPath}/js/navtree.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>
<meta http-equiv="pragma" content="no-cache" />
<%
	    //String contextUrl = request.getContextPath();
		String url = GlobalConfig.getProperty("bms", "indexurl");
		//String indexUrl = contextUrl+url;
		
		//url = URLEncoder.encode(url, "GBK");
		//url=url.replaceAll("%2F", "/");
	//String treeType = GlobalConfig.getProperty("bmstheme", "mainTree");
	String treeType = "zTree";
 %>
<style type="text/css">
#iframeBoxCont .ContIframe {
	display:none;
}

#iframeBoxCont .iframeHover {
	display:block;
}

</style>

<script type="text/javascript">
function showTree(array){
	$('#tree').tree({
		data:array,
		animate:true,
		onClick: function(node){
			var SystemName = node.text;
			var value = node.value;
			var id = node.id;
			callback(SystemName,value,id);
		},
		onDblClick: function(node) {  
		    $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);  
		    node.state = node.state === 'closed' ? 'open' : 'closed';  
		} 
	});
}
function sel(event,treeId,treeNode){
	var SystemName = treeNode.name;
	var value = treeNode.value;
	var id = treeNode.id;
	callback(SystemName,value,id);
}	

function callback(SystemName,value,id){
	if(value == "exitUser"){
		if(confirm("确定要退出吗？")){
			location.href="${pageContext.request.contextPath}/bms/adm/loadapp.do?id="+id;
		}else{
			return false;
		}
	}
	var treeHref = "";
	if(value == "loadapp"){
		treeHref = "${pageContext.request.contextPath}/bms/adm/loadapp.do?id="+id;
	}
	if(value == "todo"){
		treeHref="${pageContext.request.contextPath}/bms/adm/todo.do";
	}
	if(treeHref== null || treeHref=='' || treeHref=='null' || treeHref.indexOf('javascript')!=-1){
		return false;
	}
	var ulText = $("#UlMenu").html();
	iframeHtml = $('#iframeBoxCont').html();
	addTitle(treeHref, SystemName, ulText);
	onClickEventBinding();
	return false;
}

var mainLiNum = $("#UlMenu li").length;
//检查菜单的宽度决定是否给显示左右按钮
function scrollAuto() {
	try{
		var liWidth = 0;
		var menuObj = $('.mainBoxTitle');
		var i = $("#UlMenu li").length;
		for(m=0;m<=i;m++){
			liWidth +=  $("#UlMenu li").eq(m).width();
		}
		widthSize = document.body.clientWidth;
		liWidth += (i-1)*30+25;
		//alert(widthSize+"  i="+i);
		//if (widthSize > 950) {
			menuObj.width(widthSize - 188);
			//alert(liWidth+" > "+menuObj.width());
			if (liWidth > menuObj.width()) {
				$("#UlMenu").width(liWidth);//.css({'margin-left':-(liWidth-menuObj.width()+20)});
				$('.leftBtn,.rightBtn').show();
			} else {
				$("#UlMenu").css({'position':'static'});
				$("#UlMenu").css({'width':'auto','margin-left':'0px'});
				$('.leftBtn,.rightBtn').hide();
			}
		//}
	}catch(e){
	}
}
//点击左右按钮事件
function clickLeftRight (){
	var menuUlW = $("#UlMenu").width();
	var menuBoxW = $('.mainBoxTitle').width();
	var moveW = -((menuUlW-menuBoxW)+20);
	$('.leftBtn').click(function(){
		$("#UlMenu").css({'margin-left':getWidth('left',200)});
	});
	$('.rightBtn').click(function(){
		$("#UlMenu").css({'margin-left':getWidth('right',200)});
	});
	function getWidth(LeftOrRight,speed){
		var direction = LeftOrRight;
		if (direction == 'left') {
				moveW = 17;
		}else {
			moveW = -menuUlW + menuBoxW-20;
		}
		return moveW;
	}
}
//绑定点击菜单
var onClickEventBinding=function (){
	//点击标签，显示内容
	$('.mainBoxTitle ul li').click(function(){
			$('.mainBoxTitle ul li').removeClass('mainHover');
			var j = $('.mainBoxTitle ul li').index(this);
			$('#iframeBoxCont .ContIframe').hide();
			$('#iframeBoxCont .ContIframe').eq(j).show();
			$(this).addClass('mainHover');
			return false;
	});
	//点击关闭标签
	$('.mainBoxTitle ul li .closeMenu').click(function(){
		mainLiNum = $("#UlMenu li").length;
		for(m=0;m<mainLiNum;m++) {
			var testCont = $('li b',$("#UlMenu")).eq(m).text();
			if($(this).eq(0).attr("title")==testCont){
				$('#iframeBoxCont .ContIframe').eq(m).remove();
			}
		}
		$(this).parent('li').remove();
		$('.mainBoxTitle ul li').removeClass('mainHover');
		$('.mainBoxTitle ul li').eq(0).addClass('mainHover');
		$('#iframeBoxCont .ContIframe').eq(0).show().addClass('iframeHover');
		 scrollAuto();
		ulText = $("#UlMenu").html();
		iframeHtml = $('#iframeBoxCont').html();
	})
}
//点击左边树时执行判断添加或选中右边菜单
function addTitle(_src,_text,_ulText){
		mainLiNum = $("#UlMenu li").length;
		var mainTitle = "<li class='mainHover'><b>" + _text + "</b><span title='" + _text + "' class='closeMenu'>&nbsp;</span></li>";
		var iframeBoxCont = "<iframe  class='ContIframe iframeHover' width='100%' src="+ _src +" frameborder='0' style='overflow:auto;overflow-x:hidden;height:100%;' onload='loadAutoHeight()'></iframe>";
		//=================b_text修补老版本标签名有包含关系如法打开的问题====================
		//兼容性考虑将ulText与b_text都做字母小写处理
		var b_text = "<b>"+_text+"</b>" 
		if(_ulText.toLowerCase().indexOf(b_text.toLowerCase())==-1){//判断主菜单是否有相同的菜单
			//var NoTitle = $("#UlMenu .mainHover b").text();
			if(mainLiNum<11){//判断主菜单标题是否是空白页
				$('li',$("#UlMenu")).removeClass('mainHover');
				$('#iframeBoxCont .ContIframe').removeClass('iframeHover').hide();
				ulText = $("#UlMenu").html();
				iframeHtml = $('#iframeBoxCont').html();
				document.getElementById('UlMenu').innerHTML = ulText+mainTitle;
				var icont = $(iframeBoxCont);
				$('#iframeBoxCont').append(icont);
				//document.getElementById('iframeBoxCont').innerHTML = iframeHtml + iframeBoxCont;
				ulText = $("#UlMenu").html();
				iframeHtml = $('#iframeBoxCont').html();
				scrollAuto();//判断是否要加左右按钮
				var liWidth = 0;
				var menuObj = $('.mainBoxTitle');
				var i = $("#UlMenu li").length;
				for(m=0;m<=i;m++){
					liWidth +=  $("#UlMenu li").eq(m).width();
				}
				widthSize = document.documentElement.clientWidth;
				liWidth += (i-1)*30+25;
				if (widthSize > 950) {
					menuObj.width(widthSize - 188);
					if (liWidth > menuObj.width()) {
						$("#UlMenu").width(liWidth).css({'margin-left':-(liWidth-menuObj.width()+20)});
						//$("#UlMenu").width(menuObj.width()-100).css({'margin-left':-(liWidth-menuObj.width()+20)});
						$('.leftBtn,.rightBtn').show();
					} else {
						$("#UlMenu").css({'position':'static'});
						$("#UlMenu").css({'width':'auto','margin-left':'0px'});
						$('.leftBtn,.rightBtn').hide();
					}
				}
			} else {
				//执行弹出已添加的菜单窗口
				var menuTitle = '';
				for(i=1;i<11;i++) {
					menuTitle += "<li><input type='checkbox' value="+i+">"+ $("#UlMenu li b").eq(i).text() + "</li>";
				}
				$('.moreTen').show().css({'left':500,'top':200});
				$('.moreTen ul').html(menuTitle);
				//BindCheckBox(); 
			}
		} else {
			//菜单已打开执行
			
			mainLiNum = $("#UlMenu li").length;
			document.getElementById('UlMenu').innerHTML=ulText;
			$('li',$("#UlMenu")).removeClass('mainHover');
			for (i = 0;i<mainLiNum;i++) {
				var testCont = $('li b',$("#UlMenu")).eq(i).text();
				
				if (testCont==_text) {
					$('li',$("#UlMenu")).eq(i).addClass('mainHover');
					$('#iframeBoxCont .ContIframe').hide();
					$('#iframeBoxCont .ContIframe').eq(i).show().attr('src',_src);
				} 
			}
		}
		clickLeftRight ();
		onClickEventBinding();
	}
jQuery(function(){
	var treetype = "<%=treeType%>";
	getTree("${pageContext.request.contextPath}/bms/adm/bmstree/left.do",treetype);

	var widthSize = document.documentElement.clientWidth;
	var heightSize = document.documentElement.clientHeight;
   
	//判断iframeurl
	
	var url_4A=document.getElementById('hidden_4Aurl').value;
	var indexurl=document.getElementById('hidden_url').value;	
    var tempUrl=document.getElementById('urlTemp').value;
	var iframe_url=document.getElementById('divurl');

	if(url_4A!=''&&url_4A!=null){
	    //alert(1);
		iframe_url.src=url_4A;
	}else if(indexurl!=''&&indexurl!=null&&tempUrl!='null'){
        //alert(2);
		iframe_url.src=indexurl;
	}else{
        //alert(3);
		iframe_url.src='todo.do';
	}
	function autoHeight(){
		try{
			widthSize = document.documentElement.clientWidth;
			heightSize = document.documentElement.clientHeight;
			if(widthSize<=950){
				$('.container').css({'width':'auto','overflow':'hidden'});
				$('.ContIframe').contents().find("body").css({'width':'748px'});
			}else {
				$('.container').css({'width':'auto'});
				$('.ContIframe').contents().find("body").css({'width':widthSize-202});
			}
			if(heightSize<=513) {
				//$('.simpleTree').height(331);
				$('.mainBoxCont').height(352);
				$('.ContIframe').height(352);
			}else {
				//$('.simpleTree').height(heightSize-197);
				$('.mainBoxCont').height(heightSize-160);
				$('.ContIframe').height(heightSize-175);
			}
		}catch(e){
			
		}
	};

	

	// 打开和关闭树
	$('.CloseAndOpen').toggle(
		function(){
			$('#leftTree').hide();
			$('img',this).attr('src','../../public/images/l_middle_mOpen.jpg');
		},
		function(){
			$('#leftTree').show();
			$('img',this).attr('src','../../public/images/l_middle_m.jpg');
		}
	);
	//周报查询 -> 部门工作查询
	$('.openListBox').click(function(){
		$('.workListBox').show();
	})
	$('.openList').toggle(
		function(){
			$('.workList').show();
			$(this).css('background-position','left bottom');
		},
		function(){
			$('.workList').hide();
			$(this).css('background-position','left top');
		}
	);
	
	// 未点击左边树的时候控制右边的Menu菜单
	$('.mainBoxTitle ul li').click(function(){
			$('.mainBoxTitle ul li').removeClass('mainHover');
			$(this).addClass('mainHover');
			ulText = $("#UlMenu").html();
			iframeHtml = $('#iframeBoxCont').html();
			return false;
	});
	// 点击左边树的时候控制右边的Menu菜单
	$('.simpleTree a').click(function(){
		ulText = obj.html();
		iframeHtml = $('#iframeBoxCont').html();
		var treeHref = $(this).attr('href');

		if(treeHref== null || treeHref=='' || treeHref=='null' || treeHref.indexOf('javascript')!=-1){
			return false;
		}
		var SystemName = $(this).text();
		if(SystemName=='退出'){
			SystemName='';
			return false;
		}
		addTitle(treeHref,SystemName,ulText);
		onClickEventBinding();
		return false;
	});

	//点击关闭添加的菜单事件
	$('.closeMenuListBox').click(function(){
		removeMenu();
		ulText = $("#UlMenu").html();
		iframeHtml = $('#iframeBoxCont').html();
		//$('.moreTen').hide();
	});
	//关闭弹出框
	$('.closeMoreBox').click(function(){
		$('.moreTen').hide();
	})
	//执行关闭菜单的方法
	function removeMenu(){
		var checkboxObj = $('.moreTen li');
		var n = $('input:checked',checkboxObj).length-1;
		mainLiNum = $("#UlMenu li").length;
		if (mainLiNum == 11 && n >= 0) {
			for (i = n; i >= 0; i--) {
				var checkNum = $('input:checked', checkboxObj).eq(i).attr('value');
				checkNum = parseInt(checkNum);
				$("#UlMenu li").eq(checkNum).remove();
				$('#iframeBoxCont .ContIframe').eq(checkNum).remove();
				scrollAuto();
			}
			$('#UlMenu li').removeClass('mainHover');
			$('#iframeBoxCont .ContIframe').removeClass('iframeHover');
			$('#UlMenu li').eq(0).addClass('mainHover');
			$('#iframeBoxCont .ContIframe').eq(0).addClass('iframeHover').show();
			$('.moreTen').hide();
		}else if(n<0){
			alert("您没有选择关闭任何窗口！");
		} else {
			alert('ok!');
		}
	}



	//关闭所有已打开的窗口
	$('.closeAll').click(function(){
		var liNum = $('#UlMenu li').length;
		if(liNum===1){
			alert('您没有打开任何窗口！')
		}else {
			liNum -= 1; 
			for(i=liNum;i>0;i--){
				$("#UlMenu li").eq(i).remove();
				$('#iframeBoxCont .ContIframe').eq(i).remove();
				$('.mainBoxTitle ul li').eq(0).addClass('mainHover');
				$('#iframeBoxCont .ContIframe').eq(0).show().addClass('iframeHover');
			}
			$('.moreTen').hide();
		}
	}).mouseover(function(){
		$('.closeNote').show();
	}).mouseout(function(){
		$('.closeNote').hide();
	})
	window.onresize=autoHeight;
	window.onresize=scrollAuto;
	window.onresize=loadAutoHeight;
	//window.setInterval(autoHeight, 1000);
	//系统自动执行检查菜单宽度的变化
	//window.setInterval(scrollAuto,1000)
	
	//window.setTimeout(autoHeight, 1000);
	//autoHeight();
 
})
var bodyHeight=0;
function loadAutoHeight(){
		widthSize = document.body.clientWidth;
		heightSize = document.body.clientHeight;
        if(bodyHeight==0){
        	bodyHeight=heightSize;
        }else{
        	heightSize=bodyHeight;
        }
        $(".simpleTree_1").height(heightSize-147);
	try{
		if(widthSize<950){
			$('.container').css({'width':'950px'});
			$('.ContIframe').css({'width':'100%'});
			$('.mainBoxTitle').css({'width':'100%'});
		}else{
			$('.container').css({'width':'100%'});
			$('.ContIframe').css({'width':'100%'});
			$('.mainBoxTitle').css({'width':'100%'});
		}
		if(isFirefox=navigator.userAgent.indexOf("Firefox")>0) { 
			if(heightSize<=513) {
				$('.mainBoxCont').height(heightSize-143);
				$('.ContIframe').height(heightSize-143);
				$('.simpleTree').height(heightSize-168);
			}else {
				$('.mainBoxCont').height(heightSize-143);
				$('.ContIframe').height(heightSize-143);
				$('.simpleTree').height(heightSize-168);
			}
		}else{
			if(heightSize<=513) {
				$('.mainBoxCont').height(heightSize-134);
				$('.ContIframe').height(heightSize-134);
				$('.simpleTree').height(heightSize-160);
			}else {
				$('.mainBoxCont').height(heightSize-134);
				$('.ContIframe').height(heightSize-134);
				$('.simpleTree').height(heightSize-160);
			}
		}
	}catch(e){
		if(heightSize<=513) {
			$('.mainBoxCont').height(heightSize-160);
			$('.ContIframe').height(heightSize-160);
			$('.simpleTree').height(heightSize-160);
		}else {
			$('.mainBoxCont').height(heightSize-160);
			$('.ContIframe').height(heightSize-160);
			$('.simpleTree').height(heightSize-160);
		}
	}
}

function showmain(){

	
	var title = $('#mainCont .mainBoxTitle ul');
	$('li',title).removeClass('mainHover');
	$('li',title).eq(0).addClass('mainHover');
	$('#iframeBoxCont .ContIframe').hide();
	$('#iframeBoxCont .ContIframe').eq(0).show().attr('src','/fmccbms/bms/adm/loadapp.do?id=4028825628d8fa7f0128d91ae1160016');
	

}

</script>
<script language="javascript" src="${pageContext.request.contextPath}/js/title.js"></script>
</head>

<body style="overflow-y:auto">
<div class="container">
	<jsp:include page="./main_top.jsp"></jsp:include>
	<table width="100%" cellpadding="0" cellspacing="0">
		<tr>
			<td width="173" id="leftTree" valign="top" style="border:2px solid #3b89d1;border-top:none;vertical-align:top;">
			<!-- 主菜单 -->
					<div class="l_left">
						<div class="l_left_top01"><b><%=username %></b></div>
						<div class="l_left_top02"><b>后台管理系统</b></div>
						<div class="l_left_cont">
						<div id="tree_area" style="overflow: auto;">
						 <ul class="simpleTree_1" style="overflow:auto">
								<div id="tree"></div>
							</ul>
						</div>
						</div>
					</div>
			</td>
			<td width="8" valign="middle" style="vertical-align:top;">
				<div class="middle_top"></div>
				<div class="CloseAndOpen middle_center"></div>
				<div  class="middle_bottom"></div>
			</td>
			<td id="mainCont" class="mainBox" valign="top"  style="vertical-align:top;">
				<div class="mainBoxTitle">
					<div class="leftBtn"></div>
					<ul id="UlMenu">
						<li class="mainHover"><b>首页</b></li>
					</ul>
					<div class="closeAll"><img src="../../public/images/manuClose.png" title="关闭全部" alt="关闭全部" /></div>
					<div class="closeNote">关闭全部</div>
					<div class="rightBtn"></div>
				</div> 
				<div id="iframeBoxCont" class="mainBoxCont" style="overflow:auto;clear:both;width:100%">
					 <%-- 
					    <iframe class="ContIframe iframeHover" src="${targetUrl==null?'todo.do':targetUrl }" frameborder="0"  style="overflow:auto; overflow-x:scroll;width:100%" onload='loadAutoHeight()'></iframe> 
					  --%>
					
					<%--   <input type='hidden' id='hidden_url' value="${targetUrl}"> --%>
					  <input type='hidden' id='urlTemp' value="<%=url%>">
					  <input type='hidden' id='hidden_url' value="<%=url%>">
					  <input type='hidden' id='hidden_4Aurl' value="${targetUrl}">
					  <iframe class="ContIframe iframeHover" id='divurl'  frameborder="0"  style="overflow:auto; overflow-x:scroll;width:100%" onload='loadAutoHeight()'></iframe> 

				</div>
			</td>
		</tr>
	</table>
	<div><jsp:include page="./main_bottom.jsp"></jsp:include></div>
</div>
<div class="moreTen" style="width:450px;height:240px;">
	<div style="color:blue;margin-left:-15px; font-size:14px;background:none;"><b>您打开的窗口已经超过10个！请关闭您不用的窗口！</b></div>
	<ul style="padding:10px 0;_padding:5px 0;">
	</ul>
	<div style="padding:10px 0 0 80px;background:none;clear:both;">
		<input type="button" value="确 定" class="pClocs_button closeMenuListBox" />
		<input type="button" value="取 消" class="pClocs_button closeMoreBox" />
	</div>
</div>
</body>
</html>


