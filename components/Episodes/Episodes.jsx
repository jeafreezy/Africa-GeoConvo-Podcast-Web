import React, {useEffect, useState} from 'react';
import Search from './Search';
import EpisodeList from './EpisodeList';

const Episodes = (props)=>{
    
    const [filteredEpisodes, setFilteredEpisodes] = useState(props.shows)
    
    const onSearchChange=(event)=>{
        const searchField=event.target.value

        const filtered=props.allShows.filter(episode=>(
            episode.title.toLowerCase().includes(searchField.toLowerCase())
            || episode.host.toLowerCase().includes(searchField.toLowerCase())
            || episode.Guest.toLowerCase().includes(searchField.toLowerCase())
            || `${'episode' + episode?.number}`.toLowerCase().includes(searchField.toLowerCase())
            || episode.readableDate.toLowerCase().includes(searchField.toLowerCase())
            ))
        
        setFilteredEpisodes(filtered)
    }
    
    
    return(
            <div id='episodes'>
                <Search searchChange={onSearchChange}/>
                <EpisodeList episodes={filteredEpisodes}/>
            </div>

    )
}


export default Episodes;