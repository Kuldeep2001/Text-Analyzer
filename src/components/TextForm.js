import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';
import PreviewText from './PreviewText';
import Alert from './Alert';


function TextForm(props){
    const [text, setText] = useState('');

    const darkColor = 'rgb(20, 34, 78)';

    let style;
    if(props.mode === 'dark')
    {
        style = {
            color: 'white',
            backgroundColor: darkColor
        }
    }
    else{
        style = {
            color: 'black',
            backgroundColor: 'white'
        }
    }

    const handleOnChange = (event)=>{
        // console.log("Handle On Change");
        setText(event.target.value);
        console.log(text.trim().split(/[ ]+/));
    };

    const handleUppercase = () => {
        // console.log("Handle Uppercase Button");
        const newText = text;
        setText(newText.toUpperCase());

        props.addAlert("Converted to UPPERCASE","success");
    };

    const handleLowercase = () => {
        // console.log("Handle Lowercase Button");
        const newText = text;
        setText(newText.toLowerCase());

        props.addAlert("Converted to lowercase","success");
    };

    const handleTextcase = () => {
        let newText = text.toLowerCase().split(" ");
        console.log(newText);
        for(let i = 0; i < newText.length; ++i)
        {
            if(newText[i].length > 1)
                newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1);
            else if(newText[i].length > 0)
            {
                newText[i] = newText[i].toUpperCase();
            }
        }
        setText(newText.join(" "));

        props.addAlert("Converted to Text Case","success");
    }

    const handleAlternatecase = () => {
        const isUpperCase = char => char.charCodeAt(0) >= 65 && char.charCodeAt(0)<= 90;
        // const isLowerCase = char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
        let newText = "";
        for(let i = 0; i < text.length; ++i)
        {
            if(isUpperCase(text[i]))
                newText += text[i].toLowerCase();
            else
                newText += text[i].toUpperCase();
        }
        setText(newText);

        props.addAlert("Converted to aLTERNATE cASE","success");
    }

    const handleSentencecase = () => {
        let newText = text.split(/[ ]*[.][ ]+/);
        for(let i = 0; i < newText.length; ++i)
        {
            if(newText[i].length > 1)
                newText[i] = newText[i][0].toUpperCase() + newText[i].toLowerCase().slice(1);
            else if(newText[i].length > 0)
            {
                newText[i] = newText[i].toUpperCase();
            }
        }
        setText(newText.join(". "));

        props.addAlert("Converted to Sentence case","success");
    }

    const handleAlternateCapital = () => {
        let newText = "";
        for(let i = 0; i < text.length; ++i)
        {
            if(i%2 === 0)
                newText += text[i].toUpperCase();
            else
                newText += text[i].toLowerCase();
        }
        setText(newText);

        props.addAlert("Converted to AlTeRnAtE CaPiTaL CaSe","success");
    }

    const handleExtraSpaces = () => {
        console.log("Handle Extra Spaces");
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));

        props.addAlert("Extra Spaces removed","success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.addAlert("Copied to the clipboard","success");
    }

    const handleClear = () => {
        setText("");
        props.addAlert("Text Cleared","warning");
    }
    return (
        <>
        <Alert alert={props.alert}/>
        <div className='container mt-3' style={style}>
        <h1>{props.heading}</h1>
        <form>
            <div className="form-group">
                <textarea className="form-control my-2" style={style} placeholder='Enter text here' value={text} id="exmp_text" rows="3" onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1 mb-2" onClick={handleUppercase}>UPPERCASE</button>
            <button type="button" className="btn btn-primary mx-1 mb-2" onClick={handleLowercase}>lowercase</button>
            <button type="button" className="btn btn-primary mx-1 mb-2" onClick={handleTextcase}>Text Case</button>
            <button type="button" className="btn btn-primary mx-1 mb-2" onClick={handleAlternatecase}>aLTERNATE cASE</button>
            <button type="button" className="btn btn-primary mx-1 mb-2" onClick={handleSentencecase}>Sentence case</button>
            <button type="button" className="btn btn-primary mx-1 mb-2" onClick={handleAlternateCapital}>AlTeRnAtE CaPiTaLiSaTiOn</button>
            <button type="button" className="btn btn-primary mx-1 mb-2" onClick={handleTextcase}>Text Case</button>
            <button type="button" className="btn btn-primary mx-1 mb-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-primary mx-1 mb-2" onClick={handleCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-1 mb-2" onClick={handleClear}>Clear Text</button>
        </form>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Summary style={style} text={text} />
                </div>
                <div className="col-6">
                    <PreviewText style={style} text={text} />
                </div>
            </div>
        </div>
        </>
    );
}

TextForm.defaultProps = {
    mode: 'light'
}
TextForm.propTypes = {
    heading: PropTypes.string,
    mode: PropTypes.string
}

export default TextForm;