/**
 * fatherMenus:首页菜单的json数据
 * 
 */
var fatherMenus;
var appStyle;transData;
var MenuId;
var node2Ids="";
var menuUrl;
var impPath = basePath +"theme/bmsHTGL/";
$(function () {
    reset_tab_width();
});
function reset_tab_width(){
	var li_width = ($(".tab_ye .pcs_tab_ul").width() - 10) / 10;
    $(".tab_ye .pcs_tab_ul li").css('width', li_width);
    ifisIE();    
    window.onresize = function () {
        var li_width1 = ($(".tab_ye .pcs_tab_ul").width() - 10) / 10;
        $(".tab_ye .pcs_tab_ul li").css('width', li_width1);
        ifisIE(); 
    };
}
function ifisIE(){
	var li_width11 = ($(".tab_ye .pcs_tab_ul").width() - 10) / 10;
	var DEFAULT_VERSION = 9.0;  
    var ua = navigator.userAgent.toLowerCase();  
    var isIE = ua.indexOf("msie")>-1;  
    var safariVersion;  
    if(isIE){  
    	safariVersion =  ua.match(/msie ([\d.]+)/)[1];
    }  
    if(safariVersion <= DEFAULT_VERSION ){  
	    var last_width = $(".tab_ye .pcs_tab_ul").width() - 9 - li_width11 * 9 + 3;
	    $(".tab_ye .pcs_tab_ul li:last-child").css('width', last_width);
    }
}
/**
 * 获取首页的菜单json数据；并将一级菜单封装到<nav>中；
 */
