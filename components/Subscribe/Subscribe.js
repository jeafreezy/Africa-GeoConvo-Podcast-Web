import React from 'react';
import {TitleStyles} from '../utilsStyles';
import {SubscribeStyle} from '../Styles/Subscribe';
  
function Subscribe(){


    return(
        <>
            <TitleStyles>Subscribe To Our Podcast</TitleStyles>
            <SubscribeStyle>
                <div className='container' id='subscribe'>
                    
                    <div className='subscribe'>
                        
                        <div className='body'>

                            <p>Join thousands of listeners worldwide.</p>
                    
                            <div className='podcast-channels'>
                                <div>
                                    <img src='/static/assets/apple-podcast.png' alt='Apple podcast icon'></img>
                                    <p>Apple podcast</p>
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
                    

                </div>
            </SubscribeStyle>
        </>
    )
}


export default Subscribe;