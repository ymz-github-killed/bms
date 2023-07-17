$(function(){
		var sel = $("#sea_sel"),
			selUl = $("#ss_ul"),
			selLi = selUl.find("li");
			sel.click(function(e){
				$(".ss_ul2").hide();
				selUl.show();
				e.stopPropagation();
				str=sel.val();
				if(str=="请选择所属部门"){
					sel.val("");
				}
			});
		// 点击空白隐藏
		$("body").click(function(){
			selUl.hide();
			var coun=sel.val();
			if(coun=="" || coun==null){
				sel.val("请选择所属部门");
			}					 
		});
		// 鼠标经过、点击
		selLi.click(function(){
			var selText = $(this).text();
			sel.val(selText);
			selUl.hide();
			
		});
		
		var se2 = $("#sea_se2"),
			selUl2 = $(".ss_ul2"),
			selLi2 = selUl2.find("li");
		se2.click(function(e){
			$(".ss_ul").hide();
			selUl2.show();
			e.stopPropagation();
			str=se2.val();
			if(str=="请选择所属角色"){
				se2.val("");
			}
			});
		// 点击空白隐藏
		$("body").click(function(){
			selUl2.hide();	
			var coun=se2.val();
			if(coun=="" || coun==null){
				se2.val("请选择所属角色");
			}				 
		});
		// 鼠标经过、点击
		selLi2.click(function(){
			var selText2 = $(this).text();
			se2.val(selText2);
			selUl2.hide();
			
		});
	
})