jQuery(function() {
	$.ajax({
	    type:"post",
		cache:"false",
		dataType:"json",  
		url:basePath+"noticeQuery/findMenuId.controller?t="+Math.random(),
		success:function(result){
			for ( var f in fatherMenus) {
				if(fatherMenus[f].id==result.FirstMenuId){
					  getMenus(fatherMenus[f].text,fatherMenus[f].id,(parseInt(f)+1)+'_',fatherMenus[f].siCode,fatherMenus[f].url);
				}
			}
			var title=$(".tree ul li:first-child").children("div").eq('0').find('span').attr('title');
			var name=$(".tree ul li:first-child").children("div").eq('0').find('span').attr('name');
		    if(menuUrl == "null" || menuUrl == null || menuUrl == "" ){
		    	if(name != "null" && name != null && name != ""){
		    		addTab(basePath+name,title);
		    	}else{
		    		if(title ==undefined){
		    			title ='首页';
		    		}
		    		$("#pcs_tab_ul").append("<li class='click_li cur' style='width:102.2px'><lable title='首页' name='"+basePath+"index/home.controller'><span><p class='myspan'><b>"+title+"</b></p><img src='../theme/bmsHTGL/images/close_red.png'></span></lable></li>");
		    	}
		    }
		    	
		}
	});
	var json = fordefaultTree2(eval(jsonData.fatherMenus));
	var array = transData(json,'id','pId','children');
	for(var z in array){
		if(array[z].id =='1'){
			fatherMenus = array[z].children;
			break;
		}
	}
	appStyle = jsonData.appStyle;
	if(appStyle !="" || appStyle != null){
		jQuery("#siCode").val(appStyle);
		if(appStyle == "bmsHTGL"){
 	  //["+jsonData.userRealName+"]
			jQuery("#userRealName").html("你好，"+jsonData.userRealName+"");
			if(jsonData.frequency != null && jsonData.frequency != ""){
				getHeadMsg();
				//设置定时器，定时获取数据
				setInterval("getHeadMsg()",jsonData.frequency);
//				setInterval("scroll(document.getElementById('headmsg'))",20);
			}
			jQuery("#nav_1").html("");
			jQuery("#nav_2").html("");
			//点击第一个菜单
		  // getMenus(fatherMenus[0].text,fatherMenus[0].id,(parseInt(0)+1)+'_',fatherMenus[0].siCode,fatherMenus[0].url);
			var css = "<img src='"+basePath+"/theme/bmsHTGL/images/navSelect_1.gif' id='disNav' />";
			jQuery("#nav_1").append(css);
			if(typeof(basePath)!="undefined"){
				jQuery("#closeAll").attr("src",basePath+"theme/bmsHTGL/"+$("#closeAll").attr("src"));
			 	jQuery("#logo_image").attr("src",basePath+"theme/bmsHTGL/"+$("#logo_image").attr("src"));
			 	jQuery("#myiframe").attr("src",basePath+"index/home.controller");
			}
			jQuery("#loginOut").bind("click",function(){loginOut();});
			
		}
	}

	 var colname=jsonData.colName;
	 var colid=jsonData.colId;
	 menuUrl=jsonData.menuUrl;
//	 if(colid!=null && colname!=null && menuUrl!=null && menuUrl!="null" && colname!="null" && colid!="null"  && colid!="" && colname!="" && menuUrl!=""){
//		 var cid = basePath+"index/loadapp.controller?id="+colid+"";
//		 addTab(cid,colname);//生成右边页面
//	 }
	 
	  $('.personal_collection_wrap').hover(function(){
	        $(".drop_down_wrap ").css({
	            "overflow":"visible"
	        });
	        $(".personal_collection").removeClass("fn-hide");//显示悬浮框
	        
	   },function(){
	        $(".personal_collection").addClass("fn-hide");//移除隐藏悬浮框
	    });
	    $(".personal_collection_content>div").on("click", function (e) {
	        e.stopPropagation;
	        $(this).addClass("color_blue active").siblings().removeClass("color_blue active");
	    });
	    $(".personal_collection_top>div").on("click", function () {
	        if($(this).children("img").hasClass("fn-hide")){
	            //点击了保存
	            $(this).children("span").toggleClass("fn-hide");
	            $(this).children("img").toggleClass("fn-hide");
	            if(vals!=undefined){
	            	confirm_delete(vals);
	            }   
	        }else{
	            //点击了设置
	            $(this).children("span").toggleClass("fn-hide");
	            $(this).children("img").toggleClass("fn-hide");   
	        }
	        
	        
	        $(".personal_collection_content>div>img").toggleClass("fn-hide");
	        
	        
	    });
	    // 收藏列表
       $(".personal_collection_content>div:nth-child(4n+1)").css({
           "text-align": "left"
       });
       $(".personal_collection_content>div:nth-child(4n+4)").css({
           "text-align": "right"
       });
	    $(".personal_collection_content>div>img").on("click", function (e) {
	        //调整样式。
	        $(".personal_collection_content>div").css({
	            "text-align": "center"
	        });
	        $(".personal_collection_content>div:nth-child(4n+1)").css({
	            "text-align": "left"
	        });
	        $(".personal_collection_content>div:nth-child(4n+4)").css({
	            "text-align": "right"
	        });
	    });
	    

		$(document).delegate(".j-toggle_nav","click",function(){
	        $(this).next("ul").toggleClass('hidden');
	        $(this).children("i:first").toggleClass('show');
	        $(".tree").find('.j-toggle_nav').removeClass('active').find('span').removeClass('color');
	        $(this).addClass('active').find('span').addClass('color');
	        $(this).parent('li').siblings().find('ul').addClass('hidden');
	        $(this).parent('li').siblings().find('i').removeClass('show');
	        
	    });
	    $(document).delegate(".j-toggle_nav","mouseenter",function(){
	        $(".tree").find('.j-toggle_nav').find('span').removeClass('color');
	        $(this).find('span').addClass('color');
	        
	    });
	     $(document).delegate(".j-toggle_nav","mouseout",function(){
	    	 $(".tree").find('.j-toggle_nav').find('span').removeClass('color');
	         $(this).find('span').removeClass('color');   
	    });
		$("#searchInp").val("请输入搜索关键字");
	    
		$("#searchInp").blur(function() {
	      if ($.trim($(this).val()) == "") {
	        $(this).val("请输入搜索关键字");
	      }
	    }).focus(function() {
	      if ($(this).val() == "请输入搜索关键字") {
	        $(this).val("");
	      }
	    }).keyup(searchNode);
	    if ("\v" == "v") {
	    	$("#searchInp").attr("onpropertychange", "searchNode(this)");
	    	$("#searchInp").bind("change",
	    		    searchNode).bind("input",searchNode);
	    	$("#searchInp").attr("onkeyup", "searchNode(this)");
	    	$("#searchInp").attr("onpropertychange", "searchNode(this)");
	    	$("#searchInp").attr("oninput", "searchNode(this)");
	    } else {
	    	$("#searchInp").attr("onkeyup", "searchNode(this)");
	    	$("#searchInp").attr("onpropertychange", "searchNode(this)");
	    	$("#searchInp").attr("oninput", "searchNode(this)");
	    }
		
//	    getChangePwdDate();
	  //点击展开收缩菜单
	    $(".display_btn>img").on("click", function () {
	        var num = $(this).parent().index();
	        $(this).parent().addClass("fn-hide").siblings().removeClass("fn-hide");
	        if (num == 0) {
	            $(".chart1").removeClass("fn-hide").siblings().addClass("fn-hide");
	            $(".drop_down_wrap").animate({
	                "width": '3%'
	            });
	            $(".management_business_warp").css({
	                "width": '97%'
	            });
	            $(".menu_list_wrap").addClass("fn-hide");
	            $(".blur_search>input").addClass("fn-hide");
	            $(".blur_search>img").removeClass("fn-hide");

	        } else if (num == 1) {
	            $(".chart_warp").css({
	                "width": '95%'
	            });
	            $(".chart1").addClass("fn-hide").siblings().removeClass("fn-hide");
	            $(".drop_down_wrap").animate({
	                "width": '16%'
	            });
	            $(".management_business_warp").css({
	                "width": '84%'
	            });
//	            $(".menu_list_wrap").animate({
//	                "opacity": '1'
//	            });
	            $(".menu_list_wrap").removeClass("fn-hide");
	            $(".blur_search>input").removeClass("fn-hide");
	            $(".blur_search>img").addClass("fn-hide");
	        }
	    });
	    //搜索图片点击事件
	    $(".blur_search>img").on("click", function () {
//	            $(".chart1").addClass("fn-hide").siblings().removeClass("fn-hide");
	            $(".drop_down_wrap").animate({
	                "width": '16%'
	            });
	            $(".management_business_warp").css({
	                "width": '84%'
	            });
	            $(".menu_list_wrap").removeClass("fn-hide");
	            $(".blur_search>input").removeClass("fn-hide");
	            $(".blur_search>img").addClass("fn-hide");
	            $(".zhangkai").addClass("fn-hide");
	            $(".heshang").removeClass("fn-hide");
	    });
	    
	    // 这里是下拉菜单。
	$(document).delegate('.menu_content','click',function(){
	        var num = $(this).parent().index();
	        $(this).addClass("color_blue");
	        $(this).parent().siblings().children(".menu_content").removeClass("color_blue");
	        $(this).parent().siblings().children(".second_level").children(".menu_content").removeClass("color_blue");
	        $(this).children(".menu_triangle").children("div").toggleClass("fn-hide");
	        $(".first_level>li").eq(num).hasClass("kaile");
	        if ($(".first_level>li").eq(num).hasClass("kaile")) {
	            $(this).siblings().toggleClass("fn-hide");
	        } else {
	            $(this).siblings().toggleClass("fn-hide");
	            $(".first_level>li").eq(num).addClass("kaile").siblings().removeClass("kaile");
	        }
	    });

	    $(document).delegate('.second_level','click',function(){
//	      $(".second_level").on("click", function () {
	          var num = $(this).index();
	          $(this).parent().children(".second_level").eq(num);
	          $(this).children(".menu_content").addClass("color_blue");
	          $(this).siblings().children(".menu_content").removeClass("color_blue");
	          // $(this).addClass("second_level_wrap").siblings().removeClass("second_level_wrap ");
	          // $(this).parent().siblings().children(".second_level").removeClass('second_level_wrap ');
	          $(this).parent().siblings().children(".second_level").children(".menu_content")
	              .removeClass('color_blue');
	      });
	  	
});
//获取外部应用头消息
function getHeadMsg(){
  jQuery.ajax({
    type:"post",
    cache:"false",
    url:basePath+"login/getSystemMsg.controller?t="+Math.random(),
    dataType:"json",
    success:function(result){
      if(result != null && result != ""){
    	  showMessageTxt(result.message,"message","bccg");
      }
    }
  });
}
$("#return_upper_story").on("click",function(){
	window.location.href = basePath+"homePage/list.controller";
});



