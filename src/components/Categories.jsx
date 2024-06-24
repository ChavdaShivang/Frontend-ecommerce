import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  margin: 0px 0px 30px;
  padding: 20px;
  justify-content: space-around;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Heading = styled.div`
text-align: center;
  width: 98%;
  height: 30px;
  padding: 10px;
  margin: 10px 0px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.31;
  background-color: white;
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
