import React, {Component, Fragment} from 'react';
import TopNavbar from "../components/TopNavbar";
import WhatIsObelix from "../components/WhatIsObelix";
import WhyaFund from "../components/WhyaFund";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Roadmap from "../components/Roadmap";
import ObelixReward from "../components/ObelixReward";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavbar/>
                <WhatIsObelix/>
                <WhyaFund/>
                <ObelixReward/>
                <Roadmap/>
                <Faq/>
                <Footer/>

                
            </Fragment>
        );
    }
}

export default HomePage;