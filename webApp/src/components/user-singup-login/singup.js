import React, { Component } from 'react'

export default class singup extends Component {
    render() {
        return (
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    {/* <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col> */}
                    <AvForm>
                        <AvField name="originalEmail" label="Email" type="email" />
                        <AvField name="confirmationEmail" label="Email" type="email" validate={{ match: { value: 'originalEmail' } }} />
                    </AvForm>
                </Form.Group>
                        
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    {/* <Form.Label column sm={2}>
                        Password
                    </Form.Label> */}
                    {/* <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col> */}
                    <AvForm >
                        <AvField name="originalpassword" label="password" type="email" />
                        <AvField name="password" label="password" type="password" validate={{ match: { value: 'originalpassword' } }} />
                    </AvForm>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        phoneNumber
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="Number" placeholder="phoneNumber" />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Radios
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="Male"
                                id="Male"
                            />
                            <Form.Check
                                type="radio"
                                label="female"
                                name="female"
                                id="female"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}
