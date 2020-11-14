import React from 'react';
import {RightNavStyle} from '../Styles/Header';
import Link  from 'next/link';


const RightNav=({open})=>{

    

    return( 
                <RightNavStyle open={open}>

                    <li><Link href='/' >Home</Link></li>
                    <li title='Check out all our shows'><Link href='/shows/all'>Episodes</Link></li>
                    <li title='About us'><Link href='/about'>About</Link></li>
                    <li><a href='https://twitter.com/Africageoconvo' target='_blank'><img src='/static/assets/twitter.png' width='30px' height='25px' title='Follow us on twitter'></img></a></li>
                </RightNavStyle>
    )
}


export default RightNav;