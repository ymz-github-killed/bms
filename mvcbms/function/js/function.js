document.write("<link rel='stylesheet' type='text/css' href='"+basePath+"mvcbms/pub/js/ztree/zTreeStyle/zTreeStyle.css'/>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.core-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.excheck-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/navtree.js' type='text/javascript'></script>");

var editRscFunc;
var editRscResource;
var img_state=true;
var imgSrc=true;
jQuery(function(){
	getTree(basePath+"funcManage/getTree.controller","zTree");	
	selectInfo();
	jQuery(".bt_export").removeAttr("onclick").bind("click",function(){exportFunc()});
	jQuery(".bt_import").removeAttr("onclick").bind("click",function(){beforeImport()});
	jQuery(".bt_beforeAdd").removeAttr("onclick").bind("click",function(){beforeAddFunc()});
	jQuery(".bt_edit").removeAttr("onclick").bind("click",function(){beforeEdit()});
	jQuery(".bt_del").removeAttr("onclick").bind("click",function(){beforeDel()});
	jQuery(".bt_reset").bind("click",function(){reset()});
	jQuery(".bt_back").removeAttr("onclick").bind("click",function(){back()});
	jQuery(".bt_add").removeAttr("onclick").bind("click",function(){addFunc()});
	jQuery("#tree").after("<div class='undis' id='importFunc'></div>");
	jQuery("#importFunc").html("<input type='hidden' id='funcId' value=''/>");
	$("#div_id_img").hide();
});
/**
 *ztree插件的回调函数
 */
function sel(e,treeId, treeNode) {
	jQuery("#importFunc").html("<input type='hidden' id='funcId' value='"+treeNode.id+"'/>");
	var zTree = $.fn.zTree.getZTreeObj("tree");
	zTree.expandNode(treeNode);
	showFunc(treeNode.id,treeNode.pId);
}

function selNode(id){
			var treeObj = $.fn.zTree.getZTreeObj("tree"); //获取 zTree 对象 tree的定义的dom id
			var node = treeObj.getNodeByParam('id',id); //获取id为1的节点，这个是根节点
			if (node != null) {
				treeObj.selectNode(node);  //选择根节点
				treeObj.expandNode(node, true, false); //
				showFunc(id);
			}else{
				var pid = jQuery("#fPid_").val();
				var node = treeObj.getNodeByParam('id',pid); //获取id为1的节点，这个是根节点
				if (node != null) {
					treeObj.selectNode(node);  //选择根节点
					treeObj.expandNode(node, true, false); //
					showFunc(pid);
				}
			}
}
//刷新树
function refreshTree(){
	getTree(basePath+"funcManage/getTree.controller","zTree");
	var id = jQuery("#id_").val();
	selNode(id);
}
//菜单树的点击事件请求权限资源数据
function showFunc(fId,fpId){
	$("#qnqx_id_hidden").val(fpId)
	jQuery.ajax({
		type:"get",
    	cache:"false",
        url:basePath+"funcQuery/queryFuncById.controller?s="+Math.random(),
        dataType:"json",
        data:"id="+fId,
        success:function(result){
        	var bmsRscFunc = result.bmsRscFunc;
        	var resources = eval(result.resources);
        	//展示权限资源数据
        	showRscFunc(bmsRscFunc,resources);
        },
        error:function(){
        	showMsg("操作失败！");
        }
    }); 
}
/**
 * 展示权限详细信息
 * @param bmsRscFunc
 * @param resources
 */
