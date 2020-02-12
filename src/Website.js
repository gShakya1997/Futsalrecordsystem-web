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
import FutsalList from "./Components/UserComponents/FutsalList";
import EventList from "./Components/UserComponents/EventList";
import FutsalRoute from "./PrivateRoute/FutsalRoute";
import UserRoute from "./PrivateRoute/UserRoute";

function Website(){
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/home" component={HomePage}/>
                    <Route exact path="/register" component={Registration}/>
                    <Route exact path="/login" component={Login}/>
                    <FutsalRoute exact path="/customersdata" component={CustomerData}/>
                    <UserRoute exact path="/futsallist" component={FutsalList}/>
                    <UserRoute exact path="/eventlist" component={EventList}/>
                </Switch>
            </Router>
        </>
    );
};

export default Website;
