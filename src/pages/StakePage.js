import React, {Component, Fragment} from 'react';
import LeftSideMenu from "../components/LeftSideMenu";
import StakePageContent from "../components/StakePageContent";

class StakePage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <LeftSideMenu
                    activeStake="activeStake"
                    staking="Staking"
                    path="/stake"
                    stakeImgOn="onbtn d-none" stakeImgOff="pushbtn d-block ml-4"
                    fundImgOn="fundonn " fundImgOff="fundofff"
                    poolImgOff="poolofff " poolImgOn="poolonn"
                />
                <StakePageContent/>

            </Fragment>
        );
    }
}

export default StakePage;