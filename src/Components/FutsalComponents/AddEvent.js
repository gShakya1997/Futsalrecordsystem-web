import React from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import Axios from "axios";
import { Route } from "react-router-dom";
import Header from "../Header/HeaderFutsal";

export default class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            entryFee: "",
            eventDetail: "",
            config: {
                headers :{"Authorization":`Bearer ${localStorage.getItem("token")}`}
            }
        }
    }

    eventNameHandler = (e) => {
        this.setState({eventName: e.target.value})
    };

    entryFeeHandler = (e) => {
        this.setState({entryFee: e.target.value})
    };

    eventDetailHandler = (e) => {
        this.setState({eventDetail: e.target.value})
    };

    submitHandlerEvent = (e) =>{
        e.preventDefault();
        var eventData = {
            eventName: this.state.eventName,
            entryFee: this.state.entryFee,
            eventDetail: this.state.eventDetail
        }
        Axios.post(
            "http://localhost:3007/events",
            eventData,
            this.state.config
        ).then((response) =>{
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <React.Fragment>
                <Route component={Header} />
                <Container className="containerMargin">
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
                            <Form.Control as="textarea" rows="5" type="text" placeholder="Event Detail" value={this.state.eventDetail} onChange={this.eventDetailHandler} />
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