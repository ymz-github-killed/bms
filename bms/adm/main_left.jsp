<%@ page contentType="text/html;charset=GBK"%>
<%@ page import="com.sinovatech.bms.adm.model.dto.TBmsUserDTO"%>
<% 
		TBmsUserDTO tBmsUserDTO = (TBmsUserDTO)request.getSession().getAttribute("loginUser");
		String username="";
		if(tBmsUserDTO!=null)
		{
			username=tBmsUserDTO.getUserLoginName();
		}
%>

<script type="text/javascript">
	function exitUser(id){
		if(confirm("ȷ��Ҫ�˳���")){
			location.href="${pageContext.request.contextPath}/bms/adm/loadapp.do?id="+id;
		}else{
			return false;
		}
	}
	

</script>
<div class="l_left">
	<div class="l_left_top01"><b><%=username %></b></div>
	<div class="l_left_top02"><b>��̨����ϵͳ</b></div>
	<div class="l_left_cont">
		<div id="tree_area">
			<ul class="simpleTree">
				${tree }
			
			</ul>

		</div>
	</div>
</div>
