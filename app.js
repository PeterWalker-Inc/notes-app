const notes = require('./notes')
const yargs = require('yargs')


yargs.command({
    command: 'add',
    describe: 'A note to add',
    builder: {
        title: {
            describe: 'Add a title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    },
});

yargs.command({
    command: 'remove',
    describe: 'A note to be removed',
    builder: {
        title: {
	    describe: 'Remove a note',
	    demandOption: true,
	    type: "string",
	},
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    },
});

yargs.command({
    command: 'list',
    describe: 'All the notes will be listed',
    handler() {
        notes.listNotes()
    },
});

yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builder: {
        title: {
            describe: 'Required the note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    },
});

yargs.parse()
