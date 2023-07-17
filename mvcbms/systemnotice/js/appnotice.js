jQuery(function(){
	var notices = jsonData.noticesmap.list;
	notices = eval(notices);
	jQuery("#systmenotices").html("");
	for(var i in notices){
	var notice = "<li><span class=\"fr gray\">"+notices[i].useTime+"</span><a href=\"###\" onclick=\"showNotice('"+i+"')\" class=\"fl\">【"+notices[i].tab+"】"+notices[i].title+" </a><div class=\"clear\"></div></li>"
	jQuery("#systmenotices").append(notice);
	}
});

function showNotice(noticetab){
	var notices = jsonData.noticesmap.list;
	notices = eval(notices);
	for(var i in notices){
		if(i == noticetab){
			jQuery("#notices").hide();
			jQuery("#title_").html(notices[i].title);
			jQuery("#tab_").html(notices[i].tab);
			jQuery("#content_").html(notices[i].content=="null"?"&nbsp":notices[i].content);
			jQuery("#shownotice").show(1000);
		}
	}
}

function back(){
	jQuery("#shownotice").hide(1000);
	jQuery("#notices").show();
}