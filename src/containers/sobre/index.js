import React from 'react';
import {Container} from 'react-bootstrap';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import './index.css';


function Sobre () {

    window.addEventListener('scroll',reveal);
    const avatar_marcela = require('../../assets/sobre/imagem/marcela.png').default;
    const avatar_marco = require('../../assets/sobre/imagem/marcotulio.png').default; 
    const avatar_rafael = require('../../assets/sobre/imagem/rafael.png').default; 
    const avatar_savanna = require('../../assets/sobre/imagem/savanna.png').default; 
    const avatar_andre = require('../../assets/sobre/imagem/andre.png').default; 
    const avatar_thomas = require('../../assets/sobre/imagem/thomas.png').default;

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
                    <h2>O que é?</h2>
                    <div className='cards'>
                        <div className='text-card'>
                        <p> HEP-TCG (High Energy Physics - The Card Game) é um projeto que nasceu de iniciações científica (BIC, BICJr) e de programas de Bolsa Complementação Educacional (BCE), todos
                               produzidos no CEFETMG campus Divinópolis. O intuito é despertar o interesse de estudantes, de qualquer idade, para a física de partículas e atômica. Através
                               um jogo de carta online, por turnos, no estilo PVP (<i>player versus player</i>) e PVE (<i>player versus environment</i>). Com diversos conceitos
                               de física de partículas e física atômica colocados como regras do jogo, acreditamos que é possível despertar o interesse do público jovem e adulto por essas áreas
                               da Física e Química que são extremamente fascinante, mas que ainda tem um distanciamento do público devido a conceitos e modelos que normalmente são ensinados
                               e transmitidos através de estratégias tradicionais de ensino.
                        </p>
                        </div>     
                    </div>
                </div>
            </section>
            <section>
                <div className='container reveal'>
                    <h2>Produtores</h2>
                    <div className='cards row'>
                        <div className='text-card col-sm'>
                            <div className ="d-flex justify-content-center">
                                <img src = {avatar_rafael} alt= '' className='img '/>
                            </div>
                            <p>Rafael Marcelino do Carmo Silva é físico de partículas e orientador do projeto, sempre quis ver um Magic The Gathering voltado para a ciência, e aqui estamos tentando viver o sonhor. Bacharel
                               em Física pela UNESP - Rio Claro, mestre em física teórica pelo Insituto de Física Teórica - UNESP e doutor em física de partículas pelo Instituto
                               de Física da USP. Professor de Física do CEFETMG, insta @rafamarce. Gosto de jogar Path of Exile, Diablo e jogos de farming infinito, além de jogos
                               de carta.    
                            </p>
                        </div>
                        <div className='text-card col-sm'>
                            <div className ="d-flex justify-content-center">
                                <img src = {avatar_andre} alt= '' className='img'/>
                            </div>

                            <p> André Luiz Maravilha Silva é desenvolvedor e orientador do projeto, é professor no CEFETMG e possui graduação em Sistemas de Informação pela UFVJM, mestrado
                            e doutorado em Engenharia Elétrica pela UFMG.    
                            </p>
                        </div>

                        <div className='text-card col-sm'>
                            <div className ="d-flex justify-content-center">
                                <img src = {avatar_savanna} alt= '' className='img'/>
                            </div>
                            <p> Savanna Oliveira Campagnani é orientanda de BICJr e foi a primeira aluna a entrar no projeto, em fevereiro de 2021. Cursa o ensino médio no CEFETMG no curso Técnico em Mecatrônica. 
                            Participou no desenvolvimento do jogo como um todo, especialmente nas áreas de física atômica e métodos industriais de produção de metais.
                            </p>
                        </div>
                        <div className='text-card col-sm'>
                        <div className ="d-flex justify-content-center">
                            <img src = {avatar_thomas} alt= '' className='img'/>  
                        </div>                          
                            <p>  Thomás Teixeira Pereira é orientando de BCE e aluno do 5 º período do curso de Engenharia da Computação, entrou no projeto em outubro de 2021.
                            Desenvolve junto com o professor André toda a programação e implementação do jogo.
                            </p>
                        </div>
    
                    </div>
                </div>
            </section>
            <section>
                <div className='container reveal'>
                    <h2>Design Artístico</h2>
                    <div className='cards row'>
                        <div className='text-card col-sm'>
                            <div className ="d-flex justify-content-center">
                                <img src = {avatar_marcela} alt= '' className='img'/>
                            </div>
                            <p> Marcela Membrive é uma belorizontina nata. Nasceu em 2004 e hoje em dia cursa o ensino médio técnico em produção de moda no Cefet Divinópolis. 
                            Escolheu o curso por já estar familiarizada com a área de moda, arte e ilustração. Foi co-escritora do livro "Inversão", fez o design das personagens
                            e todas as ilustrações da obra. Procurava uma forma de produzir um trabalho escolar, com pesquisa e que utilizasse seus conhecimentos de ilustração 
                            prévios e em desenvolvimento, de forma que fosse útil para a comunidade escolar. <a href='https://www.instagram.com/mcela_ml/'  target="_blank" rel="noreferrer">Insta aqui</a>
    
                            </p>
                        </div>
                        <div className='text-card col-sm'>
                            <div className ="d-flex justify-content-center ">    
                                <img src = {avatar_marco} alt= '' className='img'/>
                            </div>
                            <p> Marco Túlio Amaral estudou informática no CEFETMG Divinópolis e foi responsável pela ilutração do gênio Dirac e as cartas de seu deck. Sua inspiração
                            foi no estilo de concept art de estúdios como Riot Games e Ubisoft.  <a href='https://www.instagram.com/mtamaral_/'  target="_blank" rel="noreferrer">Insta aqui</a>
    
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
