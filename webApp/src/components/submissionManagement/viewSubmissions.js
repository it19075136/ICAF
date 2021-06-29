import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Jumbotron, Table } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';
import "react-datepicker/dist/react-datepicker.css";
import '../admin.css'
import '../submissionManagement/submission.css'
import { getAllSubmissions, deleteSubmission } from '../../redux/actions/submissionActions'
import { getAllConference } from '../../redux/actions/conferenceActions'

class viewSubmissions extends Component {

    state = {
        submission: {
            topic: '',
            description: '',
            conferenceName: '',
            deadline: null
        }
    }

    constructor(props) {

        super(props);
        this.props.getAllConference();
        this.props.getAllSubmissions();
    }

    render() {
        console.log(this.props.conferences)
        console.log(this.props.submissions)

        return (
            <div className="body">
                <Jumbotron className="main">
                <h1>All submission topics</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Conference Name</th>
                                <th>Topic</th>
                                <th>Deadline</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.submissions && this.props.conferences.length != 0 ? this.props.submissions.map(submission => {
                                return (<tr>
                                    <td>{this.props.conferences.find(conference => conference._id == submission.conferenceId).conferenceName}</td>
                                    <td>{submission.topic}</td>
                                    <td>{submission.deadline}</td>
                                    <td><Pencil className="actions" onClick={() => console.log("edit")}/>   |  <Trash className="actions" onClick={() => this.props.deleteSubmission(submission._id)} /></td>
                                </tr>)
                            }) : <h3 className="container">No data</h3>}
                        </tbody>
                    </Table>
                </Jumbotron>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    submissions: state.submission.submissions,
    conferences: state.conference.conferences
});

export default connect(mapStateToProps, { getAllSubmissions, getAllConference, deleteSubmission })(viewSubmissions)