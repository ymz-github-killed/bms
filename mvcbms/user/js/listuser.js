jQuery(function(){
	document.getElementById("load_id").src=basePath + "mvcbms/pub/css/images/loading.gif";
	$("#newUserLink").bind("click",function(){btn_click_adduser()});
	$("#delall").removeAttr("onclick");
	$("#delall").bind("click",function(){btn_click_delete()}); 
	$("#import").bind("click",function(){btn_click_import()}); 
	$("#btnsearch").bind("click",function(){find('search','search')}); 
	$("#reset").bind("click",function(){btn_click_reset()}); 
	$("#export").bind("click",function(){btn_click_export()}); 	
	$("#users").bind("click",function(){isSelAll()});
	$("#first").bind("click",function(){find('search','first')});
	$("#before").bind("click",function(){find('search','before')});
	$("#next").bind("click",function(){find('search','next')});
	$("#end").bind("click",function(){find('search','end')});
	$("#go").bind("click",function(){find('search','go')});
	jQuery("#qd_").unbind("click").removeAttr("onclick");
	setPageMessage("search");
	var searchData = jQuery("#search").serializeArray();
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"userQuery/queryUsersFunc.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	var pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage("search",pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"user");
        	document.getElementById("user_tbody").style.visibility="visible";
        	document.getElementById("load_id").style.visibility="hidden";
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
        	jQuery("#qd_").unbind("click").bind("click",function(){hide("cover","bccg")});
        }
    }); 
	//用户性别下拉框内容
	var userSexOption = jsonData.userSexSelectList;
	initOptionContent(userSexOption,"search","userSex");
	//用户状态下拉框内容
	var userStatusOption = jsonData.userStatusSelectList;
	initOptionContent(userStatusOption,"search","userStatus");
});

/**
 * 删除用户
 * @param id
 */
function btn_click_delete(ids){
	if(ids == "" || ids == null){
		ids= getChecks("users").join(",");		
		if(ids == "" || ids == null){
			showMessageTxt("请选择一条或多条记录!","message","bccg");
			jQuery("#qd_").unbind("click").bind("click",function(){hide("cover","bccg")});
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
	//var href="btn_confirm_delete(\'"+ids+"\')";
	jQuery("#qd").unbind("click").bind("click",function(){btn_confirm_delete(ids)});
	show("cover","delete");
}
/**
 * 导出用户
 */
function btn_click_export()
{	
	var objType = "";//浏览器类型
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox') >= 0){
		objType = "firefox";
	}
	var id = getChecks("users").join(",");
	jQuery("#search [id='chkid_position']").html("");
	jQuery("#search [id='chkid_position']").append("<input type='hidden' name='chkid' value='"+id+"'/>");
	jQuery("#search [id='chkid_position']").append("<input type='hidden' name='objType' value='"+objType+"'/>");
	var url = basePath+"userExport/export.controller?t="+Math.random();
	jQuery("#search").attr("action",url);
	jQuery("#search").submit();
}
/**
 * 导入用户
 */
function btn_click_import(){
	window.location.href=basePath+"user/importUser.controller";
}
/**
 * 重置
 */
function btn_click_reset(){
	jQuery("#userSexSelected [class='fleft']").text("请选择");
	jQuery("#userStatusSelected [class='fleft']").text("请选择");
	document.getElementById("search").reset();
}
/**
 * 全选/取消全选
 */
function isSelAll(){
	/*var isChecked = $("input[id='users']").attr("checked");
	alert(isChecked);
	if(isChecked){
		$("input[name='users']").attr("checked",true); 
	}else{
		$("input[name='users']").attr("checked",false); 
	}*/
	$('input[name="users"]').each(function(){
		this.checked=!this.checked;
	})
}
/**
 * 编辑用户
 * @param rid
 */
function edit_user(uid){
	window.location.href=basePath+"user/edit.controller?userid="+uid;
}
/**
 * 请求到添加用户界面
 */
function btn_click_adduser(){
	window.location.href=basePath+"user/add.controller";
}

/**
 * 
 * @param tab 可选参数：first,end,before,next,changerowdispalyed
 * @param countPageNum 每页显示条数，可选参数；
 */
function find(formId,tab,countPageNum){
	var checked = $("input[id='users']").attr("checked"); 
	if(checked){
		$("input[id='users']").attr("checked",false); 
	}
	//go第几页
	var goPage = jQuery("#gotoUsers").val();
	jQuery("#gotoUsers").val("");
	var url = basePath+"userQuery/queryUsersFunc.controller";	
	search(url,tab,"user",formId,countPageNum,goPage);
}
/**
 * 确认删除
 * @param ids
 */
function btn_confirm_delete(ids){
	hide('cover','delete');
	jQuery.ajax({
		type:"get",
		cache:"false",
        url:basePath+"userDelete/delete.controller?t="+Math.random()+"&ids="+ids,
        dataType:"json",
        success:function(result){
        	showMessageTxt(result.message,"message","bccg");
        	if(result.messageCode.indexOf("S")==0){
        		jQuery("#qd_").unbind("click").bind("click",function(){hide("cover","bccg");window.location.href=basePath+"user/list.controller";});
        		jQuery("#close").unbind("click").bind("click",function(){hide("cover","bccg");window.location.href=basePath+"user/list.controller";});
        	}
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
        	jQuery("#qd_").unbind("click").bind("click",function(){hide("cover","bccg")});
        }
	});
}
/**
 * 获取选中的checkbox值
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
 * 查看用户
 * @param rid
 */
function show_user(uid){
	window.location.href=basePath+"user/showUser.controller?userid="+uid;
}

