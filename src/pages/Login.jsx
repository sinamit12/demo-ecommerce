import styled from "styled-components"

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
`;

const Link = styled.a`
  margin: 5px 10px;
  text-decoration: underline;
  cursor:pointer;

`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        
        <Form>
        <Title>SIGN IN</Title>
          <Input placeholder="username" />
          <Input placeholder="password" />
        
          <Button>CREATE</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
