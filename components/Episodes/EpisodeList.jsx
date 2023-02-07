
import React from 'react';
import Card from './Card';


const EpisodeList=({episodes})=>{

    return(

            <div className='episodes-container'>
                {   
                    episodes.length > 1 ? episodes.map((items,i)=>{

                        const {number,title,host,readableDate,Guest,url,image,shortInfo} = items
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
                    : <p>Oops :( Episode not found. Try searching using guest name or episode title...</p>
                }
            </div>
            
    )
}


export default EpisodeList;







