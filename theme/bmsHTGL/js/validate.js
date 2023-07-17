/**
 * JavaScript 检查库
 * @author 华炼(hlian@alleasy.net) 任勇(uplot.renyong@uplot.com)
 * @version 1.20
 * @last modify time 20001/2/24
 * #@ validate.js
 * 第一类 检查并返回检查结果(true or false)
 * a-1. ifDigit(str,allowNull)  是否为合法非负整数(examples/ifDigit.html)
 * a-2. ifLetter(str,allowNull) 是否为英文字母
 * a-3. ifDay(str,allowNull)    是否为天数
 * a-4. ifMonth(str,allowNull)  是否为月份
 * a-5. ifYear(str,allowNull)   是否为年份
 * a-6. ifDate(String,allowNull)   是否为日期
 * a-7. ifEmail(String,allowNull)  是否为邮件地址
 * a-8. ifPhone(String,allowNull)  是否为电话号码
 * a-9. ifGBK(String,allowNull)    是否为中文字符
 * a-10.ifMoney(String,allowNull)  是否为合法货币数字
 * a-11 ifMoenyRange(String,int,int,allowNull) 判断字符串是否为合法钱数,且是否超过限定范围
 * a-12. checkMonthLength(mm, dd, yyyy) 判断是否为合法日期
 * a-13. getSelectedButton(buttonGroup) 判断buttongroup为名的一组radio中有无被选中的项

 * 第二类 检查后直接报错
 * b-1. isDigit(Object,allowNull)	 是否为数字
 * b-2. isLetter(Object,allowNull) 是否为字母
 * b-3. isDay(Object,allowNull)    是否为天数
 * b-4. isMonth(Object,allowNull)  是否为月份
 * b-5. isYear(Object,allowNull)   是否为年份
 * b-6. isDate(Object,allowNull)   是否为日期
 * b-7. isEmail(Object,allowNull)  是否为邮件地址
 * b-8. isPhone(Object,allowNull)  是否为电话号码
 * b-9. isGBK(Object,allowNull)    是否为中文字符
 * b-10. isMoney(Object,allowNull)  是否为合法货币数字
 * b-11. isMoneyRange(obj,minValue,maxValue,allowNull)	判断是否合法钱数且是否超过限定额度
 * b-12. checkLeng(Object, min, max,allowNull) 字符串长度是否在指定长度范围内
 * b-13.1 checkValidDate(yyObject,mmObject,ddObject,allowNull)	对日期进行全面的检查
 * b-13.2 checkValidDateRange(yyObject1,mmObject1,ddObject1,allowNull1,yyObject2,mmObject2,ddObject2,allowNull2)
 *		检查起始日期及截止日期
 * b-15. showMsg(String, Object)  显示提示信息String,光标焦点落在Object上,返回false
 * b-16. isMobile(Object,allowNull)  是否为手机号码
 

 * 第三类 功能函数，并不报错
 * c-1. getLength(String)  获取字符长度（每个中文字符为2个字符）
 * c-2. trim(String)  去掉字符串前后的空格并返回
 * c-3. textsTrim(formname)	将form中所有的text文本进行trim操作。

 */

//建立者:任勇
//判断字符串是否为合法非负整数
// a-1 ifDigit(str,allowNull)
function ifDigit(str,allowNull)
{
	slen=str.length;
	if(slen==0) return allowNull;
	for (i=0; i<slen; i++){
		cc = str.charAt(i);
		if (cc <"0" || cc >"9")
		{
			return false;
		}
	}
	return true;
}

//建立者:任勇
//功能:判断字符串是否都是英文字母
// a-2 ifLetter(str,allowNull)
function ifLetter(str,allowNull ){	
	slen=getLength(str);
	if (slen==0) return allowNull;
		
	str = str.toUpperCase();
	for ( var i = 0 ; i < slen; i ++ ){
		if ( str.charAt(i) < "A" || str.charAt(i) > "Z" )
			return false;
	}
	return true;
}

// a-3 ifDay(str,allowNull)
function ifDay(str,allowNull)
{
	slen=getLength(str);
	if (slen==0) return allowNull;
	if (!ifDigit(str,allowNull))
	{
		return false;
	}
	if (str < "01" || str > "31")
	{
		return false;
	}
	return true;
}

