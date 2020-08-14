import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Carousel from "../components/Carousel"
import style from "./style.css"
import trish from "../components/Carousel/trish.jpg";
import trish1 from "../components/Carousel/trish1.jpg";
import trish3 from "../components/Carousel/trish3.jpg";

const About = () => {
  return (
      <>
    <Container fluid className="h1 center">
      <Row>
        <Col className="justify-content-center" size="md-12 sm-12">
          <h1 className="center">Hi, I'm Trish.</h1>
        </Col>
        </Row>
    </Container>
    <img className="img" src={trish1} alt="whoops"/>
    <Container fluid className="background">
        
      <Row>
        <Col className="bg" size="med-6 sm-12">
          <p className="center background">I am a full stack developer with a background in management and office administration. This versatile history has embedded strong beliefs in teamwork, critical thinking and attention to detail within me.
          <br/>
          <br/>
           Born and raised in Seattle, I have witnessed this industry bloom in one of the country's tech meccas over the past 20 years. I am excited to play my own role within this exciting, ever-changing and growing world!
          <br/>
          <br/>
          <br/>
           <strong>Technical Skills</strong>
          <br/>
          <br/>
           HTML/CSS/Dynamic Generation
          <br/>
           JacaScript/jQuery
          <br/>
           ReactJS/JSX
          <br/>
           Node
          <br/>
           Express Servers
          <br/>
           MySQL/Sequenlize
          <br/>
           Mongo/Mongoose</p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default About;