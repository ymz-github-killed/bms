var Validate = {
		
		/**
		 * 数字
		 */
		num:function(obj){
			$(obj).change(function(){
				regReplace(/[^\d]+/g,$(obj));
			});
		},
		
		/**
		 * 英文字符
		 */
		chars:function(obj){
			$(obj).change(function(e){
					regReplace(/[^a-zA-Z]+/g,$(obj));
			});
		},
		/**
		 * 非汉字
		 */
		notZh:function(obj){
			$(obj).change(function(){
				regReplace(/[\u4E00-\u9FA5]+/g,$(obj));
			});
		},
		
		/**
		 * 中文
		 */
		cn:function(obj){
			$(obj).change(function(){
				regReplace(/[^\u4E00-\u9FA5]+/g,$(obj));
			});
		},
		
		/**
		 * 英文、数字
		 */
		charsNum:function(obj){
			$(obj).change(function(){
					regReplace(/[^a-zA-Z0-9]+/g,$(obj));
			});
		},
		/**
		 * 数字、字母、中文
		 */
		allChar:function(obj){
			$(obj).change(function(){
					regReplace(/[^a-zA-Z0-9\u4E00-\u9FA5]+/g,$(obj));
				});
		},
		
		nothtml: function(obj){
			$(obj).change(function(){
				regReplace(/[<>]+/g,$(obj));
			});
		},
		//---------------------------------------------------------
		/**
		 * 数字
		 */
		validateNum:function(obj){
				$(obj).val(regReplace(/[^0-9]+/g,$(obj)));
				
		},
		
		/**
		 * 英文字符
		 */
		validateChars:function(obj){
				$(obj).val(regReplace(/[^\w]+/g,$(obj)));
		},
		/**
		 * 非中文
		 */
		validateNotCn:function(obj){
				$(obj).val(regReplace(/[\u4E00-\u9FA5]+/g,$(obj)));
		},
		
		/**
		 * 中文
		 */
		validateCn:function(obj){
				$(obj).val(regReplace(/[^\u4E00-\u9FA5]+/g,$(obj)));
		},
		
		/**
		 * 英文、数字
		 */
		validateCharsNum:function(obj){
				$(obj).val(regReplace(/[^a-zA-Z0-9\x20]+/g,$(obj)));
		},
		/**
		 * 数字、字母、中文
		 */
		validateAllChar:function(obj){
			$(obj).val(regReplace(/[^a-zA-Z0-9\u4E00-\u9FA5]+/g,$(obj)));
		},
		/**
		 * 字母、中文
		 */
		validateNotNum:function(obj){
			$(obj).val(regReplace(/[^a-zA-Z\u4E00-\u9FA5]+/g,$(obj)));
		},
		
		validateNothtml: function(obj){
			$(obj).val(regReplace(/[><]+/g,$(obj)));
		}
		
}


function regReplace(reg,obj){
	var bool=reg.test($.trim($(obj).val()));
	if(bool){
		$(obj).val($(obj).val().replace(reg,''));
		$(obj).focus();
		CmsMain.error("不合法的字符被替过滤了！");
	}
	return $(obj).val();

}








<!--
///////////////////////////////////////////////////////////////////////////////
// 功能：通过jquery动态添加或删除一个附件div选项                                        //
// 多附件上传                                                                          //
//////////////////////////////////////////////////////////////////////////////
// 文件增长的索引
var attachmentTotal = 1;
// 文件的数量
var attachmentCounter = 0;
 // 附件的最大个数
