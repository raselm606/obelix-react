import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import FundPage from "../pages/FundPage";
import PoolPage from "../pages/PoolPage";
import StakePage from "../pages/StakePage";

class RouterApp extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/fund" component={FundPage}/>
                    <Route exact path="/pool" component={PoolPage}/>
                    <Route exact path="/stake" component={StakePage}/>
                </Switch>

            </Fragment>
        );
    }
}

export default RouterApp;