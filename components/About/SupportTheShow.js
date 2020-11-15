import React from 'react';
import {TitleStyles} from '../utilsStyles';
import { SupportTheShowStyle } from '../Styles/About';



function SupportTheShow(){

    return(
        <div>
            <TitleStyles>Support The Show</TitleStyles>

            <SupportTheShowStyle>


                <div className='container'>

                    <div className='support-info'>

                        <div className='body'>

                            <p>Sit amet, consectetur adipiscing elit. Quisque imperdiet eros leo, eget consequat orci viverra nec. Suspendisse pellentesque sem metus, et mollis purus auctor in. Suspendisse congue quam eros, vel cursus ante semper id. Lorem ipsum dolor sit amet, consectetur adipiscing elit    </p>
                            <button className='support-button'>
                                Donate Now
                            </button>
                        </div>

                    </div>
                    <div className='support-image'>
                        <img src='/static/assets/support.jpg' alt='Support the show icon' title='Support the show'></img>
                    </div>
                </div>
           
            </SupportTheShowStyle>
            

        </div>
    )
}

export default SupportTheShow;