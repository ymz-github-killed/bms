/**
 * JavaScript ����
 * @author ����() ����()
 * @version 1.20
 * @last modify time 20001/2/24
 * #@ validate.js
 * ��һ�� ��鲢���ؼ����(true or false)
 * a-1. ifDigit(str,allowNull)  �Ƿ�Ϊ�Ϸ��Ǹ�����(examples/ifDigit.html)
 * a-2. ifLetter(str,allowNull) �Ƿ�ΪӢ����ĸ
 * a-3. ifDay(str,allowNull)    �Ƿ�Ϊ����
 * a-4. ifMonth(str,allowNull)  �Ƿ�Ϊ�·�
 * a-5. ifYear(str,allowNull)   �Ƿ�Ϊ���
 * a-6. ifDate(String,allowNull)   �Ƿ�Ϊ����
 * a-7. ifEmail(String,allowNull)  �Ƿ�Ϊ�ʼ���ַ
 * a-8. ifPhone(String,allowNull)  �Ƿ�Ϊ�绰����
 * a-9. ifGBK(String,allowNull)    �Ƿ�Ϊ�����ַ�
 * a-10.ifMoney(String,allowNull)  �Ƿ�Ϊ�Ϸ���������
 * a-11 ifMoenyRange(String,int,int,allowNull) �ж��ַ����Ƿ�Ϊ�Ϸ�Ǯ��,���Ƿ񳬹��޶���Χ
 * a-12. checkMonthLength(mm, dd, yyyy) �ж��Ƿ�Ϊ�Ϸ�����
 * a-13. getSelectedButton(buttonGroup) �ж�buttongroupΪ����һ��radio�����ޱ�ѡ�е���

 * �ڶ��� ����ֱ�ӱ���
 * b-1. isDigit(Object,allowNull)	 �Ƿ�Ϊ����
 * b-2. isLetter(Object,allowNull) �Ƿ�Ϊ��ĸ
 * b-3. isDay(Object,allowNull)    �Ƿ�Ϊ����
 * b-4. isMonth(Object,allowNull)  �Ƿ�Ϊ�·�
 * b-5. isYear(Object,allowNull)   �Ƿ�Ϊ���
 * b-6. isDate(Object,allowNull)   �Ƿ�Ϊ����
 * b-7. isEmail(Object,allowNull)  �Ƿ�Ϊ�ʼ���ַ
 * b-8. isPhone(Object,allowNull)  �Ƿ�Ϊ�绰����
 * b-9. isGBK(Object,allowNull)    �Ƿ�Ϊ�����ַ�
 * b-10. isMoney(Object,allowNull)  �Ƿ�Ϊ�Ϸ���������
 * b-11. isMoneyRange(obj,minValue,maxValue,allowNull)	�ж��Ƿ�Ϸ�Ǯ�����Ƿ񳬹��޶����
 * b-12. checkLeng(Object, min, max,allowNull) �ַ��������Ƿ���ָ�����ȷ�Χ��
 * b-13.1 checkValidDate(yyObject,mmObject,ddObject,allowNull)	�����ڽ���ȫ��ļ��
 * b-13.2 checkValidDateRange(yyObject1,mmObject1,ddObject1,allowNull1,yyObject2,mmObject2,ddObject2,allowNull2)
 *		�����ʼ���ڼ���ֹ����
 * b-15. showMsg(String, Object)  ��ʾ��ʾ��ϢString,��꽹������Object��,����false
 * b-16. isMobile(Object,allowNull)  �Ƿ�Ϊ�ֻ�����
 

 * ������ ���ܺ�������������
 * c-1. getLength(String)  ��ȡ�ַ����ȣ�ÿ�������ַ�Ϊ2���ַ���
 * c-2. trim(String)  ȥ���ַ���ǰ��Ŀո񲢷���
 * c-3. textsTrim(formname)	��form�����е�text�ı�����trim������

 */

//������:����
//�ж��ַ����Ƿ�Ϊ�Ϸ��Ǹ�����
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

//������:����
//����:�ж��ַ����Ƿ���Ӣ����ĸ
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

