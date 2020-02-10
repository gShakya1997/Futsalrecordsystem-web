import React from "react";
import Axios from "axios";
import {
    Form,
    FormGroup,
    Container,
    Row,
    Col
} from "react-bootstrap";

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

                <div>
                    <Container className='mt-4'>
                        <h1> Your customer data </h1>
                        <Row className="border border-dark">
                            <Col className="border border-dark">Customer Id</Col>
                            <Col className="border border-dark">Customer fullname</Col>
                            <Col className="border border-dark">Customer email</Col>
                            <Col className="border border-dark">Customer phone no</Col>
                            <Col className="border border-dark">Customer gender</Col>
                            <Col className="border border-dark">Customer address</Col>
                        </Row>
                        <Row className="border border-dark">
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(id =>
                                        <Form.Control readOnly type="text" value={id._id} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(fullname =>
                                        <Form.Control readOnly type="text" value={fullname.customerFullname} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(email =>
                                        <Form.Control readOnly type="text" value={email.customerEmail} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(phoneNo =>
                                        <Form.Control readOnly type="text" value={phoneNo.customerPhoneNo} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(gender =>
                                        <Form.Control readOnly type="text" value={gender.customerGender} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                            <Col className="border border-dark">
                                {
                                    this.state.customers.map(address =>
                                        <Form.Control readOnly type="text" value={address.customerAddress} onChange={this.customersHandler} />
                                    )
                                }
                            </Col>
                        </Row>



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
                </div>
            )
        }

    };
};

export default CustomerData;