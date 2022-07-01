import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to uppercase','success')
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to lowercase','success')
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleClearClick = () => {
        let newtext='';
        setText(newtext);
        
        props.showAlert('text is cleared','success')
    }

  const [text, setText] = useState('Enter text!');
  //setText("new text");


  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
          <textarea className='form-Control' value={text} onChange={handleOnChange} id='mybox' rows= '8' cols='150'></textarea>
      </div>
      {console.log(props.mode)}
       <button className={`btn btn-${props.mode==='light'?"primary":props.mode} mx-4`} onClick={handleUpClick}>Convert to  UpperCase</button>
       <button className={`btn btn-${props.mode==='light'?"primary":props.mode} mx-4`} onClick={handleLoClick}>Convert to  LowerCase</button>
       <button className={`btn btn-${props.mode==='light'?"primary":props.mode} mx-4`} onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-4">
        <h2>Your text summary</h2>
        <p>In this input box there are {text.split(" ").length}words and {text.length} characters</p>
        <p>words can be read in {0.08*text.split(" ").length} seconds</p>
        <h3>preview</h3>
        <p>{text}</p>
    </div>
    </>

  );
}
