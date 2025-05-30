import React from 'react';
import {Button, Container, StyledLink} from './styledcomponents/BaseElementStyle';

function About() {
  return (
  <Container>
        <div className='container-fluid about'>
          <h1 >About Us</h1>
          <p>This is the about page.</p>
          <StyledLink href="/profile">Keep Learning...</StyledLink>
        </div>
  </Container>
  );
}

export default About;

