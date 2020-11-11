import React from 'react';
import Header from '../components/Header/Header';
import Head from'next/head';
import Footer from '../components/Footer/Footer';
import Episodes from '../components/Episodes/Episodes';
import Subscribe from '../components/Subscribe/Subscribe';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import { getSomeShows } from '../utils/ReadShowFiles';


export async function getStaticProps() {

  const shows = await getSomeShows(5);

  return {
    revalidate: 1,
    props: {
      shows,
    },
  };
}
class App extends React.Component {
    render(){
      const {  shows = [] } = this.props;
    return (
      <>      
              <Head>
                <link rel="icon" href= "/static/assets/favicon.ico" />
                <title>Africa GeoConvo— A podcast about everything geospatial in Africa.</title>
              </Head>
              <Header />
              <Episodes episodeInfo={shows}/>
              {/* <About /> */}
              <Subscribe />
              <Contact />
              <Footer />
      </>
    )
  }
}


export default App;
