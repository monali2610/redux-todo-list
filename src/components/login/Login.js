import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.scss";
import { connect } from "react-redux";
import { login } from "../../redux/actions";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.email.value;
    login({ email: email, password: password });
  }

  return (
    <div className="login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <div className="space" />
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="button-view">
          <Button
            block="true"
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default connect(null, { login })(Login);
