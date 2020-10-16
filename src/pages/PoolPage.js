import React, {Component, Fragment} from 'react';
import PoolPageContent from "../components/PoolPageContent";
import LeftSideMenu from "../components/LeftSideMenu";

class PoolPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <LeftSideMenu
                    activePool="activePool"
                    activeStake="activeStake"
                    staking="Pool"
                    path="/pool"
                    poolImgOn="poolonn d-none" poolImgOff="poolofff d-block ml-4"
                    fundImgOn="fundonn " fundImgOff="fundofff"
                    stakeImgOn="onbtn " stakeImgOff="pushbtn"

                />
                <PoolPageContent/>

            </Fragment>
        );
    }
}

export default PoolPage;