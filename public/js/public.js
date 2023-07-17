/*
*  Author: MengDasheng
*  Time  : 2010-04-12 
*  
*/

/*
 *  Left Tree
 * 
 */



 
jQuery(function($){
	
	var widthSize = document.documentElement.clientWidth;
	var heightSize = document.documentElement.clientHeight;
	//alert(widthSize+" , "+heightSize)
	
	$('a,img,button,input[type="button"],input[type="submit"],input[type="image"],input[type="checkbox"],input[type="reset"]').bind('focus',function(){
		if(this.blur){
			this.blur();
		}
	});
		
	//  KnowLib js
	
	$('.openRoom').click(function(){
		$('.roomBox').show().css({'top':heightSize/2-100 ,'left':widthSize/2-200});
	});
	$('.editRoom').click(function(){
		$('.editBox').show().css({'top':heightSize/2-100 , 'left':widthSize/2-200});
	});
	$('.addCategoryBtn').click(function(){
		$('.addCategory').show().css({'top':heightSize/2-100 , 'left':widthSize/2-200});
	});
	$('.comCategoryBtn').click(function(){
		$('.comCategory').show().css({'top':heightSize/2 , 'left':widthSize/2-200});
	});
	$('.gotoCategoryBtn').click(function(){
		$('.gotoCategory').show().css({'top':heightSize/2-100 , 'left':widthSize/2-200});
	});
	$('.closeRoom').click(function(){
		$('.editBox,.roomBox,.addCategory,.comCategory,.gotoCategory').hide();
	})
	
	
	$('.t_table01 tr').eq(0).addClass('OneLine');
 
	$('.t_table01 tr').next('tr').hover(
		function(){
			$(this).addClass('TableHover');
		},
		function(){
			$(this).removeClass('TableHover');
		}
	)
 
	$('.t_table02 tr').hover(
		function(){
			$(this).addClass('TableHover');
		},
		function(){
			$(this).removeClass('TableHover');
		}
	)	
	//liukun zhendui  tab
	
		
	$(".brandTab").switchTab({
		defaultIndex:0,
		titOnClassName: "hover",
		titCell:"ol li",
		mainCell: ".comCont",
		delayTime: 0,
		interTime: 0,
		trigger: "mouseover",
		effect: "",
		omitLinks: false,
		debug: ""
	});
	
	$(".leftTab_1").switchTab({
		defaultIndex:0,
		titOnClassName: "hover",
		titCell: "ul li",
		mainCell: ".leftRcom",
		delayTime: 0,
		interTime: 0,
		trigger: "mouseover",
		effect: "",
		omitLinks: false,
		debug: ""
	});
	
	$("#Tab1").switchTab({
		defaultIndex:0,
		titOnClassName: "hover",
		titCell: ".one",
		mainCell: ".con_one",
		delayTime: 0,
		interTime: 0,
		trigger: "click",
		effect: "",
		omitLinks: false,
		debug: ""
	});
	$('.addTextNote').click(function (){
		var tableText = "<tr><td height='26'><input type='checkbox' name='checkbox8' />&nbsp;自定义元素</td><td height='26' colspan='3'><input name='textfield7' type='text' value='元素名称' class='T_Erline' />&nbsp;<input name='textfield12' type='text' value='元素内容'  style='width:250px;' class='T_Erline'/></td></tr>";
		$('#addTable').before(tableText);
	})
	$('.addLogoPic').click(function (){
		var tableLogoPic = "<tr><td height='26'><input type='checkbox' name='checkbox8' />&nbsp;自定义元素</td><td height='26' colspan='3'><input name='textfield7' type='text' value='元素名称' class='T_Erline' />&nbsp;<input name='textfield12' type='text'   style='width:200px;' class='T_Erline'/>&nbsp;<input  type='button' class='Tbutton ml10' value='浏览'/></td></tr>";
		$('#addTable').before(tableLogoPic);
	})
	
	//周报查询 -> 部门工作查询
	$('.openListBox').click(function(){
		$('.workListBox').show();
	})
	$('.openList').toggle(
		function(){
			$('.workList').show();
			$(this).css('background-position','left bottom');
		},
		function(){
			$('.workList').hide();
			$(this).css('background-position','left top');
		})

/*FAQjs  tianna*/
	$(document).ready(function(){
		
		//hide message_body after the first one
		$(".message_list .message_body:gt(0)").hide();
		
		//hide message li after the 5th
	
		
		//toggle message_body
		$(".message_head").click(function(){
			$(this).next(".message_body").slideToggle(500)
			return false;
		});
	
		//collapse all messages
		$(".collpase_all_message").click(function(){
			$(".message_body").slideUp(500)
			return false;
		});
	
		//show all messages
		$(".show_all_message").click(function(){
			$(this).hide()
			$(".show_recent_only").show()
			return false;
		});
	
		//show recent messages only
		$(".show_recent_only").click(function(){
			$(this).hide()
			$(".show_all_message").show()
			return false;
		});
	
	});
	
	
})