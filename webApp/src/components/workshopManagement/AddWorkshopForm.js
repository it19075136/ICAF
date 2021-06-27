import React, { Component } from 'react';
import { connect } from 'react-redux';
import './workshop.css';
import { addWorkshop } from '../../redux/actions/workshopActions'
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
        }
    }

    render() {

        return (
            <div className="body">
                <Container component="main" maxWidth="sm">
                    <CssBaseline />
                    <div>
                        <center><h2>ADD WORSHOP</h2></center>
                        <form noValidate>
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
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="flyer"
                                        label="Flyer URL"
                                        name="flyer"
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
    workshop: state.workshop
});
export default connect(mapStateToProps, {addWorkshop})(AddWorkshopForm);
