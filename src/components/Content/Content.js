import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../../css/style'
import Navbar from "../Navbar/Navbar";
import Home from "../Pages/Home";
import Messages from "../Pages/Messages";





const Content = (props) =>{

    return(
        <Router>
            <div className="full-width">
                <div id="wrapper">
                    <Navbar/>
                    <div id="content-wrapper">
                        <Switch>
                            <Route exact path='/'>
                                <Home/>
                            </Route>
                            <Route path='/messages'>
                                <Messages dialogsData={props.dialogsData}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Content;