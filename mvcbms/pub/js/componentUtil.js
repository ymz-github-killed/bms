function setPageMessage(formId){
	
var firstEnter = jQuery("#"+formId+" [id='firstEnter']").val();
if(firstEnter == null){
	jQuery("#"+formId).append("<input type='hidden' id='pageNum' name='pageBean.pageNum' value='1'></input>");
	jQuery("#"+formId).append("<input type='hidden' id='rowDisplayed' name='pageBean.rowDisplayed' value='10'></input>");
	jQuery("#"+formId).append("<input type='hidden' id='firstEnter' name='pageBean.firstEnter' value='true'></input>");
	jQuery("#"+formId).append("<input type='hidden' id='sumPage'  value=''></input>");	
	jQuery("#"+formId).append("<input type='hidden' id='nextPageNum'  value=''></input>");	
	jQuery("#"+formId).append("<input type='hidden' id='beforePageNum'  value=''></input>");	
}
}
/**
 * 分页信息展示
 */
function pagingMessage(formId,pageMessage){
	jQuery("#"+formId+" [id='pageNum']").val(pageMessage.pageNum);
	jQuery("#"+formId+" [id='rowDisplayed']").val(pageMessage.rowDisplayed);
	jQuery("#"+formId+" [id='firstEnter']").val(pageMessage.firstEnter);
	jQuery("#"+formId+" [id='sumPage']").val(pageMessage.sumPage);
	jQuery("#"+formId+" [id='nextPageNum']").val(pageMessage.nextPageNum);
	jQuery("#"+formId+" [id='beforePageNum']").val(pageMessage.beforePageNum);
	jQuery("#"+formId+"_r [id='sumPage']").html(pageMessage.sumPage);
	//数据总条数
	jQuery("#"+formId+"_f [id='totalNum']").html(pageMessage.totalNum);
	//从beginNum条到endNum条
	if(pageMessage.totalNum == 0){
		beginNum = 0;
		endNum = 0;
	}else{
		var beginNum = (parseInt(pageMessage.pageNum)-1)*parseInt(pageMessage.rowDisplayed)+1;
		var endNum = beginNum+parseInt(pageMessage.rowDisplayed)-1;
		endNum>pageMessage.totalNum?endNum=pageMessage.totalNum:endNum=endNum;
	}
	jQuery("#"+formId+"_f [id='beginNum']").html(beginNum);
	jQuery("#"+formId+"_f [id='endNum']").html(endNum);
}

/**
 * map对象
 * @returns {Map}
 */
function Map() {     
    /** 存放键的数组(遍历用到) */    
    this.keys = new Array();     
    /** 存放数据 */    
    this.data = new Object();     
         
    /**   
     * 放入一个键值对   
     * @param {String} key   
     * @param {Object} value   
     */    
    this.put = function(key, value) {     
        if(this.data[key] == null){     
            this.keys.push(key);     
        }     
        this.data[key] = value;     
    };     
         
    /**   
     * 获取某键对应的值   
     * @param {String} key   
     * @return {Object} value   
     */    
    this.get = function(key) {     
        return this.data[key];     
    };     
         
    /**   
     * 删除一个键值对   
     * @param {String} key   
     */    
    this.remove = function(key) {     
        this.keys.remove(key);     
        this.data[key] = null;     
    };     
         
    /**   
     * 遍历Map,执行处理函数   
     *    
     * @param {Function} 回调函数 function(key,value,index){..}   
     */    
    this.each = function(fn){     
        if(typeof fn != 'function'){     
            return;     
        }     
        var len = this.keys.length;     
        for(var i=0;i<len;i++){     
            var k = this.keys[i];     
            fn(k,this.data[k],i);     
        }     
    };     
         
    /**   
     * 获取键值数组(类似Java的entrySet())   
     * @return 键值对象{key,value}的数组   
     */    
    this.entrys = function() {     
        var len = this.keys.length;     
        var entrys = new Array(len);     
        for (var i = 0; i < len; i++) {     
            entrys[i] = {     
                key : this.keys[i],     
                value : this.data[i]     
            };     
        }     
        return entrys;     
    };     
         
    /**   
     * 判断Map是否为空   
     */    
    this.isEmpty = function() {     
        return this.keys.length == 0;     
    };     
         
    /**   
     * 获取键值对数量   
     */    
    this.size = function(){     
        return this.keys.length;     
    };     
         
    /**   
     * 重写toString    
     */    
    this.toString = function(){     
        var s = "{";     
        for(var i=0;i<this.keys.length;i++,s+=','){     
            var k = this.keys[i];     
            s += k+"="+this.data[k];     
        }     
        s+="}";     
        return s;     
    };     
}  
/**
 * 
 * @param jsonData 要展示的json数据
 * @param id table数据展示的tbody标签id
 */
