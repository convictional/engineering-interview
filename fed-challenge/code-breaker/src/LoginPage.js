import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { loginUser } from "./api";

function LoginPage({ history }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // TODO: finish form submission by handling "api" response
    // once user is logged in, redirect them to main page
    // make sure to handle when response rejects with error (BONUS: add error message to UI)
    //////////////////
    // loginUser(data)
  };

  return (
    <Page>
      <h1>Code Breaker - Sign In</h1>
      <Container>
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
      </Container>
    </Page>
  );
}

export default LoginPage;

// styles

const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;

  & > h1 {
    max-width: 500px;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Container = styled.div`
  width: 500px;
`;
