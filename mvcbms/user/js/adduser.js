document.write("<script src='"+basePath+"mvcbms/pub/js/strCheck.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/passwordRule.js' type='text/javascript'></script>");
jQuery(function(){
	$(".back").bind("click",function(){btn_click_back()});
	$(".reset").bind("click",function(){btn_click_reset()});
	$("#reset").bind("click",function(){rbutton()});
	$(".save").removeAttr("onclick");
	$(".save").bind("click",function(){beforeSubmit()});
	$("#first").bind("click",function(){find('search','first')});
	$("#before").bind("click",function(){find('search','before')});
	$("#next").bind("click",function(){find('search','next')});
	$("#end").bind("click",function(){find('search','end')});
	$("#go").bind("click",function(){find('search','go')});
	$("#searchLocation").bind("click",function(){find('search','search')});
	jQuery("#qd").removeAttr("onclick");
	//jQuery("#search").append("<input id='uname' type='hidden'/>");
	jQuery("#search").append("<input id='id_' type='hidden' name='bmsUser.id'/>");
	jQuery("#search").append("<input id='oldapplyid' type='hidden'/>");
	jQuery("#search").append("<input id='isLocked_' type='hidden' name='bmsUser.isLocked' value='0'/>");
	jQuery("#search").append("<input id='bmsLocationId_' type='hidden' name='bmsUser.bmsLocationId'/>");
	jQuery("body").on("click","#select",function(){
		selectLocation();
	});
	if(jsonData.bmsUser !=null && jsonData.bmsUser != ""){
		getUserInfo(jsonData.bmsUser);
	}
});
/**
 * 获取用户基本信息
 * @param obj
 */
function getUserInfo(obj){
	var userData = obj;
	var applyid = $("#applyid_");
	jQuery("#userLoginName_").attr("readOnly",true);
	for (var k in userData){
		var el = jQuery('#' + k + '_');
		if (el)
			el.val(userData[k]==null?"":userData[k]);
	} 
	if(applyid.val() != null && applyid.val() != "")
		$("#oldapplyid").val(applyid.val());
	var radioStatus = "input[name='bmsUser.userStatus'][value='"+userData.userStatus+"']";
	if("3"==userData.userStatus){
		$("input[name='bmsUser.userStatus'][value='0']").attr("disabled","disabled");
		$("input[name='bmsUser.userStatus'][value='1']").attr("disabled","disabled");
		$("input[name='bmsUser.userStatus'][value='3']").attr("disabled","disabled");
	}
	
	
	var radioSex = "input[name='bmsUser.userSex'][value='"+userData.userSex+"']";
	$(radioStatus).get(0).checked=true;
	$(radioSex).get(0).checked=true;
	//jQuery("#uname").val(userData.userLoginName);
}
function submitData(){
	/*var userLoginPassword = $("#userLoginPassword_").val();
	jQuery("#primitivePassword").val(userLoginPassword);
	jQuery("#userLoginPassword_").val(enString(userLoginPassword));*/
	var jsonData = $("form").serializeArray();
	jQuery.ajax({
		type:"get",
		cache:"false",
		url:basePath+"userAdd/add.controller?t="+Math.random(),
		dataType:"json",
		data:jsonData,
		success:function(result){
			showMessageTxt(result.message,"message","bccg");
    		if(result.messageCode.indexOf("S")==0){
    			jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");window.location.href=basePath+"user/list.controller";});
    			jQuery(".close").unbind("click").bind("click",function(){hide("cover","bccg");window.location.href=basePath+"user/list.controller";});
    		}else{
//    			jQuery("#userLoginPassword_").val(userLoginPassword);
    			jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
    			jQuery(".close").unbind("click").bind("click",function(){hide("cover","bccg");});
    		}
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
        	jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
        }
	});
}
function beforeSubmit() {
	var checkList = [[],[]];
	checkList[0] = [ 'userLoginName_', '登录名', 50, 7, 1, 1, 1 ];
	/*checkList[1] = [ 'userLoginPassword_', '登录密码'];*/
	checkList[1] = [ 'userPassque_', '安全密码问题', 100 ];
	checkList[2] = [ 'userPassans_', '安全密码答案', 100 ];
	checkList[3] = [ 'bmsLocationName_', '所属部门', 0, 1 ];
	checkList[4] = [ 'userStation_', '职位', 50, 1, 1 ];
	checkList[5] = [ 'applyid_', '员工工号', 32, 7 ];
	checkList[6] = [ 'userDesc_', '备注', 200 ];
	checkList[7] = [ 'userRealName_', '真实姓名', 20, 1 ];
	checkList[8] = [ 'userMobile_', '手机', 100 ,1];
	checkList[9] = [ 'userPhone_', '电话', 50 ];
	checkList[10] = [ 'userEmail_', '电子邮件', 100, 1 ];
	checkList[11] = [ 'userFax_', '传真', 50 ];
	checkList[12] = [ 'userPosition_', '住址', 200 ];
	checkList[13] = [ 'validatePhoneCode_', '密保手机号', 100, 1 ];
	var bool = checkStr1(checkList);
	var userMobile = $("#userMobile_").val();
	var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;  
    if (!myreg.test(userMobile)) {  
    	showMessageTxt("请输入正确的手机号码！","message","bccg");
    	jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
		return false;  
    }
	if(bool != null){
		showMessageTxt(bool,"message","bccg");
		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
		return false;
	}
	// 密码验证
	/*if (loginPwd("userLoginName_", "userLoginPassword_")!=null) {
		showMessageTxt(loginPwd("userLoginName_", "userLoginPassword_"),"message","bccg");
		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
		return false;
	}*/
	var userEmail = $("#userEmail_");
	var userMobile = $("#userMobile_");
	var userPhone = $("#userPhone_");
	var userFax = $("#userFax_");
	var validatePhoneCode = $("#validatePhoneCode_");
	
	if(userEmail.val()!=''&&!/^\w+@\*+\.\w+$/g.test(userEmail.val())){
		if (userEmail.val() != ''&& !/^[a-zA-Z0-9_+.-]+\@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/g.test(userEmail.val())) {
			showMessageTxt("邮箱地址格式不合法","message","bccg");
			jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
			return false;
		}
	}
	
	/*
	(function(checkArr){
		for (var i = 0; i < checkArr.length; i++){
			var check = checkArr[i],
			    el = $(check[0]),
			    val = el.val()
			    ;
			
		}
		
	})([['id', 'regexp', 'msg' ]])*/
	if (validatePhoneCode.val()!=null&& !/^1\d{10}$/g.test(validatePhoneCode.val())) {
		showMessageTxt("密保手机号码格式不合法！","message","bccg");
		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
		return false;
	} 
	
	if (userMobile.val() != '' && !/^1\d{10}$/g.test(userMobile.val())) {
		showMessageTxt("手机号码格式不合法！","message","bccg");
		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
		return false;
	}

	if (userPhone.val() != ''&& !/^(\d{2,5}\-){0,2}\d{7,11}$/g.test(userPhone.val())) {
		showMessageTxt("电话号码格式不合法！<br/>可参照【010-82352562或82352562】","message","bccg");
		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
		return false;
	}

	if (userFax.val() != ''
			&& !/^(\d{2,5}\-){0,2}\d{7,11}$/g.test(userFax.val())) {
		showMessageTxt("传真格式不合法 ！<br/>可参照【010-82352562或82352562】","message","bccg");
		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
		return false;
	}
	if ($("#applyid_").val() != "") {
		var applyid = $("#applyid_").val();
		var oldapplyid = $("#oldapplyid").val();
		if (applyid != oldapplyid) {
			jQuery.ajax({
				type : "POST",
				url : basePath+"userAdd/findApplyId.controller?t="+Math.random(),
				dataType : "json",
				data : "applyid=" + applyid,
				success : function(msg) {
					if(msg!=null&&msg.messageCode.indexOf("S")==0){
						showMessageTxt(msg.message,"message","bccg");
						jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
						return false;
					}else{
						submitData();
					}
				}
			});
		} else {
			submitData();
		}
	} else {
		submitData();
	}
}
/**
 * 设置radiobutton点击事件
 * @param id
 * @param name
 */
