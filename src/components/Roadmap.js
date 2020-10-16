import React, { Fragment } from 'react';
import {Button, Col, Container, OverlayTrigger, Popover, Row} from 'react-bootstrap';
import fundidea from "../assets/images/landing/fundidea.png"
import fundidea2 from "../assets/images/landing/fundidea2.png"
import fundidea3 from "../assets/images/landing/fundidea3.png"
import fundidea4 from "../assets/images/landing/fundidea4.png"
import fundidea5 from "../assets/images/landing/fundidea5.png"
import fundidea6 from "../assets/images/landing/fundidea6.png"





const Roadmap = () => {


  return(
    <Fragment>
      <div className="roadMap " id="Roadmap">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="Roadtitle mb-5">
                <h2>Roadmap</h2>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center roadd">
            <Col sm={12} lg={2} md={2}>
              <div className="roadOne text-center">
                {['top'].map((placement) => (
                    <OverlayTrigger
                        trigger="hover"
                        key={placement}
                        placement={placement}
                        overlay={
                          <Popover id={`popover-positioned-${placement}`}>
                            <Popover.Content>
                              We saw an emergent trend on <strong>Community hedge funds</strong> and realized the great potential of applying this concept to our 2 Layer DAO model.
                            </Popover.Content>
                          </Popover>
                        }
                    >
                      <Button variant="btn-transparent">
                        <img src={fundidea} alt=""/> <br/>
                        <span>Sept 2020</span>
                        <p>1) Fund Idea</p>
                      </Button>
                    </OverlayTrigger>
                ))}
              </div>
            </Col>

            <Col sm={12} lg={2} md={2}>

              <div className="roadTwo text-center">
                {['top'].map((placement2) => (
                    <OverlayTrigger
                        trigger="hover"
                        key={placement2}
                        placement={placement2}
                        overlay={
                          <Popover id={`popover-positioned-${placement2}`}>
                            <Popover.Content>
                              Very <strong>solid and reputable developers</strong> were our top priority to execute on this endeavor. To top that we also aimed for <strong>innovative design.</strong>
                            </Popover.Content>
                          </Popover>
                        }
                    >
                      <Button variant="btn-transparent">
                        <img src={fundidea2} alt=""/> <br/>
                        <span>Sept 2020</span>
                        <p>2) Building Fund</p>
                      </Button>
                    </OverlayTrigger>
                ))}
              </div>
            </Col>

            <Col sm={12} lg={2} md={2}>
              <div className="roadOne text-center">
                {['top'].map((placement3) => (
                    <OverlayTrigger
                        trigger="hover"
                        key={placement3}
                        placement={placement3}
                        overlay={
                          <Popover id={`popover-positioned-${placement3}`}>
                            <Popover.Content>
                              Pre-sale Is reserved for in house seats. One of the very privileges of our <strong>DAO members</strong> is getting early access to the DAO dApps. Afterwards $OBELIX will be listed on <strong>Uniswap.</strong>
                            </Popover.Content>
                          </Popover>
                        }
                    >
                      <Button variant="btn-transparent">
                        <img src={fundidea3} alt=""/>  <br/>
                        <span>Oct 2020</span>
                        <p>3) Fund Launch</p>
                      </Button>
                    </OverlayTrigger>
                ))}
              </div>
            </Col>

            <Col sm={12} lg={2} md={2}>
              <div className="roadTwo text-center">
                {['top'].map((placement4) => (
                    <OverlayTrigger
                        trigger="hover"
                        key={placement4}
                        placement={placement4}
                        overlay={
                          <Popover id={`popover-positioned-${placement4}`}>
                            <Popover.Content>
                              We plan for an <strong>aggressive Marketing</strong> Campaign to establish a solid user base. We believe everyone should have the opportunities that whales do. We will capitalize on the meme factor. <strong>AMA’s, Partnerships, Influencers</strong> and heavy <strong>Media</strong> are planned. Having the most <strong>Chad Community</strong> on Crypto wil help.
                            </Popover.Content>
                          </Popover>
                        }
                    >
                      <Button variant="btn-transparent">
                        <img src={fundidea4} alt=""/>  <br/>
                        <span>Q4 2020</span>
                        <p>4) Establising User Base</p>
                      </Button>
                    </OverlayTrigger>
                ))}
              </div>
            </Col>



            <Col sm={12} lg={2} md={2}>
              <div className="roadOne text-center">
                {['top'].map((placement5) => (
                    <OverlayTrigger
                        trigger="hover"
                        key={placement5}
                        placement={placement5}
                        overlay={
                          <Popover id={`popover-positioned-${placement5}`}>
                            <Popover.Content>
                              As our Fund user base grows we will progressive dilute the fund <strong>OBELIX into ETH/USD</strong> and will start <strong>investing as a whale,</strong> governed by the Council Mastermind, with proposals voted by the Senate. We will <strong>collectively participate</strong> and have <strong>advantages</strong> of orders of magnitude that we wouldn’t have as sole investors.

                            </Popover.Content>
                          </Popover>
                        }
                    >
                      <Button variant="btn-transparent">
                        <img src={fundidea5} alt=""/> <br/>
                        <span>Q4 2020/Q1 2021</span>
                        <p>5) Whale Investing </p>
                      </Button>
                    </OverlayTrigger>
                ))}

              </div>
            </Col>



            <Col sm={12} lg={2} md={2}>
              <div className="roadTwo text-center">
                {['top'].map((placement5) => (
                    <OverlayTrigger
                        trigger="hover"
                        key={placement5}
                        placement={placement5}
                        overlay={
                          <Popover id={`popover-positioned-${placement5}`}>
                            <Popover.Content>
                              Time Locked Fund OBELIX tokens will finish being distributed. Fund will be fully off the chain in ETH/USDT for investing. <strong>OBELIX tokens</strong> will represent it’s <strong>fund users</strong> that wil collect the Fund Profits. The token performance will be directily correlated with the Fund performance. The bigger the fund the greater it’s user advantages. Having an instrument to make <strong>passive income</strong> for the Community <strong>regardless of market conditions</strong> is a tremendous <strong>value add for UTY.</strong>
                            </Popover.Content>
                          </Popover>
                        }
                    >
                      <Button variant="btn-transparent">
                        <img src={fundidea6} alt=""/> <br/>
                        <span>Mar 2021</span>
                        <p>6) Maturation at 6 months</p>
                      </Button>
                    </OverlayTrigger>
                ))}

              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </Fragment>
  );
};
export default Roadmap;