import React, {useState} from 'react'

export default function(props){
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleClearClick =(event) =>{
        let newText="";
        setText(newText);
    }
   
    const[text,setText] = useState("Enter text here");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"></textarea>
  </div>
  <button className="btn-btn-primary mx-2" onClick={handleUpClick}>Convert</button>
  <button className="btn-btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
</div>
    
  )
}
