import React from 'react';
import {TitleStyles,Button} from '../utilsStyles';
import Link from 'next/link';
import {StyledEpisode } from '../Styles/Episodes';


function Episode(props){


    function Iframe(props) {

        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }
    const iframe= `<iframe src= ${props.episodeInfo.url} url= "https%3A%2F%2Fwww.podbean.com%2Few%2Fpb-pw6dz-6a10a2" width='90%' height='100' frameborder="0" scrolling="no" data-name="pd-iframe-player"></iframe>`
    

    return(
                <div id='episodes'>
                    <div style={{height:'80px'}}></div>
                    <TitleStyles> Episode {props.episodeInfo.number} : {props.episodeInfo.title} </TitleStyles>
                    
                    <StyledEpisode>
                        <span className='episode-info'> <p>Date released: {props.episodeInfo.readableDate}</p></span>
                        <span className='episode-info'><p>Host: {props.episodeInfo.host}</p></span>
                        <span className='episode-info'><p>Guest: {props.episodeInfo.Guest}</p></span>
                        <div className='podcast-player'>
                            <Iframe iframe={iframe}/>
                        </div> <br></br>
                        <a className="button" download href={props.episodeInfo.url}>
                            <span className="icon">👇</span> Download Show
                        </a>
                        <hr></hr>
                        <h2>Show Notes</h2>
                        <div className='show-text' dangerouslySetInnerHTML={{ __html: props.episodeInfo.html }} />
                    </StyledEpisode>
                    <Button>
                        <div id='btn-wrapper'>  <button><Link href='/shows/all'>See More Episodes</Link></button> </div>
                    </Button>
                    
                </div>

        )
}


export default Episode;