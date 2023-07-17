document.write("<script src='"+basePath+"mvcbms/pub/js/strCheck.js' type='text/javascript'></script>");
jQuery(function(){
	jQuery(".back").bind("click",function(){btn_click_back()});
	jQuery(".reset").bind("click",function(){btn_click_reset()});
	document.getElementById('save').onclick = "";
	jQuery(".save").bind("click",function(){btn_click_save()});
	jQuery("#search").append("<input type='hidden' id='id_' name='noticeBean.id'/>");
	var noticeBean=jsonData.noticeBean;
	if(noticeBean!=null ){
		for(var k in noticeBean){
			var el=$("#"+k+"_");
			if(el){
				el.val(noticeBean[k]==null ? "":noticeBean[k]);
			}
		}
		
		var radioStatus = "input[name='noticeBean.status'][value='"+noticeBean.status+"']";
		/*$(radioStatus).attr("checked",true);*/
		$(radioStatus).get(0).checked=true;

	}
	
});
/**
 * 点击保存事件
 * @returns {Boolean}
 */
function btn_click_save(){
	var validateArr = [[],[]];
	validateArr[0]=['title_','标题',100,1,1];
	validateArr[1]=['tab_','公告标记',10,0,1];
	validateArr[2]=['content_','公告内容',800,0,1];
    var bool=checkStr1(validateArr);
    if(bool != null){
		showMessageTxt(bool,"message","bccg");
		return false;
	}
	submitData();
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
		url:basePath+"editNotice/addNotice.controller?t="+Math.random(),
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
	window.location.href = basePath+"notice/list.controller";
}
/**
 * 返回事件
 */
function btn_click_back(){
	window.location.href=basePath+"notice/list.controller";
}
function btn_click_reset(){
	var noticeBean=jsonData.noticeBean;
	if(noticeBean != null){
		for (var k in noticeBean){
			var el = jQuery('#' + k + '_');
			if (el)
				el.val(noticeBean[k]==null?"":noticeBean[k]);
		}
		
		var radioStatus = "input[name='noticeBean.status'][value='"+noticeBean.status+"']";
	
		/*$(radioStatus).attr("checked",true);*/
		$(radioStatus).get(0).checked=true;
	}else{
		document.getElementById("search").reset();
		jQuery("input [name='noticeBean.status'][value='1']").attr("checked",true);
	}
}