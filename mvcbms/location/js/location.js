document.write("<script src='"+basePath+"mvcbms/pub/js/strCheck.js' type='text/javascript'></script>");
document.write("<link rel='stylesheet' type='text/css' href='"+basePath+"mvcbms/pub/js/ztree/zTreeStyle/zTreeStyle.css'/>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.core-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.excheck-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/navtree.js' type='text/javascript'></script>");
jQuery(function(){
	jQuery("#locationTree").html("");
	jQuery("#locationTree").append("<div id='tree'></div>");
	getTree(basePath+"locationQuery/getTree.controller","treeAsync");	
	bindFunc();
	getOptionContent('search');
	getOptionContent('add');
});
/**
 * 绑定事件
 */
function bindFunc(){
	jQuery("#edit").removeAttr("onclick");
	jQuery("#edit").bind("click",function(){beforeEdit();newbm();});
	jQuery("#addChild").removeAttr("onclick");
	jQuery("#addChild").bind("click",function(){beforeAdd();newbm();});
	jQuery("#deletebm").removeAttr("onclick");
	jQuery("#deletebm").unbind("click").bind("click",function(){deleteLocation();});
	jQuery("#deleteAll").removeAttr("onclick");
	jQuery("#deleteAll").unbind("click").bind("click",function(){btn_click_delete();});
	jQuery("#addManager").bind("click",function(){addManageUser();});
	jQuery("#search [id='btnsearch']").bind("click",function(){find('search','search');});
	jQuery("#search [id='reset']").bind("click",function(){btn_click_reset('search');});
	jQuery("#search_r [id='first']").bind("click",function(){find('search','first');});
	jQuery("#search_r [id='before']").bind("click",function(){find('search','before');});
	jQuery("#search_r [id='next']").bind("click",function(){find('search','next');});
	jQuery("#search_r [id='end']").bind("click",function(){find('search','end');});
	jQuery("#search_r [id='go']").bind("click",function(){find('search','go');});
	jQuery("#bccg [id='qd']").removeAttr("onclick");
	jQuery("#bccg [id='qd']").unbind("click").bind("click",function(){hide('cover','bccg');});
	jQuery("#users").bind("click",function(){isSelAll("users");});
}
/**
 * 获取下拉框的内容
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
 *ztree插件的回调函数
 */
function sel(e,treeId, treeNode) {
	var zTree = $.fn.zTree.getZTreeObj("tree");
	zTree.expandNode(treeNode);
	showLocationInfo(treeNode.id);
}
/**
 * 显示部门详细信息
 */
function showLocationInfo(currenNodeId){
	jQuery.ajax({
		type:"get",
    	cache:"false",
        url:basePath+"locationQuery/showDetailInfoById.controller?t="+Math.random()+"&id="+currenNodeId,
        dataType:"json",
        success:function(result){
        	jQuery("#stepInfo").text("");
        	var detailInfo = result.detailBean;
        	jQuery("#stepInfo").append(detailInfo.stepInfo);
        	/*for (var k in detailInfo){
    			var el = jQuery('#' + k + '_');
    			if (el){
    				el.text(detailInfo[k]==null?"":detailInfo[k]);
    			}
    		}*/
        	jQuery("#deptName_").text(detailInfo.deptName);
        	jQuery("#applyid_").text(detailInfo.applyid==null?"":detailInfo.applyid);
        	jQuery("#remark_").text(detailInfo.remark==null?"":detailInfo.remark);
        	jQuery("#locationCode_").text(detailInfo.locationCode==null?"":detailInfo.locationCode);
        	jQuery("#principal_").text(detailInfo.principal==null?"":detailInfo.principal);
        	//jQuery("#position_r").html("");
        	//jQuery("#position_r").append("<input type='hidden' name='id' id='id_' value='"+detailInfo.id+"'/>");
        	jQuery("#id_position").html("");
        	jQuery("#id_position").append("<input type='hidden' name='id' id='id_' value='"+detailInfo.id+"'/>");
        	jQuery("#id_position").append("<input type='hidden' id='oldapplyid' value='"+detailInfo.applyid+"'/>");
        	jQuery("#id_position").append("<input type='hidden' id='oldlocationcode' value='"+detailInfo.locationCode+"'/>");
        	//jQuery("#id_position").append("<input type='hidden' id='type_'/>");
        	jQuery("#id_position").append("<input type='hidden' id='lname'/>");
        	jQuery("#id_position").append("<input type='hidden' id='lremark'/>");
        	jQuery("#id_position").append("<input type='hidden' id='lprincipal'/>");
        	jQuery("#id_position").append("<input type='hidden' id='lapplyid'/>");
        	if(true){
        		showUserList(detailInfo.id);
        		showInfo();
            	backbm();
            	btn_click_reset("saveOrUpdate","edit");
            	$(".bmTab1").show();
    			$(".bmTab2").hide();
        	}else{
        		jQuery("#canVisitButton").hide();
        		jQuery("#canVisitUserList").hide();
        	}
        	
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');});
        }
    }); 
}
/**
 * 可访问该部门的用户
 * @param locationid
 */
