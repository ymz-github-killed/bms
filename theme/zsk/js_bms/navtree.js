/**
 * 获取树形菜单树的路由方法 
 * @param dataUrl 数据源url，只需.do前面的方法名
 * @param treeType 树的样式类型
 */

function getTree(dataUrl, treeType) {
	switch (treeType) {
	case "treeCollect":
	    gettreeCollect(dataUrl);
	    break;
	case "zTree":
		getzTree(dataUrl);
		break;
	case "zTreeCheck":
		getzTreeCheck(dataUrl);
		break;
	case "easyUiTree":
		geteasyUiTree(dataUrl);
		break;
	default:
		treetype="defaultTree";
		getdefaultTree(dataUrl);
	}
}
/**
 * 说明：ztree插件处理普通类型菜单树 </br>
 * 时间：2014-08-20
 * 作者：admin
 * @param dataUrl 获取json数据的请求连接
 */
function getzTree(dataUrl){
	// 获取原始json数据
	var jsonData = loadTree(dataUrl);
	var json = forzTree(jsonData);
	var setting = {
			 data: {
				simpleData: {
					enable: true
				}
			},
			view: {
				dblClickExpand: true
			},
			callback: {
				onClick: sel
			}
		};
		$(document).ready(function(){
			$("#tree").attr("class","ztree");
			$.fn.zTree.init($("#tree"), setting, json);
		});
		var treeObj = $.fn.zTree.getZTreeObj("tree"); //获取 zTree 对象 tree的定义的dom id
		var node = treeObj.getNodeByParam('id',1); //获取id为1的节点，这个是根节点
		if (node != null) {
			treeObj.selectNode(node);  //选择根节点
			treeObj.expandNode(node, true, false); //
		}
        
}

/**
 * 说明：ztree插件处理checkbox类型菜单树 </br>
 * 时间：2014-08-20
 * 作者：admin
 * @param dataUrl 获取json数据的请求连接
 */
function getzTreeCheck(dataUrl){
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
		$(document).ready(function(){
			$("#tree").attr("class","ztree");
			$.fn.zTree.init($("#tree"), setting, json);
		});
	
		var treeObj = $.fn.zTree.getZTreeObj("tree"); //获取 zTree 对象 tree的定义的dom id
		var node = treeObj.getNodeByParam('id','1'); //获取id为1的节点，这个是根节点
		if(node == null){
			node = treeObj.getNodeByParam('id','00000');
		}
		if (node != null) {
			treeObj.selectNode(node);  //选择根节点
			treeObj.expandNode(node, true, false); //
		}
}
/**
 * 将原系统中的json数据转变成zTree插件需要的json数据类型
 * @param data 原系统的json数据
 * @returns zTree需要的json数据
 */
function forzTree(data){
	 var array = Array();
	 for(var i in data)
	 {  
		 array.push({"id":data[i].id,"pId":data[i].pId,"name":data[i].name,
			 "value":data[i].value,"icon":data[i].icon,"checked":data[i].checked});
	 } 
	 return array;
}
/**
 * easyui tree插件
 * @param dataUrl
 */
function geteasyUiTree(dataUrl){
	// 获取原始json数据
	var jsonData = loadTree(dataUrl);
	var json = foreasyUiTree(jsonData);
	var array = transData(json,'id','pId','children');
	$("#tree").attr("class","easyui-tree");
	showTree(array);
}
/**
 * 将原系统中的json数据转变成zTree插件需要的json数据类型
 * @param data 原系统的json数据
 * @returns zTree需要的json数据
 */
function foreasyUiTree(data){
	 var array = Array();
	 for(var i in data)
	 {  if(data[i].id == 1 || data[i].id == "00000"){
		 array.push({"id":data[i].id,"pId":data[i].pId,"text":data[i].name,"icon":data[i].icon,"value":data[i].value,"state":"open"});
	 	}else if(data[i].pId == 1 ||data[i].pId == "00000" ){
	 		var checked ="";
	 		if(data[i].checked == "false" ||data[i].checked == "" ){checked =""}else{checked="true"}
	 	 array.push({"id":data[i].id,"pId":data[i].pId,"text":data[i].name,"icon":data[i].icon,"value":data[i].value,"checked":checked,"state":"closed"});
	 	}else{
	 	 array.push({"id":data[i].id,"pId":data[i].pId,"text":data[i].name,"icon":data[i].icon,"value":data[i].value,"checked":checked});	
	 	}
	 } 
	 return array;
}
/**
 * BMS改版默认样式
 * @param dataUrl 请求加载菜单的url连接
 * @returns
 */
function getdefaultTree(dataUrl){
	// 获取原始json数据
	var jsonData = loadTree(dataUrl);
	var json = fordefaultTree(jsonData);
	var array = transData(json,'id','pId','children');
	var fatherMenus = array[0].children;
	return fatherMenus;
}
/**
 * 将原系统中的json数据转变成系统默认需要的json数据类型
 * @param data 原系统的json数据
 * @returns zTree需要的json数据
 */
function fordefaultTree(data){
	 var array = Array();
	 for(var i in data)
	 {  if(data[i].id == 1 || data[i].id == "00000"){
		 array.push({"id":data[i].id,"pId":data[i].pId,"text":data[i].name,"value":data[i].value,"url":data[i].url});
	 	}else if(data[i].pId == 1 ||data[i].pId == "00000" ){
	 		var checked ="";
	 		if(data[i].checked == "false" ||data[i].checked == "" ){checked =""}else{checked="true"}
	 	 array.push({"id":data[i].id,"pId":data[i].pId,"text":data[i].name,"value":data[i].value,"url":data[i].url});
	 	}else{
	 	 array.push({"id":data[i].id,"pId":data[i].pId,"text":data[i].name,"value":data[i].value,"url":data[i].url});	
	 	}
	 } 
	 return array;
}
/**
 * 获取原始json数据的ajax方法
 * 
 * @param dataUrl 获取数据的连接
 * @returns json原始数据 无父子关系
 */
function loadTree(dataUrl) {
	var json = "";
	if (dataUrl != null) {
		$.ajax({
			type : "POST",
			url : dataUrl,
			async : false,
			cache : false,
			dataType : "json",
			success : function(jsondata) {
				json = jsondata;
			},
			error : function(jsondata) {
				alert("获取服务器数据出现异常，请检查网络连接，或联系管理员!");
			}
		});
	} else {
		alert("url为空，请输入url参数！");
	}
	return json;
}

////////////////////////////////////////////////////////////
/////////////////////json数据处理工具////////////////////////////
////////////////////////////////////////////////////////////
/**
 * json格式转树状结构 工具方法
 * 
 * @param jsondata
 *            json数据
 * @param idStr
 *            id的字符串
 * @param pidStr
 *            父id的字符串
 * @param childrenStr
 *            children的字符串
 * @return {Array} 数组
 */
function transData(jsondata, idStr, pidStr, childrenStr) { 
		var r = [], hash = {}, id = idStr, pid = pidStr, children = childrenStr, i = 0, j = 0, len = jsondata.length;    
		for(; i < len; i++){    
	        hash[jsondata[i][id]] = jsondata[i];    
	    }      
	    for(; j < len; j++){    
	        var aVal = jsondata[j], hashVP = hash[aVal[pid]];    
	        if(hashVP){ 
	        	!hashVP[children] && (hashVP[children] = []);   
	            hashVP[children].push(aVal);    
	        }else{    
	            r.push(aVal);    
	        }    
	    }    
	    return r;    
}