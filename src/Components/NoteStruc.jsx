import React from "react";

function NoteStruc(props) {
    return (
        <div className="note-outer">
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.noteContent}</p>
                <div className="note-delete-btn">
                    <button onClick={() => {
                        props.handleDelete(props.id);
                    }}>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default NoteStruc;