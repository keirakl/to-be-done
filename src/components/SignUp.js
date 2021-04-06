import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

class SignUp extends React.Component {

    render() {

        return (

            <Modal show={this.props.showSignup} onHide={() => this.props.closeSignup()}>
                <Modal.Header closeButton>
                    <Modal.Title>Create an account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fvalidationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Username..." />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" onClick={() => this.props.closeSignup()}>
                            Sign Up
                            </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default SignUp;