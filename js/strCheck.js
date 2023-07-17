//字符长度，包括汉字。
function countCharacters(content){
    var totalCount = 0; 
    for (var i=0; i<content.length; i++) { 
        var c = content.charCodeAt(i); 
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
             totalCount++; 
         }else {     
             totalCount+=2; 
         } 
     }
    return totalCount;
}
//验证内容为0时不验证0:id--1:名称--2：长度--3：不为空--4：不能有空格
function checkStr(str){
	for(var i=0;i<str.length;i++){
		var str2=document.getElementById(str[i][0]).value;
		if(countCharacters(str2)>str[i][2] && str[i][2]!=0){
			alert("“"+str[i][1]+"”长度不能超过"+str[i][2]+"位！");
			return false;
		}
		if(str[i].length>3 && str[i][3]==1 && str2.length<1){
			alert("“"+str[i][1]+"”不能为空！");
			return false;
		}
		if(str[i].length>4 && str[i][4]==1 && str2.split(" ").length>1){
			alert("“"+str[i][1]+"”不能有空格！");
			return false;
		}
		if(str[i].length>5 && str[i][5]==1 && str2.split(".").length>1){
			alert("“"+str[i][1]+"”不能有“.”敏感字符！");
			return false;
		}
		str2=str2.toUpperCase();
		if(str[i].length>6 && str[i][6]==1 && (str2.split("HTTP://").length>1 || str2.split("HTTPS://").length>1 || str2.split("HTML").length>1)){
			alert("“"+str[i][1]+"”不能有“http://、https://、html”敏感字符！");
			return false;
		}
	}
	return true;
}

