document.write("<link rel='stylesheet' type='text/css' href='"+basePath+"mvcbms/pub/js/ztree/zTreeStyle/zTreeStyle.css'/>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.core-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/ztree/jquery.ztree.excheck-3.5.min.js' type='text/javascript'></script>");
document.write("<script src='"+basePath+"mvcbms/pub/js/navtree.js' type='text/javascript'></script>");

var collectid;
var editRscResource;
jQuery(function(){
	getTree(basePath+"funcManage/getCollectTree.controller","treeCollect");
	 
});
/**
 *ztree插件的回调函数（单击事件）
 */
function sel(e,treeId, treeNode) {	
	var zTree = $.fn.zTree.getZTreeObj("tree");
	/*zTree.expandNode(treeNode);*/   //点击字折叠	
}
//拼接红心
function textDom(treeId, treeNode){
	var zTree = $.fn.zTree.getZTreeObj("tree");
	var nodes = zTree.getNodes();
	var textObj = $("#" + treeNode.tId );
    var nodeId = treeNode.id;
    if ($("#diyBtn_" + treeNode.id).length > 0) {
        return;
    }   
    if(treeNode.pId!=nodes[0].id && treeNode.urll!=null){
       var editStr="<img class='collectimg'style='width:10px' id='img_"+treeNode.id+"' src='"+basePath+"/theme/bmsHTGL/images/xinaixin.png'/> <input type='hidden' value='"+treeNode.id+"'/>";
       textObj.append(editStr);
    }
    $.ajax({
		dataType:"json",  
		url:basePath+"collectQuery/findCollect.controller",
		success:function(result){
			echoCollect(eval(result.queryCollect))
		}
	});
 
   
}

//心型单击事件
$("body").on("click",".collectimg", function(e){
	var id= $(this).next().val();
	

	if($(this).attr("src")==""+basePath+"/theme/bmsHTGL/images/xinaixin.png"){
		var y=cont();
		if(y!=null){
			showMessageTxt(y,"message_","bccg");
			return false;
		}
		$(this).attr("src",""+basePath+"/theme/bmsHTGL/images/collect2.png");
		$.ajax({
			type:"get",
			dataType:"json",
			url:basePath+"collectQuery/addCollect.controller?id="+id,
			success:function(result){
			
			}	
		});
		
	}else{
		$(this).attr("src",""+basePath+"/theme/bmsHTGL/images/xinaixin.png");
		$.ajax({
		type:"get",
		dataType:"json",
		url:basePath+"collectQuery/removeCollect.controller?id="+id,
		success:function(result){
		}
	});
		
	}
});

//循环遍历数据(回显收藏页)
function echoCollect(jsonData){
	if (jsonData != null || jsonData != "") {
		for ( var k in jsonData) {  
			$("#img_"+jsonData[k].funcId).attr("src",basePath+"theme/bmsHTGL/images/collect2.png");
			
		}
	}
}  

function cont(){
	var text=null;
	$.ajax({
		type:"get",
		dataType:"json",
		async:false,
		url:basePath+"collectQuery/findCollectCount.controller",
		success:function(result){
			var i=eval(result.findCollectCount);
			if(i==20){
				text="最多只能收藏20个页面";
				return text;
			}
		},
        error:function(){
    	    showMessageTxt("操作失败！","message_","bccg");
        }
		
	});
	return text;
}
