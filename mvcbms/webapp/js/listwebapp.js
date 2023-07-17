jQuery(function(){
	jQuery("#btnsearch").bind("click",function(){find('search','search');}); 
	jQuery("#reset").bind("click",function(){btn_click_reset();}); 
	jQuery("#batchDel").removeAttr("onclick").bind("click",function(){btn_delete_click();})
	jQuery("#search_r [id='first']").bind("click",function(){find('search','first');});
	jQuery("#search_r [id='before']").bind("click",function(){find('search','before');});
	jQuery("#search_r [id='next']").bind("click",function(){find('search','next');});
	jQuery("#search_r [id='end']").bind("click",function(){find('search','end');});
	jQuery("#search_r [id='go']").bind("click",function(){find('search','go');});
	jQuery("#wbyy").bind("click",function(){selAll();});
	jQuery("#add").bind("click",function(){btn_click_add();});
	setPageMessage("search");
	var searchData = jQuery("#search").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"webApp/queryWebApp.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//数据总条数
        	pagingMessage('search',pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"pp");
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
	 var checked = $("input[id='wbyy']").attr("checked"); 
	 if(checked){
		$("input[id='wbyy']").attr("checked",false); 
	 }
	//go第几页
	var goPage = jQuery("#gotoWebapp").val();
	jQuery("#gotoWebapp").val("");
	var url = basePath+"webApp/queryWebApp.controller";	
	search(url,tab,"pp",formId,countPageNum,goPage);
}
/**
 * 重置
 * @param formid
 */
function btn_click_reset(){
	document.getElementById("search").reset();
}
/**
 * 新增外部应用
 */
function btn_click_add(){
	window.location.href = basePath + "webAppRequestController/editWebApp.controller";
}
/**
 * 编辑
 * @param appCode
 */
function btn_click_edit(appCode){
	window.location.href = basePath +"webAppRequestController/editWebApp.controller?appCode="+appCode;
}
/**
 * 删除外部应用
 * @param id
 */
function btn_delete_click(ids){
	if(ids == "" || ids == null){
		ids= getChecks("wbyy").join(",");
		if(ids == "" || ids == null){
			showMessageTxt("请选择一条或多条记录!","message","deleteCg");
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
	jQuery("#dialog_").text(text);
	jQuery("#isDelete").removeAttr("onclick").unbind("click").bind("click",function(){btn_confirm_delete(ids);});
	show("cover","delete");
}
function btn_confirm_delete(ids){
	hide('cover','delete');
	jQuery.ajax({
		type:"get",
		cache:"false",
        url:basePath+"webAppDelete/delete.controller?t="+Math.random()+"&ids="+ids,
        dataType:"json",
        success:function(result){
        	showMessageTxt(result.message,"message","deleteCg");
        	if(result.messageCode.indexOf("S")==0){
    			jQuery("#qd").unbind("click").bind("click",function(){hide("cover","deleteCg");window.location.href=basePath+"webAppRequestController/listWebApp.controller";});
    			jQuery(".close").unbind("click").bind("click",function(){hide("cover","deleteCg");window.location.href=basePath+"webAppRequestController/listWebApp.controller";});
        	}
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
        }
	});
}
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
function resertSearch(){
	$("#appCode").val('');
	$("#appName").val('');
	$("#appURL").val('');
}
/**
 * 全选/取消全选
 */
function selAll(){
	/*var isChecked = $("input[id='wbyy']").attr("checked");
	if(isChecked){
		$("input[name='wbyy']").attr("checked",true); 
	}else{
		$("input[name='wbyy']").attr("checked",false); 
	}*/
	$("input[name='wbyy']").each(function(){
		this.checked=!this.checked;
	})
}