import React from 'react';
import {Container} from 'react-bootstrap';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import './index.css';


function Tutorial() {
    return (
    <>
        <NavBar titulo="Tutorial" />
        <Container fluid>
            <p className="text-white">Em construção...</p>
        </Container>
        <Footer />
    </>
    );
};

export default Tutorial;
