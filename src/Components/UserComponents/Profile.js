import React from "react";
import Axios from "axios";
import { Container, Alert, Button, Modal, Form } from "react-bootstrap";
import { Route } from "react-router-dom";
import Header from "../Header/HeaderUser";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: {},
            config: {
                headers: { "Authorization": `Bearer ${localStorage.getItem("userToken")}` }
            },
            show: false
        };
    };

    componentDidMount() {
        Axios.get(
            "http://localhost:3007/users/profile",
            this.state.config
        ).then((response) => {
            this.setState({
                userProfile: response.data
            });
        }).catch((err) => {
            console.log(err);
        });
    };

    handleEdit = (profileId) => {
        Axios.put(
            `http://localhost:3007/users/${profileId}`,
            this.state.userProfile,
            this.state.config
        )
        .then(response => {
            location.href="/userprofile"
        })
        .catch(err => {
            console.log(err);
        });
    };

    handleDelete = (profileId) => {
        Axios.delete(
            `http://localhost:3007/users/${profileId}`,
            this.state.config
        )
        .then(()=>{
            localStorage.removeItem("userToken"),
            location.href="/login"
        });
    };

    handleOpen = (currentProfile) => {
        this.setState({
            show: true,
            userProfile: currentProfile
        });
    };

    handleClose = () => {
        this.setState({
            show: false
        });
    };

    nameEditHandler = (e) => {
        this.setState({userProfile: {...this.state.userProfile,["username"]:e.target.value}})
    };

    addressEditHandler = (e) => {
        this.setState({userProfile: {...this.state.userProfile,["address"]:e.target.value}})
    };

    emailEditHandler = (e) => {
        this.setState({userProfile: {...this.state.userProfile,["email"]:e.target.value}})
    };

    phoneEditHandler = (e) => {
        this.setState({userProfile: {...this.state.userProfile,["phone"]:e.target.value}})
    };

    render() {
        if (this.state.userProfile === null) {
            return (<h3>Loading.....</h3>);
        } else {
            return (
                <React.Fragment>
                    <Route component={Header} />
                    <Container className="mt-4">
                        <div>
                            <h1>User profile</h1>
                        </div>
                        <div>
                            <Alert variant="dark">
                                <Alert.Heading>Name: {this.state.userProfile.username}</Alert.Heading>
                                <p>Address: {this.state.userProfile.address}</p>
                                <p>Email: {this.state.userProfile.email}</p>
                                <p>Phone: {this.state.userProfile.phone}</p>
                                <hr />
                                <p className="mb-0">
                                    <Button className="btnAction" onClick={()=> this.handleOpen(this.state.userProfile)}>Edit my account</Button>
                                    <Button className="btnAction" onClick={()=> this.handleDelete(this.state.userProfile._id)}>Delete my account</Button>
                                </p>
                            </Alert>
                        </div>
                        <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                            <Modal.Header className="modalHeaderFooter" closeButton>
                                <Modal.Title>Edit your profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modalBody">
                                <Form>
                                    <Form.Group controlId="formBasicEditName">
                                        <Form.Control type="text" placeholder="Name" value={this.state.userProfile.username} onChange={this.nameEditHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEditAddress">
                                        <Form.Control type="text" placeholder="Address" value={this.state.userProfile.address} onChange={this.addressEditHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEditEmail">
                                        <Form.Control type="text" placeholder="Email" value={this.state.userProfile.email} onChange={this.emailEditHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEditPhone">
                                        <Form.Control type="text" placeholder="Phone No" value={this.state.userProfile.phone} onChange={this.phoneEditHandler} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer className="modalHeaderFooter">
                                <Button variant="danger" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button variant="success" onClick={() => this.handleEdit(this.state.userProfile._id)}>
                                    Edit
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Container>
                </React.Fragment>
            )
        }
    }
}