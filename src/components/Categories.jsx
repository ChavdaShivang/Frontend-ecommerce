import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Heading = styled.div`
  width: 98%;
  height: 30px;
  padding: 10px;
  margin: 10px 0px;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: #fff7f7;
`;

const Categories = () => {
  return (
    <>
    <Heading>All Categories</Heading>
    <Container>
    
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container></>
  );
};

export default Categories;
