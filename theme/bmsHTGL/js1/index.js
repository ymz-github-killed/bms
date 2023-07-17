$(function () {
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
                    "marginTop": -height + "px"
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
    
   
   
})