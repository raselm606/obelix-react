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

class FundWeeklyChart extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {
                    date: '07/09', obelix: 1,
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
    render(props) {
        return (
            <Fragment>
                <div className="fundchart">
                    <Alert varient="light">
                        <div className="stakeTablee">
                            <Container>

                                <Row  className="justify-content-center">
                                    <Col lg={9} md={12} sm={12}>
                                        <div className="tableStake ">
                                            <h3>{this.props.title}</h3>

                                        </div>
                                    </Col>
                                    <Col lg={9} md={9} sm={12} className=" " style={{borderRadius:'4px'}}>
                                        <div className="activeBarchart mb-5"
                                             style={{width:'100%', height:'250px', background:'#fff', borderRadius:'4px',
                                                 paddingRight:'20px', paddingTop:'20px', paddingBottom:'10px'}}>

                                            <ResponsiveContainer>
                                                <BarChart
                                                    width={100}
                                                    height={200}
                                                    scaleToFit={true}
                                                    data={this.state.data}
                                                    margin={{
                                                        top: 5, right: 3, left: 2, bottom: 5,
                                                    }}
                                                >

                                                    <CartesianGrid strokeDasharray="1 1" />
                                                    <XAxis dataKey="date" />
                                                    <YAxis dataKey="obelix"/>
                                                    <Tooltip />
                                                    <Bar barSize={20} borderRadious="8px" strokeWidth="8" dataKey="date" fill="#8884d8" />
                                                    <Bar barSize={20} strokeWidth="8" dataKey="obelix" fill="rgb(239,143,4)" />

                                                </BarChart>

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

export default FundWeeklyChart;