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
                            <div className="dropdown">
                                <button className='drop-btn' style={{color:'white'}}>SUBSCRIBE</button>
                                <div className="dropdown-content">
                                    <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2FmcmljYWdlb2NvbnZvL2ZlZWQueG1s" target='_blank' rel='noopener noreferer'>Google Podcast</a>
                                    <a href="https://africageoconvo.podbean.com/" target='_blank' rel='noopener noreferer'>Podbean</a>
                                    <a href="https://feed.podbean.com/africageoconvo/feed.xml" target='_blank' rel='noopener noreferer'>RSS</a>
                                   
                                    {/* <a href="#" target='_blank' rel='noopener noreferer'>Apple Podcast</a> */}
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