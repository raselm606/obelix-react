import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import coin from "../assets/images/landing/coin.png";

class BannerAreaHomepage extends Component {
    render() {
        return (
            <Fragment>
                <div className="bannerArea">
                    <Container>
                        <Row>
                            <Col lg={7} md={7} sm={12}>
                                <div className="bannerLeftText">
                                    <h1>The <span style={{fontWeight:'700'}}>UnityDAO</span> is proud to <br/> reveal its <span style={{fontWeight:'700'}}>first application. </span>
                                        <br/> A true warrior, a loyal <br/> servant to the Senate and <br/> Council.</h1>

                                    <h1 className="mt-4">We present you, </h1>
                                    <h3>Obelix <img src={coin} alt=""/></h3>
                                </div>

                            </Col>
                            <Col lg={12} md={12} sm={12}>
                                <div className="bannerbtn text-center">
                                    <button onClick={()=> window.open("https://link.medium.com/rdfoI9G0wab", "_blank")} className="btn btn-primary mt-5 ">Learn More</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </Fragment>
        );
    }
}

export default BannerAreaHomepage;