jQuery(function(){
	jQuery(".cancel_href").each(function(){
		this.href = "###";
	});
});
//jQuery("#userRealName").blur(function(){
//		if(this.val()!=""){
//			var s = this.val();
//			this.val(trim(s));
//		}
//	});
//});
//function trim(s){
//	 return s.replace(/(^\s*)|(\s*$)/g,'');
//}

jQuery.ajaxSetup({      
    contentType:"application/x-www-form-urlencoded;charset=utf-8",      
    complete:function(XMLHttpRequest,textStatus){   
    	// 通过XMLHttpRequest取得响应头，sessionstatus，
        var sessionstatus=XMLHttpRequest.getResponseHeader("sessionstatus"); 
        var loginUrl=XMLHttpRequest.getResponseHeader("loginUrl"); 
        if(sessionstatus=="sessionOut"){ 
            window.location.replace(loginUrl);      
        }   
    }   
});
/**
 * 消息提示框
 * @param text 提示消息
 */
function showMessageTxt(text,msgid,divid){
	$("#"+divid+" [id='"+msgid+"']").html(text);
	show("cover",divid);
}