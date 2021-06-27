import React, { Component } from 'react';
import { connect } from 'react-redux';
import './workshop.css';
import { Alert } from 'react-bootstrap';
import { addWorkshop } from '../../redux/actions/workshopActions'
import {getAllConference} from '../../redux/actions/conferenceActions'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { TextareaAutosize } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';



class AddWorkshopForm extends Component {
    state = {
        workshop: {
            workshopName: '',
            workshopDescription: '',
            flyerURL: '',
            resourcePersons: [],
            conference: ''
        },
        alert: {
            open: false
        }
    }

    
    componentDidMount(){
        this.props.getAllConference();//Get all conference details available
    }

    render() {

        const conference = this.props.conference 
        console.log(conference)

        // const conferenceName = conference ? (conference.filter(conf => conf.status == 'Approved')) : null
        // console.log(conferenceName)

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state.workshop);
            this.props.addWorkshop(this.state.workshop);
            this.setState({...this.state, alert: {...this.state.alert, open:true }});
            setTimeout(() => {
                this.setState({
                    ...this.setState, alert: {...this.state.alert, open: false}
                })
            },1000);
        }

        const handleChange = (e) => {
            this.setState({
                    ...this.state,
                    workshop: {...this.state.workshop, [e.target.name]: e.target.value}
            })
        }
        return (
            <div className="body">
                <Container component="main" maxWidth="sm">
                    <CssBaseline />
                    <div>
                        <center><h2>ADD WORSHOP</h2></center>
                        <form onSubmit={handleSubmit}>
                            <br />
                            {this.state.alert.open ? <Alert key="1" variant="success" className="container">
                                Record added successfully!
                            </Alert> : (null)}
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="workshopName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="workshopName"
                                        label="Workshop Name"
                                        autoFocus
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        variant="outlined"
                                        id="workshopDescription"
                                        label="Workshop Description"
                                        name="workshopDescription"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="flyerURL"
                                        label="Flyer URL"
                                        name="flyerURL"
                                        onChange={handleChange}
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
                                        onChange={handleChange}
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
                                ADD WORKSHOP
                            </Button>
                        </form>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    workshop: state.workshop,
    conference: state.conference
});
export default connect(mapStateToProps, { addWorkshop, getAllConference })(AddWorkshopForm);
