import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

function Menu () {
    return (
        <Container fluid className='menu'>
            <Row className='menu-row'>
                <Col className='menu-item text-center'>
                    <Link to="/" data-text="Jogar">Jogar</Link>
                </Col>
                <Col className='menu-item text-center'>
                    <Link to="/decks" data-text="Decks">Decks</Link>
                </Col>
                <Col className='menu-item text-center'>
                    <Link to="/tutorial" data-text="Tutorial">Tutorial</Link>
                </Col>
                <Col className='menu-item text-center'>
                    <Link to="/sobre" data-text="Sobre">Sobre</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Menu;
