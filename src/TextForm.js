import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{

    //console.log("uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
  }  
  const handleLowClick =()=>{

    //console.log("uppercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case","success")
  } 
  const handleClearClick =()=>{

    let newText=' ';
    setText(newText);
    props.showAlert("text cleared","success")
  }   
  const handleCopy =()=>{
    console.log("i am copy");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied","success")
  }
  const handlExtraSpaces =()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces handeled","success")
  }
  const handleOnChange =(event)=>{

    //console.log("on change");
    setText(event.target.value);
  }  

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="8" value={text}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy the Text</button>
        <button className="btn btn-primary mx-2" onClick={handlExtraSpaces}>Extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.08*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something in textbox to preview it"}</p>
    </div>
    </>


  )
}