function getLocationUser(locationid){
	jQuery("#position").html("");
	jQuery("#position").append("<input type='hidden' name='id' id='locationId' value='"+locationid+"'/>")
	var searchData = jQuery("#search").serializeArray();
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"locationQuery/listUsersView.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage("search",pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"locationusers");
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');});
        }
    });
}
function showUserList(locationid){
	setPageMessage("search");
	getLocationUser(locationid);
}
/**
 * 查询可以管理该部门的用户（翻页，条件查询）
 * @param formId
 * @param tab
 * @param countPageNum
 */
function find(formId,tab,countPageNum){
	var checked = $("input[id='users']").attr("checked"); 
	if(checked){
		$("input[id='users']").attr("checked",false); 
	}
	//go第几页
	var goPage = jQuery("#gotoUsers").val();
	 jQuery("#gotoUsers").val("");
	var url = basePath+"locationQuery/listUsersView.controller";	
	search(url,tab,"locationusers",formId,countPageNum,goPage);
}
/**
 * 查询所有用户（翻页，条件查询）
 * @param formId
 * @param tab
 * @param countPageNum
 */
function findUser(formId,tab,countPageNum){
	var checked = $("input[id='adduseritem']").attr("checked"); 
	if(checked){
		$("input[id='adduseritem']").attr("checked",false); 
	}
	//go第几页
	var goPage = jQuery("#gotoAddUser").val();
	jQuery("#gotoAddUser").val("");
	var url = basePath+"locationQuery/addUserForLocation.controller";
	search(url,tab,"addusers",formId,countPageNum,goPage);
//	search(url,tab,"userRole",formId,countPageNum,goPage);
}
/**
 * 根据查询所有用户（翻页，条件查询）
 * @param formId
 * @param tab
 * @param countPageNum
 */
function findAllUser(formId,tab,countPageNum){
	var checked = $("input[id='ckUsers']").attr("checked"); 
	if(checked){
		$("input[id='ckUsers']").attr("checked",false); 
	}
	//go第几页
	var goPage = jQuery("#gotoUser").val();
	jQuery("#gotoUser").val("");
	var url = basePath+"locationQuery/addUserForLocation.controller";
	search(url,tab,"userRole",formId,countPageNum,goPage);
}
/**
 * 重置
 * @param formId
 */
function btn_click_reset(formId,type){
	if(formId == "saveOrUpdate" && type=="edit"){
		document.getElementById('saveOrUpdate').reset();
		jQuery("#deptName").val(jQuery("#lname").val());
		jQuery("#applyid").val(jQuery("#lapplyid").val());
		jQuery("#remark").val(jQuery("#lremark").val());
		jQuery("#locationCode").val(jQuery("#oldlocationcode").val());
		jQuery("#principal").val(jQuery("#lprincipal").val());
	}else{
		document.getElementById(formId).reset();
		var sexdiv = jQuery("#"+formId+" [id='userSexSelected']");
		var statusdiv = jQuery("#"+formId+" [id='userStatusSelected']");
		sexdiv.find(".fleft").text("请选择");
		statusdiv.find(".fleft").text("请选择");
	}
}
/**
 * 全选/取消全选
 */
