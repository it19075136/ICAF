import axios from 'axios';
import React, { Component } from 'react'
// import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Form,Col,Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import {postUser} from '../../redux/actions/singupActions'

 class singup extends Component {
    state={
        user:{
        name :'',
        email : '',
        password : '',
        gender : '',
        type : 'ela',
        phoneNumber : ''
    },
    alert:{
        open:false,
        text: "Record added successfully!"
    }
}
// componentDidMount(
    
// )
    render() {
        const handlechange=(e)=>{
                this.setState({
                    ...this.state,
                    user:{...this.state.user,[e.target.name]:e.target.value}
                })
        }
        const handlelSubmit=(e)=>{
            e.preventDefault();
            console.log(this.state);
            console.log(this.state.user);
            if(this.state.user.name === "" || this.state.user.email === "" || this.state.user.type === "" || this.state.user.phoneNumber === "" || this.state.user.password === "" || !this.state.user.email.includes("@")|| this.state.user.gender === ""){
                this.setState({
                    ...this.state,        


                    alert:{...this.state.alert,open:true,text:"fill all the details"}
                })
                setTimeout(()=>{
                    this.setState({
                        ...this.state,
                        alert:{...this.state.alert,open:false,text:"fill all the details"}
                    })
                },1000)
            } //checking if any field is empty
        else{
            this.props.postUser(this.state.user).then(res=>{
                
                if(res.email == this.state.user.email){
                    this.setState({
                        ...this.state,
                        alert:{...this.state.alert,open:true,text:"Record added successfully!"}
                    })
                    setTimeout(()=>{
                        this.setState({
                            ...this.state,
                            alert:{...this.state.alert,open:false,text:"Record added successfully!"}
                        })
                    },1000)
                }
                const {token} = res;
                localStorage.setItem('user',token);
                // this.setState({
                //     ...this.state,
                //     alert:true
                // })
                // setTimeout(()=>{
                //     this.setState({
                //         ...this.state,
                //         alert:false
                //     })
                // },1000)
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
        }
            
        }
        return (
            <Form>
                {this.state.alert.open ? <Alert key="1" variant="success" className="container">
                {this.state.alert.text}
            </Alert> : (null)}
                <Form.Group  controlId="formHorizontalEmail">
                    <Form.Label  sm={2}>
                    Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="name" name="name" placeholder="name" onChange={handlechange}/>
                    </Col>
                    {/* <AvForm>
                        <AvField name="originalEmail" label="Email" type="email" />
                        <AvField name="confirmationEmail" label="Email" type="email" validate={{ match: { value: 'originalEmail' } }} />
                    </AvForm> */}
                </Form.Group>
                <Form.Group controlId="formHorizontalEmail">
                    <Form.Label  sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" name="email" placeholder="Email" onChange={handlechange} />
                    </Col>
                    {/* <AvForm>
                        <AvField name="originalEmail" label="Email" type="email" />
                        <AvField name="confirmationEmail" label="Email" type="email" validate={{ match: { value: 'originalEmail' } }} />
                    </AvForm> */}
                </Form.Group>
                        
                <Form.Group  controlId="formHorizontalPassword">
                    <Form.Label  sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={handlechange} />
                    </Col>
                    {/* <AvForm >
                        <AvField name="originalpassword" label="password" type="email" />
                        <AvField name="password" label="password" type="password" validate={{ match: { value: 'originalpassword' } }} />
                    </AvForm> */}
                </Form.Group>
                <Form.Group  controlId="formHorizontalEmail">
                    <Form.Label  sm={2}>
                        phoneNumber
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="Number" name="phoneNumber" placeholder="phoneNumber" onChange={handlechange}/>
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group>
                        <Form.Label as="legend"  sm={2}>
                            Radios
                        </Form.Label>
                        <Col sm={10} >
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="gender"
                                id="Male"
                                value="Male"
                                onChange={handlechange}
                            />
                            <Form.Check
                                type="radio"
                                label="female"
                                name="gender"
                                id="female"
                                value="female"
                                onChange={handlechange}
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group  controlId="formHorizontalCheck" >
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>
                <Form.Group >
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" onClick={handlelSubmit}>Sign up</Button>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}
export default connect(null,{postUser})(singup)