import React from "react";
import Axios from "axios";
import {
    Form,
    FormGroup,
    Container,
    Row,
    Col,
    Button
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
                        <Row className="justify-content-md-center">
                            <Col><h1>Your customer data</h1> </Col>
                            <Col md="6"><Button className="btn-space button" variant="dark">Add customer</Button></Col>
                        </Row>
                        <Row className="border border-dark justify-content-md-center">
                            <Col className="border border-dark">Customer Id</Col>
                            <Col className="border border-dark">Fullname</Col>
                            <Col className="border border-dark">Email</Col>
                            <Col className="border border-dark">Phone no</Col>
                            <Col className="border border-dark">Gender</Col>
                            <Col className="border border-dark">Address</Col>
                            <Col className="border border-dark">Actions</Col>
                        </Row>
                        {
                            this.state.customers.map((customer) => {
                                return (
                                    <li key={customer._id}>{customer.customerFullname}</li>
                                )
                            })
                        }
                        {/* <Row className="border border-dark justify-content-md-center">
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(id =>
                                        <Form.Control key={id.toString()} readOnly type="text" value={id._id} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(fullname =>
                                        <Form.Control key={fullname.toString()} readOnly type="text" value={fullname.customerFullname} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(email =>
                                        <Form.Control key={email.toString()} readOnly type="text" value={email.customerEmail} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(phoneNo =>
                                        <Form.Control key={phoneNo.toString()} readOnly type="text" value={phoneNo.customerPhoneNo} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(gender =>
                                        <Form.Control key={gender.toString()} readOnly type="text" value={gender.customerGender} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(address =>
                                        <Form.Control key={address.toString()} readOnly type="text" value={address.customerAddress} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                            <Col className="border border-dark">
                                {
                                    <Button>Delete</Button>
                                }
                            </Col>
                        </Row> */}



                        {/* <Form>
                            <FormGroup>
                                <Form.Label>Customer Id</Form.Label>
                                <Form.Group controlId="formBasicCustomerId">
                                    {
                                        this.state.customers.map(id =>
                                            <Form.Control readOnly type="text" value={id._id} onChange={this.customersHandler} />
                                        )
                                    }
                                </Form.Group>
                                <Form.Label>Customer Full Name</Form.Label>
                                <Form.Group controlId="formBasicCustomerFullname">
                                    {
                                        this.state.customers.map(fullname =>
                                            <Form.Control readOnly type="text" value={fullname.customerFullname} onChange={this.customersHandler} />
                                        )
                                    }
                                </Form.Group>
                                <Form.Label>Customer Email</Form.Label>
                                <Form.Group controlId="formBasicCustomerEmail">
                                    {
                                        this.state.customers.map(email =>
                                            <Form.Control  readOnly type="text" value={email.customerEmail} onChange={this.customersHandler} />
                                        )
                                    }
                                </Form.Group>
                                <Form.Label>Customer Phone no</Form.Label>
                                <Form.Group controlId="formBasicCustomerPhoneNo">
                                    {
                                        this.state.customers.map(phoneNo =>
                                            <Form.Control readOnly type="text" value={phoneNo.customerPhoneNo} onChange={this.customersHandler} />
                                        )
                                    }
                                </Form.Group>
                                <Form.Label>Customer Gender</Form.Label>
                                <Form.Group controlId="formBasicCustomerGender">
                                    {
                                        this.state.customers.map(gender =>
                                            <Form.Control readOnly type="text" value={gender.customerGender} onChange={this.customersHandler} />
                                        )
                                    }
                                </Form.Group>
                                <Form.Label>Customer Address</Form.Label>
                                <Form.Group controlId="formBasicCustomerAddress">
                                    {
                                        this.state.customers.map(address =>
                                            <Form.Control readOnly type="text" value={address.customerAddress} onChange={this.customersHandler} />
                                        )
                                    }
                                </Form.Group>
                            </FormGroup>
                        </Form> */}
                    </Container>
                    </React.Fragment>
            )
        }

    };
};

export default CustomerData;