import React from 'react';
import {TitleStyles} from '../utilsStyles';
import { BehindTheMicStyle } from '../Styles/About';


function BehindTheMic(){

    return(
        <>

            <TitleStyles>Behind The Mic</TitleStyles>
            <BehindTheMicStyle>

                <div className='container'>

                    <div className='host1'>
                        <div className='head'>
                            <figure>
                                <img src='/static/assets/emmanueljolaiya.jpg' alt='Emmanuel Jolaiya' loading='lazy'></img>
                                <figcaption>Emmanuel Jolaiya</figcaption>
                                <p>Host</p>
                            </figure>

                        </div>
                        <div className='body'>

                            <p>A GIS/Python Developer with a solid background in Remote Sensing and GIS. He loves to volunteer, drive communities and do cool stuffs with technology. He also flourish in a multidisciplinary team. His favourite hobbies are cycling🚴🏾‍♂️,dancing 🕺🏾,tennis 🏓 and hitting the gym 🏋🏾‍♂️. Fun fact: He developed this website 🙂.
                            
                            </p>

                        </div>
                        <div className='socials'>
                            <a href='https://linkedin.com/' target='_blank' rel='noopener noreferer'><img src='/static/assets/linkedin.png' alt='LinkedIn icon'></img></a>
                            <a href='https://twitter.com/jeafreezy' target='_blank' rel='noopener noreferer'><img src='/static/assets/twitter.png' alt='Twitter icon'></img></a>
                            <a href='mailto:jolaiyaemmanuel@gmail.com' target='_blank' rel='noopener noreferer'><img src='/static/assets/gmail.png' alt='Gmail icon'></img></a>
                        </div>
                    </div>

                    <div className='host2'>
                        <div className='head'>
                            <figure>
                                <img src='/static/assets/omowonuola.jpg' alt='Omowonuola Akintola' loading='lazy'></img>
                                <figcaption>Omowonuola Akintola</figcaption>
                                <p>Host</p>
                            </figure>

                        </div>
                        <div className='body'>

                            <p>Sit amet, consectetur adipiscing elit. Quisque imperdiet eros leo, eget consequat orci viverra nec. Suspendisse pellentesque sem metus, et mollis purus auctor in. Suspendisse congue quam eros, vel cursus ante semper id. Lorem ipsum dolor sit amet, consectetur adipiscing elit    </p>

                        </div>
                        <div className='socials'>
                            <a href='https://www.linkedin.com/in/omowonuolaakintola/' target='_blank' rel='noopener noreferer'><img src='/static/assets/linkedin.png' alt='LinkedIn icon'></img></a>
                            <a href='https://twitter.com/Svelte_mo' target='_blank' rel='noopener noreferer'> <img src='/static/assets/twitter.png' alt='Twitter icon'></img></a>
                            <a href='mailto:omowonuola52@gmail.com' target='_blank' rel='noopener noreferer'><img src='/static/assets/gmail.png' alt='Gmail icon'></img></a>
                        </div>
                        
                    </div>


                </div>              
            </BehindTheMicStyle>
                


        </>
    )
}

export default BehindTheMic;