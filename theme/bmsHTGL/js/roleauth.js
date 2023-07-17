document.write("<link rel='stylesheet' type='text/css' href='"+basePath+"mvcbms/pub/js/ztree/zTreeStyle/zTreeStyle.css'/>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.core-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.excheck-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/navtree.js' type='text/javascript'></script>");

/**
 * 根据name值重置
 */
function click_reset(){
	$("#dAuthInFo_table input[type=text]").each(function () {  
        $(this).val("");  
        });  
}
/**
 * 得到checkBox的选中项
 * @param name
 * @returns {Array}
 */
function getChecks(name){
	var re = [];
	var ck = jQuery("[name='"+name+"']");
	for(var i=0; i<ck.length; i++)
	{
		if(ck[i].checked)
		{
			re.push(ck[i].value);
		}
	}
	return re;
}
/**
 * 显示权限
 * @param id
 */
function showFuncByUid(id){
	$("#tab_2").show();
	$("#tab_1").hide();
	$("#tab1").removeClass("hover");
	$("#tab2").addClass("hover");
	jQuery("#tab1").unbind("click").bind("click",function(){btnFunc("tab1");});
	jQuery("#tab2").unbind("click").bind("click",function(){btnFunc("tab2");});
	//首次弹出页面，默认是tab2
	jQuery("#submit").removeAttr("onclick");
	jQuery("#selectAll").unbind("click").bind("click",function(){selAll("tab2")});
	jQuery("#deSelectAll").unbind("click").bind("click",function(){deSelAll("tab2")});
	getFuncListByUid(id);
}
/**
 * 绑定btn不同的事件
 * @param tab
 */
function btnFunc(tab){
	jQuery("#selectAll").unbind("click").bind("click",function(){selAll(tab)});
	jQuery("#deSelectAll").unbind("click").bind("click",function(){deSelAll(tab)});
}
/**
 * 获取权限列表根据用户id
 * @param id
 */
function getFuncListByUid(id){
	jQuery("#sjqx_shu").html("");
	jQuery("#sjqx_shu").append("<div id='sjqx_tree'></div>");
	//获取权限
	getCheckzTree(basePath+"funcConfig/getFuncsByUid.controller?userid="+id);
	$("#par").html("");
	$("#dAuthUid_").html("<input type='hidden' name='userid' value='"+id+"'/>");
	$("#dAUid_2").html("<input type='hidden' name='userid' value='"+id+"'/>");
} 
/**
 * 说明：ztree插件处理checkbox类型菜单树 </br>
 * 时间：2014-08-20
 * 作者：admin
 * @param dataUrl 获取json数据的请求连接
 */
function getCheckzTree(dataUrl){
	// 获取原始json数据
	var jsonData = loadTree(dataUrl);
	var json = forzTree(jsonData);
	var setting = {
			check: {
				enable: true
			},
			 data: {
				simpleData: {
					enable: true
				}	
			},
			view: {
				dblClickExpand: false,
				fontCss : {size:"12px"}
			},
			callback: {
				onClick: sel
			}
		};
			$("#sjqx_tree").attr("class","ztree");
			$.fn.zTree.init($("#sjqx_tree"), setting, json);
	
			var treeObj = $.fn.zTree.getZTreeObj("sjqx_tree"); //获取 zTree 对象 tree的定义的dom id
			var nodes = treeObj.getNodes(); //获取id为1的节点，这个是根节点
			if (nodes.length>0) {
				treeObj.selectNode(nodes[0]);  //选择根节点
				treeObj.expandNode(nodes[0], true, false); //展开根节点
			}
}
/**
 *ztree插件的回调函数
 */
