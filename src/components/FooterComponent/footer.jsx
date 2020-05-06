import React from 'react';
import './scss/FooterComponent.scss';
//import facebook from '../../image/facebook.png';
//import google from '../../image/google.png';
//import pon from '../../image/pon.png'
//import twitter from '../../image/twitter.png';
import { icons } from '../helper';




function Footer() {
    return (
        <div className='mainFooter'>
            <div className='items'>
            {icons.map((icon) =>
            <div key={icon.key}>
                <img className='facebook' src={require(`../../image/${icon.name}.png`)} alt=""/>
            </div>
            )}
            </div>
            <div className='footerText'>
                <h3 className='textt'>ABOUT</h3>
                <h3 className='textt'>ARTICLES</h3>
                <h3 className='textt'>SUBSCRIBE</h3>
            </div>
        </div>
    )
}

export default Footer