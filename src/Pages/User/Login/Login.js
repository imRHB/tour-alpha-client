import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
const githubIcon = <FontAwesomeIcon icon={faGithub} />;

const Login = () => {
    const { user, signInWithGoogle, signInWithGithub, logout } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    };

    const handleGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                history.push(redirect_uri);
            })
    };

    return (
        <div className="container my-5 form-container">
            <div className="shadow-sm rounded-3 border border-1 mx-auto user-form">
                {
                    user.email ? <div className="text-center my-4">
                        <h3 className="mb-4 text-primary text-start">Logged in as</h3>
                        <img src={user.photoURL} alt="" className="user-img" />
                        <h3 className="text-success mt-2">{user.displayName}</h3>
                        <p className="text-muted">{user.email}</p>
                        <button className="btn btn-outline-dark my-3" onClick={logout}>Logout</button>
                    </div>
                        : <div>
                            <h3 className="mb-4 text-primary">Login</h3>
                            <div className="text-center my-5">
                                <p>with</p>
                                <button className="btn btn-outline-secondary fs-4 me-4" onClick={handleGoogleLogin}>{googleIcon}</button>
                                <span className="fs-5 me-4">or</span>
                                <button className="btn btn-outline-secondary fs-4" onClick={handleGithubLogin}>{githubIcon}</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Login;