function sel(e,treeId,treeNode) {
	if(treeNode.nocheck){
		return ;
	} else {
		var zTree = $.fn.zTree.getZTreeObj("sjqx_tree");
		zTree.expandNode(treeNode);
		jQuery("#dAuthfid_").html("<input type='hidden' name='funcid' value='"+treeNode.id+"'/>");
		showFuncById(treeNode.id,treeNode.pId);
	}
}
function checkedselect(){
	var treeObj = $.fn.zTree.getZTreeObj("sjqx_tree");
	var nodes = treeObj.getSelectedNodes();
	for (var i=0, l=nodes.length; i < l; i++) {
		treeObj.checkNode(nodes[i], true, true);
	}
}
/**
 * ztree插件的回调函数
 * @param event
 * @param treeId
 * @param treeNode
 */
function zTreeOnCheck(event, treeId, treeNode) {
	if(treeNode.checked){
		$("#funids_").append("<input type=\"hidden\" name=\"funids\" value=\"" + treeNode.id + "\"/>");
	}
};
//菜单树的点击事件请求权限资源数据
function showFuncById(fId,fpId){
	var userid = $("#dAUid_2 input[name=userid]").val();
	jQuery.ajax({
		type:"get",
    	cache:"false",
        url:basePath+"dataAuthConfig/queryDataAuthByFId.controller?s="+Math.random(),
        dataType:"json",
        data:{"funcid":fId,"userid":userid},
        success:function(result){
        	//当用户点击菜单树中某个节点时候，在页面中加入一个隐藏域放置该对象的fid
        	jQuery("#dAuthfid_").html("<input type='hidden' name='funcid' value='"+fId+"'></input>");
        	
        	jQuery("#dAuthid_").html("<input type='hidden' name='id' id='id_' value='"+(result == null || result.bmsDataAuth == null || result.bmsDataAuth.id==null?"":result.bmsDataAuth.id)+"'></input>");
        	if(result == null || result == "" || result.bmsDataAuth.dataauth == null || result.bmsDataAuth.dataauth == ""){
        		var dataauths = 					"<tr>                                                                                           "+
				"	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" /></td>"+
				"	<td>                                                                                        "+
				"	<a href=\"javascript:;\"><div class=\"minus_div\" onclick=\"deltr(this)\" ></div></a>                                    "+
				"    </td>                                                                                      "+
				"</tr>                                                                                          "+
					"<tr>                                                                                           "+
				"	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" /></td>"+
				"	<td>                                                                                        "+
				"	<a href=\"javascript:;\"><div class=\"minus_div\" onclick=\"deltr(this)\" ></div></a>                                    "+
				"    </td>                                                                                      "+
				"</tr>                                                                                          "+
				"<tr>                                                                                    "+
				"	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" /></td> "+
				"	<td>                                                                                 "+
				"	<a href=\"javascript:;\" onclick=\"addtr(this)\">                                                         "+
				"	<div class=\"plus1\">                                                                  "+
				"    <div class=\"plus1_div\"></div>                                                       "+
				"  	</div>                                                                               "+
				"	<div class=\"plus2\">                                                                  "+
				"    <div class=\"plus2_div\"></div>                                                       "+
				"  	</div>                                                                               "+
				"  	</a>                                                                              "+
				"    </td>                                                                               "+
				"</tr>                                                                                   "+
				"<tr>                                                                                        "+
				"<td colspan=\"2\" align=\"center\">                                                             "+
				"<a href=\"javascript:;\"><span onclick=\"hide('cover','sjqx');save_dataAuth();\" style=\"padding: 5px 38px;background: rgba(102, 255, 255, 1);color: #333;\">提交</span></a> "+
				"<a href=\"javascript:;\"><span onclick=\"click_reset();\" style=\"padding: 5px 38px;background: #ddd;margin-left: 10px;color: #333;\">重置</span></a></td>        "+
				"</tr>"
			jQuery("#dAuthInFo_table").html(dataauths);
        		$("#dAuthInFo_table input[name='dataauths']").bind("focus",function(){checkedselect();});
        	} else {
        		var bmsDataAuth = "";
        		bmsDataAuth = result.bmsDataAuth;
        		//展示数据授权数据
        		showRscFunc(bmsDataAuth);
        	}
        },
        error:function(){
        	showMessageTxt("操作失败！","message","bccg");
        }
    }); 
}
/**
 * 删除当前行
 * @param that
 */
