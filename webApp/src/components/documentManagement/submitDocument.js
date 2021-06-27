import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap'
import DocumentUploader from './documentUploader';
import './document.css'
import axios from 'axios'

class submitDocument extends Component {

    state = {
        userId:"test2u",
        activityId:"test2av",
        type:"type2",
        status:"pending",
    }

    handleUpload = (e) => {

        e.preventDefault();
        console.log(this.state);

        const formData = new FormData();

        console.log(this.props.documents[0]);

        formData.append("userId", this.state.userId);
        formData.append("activityId", this.state.activityId);
        formData.append("type", this.state.type);
        formData.append("status", this.state.status);
        formData.append("file", this.props.documents[0]);

        axios.post('http://localhost:5000/document',formData).then((res) => { // redux action will be added later instead of this
            console.log("File uploaded!")
        })
    }

    render() {

        return (
            <form className="main" encType="multipart/form-data" onSubmit={this.handleUpload} >
                <DocumentUploader />
                <Button type="submit" className="btn btn-primary">Upload</Button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    documents: state.document.documents
})

export default connect(mapStateToProps,null)(submitDocument)