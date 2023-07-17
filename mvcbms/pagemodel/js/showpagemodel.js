var appInfoData = jsonData.appAddBean;
jQuery(function(){
	$(".back").bind("click",function(){window.location.href=basePath+"pageModel/list.controller";});
	for (var k in appInfoData){
		var el = jQuery('#' + k + '_');
		if (el){
			el.text(appInfoData[k]==null?"":appInfoData[k]);	
		}
	} 
	if(appInfoData.isTop == '1')
		$('#isTop').text('是');
	else{
		$('#isTop').text('否');
	}
	var btnList = jsonData.titleBtnList;
	if(btnList != null && btnList.length > 0){
		for(var i = 0 ; i < btnList.length; i++){
			jQuery("#btn_position").append("<tr><td class='word' style='word-wrap:break-word;overflow:hidden;' title='"+btnList[i].btnName+"'>"+btnList[i].btnName+"</td><td class='word' style='word-wrap:break-word;overflow:hidden;' title='"+btnList[i].btnUrl+"'>"+btnList[i].btnUrl+"</td><td class='word' style='word-wrap:break-word;overflow:hidden;' title='"+btnList[i].btnSequence+"'>"+btnList[i].btnSequence+"</td></tr>");
		}
	}else{
		jQuery("#btnList").html("无");
	}
});