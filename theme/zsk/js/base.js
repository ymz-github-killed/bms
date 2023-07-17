;jQuery(function( $ ){
	
	//头部头像信息显示
	$(".head_menu").hover(function(){
		$(".head_menu_list").show();
		$(this).addClass("head_menuWhite");
	},function(){
		$(".head_menu_list").hide();
		$(this).removeClass("head_menuWhite");
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
	
	$(".UserManageLine p").live('click',function(){
		 $(this).parent().siblings(".UserManageShow ").toggle();
	})
	
	
	
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
	 });
	 jQuery('#isread-text5').click(function(){
		 showid('arry5');
	 });
	 jQuery('#isread-text6').click(function(){
		 showid('arry6');
	 });
	  /*大弹层*/
	  jQuery('#isread-text7').click(function(){
		 showid('arry');
	 });
	 
	 /*2次弹层*/
	 jQuery('.allNoPass').click(function(){
		
		 //$("#layer").show();
		
		$(this).parents('.transact_tc_box').fadeOut();
	    showid('arry7');
	
	 });
	 
	 
	 
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
	
	$('.closeTransact,#layer').click(function(){
		$(this).parents('.transact_tc_box').fadeOut();
		$('div#layer').remove();
	});
	
	
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
/*  $( ".startDate" ).datepicker({
		 changeMonth: true,
		 showOtherMonths: true,
		 selectOtherMonths: true,
		 showTime: true,
		 duration: '',
            showTime: true,
            constrainInput: false
	});
	*/
	$( ".startDate" ).datetimepicker(); 
	
	/*$( ".endDate" ).datepicker({
		 changeMonth: true,
		 showOtherMonths: true,
		 selectOtherMonths: true,
		 showTime: true,
		 duration: '',
            showTime: true,
            constrainInput: false
	});
	*/
	$( ".endDate" ).datetimepicker();
	
	
	
	$('#query').click(function(){
			var startDate = $('.startDate').val();
			var endDate = $('.endDate').val();
			var startY = parseInt(startDate.slice(0,4)),
				startM = parseInt(startDate.slice(5,7)),
				startD = parseInt(startDate.slice(8,10));
				startHours = parseInt(startDate.slice(11,13));
				startMins = parseInt(startDate.slice(14,16));
				
			var endY = parseInt(endDate.slice(0,4)),
				endM = parseInt(endDate.slice(5,7)),
				endD = parseInt(endDate.slice(8,10));
				endHours = parseInt(endDate.slice(11,13));
				endMins = parseInt(endDate.slice(14,16));
				
				/*console.info(startY)
				console.info(startM)
				console.info(startD)
				console.info(startHours)
				console.info(startMins)*/
				
			if( (startY > endY) || (startY == endY && startM > endM) || (startY == endY && startM == endM && startD > endD) || (startY == endY && startM == endM && startD == endD && startHours > endHours) || (startY == endY && startM == endM && startD == endD && startHours == endHours && startMins > endMins) ){
				alert("尊敬的客户您好！开始时间不能大于结束时间，请重新选择！")
				return false;
				
			}
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
	
	
	$("#check_all1").click(function(){
	
	  $("input[name='checkbox02']").attr("checked", this.checked);
	})
	
	
	$("#check_all2").click(function(){
	
	  $("input[name='checkbox03']").attr("checked", this.checked);
	})
	$("#check_all3").click(function(){
	
	  $("input[name='checkbox04']").attr("checked", this.checked);
	})
	
	
	$(".search_zone input[type='text']").click(function(){
			//alert(123)
			$(this).siblings(".search_zone_hide").show();
			
})
/*$(".dial_input").click(function(){
	$(this).siblings().children(".dial_input_hide").hide();
})
*/

	$(".search_zone_hide ul li em").click(function(){
		var text = $(this).text();
		//var text1 = $(this).parent().parent().siblings(".dial_tip").val(text)
		
		$(this).parents(".search_zone_hide").hide();
		$(this).parents(".search_zone").children("input").val(text);
		//alert(text1)
	})
	
	
	
	$(document).click(function(event){
		if(!$(event.target).parents('.search_zone_hide').length && !$(event.target).parents('.search_zone').length)
		{
		$('.search_zone_hide').hide();
		};
		
	});
	
	/*上传文件*/
	$("dd.file_up_dd span").live("click",function(){
		
		$(this).parents("li").remove();
	})
	
	$("input.del_UserManage").live("click",function(){
		
		$(this).parents(".UserManage").remove();
	})
	

	
	$("#add_struct").click(function(){
		/* add_html += ' <div class="space-40"></div>';
		 add_html += '<div class="UserManage">';
		 add_html += '<div class="UserManageLine">';
		 add_html += '<span style="width:auto">结构化知识2</span><p>收起/打开</p></div>';
		 add_html += '<div class="space-20"></div>';*/
		
		
		//var add_html = '\<!--#include virtual="/include/add_html.html"\-->'
		  
		// $(".newUser").append(add_html);
		 var add_html = "<div class = 'add_div1'></div>"
		
		$(".newUser").append(add_html);
		
		$("div.add_div1").load('/include/add_html.html');
		
		
	})
	
	$("#add_ask").click(function(){
		
		 var add_html1 = "<div class = 'add_div2'></div>"
		
		$(".newUser").append(add_html1);
		
		$("div.add_div2").load('/include/add_html2.html');
		
		
	})
		
	$("#pldr").one("click",function(){
		
		
		 var add_html2 = "<div class = 'add_div3'></div>"
		$(".newUser").append(add_html2);
		
		$("div.add_div3").load('/include/add_html3.html');
		
		
	})
	/*发起-采编审核任务*/
	$("#select_task").change(function(){
		if(this.value == 0)
		{
			$(".select_change_area").hide();
			$(".select_change_area_city").show();
			$("#time_title span").text(' 有效时限：');
		}
		
		else if(this.value == 1)
		{
			$(".select_change_area").hide();
			$(".select_change_area_city").show();
			$("#time_title span").text(' 有效时限：');
		}
		
		else if(this.value == 2)
		{
			$(".select_change_area").show();
			$(".select_change_area_city").show();
			$("#time_title span").text(' 有效时限：');
		}
		
		else
		{
			$(".select_change_area").show();
			$(".select_change_area_city").hide();
			$(".cbsx").show();
			$("#time_title span").text(' 生效时限：');
		}
	})
	
	$(".callWait_list li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	
	
	$(".btnCertain").click(function(){
		//$(".selectF option:first").prop("selected", 'selected');
	   var SelectArr = $("select")
          for (var i = 0; i < SelectArr.length; i++) {
              SelectArr[i].options[0].selected = true; 
          };
	   $('input:text').val('')
	   
	});
	//liuyang20141225添加
	$(".zslb_zksstj>a").click(function(){
		$(this).parent().hide();
		$(".zslb_sstj_yc").show();
		$(".zslb_sqsstj").show();
	});
	$(".zslb_sqsstj>a").click(function(){
		$(this).parent().hide();
		$(".zslb_sstj_yc").hide();
		$(".zslb_zksstj").show();
	});
	$(".zslb_sstj ul li,.zslb_sstj2 ul li,.zslb_sstj3 ul li,.zslb_sstj4 ul li").click(function(){
		if($(this).hasClass("hover"))
		{
			$(this).removeClass("hover");
		}
		else
		{
			$(this).addClass("hover").siblings().removeClass("hover")
		}
	})
	
 //删除表格整行
 $(".del_tr").click(function(){
	if(confirm("确定要删除这一行数据吗？"))
	{
		$(this).parents("tr").remove();
	}
	else
	{
		return false;
	}
})

//知识列表选择省市


$(".zslb_sstj ul li.city1").not(":first").hover(function(){
	$(this).css("z-index",1).siblings("li.city1").css("z-index",0)
	$(this).children("ul").css("z-index",2).show().parent().siblings("li.city1").children("ul").hide();;
	$(this).addClass("actived").siblings().removeClass("actived");
	
},function(){
    $(this).css("z-index",0);
	
	$(this).children("ul").hide();
	$(this).removeClass("actived")
})

$(".zslb_sstj ul li.city1").eq(0).click(function(){
	$(this).css("border","0")
	$(".chosen_zone").show();
	$(".chosen_zone span").hide();
})


$(".zslb_sstj ul li.city1").eq(0).toggle(function(){
	
	var text = "全国";
	$(".chosen_zone").append('<div class="chosen_text">'+text+'</div>');
},function(){
	
	var text = "全国";
	$(".chosen_zone").find(".chosen_text").each(function(index, element) {
				if($(this).text() == text)
				{
					$(this).remove();
				}
        });
})

//点选全国，所有省市都勾选上
/*$("#china").click(function(){
	
	  $(".all_city input").attr("checked", this.checked);
	  
	})
	*/
	

$(".zslb_sstj ul li.city1 input").click(function(){
	$(".chosen_zone").show();
	$(".chosen_zone span").hide();
	if(this.checked )
	{
		var text = $(this).next("span").text();
		var idnx_city1 = $(this).parents(".city1").index();
		var idnx_checkbox = $(this).parent().parent("li").index();
		var idnx = idnx_city1+"_"+idnx_checkbox;
		
	    $(this).attr("data-index",idnx);
		$(".chosen_zone").append('<div data-index1='+idnx+' class="chosen_text">'+text+'<i>x</i></div>');
	}
	else
	{	
		
		var text = $(this).next("span").text()+ "x";
		
		
		$(".chosen_zone").find(".chosen_text").each(function(index, element) {
			
            if($(this).text() == text )
			{
				$(this).remove();
			}
        });
	
	}
})

//已选择地市点击删除

$(".chosen_text i").live("click",function(){
	
	var idnx = $(this).parent(".chosen_text").attr("data-index1");
	
	$(this).parents(".chosen_text").remove();
	$(".city1 ul li input").each(function(index, element) {
        if($(this).attr("data-index")==idnx)
		{
			this.checked = false;
		}
    });
	
})


//如果先选择了省 再选择下边的市 则把省去掉
/*$(".zslb_sstj ul li.city1 ul li").click(function(){
	var this_father = $(this).parents(".city1").children("input");
	if($(this_father).attr("checked"))
	{
		$(this_father).attr("checked",false)
	}
	var father_text = $(this).parents(".city1").children("span").text();
	$(".chosen_text").each(function(index, element) {
        if($(this).text()==father_text)
		{
			$(this).remove();
		}
    });
})
*/


$(document).click(function(event){
	  if(!$(event.target).parents('.zslb_sstj ul').length && !$(event.target).parents('.zslb_sstj ul li.city1 ul').length){
		$('.zslb_sstj ul li.city1 ul').hide();
		$(".zslb_sstj ul li.city1").removeClass("actived")
	  };
});	
	
});


$(function(){
	//导航当前状态
	var localUrl = window.location+'';	
	var spIndex;		
	if(localUrl.indexOf('knowledgeList')>=0) {//知识列表
		spIndex=0;						 
	}else if(localUrl.indexOf('/insideEditorial')>=0){//内部采编
		spIndex=1;		
	}else if(localUrl.indexOf('/bms')>=0){//系统管理
		spIndex=2;	
	}else if(localUrl.indexOf('/systemManage')>=0){//模板管理
		spIndex=3;	
	}
	$(".head_nav ul li").eq(spIndex).addClass("hover").siblings().removeClass("hover");
	/*$("#sp_leftNavList li").mouseover(function(){
		$(this).removeClass("hover");
	})
	$("#sp_leftNavList li").mouseout(function(){
		$("#sp_leftNavList li").eq(spIndex).addClass("hover").siblings().removeClass("hover");
	})	*/
})

/*权限管理 选项卡 by 柳杨*/

$(function(){
	$(".rightsBox_navbox .rightsBox_nav,.rightsBox_navbox .rightsBox_nav li").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
	});
	$(".rightsBox_navbox .rightsBox_nav li p").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		$(this).parent().siblings("li").find("p").removeClass("hover")
	});
	
})


