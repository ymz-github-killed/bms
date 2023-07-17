document.write("<link rel='stylesheet' type='text/css' href='"+basePath+"mvcbms/pub/js/ztree/zTreeStyle/zTreeStyle.css'/>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.core-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.excheck-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/navtree.js' type='text/javascript'></script>");
jQuery(function(){
	jQuery("#searchForm [id='search']").bind("click",function(){findRole('searchForm','search')});
	jQuery("#searchForm [id='reset']").bind("click",function(){btn_click_reset('searchForm')});
	jQuery("#deleteAllRole").removeAttr("onclick");
	jQuery("#deleteAllRole").unbind("click").bind("click",function(){btn_click_delete('','','roles')});
	jQuery("#roles").bind("click",function(){isSelAll('roles')});
	jQuery("#searchForm_r [id='first']").bind("click",function(){findRole('searchForm','first')});
	jQuery("#searchForm_r [id='before']").bind("click",function(){findRole('searchForm','before')});
	jQuery("#searchForm_r [id='next']").bind("click",function(){findRole('searchForm','next')});
	jQuery("#searchForm_r [id='end']").bind("click",function(){findRole('searchForm','end')});
	jQuery("#searchForm_r [id='go']").bind("click",function(){findRole('searchForm','go')});
	jQuery("#add").bind("click",function(){btn_click_add()});
	jQuery("#deleteCg [id='qd']").removeAttr("onclick");
	jQuery("#deleteCg [id='close']").removeAttr("onclick");
	jQuery("#pop_deleteCg [id='qd']").removeAttr("onclick");
	jQuery("#pop_deleteCg [id='close']").removeAttr("onclick");
	getOptionContent("addUserForm");
	getOptionContent("roleuserForm");
	initData();
});
function initData(){
	setPageMessage("searchForm");
	var searchData = jQuery("#searchForm").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"roleQuery/query.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage("searchForm",pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"role");
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","roles_msg","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        	jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
    }); 
}
/**
 * 获取下拉框选项的内容
 * @param formid
 */
function getOptionContent(formid){
	//用户性别下拉框内容
	var userSexOption = jsonData.userSexSelectList;
	initOptionContent(userSexOption,formid,"userSex");
	//用户状态下拉框内容
	var userStatusOption = jsonData.userStatusSelectList;
	initOptionContent(userStatusOption,formid,"userStatus");
}

/**
 * 查询角色
 * @param tab 可选参数：first,end,before,next;
 * @param countPageNum 可选参数 countPageNum 每页显示条数;
 */
function findRole(formId,tab,countPageNum){
	var checked = $("input[id='roles']").attr("checked"); 
	if(checked){
		$("input[id='roles']").attr("checked",false); 
	}
	//go第几页
	var goPage = jQuery("#gotoRole").val();
	jQuery("#gotoRole").val("");
	var url = basePath+"roleQuery/query.controller";	
	search(url,tab,"role",formId,countPageNum,goPage);
}
/**
 * 查询用户角色
 * @param formId
 * @param tab
 * @param countPageNum
 */
function findUserRole(formId,tab,countPageNum){
	var checked = $("input[id='users']").attr("checked"); 
	if(checked){
		$("input[id='users']").attr("checked",false); 
	}
	//go第几页
	var goPage = jQuery("#gotoUserRole").val();
	jQuery("#gotoUserRole").val("");
	var url = basePath+"userConfig/getUsers.controller";	
	search(url,tab,"userRole",formId,countPageNum,goPage);
}
/**
 * 查询用户
 * @param formId
 * @param tab
 * @param countPageNum
 */
 function findUser(formId,tab,countPageNum){
	 var checked = $("input[id='addusers']").attr("checked"); 
	 if(checked){
		$("input[id='addusers']").attr("checked",false); 
	 }
	 //go第几页
	var goPage = jQuery("#gotoUser").val();
	jQuery("#gotoUser").val("");
	var url = basePath+"userConfig/listNotCheckedUsers.controller";
	search(url,tab,"useradd",formId,countPageNum,goPage);
 }
/**
 * form重置
 */
function btn_click_reset(formid){
	document.getElementById(formid).reset();
	var sexdiv = jQuery("#"+formid+" [id='userSexSelected']");
	var statusdiv = jQuery("#"+formid+" [id='userStatusSelected']");
	sexdiv.find(".fleft").text("请选择");
	statusdiv.find(".fleft").text("请选择");
}
/**
 * 根据name值重置
 */
