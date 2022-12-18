import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { login } from "../redux/apiCalls";

const Container =styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background: linear-gradient(#ffffff73,#eec4d965),

   url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;

`;
const Wrapper =styled.div`
     width: 30%;
    
  
`;
const Form =styled.form`
    background-color: lightyellow;
    display: flex;
    flex-direction :column ;
    padding: 15px;

`;
const Title =styled.h1`
 padding:20px;
 width: 70%;
`;
const Input =styled.input`
 width: 80%;
 padding: 10px;
 margin: 10px;
 font-size:14px;
`;
const Agreement =styled.p`
 margin: 10px;

 
`;
const Button =styled.button`
  width: 30%;
   padding: 10px 30px;
 margin: 10px;
 background-color: teal;
 color: white;
 border: none;
 cursor: pointer;
 font-size: 20px;
 &:disabled{
  color: green;
  cursor: not-allowed;
 }
`;

const Link = styled.a`
  margin: 5px 10px;
  text-decoration: underline;
  cursor:pointer;

`;

const Error = styled.span`
   color : red;
`;

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const dispatch =useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
 
 
  const handleClick = (e)=>{
    e.preventDefault();
    login(dispatch,{username , password});
  }


  return (
    <Container>
      <Wrapper>
        
        <Form>
        <Title>SIGN IN</Title>
          <Input placeholder="username"  onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="password" 
            type="password"
          onChange={(e)=>setPassword(e.target.value)}/>
        
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
         { error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
