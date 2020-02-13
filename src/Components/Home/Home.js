import React from "react";
import {
    Container,
    Nav,
    Navbar,
    Card,
    Button,
    Row,
    Col
} from "react-bootstrap";
import {
    Link,
    Switch,
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import "../main.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Route component={Header} />
                <Container id="content">
                    <Row>
                        <Col md="6">
                            <Card>
                                <Card.Header>Introduction For Futsal Owners</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Futsal record system let's you add, update and delete customer data and add events.
                                        It also allows you to record reservation.
                                    </Card.Text>
                                    <Button href="/register" variant="dark">Register for free</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card>
                                <Card.Header>Introduction For Users</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Futsal record system allows you to show list of futsal and events
                                    </Card.Text>
                                    <Button href="/register" variant="dark">Register for free</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <React.Fragment id="footer">
                    <Route component={Footer} />
                </React.Fragment>
            </React.Fragment>
        )
    }
}

export default HomePage;

