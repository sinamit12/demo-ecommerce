import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import {useState} from "react";


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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const [sort, setSort] = useState("Newest");

const handleFilters = (e) =>{
  const value = e.target.value;
  
  setFilters({
    ...filters,
    [e.target.name] : value
  });

}
console.log(filters);
  return (
    <Container>
      <Navbar />
      <Announcement/>
      <Title>{cat}</Title>
      <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
             <Option  disabled >
                 Color
             </Option>
             <Option>White</Option>
             <Option>Black</Option>
             <Option>Red</Option>
             <Option>Blue</Option>
             <Option>Yellow</Option>
             <Option>Green</Option>
             
          </Select >
          <Select name="size" onChange={handleFilters}>
             <Option  disabled >
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
        <Select onChange={(e)=> setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
      </Filter>
      </FilterContainer>
     
      <Products cat={cat} sort={sort} filters={filters}/>
       <Newsletter />
       <Footer />
    </Container>
  )
}

export default ProductList