// a-4 ifMonth(str,allowNull)
function ifMonth(str,allowNull)
{	
	slen=getLength(str);
	if (slen==0) return allowNull;
	
	if (!ifDigit(str,allowNull))
	{
		return false;
	}
	if (str >="1" && str<="9" && slen==1) return true;
	if (str >="01" && str <="12") return true;
	return false;
}

// a-5 ifYear(str,allowNull)
function ifYear(str,allowNull)
{
	slen=getLength(str);
	if (slen==0) return allowNull;

	if (!ifDigit(str,allowNull))
	{
		return false;
	}
	if (str < "1800" || slen < 4)
	{
		return false;
	}
	return true;
}

// a-6 ifDate(str,allowNull)
function ifDate(str,allowNull)
{
	slen=getLength(str);
	if (slen==0) return allowNull;
	if (!ifDigit(str,allowNull))
	{
		return false;
	}
	else if (slen < 8)
	{
		return false;
	}
	cc = str.substr(0,4);
	if (cc < "1800")
	{
		return false;
	}
	cc = str.substr(4,2);
	if (cc < "01" || cc > "12")
	{
		return false;
	}
	cc = str.substr(6,2);
	if (cc < "01" || cc > "31")
	{
		return false;
	}
	return true;
}

//建立者:任勇
//判断字符串是否为合法邮件地址
// a-7 ifEmail(str,allowNull)
function ifEmail(str,allowNull)
{
	if(str.length==0) return allowNull;
	i=str.indexOf("@");
	j=str.lastIndexOf(".");
	if (i == -1 || j == -1 || i > j)
	{
		return false;
	}
	return true;
}

// a-8 ifPhone(str,allowNull)
function ifPhone(str,allowNull)
{
	slen=getLength(str);
	if (slen==0) return allowNull;
	for (i=0; i<slen; i++){
		cc = str.charAt(i);
		if ((cc <"0" || cc >"9") && cc != "-" && cc!="+" && cc!="(" && cc !=")" && cc !="/")
		{
			return false;
		}
	}
	return true;
}

// a-9 ifGBK(str,allowNull)
function ifGBK(str,allowNull)
{
	slen=getLength(str);
	if (slen==0) return allowNull;
	for (i=0; i<slen; i++){
		cc = str.charAt(i);
		cc = escape(cc);
		if (cc.indexOf("%u") >= 0)
		{
			return false;
		}
	}
	return true;
}

//建立者:任勇
//判断字符串是否为合法钱数
// a-10 ifMoeny(String)
function ifMoney(str,allowNull){

	if (str.length==0) return allowNull;

	if ( ( pos = str.indexOf( "." ) ) != -1 ){
	   if (str.length==1)
	     return false;
	     
	   if ( ( pos = str.indexOf(".", pos + 1) )  != -1 )
	     return false;
	}

	for ( var i = 0 ; i < str.length; i ++ ){
	  if (( str.charAt(i) < "0" || str.charAt(i) > "9" )&&(str.charAt(i)!="."))
	    return false;
	}
	
	return true;
}

//建立者:任勇
//判断字符串是否为合法钱数,且是否超过限定范围
// a-11 ifMoneyRange(str,minValue,maxValue,allowNull)
function ifMoneyRange(str,minValue,maxValue,allowNull)
{
	if (str.length==0) return allowNull;
	
	if(!ifMoney(str))
		return false;
	
	if(parseFloat(str)>=maxValue)
		return false;
	if(parseFloat(str)<minValue)
		return false;
	return true;
}

//建立者:任勇
//判断是否为合法日期
// a-12 checkMonthLength(mm, dd, yyyy)
function checkMonthLength(mm,dd,yyyy){
    if((mm==4||mm==6||mm==9||mm==11) && dd>30){
      return false;
    }else if(mm==2){
      if(yyyy % 4 >0 && dd>28){
        return false;
      }else if(dd>29){
        return false;
      }
    }else if(dd>31){
      return false;
    }
    return true;  
}

//建立者:任勇
//判断buttongroup为名的一组radio中有无被选中的项
// a-13 getSelectButton(buttonGroup)
function getSelectedButton(buttonGroup){
  	for (var i=0;i<buttonGroup.length;i++){
  		if (buttonGroup[i].checked) return true;
  	}
  	return false;
}


