<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@ taglib prefix="load" uri="http://bms.sinovatech.com/tags-load"%>
<load:hibernate var="DEL_USER" clsName="com.sinovatech.bms.adm.model.dto.TBmsUserDTO" keyValue="${parameters['ids']}"/>
删除用户为${DEL_USER.userLoginName},真实姓名${parameters[DEL_USER.userRealName]}