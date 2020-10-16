import React, {Component, Fragment} from 'react';
import LeftSideMenu from "../components/LeftSideMenu";
import FundPageContent from "../components/FundPageContent";

class FundPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment >
                <LeftSideMenu

                    activePool="activePool"
                    activeStake="activeStake"
                    staking="Fund"
                    path="/fund"

                    activeFund="activeFund"

                    fundImgOn="fundonn d-none" fundImgOff="fundofff d-block ml-4"
                    poolImgOff="poolofff " poolImgOn="poolonn"
                    stakeImgOn="onbtn " stakeImgOff="pushbtn"

                />
                <FundPageContent/>

            </Fragment>
        );
    }
}

export default FundPage;