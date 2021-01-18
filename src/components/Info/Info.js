import React from 'react';
import Container from '../Container/Container';
import { info } from '../../data/dataStore';
import Hero from '../Hero/Hero';



const Info = () => (
  <Container>
    <Hero titleText={info.title} image={info.image} />
    <p>{info.description}</p>
  </Container>
);

export default Info;