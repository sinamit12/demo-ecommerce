import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <ImageContainer>

        </ImageContainer>
        <InfoContainer>
            <Title></Title>
            <Desc></Desc>
            <Price></Price>
            <FilterContainer>
                <Filter></Filter>
                <Filter></Filter>
            </FilterContainer>
        </InfoContainer>
         
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
