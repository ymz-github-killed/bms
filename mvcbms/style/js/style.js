document.write("<script src='"+basePath+"mvcbms/pub/js/strCheck.js' type='text/javascript'></script>");
jQuery(function(){
	

	$("#search_r [id='first']").bind("click",function(){find('search','first')});
	$("#search_r [id='before']").bind("click",function(){find('search','before')});
	$("#search_r [id='next']").bind("click",function(){find('search','next')});
	$("#search_r [id='end']").bind("click",function(){find('search','end')});
	$("#search_r [id='go']").bind("click",function(){find('search','go')});
	$("#import").bind("click",function(){importNewStyle()});
	$("#download").bind("click",function(){downloadTemplate()});
	$("#close").unbind("click").bind("click",function(){showList()});
	$("#qx").unbind("click").bind("click",function(){showList()});
	$("#qd").removeAttr("onclick");
	$("#qd").bind("click",function(){delete_a()});
	setPageMessage("search");
	search();
});

function search(){
	var searchData = jQuery("#search").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"styleQuery/queryStyle.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	pageInfoBean = result.pageDTO.pageInfoBean;
        	
        	//数据总条数
        	pagingMessage('search',pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"style");
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","delete_cg","deleteCg");
        }
    }); 
}

/**
 * 
 * @param tab 可选参数：first,end,before,next,changerowdispalyed
 * @param countPageNum 每页显示条数，可选参数；
 */

function find(formId,tab,countPageNum){
	//go第几页
	var goPage = jQuery("#gotoStyle").val();
	jQuery("#gotoStyle").val("");
	var url = basePath+"styleQuery/queryStyle.controller?t="+Math.random();	
	search(url,tab,"style",formId,countPageNum,goPage);
}
/**
 * 确认是否删除 消息提示框
 * @param text 提示消息
 */
function showDialog(text,id){
	$("#dialog_").text(text);
	jQuery("#qd").unbind("click").bind("click",function(){btn_confirm_delete(id)});
	show("cover","delete");
}
/**
 * 删除样式
 * @param id
 * @returns {Boolean}
 */
function delete_a(id){
	if(id=="1"){
		showMessageTxt("系统默认样式不能删除！","delete_cg","deleteCg");
		return false;
	}
	showDialog("确定删除吗?",id);
}


/**
 * 确认删除样式
 * @param id
 */
function btn_confirm_delete(id){
	hide('cover','delete');
	$.ajax({
		type:"get",
		cache:"false",
		url:basePath+"styleDelete/deleteStyle.controller?id="+id+"&t="+Math.random(),
		dataType:"json",
		success:function(result){
			showMessageTxt(result.message,"delete_cg","deleteCg");
			if(result.messageCode.indexOf("S")==0){
    			jQuery("#qd_").unbind("click").bind("click",function(){hide("cover","deleteCg");window.location.href=basePath+"style/list.controller";});
    			jQuery(".close").unbind("click").bind("click",function(){hide("cover","deleteCg");window.location.href=basePath+"style/list.controller";});
			}
		},
		error:function(){
	    	showMessageTxt("异常操作，请查看系统日志！","delete_cg","deleteCg");
	    }
	});
}
/**
 * 查看样式图片
 * @param id
 */
function showStyle(siPic){
	hide('cover','drysck');
	document.getElementById("image").src=basePath+siPic;
	show('cover','drysck');
}

/**
 * 返回到列表页
 */
function backtoList(){
	hide('cover','drys');
	window.location.href=basePath+"style/list.controller";
}
/**
 * 导出
 * @param id
 */
function export_a(id){
	window.location.href = basePath + "styleExport/export.controller?id="+id;
}
/**
 * 下载模板
 */
function downloadTemplate(){
	window.location.href=basePath+"styleTemplate/download.controller?t="+Math.random();
}
/**
 * 显示样式名称
 */
function import_a(siName,siCode){
	show('cover','drys');
	$("#siName").val(siName);
	$("#siCode").val(siCode);
	document.importStyle.siName.readOnly=true;
	document.importStyle.siCode.readOnly=true;
	jQuery("#save").unbind("click").bind("click",function(){importFileImage()});
}
/**
 * 隐藏弹出层并清空表单内容
 */
function showList(){
	var formObj = document.getElementById("importStyle");
	for(var i=0; i<formObj.elements.length; i++){
		if(formObj.elements[i].type == "text"){
		formObj.elements[i].value = "";
		} else if(formObj.elements[i].type == "file"){
			var file = formObj.elements[i];
			if(file.outerHTML){
			file.outerHTML = file.outerHTML;
			}else{
			file.value = ""; 
			}
		}
	}
	hide('cover','drys');
}
/**
 * 导入新样式
 */
