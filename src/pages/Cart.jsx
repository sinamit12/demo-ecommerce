import { flexbox } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import React, { useEffect } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import StripeCheckout  from 'react-stripe-checkout';
import { useState } from 'react';
import { userRequest } from '../requestMethods';
import { useNavigate} from "react-router-dom"



//const KEY = process.env.REACT_APP_STRIPE ;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Cart = () => {
   const cart = useSelector(state=>state.cart);
   const [stripeToken , setStripeToken] = useState(null);
   const history = useNavigate()

   const onToken = (token) => {
       setStripeToken(token);
   }
   console.log(stripeToken);

   useEffect(()=>{
 
    const makeRequest = async ()=>{
      try{
      const res = await userRequest.post("/checkout/payment",{
        tokenId: stripeToken.id,
        amount: cart.total *100 ,
       
      })
      history("/success" , {data :res.data});
      }catch(err){

      }
    }
    stripeToken &&  makeRequest();
   },[stripeToken , cart.total , history])
  
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
              {  cart.products.map(product => ( <Product>
                <ProductDetail>
                    <Image src={product.img}/>
                    <Details>
                      <ProductName>
                       <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductID>
                         <b>ID:</b>{product._id}
                      </ProductID>
                      <ProductColor color={product.color}/>
                      <ProductSize>
                         <b>Size:</b>{product.size}
                      </ProductSize>
                       
                    </Details>
                </ProductDetail>
                <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
              </PriceDetail>
              </Product>
              ))
              }
             

            </Info>
            <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout 
         name = "E-Com"
         image ="https://i.ibb.co/DG69bQ4/2.png"
         billingAddress
         shippingAddress
         description={`Your total is $${cart.total}`}
         amount={cart.total*100}
         token={onToken}
         stripeKey="pk_test_51M5q2SJnpheM3nRnkV0c0v7oCQ5eJUk9T0qC6x3Cr9NQEi1sBNsHp4p6fWPiEZXhA8Ezc5q1pKKDqbuM2eISFAx200XNglkF0l"
       >

         <Button>CHECKOUT NOW</Button>
       </StripeCheckout>
            
          </Summary>
          </Bottom>

        </Wrapper>

         
        <Footer/>
      
    </Container>
  )
}

export default Cart
