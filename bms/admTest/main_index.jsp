<!--  %@ page contentType="text/html;charset=GBK"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<script language="javascript" src="${pageContext.request.contextPath}/js/title.js"></script>
</head>
<frameset rows="77,*" cols="*" framespacing="0" border="0" frameborder="0">
  <frame src="${pageContext.request.contextPath}/bms/adm/top.do" name="top" noresize marginwidth="0" marginheight="0" id="top" scrolling="no">
  <frameset rows="*,50" framespacing="0" border="0" frameborder="0">
    <frameset cols="173,*" name="topwin" id="topwin" framespacing="0" border="0" frameborder="0">
      <frame src="${pageContext.request.contextPath}/bms/adm/left.do" name="left"  noresize marginwidth="0" marginheight="0" id="left">
      <frameset cols="0,9,*" framespacing="0" border="0" frameborder="0">
		<frame src="" name="middle23" noresize marginwidth="0" marginheight="0" id="middle23" scrolling="no">
        <frame src="${pageContext.request.contextPath}/bms/adm/main_middle.jsp" name="middle" noresize marginwidth="0" marginheight="0" id="middle" scrolling="no">
        <frame src="${pageContext.request.contextPath}/bms/adm/todo.do" name="welcome" noresize marginwidth="0" marginheight="0" id="main">
        
      </frameset>
    </frameset>
    <frame src="${pageContext.request.contextPath}/bms/adm/main_bottom.jsp" name="bottom" noresize marginwidth="0" marginheight="0" id="bottom" scrolling="no">
  </frameset>
</frameset> 
<noframes><body>
</body></noframes>
</html  -->
<%@ page contentType="text/html;charset=GBK"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ include file="/public/indexheader.jsp"%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>
<style type="text/css">
#iframeBoxCont .ContIframe {
	display:none;
}

#iframeBoxCont .iframeHover {
	display:block;
}

</style>

