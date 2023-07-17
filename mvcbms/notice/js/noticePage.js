jQuery(function(){
	var content_height = $(document).height() - 100;
    $(".notice_content_wrap").height(content_height);
	 $.ajax({
		    type:"post",
			cache:"false",
			dataType:"json",  
			url:basePath+"noticeQuery/noticeDetails.controller?t="+Math.random(),
			success:function(result){
	        	noticeUserName=result.noticeDetailsJson;
	        	jQuery(".noticeDetails_name").html("你好，"+noticeUserName.userRealName);
	        	//数据内容
	        	noticeDate=result.noticeDetailsJsonuserName;
	        	notice_data_event(noticeDate)
			}
		});
});

$("#ggglxqy_div").on("click",function(){
	window.location.href=basePath+"homePage/list.controller";
})


function notice_click(i){
	if(i==1){
		window.open(basePath+"notice/listPage.controller");
	}else{
		window.open("http://20.26.28.231/mv/index.php/%E9%A6%96%E9%A1%B5");
	}
}


function notice_data_event(jsonList){
	
	var jointData;
	jointData="<div class='notice_content'>";
	jointData+="<div class='notice_title'>";
	jointData+=""+jsonList.title+"</div>";
	jointData+="<div class='publish_date_author fn-clear'>";
    if(jsonList.createUser=="" || jsonList.createUser==null || jsonList.createUser==undefined){
    	jointData+="<div><span>&nbsp;&nbsp;发布人:</span><span></span></div><div><span>发布时间:</span><span>"+jsonList.useTime+"</span></div>";
	}else{
		jointData+="<div><span>&nbsp;&nbsp;发布人:</span><span>"+jsonList.createUser+"</span></div><div><span>发布时间:</span><span>"+jsonList.useTime+"</span></div>";
	}
	
	jointData+="</div>";
	jointData+="<div class='notice_article'>";
	jointData+=""+jsonList.content+"";
	jointData+="</div>";
	jointData+="</div>";
	$(".notice_content_wrap").append(jointData); 
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
$("#xqy_grzx").on("click",function(){
	window.location.href=basePath+"login/index.controller?firstMenuId=4028811f4a2899cb014a289aa8600001";
})
$("#xqy_tc").on("click",function(){
	window.location.href=basePath+"login/loginOut.controller";
})