import React from 'react';
import {TitleStyles} from '../utilsStyles';
import { ContactUsStyle } from '../Styles/Contact';

function Contact(){

    return(
        <div id='contact'>
            <TitleStyles>Contact Us</TitleStyles>
            <ContactUsStyle>
                <div className='container'>

                    <div className='contact-form'>

                            <p>We would love to discuss your ideas on our show.</p>

                            <div>
                                <form action='https://google.com' method='POST'>
                                    <input type='text' placeholder='Your name'></input>
                                    <input type='email'placeholder='Your email'></input>
                                    <input type='text' placeholder='Your Subject'></input>
                                    <input type='tel' placeholder='Your Phone Number'></input>
                                    <input type='textarea' placeholder='Your Message...'></input>
                                    <button>Shoot!</button>
                                </form>

                            </div>

                    </div>
                    


                    <div className='contacts'>

                        <div className='top-image'>
                            <img src='/static/assets/email.png' alt='Email icon'></img>
                            <p>africageoconvo@gmail.com</p>
                        </div>
                        <div className='contact-image'>
                            <img src='/static/assets/google-maps.png' alt='location icon'></img>
                            <p>Africa</p>
                        </div>

                    </div>

                </div>
            </ContactUsStyle>
        </div>
    )
}


export default Contact;