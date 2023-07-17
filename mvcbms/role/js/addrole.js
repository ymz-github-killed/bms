document.write("<script src='"+basePath+"mvcbms/pub/js/strCheck.js' type='text/javascript'></script>");
jQuery(function(){
	jQuery(".back").bind("click",function(){btn_click_back()});
	jQuery(".reset").bind("click",function(){btn_click_reset()});
	jQuery(".save").removeAttr("onclick").bind("click",function(){btn_click_save()});
	jQuery("#btnsearch").bind("click",function(){find('search','search')});
	jQuery("#btnreset").bind("click",function(){rbutton()});
	jQuery("#search_r [id='first']").bind("click",function(){find('search','first')});
	jQuery("#search_r [id='before']").bind("click",function(){find('search','before')});
	jQuery("#search_r [id='next']").bind("click",function(){find('search','next')});
	jQuery("#search_r [id='end']").bind("click",function(){find('search','end')});
	jQuery("#search_r [id='go']").bind("click",function(){find('search','go')});
	//jQuery("#search").append("<input type='hidden' id='rname'/>");
	jQuery("#search").append("<input type='hidden' id='roleid_' name='roleBean.roleid'/>");
	jQuery("#search").append("<input type='hidden' id='locationId_' name='roleBean.locationId'/>");
	jQuery("body").on("click","#select",function(){
		btn_click_select();
	});
	if(jsonData.roleBean != null){
		roleDate = jsonData.roleBean;
		//jQuery("#roleName_").attr("readOnly",true);
		for (var k in roleDate){
			var el = jQuery('#' + k + '_');
			if (el)
				el.val(roleDate[k]==null?"":roleDate[k]);
		} 
		//jQuery("#rname").val(roleDate.roleName);
	}
});
/**
 * 返回事件
 */
function btn_click_back(){
	window.location.href=basePath+"role/list.controller";
}
/**
 * 表单内容重置事件
 */
function btn_click_reset(){
	//jQuery("#roleName_").val(jQuery("#rname").val());
	if(jsonData.roleBean != null){
		for (var k in roleDate){
			var el = jQuery('#' + k + '_');
			if (el)
				el.val(roleDate[k]==null?"":roleDate[k]);
		}
	}else{
		document.getElementById("search").reset();
	}
	jQuery("#closeLocationList").hide();
}
function rbutton(){
	jQuery("#locationName").val("");
}
/**
 * 选择所属部门事件
 */
function btn_click_select(){
	jQuery("#locationName").val("");
	setPageMessage("search");
	var searchData = jQuery("#search").serializeArray();
	searchData = eval(searchData);
	jQuery.ajax({  
    	type:"get",
    	contentType:"application/json",
    	cache:"false",
        url:basePath+"locationQuery/query.controller?t="+Math.random(),
        dataType:"json",
        data:searchData,
        success:function(result){
        	//获取分页信息
        	pageMessage = result.pageDTO.pageBean;
        	//分页信息展示
        	pagingMessage("search",pageMessage);
        	//数据展示
        	tableUtil(eval(result.list),"locations");
        	if(jsonData.roleBean != null){
        		setLocationForSelected();
        	}
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
        	jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
        }
    });
}
/**
 * radiobutton选中事件
 */
function selLocationSuc(id,name){
	//选择部门的回调函数
	jQuery("#locationName_").val(name);
	jQuery("#locationId_").val(id);
}
/**
 * 当前页面为编辑状态时，判断当前角色的所属部门id与部门列表结果集
 * 中的其中一条部门id相等，则设其为选中状态
 */
function setLocationForSelected(){
	var locationid = $("#locationId_");
	var locationsArr = jQuery(":input:radio[name='radioName']");
	if(locationid.val() != null && locationid.val() != ""){
		for(var i=0;i<locationsArr.length;i++){
			if(locationid.val()==locationsArr[i].value){
			var tar = "input[name='radioName'][value='"+locationsArr[i].value+"']";
			jQuery(tar).attr("checked",true);
			}
		}
	}
}
/**
 * 点击保存事件
 */
function btn_click_save(){
	var validateArr = [[],[]];
	validateArr[0]=['roleName_','角色名称',50,1,1];
	validateArr[1]=['locationName_','所属部门',50,1];
	validateArr[2]=['remark_','备注',200];
	var bool = checkStr1(validateArr);
	if(bool != null){
		showMessageTxt(bool,"message","bccg");
		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
		return false;
	}
	submitData();
}
/**
 * 提交数据
 */
function submitData(){
	var jsonData = $("form").serializeArray();
	jsonData = eval(jsonData);
	jQuery.ajax({
		type:"post",
		cache:"false",
		url:basePath+"roleAdd/add.controller?t="+Math.random(),
		dataType:"json",
		data:jsonData,
		success:function(result){
			showMessageTxt(result.message,"message","bccg");
    		if(result.messageCode.indexOf("S")==0){
    			jQuery("#qd").unbind("click").bind("click",function(){saveToList()});
    			jQuery(".close").unbind("click").bind("click",function(){saveToList()});
    		}
        },
        error:function(){
        	showMessageTxt("异常操作，请查看系统日志！","message","bccg");
        	jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
        }
	});
}
/**
 * 保存成功后单击'确定'跳转到list页
 */
function saveToList(){
	hide("cover","bccg");
	window.location.href = basePath+"role/list.controller";
}
/**
 * 
 * @param tab
 * @param countPageNum
 */
function find(formId,tab,countPageNum){
	//go第几页
	var goPage = jQuery("#gotoLocations").val();
	jQuery("#gotoLocations").val("");
	var url = basePath+"locationQuery/query.controller";	
	search(url,tab,"locations",formId,countPageNum,goPage);
	setLocationForSelected();
}