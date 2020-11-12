import React from 'react';
import Burger from './Burger';
import { StyledNav } from '../Styles/Header';
import Link from 'next/link';


function Navigation(){

    return(

        <StyledNav>

            <div className='logo'>
                <Link href='/'>
                    <img
                        src='/static/assets/logo.png'
                        width="200"
                        height="60"
                        alt='Africa GeoConvo logo'
                        title='Africa GeoConvo'
                    />
                </Link>
            </div>

            <Burger />
        </StyledNav>        
    )
}

export default Navigation;