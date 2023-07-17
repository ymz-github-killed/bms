document.write("<link rel='stylesheet' type='text/css' href='"+basePath+"mvcbms/pub/js/ztree/zTreeStyle/zTreeStyle.css'/>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.core-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.excheck-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/navtree.js' type='text/javascript'></script>");
jQuery(function(){
	$("#search [id='btnsearch']").bind("click",function(){find('search','search');});
	$("#search [id='reset']").bind("click",function(){btn_click_reset('search');});
	$("#search_r [id='first']").bind("click",function(){find('search','first');});
	$("#search_r [id='before']").bind("click",function(){find('search','before');});
	$("#search_r [id='next']").bind("click",function(){find('search','next');});
	$("#search_r [id='end']").bind("click",function(){find('search','end');});
	$("#search_r [id='go']").bind("click",function(){find('search','go');});
	
	
	$("#locationForm [id='btnsearch']").bind("click",function(){findLocations('locationForm','search');});
	$("#locationForm [id='reset']").bind("click",function(){btn_click_reset('locationForm');});
	$("#locationitem").bind("click",function(){isSelAll('locationitem');});
	$("#locationForm_r [id='first']").bind("click",function(){findLocations('locationForm','first');});
	$("#locationForm_r [id='before']").bind("click",function(){findLocations('locationForm','before');});
	$("#locationForm_r [id='next']").bind("click",function(){findLocations('locationForm','next');});
	$("#locationForm_r [id='end']").bind("click",function(){findLocations('locationForm','end');});
	$("#locationForm_r [id='go']").bind("click",function(){findLocations('locationForm','go');});
	$("#lgrantFunc").removeAttr("onclick");
	$("#lgrantFunc").unbind("click").bind("click",function(){setLocationsForUser();});
	$("#lback").removeAttr("onclick");
	$("#lback").unbind("click").bind("click",function(){btn_click_back('locationForm','locationitem');hide('cover','glbmsz');});
	//$("#bmszClose").removeAttr("onclick");
	//$("#bmszClose").unbind("click").bind("click",function(){btn_click_back('locationForm','locationitem');hide('cover','glbmsz');});
	
	$("#roleForm [id='btnsearch']").bind("click",function(){findRoles('roleForm','search');});
	$("#roleForm [id='reset']").bind("click",function(){btn_click_reset('roleForm');});
	$("#roleitem").bind("click",function(){isSelAll('roleitem');});
	$("#roleForm_r [id='first']").bind("click",function(){findRoles('roleForm','first');});
	$("#roleForm_r [id='before']").bind("click",function(){findRoles('roleForm','before');});
	$("#roleForm_r [id='next']").bind("click",function(){findRoles('roleForm','next');});
	$("#roleForm_r [id='end']").bind("click",function(){findRoles('roleForm','end');});
	$("#roleForm_r [id='go']").bind("click",function(){findRoles('roleForm','go');});
	$("#rgrantFunc").removeAttr("onclick");
	$("#rgrantFunc").unbind("click").bind("click",function(){setRolesForUser();});
	$("#rback").removeAttr("onclick");
	$("#rback").unbind("click").bind("click",function(){btn_click_back('roleForm','roleitem');hide('cover','jssz');});	
	//$("#jsszClose").removeAttr("onclick");
	//$("#jsszClose").unbind("click").bind("click",function(){btn_click_back('roleForm','roleitem');hide('cover','jssz');});
	
	$("#userRoleForm_r [id='first']").bind("click",function(){findUserRoles('userRoleForm','first');});
	$("#userRoleForm_r [id='before']").bind("click",function(){findUserRoles('userRoleForm','before');});
	$("#userRoleForm_r [id='next']").bind("click",function(){findUserRoles('userRoleForm','next');});
	$("#userRoleForm_r [id='end']").bind("click",function(){findUserRoles('userRoleForm','end');});
	$("#userRoleForm_r [id='go']").bind("click",function(){findUserRoles('userRoleForm','go');});
	
	$("#location_position").toggle(
		  function () {
		    $("#location_position_show").show();
		  },
		  function () {
		    $("#location_position_show").hide();
		  }
	);
	
	$("#role_position").toggle(
		  function () {
		    $("#role_position_show").show();
		  },
		  function () {
		    $("#role_position_show").hide();
		  }
	);
	
	userFuncManage();
});
function userFuncManage(){
	document.getElementById("load_id").src=basePath + "mvcbms/pub/css/images/loading.gif";
	setPageMessage("search");
	var searchData = jQuery("#search").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({  
    	cache:"false",
        url:basePath+"userQuery/queryUsersFunc.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
    	success:function(result){
	    	//获取分页信息
	    	pageMessage = result.pageDTO.pageBean;
	    	//分页信息展示
	    	pagingMessage("search",pageMessage);
	    	//数据展示
	    	tableUtil(eval(result.list),"userFunc");
//	    	$("#userFunc_tbody").style.visibility="visible";
	    	document.getElementById("userFunc_tbody").style.visibility="visible";
	    	document.getElementById("load_id").style.visibility="hidden";
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
        	jQuery("#qd").unbind("click").bind("click",function(){hide('cover','bccg');});
        }
    }); 
	//用户性别下拉框内容
	var userSexOption = jsonData.userSexSelectList;
	initOptionContent(userSexOption,"search","userSex");
	//用户状态下拉框内容
	var userStatusOption = jsonData.userStatusSelectList;
	initOptionContent(userStatusOption,"search","userStatus");
}
/**
 * 
 * @param tab 可选参数：first,end,before,next,changerowdispalyed
 * @param countPageNum 每页显示条数，可选参数；
 */
