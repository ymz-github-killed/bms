<%@ page language="java" contentType="text/html; charset=GBK"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
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
			str[0]=['id_','����',32,1];
			str[1]=['label_','��ʾֵ',60,1,1];
			str[2]=['value_','ʵ��ֵ',60,1,1];
			str[3]=['indexsequnce_','����ֵ',19,1,1];
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
    	 					alert("��ѡ���ϼ�Ŀ¼����Ŀ¼ֻ�����һ����");
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
	<!--���� ��ʼ-->
    	<!--��ť ��ʼ--><!--��ť ����-->  
        <!--�������� ��ʼ-->
          

        <!--�������� ����-->
            <!--��ť ��ʼ--> 
            <div class="overf pb5">
           <h1> <span class="left pt5">�ֵ�ֵ����</span></h1>
             </div>
             <div class="editspace">
            <form name="formName" method="post" class="cmxform" 
				action="${pageContext.request.contextPath}/bms/domain/bmsdomainvalue/addBmsDomainvalue.do"
				method="post" target="hideframe" >
              <fieldset>
                <!--ol ��ʼ-->
                <ol>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>������</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="id_" type="text" name="id" value="<%=new  com.sinovatech.base.util.ImitateUUID().getID() %>" readonly="readonly" class="bgw" />
                    </span></h1>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>��ʾֵ��</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="label_" type="text" name="domainlabel" value="" class="bgw" />
                    </span></h1>
                  </li>
                      <li class="listyle_4">
                    <label class="left pt5"><em>*</em>ʵ��ֵ��</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="value_" type="text" name="domainvalue" value="" class="bgw" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5"><em>*</em>����ֵ��</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="indexsequnce_" type="text" name="indexsequnce"
										value="" class="bgw" />
					  <input type="hidden" value="${parentId}" id="parentId_" name="parentId">
					  <input type="hidden" value="${valueType}" id="valueType_" name="valueType">
                    </span></h1>
                  </li>
                </ol>
                <!--ol ����-->               
              </fieldset>
            </form>
          </div>
        <div class="toolbar">
                <a href="#" target="_parent" class="sexybutton" onclick="onFormSubmit();return false"><span><span>����</span></span></a>
        <a href="#" class="sexybutton" onclick="history.back();"><span><span>����</span></span></a>
                </div>
        <div class="eXtremeTable">
            
        </div>
            <!--��ť ����-->  
    	<!--���� ����-->
</div>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>
</body>
</html>