var attachmentLimit = 5; 
// 构造模板
var attachmentTemplate = '';
attachmentTemplate += '<div id="fileDiv_#attachmentCounter#" style="clear:both;width:650px;">';
attachmentTemplate += '	<div>';
attachmentTemplate += '		<span style="width: 47px;display:inline-block;padding-right:7px;text-align:right;font-size:14px;font-weight:bold;">文件：</span>';
attachmentTemplate += '		<INPUT type="text" size="45" style="width:345px;" name="attachment#attachmentCounter#" id="attachment#attachmentCounter#" contentEditable="false"/>';
attachmentTemplate += '　<img src="images/menu_liu.jpg" style="border:0px solid; cursor: hand;position:relative;top:10px;left:5px;" class="hand" /><img src="images/menu_shanchu.jpg" type="button" onclick=delAttachmentField("#attachmentCounter#") value="删除" style="border:0px solid; cursor: hand;position:relative;top:10px;left:5px;" class="hand" />';
attachmentTemplate += '	</div>';
// attachmentTemplate += '	<hr>';
attachmentTemplate += '</div>';
// 添加
function addAttachmentField() {
	if (attachmentCounter < attachmentLimit) {
		var s = attachmentTemplate.replace(/#attachmentCounter#/g, attachmentTotal);
		 $("#attachmentFields").append(s);
		attachmentTotal = attachmentTotal + 1;
		attachmentCounter = attachmentCounter + 1;
		if (attachmentCounter == attachmentLimit) {
			$("#btnAddFile").attr("disabled", "disabled");
		}
	} else {
		// 最多添加 attachmentLimit 个附件
		alert("最多使用[" + attachmentLimit + "]个附件");
	}
}
// 删除
function delAttachmentField(index) {
	$("#fileDiv_" + index).remove();
	$("#fileDiv_part2_" + index).remove();
	attachmentCounter = attachmentCounter - 1;
	if (attachmentCounter < attachmentLimit) {
		$("#btnAddFile").removeAttr("disabled");
	}
}
// 添加项
function add_option(value){
	var oOption=new Option(value,value); 
    var selectObj = document.getElementById("fileselect");
    selectObj.options[selectObj.length]=oOption; 
}
// 删除所选中项
function del_selecetd(){
	var selectObj = document.getElementById("fileselect");
	if(selectObj.selectedIndex!=-1 && selectObj.selectedIndex<=selectObj.length){
		selectObj.remove(selectObj.selectedIndex);
	}else{
		alert("请选择要删除的项");
	}
}
// 粘贴处理文件
function handlefile(){
	var attachment;
	attachment = document.getElementById("attachment0").value;
	if(attachment!="" && !fileisExist(attachment)){
		add_option(attachment);
	}
	for(var k=0;k<attachmentCounter;k++){
		 attachment = document.getElementById("attachment"+(k+1)).value;
		 if(attachment!="" && !fileisExist(attachment)){
			add_option(attachment);
		 }
	}
}
// 判断是否存在导入的文件列表中
function fileisExist(attachmentname){
	var selectObj = document.getElementById("fileselect");
	for(i=0;i<selectObj.length;i++){
		var value = selectObj.options[i].value;
		if(value==attachmentname){
			return true;
		}
	}
	return false;	
}

// 手工采集提交验证
function byhandvalidate(){
	var title = document.getElementsByName("title")[0].value;	
	if(title==""){
		alert("标题不能为空");
		return false;
	}
	
	var taskInDatabaseColumn = document.getElementsByName("incColumn")[0].value;
	var taskInDatabaseSubject = document.getElementsByName("incSubject")[0].value;
	if(taskInDatabaseColumn=="" && taskInDatabaseSubject==""){
		alert("入库栏目和入库专题不能同时为空");
		return false;
	}
	
	var validateFlag = true;
	for(var k=0;k<attachmentCounter+1;k++){
	  attachment = document.getElementById("attachment"+(k)).value;
	  if(attachment!=""){
			validateFlag = extvalidate(attachment);
			if(!validateFlag){
				alert("请导入系统指定的文件类型");
				return false;
			}
	  }else{
	  	alert("导入文件不能为空");
	  	return false;
	  }
	}
	$("input[type=submit]").attr("disabled", "disabled");
	$("input[type=submit]").val("正在提交, 请稍候...");
}
// 扩展名验证函数
function extvalidate(filepath){
	var arr = filepath.split(".");
	// HTML；XML；TXT；DOC；RTF；PDF；JPEG；GIF;ZIP // js对前台扩展名进行验证
	var tempExt = arr[arr.length-1].toLowerCase();
    if(tempExt!="html" && tempExt!="htm" && 
    tempExt!="xml" && tempExt!="txt" && tempExt!="doc" && 
    tempExt!="rtf" && tempExt!="pdf" && tempExt!="jpeg"  
	&& tempExt!="gif" && tempExt!="zip" && tempExt!="jpg"){
		return false;
	}
	return true;
}
// js获取指定目录下的文件夹名称及文件名称(暂时不用,可做参考)
function searchFiles(){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var f = fso.GetFolder(document.all.filefloder.value);
    var fc = new Enumerator(f.files);
    var s = "";
    for (; !fc.atEnd(); fc.moveNext())
        {
            s += fc.item();
            s += "<br/>";
        }
        fk = new Enumerator(f.SubFolders);
        for (; !fk.atEnd(); fk.moveNext())
        {
        s += fk.item();
        s += "<br/>";
        }
        textarea.innerHTML = s;
}
//显示频道
function showChannelTreeSingleSelect(){
	//selectedChannelIds=applyForm.pubColumns.value;
	var selectNodeNo = myform.flChannelIndex.value;
	var url = "/cms4/cms/channel/treeCmsChannelSingleSelect.do?selectNodeNo="+selectNodeNo;
	var retValue = window.showModalDialog(url,window,"dialogWidth:500px;dialogHeight:500px;center:yes;");
	if( retValue!=null ){
		myform.flChannelIndex.value = retValue[0];
		myform.incColumn.value = retValue[1];
	}
}
//弹出窗口选择专题功能
function chooseSubject(ctrlobj,webContext,event){
	showx = event.screenX - event.offsetX +20 ; // + deltaX;
	showy = event.screenY - event.offsetY + 20; // + deltaY;
	width = 450;
	height = 300;
	oldName = document.myform.incSubject.value;
	url=webContext+"/gms/task/showallincsubject.do";
	// alert(url);
	retval = window.showModalDialog(url, "", "dialogWidth:"+width+"px; dialogHeight:"+height+"px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:yes; directories:yes;scrollbars:yes;Resizable=yes;");
	if( retval != null ){
		ctrlobj.value = retval;
	}
}
function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}
//-->