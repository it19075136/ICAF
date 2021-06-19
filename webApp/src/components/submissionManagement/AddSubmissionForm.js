import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddSubmissionForm extends Component {
    render() {
        return (
                <Form className="container">
                    <FormGroup>
                        <Label for="topic">Topic</Label>
                        <Input type="text" name="topic" id="topic" placeholder="Enter submission topic" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="conferenceId">Select conference</Label>
                        <Input type="select" name="conferenceId" id="conferenceId">
                            <option>Add options</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="exampleSelectMulti">Select Multiple</Label>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup> */}
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="deadline">Topic</Label>
                        <Input type="datetime" name="deadline" id="deadline" placeholder="Enter deadline" />
                    </FormGroup>
                    <br />
                    <Button color="primary">Add submission topic</Button>
                </Form>
        )
    }
}
