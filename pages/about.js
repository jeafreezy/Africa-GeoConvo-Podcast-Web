import Navigation from '../components/Header/Navigation';
import WhoWeAre from '../components/About/WhoWeAre';
import BehindTheMic from '../components/About/BehindTheMic';
import SupportTheShow from '../components/About/SupportTheShow';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import Subscribe from '../components/Subscribe/Subscribe';
import SupportSubscribe from '../components/Subscribe/SupportSubscribe';

function About() {
	return (
		<>
			<Head>
				{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-6403YWW3D1"
				></script>
				<script src="gtag.js"></script>
				<title>About Us</title>
				<link rel="icon" href="/static/assets/favicon.ico" />
			</Head>
			<Navigation />
			<div style={{ height: '80px' }}></div>
			<div id="about">
				<WhoWeAre />
				<BehindTheMic />
			</div>
			<SupportSubscribe />
			<Footer />
		</>
	);
}

export default About;
