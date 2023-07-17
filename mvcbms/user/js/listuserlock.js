jQuery(function(){
	
	var useUserLock = jsonData.useUserLock;
	
	//用户性别下拉框内容
	var userSexOption = jsonData.userSexSelectList;
	initOptionContent(userSexOption,"search","userSex");
	//用户锁定状态下拉框内容
	var isLockedOption = jsonData.isLockedSelectList;
	initOptionContent(isLockedOption,"search","isLocked");
	if(useUserLock === "true"){
		requestFunc();
	}else{
		jQuery("#userLock_tbody").html("");
		show('cover','wqysd');
	}
	
	jQuery(".btn_find").bind("click",function(){find('search','search')});
	jQuery(".btn_reset").bind("click",function(){btn_click_reset()});
	jQuery(".btn_go").bind("click",function(){find('search','go')});
	jQuery("#first").bind("click",function(){find('search','first')});
	jQuery("#befroe").bind("click",function(){find('search','before')});
	jQuery("#next").bind("click",function(){find('search','next')});
	jQuery("#end").bind("click",function(){find('search','end')});
});
/**
 * 
 * @param tab 可选参数：first,end,before,next,changerowdispalyed
 * @param countPageNum 每页显示条数，可选参数；
 */
function find(formId,tab,countPageNum){
	//go第几页
	var goPage = jQuery("#go").val();
	jQuery("#go").val("");
	var url = basePath+"userQuery/queryUserLock.controller";	
	search(url,tab,"userLock",formId,countPageNum,goPage);
}
/**
 * 重置查询条件
 */
function btn_click_reset(){
	document.getElementById("search").reset();
	jQuery("#userSexSelected [class='fleft']").text("请选择");
	jQuery("#isLockedSelected [class='fleft']").text("请选择");
}
/***
 * 解锁/锁定
 */
function ensure(id){
	jQuery.getJSON(basePath+"userLock/lock.controller?t="+Math.random(), { id:id},
			  function(result){
				jQuery(".btn_enter").unbind("click").bind("click",function(){hide('cover','delete')});
				sendMessage(result);
			  });
}
function lock(id){
	jQuery.getJSON(basePath+"userLock/lock.controller?t="+Math.random(), { id:id},
			  function(result){
				jQuery(".btn_enter").unbind("click").bind("click",function(){hide('cover','delete')});
				sendMessage(result);
			  });
}
function userLock(isLock,id){
	if(isLock == 0){
		jQuery("#message").html('锁定后该用户不可登录，确定要执行该操作吗？');
		jQuery(".btn_enter").unbind("click").bind("click",function(){hide('cover','delete');ensure(id)});
		show("cover","delete");
	}else{
		jQuery("#message").html('确定解锁该用户吗？');
		jQuery(".btn_enter").unbind("click").bind("click",function(){hide('cover','delete');lock(id)});
		show("cover","delete");
		
	}
}

function requestFunc(){
	document.getElementById("load_id").src=basePath + "mvcbms/pub/css/images/loading.gif";
	setPageMessage("search");
	var searchData = jQuery("#search").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"userQuery/queryUserLock.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage("search",pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"userLock");
        	document.getElementById("userLock_tbody").style.visibility="visible";
        	document.getElementById("load_id").style.visibility="hidden";
        },
        error:function(){
        	jQuery("#bt_close").unbind("click");
        	showMessageTxt("异常操作，请查看系统日志！","msg","sdcg");
        }
    }); 
}

function sendMessage(result){
		jQuery("#bt_close").unbind("click").bind("click",function(){requestFunc();});
		jQuery("#bt_enter").unbind("click").bind("click",function(){requestFunc();});
		showMessageTxt(result.message,"msg","sdcg");
}