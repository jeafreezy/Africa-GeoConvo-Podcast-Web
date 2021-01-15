import React, {Component} from 'react';
import Search from './Search';
import EpisodeList from './EpisodeList';

class Episodes extends Component{
    
    constructor({episodeInfo}){

        super()

        this.state={

            EpisodeInfo:episodeInfo,
            searchField:''

        }
      
    }

    onSearchChange=(event)=>{
        
        const searchText=event.target.value
        this.setState({searchField:searchText})
    }


    render(){
        
       let filteredEpisodes;
        const {searchField,EpisodeInfo}=this.state
        if(EpisodeInfo.length > 1){

            filteredEpisodes=EpisodeInfo.filter(episode=>{
            return (
                episode.title.toLowerCase().includes(searchField.toLowerCase())
             || episode.host.toLowerCase().includes(searchField.toLowerCase())
             || episode.Guest.toLowerCase().includes(searchField.toLowerCase())
             || `${'episode' + episode.number}`.toLowerCase().includes(searchField.toLowerCase())
             || episode.readableDate.toLowerCase().includes(searchField.toLowerCase())
             )
            
         })
        }else if(EpisodeInfo.length === 1 || EpisodeInfo.length < 1){

            filteredEpisodes=EpisodeInfo
        }

        return(
                <div id='episodes'>
                        <Search searchChange={this.onSearchChange}/>
                        <EpisodeList episodes={filteredEpisodes}/>
                </div>

        )
    }
}


export default Episodes;