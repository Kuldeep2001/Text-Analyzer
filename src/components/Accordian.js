import React from "react";

function Accordian(props){
    let style;
    if(props.mode === 'dark')
    {
        style = {
            color: 'white',
            backgroundColor:"transparent"
        }
    }
    else{
        style = {
            color: 'black',
            backgroundColor:"transparent"
        }
    }
    return (
        <div className={`accordion-item border border-${props.mode === 'dark'?'light':'dark'}`} style={style}>
            <h2 className="accordion-header" id={`heading${props.accord.id}`}>
                <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.accord.id}`} aria-expanded="false" aria-controls={`collapse${props.accord.id}`}>
                    <strong>{props.accord.heading}</strong>
                </button>
            </h2>
            <div id={`collapse${props.accord.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${props.accord.id}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {props.accord.content}
                </div>
            </div>
        </div>
    );
}

export default Accordian;