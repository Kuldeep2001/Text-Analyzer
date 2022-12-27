import React from 'react';

function Alert(props){
    // if(props.alert == null)
    //     return null;

    const capitalize = (word) => {
        word = word.toLowerCase();
        return word[0].toUpperCase()+word.slice(1);
    }
    return (
        <div style={{height:"6vh"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible p-1`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
            </div>}
        </div>
    );
}

export default Alert;