<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/view.tld" prefix="view"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>炎黄新星网站管理系统</TITLE>
<meta http-equiv="content-type" content="text/html; charset=GBK">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<link href="${pageContext.request.contextPath}/css1.6/public.css" rel="stylesheet" type="text/css"  />
<link href="${pageContext.request.contextPath}/css1.6/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${pageContext.request.contextPath}/js/strCheck.js"></script>
<meta name=generator content="MSHTML 8.00.6001.18939">
<script type="text/javascript">
		function onFormSubmit()
		{
			var str= new Array(new Array(),new Array());
			str[0]=['name_','字典编码',32,1];
			str[1]=['remark_','字典名称',500];
			str[2]=['dic_table_','字典表',50,1,1];
			str[3]=['dic_code_fid_','值字段',50];
			str[4]=['dic_name_fid_','名称字段',50];
			str[5]=['dic_where_','过滤条件',200,1];
			str[6]=['dic_order_','排序规则',500];
			str[7]=['id_','主键字段',50];
			str[8]=['parentId_','父主键ID',50];
			str[9]=['level_','层级字段',50];
			str[10]=['description_','描述',200];
			var bool=checkStr(str);
			if(!bool){
				return false;
			}
			if(!/^\w+$/g.test(document.getElementById("name_").value))
			{
				alert("字典编码格式不正确！");
				return false;
			}
			
			document.frmApply.submit();
		}
		
		function getSelectedValue(id){
			var checks = document.getElementsByName(id);
			var arry = "";
			for (var i=0; i<checks.length; i++) {
				if (checks [i].checked == true) {
					arry += checks [i].value;
				}
			}
			return arry;
		}
		
		
		function doSelectValueType () {
			var v = getSelectedValue("valueType");
			var t1 = document.getElementById("tr1");
			var t2 = document.getElementById("tr2");
			var t3 = document.getElementById("tr3");
			if (v == "LIST") {
				t1.style.display = "none";
				t2.style.display = "none";
				t3.style.display = "none";
			} else {
				t1.style.display = "";
				t2.style.display = "";
				t3.style.display = "";
			}
		}
		
		
		function setInnerType(){
			var v = getSelectedValue("dic_inner");
			if (v == "1") {
				selectIn ();
			} else {
				selectNo ()
			}
		}
		
		function selectIn () {
			if (document.getElementById("name_").value == "") {
				alert ("请先填写字典编码。");
				document.getElementById("name_").focus();
			} else {
				document.getElementById("dic_table_").value = "BMS_DOMAINVALUE";
				document.getElementById("dic_code_fid_").value = "VALUE";
				document.getElementById("dic_name_fid_").value = "LABEL";
				document.getElementById("dic_where_").value = " and DOMAINNAME='" + document.getElementById("name_").value + "'";
				document.getElementById("dic_order_").value = "INDEXSEQUNCE";
				document.getElementById("level_").value = "LEV";
				document.getElementById("parentId_").value = "PARENTID";
				document.getElementById("id_").value = "ID";
			}
		}
		
		
		function selectNo () {
			document.getElementById("level_").value = "";
			document.getElementById("parentId_").value = "";
			document.getElementById("id_").value = "";
			document.getElementById("dic_table_").value = "";
			document.getElementById("dic_code_fid_").value = "";
			document.getElementById("dic_name_fid_").value = "";
			document.getElementById("dic_where_").value = "";
			document.getElementById("dic_order_").value = "";
		}
   function rbutton()
	{
	    document.getElementById("rbid_").click();
	}
		
		</script>
<body onload="setInnerType()" class="overfwidth">
 
