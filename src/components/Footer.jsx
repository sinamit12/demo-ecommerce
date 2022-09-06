import styled from "styled-components"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #e9e3e38f;
`;

const Left =styled.div`
  flex:1;
  padding: 20px;
`;
const Logo =styled.div`
font-size: 35px;
font-weight: bold;
padding: 10px;
margin-left: 15px;
`;
const Desc =styled.div`
  display: flex;
  flex-wrap:wrap;
  margin: 10px;
 
`;
const SocialContainer =styled.div`
 display: flex;

`;
const SocialIcon =styled.div`
 height: 40px;
 width: 40px;
 border-radius: 50%;
 color: white;
 font-size: 30px;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 10px;

`;

const Center =styled.div`
 flex: 1;
 
`;
const  Title=styled.div`
   font-size: 20px;
   font-weight:bold;
   margin-bottom:30px;
`;
const List =styled.div`
 display: flex;
 flex-wrap: wrap;
`;
const ListItem =styled.div`
  width: 50%;
  margin-bottom: 10px;
`;

const Right =styled.div`
  flex: 1;
 
`;
const ContactItem =styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment =styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>E-com</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquid ab minus error atque facere officiis provident amet beatae? Sapiente saepe dolore nobis distinctio quas sit soluta iste. Molestias, tenetur?</Desc>
            <SocialContainer>
                <SocialIcon style={{backgroundColor:"rgb(2, 17, 151)"}}  >
                   <FacebookOutlinedIcon />
                </SocialIcon >
                <SocialIcon  style={{backgroundColor:"rgb(241, 16, 129)"}} >
                    <InstagramIcon/>
                </SocialIcon >
                <SocialIcon  style={{backgroundColor:"rgb(86, 199, 243)"}}>
                     <TwitterIcon/>
                </SocialIcon>
                <SocialIcon style={{backgroundColor:"rgb(243, 58, 12)"}}>
                      <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title> Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Whisylist</ListItem>
                    <ListItem>Terms</ListItem>
                    
                </List>
           
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                 <RoomIcon style={{marginRight:"10px"}}/>  Raipur ,Chhattisgarh
            </ContactItem>
            <ContactItem>
                 <PhoneIcon style={{marginRight:"10px"}} />  +91 7828661660
             </ContactItem>
             <ContactItem>
                    <MailOutlineIcon  style={{marginRight:"10px"}} />  amitsingh90748@gmail.com
              </ContactItem>
             
                 <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>

    </Container>
  )
}

export default Footer
