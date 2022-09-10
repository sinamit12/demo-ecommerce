import styled from "styled-components"

const Container =styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background: linear-gradient(#ffffff73,#eec4d965),

    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
`;
const Wrapper =styled.div`
     width: 50%;
    
  
`;
const Form =styled.form`
    background-color: lightyellow;
    display: flex;
   
    flex-wrap: wrap;
    padding: 15px;

`;
const Title =styled.h1`
 padding:20px;
 width: 70%;
`;
const Input =styled.input`
 width: 40%;
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
const Register = () => {
  return (
    <Container>
      <Wrapper>
        
        <Form>
        <Title>CREATE AN ACCOUNT</Title>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm passord" />
         
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
