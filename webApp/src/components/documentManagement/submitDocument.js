import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap'
import DocumentUploader from './documentUploader';
import './document.css';
import { addDocuments } from '../../redux/actions/documentActions';
import { getAllWorkshops } from '../../redux/actions/workshopActions';
import { getAllSubmissions } from '../../redux/actions/submissionActions';
import { RESEARCH, W_PROPOSAL } from '../../redux/constants'

class submitDocument extends Component {

    state = {
        document: {
            userId: "test1",
            activityId: "",
            type: "",
            file: ''
        },
        alert: {
            open: false
        }

    }

    handleUpload = async (e) => {

        e.preventDefault();
        console.log(this.state);

        const reader = new FileReader();

        reader.readAsDataURL(this.props.documents[0]);
        reader.onloadend = () => {
            this.setState({...this.state,document: {...this.state.document, file: reader.result }}, () => {
                this.props.addDocuments(this.state.document);
            });
        }

    }

    componentDidMount(){

        this.props.getAllSubmissions();
        this.props.getAllWorkshops();
    }

    render() {

        console.log(this.props.activities);

        return (
            <form className="main" onSubmit={this.handleUpload} >
                {this.state.alert.open ? <Alert key="1" variant="success" className="container">
                    Record added successfully!
            </Alert> : (null)}
                <Form.Group>
                    <Form.Label>Select submission activity( Worksop/Research )</Form.Label>
                    <Form.Control  as="select" name="activityId" onChange={(e) => this.setState({ ...this.state, document: { ...this.state.document, activityId: e.target.value, type: this.props.activities.find(act => act._id == e.target.value).topic ?  RESEARCH:W_PROPOSAL} })}>
                        <option>Select an activity</option>
                        {this.props.activities ? this.props.activities.filter(act => act.topic ?  (Date.parse(act.deadline) > Date.parse(new Date().toString())):(act.workshopName ? true : false)).map(act => {
                            return <option key={act._id} value={act._id}>{act.topic ? (act.topic + ' - ' + 'Research'):(act.workshopName + ' - ' + 'Workshop')}</option>
                        }) : (null)}
                    </Form.Control>
                </Form.Group>
                    <DocumentUploader />
                    <Button type="submit" className="btn btn-primary">Upload</Button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    
    documents: state.document.documents,
    activities: [...state.submission.submissions,...state.workshop.workshops]
    
})

export default connect(mapStateToProps, {addDocuments,getAllWorkshops,getAllSubmissions})(submitDocument)