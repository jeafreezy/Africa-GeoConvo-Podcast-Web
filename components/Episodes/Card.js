import React , {useState , useEffect} from 'react';
import { CardStyle } from '../Styles/Episodes';
import Link from 'next/link';
import { Offline, Online } from "react-detect-offline"


function Card({podcastTitle,episodeNumber,image,host,date,guest,playerUrl,episodeShortNote}){

   
    function Iframe(props) {

        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }


    const [audioPlayer,setAudioPlayer] = useState(null);

    useEffect(() => {

        const iframe = `<iframe src= ${playerUrl} url= "https%3A%2F%2Fwww.podbean.com%2Few%2Fpb-pw6dz-6a10a2" width='90%' height='100' frameborder="0" scrolling="no" data-name="pd-iframe-player"></iframe>`
        setAudioPlayer(iframe)

    })


    return(

    <CardStyle>
        
        <div className='container'>

            <div id='thumbnail'>
                <img alt='podcast thumbnail' src={image}></img>
            </div>
            <div className='episode'>
                <div id='episode-title'>
                    <h3>Episode {episodeNumber}: {podcastTitle}</h3>
                </div>

                <div id='episode-info' >
                    <p> Host: {host} | {date} | Guest: {guest} </p>   
                </div>

                <div id='episode-desc'>
                    <h5> {episodeShortNote} <span style={{color:'blue'}}><Link href={`/shows/${episodeNumber}`}>See show notes</Link></span></h5>
                </div>
                
                {audioPlayer && (
                            
                    <div className='podcast-player'>

                        <Online> <Iframe iframe= {audioPlayer} /> </Online>

                        <Offline>Sorry😔, we can't load the show audio right now.Please check your network connection 😟</Offline>
                    </div>
                  

                )
                
                }

                {!audioPlayer && <div>
                  
                </div>
                
                }
        </div>
    </div>
    </CardStyle>

)

}


export default Card;