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
                                   
                                    <a href='https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2FmcmljYWdlb2NvbnZvL2ZlZWQueG1s' target='_blank' rel="noopener noreferer"><img src='/static/assets/google-podcasts.png' alt='Google Podcast' title='Google Podcast'></img></a>
                                    <a href='https://podcasts.apple.com/ng/podcast/africa-geoconvo-podcast/id1549049632' target='_blank' rel="noopener noreferer"><img src='/static/assets/apple-podcast.png' alt='Apple Podcast' title='Apple Podcast'></img></a>
                                   
                                    <a href='https://www.linkedin.com/company/71670027/' target='_blank' rel="noopener noreferer"><img src='/static/assets/linkedin.png' alt='LinkedIn'></img></a>
                                    <a href='https://twitter.com/africageoconvo/' target='_blank' rel="noopener noreferer"><img src='/static/assets/twitter.png' alt='Twitter podcast icon' title='Follow us'></img></a>
                                   
                            
                                    <a href="mailto:africageoconvo@gmail.com"><img src='/static/assets/email.png' alt='Email icon'></img></a>
                        
                                    
                                
                            </div>
                            
                            <p id = 'copyright' style={{marginBottom:'20px',marginRight:'5%',fontSize:'12px',color:'grey', float:'right'}}>| © Copyrights 2021. Developed by <a href='https://twitter.com/jeafreezy'>Emmanuel Jolaiya |</a></p>
                    
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