//设置无缝循环
function scroll(obj) {
  var tmp = (obj.scrollLeft)++;
  //当滚动条到达右边顶端时
  if (obj.scrollLeft==tmp) obj.innerHTML += obj.innerHTML;
  //当滚动条滚动了初始内容的宽度时滚动条回到最左端
  if (obj.scrollLeft>=obj.firstChild.offsetWidth) obj.scrollLeft=0;
}

//获取修改密码时间提示
//function getChangePwdDate(){
//  jQuery.ajax({
//    type:"post",
//    cache:"false",
//    url:basePath+"login/getChangePwdDate.controller?t="+Math.random(),
//    dataType:"json",
//    success:function(result){
//      if(result != null && result != "" && result.message!="success"){
//    	  showMessageTxt(result.message,"message","bccg");
//      }
//    },
//    error:function(){
//    	showMessageTxt("判断失败！","message","bccg");
//    }
//  });
//}
/**
 * 通过一级菜单的id获取起子菜单
 * 
 * @param id 外部系统的一级菜单id
 */
function changerFontColor(){
}

function notice_click(i){
	if(i==1){
		window.open(basePath+"notice/listPage.controller");
	}else{
		window.open("http://20.26.28.231/mv/index.php/%E9%A6%96%E9%A1%B5");
	}
}