function click_reset(){
	$("div :input[type=text]").each(function () {  
        $(this).val("");  
        });  
}
/**
 * 新增角色事件
 */
function btn_click_add(){
	window.location.href=basePath+"role/add.controller";
}
/**
 * 删除事件
 * @param ids
 * @returns {Boolean}
 */
function btn_click_delete(ids,roleid,itemname){
	hide("cover","yhpz");
	if(ids == "" || ids == null){
		ids= getChecks(itemname).join(",");		
		if(ids == "" || ids == null){
			if(itemname == "roles"){
				showMessageTxt("请选择一条或多条记录!","roles_msg","deleteCg");
				jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
				jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
			}else if(itemname == "users"){
				showMessageTxt("请选择一条或多条记录!","users_msg","pop_deleteCg");
				jQuery("#pop_deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','pop_deleteCg');showTB('cover','yhpz')});
				jQuery("#pop_deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','pop_deleteCg');showTB('cover','yhpz')});
			}
			return false;
		}
	}
	if(itemname == "roles"){
		showDialog("确定删除吗?",ids,roleid,"roles");
	}else if(itemname == "users"){
		showDialog("确定要删除该用户的角色授权吗?",ids,roleid,"users");
	}
}
/**
 * 得到checkBox的选中项
 * @param name
 * @returns {Array}
 */
function getChecks(name){
	var re = [];
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
 * 确定是否删除对话框
 * @param text 提示内容
 * @param ids 所选记录的id数组
 */
function showDialog(text,ids,roleid,name){
	$("#"+name+"_dialog").text(text);
	if(name=="roles"){
		//var delRolehref="confirm_delete_role(\'"+ids+"\')";
		show('cover','pl_delete');
		$("#roles_qd").unbind("click").bind("click",function(){confirm_delete_role(ids);});
	}else if(name=="users"){
		show('cover','delete');
		//var delUserhref="confirm_delete_user(\'"+ids+"\')";
		$("#users_qd").unbind("click").bind("click",function(){confirm_delete_user(ids,roleid);});
	}
}
/**
 * 确定删除角色
 * @param ids
 */
function confirm_delete_role(ids){
	hide('cover','pl_delete');
	jQuery.ajax({
		type:"get",
		cache:"false",
        url:basePath+"roleDelete/delete.controller?t="+Math.random()+"&ids="+ids,
        dataType:"json",
        success:function(result){
        	showMessageTxt(result.message,"roles_msg","deleteCg");
        	if(result.messageCode.indexOf("S")==0){
    			//var link = "delSuccess(\'deleteCg\')";
    			jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){delSuccess('deleteCg')});
    			jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){delSuccess('deleteCg')});
        	}
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","roles_msg","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        	jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
	});
}
function delSuccess(divid,roleid){
	hide("cover",divid);
	if(divid == "pop_deleteCg"){
		showUser(roleid);
		showTB("cover","yhpz");
	}
	if(divid == "deleteCg"){
		window.location.href=basePath+"role/list.controller";
	}
}
/**
 * 确定删除用户角色
 * @param ids
 */
