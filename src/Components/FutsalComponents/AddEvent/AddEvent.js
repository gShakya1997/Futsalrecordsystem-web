import React from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import Axios from "axios";
import { Route } from "react-router-dom";
import Header from "../../Header/HeaderFutsal";

export default class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            entryFee: "",
            eventDetail: ""
        }
    }

    render() {
        return (
            <React.Fragment>
                <Route component={Header} />
                <Container>
                    <Form onSubmit={this.submitHandlerEvent}>
                        <Card.Header className="form-header warm-flame-gradient rounded">
                            <h3 className="my-3">
                                Add event
                            </h3>
                        </Card.Header>
                        <Form.Group controlId="formBasicEventName">
                            <Form.Control type="text" placeholder="Event Name" value={this.state.eventName} onChange={this.eventNameHandler} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEntryFee">
                            <Form.Control type="text" placeholder="Entry Fee" value={this.state.entryFee} onChange={this.entryFeeHandler} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEventDetail">
                            <Form.Control type="text" placeholder="Entry Fee" value={this.state.entryFee} onChange={this.entryFeeHandler} />
                        </Form.Group>
                        <div className="text-center py-4 mt-3">
                            <Button variant="primary" type="submit">
                                Add Event
                            </Button>
                        </div>
                    </Form>
                </Container>
            </React.Fragment>
        )
    }
}