var m = new Map();//表格模版
function tableUtil(jsonData, id) {
	var rowClass = $("#" + id).attr("clazz");
	var rowClassArr;
	if(rowClass!=""&&rowClass!=null){
		rowClassArr = rowClass.split("$");
	}
	var dataStr = "";
	var tbody_id = "#" + id+"_tbody";
	var template;
	if (m.get(id) == null) {
		if(id=="noticelb"){
			template = "<tr class='{rowClass}' onclick='id_click(\"{id}\")' style='cursor:pointer' >" + $("#" + id).html()+"</tr>";	
		}else{
			template = "<tr class='{rowClass}' >" + $("#" + id).html()+"</tr>";
		}
		m.put(id, template);
	} else {
		template = m.get(id);
	}
	jQuery(tbody_id).html("");
	if (jsonData != null || jsonData != "") {
		// 奇偶行计数器
		var i = 0;
		// 遍历输出数据行
		for ( var k in jsonData) {
			var dataTemp = template;
			// 遍历对象属性
			for ( var h in jsonData[k]) {
				var keyword = '{' + h + '}';
				var theValue = jsonData[k][h] == null ? '&nbsp;' : jsonData[k][h];
				dataTemp = dataTemp.replace(new RegExp(keyword, 'gm'),
						jsonData[k][h] == null ? '&nbsp;' : theValue);
				dataTemp = dataTemp.replace(new RegExp(keyword, 'gm'),"");
			}
			if (rowClassArr != null) {
				i = i % 2;
				dataTemp = dataTemp.replace(new RegExp("{rowClass}", 'gm'),
						rowClassArr[i]);
				i++;
			}
			dataStr += dataTemp;
		}
		jQuery(tbody_id).append(dataStr);
	}

}



/**
 * 给url地址增加时间戳，骗过浏览器，不读去缓存  
 * @param url
 * @returns
 */
function convertURL(url){  
    var timestmp = (new Date()).valueOf();  
    //将时间戳追加到url上面  
    if(url.indexOf("?")==-1){
    	url = url+ "?t=" +timestmp;  
    }else{
    	url = url+ "&t=" +timestmp; 
    }
    return url;   
}  

/**
 * 
 * @param url 请求连接
 * @param id table数据展示的tbody标签id
 */
function getTableData(url,showDataId,formId){
	//get--》post jxh
	jQuery.ajax({  
    	type:"post",
        url:convertURL(url),
        data: jQuery("#"+formId).serialize(),
        success:function(result){ 
        	if($.parseJSON(result).list.length<1&&$.parseJSON(result).pageDTO.pageBean.pageNum!=1){
        		jQuery("#"+formId+" [id='pageNum']").val("1");
        		getTableData(url,showDataId,formId);
        	}
        	//分页信息
        	pageMessage =$.parseJSON(result).pageDTO.pageBean;
        	//给表单信息栏赋值
        	pagingMessage(formId,pageMessage);
        	//表格组件调用
        	tableUtil(eval($.parseJSON(result).list),showDataId);
        }
    });
}
/*
function extend(destination, source) {  
    for (var property in source)  
      destination[property] = source[property];  
    return destination;  
} */
/**
 * 
 * @param url 请求的连接
 * @param tab 事件标记： first首页;end末页;next下一页;before上一页;changerowdisplayed每页展示条数;go去第几页;search条件查询
 * @param id table数据展示的tbody标签id,表格模版id
 * @param formId 联合查询表单id
 * @param countPageNum 每页展示条数
 * @param goPage 去第几页
 */