function selLocationSuc(id, name) {
	document.getElementById("bmsLocationId_").value = id;
	document.getElementById("bmsLocationName_").value = name;
}
/**
 * 重置
 */
function btn_click_reset() {
	if(jsonData.bmsUser !=null){
		getUserInfo(jsonData.bmsUser);
	}else{
		document.getElementById("search").reset();
		//jQuery("#userLoginName_").val(jQuery("#uname").val());
		jQuery("input [name='bmsUser.userSex'][value='1']").attr("checked",true);
		jQuery("input [name='bmsUser.userStatus'][value='1']").attr("checked",true);
	}
	jQuery("#closeLocationList").hide();
}
function rbutton(){
	jQuery("#locationName").val("");
}
/**
 * 
 * @param tab 可选参数：first,end,before,next,changerowdispalyed
 * @param countPageNum 每页显示条数，可选参数；
 */
function find(formId,tab,countPageNum){
	//go第几页
	var goPage = jQuery("#gotoLocations").val();
	jQuery("#gotoLocations").val("");
	var url = basePath+"locationQuery/query.controller";	
	search(url,tab,"locations",formId,countPageNum,goPage);
	selectedLocation();
}
function selectLocation(){
	jQuery("#locationName").val("");
	setPageMessage("search");
	var searchData = jQuery("#search").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({  
    	type:"get",
    	contentType:"application/json",
    	cache:"false",
        url:basePath+"locationQuery/query.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage('search',pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"locations");
        	var user = jQuery("#bmsLocationName_").val();
        	if(user !=null && user != ""){
        		selectedLocation();
        	}
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
        	jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
        }
    }); 
}
function selectedLocation(){
	var locationid = $("#bmsLocationId_");
	var locationsArr = jQuery(":input:radio[name='radioName']");
	if(locationid.val() != null && locationid.val() != ""){
		for(var i=0;i<locationsArr.length;i++){
			if(locationid.val()==locationsArr[i].value){
			var tar = "input[name='radioName'][value='"+locationsArr[i].value+"']";
			jQuery(tar).attr("checked",true);
			}
		}
	}
}
function btn_click_back(){
	window.location.href=basePath+"user/list.controller";
}