import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Nav, Modal} from "react-bootstrap";
import gimmeBtn from "../assets/images/fund/gimmebtn.png";
import gimmeBtnOff from "../assets/images/fund/gimmebtnOff.png";
import fundimg from "../assets/images/fund/fund.png";
import biglogo from "../assets/images/fund/biglogo.png";
import coinfund from "../assets/images/fund/coinfund.png";
import flux from "../assets/images/fund/flux.png";
import diamond from "../assets/images/fund/diamond.png";
import stick from "../assets/images/fund/stick.png";
import FundChart from "./FundChart";
import FundWeeklyChart from "./FundWeeklyChart";

class FundPageContent extends Component {
    constructor(){
        super();
        this.state={
            show:false,
            open:false,
            firstimg: "gimm",
            offimg:"gimmebtnoff d-none"

        }
    }

    firstImgg=()=>this.setState({firstimg:"d-none", offimg:"gimmebtnoff d-block"});

    popClose=()=>this.setState({show:false});
    popShow=()=>this.setState({show:true, firstimg:"d-none", offimg:"gimmebtnoff d-block"});

    popClosetwo=()=>this.setState({open:false});
    popShowtwo=()=>this.setState({open:true});
    render() {
        return (
            <Fragment>
                <div className="fundpageContent">
                   <Container >
                       <Row className="justify-content-center">
                           <Col lg={8} sm={12} md={8}>
                               <div className="fundText text-center">
                                   <h2>Fund</h2>
                                   <p>Dear Chad,  it’s time to  reward you for your loyal holding ! <br/> To claim <strong>OBELIX Profit</strong> Share please click the <strong>“GIMME”</strong> button bellow.</p>

                                   <p>Note: once claimed, payments will be processed within 24h, usually much quicker.</p>
                               </div>

                               <div className="gimmebtn text-center mt-4">
                                   <img onClick={this.popShow} className={this.state.firstimg}  src={gimmeBtn} alt=""/>
                                   <div className={this.state.offimg}>
                                       <img  src={gimmeBtnOff} alt=""/>
                                   </div>
                               </div>

                               {/*gimme popup*/}

                               <Modal className="gimmeyModal" show={this.state.show} onHide={this.popClose} centered>
                                   <Modal.Header closeButton>
                                   </Modal.Header>
                                   <Modal.Body className="text-center">
                                       <img src={fundimg} alt=""/> <br/><br/>
                                      <strong style={{color:'#FF9800'}}> Congrats Chad! Obelix Profits will be sent to you!</strong>
                                   </Modal.Body>
                                   <Modal.Footer>


                                   </Modal.Footer>
                               </Modal>




                               <div className="collectoblex text-center mt-4">
                                   <h2>Collect OBELIX Profit Share </h2>
                                   <img className="bigggimg" src={biglogo} alt=""/>
                               </div>
                           </Col>

                           <Col lg={9} md={9} sm={12}>
                               <div className="profitsharep text-right">
                                   <Nav.Link onClick={this.popShowtwo}>Profit Share</Nav.Link>
                               </div>
                           </Col>

                           {/*profit share modal*/}

                           <Modal className="gimmeyModal" show={this.state.open} onHide={this.popClosetwo} centered>
                               <Modal.Header closeButton>
                               </Modal.Header>
                               <Modal.Body className="text-center">
                                   <p>Profit share:</p>
                                   <div className="alert alert-success  "><strong>50% </strong> Staker of Obelix</div>
                                   <div className="alert alert-secondary "> <strong>15% </strong> Senate</div>
                                   <div className="alert alert-warning "> <strong>15% </strong> Council </div>
                                   <div className="alert alert-primary "><strong>8%  </strong>to further grow OBELIX</div>
                                   <div className="alert alert-info "><strong>3.5%  </strong>UTY buybacks -> add to liquidity</div>
                                   <div className="alert alert-danger "><strong>5%   </strong>Founder & Maximus</div>
                               </Modal.Body>
                               <Modal.Footer>


                               </Modal.Footer>
                           </Modal>

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
                                           <img src={flux} alt=""/>
                                           <p>Wallet OBELIX Balance</p>
                                           <span>17,44</span>
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
                                           <p>Roi Since Inception</p>
                                           <span>300%</span>
                                       </div>
                                   </Col>
                               </Row>
                           </Col>


                       </Row>






                   </Container>

                    <FundChart/>
                    <FundWeeklyChart title="OBELIX Fund Bi-weekly Profits"/>
                </div>

            </Fragment>
        );
    }
}

export default FundPageContent;