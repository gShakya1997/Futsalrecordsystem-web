import React from "react";
import Axios from "axios";
import {
    Container,
    Row,
    Col,
    Button,
    Table
} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import "./Customer.css";
import Header from "../Header/HeaderFutsal";
import Footer from "../Footer/Footer";

class CustomerData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            config: {
                headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
            },
            selectedFile: null
        }

    }

    componentDidMount() {
        Axios.get(
            "http://localhost:3007/customers",
            this.state.config
        ).then((response) => {
            this.setState({
                customers: response.data
            });
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    render() {
        if (this.state.customers === null) {
            return (<h3>Loading......</h3>);
        } else {
            return (
                <React.Fragment>
                    <Route component={Header} />
                    <Container className='mt-4'>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Customer Id</th>
                                    <th>Fullname</th>
                                    <th>Email</th>
                                    <th>Phone no</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {
                                            this.state.customers.map((customer) => {
                                                return (
                                                    <label key={customer._id} > {customer._id}</label>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.state.customers.map((customer) => {
                                                return (
                                                    <label key={customer._id} > {customer.customerFullname}</label>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.state.customers.map((customer) => {
                                                return (
                                                    <label key={customer._id} > {customer.customerEmail}</label>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.state.customers.map((customer) => {
                                                return (
                                                    <label key={customer._id} > {customer.customerPhoneNo}</label>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.state.customers.map((customer) => {
                                                return (
                                                    <label key={customer._id} > {customer.customerGender}</label>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            this.state.customers.map((customer) => {
                                                return (
                                                    <label key={customer._id} > {customer.customerAddress}</label>
                                                )
                                            })
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </React.Fragment>
            )
        }
    };
};

export default CustomerData;