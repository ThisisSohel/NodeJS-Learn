const fs = require('fs');
const chalk = require('chalk');


const getNotes =  () => {
    return 'Your notes....';
}
// taking notes from command line using command : node app.js add --tittle="my university" --body="this     is my first semester"
const addNote = (tittle, body) => {
     const notes = loadNotes(); 
     const duplicateNotes = notes.filter((note) => note.tittle === tittle)
    //  const duplicateNotes = notes.filter(function(note) {
    //     return note.tittle === tittle ;
    //  })
     
     if(duplicateNotes.length === 0){
        notes.push({
            tittle: tittle,
            body: body
         })
         saveNotes(notes);
         console.log(chalk.blue.inverse('New node added!'));
     }else {
        console.log(chalk.red.inverse('Note tittle taken!'));
     }

}

// removing notes from remove function

const removeNote = (tittle) => {
   const notes = loadNotes();
   const noteToKeep = notes.filter((note) => note.tittle !== tittle)
   if (notes.length > noteToKeep.length){
       console.log(chalk.red.inverse('Note Removed')); // we can remove notes from here using command node app.js remove --tittle="my university6"
       saveNotes(noteToKeep);
   }else{
    console.log(chalk.blue.inverse('No note found'));
   }
}

// Listing the notes using command : node app.js list
 const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach((note) => {
        console.log(note.tittle);
    })
 }

 // read the notes using command :  

 const readNotes = (tittle) => {
     const notes = loadNotes ()
     const note = notes.find((note) => note.tittle === tittle);
     if(note) {
        console.log(chalk.inverse(note.tittle));
        console.log(note.body);
     }else{
       console.log(chalk.red.inverse('Note note fund!'));
     }
 }

// Save note to the JSON file

const saveNotes = (notes) => {
    const dataSJON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataSJON);
}

//Load data from JSON file to see from app.js file

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataSJON = dataBuffer.toString();
        //console.log(dataSJON); I can also the notes data from here
        return JSON.parse(dataSJON);
        
    } catch (error) {
        return [];
    }

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}