function confirm_delete_user(ids,roleid){
	hide('cover','delete');
	jQuery.ajax({
		type:"get",
		cache:"false",
        url:basePath+"userConfig/deleteUserRole.controller?t="+Math.random()+"&ids="+ids+"&roleid="+roleid,
        dataType:"json",
        success:function(result){
        	showMessageTxt(result.message,"users_msg","pop_deleteCg");
        	if(result.messageCode.indexOf("S")==0){
    			var isChecked = jQuery("input[id='users']").attr("checked");
    			if(isChecked){
    				jQuery("input[id='users']").attr("checked",false);
    			}
    			var rid = jQuery("#roleid").val();
    			//var link = "delSuccess(\'pop_deleteCg\',\'"+rid+"\')";
    			jQuery("#pop_deleteCg [id='qd']").unbind("click").bind("click",function(){delSuccess('pop_deleteCg',rid)});
    			jQuery("#pop_deleteCg [id='close']").unbind("click").bind("click",function(){delSuccess('pop_deleteCg',rid)});
        	}
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","roles_msg","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        	jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
	});
}
/**
 * 添加用户的弹出层中_点击返回_事件
 */
function back_to_request(){
	btn_click_reset('addUserForm');
	jQuery("#roleuserForm [id='pageNum']").val(1);
	jQuery("#roleuserForm [id='firstEnter']").val(false);
	var isChecked = jQuery("input[id='addusers']").attr("checked");
	if(isChecked){
		jQuery("input[id='addusers']").attr("checked",false);
	}
	requestGetUserData(jQuery("#rid").val());
}
/**
 * 显示角色下的用户
 * @param id
 */
function showUser(id){
	btn_click_reset('roleuserForm');
	jQuery("#btnadd").removeAttr("onclick");
	jQuery("#btnadd").unbind("click").bind("click",function(){addUser();hide('cover','yhpz');showTB('cover','addJsUser');popTable('addJsUser')});
	jQuery("#deleteAllUser").removeAttr("onclick");
	jQuery("#deleteAllUser").unbind("click").bind("click",function(){btn_click_delete('',id,'users')});
	jQuery("#users").bind("click",function(){isSelAll('users')});
	jQuery("#roleuserForm [id='reset']").bind("click",function(){btn_click_reset('roleuserForm')});
	jQuery("#roleuserForm [id='search']").bind("click",function(){findUserRole('roleuserForm','search')});
	jQuery("#roleuserForm_r [id='first']").bind("click",function(){findUserRole('roleuserForm','first')});
	jQuery("#roleuserForm_r [id='before']").bind("click",function(){findUserRole('roleuserForm','before')});
	jQuery("#roleuserForm_r [id='next']").bind("click",function(){findUserRole('roleuserForm','next')});
	jQuery("#roleuserForm_r [id='end']").bind("click",function(){findUserRole('roleuserForm','end')});
	jQuery("#roleuserForm_r [id='go']").bind("click",function(){findUserRole('roleuserForm','go')});
	jQuery("#back").removeAttr("onclick");
	jQuery("#back").unbind("click").bind("click",function(){back_to_request();hide('cover','addJsUser');show('cover','yhpz')});
	var isChecked = jQuery("input[id='users']").attr("checked");
	if(isChecked){
		jQuery("input[id='users']").attr("checked",false);
	}
	setPageMessage("roleuserForm");
	requestGetUserData(id);
}
/**
 * 请求获取用户的数据
 */
function requestGetUserData(id){
	jQuery("#roleuser").html("");
	jQuery("#roleuser").append("<input type='hidden' name='id' id='roleid' value='"+id+"'/>");
	var subdata = jQuery("#roleuserForm").serializeArray();
	jQuery.ajax({
		type:"get",
    	cache:"false",
        url:basePath+"userConfig/getUsers.controller?t="+Math.random(),
        dataType:"json",
        data:subdata,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage('roleuserForm',pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"userRole");
        },
        error:function(){
        	jQuery("#userRole_tbody").html("");
        	showMessageTxt("异常操作，请查看系统日志！","roles_msg","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        	jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
    }); 
}
/**
 * 显示权限
 * @param id
 */
function showFunc(id,name){
	$("#tab_2").show();
	$("#tab_1").hide();
	$("#tab1").removeClass("hover");
	$("#tab2").addClass("hover");
	jQuery("#tab1").unbind("click").bind("click",function(){btnFunc("tab1");getAppList(id);});
	jQuery("#tab2").unbind("click").bind("click",function(){btnFunc("tab2");getFuncList(id);});
	//首次弹出页面，默认是tab2
	jQuery("#submit").removeAttr("onclick");
	jQuery("#submit").unbind("click").bind("click",function(){submitFunc("tab2")});
	jQuery("#selectAll").unbind("click").bind("click",function(){selAll("tab2")});
	jQuery("#deSelectAll").unbind("click").bind("click",function(){deSelAll("tab2")});
	$(".roleName_").text(name);
	getFuncList(id);
}
/**
 * 显示权限
 * @param id
 */
function showFuncByUid(id){
	$("#tab_2").show();
	$("#tab_1").hide();
	$("#tab1").removeClass("hover");
	$("#tab2").addClass("hover");
	jQuery("#tab1").unbind("click").bind("click",function(){btnFunc("tab1");getAppList(id);});
	jQuery("#tab2").unbind("click").bind("click",function(){btnFunc("tab2");getFuncList(id);});
	//首次弹出页面，默认是tab2
	jQuery("#submit").removeAttr("onclick");
	jQuery("#submit").unbind("click").bind("click",function(){submitFunc("tab2")});
	jQuery("#selectAll").unbind("click").bind("click",function(){selAll("tab2")});
	jQuery("#deSelectAll").unbind("click").bind("click",function(){deSelAll("tab2")});
	getFuncListByUid(id);
}
/**
 * 绑定btn不同的事件
 * @param tab
 */
function btnFunc(tab){
	jQuery("#submit").unbind("click").bind("click",function(){submitFunc(tab)});
	jQuery("#selectAll").unbind("click").bind("click",function(){selAll(tab)});
	jQuery("#deSelectAll").unbind("click").bind("click",function(){deSelAll(tab)});
}
/**
 * 获取权限列表根据角色id
 * @param id
 */
function getFuncList(id){
	jQuery("#func").html("");
	jQuery("#func").append("<div id='tree'></div>");
	//获取权限
	getTree(basePath+"funcConfig/getFuncs.controller?roleid="+id,"zTreeCheck");
	$("#par").html("");
	$("#par").append("<input type='hidden' name='roleid' value='"+id+"'/>");
} 
/**
 * 获取权限列表根据用户id
 * @param id
 */
function getFuncListByUid(id){
	jQuery("#sjqx_shu").html("");
	jQuery("#sjqx_shu").append("<div id='tree'></div>");
	//获取权限
	getTree(basePath+"funcConfig/getFuncsByUid.controller?userid="+id,"zTreeCheck");
	$("#par").html("");
	$("#par").append("<input type='hidden' name='roleid' value='"+id+"'/>");
} 
/**
 *ztree插件的回调函数
 */
function sel() {}
function zTreeOnCheck() {}
//菜单树的点击事件请求权限资源数据
function showFuncById(fId,fpId){
	var dAuth = $("#" + fId + "_da").val();
	var daid = $("#" + fId + "_id").val();
	jQuery.ajax({
		type:"get",
    	cache:"false",
        url:basePath+"dataAuthConfig/queryDataAuthByFId.controller?s="+Math.random(),
        dataType:"json",
        data:{"funcid":fId,"dataauth":dAuth,"id":daid},
        success:function(result){
        	//当用户点击菜单树中某个节点时候，在页面中加入一个隐藏域放置该对象的fid
        	jQuery("#dAuthfid_").html("<input type='hidden' name='funcid' value='"+fId+"'></input>");
        	
        	jQuery("#dAuthid_").html("<input type='hidden' name='id' id='id_' value='"+(result == null?"":result.bmsDataAuth.id)+"'></input>");
        	if(result == null || result == "" || result.bmsDataAuth.dataauth == null || result.bmsDataAuth.dataauth == ""){
        		var dataauths = 					"<tr>                                                                                           "+
				"	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" /></td>"+
				"	<td>                                                                                        "+
				"	<div class=\"minus_div\" onclick=\"deltr(this)\" ></div>                                    "+
				"    </td>                                                                                      "+
				"</tr>                                                                                          "+
					"<tr>                                                                                           "+
				"	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" /></td>"+
				"	<td>                                                                                        "+
				"	<div class=\"minus_div\" onclick=\"deltr(this)\" ></div>                                    "+
				"    </td>                                                                                      "+
				"</tr>                                                                                          "+
				"<tr>                                                                                    "+
				"	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" /></td> "+
				"	<td>                                                                                 "+
				"	<span onclick=\"addtr(this)\">                                                         "+
				"	<div class=\"plus1\">                                                                  "+
				"    <div class=\"plus1_div\"></div>                                                       "+
				"  	</div>                                                                               "+
				"	<div class=\"plus2\">                                                                  "+
				"    <div class=\"plus2_div\"></div>                                                       "+
				"  	</div>                                                                               "+
				"  	</span>                                                                              "+
				"    </td>                                                                               "+
				"</tr>                                                                                   "+
				"<tr>                                                                                        "+
				"<td colspan=\"2\" align=\"center\">                                                             "+
				"<span onclick=\"save_dataAuth()\" style=\"padding: 5px 38px;background: rgba(102, 255, 255, 1);color: #333;\">保存</span> "+
				"<span onclick=\"click_reset()\" style=\"padding: 5px 38px;background: #ddd;margin-left: 10px;\">重置</span></td>        "+
				"</tr>"
			jQuery("#dAuthInFo_table").html(dataauths);
        	} else {
        		var bmsDataAuth = "";
        		bmsDataAuth = result.bmsDataAuth;
        		//展示数据授权数据
        		showRscFunc(bmsDataAuth);
        	}
        },
        error:function(){
        	showMsg("操作失败！");
        }
    }); 
}
/**
 * 删除当前行
 * @param that
 */
function deltr(that){
	/*$(that).parent().parent().parent().remove();*/
	$(that).parent().parent().remove();
}
/**
 * 向下新增行
 * @param that
 */
function addtr(that){
	var tr = "<tr>                                                                                    "+
	"	<td><input type=\"text\" class=\"da_input\" name=\"dataAuthBean.dataauth\" value=\"\"/></td> "+
	"	<td>                                                                                 "+
	"	<span onclick=\"addtr(this)\">                                                         "+
	"	<div class=\"plus1\">                                                                  "+
	"    <div class=\"plus1_div\"></div>                                                       "+
	"  	</div>                                                                               "+
	"	<div class=\"plus2\">                                                                  "+
	"    <div class=\"plus2_div\"></div>                                                       "+
	"  	</div>                                                                               "+
	"  	</span>                                                                              "+
	"    </td>                                                                               "+
	"</tr>                                                                                   "
	$(that).parent().parent().after(tr);
	$(that).parent().html("<div class=\"minus_div\" onclick=\"deltr(this)\"></div>");
}
/**
 * 展示权限详细信息
 * @param bmsDataAuth
 * @param resources
 */
function showRscFunc(bmsDataAuth,resources){
	jQuery("#dAuthid_").html("<input type='hidden' name='id' id='id_' value='"+bmsDataAuth.id+"'></input>");
	//遍历功能权限的json数据，在页面展示
	for (var k in bmsDataAuth){
		var el = jQuery('#showDataAuth [id='+k+'_]');
		if (el){
			if(k=='id'){
				el.val(bmsDataAuth[k]);
			}else{
				if(k=='dataauth'){
					var arr= new Array();
					var dataauths = "";
					if(bmsDataAuth[k] == null || bmsDataAuth[k] == ""){
						
					} else {
					arr=bmsDataAuth[k].split(',');
					var top_inp = 71;
					var top_m = 84 ;
					for (i=0;i<arr.length ;i++ ) {
						var dataauth = "";
						if(i == (arr.length -1)){
							dataauth = "<tr>                                                                                    "+
							"	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" value=\""+ arr[i] +"\"/></td> "+
							"	<td>                                                                                 "+
							"	<span onclick=\"addtr(this)\">                                                         "+
							"	<div class=\"plus1\">                                                                  "+
							"    <div class=\"plus1_div\"></div>                                                       "+
							"  	</div>                                                                               "+
							"	<div class=\"plus2\">                                                                  "+
							"    <div class=\"plus2_div\"></div>                                                       "+
							"  	</div>                                                                               "+
							"  	</span>                                                                              "+
							"    </td>                                                                               "+
							"</tr>                                                                                   "
						} else {
							dataauth = "<tr>                                                                                           "+
							"	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" value=\""+ arr[i] +"\"/></td>"+
							"	<td>                                                                                        "+
							"	<div class=\"minus_div\" onclick=\"deltr(this)\" ></div>                                    "+
							"    </td>                                                                                      "+
							"</tr>                                                                                          "
						}
						top_inp += 34;
						top_m += 34;
						/*var dataauth = "<div class=\"sjqx_apd ax_default text_field\">" +
						"<input type=\"text\" class=\"sjqx_apd_inp\" name=\"dataauths\" value=\""+ arr[i] +"\"/>"+"</div>"*/
						dataauths += dataauth;
					}
						}
					dataauths = dataauths + 
					"<tr>                                                                                        "+
					"<td colspan=\"2\" align=\"center\">                                                             "+
					"<span onclick=\"save_dataAuth()\" style=\"padding: 5px 38px;background: rgba(102, 255, 255, 1);color: #333;\">保存</span> "+
					"<span onclick=\"click_reset()\" style=\"padding: 5px 38px;background: #ddd;margin-left: 10px;\">重置</span></td>        "+
					"</tr>                                                                                       "
					
//					jQuery("#showDataAuth").html(dataauths);
					jQuery("#dAuthInFo_table").html(dataauths);
				}
				el.val(bmsDataAuth[k]==null?"无":bmsDataAuth[k]);
				jQuery("#sjqx").trigger("create"); 
			}
		}
	}
	//权限资源数据
	if(!jQuery.isEmptyObject(resources)){
		//不是菜单
		jQuery("#show_resources").removeClass("undis");
		jQuery("#menus_").html("否");
		tableUtil(resources,"resourcesdata");
	}else{
		//是菜单
		jQuery("#show_resources").addClass("undis");
		jQuery("#menus_").html("是");
	}
	
}
/**
 *批量追加数据权限信息
 */
function batch_apd_dataAuth(){
	var subdata = jQuery("#saveDataAuthForm").serializeArray();
	jQuery.ajax({
		type:"post",
		url:basePath+"dataAuthConfig/batchSetDataAuth.controller?t="+Math.random(),
		dataType:"json",
		data:subdata,
		success:function(result){
				if($("#rep"+ result.fid +"").val() == "rep"){
					$("#" + result.fid + "").html(result.apphtmltd);
				} else {
					$("#appendDataAuthForm [id='par']").append(result.apphtmltr);
				}
		}
	});
}
/**
 * 保存数据权限信息
 */
function save_dataAuth(){
	var subdata = jQuery("#saveDataAuthForm").serializeArray();
	jQuery.ajax({
		type:"post",
		url:basePath+"dataAuthConfig/setDataAuthForUser.controller?t="+Math.random(),
		dataType:"json",
		data:subdata,
		success:function(result){
			showMessageTxt(result.message,"message","bccg");
		}
	});
}
/**
 * 弹窗关闭时清除数据
 */
function re_dataAuth(){
	var table = "<span style=\"visibility:hidden;width:30%;float:left ;text-align: right;margin-top: 10px\">查询条件：</span>"+
	"<table id=\"dAuthInFo_table\"></table>";
	jQuery("#dAuthInFo_").html(table);
	jQuery("#appendDataAuthForm").html("<p id=\"par\"/>");
}
/**
 * 获取小应用列表
 * @param id
 */
function getAppList(id){
	jQuery("#appList").html("");
	jQuery.ajax({
		type:"get",
    	cache:"false",
        url:basePath + "funcConfig/getApps.controller?roleid="+id+"&t="+Math.random(),
        dataType:"json",
        success:function(result){
        	var pageModelList = eval(result.appList);
        	if(pageModelList!=null){
        		for(var i = 0; i<pageModelList.length;i++){
        			if(pageModelList[i].checked){
        				jQuery("#appList").append("<li class='middle'><input type='checkbox' name='appName' checked='checked' value='"+pageModelList[i].id+"'/><span>"+pageModelList[i].appName+"</span></li>");
        			}else{
        				jQuery("#appList").append("<li class='middle'><input type='checkbox' name='appName' value='"+pageModelList[i].id+"'/><span>"+pageModelList[i].appName+"</span></li>");
        			}
        				
        		}
        	}
        },
        error:function(){
        	showMessageTxt("异常操作，请联系管理员！","roles_msg","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        	jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
        }
    });
	$("#parApp").html("");
	$("#parApp").append("<input type='hidden' name='id' value='"+id+"'/>");
}
/**
 * 提交授权
 * @returns {Boolean}
 */
function submitFunc(tab){
	hide("cover","qxpz");
	if(tab == "tab1"){
		var appids = getChecks("appName").join(",");
		if(appids == null || appids == ""){
			showMessageTxt("请至少选择一项！","roles_msg","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
        	jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
        	return false;
		}else{
			var formdata = jQuery("#formApp").serializeArray();
			jQuery.ajax({
				type:"post",
				url:basePath+"funcConfig/grantApp.controller?t="+Math.random(),
				dataType:"json",
				data:formdata,
				success:function(result){
					showMessageTxt(result.message,"roles_msg","deleteCg");
					if(result.messageCode.indexOf("S")==0){
						//var link = "saveToList(\'deleteCg\')";
						jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){saveToList('deleteCg')});
						jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){saveToList('deleteCg')});
					}else{
						jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
			        	jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
					}
				},
				error:function(){
					showMessageTxt("没有授权权限！","roles_msg","deleteCg");
					jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
		        	jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
				}
			});
		}
	}
	if(tab=="tab2"){
		var nodes;
		var treeObj = $.fn.zTree.getZTreeObj("tree");
		nodes = treeObj.getCheckedNodes();
		/*if(treetype == "zTreeCheck"){
			var treeObj = $.fn.zTree.getZTreeObj("tree");
			nodes = treeObj.getCheckedNodes();
		}
		if(treetype == "easyUiTree"){
			nodes = $("#tree").tree('getChecked');
		}*/
		
		var bool=false;
		if(nodes.length>0){
			bool=true;
		}
		if(bool){
			for(var i=1;i<nodes.length;i++){
				$("#par").append("<input type='hidden' name='treeChk' value='"+nodes[i].value+"'/>");
			}
			var subdata = jQuery("#form1").serializeArray();
			jQuery.ajax({
				type:"post",
				url:basePath+"funcConfig/grantFunc.controller?t="+Math.random(),
				dataType:"json",
				data:subdata,
				success:function(result){
					showMessageTxt(result.message,"roles_msg","deleteCg");
					if(result.messageCode.indexOf("S")==0){
						//var link = "saveToList(\'deleteCg\')";
						jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){saveToList('deleteCg')});
						jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){saveToList('deleteCg')});
					}else{
						jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
			        	jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
					}
				},
				error:function(){
					showMessageTxt("没有授权权限！","roles_msg","deleteCg");
					jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
		        	jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg')});
				}
			});
		}else{
			showMessageTxt("请选择至少一项！","roles_msg","deleteCg");
			jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
			jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
			return false;
		}
	}
}
/**
 * 添加用户（用户列表--非本角色下的用户）
 * @param roleid
 */
