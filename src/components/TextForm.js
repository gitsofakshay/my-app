import React, { useState } from 'react'
import jsPDF from 'jspdf';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [textLength, setTextLength] = useState('0');
    // text = 'new text'; //wrong way to change the state
    // setText('new text');//Correct way to change the state

    const handleUpClick = () => {
        if (text.length>0) {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert('Converted to upper case','success');            
        }else{
            props.showAlert('Enter text please!','danger');
        }
    } 
    
    const handleLoClick = () => {
        if (text.length>0) {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert('Converted to lower case','success');            
        }else{
            props.showAlert('Enter text please!','danger');
        }
    }

    const handleClearClick = () => {
        if (text.length>0) {
            setText(' ');
            props.showAlert('Form has been cleared','success');            
        }else{
            props.showAlert('Enter text please!','danger');
        }
    }

    const handleCopyClick = () => {
        if (text.length>0) {
            let text = document.getElementById('myBox');
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert('Text is copied to clipboard','success');            
        }else{
            props.showAlert('Enter text please!','danger');
        }
    }

    const handleExtraSpaces = () => {
        if (text.length>0) {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert('Removed extra spaces','success');            
        }else{
            props.showAlert('Enter text please!','danger');
        }
    }

    const textToPdf = () => {
        if (text.length>0) {
            const pdf = new jsPDF();
            pdf.text(text, 10, 10);
            pdf.save('convertedText.pdf');
            props.showAlert('Converted to pdf','success');            
        }else{
            props.showAlert('Enter text please!','danger');
        }
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
                <button className={`btn btn-${props.btnMode} mx- my-1`} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className={`btn btn-${props.btnMode} mx-1 my-1`} onClick={handleLoClick}>Convert to LowerCase</button>
                <button className={`btn btn-${props.btnMode} mx-1 my-1`} onClick={handleClearClick}>Clear</button>
                <button className={`btn btn-${props.btnMode} mx-1 my-1`} onClick={handleCopyClick}>Copy</button>
                <button className={`btn btn-${props.btnMode} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Spaces</button>
                <button className={`btn btn-${props.btnMode} mx-1 my-1`} onClick={textToPdf}>Convert to PDF</button>
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
