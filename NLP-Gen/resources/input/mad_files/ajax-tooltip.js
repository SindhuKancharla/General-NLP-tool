var x_offset_tooltip = 5;
var y_offset_tooltip = 0;
var tooltipObj = false;
var tooltipObj_iframe = false;
var tooltipOn = false;

var tooltip_MSIE = false;
if(navigator.userAgent.indexOf('MSIE')>=0)tooltip_MSIE=true;


function showTooltip(externalFile,inputObj,hstyle)
{
	if(tooltipOn) {
		hideTooltip(); return;
	}
	tooltipOn = true;

	if(!tooltipObj)	/* Tooltip div not created yet ? */
	{
		tooltipObj = document.createElement('DIV');
		tooltipObj.style.position = 'absolute';
		tooltipObj.id = 'tooltipObj';		
		document.body.appendChild(tooltipObj);

		var leftDiv = document.createElement('DIV');	/* Create arrow div */
		leftDiv.className='tooltip_arrow';
		leftDiv.id = 'tooltip_arrow';
		tooltipObj.appendChild(leftDiv);
		
		var contentDiv = document.createElement('DIV'); /* Create tooltip content div */
		contentDiv.className = 'tooltip';
		tooltipObj.appendChild(contentDiv);
		contentDiv.id = 'tooltip_content';
		
		if(tooltip_MSIE && false){	/* Create iframe object for MSIE in order to make the tooltip cover select boxes */
			tooltipObj_iframe = document.createElement('<IFRAME frameborder="0">');
			tooltipObj_iframe.style.position = 'absolute';
			tooltipObj_iframe.border='0';
			tooltipObj_iframe.frameborder=0;
			tooltipObj_iframe.style.backgroundColor='#FFF';
			tooltipObj_iframe.src = 'about:blank';
			contentDiv.appendChild(tooltipObj_iframe);
			tooltipObj_iframe.style.left = '0px';
			tooltipObj_iframe.style.top = '0px';
		}

			
	}
	// Find position of tooltip
	tooltipObj.style.display='block';
	//	loadContent('tooltip_content',externalFile);

	document.getElementById('tooltip_content').innerHTML	=	externalFile;

	if(tooltip_MSIE && false){
		tooltipObj_iframe.style.width = tooltipObj.clientWidth + 'px';
		tooltipObj_iframe.style.height = tooltipObj.clientHeight + 'px';
	}

	positionTooltip(inputObj);
}

function positionTooltip(inputObj)
{
	var leftPos = (ajaxTooltip_getLeftPos(inputObj) + inputObj.offsetWidth);
	var topPos = ajaxTooltip_getTopPos(inputObj);
	
	/*
	var rightedge=tooltip_MSIE? document.body.clientWidth-leftPos : window.innerWidth-leftPos
	var bottomedge=tooltip_MSIE? document.body.clientHeight-topPos : window.innerHeight-topPos
	*/
	var tooltipWidth = document.getElementById('tooltip_content').offsetWidth +  document.getElementById('tooltip_arrow').offsetWidth; 
	// Dropping this reposition for now because of flickering
	//var offset = tooltipWidth - rightedge; 
	//if(offset>0)leftPos = Math.max(0,leftPos - offset - 5);
	
	tooltipObj.style.left = leftPos + 'px';
	tooltipObj.style.top = topPos + 'px';	
	
	
}


function hideTooltip()
{
	tooltipOn = false;
	tooltipObj.style.display='none';
}

function ajaxTooltip_getTopPos(inputObj)
{		
  var returnValue = inputObj.offsetTop;
  while((inputObj = inputObj.offsetParent) != null){
  	if(inputObj.tagName!='HTML')returnValue += inputObj.offsetTop;
  }
  return returnValue;
}

function ajaxTooltip_getLeftPos(inputObj)
{
  var returnValue = inputObj.offsetLeft;
  while((inputObj = inputObj.offsetParent) != null){
  	if(inputObj.tagName!='HTML')returnValue += inputObj.offsetLeft;
  }
  return returnValue;
}