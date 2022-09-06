import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';


const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f3ddddb7;
  
`;
const Title = styled.h1`
  font-size: 55px;
  margin-bottom: 1px;
`;
const Desc = styled.div`
   font-size: 25px;
   font-weight:600;
   margin-bottom: 15px;
 
`;
const InputContainer = styled.div`
   width: 50%; 
   height: 40px;
   background-color: white;
   display: flex;
   border: 1px  solid lightgray;

  
 `;
const Input = styled.input`
   border: none;
  flex: 8;
  font-size: 20px;
  padding-left: 20px;
  text-decoration: none;

 
  
`;
const Button = styled.button`
 flex: 1;
 background-color: teal;
 border: none;
 color: white;

`;

const Newsletter = () => {

  return (
    <Container>

        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
           <Input type="email" placeholder="your email" />
           
           <Button>
                <SendIcon />
           </Button>
        </InputContainer>
    </Container>
        
  )
}

export default Newsletter
