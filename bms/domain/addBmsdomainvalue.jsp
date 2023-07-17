<%@ page language="java" contentType="text/html; charset=GBK"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/strCheck.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
		<script type="text/javascript">
		function onFormSubmit()
		{
			var str= new Array(new Array(),new Array());
			str[0]=['id_','主键',32,1];
			str[1]=['label_','显示值',60,1,1];
			str[2]=['value_','实际值',60,1,1];
			str[3]=['indexsequnce_','排序值',19,1,1];
			var bool=checkStr(str);
			if(!bool){
				return false;
			}
			var parentId=document.getElementById("parentId_").value;
			var valueType=document.getElementById("valueType_").value;
			if(valueType=="TREE" && parentId==""){
				$.ajax({
   					type: "POST",
   					url: "${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/findTree.do",
   					dataType:"html",
   					success: function(msg){
			     		if(msg=='no'){
    	 					alert("请选择上级目录，根目录只能添加一个！");
     						return false;
     					}else{
		     				document.formName.submit();
     					}
   					}
				});
			}else{
				document.formName.submit();
			}
		}
		</script>
<body class="overfwidth">
<div id="workspace">
	<!--主体 开始-->
    	<!--按钮 开始--><!--按钮 结束-->  
        <!--框内内容 开始-->
          

        <!--框内内容 结束-->
            <!--按钮 开始--> 
            <div class="overf pb5">
           <h1> <span class="left pt5">字典值定义</span></h1>
             </div>
             <div class="editspace">
            <form name="formName" method="post" class="cmxform" 
				action="${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/addBmsDomainvalue.do"
				method="post" target="hideframe" >
              <fieldset>
                <!--ol 开始-->
                <ol>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>主键：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="id_" type="text" name="id" value="<%=new  com.sinovatech.base.util.ImitateUUID().getID() %>" readonly="readonly" class="bgw" />
                    </span></h1>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>显示值：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="label_" type="text" name="domainlabel" value="" class="bgw" />
                    </span></h1>
                  </li>
                      <li class="listyle_4">
                    <label class="left pt5"><em>*</em>实际值：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="value_" type="text" name="domainvalue" value="" class="bgw" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>排序值：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="indexsequnce_" type="text" name="indexsequnce"
										value="" class="bgw" />
					  <input type="hidden" value="${parentId}" id="parentId_" name="parentId">
					  <input type="hidden" value="${valueType}" id="valueType_" name="valueType">
                    </span></h1>
                  </li>
                </ol>
                <!--ol 结束-->               
              </fieldset>
            </form>
          </div>
        <div class="toolbar">
                <a href="#" target="_parent" class="sexybutton" onclick="onFormSubmit();return false"><span><span>保存</span></span></a>
        <a href="#" class="sexybutton" onclick="history.back();"><span><span>返回</span></span></a>
                </div>
        <div class="eXtremeTable">
            
        </div>
            <!--按钮 结束-->  
    	<!--主体 结束-->
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
