import React from 'react';
import {Container,Image} from 'react-bootstrap';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import '../tutorial/indeex.css';
import { Slide,Fade,Roll } from 'react-reveal';

function Tutorial (){
  
    const hidrogenio = require('../../assets/cards/images/hidrogenio.png').default;
    const neutron = require('../../assets/cards/images/neutron.png').default;
    const proton = require('../../assets/cards/images/proton.png').default;
    const quarkup = require('../../assets/cards/images/quark-up.png').default;
    const quarkdown =  require('../../assets/cards/images/quark-down.png').default;
    const gluon = require('../../assets/cards/images/gluon.png').default;
    const tutorial1 = require('../../assets/tutorial/tutorial1.png').default;
    const tutorial2 = require('../../assets/tutorial/tutorial2.png').default;
    const gellman = require('../../assets/cards/images/gellmann.png').default;

    return(
    <>
        <NavBar titulo= "Tutorial" />
        <Container fluid>
            

            <section>
                <div className='context'>
                    <Fade left>
                        <h1>HEP - The Card Game</h1>
                    </Fade>
                    <Fade right>
                        <h3>Tutorial </h3>
                    </Fade>
                    <Fade top>
                        <p>
                            Os jogadores deverão formar um átomo escolhido no início da partida a partir de partículas elementares. Quem formar o átomo primeiro, vence.
                            Por exemplo, um jogo onde o objetivo é formar um átomo de hidrogênio
                        </p>
                        <Image src = {hidrogenio} alt= '' className='card rounded mx-auto d-block'/>
                    </Fade>
                    
                </div>
            </section>

            <section> 
                <div className='context'>                              
                    <p>
                    Veja que o número atômico é 1, logo os jogadores nesta partida deverão formar 1 próton, 1 nêutron e 1 elétron. Quem formar primeiro o hidrogênio, vence!
                    Mas neste jogo os gênios da física criam as partículas elementares somente, assim para formar um prótons e nêutrons é preciso:
                    </p>           
                    <div>
                    <Slide left>
                        <div className='d-flex justify-content-center'>
                            <h3>Próton = 2 quarks up + 1 quark down + 1 glúon</h3>
                        </div>
                    </Slide>
                    <div className="d-flex justify-content-center">
                    
                    <Slide top>
                        <Image src = {proton} alt= '' className='card2 rounded mx-auto d-block'/>
                    </Slide>
                    <h3 className="align-self-center"> = 2x </h3>
                    <div>
                        <Image src = {quarkup} alt= '' className='card2 rounded mx-auto d-block'/>
                    </div>
                    <h3 className="align-self-center"> +1x </h3>
                    <div>
                        <Image src = {quarkdown} alt= '' className='card2 rounded mx-auto d-block'/>
                    </div>
                    <h3 className="align-self-center"> +1x </h3>
                    <Slide top>
                        <Image src = {gluon} alt= '' className='card2 rounded mx-auto d-block'/>
                    </Slide>
                    </div>
                   
                    </div>
                  


                    <div>
                    <Slide right>
                        <div className='d-flex justify-content-center'>
                            <h3>Nêutron =  1 quark up + 2 quarks down + 1 glúon</h3>
                        </div>
                    </Slide>
                    <div className="d-flex justify-content-center">
                    <Slide left>
                        <Image src = {neutron} alt= '' className='card2 rounded mx-auto d-block'/>
                    </Slide>
                    <h3 className="align-self-center" > = 1x </h3>
                    <div>
                        <Image src = {quarkup} alt= '' className='card2 rounded mx-auto d-block'/>
                    </div>
                    <h3 className="align-self-center"> +2x </h3>
                    <div>
                        <Image src = {quarkdown} alt= '' className='card2 rounded mx-auto d-block'/>
                    </div>
                    <h3 className="align-self-center"> +1x </h3>
                    <Slide bottom>
                        <Image src = {gluon} alt= '' className='card2 rounded mx-auto d-block'/>
                    </Slide >
                    </div>
                 
                    </div>
                   
                </div>
            </section>

            <section >
                <div className='context'>                  
                    <h3>Início da Partida </h3>
                    <p>
                    Suponha que vc escolher o deck de gênio Murray GellMann, após embaralhamento sua mão inicial é essa:
                    </p>
                   <div className='row'>
                    <div className='col'>
                        <Roll left>
                            <Image src = {gellman} alt= '' className='card rounded mx-auto d-block'/>
                        </Roll>
                    </div>
                    <div className='col align-self-center'>
                    <Slide right>
                        <p>
                            O gênio GellMann já começa na mesa, pois foi o gênio escolhido pelo jogador.
                        </p>
                    </Slide>

                    </div>
                    </div>

                    <div className='cartas'>
                        <p>A sua mão inicial foi:</p>
                    
                    <div className="d-flex justify-content-center">                    
                        <div><Image src = {quarkup} alt= '' className='card2 rounded mx-auto d-block'/> </div>               
                        <div><Image src = {quarkup} alt= '' className='card2 rounded mx-auto d-block'/></div>
                        <div><Image src = {quarkdown} alt= '' className='card2 rounded mx-auto d-block'/> </div>          
                        <div><Image src = {gluon} alt= '' className='card2 rounded mx-auto d-block'/>  </div>
                            <div className='texto'>
                            <p >Caso o jogador não goste da mão selecionada é possível realizar um mulligan, nesse processo o 
                                jogador pode descartar a mão, embaralhar novamente, e comprar do topo 4 quartas, com o pagamento 
                                de descartar 1 carta dentre as 4 compradas.Cada mulligan feito é pago com o descarte de 1 carta.
                            </p>   
                            </div>
                    </div>
                    </div>             
                </div>
                
            </section>

            <section>

  
            <div className='d-flex bd-highlight turno'>   
            <Slide left>
            <div className='context p-2 flex-fill bd-highlight'>       
                <h2>1º Turno</h2>
                <div>          
                    <Image src = {tutorial1} alt= '' className='card3 rounded float-left'/>
                    <div className='texto2'>
                        <p>
                            O jogador que inicia o jogo não compra carta. 
                            No primeiro turno todos os jogadores só tem 1 energia para gastar. 
                            Todas as cartas têm o custo de energia marcado em sua descrição, veja:
                        </p>
                    </div>
                </div>  

                <div>                    
                    <Image src = {tutorial2} alt= '' className='card3 rounded float-left'/>
                    <div className='texto2'>
                        <p>
                        Com essa habilidade o jogador pode jogar a jogar a carta quark down por 2 – 1 energias, ou seja, paga somente 1 e joga a carta.
                        Por isso no primeiro turno ele poderia jogar qualquer quark, seja down ou up, já que ambos têm o mesmo custo de energia.
                        Ainda no primeiro turno, quando o primeiro jogador fizer a jogada e terminar seu turno, o próximo jogador, antes de jogar, deve comprar uma carta. E assim será para o resto do jogo, todo jogador, antes de iniciar seu turno, compra uma carta.
                        Caso o jogador não queira usar suas energias disponíveis é só escolher passar fase até que termine o turno.
                        O mais promissor no jogo é usar suas energias o mais efetivamente possível, tentando desperdiçar o menos possível.
                        </p>
                    </div>
                   
                </div>   
                    
            </div>
            </Slide> 
            <Slide right> 
            <div className='context p-2 flex-fill bd-highlight'>       
                <h2>2º Turno</h2>
                              
                    <div>
                        <p>
                        No segundo turno os jogadores terão disponíveis 2 energias para serem gastas,
                         na fase inicial de cada jogador deve-se comprar 1 carta.
                        </p>
                    </div>
                                  
                <div>                    
                    <h3>Turnos seguintes</h3>
                   <p>A partida prossegue do mesmo modo até alguém formar o elemento atômico escolhido como condição de vitória. 
                       O jogo possui várias cartas que trazem reviravoltas e habilidades diferentes. Comece a jogar e descubra 
                       as incríveis interações que criamos para vocês!
                    </p>
                </div>   
                   
                 
                    
            </div>
            </Slide> 
            </div>
            </section>
           
        </Container>
        <Footer />
    </>
    );
}

export default Tutorial;