function find(formId,tab,countPageNum){
	var goPage = jQuery("#gotoUsers").val();
	jQuery("#gotoUsers").val("");
	var url = basePath+"userQuery/queryUsersFunc.controller";	
	search(url,tab,"userFunc",formId,countPageNum,goPage);
}
/**
 * 查询部门
 * @param formId
 * @param tab
 * @param countPageNum
 */
function findLocations(formId,tab,countPageNum){
	
	var checked = $("input[id='locationitem']").attr("checked"); 
	if(checked){
		$("input[id='locationitem']").attr("checked",false); 
	}
	var goPage = jQuery("#gotoLocations").val();
	jQuery("#gotoLocations").val("");
	var url = basePath+"locationConfig/getCanVisitLocations.controller";	
	search(url,tab,"locations",formId,countPageNum,goPage);
}
/**
 * 查询所有角色
 * @param formId
 * @param tab
 * @param countPageNum
 */
function findRoles(formId,tab,countPageNum){
	var checked = $("input[id='roleitem']").attr("checked"); 
	if(checked){
		$("input[id='roleitem']").attr("checked",false); 
	}
	var goPage = jQuery("#gotoRoles").val();
	jQuery("#gotoRoles").val("");
	var url = basePath+"roleConfig/getAllRoles.controller";	
	search(url,tab,"roles",formId,countPageNum,goPage);
}
/**
 * 查询用户拥有的角色
 * @param formId
 * @param tab
 * @param countPageNum
 */
function findUserRoles(formId,tab,countPageNum){
	var goPage = jQuery("#gotoUserRoles").val();
	jQuery("#gotoUserRoles").val("");
	var url = basePath+"userRoleShow/showRoleInfo.controller";	
	search(url,tab,"userRole",formId,countPageNum,goPage);
}
/**
 * 查看用户权限
 * @param rid
 */
function show_userFunc(uid){
	window.location.href=basePath+"user/showUserFunc.controller?userid="+uid;
}
/**
 * 设置表单数据
 * @param uid
 * @param formid
 */
function setFormData(uid,formid){
	jQuery("#"+formid+" [id='id_position']").html("");
	jQuery("#"+formid+" [id='id_position']").append("<input type='hidden' name='userid' id='userid' value='"+uid+"'/>");
	jQuery("#"+formid+" [id='id_position']").append("<input type='hidden' id='chks' name='chks' value=''/>");
	jQuery("#"+formid+" [id='id_position']").append("<input type='hidden' id='notChks' name='notChks' value=''/>");
}
/**
 * 管理部门设置
 * @param uid
 */
function location_config(uid,flag){
	
	getFuncList(uid);
}

/*function sel(){}*/
/**
 *ztree插件的回调函数
 */