/**
 * 根据父级菜单id获取子级菜单目录
 * @param fatherid
 */
function getMenus(title,id,value,sCode,url) {
	//切换接入应用时，把搜索框对值清空
	$("#searchInp").val("请输入搜索关键字");
	/**样式切换加一级菜单也是请求*/
	var appStyleCode =  jQuery("#siCode").val();
	/**样式需要变化*/
	if(appStyleCode == "" ||appStyleCode != sCode){
		jQuery("#siCode").val(sCode);
		window.location.href=basePath+"login/index.controller?appStyle="+sCode+"&menuId="+id;
		return false;
	}
	jQuery("#"+id).addClass('hover').siblings().removeClass('hover');
	jQuery("#"+id+"_").addClass('hover').siblings().removeClass('hover');
	/**匹配该id，找到应用对应的子孙菜单*/
	for ( var i in fatherMenus) {
		if (id === fatherMenus[i].id) {
			if(typeof(fatherMenus[i].children) != 'undefined' && fatherMenus[i].children != null){
				menus(fatherMenus[i].children);
			}else{
				jQuery("#tree ul").html("");
			}
		}
	}
	jQuery("#tree ul").html(tree_str);
	tree_str = "";
	$(".second_level").addClass("fn-hide");
	$(".second_level").children(".menu_content").children(".menu_triangle").addClass("fn-hidden");
	var myself = parseInt(value);
	var spanLeng =  jQuery("#nav_2").find("span").length;
	if(myself>=maxZ){
		maxZ = myself;
		minZ = myself-9;
	}
	if(0<myself && myself<=minZ){
		minZ=myself;
		maxZ=myself+9;
	}
	if(minZ<=myself && myself<=maxZ){
		$("#nav_1").children("span").css("display","none");
		for(i=minZ;i<=maxZ;i++){
			$("#nav_1 span[value="+i+"_]").css("display","block");
		}
	}
	 var colname=jsonData.colName;
	 var colid=jsonData.colId;
	 menuUrl=jsonData.menuUrl;
	if(colid!=null && colname!=null && menuUrl!=null && menuUrl!="null" && colname!="null" && colid!="null"  && colid!="" && colname!="" && menuUrl!=""){
		var cid = basePath+"index/loadapp.controller?id="+colid+"";
		 addTab(cid,colname);//生成右边页面
//		 $("#tree_"+colid).parents("ul").removeClass("hidden");
//		 $("#tree_"+colid).attr("class","relative j-toggle_nav active");
//		 $("#tree_"+colid).parents("li").children("i").attr("class","show");
//		 $("#tree_"+colid).parents("li").children("div").children("i").attr("class","show");
//		 $("#tree_"+colid).children("i").removeClass("show");
		 jQuery.ajax({
				type:"post",
	    		dataType:"json",  
	    		url:basePath+"collectQuery/findCollect.controller",
	    		success:function(result){
	    			echoCollect3(eval(result.queryCollect),colid);
	    		}
	    	});
	 }
}

