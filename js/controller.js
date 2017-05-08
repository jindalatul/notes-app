/**

This is main Controller of the application, interacting with view and data.

**/

window.addEventListener("load",init);
window.noteCounter=0;

function init(){
	
	document.getElementById("add-notes-option").addEventListener("click",showAddNotesDialog);
	
	document.getElementById("cancel-button").addEventListener("click",function(){
			document.getElementById("form-box").style.transform="translateX(-100%)";
	});

	document.getElementById("delete-all-option").addEventListener("click",deleteAllNotes);
	document.getElementById("delete-button").addEventListener("click",deleteNote)

		
    document.getElementById("save-button").addEventListener("click",saveAction);
	
    document.getElementById("noteName").addEventListener("keyup",checkEmpty);   
   
}

function showAddNotesDialog()
{
		document.getElementById("form-box").children[0].children[0].innerHTML = "Add New Note";
		document.getElementById("noteName").value = "";
		document.getElementById("color").value= "default";
		document.getElementById("nid").value=0;
		document.getElementById("delete-button").style.display="none";
		document.getElementById("form-box").style.transform="translateX(100%)";
}


function ShowEditNotesDialog()
{
	document.getElementById("form-box").children[0].children[0].innerHTML = "Updates Note";
	document.getElementById("noteName").value = this.innerHTML;
	document.getElementById("color").value= this.style.color;
	document.getElementById("nid").value=this.getAttribute("nid");
	document.getElementById("delete-button").style.display="inline-block";
	document.getElementById("form-box").style.transform="translateX(100%)";
}

function checkEmpty(){
    var noteName = document.getElementById(this.id).value;
    if(noteName){
        document.getElementById("noteNameError").innerHTML="";
    }
}

function deleteNote()
{
	var nid = document.getElementById("nid").value;
	noteOperation.deleteNote(nid);
	printNotes();	
	document.getElementById("form-box").style.transform="translateX(-100%)";
}

function deleteAllNotes()
{
	noteOperation.emptyNotes();
	//// Delete all notes-option
	document.getElementById("notes-section").children[0].innerHTML="";
}

function saveAction()
{
		var noteName = document.getElementById("noteName").value;
		var color = document.getElementById("color").value;
		var nid = document.getElementById("nid").value;
        	
		if(!noteName){
            document.getElementById("noteNameError").innerHTML="noteName Can't Be Empty";
            return ;
        }
		
        if(nid>0)
				noteOperation.updateNotes(nid,noteName,color);
        else
				noteOperation.addNotes(noteName,color);
		
		printNotes();

		document.getElementById("form-box").style.transform="translateX(-100%)";
}

function printNotes()
{
	  var ul = document.getElementById("notes-section").children[0];
	  var notes = noteOperation.noteList;
	  
	  ul.innerHTML="";
	  
	  notes.forEach(function(currentNote){
	   var li = document.createElement("li");

		li.setAttribute("nid",currentNote.nid);
		li.style.color = currentNote.color;
		li.addEventListener("click",ShowEditNotesDialog);
	    li.innerHTML = currentNote.name;
        ul.appendChild(li);
	  });
	  	
}