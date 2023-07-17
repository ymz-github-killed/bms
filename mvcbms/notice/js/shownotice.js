var noticeData=jsonData.noticeBean
jQuery(function (){
	$(".back").bind("click",function(){window.location.href=basePath+"notice/list.controller";});
	for(var k in noticeData){
		var el= jQuery('#' + k +"_");
		if(el){
			el.text(noticeData[k]==null?"":noticeData[k]);
		}
	}
	if(noticeData.status=="1"){
		$("#status").text("是");
	}else{
		$("#status").text("否");
	}
});