function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  //menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}


//导航树

$(function(){
	$("a.treeadd").live('click',function(){
		
		var html = $("<ul><li><img src='/images/zhankai.gif' width='11' height='11' class='zhankai' /><img src='/images/shouqi.gif' width='11' height='11' class='shouqi' /><input name='' type='text' /><span><a class='treeadd2'>增加</a></span></li></ul>");
		$(this).parent("span").parent("li").append(html);
	})
	
	$("a.treeadd2").live('click',function(){
		
		var html = $("<ul><li><input name='' type='text' style='margin-left:21px;' /></li></ul>");
		$(this).parent("span").parent("li").append(html);
	})
	
	
	$(".treeaddone").live('click',function(){
		var html = $("<li><img src='/images/zhankai.gif' width='11' height='11' class='zhankai' /><img src='/images/shouqi.gif' width='11' height='11' class='shouqi' /><input name='' type='text' value='一级栏目' /><span><a class='treeadd'>增加</a></span></li>");
		$(".ljtree").append(html);
	})
	
	$("a.treedel").live('click',function(){
		console.info("del")
		$(this).parent("span").parent("li").remove();
	})
	
	$(".shouqi").live('click',function(){
		$(this).hide();
		$(this).siblings().show();
		$(this).parent("li").find("ul").hide();
	})
	
	$(".zhankai").live('click',function(){
		$(this).hide();
		$(this).siblings().show();
		$(this).parent("li").find("ul").show();
	})
	
	//导航搜索 点击效果
	$(".searchHeader input").focus(function(){
		if($(this).val() ==this.defaultValue){  
                  $(this).val("");           
			  } 
	}).blur(function(){
		if ($(this).val() == '') {
                $(this).val(this.defaultValue);
             }
	})
	
	//导航退出
	
	$(".logOut").click(function(){
		if(confirm("是否确定退出？"))
		{
			
			return true;		
			
		}
		else
		{
			return false;
		}
	})
		
		//新列表样式
		
		$(".zslb_sstj4 ul li a").click(function(){
			if($(this).hasClass("hover"))
			{
				$(this).removeClass("hover");
			}
			else
			{
				$(this).addClass("hover").parent("li").siblings().find("a").removeClass("hover")
			}
     	})
		
		$(".zslb_sstj4 ul").each(function(index, element) {
            $(this).find("a").eq(0).css("border","0")
			 $(this).find("a:last").css("border","0")
        });
		
		//翻页
		$(".Pages a").click(function(){
			$(this).addClass("on").siblings().removeClass("on")
		})
	
})

	
//全选
$(function(){     
     $(".checkedAll").click(function(){
		if(this.checked){
			$(this).parent().parent().parent().find('input[type=checkbox][name=items]').attr("checked", true );
		}else{								
			$(this).parent().parent().parent().find('input[type=checkbox][name=items]').attr("checked", false );
		}
	 });
})