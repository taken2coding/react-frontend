import React from 'react';
import styled from 'styled-components';
import maryImage from '../assets/images/mary-mother.jpg'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

const ImageContainer = styled.div`
  width: 60%;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const AsideContainer = styled.aside`
  width: 30%;
  margin-top:-419px;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

   &.aside {
    background-color: green;
  }

`;

function Home() {
  return (
    <HomeContainer>
      <ImageContainer>
        <img src={maryImage} alt="Home Image" />
      </ImageContainer>
      <AsideContainer className='aside'>
        <h2>Welcome to our website!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      </AsideContainer>
    </HomeContainer>
  );
}

export default Home;


