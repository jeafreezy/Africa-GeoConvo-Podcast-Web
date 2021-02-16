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

                            <p>A GIS/Python Developer with a solid background in Remote Sensing and GIS. He loves to volunteer, drive communities, and do cool stuff with technology. He also flourishes in a multi-disciplinary team. His favourite hobbies are cycling🚴🏾‍♂️,dancing 🕺🏾,tennis 🏓 and hitting the gym 🏋🏾‍♂️.
                            
                            </p>

                        </div>
                        <div className='socials'>
                            <a href='https://www.linkedin.com/in/emmanuel-jolaiya-493b72145/' target='_blank' rel='noopener noreferer'><img src='/static/assets/linkedin.png' alt='LinkedIn icon'></img></a>
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

                            <p> Omowonuola is  passionate about business, technology and mapping and their power to transform lives across the world. She has a knack for community development and enjoys volunteering. When she is not working, she loves to watch reality shows and read.</p>

                        </div>
                        <div className='socials'>
                            <a href='https://www.linkedin.com/in/omowonuolaakintola/' target='_blank' rel='noopener noreferer'><img src='/static/assets/linkedin.png' alt='LinkedIn icon'></img></a>
                            <a href='https://twitter.com/Svelte_mo' target='_blank' rel='noopener noreferer'> <img src='/static/assets/twitter.png' alt='Twitter icon'></img></a>
                            <a href='mailto:omowonuola52@gmail.com' target='_blank' rel='noopener noreferer'><img src='/static/assets/gmail.png' alt='Gmail icon'></img></a>
                        </div>
                        
                    </div>
                    <div className='host1'>
                        <div className='head'>
                            <figure>
                                <img src='/static/assets/faithkenny.jpg' alt='Kenny Faith' loading='lazy'></img>
                                <figcaption>Faith Kenny</figcaption>
                                <p>Podcast Editor</p>
                            </figure>

                        </div>
                        <div className='body'>

                            <p> Faith is a Creative swiss army knife with skills across UX/UI, Marketing, and Interaction design. A Udacity UX Nanodegree grad, he currently works as a Video Editor & Designer at ThatLifestyleNinja, producing Branded video, motion and design assets for the company's large Social Media accounts. He edits the podcasts for AfricaGeoConvo.
                            
                            </p>

                        </div>
                        <div className='socials'>
                            <a href='https://www.linkedin.com/in/faithkenny' target='_blank' rel='noopener noreferer'><img src='/static/assets/linkedin.png' alt='LinkedIn icon'></img></a>
                            <a href='https://twitter.com/iamfaithkenny' target='_blank' rel='noopener noreferer'><img src='/static/assets/twitter.png' alt='Twitter icon'></img></a>
                            <a href='mailto:faithkenny100@gmail.com' target='_blank' rel='noopener noreferer'><img src='/static/assets/gmail.png' alt='Gmail icon'></img></a>
                        </div>
                    </div>



                </div>              
            </BehindTheMicStyle>
                


        </>
    )
}

export default BehindTheMic;