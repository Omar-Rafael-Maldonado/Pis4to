import React, { useState } from 'react';
import AgregarNodoModal from './AgregarNodoModal';
import AgregarRutaModal from './AgregarRutaModal';
import AgregarUsuarioModal from './AgregarUsuarioModal';

const MenuBar = () => {
    const [showAgregarNodoModal, setShowAgregarNodoModal] = useState(false);
    const [showAgregarRutaModal, setShowAgregarRutaModal] = useState(false);
    const [showAgregarUsuarioModal, setShowAgregarUsuarioModal] = useState(false);

    const handleCloseAgregarNodoModal = () => setShowAgregarNodoModal(false);
    const handleShowAgregarNodoModal = () => setShowAgregarNodoModal(true);

    const handleCloseAgregarRutaModal = () => setShowAgregarRutaModal(false);
    const handleShowAgregarRutaModal = () => setShowAgregarRutaModal(true);

    const handleCloseAgregarUsuarioModal = () => setShowAgregarUsuarioModal(false);
    const handleShowAgregarUsuarioModal = () => setShowAgregarUsuarioModal(true);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://joinforwater.ngo/wp-content/uploads/2022/05/logo-unl-HC-01-e1651758359420.png" alt="Logo" height="90" />
                </a>
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <h5 className="mb-0">Ruta de evacuación</h5>
                </a>
                <div className="navbar-nav ml-auto">
                    <button className="nav-link btn btn-outline-primary mx-2" onClick={handleShowAgregarNodoModal}>
                        Agregar Nodo
                    </button>
                    <AgregarNodoModal show={showAgregarNodoModal} handleClose={handleCloseAgregarNodoModal} />

                    <button className="nav-link btn btn-outline-primary mx-2" onClick={handleShowAgregarRutaModal}>
                        Agregar Ruta
                    </button>
                    <AgregarRutaModal show={showAgregarRutaModal} handleClose={handleCloseAgregarRutaModal} />
                    
                    <button className="nav-link btn btn-outline-primary mx-2" onClick={handleShowAgregarUsuarioModal}>
                        Agregar Usuario
                    </button>
                    <AgregarUsuarioModal show={showAgregarUsuarioModal} handleClose={handleCloseAgregarUsuarioModal} />
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;
