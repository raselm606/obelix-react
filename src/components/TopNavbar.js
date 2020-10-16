import React, {Component, Fragment} from 'react';
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from "../assets/images/landing/logo.png"
import BannerAreaHomepage from "./BannerAreaHomepage";
import {Link, animateScroll as scroll} from "react-scroll";
import {NavLink} from "react-router-dom";

class TopNavbar extends Component {
    render() {
        return (
            <Fragment>
                <div className="topNavbar">
                    <Container>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="/" onClick={()=> scroll.scrollToTop()}>
                                <Link to="/"><img className="logoImg" src={Logo} alt=""/></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="#"><Link to="whatisObelix" spy={true} smooth={true} duration={200}>What is Obelix?</Link></Nav.Link>
                                    <Nav.Link href="#"><Link to="Rewards" spy={true} smooth={true} duration={200}>Rewards</Link></Nav.Link>
                                    <Nav.Link href="#"><Link to="Roadmap" spy={true} smooth={true} duration={200}>Roadmap</Link></Nav.Link>
                                    <Nav.Link href="#"><Link to="Faq" spy={true} smooth={true} duration={200}>FAQ</Link></Nav.Link>
                                    <Nav.Link href="#"><a onClick={()=> window.open("https://unitydao.biz",'_blank')} href="">UnityDAO</a></Nav.Link>
                                </Nav>

                                <Nav className="ml-auto">
                                    <div className="btnMain">
                                        <NavLink to="/stake" className="btn btn-primary">Stake</NavLink>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>

                    <BannerAreaHomepage/>
                </div>

            </Fragment>
        );
    }
}

export default TopNavbar;