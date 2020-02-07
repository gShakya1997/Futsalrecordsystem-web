import React from "react";
import {
    Form,
    Button,
    Container
} from "react-bootstrap";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardHeader,
    MDBCard,
    MDBCardBody,
    MDBIcon
} from "mdbreact";
import Axios from "axios";

class FutsalRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            futsalName: "",
            futsalAddress: "",
            futsalEmail: "",
            futsalPhone: "",
            futsalPassword: "",
            futsalCPassword: "",
            futsalOpeningTime: "",
            futsalClosingTime: "",
            futsalPrice: "",
            redirect: false
        }
    }

    futsalNameHandler = (e) => {
        this.setState({ futsalName: e.target.value });
    }

    futsalAddressHandler = (e) => {
        this.setState({ futsalAddress: e.target.value });
    }

    futsalEmailHandler = (e) => {
        this.setState({ futsalEmail: e.target.value });
    }

    futsalPhoneHandler = (e) => {
        this.setState({ futsalPhone: e.target.value });
    }

    futsalPasswordHandler = (e) => {
        this.setState({ futsalPassword: e.target.value });
    }

    futsalCPasswordHandler = (e) => {
        this.setState({ futsalCPassword: e.target.value });
    }

    futsalOpeningTimeHandler = (e) => {
        this.setState({ futsalOpeningTime: e.target.value });
    }

    futsalClosingTimeHandler = (e) => {
        this.setState({ futsalClosingTime: e.target.value });
    }

    futsalPriceHandler = (e) => {
        this.setState({ futsalPrice: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        var data = {
            futsalName: this.state.futsalName,
            futsalAddress: this.state.futsalAddress,
            futsalEmail: this.state.futsalEmail,
            futsalPhone: this.state.futsalPhone,
            futsalPassword: this.state.futsalPassword,
            futsalCPassword: this.state.futsalCPassword,
            futsalOpeningTime: this.state.futsalOpeningTime,
            futsalClosingTime: this.state.futsalClosingTime,
            futsalPrice: this.state.futsalPrice
        }
        var headers = {
            "Content-type": "application/json"
        }
        Axios.post(
            "http://localhost:3007/futsal/register",
            data,
            headers
        ).then((response) => {
            console.log(response);
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <Form onSubmit={this.submitHandler}>
                                    <MDBCardHeader className="form-header warm-flame-gradient rounded">
                                        <h3 className="my-3">
                                            <MDBIcon icon="lock" /> Futsal Registration
                                        </h3>
                                    </MDBCardHeader>
                                    <Form.Group controlId="formBasicFutsalName">
                                        <Form.Control type="text" placeholder="Futsal name" value={this.state.futsalName} onChange={this.futsalNameHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicAddress">
                                        <Form.Control type="text" placeholder="Address" value={this.state.futsalAddress} onChange={this.futsalAddressHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email address" value={this.state.futsalEmail} onChange={this.futsalEmailHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPhone">
                                        <Form.Control type="number" placeholder="Phone no" value={this.state.futsalPhone} onChange={this.futsalPhoneHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" value={this.state.futsalPassword} onChange={this.futsalPasswordHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCPassword">
                                        <Form.Control type="password" placeholder="Confirm Password" value={this.state.futsalCPassword} onChange={this.futsalCPasswordHandler} />
                                    </Form.Group>
                                    <Form.Text className="text-muted">
                                        HH:MM am/pm
                                        </Form.Text>
                                    <Form.Group controlId="formBasicOpeningTime">
                                        <Form.Control type="text" placeholder="Opening Time" value={this.state.futsalOpeningTime} onChange={this.futsalOpeningTimeHandler} />
                                    </Form.Group>
                                    <Form.Text className="text-muted">
                                        HH:MM am/pm
                                        </Form.Text>
                                    <Form.Group controlId="formBasicClosingTime">
                                        <Form.Control type="text" placeholder="Closing Time" value={this.state.futsalClosingTime} onChange={this.futsalClosingTimeHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicFutsalPrice">
                                        <Form.Control type="number" placeholder="Price per hour" value={this.state.futsalPrice} onChange={this.futsalPriceHandler} />
                                    </Form.Group>
                                    <div className="text-center py-4 mt-3">
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        )
    }
}

export default FutsalRegistration;