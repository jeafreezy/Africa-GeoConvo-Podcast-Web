import React from 'react';
import Burger from './Burger';
import { StyledNav } from '../Styles/Header';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import DarkModeStatus from './DarkModeStatus';

function Navigation(){

    const status = DarkModeStatus()

        return(
            <>
              
                <StyledNav>
                <div>
                    <DarkModeToggle />
                </div>
               
                   {status==='Light Mode' && 
                    (<div className='logo'>
                            <Link href='/'>
                                    <img src="/static/assets/logo.png"
                                        width="150"
                                        height="45"
                                        alt='Africa GeoConvo logo'
                                        title='Africa GeoConvo'
                                        loading="lazy"/>
                            </Link>
                        </div>
                        )
                   }

                   {status==='Dark Mode' && 

                    (<div className='logo'>
                            <Link href='/'>
                                    <img src="/static/assets/white.png"
                                        width="150"
                                        height="45"
                                        alt='Africa GeoConvo logo'
                                        title='Africa GeoConvo'
                                        loading="lazy"/>
                            </Link>
                        </div>
                        )
                   }
                    <div>
                        <Burger/>
                    </div>
                   
                </StyledNav>
            </>   
        )
  
    
}

export default Navigation;