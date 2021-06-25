import React, {Component} from 'react'
import {connect} from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import './submission.css'

class AddSubmissionForm extends Component {

    render() {
        return (
            <Form className="container">
            <br />
            <Form.Group>
              <Form.Label>Topic</Form.Label>
              <Form.Control type="text" placeholder="Enter a topic" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Select conference</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            {/* <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Example multiple select</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group> */}
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Deadline</Form.Label>
              <Form.Control type="datetime" placeholder="Enter the deadline" />
            </Form.Group>
            <br />  
            <Button color="primary">Add Submission</Button>
          </Form>
        )
    }
}

const mapStateToProps = (state) => ({
  submission: state.submission
});

export default connect(mapStateToProps,null)(AddSubmissionForm)