import React from 'react';
//import headImage from '../image/headImage.svg';
import './scss/headComponent.scss';
import logoImage from '../../image/logoImage.svg';




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
        </div>
    )
}


export default Head 