function addUser(isFirst){
	btn_click_reset('roleuserForm');
	$("input[id='users']").attr("checked",false);
	jQuery("#addUserForm [id='reset']").unbind("click").bind("click",function(){btn_click_reset('addUserForm')});
	jQuery("#addUserForm [id='search']").unbind("click").bind("click",function(){findUser('addUserForm','search')});
	jQuery("#grantFunc").removeAttr("onclick");
	jQuery("#grantFunc").unbind("click").bind("click",function(){addUserForRole()});
	jQuery("#addusers").unbind("click").bind("click",function(){isSelAll('addusers')});
	jQuery("#addUserForm_r [id='first']").bind("click",function(){findUser('addUserForm','first')});
	jQuery("#addUserForm_r [id='before']").bind("click",function(){findUser('addUserForm','before')});
	jQuery("#addUserForm_r [id='next']").bind("click",function(){findUser('addUserForm','next')});
	jQuery("#addUserForm_r [id='end']").bind("click",function(){findUser('addUserForm','end')});
	jQuery("#addUserForm_r [id='go']").bind("click",function(){findUser('addUserForm','go')});
	jQuery("#addUser").html("");
	var rid = jQuery("#roleid").val();
	jQuery("#addUser").append("<input type='hidden' name='roleid' id='rid' value='"+rid+"'/>");	
	if(isFirst){
		jQuery("#addUserForm [id='pageNum']").val(1);
		jQuery("#addUserForm [id='firstEnter']").val(true);
		isFirst = false;
	}else{
		setPageMessage("addUserForm");
	}
	var subdata = jQuery("#addUserForm").serializeArray();
	document.getElementById("load_id").src=basePath + "mvcbms/pub/css/images/loading.gif";
	jQuery.ajax({
		type:"post",
		url:basePath+"userConfig/listNotCheckedUsers.controller?t="+Math.random(),
		dataType:"json",
		data:subdata,
		success:function(result){
			//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage('addUserForm',pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"useradd");
        	popTable('addJsUser');
        	document.getElementById("useradd_tbody").style.visibility="";
	    	document.getElementById("load_id").style.visibility="hidden";
		}
	});
}
/**
 * 添加本角色对应的用户
 * @param roleid
 */
