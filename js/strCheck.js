//�ַ����ȣ��������֡�
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
//��֤����Ϊ0ʱ����֤0:id--1:����--2������--3����Ϊ��--4�������пո�
function checkStr(str){
	for(var i=0;i<str.length;i++){
		var str2=document.getElementById(str[i][0]).value;
		if(countCharacters(str2)>str[i][2] && str[i][2]!=0){
			alert("��"+str[i][1]+"�����Ȳ��ܳ���"+str[i][2]+"λ��");
			return false;
		}
		if(str[i].length>3 && str[i][3]==1 && str2.length<1){
			alert("��"+str[i][1]+"������Ϊ�գ�");
			return false;
		}
		if(str[i].length>4 && str[i][4]==1 && str2.split(" ").length>1){
			alert("��"+str[i][1]+"�������пո�");
			return false;
		}
		if(str[i].length>5 && str[i][5]==1 && str2.split(".").length>1){
			alert("��"+str[i][1]+"�������С�.�������ַ���");
			return false;
		}
		str2=str2.toUpperCase();
		if(str[i].length>6 && str[i][6]==1 && (str2.split("HTTP://").length>1 || str2.split("HTTPS://").length>1 || str2.split("HTML").length>1)){
			alert("��"+str[i][1]+"�������С�http://��https://��html�������ַ���");
			return false;
		}
	}
	return true;
}

