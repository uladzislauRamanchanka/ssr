import React from 'react';
import Footer from '../Containers/Footer/Footer';
import HeaderMainContainer from '../Containers/HeaderMainContainer/HeaderMainContainer'
import HomeMainContent from '../Components/HomeMainContent/HomeMainContent'

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