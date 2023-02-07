import Navigation from '../../components/Header/Navigation';
import { useRouter } from 'next/router'
import Footer from '../../components/Footer/Footer';
import Head from 'next/head';
import {getShows} from '../../utils/ReadShowFiles';
import React from 'react';
import Episodes from '../../components/Episodes/Episodes';
import Subscribe from '../../components/Subscribe/Subscribe';
import Episode from '../../components/Episodes/SingleEpisode';
import ErrorPage from 'next/error';
import { TitleStyles } from '../../components/utilsStyles';
import SupportSubscribe from '../../components/Subscribe/SupportSubscribe';

export async function getStaticPaths() {

    const shows = await getShows();
    
    const paths=[
                {
                    params:{

                        slug:'all'
                    }
                },
            ...shows.map((show) =>({

                params:{

                    slug:String(show.number)
                }
            }))
        ]
    return{

        paths,
        fallback: false
    };
}


export async function getStaticProps({params} ) {
    
    const shows = await getShows();
    const showNumber = params.slug;
    const props = { shows,showNumber };

    return {
      revalidate: 1,
      props
    };
  
}

export default function Shows({shows,showNumber}){
    
    const router = useRouter()
   
    if (router.isFallback) {
        return <ErrorPage statusCode={404} />
    }
    
    const query = router.query.slug;
    

    const show = shows.find(

        showItem=>{

            return String(showItem.number)  === query
        }

    );

    if(query === 'all'){ 

        return(
            
            <>
                <Head>
                    <link rel="icon" href= "/static/assets/favicon.ico" />
                    <title>Shows</title>
                </Head>
                <Navigation />
                <div style={{height:'80px'}}></div>
                <TitleStyles>All Episodes</TitleStyles>
                <Episodes shows={shows} allShows={shows}/>
                <SupportSubscribe />
                <Footer/>  
            </>
        )
    }else{

        return(
            
            <>
                <Head>
                    <link rel="icon" href= "/static/assets/favicon.ico" />
                    
                    <title>Episode {show.number} -- {show.title}</title>
                </Head>
                <Navigation />
                <Episode episodeInfo={show}/>
                <supportSubscribe />
                <Footer />  
            </>
        )

    }

    
        
}