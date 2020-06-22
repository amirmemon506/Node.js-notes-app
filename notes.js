const fs = require("fs")
const chalk = require("chalk")

const addNotes = (title,body) => {
    const notes = loadNotes()
    // const duplicatenotes = notes.filter(function(note){
    //     return note.title === title
    // })
    const duplicatenote = notes.find((note) => note.title === title)
    // console.log(duplicatenote);
    

    if (!duplicatenote){
        console.log("New note added");
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(notes);
        
    }else {
        console.log("note title taken!!");
        
    }
    
   
    
    
}

const saveNotes = (notes) =>{
    const JSONdata = JSON.stringify(notes)
    fs.writeFileSync('notes.json', JSONdata)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data 
    } catch(e) {
        return []
    }
    

}


const removeNote = (title) => {
    const notes = loadNotes()
    const Notetokeep = notes.filter((note) => note.title !== title)
    console.log(Notetokeep);

    
    console.log(notes);
    

    // if (Notetoremove.length > 0){
    //     notes.pop()
    //     console.log('note removed');
        
    // } else{
    //     console.log("note deos not exist");
        
    // }
    console.log(title);
    if (Notetokeep.length < notes.length){
        console.log(chalk.inverse.green('Note removed'));
        saveNotes(Notetokeep)
        
    }else {
        console.log(chalk.inverse.red('No note found'));
        
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your Notes"));
    
    notes.forEach((note) => {
        console.log(chalk.blue(note.title));
        
    });
    
}

const readNotes = (title) => {
    const notes = loadNotes()
    const readnote = notes.find((note) => note.title === title)
    console.log(readnote);
    
    if(readnote) {
        console.log(chalk.blue.inverse(readnote.title))
        console.log(chalk.red.inverse(readnote.body))
    }
    else{
        console.log(chalk.red.inverse("Error: No note found"));
        
    }
  


    
}


module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}