import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Nav, Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import knife from "../assets/images/fund/knife.png";
import threecoin from "../assets/images/fund/threechard.png";
import flux from "../assets/images/fund/flux.png";
import bigimmg from "../assets/images/fund/bigbag.png";
import FundWeeklyChart from "./FundWeeklyChart";

class StakePageContent extends Component {
    constructor(){
        super();
        this.state={
            show:false,
            open:false
        }
    }
    popClose=()=>this.setState({show:false});
    popShow=()=>this.setState({show:true});

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
                                   <h2>Staking Dashboard</h2>
                                   <p>
                                       Dear Chad, you are what makes our Community so strong. By staking magic potion you will fuel our OBELIX.  Stakers are eligible for <strong>50%</strong> of the <strong>OBELIX fund profits.</strong>
                                       <p>Please select quantity and click <strong>“Stake MP” ($OBELIX).</strong> </p>
                                   </p>


                                   <p style={{fontStyle:'italic', lineHeight:'25px'}}>Note: In order to claim fund profits you must stake for a minimum of 2 weeks.
                                       <br/>To claim please proceed to  the “Fund” page.</p>
                               </div>

                               <div className="bigimmg text-center">
                                   <img  src={bigimmg} alt=""/>

                               </div>




                           </Col>

                           <Col lg={9} md={9} sm={12} className="mt-5">
                               <Row>
                                   <Col lg={6} md={6} sm={12}>
                                       <div className="stakeMagic mb-4">
                                           <h3>Stake magic potion ($OBELIX)</h3>
                                           <div className="stkm">
                                               <span>MP Balance: 39</span>
                                               <span style={{textDecoration:'underline'}}>Max Amount</span>
                                           </div>

                                           <div className="inputareaBtn">
                                               <input type="text" placeholder="Amount to stake" />
                                               <Button className="btn btn-primary">Stake MP</Button>
                                           </div>
                                       </div>
                                   </Col>
                                   <Col lg={6} md={6} sm={12}>
                                       <div className="stakeMagic">
                                           <h3>Unstake magic potion ($OBELIX) </h3>
                                           <div className="stkm">
                                               <span>MP Staked: 60.5 </span>
                                               <span style={{textDecoration:'underline'}}>  Max Amount</span>
                                           </div>

                                           <div className="inputareaBtn">
                                               <input type="text" placeholder="Amount to unstake" />
                                               <Button className=" btn-purple">Unstake MP</Button>
                                           </div>
                                       </div>
                                   </Col>
                               </Row>

                           </Col>



                           <Col lg={9} md={9} sm={12} >
                               <Row className="justify-content-center mt-5">

                                   <Col lg={3} md={3} sm={12}>
                                       <div className="drtt">
                                           <span style={{color:'#fff', fontSize:'20px', fontWeight:'bold'}}>My statistics</span>
                                       </div>
                                       <div className="itemfundd mb-3">
                                           <img src={knife} alt=""/>
                                           <p>MP Balance</p>
                                           <span>60.5</span>
                                       </div>
                                   </Col>


                                   <Col lg={3} md={3} sm={12}>

                                       <div className="drtt"><span  onClick={this.popShow}  className="underlineetwo undergo" >Staking Info</span></div>
                                       <div className="itemfundd mb-3">
                                           <img src={flux} alt=""/>
                                           <p>Days Staked</p>
                                           <span>30</span>
                                       </div>
                                   </Col>


                                   <Col lg={6} md={6} sm={12}>
                                       <div className="drtt">
                                           <span  style={{color:'#fff', fontSize:'20px', display:'inline-block',  fontWeight:'bold'}}>My rank</span>
                                           <span className="underlineetwo" onClick={this.popShowtwo}>About  Rank</span>
                                       </div>
                                       <div className="itemfundd threecc flagimg mb-3">
                                           <img src={threecoin} alt=""/>
                                           <p>Unity Rank ($UTY)  <a style={{marginLeft:'20px'}}>To next Rank </a></p>
                                           <span>Conqueror <b style={{marginLeft:'5px'}}>-</b></span>
                                       </div>
                                   </Col>

                               </Row>
                           </Col>
                       </Row>

                       {/*staking popup*/}
                       <Modal className="gimmeyModal" show={this.state.show} onHide={this.popClose} centered>
                           <Modal.Header closeButton>
                           </Modal.Header>
                           <Modal.Body className=" text-center p-2 ">
                               <p>Stake Info:</p>
                               <span style={{color:'#FF9800'}}>Hey Chad, in order to claim fund profits you must stake for a minimum of 2 weeks. To
                                   claim please proceed to the <Link style={{color:'#FF9800', fontWeight:'bold'}} to="/fund"> 'Fund' </Link>
                                   page. </span>
                           </Modal.Body>
                           <Modal.Footer>

                           </Modal.Footer>
                       </Modal>

                       {/*about rank popup*/}
                       <Modal className="gimmeyModal" show={this.state.open} onHide={this.popClosetwo} centered>
                           <Modal.Header closeButton>
                           </Modal.Header>
                           <Modal.Body className="rankpop text-center p-4 ">
                               <p>Rank Info:</p>
                               <div className="alert alert-danger  "><strong>Bronze Medal</strong> = Chad  (> 0 UTY)</div>
                               <div className="alert alert-secondary "> <strong>Silver Medal =</strong> Senate (>= 10 UTY)</div>
                               <div className="alert alert-warning "> <strong>Gold Medal = </strong> Council (>= 55.5 UTY)</div>
                               <div className="alert alert-info "><strong>Flag = </strong> Conqueror (>= 100 UTY)</div>
                           </Modal.Body>
                           <Modal.Footer>

                           </Modal.Footer>
                       </Modal>




                   </Container>


                    <FundWeeklyChart title="OBELIX Fund Bi-weekly Profits "/>
                </div>

            </Fragment>
        );
    }
}

export default StakePageContent;