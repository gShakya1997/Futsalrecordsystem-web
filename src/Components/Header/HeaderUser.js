import React from "react";
import {
    Nav,
    Navbar
} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default class HeaderUser extends React.Component{
    constructor(props){
        super(props);
    }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('userToken');
        location.href = "/login";
    }

    Notfound = () => {
        return (
            <Container className="d-flex justify-content">
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>404! Not Found</Alert.Heading>
                    <h2>The page you are looking for does not exist!!</h2>
                </Alert>
            </Container>
        )
    }

    render(){
        return(
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand as={Link} to="/home">
                            Futsal Record
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/customersdata">Futsal Data</Nav.Link>
                            <Nav.Link as={Link} to="/customersdata">Event List</Nav.Link>
                            <Nav.Link as={Link} to="/customersdata">Profile</Nav.Link>
                            <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar>
                </>
            </div>
        )
    }
}
