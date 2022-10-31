import { flexbox } from '@mui/system';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`

`;
const Wrapper= styled.div`
  display:flex;
  flex-direction: column;
`;
const Title = styled.h1`
 text-align: center;
 margin: 10px 0px;
`;
const Top = styled.div`
  display: flex;
   justify-content: space-between;
   margin: 10px 20px;
 `;
const TopButton = styled.button`
  padding: 8px 10px;
  color: black;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props)=> props.type==="filled" ? "black" : "transparent"};
  color: ${(props)=> props.type==="filled" && "white" };
`;
const  TopTexts = styled.div`
  display:flex;
 
  `;
const  TopText = styled.div`
  margin: 0px 5px;
  text-decoration: underline;
`;
const Bottom = styled.div`
  display: flex;

`;
const Info = styled.div`
   flex: 3;
`;
const Product = styled.div`
 display: flex;
 border: 1px solid red;

`;
const ProductDetail = styled.div`
 flex: 2;
 display: flex;

`;

const Image = styled.img`
height: 200px;
width: 200px;
padding: 0px 10px;
`;
const Details = styled.div`
 padding: 20px 10px;
`;
const ProductName = styled.div`
margin-bottom: 15px;
`;
const ProductID = styled.div`
 margin-bottom: 15px;
`;
const ProductColor = styled.div`
 margin-bottom: 15px;
 width: 15px;
 height: 15px;
 border-radius: 50%;
 background-color: ${(props)=> props.color};
`;
const ProductSize= styled.div`
margin-bottom: 15px;
`;

const PriceDetail = styled.div`
 flex: 1;
`;
const PriceAmountContainer = styled.div``;
const ProductAmount = styled.div``;
const ProductPrice = styled.div``;
const Summary = styled.div`
flex:1;
`;




const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPING</TopButton>
            <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText >Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECHOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                    <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                    <Details>
                      <ProductName>
                       <b>Product:</b> Nike Running Shoe
                      </ProductName>
                      <ProductID>
                         <b>ID:</b>998093489062
                      </ProductID>
                      <ProductColor color="black"/>
                      <ProductSize>
                         <b>Size:</b>7
                      </ProductSize>
                       
                    </Details>
                </ProductDetail>
                <PriceDetail>
                   price
                </PriceDetail>
              </Product>
              <Product>P1</Product>
            </Info>
            <Summary>
              Summary
            </Summary>
          </Bottom>

        </Wrapper>

         
        <Footer/>
      
    </Container>
  )
}

export default Cart
