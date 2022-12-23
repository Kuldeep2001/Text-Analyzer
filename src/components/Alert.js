import React from 'react';

function Alert(props){
    if(props.alert === null)
        return null;

    const capitalize = (word) => {
        word = word.toLowerCase();
        return word[0].toUpperCase()+word.slice(1);
    }
    return (
        <>
            <div class={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
            </div>
        </>
    );
}

export default Alert;