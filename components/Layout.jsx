import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

import logo from '../public/logo.png'

export function Layout({ children }) {
    return (
        <div className='d-flex flex-column'>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            alt=''
                            src={logo.src}
                            width='30'
                            height='30'
                            className='d-inline-block align-top'
                        />
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='/create'>Orden de riego</Nav.Link>
                        <Nav.Link href='/search'>Buscar</Nav.Link>
                        <Nav.Link href='/about'>Acerca de</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='container p-3'>
                {children}
            </div>
        </div>
    )
}
