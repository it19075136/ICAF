import React, { Component } from 'react';
import './admin.css'
import { connect } from 'react-redux';
import { getAllDocuments } from '../../redux/actions/adminActions';
import axios from 'axios';
import { Button, Card, Container, Row, Col, Modal, Table } from 'react-bootstrap';
class adminDashboard extends Component {
    constructor(props) {
        super(props);

        this.setShow = this.setShow.bind(this);

        this.state = {
            docs: [],
            show: false,
            modalData : []


        }
    }

    componentDidMount() {
        const { getAllDocuments } = this.props;
        getAllDocuments();


        // axios.get('http://localhost:5000/document/').then(
        //     res => {
        //         this.setState({
        //             docs : res.data
        //         })
        //     }
        // )
    }

    setShow(data, info, type, status) {
        console.log('status: ', status);
        console.log('type: ', type);
        console.log('info: ', info);
        this.setState({
            modalData : info,
            show: data
        })
    }

    render() {
        const { docs, show, fullscreen, modalData } = this.state;
        const { documents } = this.props.admin;

        let researchArray = documents.filter((e) => {
            return e.type == 'RESEARCH'
        })

        let workshopArray = documents.filter((e) => {
            return e.type == 'W_PROPOSAL'
        })

        let workshopArrayPending = workshopArray.filter((e) => {
            return e.type == 'W_PROPOSAL' && e.status == 'PENDING'
        })

        let workshopArrayApproved = workshopArray.filter((e) => {
            return e.type == 'W_PROPOSAL' && e.status == 'APPROVED'
        })
        
        let researchArrayPending = researchArray.filter((e) => {
            return e.type == 'RESEARCH' && e.status == 'PENDING'
        })

        let researchArrayApproved = researchArray.filter((e) => {
            return e.type == 'RESEARCH' && e.status == 'APPROVED'
        })
        
        return (
            <div className="body">


                <Modal
                    show={show}
                    onHide={() => this.setShow(false)}
                    fullscreen={true}
                    className="modal-style-custom"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>                                  
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                              
                            </tbody>
                        </Table>

                    </Modal.Body>
                </Modal>

                <div>
                    <Container>
                        <Row className="container-row-custom">
                            <Col sm={6} className="container-column-custom">
                                <Card className="text-center card-width">
                                    <Card.Header> Workshop Proposals</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Pending</Card.Title>
                                        <Card.Text className="card-text-style">
                                            {
                                                workshopArrayPending.length
                                            }
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => this.setShow(true, workshopArrayPending,'W_PROPOSAL','PENDING')}>Go somewhere</Button>
                                    </Card.Body>
                                    {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                                </Card>
                            </Col>
                            <Col sm={6} className="container-column-custom">
                                <Card className="text-center card-width">
                                    <Card.Header> Workshop Proposals</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Approved</Card.Title>
                                        <Card.Text className="card-text-style">
                                            {
                                               workshopArrayApproved.length
                                            }
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => this.setShow(true, workshopArrayApproved,'W_PROPOSAL','APPROVED')}>Go somewhere</Button>
                                    </Card.Body>
                                    {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                                </Card>
                            </Col>
                        </Row>
                        <Row className="container-row-custom">
                            <Col sm={6} className="container-column-custom">
                                <Card className="text-center card-width">
                                    <Card.Header>Research Papers</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Pending</Card.Title>
                                        <Card.Text className="card-text-style">
                                            {
                                               researchArrayPending.length
                                            }
                                        </Card.Text>
                                        <Button variant="primary"  onClick={() => this.setShow(true, researchArrayPending,'RESEARCH','PENDING')}>Go somewhere</Button>
                                    </Card.Body>
                                    {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                                </Card>
                            </Col>
                            <Col sm={6} className="container-column-custom">
                                <Card className="text-center card-width">
                                    <Card.Header>Research Papers</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Approved</Card.Title>
                                        <Card.Text className="card-text-style">
                                            {
                                                researchArrayApproved.length
                                            }
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => this.setShow(true, researchArrayApproved,'RESEARCH','APPROVED')}>Go somewhere</Button>
                                    </Card.Body>
                                    {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                                </Card>
                            </Col>
                        </Row>
                    </Container>


                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => ({
    admin: state.admin
});
export default connect(mapStateToProps, { getAllDocuments })(adminDashboard);