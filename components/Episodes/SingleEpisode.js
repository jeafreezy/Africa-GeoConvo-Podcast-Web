import React, {Component} from 'react';
import EpisodeList from './EpisodeList';
import {TitleStyles,Button} from '../utilsStyles';
import Link from 'next/link';

function Episode(props){


    return(
                <div id='episodes'>
                    <div style={{height:'80px'}}></div>
                    <TitleStyles> Episode {props.episodeInfo.number} </TitleStyles>
                    <EpisodeList episodes={props.episodeInfo}/>
                    <Button>
                        <div id='btn-wrapper'>  <button><Link href='/shows/all'>See More Episodes</Link></button> </div>
                    </Button>
                    
                </div>

        )
}


export default Episode;