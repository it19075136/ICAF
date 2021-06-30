import React, { Component } from 'react'
// import { AvForm, AvField } from 'availity-reactstrap-validation';
// import { Button, Form, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { postUser } from '../../redux/actions/singupActions'
import './userProfile.css';
import jwt from 'jsonwebtoken';
class userProfile extends Component {
    // state = {
    //     user: {
    //         name: '',
    //         email: '',
    //         password: '',
    //         gender: '',
    //         type: '',
    //         phoneNumber: ''
    //     },
    //     alert: {
    //         open: false,
    //         text: "Record added successfully!"
    //     },
    //     originalPassword: ""
    // }
    // componentDidMount(

    // )
    // componentDidMount(){
        
    // }
    render() {
        const item=localStorage.getItem("user");
        const decodeItem = jwt.decode(item);
        // const handleChange = (e) => {
        //     console.log(this.state);
        //     this.setState({
        //         ...this.state,
        //         user: { ...this.state.user, [e.target.name]: e.target.value }
        //     })
        // }
        // const handleChangePassword = (e) => {
        //     this.setState({
        //         ...this.state,
        //         originalPassword: e.target.value
        //     })
        // }
        // const handlelSubmit = (e) => {
        //     e.preventDefault();
        //     console.log(this.state);
        //     console.log(this.state.user);
        //     if (this.state.user.name === "" || this.state.user.email === "" || this.state.user.type === "" || this.state.user.phoneNumber === "" || this.state.user.password === "" || !this.state.user.email.includes("@") || this.state.user.gender === "") {
        //         this.setState({
        //             ...this.state,
        //             alert: { ...this.state.alert, open: true, text: "fill all the details" }
        //         })
        //         setTimeout(() => {
        //             this.setState({
        //                 ...this.state,
        //                 alert: { ...this.state.alert, open: false, text: "fill all the details" }
        //             })
        //         }, 6000)
        //     } //checking if any field is empty
        //     else if (this.state.user.password !== this.state.originalPassword) {
        //         this.setState({
        //             ...this.state,
        //             alert: { ...this.state.alert, open: true, text: "password are deferent" }
        //         })
        //         setTimeout(() => {
        //             this.setState({
        //                 ...this.state,
        //                 alert: { ...this.state.alert, open: false, text: "password are deferent" }
        //             })
        //         }, 6000)
        //     }
        //     else {
        //         this.props.postUser(this.state.user).then(res => {
        //             console.log('inside postuser action in singup component');
        //             if (res.email === this.state.user.email) {
        //                 console.log('Record added successfully!')
        //                 this.setState({
        //                     ...this.state,
        //                     alert: { ...this.state.alert, open: true, text: "Record added successfully!" }
        //                 })
        //                 setTimeout(() => {
        //                     this.setState({
        //                         ...this.state,
        //                         alert: { ...this.state.alert, open: false, text: "Record added successfully!" }
        //                     })
        //                 }, 6000)
        //                 window.location.href='/';
        //             }
        //             else {
        //                 this.setState({
        //                     ...this.state,
        //                     alert: { ...this.state.alert, open: true, text: "email already exist" }
        //                 })
        //                 setTimeout(() => {
        //                     this.setState({
        //                         ...this.state,
        //                         alert: { ...this.state.alert, open: false, text: "email already exist" }
        //                     })
        //                 }, 6000)
        //             }
                    // const {token} = res;
                    // localStorage.setItem('user',token);
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
        //             console.log(res)
        //         }).catch((err) => {

        //             console.log(err)
        //         })
        //     }

        // }
        return (
            <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    {/* <div className="col-md-4"> */}
                        {/* <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div> */}
                    {/* </div> */}
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {decodeItem.name}
                                    </h5>
                                    <h6>
                                        {decodeItem.type}
                                    </h6>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-md-4">
                        <div className="profile-work">
                        
                        </div>
                    </div> */}
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Kshiti123</p>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{decodeItem.name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{decodeItem.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>0{decodeItem.phoneNumber}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{decodeItem.type}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{decodeItem.gender}</p>
                                            </div>
                                        </div>
                            </div>
                            {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        )
    }
}
export default connect(null, {  })(userProfile)