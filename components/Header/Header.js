import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';


function Header(){

    return(
        <div id='top'>
                <Navigation />
                <Banner />
        </div>
    )
}



export default Header;