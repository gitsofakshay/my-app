import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [textLength, setTextLength] = useState('0');
    // text = 'new text'; //wrong way to change the state
    // setText('new text');//Correct way to change the state

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to upper case','success');
    } 
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lower case','success');
    }

    const handleClearClick = () => {
        setText(' ');
        props.showAlert('Form has been cleared','success');
    }

    const handleCopyClick = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text is copied to clipboard','success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed extra spaces','success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        const words = text.trim().split(/\s+/).filter(Boolean);
        setTextLength(words.length);
    }

    return (
        <>
            <div className='container' style={{ color: props.textMode}}>
                <div className="mb-2">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" style={{ backgroundColor: props.textMode === 'black' ? 'white' : '#d1cdca', color: props.textMode === 'black' ? 'black' : 'black' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.btnMode} mx-2 my-2`} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className={`btn btn-${props.btnMode} mx-2 my-2`} onClick={handleLoClick}>Convert to LowerCase</button>
                <button className={`btn btn-${props.btnMode} mx-2 my-2`} onClick={handleClearClick}>Clear</button>
                <button className={`btn btn-${props.btnMode} mx-2 my-2`} onClick={handleCopyClick}>Copy</button>
                <button className={`btn btn-${props.btnMode} mx-2 my-2`} onClick={handleExtraSpaces}>Remove Spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.textMode}}>
                <h2>Your text summary</h2>
                <p>{textLength} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
            </div>
        </>
    )
}
