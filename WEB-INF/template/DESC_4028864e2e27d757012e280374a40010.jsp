<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@ taglib prefix="load" uri="http://bms.sinovatech.com/tags-load"%>
<load:hibernate var="DEL_USER" clsName="com.sinovatech.bms.adm.model.dto.TBmsUserDTO" keyValue="${parameters['ids']}"/>
ɾ���û�Ϊ${DEL_USER.userLoginName},��ʵ����${parameters[DEL_USER.userRealName]}