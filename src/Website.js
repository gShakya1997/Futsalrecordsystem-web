import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import CustomerData from "./Components/FutsalComponents/Customer/CustomersData";
import AddEvent from "./Components/FutsalComponents/AddEvent/AddEvent";
import HomePage from "./Components/Home/Home";
import Reviews from "./Components/Reviews/Reviews";
import FutsalList from "./Components/UserComponents/FutsalList";
import EventList from "./Components/UserComponents/EventList";
import ProfileUser from "./Components/UserComponents/Profile";
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
                    <Route exact path="/reviews" component={Reviews}/>
                    <FutsalRoute exact path="/customersdata" component={CustomerData}/>
                    <FutsalRoute exact path="/addevent" component={AddEvent}/>
                    <UserRoute exact path="/futsallist" component={FutsalList}/>
                    <UserRoute exact path="/eventlist" component={EventList}/>
                    <UserRoute exact path="/userprofile" component={ProfileUser}/>
                </Switch>
            </Router>
        </>
    );
};

export default Website;
