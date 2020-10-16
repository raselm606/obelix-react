import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";


class Disclaimer extends Component {
    constructor(){
        super();
        this.state={
            show:false
        }
    };

    handleClose =()=> this.setState({show:false});
    handleShow =()=> this.setState({show:true});


    render() {
        return (
            <Fragment>

                <div className="disclimer mt-3">
                    <span onClick={this.handleShow}>
                        Legal Disclaimer
                    </span>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}
                       centered  size="lg">
                    <Modal.Header closeButton className="modhed">

                    </Modal.Header>
                    <Modal.Body>
                        <div className="legaldess">
                            <Container>
                                <Row>
                                    <Col lg={12} sm={12} md={12}>
                                        <div className="titledis text-center">
                                            <h3>Legal Disclaimer</h3>
                                        </div>
                                    </Col>

                                    <Col lg={12} sm={12} md={12}>
                                        <div className="disdis mb-4 mt-5">
                                            <h5>TERMS AND CONDITIONS</h5>
                                            <p><a  href="https://unitydao.biz/" target="_blank" >https://unitydao.biz/</a> , <a href="https://obelix.fund" target="_blank" >https://obelix.fund</a>, UTY Council and its members, employees, agents, representatives, suppliers and service providers (collectively “UTY council”) provides this website (the “Site”) and the telegram channels https://t.me/OfficialUNTDAO for informational purposes only. Use of and access to the Site and the Telegram Channels, the information, materials, services, and other content available on or through the Site (“Content”) or telegram channels, are subject to these terms of use and all applicable laws.</p>
                                        </div>
                                        <div className="disdis mb-4 ">
                                            <h5>NO INVESTMENT ADVICE</h5>
                                            <p>The Content is for informational purposes only, you should not construe any such information or other material as legal, tax, investment, financial, or other advice. Nothing contained on our Site and Telegram Channels constitutes a solicitation, recommendation, endorsement, or offer by UTY members or any third party service provider to buy or sell any Crypto currency or other financial instruments in this or in in any other jurisdiction in which such solicitation or offer would be unlawful under the securities laws of such jurisdiction.</p>
                                            <p>All Content on this site is information of a general nature and does not address the circumstances of any individual or entity. Nothing in the Site and Telegram channels constitutes professional and/or financial advice, nor does any information on the Site and on the Telegram channels constitute a comprehensive or complete statement of the matters discussed or the law relating thereto. UTY Council is not a fiduciary by virtue of any person’s use of or access to the Site or Content. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other Content on the Site or on telegram channels before making any decisions based on such information or other Content. In exchange for using the Site, you agree not to hold UTY Council, its affiliates or any third party service provider liable for any possible claim for damages arising from any decision you make based on information or other Content made available to you through the Site or Telegram Channels.</p>

                                        </div>
                                        <div className="disdis mb-4 ">
                                            <h5>INVESTMENT RISKS</h5>
                                            <p>There are risks associated with investing in Crypto Tokens. Investing in Crypto Tokens or Crypto Funds involve risk of loss. Loss of principal is possible. Some high-risk investments may use leverage, which will accentuate gains & losses.
                                            </p>
                                        </div>

                                        <div className="disdis mb-4 ">
                                            <h5>THIRD PARTY LINKED SITES</h5>
                                            <p>
                                                As a convenience to you, UTY Council may provide hyperlinks to web sites operated by third parties. When you select these hyperlinks, you will be leaving the UTY site. Because UTY has no control over such sites or their content, UTY is not responsible for the availability of such external sites or their content, and UTY does not adopt, endorse or nor is responsible or liable for any such sites or content, including advertising, products or other materials, on or available through such sites or resources. Other web sites may provide links to the Site or Content with or without our authorization. UTY Council does not endorse such sites and shall not be responsible or liable for any links from those sites to the Site or Content, or for any content, advertising, products or other materials available on or through such other sites, or any loss or damages incurred in connection therewith. UTY Council may, in its sole discretion, block links to the Site and Content without prior notice
                                            </p>

                                            <p style={{textTransform:'uppercase', fontWeight:'bold'}}>YOUR USE OF THIRD PARTY WEB SITES AND CONTENT, INCLUDING WITHOUT LIMITATION, YOUR USE OF ANY INFORMATION, DATA, ADVERTISING, PRODUCTS, OR OTHER MATERIALS ON OR AVAILABLE THROUGH SUCH WEB SITES, IS AT YOUR OWN RISK AND IS SUBJECT TO THEIR TERMS OF USE.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="modfoot">
                        <Button variant="primary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Disclaimer;