import React from "react";
import {
    Container,
    Card,
    Button,
    Row,
    Col
} from "react-bootstrap";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="6">
                        <div>
                            <Card style={{ width: '30rem' }}>
                                <Card.Header>Introduction For Futsal Owners</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Futsal record system let's you add, update and delete customer data and add events.
                                        It also allows you to record reservation.
                                    </Card.Text>
                                    <Button href="/register" variant="dark">Register for free</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md="6">
                        <div>
                            <Card style={{ width: '30rem' }}>
                                <Card.Header>Introduction For Users</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Futsal record system allows you to show list of futsal and events
                                    </Card.Text>
                                    <Button href="/register" variant="dark">Register for free</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HomePage;

