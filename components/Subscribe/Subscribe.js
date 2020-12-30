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
                                {/* <div>
                                    <img src='/static/assets/apple-podcast.png' alt='Apple podcast icon'></img>
                                    <p>Apple podcast</p>
                                </div> */}

                                <div>
                                    <a href='https://africageoconvo.podbean.com/' target='_blank' rel="noopener noreferer"><img src='/static/assets/podbean.png' alt='Podbean icon' title='Podbean'></img></a>
                                    <p>Podbean</p>
                                </div>
                                <div>
                                    <a href='https://feed.podbean.com/africageoconvo/feed.xml' target='_blank' rel="noopener noreferer"> <img src='/static/assets/rss.png' alt='Rssfeeds podcast icon'></img></a>
                                    <p>RSS Feed</p>
                                </div>
                                {/* <div>
                                    <img src='/static/assets/google-podcasts.png' alt='Google podcast icon'></img>
                                    <p>Google podcast</p>
                                </div> */}
                            </div>

                        </div>

                    </div>
                    

                </div>
            </SubscribeStyle>
        </>
    )
}


export default Subscribe;