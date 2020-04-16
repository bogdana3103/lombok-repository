import React from 'react';
import './scss/FormComponent.scss';


function Form() {
    return (
        <div className='formWrap'>
            <h1 className='formTitle'>SUBSCRIBE</h1>
            <p className='formText'>Sign-up to our newsletter</p>
            <form className='registrationForm'>
                <p><input type="text" size="50" className="text" value="Your Email" /></p>
            </form>
            <button type='button' className='button'><p className='buttonText'>SUBMIT</p></button>
        </div>
    )
}


export default Form 