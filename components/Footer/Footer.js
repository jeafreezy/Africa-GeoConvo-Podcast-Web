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
                            <p>Follow us,we are social!</p>
                            <div className='podcast-channels'>
                                   
                                    <a href='https://africageoconvo.podbean.com/' target='_blank' rel="noopener noreferer"><img src='/static/assets/podbean.png' alt='Podbean icon' title='Podbean'></img></a>
                                   
                                    <a href='https://feed.podbean.com/africageoconvo/feed.xml' target='_blank' rel="noopener noreferer"><img src='/static/assets/rss.png' alt='Rssfeeds podcast icon' title='RSS Feeds'></img></a>
                                   
                                    {/* <img src='/static/assets/google-podcasts.png' alt='Google podcast icon' title='Google Podcast'></img> */}
                                    <a href='https://twitter.com/africageoconvo/' target='_blank' rel="noopener noreferer"><img src='/static/assets/twitter.png' alt='Twitter podcast icon' title='Follow us'></img></a>
                                   
                            
                                    <a href="mailto:africageoconvo@gmail.com"><img src='/static/assets/email.png' alt='Email icon'></img></a>
                        
                                    
                                
                            </div>
                            
                            <p id = 'copyright' style={{marginBottom:'20px',marginRight:'20%',fontSize:'12px',color:'grey', float:'right'}}>Copyrights 2020. Developed by <a href='https://twitter.com/jeafreezy'>Emmanuel Jolaiya</a>|Website code is <a href='https://github.com/jeafreezy/Africa-GeoConvo-Podcast-Web' target='_blank'>Open sourced</a></p>
                    
                    </div>

                    <div className='pagemap'>
                  
                        <ul>
                            <p>Site Map</p>
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