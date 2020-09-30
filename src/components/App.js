import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((eachNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      <div className='container'>
        {notes.map((eachNote, index) => (
          <Note
            key={index}
            id={index}
            title={eachNote.title}
            content={eachNote.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
