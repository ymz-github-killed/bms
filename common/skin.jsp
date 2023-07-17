<%@ page pageEncoding="GBK"%>
<%@ page import="com.sinovatech.changeskin.model.dto.UserSkinDTO" %>
<%@ page import="com.sinovatech.changeskin.model.facade.UserSkinFacade"%>
<%@ page import="java.util.ArrayList" %>
<%@ page import="org.springframework.context.ApplicationContext"%>
<%@ page import="org.springframework.web.context.support.WebApplicationContextUtils" %>
<%@ page import="com.sinovatech.bms.adm.model.dto.TBmsUserDTO" %>

<%
	
	response.addHeader("P3P","CP=CAO PSA OUR");	
	String gloabCssStr = (String)request.getSession().getAttribute("gloabCssStrB");
	TBmsUserDTO user = (TBmsUserDTO) request.getSession().getAttribute("loginUser");
	String cssStr = "";
	if(gloabCssStr!=null && !"".equals(gloabCssStr)){
		cssStr = gloabCssStr;
	}else{
		if(user!=null){
			String userid = user.getUserLoginName();
			if ("4".equals((String)request.getSession().getAttribute("fmccRole"))) {
				userid = user.getId();
			}
			
			ArrayList skinList = new  ArrayList();
			UserSkinFacade myUserSkinFacade = null;
			ServletContext context = request.getSession().getServletContext();
		  	ApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(context);
			myUserSkinFacade = (UserSkinFacade) ctx.getBean("myUserSkinFacade");
			UserSkinDTO skinDTO = new UserSkinDTO();
			//��ѯ��ǰ�û���Ƥ��
			skinDTO.setUserid(userid);
			skinList = (ArrayList)myUserSkinFacade.querySkin(skinDTO);
			//��ʽ��ѡ��
			
			if(skinList != null && skinList.size() > 0){
				skinDTO = (UserSkinDTO) skinList.get(0);
				//����Ƥ��
				if ("spring".equals(skinDTO.getSkincode())) {
					cssStr = "style_s.css";
				}
				//�ļ�Ƥ��
				else if ("summer".equals(skinDTO.getSkincode())) {
					cssStr = "style_summer.css";
				}
				//�＾Ƥ��
				else if ("autumn".equals(skinDTO.getSkincode())) {
					cssStr = "style_autumn.css";
				}
				//����Ƥ��
				else if ("winter".equals(skinDTO.getSkincode())) {
					cssStr = "style_winter.css";
				}
				//Ԫ��Ƥ��
				else if ("newyear".equals(skinDTO.getSkincode())) {
					cssStr = "style_yd.css";
				}
				//����Ƥ��
				else if ("springday".equals(skinDTO.getSkincode())) {
					cssStr = "style_years.css";
				}
				//��һƤ��
				else if ("laborday".equals(skinDTO.getSkincode())) {
					cssStr = "style_51.css";
				}
				//ʮһƤ��
				else if ("nationday".equals(skinDTO.getSkincode())) {
					cssStr = "style_101.css";
				}
				//Ĭ��Ƥ��
				else if ("default".equals(skinDTO.getSkincode())) {
					cssStr = "style.css";
				}else {
					cssStr = "style.css";
				}
				if(cssStr!=null && !"".equals(cssStr)){
					request.getSession().setAttribute("gloabCssStrB",cssStr);
				}	
			} else {
				cssStr = "style.css";
			}
		}else{
			cssStr = "style.css";
		}
			
	}
	
%>
