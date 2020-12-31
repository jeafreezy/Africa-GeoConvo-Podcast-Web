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
                                    <a href='https://open.spotify.com/show/0LGHyoUC6EIj1T8djbDBne' target='_blank' rel="noopener noreferer"><img src='/static/assets/spotify.png' alt='Spotify icon'></img></a>
                                    <p>Spotify</p>
                                </div>

                                <div>
                                    <a href='https://africageoconvo.podbean.com/' target='_blank' rel="noopener noreferer"><img src='/static/assets/podbean.png' alt='Podbean icon' title='Podbean'></img></a>
                                    <p>Podbean</p>
                                </div>
                                <div>
                                    <a href='https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2FmcmljYWdlb2NvbnZvL2ZlZWQueG1s' target='_blank' rel='noopener noreferer'><img src='/static/assets/google-podcasts.png' alt='Google podcast icon'></img></a>
                                    <p>Google podcasts</p>
                                </div>
                                <div>
                                    <a href='https://feed.podbean.com/africageoconvo/feed.xml' target='_blank' rel="noopener noreferer"> <img src='/static/assets/rss.png' alt='Rssfeeds podcast icon'></img></a>
                                    <p>RSS Feed</p>
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