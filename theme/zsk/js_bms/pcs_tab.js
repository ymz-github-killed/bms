var tabtext=["",
"我的首页",
"充值缴费",
"消费详单查询",
"消费账单查询",
"账单清单定制",
"个人资料管理",
"密码服务",
"梦网定制查询",
"业务查询",
"语音类业务",
"新业务",
"套餐办理",
]//按12345的顺序写就可以了，TAB的文字内容

if (todo == null) var todo = {};   
if (todo.tab == null) todo.tab = {};
todo.tab={
	tabclose:true,maxnum:5,nowpl:0,cleft:false,cright:false,
	spanclick:function(idnum){
		todo.tab.tabclose=false;
		$(".cur").attr({"class":"myli"});
		$("#myli"+idnum).attr({"class":"myli cur"});
		$(".pcs_tcontent").hide();
		$("#pcs_tcontent"+idnum).show();
		},
	liclick:function(idname){
		if(idname=="myli1"){return;}
		if(todo.tab.tabclose){
		$("#"+idname).remove();	
		//$(".pcs_tcontent").hide();
		//$("#pcs_tcontent"+(idname.substring(4)-1)).show();
		todo.tab.tabmaxnumshow(todo.tab.nowpl);
		}else{todo.tab.tabclose=true;}
		},
	tabmaxnumshow:function(beginnum){
		var hidenum,nownum=0,nowshownum=todo.tab.maxnum;
		$(".pcs_tab_ul .myli").hide();
		$(".pcs_tab_ul .myli").each(function(i){nownum++;});
		hidenum=nownum-todo.tab.maxnum;
	    hidenum=hidenum>0?hidenum:0;
		if(hidenum>0){$("#pcsright").show();$("#pcsleft").show();}else{$("#pcsright").hide();$("#pcsleft").hide();}
		if(todo.tab.nowpl>hidenum){todo.tab.nowpl=0;}
		var shownum=hidenum-todo.tab.nowpl;
		if(todo.tab.nowpl>0){todo.tab.cright=true;
		$("#pcsright").attr({"class":"pcsb22"});
		}else{todo.tab.cright=false;$("#pcsright").attr({"class":"pcsb2"});}
		if(shownum>0){todo.tab.cleft=true;$("#pcsleft").attr({"class":"pcsb11"});}else{todo.tab.cleft=false;$("#pcsleft").attr({"class":"pcsb1"});}
		var isshowcru=true;
		nowshownum=nowshownum-1;
		$(".pcs_tab_ul .myli").each(function(i){
			 if($(this).attr("class")=="myli cur"){isshowcru=false;$(this).show();}								
             if(i>=shownum&&nowshownum>0){
				 if($(this).attr("class")=="myli cur"){nowshownum=nowshownum+1;}	
				 nowshownum=nowshownum-1;$(this).show();
				 			 }
 			});
		
		}
	
	}

function pcstabadd(num){  
	todo.tab.nowpl=0;
	$("#myli"+num).remove();
	$(".cur").attr({"class":"myli"});
	$(".myli").show();
	if(num==1){
		$(".pcs_tab_ul").append('<li class="myli cur" id="myli'+num+'"><a href="javascript:void(0)"><span id="iispan1"><p class="myspan" idnum="'+num+'" id="myspan'+num+'">'+tabtext[num]+'</p></span></a></li>');	
		}else{
		$(".pcs_tab_ul").append('<li class="myli cur" id="myli'+num+'"><a href="javascript:void(0)"><span><p class="myspan" idnum="'+num+'" id="myspan'+num+'">'+tabtext[num]+'</p></span></a></li>');}	
	
	$("#myli"+num).bind("click",function(){todo.tab.liclick($(this).attr("id"));});
	$("#myspan"+num).bind("click",function(){todo.tab.spanclick($(this).attr("idnum"));});
	$(".pcs_tcontent").hide();
	$("#pcs_tcontent"+num).show();
	todo.tab.tabmaxnumshow(todo.tab.nowpl);
	}


function runleft(){
	if(todo.tab.cleft){
	var thisidnum="";
	$(".pcs_tab_ul .myli").each(function(i){
			 if($(this).attr("class")=="myli cur"){todo.tab.spanclick(thisidnum);}
			 else{thisidnum=$(this).find(".myspan").attr("idnum");}
 			});
	
	todo.tab.nowpl++;
	todo.tab.tabmaxnumshow(todo.tab.nowpl);
	}}
function runright(){
	if(todo.tab.cright){
	var canchange=false;
	$(".pcs_tab_ul .myli").each(function(i){
			 if(canchange){todo.tab.spanclick($(this).find(".myspan").attr("idnum"))}
			 if($(this).attr("class")=="myli cur"&&!canchange){canchange=true;}else{canchange=false;}
 			});	
	todo.tab.nowpl--;
	todo.tab.tabmaxnumshow(todo.tab.nowpl);
		}
	}
$(document).ready(function(){
		$(".myspan").bind("click",function(){todo.tab.spanclick($(this).attr("idnum"));});
		$(".myli").bind("click",function(){todo.tab.liclick($(this).attr("id"));});
		$("#pcsright").hide();$("#pcsleft").hide();
						   })
