<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@ taglib prefix="load" uri="http://bms.sinovatech.com/tags-load"%>
<load:jdbc var="_d" sql="select * from bms_dept where id=?" topOne="true">		
		<load:param value="${ACTION_CONTEXT_ADM_.actionContext["detailBmsLocation.id"]}"/>
</load:jdbc>
���ƣ�${_d.name} ��ע:${_d.remark}