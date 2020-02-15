import React from "react";
import Axios from "axios";
import { Container, Alert, Button, Modal, Form } from "react-bootstrap";
import { Route } from "react-router-dom";
import Header from "../Header/HeaderFutsal";

export default class FutsalProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            futsalProfile: {},
            config: {
                headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
            },
            show: false
        }
    }

    componentDidMount() {
        Axios.get(
            "http://localhost:3007/futsal/profile",
            this.state.config
        ).then((response) => {
            this.setState({
                futsalProfile: response.data
            });
        }).catch((err) => {
            console.log(err);
        });
    };

    handleEdit = (futsalId) => {
        Axios.put(
            `http://localhost:3007/futsal/${futsalId}`,
            this.state.futsalProfile,
            this.state.config
        )
        .then((response)=>{
            location.href = "/futsalprofile"
        }).catch((err)=>{
            console.log(err);
        });
    };

    handleClose = () => {
        this.setState({
            show: false
        });
    };

    futsalNameEditHandler = (e) => {
        this.setState({futsalProfile: {...this.state.futsalProfile,["futsalName"]:e.target.value}})
    }

    futsalEmailEditHandler = (e) => {
        this.setState({futsalProfile: { ...this.state.futsalProfile, ["futsalEmail"]: e.target.value } })
    }

    futsalPhoneEditHandler = (e) => {
        this.setState({futsalProfile: { ...this.state.futsalProfile, ["futsalPhone"]: e.target.value } })
    }

    futsalOpeningTimeEditHandler = (e) => {
        this.setState({futsalProfile: { ...this.state.futsalProfile, ["futsalOpeningTime"]: e.target.value } })
    }

    futsalClosingTimeEditHandler = (e) => {
        this.setState({futsalProfile: { ...this.state.futsalProfile, ["futsalClosingTime"]: e.target.value } })
    }

    futsalPriceEditHandler = (e) => {
        this.setState({futsalProfile: { ...this.state.futsalProfile, ["futsalPrice"]: e.target.value } })
    }

    handleOpen = (currentProfile) => {
        this.setState({
            show: true,
            futsalProfile: currentProfile
        });
    };

    deleteHandler = (profileId) => {
        Axios.delete(
            `http://localhost:3007/futsal/${profileId}`,
            this.state.config
        )
        .then(() => {
            localStorage.removeItem("token");   
            location.href = "/login"
        }).catch((err)=> {
            console.log(err);
        });
    };

    render() {
        if (this.state.futsalProfile === null) {
            return (<h3>Loading.....</h3>);
        } else {
            return (
                <React.Fragment>
                    <Route component={Header} />
                    <Container className="mt-4">
                        <div>
                            <h1>Futsal profile</h1>
                        </div>
                        <div>
                            <Alert variant="dark">
                                <Alert.Heading>Name: {this.state.futsalProfile.futsalName}</Alert.Heading>
                                <p>Email: {this.state.futsalProfile.futsalEmail}</p>
                                <p>Phone: {this.state.futsalProfile.futsalPhone}</p>
                                <p>Opening Time: {this.state.futsalProfile.futsalOpeningTime}</p>
                                <p>Closing Time: {this.state.futsalProfile.futsalClosingTime}</p>
                                <p>Price: {this.state.futsalProfile.futsalPrice}</p>
                                <hr />
                                <p className="mb-0">
                                    <Button className="btnAction" onClick={() => this.handleOpen(this.state.futsalProfile)}>Edit my account</Button>
                                    <Button className="btnAction" onClick={() => this.deleteHandler(this.state.futsalProfile._id)}>Delete my account</Button>
                                </p>
                            </Alert>
                            <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                                <Modal.Header className="modalHeaderFooter" closeButton>
                                    <Modal.Title>Edit your profile</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="modalBody">
                                    <Form>
                                        <Form.Group controlId="formBasicEditFutsalName">
                                            <Form.Control type="text" placeholder="Futsal Name" value={this.state.futsalProfile.futsalName} onChange={this.futsalNameEditHandler} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEditFutsalEmail">
                                            <Form.Control type="text" placeholder="Futsal Email" value={this.state.futsalProfile.futsalEmail} onChange={this.futsalEmailEditHandler} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEditFutsalPhone">
                                            <Form.Control type="text" placeholder="Futsal Phone No" value={this.state.futsalProfile.futsalPhone} onChange={this.futsalPhoneEditHandler} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEditFutsalOpeningTime">
                                            <Form.Control type="text" placeholder="Futsal Opening time" value={this.state.futsalProfile.futsalOpeningTime} onChange={this.futsalOpeningTimeEditHandler} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEditFutsalClosingTime">
                                            <Form.Control type="text" placeholder="Futsal Closing time" value={this.state.futsalProfile.futsalClosingTime} onChange={this.futsalClosingTimeEditHandler} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEditFutsalPrice">
                                            <Form.Control type="text" placeholder="Futsal Price" value={this.state.futsalProfile.futsalPrice} onChange={this.futsalPriceEditHandler} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer className="modalHeaderFooter">
                                    <Button variant="danger" onClick={this.handleClose}>
                                        Close
                                </Button>
                                    <Button variant="success" onClick={() => this.handleEdit(this.state.futsalProfile._id)}>
                                        Edit
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Container>
                </React.Fragment>
            )
        }
    }
}