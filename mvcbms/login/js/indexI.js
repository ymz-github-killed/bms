/**
 * fatherMenus:首页菜单的json数据
 * 
 */
var fatherMenus;
var appStyle;transData;
var MenuId;
var node2Ids="";
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
			for ( var i in fatherMenus) {
				if(fatherMenus[i].id==result.FirstMenuId){
					  getMenus(fatherMenus[i].text,fatherMenus[i].id,(parseInt(i)+1)+'_',fatherMenus[i].siCode,fatherMenus[i].url);
				}
			}
		}
	});
	var json = fordefaultTree2(eval(jsonData.fatherMenus));
	var array = transData(json,'id','pId','children');
	for(var i in json){
		var node = json[i];
		if(node.pId == '1'){
			node2Ids+=node.id+",";
		}
	}

	for(var i in array){
		if(array[i].id =='1'){
			fatherMenus = array[i].children;
			break;
		}
	}
	appStyle = jsonData.appStyle;
	if(appStyle !="" || appStyle != null){
		jQuery("#siCode").val(appStyle);
		if(appStyle == "bmsHTGL"){
 	  //["+jsonData.userRealName+"]
			jQuery("#userRealName").html("欢迎您:["+jsonData.userLoginName+"]["+jsonData.locationName+"]管理员");
			if(jsonData.frequency != null && jsonData.frequency != ""){
				getHeadMsg();
				//设置定时器，定时获取数据
				setInterval("getHeadMsg()",jsonData.frequency);
//				setInterval("scroll(document.getElementById('headmsg'))",20);
			}
			jQuery("#nav_1").html("");
			jQuery("#nav_2").html("");
			for ( var i in fatherMenus) {
				var span = "<span title='"+fatherMenus[i].text+"' value='"+(parseInt(i)+1)+"_' id='"+fatherMenus[i].id+"_'   onClick=\"getMenus('"+fatherMenus[i].text+"','"+ fatherMenus[i].id + "','"+(parseInt(i)+1)+"_','"+fatherMenus[i].siCode+"','"+fatherMenus[i].url+"')\"; style='width: 170px;' name='" + fatherMenus[i].url+ "'>" + fatherMenus[i].text + "</span>";
				var a = "<span id='"+fatherMenus[i].id+"' title='"+fatherMenus[i].text+"'   onClick=\"getMenus('"+fatherMenus[i].text+"','"+ fatherMenus[i].id + "','"+(parseInt(i)+1)+"','"+fatherMenus[i].siCode+"','"+fatherMenus[i].url+"')\"; onmouseover=\"this.style.background='#56B4D6'\" onmouseout=\"this.style.background=''\" name='" + fatherMenus[i].url+ "'>" + fatherMenus[i].text + "</span>";
				if(i==0){
					span = "<span title='"+fatherMenus[i].text+"' value='"+(parseInt(i)+1)+"_'  id='"+fatherMenus[i].id+"' onClick=\"getMenus('"+fatherMenus[i].text+"','"+ fatherMenus[i].id + "','"+(parseInt(i)+1)+"_','"+fatherMenus[i].siCode+"','"+fatherMenus[i].url+"')\"; style='width: 170px;' name='" + fatherMenus[i].url+ "'>" + fatherMenus[i].text + "</span>";
				}
				jQuery("#nav_1").append(span);
				jQuery("#nav_2").append(a);
			}
			//点击第一个菜单
		   getMenus(fatherMenus[0].text,fatherMenus[0].id,(parseInt(0)+1)+'_',fatherMenus[0].siCode,fatherMenus[0].url);
			var css = "<img src='"+basePath+"/theme/bmsHTGL/images/navSelect_1.gif' id='disNav' />";
			jQuery("#nav_1").append(css);
			if(typeof(basePath)!="undefined"){
				jQuery("#closeAll").attr("src",basePath+"theme/bmsHTGL/"+$("#closeAll").attr("src"));
			 	jQuery("#logo_image").attr("src",basePath+"theme/bmsHTGL/"+$("#logo_image").attr("src"));
			 	jQuery("#myiframe").attr("src",basePath+"index/home.controller");
			 	/*jQuery("#myiframe").attr("src",basePath+"homePage/list.controller");*/
			}
			jQuery("#loginOut").bind("click",function(){loginOut();})
//			jQuery("#home").attr("name",basePath+"index/home.controller");
			jQuery("#pcs_tab_ul").html("<li class='cur'><label title='首页' name='"+basePath+"index/home.controller'><span><em class='myspan'>首页</em></span></label></li>");
			
		}
	}
	//加载收藏页数据
	 $.ajax({
			dataType:"json",  
			url:basePath+"collectQuery/findCollect.controller",
			success:function(result){
				gainValue(eval(result.queryCollect))
			}
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
function getChangePwdDate(){
  jQuery.ajax({
    type:"post",
    cache:"false",
    url:basePath+"login/getChangePwdDate.controller?t="+Math.random(),
    dataType:"json",
    success:function(result){
      if(result != null && result != "" && result.message!="success"){
    	  showMessageTxt(result.message,"message","bccg");
      }
    },
    error:function(){
    	showMessageTxt("判断失败！","message","bccg");
    }
  });
}
/**
 * 通过一级菜单的id获取起子菜单
 * 
 * @param id 外部系统的一级菜单id
 */
function changerFontColor(){
}
/**
 * 根据父级菜单id获取子级菜单目录
 * @param fatherid
 */
function getMyMenus(fatherid,url){
	jQuery("#iframe").attr("src","");
	jQuery("#iframe").hide();

	if(url != "" && url !="null"&&url.indexOf("/")>-1){
		var name = basePath+"index/loadapp.controller?id="+fatherid;
		jQuery("#iframe").attr("src",name);
		//jQuery('#treebox').find('div').hide();
	}
	/**匹配该id，找到应用对应的子孙菜单*/
	for ( var i in fatherMenus) {
		if (fatherid == fatherMenus[i].id) {
			if(typeof(fatherMenus[i].children) != 'undefined' && fatherMenus[i].children != null){
				mymenus(fatherMenus[i].children);
				jQuery('#treebox').find('div').show();
			}else{
				jQuery('#treebox').find('div').hide();
			}
		}
	}
	jQuery("#"+fatherid).addClass('hover').siblings().removeClass('hover');
	jQuery("#"+fatherid+"_").addClass('hover').siblings().removeClass('hover');
	jQuery("#iframe").show();
	
	// 控制搜索的显示与隐藏
	$(".head_nav_main").find("li").each(function(i){
		if("hover"==$(this).attr("class")){
			if("知识列表"==$(this).html()||"内部采编"==$(this).html()){
				$(".headerContent").show();
				
			}else{
				$(".headerContent").hide();
				
			}
		}
	});
}

function secondClick(id){
	for ( var i in fatherMenus) {
		if(fatherMenus[i].id==id){
			getMenus(fatherMenus[i].text,fatherMenus[i].id,(parseInt(i)+1)+'_',fatherMenus[i].siCode,fatherMenus[i].url);	
		}
	}
}
//返回首页
function second_Click(){
	getMenus(fatherMenus[0].text,fatherMenus[0].id,(parseInt(0)+1)+'_',fatherMenus[0].siCode,fatherMenus[0].url);
}
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
	}else{
		if(url != "" && url !="null"){
			var name = basePath+"index/loadapp.controller?id="+id;
			addTab(name,title);
		}
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
}

var tree_str="";
/**
 * 递归遍历菜单树
 * @param treeData 菜单树json数据
 */
function menus(treeData) {
	var v=0;
	for ( var i = 0; i < treeData.length; i++) {
	
		if(treeData[i].menus == 1){
			var treeData_children = treeData[i].children;
			var treeData_url = treeData[i].url;
			var span;
			if (node2Ids.indexOf(treeData[i].pId)>=0){
				if(v==0){
					tree_str += "<li class='kaile'>";
					v++;
				}else{
					tree_str += "<li class=''>";
				}
				
			}
			//alert(treeData[i].text);
			if(treeData_url == "null" || treeData_url == null || treeData_url == ""){
//				if (treeData_children) <li class=''>
				span =  "<div class='menu_content'>" +
						"<div class='menu_triangle'>" +
						"<div class='content45 fn-hide'></div>" +
						"<div class='content135 '></div>" +
						"</div><div title='"+treeData[i].text+"' name='null'>"+treeData[i].text+"</div></div>";
//				span = 	"<span title='"+treeData[i].text+"' name='null'>"+treeData[i].text+"</span>";
			}else{
//				span = "<span title='"+treeData[i].text+"' name='index/loadapp.controller?id="+treeData[i].id+"'>"+treeData[i].text+"</span>";
				span =  "<div class='menu_content'>" +
				"<div class='menu_triangle'>" +
				"<div class='content45 fn-hide'></div>" +
				"<div class='content135 '></div>" +
				"</div><div class='menuTree' title='"+treeData[i].text+"' name='index/loadapp.controller?id="+treeData[i].id+"'>"+treeData[i].text+"</div></div>";
			}
			/**如果【i】中有孩子；表是它下面还有子菜单，需要先添加一个<ui>标签*/
			if (treeData_children) {
				span += "<div class='second_level'>";
			}
			tree_str += span;
			/**如果【i】中有孩子；表是它下面还有子菜单，递归调用添加<li>标签添加菜单项*/
			if (treeData_children) {
				menus(treeData_children);
				tree_str += "</div>";
			}
			/**没有子菜单，这闭合<ul>与<li>*/
			if (i == treeData.length - 1) {
				tree_str += "</li>";
			}
		}
	}
	//alert(tree_str);
}
/**
 * 遍历模板管理的子菜单项
 * @param treeData
 */
function mymenus(treeData){
	var son_menus="";
	var div_ul_open = "<div class='manageNav'><ul class='manageNavLi'>";
	var div_ul_closs = "</ul></div>"
	jQuery("#treeBox").html("");
	if(typeof(treeData) != 'undefined' || treeData != null){
		for(i = 0; i < treeData.length;i++){
			var treeData_url = treeData[i].url;
			if(treeData_url == "null" || treeData_url == null || treeData_url == ""){
				son_menus += "<li><span name='null'>"+treeData[i].text+"</span></li>";
			}else{
				var name_ = basePath + "index/loadapp.controller?id="+treeData[i].id;
				if(i==0){
					son_menus += "<li class='on'><span name='"+name_+"'>"+treeData[i].text+"</span></li>";
					jQuery("#iframe").attr("src",name_);
				}else{
					son_menus += "<li><span name='"+name_+"'>"+treeData[i].text+"</span></li>";
				}
			}
		}
	}
	var son_menus_str = div_ul_open + son_menus + div_ul_closs;
	jQuery("#treeBox").append(son_menus_str);
}
var lastValue = "",nodeList = [];


$(document).ready(function() {
//	$("#searchInp").bind("change",
//	    searchNode).bind("input",searchNode);
	
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
	
    getChangePwdDate();
  //点击展开收缩菜单
    $(".display_btn>img").on("click", function () {
        var num = $(this).parent().index();
        $(this).parent().addClass("fn-hide").siblings().removeClass("fn-hide");
        if (num == 0) {
            $(".chart1").removeClass("fn-hide").siblings().addClass("fn-hide");
            $(".drop_down_wrap").animate({
                "width": '3%'
            }, function () {
                $(".chart_warp").css({
                    "width": '106%'
                });
            });
            // $(".chart_warp").css({
            //     "width": '104%'
            // });
            $(".menu_list_wrap").animate({
                "opacity": '0'
            });
            $(".blur_search>input").addClass("fn-hide");
            $(".blur_search>img").removeClass("fn-hide");

        } else if (num == 1) {
            $(".chart_warp").css({
                "width": '95%'
            });
            $(".chart1").addClass("fn-hide").siblings().removeClass("fn-hide");
            $(".drop_down_wrap").animate({
                "width": '13%'
            });
            $(".management_business_warp").css({
                "width": '86%'
            });
            $(".menu_list_wrap").animate({
                "opacity": '1'
            });
            $(".blur_search>input").removeClass("fn-hide");
            $(".blur_search>img").addClass("fn-hide");

        }
    })
    // 这里是下拉菜单。
$(document).delegate('.menu_content','click',function(){
    	
   
   
        var num = $(this).parent().index();
        // console.log(num);
        $(this).children(".menu_triangle").children("div").toggleClass("fn-hide");
        $(".first_level>li").eq(num).hasClass("kaile");
        if ($(".first_level>li").eq(num).hasClass("kaile")) {
            $(this).siblings().toggleClass("fn-hide");
        } else {
            $(this).siblings().toggleClass("fn-hide");
            $(".first_level>li").eq(num).addClass("kaile").siblings().removeClass("kaile");
        }
    })
    // 二级菜单点击  添加悬浮框
    $(".second_level").on("click", function () {
        var num = $(this).index();
        $(this).parent().children(".second_level").eq(num);
        $(this).children(".menu_content").addClass("color_blue");
        $(this).siblings().children(".menu_content").removeClass("color_blue");
        // $(this).addClass("second_level_wrap").siblings().removeClass("second_level_wrap ");
        // $(this).parent().siblings().children(".second_level").removeClass('second_level_wrap ');
        $(this).parent().siblings().children(".second_level").children(".menu_content")
            .removeClass('color_blue');
    })
	});

var vals;
function searchNode(e) {
			$("#tree").find("ul").removeClass("undis");
			$(".leftTree").each(function(){
				if($(this).find("ul").size()>0)
					{
					$(this).find("span:first").css("background","url("+impPath+"images/up_bg.gif) no-repeat left center");
					}
			});
    	  
	$(".leftTree span").removeClass("search");
    var value = $.trim($("#searchInp").val());
//    if (lastValue === value) {
//      return;
//    }
    
    // 不管搜索结果如何，先讲所有节点设置为折叠状态
//    lastValue = value;
    if (value === "") {
    	$(".leftTree").css("display","");
    	$(".leftTree span").removeClass("current");
    	$("#tree").find("ul").addClass("undis");
    	$("#tree").find("ul:first").removeClass("undis");
		$("#tree").find("span").css("background","url("+impPath+"images/down_bg.gif) no-repeat left center");
      return;
    }
    $(".leftTree").css("display","none");
    $(".leftTree").find("span").each(function(){
    	if($(this).attr("title")!= null && $(this).attr("title") != "" && $(this).attr("title").indexOf(value) != -1){
    		$(this).parents().css("display","");
//    	    $(this).toggleClass("current");
    	    $(this).addClass("search");
    	    $(".leftTree").find("span").each(function(){
    	    	$(".search").nextAll().children().css("display","");
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

//循环遍历数据
function gainValue(jsonData){
	if (jsonData != null || jsonData != "") {
		for ( var k in jsonData) {
			jointCollect(jsonData[k].funcId,jsonData[k].menuName);	
		}
	}
}
//动态拼接数据
function jointCollect(collectidi,collectname){
	var span;
	span="<div>";
	span+="<input type='hidden' value='"+collectidi+"'>";
	span+="<span id='"+collectidi+"' onclick='collectClik(\""+collectidi+"\",\""+collectname+"\")'>"+collectname+"</span>";
	span+="<img onclick='collectClikImg(\""+collectidi+"\")' class='fn-hide' src='"+basePath+"/theme/bmsHTGL/images/delete_btn.png' alt=''>";
	span+="</div>";
	$(".personal_collection_content").append(span);   
}
//图片单击事件
function collectClikImg(imgId){
	$("#"+imgId).parent().addClass("fn-hide");
	
    //var num = $(this).parent().remove();
    if(vals != null && vals != undefined && vals != ""){
    	vals +=","+imgId;
    }else{
    	vals=imgId;
    }
}
//单击事件
function collectClik(id,name){
	var cid = basePath+"index/loadapp.controller?id="+id+"";
	addTab(cid,name);//生成右边页面
	}



$(function (){
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
//	        var num = $(this).parent().remove();
//	        console.log(num);
//	        e.stopPropagation;
	        

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
});


function confirm_delete(ids){
	$.ajax({
		type:"get",
		cache:"false",
		url:basePath+"collectQuery/removeCollect.controller?t="+Math.random()+"&id="+ids,
		dataType:"json",
		success:function(result){
			showMessageTxt(result.message,"message","bccg");
			if(result.messageCode.indexOf("S")==0){
				vals="";
				console.log(vals);
				show("cover","bccg");
			}
		},
		error:function(){
			showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
		}
	});
}

