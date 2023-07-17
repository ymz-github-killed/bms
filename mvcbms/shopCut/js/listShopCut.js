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
	$("#newShopCut").bind("click",function(){addShopCut()});
	$("#shopCuts").bind("click",function(){isSelAll()});
	$("#btnsearch").bind("click",function(){find('search','search')}); 
	setPageMessage("search");
	var searchData = jQuery("#search").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"shopCutQuery/query.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//数据总条数
        	pagingMessage('search',pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"shopCut");
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
	var url = basePath+"shopCutQuery/query.controller";	
	search(url,tab,"shopCut",formId,countPageNum,goPage);
}
/**
 * 改变生效状态
 * @param id
 */
//function changeStatus(id){
//	jQuery.ajax({
//		type:"get",
//		url:basePath+"noticeQuery/changeStatus.controller?t="+Math.random()+"&id="+id,
//		dataType:"json",
//		cache:"false",
//		success:function(result){
//			showMessageTxt(result.message,"message","deleteCg");
//        	if(result.messageCode.indexOf("S")==0){
//        		jQuery("#qd_").unbind("click").bind("click",function(){window.location.href=basePath+"notice/list.controller?t="+Math.random();});
//        		jQuery("#close").unbind("click").bind("click",function(){window.location.href=basePath+"notice/list.controller?t="+Math.random();});
//        	}
//		},
//		error:function(){
//			showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
//        }
//	});
//}
/**
 * 全选/取消全选
 */
function isSelAll(){
	var isChecked = $("input[id='shopCuts']").attr("checked");
	if(isChecked){
		$("input[name='shopCuts']").prop("checked",true); 
	}else{
		$("input[name='shopCuts']").prop("checked",false); 
	}
}
/**
 * 重置
 */
function reset(){
	document.getElementById("search").reset();
}
/**
 * 删除公告
 */
function before_delete(ids){
	if(ids == ""||ids == null){
		ids= getChecks("shopCuts").join(",");		
		if(ids == "" || ids == null){
			showMessageTxt("请选择一条或多条记录!","message","deleteCg");
			return false;
		}
	}
	
	showDialog("确定删除吗?",ids);
}
/**
 * 获取选中的checkbox的值
 * @param name
 */
function getChecks(name){
	var arr= new Array();
	var ch=jQuery("[name='"+name+"']");
	for(var i=0;i<ch.length;i++){
		if(ch[i].checked){
			arr.push(ch[i].value);
		}
	}
	return arr;
}
/**
 * 确定是否删除对话框
 * @param text 提示内容
 * @param ids 所选记录的id数组
 */
function showDialog(text,ids){
	$("#dialog_").text(text);
	jQuery("#qd").unbind("click").bind("click",function(){confirm_delete(ids)});
	show("cover","delete");
}
/**
 * 确定删除
 * @param ids
 */
function confirm_delete(ids){
	hide("cover","delete");
	$.ajax({
		type:"get",
		cache:"false",
		url:basePath+"shopCutDelete/delete.controller?t="+Math.random()+"&ids="+ids,
		dataType:"json",
		success:function(result){
			showMessageTxt(result.message,"message","deleteCg");
			if(result.messageCode.indexOf("S")==0){
        		jQuery("#qd_").unbind("click").bind("click",function(){window.location.href=basePath+"shopCut/list.controller?t="+Math.random();});
        		jQuery("#close").unbind("click").bind("click",function(){hide("cover","deleteCg");window.location.href=basePath+"shopCut/list.controller?t="+Math.random();});
        	}
		},
		error:function(){
			showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
		}
	});
}
/**
 * 查看公告
 */
function showShopCut(id){
	window.location.href=basePath+"shopCut/showShopCut.controller?id="+id;
}
/**
 * 编辑公告
 * @param id
 */
function editShopCut(id){
	window.location.href=basePath+"shopCut/edit.controller?id="+id;
}
/**
 * 请求到添加界面
 */
function addShopCut(){
	window.location.href=basePath+"shopCut/add.controller";
}