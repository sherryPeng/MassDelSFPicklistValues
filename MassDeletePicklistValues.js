var links = document.getElementsByTagName("a");  
/* picklist values need to be deleted */
var delArray= ["value 0", "value 1", "value 2"];
/* Pick out the Del links. */  
var delLinks = new Array(); 
for (var i = 0; i < links.length; i++) {
   var link = links[i];   
   var title = link.title;
   if (link.innerHTML == "Del") {
	 for(var j=0; j<delArray.length; j++){
		if(title.indexOf(delArray[j]) > -1){
			delLinks[delLinks.length] = link;
			break;
		};
     }
	}
	
	if(delLinks.length > 0)
		break;
}
if(delLinks.length > 0){	
   /* click the del link for the pick list value that need to be deleted*/  
  for (var i = 0; i < delLinks.length; i++) {
    var delLink = delLinks[i];
    window.open(delLink.attributes['href'].value, "_self"); 
  }
}
