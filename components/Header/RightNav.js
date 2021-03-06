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
                    <li><a href='https://www.linkedin.com/company/71670027/' target='_blank' rel='noopener noreferer'><img src='/static/assets/linkedin.png' width='25px' height='25px'></img></a></li>
                    <li><a href='https://open.spotify.com/show/0LGHyoUC6EIj1T8djbDBne' target='_blank' rel='noopener noreferer'><img src='/static/assets/spotify.png' width='25px' height='25px' title=''></img></a></li>
                    <li><a href='https://podcasts.apple.com/ng/podcast/africa-geoconvo-podcast/id1549049632' target='_blank' rel='noopener noreferer'><img src='/static/assets/apple-podcast.png' width='25px' height='25px' title=''></img></a></li>
                    <li><a href='https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2FmcmljYWdlb2NvbnZvL2ZlZWQueG1s' target='_blank' rel='noopener noreferer'><img src='/static/assets/google-podcasts.png' width='25px' height='25px' title=''></img></a></li>
                    <li><a href='https://africageoconvo.podbean.com/' target='_blank' rel="noopener noreferer"><img src='/static/assets/podbean.png' alt='Podbean icon' title='Podbean' width='25px' height='25px'></img></a></li>
                    <li><a href='https://feed.podbean.com/africageoconvo/feed.xml' target='_blank' rel='noopener noreferer'><img src='/static/assets/rss.png' width='25px' height='25px' title=''></img></a></li>
                    <li><a href='https://www.patreon.com/africageoconvo' target='_blank' rel='noopener noreferer'><img src='/static/assets/patreon.png' width='25px' height='25px' title='Support us on Patreon'></img></a></li>
                </RightNavStyle>
    )
}


export default RightNav;