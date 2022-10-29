var orderNumber = [1,2,3,4,5];
var autoAdvance = setInterval(rightSight,5000);
var figureCount = 3;

function figuresOrder() {
    var filename;
    var figure;
    if (figureCount === 3) 
    {
       for (var i = 1; i < 4; i++) 
       {
            filename = "Pictures/img" + orderNumber[i] + "second.jpg";
            figure = document.getElementsByTagName("img")[i - 1];
            figure.src = filename;
       }
    } 
    else 
    {
       for (var i = 0; i < 5; i++) 
       {
            filename = "Pictures/img" + orderNumber[i] + "second.jpg";
            figure = document.getElementsByTagName("img")[i];
            figure.src = filename;
       }
    }
}

function right() 
{
    clearInterval(autoAdvance);
    rightSight();
}

function rightSight()
{
    for (var i = 0; i < 5; i++)
    {
        if ((orderNumber[i] + 1) === 6)
        {
            orderNumber[i] = 1;
        }
        else
        {
            orderNumber[i] +=1;
        }
        figuresOrder();
    }
}

function left() 
{
    clearInterval(autoAdvance);
    for (var i = 0; i < 5; i++) 
    {
       if ((orderNumber[i] - 1) === 0) 
       {
            orderNumber[i] = 5;
       } 
       else 
       {
            orderNumber[i] -= 1;
       }
       figuresOrder();
    }
}

function fiveAnimephotosPreview() 
{
    var articleElements = document.getElementsByTagName("article")[0];
    var fifthFigure = document.createElement("figure");
    fifthFigure.id = "fg5";
    fifthFigure.style.zIndex = "5";
    fifthFigure.style.position = "absolute";
    fifthFigure.style.right = "45px";
    fifthFigure.style.top = "67px";
    var fifthImage = document.createElement("img");
    fifthImage.width = "240";
    fifthImage.height = "135";
    fifthFigure.appendChild(fifthImage);
    articleElements.insertBefore(fifthFigure, document.getElementById("right"));
    
    var firstFigure = fifthFigure.cloneNode(true);
    firstFigure.id = "fg1";
    firstFigure.style.right = "";
    firstFigure.style.left = "45px";
    articleElements.insertBefore(firstFigure, document.getElementById("fg2"));
    
    figureCount = 5;
    var secondButton = document.querySelector("#button p");
    secondButton.innerHTML = "Show Fewer Photos";
    if (secondButton.addEventListener) 
    {
        secondButton.removeEventListener("click", fiveAnimephotosPreview, false);
        secondButton.addEventListener("click", threeAnimephotosPreview, false);
    } 
    else if (secondButton.attachEvent) 
    {
        secondButton.detachEvent("onclick", fiveAnimephotosPreview);
        secondButton.attachEvent("onclick", threeAnimephotosPreview);
    }
    
    document.getElementsByTagName("img")[0].src = "Pictures/img" + orderNumber[0] + "second.jpg";
    document.getElementsByTagName("img")[4].src = "Pictures/img" + orderNumber[4] + "second.jpg";
}

function threeAnimephotosPreview() 
{
    var articleElements = document.getElementsByTagName("article")[0];
    var secondButton = document.querySelector("#button p");
    figureCount = 3;
    articleElements.removeChild(document.getElementById("fg1"));
    articleElements.removeChild(document.getElementById("fg5"));
    secondButton.innerHTML = "Show More Photos";
    if (secondButton.addEventListener) 
    {
        secondButton.removeEventListener("click", threeAnimephotosPreview, false);
        secondButton.addEventListener("click", fiveAnimephotosPreview, false);
    } 
    else if (secondButton.attachEvent) 
    {
        secondButton.detachEvent("onclick", threeAnimephotosPreview);
        secondButton.attachEvent("onclick", fiveAnimephotosPreview);
    }
}

function zoomThephotos() 
{
    var width = 960;
    var height  = 600;
    var winLeft = ((screen.width - width) / 2);
    var winTop = ((screen.height - height) / 2);
    var winOptions = "width=960,height=600";
    winOptions += ",left=" + winLeft;
    winOptions += ",top=" + winTop;
    var zoomWindow = window.open("assignment3zoom.html", "assignment3zoomwin", winOptions);
    zoomWindow.focus();
}

function createEventListener()
{
    var leftarrow = document.getElementById("left");
    if (leftarrow.addEventListener) 
    {
        leftarrow.addEventListener("click", left, false); 
    } 
    else if (leftarrow.attachEvent)  
    {
        leftarrow.attachEvent("onclick", left);
    }

    var rightarrow = document.getElementById("right");
    if (rightarrow.addEventListener) 
    {
        rightarrow.addEventListener("click", right, false); 
    } 
    else if (rightarrow.attachEvent)  
    {
        rightarrow.attachEvent("onclick", right);
    }

    var main = document.getElementsByTagName("img")[1];
    if (main.addEventListener) 
    {
        main.addEventListener("click", zoomThephotos, false); 
    } 
    else if (main.attachEvent)  
    {
        main.attachEvent("onclick", zoomThephotos);
    }
   
    var allButton = document.querySelector("#button p");
    if (allButton.addEventListener) 
    {
        allButton.addEventListener("click", fiveAnimephotosPreview, false);
    } 
    else if (allButton.attachEvent) 
    {
        allButton.attachEvent("onclick", fiveAnimephotosPreview);
    }
}

function setUpPage() 
{
    createEventListener();
    figuresOrder();
}

if (window.addEventListener) 
{
    window.addEventListener("load", setUpPage, false); 
} 
else if (window.attachEvent)  
{
    window.attachEvent("onload", setUpPage);
}