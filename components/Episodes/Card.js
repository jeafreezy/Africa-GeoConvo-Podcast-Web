import React from 'react';
import { CardStyle } from '../Styles/Episodes';
import Link from 'next/link';


function Card({podcastTitle,episodeNumber,host,date,guest,playerUrl,episodeShortNote}){


    return(

    <CardStyle>

        <div className='container'>

            <div id='thumbnail'>
                <img alt='podcast thumbnail' src='/static/assets/coffee.jpg'></img>
            </div>
            <div className='episode'>
                <div id='episode-title'>
                    <h3>Episode {episodeNumber}: {podcastTitle}</h3>
                </div>

                <div id='episode-info' >
                    <p> host: {host} | {date} | Guest: {guest} </p>   
                </div>

                <div id='episode-desc'>
                    <h5> {episodeShortNote} <span style={{color:'blue'}}><Link href={`/shows/${episodeNumber}`}>See show notes</Link></span></h5>
                </div>

                <div className='podcast-player'>
                    <iframe src={`${playerUrl}`} url= "https%3A%2F%2Fwww.podbean.com%2Few%2Fpb-pw6dz-6a10a2" width="80%"frameborder="0" scrolling="no" data-name="pd-iframe-player"></iframe>
                </div>
        </div>
    </div>
    </CardStyle>

)

}


export default Card;