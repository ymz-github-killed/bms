	var screen=true;i=0;width=0;
	function  shiftwindow(v)
	{
		if(v==null)v="210";
		if(screen==false)
		{
			parent.document.getElementById("topwin").cols=v+',*';
			screen=true;
			//parent.topwin.cols=v+',*';
			//screen=true;		
		}
		else if(screen==true)
		{
			parent.document.getElementById("topwin").cols='0,*';
			screen=false;
			//parent.topwin.cols='0,*';
			//screen=false;	
		}
	}
	var show=false;
	function stashitem(item){
		if(show==false)
		{
			item.style.display='none';
			show=true;		
		}
		else if(show==true)
		{
			item.style.display='';
			show=false;	
		}
	}
	