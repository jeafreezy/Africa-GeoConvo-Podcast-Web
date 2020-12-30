import React from 'react';
import Header from '../components/Header/Header';
import Head from'next/head';
import Footer from '../components/Footer/Footer';
import Episodes from '../components/Episodes/Episodes';
import Subscribe from '../components/Subscribe/Subscribe';
import EpisodeButton from '../components/Episodes/Button';
import Contact from '../components/Contact/Contact';
import { getSomeShows } from '../utils/ReadShowFiles';
import {TitleStyles} from '../components/utilsStyles';
import SupportSubscribe from '../components/Subscribe/SupportSubscribe';

export async function getStaticProps() {

  const shows = await getSomeShows(2);

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
                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-6403YWW3D1"></script>
                <script src='gtag.js'></script>
                {/* Mailchimp */}
                <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/fa5094e702db9d27bb966a641/3c81a80d9a467dcdc090465b6.js");</script>
                <link rel="icon" href= "/static/assets/favicon.ico" />
                <title>Africa GeoConvo— A podcast about everything geospatial in Africa.</title>
              </Head>
              <Header />
              <TitleStyles>Latest Episodes</TitleStyles>
              <Episodes episodeInfo={shows}/>
              <EpisodeButton />
              <SupportSubscribe />
              <Contact />
              <Footer/>
      </>
    )
  }
}


export default App;