function showRscFunc(bmsRscFunc,resources){
	reset2();
	//当用户点击菜单树中某个节点时候，在页面中加入一个隐藏域放置该对象的id
	//该id在编辑时候做为被编辑的权限id使用，当新增时，当作新增权限的父id使用
	jQuery("#pfuncid_").html("<input type='hidden' id='id_' value='"+bmsRscFunc.id+"'></input><input type='hidden' id='fPid_' value='"+bmsRscFunc.parentid+"'></input>");
	//遍历功能权限的json数据，在页面展示
	for (var k in bmsRscFunc){
		var el = jQuery('#showInfo [id='+k+'_]');
		if (el){
			if(k=='id'){
				el.val(bmsRscFunc[k]);
			}else{
				el.text(bmsRscFunc[k]==null?"无":bmsRscFunc[k]);	
			}
		}
	}
	//权限资源数据
	if(!jQuery.isEmptyObject(resources)){
		//不是菜单
		jQuery("#show_resources").removeClass("undis");
		jQuery("#menus_").html("否");
		tableUtil(resources,"resourcesdata");
		jQuery("#zylx").show();
	}else{
		//是菜单
		jQuery("#show_resources").addClass("undis");
		jQuery("#menus_").html("是");
		jQuery("#zylx").hide();
	}
	//数据类型
	if(bmsRscFunc.resourcetype=="1"){
		jQuery("#resourcetype_").html("数据列");
	}else if (bmsRscFunc.resourcetype == "0"){
		jQuery("#resourcetype_").html("按钮链接");
	}else{
		jQuery("#resourcetype_").html("无");
	}
	
	showInfo();
}
/**
 * 编辑前请求数据
 */
function beforeEdit(){
	newpg();
	var fId = jQuery("#id_").val();
	jQuery.ajax({
		type:"get",
    	cache:"false",
        url:basePath+"funcQuery/queryFuncById.controller?s="+Math.random(),
        dataType:"json",
        data:"id="+fId,
        success:function(result){
        	//重置使用
        	jQuery("#funcid_").html("<input type='hidden'  name='rscFuncBean.id' value='"+fId+"'></input>");
        	//保存使用
        	jQuery("#funcid").html("<input type='hidden'  name='rscFuncBean.id' value='"+fId+"'></input>");
        	editRscFunc = result.bmsRscFunc;
        	if(editRscFunc.parentid=="1"){
        		$(".xstb_state").show();
        		$("#file").hide();
            	$("#div_id_img").show();
            	$("#img_id").attr("src",editRscFunc.icon)
            	img_state=true;
        	}else{
        		$(".xstb_state").hide();
        		$("#file").attr("type","file");
        		/*$("#file").show();
        		$("#div_id_img").hide();*/
        		img_state=false;
        	}
        	
        	/*$("#div_id_img").append("<img id='img_id' src='"+editRscFunc.icon+"' alt=''/><a id='a_id' href='javascript:;' onclick='img_a_click()'>删除</a>");*/
        	editRscResource = eval(result.resources);
        	beforeEditRscFunc(editRscFunc,editRscResource);
        },
        error:function(){
        	showMsg("操作失败！");
        }
    }); 
}
function img_a_click(){
	imgSrc=false;
	$("#file").show();
	$("#file").attr("type","file");
	$("#div_id_img").hide();
}

/**
 * 编辑前权限数据展示
 * @param bmsRscFunc
 * @param resources
 */
function beforeEditRscFunc(bmsRscFunc,resources){
	jQuery(".bt_reset").unbind("click").bind("click",function(){reset()});
	for (var k in bmsRscFunc){
		var edit = jQuery("#addFunc [id="+k+"_]")
		if(edit){
			edit.val(bmsRscFunc[k]==null?"":bmsRscFunc[k]);	
		}
	}
	//所属应用
	jQuery("#webappSelected span.fleft").html(bmsRscFunc.appName);
	//是否外部地址
	var outeraddr = bmsRscFunc.outeraddr==="1"?"是":"否";
	jQuery("#outeraddSelected span.fleft").html(outeraddr);
	//提交方式
	var httpmethod = bmsRscFunc.httpmethod==="1"?"POST":"GET";
	jQuery("#httpmethodSelected span.fleft").html(httpmethod);
	
	if(!jQuery.isEmptyObject(resources)){
		//不是菜单
		jQuery("#menusSelected span.fleft").html("否");
		tableUtil(resources,"resourcesdata2");
		jQuery(".gnSXYC").hide();
		$(".gnZYLX").show();
		jQuery(".gnTab").show();
	}else{
		//是菜单
		tableUtil(eval([{"id":null,"value":null,"name":null,"url":null}]),"resourcesdata2");
		jQuery("#resourcevalue_").val("");
		jQuery("#resourcename_").val("");
		jQuery("#resourceurl_").val("");
		jQuery("#menusSelected span.fleft").html("是");
		jQuery(".gnSXYC").show();
		$(".gnZYLX").hide();
		jQuery(".gnTab").hide();
	}

	//数据类型
	if(bmsRscFunc.resourcetype=="1"){
		jQuery("#resourcetypeSelected span.fleft").html("数据列");
		jQuery("#resourcetype_").val("1");
	}else if (bmsRscFunc.resourcetype =="0"){
		jQuery("#resourcetype_").val("0");
		jQuery("#resourcetypeSelected span.fleft").html("按钮链接");
	}else{
		jQuery("#resourcetype_").val("");
		jQuery("#resourcetypeSelected span.fleft").html("请选择");
	}
}