function sel(e,treeId,treeNode) {
	if(treeNode.nocheck){
		return ;
	} else {
		var zTree = $.fn.zTree.getZTreeObj("sjqx_tree");
		zTree.expandNode(treeNode);
		jQuery("#dAuthfid_").html("<input type='hidden' name='funcid' value='"+treeNode.id+"'/>");
		showFuncById(treeNode.id,treeNode.pId);
	}
}
function getFuncList(id){
	jQuery("#func").html("");
	jQuery("#func").append("<div id='tree'></div>");
	//获取权限
//	console.log(id);
	getTree(basePath+"locationConfig/asyncGetLocationsData.controller?userid="+id,"treeAsyncCheckBox");
	$("#par").html("");
	$("#par").append("<input type='hidden' name='userid' id='userid' value='"+id+"'/>");
}
/**
 * 角色设置
 * @param uid
 */
function role_config(uid,flag){
	setFormData(uid,"roleForm");
	setPageMessage("roleForm");
	if(flag == "true"){
		jQuery("#roleForm [id='pageNum']").val("1");
		jQuery("#roleForm [id='rowDisplayed']").val("10");
		jQuery("#roleForm [id='firstEnter']").val("true");
	}
	var searchData = jQuery("#roleForm").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({  
    	cache:"false",
        url:basePath+"roleConfig/getAllRoles.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
    	success:function(result){
	    	//获取分页信息
	    	pageMessage = result.pageDTO.pageBean;
	    	//分页信息展示
	    	pagingMessage("roleForm",pageMessage);
	    	//数据展示
	    	tableUtil(eval(result.list),"roles");
	    	jQuery("#role_position").html("当前角色：&nbsp;");
	    	var roles = eval(result.roleNameList);
	    	jQuery("#role_position").append("");
	    	var strRole = "";
	    	for(var k in roles){
	    		strRole+=(roles[k]+"、");
	    	}
	    	strRole = strRole.substring(0, strRole.length-1);
	    	jQuery("#role_position").append(strRole);
	    	jQuery("#role_position").attr("title",strRole);
	    	jQuery("#role_position_show").html(strRole);
	    	popTable('jssz');
    	},
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
        	jQuery("#qd").unbind("click").bind("click",function(){hide('cover','bccg');});
        }
    }); 
}
/**
 * 查看角色信息
 * @param uid
 */
function show_roleInfo(uid){
	jQuery("#userRoleForm [id='id_position']").html("");
	jQuery("#userRoleForm [id='id_position']").append("<input type='hidden' name='userid' value='"+uid+"'/>");
	setPageMessage("userRoleForm");
	var searchData = jQuery("#userRoleForm").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({  
    	cache:"false",
        url:basePath+"userRoleShow/showRoleInfo.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
    	success:function(result){
	    	//获取分页信息
	    	pageMessage = result.pageDTO.pageBean;
	    	//分页信息展示
	    	pagingMessage("userRoleForm",pageMessage);
	    	//数据展示
	    	tableUtil(eval(result.list),"userRole");
    	},
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
        	jQuery("#qd").unbind("click").bind("click",function(){hide('cover','bccg');});
        }
    });
}
/**
 * 获取checkbox选项
 * @param name
 * @param ischeck
 * @returns {Array}
 */
function getChecks(name,ischeck)
{
	var re = new Array();
	var ck = jQuery("[name='"+name+"']");
	for(var i=0; i<ck.length; i++)
	{
		if(ck[i].checked == ischeck)
		{
			re.push(ck[i].value);
		}
	}
	return re;
}
/**
 * 授予用户角色
 */
function setRolesForUser(){
	hide("cover","jssz");
	var chks = getChecks("roleitem",true);
	var notChks = getChecks("roleitem",false);
	jQuery("#roleForm [id='chks']").val(chks);
	jQuery("#roleForm [id='notChks']").val(notChks);
	var searchData = jQuery("#roleForm").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({  
    	cache:"false",
        url:basePath+"roleConfig/setRolesForUser.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
    	success:function(result){
    		showMessageTxt(result.message,"message","bccg");
	    	if(result.messageCode.indexOf("S")== 0){
	    		var uid = jQuery("#userid").val();
	    		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");showTB("cover","jssz");refresh('role',uid);});
	    		jQuery("#close").unbind("click").bind("click",function(){hide("cover","bccg");showTB("cover","jssz");refresh('role',uid);});
	    	}
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
        	jQuery("#qd").unbind("click").bind("click",function(){hide('cover','bccg');});
        }
    }); 
}
/**
 * 刷新数据
 * @param which
 * @param uid
 */
