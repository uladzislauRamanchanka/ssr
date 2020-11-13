import React from 'react';
import Footer from '../src/Containers/Footer/Footer';
import HeaderMainContainer from '../src/Containers/HeaderMainContainer/HeaderMainContainer'
import HomeMainContent from '../src/Components/HomeMainContent/HomeMainContent'


function Home(props) {
    return (
    <React.Fragment>
        <HeaderMainContainer/>
        <HomeMainContent/>
        <Footer/>
    </React.Fragment>
    );
}

export default Home;