/**新增按钮事件*/
function beforeAddFunc(){
	var hidden_id=$("#qnqx_id_hidden").val();
	if(hidden_id==null || hidden_id=="" || hidden_id=="undefined" || hidden_id==undefined ||hidden_id=="null"){
		$(".xstb_state").show();
		$("#file").attr("type","file");
		$("#file").show();//显示
		$("#div_id_img").hide();//隐藏
    	/*$("#img_id").attr("src",editRscFunc.icon)*/
		img_state=true;
	}else{
		$(".xstb_state").hide();
		$("#file").attr("type","file");
		$("#file").show();
		$("#div_id_img").hide();
		img_state=false;
	}
	/*$("#file").show();
	$("#div_id_img").hide();*/
	jQuery(".bt_reset").unbind("click").bind("click",function(){reset2()});
	reset2();
	var fId = jQuery("#id_").val();
	jQuery("#funcid").html("<input type='hidden' name='rscFuncBean.parentid' value='"+fId+"'></input>");
	jQuery("#funcid_").html("");
	tableUtil(eval([{"id":null,"value":null,"name":null,"url":null}]),"resourcesdata2");
	jQuery("#resourcevalue_").val("");
	jQuery("#resourcename_").val("");
	jQuery("#resourceurl_").val("");
	jQuery("#menusSelected span.fleft").html("是");
	jQuery("#resourcetypeSelected span.fleft").html("按钮链接");
	jQuery(".gnSXYC").show();
	$(".gnZYLX").hide();
	jQuery(".gnTab").hide();
	newpg();
}
function countCharacters(content){
    var totalCount = 0; 
    for (var i=0; i<content.length; i++) { 
        var c = content.charCodeAt(i); 
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
             totalCount++; 
         }else {     
             totalCount+=2; 
         } 
     }
    return totalCount;
}
/**新增下级菜单或编辑保存*/
function addFunc(){
	var filetype=$("#file").attr("type");
	var keyValue = document.getElementsByName("value");
	var names =  document.getElementsByName("name");
	var urls =  document.getElementsByName("url");
	var values = "";
	var valueList = "";
	var urlvals = "";
	var urlList = "";
	if(img_state){
		if(!imgSrc){
		if(jQuery("#addFunc [id='file']").val()== null || jQuery("#addFunc [id='file']").val()==""){
			showMsg("显示图标不能为空");
			return false;
			
		}else{
			var flag=true;
			var fileTypes = ["jpg", "png","JPG", "PNG"];
			var fileName = jQuery("#file").val();
			var name = fileName.split(".");
			var i = name.length-1;
			name[i] = name[i].toLowerCase();
			var name=name[i];
			/*if(name[i]!="png"){
				showMsg("图片类型不支持！(仅支持'png'格式)");
				return false;
			}*/
			for (var i = 0; i < fileTypes.length; i++) { 
			   if(fileTypes[i]==name){
				   flag=false;
				   break;
			   }
			   
			}
			if(flag){
				showMsg("图片类型不支持！(仅支持'png,jpg'格式)");
				return false;
			}
			
		}
	}
	}
	if(jQuery("#addFunc [id='name_']").val() == "")
	{
		showMsg("功能名称不能为空");
		return false;
	}
	if((jQuery("#addFunc [id='remark_']").val()).length >20)
	{
		showMsg("功能名称不能多余20个字符");
		return false;
	}
	if(jQuery("#addFunc [id='name_']").val().split(" ").length>1){
		showMsg("功能名称不能有空格");
		return false;
	}
	
	
	if(jQuery("#addFunc [id='menus_']").val()=="1"){
		if(jQuery("#addFunc [id='sortnum_']").val().length<1){
			showMsg("顺序值不能为空");
			return false;
		}
	}
	if((jQuery("#addFunc [id='remark_']").val()).length >400)
	{
		showMsg("描述不能多余200个字符");
		return false;
	}
	if(jQuery("#addFunc [id='appcode_']").val() == ""){
		showMsg("请选择一个所属应用！");
		return false;
	}
	if(jQuery("#addFunc [id='resourcetype_']").val()=="1"&&names.length>1){
		showMsg("子节点只能添加一行！");
		return false;
	}
	if(jQuery("#addFunc [id='menus_']").val() == "0"){
		if(names.length>0){
			for(var i=0;i<= names.length-1;i++){
				if(jQuery.trim(names[i].value)==''|| names[i].value==null|| jQuery.trim(urls[i].value)=='' || urls[i].value==null){
					showMsg("第"+(i+1)+" 行的名称与url不能为空！");
					return false;
				}else if(names[i].value.length>100){
					showMsg("第"+(i+1)+" 行的名称字符长度不可多于100！");
					return false;
				}else if(urls[i].value.length>200){
					shwoMsg("第"+(i+1)+" 行的url字符长度不可多于200！");
					return false;
				}
				if(keyValue[i].value=='1'){
					showMsg("key值 1 已存在！");
					return false;
				}else if(keyValue[i].value=='' || keyValue[i].value==null){
					showMsg("第 "+(i+1)+" 行key值不能为空！")
					return false;
				}else if(keyValue[i].value.length>32){
					showMsg("第 "+(i+1)+" 行的key字符长度不可多于32！");
					return false;
				}else if(!/^\w+$/g.test(keyValue[i].value)){
					showMsg("key值只能输入数字、字母及下划线！");
					return false;
				}else{
					if(values==""){
						values=keyValue[i].value;
						urlvals = urls[i].value;
						valueList="@"+keyValue[i].value+"@";
						urlList="@"+urls[i].value+"@";
						
					}else{
						if(valueList.indexOf("@"+keyValue[i].value+"@")>=0&&urlList.indexOf("@"+urls[i].value+"@")>=0){
							showMsg("key值不能重复！");
							return false;
						}else{
							urlvals = urlvals+","+urls[i].value;
							values=values+","+keyValue[i].value;
							valueList=valueList+"@"+keyValue[i].value+"@";
							urlList = urlList+"@"+urls[i].value+"@";
						}
					}
				}
				
			}
		}else{
			showMsg("子节点最少添加一行！");
			return false;
		}
	}
	
	if(jQuery("#addFunc [id='menus_']").val()=="0" && !jQuery.isEmptyObject(jQuery("#funcid").html())){
		var appCode=jQuery("#addFunc [id='appcode_']").val();
		var resourcesid =document.getElementsByName("resourcesid"); 
		/**编辑权限*/
		if(resourcesid.length > 0){
			var rscResource =  document.getElementsByName("resourcesid");
			var resourceId = "";
			if(rscResource[0].value != ""){
				for(var i=0;i<rscResource.length;i++){
					if(rscResource[i].value!="" && rscResource[i].value!=null){
						if(resourceId==""){
							resourceId=rscResource[i].value;
						}else{
							resourceId=resourceId+","+rscResource[i].value;
						}
					}
				}
			}
			jQuery.ajax({
				type: "POST",
				url:basePath+"funcQuery/findEditKeyValue.controller?s="+Math.random(),
				dataType:"text",
				data: "values="+values+"&appcode="+appCode+"&resourceid="+resourceId+"&urls="+urlvals,
				success: function(msg){
	 				if(msg!='true'){
						showMsg("key值"+msg+"已存在！");
						return false;
					}else{
						addSubmit();
					}
				}
			});
		}
	}else{
		/**新增权限*/
		jQuery.ajax({
			type: "POST",
			url:basePath+"funcQuery/findKeyValue.controller?s="+Math.random(),
			dataType:"json",
			data: "values="+values+"&appCode="+appCode,
			success: function(msg){
 				if(msg.res!='true'){
 					showMsg("key值"+msg.res+"已存在！");
					return false;
				}else{
					addSubmit();
				}
			}
		});
	}
	
	if(jQuery("#menus_").val() != "1"){
		jQuery("#adaptclass_").val("SSOLogin");
	}else{
		jQuery("#adaptclass_").val("SSOLogin");
	}
}

