jQuery(function(){
	$("#search_r [id='first']").bind("click",function(){find('search','first');});
	$("#search_r [id='before']").bind("click",function(){find('search','before');});
	$("#search_r [id='next']").bind("click",function(){find('search','next');});
	$("#search_r [id='end']").bind("click",function(){find('search','end');});
	$("#search_r [id='go']").bind("click",function(){find('search','go');});
	$("#go").bind("click",function(){find('search','go')});
	$("#reset").bind("click",function(){reset()}); 
	$("#delall").removeAttr("onclick");
	$("#delall").bind("click",function(){before_delete()}); 
	$("#newNotice").bind("click",function(){addNotice()});
	$("#notices").bind("click",function(){isSelAll()});
	$("#btnsearch").bind("click",function(){find('search','search')}); 
	setPageMessage("search");
	var searchData = jQuery("#search").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"noticeQuery/queryUseNotice.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//数据总条数
        	pagingMessage('search',pageMessage);
        	//登录用户
        	noticeUserName=result.userName;
        	jQuery("#zjUserName").html("你好，"+noticeUserName.userRealName);
        	//数据展示
        	tableUtil(eval(result.list),"noticelb");
        	/*dataUtil(eval(result.list));*/
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
        }
    }); 
	
	//生效状态下拉框内容
	/*var statusOption = jsonData.statusSelectList;
	initOptionContent(statusOption,"search","status");*/
});
function notice_click(i){
	if(i==1){
		window.open(basePath+"notice/listPage.controller");
	}else{
		window.open("http://20.26.28.231/mv/index.php/%E9%A6%96%E9%A1%B5");
	}
}





$("#gggllb_span").on("click",function(){
	window.location.href=basePath+"homePage/list.controller";
})

$("#div_grzx_gg").on("click",function(){
	window.location.href=basePath+"login/index.controller?firstMenuId=4028811f4a2899cb014a289aa8600001";
})
$("#div_tc_gg").on("click",function(){
	window.location.href=basePath+"login/loginOut.controller";
})
/*function dataUtil(data){
	if (jsonData != null || jsonData != "") {
		for ( var k in data) {
			dataUtilpj(data[k]);
		}
	}
}*/
/*function dataUtilpj(data){
	var tab="<tr onclick='id_click(\""+data.id+"\")'>";
	tab+=" <td  title="+data.title+">"+data.title+"</td>";
	tab+="<td  title="+data.createUser+">"+data.createUser+"</td>";
	tab+=" <td  title="+data.useTime+">"+data.useTime+"</td>";
	tab+="</tr>";
	jQuery("#notice_tbody").append(tab);
}*/
function id_click(id){
	window.location.href=basePath+"notice/listPageI.controller?id="+id;
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
/**
 * 
 * @param tab 可选参数：first,end,before,next,changerowdispalyed
 * @param countPageNum 每页显示条数，可选参数；
 */

function find(formId,tab,countPageNum){
	//go第几页
	var goPage = jQuery("#goPage").val();
	jQuery("#goPage").val("");
	var url = basePath+"noticeQuery/queryNotice.controller";	
	search(url,tab,"noticelb",formId,countPageNum,goPage);
}


/**
 * 重置
 */
function reset(){
	document.getElementById("search").reset();
	find('search','search');
}



