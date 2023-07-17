// JavaScript Document
$('a').bind("focus", function(){    $(this).blur();})
jQuery.browser={};(function(){jQuery.browser.msie=false; jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)./)){ jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
//为右侧iframe宽高赋值 开始
	$(function(){
		if ($.browser.msie && ($.browser.version == '6.0') && !$.support.style) {//判断浏览器是否为IE6
			var winHeight = $(window).height() - 107;	
			var winWidth = $(window).width() - 220;
			$(".mainBoxWarp").height(winHeight);
//			$("#iframeRight").width(winWidth);
			$("#iframeRight").width("100%");
			$("#iframeRight").height(winHeight-30);
//			$(".pcs_tab_ul").width(winWidth);
			$(".pcs_tab_ul").width("100%");
			$(".myspan").width(winWidth /11 - 38);
			$("#treeBox").height(winHeight - 50);
			$(".bmLeft").height(winHeight + 40);//左侧树的高度
			
//			$("#navBOX").width(winWidth);
			$("#navBOX").width("100%");
//			$("#nav_1").width(winWidth);
			$("#nav_1").width("100%");
			$("#nav_1").find("span").width(winWidth /10);
			//var leng = $("#nav_1").children("span").length + 1;
			//$("#nav_1").find("span").width(winWidth /leng);
			//$("#gnqxNew").height(winHeight);
		}else{
			setInterval(function(){
				var winHeight = $(window).height() - 107;	
				var winWidth = $(window).width() - 220;
				$(".mainBoxWarp").height(winHeight);
//				$("#iframeRight").width(winWidth);
				$("#iframeRight").width("100%");
				$("#iframeRight").height(winHeight-30);
//				$(".pcs_tab_ul").width(winWidth);
				$(".pcs_tab_ul").width("100%");
				$(".myspan").width(winWidth /11 - 40);
				$("#treeBox").height(winHeight - 50);
				$(".bmLeft").height(winHeight + 40);//左侧树的高度
//				$("#navBOX").width(winWidth);
				$("#navBOX").width("100%");
//				$("#nav_1").width(winWidth);
				$("#nav_1").width("100%");
				$("#nav_1").find("span").width(winWidth /10);
				//var leng = $("#nav_1").children("span").length + 1;
				//$("#nav_1").find("span").width(winWidth /leng);
				//$("#gnqxNew").height(winHeight);
			},1)
		}
					 
	});
	//拖拽窗口 重新计算iframe宽高
	window.onresize = function (){
		var winHeight = $(window).height() - 107;	
			var winWidth = $(window).width() - 220;
			$(".mainBoxWarp").height(winHeight);
//			$("#iframeRight").width(winWidth);
			$("#iframeRight").width("100%");
			$("#iframeRight").height(winHeight-30);
//			$(".pcs_tab_ul").width(winWidth);
			$(".pcs_tab_ul").width("100%");
			$(".myspan").width(winWidth /11 - 38);
			$("#treeBox").height(winHeight - 50);
			$(".bmLeft").height(winHeight + 40);//左侧树的高度
//			$("#navBOX").width(winWidth);
			$("#navBOX").width("100%");
//			$("#nav_1").width(winWidth);
			$("#nav_1").width("100%");
			$("#nav_1").find("span").width(winWidth /10);
			//var leng = $("#nav_1").children("span").length + 1;
			//$("#nav_1").find("span").width(winWidth /leng);
			//$("#gnqxNew").height(winHeight);
	}
	//拖拽窗口 重新计算iframe宽高
//为右侧iframe宽高赋值 结束

//表格基偶行样式 开始	
$(document).ready(function(){  
	$(".tb_content1 tr:even").removeClass("odd");  
	$(".tb_content1 tr:odd").addClass("odd");  
});   
//表格基偶行样式 开始	

// 下拉框效果
$(function(){
	
	$(document).on('click',".selectbox dt span",function(e){
		e.stopPropagation(); 
		$(".selectbox dd").hide()
		$(".selectbox").css("z-index","1");
		$(e.target).parent().parent().find("dd").show();
		$(e.target).parents().css("z-index","100006");
	});
	$(document).on('mouseenter',".selectbox dd p",function(){
		$(this).addClass('sel').siblings().removeClass('sel');
		
	});
	$(document).on('click',".selectbox dd p",function(e){
		$(e.target).addClass('sel').siblings().removeClass('sel');
		$(e.target).parent().parent().find("dt span.fleft").empty().append($(this).text());
		//$(e.target).parent().parent().find("dt input.dis").empty().append($(this).attr("name"));
		var text = $(this).attr("name");
		$(e.target).parent().hide();
		$(e.target).parent().parent().css("z-index","1");
		if($(e.target).parent().parent().find("dt").has("input").length!=0){
			$(e.target).parent().parent().find("dt input.undis").val(text);
		}
	});
	$(document).click(function(e){
		$(".selectbox dd").hide();
		$(this).parents().css({"z-index":"1"});
	});
	$(".selectbox").mouseleave(function(){
		$(this).find("dd").hide();	
		$(this).css({"z-index":"1"});
	})	   
})


//全选
$(function(){     
     $(".checkedAll").click(function(){
		if(this.checked){
			$(this).parent().parent().parent().find('input[type=checkbox][name=items]').attr("checked", true );
		}else{								
			$(this).parent().parent().parent().find('input[type=checkbox][name=items]').attr("checked", false );
		}
	 });
})


//弹出层
function show(cover,id){	
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;   
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 
	(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
	(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;		
	//如果是ie6，隐藏页面select
	if(Sys.ie=="6.0"){
		var n=document.getElementsByTagName("select").length;
		var m=document.getElementById(id).getElementsByTagName("select").length;
		for(var i=0;i<n;i++){
			document.getElementsByTagName("select")[i].style.display= 'none';}
		for(var j=0;j<m;j++){		
			document.getElementById(id).getElementsByTagName("select")[j].style.display= '';}
	}	
	var objCover=document.getElementById(cover);
	var objId=document.getElementById(id);
	var scrollW=document.documentElement.scrollWidth;
	var scrollH=document.documentElement.scrollHeight;
	var sdH=$(window).height();

	if (Sys.safari || Sys.chrome){
		var scrollH=document.body.scrollHeight;
		var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.body.scrollTop;
	}else{
		var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.documentElement.scrollTop;}
	var L=(document.documentElement.clientWidth-objId.clientWidth)/2+document.documentElement.scrollLeft;	
	objCover.style.width=scrollW+"px";
	objCover.style.visibility="visible";	
	objCover.style.height=scrollH>=sdH?scrollH+"px":sdH +"px";
//	objCover.style.height=sdH+"px";
	objId.style.top=T+"px";
	objId.style.left=L+"px";
	objId.style.visibility="visible";

		var popTopH =$("#"+id).find(".popTOP").height() +10;
		var winHeight = $(window).height() - 242;
		$("#"+id).find(".popInfoBox").height(winHeight - popTopH);
		$("#"+id).find(".popInfoBox").css("padding-top",popTopH);

	window.onresize=function (){	
		var objCover=document.getElementById(cover);
		var objId=document.getElementById(id);
		var scrollW=document.documentElement.scrollWidth;
		if(document.documentElement.clientHeight >= document.documentElement.scrollHeight){
			var scrollH=document.documentElement.clientHeight;	
		}else{
			var scrollH=document.documentElement.scrollHeight;}
		if (Sys.safari || Sys.chrome) {
			var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.body.scrollTop;
		}else{
			var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.documentElement.scrollTop;}
		var L=(document.documentElement.clientWidth-objId.clientWidth)/2+document.documentElement.scrollLeft;		
		objCover.style.width=scrollW+"px";
		objCover.style.height=scrollH>=sdH?scrollH+"px":sdH +"px";		
//		objCover.style.height=scrollH+"px";		
		objId.style.top=T+"px";
		objId.style.left=L+"px";
		
	}
}

function showTB(cover,id){	
	
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;   
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 
	(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
	(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;		
	//如果是ie6，隐藏页面select
	if(Sys.ie=="6.0"){
		var n=document.getElementsByTagName("select").length;
		var m=document.getElementById(id).getElementsByTagName("select").length;
		for(var i=0;i<n;i++){
			document.getElementsByTagName("select")[i].style.display= 'none';}
		for(var j=0;j<m;j++){		
			document.getElementById(id).getElementsByTagName("select")[j].style.display= '';}
	}	
	var objCover=document.getElementById(cover);
	var objId=document.getElementById(id);
	var scrollW=document.documentElement.scrollWidth;
	var scrollH=document.documentElement.scrollHeight;
	var sdH=$(window).height();
	if (Sys.safari || Sys.chrome){
		var scrollH=document.body.scrollHeight;
		var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.body.scrollTop;
	}else{
		var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.documentElement.scrollTop;}
	var L=(document.documentElement.clientWidth-objId.clientWidth)/2+document.documentElement.scrollLeft;	
	objCover.style.width=scrollW+"px";
//	objCover.style.height=scrollH+"px";
	objCover.style.height=scrollH>=sdH?scrollH+"px":sdH +"px";
	objCover.style.visibility="visible";	
	objId.style.top=50+"px";
	objId.style.left=L+"px";
	objId.style.visibility="visible";

	var popTopH =$("#"+id).find(".popTOP").height() +10;
	var winHeight = $(window).height() - 242;
	$("#"+id).find(".popInfoBox").height(winHeight - popTopH);
	$("#"+id).find(".popInfoBox").css("padding-top",popTopH);
	
	window.onresize=function (){	
		var objCover=document.getElementById(cover);
		var objId=document.getElementById(id);
		var scrollW=document.documentElement.scrollWidth;
		if(document.documentElement.clientHeight >= document.documentElement.scrollHeight){
			var scrollH=document.documentElement.clientHeight;	
		}else{
			var scrollH=document.documentElement.scrollHeight;}
		if (Sys.safari || Sys.chrome) {
			var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.body.scrollTop;
		}else{
			var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.documentElement.scrollTop;}
		var L=(document.documentElement.clientWidth-objId.clientWidth)/2+document.documentElement.scrollLeft;		
		objCover.style.width=scrollW+"px";
		objCover.style.height=scrollH>=sdH?scrollH+"px":sdH +"px";		
//		objCover.style.height=scrollH+"px";		
		objId.style.top=50+"px";
		objId.style.left=L+"px";
		
	}
	
}

function hide(cover,id){
	//将页面全部select换件设为可用状态
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;    
	(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 
	(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;	
	if(Sys.ie=="6.0"){
		var n=document.getElementsByTagName("select").length;
		for(var i=0;i<n;i++){
			document.getElementsByTagName("select")[i].style.display= '';
		}
	}
	var objCover=document.getElementById(cover);
	var objId=document.getElementById(id);
	objCover.style.visibility="hidden";
	objId.style.visibility="hidden";
	popTable(id);
}
//给弹出层中table的父级元素赋值高度
function popTable(x){
			var popTopH =$("#"+x).find(".popTOP").height() +10;
			var winHeight = $(window).height() - 242;
			$("#"+x).find(".popInfoBox").height(winHeight - popTopH);
			$("#"+x).find(".popInfoBox").css("padding-top",popTopH);
			//alert(popTopH);
}

//给弹出层中table的父级元素赋值高度