function deltr(that){
	/*$(that).parent().parent().parent().remove();*/
	$(that).parent().parent().parent().remove();
}
/**
 * 向下新增行
 * @param that
 */
function addtr(that){
	var tr = "<tr>                                                                                    "+
	"	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" value=\"\"/></td> "+
	"	<td>                                                                                 "+
	"	<a href=\"javascript:;\" onclick=\"addtr(this)\">                                                         "+
	"	<div class=\"plus1\">                                                                  "+
	"    <div class=\"plus1_div\"></div>                                                       "+
	"  	</div>                                                                               "+
	"	<div class=\"plus2\">                                                                  "+
	"    <div class=\"plus2_div\"></div>                                                       "+
	"  	</div>                                                                               "+
	"  	</a>                                                                              "+
	"    </td>                                                                               "+
	"</tr>                                                                                   "
	$(that).parent().parent().after(tr);
	$(that).parent().html("<a href=\"javascript:;\"><div class=\"minus_div\" onclick=\"deltr(this)\"></div></a>");
	$("#dAuthInFo_table input[name='dataauths']").bind("focus",function(){checkedselect();});
}
/**
 * 展示权限详细信息
 * @param bmsDataAuth
 * @param resources
 */
function showRscFunc(bmsDataAuth){
	jQuery("#dAuthid_").html("<input type='hidden' name='id' id='id_' value='"+bmsDataAuth.id+"'></input>");
	//遍历功能权限的json数据，在页面展示
	for (var k in bmsDataAuth){
		var el = jQuery('#showDataAuth [id='+k+'_]');
		if (el){
			if(k=='id'){
				el.val(bmsDataAuth[k]);
			}else{
				if(k=='dataauth'){
					var arr= new Array();
					var dataauths = "";
					if(bmsDataAuth[k] == null || bmsDataAuth[k] == ""){
						continue;
					} else {
					arr=bmsDataAuth[k].split(',');
					for (i=0;i<arr.length ;i++ ) {
						var dataauth = "";
						if(i == (arr.length -1)){
							dataauth = "<tr>                                                                                    "+
							"	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" value=\""+ arr[i] +"\"/></td> "+
							"	<td>                                                                                 "+
							"	<a href=\"javascript:;\" onclick=\"addtr(this)\">                                                         "+
							"	<div class=\"plus1\">                                                                  "+
							"    <div class=\"plus1_div\"></div>                                                       "+
							"  	</div>                                                                               "+
							"	<div class=\"plus2\">                                                                  "+
							"    <div class=\"plus2_div\"></div>                                                       "+
							"  	</div>                                                                               "+
							"  	</a>                                                                              "+
							"    </td>                                                                               "+
							"</tr>                                                                                   "
						} else {
							dataauth = "<tr>                                                                                           "+
							"	<td><input type=\"text\" class=\"da_input\" name=\"dataauths\" value=\""+ arr[i] +"\"/></td>"+
							"	<td>                                                                                        "+
							"	<a href=\"javascript:;\"><div class=\"minus_div\" onclick=\"deltr(this)\" ></div></a>                                    "+
							"    </td>                                                                                      "+
							"</tr>                                                                                          "
						}
						/*var dataauth = "<div class=\"sjqx_apd ax_default text_field\">" +
						"<input type=\"text\" class=\"sjqx_apd_inp\" name=\"dataauths\" value=\""+ arr[i] +"\"/>"+"</div>"*/
						dataauths += dataauth;
					}
						}
					dataauths = dataauths + 
					"<tr>                                                                                        "+
					"<td colspan=\"2\" align=\"center\">                                                             "+
					"<a href=\"javascript:;\"><span onclick=\"save_dataAuth();hide('cover','sjqx');\" style=\"padding: 5px 38px;background: rgba(102, 255, 255, 1);color: #333;\">提交</span></a>"+
					"<a href=\"javascript:;\"><span onclick=\"click_reset();\" style=\"padding: 5px 38px;background: #ddd;margin-left: 10px;color: #333;\">重置</span></a></td>        "+
					"</tr>                                                                                       "
					
//					jQuery("#showDataAuth").html(dataauths);
					jQuery("#dAuthInFo_table").html(dataauths);
					$("#dAuthInFo_table input[name='dataauths']").bind("focus",function(){checkedselect();});
				}
				el.val(bmsDataAuth[k]==null?"无":bmsDataAuth[k]);
				jQuery("#sjqx").trigger("create"); 
			}
		}
	}
}
/**
 *批量追加数据权限信息
 */
