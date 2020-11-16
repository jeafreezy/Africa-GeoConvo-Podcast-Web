import React from 'react';
import { FooterStyle } from '../Styles/Footer';
import Link from 'next/link';

function Footer(props){
    return(
        <>
            
            <FooterStyle>
                <div className='container'>

                    <div className='info' style={{marginTop:'20px'}}>
                            <img
                                src='/static/assets/white.png'
                                width="200"
                                height="60"
                                alt='Africa GeoConvo logo'
                            />
                            <p>Africa GeoConvo is a podcast about geospatial innovations  and people doing great things with geospatial  technology in Africa.</p>
                            
                            <div className='podcast-channels'>
                           
                                    <img src='/static/assets/apple-podcast.png' alt='Apple podcast icon' title='Apple Podcast'></img>
                                   
                                    <img src='/static/assets/spotify.png' alt='Spotify podcast icon' title='Spotify'></img>
                                   
                                    <img src='/static/assets/soundcloud-logo.png' alt='Soundcloud Podcast icon' title='Soundcloud'></img>
                                 
                                    <a href='https://rss.com/podcasts/africageoconvo/' target='_blank' rel="noopener noreferer"><img src='/static/assets/rss.png' alt='Rssfeeds podcast icon' title='RSS Feeds'></img></a>
                                   
                                    <img src='/static/assets/google-podcasts.png' alt='Google podcast icon' title='Google Podcast'></img>
                                    
                                
                            </div>
                            
                            <p id = 'copyright' style={{marginBottom:'20px',marginRight:'20%',fontSize:'12px',color:'grey', float:'right'}}>Copyrights 2020. Developed by <a href='https://github.com/jeafreezy'>Emmanuel Jolaiya</a></p>
                    
                    </div>

                    <div className='pagemap'>
                  
                        <ul>
                            <p>Page Map</p>
                            <li><Link href='/' className='footer-links' >Home</Link></li>
                            <li><Link href='/shows/all' className='footer-links'>Episodes</Link></li>
                            <li><Link href='/about' className='footer-links'>About</Link></li>
                        </ul>
                    </div> 
                    

                </div>
                
            </FooterStyle>
            
        </>
    )
}


export default Footer;