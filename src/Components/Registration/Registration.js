import React from "react";
import {
    Form,
    Button,
    FormLabel,
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
    Container,
    Row,
    Col,
    Card
} from "react-bootstrap";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class Registration extends React.Component {
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
            username: "",
            address: "",
            email: "",
            phone: "",
            password: "",
            cpassword: "",
            gender: "Male",
            isRegistered: false
        }
    }

    // Handler for futsal
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

    //submit handler for futsal
    submitHandlerFutsal = (e) => {
        e.preventDefault();
        var dataFutsal = {
            futsalName: this.state.futsalName,
            futsalAddress: this.state.futsalAddress,
            futsalEmail: this.state.futsalEmail,
            futsalPhone: this.state.futsalPhone,
            futsalPassword: this.state.futsalPassword,
            futsalCPassword: this.state.futsalCPassword,
            futsalOpeningTime: this.state.futsalOpeningTime,
            futsalClosingTime: this.state.futsalClosingTime,
            futsalPrice: this.state.futsalPrice,
            isRegistered: true
        }
        Axios.post(
            "http://localhost:3007/futsal/register",
            dataFutsal
        ).then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            location.href = "/login";
        }).catch((err) => {
            console.log(err);
        });
    }

    //Handler for user
    usernameHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    addressHandler = (e) => {
        this.setState({ address: e.target.value });
    }

    emailHandler = (e) => {
        this.setState({ email: e.target.value });
    }

    phoneHandler = (e) => {
        this.setState({ phone: e.target.value });
    }

    passwordHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    cPasswordHandler = (e) => {
        this.setState({ cpassword: e.target.value });
    }

    genderHandler = (e) => {
        this.setState({ gender: e.target.value });
    }

    //submit handler for user
    submitHandlerUser = (e) => {
        e.preventDefault();
        var dataUser = {
            username: this.state.username,
            address: this.state.address,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            cpassword: this.state.cpassword,
            gender: this.state.gender,
            isRegistered: true
        }
        console.log(dataUser);
        Axios.post(
            "http://localhost:3007/users/register",
            dataUser
        ).then((response) => {
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            location.href = "/login";
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        if (this.state.isRegistered === true) {
            return <Redirect to="/login" />
        }
        return (
            <Container>
                <Row>
                    {/* Registration form for Futsal Owner */}
                    <Col md="6">
                        <Form onSubmit={this.submitHandlerFutsal}>
                            <Card.Header className="form-header warm-flame-gradient rounded">
                                <h3 className="my-3">
                                    Futsal Registration
                                </h3>
                            </Card.Header>
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
                                    Register as Futsal Owner
                                </Button>
                            </div>
                        </Form>
                    </Col>

                    {/* Registration form for user */}
                    <Col md="6">
                        <Form onSubmit={this.submitHandlerUser}>
                            <Card.Header>
                                <h3 className="my-3">
                                    User Registration
                                </h3>
                            </Card.Header>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={this.usernameHandler} />
                            </Form.Group>
                            <Form.Group controlId="formBasicUserAddress">
                                <Form.Control type="text" placeholder="Address" value={this.state.address} onChange={this.addressHandler} />
                            </Form.Group>
                            <Form.Group controlId="formBasicUserEmail">
                                <Form.Control type="email" placeholder="Email address" value={this.state.email} onChange={this.emailHandler} />
                            </Form.Group>
                            <Form.Group controlId="formBasicUserPhone">
                                <Form.Control type="number" placeholder="Phone no" value={this.state.phone} onChange={this.phoneHandler} />
                            </Form.Group>
                            <Form.Group controlId="formBasicUserPassword">
                                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.passwordHandler} />
                            </Form.Group>
                            <Form.Group controlId="formBasicUserCPassword">
                                <Form.Control type="password" placeholder="Confirm Password" value={this.state.cpassword} onChange={this.cPasswordHandler} />
                            </Form.Group>
                            <FormLabel>Gender</FormLabel>
                            <ButtonToolbar>
                                <ToggleButtonGroup type="radio" name="options">
                                    <ToggleButton variant="dark" value={"Male"} checked={this.state.gender === "Male"} onChange={this.genderHandler}>Male</ToggleButton>
                                    <ToggleButton variant="dark" value={"Female"} checked={this.state.gender === "Female"} onChange={this.genderHandler}>Female</ToggleButton>
                                    <ToggleButton variant="dark" value={"Others"} checked={this.state.gender === "Others"} onChange={this.genderHandler}>Others</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                            <div className="text-center py-4 mt-3">
                                <Button variant="primary" type="submit">
                                    Register as User
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Registration;