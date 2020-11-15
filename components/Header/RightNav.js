import React from 'react';
import {RightNavStyle} from '../Styles/Header';
import Link  from 'next/link';


const RightNav=({open})=>{

    

    return( 
                <RightNavStyle open={open}>

                    <li><Link href='/' >Home</Link></li>
                    <li><Link href='/shows/all'>Episodes</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><a href='https://twitter.com/Africageoconvo' target='_blank'><img src='/static/assets/twitter.png' width='25px' height='25px' title='Follow us on twitter'></img></a></li>
                    <li><a href='https://twitter.com/Africageoconvo' target='_blank'><img src='/static/assets/rss.png' width='25px' height='25px' title=''></img></a></li>
                    <li><a href='https://twitter.com/Africageoconvo' target='_blank'><img src='/static/assets/spotify.png' width='27px' height='25px' title=''></img></a></li>
                    <li><a href='https://twitter.com/Africageoconvo' target='_blank'><img src='/static/assets/google-podcasts.png' width='25px' height='25px' title=''></img></a></li>
                    <li><a href='https://twitter.com/Africageoconvo' target='_blank'><img src='/static/assets/apple-podcast.png' width='25px' height='25px' title=''></img></a></li>
                </RightNavStyle>
    )
}


export default RightNav;