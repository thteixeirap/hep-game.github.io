import React from 'react';
import Tilt from 'react-parallax-tilt';
import {Image} from 'react-bootstrap';
import './index.css';


function HEPCard(props) {

    const imagem = require('../../assets/cards/imagens/' + props.imagem).default;

    if (props.animar) {
        return (
        <div className="HEPCard">
            <Tilt className="Tilt">
                <Image src={imagem} alt={props.nome} rounded />
            </Tilt>
        </div>
        );
    } else {
        return (
        <div className="HEPCard">
            <Image src={imagem} alt={props.nome} rounded />
        </div>
        );
    }
}

export default HEPCard;
