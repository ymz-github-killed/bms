jQuery(function(){
	var functionId=jsonData.funcid;
	jQuery("#importForm").append("<input type='hidden' name='funcId' value='"+functionId+"'/>");
	jQuery(".btn_href").each(function(){
		this.href="javascript:;";
	});
	jQuery(".bt_back").attr("onClick","").bind("click",function(){back()});
	jQuery("#select").attr("onClick","").bind("click",function(){select()});
	jQuery(".bt_ensure").attr("onClick","").bind("click",function(){ensure()});
	jQuery("#success").change(function(){
	});
});
/**
 * 返回事件
 */
function back(){
	window.location.href = basePath + "func/funcIndex.controller";
}

function select(){
	jQuery("#file").click();
}

function ensure(){
//	var url = basePath+"/bms/adm/bmsrscfunc/importFunc.do  /importFunc/import.controller";
	var url = basePath+"bms/adm/bmsrscfunc/importFunc.do";
	jQuery("#importForm").attr("action",url);
	var nameFile = jQuery("#fileName").val();
	var name = nameFile.split(".");
	var i = name.length-1;
	if(nameFile == null || nameFile == ""){
		showMessageTxt("请选择需要导入的文件！","message","bccg");
		return false;
	}
	name[i] = name[i].toLowerCase();
	if(name[i]!="dat"){
		showMessageTxt("文件类型不支持！","message","bccg");
		return false;
	}
	jQuery("#importForm").submit();
	/**三秒后执行该操作*/
	/*setTimeout(function () { 
		var result = jQuery(document.getElementById("success").contentWindow.document.body).html();
		result = jQuery.trim(result);
		result = eval("("+result+")");
		var message = result.message;
		showMsg2(message);
    }, 3000);*/
}
function showMsg2(text){
	jQuery(".btn_href").attr("onclick","back()");
	showMessageTxt(text,"message","bccg");
}