function isSelAll(itemname){
//	var isChecked = $("input[id='"+itemname+"']").attr("checked");
//	if(isChecked){
//		$("input[name='"+itemname+"']").attr("checked",true); 
//	}else{
//		$("input[name='"+itemname+"']").attr("checked",false); 
//	}
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
 * 删除事件
 * @param ids
 * @returns {Boolean}
 */
function btn_click_delete(ids){
	if(ids == "" || ids == null){
		ids= getChecks("users").join(",");		
		if(ids == "" || ids == null){
			showMessageTxt("请选择一条或多条记录!","message","deleteCg");
			jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');});
			return false;
		}
	}
	showDialog("确定删除吗?",ids);
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
function showDialog(text,ids){
	$("#dialog_").text(text);
	//var href="confirm_delete(\'"+ids+"\')";
	$("#delete [id ='qd']").unbind("click").bind("click",function(){confirm_delete(ids);});
	show('cover','delete');
}
/**
 * 删除或保存成功后，'确定'事件
 * @param divid
 * @param func
 * @param lid
 */
function succToList(divid,lid){
	hide('cover',divid);
	if(divid == 'deleteCg'){
		showUserList(lid);
	}
	if(divid == 'bccg'){
		getLocationUser(lid);
		$(".bmTab1").show();
		$(".bmTab2").hide();
	}
	showLocationInfo(lid);
}
/**
 * 确定删除角色
 * @param ids
 */
function confirm_delete(ids){
	var locationid = jQuery("#id_").val();
	hide('cover','delete');
	jQuery.ajax({
		type:"get",
		cache:"false",
        url:basePath+"locationQuery/deleteSelectedUser.controller?t="+Math.random()+"&ids="+ids+"&lcid="+locationid,
        dataType:"json",
        success:function(result){
        	showMessageTxt(result.message,"message","deleteCg");
        	if(result.messageCode.indexOf("S")==0){
    			var isChecked = $("input[id='users']").attr("checked");
    			if(isChecked){
    				$("input[id='users']").attr("checked",false);
    			}
    			//var link = "succToList(\'deleteCg\',\'"+locationid+"\')";
    			jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){succToList("deleteCg",locationid);});
    			jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){succToList("deleteCg",locationid);});
        	}
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');});
        }
	});
}
/**
 * 新增管理用户
 */
function addManageUser(){
	jQuery(".bnBack").bind("click",function(){backbm();back_to_request();});
	jQuery(".bnShouquan").unbind("click").bind("click",function(){
		grantFunc();
	});
	jQuery("#add [id='btnsearch']").bind("click",function(){findUser('add','search');});
	jQuery("#add [id='reset']").bind("click",function(){btn_click_reset('add');});
	jQuery("#adduseritem").bind("click",function(){isSelAll('adduseritem');});
	jQuery("#add_r [id='first']").bind("click",function(){findUser('add','first');});
	jQuery("#add_r [id='before']").bind("click",function(){findUser('add','before');});
	jQuery("#add_r [id='next']").bind("click",function(){findUser('add','next');});
	jQuery("#add_r [id='end']").bind("click",function(){findUser('add','end');});
	jQuery("#add_r [id='go']").bind("click",function(){findUser('add','go');});	
	
	var isChecked = $("input[id='adduseritem']").attr("checked");
	if(isChecked){
		$("input[id='adduseritem']").attr("checked",false);
	}
	var locationid = jQuery("#locationId").val();
	jQuery("#addlid").html("");
	jQuery("#addlid").append("<input type='hidden' name='id' id='lcid' value='"+locationid+"'/>")
	setPageMessage("add");
	jQuery("#add [id='pageNum']").val(1);
	jQuery("#add [id='rowDisplayed']").val(10);
	jQuery("#add [id='firstEnter']").val(true);
	var searchData = jQuery("#add").serializeArray();
	document.getElementById("load_id_2").src=basePath + "mvcbms/pub/css/images/loading.gif";
	jQuery.ajax({
		type:"get",
		cache:"false",
        url:basePath+"locationQuery/addUserForLocation.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage("add",pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"addusers");
        	document.getElementById("addusers_tbody").style.visibility="visible";
	    	document.getElementById("load_id_2").style.visibility="hidden";
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');});
        }
	});
}
/**
 * 新增管理用户的弹出层中_点击返回_事件
 */
function back_to_request(){
	btn_click_reset("add");
	jQuery("#add [id='pageNum']").val(1);
	jQuery("#add [id='firstEnter']").val(false);
	var isChecked = $("input[id='users']").attr("checked");
	if(isChecked){
		$("input[id='users']").attr("checked",false);
	}
	var locationid = jQuery("#locationId").val();
	getLocationUser(locationid);
}
/**
 * 提交授权
 * @returns {Boolean}
 */
