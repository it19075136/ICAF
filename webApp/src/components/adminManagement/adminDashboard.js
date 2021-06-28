import React, { Component } from 'react';
import './admin.css'
import { connect } from 'react-redux';
import { getAllDocuments, postDocumentApprove } from '../../redux/actions/adminActions';
import axios from 'axios';
import { Button, Card, Container, Row, Col, Modal, Table } from 'react-bootstrap';
import { NutFill } from 'react-bootstrap-icons';
import FilePreviewer from 'react-file-previewer';

class adminDashboard extends Component {
    constructor(props) {
        super(props);

        this.setShow = this.setShow.bind(this);
        this.approveOrRefuse = this.approveOrRefuse.bind(this);
        this.setShowMiniModal = this.setShowMiniModal.bind(this);

        this.state = {
            docs: [],
            show: false,
            modalData: [],
            showMiniModal: false,
            modalUrl : ''


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
        this.setState({
            modalData: info,
            show: data
        })
    }

    setShowMiniModal(data,url) {
        console.log('url: ', url);
        this.setState({

            showMiniModal: data,
            modalUrl : url
        })
    }

    approveOrRefuse(data) {
        console.log('data approveOrRefuse: ', data);
        const { postDocumentApprove } = this.props;
        let values = {};

        values.id = data._id;
        values.status = 'APPROVED';
        postDocumentApprove(values);
    }

    render() {
        const { docs, show, fullscreen, modalData, showMiniModal,modalUrl } = this.state;
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
                    size="xl"
                // dialogClassName="modal-style-custom"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Type</th>
                                    <th>Preview</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {modalData ? modalData.map(e =>

                                    <tr>
                                        <td>{e.status}</td>
                                        <td>{e.type}</td>
                                        <td>
                                            <Button
                                                // onClick={() =>
                                                //  <FilePreviewer file={{
                                                //     url:e.fileUrl }}
                                                // />
                                                //  }
                                                onClick={() => this.setShowMiniModal(true,e.fileUrl)}
                                            >View File</Button>

                                        </td>
                                        <td>{e.status == 'APPROVED' ? 'Already Approved' : <Button variant="primary" onClick={() => this.approveOrRefuse(e)}>{e.status == 'PENDING' ? 'Approve' : 'Refuse'}</Button>}</td>
                                    </tr>

                                )
                                    :
                                    <tr>
                                        <td>No Data</td>
                                        <td>No Data</td>

                                    </tr>
                                }
                            </tbody>
                        </Table>

                    </Modal.Body>
                </Modal>

                <Modal
                    show={showMiniModal}
                    onHide={() => this.setShowMiniModal(false,'')}
                    size="xl"
                // dialogClassName="modal-style-custom"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Preview</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <FilePreviewer file={{
                            url: modalUrl
                        }}
                        />
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
                                        <Button variant="primary" onClick={() => this.setShow(true, workshopArrayPending, 'W_PROPOSAL', 'PENDING')}>Go somewhere</Button>
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
                                        <Button variant="primary" onClick={() => this.setShow(true, workshopArrayApproved, 'W_PROPOSAL', 'APPROVED')}>Go somewhere</Button>
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
                                        <Button variant="primary" onClick={() => this.setShow(true, researchArrayPending, 'RESEARCH', 'PENDING')}>Go somewhere</Button>
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
                                        <Button variant="primary" onClick={() => this.setShow(true, researchArrayApproved, 'RESEARCH', 'APPROVED')}>Go somewhere</Button>
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
export default connect(mapStateToProps, { getAllDocuments, postDocumentApprove })(adminDashboard);