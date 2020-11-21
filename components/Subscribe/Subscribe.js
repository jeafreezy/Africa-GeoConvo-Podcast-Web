import React from 'react';
import {TitleStyles} from '../utilsStyles';
import {SubscribeStyle} from '../Styles/Subscribe';
  
function Subscribe(){


    return(
        <>
            <TitleStyles>Subscribe To Our Podcast</TitleStyles>
            <SubscribeStyle>
                <div className='container'>
                    
                    <div className='subscribe'>
                        
                        <div className='body'>

                            <p>Join thousands of listeners worldwide.</p>
                    
                            <div className='podcast-channels'>
                                <div>
                                    <img src='/static/assets/apple-podcast.png' alt='Apple podcast icon'></img>
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
                                <a href='https://rss.com/podcasts/africageoconvo/' target='_blank' rel="noopener noreferer"> <img src='/static/assets/rss.png' alt='Rssfeeds podcast icon'></img></a>
                                    <p>RSS feeds</p>
                                </div>
                                <div>
                                    <img src='/static/assets/google-podcasts.png' alt='Google podcast icon'></img>
                                    <p>Google podcast</p>
                                </div>
                            </div>

                        </div>

                    </div>
                      

                    {/* <div className='newsletter'>

                        <TitleStyles>Subscribe To Our Newsletter</TitleStyles>
                        <p>To receive ongoing updates and notifications on new episodes, please sign up to our Newsletter and we’ll make sure to keep you in the loop!</p>
                        <div className='newsletter-email'>
                        
                            <input type='email' id='email' placeholder='Enter your email address...' aria-autocomplete='none'></input> 
                             <button>Subscribe</button>
                            <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
                        </div>
                    </div> */}

                </div>
            </SubscribeStyle>
        </>
    )
}


export default Subscribe;