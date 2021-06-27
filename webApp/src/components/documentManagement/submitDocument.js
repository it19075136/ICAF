import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'
import DocumentUploader from './documentUploader';
import './document.css';
import {addDocuments} from '../../redux/actions/documentActions';

class submitDocument extends Component {

    state = {
        userId: "test3u",
        activityId: "test3av",
        type: "type3",
        status: "pending",
        file: ''
    }

    handleUpload = async (e) => {

        e.preventDefault();
        console.log(this.state);

        const reader = new FileReader();

        reader.readAsDataURL(this.props.documents[0]);
        reader.onloadend = () => {
            this.setState({ file: reader.result }, () => {
                this.props.addDocuments(this.state);
            });
        }

    }

    render() {

        return (
            <form className="main" onSubmit={this.handleUpload} >
                <DocumentUploader />
                <Button type="submit" className="btn btn-primary">Upload</Button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    documents: state.document.documents
})

export default connect(mapStateToProps, {addDocuments})(submitDocument)