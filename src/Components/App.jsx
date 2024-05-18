import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteStruc from "./NoteStruc";
// import notes from "./NoteContent";
import InputArea from "./InputArea";

// function createCard (note){
//     return(
//     <NoteStruc
//         key={note.key} //isn't shown
//         title={note.title}
//         noteContent={note.content}
//     />
//    );
// }

function HomePage() {

    const [newContent, setContent] = useState([])

    function handleSubmit(noteTitle, noteBody) {

        if(noteTitle.length>0 && noteBody.length>0){

            setContent((prevValue) => {
    
                return [
                    ...prevValue,
                    {
                        key: Date.now(),
                        title: noteTitle,
                        content: noteBody
                    }
                ]
            })
        }
        else if(noteTitle.length===0 && noteBody.length>0){
            alert("Title cannot be Empty!")
        }
        else if(noteBody.length===0 && noteTitle.length>0){
            alert("Body cannot be Empty!")
        }
        else{
            alert("Title and Body cannot be Empty!")
        }

    }

    function onDelete(id) {
        setContent((prevValue) => {
            return prevValue.filter((item, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            <Header />

            <div className="input-area">
                <InputArea
                    onSubmit={handleSubmit}
                />
            </div>

            <div className="notes-area">
                {newContent.map((noteItem, index) => (
                    <NoteStruc
                        key={index}
                        id={index}
                        title={noteItem.title}
                        noteContent={noteItem.content}
                        handleDelete={onDelete}
                    />
                ))}

            </div>

            {/* <NoteStruc
                title={notes[0].title}
                noteContent={notes[0].content}
            /> */}
            <Footer />
        </div>
    )
}

export default HomePage;