import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import SignUp from "../components/SignUp";
// import { Redirect } from "react-router-dom";

class LogInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMsg: "",
            username: "",
            password: "",
        }
    }

    renderSignUp = () => {
        return <SignUp showSignup={this.state.showSignup} closeSignup={() => this.setState({ showSignup: false })} />
    }

    handleLogin() {
        if (!this.currUsername || !this.currPassword) {
            this.setState({ errorMsg: "Enter a valid username and password!" });
        } else {
            if (localStorage.getItem('users').length === 0) {
                this.setState({ errorMsg: 'Please sign up first!' });
            } else {
                const users = JSON.parse(localStorage.getItem('users'));
                // console.log(users);
                const user = users.find(user => user.username === this.currUsername);

                if (user) {
                    if (user.username === this.currUsername && user.password === this.currPassword) {
                        this.setState({ errorMsg: '' });
                        localStorage.setItem("currUser", JSON.stringify({
                            id: user.id,
                            username: user.username,
                        }));
                        console.log(JSON.parse(localStorage.currUser));

                        this.props.history.push('/home');

                    } else this.setState({ errorMsg: 'Wrong password!' });
                } else this.setState({ errorMsg: 'Username has not been registered!' });
                //how to clear form fields after a failed attempt? tried setting input value={this.state...} but got error?????????????

            }
        }
    }


    render() {
        let currUsername;
        let currPassword;
        return (
            <Container className="bg-dark d-flex p-0 m-0 flex-column justify-content-center col-12 vh-100">
                <Container className="bg-light p-5 d-flex text-dark flex-column justify-content-around col-lg-4 col-md-8 rounded">
                    <h1>To Be Done</h1>
                    <h2>Log In</h2>
                    <p>or <Button onClick={() => this.setState({ showSignup: true })}>Sign Up</Button></p>
                    <div>{this.renderSignUp()}</div>
                    <Form>
                        <Form.Group controlId="fvalidationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Username..." onChange={e => this.currUsername = e.target.value} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => this.currPassword = e.target.value} />
                        </Form.Group>
                        <p style={{ color: 'red' }}>{this.state.errorMsg ? this.state.errorMsg : ""}</p>
                        <Button onClick={() => this.handleLogin()} variant="primary" >
                            Login
                        </Button>
                    </Form>
                </Container>
            </Container >
        )
    }
}

export default LogInPage;