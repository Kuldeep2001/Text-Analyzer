import React from "react";
import Accordian from './Accordian';

function About(props){

    let accordian = [
        {id:1,heading:"Analyze your text", content:"Text Analyzer gives you a way to analyze your text quickly and efficiently. Be it word count, character count, line count, etc."},
        {id:2,heading:"Free to use", content:"Text Analyzer is a free to use character counter tool that provides instant character count & word count statistics for a given text. It is suitable to use for writing text with word/ character limit."},
        {id:3,heading:"Browser Compatible", content:"This word counter software works in any browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essay, etc."}
    ]
    return (
        <>
        <div className={`container mt-2 text-${props.mode === 'dark' ? 'light':'dark'}`}>
            <h1>About Page</h1>
            <div className="accordion" id="accordionExample">
                {accordian.map((el,index) => {
                    return (<Accordian mode={props.mode} accord={el} key={index}/>);
                })}
        </div>
    </div>
    </>
    );
}
export default About;
