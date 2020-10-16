import React, {Component, Fragment} from 'react';
import fundlogo from "../assets/images/fund/fundlogo.png";
import {Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import stakeBtn from "../assets/images/landing/stakebtnon.png";
import stakeBtnOff from "../assets/images/landing/stakebtnoff.png";
import poolBtn from "../assets/images/landing/poolbtnon.png";
import poolBtnOff from "../assets/images/landing/poolbtnoff.png";
import fundBtn from "../assets/images/landing/fundbtnon.png";
import fundBtnOff from "../assets/images/landing/fundbtnoff.png";

class LeftSideMenu extends Component {
    constructor(props) {
        super(props);
        this.state={
            clickhide:false
        }
    }

    hidemenu =()=> this.setState({clickhide: !this.state.clickhide  });

    render(props) {
        return (
            <Fragment>
                <div className={this.state.clickhide ? "LeftSidebar lefftt" : "LeftSidebar leftheight"}>
                    <div className="leftbarArea text-center">
                        <Navbar  expand="lg">
                            <Navbar.Brand href="#home" >
                                <Link to="/"><img src={fundlogo} alt="fundlogo"/></Link>
                            </Navbar.Brand> <br/>


                            <button  onClick={this.hidemenu} type="button" aria-label="Toggle navigation"
                                    className="navbar-toggler"><span className="navbar-toggler-icon"></span>
                            </button>


                            <Navbar.Collapse  className={this.state.clickhide ? "d-block" : "d-none"}>
                                <Nav className="mr-autoo ">
                                    <Nav.Link href="#home"><NavLink to="/">Main page</NavLink></Nav.Link>
                                    <Nav.Link href="#link"><NavLink className={this.props.activeContract} to="/contract">Contract</NavLink></Nav.Link>
                                    <Nav.Link href="#link"><NavLink className={this.props.activeTrade} to="/trade">Trade</NavLink></Nav.Link>
                                    {/*<Nav.Link className={this.props.fundClass} href="#link">*/}
                                    {/*    <NavLink className={this.props.activeFund} to="/fund">{this.props.fund}*/}
                                    {/*    </NavLink></Nav.Link>*/}
                                    <Nav.Link className={this.props.stakingClass} href="#link">
                                        <NavLink className={this.props.activeStake} to={this.props.path}>{this.props.staking}</NavLink>
                                    </Nav.Link>
                                </Nav>


                                <div className="buttonMenu">
                                    <div className="stakeButton stakebttn text-center mt-5">
                                        <img className={this.props.stakeImgOn} src={stakeBtn} alt=""/>
                                        <Link to="/stake"> <img className={this.props.stakeImgOff} src={stakeBtnOff} alt=""/> </Link>

                                    </div>

                                    <div className="pooltarget poollargest text-center">
                                        <img className={this.props.poolImgOn} src={poolBtn} alt=""/>
                                        <Link to="/pool"> <img className={this.props.poolImgOff} src={poolBtnOff} alt=""/> </Link>
                                    </div>
                                    <div className="twobtn twobttn text-center ">
                                        <img className={this.props.fundImgOn} src={fundBtn} alt=""/>
                                        <Link to="/fund"> <img className={this.props.fundImgOff} src={fundBtnOff} alt=""/> </Link>
                                    </div>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default LeftSideMenu;