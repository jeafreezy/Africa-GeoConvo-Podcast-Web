import React from 'react';
import { StyledBanner } from '../Styles/Header';
import Link from 'next/link';

const Banner=()=>{

    return(

        <StyledBanner>
            <div className='jumbotron'>
                <div className='container'>
                        <div className='jumbotron-info'>
                            <h2>AFRICA GEOCONVO PODCAST</h2>
                            <p>The podcast about geospatial innovations and people doing great things with geospatial technology in Africa.</p>
                        </div>
                        <div className='cta-buttons'>
                            <div class="dropdown">
                                <button className='drop-btn' style={{color:'white'}}>SUBSCRIBE</button>
                                <div class="dropdown-content">
                                    <a href="https://rss.com/podcasts/africageoconvo/" target='_blank' rel='noopener noreferer'>RSS</a>
                                    <a href="#" target='_blank' rel='noopener noreferer'>Google Podcast</a>
                                    <a href="#" target='_blank' rel='noopener noreferer'>Apple Podcast</a>
                                </div>
                            </div>
                       
                        <Link href='/shows/all'><button className='cta-link' style={{color:'#09126D'}}>EPISODES</button></Link>
                        </div>
                </div>
            </div>
        </StyledBanner>

    )
}


export default Banner;