var tree_str="";
/**
 * 递归遍历菜单树
 * @param treeData 菜单树json数据
 */
function menus(treeData) {
	for ( var i = 0; i < treeData.length; i++) {
		if(treeData[i].menus == 1){
			var treeData_children = treeData[i].children;
			var treeData_url = treeData[i].url;
			var span;
			//alert(treeData[i].text);
			if(treeData_url == "null" || treeData_url == null || treeData_url == ""){
				span = 	"<div class='relative j-toggle_nav' title='"+treeData[i].text+"' name='null' style='cursor:pointer;'><i></i><span class='span_color' title='"+treeData[i].text+"' name='null' >"+treeData[i].text+"</span></div>";
			}else{
				span = "<div id='tree_"+treeData[i].id+"' class='relative j-toggle_nav' onclick='collectClik(\""+treeData[i].id+"\",\""+treeData[i].text+"\")' title='"+treeData[i].text+"' name='index/loadapp.controller?id="+treeData[i].id+"' style='cursor:pointer;'><i></i><span class='span_color' title='"+treeData[i].text+"' name='index/loadapp.controller?id="+treeData[i].id+"' >"+treeData[i].text+"</span></div>";
			}
			/**如果【i】中有孩子；表是它下面还有子菜单，需要先添加一个<ui>标签*/
			if (treeData_children) {
				span += " <ul class='hidden'>";
			}
			var li = "<li class='leftTree11'>" + span;
			tree_str += li;
			/**如果【i】中有孩子；表是它下面还有子菜单，递归调用添加<li>标签添加菜单项*/
			if (treeData_children) {
				menus(treeData_children);
				tree_str += "</ul>";
			}
			/**没有子菜单，这闭合<ul>与<li>*/
			if (i == treeData.length - 1) {
				tree_str += "</li>";
			}

		}
	}
}

