import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
 
`;
const Wrapper = styled.div`
 display: flex;
 padding: 50px;
`;
const ImageContainer = styled.div`
 flex: 1;
`;

const Image= styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
 flex:1;
 padding: 0 50px;
`;
const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 400;
`;

const Desc = styled.p`
 margin-bottom: 20px;
 margin-right: 40px;
`;

const Price = styled.div`
font-size: 40px;
margin-bottom: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Filter = styled.div`
 display: flex;
  align-items: center;
`;
const FilterTitle = styled.div`
  font-size:20px ;
  font-weight: 400;
 `;
const FilterColor = styled.div`
   height: 15px;
   width: 15px;
   border-radius: 50%;
   background-color: ${ (props)=>props.color};
   margin: 5px;
   cursor: pointer;

`;

const FilterSize = styled.select`
  margin-left: 10px;
`;
const FilterSizeOption = styled.option`
 
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.div`
border: 1px solid green;
height: 25px;
width: 25px;
border-radius: 8px;
 margin:10px;
 display: flex;
 align-items: center;
 justify-content: center;
`;
const Button = styled.button`
 border: 1px solid green;
 padding: 10px;
 cursor: pointer;

 &:hover{
    background-color: #f8f4f4;
 }
`;



const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
     <Wrapper>
        <ImageContainer>
           <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </ImageContainer>
        <InfoContainer>
            <Title>Denim Jumpsui</Title>
            <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam amet voluptatem delectus quis consectetur exercitationem. Incidunt adipisci excepturi tempora id magni. Natus nisi culpa corrupti. Corrupti, tenetur. Laudantium, recusandae quisquam?</Desc>
            <Price>$20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray" />
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
                </Filter>
            </FilterContainer>
           
            <AddContainer>
                <AmountContainer>
                    <RemoveIcon />
                    <Amount>1</Amount>
                    <AddIcon />
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
            
        </InfoContainer>
    </Wrapper>  
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