//建立者:默认
//功能: 检查是否为数字
//示例: isDigit(String,allowNull)
//输入参数: 需要检查的表单对象名称
//输出参数: true或出错信息
// b-1.1 isDigit(Object,allowNull)
function isDigit(obj,allowNull,msgname)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须填写" + msgname + "！",obj);
		return true;
	}
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if(!(cc == '.')){
			if (cc <"0" || cc >"9") return showMsg(msgname + "必须为数字！",obj);
	        }
	}
	
	return true;
}

//建立者:任勇
//功能: 检查是否为数字
//示例: isDigitMaxlength(String obj,int length,boolean allowNull)
//输入参数: 需要检查的表单对象名称,允许的最大长度
//输出参数: true或出错信息
// b-1.2 isDigitMaxlength(Object,maxlength,allowNull)
function isDigitMaxlength(obj,maxlength,allowNull)
{
	
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入一个长度不超过"+maxlength+"的整数！",obj);
		return true;
	}
	if(slen>maxlength) return showMsg("长度最大为"+maxlength+"！",obj);
	
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if (cc <"0" || cc >"9")
		{
			return showMsg("必须为整数！",obj);
		}
	}
	return true;
}

//建立者:任勇
//功能:判断字符串是否都是字母
// b-2 isLetter(Object,allowNull)
function isLetter(obj,allowNull){
	obj.value=trim(obj.value);
	str = obj.value;
	slen=getLength(obj.value);
	if ( slen == 0 ){
		if(!allowNull) return showMsg("必须输入！",obj);
		return true;
	}
	str = str.toUpperCase();
	for ( var i = 0 ; i < slen; i ++ ){
		if ( str.charAt(i) < "A" || str.charAt(i) > "Z" )
			return showMsg("必须都是英文字母！",obj);
	}
	return true;
}

// b-3 isDay(Object,allowNull)
function isDay(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}
	if (!ifDigit(obj.value))
	{
		return false;
	}
	if (obj.value < "01" || obj.value > "31")
	{
		return showMsg("日格式有误，正确的格式为：DD,如:02",obj);
	}
	return true;
}

// b-4 isMoneth(Object,allowNull)
function isMonth(obj,allowNull)
{	
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}
	if (!ifDigit(obj.value))
	{
		return false;
	}
	if (obj.value < "01" || obj.value > "12")
	{
		return showMsg("月份格式有误，正确的格式为：MM,如:01",obj);
	}
}

//建立者：默认
//功能：检查是否合法年份
//示例：isYear(Object)
//输入参数：被检查字符串
//输出参数：true 或 错误信息
// b-5 isYear(Object)
function isYear(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}
	slen=obj.value.length;
	if (!ifDigit(obj.value))
	{
		return showMsg("日期有误，不能含有非数字的字符！",obj);
	}
	if (obj.value < "1800" || slen < 4)
	{
		return showMsg("年份格式有误，正确的格式为：YYYY,如:1999",obj);
	}
}

//建立者：默认
//功能：检查是否合法日期
//示例：isDate(Object)
//输入参数：被检查字符串
//输出参数：true 或 错误信息
// b-6 isDate(Object)
function isDate(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}
	
	slen=obj.value.length;
	if (!ifDigit(obj.value))
	{
		return showMsg("日期有误，不能含有非数字的字符！",obj);
	}
	else if (slen < 8)
	{
		return showMsg("日期格式有误，正确的格式为：YYYYMMDD,如:19990102",obj);
	}
	cc = obj.value.substr(0,4);
	if (cc < "1800")
	{
		return showMsg("年份格式有误，正确的格式为：YYYY,如:1999",obj);
	}
	cc = obj.value.substr(4,2);
	if (cc < "01" || cc > "12")
	{
		return showMsg("月份格式有误，正确的格式为：MM,如:01",obj);
	}
	cc = obj.value.substr(6,2);
	if (cc < "01" || cc > "31")
	{
		return showMsg("日格式有误，正确的格式为：DD,如:02",obj);
	}
	return true;
}

