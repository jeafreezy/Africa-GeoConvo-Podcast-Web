import Navigation from '../../components/Header/Navigation';
import { useRouter } from 'next/router'
import Footer from '../../components/Footer/Footer';
import Head from 'next/head';
import {withRouter} from 'next/router';
import {getShows} from '../../utils/ReadShowFiles';
import React from 'react';
import Episodes from '../../components/Episodes/Episodes';
import ErrorPage from 'next/error';

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

    return(
        <>
            <Head>
                <title>Shows</title>
            </Head>
            <Navigation />
            <Episodes episodeInfo={query==='all'? shows : show}/>
            <Footer />
        </>
    )
    
        
}