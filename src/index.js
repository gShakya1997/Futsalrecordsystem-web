import React from "react";
import ReactDom from "react-dom";
// import Login from "./Components/Login/Login";
// import Registration from "./Components/Registration/Registration"
import {
    Navbar,
    Nav,
    Button,
    Row,
    Col,
    Container,
    Alert
} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";

//react-router-dom browswer
//react navigation  react native


class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    Footer = () => {
        return (
            <Row>
                <Col sm={6}>
                    Contact us: info@gmail.com<br />
                    Phone no: +9779837485767<br />
                    Email: gunjan.shakya@gmail.com
                </Col>
                <Col sm={4}>
                    Copyright@2020
                </Col>
                <Col sm={4}>
                </Col>
            </Row>
        )
    }

    Notfound = () => {
        return (
            <Container className="d-flex justify-content">
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>404! Not Found</Alert.Heading>
                    <h2>The page you are looking for does not exist!!</h2>
                </Alert>
            </Container>
        )
    }

    render() {
        return (
            <Router>
                <div>
                    <>
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand as={Link} to="/home">My website</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                <Nav.Link as={Link} to="/users">User's List</Nav.Link>
                                <Nav.Link href="login">About us</Nav.Link>
                                <Nav.Link href="login">Contact</Nav.Link>
                            </Nav>
                        </Navbar>
                    </>
                </div>
                <Switch>
                    {/* <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Registration} /> */}
                    <Route component={this.Notfound} />
                </Switch>
                <div className="p-3 mb-2 bg-dark text-white">
                    <this.Footer />
                </div>
            </Router>
        )
    }
}

ReactDom.render(<Content />, document.getElementById("root"))