import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import './navbar.css'
import logoAtlantis from './ATL.png'

function Navigation() {
    return (
        <>
            <Navbar className='navBar' expand="lg" fixed='top'>
                <Container fluid>
                    <Navbar.Brand href="#home"><img className='logoAtlantis' src={logoAtlantis}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" /> 
                    <Navbar.Collapse id="navbarScroll" className="flex-row-reverse">              
                        <Nav className='nav' navbarScroll>
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Cadastro Clientes</Nav.Link>
                            <Nav.Link>Listagem Clientes</Nav.Link>
                            <Nav.Link>Realizar Hospedagem</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;