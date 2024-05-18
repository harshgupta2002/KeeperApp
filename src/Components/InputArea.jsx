import React, { useState } from "react";



function InputArea(props) {
    const[heading, setHeading]=useState("");
    const[bodyText, setBodyText]=useState("");
    function handleChange(event){
        var newValue= event.target.value;
        if(event.target.name=="heading"){
            setHeading(newValue);
        }
        else if(event.target.name=="textArea"){
            setBodyText(newValue);
        }           
        // console.log(newValue);
        
    }

    return (
        <div className="note-input">
            <div className="input-inner">
                <input
                    name="heading"
                    type="text"
                    placeholder="Enter Note Heading"
                    onChange={handleChange}
                    value={heading}
                />
                <textarea
                    name="textArea"
                    type="text"
                    placeholder="Enter Note Here"
                    onChange={handleChange}
                    value={bodyText}
                />
            </div>
            <button onClick={()=>{
                props.onSubmit(heading, bodyText);
                setHeading("");
                setBodyText("");
            }}>
                Add
            </button>
        </div>
    )
}

export default InputArea;