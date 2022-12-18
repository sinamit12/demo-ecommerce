import AddIcon from '@mui/icons-material/Add';
import {Link, useLocation } from "react-router-dom"
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { publicRequest } from "../requestMethods";
import { useEffect ,useState } from "react";
import { addProduct } from '../redux/cartRedux';
import {useDispatch } from "react-redux"

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

  const location = useLocation();
  const id = location.pathname.split("/")[2];
 const [product , setProduct] = useState({});
 const [quantity , setQuantity] = useState(1);
 const [color , setColor] = useState("");
 const [size , setSize] = useState("");
 const dispatch = useDispatch()

 useEffect(() => {
    const getProduct =async ()=> {
        try{
          const res =  await publicRequest.get("/products/find/" + id);
          setProduct(res.data);
        }catch(err){}
    }
    getProduct();
 }, [id]);

 const handleQuantity = (type)=>{
  if(type === "dec"){
   quantity>1 && setQuantity(quantity- 1);
  }else  if(type === "inc"){
    setQuantity(quantity+ 1);
  }
 };
 const handleClick = ()=>{
  //update cart
  dispatch(addProduct({...product,quantity ,color,size}));
  
  
 }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
     <Wrapper>
        <ImageContainer>
           <Image src={product.img} alt="" />
        </ImageContainer>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc> {product.desc}</Desc>
            <Price>${product.price}</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    {product.color?.map( (c)=>
                    ( <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>)
                    )}
                   
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize onChange={(e)=> setSize(e.target.value)}>
                    {product.size?.map( (s)=>
                    ( <FilterSizeOption key={s}>{s}</FilterSizeOption>)
                    )}
                
              </FilterSize>
                </Filter>
            </FilterContainer>
           
            <AddContainer>
                <AmountContainer>
                    <RemoveIcon onClick ={()=>handleQuantity("dec")}/>
                    <Amount>{quantity}</Amount>
                    <AddIcon onClick ={()=>handleQuantity("inc")} />
                </AmountContainer>
                <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContainer>
            
        </InfoContainer>
    </Wrapper>  
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
