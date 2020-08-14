import React from "react";
import { Col, Row, Container } from "../components/Grid"
import Projects from "../components/Card/index"
// import WineKey from "../components/Card/WineKey"

const Portfolio = () => {
    return (
        <>
        <Container fluid className="h1 center">
      <Row>
        <Col className="justify-content-center" size="md-12 sm-12">
          <h1 id="portfolio" className="center">Portfolio</h1>
        </Col>
            </Row>
        </Container>
        <Container fluid className="cards center">
            <Row>
                <Col className="cards center" size="md-12 sm-12">
                    <Projects className="cards center"></Projects>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Portfolio;