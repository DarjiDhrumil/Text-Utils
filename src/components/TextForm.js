import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = ()=>{
    console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const [text, setText] = useState('');
  //text = "new Text"; // Wrong way to change the state
  //setText ("new Text"); // Correct way to change the state
  return (
    <>
    <div className='container'style={{color: props.mode==='dark'?'white':'#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743' } } id="myBox" rows="8" col="8"></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Loweercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743' }}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.lenght>0?text:"Enter something in the textbox above to preview it."}</p>
    </div>
    </>
  )
}
