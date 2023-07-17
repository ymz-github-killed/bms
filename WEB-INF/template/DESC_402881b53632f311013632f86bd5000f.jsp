<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@ taglib prefix="load" uri="http://bms.sinovatech.com/tags-load"%>
<load:hibernate var="_u" hql="from TBmsUserDTO dto where dto.userLoginName =?" topOne="true">
		<load:param value="${parameters.userLoginName}"/>
</load:hibernate>
用户：${_u.userLoginName}, 状态：${_u.userStatus} 更改为:		${parameters.userLoginName} 状态：${parameters.userStatus}