import React from 'react';
import {TitleStyles} from '../utilsStyles';
import { SupportTheShowStyle } from '../Styles/About';



function SupportTheShow(){

    return(
        <>
        <TitleStyles>Support The Show</TitleStyles>
        <div>
            <SupportTheShowStyle>


                <div className='container'>

                    <div className='support-info'>

                        <div className='body'>

                            <p>Our mission is to give voice to the Geospatial community in Africa. We believe showcasing the wealth of talent, innovation and enterprise that abound in Africa will grow it’s contribution to the geospatial industry, uplift communities and grow the economy.Join us on this journey and donate to our cause so we can keep bringing our creativity alive. </p>
                            <a href='https://www.patreon.com/africageoconvo' rel='noopener noreferer' target='_blank'><button className='support-button'>
                                Donate Now
                            </button>
                            </a>
                        </div>

                    </div>
                    {/* <div className='support-image'>
                        <img src='/static/assets/support.jpg' alt='Support the show icon' title='Support the show'></img>
                    </div> */}
                </div>
           
            </SupportTheShowStyle>
            

        </div>
    </>
    )
}

export default SupportTheShow;