function echoCollect3(jsonData,foslid){
	var li="";
	jQuery("#tree ul").html("");
	if (jsonData != null || jsonData != "") {
		for ( var k in jsonData) {  
			if(jsonData[k].funcId == foslid)
				li+="<li class='leftTree11'><div id='tree_"+jsonData[k].funcId+"' class='relative j-toggle_nav active' onclick='collectClik(\""+jsonData[k].funcId+"\",\""+jsonData[k].menuName+"\")' title='"+jsonData[k].menuName+"' name='index/loadapp.controller?id="+jsonData[k].funcId+"' style='cursor:pointer;'><i></i><span class='span_color' title='"+jsonData[k].menuName+"' name='index/loadapp.controller?id="+jsonData[k].funcId+"' >"+jsonData[k].menuName+"</span></div></li>";
			else
				li+="<li class='leftTree11'><div id='tree_"+jsonData[k].funcId+"' class='relative j-toggle_nav' onclick='collectClik(\""+jsonData[k].funcId+"\",\""+jsonData[k].menuName+"\")' title='"+jsonData[k].menuName+"' name='index/loadapp.controller?id="+jsonData[k].funcId+"' style='cursor:pointer;'><i></i><span class='span_color' title='"+jsonData[k].menuName+"' name='index/loadapp.controller?id="+jsonData[k].funcId+"' >"+jsonData[k].menuName+"</span></div></li>";
			
		}
	}
	jQuery("#tree ul").html(li);
} 





var lastValue = "",nodeList = [];


$(document).ready(function() {});   
    
    
var vals;

function searchNode(e) {
	$("#tree").find("ul").removeClass("fn-hide");
	$(".leftTree11").find("i").removeClass("show");
	$(".leftTree11").find("i").addClass("show");  
	$(".leftTree11 span").removeClass("search");
	var value = $.trim($("#searchInp").val());
	if (value === "") {
		$(".leftTree11").css("display","");
		$(".leftTree11 span").removeClass("color_blue"); 
		$(".leftTree11").find("i").addClass("show");
		$(".leftTree11").find("i").removeClass("show");
		$("#tree").find("ul").addClass("hidden");
		$("#tree").find("ul:first").removeClass("hidden");
		return;
	}
	$(".leftTree11").css("display","none");
	$(".leftTree11").find("span").each(function(){
		if($(this).attr("title")!= null && $(this).attr("title") != "" && $(this).attr("title").indexOf(value) != -1){
			$(this).parents(".leftTree11").css("display","");
			$(this).parents("ul").removeClass("hidden");		
		    $(this).addClass("search");
		    $(this).parents(".leftTree11").eq(0).find("ul").find("span").each(function(){
		    	$(this).parents(".leftTree11").css("display","");
				$(this).parents("ul").removeClass("hidden");
		    });
		}
	});
  }




function loginOut(){
	window.location.href=basePath+"login/loginOut.controller";
}





$(document).ready(function () {
    //初始化宽度、高度  
    $(".management_wrap").width($(window).width());
    $(".management_wrap").height($(window).height());
	$(".personal_collection_wrap").find(".personal_collection").find(".personal_collection_content fn-clear").find("span");
    //当文档窗口发生改变时 触发  
    $(window).resize(function () {
        $(".management_wrap").width($(window).width());
        $(".management_wrap").height($(window).height());
    });
});
$(".user_wrap>div>div").on("click", function (e) {
    e.stopPropagation();
    //阻止事件冒泡
    $(this).addClass("fn-hide").siblings().removeClass("fn-hide");
    if($(this).hasClass("content")){
       $(".login_state").removeClass("fn-hide");
    }else{
        $(".login_state").addClass("fn-hide");
    }
    
});
$(".login_state").on("click",function(e){
    e.stopPropagation();
    if($(".user_wrap>div>div").hasClass("content")){
        $(".login_state").addClass("fn-hide");
        $(".content").removeClass("fn-hide").siblings().addClass("fn-hide");
     }
    
});


$("#index_tc").on("click",function(e){
	window.location.href=basePath+"login/loginOut.controller";
});


$("#index_grzx").on("click",function(e){
	window.location.href=basePath+"login/index.controller?firstMenuId=4028811f4a2899cb014a289aa8600001";
});
//单击事件
function collectClik(id,name){
	var cid = basePath+"index/loadapp.controller?id="+id+"";
	addTab(cid,name);//生成右边页面
	}

