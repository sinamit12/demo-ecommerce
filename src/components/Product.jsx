import styled from "styled-components";
import {Link, useLocation } from "react-router-dom"
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Info = styled.div`
 opacity: 0;
 width: 100%;
 height: 100%;
 position: absolute;
 top: 0;
 left: 0;
display: flex;
 align-items: center;
 justify-content: center;

 background-color: #b1a2a22b;
 z-index: 3;
 transition: all 0.5s ease;
  cursor: pointer;

`

const Container = styled.div`
 flex: 1;
 margin: 5px;
 min-width: 280px;
 height: 350px;
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
background-color: #d5e6e397;

 &:hover ${Info}{
    opacity: 1;
 }

`

const Circle = styled.div`
     width: 200px;
     height: 200px;
     border-radius: 50%;
     background-color: #f8f2f2;
    position: absolute;

`
const Image = styled.img`
  height: 75%;
  z-index: 2;
  
`


const Icon= styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 10px;
 transition: all 0.5s ease;
  
 &:hover{
     background-color: #dbeef5;
     transform: scale(1.1);
 }

 
`


const Product = ({item}) => {
const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <Container>
      <Circle />
    <Image src={item.img} ></Image>
        <Info>
          <Icon>
           <ShoppingCartIcon />
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
            <SearchIcon />
            </Link>
          </Icon>
           <Icon>
              < FavoriteIcon />
            </Icon>
     
        </Info>
    
</Container>
  )
}

export default Product
