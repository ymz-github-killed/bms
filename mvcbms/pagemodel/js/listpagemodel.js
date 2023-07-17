jQuery(function(){
	jQuery("#btn_search").bind("click",function(){find("search","search");});
	jQuery("#btn_reset").bind("click",function(){btn_click_reset();});
	jQuery("#btn_add").bind("click",function(){window.location.href=basePath+"pageModel/add.controller";});
	jQuery("#btn_deleAll").removeAttr("onclick");
	jQuery("#btn_deleAll").unbind("click").bind("click",function(){btn_click_delete()});
	jQuery("#qd_").removeAttr("onclick");
	jQuery("#apps").bind("click",function(){isSelAll();});
	jQuery("#first").bind("click",function(){find("search","first");});
	$("#before").bind("click",function(){find('search','before')});
	$("#next").bind("click",function(){find('search','next')});
	$("#end").bind("click",function(){find('search','end')});
	$("#go").bind("click",function(){find('search','go')});
	setPageMessage("search");
	var searchData = jQuery("#search").serializeArray();
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"pageModelQuery/query.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	var pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage("search",pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"littleApp");
        },
        error:function(){
        	showMessageTxt("系统异常！","message","deleteCg");
        	jQuery("#qd").unbind("click").bind("click",function(){hide("cover","deleteCg")});
        	jQuery("#close").unbind("click").bind("click",function(){hide("cover","deleteCg")});
        }
    }); 
});
/**
 * 
 * @param formId
 * @param tab可选参数：first,end,before,next,changerowdispalyed
 * @param countPageNum每页显示条数，可选参数；
 */
function find(formId,tab,countPageNum){
	var checked = $("input[id='apps']").attr("checked"); 
	if(checked){
		$("input[id='apps']").attr("checked",false); 
	}
	//go第几页
	var goPage = jQuery("#gotoApps").val();
	jQuery("#gotoApps").val("");
	var url = basePath+"pageModelQuery/query.controller";	
	search(url,tab,"littleApp",formId,countPageNum,goPage);
}
/***
 * 重置
 */
function btn_click_reset(){
	document.getElementById("search").reset();
}
/***
 * 删除小应用
 * @param ids
 */
function btn_click_delete(ids){
	if(ids == "" || ids == null){
		ids = getChecks("apps").join(",");
		if(ids == "" || ids == null){
			showMessageTxt("请选择一条或多条记录!","message","deleteCg");
			jQuery("#qd").unbind("click").bind("click",function(){hide("cover","deleteCg")});
			return false;
		}
	}
	showDialog("确定删除吗?",ids);
}
/**
 * 确定是否删除对话框
 * @param text 提示内容
 * @param ids 所选记录的id数组
 */
function showDialog(text,ids){
	$("#dialog_").text(text);
	jQuery("#qd_").unbind("click").bind("click",function(){btn_confirm_delete(ids)});
	show("cover","delete");
}
/**
 * 确认删除
 * @param ids
 */
function btn_confirm_delete(ids){
	hide("cover","delete");
	jQuery.ajax({
		type:"get",
		cache:"false",
        url:basePath+"pageModelDelete/deleApp.controller?t="+Math.random()+"&ids="+ids,
        dataType:"json",
        success:function(result){
        	showMessageTxt(result.message,"message","deleteCg");
        	if(result.messageCode.indexOf("S")==0){
        		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","deleteCg");window.location.href=basePath+"pageModel/list.controller";});
        		jQuery("#close").unbind("click").bind("click",function(){hide("cover","deleteCg");window.location.href=basePath+"pageModel/list.controller";});
        	}
        },
        error:function(){
        	showMessageTxt("异常操作！","message","deleteCg");
        	jQuery("#qd").unbind("click").bind("click",function(){hide("cover","deleteCg")});
        	jQuery("#close").unbind("click").bind("click",function(){hide("cover","deleteCg")});
        }
	});
}
/***
 * 获取选中的checkbox
 * @param name
 * @returns {Array}
 */
function getChecks(name){
	var re = new Array();
	var ck = jQuery("[name='"+name+"']");
	for(var i=0; i<ck.length; i++)
	{
		if(ck[i].checked)
		{
			re.push(ck[i].value);
		}
	}
	return re;
}
/**
 * 全选/取消全选
 */
function isSelAll(){
	var isChecked = $("input[id='apps']").attr("checked");
	if(isChecked){
		$("input[name='apps']").attr("checked",true); 
	}else{
		$("input[name='apps']").attr("checked",false); 
	}
}
/**
 * 请求跳转到编辑页面
 * @param ids
 */
function btn_click_edit(id){
	window.location.href = basePath + "pageModel/edit.controller?appid="+id;
	
}
/**
 * 请求跳转到查看页面
 * @param id
 */
function btn_click_show(id){
	window.location.href = basePath + "pageModel/show.controller?appid="+id;
}
/***
 * 置顶
 * @param id
 */
function btn_click_isTop(id){
	jQuery.ajax({
		type:"get",
		cache:"false",
        url:basePath+"pageModelIsTop/makeToTop.controller?t="+Math.random()+"&id="+id,
        dataType:"json",
        success:function(result){
        	if(result.messageCode.indexOf("S")==0){
        		window.location.href=basePath+"pageModel/list.controller";
        	}else{
        		showMessageTxt(result.message,"message","deleteCg");
            	jQuery("#qd").unbind("click").bind("click",function(){hide("cover","deleteCg")});
            	jQuery("#close").unbind("click").bind("click",function(){hide("cover","deleteCg")});
        	}
        },
        error:function(){
        	showMessageTxt("异常操作！","message","deleteCg");
        	jQuery("#qd").unbind("click").bind("click",function(){hide("cover","deleteCg")});
        	jQuery("#close").unbind("click").bind("click",function(){hide("cover","deleteCg")});
        }
	});
}

function btn_click_test(obj,id){
	obj.href = basePath + "index/check.controller?appid="+id;
	
}