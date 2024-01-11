import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AgregarNodoModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Nodo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formNombre">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el nombre" />
                    </Form.Group>

                    <Form.Group controlId="formLatitud">
                        <Form.Label>Latitud:</Form.Label>
                        <Form.Control type="number" step="any" placeholder="Ingrese la latitud" />
                    </Form.Group>

                    <Form.Group controlId="formLongitud">
                        <Form.Label>Longitud:</Form.Label>
                        <Form.Control type="number" step="any" placeholder="Ingrese la longitud" />
                    </Form.Group>

                    <Form.Group controlId="formCapus">
                        <Form.Label>Capus:</Form.Label>
                        <Form.Control as="select">
                            <option>Centro</option>
                            <option>Sur</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formFacultades">
                        <Form.Label>Facultades:</Form.Label>
                        <Form.Control as="select">
                            <option>Electricidad</option>
                            <option>Administrativo</option>
                            <option>Derecho</option>
                            <option>Medicina</option>
                        </Form.Control>
                        
                    </Form.Group>
                    <Form.Group controlId="formTipoNodo">
                        <Form.Label>Tipo de nodo:</Form.Label>
                        <Form.Control as="select">
                            <option>Pasillo</option>
                            <option>Bloque</option>
                            <option>Area abierta</option>
                            <option>Zona Segura</option>
                        </Form.Control>
                        
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
             
            </Modal.Footer>
        </Modal>
    );
};

export default AgregarNodoModal;

