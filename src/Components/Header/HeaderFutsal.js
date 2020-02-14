import React from "react";
import {
    Nav,
    Navbar
} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class HeaderFutsal extends React.Component{
    constructor(props){
        super(props);
    }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
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
                        <Navbar.Brand as={Link} to="/customersdata">
                            Futsal Record
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/customersdata">Customer Data</Nav.Link>
                            <Nav.Link as={Link} to="/addevent">Add Event</Nav.Link>
                            <Nav.Link as={Link} to="/customersdata">Reservation</Nav.Link>
                            <Nav.Link as={Link} to="/futsalprofile">Profile</Nav.Link>
                            <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar>
                </>
            </div>
        )
    }
}

export default HeaderFutsal;