//������:����
//�ж��ַ����Ƿ�Ϊ�Ϸ��ʼ���ַ
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

//������:����
//�ж��ַ����Ƿ�Ϊ�Ϸ�Ǯ��
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

//������:����
//�ж��ַ����Ƿ�Ϊ�Ϸ�Ǯ��,���Ƿ񳬹��޶���Χ
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

//������:����
//�ж��Ƿ�Ϊ�Ϸ�����
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

//������:����
//�ж�buttongroupΪ����һ��radio�����ޱ�ѡ�е���
// a-13 getSelectButton(buttonGroup)
function getSelectedButton(buttonGroup){
  	for (var i=0;i<buttonGroup.length;i++){
  		if (buttonGroup[i].checked) return true;
  	}
  	return false;
}


//������:Ĭ��
//����: ����Ƿ�Ϊ����
//ʾ��: isDigit(String,allowNull)
//�������: ��Ҫ���ı���������
//�������: true�������Ϣ
// b-1.1 isDigit(Object,allowNull)
function isDigit(obj,allowNull,msgname)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("������д" + msgname + "��",obj);
		return true;
	}
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if(!(cc == '.')){
			if (cc <"0" || cc >"9") return showMsg(msgname + "����Ϊ���֣�",obj);
	        }
	}
	
	return true;
}

//������:����
//����: ����Ƿ�Ϊ����
//ʾ��: isDigitMaxlength(String obj,int length,boolean allowNull)
//�������: ��Ҫ���ı���������,�������󳤶�
//�������: true�������Ϣ
// b-1.2 isDigitMaxlength(Object,maxlength,allowNull)
function isDigitMaxlength(obj,maxlength,allowNull)
{
	
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("��������һ�����Ȳ�����"+maxlength+"��������",obj);
		return true;
	}
	if(slen>maxlength) return showMsg("�������Ϊ"+maxlength+"��",obj);
	
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if (cc <"0" || cc >"9")
		{
			return showMsg("����Ϊ������",obj);
		}
	}
	return true;
}

//������:����
//����:�ж��ַ����Ƿ�����ĸ
// b-2 isLetter(Object,allowNull)
function isLetter(obj,allowNull){
	obj.value=trim(obj.value);
	str = obj.value;
	slen=getLength(obj.value);
	if ( slen == 0 ){
		if(!allowNull) return showMsg("�������룡",obj);
		return true;
	}
	str = str.toUpperCase();
	for ( var i = 0 ; i < slen; i ++ ){
		if ( str.charAt(i) < "A" || str.charAt(i) > "Z" )
			return showMsg("���붼��Ӣ����ĸ��",obj);
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
			return showMsg("�������룡",obj);
		return true;
	}
	if (!ifDigit(obj.value))
	{
		return false;
	}
	if (obj.value < "01" || obj.value > "31")
	{
		return showMsg("�ո�ʽ������ȷ�ĸ�ʽΪ��DD,��:02",obj);
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
			return showMsg("�������룡",obj);
		return true;
	}
	if (!ifDigit(obj.value))
	{
		return false;
	}
	if (obj.value < "01" || obj.value > "12")
	{
		return showMsg("�·ݸ�ʽ������ȷ�ĸ�ʽΪ��MM,��:01",obj);
	}
}

//�����ߣ�Ĭ��
//���ܣ�����Ƿ�Ϸ����
//ʾ����isYear(Object)
//���������������ַ���
//���������true �� ������Ϣ
// b-5 isYear(Object)
function isYear(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("�������룡",obj);
		return true;
	}
	slen=obj.value.length;
	if (!ifDigit(obj.value))
	{
		return showMsg("�������󣬲��ܺ��з����ֵ��ַ���",obj);
	}
	if (obj.value < "1800" || slen < 4)
	{
		return showMsg("��ݸ�ʽ������ȷ�ĸ�ʽΪ��YYYY,��:1999",obj);
	}
}

