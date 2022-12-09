import React, { useState } from "react";
import '../styles/app.css'
import CreateArea from "./component/CreateArea.jsx";
import Header from "./component/Header.jsx";
import Note from "./component/Note.jsx";
import Footer from "./component/Footer.jsx";


//create your first component
const App = () => {

    const [notes, setNotes] = useState([])

    const addNote = (newNote) =>{
        setNotes(prevNotes => {
            return[...prevNotes, newNote]
        })
    }

    const deleteNote = (id) =>{
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index!=id;
            });
        })

    }

	return (
		<div className="app">
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem, index) => {
                return ( 
                    <Note 
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                )
            })}
            <Footer />
		</div>
	);
};

export default App;
