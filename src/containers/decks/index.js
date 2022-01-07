import React from 'react';
import {Container, Row} from 'react-bootstrap';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import HEPCard from '../../components/hep-card';
import HEPCardModal from '../../components/hep-card-modal';
import "./index.css";

// Importa os dados das cartas do jogo
import cards from "../../assets/cards/cards.json";


function Decks() {

    const [show, setShow] = React.useState(false);
    const [cardInfo, setCardInfo] = React.useState(null);

    function handleShow(card) {
        setCardInfo({...card});
        setShow(true);
    }

    function handleClose() {
        setCardInfo(null);
        setShow(false);
    }

    return (
    <>
        <NavBar titulo="Decks" />
        <Container fluid>
            <Row className="decks-row g-4 d-flex justify-content">
                {cards.map((card, idx) => (
                    
                    <div className="decks-card" key={'card_'+idx} onClick={() => handleShow(card)}>
                        <HEPCard {...card} animar={true} />
                    </div>
                  
                ))}
            </Row>
            <HEPCardModal card={cardInfo} show={show} onHide={handleClose} />
        </Container>
        <Footer />
    </>
    );
}

export default Decks;