// b-7 isEmail(Object)
function isEmail(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull)
			return showMsg("必须输入！",obj);
		return true;
	}

	i=obj.value.indexOf("@");
	j=obj.value.lastIndexOf(".");
	// if (! ifGBK(obj)) i = -1;
	if (i == -1 || j == -1 || i > j)
	{
		return showMsg("电子邮件书写有误！",obj);
	}
	return true;
}

// b-8 isPhone(Object)
function isPhone(obj,allwoNull)
{

	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allwoNull){
			return showMsg("必须输入！",obj);
		}
		return true;
	}
	
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if ((cc <"0" || cc >"9") && cc != "-" && cc!="+" && cc!="(" && cc !=")" && cc !="/")
		{
			return showMsg("电话号码含有非法字符！",obj);
		}
	}
	return true;
}

// b-9 isGBK(Object,allowNull)
function isGBK(obj,allowNull,msgname)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入" + msgname + "！",obj);
		return true;
	}

	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		cc = escape(cc);
		if (cc.indexOf("%u") >= 0)
		{
			return showMsg( msgname + " 不能为汉字！",obj);
		}
	}
	return true;
}

//建立者:任勇
//判断字符串是否为合法钱数
// b-10 isMoney(Object,allowNull)
function isMoney(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}

	if (ifMoney(obj.value))
	{
		return true;
	}
	else
	{
		return showMsg("不是合法的货币数！",obj);
	}	
	return true;
}

//建立者:任勇
//判断是否合法钱数且是否超过限定额度
//b-11 isMoneyRange(obj,minValue,maxValue)
function isMoneyRange(obj,minValue,maxValue,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}

	obj.value=trim(obj.value);
	if(obj.value=="") return true;
	
	if(!ifMoney(obj.value))
		return shoMsg("不是合法的货币数！",obj);
	
	if(parseFloat(obj.value)>=maxValue)
		return showMsg("货币值过大！",obj);
	if(parseFloat(obj.value)<minValue)
		return showMsg("货币值过小！",obj);
	return true;
}

//建立者:华炼
//功能: 检查字段长度是否在指定范围内
//示例: chekLeng(form1.t1, 4,10)
//输入参数: 需要检查的表单对象名称，最小长度，最大长度
//输出参数: true
// b-12 checkLeng(obj, min, max,allowNull)
function checkLeng(obj, min, max,allowNull , msgname )
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入" + msgname + "！",obj);
		return true;
	}

	if (slen < min)
	{
		return showMsg("请最少输入 " + min + " 个字符！",obj);

	}
	if (slen > max)
	{
		return showMsg(msgname + "请最多输入 " + max + " 个英文字符或"+max/2+"个中文字符！",obj);

	}
	return true;
}



//建立者:任勇
//功能:对日期进行全面的检查
//输入参数:yyObject:年的object;mmObject:月的object;ddObject:日的object;
//输入参数:allowNull:true允许日期为空;false:必须选择日期
//输出参数:ture of false;
// b-13.1 checkValiDate(mmObject,ddObject,yyObject,allowNull)
function checkValidDate(yyObject,mmObject,ddObject,allowNull){
  	if(allowNull){
  		if(!(((!yyObject.options[0].selected)&&(!mmObject.options[0].selected)&&(!ddObject.options[0].selected)) || ((yyObject.options[0].selected)&&(mmObject.options[0].selected)&&(ddObject.options[0].selected))))
  			return showMsg("日期必须全部选择或者全部不选择!",yyObject);
  	}else{
  		if(yyObject.options[0].selected){
  			return showMsg("请选择日期的年!",yyObject);
  		}
  		if(mmObject.options[0].selected){
  			return showMsg("请选择日期的月!",mmObject);
  		}
  		if(ddObject.options[0].selected){
  			return showMsg("请选择日期的日!",ddObject);
  		}
  	}
  	
  	if(!yyObject.options[0].selected){
  		var my_year=yyObject[yyObject.selectedIndex].value;
  		var my_month=mmObject[mmObject.selectedIndex].value;
  		var my_day=ddObject[ddObject.selectedIndex].value;
  		
  		if(!checkMonthLength(my_month,my_day,my_year))
  			return showMsg("选择的日期不合法!",ddObject);
  	}
  	return true;
}