//�����ߣ�Ĭ��
//���ܣ�����Ƿ�Ϸ�����
//ʾ����isDate(Object)
//���������������ַ���
//���������true �� ������Ϣ
// b-6 isDate(Object)
function isDate(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("�������룡",obj);
		return true;
	}
	
	slen=obj.value.length;
	if (!ifDigit(obj.value))
	{
		return showMsg("�������󣬲��ܺ��з����ֵ��ַ���",obj);
	}
	else if (slen < 8)
	{
		return showMsg("���ڸ�ʽ������ȷ�ĸ�ʽΪ��YYYYMMDD,��:19990102",obj);
	}
	cc = obj.value.substr(0,4);
	if (cc < "1800")
	{
		return showMsg("��ݸ�ʽ������ȷ�ĸ�ʽΪ��YYYY,��:1999",obj);
	}
	cc = obj.value.substr(4,2);
	if (cc < "01" || cc > "12")
	{
		return showMsg("�·ݸ�ʽ������ȷ�ĸ�ʽΪ��MM,��:01",obj);
	}
	cc = obj.value.substr(6,2);
	if (cc < "01" || cc > "31")
	{
		return showMsg("�ո�ʽ������ȷ�ĸ�ʽΪ��DD,��:02",obj);
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
			return showMsg("�������룡",obj);
		return true;
	}

	i=obj.value.indexOf("@");
	j=obj.value.lastIndexOf(".");
	// if (! ifGBK(obj)) i = -1;
	if (i == -1 || j == -1 || i > j)
	{
		return showMsg("�����ʼ���д����",obj);
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
			return showMsg("�������룡",obj);
		}
		return true;
	}
	
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if ((cc <"0" || cc >"9") && cc != "-" && cc!="+" && cc!="(" && cc !=")" && cc !="/")
		{
			return showMsg("�绰���뺬�зǷ��ַ���",obj);
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
			return showMsg("��������" + msgname + "��",obj);
		return true;
	}

	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		cc = escape(cc);
		if (cc.indexOf("%u") >= 0)
		{
			return showMsg( msgname + " ����Ϊ���֣�",obj);
		}
	}
	return true;
}

//������:����
//�ж��ַ����Ƿ�Ϊ�Ϸ�Ǯ��
// b-10 isMoney(Object,allowNull)
function isMoney(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("�������룡",obj);
		return true;
	}

	if (ifMoney(obj.value))
	{
		return true;
	}
	else
	{
		return showMsg("���ǺϷ��Ļ�������",obj);
	}	
	return true;
}

//������:����
//�ж��Ƿ�Ϸ�Ǯ�����Ƿ񳬹��޶����
//b-11 isMoneyRange(obj,minValue,maxValue)
function isMoneyRange(obj,minValue,maxValue,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("�������룡",obj);
		return true;
	}

	obj.value=trim(obj.value);
	if(obj.value=="") return true;
	
	if(!ifMoney(obj.value))
		return shoMsg("���ǺϷ��Ļ�������",obj);
	
	if(parseFloat(obj.value)>=maxValue)
		return showMsg("����ֵ����",obj);
	if(parseFloat(obj.value)<minValue)
		return showMsg("����ֵ��С��",obj);
	return true;
}

//������:����
//����: ����ֶγ����Ƿ���ָ����Χ��
//ʾ��: chekLeng(form1.t1, 4,10)
//�������: ��Ҫ���ı��������ƣ���С���ȣ���󳤶�
//�������: true
// b-12 checkLeng(obj, min, max,allowNull)
function checkLeng(obj, min, max,allowNull , msgname )
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	
	if(slen==0){
		if(!allowNull) 
			return showMsg("��������" + msgname + "��",obj);
		return true;
	}

	if (slen < min)
	{
		return showMsg("���������� " + min + " ���ַ���",obj);

	}
	if (slen > max)
	{
		return showMsg(msgname + "��������� " + max + " ��Ӣ���ַ���"+max/2+"�������ַ���",obj);

	}
	return true;
}



