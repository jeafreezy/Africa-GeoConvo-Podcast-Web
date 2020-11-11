import React from 'react';
import Burger from './Burger';
import { StyledNav } from '../Styles/Header';


function Navigation(){

    return(

        <StyledNav>

            <div className='logo'>

                <img
                    src='/static/assets/logo.png'
                    width="200"
                    height="60"
                    alt='Africa GeoConvo logo'
                    title='Africa GeoConvo logo'
                />
            </div>

            <Burger />
        </StyledNav>        
    )
}

export default Navigation;