//建立者:任勇
//功能:对日期进行全面的检查
//输入参数:yyObject1:其始年的object;mmObject1:其始月的object;ddObject1:其始日的object;
//输入参数:allowNull1:起始日期true允许日期为空;false:必须选择日期
//输入参数:yyObject2:截止年的object;mmObject2:截止月的object;ddObject2:截止日的object;
//输入参数:allowNull2:截止日期true允许日期为空;false:必须选择日期
//输出参数:ture of false;
// b-13.2 checkValidDateRange(mmObject1,ddObject1,yyObject1,allowNull1,mmObject2,ddObject2,yyObject2,allowNull2)
function checkValidDateRange(yyObject1,mmObject1,ddObject1,allowNull1,yyObject2,mmObject2,ddObject2,allowNull2){
	if(!checkValidDate(mmObject1,ddObject1,yyObject1,allowNull1)) return false;
	if(!checkValidDate(mmObject2,ddObject2,yyObject2,allowNull2)) return false;
	
	if((!yyObject1.options[0].selected) && (!yyObject2.options[0].selected)){
		date1=new Date(yyObject1-1900,mmObject1-1,ddObject1);
		date2=new Date(yyObject2-1900,mmObject2-1,ddObject2);
		if(date1>date2){
			return showMsg("起始日期不能大于截止日期！",yyObject1);
		}
	}
	return true;
}


//建立者:任勇
//功能:显示提示信息Msg,光标焦点落在Obj上,返回false
//     主要用于检查必要字段是否正确
//示例:showMsg("用户名不能为空.",myform.username)
//输入参数:Msg(提示信息) Obj(光标焦点对象)
//输出参数:false
// b-15 showMsg(String, Object)
function showMsg(Msg, Obj)
{
	Obj.focus();
	return false;
}

//是否为手机号码
function isMobile(obj,allwoNull)
{

	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allwoNull){
			return showMsg("必须输入！",obj);
		}
		return true;
	}
	
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if ((cc <"0" || cc >"9") && cc != "-" && cc!="+" && cc!="(" && cc !=")" && cc !="/")
		{
			return showMsg("手机号码含有非法字符！",obj);
		}
	}
	return true;
}


/**
以下是第三类
*/
//建立者:任勇
//加入了汉字的长度判断
// c-1 getLength(String)
function getLength(str){
	var templen=str.length;
	if(navigator.appName=='Netscape') return templen;
	for(var i=0;i<str.length;i++){
    		var rstr=escape(str.substring(i,i+1)); 
    		if (rstr.substring(0,2)=="%u"){ 
       			templen++;
    		} 
  	}
	return templen;
}

//建立者:任勇
//功能:去掉字符串前后的空格并返回
//输入参数:inputStr(待处理的字符串)theForm.mobile
//输出参数:inputStr(处理后的字符串)
// c-2 trim(String)
function trim(inputStr) {
	var result = inputStr;
	while (result.substring(0,1) == " ") {
		result = result.substring(1,result.length);
	}
	
	while (result.substring(result.length-1, result.length) == " ") {
		result = result.substring(0, result.length-1);
	}
		
	return result;
}


//建立者:任勇
//功能:将form中所有的text文本进行trim操作。
//输入参数:myform(form名)
//输出参数:无
// c-3 textTrim(form名称)
function textsTrim(myform){
  	for(var i=0;i<myform.elements.length;i++){
  		var etype=myform.elements[i].type;
  		if(etype = "text"){
 			myform.elements[i].value=trim(myform.elements[i].value);
  		}
  	}
}


function matchForbiddenCharacter( matchstr )
{
  var backStr = false;
  matchstr = replaceGBK( matchstr ) ;
  var re = /[^A-Za-z0-9_\.]/
  if ( re.test( matchstr )==true ) {
         backStr = true;
  }
  return backStr;
}

function replaceGBK(obj)
{
    var reStr = "";
        slen=obj.length;
        for (i=0; i<slen; i++){
                cc = obj.charAt(i);
                if ( cc == ' ' )
                {
                  cc = '_' ;
                }
                else
                {
                  cc = escape(cc);
                  if (cc.indexOf("%u") > -1)
                  {
                    cc = '_';
                  }
                }
                reStr += cc;
        }
        return reStr;
}