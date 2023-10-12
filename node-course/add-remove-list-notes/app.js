const yargs = require('yargs')
const notes = require('./notes.js')
//Customize Yargs version

yargs.version('12.21.23');

// Create add command

yargs.command({     //app.js add --tittle="my university"--body="this is my first semester"
    command: 'add',
    description: 'Add new note...',
    builder: {
       tittle: {
        describe: 'Note tittle' ,
        demandOption: true,
        type: 'string'
       },
       body: {
          describe: 'Note body',
          demandOption: true,
          type: 'string'
       }
    },
    handler: function(argv){
        notes.addNote(argv.tittle, argv.body);
    }
})


//create remove command

yargs.command({
    command: 'remove',
    description: 'Remove notes..',
    builder: {
         tittle: {
             describe: 'Remove tittle',
             demandOption: true,
             type: 'string'
         }
    },
    handler: function(argv){
       notes.removeNote(argv.tittle);
    }
})

// create list command

yargs.command({
    command: 'list',
    description: 'List notes..',
    builder: {
         tittle: {
             describe: 'List tittle',
             demandOption: true,
             type: 'string'
         },
         body: {
            describe: 'List body',
            demandOption: true,
            type: 'string'
         }
    },
    handler: function(argv){
        console.log('Tittle: ' + argv.tittle);
        console.log('Body: ' + argv.body);

    }
})

//create read command 


yargs.command({
    command: 'read',
    description: 'Read notes...',
    builder: {
        tittle: {
            describe: 'read tittle',
            demandOption: true,
            type: 'string'
        },
        body: {
           describe: 'read body',
           demandOption: true,
           type: 'string'
        }
    },
    handler: function(argv){
        console.log('Tittle: ' + argv.tittle);
        console.log('Body: ' + argv.body); //node argumentYargs.js read
    }
})


//console.log(yargs.argv);

yargs.parse();


