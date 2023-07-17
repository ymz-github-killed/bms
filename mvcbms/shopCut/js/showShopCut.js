var shopCutData=jsonData.shopCutBean;
jQuery(function (){
	$(".back").bind("click",function(){window.location.href=basePath+"shopCut/list.controller";});
	for(var k in shopCutData){
		var el= jQuery('#' + k +"_");
		if(el){
			el.text(shopCutData[k]==null?"":shopCutData[k]);
		}
	}
});