import React from 'react';
import {RightNavStyle} from '../Styles/Header';
import Link  from 'next/link';


const RightNav=({open})=>{

    

    return( 
                <RightNavStyle open={open} id='rightnav'>

                    <li className='navlinks'><Link href='/' >Home</Link></li>
                    <li className='navlinks'><Link href='/shows/all'>Episodes</Link></li>
                    <li className='navlinks'><Link href='/about'>About</Link></li>
                    <li><a href='https://twitter.com/Africageoconvo' target='_blank' rel='noopener noreferer'><img src='/static/assets/twitter.png' width='25px' height='25px' title='Follow us on twitter'></img></a></li>
                    <li><a href='https://rss.com/podcasts/africageoconvo/' target='_blank' rel='noopener noreferer'><img src='/static/assets/rss.png' width='25px' height='25px' title=''></img></a></li>
                    {/* <li><a href='https://twitter.com/Africageoconvo' target='_blank' rel='noopener noreferer'><img src='/static/assets/google-podcasts.png' width='25px' height='25px' title=''></img></a></li>
                    <li><a href='https://twitter.com/Africageoconvo' target='_blank' rel='noopener noreferer'><img src='/static/assets/apple-podcast.png' width='25px' height='25px' title=''></img></a></li> */}
                    <li><a href='https://www.patreon.com/africageoconvo' target='_blank' rel='noopener noreferer'><img src='/static/assets/patreon.png' width='25px' height='25px' title=''></img></a></li>
                </RightNavStyle>
    )
}


export default RightNav;