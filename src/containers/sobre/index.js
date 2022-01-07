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
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
                                vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos 
                                e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como 
                                também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. 
                                Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens 
                                de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração 
                                eletrônica como Aldus PageMakerLorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
                                vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos 
                                e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como 
                                também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. 
                                Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens 
                                de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração 
                                eletrônica como Aldus PageMaker..
                            </p>
                        </div>     
                    </div>
                </div>
            </section>
            <section>
                <div className='container reveal'>
                    <h2>Titulo</h2>
                    <div className='cards'>
                        <div className='text-card'>
                            <h3>Titile</h3>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
                                vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos 
                                e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.
                            </p>
                        </div>
                        <div className='text-card'>
                            <h3>Titile</h3>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
                                vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos 
                                e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.
                            </p>
                        </div>

                        <div className='text-card'>
                            <h3>Titile</h3>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
                                vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos 
                                e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container reveal'>
                    <h2>Titulo</h2>
                    <div className='cards'>
                        <div className='text-card'>
                            <h3>Titile</h3>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
                                vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos 
                                e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.
                            </p>
                        </div>
                        <div className='text-card'>
                            <h3>Titile</h3>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
                                vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos 
                                e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.
                            </p>
                        </div>

                        <div className='text-card'>
                            <h3>Titile</h3>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e 
                                vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos 
                                e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.
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