//������:����
//����:�����ڽ���ȫ��ļ��
//�������:yyObject:���object;mmObject:�µ�object;ddObject:�յ�object;
//�������:allowNull:true��������Ϊ��;false:����ѡ������
//�������:ture of false;
// b-13.1 checkValiDate(mmObject,ddObject,yyObject,allowNull)
function checkValidDate(yyObject,mmObject,ddObject,allowNull){
  	if(allowNull){
  		if(!(((!yyObject.options[0].selected)&&(!mmObject.options[0].selected)&&(!ddObject.options[0].selected)) || ((yyObject.options[0].selected)&&(mmObject.options[0].selected)&&(ddObject.options[0].selected))))
  			return showMsg("���ڱ���ȫ��ѡ�����ȫ����ѡ��!",yyObject);
  	}else{
  		if(yyObject.options[0].selected){
  			return showMsg("��ѡ�����ڵ���!",yyObject);
  		}
  		if(mmObject.options[0].selected){
  			return showMsg("��ѡ�����ڵ���!",mmObject);
  		}
  		if(ddObject.options[0].selected){
  			return showMsg("��ѡ�����ڵ���!",ddObject);
  		}
  	}
  	
  	if(!yyObject.options[0].selected){
  		var my_year=yyObject[yyObject.selectedIndex].value;
  		var my_month=mmObject[mmObject.selectedIndex].value;
  		var my_day=ddObject[ddObject.selectedIndex].value;
  		
  		if(!checkMonthLength(my_month,my_day,my_year))
  			return showMsg("ѡ������ڲ��Ϸ�!",ddObject);
  	}
  	return true;
}


//������:����
//����:�����ڽ���ȫ��ļ��
//�������:yyObject1:��ʼ���object;mmObject1:��ʼ�µ�object;ddObject1:��ʼ�յ�object;
//�������:allowNull1:��ʼ����true��������Ϊ��;false:����ѡ������
//�������:yyObject2:��ֹ���object;mmObject2:��ֹ�µ�object;ddObject2:��ֹ�յ�object;
//�������:allowNull2:��ֹ����true��������Ϊ��;false:����ѡ������
//�������:ture of false;
// b-13.2 checkValidDateRange(mmObject1,ddObject1,yyObject1,allowNull1,mmObject2,ddObject2,yyObject2,allowNull2)
function checkValidDateRange(yyObject1,mmObject1,ddObject1,allowNull1,yyObject2,mmObject2,ddObject2,allowNull2){
	if(!checkValidDate(mmObject1,ddObject1,yyObject1,allowNull1)) return false;
	if(!checkValidDate(mmObject2,ddObject2,yyObject2,allowNull2)) return false;
	
	if((!yyObject1.options[0].selected) && (!yyObject2.options[0].selected)){
		date1=new Date(yyObject1-1900,mmObject1-1,ddObject1);
		date2=new Date(yyObject2-1900,mmObject2-1,ddObject2);
		if(date1>date2){
			return showMsg("��ʼ���ڲ��ܴ��ڽ�ֹ���ڣ�",yyObject1);
		}
	}
	return true;
}


//������:����
//����:��ʾ��ʾ��ϢMsg,��꽹������Obj��,����false
//     ��Ҫ���ڼ���Ҫ�ֶ��Ƿ���ȷ
//ʾ��:showMsg("�û�������Ϊ��.",myform.username)
//�������:Msg(��ʾ��Ϣ) Obj(��꽹�����)
//�������:false
// b-15 showMsg(String, Object)
function showMsg(Msg, Obj)
{
	Obj.focus();
	return false;
}

//�Ƿ�Ϊ�ֻ�����
function isMobile(obj,allwoNull)
{

	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allwoNull){
			return showMsg("�������룡",obj);
		}
		return true;
	}
	
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if ((cc <"0" || cc >"9") && cc != "-" && cc!="+" && cc!="(" && cc !=")" && cc !="/")
		{
			return showMsg("�ֻ����뺬�зǷ��ַ���",obj);
		}
	}
	return true;
}


/**
�����ǵ�����
*/
//������:����
//�����˺��ֵĳ����ж�
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

//������:����
//����:ȥ���ַ���ǰ��Ŀո񲢷���
//�������:inputStr(��������ַ���)theForm.mobile
//�������:inputStr(�������ַ���)
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


//������:����
//����:��form�����е�text�ı�����trim������
//�������:myform(form��)
//�������:��
// c-3 textTrim(form����)
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