function addSubmit(){      
	var form = new FormData( $("#addFunc")[0]);
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"funcAdd/addFunc.controller?s="+Math.random(),
        dataType:"json",
        data:form,
        processData: false,
        contentType: false,
        success:function(result){
        	if(result.messageCode.indexOf("S")==0){
        		showMsg4RefreshTree(result.message);
    		}else if(result.messageCode.indexOf("E")==0){
    			showMsg4RefreshTree(result.message);
    		}
        },
        error:function(){
        	showMsg("操作失败！");
        }
    }); 
}
/**初始化下拉框*/
function selectInfo(){
	//所属应用下拉框内容
	var webapplist = jsonData.webapplist;
	var inputStr = "<input class='undis' id='appcode_' name='rscFuncBean.appcode' value=''></input>"
	jQuery("#webappSelect").html("");
	jQuery("#webappSelect").append("<p name='' >请选择</p>");
	for(var i in webapplist){
		var p = "<p name='"+webapplist[i].key+"' title='"+webapplist[i].value+"'>"+webapplist[i].value+"</p>";
		jQuery("#webappSelect").append(p);
	}
	jQuery("#webappSelected").html("<span class='fleft' style='overflow:hidden' >请选择</span><span class='fright'>&nbsp;</span>");
	jQuery("#webappSelected").append(inputStr);
	//是否是菜单
	var inputStr1 = "<input class='undis' id='menus_' name='rscFuncBean.menus' value='1'></input>"
	jQuery("#menusSelected span.fleft").html("是");
	jQuery("#menusSelect").html("");
	var p1 = "<p id='cdYes' name='1'>是</p><p id='cdNo' name='0'>否</p>";
	jQuery("#menusSelect").append(p1);
	jQuery("#menusSelected").html("<span class='fleft'>是</span><span class='fright'  >&nbsp;</span>").append(inputStr1);
	$(".gnSXYC").show();
	$(".gnZYLX").hide();
	$(".gnTab").hide();
	
	//资源类型
	var inputStr1 = "<input class='undis' id='resourcetype_' name='rscFuncBean.resourcetype' value='0'></input>"
	jQuery("#resourcetypeSelected span.fleft").html("按钮链接");
	jQuery("#resourcetypeSelect").html("");
	var p1 = "<p id='ButUrl' name='0'>按钮链接</p><p id='DataColumn' name='1'>数据列</p>";
	jQuery("#resourcetypeSelect").append(p1);
	jQuery("#resourcetypeSelected").html("<span class='fleft'>按钮链接</span><span class='fright'  >&nbsp;</span>").append(inputStr1);
	
	tableUtil(eval([{"id":null,"value":null,"name":null,"url":null}]),"resourcesdata2");
	jQuery("#resourcevalue_").val("");
	jQuery("#resourcename_").val("");
	jQuery("#resourceurl_").val("");
	jQuery("#show_resources2").hide();
	//是否外部地址
	var inputStr2 = "<input class='undis' id='outeraddr_' name='rscFuncBean.outeraddr' value='1'></input>"
	jQuery("#outeraddSelected span.fleft").html("是");
	jQuery("#outeraddSelect").html("");
	var p2 = "<p name='1'>是</p><p name='0'>否</p>";
	jQuery("#outeraddSelect").append(p2);
	jQuery("#outeraddSelected").html("<span class='fleft' >是</span><span class='fright'>&nbsp;</span>").append(inputStr2);
	//提交方式
	var inputStr3 = "<input class='undis' id='method_' name='rscFuncBean.httpmethod' value='2'></input>"
	jQuery("#httpmethodSelected span.fleft").html("GET");
	jQuery("#httpmethodSelect").html("");
	var p3 = "<p name='1'>POST</p><p name='2'>GET</p>";
	jQuery("#httpmethodSelect").append(p3);
	jQuery("#httpmethodSelected").html("<span class='fleft' >GET</span><span class='fright'>&nbsp;</span>").append(inputStr3);
	
}

