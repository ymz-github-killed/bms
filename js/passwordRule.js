function loginPwd(username,password,type){
	//username当type不为1时为用户名，type为1时为原密码
	//password 用户新密码
	//type为1时是修改密码
	var name=document.getElementById(username).value;
	var pwd=document.getElementById(password).value;
	//密码在6~16位之间
	if(pwd.length<6 || pwd.length>16){
		alert("您输入的密码应在6~16之间！");
		return false;
	} 
	//密码不能跟用户名一致
	if(name==pwd){
		if(type==1){
			alert("密码不能与原密码一致！");
			return false;
		}else{
			alert("密码不能与用户名一致！");
			return false;
		}
	}
	//密码第一个字符为字母
	var first=pwd.substring(0,1);
	if(!/^[A-Za-z]+$/g.test(first)){
		alert("密码首字符应该为英文字母！");
		return false;
	}
	//密码必须包含数字、字母和特殊字符
	var reg=new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
  	if(!reg.test(pwd)){
  		alert("密码必须包含数字、字母！");
		return false;
  	}
	//不能包含4个连续字符
	var j=1;
	for(var i=0;i<pwd.length-1;i++){
		if(pwd.substring(i,i+1)==pwd.substring(i+1,i+2)){
			j++;
			if(j>=4){
				alert("密码不能包含4个连续字符！");
				return false;
			}
		}else{
			j=1;
		}
	}
	//密码不能有空格
	if(pwd.split(" ").length>1){
			alert("密码不能有空格！");
			return false;
		}
	return true;
}


