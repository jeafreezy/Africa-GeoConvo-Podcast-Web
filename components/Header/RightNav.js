import React from 'react';
import {RightNavStyle} from '../Styles/Header';
import Link  from 'next/link';


const RightNav=({open})=>{

    

    return( 
                <RightNavStyle open={open}>

                    <li><Link href='/' >Home</Link></li>
                    <li><Link href='/shows/all'>Episodes</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/subscribe'>Subscribe</Link></li>
                </RightNavStyle>
    )
}


export default RightNav;