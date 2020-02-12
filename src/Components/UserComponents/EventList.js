import React from "react";
import Axios from "axios";
import {
    Container,
    Button,
    Table,
    Modal
} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Header from "../Header/HeaderUser";

export default class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            config: {
                headers: { "Authorization": `Bearer ${localStorage.getItem("userToken")}` }
            }
        }
    }

    componentDidMount() {
        Axios.get(
            "http://localhost:3007/users/eventList",
            this.state.config
        ).then((response) => {
            this.setState({
                events: response.data
            });
        }).catch((err) => {
            console.log(err);
        });
    };

    render() {
        if (this.state.events === null) {
            return (<h3>Loading......</h3>);
        } else {
            return (
                <React.Fragment>
                    <Route component={Header} />
                    <Container className="mt-4">
                        <div>
                            <h1>List of Events</h1>
                        </div>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Event Name</th>
                                    <th>Entry fee</th>
                                    <th>Event Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.events.map((event) => {
                                        return (
                                            <tr key={event._id}>
                                                <td>{event.eventName}</td>
                                                <td>{event.entryFee}</td>
                                                <td>{event.eventDetail}</td>
                                            </tr>)
                                    })
                                }
                            </tbody>
                        </Table>
                    </Container>
                </React.Fragment>
            )
        };
    };
};