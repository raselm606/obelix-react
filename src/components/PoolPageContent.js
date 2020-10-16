import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Nav, Button} from "react-bootstrap";
import eth from "../assets/images/fund/eth.png";
import {Link} from "react-router-dom";
import knife from "../assets/images/fund/knife.png";
import coinfund from "../assets/images/fund/coinfund.png";
import flux from "../assets/images/fund/flux.png";
import diamond from "../assets/images/fund/diamond.png";
import stick from "../assets/images/fund/stick.png";
import haturi from "../assets/images/fund/haturi.png";
import umbrala from "../assets/images/fund/umbrala.png";
import box from "../assets/images/fund/box.png";
import FundWeeklyChart from "./FundWeeklyChart";

class PoolPageContent extends Component {
    render() {
        return (
            <Fragment>
                <div className="fundpageContent">
                   <Container >
                       <Row className="justify-content-center">
                           <Col lg={8} sm={12} md={8}>
                               <div className="fundText text-center">
                                   <h2>Liquidity Pool</h2>
                                   <p>Dear Chad, we also have fantastic liquidity pool rewards for you! <br/>
                                       Bellow you can select one of the available pools: <strong>UTY/ ETH</strong> or <strong>OBELIX/ ETH</strong>
                                   </p>

                                   <p>Notel: Current minimum pool stake duration is 2 days.</p>
                               </div>

                               <div className="selectPooll text-center mt-5 mb-5">
                                   <h3>Select Pool:
                                       <select className="form-control" style={{display:'inline', width:'20%', marginLeft:'20px'}} name="" id="">
                                           <option value="">UTY/ ETH </option>
                                           <option value="">OBELIX/ETH </option>
                                       </select>
                                   </h3>
                               </div>

                               <div className="collectoblex text-center mt-4 mb-4">
                                   <h2>Liquidity Pool: UTY/ETH <img src={eth} alt=""/> </h2>
                                   <h5 className="mt-4">Collect OBELIX rewards for providing liquidity to Uniswap</h5>

                               </div>
                           </Col>

                           <Col lg={9} md={9} sm={12}>
                               <div className="liqusdd text-center m-3">
                                   <Button className="btn btn-warning mr-3 mb-3">Add Liquidity</Button>
                                   <Button className="btn btn-white mr-3 mb-3">Remove</Button>
                                   <span style={{color:'#fff', textDecoration:'underline', cursor:'pointer'}} onClick={()=> window.open("https://m.youtube.com/watch?v=Fpn-OaUeiv8","_blank")} className="mb-3 tuto">Tutorial</span>
                               </div>
                           </Col>

                           <Col lg={9} md={9} sm={12} >
                               <Row className="justify-content-center">
                                   <Col lg={3} md={3} sm={12}>
                                       <div className="itemfund mb-3">
                                           <img src={coinfund} alt=""/>
                                           <p>Current Available OBELIX Rewards</p>
                                           <span>4.323</span>
                                       </div>
                                   </Col>
                                   <Col lg={3} md={3} sm={12}>
                                       <div className="itemfund mb-3">
                                           <img src={knife} alt=""/>
                                           <p>Days staked</p>
                                           <span>10</span>
                                       </div>
                                   </Col>
                                   <Col lg={3} md={3} sm={12}>
                                       <div className="itemfund mb-3">
                                           <img src={haturi} alt=""/>
                                           <p>Current Estimated OBELIX Rewards </p>
                                           <span>30</span>
                                       </div>
                                   </Col>
                                   <Col lg={3} md={3} sm={12}>
                                       <div className="itemfund mb-3">
                                           <img src={umbrala} alt=""/>
                                           <p>Estimated Monthly Rewards </p>
                                           <span>30</span>
                                       </div>
                                   </Col>
                                   <Col lg={3} md={3} sm={12}>
                                       <div className="itemfund mb-3">
                                           <img src={flux} alt=""/>
                                           <p>Wallet Token Balance</p>
                                           <span>17,44..</span>
                                       </div>
                                   </Col>
                                   <Col lg={3} md={3} sm={12}>
                                       <div className="itemfund mb-3">
                                           <img src={diamond} alt=""/>
                                           <p>Estimated Monthly Yeald</p>
                                           <span>10%</span>
                                       </div>
                                   </Col>
                                   <Col lg={3} md={3} sm={12}>
                                       <div className="itemfund mb-3">
                                           <img src={stick} alt=""/>
                                           <p>Calculate Estimated
                                               Monthly Rewards</p>
                                           <span>30</span>
                                       </div>
                                   </Col>
                                   <Col lg={3} md={3} sm={12}>
                                       <div className="itemfund mb-3">
                                           <img src={box} alt=""/>
                                           <p>Contract Token Balance</p>
                                           <span>30</span>
                                       </div>
                                   </Col>
                               </Row>
                           </Col>

                           <Col lg={9} md={9} sm={12}>
                               <div className="liqusdd text-center m-3">
                                   <Button className="btn btn-warning mr-3 mb-3">Approve UNI-V2</Button>
                                   <Button className="btn btn-warning mr-3 mb-3 ">Deposit </Button>
                                   <Button className="btn btn-white mr-3 mb-3">Withdraw </Button>

                               </div>
                           </Col>
                       </Row>




                   </Container>


                    <FundWeeklyChart title="Daily pool rewards (OBELIX) "/>
                </div>

            </Fragment>
        );
    }
}

export default PoolPageContent;