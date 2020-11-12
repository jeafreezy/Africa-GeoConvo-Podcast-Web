import React from 'react';
import {TitleStyles} from '../utilsStyles';
import { WhoWeAreStyle } from '../Styles/About';


function WhoWeAre(){

    return(
        <>
                <TitleStyles>Who We Are</TitleStyles>
                    
                <WhoWeAreStyle>
                    <div className='container'>

                        <div className='about-info'>
                            <p>
                                    I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a account of the system.

                                    Nunc sit amet neque imperdiet, maximus massa id, vulputate magna. Vestibulum eget mi blandit, volutpat diam ut, ullamcorper eros In sed dolor eu velit pretium lacinia. Nullam interdum tristique lorem sit amet facilisis. lobortis scelerisque. Suspendisse a quam sed libero cursus. molestie nec vitae metus.

                                    Sit amet, consectetur adipiscing elit. Quisque imperdiet eros leo, eget consequat orci viverra nec. Suspendisse pellentesque sem metus, et mollis purus auctor in. Suspendisse congue quam eros, vel cursus ante semper id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                        </div>

                        <div className='about-image'>

                            <img src='/static/assets/logo-blue.png' alt='Africa GeoConvo small logo' title= 'Africa GeoConvo'></img>

                        </div>

                    </div>
                </WhoWeAreStyle>


        </>
    )
}

export default WhoWeAre;