
jQuery(function(){
	var appList = jsonData.bmsPageModelList;
	if(jQuery.isEmptyObject(appList)){
		jQuery("#app").html("<p><font size='5px'>欢迎使用电渠运营管理系统！</font></p>");
		return false;
	}
	var appboxtemp ='<div id="temp" class=""><div class="fl" _style="heigth:{pmHeight}px,width:{pmWidth}px;" ><h2><span class="titleLeft fl"></span><span class="titleCent fl" _style="width:{pmWidths}px"><label class="fl">{pmName}</label>{buttons}</span><span class="titleRight fl"></span><div class="clear"></div></h2><iframe src="{pmUrl}" _width="{pmWidthss}" _style="height:{pmHeights}px;border:1px solid #ccc" scrolling="yes" frameborder="0"  class="home_iframe2"></iframe></div></div>';
	for(var i in appList){
		var appbox = appboxtemp;
		appbox =appbox.replace(new RegExp("{pmName}", 'gm'),appList[i].pmName);
		appbox =appbox.replace("{pmUrl}",appList[i].pmUrl);
		appbox =appbox.replace(new RegExp("_style", 'gm'),"style");
		appbox =appbox.replace(new RegExp("_width", 'gm'),"width");
		appbox =appbox.replace(new RegExp("{pmWidth}", 'gm'),appList[i].pmWidth);
		appbox =appbox.replace("{pmHeight}",appList[i].pmHeight);
		appbox =appbox.replace("{pmHeights}",appList[i].pmHeight-34);
		appbox =appbox.replace("{pmWidth}",appList[i].pmWidth);
		appbox =appbox.replace("{pmWidths}",appList[i].pmWidth-18);
		appbox =appbox.replace("{pmWidthss}",appList[i].pmWidth-2);
		var buttons =  appList[i].bmsPageModelButtons
		if(!jQuery.isEmptyObject(buttons)){
			var buttontemp = "";
			for(var j in buttons){
				var button = "<a class=\"fr\" onclick=\"showApp('"+buttons[j].pmbUrl+"','"+buttons[j].pmbName+"')\">"+buttons[j].pmbName+"</a>";
				buttontemp+=button;
			}
			appbox =appbox.replace("{buttons}",buttontemp);
		}else{
			appbox =appbox.replace("{buttons}",'&nbsp');
		}
		jQuery("#app").append(appbox);
	}
	
	jQuery('#content').scrollTop(10);
});

function showApp(url,title){
	try{
		window.parent.addTab(url,title);
	}catch (e) {
		checkButtons(url);
	}
}
function checkButtons(url){
	jQuery("#check").removeClass('undis');
	jQuery("#checkbtns").attr("src",url);
}




















