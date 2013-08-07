/*****************************************************************
*	Name    : popOverButton
*	Author  : Kony
*	Purpose : To display specific popup styles on click of Button
******************************************************************/
function popOverButton(eventObj)
{
	var context  = {};
	
	switch(eventObj.text)
	{
		case "Top":
				context= {"widget":frmPopOverButton.btnFPBTop,"anchor":"top","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "Bottom":
				context= {"widget":frmPopOverButton.btnFPBBottom,"anchor":"bottom","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "Left":
				context= {"widget":frmPopOverButton.btnFPBLeft,"anchor":"left","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();				
				break;
		case "Right":
				context= {"widget":frmPopOverButton.btnFPBRight,"anchor":"right","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();					
				break;	
	}
}

/*****************************************************************
*	Name    : popOverHbox
*	Author  : Kony
*	Purpose : To display specific popup styles on click of HBox
******************************************************************/
function popOverHbox(eventObj)
{
	var context  = {};
	
	switch(eventObj.id)
	{
		case "hbxFPHTop":
				context= {"widget":frmPopOverHbox.hbxFPHTop,"anchor":"top","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "hbxFPHBottom":
				context= {"widget":frmPopOverHbox.hbxFPHBottom,"anchor":"bottom","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "hbxFPHLeft":
				context= {"widget":frmPopOverHbox.hbxFPHLeft,"anchor":"left","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();				
				break;
		case "hbxFPHRight":
				context= {"widget":frmPopOverHbox.hbxFPHRight,"anchor":"right","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();					
				break;	
	}
}

/*****************************************************************
*	Name    : popOverVbox
*	Author  : Kony
*	Purpose : To display specific popup styles on click of VBox
******************************************************************/
function popOverVbox(eventObj)
{
	var context  = {};
	
	switch(eventObj.id)
	{
		case "vbxFPVTop":
				context= {"widget":frmPopOverVbox.vbxFPVTop,"anchor":"top","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "vbxFPVBottom":
				context= {"widget":frmPopOverVbox.vbxFPVBottom,"anchor":"bottom","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case "vbxFPVLeft":
				context= {"widget":frmPopOverVbox.vbxFPVLeft,"anchor":"left","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();				
				break;
		case "vbxFPVRight":
				context= {"widget":frmPopOverVbox.vbxFPVRight,"anchor":"right","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();					
				break;	
	}
}

/*****************************************************************
*	Name    : popOverSegment
*	Author  : Kony
*	Purpose : To display specific popup styles on click of Segment Row
******************************************************************/
function popOverSegment(eventObj)
{
	var context  = {};
	
	switch(eventObj.selectedIndex[1])
	{
		case 0:
				context= {"widget":frmPopOverSegment.segPopOver,"anchor":"top","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case 1:
				context= {"widget":frmPopOverSegment.segPopOver,"anchor":"bottom","sizetoanchorwidth":false}
				popTopNBottom.setContext(context);
				popTopNBottom.show();
				break;
		case 2:
				context= {"widget":frmPopOverSegment.segPopOver,"anchor":"left","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();				
				break;
		case 3:				
				context= {"widget":frmPopOverSegment.segPopOver,"anchor":"right","sizetoanchorwidth":false}
				popLeftNright.setContext(context);
				popLeftNright.show();					
				break;	
	}
}