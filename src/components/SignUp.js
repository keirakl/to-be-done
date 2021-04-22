import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMsg: "",
        }
    }

    handleSignUp() {
        if (!this.newUsername || !this.newPassword) {
            this.setState({ errorMsg: "Enter a valid username and password!" });
        } else {
            this.newID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

            let existingData = localStorage.getItem('users');
            existingData = existingData ? JSON.parse(existingData) : [];
            existingData.push({
                id: this.newID,
                username: this.newUsername,
                password: this.newPassword,
            });

            localStorage.setItem('users', JSON.stringify(existingData));
            // console.log(JSON.parse(localStorage.users));
            this.props.closeSignup();
        }
    }

    render() {
        let newID;
        let newUsername;
        let newPassword;

        return (
            <Modal show={this.props.showSignup} onHide={() => this.props.closeSignup()}>
                <Modal.Header closeButton>
                    <Modal.Title>Create an account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fvalidationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Username..." onChange={e => this.newUsername = e.target.value} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => this.newPassword = e.target.value} />
                        </Form.Group>
                        <p style={{ color: 'red' }}>{this.state.errorMsg ? this.state.errorMsg : ""}</p>
                        <Button onClick={() => this.handleSignUp()} variant="primary">
                            Sign Up
                            </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default SignUp;