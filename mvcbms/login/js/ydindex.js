
jQuery(function(){
	$("#div_tc").bind("click",function(){div_tc_click();});
	$("#div_grzx").bind("click",function(){div_grzx_click();});
	jQuery.support.cors = true; 
	 $.ajax({
		    type:"get",
			cache:"false",
			dataType:"json",  
			url:basePath+"noticeQuery/findNotice.controller?t="+Math.random(),
			success:function(result){
				noticeUserName=result.homePageuserName;
				echoNoticeList(eval(result.noticeJson))//菜单
	        	$("#ydintemUsername").text("你好，"+noticeUserName.userRealName);
	        	echoNotice(eval(result.showlist))//公告
			}
		});
	 
	 function placeholderSupport() { // 判断浏览器是否支持 placeholder
	        return 'placeholder' in document.createElement('input');
	    }

	    if (!placeholderSupport()) {
	        
	        $(document).on('focus', '[placeholder]', function () {
	            var input = $(this);
	            if (input.val() == input.attr('placeholder')) {
	                input.val('');
	                input.removeClass('placeholder');
	            }
	        });
	        $(document).on('blur', '[placeholder]', function () {
	            var input = $(this);
	            if (input.val() == '' || input.val() == input.attr('placeholder')) {
	                input.addClass('placeholder');
	                input.val(input.attr('placeholder'));
	            }
	        });
	        $('[placeholder]').blur();
	    };
	    $.ajax({
			type:"post",
			cache:"false",
		    url:basePath+"shopCutQuery/find.controller?t="+Math.random(),
		    dataType:"json",
		    success:function(result){
		    	gainValue2(eval(result.findlist));
		    },
		    error:function(){
		    }
		  });

});

function htgl_click(id,name,url){
	/*window.parent.secondClick(title);//引用父级页面方法*/		
	window.location.href=basePath+"login/index.controller?firstMenuId="+id+"&colId="+id+"&colName="+encodeURI(encodeURI(name))+"&menuUrl="+url;
}


function echoNoticeList(jsonData){
	if (jsonData != null || jsonData != "") {
		for ( var k in jsonData) {
			jointNoticeList(jsonData[k]);
		}
	}
}
function jointNoticeList(jsonList,k){
	if(jsonList.id!="4028811f4a2899cb014a289aa8600001"){
		var span="";
		span+="<div style='cursor:pointer' class='mk_img' onclick='htgl_click(\""+jsonList.id+"\",\""+jsonList.name+"\",\""+jsonList.url+"\")'><img src="+jsonList.icon+" style='width:100%; height:100%;' />";
		/*span+="<div>";*/
	//	span+="<img src='"+jsonList.icon+"' alt='' >";
	//    span+=" </div>";
	//    span+="  <div style="margin:">"+jsonList.name+"</div>";
	    span+=" </div>";
		$(".content_wrap").append(span);  
		
	}
}

function echoNotice(jsonData){
	if (jsonData != null || jsonData != "") {
		for ( var k in jsonData) {
			jointNotice(jsonData[k])
		}
	}
}

function jointNotice(jsonNotice){
	var span;
	span="<li onclick='noticeClick()' style='cursor:pointer'>";
	span+="<span class='news_date'>["+jsonNotice.useTime+"] </span>";
	span+="<span class='news_title'>"+jsonNotice.title+"</span>";
    span+="</li>";
	$(".news_list ul:first").append(span);  
}
function notice_click(i){
	if(i==1){
		window.open(basePath+"notice/listPage.controller");
	}else{
		window.open("http://20.26.28.231/mv/index.php/%E9%A6%96%E9%A1%B5");
	}
}

function noticeClick(){
	window.location.href=basePath+"notice/listPage.controller";
}




function div_tc_click(){
	window.location.href=basePath+"login/loginOut.controller";
}

function div_grzx_click(){
	/*window.parent.second_Click();//引用父级页面方法	*/
	window.location.href=basePath+"login/index.controller?firstMenuId=4028811f4a2899cb014a289aa8600001";
}




$(".user_wrap>div>div").on("click", function (e) {
    e.stopPropagation();
    //阻止事件冒泡
    $(this).addClass("fn-hide").siblings().removeClass("fn-hide");
    if($(this).hasClass("content")){
       $(".login_state").removeClass("fn-hide");
    }else{
        $(".login_state").addClass("fn-hide");
    }
    
})
// $(".user_wrap>div").on("click",function(e){
//     e.stopPropagation();
//     return false;
// })
$("body").on("click",function(e){
    e.stopPropagation();
    if($(".user_wrap>div>div").hasClass("content")){
        $(".login_state").addClass("fn-hide");
        $(".content").removeClass("fn-hide").siblings().addClass("fn-hide");
     }
    
})
// 公告轮播
$(function () {
    var settime;
    $(".news_list").hover(function () {
        clearInterval(settime);
    }, function () {
        settime = setInterval(function () {
            var $first = $(".news_list ul:first");
            var height = $first.find("li:first").height();
            $first.animate({
                "marginTop": -37 + "px"
            }, 600, function () {
                $first.css({
                    marginTop: 0
                }).find("li:first").appendTo($first);
            });
        }, 3000);
    }).trigger("mouseleave");
});
$(document).ready(function () {
    //初始化宽度、高度  
    $(".box_warp").width($(window).width());
    $(".box_warp").height($(window).height());
    //当文档窗口发生改变时 触发  
    $(window).resize(function () {
        $(".box_warp").width($(window).width());
        $(".box_warp").height($(window).height());
    })
})




//循环遍历数据
function gainValue2(jsonData){
	if (jsonData != null || jsonData != "") {
		for ( var k in jsonData) {
			joinShopCut(jsonData[k].url,jsonData[k].funcName,jsonData[k].id);	
		}
	}
}

function joinShopCut(url,funcName,id){
	var li;
	li ="<li><a href='"+url+" 'target='_blank'>"+funcName+"</a></li>";
	$("#ul").append(li);  

}
