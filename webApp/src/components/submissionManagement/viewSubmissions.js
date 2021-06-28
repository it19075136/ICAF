import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, Button, Badge } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import '../admin.css'
import '../submissionManagement/submission.css'
import { getAllSubmissions } from '../../redux/actions/submissionActions'
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

    componentDidMount() {

        this.props.getAllConference();
        this.props.getAllSubmissions();
    }

    render() {
        console.log(this.props.conferences)
        console.log(this.props.submissions)

        return (
            <div className="body">
                <div className="main">
                <h1>All submission topics</h1>
                {this.props.submissions.map(submission => {
                    return  (<Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{submission.topic} - {this.props.conferences.filter(conference => conference._id == submission.conferenceId)[0].conferenceName}</Card.Title>
                        <Card.Text>
                            <h5>{submission.deadline}</h5>
                            <p>{submission.description}</p>
    </Card.Text>
                    </Card.Body>
                </Card>)
                })}
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    submissions: state.submission.submissions,
    conferences: state.conference.conferences
});

export default connect(mapStateToProps, { getAllSubmissions, getAllConference })(viewSubmissions)