import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: rgb(248, 247, 245);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  
  display: flex;
  justify-content: space-around;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border-bottom: 4px solid rgb(33, 42, 47);
  border-top-width: 0px;
  border-right-width: 0px;
  border-left-width: 0px;
  border-top-style: solid;
  border-right-style: solid;
  border-left-style: solid;
  color: rgb(33, 42, 47);
  
  width: 70%;
  padding-left: 20px;
  
`;

const Button = styled.button`
  width: 20%;
  border: none;
  margin: 2px;
  background-color: black;
  color: white;
  transition: all 0.2s ease;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
