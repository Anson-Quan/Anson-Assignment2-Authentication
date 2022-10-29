var numbersOrderArray = window.opener.orderNumber;
var fgFilename = "Pictures/img" + numbersOrderArray[2] + ".jpg";

function pageSetup() 
{
   document.getElementsByTagName("img")[0].src = fgFilename; 
   createEventListener();
}

function closeWin() 
{
   window.close();
}

var favoriteLists = window.opener.document;
function addToFavorites()
{
   var favoriteImages = document.createElement("img");
   favoriteImages.src = fgFilename;
   favoriteLists.getElementById("Fbutton").appendChild(favoriteImages);
   createEventListener();
}

function createEventListener() 
{
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) 
   {
     closeWindowDiv.addEventListener("click", closeWin, false); 
   } 
   else if (closeWindowDiv.attachEvent)  
   {
     closeWindowDiv.attachEvent("onclick", closeWin);
   }

   var favoriteButton = document.getElementById("Fbutton"); 
   if (favoriteButton.addEventListener) 
   {
      favoriteButton.addEventListener("click", addToFavorites, false); 
   } 
   else if (favoriteButton.attachEvent)  
   {
      favoriteButton.attachEvent("onclick", addToFavorites);
   }
}

window.onload = pageSetup;