function importNewStyle(){
	var formObj = document.getElementById("importStyle");
	for(var i=0; i<formObj.elements.length; i++){
		if(formObj.elements[i].type == "text"){
		formObj.elements[i].value = "";
		} else if(formObj.elements[i].type == "file"){
			var file = formObj.elements[i];
			if(file.outerHTML){
			file.outerHTML = file.outerHTML;
			}else{
			file.value = ""; 
			}
		}
	}
	show('cover','drys');
	document.importStyle.siName.readOnly=false;
	document.importStyle.siCode.readOnly=false;
	jQuery("#save").unbind("click").bind("click",function (){saveNewStyle()});
}
/**
 * 保存新增样式
 */
function saveNewStyle(){
	
	var siName=$("#siName").val();

	var siCode=$("#siCode").val();
	var searchData = jQuery("#importStyle").serializeArray();
	searchData = eval(searchData);
	if(siName==""){
		showMessageTxt("样式名不能为空","delete_cg","deleteCg");
	}else if(siCode==""){
		showMessageTxt("样式编码不能为空","delete_cg","deleteCg");
	}else if(countCharacters(siName)>50){
		showMessageTxt("样式名不能超多50个字符","delete_cg","deleteCg");
	}else
	  if (siCode.length>10){
		showMessageTxt("样式编码不能超多10个字符","delete_cg","deleteCg");
	}else{
		$.ajax({
			type:"post",
			dataType:"json",
			data:searchData,
			url:basePath+"styleImport/findByName.controller?t="+Math.random(),
			success:function(result){
				if(result==null){
					importFileImage();
				}else if(result.messageCode.indexOf("S")==0){
					showMessageTxt(result.message,"delete_cg","deleteCg");
				}else if(result.messageCode.indexOf("E")==0){
					showMessageTxt(result.message,"delete_cg","deleteCg");
				}
			},
			error:function(){
		    	showMessageTxt("异常操作，请查看系统日志！","delete_cg","deleteCg");
		    }
		});
	}
}
/**
 * 表单提交导入文件及图片
 * @returns {Boolean}
 */
var styleiframe=null;
function importFileImage(){
	var url=basePath+"styleImport/import.controller";
 	jQuery("#importStyle").attr("action",url);
	var userName=$("#userName").val();
	var fileName = jQuery("#fileName").val();
	var name = fileName.split(".");
	var i = name.length-1;
	if(fileName == null || fileName == ""){
		showMessageTxt("请选择需要导入的文件！","delete_cg","deleteCg");
		return false;
	} 
	name[i] = name[i].toLowerCase();
	if(name[i]!="xls" && name[i]!="xlsx"){
		showMessageTxt("文件类型不支持！","delete_cg","deleteCg");
		return false;
	}

	var imgPath=$("#imageName").val();
	 if (imgPath == "") {  
		 showMessageTxt("请选择上传图片！","delete_cg","deleteCg");  
         return ;  
     }  
	
     //判断上传图片的后缀名  
     var  path= imgPath.substr(imgPath.lastIndexOf('.') + 1);  
     path = path.toLowerCase();
     if (path != 'jpg' && path != 'gif'  
     && path != 'png' && path != 'bmp') {  
    	 showMessageTxt("图片类型不支持","delete_cg","deleteCg");  
         return ;  
     }  
    hide('cover','drys');
	document.forms[1].submit();
	styleiframe = setInterval("succ()",1000);
}
var iframeTemp = null;
function succ() { 
	var iframeTemp1 = jQuery(document.getElementById("success").contentWindow.document.body).html();
	if(iframeTemp1 !=iframeTemp && iframeTemp1 !='' ){
		iframeTemp = iframeTemp1;
		if(iframeTemp!='' && iframeTemp!=null)
		var result = jQuery.trim(iframeTemp);
		result = eval("("+result+")");
		var message = eval("("+result.message+")");
		if(message.messageCode.indexOf("S")==0){
			showMessageTxt(message.message,"delete_cg","deleteCg");
			$("#qd_").unbind("click").bind("click",function(){search();});
			$(".close").unbind("click").bind("click",function(){search();});
			clearInterval(styleiframe); 
			return;
		}else if(message.messageCode.indexOf("E")==0){
			showMessageTxt(message.message,"delete_cg","deleteCg");
			$("#qd_").unbind("click").bind("click",function(){backtoList();});
			$(".close").unbind("click").bind("click",function(){backtoList();});
			clearInterval(styleiframe); 
			return;
		}else{
			var errorStr="";
			var errorList =eval(result.errorMsg);
			for(var k in errorList){
				var errorArr = errorList[k];
				errorStr =errorStr+ "<p>第"+errorArr[0]+"行，"+errorArr[1]+"</p>";
			}
			//errorStr = errorStr.substr(0,(errorStr.length-1));
			
			showMessageTxt(message.message+"成功"+result.sucNum+"条，失败"+result.failNum+"条！<br/>"+errorStr,"delete_cg","deleteCg");
			//showMessageTxt(message.message+"成功"+result.sucNum+"条，失败"+result.failNum+"条！<br/>"+"第"+errorStr+"行失败！","delete_cg","deleteCg");
			hide('cover','drys');
			$("#qd_").unbind("click").bind("click",function(){backtoList();});
			$(".close").unbind("click").bind("click",function(){backtoList();});
			clearInterval(styleiframe); 
			return;
		}
	}
}