function grantFunc(){
	var locationid = jQuery("#lcid").val();
	var chkids = getChecks("adduseritem").join(",");
	if(chkids == "")
	{
		showMessageTxt("请选择一条或多条记录!","message","deleteCg");
		jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');});
		return false;
	}
	jQuery.ajax({
		type:"get",
		cache:"false",
        url:basePath+"locationQuery/saveLocationUser.controller?t="+Math.random()+"&uids="+chkids+"&lcid="+locationid,
        dataType:"json",
        success:function(result){
        	showMessageTxt(result.message,"message","bccg");
        	if(result.messageCode.indexOf("S")==0){
        		jQuery("#search [id='pageNum']").val(1);
    			jQuery("#search [id='firstEnter']").val(false);
    			jQuery("#bccg [id='qd']").unbind("click").bind("click",function(){succToList("bccg",locationid);});
    			jQuery("#bccg [id='close']").unbind("click").bind("click",function(){succToList("bccg",locationid);});
        	}
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');});
        }
	});
}
/**
 * 新增或编辑前请求数据
 */
function requestFordata(type){
	jQuery(".save").removeAttr("onclick");
	if(type == "edit"){
		jQuery(".btnreset").unbind("click").bind("click",function(){btn_click_reset("saveOrUpdate","edit");});
		jQuery("#deptName").val(jQuery("#deptName_").text());
		jQuery("#applyid").val(jQuery("#applyid_").text());
		jQuery("#remark").val(jQuery("#remark_").text());
    	jQuery("#lname").val(jQuery("#deptName").val());
    	jQuery("#lapplyid").val(jQuery("#applyid").val());
    	jQuery("#locationCode").val(jQuery("#locationCode_").text());
    	jQuery("#principal").val(jQuery("#principal_").text());
    	jQuery("#lremark").val(jQuery("#remark").val());
    	jQuery("#lprincipal").val(jQuery("#principal").val());
    	jQuery("#hidePrincipal").val(jQuery("#principal_").text());
    	jQuery(".save").unbind("click").bind("click",function(){save("edit");});
	}
	if(type == "add"){
		jQuery("#locationCode").val("");
		jQuery(".btnreset").unbind("click").bind("click",function(){btn_click_reset("saveOrUpdate","add");});
		jQuery(".save").unbind("click").bind("click",function(){save("add");});
	}
	jQuery(".btnback").removeAttr("onclick");
	jQuery(".btnback").unbind("click").bind("click",function(){backbm();btn_click_reset('saveOrUpdate');});
//	jQuery(".btnreset").unbind("click").bind("click",function(){document.getElementById('saveOrUpdate').reset();});
}
function beforeEdit(){
	requestFordata("edit");
}
function beforeAdd(){
	requestFordata("add");
}


function validateLocationCode(){
	var res = true;
	if(jQuery("#locationCode").val())
	{
		var locatioincode = jQuery("#locationCode").val();
		var oldlocationcode = jQuery("#oldlocationcode").val();
		if(oldlocationcode != null && locatioincode != oldlocationcode){
			jQuery.ajax({
					type: "POST",
					async:false,
					url: basePath+"locationEdit/findLocationCode.controller?t="+Math.random()+"&locationCode="+locatioincode,
					dataType:'json',
					success: function(msg){
	     				if(msg==null){
	     					res = true;
	 					}else{
	 						showMessageTxt("部门Code:"+locatioincode+"已存在！","message","deleteCg");
	 						jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');});
	 						res = false;
	 						return res;
	 					}
					}
			});
		}else{
			res = true;
		}
	}else{
		res = true;
	}
	return res;
}
/**
 * 保存修改或新增的下级部门信息
 */
function save(type){
	var chkStr= [[],[]];
	chkStr[0]=['deptName','部门名称',50,1,1];
	//chkStr[1]=['applyid','部门外部ID',32];
	chkStr[1]=['remark','部门描述',200];
	chkStr[2]=['applyid','部门外部ID',32];
	chkStr[3]=['applyid','部门Code',32];
	var bool = checkStr1(chkStr);
	if(bool != null){
		showMessageTxt(bool,"message","deleteCg");
		jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide("cover","deleteCg");});
		return false;
	}
	var validateApplyId = true;
	if(jQuery("#applyid").val())
	{
		var applyid = jQuery("#applyid").val();
		var locationname = jQuery("#locationapplyname").text();
		var oldapplyid = jQuery("#oldapplyid").val();
		if(oldapplyid != null && applyid != oldapplyid){
			jQuery.ajax({
					type: "POST",
					async:false,
					url: basePath+"locationEdit/findApplyId.controller?t="+Math.random()+"&applyid="+applyid,
					dataType:'json',
					success: function(msg){
	     				if(msg==null){
	     					validateApplyId = validateLocationCode();
	     					if(validateApplyId){
	     						submitData(type);
	     					}
	 					}else{
	 						showMessageTxt(locationname+"已存在！","message","deleteCg");
	 						jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');});
	 						return false;
	 					}
					}
			});
		}else {
			validateApplyId = validateLocationCode();
			if(validateApplyId){
				submitData(type);
			}
		}
	}else{
		validateApplyId = validateLocationCode();
		if(validateApplyId){
			submitData(type);
		}
	}
}

