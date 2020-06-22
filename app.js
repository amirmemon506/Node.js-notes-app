const notes = require("./notes.js");
const chalk = require("chalk");
// const msg = getNotes();
const yargs = require("yargs")

yargs.command({
    command:'add',
    describe: 'adding a note',
    builder: {
        title: {
            describe: "the title",
            type: 'string',
            demandOption: true

        },
        body : {
            describe: "this is the body",
            demandOption : true,
            type: 'string'
        }

    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)

    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title:{
            describe: 'title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
        
    }

})

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler(){
        
        notes.listNotes()
        
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: "note title to be read",
            demandOption: true,
            type: 'string'

        }
    }, 
    handler(argv){
        notes.readNotes(argv.title)
        
    }

})

yargs.parse()




