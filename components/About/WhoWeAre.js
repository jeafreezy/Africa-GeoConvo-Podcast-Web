import React from 'react';
import {TitleStyles} from '../utilsStyles';
import { WhoWeAreStyle } from '../Styles/About';
import DarkModeStatus from '../Header/DarkModeStatus';

function WhoWeAre(){

    const status =DarkModeStatus()

   

        return(
            <>
                    <TitleStyles>Who We Are</TitleStyles>
                        
                    <WhoWeAreStyle>
                        <div className='container'>
    
                            <div className='about-info'>
                                <p> 

                                Africa Geoconvo is a podcast that invites you to experience the geospatial industry from the African perspective. We invite the voices of people that have always been there in the unexplored corners of history through interviews, to share insights about their careers, their greatest achievements, and their motivations. We also bring you conversations with geospatial startups in Africa and career specialists, in an attempt to introduce you to ideas and innovations in the geospatial industry and help you find your way through the seemingly-endless career options. We hope to keep this podcast both educational and professional and our aim is to help you become a better informed professional.
                                        
                                </p>
                            </div>
    
                           {status === 'Light Mode' &&

                            (<div className='about-image'>
                            
                                <img src="/static/assets/logo-blue.png"
                                    width="150"
                                    height="45"
                                    alt='Africa GeoConvo logo'
                                    title='Africa GeoConvo'
                                    loading="lazy"/>
                                
                            </div>
                            )
                           }

                           {status === 'Dark Mode' &&
                           
                           (<div className='about-image'>
                           
                               <img src="/static/assets/logo-white.png"
                                   width="150"
                                   height="45"
                                   alt='Africa GeoConvo logo'
                                   title='Africa GeoConvo'
                                   loading="lazy"/>
                               
                           </div>
                           )
                          }
    
                        </div>
                    </WhoWeAreStyle>
    
    
            </>
        )
    
}

export default WhoWeAre;