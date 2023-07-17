package com.sinovatech.bms.impl.util;

import com.alibaba.fastjson.JSONObject;
import com.sinovatech.bms.util.JsonUtil;
import com.sinovatech.hd.tools.net.HttpUtil;
import java.util.HashMap;
import java.util.Map;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OrderCenterUtils {
  private static final String SUCCESS_CODE = "000000";
  
  private static final Logger logger = LoggerFactory.getLogger(OrderCenterUtils.class);
  
  public static JSONObject postJson(String url, String message) {
    Map<String, String> header = new HashMap<String, String>();
    header.put("content-type", "application/json");
    logger.info("header=" + header);
    OsRequestVo osrequest = new OsRequestVo();
    osrequest.setHead(new OsHeadVoReq());
    OsBodyVoReq bodyVo = new OsBodyVoReq();
    bodyVo.setRequest(osrequest);
    osrequest.setBody(message);
    String reqJson = JsonUtil.object2json(bodyVo);
    String resJson = null;
    JSONObject resJsonObject = null;
    try {
      logger.info(reqJson);
      resJson = HttpUtil.sendMessage(header, url, reqJson, "UTF-8", "POST", 
          Integer.valueOf(CommConstants.ORDERCENTER_CONNECTTIMEOUT).intValue(), 
          Integer.valueOf(CommConstants.ORDERCENTER_READTIMEOUT).intValue());
    } catch (Exception e) {
      logger.error("Call Order Center Exception.", e);
      resJsonObject = (new JSONObject()).fluentPut("STATUS", "500").fluentPut("STATUS_DESC", ");
    } 
    logger.info("Call OrderCenter End.");
    if (StringUtils.isNotBlank(resJson))
      resJsonObject = getResponseBody(resJson); 
    return resJsonObject;
  }
  
  public static void main(String[] args) {
    String mobile = "18609876543";
    String smsCode = "1234";
    JSONObject msg = (new JSONObject()).fluentPut("mobileNum", mobile).fluentPut("msgContent", "+ smsCode)
      .fluentPut("sourceNum", "1066999123");
    JSONObject rsJson = postJson(CommConstants.ORDERCENTER_SMS_URL, msg.toString());
    System.out.println("11111111" + rsJson.toJSONString());
  }
  
  public static JSONObject getResponseBody(String resJson) {
    if (StringUtils.isBlank(resJson))
      return (new JSONObject()).fluentPut("STATUS", "400").fluentPut("STATUS_DESC", "); 
    JSONObject root = JSONObject.parseObject(resJson);
    if (root == null || root.isEmpty())
      return (new JSONObject()).fluentPut("STATUS", "501").fluentPut("STATUS_DESC", "); 
    JSONObject response = root.getJSONObject("response");
    if (response == null || response.isEmpty())
      return (new JSONObject()).fluentPut("STATUS", "501").fluentPut("STATUS_DESC", "); 
    JSONObject body = response.getJSONObject("body");
    if (body == null || body.isEmpty())
      return (new JSONObject()).fluentPut("STATUS", "501").fluentPut("STATUS_DESC", "); 
    JSONObject head = response.getJSONObject("head");
    if (head != null && 
      head.containsKey("error_msg"))
      body.fluentPut("error_msg", head.get("error_msg")); 
    return body;
  }
  
  public static boolean isSuccess(JSONObject json) {
    if (json.containsKey("STATUS"))
      return "000000".equals(json.getString("STATUS")); 
    return false;
  }
}
