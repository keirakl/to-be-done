import React from "react";
import { Button, Modal, } from "react-bootstrap";

class LogInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //show: true,
        }
    }

    logIn() {
        return <Button href="/home" variant="outline-dark">Log In</Button>;
    }

    render() {
        return (
            <div>
                <h1>Log In Page</h1>
                { this.logIn()}
            </div>
        )
    }
}

export default LogInPage;