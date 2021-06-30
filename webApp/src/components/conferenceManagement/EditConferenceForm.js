import React, { Component } from 'react'
import { getAllConference, editConference, deleteConference } from '../../redux/actions/conferenceActions';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux'
import './conference.css'


class EditConferenceForm extends Component {

    state = {
        conference: {
            id: '',
            status: ''
        },
        show: false,
        alert: {
            open: false,
            openError: false
        }
    }

    constructor(props) {
        super(props);
        this.props.getAllConference();
    }
    render() {

        const handleStatus = (e) => {
            e.preventDefault();
            console.log(this.state.conference);
            this.props.editConference(...this.state, conference.id,this.state.conference).then((res) => {
                res ? this.setState({ ...this.state, alert: { ...this.state.alert, open: true }, show: false }, () => {
                    setTimeout(() => {
                        this.setState({ ...this.state, alert: { ...this.state.alert, open: false } })
                    }, 1500)
                }) : this.setState({ ...this.state, alert: { ...this.state.alert, openError: true }, show: false }, () => {
                    setTimeout(() => {
                        this.setState({ ...this.state, alert: { ...this.state.alert, openError: false } })
                    }, 1500)
                })
            }).catch((err) => {
                console.log(err);
            });

        }

        const handleDelete = (id) => {
            this.props.deleteConference(id).then((res) => {
                console.log(res);
                res ? this.setState({ ...this.state, alert: { ...this.state.alert, open: true } }, () => {
                    setTimeout(() => {
                        this.setState({ ...this.state, alert: { ...this.state.alert, open: false } })
                    }, 1500)
                }) : this.setState({ ...this.state, alert: { ...this.state.alert, openError: true } }, () => {
                    setTimeout(() => {
                        this.setState({ ...this.state, alert: { ...this.state.alert, openError: false } })
                    }, 1500)
                })
            }).catch((err) => {
                console.log(err);
            })
        }
        
        console.log(this.props.conferences)
        return (
            <div className="body">
                <center><h1>ALL CONFERENCES</h1></center>
                {this.state.alert.open ? <Alert key="1" variant="success" className="container">
                    Action successful!
                </Alert> : (null)}
                {this.state.alert.openError ? <Alert key="1" variant="error" className="container">
                    Action failed!
                </Alert> : (null)}
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
                                    <td>{conf.startDate.split('T')[0]}</td>
                                    <td>{conf.endDate.split('T')[0]}</td>
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
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={handleDelete.bind(this, conf._id)}>
                                            <i className="fas fa-thumbs-up"></i>
                                        </button> : <button
                                            type="button"
                                            onSubmit={handleStatus}
                                            className="btn btn-primary"
                                            onClick={() => this.setState({
                                                ...this.state, conference: {
                                                    id: conf._id,
                                                    status: 'Approved'
                                                }
                                            }, () => this.setState({ ...this.state, show: true }))}>
                                            <i className="fas fa-thumbs-down"></i></button>}</td>
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