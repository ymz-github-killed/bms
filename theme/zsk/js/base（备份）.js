;jQuery(function( $ ){
	
	//头部头像信息显示
	$(".headerRight").hover(function(){
		$(".headHover").show();
	},function(){
		$(".headHover").hide();
	});
	
	//导航
	$(".navLi").find("li").click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
	
	$(".manageNavLi").find("li").click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
	
	//翻页
	$(".search_up_city ").click(function(){
	   $(".search_up_list ").toggle();
	});
	$(".search_up_list").find('li').click(function(){
	   var changeNum = $(this).text();
	   $(this).parent().hide();
	   $(".search_up_city p").html(changeNum);
	});
	$(document).click(function(event){
		  if(!$(event.target).parents('.search_up').length && !$(event.target).parents('.search_up_list,.search_up_list2').length){
			  $(".search_up_list,.search_up_list2").find('li').removeClass('on');
			  $('.search_up_list,.search_up_list2').hide();
		  };
	});
	
	//新建用户信息
	$(".UserManageLine p").click(function(){
	 // alert(123)
	  $(this).parent().siblings(".UserManageShow ").toggle();
	   //$(".UserManageShow ").toggle();
	});
	
	
	//智能知识库弹层
	 jQuery('#isread-text').click(function(){
		 showid('arry');
	 });
	 
	  jQuery('#isread-text2').click(function(){
		 showid('arry2');
	 });
	   jQuery('#isread-text3').click(function(){
		 showid('arry3');
	 });
	 jQuery('#isread-text4').click(function(){
		 showid('arry4');
	 });;
	
	function showid(idname){
		var isIE = (document.all) ? true : false;
		//var isIE6 = isIE && ([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6);
		var isIE6 = isIE&&!window.XMLHttpRequest;
		var newbox = document.getElementById(idname);
		newbox.style.zIndex = "9999999";
		newbox.style.display = "block"
		newbox.style.position = !isIE6 ? "fixed" : "absolute";
		newbox.style.top = newbox.style.left = "50%";
		newbox.style.marginTop = -newbox.offsetHeight / 2 + "px";
		newbox.style.marginLeft = -newbox.offsetWidth / 2 + "px";
		var layer = document.createElement("div");
		layer.id = "layer";
		layer.style.width = layer.style.height = "100%";
		layer.style.position = !isIE6 ? "fixed" : "absolute";
		layer.style.top = layer.style.left = 0;
		layer.style.backgroundColor = "#888";
		layer.style.zIndex = "9999998";
		layer.style.opacity = "0.6";
		document.body.appendChild(layer);
	
		function layer_iestyle(){
			layer.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) +
			"px";
			layer.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) +
			"px";
		}
		function newbox_iestyle(){
			newbox.style.marginTop = document.documentElement.scrollTop - newbox.offsetHeight / 2 + "px";
			newbox.style.marginLeft = document.documentElement.scrollLeft - newbox.offsetWidth / 2 + "px";
		}
		if (isIE) {
			layer.style.filter = "alpha(opacity=60)";			
		}
		if (isIE6) {
			layer_iestyle();
			newbox_iestyle();
			window.attachEvent("onscroll", function(){
				newbox_iestyle();
			})
			window.attachEvent("onresize", layer_iestyle)
		}
	}
	
	
	/*点击展开，收起*/
	$(".dt_more").toggle(function(){
		//alert(1)
		$(this).children("img").attr("src","../images/wb_less.gif")
		var userDl = $(this).parents(".mouldLeft").find("dl.userManageDl");
		userDl.each(function(index, element) {
            if($(this).is(":hidden"))
			{
				$(this).show();
			}
        });
	},function(){
		$(this).children("img").attr("src","../images/wb_more.gif")
		var userDl = $(this).parents(".mouldLeft").find("dl.userManageDl");
		userDl.each(function(index, element) {
            if($(this).hasClass("dl_none"))
			{
				$(this).hide();
			}
        });
	})	
	

  /*日历*/
  $( ".startDate" ).datepicker({
		 changeMonth: true,
		 showOtherMonths: true,
		 selectOtherMonths: true
	});
	$( ".endDate" ).datepicker({
		 changeMonth: true,
		 showOtherMonths: true,
		 selectOtherMonths: true
	});
	
	//登录输入框获得焦点、失去焦点
	$('.login_input').focus(function(){
		$(this).addClass('focus');	
	});
	$(".login_input").blur(function(){
  		$(this).removeClass('focus');
	});	
	
	$("#checkbox_all").click(function(){
		/*$("input[name='checkbox01']").each(function(){
			  if($(this).attr('checked')==true){
			   $(this).attr( 'checked',false );
			  }else{
			   $(this).attr( 'checked',true );
			  };
		 });*/
		  $("input[name='checkbox01']").attr("checked", this.checked);
	})
	
	
	
});














	