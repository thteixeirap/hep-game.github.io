import React from 'react';
import {Container} from 'react-bootstrap';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import './index.css';


function Sobre () {

    window.addEventListener('scroll',reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for(var i=0;i < reveals.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }
        }
    }
    return(
    <>
        <NavBar titulo= "Sobre" />
        <Container fluid>
            <div className='body-about'>
                <section>       
                    <div class="animated-title">
                        <div class="text-top">
                        <div>
                            <span>HEP</span>
                            <span>The Card Game</span>
                        </div>
                        </div>          
                        <div class="text-bottom">
                            <div>Sobre nós</div>
                        </div>
                    </div>
            </section>
            <section>
                <div className='container reveal'>                
                    <h2>Titulo</h2>
                    <div className='cards'>
                        <div className='text-card'>
                            <h3>Titile</h3>
                            <p>TOAQUI
                               HEP-TCG é um projeto que nasceu de projetos de iniciações científica (BIC e BICJr) e de programas de Bolsa Complementação Educacional (BCE), todos
                               produzidos no CEFETMG campus Divinópolis. O intuito é despertar o interesse de estudantes, de qualquer idade, para a física de partículas. Através
                               um jogo de carta online, pot turnos, no estilo PVP (<it>player versus player</i>) e PVE (<it>player versus environment</i>), com diversos conceitos
                               de física de partículas colocados como regras do jogo, acreditamos que é possível despertar o interesse do público por essa área da Física extremamente
                               fascinante.
                            </p>
                        </div>     
                    </div>
                </div>
            </section>
            <section>
                <div className='container reveal'>
                    <h2>Produtores</h2>
                    <div className='cards'>
                        <div className='text-card'>
                            <h3>RafaMarce</h3>
                            <p>Físico de partículas e sonhador, sempre quis ver um Magic The Gathering voltado para a ciência, e aqui estamos tentando viver o sonhor. Bacharel
                               em Física pela UNESP - Rio Claro, mestre em física teórica pelo Insituto de Física Teórica - UNESP e doutor em física de partículas pelo Instituto
                               de Física da USP. Professor de Física do CEFETMG, insta @rafamarce. Gosto de jogar Path of Exile, Diablo e jogos de farming infinito, além de jogos
                               de carta.    
                            </p>
                        </div>
                        <div className='text-card'>
                            <h3>André Maravilha</h3>
                            <p>TEXTOANDRE
    
                            </p>
                        </div>

                        <div className='text-card'>
                            <h3>Savanna Campagni</h3>
                            <p>TEXTOSAVANNA
    
                            </p>
                        </div>
    
                        <div className='text-card'>
                            <h3>Thomás Teixera</h3>
                            <p>TEXTOTHOMAS
    
                            </p>
                        </div>
    
                    </div>
                </div>
            </section>
            <section>
                <div className='container reveal'>
                    <h2>Design Artístico</h2>
                    <div className='cards'>
                        <div className='text-card'>
                            <h3>Marcela Membrive</h3>
                            <p>TEXTOMARCELA
    
                            </p>
                        </div>
                        <div className='text-card'>
                            <h3>Marco Túlio</h3>
                            <p>TEXTOMARCO
    
                            </p>
                        </div>

                        <div className='text-card'>
                            <h3>???</h3>
                            <p>TEXTO???
                            
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
        </Container>
        <Footer />
    </>
    );
}

export default Sobre;
