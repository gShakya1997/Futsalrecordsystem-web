import React from "react";
import Axios from "axios";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Header from "../Header/HeaderUser";

export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userProfile: [],
            config: {
                headers: {"Authorization":`Bearer ${localStorage.getItem("userToken")}`}
            }
        }
    }

    componentDidMount() {
        Axios.get(
            "http://localhost:3007/users/profile",
            this.state.config
        ).then((response) => {
            this.setState({
                userProfile: response.data
            });
        }).catch((err) => {
            console.log(err);
        });
    };

    render(){
        if (this.state.userProfile === null){
            return (<h3>Loading.....</h3>);
        } else {
            return (
                <React.Fragment>
                    <Route component={Header}/>
                    <Container className= "mt-4">
                        <div>
                            <h1>User profile</h1>
                        </div>
                        <div>
                            <p>Name: {this.state.userProfile.username}</p>
                            <p>Address: {this.state.userProfile.address}</p>
                            <p>Email: {this.state.userProfile.email}</p>
                            <p>Phone: {this.state.userProfile.phone}</p>
                        </div>
                    </Container>
                </React.Fragment>
            )
        }
    }
}