function batch_apd_dataAuth(){
	var subdata = jQuery("#saveDataAuthForm").serializeArray();
	jQuery.ajax({
		type:"post",
		url:basePath+"dataAuthConfig/batchSetDataAuth.controller?t="+Math.random(),
		dataType:"json",
		data:subdata,
		async:false,
		success:function(result){
				if(result != null){
				if($("#rep"+ result.fid +"").val() == "rep"){
					$("#" + result.fid + "").html(result.apphtmltd);
				} else {
					$("#appendDataAuthForm [id='par']").append(result.apphtmltr);
				}
				}
		}
	});
}
/**
 *批量追加数据权限信息
 */
function submit_batch_apd_(){
	var subdata = jQuery("#saveDataAuthForm").serializeArray();
	jQuery.ajax({
		type:"post",
		url:basePath+"dataAuthConfig/batchSetDataAuth.controller?t="+Math.random(),
		dataType:"json",
		data:subdata,
		async:false,
		success:function(result){
			if($("#rep"+ result.fid +"").val() == "rep"){
				$("#" + result.fid + "").html(result.apphtmltd);
			} else {
				$("#appendDataAuthForm [id='par']").append(result.apphtmltr);
			}
		}
	});
}
/**
 * 保存数据权限信息
 */
function save_dataAuth(){
	var nodes;
	var treeObj = $.fn.zTree.getZTreeObj("sjqx_tree");
	uncheck = treeObj.getCheckedNodes(false);
	var funcid = $("#dAuthfid_ input[name=funcid]").val();
	var CheckStatus = "1";
		for(var i=0;i<uncheck.length;i++){
			if(uncheck[i].value == funcid){
				CheckStatus = "0";
			}
		}
	jQuery("#dAuthfid_").append("<input type='hidden' name='CheckStatus' value='"+CheckStatus+"'/>");
	if(CheckStatus == "0"){
		showMessageTxt("请勾选列权限","message","bccg");
		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");showTB("cover","sjqx");});
		jQuery("#close").unbind("click").bind("click",function(){hide("cover","bccg");showTB("cover","sjqx");});
		return;
	}
	var subdata = jQuery("#saveDataAuthForm").serializeArray();
	jQuery.ajax({
		type:"post",
		url:basePath+"dataAuthConfig/setDataAuthForUser.controller?t="+Math.random(),
		dataType:"json",
		data:subdata,
		success:function(result){
			showMessageTxt(result.message,"message","bccg");
//			re_dataAuth();
			var uid = jQuery("#userid").val();
    		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");showTB("cover","sjqx");refresh('role',uid);});
    		jQuery("#close").unbind("click").bind("click",function(){hide("cover","bccg");showTB("cover","sjqx");refresh('role',uid);});
	    	},
		error:function(){
			showMessageTxt("操作失败！","message","bccg");
//			re_dataAuth();
//			jQuery("#bccg [id='qd']").unbind("click").bind("click",function(){hide('cover','sjqx');});
//			jQuery("#bccg [id='close']").unbind("click").bind("click",function(){hide('cover','sjqx');});
			jQuery("#qd").unbind("click").bind("click",function(){hide('cover','bccg');});
		}
	});
}
/**
 * 弹窗关闭时清除数据
 */
