<%@ page contentType="text/html;charset=GBK"%>
<%
	//获取登录用户名
	String userName=(String)request.getParameter("userName");
	if(userName==null)
		userName="";
%>
<html>
<head>
<script src="${pageContext.request.contextPath}/js/title.js" charset="GBK"></script>
<script src="${pageContext.request.contextPath}/js/validate.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">

<link href="${pageContext.request.contextPath}/css/yh.css" rel="stylesheet" type="text/css">
<style type="text/css">
<!--
body {
	background-color: #FFFFFF;
	margin-top: 0px;
	margin-bottom: 0px; 
}
-->
</style>
<script type="text/javascript">
	function beforeSubmit(aForm)
	{
		if(document.getElementById("userName_").value == "")
		{
			alert("请输入用户名");
			return false;
		}
		
		if(document.getElementById("userPass_").value == "")
		{
			alert("请输入密码");
			return false;
		}
		
		if(document.getElementById("yzm_").value == "")
		{
			alert("请输入验证码");
			return false;
		}
		
		return true;
	}
</script>
</head>
<body>

<table width="768" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  <tr>
    <td height="22">&nbsp;</td>
  </tr>
  <tr>
    <td><table width="733" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td><table width="733" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td><img height="79" src="${pageContext.request.contextPath}/images/t1.jpg" width="193"></td>
            <td><img height="79" src="${pageContext.request.contextPath}/images/t2.jpg" width="533"></td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td height="6"></td>
      </tr>
      <tr>
        <td><table width="727" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td><img height="13" src="${pageContext.request.contextPath}/images/t1.gif" width="727"></td>
          </tr>
          <tr>
            <td valign="top" background="${pageContext.request.contextPath}/images/bg.gif"><table width="712" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td><img height="4" src="${pageContext.request.contextPath}/images/t2.gif" width="712"></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td><table width="712" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="363"><table width="363" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td><img height="122" src="${pageContext.request.contextPath}/images/t3.jpg" width="363"></td>
                            </tr>
                            <tr>
                              <td>
							  <form name="logonForm" method="post" action="${pageContext.request.contextPath}/login.do" onsubmit="return  beforeSubmit(this)">
							  <table width="363" border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td width="105" height="13">&nbsp;</td>
                                    <td width="93">&nbsp;</td>
                                    <td width="142">&nbsp;</td>
                                    <td width="23">&nbsp;</td>
                                  </tr>
								  <tr>
                                    <td>
                                    	<div align="right"><img height="13" src="${pageContext.request.contextPath}/images/index_t8.gif" width="13"></div>
                                    </td>
                                    <td><div align="right" class="font_qingse">用户名：</div></td>
                                    <td><div align="center">
                                        <!-- input name="userName" id="userName_" type="text" value="<%=userName%>" class="input_black"  -->
                                        <input name="userName" id="userName_" type="text" value="admin" class="input_black" >
                                    </div></td>
                                    <td>&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td><div align="right"></div></td>
                                    <td><div align="right"></div></td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td><div align="right"><img height="13" src="${pageContext.request.contextPath}/images/index_t8.gif" width="13"></div></td>
                                    <td><div align="right" class="font_qingse">密　码：</div></td>
                                    <td><div align="center">
                                        <input name="password" id="userPass_" type="password" class="input_black" value="admin">
                                    </div></td>
                                    <td>&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td><div align="right"></div></td>
                                    <td><div align="right"></div></td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td><div align="right"><img height="13" src="${pageContext.request.contextPath}/images/index_t8.gif" width="13"></div></td>
                                    <td><div align="right" class="font_qingse">验证码：</div></td>
                                    <td><div align="left">
                                        &nbsp;&nbsp;<input id="yzm_" name="yzm" type="text" class="input_black" style="width: 40px;" size="4" />
                                    	<img src="${pageContext.request.contextPath}/common/yzm.jsp" alt="看不清请刷新页面" />
                                    </div></td>
                                    <td>&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td><div align="right"></div></td>
                                    <td><div align="right"></div></td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td><div align="center">
                                        <input name="Button22" type="submit" class="button" value="登 录" >
&nbsp;
                                <input name="Button222" type="reset" class="button" value="重 填" >
                                    </div></td>
                                    <td>&nbsp;</td>
                                  </tr>
                              </table>
							  </form>
							  </td>
                            </tr>
                        </table></td>
                        <td width="349" valign="top"><table width="349" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td width="7"><img height="241" src="${pageContext.request.contextPath}/images/p1.jpg" width="113"></td>
                              <td>&nbsp;</td>
                              <td width="7"><img height="241" src="${pageContext.request.contextPath}/images/p2.jpg" width="113"></td>
                              <td>&nbsp;</td>
                              <td><img height="241" src="${pageContext.request.contextPath}/images/p3.jpg" width="113"></td>
                            </tr>
                        </table></td>
                      </tr>
                  </table></td>
                </tr>
                <tr>
                  <td height="53">&nbsp;</td>
                </tr>
                <tr>
                  <td><div align="center"><img height="87" src="${pageContext.request.contextPath}/images/t3.gif" width="361"><img height="48" src="${pageContext.request.contextPath}/images/t4.gif" width="323"></div></td>
                </tr>
            </table></td>
          </tr>
          <tr>
            <td height="32" valign="top" background="${pageContext.request.contextPath}/images/bg.gif">&nbsp;</td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td><table width="727" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="15"><img height="28" src="${pageContext.request.contextPath}/images/t5.gif" width="15"></td>
            <td width="691" bgcolor="#10D5F3"><div align="center" class="font_black14">Copyright@ SINOVATECH NETWORK TECHNOLOGY CORPORATION All Rights Reserved</div></td>
            <td width="21"><img height="28" src="${pageContext.request.contextPath}/images/t6.gif" width="21"></td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td height="5"></td>
      </tr>
      <tr>
        <td><div align="center"><img height="19" src="${pageContext.request.contextPath}/images/t7.gif" width="201"></div></td>
      </tr>
      <tr>
        <td height="18"><div align="center"></div></td>
      </tr>
    </table></td>
  </tr>
</table>

</body>
</html>
<script language="javascript">
	var userName="<%=userName%>";
	if(userName=="")
	{
		logonForm.userName.focus();
	}else
	{
		logonForm.password.focus();
	}
	if("${msgs}" != "")
	{
		alert("${msgs}");
	}
</script>