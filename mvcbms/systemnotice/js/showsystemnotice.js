var noticeJson=jsonData.noticeBean;
jQuery(function (){
	$(".back").bind("click",function(){window.location.href=basePath+"systemNotice/list.controller";});	

	for(var k in noticeJson){
		var el=jQuery("#"+k+"_");
		if(el){
			el.text(noticeJson[k]== null ? "" : noticeJson[k]);
		}
	}
	if(noticeJson.status=="1"){
		$("#status").text("是");
	}else{
		$("#status").text("否");
	}
});