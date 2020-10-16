import React, {Component, Fragment} from 'react';
import {Alert, Col, Container, Row} from "react-bootstrap";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

class FundChart extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {
                    date: '07/09', obelix: 0,
                },
                {
                    date: '21/09', obelix: 5,
                },
                {
                    date: '07/10', obelix: 9,
                },
                {
                    date: '21/10', obelix: 11,
                },
                {
                    date: '07/11', obelix: 7,
                },
                {
                    date: '21/11', obelix: 7,
                },
                {
                    date: '07/12', obelix: 7,
                },
                {
                    date: '21/12', obelix: 7,
                },
                {
                    date: '07/01', obelix: 9,
                },
                {
                    date: '21/01', obelix: 10,
                },
                {
                    date: '07/02', obelix: 11,
                },
                {
                    date: '21/02', obelix: 12,
                },
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <div className="fundchart">
                    <Alert varient="light">
                        <div className="stakeTable mt-5">
                            <Container>

                                <Row className="justify-content-center">
                                    <Col lg={9} sm={12}>
                                        <div className="tableStake ">
                                            <h3>OBELIX Fund Performance</h3>

                                        </div>
                                    </Col>
                                    <Col  lg={9} md={9} sm={12} className="mb-2" style={{borderRadius:'4px'}}>
                                        <div className="activeBarchart mb-3" style={{width:'100%', height:'250px', background:'#fff', borderRadius:'4px',
                                            paddingRight:'20px', paddingTop:'20px', paddingBottom:'10px'}}  >

                                            <ResponsiveContainer>
                                                <LineChart
                                                    width={100}
                                                    height={200}
                                                    scaleToFit={true}
                                                    data={this.state.data}
                                                    margin={{
                                                        top: 5, right: 0, left: 0, bottom: 5,
                                                    }}
                                                >

                                                    <XAxis dataKey="date" fill="#fff"  fontSize={13}/>
                                                    <YAxis dataKey="obelix" fontSize={13}/>
                                                    <Tooltip />

                                                    <Line type="monotone" dataKey="date" stroke="#8884d8" activeDot={{ r: 28 }} />
                                                    <Line type="monotone"  strokeWidth="8" dataKey="obelix" stroke="rgb(239,143,4)" />

                                                </LineChart>

                                            </ResponsiveContainer>
                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Alert>
                </div>

            </Fragment>
        );
    }
}

export default FundChart;