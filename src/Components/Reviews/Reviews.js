import React from "react";
import { Container, Alert } from "react-bootstrap";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Axios from "axios";

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbacks: []
        }
    }

    componentDidMount() {
        Axios.get(
            "http://localhost:3007/allfeedbacks"
        ).then((response) => {
            this.setState({
                feedbacks: response.data
            });
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    render() {
        return (
            <React.Fragment>
                <Route component={Header} />
                <Container className="containerMargin">
                    {
                        this.state.feedbacks.map((feedback) => {
                            return (
                                <Alert variant="success" key={feedback._id}>
                                    <Alert.Heading>Rating: {feedback.rating}</Alert.Heading>
                                    <p>
                                        {feedback.feedback}
                                    </p>
                                    <hr />
                                    <p className="mb-0">
                                        By: {feedback.owner}
                                    </p>
                                </Alert>
                            )
                        })
                    }
                </Container>
            </React.Fragment>
        )
    }
}