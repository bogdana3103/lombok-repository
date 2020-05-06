import React from 'react';
import './scss/latestComponent.scss';
import line from '../../image/line.svg';
import {boxes} from '../helper';



function Latest() {
    return (
        <div className='latestArticles'>
            <div className='latestTop'>
                <h3 className='latestText'>LATEST ARTICLES</h3>
                <img className='latestLine' src={line} alt={line}/>
            </div>
            <div className='latestInner'>
                {boxes.map((box) =>
                <div className='box' key={box.key}>
                   <img className='image' src={require(`../../image/${box.name}.png`)} alt=""/>
                   <img className='boxLine' src={line} alt={line}/>
                   <p className='textBox'>{box.text}</p> 
                </div>
                )}
            </div>
        </div>
    )
}


export default Latest

