
import React from 'react';
import Card from './Card';


const EpisodeList=({episodes})=>{

    if(episodes.length > 1){
        
        return(

            <>
                {   
                
                episodes.map((items,i)=>{
                        
                        return(
                            

                            <Card key={i}
                                    
                                    episodeNumber={items.number}
                                    podcastTitle={items.title}
                                    host={items.host}
                                    date={items.readableDate}
                                    playerUrl={items.url}
                                    guest={items.Guest}
                                    episodeShortNote={items.shortInfo}

                            />
                                    
                            );
                        

                    })
                    

                
                }

            </>
        )
    }else{

        return(
                            
            <>
                <Card
                        
                        episodeNumber={episodes.number}
                        podcastTitle={episodes.title}
                        host={episodes.host}
                        date={episodes.readableDate}
                        playerUrl={episodes.url}
                        guest={episodes.Guest}
                        episodeShortNote={episodes.shortInfo}

                />
                
            </>
                    
            );
    }
}


export default EpisodeList;







