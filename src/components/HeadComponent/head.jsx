import React from 'react';
//import headImage from '../image/headImage.svg';
import './scss/headComponent.scss';
import logoImage from '../../image/logoImage.svg';
import line from '../../image/line.svg';




function Head () {
    return (
        
        <div className='mainHead'>
            
            <div className='menu'>
               <div className='logo'>
                  <img className='logoImage' src={logoImage} alt={logoImage}/> 
               </div>
               <div className='rightMenu'>
                    <h6 className='articles'>ARTICLES</h6>
                    <h6 className='about'>ABOUT</h6>
                    <h6 className='subscribe'>SUBSCRIBE</h6>
               </div>
            </div>
               <div className='textHead'>
                   <h1 className='lombok'>LOMBOK</h1>
                   <h3 className='health'>HOLISTIC HEALTH</h3>
                   <img className='line' src={line} alt={line}/>
               </div>
        </div>
               
            
       
    )
}


export default Head 