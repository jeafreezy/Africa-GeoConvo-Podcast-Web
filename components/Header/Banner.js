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
                            <button><Link href='/subscribe' className='cta-link' style={{color:'white'}}>SUBSCRIBE</Link></button>
                            <button><Link href='/episodes' className='cta-link' style={{color:'#09126D'}}>EPISODES</Link></button>
                        </div>
                </div>
            </div>
        </StyledBanner>

    )
}


export default Banner;