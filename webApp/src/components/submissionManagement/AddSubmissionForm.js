import React, {Component} from 'react'
import {connect} from 'react-redux';
import { Button, Form, Alert } from 'react-bootstrap';
import './submission.css'
import {addSubmission} from '../../redux/actions/submissionActions'

class AddSubmissionForm extends Component {

    state = {
      submission:{
        topic: '',
        description: '',
        conferenceId: '1',
        deadline: ''
      },
      alert: {
        open: false
      }
    }

    render() {

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.submission);
        this.props.addSubmission(this.state.submission);
        this.setState({...this.state,alert: {...this.state.alert,open: true}});
        setTimeout(() => {
          this.setState({...this.state,alert: {...this.state.alert,open: false}})
        }, 1000);
      }

      const handleChange = (e) => {
          this.setState({
            ...this.state,
            submission: {...this.state.submission,[e.target.name]: e.target.value}
          })
      }

        return (
          <div className="body">
            <Form className="container" onSubmit={handleSubmit}>
            <br />
            {this.state.alert.open ? <Alert key="1" variant="success" className="container">
              Record added successfully!
            </Alert> : (null) }
            <Form.Group>
              <Form.Label>Topic</Form.Label>
              <Form.Control type="text" name="topic" placeholder="Enter a topic" onChange={handleChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Select conference</Form.Label>
              <Form.Control as="select" name="conferenceId" onChange={handleChange}>
                <option key="1">1</option>
                <option key="2">2</option>
                <option key="3">3</option>
                <option key="4">4</option>
                <option key="5">5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Deadline</Form.Label>
              <Form.Control type="datetime" placeholder="Enter the deadline" name="deadline" onChange={handleChange} />
            </Form.Group>
            <br />  
            <Button type="submit" color="primary">Add Submission</Button>
          </Form>
          </div>
        )
    }
}

const mapStateToProps = (state) => ({
  submission: state.submission
});

export default connect(mapStateToProps,{addSubmission})(AddSubmissionForm)