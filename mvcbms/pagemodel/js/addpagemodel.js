document.write("<script src='" + basePath
		+ "mvcbms/pub/js/strCheck.js' type='text/javascript'></script>");
jQuery(function() {
	jQuery("#position").html("");
	jQuery("#position").append("<input type='hidden' name='appid' id='id_'/>");
	jQuery(".back").bind("click", function() {
		window.location.href = basePath + "pageModel/list.controller";
	});
	jQuery(".reset").bind("click", function() {
		btn_click_reset();
	});
	jQuery(".save").removeAttr("onclick").bind("click", function() {
		beforeSubmit();
	});
	jQuery(".width_").bind("click", function() {
		jQuery("#height").val("");
		jQuery("#height").attr("readOnly", true);
	});
	jQuery("#width_9").bind("click", function() {
		jQuery("#height").attr("readOnly", false);
	});
	$(".del_Button").removeAttr("onclick");
	initBtnClick();
	if (jsonData.appAddBean != null) {
		showAppInfo(jsonData.appAddBean);
	} else {
		$("input[name='appAddBean.width'][value='300_200']").attr("checked", true);
	}
	if (jQuery("input[name='appAddBean.width'][value='900']").attr("checked")) {
		jQuery("#height").attr("readOnly", false);
	} else {
		jQuery("#height").attr("readOnly", true);
	}
});
function btn_click_reset() {
	if (jsonData.appAddBean != null) {
		jQuery("#height").val("");
		showAppInfo(jsonData.appAddBean);
	} else {
		$("#bthButtonBox").hide();
		document.getElementById("addForm").reset();
	}

}
/**
 * 初始化静态页面的btn原有事件
 */
function initBtnClick() {
	$("body").on("click","#bthButton_1", function() {
		$("#bthButtonBox").show();
	});
	$("body").on("click","#bthButton_2", function() {
		$("#bthButtonBox").hide();
	});
	$("body")
			.on(
					"click",".add_Button",
					function() {
						$(this)
								.parent()
								.parent()
								.after(
										"<tr><td><input type=\"text\" class=\"text_3\" name=\"btnNameArr\" /></td><td><input type=\"text\" class=\"text_3\" name=\"btnUrlArr\"/></td><td><input type=\"text\" class=\"text_3\" name=\"btnSequenceArr\" value=\"0\" onkeyup=\"value=value.replace(\/[^\\d]\/g,\'\')\" onbeforepaste=\"clipboardData.setData(\'text\',clipboardData.getData(\'text\').replace(\/[^\\d]\/g,\'\'))\"/></td><td><a href=\"###\" class=\"ml10 add_Button\">添加</a><a href=\"###\" class=\"ml10 del_Button\">删除</a></td></tr>");
						$(".tb_content1 tr:even").removeClass("odd");
						$(".tb_content1 tr:odd").addClass("odd");
					})
	$("body").on("click",".del_Button", function() {
		var btnName = document.getElementsByName("btnNameArr");
		if (btnName.length == 1) {
			showMessageTxt("不能删除，至少应添加一行数据！", "message", "bccg");
		} else {
			$(this).parent().parent().remove();
			$(".tb_content1 tr:even").removeClass("odd");
			$(".tb_content1 tr:odd").addClass("odd");
		}
	});
}
/**
 * 将小应用的基本信息展示在页面上
 * 
 * @param obj
 */
function showAppInfo(obj) {
	var pageModel = obj;
	for ( var k in pageModel) {
		var el = jQuery('#' + k + '_');
		if (el)
			el.val(pageModel[k] == null ? "" : pageModel[k]);
	}
	var isTop = "input[name='appAddBean.isTop'][value='" + pageModel.isTop
			+ "']";
	var hasTitleBtn = "input[name='appAddBean.hasTitleBtn'][value='"
			+ pageModel.hasTitleBtn + "']";
	$(isTop).attr("checked", true);
	$(hasTitleBtn).attr("checked", true);
	if (pageModel.width == "300" && pageModel.height == "200") {
		$("input[name='appAddBean.width'][value='300_200']").attr("checked", true);
	}
	if (pageModel.width == "600" && pageModel.height == "200") {
		$("input[name='appAddBean.width'][value='600_200']").attr("checked", true);
	}
	if (pageModel.width == "900") {
		$("input[name='appAddBean.width'][value='900']").attr("checked", true);
		$("#height").val(pageModel.height);
	}
	if ($("#bthButton_1").attr("checked")) {
		jQuery("#add_position").html("");
		jQuery
				.ajax({
					type : "post",
					cache : "false",
					url : basePath + "pageModelQuery/queryBtns.controller?t="
							+ Math.random() + "&id=" + pageModel.id,
					dataType : "json",
					success : function(result) {
						var btnList = eval(result.titleBtns);
						if (btnList != null) {
							for ( var k in btnList) {
								jQuery("#add_position")
										.append(
												"<tr><td><input type=\"text\" class=\"text_3\" name=\"btnNameArr\" value='"
														+ btnList[k].btnName
														+ "'/></td><td><input type=\"text\" class=\"text_3\" name=\"btnUrlArr\" value='"
														+ btnList[k].btnUrl
														+ "'/></td><td><input type=\"text\" class=\"text_3\" name=\"btnSequenceArr\" value='"
														+ btnList[k].btnSequence
														+ "' value=\"0\" onkeyup=\"value=value.replace(\/[^\\d]\/g,\'\')\" onbeforepaste=\"clipboardData.setData(\'text\',clipboardData.getData(\'text\').replace(\/[^\\d]\/g,\'\'))\"/></td><td><a href=\"###\" class=\"ml10 add_Button\">添加</a><a href=\"###\" class=\"ml10 del_Button\">删除</a></td></tr>");
							}
						}
						$("#bthButtonBox").show();
					},
					error : function() {
						showMessageTxt("系统异常！", "message", "bccg");
						jQuery("#qd").unbind("click").bind("click", function() {
							hide("cover", "bccg")
						});
						jQuery("#close").unbind("click").bind("click",
								function() {
									hide("cover", "bccg")
								});
					}
				});
	} else {
		$("#bthButtonBox").hide();
	}
}
/*******************************************************************************
 * 保存之间校验
 */
