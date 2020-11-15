import Document, { Html, Head, Main, NextScript } from 'next/document';

// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />

            {/* Primary tags  */}
          <meta name="title" content="Africa GeoConvo— A podcast about everything geospatial in Africa." />
          <meta name="description" content="Welcome to Africa GeoConvo, this is a podcast about everything geospatial in Africa and the people doing great things with this technology. Listen to our episodes on your favourite podcast application." />

            {/* Open Graph / Facebook  */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://africageoconvo.com" />
          <meta property="og:title" content="Africa GeoConvo— A podcast about everything geospatial in Africa." />
          <meta property="og:description" content="Welcome to Africa GeoConvo, this is a podcast about everything geospatial in Africa and the people doing great things with this technology. Listen to our episodes on your favourite podcast application." />
          <meta property="og:image" content="https://africageoconvo.com/static/assets/logo-blue.png" />

            {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://africageoconvo.com" />
          <meta property="twitter:title" content="Africa GeoConvo— A podcast about everything geospatial in Africa." />
          <meta property="twitter:description" content="Welcome to Africa GeoConvo, this is a podcast about everything geospatial in Africa and the people doing great things with this technology. Listen to our episodes on your favourite podcast application." />
          <meta property="twitter:image" content="https://africageoconvo.com/static/assets/logo-blue.png" />
    
            {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
      </Head>

        <body>
          <script src="noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}