import React from 'react';
import './scss/latestComponent.scss';
import line from '../../image/line.svg';
import jennyMarvin from '../../image/jennyMarvin.png';
import andrewNeel from '../../image/andrewNeel.png';
import imgBhadra from '../../image/imgBhadra.png';



function Latest() {
    return (
        <div className='latestArticles'>
            <div className='latestTop'>
                <h3 className='latestText'>LATEST ARTICLES</h3>
                <img className='latestLine' src={line} alt={line}/>
            </div>
            <div className='latestInner'>
                <div className='box1'>
                   <img className='jennyMarvin' src={jennyMarvin} alt={jennyMarvin}/>
                   <img className='boxLine' src={line} alt={line}/>
                   <p className='textBox1'>How to use mindfullness in your everyday life</p> 
                </div>
                <div className='box2'>
                   <img className='andrewNeel' src={andrewNeel} alt={andrewNeel}/>
                   <img className='boxLine' src={line} alt={line}/> 
                   <p className='textBox2'>What are whe best walking meditations</p>
                </div>
                <div className='box3'>
                    <img className='imgBhadra' src={imgBhadra} alt={imgBhadra}/>
                    <img className='boxLine' src={line} alt={line}/>
                    <p className='textBox3'>How to go deep into the mind of hope</p>
                </div>
            </div>
        </div>
    )
}

export default Latest

