var CmsInfo = {
	/**
	 * 显示左侧
	 */
	showLeft : function() {
		$.getScript("columnTree.do?paneId=columnLeftPane");
	},

	/**
	 * 显示右侧
	 * @param id  栏目编号
	 * @param action 请求
	 * @param flag 是否跳转至action true:跳转至action false:跳转至stat.do
	 */
	showRight : function(id, action,flag) {
		CmsInfo.currentColumnID(id);
		if (id == "1") {
			$("#infoTabberContainer").hide();
			// 显示初始统计页
			CmsInfo.forwardTo("stat.do");
		} else {
			$("#infoTabberContainer").show();
			/*
			 * 将tab页设置"全部"为active
			 */
			if(flag){
				CmsInfo.forwardTo(action);	
			}else{
				$('#infoTabberContainer').triggerTab(1);
				CmsInfo.forwardTo("stat.do");
			}
		}
	},

	/**
	 * 显示扩展发布的栏目
	 */
	showExtendPubColumn : function() {
		if ($("#extendPub").attr("checked")) {
			$.getScript('listColumnTree.do?paneId=extendPubColumnTree&checkedNodesId=checkedColumns&articleId=' 
					+ $("#id").val()+'&cunrrentColumnLevelCode='+CmsInfo.currentColumnID());
			$('#columnTree').show('slow');
		} else {
			$('#columnTree').hide('slow');
		}
	},

	/**
	 * 获取当前栏目编号
	 */
	currentColumnID : function(id) {
		if (id)
			$("#_currentColumnId").val(id);
		else
			return $("#_currentColumnId").val();
	},

	/**
	 * 跳转至对应请求
	 */
	forwardTo : function(action, param) {
		action += "?columnId=" + CmsInfo.currentColumnID();

		if (param) {
			action += "&" + param;
		}
		$('#infoRightContainer').load(action);
	},
	beforeAdd : function(articleId) {
		if (articleId) {
			articleId = "articleId=" + articleId;
		}
		CmsInfo.forwardTo("beforeAdd.do", articleId);
	},

	/**
	 * 显示或隐藏文章摘要用户自定义的文本框
	 */
	showSummary : function() {
		$("#define_summary").show();
		$("#clob_summary").hide();
	},

	splitSummary : function() {
		$("#define_summary").hide();
		$("#clob_summary").show();
	},

	/**
	 * 外链
	 */
	outlink : function() {
		if ($("#outlink_checkbox").attr("checked")) {
			$("#outlink").show();
			$("#dynamicData").hide();
		} else {
			$("#outlink").hide();
			$("#dynamicData").show();
		}
	},

	add : function(id, param) {
		if (!$("#outlink_checkbox").attr("checked")){
			$('#outlink_text').val("");
		}
		getPageData();
		$('#articleFormId').ajaxSubmit( {
			success : function(responseText) {
				var re = eval(responseText);
				if (re.status == "200") {
					CmsMain.msg(re.message);
					// 刷新右侧编辑tab
					CmsInfo.showRight(re.param, "editList.do",true);
			} else {
				CmsMain.error(re.message);
			}
		}
	}	);
	},

	/**
	 * 删除
	 */
	del : function(articleId) {
		if (!confirm("确认要删除该文章么?"))
			return false;
		var action = "delete.do?columnId=" + CmsInfo.currentColumnID();
		if (articleId) {
			articleId = "articleId=" + articleId;
		}
		$.get(action + "&" + articleId, {}, function(responseText) {
			var re = eval(responseText);
			if (re.status == "200") {
				CmsMain.msg(re.message);
				CmsInfo.showRight(re.param, "editList.do",true);
			} else {
				CmsMain.error(re.message);
			}
		})
	},

	/**
	 * 批量删除
	 */
	deleteMost : function() {
		var articleId = "";
		$("input[name='ckids_selector']:checked").each(function() {
			articleId += $(this).val() + "-";
		});
		if (articleId == "") {
			alert("请选择至少一条记录");
			return;
		}
		CmsInfo.del(articleId.substring(0, articleId.length - 1));
	},

	/**
	 * 提交 articleId: 文章编号
	 */
	submit : function(articleId) {
		if (!confirm("确认要提交该文章么?"))
			return false;
		var action = "submit.do?columnId=" + CmsInfo.currentColumnID();
		if (articleId) {
			articleId = "articleId=" + articleId;
		}
		$.get(action + "&" + articleId, {}, function(responseText) {
			var re = eval(responseText);
			if (re.status == "200") {
				CmsMain.msg(re.message);
				CmsInfo.showRight(re.param, "editList.do",true);
			} else {
				CmsMain.error(re.message);
			}
		})
	},

	/**
	 * 批量提交
	 */
	submitMost : function() {
		var articleId = "";
		$("input[name='ckids_selector']:checked").each(function() {
			articleId += $(this).val() + "-";
		});
		if (articleId == "") {
			alert("请选择至少一条记录");
			return;
		}
		CmsInfo.submit(articleId.substring(0, articleId.length - 1));
	},

	/**
	 * 通过
	 */
	pass : function(articleId, param) {
		if (!confirm("确认要执行该操作么?"))
			return false;
		var action = "pass.do?columnId=" + CmsInfo.currentColumnID();
		if (articleId) {
			articleId = "articleId=" + articleId;
		}
		$.get(action + "&" + articleId, {}, function(responseText) {
			var re = eval(responseText);
			if (re.status == "200") {
				CmsMain.msg(re.message);
				CmsInfo.showRight(re.param, param,true);
			} else {
				CmsMain.error(re.message);
			}
		})
	},

	/**
	 * 批量通过
	 */
	passMost : function(param) {
		var articleId = "";
		$("input[name='ckids_selector']:checked").each(function() {
			articleId += $(this).val() + "-";
		});
		if (articleId == "") {
			alert("请选择至少一条记录");
			return;
		}
		CmsInfo.pass(articleId.substring(0, articleId.length - 1), param);
	},

	/**
	 * 上下移
	 * @param articleId 文章编号
	 * @param order 指令 UP,DOWN,TOP,BUTTOM
	 * @param status 文章状态进行操作的
	 * @param param 操作完成后所对应跳转请求
	 */
	updown : function(articleId, order, status, param) {
		if (!confirm("确认要执行该操作么?"))
			return false;
		var action = "updown.do?columnId=" + CmsInfo.currentColumnID();
		if (articleId) {
			articleId = "articleId=" + articleId;
		}
		if(status){
			status = "status=" + status;
		}
		action += "&order=" + order +"&" + status + "&" + articleId;
		$.get(action, {}, function(responseText) {
			var re = eval(responseText);
			if (re.status == "200") {
				CmsMain.msg(re.message);
				CmsInfo.showRight(re.param, param,true);
			} else {
				CmsMain.error(re.message);
			}
		})
	},
	
	/**
	 * 上下线
	 * @param articleId 文章编号
	 * @param param 操作完成后所对应跳转请求
	 */
	online : function(articleId,onoff,param){
		if (!confirm("确认要执行该操作么?"))
			return false;
		var action = "online.do?columnId=" + CmsInfo.currentColumnID();
		if (articleId) {
			articleId = "articleId=" + articleId;
		}
		action += "&" + articleId;
		$.get(action, {}, function(responseText) {
			var re = eval(responseText);
			if (re.status == "200") {
				CmsMain.msg(re.message);
				CmsInfo.showRight(re.param, param,true);
			} else {
				CmsMain.error(re.message);
			}
		})
	},

	/**
	 * 退回 articleId:文章编号 param:操作成功后跳转的请求
	 */
	back : function(articleId, param) {
		if (!confirm("确认要执行该操作么?"))
			return false;
		var action = "back.do?columnId=" + CmsInfo.currentColumnID();
		if (articleId) {
			articleId = "articleId=" + articleId;
		}
		$.get(action + "&" + articleId, {}, function(responseText) {
			var re = eval(responseText);
			if (re.status == "200") {
				CmsMain.msg(re.message);
				CmsInfo.showRight(re.param, param,true);
			} else {
				CmsMain.error(re.message);
			}
		})
	},

	/**
	 * 批量退回
	 */
	backMost : function(param) {
		var articleId = "";
		$("input[name='ckids_selector']:checked").each(function() {
			articleId += $(this).val() + "-";
		});
		if (articleId == "") {
			alert("请选择至少一条记录");
			return;
		}
		CmsInfo.back(articleId.substring(0, articleId.length - 1), param);
	},

	/**
	 * 文章预览
	 * @param articleId 文章编号
	 * @param param 成功之后跳转至那个请求
	 * @param isCpage 是否是内容文章预览 1:内容文章预览 0: 首页文章预览
	 */
	review : function(articleId,param,isCpage) {
		//弹出模态窗口
		if(articleId){
			articleId = "&articleId=" + articleId;
		}
		$('#columnPassedTemplate').load('listColumnPassedTemplate.do?columnId='+CmsInfo.currentColumnID() + articleId + "&param="+param + "&isCpage=" + isCpage);
		$('#columnPassedTemplate').width($(window).width() - 600);
		$('#columnPassedTemplate').height($(window).height() - 300);
		$('#columnPassedTemplate').modal();
	},
	
	/**
	 * 选择预览的模版
	 * @param templateId 模版编号
	 * @param articleId 文章编号
	 * @param param 成功之后跳转至那个请求
	 * @param isCpage 是否是内容文章预览 1:内容文章预览 0: 首页文章预览
	 */
	checkReviewTemplate : function(articleId,templateId,param,isCpage){
		var action = "review.do?columnId=" + CmsInfo.currentColumnID();
		if(isCpage){
			isCpage = "&isCpage=" + isCpage;
		}else{
			isCpage = "&isCpage=1";
		}
		if(articleId){
			articleId = "&articleId=" + articleId;
		}
		if(templateId!=""){
			templateId = "&templateId="+templateId;
		}
		$.get(action + isCpage + articleId + templateId, {}, function(responseText) {
			var re = eval(responseText);
			if (re.status == "200") {
				CmsInfo.showRight(CmsInfo.currentColumnID(),param ,true);
				if(re.param){
					window.open(re.param,"");	
				}else{
					CmsMain.error("系统发布路径异常");
				}
			} else {
				CmsMain.error(re.message);
			}
		})
		// 关闭模态对话框
		$.modal.close();
	},

	/**
	 * 文章查看
	 * @param articleId 文章编号
	 */
	view : function(articleId,action){
		var param = "";
		if (articleId) {
			articleId = "articleId=" + articleId + "&view=view&action=" + action;
		}
		CmsInfo.forwardTo("beforeAdd.do", articleId);
	},
	
	/**
	 * 栏目发布
	 */
	pub : function() {
		var action = "pub.do?columnId=" + CmsInfo.currentColumnID();
		$.get(action, {}, function(responseText) {
			var re = eval(responseText);
			if (re.status == "200") {
				CmsMain.msg(re.message);
				CmsInfo.showRight(re.param, "approvedList.do",true);
			} else {
				CmsMain.error(re.message);
			}
		})
	},

	/**
	 * 归档 articleId:文章编号 param:操作成功后跳转的请求
	 */
	archive : function(articleId, param) {
		if (!confirm("确认要执行该操作么?"))
			return false;
		var action = "archive.do?columnId=" + CmsInfo.currentColumnID();
		if (articleId) {
			articleId = "articleId=" + articleId;
		}
		$.get(action + "&" + articleId, {}, function(responseText) {
			var re = eval(responseText);
			if (re.status == "200") {
				CmsMain.msg(re.message);
				CmsInfo.showRight(re.param, param,true);
			} else {
				CmsMain.error(re.message);
			}
		})
	},

	/**
	 * 批量归档
	 */
	archiveMost : function(param) {
		var articleId = "";
		$("input[name='ckids_selector']:checked").each(function() {
			articleId += $(this).val() + "-";
		});
		if (articleId == "") {
			alert("请选择至少一条记录");
			return;
		}
		CmsInfo.archive(articleId.substring(0, articleId.length - 1),param);
	},

	/**
	 * 归档文章拷贝 articleId:文章编号 param:操作成功后跳转的请求
	 */
	copy : function(articleId, param) {
		if (!confirm("确认要执行该操作么?"))
			return false;
		var action = "copy.do?columnId=" + CmsInfo.currentColumnID();
		if (articleId) {
			articleId = "articleId=" + articleId;
		}
		$.get(action + "&" + articleId, {}, function(responseText) {
			var re = eval(responseText);
			if (re.status == "200") {
				CmsMain.msg(re.message);
				CmsInfo.showRight(re.param, param,true);
			} else {
				CmsMain.error(re.message);
			}
		})
	},
	
	/**
	 * 文章操作日志查询
	 * @param id 文章编号
	 */
	listArticleLog : function(articleId){
		if(articleId){
			articleId = "&id=" + articleId;
		}
		$('#articleLogDiv').load('listArticleLog.do?'+articleId);
		$('#articleLogDiv').width($(window).width() - 400);
		$('#articleLogDiv').height($(window).height() - 200);
		$('#articleLogDiv').modal();
	}
};
CmsMain.resize = function(){
	$('#message').css({"left":($(window).width() / 2 - 150) + "px"});
	$('#container').css({"overflow-x":"hidden", "overflow-y":"scroll", "height":($(window).height()-126) + "px", "width":($(window).width()) + "px"});
	if(!document.all){
	$('#iframebox').css({"overflow-x":"hidden", "overflow-y":"scroll", "height":($(window).height()-126) + "px", "width":($(window).width()-$('#columnLeftPane').width()) + "px"});
	}
}

$(document).ready(function() {
	CmsInfo.showLeft();
	CmsInfo.showRight("1", "list.do");

	$("#container").splitter( {
		type : 'v',
		initA : true,
		accessKey : '|'
	});
});