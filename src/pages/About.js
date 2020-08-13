import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Carousel from "../components/Carousel"
import style from "./style.css"

const About = () => {
  return (
      <>
    <Container fluid className="center">
      <Row>
        <Col className="h1" size="md-6 sm-12">
          <h1 className="center">Trish Ness</h1>
        </Col>
        </Row>
    </Container>
    <Container>
        <Row>
        <Col size="md-6 sm-12">
          <img src="../components/Carousel/trish.jpg" alt="Whoops!"/>
        </Col>
      </Row>
      <Row>
        <Col size="med-6 sm-12">
          <p className="center">I am a full stack developer with a background in management and office administration. This versatile history has embedded strong beliefs in teamwork, critical thinking and attention to detail within me.</p>
          <br/>
          <p className="center">Born and raised in Seattle, I have witnessed this industry bloom in one of the country's tech meccas over the past 20 years. I am excited to play my own role within this exciting, ever-changing and growing world!</p>
          <br/>
          <p className="center"><strong>Technical Skills</strong></p>
          <br/>
          <p className="center">HTML/CSS/Dynamic Generation</p>
          <br/>
          <p className="center">JacaScript/jQuery</p>
          <br/>
          <p className="center">ReactJS/JSX</p>
          <br/>
          <p className="center">Node</p>
          <br/>
          <p className="center">Express Servers</p>
          <br/>
          <p className="center">MySQL/Sequenlize</p>
          <br/>
          <p className="center">Mongo/Mongoose</p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default About;