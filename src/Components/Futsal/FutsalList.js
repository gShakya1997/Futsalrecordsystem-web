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
                headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
            },
            show: false,
            selectedFutsal: {}

        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleOpen = (futsalId) => {
        this.setState({
            show: true,
            selectedFutsal: this.state.futsal.find((fut)=> {
                return fut._id === futsalId
            })
        })
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

        });
    };

    handleDelete = (futsalID) => {
        const filteredFutsal = this.state.futsal.filter((fut) => {
            return fut._id !== futsalID
        })
        this.setState({
            futsal: filteredFutsal
        })
    }

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
                                                <td>
                                                    <Button color='danger' onClick={() => this.handleDelete(fut._id)}>Delete</Button>
                                                </td>
                                                <td>
                                                    <Button onClick={()=> this.handleOpen(fut._id)} > Edit </Button>
                                                </td>
                                            </tr>)
                                    })
                                }
                            </tbody>
                        </Table>

                        <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                            <Modal.Header closeButton>
                            <Modal.Title>{this.state.selectedFutsal.futsalName}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
          </Button>
                                <Button variant="primary" onClick={this.handleClose}>
                                    Save Changes
          </Button>
                            </Modal.Footer>
                        </Modal>
                    </Container>
                </React.Fragment>
            )
        };
    };
};