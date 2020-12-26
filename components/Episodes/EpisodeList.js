
import React from 'react';
import Card from './Card';


const EpisodeList=({episodes})=>{

   
    if(episodes.length > 1){
        
        return(

            <>
                {   
                
                episodes.map((items,i)=>{

                        const {number,title,host,readableDate,Guest,url,shortInfo} = items

                        return(
                            

                            <Card key={i}
                                    
                                    episodeNumber={number}
                                    podcastTitle={title}
                                    host={host}
                                    date={readableDate}
                                    playerUrl={url}
                                    guest={Guest}
                                    episodeShortNote={shortInfo}

                            />
                                    
                            );
                        

                    })
                    

                
                }

            </>
        )
    }else{
        const {number,title,host,readableDate,Guest,url,shortInfo} = episodes[0];
       
        return(
                            
            <>
                <Card
                        
                        episodeNumber={number}
                        podcastTitle={title}
                        host={host}
                        date={readableDate}
                        playerUrl={url}
                        guest={Guest}
                        episodeShortNote={shortInfo}

                />
                
            </>
                    
            );
    }
}


export default EpisodeList;







