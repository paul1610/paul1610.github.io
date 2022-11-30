import React from 'react';
import '../style/style.css';
import '../style/home.css';

export default function Qualitfications() {
    return (<>
        <div className='center'>
            <h2 className='orange'><a href="#skills">My Skills</a></h2>
            <h2 className='green'><a href="#contact">Contact Me</a></h2>
            <h2 className='blue'><a href="#more">More...</a></h2>
        </div>

        <div id="skills">
            <h1 className='orange'>My Skills</h1>
        </div>
        <div id="contact">
            <h1 className='green'>Contact Me</h1>
        </div>
        <div id="more">
            <h1 className='blue'>More...</h1>
        </div>
    </>);
}
