import React from 'react';
import { CardStyle } from '../Styles/Episodes';



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

                <div id='episode-info'>
                    <p> host: {host} | {date} | Guest: {guest} </p>   
                </div>

                <div id='episode-desc'>
                    <h5> {episodeShortNote} <span><a href='#'>read more</a></span></h5>
                </div>

                <div className='podcast-player'>
                    {playerUrl}
                </div>
        </div>
    </div>
    </CardStyle>

)

}


export default Card;