function search(url,tab,showDataId,formId,countPageNum,goPage){
	//首页
	if(tab=="first"){
		firstPage(url,showDataId,formId);
		return;
	}
	//末页
	if(tab=="end"){
		endPage(url,showDataId,formId);
		return;
	}
	//下一页
	if(tab=="next"){
		nextPage(url,showDataId,formId);
		return;
	}
	//上一页
	if(tab=="before"){
		beforePage(url,showDataId,formId);
		return;
	}
	//改变每页展示数
	if(tab=="changerowdisplayed"){
		changeRowDisplayed(url,showDataId,formId,countPageNum);
		return;
	}
	//go第几页
	if(tab=="go"){
		go(url,showDataId,formId,goPage);
		return;
	}
	//查询
	if(tab=="search"){
		searchList(url,showDataId,formId);
		return;
	}
}
/**去第几页*/
function go(url,showDataId,formId,goPage){
	if(goPage == null || goPage == ""){
		//goPage = parseInt(jQuery("#"+formId+" [id='pageNum']").val());
		return false;
	}else{
		goPage = parseInt(goPage);
	}
	var sumPage = parseInt(jQuery("#"+formId+" [id='sumPage']").val());
	if(goPage>sumPage || goPage<1){
		//goPage = sumPage;
		return false;
	}
	jQuery("#"+formId+" [id='pageNum']").val(goPage);
	getTableData(url,showDataId,formId);
}
/**下一页*/
function nextPage(url,showDataId,formId){
	var pageNum = jQuery("#"+formId+" [id='pageNum']").val();
	var sumPage = jQuery("#"+formId+" [id='sumPage']").val();
	if(parseInt(pageNum) >= parseInt(sumPage)){
		return false;
	}else{
		jQuery("#"+formId+" [id='pageNum']").val(jQuery("#"+formId+" [id='nextPageNum']").val());
	}
	getTableData(url,showDataId,formId);

}
/**上一页*/
function beforePage(url,showDataId,formId){
	var beforePageNum = jQuery("#"+formId+" [id='beforePageNum']").val();
	if(parseInt(beforePageNum) <= 0){
		return false;
	}else{
		jQuery("#"+formId+" [id='pageNum']").val(beforePageNum);
	}
	getTableData(url,showDataId,formId);
}
/**首页*/
function firstPage(url,showDataId,formId){
	jQuery("#"+formId+" [id='pageNum']").val("1");
	getTableData(url,showDataId,formId);
}
/**末页*/
function endPage(url,showDataId,formId){
	jQuery("#"+formId+" [id='pageNum']").val(jQuery("#"+formId+" [id='sumPage']").val());
	getTableData(url,showDataId,formId);
}
/**每页显示countPageNum条数据*/
function changeRowDisplayed(url,showDataId,formId,countPageNum){
	jQuery("#"+formId+" [id='rowDisplayed']").val(countPageNum);
	jQuery("#"+formId+" [id='pageNum']").val("1");
	getTableData(url,showDataId,formId);
}
/**复合查询*/
function searchList(url,showDataId,formId){
	jQuery("#"+formId+" [id='pageNum']").val("1");
	getTableData(url,showDataId,formId);
}
/**
 * 初始化下拉框选项的内容
 * @param jsonData
 * @param name
 * @param formid
 */
function initOptionContent(jsonData,formid,inputname){
	var inputStr = "<input class='undis' name='"+inputname+"' value=''></input>"
	jQuery("#"+formid+" [id='"+inputname+"Select']").html("");
	var p = "<p name=''>请选择</p>";
	jQuery("#"+formid+" [id='"+inputname+"Select']").append(p);
	for(var i in jsonData){
		var p = "<p name='"+jsonData[i].key+"'>"+jsonData[i].value+"</p>";
		jQuery("#"+formid+" [id='"+inputname+"Select']").append(p);
	}
	jQuery("#"+formid+" [id='"+inputname+"Selected']").append(inputStr);
}
