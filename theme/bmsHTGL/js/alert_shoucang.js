/**
 * alert_收藏.js
 */
var impPath = basePath +"theme/bmsHTGL/";
var fatherMenus;
var node2Ids;
//标签id
var Bqid;
var Bid;
$(function(){
	 		//点击收藏显示，弹框
	 		$(".new_collect").click(function(){
	 			/*$(".per_col_mid").css('display','block');*/
	 			$(".all_per_mid").css('display','block');
	 			jQuery.ajax({
	 				type:"post",
		    		dataType:"json",  
		    		url:basePath+"collectQuery/findCollect.controller",
		    		success:function(result){
		    			echoCollect2(eval(result.queryCollect));
		    		}
		    	});
	 			jQuery.ajax({
	 				type:"post",
	 		    	cache:"false",
	 		    	data:{},
	 		    	url:basePath+"index/getTree.controller?s="+Math.random(),
	 		        dataType:"json",
	 		        success:function(result){
	 		        	initList(result);
	 		        },
	 		        error:function(){
	 		        	showMsg("操作失败！");
	 		        }
	 		    });
	 			//循环标题
	 			jQuery.ajax({
	 				type:"post",
	 		    	cache:"false",
	 		        url:basePath+"funcQuery/findParentFunc.controller?s="+Math.random(),
	 		        dataType:"json",
	 		        data:"id=1",
	 		        success:function(result){
	 		        	echoList(eval(result.rscfunclist));
	 		        },
	 		        error:function(){
	 		        	showMsg("操作失败！");
	 		        }
	 		    }); 
	 		});
	 		$(".j-setup").click(function(){
	 			$(".all_per_mid").css('display','none');
	 			$(".all_box_mengceng").css('display','block');
	 			$(".alert_shoucang_box").css('display','block');
	 			$(".title").removeClass("active_alert");
	 			$("#"+Bid).addClass("active_alert");
	 			yjcd_click(Bid);
	 		});
	        //头部标题切换
	 		$(".alert_shoucang_box").on("click", ".alert_title_box li", function(){ 
	 			$(".alert_title_box li").removeClass("active_alert");
	            $(this).addClass("active_alert");
			});
	        //底部关闭按钮
	        $(".j-shouqi_img").click(function () {
	            $(".alert_shoucang_box").css('display', 'none');
	            $(".all_box_mengceng").css('display','none');
	        });
	        //显示点击添加/隐藏
	        $(document).delegate(".li_box>.title", "mouseenter", function () {
	        	 $(this).find(".hover_show").css('visibility', 'visible');
	        });
	       /* 隐藏点击添加/隐藏*/
	        $(document).delegate(".li_box>.title", "mouseleave", function () {
	        	$(this).find(".hover_show").css('visibility', 'hidden');
	        });
	        /*点击添加收藏*/
	        $(".alert_shoucang_box").on("click", ".j-add", function(){ 
	            var maxCol=cont();
	            if(maxCol!=null){
	            	alert(maxCol);
	            }else{
	            	$(this).parent('div').find(".qizi").attr('src',impPath+'/images/blue_qizi.png');
		            $(this).html("点击删除");
	            	var ids=$(this).prev().attr("id");
	            	var id=ids.replace("img_","");
		            addCollect(id);	
		            $(this).removeClass("j-add");
		            $(this).addClass("j-delete");
	            }
			});
	        /*点击删除收藏*/
	        $(".alert_shoucang_box").on("click", ".j-delete", function(){ 
	        	$(this).parent('div').find(".qizi").attr('src',impPath+'/images/gray_qizi.png');
	            $(this).html("点击增加");
	            var ids=$(this).prev().attr("id");
            	var id=ids.replace("img_","");
	            confirm_delete(id);
	            $(this).removeClass("j-delete");
	            $(this).addClass("j-add");
			});
	        $(".index_span").on("click",function(){
	        	window.location.href=basePath+"homePage/list.controller";
	        });
});
function echoList(jsonData){
	if (jsonData != null || jsonData != "") {
		var li="";
		for ( var k in jsonData) {
			Bid=jsonData[0].id;
			if(joinlist(jsonData[k],k)!="" && joinlist(jsonData[k],k)!=undefined && joinlist(jsonData[k],k)!=null)
				li+=joinlist(jsonData[k],k);
		}
		$(".alert_title_box").html(li);  
	}
}
function joinlist(jsonList,k){
	if(jsonList.id!="4028811f4a2899cb014a289aa8600001"){
		if(jsonList.id!=null){
			var span="<li style='cursor:pointer' class='title' id="+jsonList.id+" onclick='yjcd_click(\""+jsonList.id+"\")'>"+jsonList.name+"</li>";
			return span;
		}
	}
}
var tree_str="";
function collectList(treeData) {
	for ( var i = 0; i < treeData.length; i++) {
		if(treeData[i].menus == 1){
			var treeData_children = treeData[i].children;
			var treeData_url = treeData[i].url;
			var span;
			if(treeData_url == "null" || treeData_url == null || treeData_url == ""){
				span = 	"<li class='li_box clear_both'><div class='tiao'></div><div class='title'>"+"<img class='dian' src='../theme/bmsHTGL/images/dian.png' /><div class='title_name'>"+treeData[i].text+"</div></div>";
			}else{
				span = 	"<li class='li_box float_left'><div class='tiao'></div><div class='title'><div class='title_name'>"+treeData[i].text;
				span += "</div><img  class='qizi'  id='img_"+treeData[i].id+"' src='../theme/bmsHTGL/images/gray_qizi.png'><span style='cursor:pointer' class='j-add hover_show'>点击添加</span></div>";
			}
			if (treeData_children) {
				span += " <ul>";
			}
			tree_str += span;
			/**如果【i】中有孩子；表是它下面还有子菜单，递归调用添加<li>标签添加菜单项*/
			if (treeData_children) {
				collectList(treeData_children);
				tree_str += "</ul>";
			}
			/**没有子菜单，这闭合<ul>与<li>*/
			if (i == treeData.length - 1) {
				tree_str += "</li>";
			}
		}
	}
}
//点击收藏页标题
function yjcd_click(id){
	tree_str="";
	Bqid=id;
	for ( var t in fatherMenus) {
		if(fatherMenus[t].id==id){
			  getCollectList(fatherMenus[t].text,fatherMenus[t].id,(parseInt(t)+1)+'_',fatherMenus[t].siCode,fatherMenus[t].url);
		}
	}
	jQuery.ajax({
		type:"post",
		dataType:"json",  
		url:basePath+"collectQuery/findCollect.controller",
		success:function(result){
			echoCollect(eval(result.queryCollect));
		}
	});
}
//点击收藏页菜单
function colClik(id,name,pid,url){
	location.href=basePath+"login/index.controller?firstMenuId="+pid+"&colId="+id+"&colName="+encodeURI(encodeURI(name))+"&menuUrl="+url;
	}

