import React from 'react';
import './scss/AboutComponent.scss';
import line from '../../image/line.svg';
import andreasDress from '../../image/andreasDress.png';


function About() {
    return (
        <div>
        <div className='aboutWrap'>
            <div className='aboutImg'>
                <img className='andreasDress' src={andreasDress} alt={andreasDress}/>
            </div>
            <div className='aboutContent'>
                <h1 className='aboutTitle'>ABOUT</h1>
                <img className='aboutLine' src={line} alt={line}/>
                <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna iv aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ti. Duis aute irure dolor in reprehenderit in voluptate velit sdo esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
        <div className='aboutWrapSmall'>
            <div className='aboutContentSmall'>
                <h1 className='aboutTitleSmall'>ABOUT</h1>
                <img className='aboutLineSmall' src={line} alt={line}/> 
            </div>
            <div className='aboutImgSmall'>
                <img className='andreasDressSmall' src={andreasDress} alt={andreasDress}/>
            </div>
            <div className='textSmall'>
                <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna iv aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ti. Duis aute irure dolor in reprehenderit in voluptate velit sdo esse cillum dolore eu fugiat nulla pariatur.</p> 
            </div>
        </div>
        </div>
    )
}


export default About