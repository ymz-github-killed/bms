<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@ taglib uri="/WEB-INF/tld/domain.tld" prefix="domain"%>
<%@ taglib uri="/WEB-INF/tld/view.tld" prefix="view"%>
<HTML xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0070)http://192.168.2.36:8011/cms/info/index.do -->
<HEAD>
<TITLE>�׻�������վ����ϵͳ</TITLE>
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
			str[0]=['name_','�ֵ����',32,1];
			str[1]=['remark_','�ֵ�����',500];
			str[2]=['dic_table_','�ֵ��',50,1,1];
			str[3]=['dic_code_fid_','ֵ�ֶ�',50];
			str[4]=['dic_name_fid_','�����ֶ�',50];
			str[5]=['dic_where_','��������',200,1];
			str[6]=['dic_order_','�������',500];
			str[7]=['id_','�����ֶ�',50];
			str[8]=['parentId_','������ID',50];
			str[9]=['level_','�㼶�ֶ�',50];
			str[10]=['description_','����',200];
			var bool=checkStr(str);
			if(!bool){
				return false;
			}
			if(!/^\w+$/g.test(document.getElementById("name_").value))
			{
				alert("�ֵ�����ʽ����ȷ��");
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
				alert ("������д�ֵ���롣");
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
 
<div class="barnavtop">�����ڵ�λ�ã�ϵͳ���� > �����ֵ� > ���������ֵ�</div>
<div id="workspace">
	<!--���� ��ʼ-->
    <div id="container">
    	<!--��ť ��ʼ-->  
      <div class="toolbar">
      	<a href="#" class="sexybutton" onclick="onFormSubmit();return false"><span><span>����</span></span></a>
		<a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
        <a href="javascript:history.back();" class="sexybutton"><span><span>����</span></span></a>
                </div>
        <!--��ť ����-->   
        <!--�������� ��ʼ-->
         <div class="editspace">
            <form name="frmApply" class="cmxform"
							action="${pageContext.request.contextPath}/bms/domain/bmsdomain/addBmsDomain.do"
							target="hideframe" method="post" >
              <fieldset>
                <!--ol ��ʼ-->
                <ol>
                  <li class="listyle_4">
                    <input name="Button5223" type="reset" id="rbid_" value="����" style="display: none;">
                    <label class="left pt5"><em>*</em>�ֵ���룺</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="name_" type="text" name="name" class="bgw" />
                      <em>����ĸ�����ֺ��»������</em>
                    </span></h1>
                  <li class="listyle_4">
                    <label class="left pt5">�ֵ����ƣ�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="remark_" type="text" name="remark" class="bgw" />
                    </span></h1>
                  </li>
                   <li class="listyle_4 bordernone">
                    <label class="left pt5">�ֵ����ͣ�</label>
                    <span class="cmxformspan">
                     <domain:radioDomain domain="DOMAINTYPE" name="valueType"
									uid="valueType_" value="LIST" onclick="doSelectValueType()" />
					 </span> </li>
                       <li class="listyle_4 bordernone">
                    <label class="left pt5">�Ƿ��ڲ��ֵ䣺</label>
                    <span class="cmxformspan">
                    	<domain:radioDomain domain="YORN" name="dic_inner" uid="dic_inner_"
									value="0" onclick="setInnerType()" />  
					</span> </li>
                      <li class="listyle_4">
                    <label class="left pt5"><em>*</em>�ֵ��</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="dic_table_" type="text" name="dic_table" class="bgw" />
                    </span></h1>
                  </li>
                  <li class="listyle_4">
                    <label class="left pt5">ֵ�ֶΣ�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="dic_code_fid_" type="text" name="dic_code_fid" class="bgw" />
                    </span></h1>
                  </li>
                  <li class="listyle_4" id="qie">
                    <label class="left pt5">�����ֶΣ�</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="dic_name_fid_" type="text" name="dic_name_fid" class="bgw" />
                    </span></h1>
                  </li>
                  <li class="listyle_4" id="qiee">
                    <label class="left pt5"><em>*</em>����������</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input id="dic_where_" type="text" name="dic_where" class="bgw" />
                      <em>����ȷ��д</em>
                    </span></h1>
                  </li>
                  <li class="listyle_4" id="qeie">
                    <label class="left pt5">�������</label>
                    <h1 class="cmxformh1"> <span class="cmxformspan">
                      <input type="text" name="dic_order" id="dic_order_" class="bgw" />
                    </span></h1>
                  </li>
                  	<li class="listyle_4" id="tr1" style="display: none">
                    	<label class="left pt5">�����ֶΣ�</label>
                    	<h1 class="cmxformh1"> <span class="cmxformspan">
                      	<input id="id_" type="text" name="id" class="bgw" />
                    	</span></h1>
                    </li>
                    <li class="listyle_4" id="tr2" style="display: none">
                    	<label class="left pt5">�������ֶΣ�</label>
                    	<h1 class="cmxformh1"> <span class="cmxformspan">
                      	<input id="parentId_" type="text" name="parentId" class="bgw" />
                    	</span></h1>
                    </li>
                    <li class="listyle_4" id="tr3" style="display: none">
                    	<label class="left pt5">�㼶�ֶΣ�</label>
                    	<h1 class="cmxformh1"> <span class="cmxformspan">
                      	<input name="level" id="level_" type="text" class="bgw" />
                    	</span></h1>
                    </li>
                 <li class="listyle_4 bordernone">
                    <label class="left pt5">������</label>
                    <textarea name="description" id="description_" cols="80" rows="3"></textarea>
                  </li>
                </ol>
                <!--ol ����-->               
              </fieldset>
            </form>
          </div>
      <div class="toolbar">
       	<a href="#" class="sexybutton" onclick="onFormSubmit();return false"><span><span>����</span></span></a>
        <a href="#" class="sexybutton"  onClick="rbutton()"><span><span>���� </span></span></a>
        <a href="javascript:history.back();" class="sexybutton"><span><span>����</span></span></a>        </div>
        <!--�������� ����-->
  </div>
</div>
</body>
</html>
<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>

