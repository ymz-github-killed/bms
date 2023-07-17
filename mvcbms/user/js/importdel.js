jQuery(function(){
	jQuery(".export").removeAttr("onclick");
	jQuery(".export").bind("click",function(){btn_click_export();});
	jQuery(".import").removeAttr("onclick");
	jQuery(".import").bind("click",function(){btn_click_import();});
});
/**
 * 导入删除事件
 */
function btn_click_import(){
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
	$("#dialog_").text("是否确认删除，删除后将不可修复！");
	jQuery("#qd").unbind("click").bind("click",function(){hide('cover','delete');confirm_delete();});
	show("cover","delete");
}
/**
 * 导出删除模板
 */
function btn_click_export(){
	var objType = "";//浏览器类型
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox') >= 0){
		objType = "firefox";
	}
	window.location.href = basePath + "template/download.controller?type=dele&objType="+objType;
}
/**
 * 确认删除
 */
function confirm_delete(){
	var url = basePath+"userDel/import.controller";
	jQuery("#importForm").attr("action",url);
	document.forms[0].submit();
	/**2秒后执行该操作*/
	setTimeout(function () { 
		var result = jQuery(document.getElementById("success").contentWindow.document.body).html();
		result = jQuery.trim(result);
		result = eval("("+result+")");
		var message = eval("("+result.message+")");
		if(message.messageCode.indexOf("E")==0){
			showMessageTxt(message.message,"message","bccg");
		}else{
			if(result.errorMsg == null || result.errorMsg == ""){
				showMessageTxt(message.message+"成功删除"+result.sucCount+"条，失败"+result.failCount+"条！<br/>","message","bccg");
			}else{
				var errorStr="";
				var errorList =eval(result.errorMsg);
				for(var k in errorList){
					//errorStr = errorStr + errorList[k]+"、";
					var errorArr = errorList[k];
					errorStr =errorStr+ "<p style='word-break:break-word; word-wrap:break-word;'>第"+errorArr[0]+"行，"+errorArr[1]+"</p>";
				}
				showMessageTxt(message.message+"成功删除"+result.sucCount+"条，失败"+result.failCount+"条！<br/>"+errorStr,"message","bccg");
			}
		}
    }, 2000);
}