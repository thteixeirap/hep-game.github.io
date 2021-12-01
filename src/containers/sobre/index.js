import React from 'react';
import {Container} from 'react-bootstrap';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import './index.css';


function Sobre () {
    return(
    <>
        <NavBar titulo="Sobre" />
        <Container fluid>
            <p className="text-white">Em construção...</p>
        </Container>
        <Footer />
    </>
    );
}

export default Sobre;
