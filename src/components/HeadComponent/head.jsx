import React from 'react';
//import headImage from '../image/headImage.svg';
import './scss/headComponent.scss';
import logoImage from '../../image/logoImage.svg';
import line from '../../image/line.svg';
//import menuButton from '../../image/menuButton.svg';
//import myFunction from '../myFunction.js';





function Head () {
    return (
        <div>
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

        <div class="hamburger-menu">
  <input id="menu__toggle" type="checkbox" />
  <label class="menu__btn" for="menu__toggle">
    <span></span>
  </label>
  <ul class="menu__box">
      <div className='mobileText'>
    <li><a class="menu__item" href="https://web.telegram.org/#/im?p=c1139992568_1415991746564835462">About</a></li>
    <li><a class="menu__item" href="https://web.telegram.org/#/im?p=c1139992568_1415991746564835462">Articles</a></li>
    <li><a class="menu__item" href="https://web.telegram.org/#/im?p=c1139992568_1415991746564835462">Subscribe</a></li>
    </div>
  </ul>
</div>

</div>


    )
}


export default Head 