function addUserForRole(){
	hide("cover","addJsUser");
	var chkids = getChecks("addusers").join(",");
	if(chkids == "")
	{
		jQuery("#pop_deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','pop_deleteCg');showTB('cover','addJsUser')});
		jQuery("#pop_deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','pop_deleteCg');showTB('cover','addJsUser')});
		showMessageTxt("请选择一条或多条记录!","users_msg","pop_deleteCg");
		return false;
	}
	var rid = jQuery("#roleid").val();
	jQuery.ajax({
		type:"post",
		url:basePath+"userConfig/addUsersForRole.controller?t="+Math.random()+"&ids="+chkids+"&roleid="+rid,
		dataType:"json",
		success:function(result){
			if(result.messageCode.indexOf("S")==0){
				//hide('cover','addJsUser');
				//var link = "saveToList(\'pop_deleteCg\')"
    			jQuery("#pop_deleteCg [id='qd']").unbind("click").bind("click",function(){saveToList('pop_deleteCg')});
    			jQuery("#pop_deleteCg [id='close']").unbind("click").bind("click",function(){saveToList('pop_deleteCg')});
			}
			showMessageTxt(result.message,"users_msg","pop_deleteCg");
		}
	});
}
/**
 * 授权成功后，'确定'事件
 */
function saveToList(divid){
	hide("cover",divid);
	if(divid == "pop_deleteCg"){
		var isChecked = jQuery("#addusers").attr("checked");
		if(isChecked){
			jQuery("#addusers").attr("checked",false);
		}
		addUser(true);
		showTB("cover","addJsUser");
	}
	if(divid == "deleteCg"){
		hide("cover","qxpz");
		initData();
	}
}
//选择全部	
function selAll(tab)
{
	if(tab=="tab1"){
		jQuery("input[name='appName']").attr("checked",true);
	}
	if(tab=="tab2"){
		var treeObj = $.fn.zTree.getZTreeObj("tree");
	 	treeObj.checkAllNodes(true);
		/*if(treetype == "zTreeCheck"){
		 	var treeObj = $.fn.zTree.getZTreeObj("tree");
	     	treeObj.checkAllNodes(true);
		}
		if(treetype == "easyUiTree"){
			var node = $("#tree").tree('find',1);
			$("#tree").tree('check', node.target);
		}*/
	}
}
//全取消
function deSelAll(tab)
{
	if(tab=="tab1"){
	    jQuery("input[name='appName']").attr("checked",false);
	}
	if(tab=="tab2"){
		var treeObj = $.fn.zTree.getZTreeObj("tree");
	    treeObj.checkAllNodes(false);
		/*if(treetype == "zTreeCheck"){
			  var treeObj = $.fn.zTree.getZTreeObj("tree");
		      treeObj.checkAllNodes(false);
			}
		if(treetype == "easyUiTree"){
			var node = $("#tree").tree('find',1);
			$("#tree").tree('uncheck', node.target);
		}*/
	}
}

/**
 * 全选/取消全选
 */
function isSelAll(itemname){
	var isChecked = $("input[id='"+itemname+"']")[0].checked;
	var ipt = $("input[name='"+itemname+"']");
	for(var i = 0; i<ipt.length;i++){
		if(isChecked){
			ipt[i].checked=true;
		}else{
			ipt[i].checked=false; 
		}
	}
}
/**
 * 查看角色
 * @param rid
 */
function show_role(rid){
	window.location.href=basePath+"role/show.controller?id="+rid;
}
/**
 * 编辑角色
 * @param rid
 */
function edit_role(rid){
	window.location.href=basePath+"role/edit.controller?id="+rid;
}
function sub_batch_(){
		var nodes;
		var treeObj = $.fn.zTree.getZTreeObj("tree");
		nodes = treeObj.getCheckedNodes();
		var bool=false;
		if(nodes.length>0){
			bool=true;
		}
		if(bool){
			for(var i=0;i<nodes.length;i++){
				$("#appendDataAuthForm [id='par']").append("<input type='hidden' name='treeChk' value='"+nodes[i].value+"'/>");
			}
			var subdata = jQuery("#appendDataAuthForm").serializeArray();
			jQuery.ajax({
				type:"post",
				url:basePath+"dataAuthConfig/grantDataAuth.controller?t="+Math.random(),
				dataType:"json",
				data:subdata,
				success:function(result){
					showMessageTxt(result.message,"message","bccg");
					/*showMessageTxt(result.message,"roles_msg","deleteCg");
					if(result.messageCode.indexOf("S")==0){
						//var link = "saveToList(\'deleteCg\')";
						jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){saveToList('deleteCg')});
						jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){saveToList('deleteCg')});
					}else{
						jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
			        	jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
					}*/
				},
				error:function(){
					showMsg("操作失败！");
				}
			});
		}else{
			showMessageTxt("请选择至少一项！","message","bccg");
			/*showMessageTxt("请选择至少一项！","roles_msg","deleteCg");
			jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
			jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){hide('cover','deleteCg');showTB('cover','qxpz');});
			return false;*/
		}
} 