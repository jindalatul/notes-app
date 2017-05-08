/* 
	Data and its operations
*/
function Note(name, color){
    this.nid = ++window.noteCounter;
	this.name = name;
    this.color = color;
}

var noteOperation = {
    noteList:[],
    addNotes:function(name,color){
        var note = new Note(name,color);
        this.noteList.push(note);
    },
	updateNotes:function(nid,name,color){
			
				//alert("length"+this.noteList.length);
			
				this.noteList.forEach(function(currentNote){
			
				if(currentNote.nid == nid)
				{
					currentNote.name=name;
					currentNote.color=color;
					return true;
				}
			});
	},
	deleteNote:function(nid){
		//console.log(nid);
		
		//filter to delete notes
		this.noteList = this.noteList.filter(function(note){
				return (note.nid!=nid);
		});
		
		//alert(result.length);
	}
	,
	emptyNotes:function()
	{
		if(this.noteList.length<=0)
		{
			alert("No Notes are added");
			return false;
		}
		this.noteList.length=0;
	}
}