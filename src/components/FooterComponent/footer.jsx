import React from 'react';
import './scss/FooterComponent.scss';
import facebook from '../../image/facebook.png';
import google from '../../image/google.png';
import pon from '../../image/pon.png'
import twitter from '../../image/twitter.png';




function Footer() {
    return (
        <div className='mainFooter'>
            <div className='items'>
                <img className='facebook' src={facebook} alt={facebook}/>
                <img className='google' src={google} alt={google}/>
                <img className='pon' src={pon} alt={pon}/>
                <img className='twitter' src={twitter} alt={twitter}/>
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