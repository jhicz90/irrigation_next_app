import React from 'react'
import { Card, Form } from 'react-bootstrap'
import { Layout } from '../components'

export default function create() {
    return (
        <Layout>
            <Card>
                <Card.Body>
                    <Card.Title>Registrar orden de riego</Card.Title>
                    <Card.Subtitle className='text-muted'>Ingrese los datos para generar la orden de riego</Card.Subtitle>
                    <form className='py-3'>
                        <Form.Group className='mb-3' controlId='pUser'>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el nombre del usuario' />
                            <Form.Text>Podra buscar con el código de usuario, nombres, apellidos o DNI</Form.Text>
                        </Form.Group>
                    </form>
                </Card.Body>
            </Card>
        </Layout>
    )
}