function beforeSubmit() {
	var appName = jQuery("#appName_").val();
	var url = jQuery("#url_").val();
	if (jQuery.trim(appName) == "" || jQuery.trim(appName) == null) {
		showMessageTxt("应用名称不能为空！", "message", "bccg");
		return false;
	}else if(appName.split(" ").length>1){
		showMessageTxt("应用名称不可包含空格！", "message", "bccg");
		return false;
	}else if (countCharacters(appName) > 20) {
		showMessageTxt("应用名称长度不能过20个字符！", "message", "bccg");
		return false;
	} else if (jQuery.trim(url) == "" || jQuery.trim(url) == null) {
		showMessageTxt("URL链接不能为空！", "message", "bccg");
		return false;
	} else if (countCharacters(url) > 200) {
		showMessageTxt("URL链接长度不能超过200个字符！", "message", "bccg");
		return false;
	} else {
		var widthH_checked = $("input[name='appAddBean.width'][value='900']")
				.attr("checked");
		var hasBtn_checked = $(
		"input[name='appAddBean.hasTitleBtn'][value='1']:checked").val()=="1";
		if (widthH_checked) {
			if(jQuery("#height").val() == ""){
				showMessageTxt("高度不能为空！", "message", "bccg");
				return false;
			}
			if (jQuery("#height").val() > 9999 || jQuery("#height").val() < 40) {
				showMessageTxt("高度最大不能超过9999,最小不能低于40！", "message", "bccg");
				return false;
			}
		}
		if (hasBtn_checked) {
			var btnNameArr = document.getElementsByName("btnNameArr");
			var btnUrlArr = document.getElementsByName("btnUrlArr");
			var btnSequenceArr = document.getElementsByName("btnSequenceArr");
			for ( var i = 0; i < btnNameArr.length; i++) {
				if (jQuery.trim(btnNameArr[i].value) == ''
						|| btnNameArr[i].value == null
						|| jQuery.trim(btnUrlArr[i].value) == ''
						|| btnUrlArr[i].value == null) {
					showMessageTxt("第" + (i + 1) + "行按钮名称与url不能为空！", "message",
							"bccg");
					return false;
				} else if (countCharacters(btnNameArr[i].value) > 20) {
					showMessageTxt("第" + (i + 1) + "行按钮名称长度不能超过20个字符！",
							"message", "bccg");
					return false;
				} else if (countCharacters(btnUrlArr[i].value) > 200) {
					showMessageTxt("第" + (i + 1) + "行url长度不能超过200个字符！",
							"message", "bccg");
					return false;
				} else if (btnSequenceArr[i].value > 99) {
					showMessageTxt("第" + (i + 1) + "行序号最大不能超过99！", "message",
							"bccg");
					return false;
				} else {
					continue;
				}
			}
			submitData();
		} else {
			submitData();
		}
	}
}
function submitData() {
	var jsonData = jQuery("#addForm").serializeArray();
	jQuery.ajax({
		type : "post",
		cache : "false",
		url : basePath + "pageModelAdd/add.controller?t=" + Math.random(),
		dataType : "json",
		data : jsonData,
		success : function(result) {
			showMessageTxt(result.message, "message", "bccg");
			if (result.messageCode.indexOf("S") == 0) {
				jQuery("#qd").unbind("click").bind(
						"click",
						function() {
							hide("cover", "bccg");
							window.location.href = basePath
									+ "pageModel/list.controller";
						});
				jQuery("#close").unbind("click").bind(
						"click",
						function() {
							hide("cover", "bccg");
							window.location.href = basePath
									+ "pageModel/list.controller";
						});
			} else {
				jQuery("#qd").unbind("click").bind("click", function() {
					hide("cover", "bccg");
				});
				jQuery("#close").unbind("click").bind("click", function() {
					hide("cover", "bccg");
				});
			}
		}
	});
}