$(function(){
		var sel = $("#sea_sel"),
			selUl = $("#ss_ul"),
			selLi = selUl.find("li");
			sel.click(function(e){
				$(".ss_ul2").hide();
				selUl.show();
				e.stopPropagation();
				str=sel.val();
				if(str=="��ѡ����������"){
					sel.val("");
				}
			});
		// ����հ�����
		$("body").click(function(){
			selUl.hide();
			var coun=sel.val();
			if(coun=="" || coun==null){
				sel.val("��ѡ����������");
			}					 
		});
		// ��꾭�������
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
			if(str=="��ѡ��������ɫ"){
				se2.val("");
			}
			});
		// ����հ�����
		$("body").click(function(){
			selUl2.hide();	
			var coun=se2.val();
			if(coun=="" || coun==null){
				se2.val("��ѡ��������ɫ");
			}				 
		});
		// ��꾭�������
		selLi2.click(function(){
			var selText2 = $(this).text();
			se2.val(selText2);
			selUl2.hide();
			
		});
	
})