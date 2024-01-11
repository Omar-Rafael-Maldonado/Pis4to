import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AgregarRutaModal = ({ show, handleClose }) => {
    const nodos = [
        { nombre: 'A1', latitud: 40.7128, longitud: -74.006, tipo: 'Zona Segura' },
        { nombre: 'A2', latitud: 34.0522, longitud: -118.2437, tipo: 'Bloque' },
        { nombre: 'A3', latitud: 41.8781, longitud: -87.6298, tipo: 'Zona Segura' },
        { nombre: 'B1', latitud: 51.5074, longitud: -0.1278, tipo: 'Pasillo' },
        { nombre: 'B2', latitud: 48.8566, longitud: 2.3522, tipo: 'Edificio' },
        { nombre: 'B3', latitud: 52.5200, longitud: 13.4050, tipo: 'Pasillo'},
    ];

    const [selectedNodeOrigen, setSelectedNodeOrigen] = useState(null);
    const [selectedNodeDestino, setSelectedNodeDestino] = useState(null);

    const nombresNodos = nodos.map((nodo) => nodo.nombre);

    const handleNodeOrigenSelection = (event) => {
        const selectedNodeName = event.target.value;
        const node = nodos.find((nodo) => nodo.nombre === selectedNodeName);
        setSelectedNodeOrigen(node);
        setSelectedNodeDestino(null);
    };

    const handleNodeDestinoSelection = (event) => {
        const selectedNodeName = event.target.value;
        const node = nodos.find((nodo) => nodo.nombre === selectedNodeName);
        setSelectedNodeDestino(node);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Ruta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formNodoOrigen">
                        <Form.Label>Nodo de Origen:</Form.Label>
                        <Form.Control as="select" onChange={handleNodeOrigenSelection}>
                            <option value="">Selecciona un nodo</option>
                            {nombresNodos.map((nombre, index) => (
                                <option key={index}>{nombre}</option>
                            ))}
                        </Form.Control>
                        {selectedNodeOrigen && (
                            <div>
                                <h5>Información del Nodo Origen:</h5>
                                <p>Nombre: {selectedNodeOrigen.nombre}</p>
                                <p>Latitud: {selectedNodeOrigen.latitud}</p>
                                <p>Longitud: {selectedNodeOrigen.longitud}</p>
                                <p>Tipo: {selectedNodeOrigen.tipo}</p>
                            </div>
                        )}
                    </Form.Group>

                    <Form.Group controlId="formNodoDestino">
                        <Form.Label>Nodo de Destino:</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={handleNodeDestinoSelection}
                            disabled={!selectedNodeOrigen}
                        >
                            <option value="">Selecciona un nodo</option>
                            {nombresNodos
                                .filter((nombre) => nombre !== selectedNodeOrigen?.nombre)
                                .map((nombre, index) => (
                                    <option key={index}>{nombre}</option>
                                ))}
                        </Form.Control>
                        {selectedNodeDestino && (
                            <div>
                                <h5>Información del Nodo Destino:</h5>
                                <p>Nombre: {selectedNodeDestino.nombre}</p>
                                <p>Latitud: {selectedNodeDestino.latitud}</p>
                                <p>Longitud: {selectedNodeDestino.longitud}</p>
                                <p>Tipo: {selectedNodeDestino.tipo}</p>
                            </div>
                        )}
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

export default AgregarRutaModal;
