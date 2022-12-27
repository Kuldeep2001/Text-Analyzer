import React from 'react';

function PreviewText(props){
    return (
        <div className="container my-3" style={props.style}>
            <h1>Preview:</h1>
            <p>{props.text ? <pre>{props.text}</pre> : "Nothing to Preview."}</p>
        </div>
    );
}

export default PreviewText;