<%@ page contentType="text/html;charset=GBK"%>
<%@ include file="/bms/adm/commonHeader.jsp"%>
<script type="text/javascript">
<!--
	function beforeSubmit(f)
	{
		if(f.name.value == "")
		{
			alert("名称不能为空");
			return false;
		}
		
		if(f.remark.value.length >400)
		{
			alert("备注不能多余400个字符");
			return false;
		}
		
		return true;
	}
//-->
</script>
</head>
<body>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td><table width="100%"  border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td height="25" bgcolor="#DDFAFE">&nbsp;&nbsp;<span class="font_blue_title">您所在的位置：用户管理子系统 &gt; 机构管理</span> <span class="font_blue_title">&gt; 编辑机构</span></td>
      </tr>
    </table></td>
  </tr>
</table>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td height="20">&nbsp;</td>
  </tr>
</table>
<table width="100%"  border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="1%" valign="top">&nbsp;</td>
    <td width="99%" valign="top">
	  <div align="left"></div>


      <table width="98%"  border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#dfdfdf">
        <form name="frmApply" action="editBmsDept.do" target="hideframe" method="post" onsubmit="return beforeSubmit(this);">
          <tr bgcolor="#f7f7f7">
            <td width="30%" align="right" class="font_bule2">机构名称：</td>
            <td align="left">
              <input name="name" id="name_" value="${m.name }" type="text" maxlength="30" class="input3" size="80" style="width:200px ">
            	<span style="color: red;">*</span> 
            </td>
          </tr>
          <tr bgcolor="#f7f7f7">
            <td align="right" valign="top" class="font_bule2">描述：</td>
            <td align="left"  >
            <textarea name="remark" id="remark_" cols="30" rows="5" maxlength="100" class="input_more">${m.remark}</textarea>            </td>
          </tr>
          <tr align="center" bgcolor="#f7f7f7">
            <td colspan="2">
              <input name="Button5222" type="submit" class="button5" value="提交" style="width:60px">
              <input name="Button5223" type="reset" class="button5" value="重填" style="width:60px ">
            <input name="Button22" type="button" class="button5" value="返回" onclick="history.back();" style="width: 60px;">            </td>
          </tr>
        </form>
      </table>      
    </td>
  </tr>
</table>
	<iframe width="100%" height="300" scrolling="auto" frameborder="0" src="${pageContext.request.contextPath}/bms/adm/bmsdept/showUsers.do?deptid=${m.id}"></iframe>

		<iframe name="hideframe" id="hideframe" width="0" height="0"></iframe>


