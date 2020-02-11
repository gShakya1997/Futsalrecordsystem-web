import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom";

const FutsalRoute = ({component: Component,...rest}) => (
    <Route
    {...rest}
    render = {
        props => localStorage.getItem("token") ? (
            <Component {...props}/>
        ) : (
            <Redirect to = {{
                pathname: "/",
                state: {from:props.location}
            }}/>
        )
    }
    />
);

export default FutsalRoute;