/**
 * 删除权限操作
 * 
 */
function beforeDel(){
	jQuery(".btn_ensure").removeAttr("onclick").bind("click",function(){hide('cover','delete');del()});
	jQuery(".btn_close").removeAttr("onclick").bind("click",function(){hide('cover','delete');});
	showMessage("确定删除该权限？");
}
function del(){
	var funcId = jQuery("#id_").val();
	jQuery.ajax({
		type:"post",
    	cache:"false",
        url:basePath+"funcDel/delFunc.controller?s="+Math.random(),
        dataType:"json",
        data:"id="+funcId,
        success:function(result){
        	if(result.messageCode.indexOf("C")==0){
        		showMsg(result.message);
    		}else{
    			showMsg4RefreshTree(result.message);
    		}
        },
        error:function(){
        	showMsg("操作失败！");
        }
    }); 
}
/***
 * 导出功能权限
 */
function exportFunc(){
	var treeObj = $.fn.zTree.getZTreeObj("tree");
	var nodes = treeObj.getCheckedNodes();
	var id="";
	var bool = false;
	if(nodes.length>0){
		bool=true
	}
	if(bool){
		for(var i in nodes){
			if(nodes[i].value!='1'){
				$("#export").prepend("<input type='hidden' name='tree_chk' value='"+nodes[i].value+"'/>");
			}
		}
//		var url = basePath+"/bms/adm/bmsrscfunc/exportFunc.do /exportFunc/export.controller";
		var url = basePath+"/bms/adm/bmsrscfunc/exportFunc.do";
		jQuery("#export").attr("action",url);
		jQuery("#export").submit();
	}else{
		showMsg("请选择至少一项！");
		return false;
	}
}

