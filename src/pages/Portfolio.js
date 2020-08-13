import React from "react";
import { Col, Row, Container } from "../components/Grid"
import Wander from "../components/Card/Wander"
import WineKey from "../components/Card/WineKey"

const Portfolio = () => {
    return (
        <>
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <h1>Portfolio</h1>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Wander></Wander>
                    <WineKey></WineKey>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Portfolio;