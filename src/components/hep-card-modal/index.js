import React from 'react';
import { Badge, Modal, Image, Container, Row, Col, Stack} from 'react-bootstrap';
import './index.css';


function HEPCardModal(props) {

    if (!props.card) {
        return (
            <></>
        );
    }

    const card = props.card;
    const imagem = require('../../assets/cards/images/' + card.imagem).default;

    return (
    <Modal className="HEPCardModal" show={props.show} onHide={props.onHide} size="lg" fullscreen="lg-down" centered>
        <Modal.Header closeButton>
            <Modal.Title>{card.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col className="col-12 col-md-5 mb-3 text-center">
                        <Image src={imagem} alt={card.nome} style={{maxWidth: '285px'}} thumbnail />
                    </Col>
                    <Col className="col-12 col-md-7">
                        <Row>
                            <Col className="col-12 mb-3">
                                <Stack direction="horizontal" gap={2}>
                                    {card.genio ? <Badge bg="success">Gênio da Física</Badge> : ''}
                                    {card.tags.map((tag, idx) => <Badge key={'tag_'+idx} bg="primary">{tag}</Badge>)}
                                </Stack>
                            </Col>
                            <Col className="col-12">
                                <p>{card.descricao}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
    </Modal>
    );
}

export default HEPCardModal;
