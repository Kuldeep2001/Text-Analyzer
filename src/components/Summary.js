import React from 'react';
import {syllable} from 'syllable';

function Summary(props){
    return (
        <div className="container my-3" style={props.style}>
            <h1>Your text summary:</h1>
            <p>Word Count: {props.text === '' ? 0 : props.text.trim().split(/[ ,'\n']+/).length}</p>
            <p>Character Count: {props.text.length}</p>
            <p>Character Count (without spaces): {props.text.split(/[ ]+/).join("").length}</p>
            <p>Line Count: {props.text === '' ? 0 : props.text.split(/\n/).length}</p>
            <p>Syllable Count: {syllable(props.text)}</p>
        </div>
    );
}

export default Summary;