document.write("<script src='"+basePath+"mvcbms/pub/js/strCheck.js' type='text/javascript'></script>");
$(function(){
	jQuery(".back").bind("click",function(){btn_click_back();});
	jQuery(".reset").bind("click",function(){btn_click_reset();});
	jQuery(".save").removeAttr("onclick").bind("click",function(){beforeSubmit();});
	jQuery("#appName_").val("");
	jQuery("body").on("click",".stylyImgBtn p",function(){
		var nameSrc = jQuery(this).attr("src");
		jQuery(".styleImg").attr("src",nameSrc);
	});
	//系统样式下拉框内容   
	var appStyleOption = jsonData.appStyleList;
	initOption(appStyleOption,"addForm","appStyle");
	var webAppData = jsonData;
	if(webAppData.appCode != null && webAppData.appCode != ""){
		jQuery("#appCode_").attr("readOnly",true);
		for (var k in webAppData){
			if(k=="appStyle"){
				for(var i in appStyleOption)
				 if(appStyleOption[i].id == webAppData[k]){
					 jQuery("#appStyleSelected span.fleft").html(appStyleOption[i].styleName);
					 jQuery(".styleImg").attr("src",basePath+appStyleOption[i].imageUrl);
				 }
			}
			var el = jQuery('#' + k + '_');
			if (el)
				el.val(webAppData[k]);
		}
		jQuery('#insertCache').val("0");
		jQuery("#addForm").append("<input id='oldAppname' type='hidden' value='"+webAppData.appName+"'/>");
	}
})

function initOption(jsonData,formid,inputname){
	var inputStr = "<input class='undis' name='bmsWebapp.appStyle' id='appStyle_' value=''></input>"
	jQuery("#"+formid+" [id='"+inputname+"Select']").html("");
	/*var p = "<p name='2'>默认样式</p>";*/
	jQuery("#"+formid+" [id='"+inputname+"Select']").append(p);
	for(var i in jsonData){
		var p = "<p src='"+basePath+jsonData[i].imageUrl+"' name='"+jsonData[i].id+"' title="+jsonData[i].styleName+">"+jsonData[i].styleName+"</p>";
		jQuery("#"+formid+" [id='"+inputname+"Select']").append(p);
	}
	/*jQuery("#"+formid+" [id='"+inputname+"Selected']").html("<span class='fleft' style='overflow:hidden' >默认样式</span><span class='fright'>&nbsp;</span>");*/
	jQuery("#"+formid+" [id='"+inputname+"Selected']").append(inputStr);
}
/**
 * 返回
 */
function btn_click_back(){
	window.location.href = basePath + "webAppRequestController/listWebApp.controller"; 
}
/**
 * 重置
 */
function btn_click_reset(){
	document.getElementById("addForm").reset();
	//系统样式下拉框内容
	var appStyleOption = jsonData.appStyleList;
	jQuery(".styleImg").attr("src",basePath+"/theme/bmsHTGL/images/styleImg1.jpg");
	initOption(appStyleOption,"addForm","appStyle");
	jQuery("#appCode_").val(jQuery("#appcode").val());
	jQuery("#desKey_").val("12345678");
	jQuery("#appName_").val("");
	var webAppData = jsonData;
	var appStyleOption = jsonData.appStyleList;
	if(webAppData.appCode != null && webAppData.appCode != ""){
		for (var k in webAppData){
			if(k=="appStyle"){
				for(var i in appStyleOption)
				 if(appStyleOption[i].id == webAppData[k]){
					 jQuery("#appStyleSelected span.fleft").html(appStyleOption[i].styleName);
					 jQuery(".styleImg").attr("src",basePath+appStyleOption[i].imageUrl);
				 }
			}
			var el = jQuery('#' + k + '_');
			if (el)
				el.val(webAppData[k]);
		}
		jQuery('#appCode_').readOnly = 'true';
		jQuery('#insertCache').val("0");
		jQuery('#oldAppname').val(jQuery('#appName_').val());
	}
}
function submitData(){
	var jsonData = $("form").serializeArray();
	jQuery.ajax({
		type:"post",
		cache:"true",
		url:basePath+"webAppAdd/add.controller?t="+Math.random(),
		dataType:"json",
		data:jsonData,
			success:function(result){
				showMessageTxt(result.message,"message","bccg");
        		if(result.messageCode.indexOf("S")==0){
        			jQuery("#qd").unbind("click").bind("click",function(){successToList();});
        			jQuery(".close").unbind("click").bind("click",function(){successToList();});
        		}
	        }
	});
}
/**
 * 保存成功后跳转到list
 */
function successToList(){
	hide("cover","bccg");
	window.location.href=basePath+"webAppRequestController/listWebApp.controller";
}

function beforeSubmit() {
	var str = new Array(new Array(),new Array());
	str[0]=['appCode_','应用编码',50,1,1];
	str[1]=['appName_','应用名称',100,1,1];
	str[2]=['appUrl_','URL链接',255,1];
	str[3]=['appDesc_','简介',200];
	str[4]=['desKey_','DES Key',255,1,1];
	str[5]=['appIp_','接入IP',256];
	var bool=checkStr1(str);
	if(bool != null){
		showMessageTxt(bool,"message","bccg");
		return false;
	}
	if(!/^[0-9a-zA-Z_]{1,}$/g.test(jQuery("#appCode_").val()))
	{
		showMessageTxt("应用编码格式不正确！","message","bccg");
		return false;
	}
	if(jQuery("#desKey_").val()!="" && jQuery("#desKey_").val().length!=8)
	{
		showMessageTxt("DES Key 长度为8位!","message","bccg");
		return false;
	}
	if(jQuery("#appName_").val() != ""){
		if(jQuery('#oldAppname').val() != jQuery("#appName_").val()){
			var jsonData = jQuery("#addForm").serializeArray();
			jQuery.ajax({
				type : "POST",
				url : basePath+"webAppAdd/findByCode.controller?t="+Math.random(),
				dataType : "json",
				data : jsonData,
				success : function(msg) {
					if(msg!=null&&msg.messageCode.indexOf("E") == 0){
						showMessageTxt(msg.message,"message","bccg");
						return false;
					}else{
						submitData();
					}
				},
		        error:function(){
		        	showMessageTxt("操作失败！","message","bccg");
		        }
			});
		}else{
			submitData();
		}
			
	}else{
		submitData();
	}
}