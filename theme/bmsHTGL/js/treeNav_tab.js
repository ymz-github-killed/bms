var urlPath="";
var impPath = "";

if(typeof(basePath)!="undefined"){
  urlPath = basePath;
  impPath = basePath +"theme/bmsHTGL/";
}

// JavaScript Document
  //点击一级导航时，切换相对应的左侧树形导航
  $(function(){
    $("#nav_1 span").click(function(){
      $(this).addClass('hover').siblings().removeClass('hover');
      var indexdt = $("#nav_1 span").index(this);
      var temp = $("#treeBox div.tree").eq(indexdt);
      temp.show().siblings().hide();
    });
    //$("#nav_1 span").eq(0).click();
  });
  //点击一级导航时，切换相对应的左侧树形导航
  //点击隐藏导航时，切换相对应的左侧树形导航
  $(function(){
    $("#nav_2 span").click(function(){
      var indexdt = $("#nav_2 span").index(this);
      $("#nav_1 span").eq(indexdt).addClass('hover').siblings().removeClass('hover');
      var temp = $("#treeBox div.tree").eq(indexdt);
      temp.show().siblings().hide();
      $(this).parent().hide();
      $("#disNav").attr("src",impPath+"images/navSelect_1.gif");
    });
    $("#nav_2 span").eq(0).click();
    $("#nav_2").on("mouseleave",function(){
      $(this).hide();
      $("#disNav").attr("src",impPath+"images/navSelect_1.gif");             
    });
    //鼠标滑过变字体颜色
    $("#nav_2 span").mouseenter(function(){
      $(this).addClass('hover').siblings().removeClass('hover');
    });
    $("#nav_2 span").click(function(){
      $(this).addClass('hover').siblings().removeClass('hover');  
    });
    //鼠标滑过变字体颜色
  });
  //点击隐藏导航时，切换相对应的左侧树形导航
  $(function(){
  //点击显示隐藏一级导航
  $(document).on("click","#disNav",function(){
    var nav2Height = $("#nav_2").height();               
    //$("#nav_2").css({"top":35}) 
    if($(this).attr("src")==impPath+'images/navSelect_1.gif'){
      $(this).attr("src",impPath+"images/navSelect_2.gif");
      $("#nav_2").show();
    }else{
      $(this).attr("src",impPath+"images/navSelect_1.gif");
      $("#nav_2").hide(); 
    }                
  });
  //点击显示隐藏一级导航
  //点击导航 显示当前效果
  $("#nav_1 span").click(function(){
    $(this).nextAll("span").removeClass("hover");
    $(this).prevAll("span").removeClass("hover");
    $(this).addClass("hover");               
  });
  //点击导航 显示当前效果
  //点击左侧树  展开隐藏下级菜单 增加当前样式
  $(document).on("click",".leftTree span",function(){
    if($(this).parent().find("ul:first").hasClass("undis")){
      $(this).parent().find("ul:first").removeClass("undis");
      $(this).parent().find("ul:first").addClass("dis");
      $(this).css("background","url("+impPath+"images/up_bg.gif) no-repeat left center");
    }else{
      $(this).parent().find("ul:first").addClass("undis");
      $(this).css("background","url("+impPath+"images/down_bg.gif) no-repeat left center");
    };
    $(this).toggleClass("current");
  });
  //点击左侧树  展开隐藏下级菜单 增加当前样式
  //点击左侧树形导航 添加右侧的相应页签及iframe元素
  $(document).on("click",".menuTree",function(){
//  $(document).on("click",".leftTree span",function(){
    var bHref = $(this).attr("name");
    var aHref = urlPath+bHref;
    var cHref = "";
    //加入此段原因： jQuery.hmtl()方法读取到的html中的&字符会转换为[&amp;]导致比较失败！
    //此处&字符为aHref中的url包含有&连接符导致
    if(aHref.indexOf("&")){
      cHref = aHref.replace(new RegExp("&","gm"),'&amp;');
    }
    var aText = $(this).html();
    var b_aText = "<label title=\""+aText+"\" name=\""+aHref+"\">";
    var tabliTEXT = $(".pcs_tab_ul").html();
    var tabliWidth = $(".pcs_tab_ul").width();
    var navTabiWidth = $(".navTabBox").width();
    var i = $(".pcs_tab_ul li").length;
    $(".leftTree").find("span").removeClass("current");
    $(this).addClass("current");
    if(bHref=='null'){//判断导航name值是否为空
      
    }else{
      if(tabliTEXT.toLowerCase().indexOf(cHref.toLowerCase())==-1){//判断主菜单是否有相同的菜单\
        
        if(i<11){//判断主菜单是否超过10个
          $(".pcs_tab_ul").find("li:last").after("<li class='cur'><label title=\""+ aText +"\" name=\"" + aHref +"\"><span><em class='myspan'><b>"+aText+"</b></em><img src='"+impPath+"images/yqclose.gif'/></span></label></li>");
          //清除当前选中状态
          $(".pcs_tab_ul").find("li:last").prevAll().removeClass("cur");
          //判断页面中是否有class名等于当前点击导航的name值的iframe元素
          if($("#iframeRight").find("iframe").hasClass(aHref)){
          }else{
            //点击左侧导航 动态增加iframe
            $("#iframeRight").find("iframe").addClass("w0");
            $("#iframeRight").find("iframe:last").after("<iframe frameborder='0' width='100%' height='100%' scrolling='auto' src="+aHref +" class=" + aHref + "></iframe>");
          }
        }
        else{
          $("#yqPOP").css("display","block");
          $("#coverBox").css("display","block");
          $("#coverBox").height($(window).height());
          $("#coverBox").width($(window).width());
        }     
      }else{
        //如果新增页签中已有当前点击的导航时，则显示相对应的页签与iframe
        $(".pcs_tab_ul li >label").each(function(){
          if($(this).attr("name")==aHref){
            $(this).parent().parent().children().removeClass("cur");
            $(this).parent().addClass("cur");
          }
        }); 
        $("#iframeRight >iframe").each(function(){
          if($(this).attr("src")==aHref){
            $(this).parent().find("iframe").addClass("w0");
            $(this).removeClass("w0");
            $(this).attr("src",$(this).attr("src"));
          }
        }); 
      } 
      
    }
  });
  

  //点击左侧树形导航 添加右侧的相应页签及iframe元素
  //右侧 tab页签 点击变换样式
  $(document).on("click",".pcs_tab_ul li",function(){
    var aHref = $(this).find("label").attr("name");
    if($(this).attr("name") != ''){//判断导航name值是否为空
      $(this).find('img').attr('src',impPath+'images/close_red.png');
      $(this).parent().children().removeClass("cur");
      $(this).addClass("cur");
      $(this).siblings().find('img').attr('src',impPath+'images/close_gray.png');
    }
  });
  //右侧 tab页签 点击变换样式
  //点击新增加页签时 切换相对应的iframe显示隐藏
  $(document).on("click","#pcs_tab_ul li",function(){
    var aHref = $(this).find("label").attr("name");
    
    if($(this).hasClass("cur")){
      $("#iframeRight >iframe").each(function(){
        if($(this).attr("src")==aHref){
          $("#iframeRight >iframe").addClass("w0");
          $(this).removeClass("w0");
        }
      });
    }
  });
  //点击新增加页签时 切换相对应的iframe显示隐藏
  //点击新增页签中的关闭按钮时 清除当前页签以及相关的iframe元素
  $(document).on("click","#pcs_tab_ul li img",function(){
    var aHref = $(this).parent().parent().attr("name");
    $("#iframeRight >iframe").each(function(){
      if($(this).attr("src")==aHref){
        $(this).remove();
      }
    });
    $(this).parent().parent().parent().remove();
    //关闭页签及iframe后；最后一个
    $(".pcs_tab_ul").find("li").removeClass("cur");
    $("#iframeRight > iframe").addClass("w0");
    $(".pcs_tab_ul").find("li:last").addClass("cur");
    $(".pcs_tab_ul").find("img").attr('src',impPath+'images/close_gray.png');
    $(".pcs_tab_ul").find("li:last").find("img").attr('src',impPath+'images/close_red.png');
    $("#iframeRight").find("iframe:last").removeClass("w0");
  });
  //点击新增页签中的关闭按钮时 清除当前页签以及相关的iframe元素
  });
  //点击首页小应用更多按钮 添加页签
  function alt(name,url){
    //name是页签名称 url是iframe路径
    var tabliTEXT = $("#pcs_tab_ul").html();
    var tabliWidth = $(".pcs_tab_ul").width();
    var navTabiWidth = $(".navTabBox").width();
    var i = $(".pcs_tab_ul li").length;
    if(url.length>2){//判断导航name值是否为空
      if(tabliTEXT.toLowerCase().indexOf(name.toLowerCase())==-1){//判断主菜单是否有相同的菜单
        if(i<11){//判断主菜单是否超过10个
          $(".pcs_tab_ul").find("li:last").after("<li class='cur'><label title=\""+ name +"\" name=\"" + url +"\"><span><p class='myspan'>"+name+"</p><img src='"+impPath+"images/close_red.png'/></span></label></li>");
          //清除当前选中状态
          $(".pcs_tab_ul").find("li:last").prevAll().removeClass("cur");
          $(".pcs_tab_ul").find("li:last").prevAll().find('img').attr("src",impPath+'images/close_gray.png');
          //判断页面中是否有class名等于当前点击导航的name值的iframe元素
          if($("#iframeRight").find("iframe").hasClass(url)){
          }else{
            //点击左侧导航 动态增加iframe
            $("#iframeRight").find("iframe").addClass("w0");
            $("#iframeRight").find("iframe:last").after("<iframe frameborder='0' width='100%' height='100%' scrolling='auto' src=" + url +" class=" + url + "></iframe>");
          }
        }else{
          $("#yqPOP").css("display","block");
          $("#coverBox").css("display","block");
          $("#coverBox").height($(window).height());
          $("#coverBox").width($(window).width());
        }     
      }else{
        //如果新增页签中已有当前点击的导航时，则显示相对应的页签与iframe
        $(".pcs_tab_ul li >label").each(function(){
          if($(this).attr("name")==aHref){
            $(this).parent().parent().children().removeClass("cur");
            $(this).parent().addClass("cur");
          }
        }); 
        $("#iframeRight >iframe").each(function(){
          if($(this).attr("src")==aHref){
            $(this).parent().find("iframe").addClass("w0");
            $(this).removeClass("w0");
            $(this).attr("src",$(this).attr("src"));
          }
        }); 
      } 
      
    }
  }
  //点击首页小应用更多按钮 添加页签
  //满10个页签后 提示关闭页签窗口
  function cLose(){
    $("#yqPOP").css("display","none");
    $("#coverBox").css("display","none");
  }
  //满10个页签后 提示关闭页签窗口
  //提示没有打开窗口
  function noTab(){
    $("#noTab").css("display","none");
    $("#coverBox").css("display","none");
  }
  //提示没有打开窗口
  //关闭所有已打开窗口
  jQuery(document).on("click","#closeAll",function(){
    var liNum = $('.pcs_tab_ul li').length;
//    var firstURL = $('.pcs_tab_ul li').eq(0).find("label").attr("name");
    if(liNum===1){
      $("#noTab").css("display","block");
      $("#coverBox").css("display","block");
      $("#coverBox").height($(window).height());
      $("#coverBox").width($(window).width());
    }else {
      liNum -= 1; 
      for(i=liNum;i>0;i--){
        $(".pcs_tab_ul li").eq(i).remove();
        $('#iframeRight >iframe').eq(i).remove();
        $('.pcs_tab_ul li').eq(0).addClass('cur');
//        $("#iframeRight").html("<iframe frameborder='0' width='100%' height='100%' scrolling='auto' src='' class=''></iframe>");
      //  $("#myiframe").removeClass("w0");
      }
//      $("#iframeRight").html("<a class='toggle_switch toggle_td' onclick='toggleMenuBar();'  style='z-index: 2000;top:46%;left:0px;background-color: #0069ff;position: relative;color:white;"+(flag == '0' ? 'display:none;' : '')+"'><img src='../theme/bmsHTGL/images/navigate1.png' /></a><iframe frameborder='0' width='100%' height='100%' scrolling='auto' src='"+firstURL+"' class='"+firstURL+"'></iframe>");
      
    }
  });
  //关闭所有已打开窗口

  //点击隐藏导航时 显示本身及后9个导航
  var minZ = 1;
  var maxZ = 10;
  $(function(){
    $("#nav_2").find("span").click(function(){
      var myself = parseInt($(this).attr("id"));
      var spanLeng =  $("#nav_2").find("span").length;    
      if(myself>=maxZ){
        maxZ = myself;
        minZ = myself-9;
      }
      if(0<myself && myself<=minZ){
        minZ=myself;
        maxZ=myself+9;
      }
      if(minZ<=myself && myself<=maxZ){
        $("#nav_1").children("span").css("display","none");
        for(i=minZ;i<=maxZ;i++){
          $("#nav_1 span[id="+i+"_]").css("display","block");
        }
      }             
    });
    
  });
  //点击隐藏导航时 显示本身及后9个导航
  
  
    //点击一级导航 添加右侧的相应页签及iframe元素
  function addTab(Name,Title){
    var aHref = Name;
    var bHref = "";
    var aText = Title;
//    var tabliTEXT = $(".pcs_tab_ul").html();
    var tabliTEXT = $(".pcs_tab_ul").html();
    //加入此段原因： jQuery.hmtl()方法读取到的html中的&字符会转换为[&amp;]导致比较失败！
    //此处&字符为aHref中的url包含有&连接符导致
    if(aHref.indexOf("&")){
      bHref = aHref.replace(new RegExp("&","gm"),'&amp;');
    }
    var tabliWidth = $(".pcs_tab_ul").width();
    var navTabiWidth = $(".navTabBox").width();
    var i = $(".pcs_tab_ul li").length;
    $("#nav_1").find("span").addClass('hover').siblings().removeClass('hover');
    if(aHref=='null'){//判断导航name值是否为空
      
    }else{
      if(tabliTEXT.toLowerCase().indexOf(bHref.toLowerCase())==-1){//判断主菜单是否有相同的菜单
        if(i<11){//判断主菜单是否超过10个
          $(".pcs_tab_ul").find("li:last").after("<li class='cur'><label title=\""+ aText +"\" name=\"" + aHref +"\"><span><p class='myspan'><b>"+aText+"</b></p><img src='"+impPath+"images/close_red.png'/></span></label></li>");
          reset_tab_width();
          //清除当前选中状态
          $(".pcs_tab_ul").find("li:last").prevAll().removeClass("cur");
          $(".pcs_tab_ul").find("li:last").prevAll().find('img').attr("src",impPath+'images/close_gray.png');
          //判断页面中是否有class名等于当前点击导航的name值的iframe元素
          if($("#iframeRight").find("iframe").hasClass(aHref)){
          }else{
            //点击左侧导航 动态增加iframe
            $("#iframeRight").find("iframe").addClass("w0");
            if($("#iframeRight").find("iframe").length > 0 ){
            	$("#iframeRight").find("iframe:last").after("<iframe frameborder='0' width='100%' height='100%' scrolling='auto' src=" + aHref +" class=" + aHref + "></iframe>");
            }else{
            	$("#iframeRight").append("<iframe frameborder='0' width='100%' height='100%' scrolling='auto' src=" + aHref +" class=" + aHref + "></iframe>");
			}
          }
        }else{
          $("#yqPOP").css("display","block");
          $("#coverBox").css("display","block");
          $("#coverBox").height($(window).height());
          $("#coverBox").width($(window).width());
          alert("您打开的窗口已经超过10个！请关闭您不用的窗口！");
        }     
      }else{
        //如果新增页签中已有当前点击的导航时，则显示相对应的页签与iframe
        $(".pcs_tab_ul li >label").each(function(){
          if($(this).attr("name")==aHref){
            $(this).parent().parent().children().removeClass("cur");
            $(this).parent().parent().children().find("img").attr('src',impPath+'images/close_gray.png');
            $(this).parent().addClass("cur");
            $(this).find('img').attr('src',impPath+'images/close_red.png');
          }
        }); 
        $("#iframeRight >iframe").each(function(){
          if($(this).attr("src")==aHref){
            $(this).parent().find("iframe").addClass("w0");
            $(this).removeClass("w0");
            $(this).attr("src",$(this).attr("src"));
          }
        }); 
      } 
      
    }
  }