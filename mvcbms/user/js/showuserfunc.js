var userData = jsonData.userFuncBean;
jQuery(function(){
	$(".back").bind("click",function(){btn_click_back()});
	for (var k in userData){
		var el = jQuery('#' + k + '_');
		if (el)
			el.text(userData[k]==null?"":userData[k]);
	} 
	if(userData.userStatus == '1')
		$('#userStatus').text('正常');
	else if(userData.userStatus == '0')
		$('#userStatus').text('停用');
	if(userData.userSex == '1')
		$('#userSex').text('男');
	else if(userData.userSex == '0')
		$('#userSex').text('女');
	jQuery("#bmsCanVisitLocations").html("");
	var canVisitLocations = userData.bmsCanVisitLocationList;
	if(canVisitLocations != null && canVisitLocations.length > 0){
		for(var i = 0 ; i < canVisitLocations.length; i++){
			jQuery("#bmsCanVisitLocations").append("<span class='lineh20 mr10 nowrap'>"+canVisitLocations[i]+"</span>");
		}
	}
	jQuery("#roleName").html("");
	var roleNames = userData.roleNameList;
	if(roleNames != null && roleNames.length > 0){
		for(var i = 0 ; i < roleNames.length; i++){
			jQuery("#roleName").append("<span class='lineh20 mr10 nowrap'>"+roleNames[i]+"</span>");
		}
	}
});
function btn_click_back(){
	window.location.href=basePath+"user/listUserFunc.controller";
}