
import { Search } from "@mui/icons-material"
import { Badge } from "@mui/material"
import styled from "styled-components"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
 height:60px;


`
const Wrapper =styled.div`
   padding:10px 20px;
   display: flex;
   justify-content: space-between;

`
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;

`
const Language=styled.span`
  font-size: 14px;
   cursor: pointer;
`
const SearchContainer=styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 7.5px;
    padding: 5px;
`
const Input=styled.input`
border:none;
outline: none;
`
const Center=styled.div`
flex: 1;
text-align: center;
`
const Logo =styled.h1`
  font-weight: bold;
 
`
const Right=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
margin-left: 10px;

`
const MenuItem =styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 5px;
  

`
const Navbar = () => {
  return (
    <Container>
      <Wrapper >
          <Left>
            <Language>
             En
            </Language>
             <SearchContainer>
                <Input/>
               <Search  style={{color:"gray" ,fontSize:16}}/>
             </SearchContainer>
            </Left>
          <Center><Logo>E-Com</Logo></Center>
          <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
              <Badge color="secondary" badgeContent={1000} max={999}>
               <ShoppingCartIcon />
               </Badge>
              </MenuItem>
              
           </Right>
      </Wrapper>
      
    </Container>
  )
}

export default Navbar
