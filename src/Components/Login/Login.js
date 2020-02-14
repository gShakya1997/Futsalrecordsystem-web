import React from "react";
import {
    Form,
    Button,
    Container,
    Row,
    Col,
    Card
} from "react-bootstrap";
import Axios from "axios";
import {
    Link,
    Redirect,
    Route
} from "react-router-dom";
import Header from "../Header/Header";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            futsalName: "",
            futsalPassword: "",
            username: "",
            password: "",
            isOnline: false
        }
    }

    //handler for futsal owner
    futsalNameHandler = (e) => {
        this.setState({ futsalName: e.target.value });
    }

    futsalPasswordHandler = (e) => {
        this.setState({ futsalPassword: e.target.value });
    }

    //handler for users
    usernameHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    passwordHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    //Submit handler for user
    submitHandlerUser = (e) => {
        e.preventDefault();
        var dataUser = {
            username: this.state.username,
            password: this.state.password,
            isOnline: true
        }
        console.log(dataUser);
        Axios.post(
            "http://localhost:3007/users/login",
            dataUser
        ).then((response) => {
            console.log(response.data);
            localStorage.setItem("userToken", response.data.token);
            location.href="/futsallist";
        }).catch((err) => {
            console.log(err);
        });
    };

    //Submit handler for futsal
    submitHandlerFutsal = (e) => {
        e.preventDefault();
        var dataFutsal = {
            futsalName: this.state.futsalName,
            futsalPassword: this.state.futsalPassword,
            isOnline: true
        }
        console.log(dataFutsal);
        Axios.post(
            "http://localhost:3007/futsal/login",
            dataFutsal
        ).then((response) => {
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            location.href="/customersdata";
        }).catch((err) => {
            console.log(err);
        });
    };

    render() {
        if(localStorage.getItem('token')){
            return <Redirect to='/customersdata'/>
        } else if(localStorage.getItem("userToken")){
            return <Redirect to="/futsallist"/>
        }
        return (
            <React.Fragment>
                <Route component={Header} />
                <Container className="containerMargin">
                    <Row>
                        <Col md="6">
                            <Form onSubmit={this.submitHandlerFutsal}>
                                <Card.Header className="form-header warm-flame-gradient rounded">
                                    <h3 className="my-3">
                                        Futsal Login
                                </h3>
                                </Card.Header>
                                <Form.Group controlId="formBasicFutsalName">
                                    <Form.Control type="text" placeholder="Futsal name" value={this.state.futsalName} onChange={this.futsalNameHandler} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" value={this.state.futsalPassword} onChange={this.futsalPasswordHandler} />
                                </Form.Group>
                                <div className="text-center py-4 mt-3">
                                    <Button className="btnAction" variant="primary" type="submit">
                                        Login as Futsal Owner
                                </Button>
                                </div>
                            </Form>
                        </Col>
                        <Col md="6">
                            <Form onSubmit={this.submitHandlerUser}>
                                <Card.Header className="form-header warm-flame-gradient rounded">
                                    <h3 className="my-3">
                                        User Login
                                </h3>
                                </Card.Header>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={this.usernameHandler} />
                                </Form.Group>
                                <Form.Group controlId="formBasicUserPassword">
                                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.passwordHandler} />
                                </Form.Group>
                                <div className="text-center py-4 mt-3">
                                    <Button className="btnAction" variant="primary" type="submit">
                                        Login as User
                                </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Login;