function confirm_delete(ids){
	$.ajax({
		type:"get",
		cache:"false",
		url:basePath+"collectQuery/removeCollect.controller?t="+Math.random()+"&id="+ids,
		dataType:"json",
		success:function(result){
			if(result.messageCode.indexOf("S")==0){
				/*vals="";
				show("cover","bccg");*/
			}
		},
		error:function(){
			alert("异常操作，请查看系统日志！","message","deleteCg");
		}
	});
}

//循环遍历数据(回显收藏页)
function echoCollect(jsonData){
//	var li;
	if (jsonData != null || jsonData != "") {
		for ( var j in jsonData) {  
//			li+="<li onclick='colClik(\""+jsonData[k].funcId+"\",\""+jsonData[k].menuName+"\")'>"+jsonData[k].menuName+"</li>";
			$("#img_"+jsonData[j].funcId).attr("src",impPath+"/images/blue_qizi.png");
			$("#img_"+jsonData[j].funcId).next().removeClass("j-add").addClass("j-delete");
			$("#img_"+jsonData[j].funcId).next().html("点击删除");
		}
	}
//	$("#collected_list").next().html(li);
} 
//循环遍历数据(回显收藏页)
function echoCollect2(jsonData){
	var li="";
	if (jsonData != null || jsonData != "") {
		for ( var k in jsonData) {  
			li+="<li onclick='colClik(\""+jsonData[k].funcId+"\",\""+jsonData[k].menuName+"\",\""+jsonData[k].pid+"\",\""+jsonData[k].menuUrl+"\")'>"+jsonData[k].menuName+"</li>";
		}
	}
	$("#collected_list").html(li);
} 
//收藏菜单
function addCollect(id){
	$.ajax({
		type:"get",
		dataType:"json",
		url:basePath+"collectQuery/addCollect.controller?id="+id+"&pid="+Bqid,
		success:function(result){
		
		}	
	});	
}

//初始化收藏页数据
function initList(fat){
	var json = fordefaultTree2(eval(fat));
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
}

function getCollectList(title,id,value,sCode,url){
	for ( var i in fatherMenus) {
		if (id === fatherMenus[i].id) {
			if(typeof(fatherMenus[i].children) != 'undefined' && fatherMenus[i].children != null){
				collectList(fatherMenus[i].children);
			}else{
//				jQuery("#tree ul").html("");
			}
		}
	}
	jQuery(".content_box_alert ul").html(tree_str);
	/*给二级标签加border-left*/
	$(".content_box_alert>ul>li>.tiao").css('height','20px').css('width','4px').css('background','#3a85f4').css('float','left').css('margin-top','5px').css('margin-right','10px');
	/*移除二级标签前面的小点点*/
    $(".content_box_alert>ul>li>.title>.dian").remove();
    /*给float-left加padding-left:30px;*/
    $(".float_left").parent('ul').css('padding-left', '10px');	 
    /*把所有一级菜单的样式更换*/
    $(".content_box_alert>ul>li").children(".title").each(function(){
    	if($(this).parent().hasClass("float_left")){
        	$(this).parent().removeClass("float_left").addClass("clear_both");
        	$(".content_box_alert>ul>li>.title>.dian").remove();
        }
    });
    	
}

//判断收藏数量
function cont(){
	var text=null;
	$.ajax({
		type:"post",
		dataType:"json",
		async:false,
		url:basePath+"collectQuery/findCollectCount.controller",
		success:function(result){
			var i=eval(result.findCollectCount);
			if(i==15){
				text="最多只能收藏15个页面";
				return text;
			}
		},
        error:function(){
    	    alert("操作失败！","message_","bccg");
        }
		
	});
	return text;
}
function clickDiv() {
    $(".all_per_mid").css('display', 'none');
}

function clickP(event) {
    stopEvent(event);
}

function stopEvent(event) {
    var e = arguments.callee.caller.arguments[0] || event;
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else if (window.event) {
        window.event.cancelBubble = true;
    }
}