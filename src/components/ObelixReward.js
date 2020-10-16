import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import rewardImg from "../assets/images/landing/rewards.png";
import {Link} from "react-router-dom";

class ObelixReward extends Component {
    render() {
        return (
            <Fragment>
                <div className="rewardsObelix section__padding100" id="Rewards">
                    <Container>
                        <Row className="align-items-end">
                            <Col lg={12} md={12}>
                                <div className="titleareaRewards ml-4 mb-5">
                                    <h2>Obelix Rewards</h2>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12}>
                                <div className="rewardImg mb-4 text-center">
                                    <img src={rewardImg} alt=""/>
                                </div>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <div className="rewardText mb-4">
                                    <p>There are <strong>two ways</strong> in which you can collect  OBELIX rewards.</p>
                                    <p><strong>1) Profit Share</strong> from OBELIX Fund: </p>
                                    <p><strong>50%</strong> of Fund Profits go to <strong>Stakers</strong> of OBELIX </p>
                                    <p><strong>30%</strong> goes for <strong>UTY holders</strong> that belong to the Senate or Council (>= 10 UTY) </p>
                                    <br/>
                                    <p><strong>2) Liquidity Pool: </strong>
                                        Provide UTY/ETH or OBELIX/ETH liquidity on Uniswap.</p>
                                </div>
                            </Col>

                            <Col lg={3} md={3} sm={12}>
                                <div className="rewardBtn text-center ">
                                    <Link to="/stake" className="btn btn-primary mbb-5">stake</Link>
                                    <Link to="/fund" className="btn btn-primary mbbb-5 mt-4">Get a seat</Link>
                                    <Link to="/pool" className="btn btn-primary mmb-3">Pool</Link>
                                </div>
                            </Col>


                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    };
};

export default ObelixReward;