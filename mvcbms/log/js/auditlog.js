jQuery(function (){
	$("#search_r [id='first']").bind("click",function(){find('search','first');});
	$("#search_r [id='before']").bind("click",function(){find('search','before');});
	$("#search_r [id='next']").bind("click",function(){find('search','next');});
	$("#search_r [id='end']").bind("click",function(){find('search','end');});
	$("#search_r [id='go']").bind("click",function(){find('search','go');});
	$("#reset").bind("click",function(){reset()}); 
	$("#btnsearch").bind("click",function(){find('search','search')}); 
	
	setPageMessage("search");
	var searchData = jQuery("#search").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"auditlogController/queryAuditLog.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//数据总条数
        	pagingMessage('search',pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"auditlog");
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
        }
    }); 

});

/**
 * 
 * @param tab 可选参数：first,end,before,next,changerowdispalyed
 * @param countPageNum 每页显示条数，可选参数；
 */

function find(formId,tab,countPageNum){
	//go第几页
	var goPage = jQuery("#goPage").val();
	jQuery("#goPage").val("");
	var url = basePath+"auditlogController/queryAuditLog.controller";	
	search(url,tab,"auditlog",formId,countPageNum,goPage);
}

/**
 * 重置
 */
function reset(){
	document.getElementById("search").reset();
	find('search','search');
}
