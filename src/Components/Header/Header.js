import React from "react"
import {
    Navbar,
    Nav,
    Container,
    Alert
} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Header extends React.Component{
    constructor(props){
        super(props);
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

    render() {
        return (
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand as={Link} to="/home">
                            Futsal Record
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                        </Nav>
                    </Navbar>
                </>
            </div>
        )
    }
}

export default Header;