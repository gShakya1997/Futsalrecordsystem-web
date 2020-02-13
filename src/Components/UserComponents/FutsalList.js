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

export default class FutsalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            futsal: [],
            config: {
                headers: { "Authorization": `Bearer ${localStorage.getItem("userToken")}` }
            }
        }
    }

    componentDidMount() {
        Axios.get(
            "http://localhost:3007/users/futsalList",
            this.state.config
        ).then((response) => {
            this.setState({
                futsal: response.data
            });
        }).catch((err) => {
            console.log(err);   
        });
    };

    render() {
        if (this.state.futsal === null) {
            return (<h3>Loading......</h3>);
        } else {
            return (
                <React.Fragment>
                    <Route component={Header} />
                    <Container className="mt-4">
                        <div>
                            <h1>List of futsal</h1>
                        </div>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Futsal</th>
                                    <th>Location</th>
                                    <th>Email</th>
                                    <th>Phone no</th>
                                    <th>Opening Time</th>
                                    <th>Closing Time</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.futsal.map((fut) => {
                                        return (
                                            <tr key={fut._id}>
                                                <td>{fut.futsalName}</td>
                                                <td>{fut.futsalAddress}</td>
                                                <td>{fut.futsalEmail}</td>
                                                <td>{fut.futsalPhone}</td>
                                                <td>{fut.futsalOpeningTime}</td>
                                                <td>{fut.futsalClosingTime}</td>
                                                <td>{fut.futsalPrice}</td>
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