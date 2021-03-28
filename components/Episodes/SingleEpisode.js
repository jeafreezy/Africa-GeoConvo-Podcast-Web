import React from 'react';
import {TitleStyles,Button} from '../utilsStyles';
import Link from 'next/link';
import {StyledEpisode } from '../Styles/Episodes';
import SocialShare from './SocialShare';
import Subscribe from '../Subscribe/Subscribe';


function Episode(props){
    
    // For the audio player

    function Iframe(props) {

        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }
    const iframe= `<iframe src="${props.episodeInfo.url}" allowtransparency='true' height='150' width='100%' style='border: none; min-width: min(100%, 430px);' data-name="pd-iframe-player"></iframe>`
    
    const {number,title,image,host,Guest,readableDate,html,downloadUrl} = props.episodeInfo;
    return(
                <div id='episodes'>

                    <div style={{height:'80px'}}></div>

                    <TitleStyles> Episode {number} : {title} </TitleStyles>
                    
                    <StyledEpisode>

                        <img src= {`${image}`} alt={title}
                        width='80%'
                        height='auto'
                        ></img>

                        <hr></hr>

                        <span className='episode-info'><p>Date released: {readableDate}</p></span>
                        <span className='episode-info'><p>Host: {host}</p></span>
                        <span className='episode-info'><p>Guest: {Guest}</p></span>
                        <hr></hr>

                        <span className="icon">🎵Listen to the full show now.👇</span> 
                    
                        <hr></hr>

                        <div className='podcast-player'>
                            <Iframe iframe={iframe}/>
                        </div>
                        <hr></hr>

                        <a className="button" download href={downloadUrl} target="_blank" rel="noopener noreferer">
                            <span className="icon">⏬</span> Click to download show.⏬
                        </a>
                        <hr></hr>
                        
                        <h2>Show Notes</h2>

                        <div className='show-text' dangerouslySetInnerHTML={{ __html: html }} />
                    <h2>Share This Episode</h2>
                    <SocialShare title={title} number={number}/>
                    </StyledEpisode>
                    
                    <Subscribe/>
                    <Button>
                        <div id='btn-wrapper'>  <button><Link href='/shows/all'>See Other Episodes</Link></button> </div>
                    </Button>
                   
                </div>

        )
}


export default Episode;