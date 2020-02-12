import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom";

const UserRoute = ({component: Component,...rest}) => (
    <Route
    {...rest}
    render = {
        props => localStorage.getItem("userToken") ? (
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

export default UserRoute;