$(function(){
		$("input,textarea").tipsy();	   
});
//function showCover
function showCover(cover,id){
	var objCover=document.getElementById(cover);
	var objId=document.getElementById(id);
	var scrollW=document.documentElement.scrollWidth;
	var scrollH=document.documentElement.scrollHeight;
	var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.documentElement.scrollTop;
	var L=(document.documentElement.clientWidth-objId.clientWidth)/2+document.documentElement.scrollLeft;
	objCover.style.width=scrollW+"px";
	objCover.style.height=scrollH+"px";
	objCover.style.visibility="visible";
	objId.style.top=T+"px";
	objId.style.left=L+"px";
	objId.style.visibility="visible";
}
//function hideCover
function hideCover(cover,id){
	var objCover=document.getElementById(cover);
	var objId=document.getElementById(id);
	objCover.style.visibility="hidden";
	objId.style.visibility="hidden";
}
//function show_selected_item_val
function show_selected_item_val($item){   
   var value=$item.value;
   if(value=="1"){
	   document.getElementById("a").style.display="block";
	   document.getElementById("b").style.display="none";
	   }
	   else{
		  	document.getElementById("a").style.display="none";
	   		document.getElementById("b").style.display="block";
	   } 
  }
//function show_selected_item_val_2  
function show_selected_item_val_2($item){
var value=$item.value;
if(value=="1"){
   document.getElementById("x").style.display="block";
   document.getElementById("y").style.display="none";
   document.getElementById("z").style.display="none";
   }
   else if(value=="2")
   {
   document.getElementById("x").style.display="none";
   document.getElementById("y").style.display="block";
   document.getElementById("z").style.display="none";
	}
   else{
		document.getElementById("x").style.display="none";
		document.getElementById("y").style.display="none";
		document.getElementById("z").style.display="block";
	}
} 
 //function show2   
function show2($item){
   var value=$item.value;
   if(value=="3"){
	   document.getElementById("c").style.display="block";
	   document.getElementById("d").style.display="none";
	   }
	   else{
		  	document.getElementById("c").style.display="none";
	   		document.getElementById("d").style.display="block";
	   } 
}
//function show3    
function show3(obj){
	var opt=obj.value;
	if(opt==1){
		document.getElementById('shtian').style.display='block';
		document.getElementById('shtians').style.display='none';
	}else{
		document.getElementById('shtian').style.display='none';
		document.getElementById('shtians').style.display='block';
	}
}