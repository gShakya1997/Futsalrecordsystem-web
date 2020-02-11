import React from "react";
import {
    Row,
    Col
} from "react-bootstrap";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="p-3 mb-2 bg-dark text-white">
                <Row>
                    <Col sm={6}>
                        Contact us: info@gmail.com<br />
                        Phone no: +9779860915753<br />
                        Email: gunjan.shakya@gmail.com
                    </Col>
                    <Col sm={4}>
                        Copyright@2020
                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer;