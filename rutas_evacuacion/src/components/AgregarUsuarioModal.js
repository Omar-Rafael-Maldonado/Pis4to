import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AgregarUsuarioModal = ({ show, handleClose }) => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        rol: '',
    });

    const roles = ['Docente', 'Administrativo', 'Estudiante'];

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUsuario({
            ...usuario,
            [name]: value,
        });
    };

    const handleSelectChange = (event) => {
        setUsuario({
            ...usuario,
            rol: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar alguna acción con los datos del usuario, como enviarlos al backend
        console.log('Datos del usuario:', usuario);
        // Cerrar el modal después de enviar los datos o realizar alguna acción
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNombre">
                        <Form.Label>Nombres:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa nombres"
                            name="nombre"
                            value={usuario.nombre}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formApellido">
                        <Form.Label>Apellidos:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa apellidos"
                            name="apellido"
                            value={usuario.apellido}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formCedula">
                        <Form.Label>Número de Cédula:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa número de cédula"
                            name="cedula"
                            value={usuario.cedula}
                            onChange={handleInputChange}
                        />
                        <Form.Text className="text-muted">
                            Verificado
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formRol">
                        <Form.Label>Rol:</Form.Label>
                        <Form.Control
                            as="select"
                            value={usuario.rol}
                            onChange={handleSelectChange}
                        >
                            <option value="">Selecciona un rol</option>
                            {roles.map((rol, index) => (
                                <option key={index} value={rol}>
                                    {rol}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Agregar Usuario
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AgregarUsuarioModal;
