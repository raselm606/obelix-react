import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faMediumM,faGithub,faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { Col, Container,  Row} from 'react-bootstrap';
import Disclaimer from "./Disclaimer";


const Footer  = () => {

    return (
      <Fragment>
        <div className="FooterArea">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <div className="footerText text-center">
                  <p>UnityDAO - Home of the Obelix Fund</p>

                  <div className="socialIcon">
                    <span onClick={() => window.open(
                          ' https://twitter.com/UnityDAO',
                          '_blank'
                        )}>
                      <FontAwesomeIcon icon={faTwitter}/>
                    </span>
                    <span onClick={()=> window.open('https://medium.com/@utydao','_blank')}><FontAwesomeIcon icon={faMediumM}/></span>
                    <span onClick={()=> window.open('https://github.com/','_blank')}><FontAwesomeIcon icon={faGithub}/></span>
                    <span onClick={()=> window.open('https://t.me/OfficialUNTDAO','_blank')}><FontAwesomeIcon icon={faTelegramPlane}/></span>
                  </div>

                    <Disclaimer/>


                </div>
              </Col>
            </Row>
          </Container>
        </div>

      </Fragment>
    );
};

export default Footer;