var userData = jsonData.userShowBean;
jQuery(function(){
	$(".back").bind("click",function(){window.location.href=basePath+"user/list.controller";});
	for (var k in userData){
		var el = jQuery('#' + k + '_');
		if (el){
			el.text(userData[k]==null?"":userData[k]);	
		}
	} 
	var loginPassword = userData.userLoginPassword;
	var userPassans = userData.userPassans;
	var pass_star = "";
	for(var i=0;i<loginPassword.length;i++){
		pass_star = pass_star +"*";
	}
	$('#userLoginPassword').text(pass_star);
	if(userPassans != null && userPassans != ""){
		var passans_star = "";
		for(var i=0;i<userPassans.length;i++){
			passans_star = passans_star +"*";
		}
		$('#userPassans').text(passans_star);
	}else{
		$('#userPassans').text("");
	}
	if(userData.userStatus == '1')
		$('#userStatus').text('正常');
	else if(userData.userStatus == '0')
		$('#userStatus').text('停用');
	if(userData.userSex == '1')
		$('#userSex').text('男');
	else if(userData.userSex == '0')
		$('#userSex').text('女');
		
});