<script type="text/javascript">
jQuery(function($){
	var widthSize = document.documentElement.clientWidth;
	var heightSize = document.documentElement.clientHeight;
	function autoHeight(){
	try{
		widthSize = document.documentElement.clientWidth;
		heightSize = document.documentElement.clientHeight;
		//alert($('.container').width());
		//alert(widthSize);
		alert("ok");
		if(widthSize<=950){
			$('.container').css({'width':'950px','overflow':'hidden'});
			$('.ContIframe').contents().find("body").css({'width':'748px'});
		}else {
			$('.container').css({'width':'auto'});
			$('.ContIframe').contents().find("body").css({'width':widthSize-202});
		}
		if(heightSize<=513) {
			//alert('1');
			$('.simpleTree').height(331);
			$('.mainBoxCont').height(352);
			$('.ContIframe').height(352);
		}else {
			//alert('2');
			$('.simpleTree').height(heightSize-197);
			$('.mainBoxCont').height(heightSize-175);
			$('.ContIframe').height(heightSize-175);
		}
	}catch(e){
		
	}
	};
	//autoHeight();
	
	
		// Left Tree
	simpleTreeCollection = $('.simpleTree').simpleTree({
		autoclose: true,
		drag:false
	});
	
	// Open and Close Left Tree
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
	

	var obj = $('#mainCont .mainBoxTitle ul');
	var ulText = obj.html();
	var mainLiNum = $("#UlMenu li").length;
	// 未点击左边树的时候控制右边的Menu菜单
	$('.mainBoxTitle ul li').click(function(){
			$('.mainBoxTitle ul li').removeClass('mainHover');
			$(this).addClass('mainHover');
			ulText = obj.html();
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
		addTitle(treeHref,SystemName,ulText);
		onClickEventBinding();
		return false;
	});
	//点击左边树时执行判断添加或选中右边菜单
	function addTitle(_src,_text,_ulText){
		mainLiNum = $("#UlMenu li").length;
		var mainTitle = "<li class='mainHover'><b>" + _text + "</b><span title='" + _text + "' class='closeMenu'>&nbsp;</span></li>";
		var iframeBoxCont = "<iframe  class='ContIframe iframeHover' width='100%' src="+ _src +" frameborder='0' style='overflow:auto;overflow-x:hidden;' onload='loadAutoHeight()'></iframe>";
		if(_ulText.indexOf(_text)==-1){//判断主菜单是否有相同的菜单
			//var NoTitle = $("#UlMenu .mainHover b").text();
			if(mainLiNum<11){//判断主菜单标题是否是空白页
				$('li',obj).removeClass('mainHover');
				$('#iframeBoxCont .ContIframe').removeClass('iframeHover').hide();
				ulText = obj.html();
				iframeHtml = $('#iframeBoxCont').html();
				document.getElementById('UlMenu').innerHTML = ulText+mainTitle;
				var icont = $(iframeBoxCont);
				$('#iframeBoxCont').append(icont);
				//document.getElementById('iframeBoxCont').innerHTML = iframeHtml + iframeBoxCont;
				ulText = obj.html();
				iframeHtml = $('#iframeBoxCont').html();
				//scrollAuto();//判断是否要加左右按钮
				var liWidth = 0;
				var menuObj = $('.mainBoxTitle');
				var i = $("#UlMenu li").length;
				//alert(i)
				for(m=0;m<=i;m++){
					liWidth +=  $("#UlMenu li").eq(m).width();
				}
				widthSize = document.documentElement.clientWidth;
				liWidth += (i-1)*30+25;
				if (widthSize > 950) {
					menuObj.width(widthSize - 185);
					if (liWidth > menuObj.width()) {
						$("#UlMenu").width(liWidth).css({'margin-left':-(liWidth-menuObj.width()+20)});
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
				$('.moreTen').show().css({'left':widthSize/2-125,'top':heightSize/2-50});
				$('.moreTen ul').html(menuTitle);
				//BindCheckBox();
			}
		} else {
			mainLiNum = $("#UlMenu li").length;
			document.getElementById('UlMenu').innerHTML=ulText;
			$('li',obj).removeClass('mainHover');
			for (i = 0;i<mainLiNum;i++) {
				var testCont = $('li b',obj).eq(i).text();
				if (testCont==_text) {
					$('li',obj).eq(i).addClass('mainHover');
					$('#iframeBoxCont .ContIframe').hide();
					$('#iframeBoxCont .ContIframe').eq(i).show().attr('src',_src);
				} 
			}
		}
		clickLeftRight ();
		onClickEventBinding();
	}
	//点击关闭添加的菜单事件
	$('.closeMenuListBox').click(function(){
		removeMenu();
		ulText = obj.html();
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

	//绑定点击菜单
	var onClickEventBinding=function (){
		$('.mainBoxTitle ul li').click(function(){
				$('.mainBoxTitle ul li').removeClass('mainHover');
				var j = $('.mainBoxTitle ul li').index(this);
				$('#iframeBoxCont .ContIframe').hide();
				$('#iframeBoxCont .ContIframe').eq(j).show();
				$(this).addClass('mainHover');
				return false;
		});

		$('.mainBoxTitle ul li .closeMenu').click(function(){
			mainLiNum = $("#UlMenu li").length;
			for(m=0;m<mainLiNum;m++) {
				var testCont = $('li b',obj).eq(m).text();
				if($(this).eq(0).attr("title")==testCont){
					$('#iframeBoxCont .ContIframe').eq(m).remove();
				}
			}
			$(this).parent('li').remove();
			$('.mainBoxTitle ul li').removeClass('mainHover');
			$('.mainBoxTitle ul li').eq(0).addClass('mainHover');
			$('#iframeBoxCont .ContIframe').eq(0).show().addClass('iframeHover');
			 scrollAuto();
			ulText = obj.html();
			iframeHtml = $('#iframeBoxCont').html();
		})
	}; 
	//检查菜单的宽度决定是否给显示左右按钮
	function scrollAuto() {
	try{
		var liWidth = 0;
		var menuObj = $('.mainBoxTitle');
		var i = $("#UlMenu li").length;
		//alert(i)
		for(m=0;m<=i;m++){
			liWidth +=  $("#UlMenu li").eq(m).width();
		}
		widthSize = document.documentElement.clientWidth;
		liWidth += (i-1)*30+25;
		if (widthSize > 950) {
			menuObj.width(widthSize - 185);
			if (liWidth > menuObj.width()) {
				$("#UlMenu").width(liWidth);//.css({'margin-left':-(liWidth-menuObj.width()+20)});
				$('.leftBtn,.rightBtn').show();
			} else {
				$("#UlMenu").css({'position':'static'});
				$("#UlMenu").css({'width':'auto','margin-left':'0px'});
				$('.leftBtn,.rightBtn').hide();
			}
		}
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
//				if ((menuUlW - menuBoxW) > menuBoxW && moveW<0) {
//					moveW = moveW + speed;
//				}else {
					moveW = 17;
//				}
			}else {
//				if (moveW<=20 && moveW>-(menuUlW - menuBoxW)) {
//					moveW = moveW - speed;
//				}else {
//					moveW = -menuUlW + menuBoxW-20;
//				}
				moveW = -menuUlW + menuBoxW-20;
			}
			return moveW;
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
function loadAutoHeight(){
		widthSize = document.documentElement.clientWidth;
		heightSize = document.documentElement.clientHeight;
	try{
		//alert($('.container').width());
		//alert(widthSize);
		//alert("ok");
		if(widthSize<=950){
			$('.container').css({'width':'950px','overflow':'hidden'});
			$('.ContIframe').contents().find("body").css({'width':'748px'});
		}else {
			$('.container').css({'width':'auto'});
			$('.ContIframe').contents().find("body").css({'width':widthSize-202});
		}
		if(heightSize<=513) {
			$('.simpleTree').height(331);
			$('.mainBoxCont').height(352);
			$('.ContIframe').height(352);
		}else {
			$('.simpleTree').height(heightSize-197);
			$('.mainBoxCont').height(heightSize-175);
			$('.ContIframe').height(heightSize-175);
		}
	}catch(e){
		if(heightSize<=513) {
			$('.simpleTree').height(331);
			$('.mainBoxCont').height(352);
			$('.ContIframe').height(352);
		}else {
			$('.simpleTree').height(heightSize-197);
			$('.mainBoxCont').height(heightSize-175);
			$('.ContIframe').height(heightSize-175);
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

<body>
<div class="container">
	<jsp:include page="./main_top.jsp"></jsp:include>
	<table width="100%" cellpadding="0" cellspacing="0">
		<tr>
			<td width="173" id="leftTree" valign="top">
			<jsp:include page="left.do"></jsp:include>
				
			</td>
			<td width="8" valign="middle">
				<div class="middle_top"></div>
				<div class="CloseAndOpen middle_center"></div>
				<div  class="middle_bottom"></div>
			</td>
			<td id="mainCont" class="mainBox" valign="top">
				<div class="mainBoxTitle">
					<div class="leftBtn"></div>
					<ul id="UlMenu">
						<li class="mainHover"><b>首页</b></li>
					</ul>
					<div class="closeAll"><img src="../../public/images/manuClose.png" title="关闭全部" alt="关闭全部" /></div>
					<div class="closeNote">关闭全部</div>
					<div class="rightBtn"></div>
				</div>
				<div id="iframeBoxCont" class="mainBoxCont" style="overflow:auto;">
					<iframe class="ContIframe iframeHover" width="100%" src="todo.do" frameborder="0" style="overflow:auto; overflow-x:hidden;" onload='loadAutoHeight()'></iframe>
				</div>
			</td>
		</tr>
	</table>
	<jsp:include page="./main_bottom.jsp"></jsp:include>
</div>
<div class="moreTen">
	<div style="color:blue;margin-left:-15px; font-size:14px;"><b>您打开的窗口已经超过10个！请关闭您不用的窗口！</b></div>
	<ul style="padding:10px 0;_padding:5px 0;">
	</ul>
	<div class="clear"></div>
	<div style="padding:10px 0 0 80px">
		<input type="button" value="确 定" class="pClocs_button closeMenuListBox" />
		<input type="button" value="取 消" class="pClocs_button closeMoreBox" />
	</div>
</div>
</body>
</html>






<%-- 
<frameset rows="77,*" cols="*" framespacing="0" border="0" frameborder="0">
  <!-- <frame src="${pageContext.request.contextPath}/bms/adm/top.do" name="top" noresize marginwidth="0" marginheight="0" id="top" scrolling="no"> -->
  <frame src="../../public/top.jsp" name="top" noresize marginwidth="0" marginheight="0" id="top" scrolling="no">
  <frameset rows="*,50" framespacing="0" border="0" frameborder="0">
    <frameset cols="173,*" name="topwin" framespacing="0" border="0" frameborder="0">
      <frame src="{pageContext.request.contextPath}/bms/adm/left.do" name="left"  noresize marginwidth="0" marginheight="0" id="left">
      <frameset cols="0,9,*" framespacing="0" border="0" frameborder="0">
		<frame src="" name="middle23" noresize marginwidth="0" marginheight="0" id="middle23" scrolling="no">
        <frame src="{pageContext.request.contextPath}/bms/adm/main_middle.jsp" name="middle" noresize marginwidth="0" marginheight="0" id="middle" scrolling="no">
        <frame src="{pageContext.request.contextPath}/bms/adm/todo.do" name="welcome" noresize marginwidth="0" marginheight="0" id="main">
        
      </frameset>
    </frameset>
    <frame src="../../public/bottom.jsp" name="bottom" noresize marginwidth="0" marginheight="0" id="bottom" scrolling="no">
  </frameset>
</frameset>
<noframes><body>
</body></noframes>
</html>
--%>
