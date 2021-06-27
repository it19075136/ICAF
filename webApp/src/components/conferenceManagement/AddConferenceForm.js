import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addConference } from '../../redux/actions/conferenceActions'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { TextareaAutosize } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import {Formik, FieldArray, Field} from 'formik';



class AddConferenceForm extends Component {

    state = {
        conference: {
            conferenceName: '',
            conferenceDescription: '',
            conferenceVenue: '',
            keynoteSpeaker: [{
                speakerName: '',
                speakerDesignation: ''
            }],
            startDate: '',
            endDate: '',
            tracks: [{
                trackName: '',
                trackDescription: ''
            }],
            status: 'not approved',
            other: ''
        }
    }

    render() {

        return (
            <div className="body">
                <Container component="main" maxWidth="sm">
                    <CssBaseline />
                    <div>
                        <center><h2>ADD CONFERENCE</h2></center>
                        <form noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="conferenceName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="conferenceName"
                                        label="Conference Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        variant="outlined"
                                        id="conferenceDescription"
                                        label="Conference Description"
                                        name="conferenceDescription"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="conferenceVenue"
                                        label="Conference Venue"
                                        name="conferenceVenue"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <label htmlFor="startDate" className="form-label">Start Date</label>
                                    <input
                                        variant="outlined"
                                        type="Date"
                                        fullWidth
                                        className="form-control"
                                        id="startDate"
                                        name="startDate"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <label htmlFor="endDate" className="form-label">End Date</label>
                                    <input
                                        variant="outlined"
                                        type="Date"
                                        fullWidth
                                        className="form-control"
                                        id="endDate"
                                        name="endDate"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="conference"
                                        type="text"
                                        id="conference"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"

                            >
                                ADD CONFERENCE
                            </Button>
                        </form>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    workshop: state.workshop
});
export default connect(mapStateToProps, { addConference })(AddConferenceForm);
