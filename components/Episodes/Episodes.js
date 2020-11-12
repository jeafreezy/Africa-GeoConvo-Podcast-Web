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
        
        if(this.state.EpisodeInfo.length > 1){

            filteredEpisodes=this.state.EpisodeInfo.filter(episode=>{

            return (
                episode.title.toLowerCase().includes(this.state.searchField.toLowerCase())
             || episode.host.toLowerCase().includes(this.state.searchField.toLowerCase())
             || `${'episode' + episode.number}`.toLowerCase().includes(this.state.searchField.toLowerCase())
             || episode.readableDate.toLowerCase().includes(this.state.searchField.toLowerCase())
             )
            
         })
        }else{

            filteredEpisodes=this.state.EpisodeInfo
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