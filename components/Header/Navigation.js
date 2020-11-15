import React from 'react';
import Burger from './Burger';
import { StyledNav } from '../Styles/Header';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import useDarkMode from 'use-dark-mode';

function Navigation(){
    const darkMode = useDarkMode(false);
    return(
        <>
          
            <StyledNav>
            <div>
                <DarkModeToggle />
            </div>
           
                <div className='logo'>
                    <Link href='/'>
                    <picture >
                            <img src="/static/assets/logo.png"
                                width="150"
                                height="45"
                                alt='Africa GeoConvo logo'
                                title='Africa GeoConvo'
                                loading="lazy"/>
                    </picture>
                    </Link>
                </div>
                <div>
                    <Burger />
                </div>
               
            </StyledNav>
        </>   
    )
}

export default Navigation;