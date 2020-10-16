import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import stakeBtn from "../assets/images/landing/stakebtnon.png";
import fundBtn from "../assets/images/landing/fundbtnon.png";
import fundBtnOff from "../assets/images/landing/fundbtnoff.png";
import poolBtn from "../assets/images/landing/poolbtnon.png";
import poolBtnOff from "../assets/images/landing/poolbtnoff.png";
import obeMan from "../assets/images/landing/whatisimage.png";
import stakeBtnOff from "../assets/images/landing/stakebtnoff.png";
import {Link, NavLink} from "react-router-dom";
class WhatIsObelix extends Component {
    render() {
        return (
            <Fragment>
                <div className="whatisObelix section__padding70" id="whatisObelix">
                    <Container>
                        <Row className="align-items-end">
                            <Col lg={5} md={5} sm={12}>
                                <div className="whatobeText">
                                    <h2 className="mb-5">What is Obelix?</h2>
                                    <p>Obelix is a <span style={{fontWeight:'600'}}>hedge fund, </span> which is  fully governed by the <span style={{fontWeight:'600'}}>Council of the UnityDAO. </span></p>
                                    <p>Profits are distributed amongst  the entire DAO and ecosystem   and therefore generates the first  of many passive income sources   for our community.</p>
                                    <p>Here you can <span style={{fontWeight:'600'}}> Stake OBELIX, </span>  provide  <span style={{fontWeight:'600'}}>UTY/OBELIX Liquidity</span>  or check on the <span style={{fontWeight:'600'}}>Fund.</span> </p>

                                    <div className="stakeButton text-center mt-5">
                                         <img className="onbtn" src={stakeBtn} alt=""/>
                                         <NavLink to="/stake"> <img className="pushbtn" src={stakeBtnOff} alt=""/> </NavLink>

                                    </div>

                                    <div className="pooltarget text-center float-left">
                                        <img className="poolonn" src={poolBtn} alt=""/>
                                        <NavLink to="/pool"> <img className="poolofff" src={poolBtnOff} alt=""/> </NavLink>
                                    </div>
                                    <div className="twobtn text-center ">
                                        <img className="fundonn" src={fundBtn} alt=""/>
                                        <NavLink to="/fund"> <img className="fundofff" src={fundBtnOff} alt=""/> </NavLink>
                                    </div>

                                    <div className="threebtn">


                                    </div>
                                </div>
                            </Col>

                            <Col lg={7} md={7} sm={12}>
                                <div className="rightimgwhat text-right">
                                    <img src={obeMan} alt=""/>
                                </div>
                            </Col>


                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default WhatIsObelix;