document.write("<link rel='stylesheet' type='text/css' href='"+basePath+"mvcbms/pub/js/ztree/zTreeStyle/zTreeStyle.css'/>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.core-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/navtree.js' type='text/javascript'></script>");
jQuery("#search").append("<input type='hidden' id='roleid' name='id'></input>")
jQuery(function(){
	jQuery(".back").bind("click",btn_click_back);
	jQuery("#search [id='reset']").bind("click",btn_click_reset);
	jQuery("#search [id='btnsearch']").bind("click",function(){find('search','search');});
	jQuery("#search_r [id='first']").bind("click",function(){find('search','first');});
	jQuery("#search_r [id='before']").bind("click",function(){find('search','before');});
	jQuery("#search_r [id='next']").bind("click",function(){find('search','next');});
	jQuery("#search_r [id='end']").bind("click",function(){find('search','end');});
	jQuery("#search_r [id='go']").bind("click",function(){find('search','go');});
	
	getOptionContent();
	setPageMessage("search");
	var roleData = jsonData.roleBean;
	jQuery("#roleid").val(roleData.roleid);
	var roleid = jQuery("#roleid").val();
	for (var k in roleData){
		var el = jQuery('#' + k + '_');
		if (el)
			el.text(roleData[k]==null?"":roleData[k]);	
	} 
	var searchData = jQuery("#search").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"userConfig/getUsers.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage("search",pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"users");
        	showFunc(roleid);
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","deleteCg");
        }
	});
});
/**
 * 获取下拉框的内容
 */
function getOptionContent(){
	//用户性别下拉框内容
	var userSexOption = jsonData.userSexSelectList;
	initOptionContent(userSexOption,"search","userSex");
	//用户状态下拉框内容
	var userStatusOption = jsonData.userStatusSelectList;
	initOptionContent(userStatusOption,"search","userStatus");
}
/**
 * 显示权限
 * @param id
 */
function showFunc(rid){
	jQuery("#func").html("");
	jQuery("#func").append("<div id='tree'></div>");
	var url = basePath+"funcConfig/showFunc.controller?roleid="+rid;
	getTree(url,"zTree");
}
function sel(){}
function zTreeOnCheck(){}
/**
 * 
 * @param tab 可选参数：first,end,before,next;
 * @param countPageNum 可选参数 countPageNum 每页显示条数;
 */
function find(formId,tab,countPageNum){
	//go第几页
	var goPage = jQuery("#gotoUsers").val();
	jQuery("#gotoUsers").val("");
	var url = basePath+"userConfig/getUsers.controller";	
	search(url,tab,"users",formId,countPageNum,goPage);
}
/**
 * 返回事件
 */
function btn_click_back(){
	window.location.href=basePath+"role/list.controller";
}
/**
 * form重置
 */
function btn_click_reset(){
	document.getElementById("search").reset();
	var sexdiv = jQuery("#search [id='userSexSelected']");
	var statusdiv = jQuery("#search [id='userStatusSelected']");
/*	jQuery("#"+sexdiv+"[class='fleft']").text("请选择");
	jQuery("#"+statusdiv+"[class='fleft']").text("请选择");*/
	sexdiv.find(".fleft").text("请选择");
	statusdiv.find(".fleft").text("请选择");
}