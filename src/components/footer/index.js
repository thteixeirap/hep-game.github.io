import { Navbar, Stack } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import './index.css';


function Footer() {
    return (
    <Navbar className="Footer" variant="dark" fixed="bottom">
        <Stack direction="horizontal" style={{width: '100%'}} gap={2}>
            <div>
                <span>&copy; 2021 High Energy Physics - the card game</span>
            </div>
            <a className="ms-auto" href="https://github.com/hep-game/hep-game.github.io/" target="_blank" rel="noreferrer">
                <FaGithub />
                <span className="d-none d-lg-inline"> GitHub</span>
            </a>
        </Stack>
    </Navbar>
    );
}

export default Footer;
