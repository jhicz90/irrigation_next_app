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
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <Form.Group className='mb-3' controlId='pUser'>
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type='text' placeholder='Ingrese el nombre del usuario' />
                                    <Form.Text>Podra buscar con el código de usuario, nombres, apellidos o DNI</Form.Text>
                                </Form.Group>
                            </div>
                            <div className='col-12 col-md-6'>
                                <Form.Group className='mb-3' controlId='pChannel'>
                                    <Form.Label>Canal del predio</Form.Label>
                                    <Form.Control type='text' placeholder='Ingrese el nombre del canal' />
                                    <Form.Text>Podra buscar con el canal dentro de los predios que tiene el usuario o simplemente escribirlo</Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <Form.Group className='mb-3' controlId='pDateStart'>
                                    <Form.Label>Fecha de entrega</Form.Label>
                                    <div className='d-flex gap-2'>
                                        <Form.Control type='datetime-local' />
                                        <Form.Control type='datetime-local' readOnly />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <Form.Group className='mb-3' controlId='pFlow'>
                                            <Form.Label>Caudal de entrega</Form.Label>
                                            <Form.Control type='number' placeholder='Ingrese el caudal a entregar' />
                                        </Form.Group>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <Form.Group className='mb-3' controlId='pTotalHours'>
                                            <Form.Label>Horas total de uso</Form.Label>
                                            <Form.Control type='number' readOnly />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <Form.Group className='mb-3' controlId='pVol'>
                                    <Form.Label>Volumen a entregar</Form.Label>
                                    <Form.Control type='number' placeholder='Ingrese el volumen a entregar' readOnly />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <Form.Group className='mb-3' controlId='pObs'>
                                    <Form.Label>Observación</Form.Label>
                                    <Form.Control type='text' as='textarea' rows={3} />
                                </Form.Group>
                            </div>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </Layout>
    )
}
