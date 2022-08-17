import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";
import {sliderItems} from '../data'

const Container=styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   background-color: #f3a052;
   position: relative;
   overflow: hidden;
  
    
`
const Arrow= styled.div`
width: 50px;
height: 50px;
background-color: #f3d2d2;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom:0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;

`
const Wrapper= styled.div`
   height: 100;
   display: flex;
   transition: all 1.5s ease;
   transform: translateX(${props=> props.slideIndex * -100}vw);

`
const Slide=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};

`
const ImageConatiner=styled.div`
height: 100vh;
flex: 1;
`
const Image=styled.img`
 height: 80%;
 
`
const InfoConatiner=styled.div`
flex: 1;
padding: 50px;
`
const Title=styled.h1`
   font-size: 70px;
`
const Desc=styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`
const Button=styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 cursor:pointer;
`

const Slider = () => {
    const [slideIndex , setSlideIndex ] = useState(0);
    const handleClick = (direction)=>{

        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>(
               <Slide bg={item.bg}>
               <ImageConatiner>
                   <Image src={item.img}>
                   </Image>
               </ImageConatiner>
               <InfoConatiner>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOW NOW</Button>
               </InfoConatiner>
               </Slide>
            ))}
            
        </Wrapper>
        <Arrow  direction="right"onClick={()=>handleClick("right")} >
            <ArrowRightIcon />
        </Arrow>

    </Container>
  )
}

export default Slider
