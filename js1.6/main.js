
var CmsMain = {
	globalMessageTimeout:false,
	msg : function(msg) {
		if(CmsMain.globalMessageTimeout)
		{
			clearTimeout(CmsMain.globalMessageTimeout);
			CmsMain.globalMessageTimeout = false;
		}
		
		$('#message').html(msg);
		$('#message').css( {
			"color" : "#fff"
		})

		$('#message').fadeIn('slow');
		CmsMain.globalMessageTimeout = setTimeout(function() {
			$('#message').fadeOut('slow');
		}, 2000)
	},
	error : function(msg) {
		if(CmsMain.globalMessageTimeout)
		{
			clearTimeout(CmsMain.globalMessageTimeout);
			CmsMain.globalMessageTimeout = false;
		}
		
		$('#message').html(msg);
		$('#message').css( {
			"color" : "red"
		})

		$('#message').fadeIn('slow');
		CmsMain.globalMessageTimeout = setTimeout(function() {
			$('#message').fadeOut('slow');
		}, 5000)
	},
	
	closeMessage: function(){
		
	},
	
	resize : function() {
		$('#message').css( {
			"left" : ($(window).width() / 2 - 150) + "px"
		});
		$('#container').css( {
			"overflow-x" : "hidden",
			"overflow-y" : "auto",
			"height" : ($(window).height() - 123) + "px",
			"width" : ($(window).width() - 40) + "px"
		});
	},
	
	tooltip:function(){
		
	},
	
	/**
	 * window.open(code)
	 */
	runCode: function(code) {
	    var winname = window.open("", "_blank", "");
	    winname.document.open("text/html", "replace");
	    winname.document.write(code);
	    winname.document.close();
	},
	
	tools: function(ev){
		$("#tools").css({top:"90px",left:(($(window).width() -140) + "px")});
		$("#tools").slideToggle('slow');
	},
	
	showTool: function(width, height,src){
		$("#cms_tools").width(width);
		$("#cms_tools").height(height);
		$("#cms_tools >iframe").attr("src",src);
		$("#cms_tools").modal();
		$("#tools").slideUp('slow');
	},
	
	editor:function(obj){
		obj = $(obj);
		$("#cms_moreEditor >textarea").val(obj.val());
		$("#cms_moreEditor").modal();
		_globalEditorObject = obj;
	},
	editorOK:function(){
		_globalEditorObject.val($("#cms_moreEditor >textarea").val());
		$.modal.close();
	}
};

var _globalEditorObject;

$(document).ready(function() {
	CmsMain.resize();
	
	$("#tools").hover(function(){
		$(this).children().children("ul").show();
	},function(){
		$(this).children().children("ul").hide();
	});
	$("#tools").toggle(function(){
		$(this).children().children("ul").show();
		},function(){
		$(this).children().children("ul").hide();
	});
	
	
});

$(window).resize(function() {
	CmsMain.resize();
});