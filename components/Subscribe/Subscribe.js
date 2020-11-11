import React from 'react';
import {TitleStyles} from '../utilsStyles';
import {SubscribeStyle} from '../Styles/Subscribe';

function Subscribe(){


    return(
        <div id='subscribe'>
           
            <SubscribeStyle>
                <div className='container'>

                    <div className='subscribe'>
                        <TitleStyles>Subscribe To Our Podcast</TitleStyles>
                        <div className='body'>

                            <p>Join thousands of listeners worldwide.</p>
                    
                            <div className='podcasts'>
                                <div>
                                    <img src='/static/assets/podcast.png' alt='Apple podcast icon'></img>
                                    <p>Apple podcast</p>
                                </div>
                                <div>
                                    <img src='/static/assets/spotify.png' alt='Spotify podcast icon'></img>
                                    <p>Spotify</p>
                                </div>
                                <div>
                                    <img src='/static/assets/soundcloud-logo.png' alt='Soundcloud Podcast icon'></img>
                                    <p>Sound Cloud</p>
                                </div>
                                <div>
                                    <img src='/static/assets/rss.png' alt='Rssfeeds podcast icon'></img>
                                    <p>RSS feeds</p>
                                </div>
                                <div>
                                    <img src='/static/assets/google-podcasts.png' alt='Google podcast icon'></img>
                                    <p>Google podcast</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    


                    <div className='newsletter'>

                        <TitleStyles>Subscribe To Our Newsletter</TitleStyles>
                        <p>To receive ongoing updates and notifications on new episodes, please sign up to our Newsletter and we’ll make sure to keep you in the loop!</p>
                        <div className='newsletter-email'>
                        
                            <input type='email' id='email' placeholder='Enter your email address...' aria-autocomplete='none'></input>
                            <button>Subscribe</button>
                        </div>
                    </div>

                </div>
            </SubscribeStyle>
        </div>
    )
}


export default Subscribe;