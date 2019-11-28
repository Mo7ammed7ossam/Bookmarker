// declare variables

// inputs 
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

// buttons
var btnSubmit = document.getElementById("btnSubmit");                   // button submit

// outputs
var bookmarksResults = document.getElementById("bookmarksResults");     // div to display

// globale variables
var bookMarksContainer;
/////////////////////////////////////////////////////////////////////////////////

// declare functions

// Enter Data
function addFun()
{
    var bookMark = 
        {
            BMname : siteName.value,
            BMurl : siteUrl.value
        }
    bookMarksContainer.push(bookMark);
    localStorage.setItem("bookMarksContainer",JSON.stringify(bookMarksContainer));
}

// Display Data
function showFun()
{
    var bookMarkDisplay = "";
    for(var i=0 ; i < bookMarksContainer.length ; i++)
        {
            bookMarkDisplay +=  `<div class="mybookmark">
                                    <h3>
                                        `+bookMarksContainer[i].BMname+`
                                        <a href="`+bookMarksContainer[i].BMurl+`" class="btn btn-primary ml-5"> Visite </a>
                                        <a href="#" onclick="deleteFun(`+ i +`)" class="btn btn-danger"> Delete </a>
                                    </h3>
                                </div>`
        }
    bookmarksResults.innerHTML = bookMarkDisplay;
}

// Delete Data
function deleteFun(index)
{
    bookMarksContainer.splice(index,1);
    localStorage.setItem("bookMarksContainer",JSON.stringify(bookMarksContainer));
    showFun();
}


//////////////////////////////////////////////////////////////

// Final Actions

// check local storage
if(localStorage.getItem("bookMarksContainer") == null)
    {
        bookMarksContainer = [];
    }
else
    {
        bookMarksContainer = JSON.parse(localStorage.getItem("bookMarksContainer"));
        showFun();
    }

// button click
btnSubmit.onclick = function()
{
    addFun();
    showFun();
}



































