import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
   margin: 10px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const  Filter= styled.div`
  display: flex;
  align-items: center;

`;
const FilterText =styled.div`
margin:5px;
font-size:18px;
font-weight: bold;

`;
const Select =styled.select`
margin:5px;
padding: 5px;
`;
const Option =styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
          <Select>
             <Option disabled selected>
                 Color
             </Option>
             <Option>White</Option>
             <Option>Black</Option>
             <Option>Red</Option>
             <Option>Blue</Option>
             <Option>Yellow</Option>
             <Option>Green</Option>
             
          </Select>
          <Select>
             <Option disabled selected>
                 Size
             </Option>
             <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
             
          </Select>
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
      </Filter>
      </FilterContainer>
     
      <Products />
       <Newsletter />
       <Footer />
    </Container>
  )
}

export default ProductList
