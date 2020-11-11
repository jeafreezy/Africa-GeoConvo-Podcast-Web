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

                            <p>Sit amet, consectetur adipiscing elit. Quisque imperdiet eros leo, eget consequat orci viverra nec. Suspendisse pellentesque sem metus, et mollis purus auctor in. Suspendisse congue quam eros, vel cursus ante semper id. Lorem ipsum dolor sit amet, consectetur adipiscing elit    </p>

                        </div>
                        <div className='socials'>
                            <img src='/static/assets/linkedin.png' alt='LinkedIn icon'></img>
                            <img src='/static/assets/twitter.png' alt='Twitter icon'></img>
                            <img src='/static/assets/gmail.png' alt='Gmail icon'></img>
                        </div>
                    </div>

                    <div className='host2'>
                        <div className='head'>
                            <figure>
                                <img src='/static/assets/omowonuola.jpeg' alt='Omowonuola Akintola' loading='lazy'></img>
                                <figcaption>Omowonuola Akintola</figcaption>
                                <p>Host</p>
                            </figure>

                        </div>
                        <div className='body'>

                            <p>Sit amet, consectetur adipiscing elit. Quisque imperdiet eros leo, eget consequat orci viverra nec. Suspendisse pellentesque sem metus, et mollis purus auctor in. Suspendisse congue quam eros, vel cursus ante semper id. Lorem ipsum dolor sit amet, consectetur adipiscing elit    </p>

                        </div>
                        <div className='socials'>
                            <img src='/static/assets/linkedin.png' alt='Linkein icon'></img>
                            <img src='/static/assets/twitter.png' alt='Twitter icon'></img>
                            <img src='/static/assets/gmail.png' alt='Gmail icon'></img>
                        </div>
                        
                    </div>


                </div>              
            </BehindTheMicStyle>
                


        </>
    )
}

export default BehindTheMic;