function refresh(which,uid){
	if(which == 'role'){
		role_config(uid);
	}
	if(which == 'location'){
		location_config(uid);
	}
}
/**
 * 授予用户管理部门权限
 */
function setLocationsForUser()
{
	hide("cover","glbmsz");
	
	var nodes;
	var treeObj = $.fn.zTree.getZTreeObj("tree");
	nodes = treeObj.getCheckedNodes();
//	var bool=false;
//	if(nodes.length>0){
//		bool=true;
//	}
//	if(bool){
	
		for(var i=0;i<nodes.length;i++){
			$("#par").append("<input type='hidden' name='treeChk' value='"+nodes[i].id+"'/>");
		}
		var subdata = jQuery("#form1").serializeArray();
		jQuery.ajax({
			type:"post",
			url:basePath+"locationConfig/saveLocations.controller?t="+Math.random(),
			dataType:"json",
			data:subdata,
			success:function(result){
				showMessageTxt(result.message,"message","bccg");
//				console.log(jQuery("#userid").val());
				if(result.messageCode.indexOf("S")==0){
					var uid = jQuery("#userid").val();
					jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");showTB("cover","glbmsz");refresh("location",uid);});
		    		jQuery("#close").unbind("click").bind("click",function(){hide("cover","bccg");showTB("cover","glbmsz");refresh("location",uid);});
				}
			},
			error:function(){
				showMessageTxt("没有授权权限！","message","bccg");
				jQuery("#qd").unbind("click").bind("click",function(){hide('cover','bccg')});
	        	jQuery("#close").unbind("click").bind("click",function(){hide('cover','bccg')});
			}
		});
//	}else{
//		/*showMessageTxt("请选择至少一项！","message","bccg");
//		jQuery("#qd").unbind("click").bind("click",function(){hide('cover','bccg');showTB('cover','glbmsz');});
//		jQuery("#close").unbind("click").bind("click",function(){hide('cover','bccg');showTB('cover','glbmsz');});
//		return false;*/
//	}
	
//	var chks = getChecks("locationitem",true);
//	var notChks = getChecks("locationitem",false);
//	jQuery("#locationForm [id='chks']").val(chks);
//	jQuery("#locationForm [id='notChks']").val(notChks);
//	var searchData = jQuery("#locationForm").serializeArray();
//	searchData = eval(searchData);
//	jQuery.ajax({  
//    	cache:"false",
//        url:basePath+"locationConfig/setLocationsForUser.controller?t="+Math.random(),
//        dataType:"json",
//        data:searchData,
//    	success:function(result){
//    		showMessageTxt(result.message,"message","bccg");
//	    	if(result.messageCode.indexOf("S")== 0){
//	    		var uid = jQuery("#userid").val();
//	    		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");showTB("cover","glbmsz");refresh("location",uid);});
//	    		jQuery("#close").unbind("click").bind("click",function(){hide("cover","bccg");showTB("cover","glbmsz");refresh("location",uid);});
//	    	}
//        },
//        error:function(){
//        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
//        	jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
//        }
//    }); 
}
/**
 * 重置
 * @param formid
 */
function btn_click_reset(formid){
	document.getElementById(formid).reset();
//	jQuery("#userSexSelected [class='fleft']").text("请选择");
//	jQuery("#userStatusSelected [class='fleft']").text("请选择");
	var sexdiv = jQuery("#"+formid+" [id='userSexSelected']");
	var statusdiv = jQuery("#"+formid+" [id='userStatusSelected']");
	sexdiv.find(".fleft").text("请选择");
	statusdiv.find(".fleft").text("请选择");
}
/**
 * 全选/取消全选
 */
function isSelAll(itemid){
	var isChecked = $("input[id="+itemid+"]").attr("checked");
	if(isChecked){
		$("input[name="+itemid+"]").prop("checked",true); 
		
	}else{
		$("input[name="+itemid+"]").prop("checked",false); 
	}
}

/**
 * 返回，将全选及表单置空
 * @param formid
 * @param itemid
 */
function btn_click_back(formid,itemid){
	btn_click_reset(formid);
	$("input[id="+itemid+"]").attr("checked",false); 
}