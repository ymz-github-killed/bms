document.write("<script src='"+basePath+"mvcbms/pub/js/strCheck.js' type='text/javascript'></script>");
jQuery(function(){
	jQuery(".back").bind("click",function(){btn_click_back()});
	jQuery(".reset").bind("click",function(){btn_click_reset()});
	document.getElementById('save').onclick = "";
	jQuery(".save").bind("click",function(){btn_click_save()});
	jQuery("#search").append("<input type='hidden' id='id_' name='shopCutBean.id'/>");
	var shopCutBean=jsonData.shopCutBean;
	if(shopCutBean!=null ){
		for(var k in shopCutBean){
			var el=$("#"+k+"_");
			if(el){
				el.val(shopCutBean[k]==null ? "":shopCutBean[k]);
			}
		}
	}
	
});
/**
 * 点击保存事件
 * @returns {Boolean}
 */
function btn_click_save(){
	var validateArr = [[],[]];
	validateArr[0]=['funcName_','链接名称',100,1,1];
	validateArr[1]=['url_','链接地址',100,1,1];
	validateArr[2]=['sort_','排列序号',10,1,1];
    var bool=checkStr1(validateArr);
    var url1=$("#url_").val();
    var bools=checkURL(url1);
    var sort=$("#sort_").val();
    var reg = new RegExp(/^\d+$/);
    if(!reg.test(sort)){
    	showMessageTxt("排列序号只能输入数字","message","bccg");
    	return false;
    }

//    if(url1.split("HTTP://").length!=2 && url1.split("HTTPS://").length!=2 && url1.split("http://").length!=2 && url1.split("https://").length!=2){
//    	showMessageTxt("链接地址格式错误","message","bccg");
//		return false;
//    }
    if(bools!=null){
    	 showMessageTxt(bools,"message","bccg");
    	return false;
    }
   
    if(bool != null){
		showMessageTxt(bool,"message","bccg");
		return false;
	}
	submitData();
}

function checkURL(URL){
	//判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
	//下面的代码中应用了转义字符"\"输出一个字符"/"
	var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
	var objExp=new RegExp(Expression);
	if(objExp.test(URL)!=true){
		var text="链接地址格式错误";
		return text;
	}
}
/**
 * 保存数据
 */
function submitData(){
	var jsonData = $("form").serializeArray();
	jsonData=eval(jsonData);
	$.ajax({
		type:"post",
		cache:"false",
		url:basePath+"shopCutAdd/add.controller?t="+Math.random(),
		data:jsonData,
		dataType:"json",
		success:function(result){
			showMessageTxt(result.message,"message","bccg");
			if(result.messageCode.indexOf("S")==0){
    			jQuery("#qd").bind("click",function(){backtoList()});
    			jQuery(".close").bind("click",function(){backtoList()});
    		}
		},
		error:function(){
			showMessageTxt("异常操作，请查看系统日志","message","bccg");
		}
	});
}
/**
 * 返回列表
 */
function backtoList(){
	hide("cover","bccg");
	window.location.href = basePath+"shopCut/list.controller";
}
/**
 * 返回事件
 */
function btn_click_back(){
	window.location.href=basePath+"shopCut/list.controller";
}
function btn_click_reset(){
	var shopCutBean=jsonData.shopCutBean;
	if(shopCutBean != null){
		for (var k in shopCutBean){
			var el = jQuery('#' + k + '_');
			if (el)
				el.val(shopCutBean[k]==null?"":shopCutBean[k]);
		}
	}else{
		document.getElementById("search").reset();
	}
}