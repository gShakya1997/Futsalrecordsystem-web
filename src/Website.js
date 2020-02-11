import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import CustomerData from "./Components/Customer/CustomersData";
import HomePage from "./Components/Home/Home";
import FutsalRoute from "./PrivateRoute/FutsalRoute";

function Website(){
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/home" component={HomePage}/>
                    <Route exact path="/register" component={Registration}/>
                    <Route exact path="/login" component={Login}/>
                    {/* <FutsalRoute path="/futsalDashboard" component={FutsalDashboard}/> */}
                    <Route path="/customersdata" component={CustomerData}/>
                </Switch>
            </Router>
        </>
    );
};

export default Website;
