import Navigation from '../components/Header/Navigation';
import WhoWeAre from '../components/About/WhoWeAre';
import BehindTheMic from '../components/About/BehindTheMic';
import SupportTheShow from '../components/About/SupportTheShow';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';

function About(){


    return(
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <Navigation />
            <div id='about'>
                <WhoWeAre />
                <BehindTheMic />
                <SupportTheShow />
            </div>
            <Footer />
        </>
    )
}


export default About;