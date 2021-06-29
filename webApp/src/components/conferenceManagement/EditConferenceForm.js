import React, { Component } from 'react'
import { getAllConference, editConference, deleteConference } from '../../redux/actions/conferenceActions';
import { connect } from 'react-redux'
import './conference.css'


class EditConferenceForm extends Component {

    state = {
        conference: {
            status: ''
        }
    }

    // componentDidMount() {
    //     this.props.getAllConference();
    // }
    constructor(props) {
        super(props);
        this.props.getAllConference();
    }
    render() {
        console.log(this.props.conferences)
        return (
            <div className="body">
                <center><h1>ALL CONFERENCES</h1></center>
                <br />
                <div className="edit-table">
                    <table>
                        <tr className="table-primary">
                            <th>Conference</th>
                            <th>Description</th>
                            <th>Venue</th>
                            <th>Speaker | Designation</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Track | Description</th>
                            <th>Other</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                        {this.props.conferences != 0 ? this.props.conferences.map(conf => {
                            return (
                                <tr key={conf._id}>
                                    <td>{conf.conferenceName}</td>
                                    <td>{conf.conferenceDescription}</td>
                                    <td>{conf.conferenceVenue}</td>
                                    {conf.keynoteSpeaker.map(speaker => {
                                        return (

                                            <div>
                                                <td>{speaker.name}</td>
                                                <td>{speaker.designation}</td>
                                            </div>

                                        )
                                    })}
                                    <td>{conf.startDate}</td>
                                    <td>{conf.endDate}</td>
                                    {conf.tracks.map(track => {
                                        return (

                                            <div>
                                                <td>{track.name}</td>
                                                <td>{track.description}</td>
                                            </div>

                                        )
                                    })}
                                    
                                    <td>{conf.other}</td>
                                    <td>{conf.status}</td>
                                    <td>{conf.status == 'Approved' ? 
                                        <button type="button" className="btn btn-success" onChange={() => this.props.deleteConference(conf._id)}><i className="fas fa-thumbs-up"></i></button> : <button type="button" className="btn btn-primary" onClick={() => this.props.editConference(conf._id, conf.status)}><i className="fas fa-thumbs-down"></i></button>}</td>
                                </tr>
                            )
                        }) : <strong>No Conference Found!!!</strong>}

                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    conferences: state.conference.conferences
})

export default connect(mapStateToProps, { getAllConference, editConference, deleteConference })(EditConferenceForm);