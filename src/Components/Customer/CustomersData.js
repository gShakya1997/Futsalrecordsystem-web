import React from "react";
import Axios from "axios";
import {
    Container,
    Button,
    Table,
    Modal,
    Form
} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import "./Customer.css";
import Header from "../Header/HeaderFutsal";

class CustomerData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            config: {
                headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
            },
            show: false,
            showAddCustomer: false,
            selectedCustomerData: {}
        }
    }

    // changeHandler = (e) => {
        //     this.setState({
        //         [e.target.selectedCustomerData] : e.target.value
        //     })
        // }

    fullnameHandler =  (e) => {
        this.setState({customerFullname : e.target.value });
        console.log(this.state.customerFullname);
    }

    emailHandler = (email) => {
        console.log(email)
        this.setState({ email: email.target.value });
    }

    phoneNoHandler = (e) => {
        this.setState({ customerPhoneNo: e.target.value });
    }

    addressHandler = (e) => {
        this.setState({ customerAddress: e.target.value });
    }

    genderHandler = (e) => {
        this.setState({ customerGender: e.target.value });
    }

    handleUpdate = (updatedCustomer) => {
        console.log(this.state.customers);
        Axios.put(
            `http://localhost:3007/customers/${updatedCustomer}`,
            { customers: updatedCustomer.customers },   
            this.state.config,
            )
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            });
    };

    handleDelete = (customerId) => {
        const filteredCustomer = this.state.customers.filter((customer) => {
            return customer._id !== customerId
        })
        this.setState({
            customers: filteredCustomer
        })
        console.log(customerId.customerFullname);
        Axios.delete(
            `http://localhost:3007/customers/${customerId}`,
            this.state.config
        ).then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
    }

    handlerAdd = (e) => {
        e.preventDefault();
        var addCustomer = {
            customerFullname: this.state.customerFullname,
            customerEmail: this.state.customerEmail,
            customerPhoneNo: this.state.customerPhoneNo,
            customerAddress: this.state.customerAddress,
            customerGender: this.state.customerGender
        }
        console.log(addCustomer);
        Axios.post(
            "http://localhost:3007/customers",
            { customerFullname: this.state.customerFullname },
            this.state.config
        ).then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err)
        })
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

    handleClose = () => {
        this.setState({
            show: false,
            showAddCustomer: false
        });
    };

    handleOpen = (customerId) => {
        this.setState({
            show: true,
            selectedCustomerData: this.state.customers.find((customer) => {
                return customer._id === customerId
            })
        });
    };

    handleOpenAddCustomer = () => {
        this.setState({
            showAddCustomer: true
        });
    };

    render() {
        if (this.state.customers === null) {
            return (<h3>Loading......</h3>);
        } else {
            return (
                <React.Fragment>
                    <Route component={Header} />
                    <Container className="mt-4">
                        <div>
                            <h1>Customer data</h1>
                        </div>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Fullname</th>
                                    <th>Email</th>
                                    <th>Phone no</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                    <th><Button onClick={this.handleOpenAddCustomer}>
                                        Add customer
                                        </Button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map((customer) => {
                                        return (
                                            <tr key={customer._id}>
                                                <td>{customer.customerFullname}</td>
                                                <td>{customer.customerEmail}</td>
                                                <td>{customer.customerPhoneNo}</td>
                                                <td>{customer.customerGender}</td>
                                                <td>{customer.customerAddress}</td>
                                                <td>
                                                    <Button onClick={() => this.handleDelete(customer._id)}>Delete</Button>
                                                </td>
                                                <td>
                                                    <Button onClick={() => this.handleOpen(customer._id)}>Update</Button>
                                                </td>
                                            </tr>)
                                    })
                                }
                            </tbody>
                        </Table>
                        <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update customer data</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEditFullname">
                                        <Form.Control type="text" value={this.state.selectedCustomerData.customerFullname} onChange={this.fullnameHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEditEmail">
                                        <Form.Control type="email" value={this.state.selectedCustomerData.customerEmail} onChange={() => this.emailHandler(this.state.selectedCustomerData.customerEmail)} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEditPhoneNo">
                                        <Form.Control type="number" value={this.state.selectedCustomerData.customerPhoneNo} onChange={this.phoneNoHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEditAddress">
                                        <Form.Control type="text" value={this.state.selectedCustomerData.customerAddress} onChange={this.addressHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEditGender">
                                        <Form.Control type="text" value={this.state.selectedCustomerData.customerGender} onChange={this.genderHandler} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => this.handleUpdate(this.state.selectedCustomerData._id)}>
                                    Update
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={this.state.showAddCustomer} onHide={this.handleClose} animation={true}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add customer data</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formBasicFullname">
                                        <Form.Control type="text" value={this.setState.customerFullname} onChange={this.fullnameHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" value={this.setState.customerEmail} onChange={this.emailHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPhoneNo">
                                        <Form.Control type="number" value={this.setState.customerPhoneNo} onChange={this.phoneNoHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicAddress">
                                        <Form.Control type="text" value={this.setState.customerAddress} onChange={this.addressHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicGender">
                                        <Form.Control type="text" value={this.setState.customerGender} onChange={this.genderHandler} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={this.handlerAdd}>
                                    Add
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Container>
                </React.Fragment>
            )
        }
    };
};
export default CustomerData;