/**
 * 提交保存数据
 */
function submitData(type){
	var resUrl = "";
	if(type == "edit"){
		resUrl = basePath+"locationEdit/edit.controller?t="+Math.random();
	}
	if(type == "add"){
		resUrl = basePath+"locationEdit/add.controller?t="+Math.random();
	}
	var jsonData = jQuery("#saveOrUpdate").serializeArray();
	jQuery.ajax({
		type:"post",
		cache:"false",
		url:resUrl,
		dataType:"json",
		data:jsonData,
		success:function(result){
			showMessageTxt(result.message,"message","bccg");
    		if(result.messageCode.indexOf("S")==0){
    			jQuery("#bccg [id='qd']").unbind("click").bind("click",function(){saveSuccess("bccg")});
    			jQuery("#bccg [id='close']").unbind("click").bind("click",function(){saveSuccess("bccg")});
    		}
        }
	});
}
/**
 * 新增或修改保存成功，'确定'事件
 */
function saveSuccess(divid){
	hide('cover',divid);
	window.location.href = basePath+"location/locationIndex.controller";
}
/**
 * 删除部门
 */
function deleteLocation(){
	var lid = jQuery("#id_").val();
	$("#dialog_").text("确认删除该部门吗？");
	//var href="confirm(\'"+lid+"\')";
	$("#delete [id='qd']").unbind("click").bind("click",function(){confirm(lid)});
	show('cover','delete');
}
/**
 * 确认删除部门信息
 * @param lid
 */
function confirm(lid){
	hide('cover','delete');
	jQuery.ajax({
		type:"get",
		cache:"false",
        url:basePath+"locationDelete/delete.controller?t="+Math.random()+"&id="+lid,
        dataType:"json",
        success:function(result){
        	showMessageTxt(result.message,"message","deleteCg");
        	if(result.messageCode.indexOf("S")==0){
        		//var link = "saveSuccess(\'deleteCg\')";
    			jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){saveSuccess("deleteCg");});
    			jQuery("#deleteCg [id='close']").unbind("click").bind("click",function(){saveSuccess("deleteCg");});
        	}
        },
        error:function(){
        	showMessageTxt("没有删除权限！","message","deleteCg");
        	jQuery("#deleteCg [id='qd']").unbind("click").bind("click",function(){hide('cover','deleteCg');});
        }
	});
}

function chosePrincipal(){
	document.getElementById('roleuserForm').reset();
	jQuery("#roleuserForm [id='reset']").bind("click",function(){document.getElementById('roleuserForm').reset();});
	var locationid = jQuery("#locationId").val();
	jQuery("#appLoc").html("");
	jQuery("#appLoc").append("<input type='hidden' name='id' value='"+locationid+"'/>")
	jQuery("#roleuserForm [id='search']").bind("click",function(){findAllUser('roleuserForm','search')});
	jQuery("#roleuserForm_r [id='first']").bind("click",function(){findAllUser('roleuserForm','first')});
	jQuery("#roleuserForm_r [id='before']").bind("click",function(){findAllUser('roleuserForm','before')});
	jQuery("#roleuserForm_r [id='next']").bind("click",function(){findAllUser('roleuserForm','next')});
	jQuery("#roleuserForm_r [id='end']").bind("click",function(){findAllUser('roleuserForm','end')});
	jQuery("#roleuserForm_r [id='go']").bind("click",function(){findAllUser('roleuserForm','go')});
	listUserAll();
}

/**
 * 请求获取用户的数据
 */
