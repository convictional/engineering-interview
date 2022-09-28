import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Header, Page, Wrapper } from "./Shared.styles";
// import { loginUser } from "./api";

function LoginPage({ history }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // TODO: finish form submission by handling "api" response
    // once user is logged in, redirect them to main page
    // make sure to handle when response rejects with error (BONUS: add error message to UI)
  };

  return (
    <Page>
      <Header>
        <h1 className="mb-0">Code Breaker</h1>
      </Header>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="usernameField">
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              ref={register()}
            />
          </Form.Group>

          <Form.Group controlId="passwordField">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              ref={register()}
            />
          </Form.Group>
          <Button block variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </Wrapper>
    </Page>
  );
}

export default LoginPage;
