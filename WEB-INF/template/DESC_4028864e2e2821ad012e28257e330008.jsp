<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@ taglib prefix="load" uri="http://bms.sinovatech.com/tags-load"%>
<load:hibernate var="_u" hql="from TBmsUserDTO dto where dto.userLoginName =?" topOne="true">
		<load:param value="${parameters.userLoginName}"/>
</load:hibernate>
�û���${_u.userLoginName}, ״̬��${_u.userStatus} ����Ϊ:		${parameters.userLoginName} ״̬��${parameters.userStatus}