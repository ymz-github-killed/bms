<%@ page contentType="text/html; charset=GBK"%>
<html>
<head>
<script src="${pageContext.request.contextPath}/js/title.js"></script>
<script src="${pageContext.request.contextPath}/js/shiftwindow.js"></script>

<meta http-equiv="Content-Type" content="text/html; charset=gb2312">

<link href="${pageContext.request.contextPath}/css/yh.css" rel="stylesheet" type="text/css">
<link href="${pageContext.request.contextPath}/public/style/style.css" rel="stylesheet" type="text/css" />
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}
-->
</style>

<script language=javascript>
        var timeoutid = null ;
	function scrollwindow()
	{	
	      timeoutid = setTimeout( "goToTop()" , 1) ;
	}
	
	function goToTop(){	
               parent.parent.window.scroll(0,0);
               if ( timeoutid )
               		clearTimeout(timeoutid) ;
        }
</script>

</head>

<body text="#000000" leftmargin="0" topmargin="0" style="border:1px solid #3B89D1;overflow:hidden;">
<table width="7" height="20" border="0" cellpadding="0" cellspacing="0" style="height:100%;">
  <tr>
    <td onClick="shiftwindow(210);scrollwindow();" title="全屏/半屏" >
    	<div class="middle_top"></div>
		<div class="CloseAndOpen middle_center"></div>
		<div  class="middle_bottom"></div>
	</td>
  </tr>
</table> 
</body>
</html>