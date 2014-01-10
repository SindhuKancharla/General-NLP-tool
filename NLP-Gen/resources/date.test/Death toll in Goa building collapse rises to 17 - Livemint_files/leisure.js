	var pagelesiure=0;
	var paginationlesiure="";
	var totalcountmedia = 0;
	var lesuiretimermedia = "0";var leasiurewidthmedia = "0";
	var t1=0;
	var pagelesiuremedia=0;
	var paginationlesiuremedia="";
	var t1media=0;
  function slide(direction,width,timer)
  {
    if(direction != '0')
    {
	    totalcount= $('div.slides1 > div').length;
		lesuirecounter=Math.ceil(totalcount/1);
		
		lesuiretimer = timer;
		leasiurewidth = width;
		pagelesiure=parseInt(pagelesiure+(direction));
		if(pagelesiure<0)
		{pagelesiure=parseInt(lesuirecounter-1);}
		$("#rightarrow").hide();
		$("#leftarrow").show();
		for(var i=0;i<totalcount;i++) 
			{
				if(i==0){$("#ids"+i).addClass('inact_sqr');}
			    else{$("#ids"+i).addClass('inact_sqr');}
			}
		if(pagelesiure>=lesuirecounter)
		{pagelesiure=0;}
		//alert(pagelesiure);
        animate(pagelesiure,lesuiretimer,leasiurewidth);
        }
  }
  
  function slide_media(direction,width,timer)
  {
    if(direction != '0')
    {
	    totalcountmedia= $('div.slidesmedia > div').length;
	    //alert(totalcountmedia)
		var lesuirecountermedia=Math.ceil(totalcountmedia/1);
		
		 lesuiretimermedia = timer;
		 leasiurewidthmedia = width;
		pagelesiuremedia=parseInt(pagelesiuremedia+(direction));
		if(pagelesiuremedia<0)
		{pagelesiuremedia=parseInt(lesuirecountermedia-1);}
		$("#rightarrowmini").hide();
		$("#leftarrowmini").show();
		for(var i=0;i<totalcountmedia;i++) 
			{
				if(i==0){$("#idsmedia"+i).addClass('inact_sqr');}
			    else{$("#idsmedia"+i).addClass('inact_sqr');}
			}
		if(pagelesiuremedia>=lesuirecountermedia)
		{pagelesiuremedia=0;}
		
        animate_media(pagelesiuremedia,lesuiretimermedia,leasiurewidthmedia);
        }
  }
  
  
function slide2(page){ 
	animate(page,lesuiretimer,leasiurewidth); pagelesiure = page;
	ga(parent.document.title,'Slider','Click');
}

function slide2_media(pagemedia){
 animate_media(pagemedia,lesuiretimermedia,leasiurewidthmedia); 
 pagelesiuremedia = pagemedia;
 ga(parent.document.title,'Slider','Click');
 
}


function animate(pagelesiure,lesuiretimer,leasiurewidth)
   {
	 var browserchk=checkIEBrowser();
     $('.slides1').animate({'margin-left': -(leasiurewidth)*pagelesiure}, lesuiretimer, function()
       {
			  for(var i=0;i<totalcount;i++)
			  { 
				  $("#ids"+i).removeClass();
				 if(i==pagelesiure)
				 {
					 $("#ids"+pagelesiure).addClass('act_sqr');
					 }
				 else{$("#ids"+i).addClass('inact_sqr');}
			  }

			if(pagelesiure=='0')
			{   
			   if(browserchk=='f'){
			   var lvalue =  $("#leftarrow").html().replace('<IMG','<img style = "cursor:pointer;" onclick="slide2(1)"');
			   }
			   else{
			    var lvalue =  $("#leftarrow").html().replace('<img','<img style = "cursor:pointer;" onclick="slide2(1)"');
			    }
				$("#leftarrow").html(lvalue).show();
				$("#rightarrow").hide();

			}
			else if(pagelesiure==(totalcount-1))
			{
					var l = parseInt(pagelesiure)-1;
					var R = parseInt(pagelesiure)+1;
					$("#leftarrow").hide();
					$("#rightarrow").show(); 
					if(browserchk=='f'){
					  	 var lvalue =  $("#rightarrow").html().replace('<IMG','<img style = "cursor:pointer;" onclick="slide2(1)"');
					   	}
					  	 else{
					   	 var lvalue =  $("#rightarrow").html().replace('<img','<img style = "cursor:pointer;" onclick="slide2(1)"');
					    }				
					$("#rightarrow").html(rvalue);
				 
			}
			else if((pagelesiure) != totalcount && pagelesiure != '0')
			{
				var l = parseInt(pagelesiure)-1;
				var R = parseInt(pagelesiure)+1;
				$("#leftarrow").show();
				$("#rightarrow").show();
				if(browserchk=='f'){
					  	var lvalue = $("#leftarrow").html().replace('<IMG','<img style = "cursor:pointer;" onclick="slide2('+R+')"');
						var rvalue = $("#rightarrow").html().replace('<IMG','<img style = "cursor:pointer;" onclick="slide2('+l+')"');
					   	}
					  	 else{
					   	    var lvalue = $("#leftarrow").html().replace('<img','<img style = "cursor:pointer;" onclick="slide2('+R+')"');
						var rvalue = $("#rightarrow").html().replace('<img','<img style = "cursor:pointer;" onclick="slide2('+l+')"');
					    }				
				$("#leftarrow").html(lvalue);
				$("#rightarrow").html(rvalue);
		    }
			clearInterval(t1);
            t1=setTimeout('slide(1,'+leasiurewidth+','+lesuiretimer+')',5000);
}).hover(  
		function()
		{
clearInterval(t1);
		},
		function()
		{
		clearInterval(t1);
              t1=setTimeout('slide(1,'+leasiurewidth+','+lesuiretimer+')',5000);			
		}
	);;
}

