import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import SignUp from "../components/SignUp";

class LogInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSignup: false,
            // datbase:
            // id is a random 8 char string of numbers and letters
            // {
            //     users: [{ id:'', username: 'os', password: '12345678' }, { id:'', username: 'sam', password: '178875678' }],
            //     currentuser: { id: '',  username: '', password: '', login: true }
            // }

            // taskDatabase: [
            //     id: {
            //         ["task1", "task2"]
            //          },
            //     id:
            //           { ['task2', 'task3']
            //           }
            //     ]

        }
    }

    handleShow = () => {
        return <SignUp showSignup={this.state.showSignup} closeSignup={() => this.setState({ showSignup: false })} />
    }

    render() {
        return (
            <Container className="bg-dark d-flex p-0 m-0 flex-column justify-content-center col-12 vh-100">
                <Container className="bg-light p-5 d-flex text-dark flex-column justify-content-around col-lg-4 col-md-8 rounded">
                    <h1>To Be Done</h1>
                    <h2>Log In</h2>
                    <p>or <Button onClick={() => this.setState({ showSignup: true })}>Sign Up</Button></p>
                    <p>{this.handleShow()}</p>
                    <Form>
                        <Form.Group controlId="fvalidationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Username..." />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button href="/home" variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Container>
            </Container >
        )
    }
}

export default LogInPage;