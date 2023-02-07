import React from 'react';
import Header from '../components/Header/Header';
import Head from'next/head';
import Footer from '../components/Footer/Footer';
import Episodes from '../components/Episodes/Episodes';
import EpisodeButton from '../components/Episodes/Button';
import Contact from '../components/Contact/Contact';
import { getSomeShows,getShows } from '../utils/ReadShowFiles';
import {TitleStyles} from '../components/utilsStyles';
import SupportSubscribe from '../components/Subscribe/SupportSubscribe';

export async function getStaticProps() {

  const shows = await getSomeShows(6);
  const allShows = await getShows();

  return {
    revalidate: 1,
    props: {
      shows,
      allShows
    },
  };
}
class App extends React.Component {
    render(){
      const {  shows = [],allShows=[] } = this.props;
    return (
      <>      
              <Head>
                <link rel='alternate' type='application/rss+xml' title='Africa GeoConvo Podcast' 
                href='https://feed.podbean.com/africageoconvo/feed.xml'></link>
                <title>Africa GeoConvo— A podcast about everything geospatial in Africa.</title>
              </Head>
              <Header />
              <TitleStyles>Latest Episodes</TitleStyles>
              <Episodes shows={shows} allShows={allShows}/>
              <EpisodeButton />
              <SupportSubscribe />
              <Contact />
              <Footer/>
      </>
    )
  }
}


export default App;
