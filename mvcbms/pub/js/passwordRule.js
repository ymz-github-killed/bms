function loginPwd(username,password,type){
	//username当type不为1时为用户名，type为1时为原密码
	//password 用户新密码
	//type为1时是修改密码
	var text = null;
	// var name=document.getElementById(username).value;
	// var pwd=document.getElementById(password).value;
	var name = username;
	var pwd = password;
	//密码在8~16位之间
	if(pwd.length<8 || pwd.length>16){
		text="您输入的密码应在8~16之间,且密码由大、小写字母、数字、特殊字符4种组合组成！";
		return text;
	} 
	//密码不能跟用户名一致
	if(name==pwd){
		if(type==1){
			text="密码不能与原密码一致！";
			return text;
		}else{
			text="密码不能与用户名一致！";
			return text;
		}
	}
	//不能包含连续字符
	var j=1;
	for(var i=0;i<pwd.length-1;i++){
		if(pwd.substring(i,i+1)==pwd.substring(i+1,i+2)){
			j++;
			if(j>=3){
				text="密码不能包含连续字符！";
				return text;
			}
		}else{
			j=1;
		}
	}
	
	//密码第一个字符为字母
	/*var first=pwd.substring(0,1);
	if(!/^[A-Za-z]+$/g.test(first)){
		text="密码首字符应该为英文字母！";
		return text;
	}*/                          
	var reg = new RegExp("^(?![A-Za-z0-9]+$)(?![a-z0-9\\\\W]+$)(?![A-Za-z\\\\W]+$)(?![A-Z0-9\\\\W]+$)[a-zA-Z0-9\\\\W]{8,}$");
	// var reg = new RegExp("^(?![0-9]+$)(?!a-zA-Z]+$)[0-9A-Za-z\\W]$");
	// var PW_PATTERN = "^(?![A-Za-z0-9]+$)(?![a-z0-9\\W]+$)(?![A-Za-z\\W]+$)(?![A-Z0-9\\W]+$)[a-zA-Z0-9\\W]{8,}$";

	var arr = [];
	// arr.push(...[/\d/g, /[A-Z]/g,/[a-z]/g, /[\\~.?!|/@#$%^&*()_-]/g]);
	arr.push(/\d/g);
	arr.push(/[A-Z]/g);
	arr.push(/[a-z]/g);
	arr.push(/[\\~.?!|/@#$%^&*()_-]/g);
	for (var i = 0;i<arr.length;i++){
		const isValidate = arr[i].test(pwd);
		if (!isValidate){
			text="密码由大、小写字母、数字、特殊字符4种组合！";
			return text;
		}
	}

  	// if(reg.test(pwd)){
  	//     text="由大写字母、小写字母、数字、特殊符号中的3种及以上类型组成！";
  	//     return text;
  	// }
	//密码不能有空格
	if(pwd.split(" ").length>1){
		text="密码不能有空格！";
			return text;
		}
	//密码不能为连续键盘序列组合
	 var c1 = [
	           ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
	           ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|'],
	           ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"'],
	           ['z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?']
	       ];
	       var c2 = [
	           ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
	           ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
	           ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''],
	           ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
	       ];
	       str = pwd.split("");
	       //获取坐标位置
	       var y = [];
	       var x = [];
	       for (var c = 0; c < str.length; c++) {
	           y[c] = 0;//当做~`键处理
	           x[c] = -1;
	           for (var i = 0; i < c1.length; i++) {
	               for (var j = 0; j < c1[i].length; j++) {
	                   if (str[c] == c1[i][j]) {
	                       y[c] = i;
	                       x[c] = j;
	                   }
	               }
	           }
	           if (x[c] != -1) continue;
	           for (var i = 0; i < c2.length; i++) {
	               for (var j = 0; j < c2[i].length; j++) {
	                   if (str[c] == c2[i][j]) {
	                       y[c] = i;
	                       x[c] = j;
	                   }
	               }
	           }
	       }
	       //匹配坐标连线
	       for (var c = 1; c < str.length - 1; c++) {
	           if (y[c - 1] == y[c] && y[c] == y[c + 1]) {
	               if ((x[c - 1] + 1 == x[c] && x[c] + 1 == x[c + 1]) || (x[c + 1] + 1 == x[c] && x[c] + 1 == x[c - 1])) {
	                   text="密码不能为连续键盘序列组合！";
	                   return text;
	               }
	           } else if (x[c - 1] == x[c] && x[c] == x[c + 1]) {
	               if ((y[c - 1] + 1 == y[c] && y[c] + 1 == y[c + 1]) || (y[c + 1] + 1 == y[c] && y[c] + 1 == y[c - 1])) {
	            	   text="密码不能为连续键盘序列组合！";
	                   return text;
	               }
	           }
	       }
	       var c3 = [
	  	           ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
	  	           ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
	  	           ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"'],
	  	           ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?']
	  	       ];
	  	       var c4 = [
	  	           ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
	  	           ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
	  	           ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\''],
	  	           ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']
	  	       ];
	  	       str1 = pwd.split("");
	  	       //获取坐标位置
	  	       var y1 = [];
	  	       var x1 = [];
	  	       for (var c = 0; c < str1.length; c++) {
	  	           y1[c] = 0;//当做~`键处理
	  	           x1[c] = -1;
	  	           for (var i = 0; i < c3.length; i++) {
	  	               for (var j = 0; j < c3[i].length; j++) {
	  	                   if (str1[c] == c3[i][j]) {
	  	                       y1[c] = i;
	  	                       x1[c] = j;
	  	                   }
	  	               }
	  	           }
	  	           if (x1[c] != -1) continue;
	  	           for (var i = 0; i < c4.length; i++) {
	  	               for (var j = 0; j < c4[i].length; j++) {
	  	                   if (str1[c] == c4[i][j]) {
	  	                       y1[c] = i;
	  	                       x1[c] = j;
	  	                   }
	  	               }
	  	           }
	  	       }
	  	       //匹配坐标连线
	  	       for (var c = 1; c < str1.length - 1; c++) {
	  	           if (y1[c - 1] == y1[c] && y1[c] == y1[c + 1]) {
	  	               if ((x1[c - 1] + 1 == x1[c] && x1[c] + 1 == x1[c + 1]) || (x1[c + 1] + 1 == x1[c] && x1[c] + 1 == x1[c - 1])) {
	  	                   text="密码不能为连续键盘序列组合！";
	  	                   return text;
	  	               }
	  	           } else if (x1[c - 1] == x1[c] && x1[c] == x1[c + 1]) {
	  	               if ((y1[c - 1] + 1 == y1[c] && y1[c] + 1 == y1[c + 1]) || (y1[c + 1] + 1 == y1[c] && y1[c] + 1 == y1[c - 1])) {
	  	            	   text="密码不能为连续键盘序列组合！";
	  	                   return text;
	  	               }
	  	           }
	  	       }
	       return text;
}

