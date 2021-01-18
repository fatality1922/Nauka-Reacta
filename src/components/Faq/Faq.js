import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faq } from '../../data/dataStore';


const Faq = () => (

  <Container>
    <Hero titleText={faq.title} image={faq.image} />
    <h2>{faq.question1}</h2>
    <p>{faq.answer1}</p>
    <h2>{faq.question2}</h2>
    <p>{faq.answer2}</p>
  </Container>
);

export default Faq;