function listUserAll(){
	document.getElementById("load_id").src=basePath + "mvcbms/pub/css/images/loading.gif";
	setPageMessage("roleuserForm");
	var searchData = jQuery("#roleuserForm").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({
		type:"get",
		cache:"false",
		url:basePath+"locationQuery/addUserForLocation.controller?t="+Math.random(),
		dataType:"json",
		data:searchData,
		success:function(result){
			//获取分页信息
			var pageMessage = result.pageDTO.pageBean;
			//分页信息展示
			pagingMessage("roleuserForm",pageMessage);
			//数据展示
			tableUtil(eval(result.list),"userRole");
			document.getElementById("userRole_tbody").style.visibility="";
	    	document.getElementById("load_id").style.visibility="hidden";
	    	
			var principals = jQuery("#principal").val();
			var principal=principals.split(',');
			jQuery("input[name='principals']").
			each(function(){
				for ( el in principal) {
					if(this.value==principal[el]){
						this.checked = true;
						return true;
					}
				}
				this.checked = false;
			});
		},
		error:function(){
			showMessageTxt("异常操作，请查看系统日志！","message","bccg");
			jQuery("#qd_").unbind("click").bind("click",function(){hide("cover","bccg")});
		}
	});
}
/**
 * 请求获取用户的数据
 */
function listUser(){
	setPageMessage("roleuserForm");
	var searchData = jQuery("#roleuserForm").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({
		type:"get",
    	cache:"false",
        url:basePath+"userQuery/queryUsers.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	var pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage("roleuserForm",pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"userRole");
        	
        	var principals = jQuery("#principal").val();
        	var principal=principals.split(',');
        		jQuery("input[name='principals']").
        		each(function(){
        			for ( el in principal) {
        				if(this.value==principal[el]){
            				this.checked = true;
            				return true;
            			}
        			}
        				this.checked = false;
        		});
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
        	jQuery("#qd_").unbind("click").bind("click",function(){hide("cover","bccg")});
        }
    });
}

//
// function findUser(formId,tab,countPageNum){
// 	 var checked = $("input[id='addusers']").attr("checked");
// 	 if(checked){
// 		$("input[id='addusers']").attr("checked",false);
// 	 }
 	 //go第几页
// 	var goPage = jQuery("#gotoUser").val();
// 	jQuery("#gotoUser").val("");
// 	var url = basePath+"userQuery/queryUsers.controller";
// 	search(url,tab,"userRole",formId,countPageNum,goPage);
// }

function getPrincipal(){
//	 var principal = jQuery('#userRole_tbody input[name="principals"]:checked').val();
	 var pri = jQuery("#principal").val();
	 var ll=null;
	 var hidde=jQuery("#hidePrincipal").val();
	var principal = jQuery('#userRole_tbody input[name="principals"]:checked').map(function(index,elem) {
		console.log("1");
		var str =pri.split(",");
		for (var i = 0; i < str.length; i++) {
			if(str[i] != $(elem).val()){
				return $(elem).val();
			}
			
		}
	/*	if(pri.indexOf($(elem).val())==-1 || pri.indexOf($(elem).val())==0){
			return $(elem).val();
		}*/
		
         
     }).get().join(',');
	if(principal == "" || principal == null ||  pri == undefined){
		ll = jQuery('#userRole_tbody input[name="principals"]:checked').map(function(index,elem) {
			return $(elem).val();
	     }).get().join(',');
		jQuery("#principal").val(ll);
		/*return false;*/
	}
	 if(pri == "" || pri == null || pri == undefined){
		 jQuery("#principal").val(principal);
	 } else if(ll==null && pri==""){
		var ff = jQuery('#userRole_tbody input[name="principals"]:checked').map(function(index,elem) {
				return $(elem).val();
		     }).get().join(',');
		jQuery("#principal").val(ff);
	 } else if(ll == null && principal != "") {
		 if(hidde==""){
			 jQuery("#principal").val(principal);
		 }else{
			 jQuery("#principal").val(hidde+ ',' + principal);
		 }
	 } else if(ll == "" && principal != "") {
		 jQuery("#principal").val(pri+ ',' + principal);
	 } 
	 if(ll == "" && pri != "" && hidde != "") {
		 var ff = jQuery('#userRole_tbody input[name="principals"]:checked').map(function(index,elem) {
				return $(elem).val();
		     }).get().join(',');
		 if(ff==""){
			 jQuery("#principal").val(hidde);
		 }else{
			 jQuery("#principal").val(hidde+","+ff);
		 }	 		
	 } 
	 if(ll != null && pri !="" && principal==""){
		 if(ll==""){
			 jQuery("#principal").val(hidde);
		 }else{
			 if(hidde==""){
				 jQuery("#principal").val(ll);
			 }else{
				 jQuery("#principal").val(hidde+","+ll);
			 }	
		 }	 		
	 } 
}
