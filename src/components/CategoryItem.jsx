import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  overflow: hidden;
  height: 50vh;
  position: relative;
  border-radius: 20px;
  box-shadow: rgb(211, 212, 213) 0px 6px 24px 0px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: all 0.3s ease;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  &:hover + img {
    transform: scale(1.2);
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-decoration: none;
  transition: text-decoration 0.5s ease;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 600;

  transition: all 0.5s ease;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
        <Image src={item.img} />
      </Link>
    </Container>
  );
};

export default CategoryItem;
