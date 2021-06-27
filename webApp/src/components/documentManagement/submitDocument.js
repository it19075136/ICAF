import React, { Component } from 'react';
import {connect} from 'react-redux';
import DocumentUploader from './documentUploader';
import './document.css'

class submitDocument extends Component {

    render() {
        console.log(this.props.documents)
        return (
            <div className="main">
                <DocumentUploader />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    documents: state.document.documents
})

export default connect(mapStateToProps,null)(submitDocument)