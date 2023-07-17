//字符长度，包括汉字。
function countCharacters(content){
//    var totalCount = 0; 
//    for (var i=0; i<content.length; i++) { 
//        var c = content.charCodeAt(i); 
//        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
//             totalCount++; 
//         }else {     
//             totalCount+=2; 
//         } 
//     }
    return content.length;
}
//验证内容为0时不验证0:id--1:名称--2：长度--3：不为空--4：不能有空格
function checkStr(str,divid){
	for(var i=0;i<str.length;i++){
		var str2=document.getElementById(str[i][0]).value;
		if(countCharacters(str2)>str[i][2] && str[i][2]!=0){
			showMsg("“"+str[i][1]+"”长度不能超过"+str[i][2]+"个字符！",divid);
			return false;
		}
		if(str[i].length>3 && str[i][3]==1 && str2.length<1){
			showMsg("“"+str[i][1]+"”不能为空！",divid);
			return false;
		}
		if(str[i].length>4 && str[i][4]==1 && str2.split(" ").length>1){
			showMsg("“"+str[i][1]+"”不能有空格！",divid);
			return false;
		}
		if(str[i].length>5 && str[i][5]==1 && str2.split(".").length>1){
			showMsg("“"+str[i][1]+"”不能有“.”敏感字符！",divid);
			return false;
		}
		if(str[i].length>5 && str[i][5]==1 && str2.split("@").length>1 ){
			showMsg("“"+str[i][1]+"”不能有“@”敏感字符！",divid);
			return false;
		}
		if(str[i].length>5 && str[i][5]==1 && !/^\w+$/g.test(str2) ){
			showMsg("“"+str[i][1]+"”只能由数字、26个英文字母或者下划线组成！",divid);
			return false;
		}
		str2=str2.toUpperCase();
		if(str[i].length>6 && str[i][6]==1 && (str2.split("HTTP://").length>1 || str2.split("HTTPS://").length>1 || str2.split("HTML").length>1)){
			showMsg("“"+str[i][1]+"”不能有“http://、https://、html”敏感字符！",divid);
			return false;
		}
	}
	return true;
}
//验证内容为0时不验证0:id--1:名称--2：长度--3：不为空--4：不能有空格
function checkStr1(str){
	var text=null;
	for(var i=0;i<str.length;i++){
		var str2=document.getElementById(str[i][0]).value;
		if(countCharacters(str2)>str[i][2] && str[i][2]!=0){
			text="“"+str[i][1]+"”长度不能超过"+str[i][2]+"个字符！";
			return text;
		}
		if(str[i].length>3 && str[i][3]==1 && str2.length<1){
			text="“"+str[i][1]+"”不能为空！";
			return text;
		}
		if(str[i].length>4 && str[i][4]==1 && str2.split(" ").length>1){
			text="“"+str[i][1]+"”不能有空格！";
			return text;
		}
		if(str[i].length>3 &&str[i][3]==7&& !/^\w+$/g.test(str2)){
			text="“"+str[i][1]+"”仅限英文字母、0-9的数字、下划线组成，不允许有特殊字符";
			return text;
		}
		/*if(str[i].length>5 && str[i][5]==1 && str2.split(".").length>1){
			text="“"+str[i][1]+"”不能有“.”敏感字符！";
			return text;
		}
		if(str[i].length>5 && str[i][5]==1 && str2.split("@").length>1 ){
			text="“"+str[i][1]+"”不能有“@”敏感字符！";
			return text;
		}
		if(str[i].length>5 && str[i][5]==1 && !/^\w+$/g.test(str2) ){
			text="“"+str[i][1]+"”只能由数字、26个英文字母或者下划线组成！";
			return text;
		}*/
		str2=str2.toUpperCase();
		if(str[i].length>6 && str[i][6]==1 && (str2.split("HTTP://").length>1 || str2.split("HTTPS://").length>1 || str2.split("HTML").length>1)){
			text="“"+str[i][1]+"”不能有“http://、https://、html”敏感字符！";
			return text;
		}
	}
	return text;
}