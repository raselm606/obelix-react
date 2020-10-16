import React, { Fragment } from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';

const Faq = () => {
  return (
    <Fragment>
      <div className="FaqArea" id="Faq">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="faqTtile">
                <h2> Frequently Asked Questions</h2>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="accordionAll">
                <Accordion defaultActiveKey="0">


                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      <span>Why the name Obelix?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        Because if anybody, he is the one true Chad. Strong, chill and invulnerable with his magic potion from the Senate & Council. He will conquer great profits for us all. Memes should not be underestimated; their viral effect is enough to move entire generations and we will take full advantage of it.
                        </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      <span>Who is going to decide upon the Obelix fund movements?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        Every community member can propose an investment option as long as it includes some proper research and details on why it is a good investment. Ultimately its on the UnityDAO Council to decide, which option is the best.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      <span>Is there an incentive for community members to bring forth investment possibilities?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <div className="card-body">
                        Besides the profit sharing nature of Obelix we are also going to implement a certain incentive structure for successful investments.
                      </div>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      <span>Why are you keeping the decision making exclusively for the Council?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <div className="card-body">
                        This decision has multiple reasons:
                        <ul>
                          <li>- Council members have provably more at stake and are working towards the best future of the UnityDAO</li>
                          <li>- The Council isn’t called mastermind for no reason </li>
                          <li>- The decision making is more efficient in a smaller circle</li>
                          <li>- More public decision making neglects our chance for strategic movements</li>
                        </ul>
                      </div>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      <span>What is the purpose of Obelix?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <div className="card-body">
                        The purpose of Obelix is to generate profit through investments, which then gets shared with our community. We intend bring to the average investor, all of the advantages that large capital whales do have.
                      </div>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                      <span>How does the profit-sharing structure look like?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                      <div className="card-body">
                        50% Staker of the $OBELIX token <br/>

                        30% holder of >=10 $UTY according to their holdings <br/>

                        8% to further grow OBELIX <br/>

                        3.5% UTY buybacks -> add to liquidity <br/>
                        3.5% OBELIX buybacks -> add to liquidity <br/>

                        5% Founder & Maximus <br/>
                      </div>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                      <span>How do holders of $UTY benefit by Obelix?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                      <div className="card-body">
                        Obelix comes with a liquidity farming pool for the UTY / ETH pair on Uniswap and will reward liquidity provider with a share of $OBELIX token.
                        <br/>
                        Member of the Council and Senate of the UnityDAO are going to receive a share of all profits which are generated by Obelix, which gives the $UTY token extra value.
                      </div>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                      <span>What is the usecase of the $OBELIX token?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                      <div className="card-body">
                        Staker of the $OBELIX token can claim 50% of all the profits made by the Obelix fund.
                      </div>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="9">
                      <span>How can you guarantee, that the profit distribution is fair?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="9">
                      <div className="card-body">
                        Everything is public and traceable on the Ethereum blockchain and most of the distribution is done by smart contracts.
                      </div>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="12">
                      <span>Is the code going to be audited?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="12">
                      <div className="card-body">
                        Yes, the official audit will be released shortly after the OBELIX launch. On the meantime, feel free to check our code.
                      </div>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="13">
                      <span>Are we able to track fund movements?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="13">
                      <div className="card-body">
                        Yes, all fund movements are going to be publicly traceable.
                      </div>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="14">
                      <span>Are there safety mechanisms which guarantee the correct usage of funds?</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="14">
                      <div className="card-body">
                        We are exploring ways to introduce safety mechanisms based on a shared multisig wallet by multiple Council members.
                      </div>
                    </Accordion.Collapse>
                  </Card>



                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Faq;