function animate_media(pagelesiuremedia,lesuiretimermedia,leasiurewidthmedia)
   {
   
	var browserchkmedia=checkIEBrowser();
     $('.slidesmedia').animate({'margin-left': -(leasiurewidthmedia)*pagelesiuremedia}, lesuiretimermedia, function()
       {
              //alert(pagelesiuremedia);
			  for(var i=0;i<totalcountmedia;i++)
			  { 
                 $("#idsmedia"+i).removeClass();
				 if(i==pagelesiuremedia)
				 {
					 $("#idsmedia"+pagelesiuremedia).addClass('act_sqr');
				 }
				 else{$("#idsmedia"+i).addClass('inact_sqr');}
			  }
			if(pagelesiuremedia=='0')
			{   
			   if(browserchkmedia=='f')
			   {
			    var lvaluemedia =  $("#leftarrowmini").html().replace('<IMG','<img style = "cursor:pointer;" onclick="slide2_media(1)"');
			   }
			   else
			   {
			    var lvaluemedia =  $("#leftarrowmini").html().replace('<img','<img style = "cursor:pointer;" onclick="slide2_media(1)"');
			    }
				$("#leftarrowmini").html(lvaluemedia).show();
				$("#rightarrowmini").hide();

			}
			else if(pagelesiuremedia==(totalcountmedia-1))
			{
					var l = parseInt(pagelesiuremedia)-1;
					var R = parseInt(pagelesiuremedia)+1;
					$("#leftarrowmini").hide();
					$("#rightarrowmini").show(); 
					if(browserchkmedia=='f'){
					  	 var lvaluemedia =  $("#rightarrowmini").html().replace('<IMG','<img style = "cursor:pointer;" onclick="slide2_media(1)"');
					   	}
					  	 else{
					   	 var lvaluemedia =  $("#rightarrowmini").html().replace('<img','<img style = "cursor:pointer;" onclick="slide2_media(1)"');
					    }				
					$("#rightarrowmini").html();
				 
			}
			else if((pagelesiuremedia) != totalcountmedia && pagelesiuremedia != '0')
			{
				var l = parseInt(pagelesiuremedia)-1;
				var R = parseInt(pagelesiuremedia)+1;
				//alert(R+"--"+l)
				$("#leftarrowmini").show();
				$("#rightarrowmini").show();
				if(browserchkmedia=='f'){
					  	var lvaluemedia = $("#leftarrowmini").html().replace('<IMG','<img style = "cursor:pointer;" onclick="slide2_media('+R+')"');
						var rvaluemedia = $("#rightarrowmini").html().replace('<IMG','<img style = "cursor:pointer;" onclick="slide2_media('+l+')"');
					   	}
					  	 else{
					   	    var lvaluemedia = $("#leftarrowmini").html().replace('<img','<img style = "cursor:pointer;" onclick="slide2_media('+R+')"');
						var rvaluemedia = $("#rightarrowmini").html().replace('<img','<img style = "cursor:pointer;" onclick="slide2_media('+l+')"');
					    }				
				$("#leftarrowmini").html(lvaluemedia);
				$("#rightarrowmini").html(rvaluemedia);
		    }
			clearInterval(t1media);
            t1media=setTimeout('slide_media(1,'+leasiurewidthmedia+','+lesuiretimermedia+')',5000);
}).hover(  
		function()
		{
clearInterval(t1media);
		},
		function()
		{
		clearInterval(t1media);
              t1media=setTimeout('slide_media(1,'+leasiurewidthmedia+','+lesuiretimermedia+')',5000);			
		}
	);;
}