/***
 * 跳转到导入页面
 */
function beforeImport(){
	var funcId = jQuery("#funcId").val();
	if(funcId ===""){
		funcId = '1';
	}
	window.location.href=basePath+"importFunc/beforeImport.controller?funcid="+funcId;
}
/**重置*/
function reset(){
	selectInfo();
	document.getElementById("addFunc").reset();
	if(jQuery("#funcid_").html().length<=0){
		return false;
	}else{
		beforeEditRscFunc(editRscFunc,editRscResource);
	}
}
function reset2(){
	document.getElementById("addFunc").reset();
	jQuery("#addFunc [id='icon_']").val("/images/1j4.gif");
	selectInfo();
}
/**后退*/
function back(){
	backpg();
}
/**弹出确定提示信息*/
function showMsg(text,goUrl){
	jQuery("#goUrl").removeAttr("onclick").unbind("click").bind("click",function(){hide('cover','bccg');});
	jQuery("#goUrl_").removeAttr("onclick").unbind("click").bind("click",function(){hide('cover','bccg');});
	//jQuery("#goUrl").attr("href",goUrl);
	//jQuery("#goUrl_").attr("href",goUrl);
	showMessageTxt(text,"message_","bccg");
}

function showMsg4RefreshTree(text){
	jQuery("#goUrl").removeAttr("onclick").unbind("click").bind("click",function(){hide('cover','bccg');refreshTree();});
	jQuery("#goUrl_").removeAttr("onclick").unbind("click").bind("click",function(){hide('cover','bccg');refreshTree();});
	showMessageTxt(text,"message_","bccg");
}
/**弹出是否删除提示信息*/
function showMessage(text){
	jQuery("#message").html(text);
	show("cover","delete");
}
/**
 * 添加权限资源行
 * @param t
 */
function addTR(){
		var htmlText = "<tr><td><input type='text' class='text_4' name='value' id='resourcevalue_'  value='' /></td><td><input type='text' class='text_4' name='name' id='resourcename_' value='' /></td><td><input type='text' class='text_4' name='url' id='resourceurl_' value='' /></td><td><a href='javascript:;' class='ml10 delTR' onClick='delTR(this)'>删除</a></td></tr>";
		jQuery("#resourcesdata2_tbody").append(htmlText);	
		jQuery(".tb_content1 tr:even").removeClass("odd");  
		jQuery(".tb_content1 tr:odd").addClass("odd");
}
/**
 * 删除权限资源行
 * @param t
 */
function delTR(t){
	jQuery(t).parent().parent().remove();
	jQuery(".tb_content1 tr:even").removeClass("odd");  
	jQuery(".tb_content1 tr:odd").addClass("odd");
}