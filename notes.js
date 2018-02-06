console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {

	try {
		var noteString = fs.readFileSync('notes-data.json');
		return JSON.parse(noteString);
	} catch (e) {
		return [];
	}
}

var saveNotes = (notes) => { 
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};
        notes = fetchNotes();

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
	}
};

var getAll = () => {
	console.log('Getting all notes');
}

var getNote = (title) => {
	console.log('Reading note', title);
}

var removeNote = (title) => {
	console.log('Removing note', title);
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