function re_dataAuth(){
	var table = "<span style=\"visibility:hidden;width:30%;float:left ;text-align: right;margin-top: 10px\">查询条件：</span>"+
	"<table id=\"dAuthInFo_table\"></table>";
	jQuery("#dAuthInFo_").html(table);
	jQuery("#dAuthid_").html("");
	jQuery("#dAuthUid_").html("");
	jQuery("#dAuthfid_").html("");
	jQuery("#funids_").html("");
}
//选择全部	
function selAll(tab)
{
	if(tab=="tab1"){
		jQuery("input[name='appName']").attr("checked",true);
	}
	if(tab=="tab2"){
		var treeObj = $.fn.zTree.getZTreeObj("sjqx_tree");
	 	treeObj.checkAllNodes(true);
		/*if(treetype == "zTreeCheck"){
		 	var treeObj = $.fn.zTree.getZTreeObj("tree");
	     	treeObj.checkAllNodes(true);
		}
		if(treetype == "easyUiTree"){
			var node = $("#tree").tree('find',1);
			$("#tree").tree('check', node.target);
		}*/
	}
}
//全取消
function deSelAll(tab)
{
	if(tab=="tab1"){
	    jQuery("input[name='appName']").attr("checked",false);
	}
	if(tab=="tab2"){
		var treeObj = $.fn.zTree.getZTreeObj("sjqx_tree");
	    treeObj.checkAllNodes(false);
		/*if(treetype == "zTreeCheck"){
			  var treeObj = $.fn.zTree.getZTreeObj("tree");
		      treeObj.checkAllNodes(false);
			}
		if(treetype == "easyUiTree"){
			var node = $("#tree").tree('find',1);
			$("#tree").tree('uncheck', node.target);
		}*/
	}
}

/**
 * 全选/取消全选
 */
function isSelAll(itemname){
//	var isChecked = $("input[id='"+itemname+"']").attr("checked");
//	if(isChecked){
//		$("input[name='"+itemname+"']").attr("checked",true); 
//	}else{
//		$("input[name='"+itemname+"']").attr("checked",false); 
//	}
	var isChecked = $("input[id='"+itemname+"']")[0].checked;
	var ipt = $("input[name='"+itemname+"']");
	for(var i = 0; i<ipt.length;i++){
		if(isChecked){
			ipt[i].checked=true;
		}else{
			ipt[i].checked=false; 
		}
	}
}
function sub_batch_(){
		var treeObj = $.fn.zTree.getZTreeObj("sjqx_tree");
		var nodes = treeObj.getCheckedNodes();
		var uncheck = treeObj.getCheckedNodes(false);
		var changSta = treeObj.getChangeCheckedNodes();
		
			for(var i=0;i<nodes.length;i++){
				$("#funids_").append("<input type=\"hidden\" name=\"funids\" value=\""+nodes[i].value+"\"/>");
			}
			for(var i=0;i<uncheck.length;i++){
				$("#funids_").append("<input type=\"hidden\" name=\"uncheckfid\" value=\""+uncheck[i].value+"\"/>");
			}
			for(var i=0;i<changSta.length;i++){
				$("#funids_").append("<input type=\"hidden\" name=\"changStas\" value=\""+changSta[i].value+"\"/>");
			}
			var subdata = jQuery("#saveDataAuthForm").serializeArray();
			hide("cover","sjqx");
			jQuery.ajax({
				type:"post",
				url:basePath+"dataAuthConfig/grantDataAuth.controller?t="+Math.random(),
				dataType:"json",
				data:subdata,
				success:function(result){
					showMessageTxt(result.message,"message","bccg");
					re_dataAuth();
					var uid = jQuery("#userid").val();
		    		jQuery("#qd").unbind("click").bind("click",function(){hide("cover","bccg");});
		    		jQuery("#close").unbind("click").bind("click",function(){hide("cover","bccg");});
			    	
				},
				error:function(){
					showMessageTxt("操作失败！","message","bccg");
					re_dataAuth();
					jQuery("#qd").unbind("click").bind("click",function(){hide('cover','bccg');});
//					jQuery("#bccg [id='qd']").unbind("click").bind("click",function(){hide('cover','sjqx');});
//					jQuery("#bccg [id='close']").unbind("click").bind("click",function(){hide('cover','sjqx');});
				}
			});
} 