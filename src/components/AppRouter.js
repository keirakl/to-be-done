import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LogInPage from "../pages/LogInPage";
import Home from "../pages/HomePage";

class AppRouter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    componentDidMount() {
        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", []);
        }
        if (localStorage.getItem("users") === null) {
            localStorage.setItem("toDoListss", []);
        }
        if (localStorage.getItem("currUser") === null) {
            localStorage.setItem("currUser", { "id": null, "username": null });
        }

    }



    render() {

        return (
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/" render={({ history }) => <LogInPage history={history} />} />
                </Switch>
            </Router>
        )

    }
}

export default AppRouter;