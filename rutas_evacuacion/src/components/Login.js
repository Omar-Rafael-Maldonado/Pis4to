import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica las credenciales quemadas (hardcoded)
        if (email === 'usuario@example.com' && password === '123456') {
            // Simulando una autenticación exitosa
            setLoggedIn(true);
            console.log('¡Inicio de sesión exitoso!');
            // Redirige al usuario a la página de mapas (/map) después del inicio de sesión exitoso
            navigate('/map');
        } else {
            // Simulando autenticación fallida
            console.log('Credenciales incorrectas. Inténtalo de nuevo.');
        }
        
    };
    const handleSignUpClick = () => {
        // Redirige al usuario a la ruta /mapUsuario
        navigate('/map2');
    };
    
    return (
        <div
            className="container-fluid"
            style={{
                backgroundImage: "url('https://www.unl.edu.ec/sites/default/files/galeria/2022/02/b.jpg')",
                backgroundSize: 'cover',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {!loggedIn ? (
                <div className="card p-4">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                    </form>
                    <p className="text-center mt-3">
                        ¿No tienes cuenta?<br/>Ingresa a las rutas de evacuación desde<br/>&nbsp;
                        <button
                            type="button"
                            className="btn btn-link"
                            onClick={handleSignUpClick}
                        >
                            AQUÍ
                        </button>
                    </p>
                </div>
            ) : (
                <div className="card p-4 text-center">
                    <h2>Login exitoso</h2>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Perfil"
                        className="img-thumbnail mx-auto d-block mb-3"
                    />
                    <p>Bienvenido, Usuario</p>
                    {/* Aquí puedes redirigir al usuario a la página principal */}
                </div>
            )}
        </div>
    );
};

export default Login;

