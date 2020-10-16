import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import whyfund from "../assets/images/landing/whyfund.png";

class WhyaFund extends Component {
    render() {
        return (
            <Fragment>
                <div className="whyafund section__padding70">
                    <Container>
                        <Row>
                            <Col lg={12} md={12}>
                                <div className="whyaFundtitle">
                                    <h2>Why a fund as the first application?</h2>
                                </div>
                            </Col>

                            <Col lg={6} md={6}>
                                <div className="whyaFund text-left">
                                    <img src={whyfund} alt=""/>
                                </div>
                            </Col>

                            <Col lg={{ span: 5, offset: 1 }} md={{ span: 5, offset: 1 }} offset={2}>
                                <div className="whyaFundtext mt-5">
                                    <p>We saw a <span>trend</span> towards the emergence of <span>decentralized hedge funds,</span> and we recognized the potential
                                        that our <span>double-layered</span> <br/> <span>DAO model</span> had in such an endeavor. Fulfilling our promises is of major importance.
                                        The aim is to provide value with the community for the community.</p>
                                    <p>With the Obelix hedge fund we are not only launching our first dApp, but also the <span>first revenue stream</span> for the <span>DAO</span>
                                        and provide <span>passive income</span> through the distribution of all profits made by Obelix.</p>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default WhyaFund;