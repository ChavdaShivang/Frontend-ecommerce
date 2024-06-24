import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1ebe7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div`
  font-weight: 500;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px 0px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 5px 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: all 2s ease;
  &:hover {
    text-decoration: underline;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Label>FIRST NAME</Label>
          <Input placeholder="Enter first name" />
          <Label>LAST NAME</Label>
          <Input placeholder="Enter last name" />
          <Label>USERNAME</Label>
          <Input placeholder="Enter username" />
          <Label>EMAIL</Label>
          <Input placeholder="Enter email" />
          <Label>PASSWORD</Label>
          <Input placeholder="Enter password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
        ALREADY HAVE AN ACCOUNT? <Link href="/login">SIGN IN</Link>
      </Wrapper>
    </Container>
  );
};

export default Register;
