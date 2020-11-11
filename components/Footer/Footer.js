import React from 'react';
import { FooterStyle } from '../Styles/Footer';
import Link from 'next/link';

function Footer(){


    return(
        <>
            
            <FooterStyle>
                <div className='container'>

                    <div className='info'>
                            <img
                                src='/static/assets/white.png'
                                width="200"
                                height="60"
                                alt='Africa GeoConvo logo'
                            />
                            <p>Africa GeoConvo is a podcast about geospatial innovations  and people doing great things with geospatial  technology in Africa.</p>
                            <div className='podcasts'>
                           
                                    <img src='/static/assets/podcast.png' alt='Apple podcast icon'></img>
                                   
                                    <img src='/static/assets/spotify.png' alt='Spotify podcast icon'></img>
                                   
                                    <img src='/static/assets/soundcloud-logo.png' alt='Soundcloud Podcast icon'></img>
                                 
                                    <img src='/static/assets/rss.png' alt='Rssfeeds podcast icon'></img>
                                   
                                
                                    <img src='/static/assets/google-podcasts.png' alt='Google podcast icon'></img>
                                    
                                
                            </div>
                            <p>Copyrights 2020. Developed by AfricaGeoConvo Team</p>
                    
                    </div>

                    <div className='episodes'>
                            <div>
                                <p>Episode 1: The future of GIS</p>
                                <p>December 01,2020</p>
                            </div>
                            <div>
                                <p>Episode 2: The future of GIS</p>
                                <p>December 01,2020</p>
                            </div>
                            <div>
                                <p> Episode 3: The future of GIS</p>
                                <p>December 01,2020</p>
                            </div>
                    </div>
                    <div className='pagemap'>
                        <ul>
                            <li><Link href='/' className='footer-links' >Home</Link></li>
                            <li><Link href='/episodes' className='footer-links'>Episodes</Link></li>
                            <li><Link href='/about' className='footer-links'>About</Link></li>
                        </ul>
                    </div> 
                    

                </div>
                
            </FooterStyle>
            
        </>
    )
}


export default Footer;