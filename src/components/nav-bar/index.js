import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import './index.css';


function NavBar(props) {
    const titulo = (props.titulo ? props.titulo : '');
    return(
    <Navbar className="NavBar justify-content-between" variant="dark" sticky="top">
        <Navbar.Text className="text-center">
            <Link to="/" className="fs-4">
                <HiOutlineArrowLeft /> 
                <span className="d-none d-lg-inline"> Voltar</span>
            </Link>
        </Navbar.Text>
        <Navbar.Text className="text-center text-secondary">
            <span className="fs-4">{titulo}</span>
        </Navbar.Text>
        <Navbar.Text className="text-end text-secondary">
            <span className="fs-4 d-none d-lg-inline">High Energy Physics</span><br />
            <span className="fs-6 fw-light fst-italic d-none d-lg-inline">the card game</span>
        </Navbar.Text>
    </Navbar>
    );
}

export default NavBar;