<div class="barnavtop">您所在的位置：系统管理 > 数据字典 > 新增数据字典</div>
<div id="workspace">
	<!--主体 开始-->
    <div id="container">
    	<!--按钮 开始-->  
      <div class="toolbar">
      	<a href="#" class="sexybutton" onclick="onFormSubmit();return false"><span><span>保存</span></span></a>
		<a href="#" class="sexybutton"  onClick="rbutton()"><span><span>重置 </span></span></a>
        <a href="javascript:history.back();" class="sexybutton"><span><span>返回</span></span></a>
                </div>
        <!--按钮 结束-->   
        <!--框内内容 开始-->
         <div class="editspace">
            <form name="frmApply" class="cmxform"
							action="${pageContext.request.contextPath}/bms/domain/bmsdomain/addBmsDomain.do"
							target="hideframe" method="post" >
              <fieldset>
                <!--ol 开始-->
                <ol>
                  <li class="listyle_4">
                    <input name="Button5223" type="reset" id="rbid_" value="重填" style="display: none;">
                    <label class="left pt5"><em>*</em>字典编码：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="name_" type="text" name="name" class="bgw" />
                      <em>由字母、数字和下划线组成</em>
                    </span></h1>
                  <li class="listyle_4">
                    <label class="left pt5">字典名称：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="remark_" type="text" name="remark" class="bgw" />
                    </span></h1>
                  </li>
                   <li class="listyle_4 bordernone">
                    <label class="left pt5">字典类型：</label>
                    <span class="cmxformspan">
                     <domain:radioDomain domain="DOMAINTYPE" name="valueType"
									uid="valueType_" value="LIST" onclick="doSelectValueType()" />
					 </span> </li>
                       <li class="listyle_4 bordernone">
                    <label class="left pt5">是否内部字典：</label>
                    <span class="cmxformspan">
                    	<domain:radioDomain domain="YORN" name="dic_inner" uid="dic_inner_"
									value="0" onclick="setInnerType()" />  
					</span> </li>
                      <li class="listyle_4">
                    <label class="left pt5"><em>*</em>字典表：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="dic_table_" type="text" name="dic_table" class="bgw" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5">值字段：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="dic_code_fid_" type="text" name="dic_code_fid" class="bgw" />
                    </span></h1>
                  </li>
                  <li class="listyle_4" id="qie">
                    <label class="left pt5">名称字段：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="dic_name_fid_" type="text" name="dic_name_fid" class="bgw" />
                    </span></h1>
                  </li>
                  <li class="listyle_4" id="qiee">
                    <label class="left pt5"><em>*</em>过滤条件：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="dic_where_" type="text" name="dic_where" class="bgw" />
                      <em>请正确填写</em>
                    </span></h1>
                  </li>
                  <li class="listyle_4" id="qeie">
                    <label class="left pt5">排序规则：</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" name="dic_order" id="dic_order_" class="bgw" />
                    </span></h1>
                  </li>
                  	<li class="listyle_4" id="tr1" style="display: none">
                    	<label class="left pt5">主键字段：</label>
                    	<h1 class="cmxformh1"> <span class="cmxformspan">
                      	<input id="id_" type="text" name="id" class="bgw" />
                    	</span></h1>
                    </li>
                    <li class="listyle_4" id="tr2" style="display: none">
                    	<label class="left pt5">父主键字段：</label>
                    	<h1 class="cmxformh1"> <span class="cmxformspan">
                      	<input id="parentId_" type="text" name="parentId" class="bgw" />
                    	</span></h1>
                    </li>
                    <li class="listyle_4" id="tr3" style="display: none">
                    	<label class="left pt5">层级字段：</label>
                    	<h1 class="cmxformh1"> <span class="cmxformspan">
                      	<input name="level" id="level_" type="text" class="bgw" />
                    	</span></h1>
                    </li>
                 <li class="listyle_4 bordernone">
                    <label class="left pt5">描述：</label>
                    <textarea name="description" id="description_" cols="80" rows="3"></textarea>
                  </li>
                </ol>
                <!--ol 结束-->               
              </fieldset>
            </form>
          </div>
      <div class="toolbar">
       	<a href="#" class="sexybutton" onclick="onFormSubmit();return false"><span><span>保存</span></span></a>
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>重置 </span></span></a>
        <a href="javascript:history.back();" class="sexybutton"><span><span>返回</span></span></a>        </div>
        <!--框内内容 结束-->
  </div>
</div>
</body>
</html>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>

