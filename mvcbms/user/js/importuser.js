jQuery(function(){
	$(".back").bind("click",function(){btn_click_back()});
	$(".ensure").removeAttr("onclick");
	$(".ensure").bind("click",function(){btn_click_ensure()});
	$(".download").removeAttr("onclick");
	$(".download").bind("click",function(){btn_click_download()});
});
/**
 * 返回事件
 * @returns
 */
function btn_click_back(){
	window.location.href = basePath + "user/list.controller";
}
function backToList(){
	hide("cover","bccg");
	window.location.href = basePath + "user/list.controller";
}
/**
 * 确定导入
 */
function btn_click_ensure(){
	var url = basePath+"userImport/import.controller";
	jQuery("#importForm").attr("action",url);
	var fileName = jQuery("#filename").val();
	var name = fileName.split(".");
	var i = name.length-1;
	if(fileName == null || fileName == ""){
		showMessageTxt("请选择需要导入的文件！","message","bccg");
		return false;
	}
	name[i] = name[i].toLowerCase();
	if(name[i]!="xls"){
		showMessageTxt("文件类型不支持！","message","bccg");
		return false;
	}

	document.forms[0].submit();
	/**三秒后执行该操作*/
	setTimeout(function () { 
		var result = jQuery(document.getElementById("success").contentWindow.document.body).html();
		result = jQuery.trim(result);
		result = eval("("+result+")");
		var message = eval("("+result.message+")");
		if(message.messageCode.indexOf("S")==0){
			showMessageTxt(message.message,"message","bccg");
			$("#qd").unbind("click").bind("click",function(){backToList()});
			$(".close").unbind("click").bind("click",function(){hide("cover","bccg");backToList()});
		}else if(message.messageCode.indexOf("E")==0){
			showMessageTxt(message.message,"message","bccg");
		}else{
			var errorStr="";
			var errorList =eval(result.errorMsg);
			for(var k in errorList){
				//errorStr = errorStr + errorList[k]+"、";
				var errorArr = errorList[k];
				errorStr =errorStr+ "<p>第"+errorArr[0]+"行，"+errorArr[1]+"</p>";
			}
			//errorStr = errorStr.substr(0,(errorStr.length-1));
			//showMessageTxt(message.message+"成功"+result.sucNum+"条，失败"+result.failNum+"条！<br/>"+"第"+errorStr+"行失败！","message","bccg");
			showMessageTxt(message.message+"成功"+result.sucNum+"条，失败"+result.failNum+"条！<br/>"+errorStr,"message","bccg");
		}
    }, 3000);
}
/**
 * 下载模板
 */
function btn_click_download(){
	var objType = "";//浏览器类型
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox') >= 0){
		objType = "firefox";
	}
	window.location.href = basePath+"template/download.controller?type=add&objType="+objType;
}
